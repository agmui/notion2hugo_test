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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2HCASQ2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQDcdfakaTUc6W5Fr0wmuR1vAisvV0lWKXpJo6x4ph72PwIgIlcF5MMi2yv09xT3RWn0gcNMTp0AAE4Ixlo5fLuLcREq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPtWi1b8aab4F8SKZSrcA%2Fdp0jnwfnWVyijurGW3S%2F3gSu54Cbq9gJMyf%2FPmGwhcbY9M12UsHoeFXArkIvLx%2Fvd708FtuW0E8Tf6TG56gXEDaRQzXOJSgL7mXGgzApBaF7zMd7nUBJ77kPsknrijE9FZsyNxSsdqbgnCKOk8Sa1G5zC8dpkyw1lyhp08ckZs7%2FLnO0elqVyRFZA7hBgYwLMPUCxtp4SxMuELNURsP7Q%2FgtjbmaZD8C6rdugJdLjYfuIeb%2B7JMxRc82ONpL1sdY3yHAEnmusbqvkHGhyiGpTHWcAzNebV2WmfheLCKp232esCvLYaUgVoagSXaOm368EL%2FL4Y%2FrbWMaVhRrCADQPWDEaKZwcIVAiKZVQWz%2BoHkhZuw97o2dptzyTtDxi6EBAMAurHOlnRlYbpO9rY6ZAEOalyQteo26AlEG5AVaSDJwFqDnKLGlmP72PYKJzMaCbrJcOAl2t8yR7JHkX0qkowpsCJVP4qEAY1AYiF8g72XXHkXUGQBMpEhWcfby%2BQO4aD6M5lglKJayyFz2%2FxEwccwljeF7AkCJQCD21NM8xDDqb2alKm4AW7ucxEqTo4LMbUrxnaKT3pp4Klq39ogVUJGzh8qHI68mcbrVyP5VxyqydBvAQI6QJROfsPMJLCzb0GOqUBH4QThPnHya2jBstWe%2FxpuCuDTL7nu3p%2BMtO8%2B5EXXgqC8hZvfLbbmLccCEkSPbXMsvM1e%2BPpPHIlfyR6sYCkwpH5gCsq4elV%2BXuJprbeSxRgHrUuH7eoiYtN5DX%2FS7ZkxPfNTE5Ixj5WS0yYRZ4%2Bm3SJKnnddTXalbzH3UUOLXfleZInZ%2FGmqfEdq7pOMIQo1kyGtum8gReife7ITKZNmCRKFomE&X-Amz-Signature=b9b1913048e14303007c5d5bee4499d6695af3ecdca4d9d30511e89f57a93ca4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K3FEJ4Y%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T170151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIC0xBGgH%2BPHRHN1RUm0eZJQjvIrroHmxZglDvd%2BOPViqAiEA%2FbgahKP1WosYf%2FFNOJubKB6tVqFOZTU%2FFEjatSipdIgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGk6411EgYpiCXvdtircA6yEJaRxYNRcHXt3kGJhZ1UW08F1Sr7hsMD828L7aTYAzrhC4X5s6vjIX97NtJte71eWmp1ZEU%2Fep%2FL9CcJpLWImiuOlJF28JpR3gp45qNeyWSuISa8JX2GnoonQJlbBWMqFfMqnFrQe9AEgTKNY1Z0GDKM6gRM%2FKNx6NW8Cp80eqPh8%2BoDO62u5IXWcIEaaij2bPSavbI3gh8oM%2FVcoDo0GzIc0EK0X4cZg4xaIKvZpz5Umo5%2FNq9b0Izlzp9hWI4lXZUtfnSoAAUxxtgAhRiSgu%2BFOEYYob9BLhSIDTNMSdJpEtNk6%2BydESJX%2BDkwatMQpubosZw2PJ3StMev2RCM%2FDxAK6kyV7mXCeR2BEKTx5zbSRLHiYXW3YsQZ%2B31kVvUjWcZj%2FAzZokAuzQ5mginhTsxOiTS9ZvJwYb4LEWP9sImeC9U1Ac%2FWT85%2FBvsYDi1J%2FJgo4aZJc5NuNIRIpjc1qALymQlwroqHgXZPp0vefl9Ie3Xuvga7jYHwYA%2BumsQ2d4J4f%2FzQVxUiDVT008burzFNpahqjiMEOVtgZH%2BCNd4ua6DXFuv2KlHkStwReAUgdBrr41WpHsHU%2FQlJUNKVPYT3Xav6XpCYCjBNp30Y4N7zHnvWL0udNz78MIPDzb0GOqUBn0Uy2td7%2F8Ti6DnEW%2B7pfmaAImsLkjSmRdl1uF7dsU4WNvzFg0tQk5XxBPza9N5kYUP1B9ojY3FOvB7%2FikmtlN%2BXmuG8mbrgmNXkCb9cvBGzhYd%2Bg%2Bk1drE1yRttPzSGaZBBkf5%2F9h4JGBQ8MNjTi9YQdEe7XT9%2FnjL3bZ4LNDVj2krOaQ5AKfIlIdkitb5vpSGV46QxAHSZe3ynG6dyCe%2BOwdt3&X-Amz-Signature=ce179240f25fc7d7db05db3a2048e19fa5e8bfb5ba912ae07fd9ca5679b3cdab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
