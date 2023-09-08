const database = {
    fish: [
        {   Image: "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg",
            name: "Bart",
            species: "Clownfish",
            size: 3,
            food: "crustaceans",
            harvestLocation: "Sydney, Australia"

        },
        {
            Image: "https://artisticoceans.com/wp-content/uploads/2023/03/direct_uploads2F90542FuKdt5KcFsWfoox4lgNZvMQ2FRegalTang.jpg",
            name: "Dory",
            species: "Blue Tang",
            size: 11 + " inches",
            food: "These fish eat tiny foods like marine algae, brine shrimp, bits of seaweed and other small microorganisms.",
            harvestLocation: "Harvested off the coast of Layton in the Florida Keys."

        },
        {
            Image: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQSpcyO5bYcXUCnR8mq9ABX2xpM4NItomrDshNgn2Lq-n0F84H3TAsymkslQYjaxt99ys8zNSlald9gusA",
            name: "Lacy",
            species: "Pajama Cardinalfish",
            size: 3,
            food:"In nature their diet consists of small crustaceans. In the aquarium they prefer a meaty diet of frozen food such as mysis shrimp and brine shrimp.",
            harvestLocation:"Harvested off the coast of the Ryukyu Islands, Japan." 

        },
        {
            Image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR37AF_v8G_09FiFbYLzp-EtaI1q8nHtfi_h1oM_fVnM4eKD4YPhVnCLw9RwCtmPQAX1yqCVBqtmI6wbd4",
            name: "Flint",
            species: "Purple Firefish",
            size:4,
            food: "In the aquarium they eat live or frozen foods like brine and mysis shrimp, commercial fish foods and algae or veggie based options.",
            harvestLocation: "Harvested off the coast of the French territory of New Caledoniali"

        }
    ]
}
export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}