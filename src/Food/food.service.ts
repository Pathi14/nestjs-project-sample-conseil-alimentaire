import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";

type FoodRange = {
    ageRange: string; // Tranche d'âge à laquelle cette alimentation s'applique
    fruitsLegumes: string[]; // Catégorie de fruits et légumes recommandés
    sourcesProteines: string[]; // Catégorie de sources de protéines recommandées
    produitsLaitiers: string[]; // Catégorie de produits laitiers recommandés
    cerealesLegumineuses: string[]; // Catégorie de céréales et légumineuses recommandées
}

@Injectable()
export class FoodService{
    private foods: FoodRange[] = [
        {
            ageRange: "Moins de 8 ans",
            fruitsLegumes: ["Fruits frais", "Légumes verts"],
            sourcesProteines: ["Viande maigre", "Poisson", "Œufs"],
            produitsLaitiers: ["Lait", "Yaourt", "Fromage"],
            cerealesLegumineuses: ["Riz complet", "Pain complet", "Lentilles"],
        },
        {
            ageRange: "De 8 ans à 15 ans",
            fruitsLegumes: ["Fruits variés", "Légumes colorés"],
            sourcesProteines: ["Poulet", "Pois chiches", "Tofu"],
            produitsLaitiers: ["Lait écrémé", "Fromage blanc", "Beurre"],
            cerealesLegumineuses: ["Quinoa", "Haricots", "Pain complet"],
        },    
        {
            ageRange: "De 15 ans à 30 ans",
            fruitsLegumes: ["Fruits et légumes frais de saison"],
            sourcesProteines: ["Viande maigre", "Poisson", "Légumineuses"],
            produitsLaitiers: ["Yaourt grec", "Fromage à pâte dure", "Lait d'amande"],
            cerealesLegumineuses: ["Riz basmati", "Quinoa", "Pâtes complètes"],
        },
        {
            ageRange: "De 30 ans à 50 ans",
            fruitsLegumes: ["Fruits de toutes sortes", "Légumes verts à feuilles"],
            sourcesProteines: ["Poisson gras", "Poulet", "Œufs"],
            produitsLaitiers: ["Fromages affinés", "Yaourt nature", "Lait de soja enrichi"],
            cerealesLegumineuses: ["Avoine", "Blé complet", "Haricots rouges"],
        },
        {
            ageRange: "50 ans et plus",
            fruitsLegumes: ["Fruits rouges", "Légumes riches en fibres"],
            sourcesProteines: ["Légumes secs", "Poissons maigres", "Viande maigre"],
            produitsLaitiers: ["Fromages à pâte dure", "Lait fermenté", "Yaourt au bifidus"],
            cerealesLegumineuses: ["Épeautre", "Lentilles", "Pain de seigle"],
        }
    ]

    constructor(private userService: UserService) {}

    getFoodRange(): FoodRange[] {
        return this.foods;
    }

    // Recherche du FoodRange correspondant à un utilisateur
    getFoodUser(username: string): FoodRange | undefined {
        const user = this.userService.getByName(username); 
    
        if (user) { 
            const age = user.age;
            if (0 <= age && age < 8) { 
                return this.foods[0];
            } else if (8 <= age && age < 15) {
                    return this.foods[1];
            } else if (15 <= age && age < 30) { 
                return this.foods[2];
            } else if (30 <= age && age < 50) { 
                return this.foods[3];
            } else if (50 <= age) { 
                return this.foods[4];
            }
        }
    
        return undefined; 
    }
    
}

