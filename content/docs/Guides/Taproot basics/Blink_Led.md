---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC3TT7V3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfNXj7ewYmMX3yoz2GAsW3AICoR0R4s95GFjXLEtuxXQIgD1eQ%2FYv4LuZbNbh0K3RAfy1WFtszGt%2FIeSZ0PuchQdEq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDLuwEt9JdGHxl9Fo2yrcAyO0yAXDuRyZao3Cy4wAQE3S1OnYQtOKBUYyDCkKFYEUc842WsYz02%2FXITkN%2BPUirqpAJrAWFucFqlsZ4wi29JAAasSsCP8MKIwqMD6M0%2BMR9D9Z6RC7PgAqBSFX8TPLEUELJ%2BX33ouGxWZ4eDVx%2F0kYSrI6qhk%2Fwr7gew%2FWbE05bgnFRFhNx9OYyFGorZswVtYuAAmnM378KWrna2AZ0FpTrepLc%2FP2PFmNDzESdGiMAzu2v%2B3wEk6353A1xkq8JO%2BTp3%2FIdKy5os5UIXOhQTd2NLlDxF8JR9hHa9eB64IhT1MG%2BSDnlkhbigwvIGdopVrMpe8N4IOtMC7SMuFRTJ6HmsT4AQJHHjmYlNWtZYYOKcSkNsiWGFeGKFKbKkxs9ni6ZSZtob63JgVFwXj8Mgbpf9ZCD7aWEEyPMT7kB85LlduAqGyKaDOT7zZCOZXTQbfehavUIL4kSmLgNi4bWH8TIFe6nTF570wBKXN%2BkBjS1UcxWi8GPQoxWyV%2BeI5RmKnvwEWPPlcJ4MJ4thsGfR8LIqPpmnZLakxzAQ7Le9k2op70gN1%2BR2IOUccgijCCH6SVbLsIThbhHCXwEY2kfVNP4iy%2BQswGeHL4PnXat4DTCcGd%2FyZef6WqSQmvMPmDzb8GOqUBeZJHDIooVYJiM2%2FPycuEegyU9mu1ImK3XzYfRIYAOHd3WM4AyeFHhzkvloT%2Bn7yjkNbezkTbfRuit5%2B1MNai4ONLAnqb8YRMIwLCQfZcJzDQKl%2BA9RijPQMk9Vs2bcKXG2kPZ%2FUULYN4WfemE8qjoSgukQ53xAjKZsondolraeG5cNsXNAs3j%2FKrySCjCdx2jnI%2Bb6PWnWfUlAzSpIXka%2FZpnocb&X-Amz-Signature=9199d6c2bd56d2b5f86b222845b934798048e81adc6ed308539a9183ef2be8f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H5HTAMI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T032826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKVlW2sgDygK8aDKdb0rfO2G8E2VKFRqd6bYMDudzpQAiEA6Iz3kAyqF%2BxvulnHUppI881GMiYgKv5W00rR5xAjBA8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKo9mbPq%2BoEsewoXcCrcAwDWXe65mp4oRgvvk4bFS9BHTpRmg%2B6hqv8ew3nF7evN7FY9k890thBqCZMw2604f6H7JP2YxHbZYRtAnKMBuvlO1XcbrJWEvmPAI6BCePUFxQZ0CGWUS5JpWOpZuXez4C8r0AdcLbCEgUSnDw1bYiDJaK9ZdsuVBqAbc7EPDhrEmH0Yg3gDDv3aAaTsRD1GKZmU2YwfCk5Jt5LHZqgscMaF%2FzxDoJZi4SVZa9BaT%2Bwf2IDGM67yBfl1ZDb29Lxi6o%2FZeVosTJgsmpGiKdUHIbK3joo8U%2Fb6mM0UtmvmLShRbYp66Iy6hPhuzsdKsRW%2BqFVjIk3jY1X%2Bo5kTnjSGx6H30Gk%2B0jqxpt6SMxObXUpOzrgT3fwqcyC4EZzRkBIXHGF%2FX8i1jEWMm09cHsJDRbLdIa%2FQk6IMz%2BKgztqtbf7sZpjPfOQVxnAsK1odp3xOtnGLQsUqmmiIxCUKmGSbydIESqSd1xR7acD51B3ABRI80Mi16ZC4n8TnpRS%2B3LEfEEEXcVnj2knAqfUBrCsXObpc8CJaTBwoPIA1MtrVYQVtVQcSVJUCeUWGW9SPDaijKnbzuywq1wg4%2FtYkamHzdo%2FJwovbQV5fA493keA%2FVQ7wS29NSpt%2BHrf0M72iMKuDzb8GOqUBDojWfLFt7Ix2LyNwO82Twvp02%2FaiglhvvfaROZiRGf4cJNdh81Dxgtk53nyqM5tP0Fc2ag7a5zQ2SHj%2BncpMYMq7%2BxRlB5dWa82OYMc6PR1lPo3o%2BCsPUSe%2FKz2BwFTnUV8f%2B61yYjY8OyRG4aX7OzoOsh0B0dDLm%2FvIKNj4OCVHmW33zoMohMvobh84cXAIqN%2FAihl%2FZ6YGLMMlDHEKwHbl0K9k&X-Amz-Signature=8168b707f837ee23dba6289731a0c2df2cde741d69451ed6cf777d5650198e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
