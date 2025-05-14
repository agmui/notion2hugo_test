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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6L3YKNT%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIClNajwy1PAS5KH1NSoVNKMLU05UvZ8fjE%2BUGdgww5xNAiBVVO0AtFSJJfECw0%2FVJfaxSakK1mHRHoLgiWPrAFaSqir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMQd%2F4SjJzFemlqOZBKtwD2hJroo95FNbdk6MB8zk592mbsd4yTJZoD6WoSVPQ7b%2FGliG%2FkEY1jPhf2TEDN8Uf61KKSxoRbN%2BDYYsJQtk4t61%2BhvU9aXbjgG6QumxXTIxKX15wW%2BKDa7%2B0028sSnvjv4G6eBrcbL%2BUMmaPH7Js9ZvuIs3Fd2T%2B3zYoUzPeLcEjPGgWnoRBHFmusFEU7mXpKrtMryI%2FgVxJ8c0ZyZhWaDzMk6vHo84wFEoehoMYUjbcrdZgtRJCHgG3gpWAN4ZQ09Op%2Fadha02tjkzsWJsN3gdHqRLUvoAFthZE0%2F0YKWaY0R2I%2FwXx7mL%2BLkMUI929ZKJIIH%2FGXgnY9ZLcMyEfow%2FB70AtkI2cZG%2FjhPiHxC6QVILD%2FGtSNF3gDLExleaAKr55S%2FsPLujGDp%2FI7SKQfv7UeZ9e%2FomjyBYO3mexmJtt8t86OrshhlabC4P%2FUH1PMXHEwH%2Ba7UXl1%2Fw6eMMt%2F4k8KMH74vuTeNX5z8YjNTIz4aOmJ8QhZVJbV5xJotA1OpI2a6NamoMmOYX%2FkFSGZOLaTnMSrq8KQIUTuhB0jEw8lIfeLdcQCObjylKrI1Fj3NN8E7L5RRRjAnbJCG1ZnO%2ByTqA4n8V%2FnHvY8DV4fXF2QABg4XvQgcLbvgow8J2RwQY6pgFo4K7R4%2Fq5flZkR6oNkt%2FJV91%2BqzAtpzGrW7RZywQt2o8d1offNZOSZio0J6ghfRSH%2F302X5bLillR4XQZm6Nq3RYI2MZmG2Hnxoxe3e6tbUPs3LlvwtRdDcOcDFiKuHjLThsCQGZaIlV4gBOioj%2BNTAznohPpMs8zLhGKQ7xrGbmrUL99Iyy8GD0wtIh8rneEFzY4uPv9YhSz%2BpuwIwIc1GCaWW0t&X-Amz-Signature=1b21c3ce2104be0cafa363af1aaab8c6e195853f7950a7ad3a2f3e3b9cd52f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAAZJ4JX%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDhqdo0tY0drDdrmfLQBLPji6TrKECltAtpUotx8HwQSAIhAPvbbuy9zkL7RHozev%2F%2F1addOM1HwEupPECATwp5tN4nKv8DCBEQABoMNjM3NDIzMTgzODA1Igw5x4nX4TvvM3zDB0Yq3AP%2FF%2BdA3QIG4Z4ljHkj4aInFWcHzMtvVsG9FA6k8lGwY0h4wSFQERMdZdTE5VXKPu1OM2jFfXg%2B8T816q%2BqoMqmZvLmWbUAIsfuINeR9X3QyKd6gXL95faFFXJwMs1UdvaFo73QIkJDPeiD6Gssk9AcslQYYkXcch8oY7Koe9t1QxywB9r%2B1FZWH%2FYCgs9mEVP4FmUq7PCJlncDEkcWzoagyy72CrfpPAUSeGEFRsBMVjxVaayxgju5I5EZVjXWkZWzm2MrHg7ku5Gw2sUR4%2BeBv6jBiUj2v%2BxNodSGuXMlE2RQu0nUWFIv6EV%2F37NjL9hTjbf2yrtKapGIvCSE%2BHuP7Tc20bOYWt7Xu0TU%2FhyRbThgHNvK7iyl1JQN2oeWd8XmUijebPla6nUJgHuq7fJLY8UrCZSEbeKUs1TNVW7dXRI22qMQN4fXIbvVHOoSPEscimlIQNoH8PGAZ7UGCYOStBOpjiJeEZA5%2BTaCjDmUd9X%2Fy3A9FSyM7OnqcLdu2RHh3Wtw9UzJmg8pRqZOvX68w%2F2jJq55rsw%2FRS2RY0HVzF1tqL9xsU9hh%2FhQC3muYyKPZCSMU4Y6d9%2Be9ljc7c8gIQogJOCnHWOms%2BzbSP2c8keJeKLGC4blWBkDTDCInpHBBjqkAeNrH3Aj094focNILXosbHaxj%2BnWq5ZrW7Rv%2Fa6K5vObamJ15SV%2BrM%2BBdjAiGgompMZSLH1QA55%2F8TYsCO6jfC5EkQf8mJ78DrG8Q4OdJaCuDB88UqkxNtYVETwnYsZ7lGSrjNSzoDE%2BDfP11HsjUm2GNRMmQHdrMd90cnHYwz8jga3lE%2FV4BFIvfjVG%2F%2BmeR1rmXqWDyUemQv6rLtqwPD%2F5MsGE&X-Amz-Signature=a224d68329a9e83b2de86fd7eff9f7fa413584cb85c8ddb560d9644af7691e83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
