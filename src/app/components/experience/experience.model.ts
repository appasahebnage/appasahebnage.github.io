export interface Experience {
    position: string;
    startDate: string;
    endDate: string;
    duration: string;
    points: string[];
}

export const CompanyNames = {
    OptimizeAds: "OptimizeAds",
    Hypelinks: "Hypelinks",
    DemandHelm: "DemandHelm"
}

export type CompanyNames =
    (typeof CompanyNames)[keyof typeof CompanyNames];

export type CompanyExperience = {
    companyName: CompanyNames,
    duration: string;
    location: string;
    logo: string;
    website: string;
    experiences: Experience[]
}
