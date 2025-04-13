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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WVZYEB3%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDwLSurfcBxlz%2FsexTYfKUHSa88dl%2BjVv2nW66vY%2F%2Fc6wIgdRoz%2Fk%2FFG1OQnRJ9eByaHQY%2FVa9%2F2MnkeelL9wm%2FTbIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9b%2FkOjq7hAYtrtrircA61iFHR1QgkvPeugHvMHM%2FjRJXoYQUl6qfDOBwSx04FO%2BdMYbz0ajNiM03HTAa2TR6X6rOBRqw%2BYVgvz4nRfw9Py9J4Jv9oarTAlTWzYZVsoy5wQ3DaSvQFh2pMllACW9Gyo3BgRNvqkcG4AwNLiutcznIjlVJHwavKNFoPwIa9rjBO4yOUGfmkqZIVu6nssGdTygsYXsCNYuNAEP8o%2Bfau8M0JijLQt2xSmt%2Fy02VdrjrbjFo3JjqkhjbAush9XMvCNzEfYgcSvpZURE7BA4b0EjVy20sNaR6RjcThlVu%2BA36v%2F%2B8%2BeN9OvRMLFEJCScZwRU%2FSBbVIqZLdnXOemXwOyrQOQWuZK%2FvVrgpBKcDf322rtWBW41vkRwFffFeInDoEWlrSecdTncrR9NRc5XZOy4lblqV%2FyfVy9agfuDDVqYtdSElZxGxhmTTzeNaBn4xc46fc%2FGU8ROgOfzNfiois0dUFSGOQe7qYUPgQXorFf3nHsuO6ZHl0SE7dnb%2FUrg5%2FKUlhfPARk64cQB4NIEENSWWArmORGW89HPtw2KJT%2Bf%2Bea%2F7c31kfX9MWYS8Tl7yb80%2BRRMmRBIf21k4XI0VDz1zhyQoZ4mN4VNzC13PPxKifu5iJZYP%2FguzcUMImC8b8GOqUBaiv%2BU2copEllBpzI96aSFvYHoqQiqr6%2Bfdh1VJtCPd10hHsESiyGZQI%2FVc963WzYBMsp%2BPIaQSVEcr4OxA10EcA8VDgt2tPXD7G4ueUm62NKVBQpz54nM4cblvE%2BV7n8eSYfomHT5YNs0EM96VRZDPuKaU5gn%2FXF7yM%2BUaprRGe6Jo5ymkfsYW61%2BcjyakhnXkJmITiEP3n4MIbfq7kLkWsmHTRF&X-Amz-Signature=d77166a21698a2617fdc3b56c3950185474d7dcd3844eb38cb7580429e72d4f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQNPOY2H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIFAC%2B2aEruas2lzZoR6JceeIjvbN7Ief%2FPrbEo%2BWR4mqAiEAipglWjJgPsSrtpCOdxq9l%2BKC%2F7LwgjkfJ%2B28qSewRzsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXuEL%2Bn%2BrGtO48vkyrcA2g9MPpZUrzYrYwQF2vtdvzIOXYUE0tETfCoUx%2BKMRJfvm85kU0jdqkf%2Fh5ObfR81RLrSFawon7oQ6km77UHsJc0yhk%2Bzhhi%2BN6QganxmkiDfL947uONKaGbDUCwwvqh25qoaX%2BG2LFIijq8Bn%2FaKoLyPEZwdaX0groLN31NbGPPx3BL2LPwzpeKpwS5MDe7em3tvuD0f2F%2BEq9NRziyGXnvCrpFcnjMjS%2BzaSS4e5Z9LIf85SZacAvJUGi8jaAIxHyQUv5CczOxjkCQ9pBOdUX0wdNRt4R%2B1ypZtI%2B89lGm5ija0VdjG%2BBEWG%2FgDv7rk2dgKSuf6WFrXxP0MBicSsHu2%2BrNnwiUW40tFJL1f5ghpgY1BJj1U3JtUB3lH2zNksdoR0gT36oTwzMxkDiXEAnpLaofI1Ovah91ATbvvqq5qEe1V%2BfeN8AkCmx56D7PD7e6w%2F0rQnmyCNXfzwvBCvdChw%2BbYLTv9VYbpRo0SbQCmyBBYQIges5GuYIHuCpk8ta3lqHPtrxjsY710O4YN1Qk7GM8wA%2BUEkqrSaMjqcC3agwIb07iOmovDP2SugWA84z%2BUYJFcghmcrxF6MyYr1Bmai2aZ6Wy8e8MSPHc1ht53j9fjHvFcA7S6hbhMImC8b8GOqUBn97S2LXNIXBP5%2BpINAlwklb4eS1q%2BwYUqLxvpogUdmBQ0hYySxtV5J7tK5qgIsjVHiw%2BRROlsFrM%2Fjl5Sy5wDBLSvGsCsOnGRL9pn6oCYGUO3PwF%2B7hp7BY%2FdpQy8ypSZfcTufI%2FWIMb%2BgvkLelTvow84BDS5FzeJy2d7Y8rsSEGfiPIVQL2KOsmiqC4coK%2FMsom%2BieVvyYoj6ScwFtIpgonUeXF&X-Amz-Signature=20ea72e9ef970c35e14222aa725166f7035d3725e8205c30d4db24233e41e557&X-Amz-SignedHeaders=host&x-id=GetObject)

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
