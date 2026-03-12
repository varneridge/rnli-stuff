// RNLI Atlantic 85 Training — Configuration
// moduleNames: display names for each module ID
// roles: training pathway definitions (id, name, stage, track, desc, modules[])
// Edit entries directly, then save and refresh the browser.

const CONFIG_DATA = {
  "moduleNames": {
    "1.1.1": "Personal Protective Equipment (PPE)",
    "1.2.1": "Hazard Awareness",
    "1.2.2": "Manual Handling",
    "1.2.3": "Hazardous Substances",
    "1.2.4": "Noise and Vibration",
    "1.2.5": "Fire Safety",
    "1.2.6": "Personal Safety and Wellbeing",
    "1.2.7": "Safe to the Shout",
    "1.2.8": "Electrical Safety",
    "1.2.9": "Lone Working",
    "1.2.10": "Safeguarding",
    "1.2.11": "Data Protection",
    "1.3.1": "SAR Unit Layout",
    "1.4.1": "Roles and Responsibilities 1",
    "1.4.2": "Roles and Responsibilities (Navigator)",
    "1.4.3": "Roles and Responsibilities (Command)",
    "1.5.1": "SAR Unit Firefighting",
    "1.5.2": "Manage SAR Unit Firefighting",
    "1.6.1": "Emergency and Survival Procedures",
    "1.6.2": "Manage Emergency Procedures",
    "1.7.1": "Pyrotechnics",
    "1.8.1": "Risk Assessment",
    "1.9.1": "Restricted and Confined Spaces",
    "1.10.1": "Working at Height",
    "3.1.1": "Launch Procedures (Afloat)",
    "3.1.2": "Recovery Procedures (Afloat)",
    "3.1.3": "Manage Launch and Recovery (Afloat)",
    "3.2.1": "Launch Procedures (Shore)",
    "3.2.2": "Recovery Procedures (Shore)",
    "3.2.3": "Manage Launch and Recovery (Shore)",
    "3.3.1": "Plant Operator",
    "3.4.1": "Authorising Launches",
    "3.4.2": "Launch Vehicle Driver",
    "3.4.3": "Tractor Operations",
    "4.1.1": "Lookout",
    "4.1.2": "Watchkeeping (IRPCS)",
    "4.1.3": "IRPCS (Command)",
    "4.2.1": "Rope Handling",
    "4.3.1": "Anchoring",
    "4.3.2": "Manage Anchoring",
    "4.4.1": "Veering Down",
    "4.4.2": "Manage Veering Down",
    "4.5.1": "Towing",
    "4.5.2": "Manage Towing",
    "4.6.1": "Stability Introduction",
    "4.6.2": "Hydrology and Hull Types",
    "4.7.1": "Helming 1",
    "4.7.2": "Helming 2",
    "4.7.3": "Mooring and Berthing",
    "4.8.1": "Breeches Buoy",
    "4.9.1": "Daughter Craft",
    "4.10.1": "Helicopter Operations",
    "4.10.2": "Manage Helicopter Operations",
    "5.1.1": "Locate and Assist 1",
    "5.1.2": "Locate and Assist 2",
    "5.2.1": "Plan SAR",
    "5.3.1": "Manage SAR",
    "5.4.1": "Manage Operational Services",
    "5.5.1": "SAR Coordination",
    "5.5.2": "SAR Planning Advanced",
    "5.5.4": "Multi-Agency Operations",
    "5.5.5": "Mass Rescue Operations",
    "5.5.6": "SAR Review",
    "6.1.1": "Operate VHF",
    "6.1.2": "SAR Communication",
    "6.2.1": "GMDSS Operations",
    "7.1.1": "Navigation Introduction",
    "7.1.2": "Navigation",
    "7.1.3": "Navigation Advanced",
    "7.2.1": "E Navigation",
    "7.2.2": "E Navigation Advanced",
    "7.3.1": "Radar",
    "7.4.1": "Local Knowledge (Ashore)",
    "7.4.2": "Local Knowledge (Afloat)",
    "7.4.3": "Local Knowledge (Command)",
    "CC.1": "Casualty Care",
    "9.1.2": "Operate ILB Main Machinery"
  },
  "roles": [
    {
      "id": "s1",
      "name": "Safety and Induction",
      "stage": "Stage 1",
      "track": "shore",
      "desc": "Foundation safety training completed by all crew before progressing to any role. Covers hazard awareness, manual handling, fire safety, personal wellbeing, and first aid.",
      "modules": [
        "1.2.1",
        "1.2.2",
        "1.2.3",
        "1.2.4",
        "1.2.5",
        "1.2.6",
        "1.2.7",
        "1.10.1"
      ]
    },
    {
      "id": "sc",
      "name": "Shore Crew",
      "stage": "Stage 2",
      "track": "shore",
      "desc": "The team on the ground that makes launch and recovery possible. Covers PPE, launch/recovery procedures, rope handling, VHF communications, navigation basics, and local knowledge. On completion, you achieve Shore Crew Pass Out status.",
      "modules": [
        "1.1.1",
        "1.4.1",
        "1.7.1",
        "3.2.1",
        "3.2.2",
        "4.2.1",
        "6.1.1",
        "7.1.1",
        "7.4.1"
      ]
    },
    {
      "id": "la",
      "name": "Launch Authority",
      "stage": "Stage 2",
      "track": "shore",
      "desc": "Responsible for authorising the launch of the lifeboat and managing the operational service from ashore. Requires risk assessment capability, navigation awareness, and command-level decision-making skills.",
      "modules": [
        "1.1.1",
        "1.4.1",
        "1.4.3",
        "1.8.1",
        "3.4.1",
        "5.4.1",
        "6.1.1",
        "7.1.1",
        "7.4.1",
        "7.4.3"
      ]
    },
    {
      "id": "hl",
      "name": "Head Launcher",
      "stage": "Stage 3",
      "track": "shore",
      "desc": "Commands all shore-side operations during launch and recovery. You and the Helm operate as co-equal commanders — you own the shore, the Helm owns the water. Must demonstrate Communication, Decision Making, Teamwork, and Situational Awareness.",
      "modules": [
        "1.4.3",
        "1.5.1",
        "1.8.1",
        "3.2.3",
        "3.3.1",
        "7.4.3"
      ]
    },
    {
      "id": "b1",
      "name": "Safety and Induction",
      "stage": "Stage 1",
      "track": "boat",
      "desc": "Foundation safety training completed by all crew before progressing to any role. Covers hazard awareness, manual handling, fire safety, personal wellbeing, and first aid.",
      "modules": [
        "1.2.1",
        "1.2.2",
        "1.2.3",
        "1.2.4",
        "1.2.5",
        "1.2.6",
        "1.2.7",
        "1.10.1"
      ]
    },
    {
      "id": "stga",
      "name": "Safe to Go Afloat",
      "stage": "Stage 2",
      "track": "boat",
      "desc": "The stage that puts you on the boat. Completing PPE and SAR Unit Layout means you are judged safe to step onto the Atlantic 85 for supervised training afloat. Your PPE is the only thing between you and the sea.",
      "modules": [
        "1.1.1",
        "1.3.1"
      ]
    },
    {
      "id": "stgs",
      "name": "Safe to Go on a Service",
      "stage": "Stage 3",
      "track": "boat",
      "desc": "Makes you operationally deployable. Covers firefighting, emergency procedures, pyrotechnics, launch/recovery from afloat, lookout duties, and rope handling. After this stage you can be tasked on a service.",
      "modules": [
        "1.5.1",
        "1.6.1",
        "1.7.1",
        "3.1.1",
        "3.1.2",
        "4.1.1",
        "4.2.1"
      ]
    },
    {
      "id": "t1",
      "name": "Tier 1 Crew",
      "stage": "Stage 4",
      "track": "boat",
      "desc": "You become useful. The seamanship skills — anchoring, veering, towing, and mooring — are taught as step-by-step procedures. Each has a setup phase, execution phase, and recovery phase. The order matters.",
      "modules": [
        "1.4.1",
        "4.3.1",
        "4.4.1",
        "4.5.1",
        "4.6.1",
        "4.7.3",
        "5.1.1",
        "6.1.1",
        "7.4.2"
      ]
    },
    {
      "id": "t2",
      "name": "Tier 2 Crew",
      "stage": "Stage 5",
      "track": "boat",
      "desc": "The last stage before Navigator or Command. Gives you the ability to take the helm, work with helicopters, understand sea behaviour, apply collision regulations, conduct risk assessments, and navigate.",
      "modules": [
        "1.8.1",
        "4.1.2",
        "4.6.2",
        "4.7.1",
        "4.10.1",
        "7.1.1"
      ]
    },
    {
      "id": "nav",
      "name": "Navigator",
      "stage": "Navigator",
      "track": "boat",
      "desc": "The person who knows where the boat is, where it needs to go, and what lies between the two. Responsible for safe navigation of the SAR unit at all times — on passage, exercise, and service.",
      "modules": [
        "1.4.2",
        "4.1.3",
        "5.1.2",
        "5.2.1",
        "7.1.2",
        "7.1.3",
        "7.2.1",
        "7.2.2",
        "7.3.1"
      ]
    },
    {
      "id": "helm",
      "name": "Helm Command",
      "stage": "Command",
      "track": "boat",
      "desc": "The final role. As Helm, you are in command of the SAR unit, the crew, and the operation. Every decision made afloat is your decision. Every risk taken is your risk. Every life saved or lost is on your watch.",
      "modules": [
        "1.4.3",
        "1.5.2",
        "1.6.2",
        "3.1.3",
        "4.3.2",
        "4.4.2",
        "4.5.2",
        "4.7.2",
        "4.10.2",
        "5.3.1",
        "6.1.2",
        "7.4.3",
        "9.1.2"
      ]
    }
  ]
};
