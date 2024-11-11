import {
    Option,
    weekOption,
    TravelModeOption,
    DayofWeekOption,
    analysisType,
    GroupedOption,
    analysisLevel,
    GroupedOptions,
    TripPurposeOption
} from "../Types";
import { DSVRowString } from "d3-dsv";
import { useEffect } from "react";
import { csv } from "d3";

export const GenderOptions: Option[] = [
    {
        value: "Male",
        label: "Male",
        id: "female",
        val: "0.0",
        groupId: "Gender",
    },
    {
        value: "Female",
        label: "Female",
        id: "female",
        val: "1.0",
        groupId: "Gender",
    },

];

export const WeekOptions: weekOption[] = [
    {
        value: "All",
        label: "All",
        id: "weekday",
    },
    {
        value: "Weekday",
        label: "Weekday",
        id: "weekday",
        val: "1.0",
        groupId: "Weekday",
    },
    {
        value: "Weekend",
        label: "Weekend",
        id: "weekday",
        val: "0.0",
        groupId: "Weekend",
    },
];

export const AnalysisLevels: analysisLevel[]=[
    {
        label: "Person",
        value: "person",
    },
    {
        label: "Trip",
        value: "trip",
    }
]

export const AnalysisTypes: analysisType[]=[
    {
        label: "Between Year",
        value: "betweenyear",
    },
    {
        label: "Cross Segment",
        value: "crosssegment",
    }
]

export const TravelModeOptions: TravelModeOption[] = [
    {
        label: "Auto",
        value: "Auto",
        numberTrip: "mode_car",
        durationTrips: "mode_car_dur",
    },
    {
        label: "Transit",
        value: "Transit",
        numberTrip: "mode_pt",
        durationTrips: "mode_pt_dur",
    },
    {
        label: "Walk",
        value: "Walk",
        numberTrip: "mode_walk",
        durationTrips: "mode_walk_dur",
    },
    {
        label: "Bike",
        value: "Bike",
        numberTrip: "mode_bike",
        durationTrips: "mode_bike_dur",
    },
    {
        label: "Other",
        value: "Other",
        numberTrip: "mode_other",
        durationTrips: "mode_other_dur",
    },
    {
        label: "Unknown",
        value: "Unknown",
        numberTrip: "mode_unknown",
        durationTrips: "mode_unknown_dur",
    },
    {
        label: "All",
        value: "All",
        numberTrip: "tr_all",
        durationTrips: "tr_all_dur",
    },
];

export const TripPurposeOptions: TripPurposeOption[] = [
    {
        label: "All",
        value: "All",
        numberTrip: "tr_all",
        durationTrips: "tr_all_dur",
    },
    {
        label: "Work",
        value: "Work",
        numberTrip: "tr_work",
        durationTrips: "tr_work_dur",
    },
    {
        label: "Education",
        value: "Education",
        numberTrip: "tr_educ",
        durationTrips: "tr_educ_dur",
    },
    {
        label: "Shopping",
        value: "Shopping",
        numberTrip: "tr_shop",
        durationTrips: "tr_shop_dur",
    },
    {
        label: "Recreational",
        value: "Recreational",
        numberTrip: "tr_rec",
        durationTrips: "tr_rec_dur",
    },
    {
        label: "Social",
        value: "Social",
        numberTrip: "tr_soc",
        durationTrips: "tr_soc_dur",
    },
    {
        label: "Eating/Drinking",
        value: "Eating/Drinking",
        numberTrip: "tr_eat",
        durationTrips: "tr_eat_dur",
    },
    {
        label: "Adult or Child care",
        value: "Adult or Child care",
        numberTrip: "tr_ccare",
        durationTrips: "tr_ccare_dur",
    },
    {
        label: "Other",
        value: "Other",
        numberTrip: "tr_other",
        durationTrips: "tr_other_dur",
    },
    {
        label: "Return to home",
        value: "Return to home",
        numberTrip: "tr_home",
        durationTrips: "tr_home_dur",
    },
];


export const DayofWeek: DayofWeekOption[] = [
    {
        label: "Monday",
        value: "Monday",
        id: "day",
        val: "2.0",
        groupId: "Weekday",
    },
    {
        label: "Tuesday",
        value: "Tuesday",
        id: "day",
        val: "3.0",
        groupId: "Weekday",
    },
    {
        label: "Wednesday",
        value: "Wednesday",
        id: "day",
        val: "4.0",
        groupId: "Weekday",
    },
    {
        label: "Thursday",
        value: "Thursday",
        id: "day",
        val: "5.0",
        groupId: "Weekday",
    },
    {
        label: "Friday",
        value: "Friday",
        id: "day",
        val: "6.0",
        groupId: "Weekday",
    },
    {
        label: "Saturday",
        value: "Saturday",
        id: "day",
        val: "7.0",
        groupId: "Weekend",
    },
    {
        label: "Sunday",
        value: "Sunday",
        id: "day",
        val: "1.0",
        groupId: "Weekend",
    },
];


export const useDocumentTitle = (pageTitle: string) => {
    useEffect(() => {
        const initialTitle = 'Mobility Dashboard';
        document.title = `${initialTitle} | ${pageTitle}`;
    }, [pageTitle]);
};

export const AgeOptions: Option[] = [
    {
        value: "15 to 19 years",
        label: "15 to 19 years",
        id: "age_15_19",
        val: "1.0",
        groupId: "Age",
    },
    {
        value: "20 to 29 years",
        label: "20 to 29 years",
        id: "age_20_29",
        val: "1.0",
        groupId: "Age",
    },
    {
        value: "30 to 49 years",
        label: "30 to 49 years",
        id: "age_30_49",
        val: "1.0",
        groupId: "Age",
    },
    {
        value: "50 to 64 years",
        label: "50 to 64 years",
        id: "age_50_64",
        val: "1.0",
        groupId: "Age",
    },
    {
        value: "65 years or older",
        label: "65 years or older",
        id: "age_65p",
        val: "1.0",
        groupId: "Age",
    },
];

export const EducationOptions: Option[] = [
    {
        value: "Less than high school",
        label: "Less than high school",
        id: "less_than_hs",
        val: "1.0",
        groupId: "Education",
    },
    {
        value: "High school",
        label: "High school",
        id: "hs_grad",
        val: "1.0",
        groupId: "Education",
    },
    {
        value: "Some college degree",
        label: "Some college degree",
        id: "some_col_assc_deg",
        val: "1.0",
        groupId: "Education",
    },
    {
        value: "Bachelor's degree",
        label: "Bachelor's degree",
        id: "bachelor",
        val: "1.0",
        groupId: "Education",
    },
    {
        value: "Graduate degree(s)",
        label: "Graduate degree(s)",
        id: "grad_sch",
        val: "1.0",
        groupId: "Education",
    },
];

export const RaceOptions: Option[] = [
    {
        value: "Asian",
        label: "Asian",
        id: "asian",
        val: "1.0",
        groupId: "Race",
    },
    {
        value: "Black",
        label: "Black",
        id: "black",
        val: "1.0",
        groupId: "Race",
    },
    {
        value: "White",
        label: "White",
        id: "white",
        val: "1.0",
        groupId: "Race",
    },
    {
        value: "Other",
        label: "Other",
        id: "race_other",
        val: "1.0",
        groupId: "Race",
    },
];

export const EmploymentStatusOptions: Option[] = [
    {
        value: "Full-time worker",
        label: "Full-time worker",
        id: "full_time",
        val: "1.0",
        groupId: "Employment",
    },
    {
        value: "Part-time worker",
        label: "Part-time worker",
        id: "part_time",
        val: "1.0",
        groupId: "Employment",
    },
    {
        value: "Non-worker",
        label: "Non-worker",
        id: "unemployed",
        val: "1.0",
        groupId: "Employment",
    },
];

export const IncomeOptions: Option[] = [
    {
        value: "<$35K",
        label: "<$35K",
        id: "inc_up35",
        val: "1.0",
        groupId: "Income",
    },
    {
        value: "$35K to $50K",
        label: "$35K to $50K",
        id: "inc_35_50",
        val: "1.0",
        groupId: "Income",
    },
    {
        value: "$50K to $75K",
        label: "$50K to $75K",
        id: "inc_50_75",
        val: "1.0",
        groupId: "Income",
    },
    {
        value: "$75K to $100K",
        label: "$75K to $100K",
        id: "inc_75_100",
        val: "1.0",
        groupId: "Income",
    },
    {
        value: ">$100K",
        label: ">$100K",
        id: "inc_100p",
        val: "1.0",
        groupId: "Income",
    },
];

export const HouseholdSize: Option[] = [
    {
        value: "One",
        label: "One",
        id: "hhsize_1",
        val: "1.0",
        groupId: "HouseholdSize",
    },
    {
        value: "Two",
        label: "Two",
        id: "hhsize_2",
        val: "1.0",
        groupId: "HouseholdSize",
    },
    {
        value: "Three or more",
        label: "Three or more",
        id: "hhsize_3p",
        val: "1.0",
        groupId: "HouseholdSize",
    },
];

const CensusDivisionOptions: Option[] = [
    {
        value: "New England",
        label: "New England",
        id: "division",
        val: '1.0',
        groupId: "CensusDivision",
    },
    {
        value: "Middle Atlantic",
        label: "Middle Atlantic",
        id: "division",
        val: '2.0',
        groupId: "CensusDivision",
    },
    {
        value: "East North Central",
        label: "East North Central",
        id: "division",
        val: '3.0',
        groupId: "CensusDivision",
    },
    {
        value: "West North Central",
        label: "West North Central",
        id: "division",
        val: '4.0',
        groupId: "CensusDivision",
    },
    {
        value: "South Atlantic",
        label: "South Atlantic",
        id: "division",
        val: '5.0',
        groupId: "CensusDivision",
    },
    {
        value: "East South Central",
        label: "East South Central",
        id: "division",
        val: '6.0',
        groupId: "CensusDivision",
    },
    {
        value: "West South Central",
        label: "West South Central",
        id: "division",
        val: '7.0',
        groupId: "CensusDivision",
    },
    {
        value: "Mountain",
        label: "Mountain",
        id: "division",
        val: '8.0',
        groupId: "CensusDivision",
    },
    {
        value: "Pacific",
        label: "Pacific",
        id: "division",
        val: '9.0',
        groupId: "CensusDivision",
    }
];

const LocationOptions: Option[] = [
    {
        value: "Urban",
        label: "Urban",
        id: "non_metropolitan",
        val: "0.0",
        groupId: "Location",
    },
    {
        value: "Not urban",
        label: "Not urban",
        id: "non_metropolitan",
        val: "1.0",
        groupId: "Location",
    },
];

export const WorkArrangementOptions: Option[] = [
    {
        value: "Workers with zero work",
        label: "Workers with zero work",
        id: "zero_work",
        val: "1.0",
        groupId: "Work Arrangement",
    },
    {
        value: "In-home only workers",
        label: "In-home only workers",
        id: "only_inhome_worker",
        val: "1.0",
        groupId: "Work Arrangement",
    },
    {
        value: "Multi-site workers",
        label: "Multi-site workers",
        id: "multisite_worker",
        val: "1.0",
        groupId: "Work Arrangement",
    },
    {
        value: "Commuters only",
        label: "Commuters only",
        id: "commuter_only",
        val: "1.0",
        groupId: "Work Arrangement",
    },
    {
        value: "Non-worker",
        label: "Non-worker",
        id: "unemployed",
        val: "1.0",
        groupId: "Work Arrangement",
    },
];

const TimePovertyOptions: Option[] = [
    {
        value: "Time poor",
        label: "Time poor",
        id: "time_poor",
        val: "1.0",
        groupId: "TimePoverty",
    },
    {
        value: "Not time poor",
        label: "Not time poor",
        id: "time_poor",
        val: "0.0",
        groupId: "TimePoverty",
    },
];

const TransportOptions: Option[] = [
    {
        value: "Auto",
        label: "Auto",
        id: "car_user",
        val: "1.0",
        groupId: "Transport",
    },
    {
        value: "Non-auto",
        label: "Non-auto",
        id: "car_user",
        val: "0.0",
        groupId: "Transport",
    },
];

const TripMakingOptions: Option[] = [
    {
        value: "One or more trips",
        label: "One or more trips",
        id: "zero_trip",
        val: "0.0",
        groupId: "ZeroTrip",
    },
    {
        value: "Zero trip",
        label: "Zero trip",
        id: "zero_trip",
        val: "1.0",
        groupId: "ZeroTrip",
    },
];

export const groupedOptions: GroupedOption[] = [
    {
        label: "Gender",
        options: GenderOptions.map((obj) => ({
            ...obj,
            groupName: "Gender",
        })),
    },
    {
        label: "Age",
        options: AgeOptions.map((obj) => ({
            ...obj,
            groupName: "Age",
        })),
    },
    {
        label: "Education",
        options: EducationOptions.map((obj) => ({
            ...obj,
            groupName: "Education",
        })),
    },
    {
        label: "Race",
        options: RaceOptions.map((obj) => ({
            ...obj,
            groupName: "Race",
        })),
    },
    {
        label: "Employment",
        options: EmploymentStatusOptions.map((obj) => ({
            ...obj,
            groupName: "Employment",
        })),
    },
    {
        label: "Household income",
        options: IncomeOptions.map((obj) => ({
            ...obj,
            groupName: "Household income",
        })),
    },
    {
        label: "Household size",
        options: HouseholdSize.map((obj) => ({
            ...obj,
            groupName: "Household size",
        })),
    },
    {
        label: "Census division",
        options: CensusDivisionOptions.map((obj) => ({
            ...obj,
            groupName: "Census division",
        })),
    },
    {
        label: "Location",
        options: LocationOptions.map((obj) => ({
            ...obj,
            groupName: "Location",
        })),
    },
    {
        label: "Work arrangement",
        options: WorkArrangementOptions.map((obj) => ({
            ...obj,
            groupName: "Work arrangement",
        })),
    },

    {
        label: "Time poverty status",
        options: TimePovertyOptions.map((obj) => ({
            ...obj,
            groupName: "Time poverty status",
        })),
    },
    {
        label: "Main mode of transportation",
        options: TransportOptions.map((obj) => ({
            ...obj,
            groupName: "Main mode of transportation",
        })),
    },
    {
        label: "Trip making status",
        options: TripMakingOptions.map((obj) => ({
            ...obj,
            groupName: "Trip making status",
        })),
    },
];

// Singleton class for data management

export class DataProvider {
    private static instance: DataProvider;
    private data: DSVRowString<string>[] | null = null;
    private loadingPromise: Promise<DSVRowString<string>[]> | null = null; // Async lock

    private constructor() { }

    public static getInstance(): DataProvider {
        if (!DataProvider.instance) {
            DataProvider.instance = new DataProvider();
        }
        return DataProvider.instance;
    }

    public async loadData(): Promise<DSVRowString<string>[]> {
        if (this.data !== null) {
            return this.data; // Return the data if it's already loaded
        }
        if (this.loadingPromise) {
            return this.loadingPromise; // Return the existing loading promise if it's already loading
        }
        this.loadingPromise = this.loadFromSource().finally(() => {
            this.loadingPromise = null; // Clear the loading promise after it's done
        });
        return this.loadingPromise;
    }

    private async loadFromSource(): Promise<DSVRowString<string>[]> {
        try {
            this.data = await csv('https://raw.githubusercontent.com/tomnetutc/t3d/main/public/df_time_use.csv');
        } catch (error) {
            console.error('Error loading data:', error);
            throw error;
        }
        return this.data;
    }
}

export const fetchAndFilterData = async (dataProvider: { loadData: () => Promise<any[]> }, selectedOptions: Option[], year: string, weekOption: weekOption, toggleState: boolean, filterUnemployed: boolean = false) => {
    try {
        const data = await dataProvider.loadData();
        return data.filter(filterCriteria(selectedOptions, year, weekOption, toggleState, filterUnemployed));
    } catch (error) {
        console.error('Error fetching and filtering data:', error);
        return [];
    }
    //Added a conditional argument filterunemployed to filter the data without the unemployed data for Telework dashboard. This is a conditional argument hence by default it is false and doesn't expect a value
};

export const fetchAndFilterDataForBtwYearAnalysis = async (dataProvider: { loadData: () => Promise<any[]> }, selectedOptions: Option[], weekOption: weekOption, toggleState: boolean, filterUnemployed: boolean = false) => {
    try {
        const data = await dataProvider.loadData();
        return data.filter(filterCriteria(selectedOptions, "", weekOption, toggleState, filterUnemployed));
    } catch (error) {
        console.error('Error fetching and filtering data for between year analysis:', error);
        return [];
    }
}

export function filterCriteria(selectedOptions: Option[], year: string, weekOption: weekOption, toggleState: boolean, filterUnemployed: boolean = false) {
    return function (row: DSVRowString<string>) {
        if (year && row['year'] !== year) return false;

        if (weekOption.value !== "All") {
            if (row[weekOption.id] !== weekOption.val) return false;
        }

        //Filter the data without the unemployed data for Telework dashboard. This is a conditional argument hence by default it is false and doesn't expect a value
        if (filterUnemployed && row['unemployed'] === "1.0") return false;

        if (!toggleState && row['month'] === "12.0") return false;

        const groupedOptions = selectedOptions.reduce((acc: GroupedOptions, option) => {
            const groupId = option.groupId;
            acc[groupId] = acc[groupId] || [];
            acc[groupId].push(option);
            return acc;
        }, {});

        return Object.values(groupedOptions).every((group: Option[]) => {
            return group.some(option => {
                const column = option.id;
                const value = option.val;
                return row[column] === value;
            });
        });
    };
}

export class TravelDataProvider {
    private static instance: TravelDataProvider;
    private data: DSVRowString<string>[] | null = null;
    private loadingPromise: Promise<DSVRowString<string>[]> | null = null; // Async lock

    private constructor() { }

    public static getInstance(): TravelDataProvider {
        if (!TravelDataProvider.instance) {
            TravelDataProvider.instance = new TravelDataProvider();
        }
        return TravelDataProvider.instance;
    }

    public async loadData(): Promise<DSVRowString<string>[]> {
        if (this.data !== null) {
            return this.data; // Return the data if it's already loaded
        }
        if (this.loadingPromise) {
            return this.loadingPromise; // Return the existing loading promise if it's already loading
        }
        this.loadingPromise = this.loadFromSource().finally(() => {
            this.loadingPromise = null; // Clear the loading promise after it's done
        });
        return this.loadingPromise;
    }

    private async loadFromSource(): Promise<DSVRowString<string>[]> {
        try {
            this.data = await csv('https://raw.githubusercontent.com/tomnetutc/t3d/main/public/df_travel.csv');
        } catch (error) {
            console.error('Error loading data:', error);
            throw error;
        }
        return this.data;
    }
}

export const CrossSegmentDataFilter = async (dataProvider: { loadData: () => Promise<any[]> }, startYear: string, endYear: string, weekOption: weekOption, toggleState: boolean, filterUnemployed: boolean = false) => {

    try {
        const data = await dataProvider.loadData();
        const startYearNum = parseInt(startYear, 10);
        const endYearNum = parseInt(endYear, 10);

        const filteredData = data.filter(row => {
            const year = row.year;
            const yearNum = parseInt(year, 10);
            const month = row['month'];

            if (!(startYear && yearNum >= startYearNum && endYear && yearNum <= endYearNum)) return false;

            // Toggle state and month filter
            if (!toggleState && month === "12.0") return false;

            if (filterUnemployed && row['unemployed'] === "1.0") return false;

            if (weekOption.value !== "All") {
                if (row[weekOption.id] !== weekOption.val) return false;
            }

            return true;
        });

        // Return the filtered dataset
        return filteredData;
    } catch (error) {
        console.error('Error fetching and filtering data:', error);
        return [];
    }

};







