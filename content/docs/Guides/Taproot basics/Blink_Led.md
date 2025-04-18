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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO5QT5XN%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Ti7S0CMX8PLmo1KexKjc9CJziq2lzmJgPU3g32lFlwIgde%2FRm3GqPy5Dkcl3naXA5emgwTpOj9P3z%2FkTFlmNFAcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGGBFduAvAvsi5YJyrcA8Ff7cTyVJL3S4D2OD%2FAeKTy8ebHm1LsruXMXpdK6z9gRdLsjyD%2Bfqwok6j%2B3U%2FdSOsReVy%2FBbVxjri5N6egAT3a3RT6%2FQEBBPRehmo7h5dqN5Bw0q9ObqDCtbSzey7R5Jkiy4JQDqyrO9e5qgroUrH4spfdsZ3%2B1vigK0aY%2BnIQEzjEjcCktJEQg4YD8D2Z29YV3V5f%2BOs9%2FfsJcIg9YfR4plOsTT8Dr9UkIlf8Tv%2F9pP%2FDqtY12zwOeWvmTALA%2BVMTfpoBZizxikidW89BTk6PYLrr6uzFriXVLwZzLfbh0sdfkoA%2ByaNdpxoFTn5uQ5y27%2FGMQp8LeVfEu6ae1t59XVNGa5OqHuXfwpqYNoUPgNDl%2BIvuzuIizMn5gH6sZw3rPDc2Z8CddRHAoG57gq8PAU3EZE4bD0hDQQznb8d%2FI9VBi6RFLLnjeP6a3fhrqAU%2FTibGEbpK9OB7rS6OBKTCt6e4PPVjxDqXgjo7dYxXTqH1aIOeoRqyJuh1swqDX6H%2F7txRVbe1VYn7ZYpxCRw4axyA2YWfVqFq80ho6YG%2FxIw0PSC7JO9dcWcV8nMW%2BlcyJ%2Bk6x9RUxLImOc6ddHfZkGISW37%2B1Z66MaYKM6aarzVbtxNl%2BdWUhEXlMMuzi8AGOqUBtAtmg%2BI2ynPKOu4IBjxmovx1lGjNpYOfODBmOScigiMBEqAnsJajjUfHBOdnybL8%2BKl8rucHQYSNPOfyKIChCmDRnMQUjVJbBVWwQdQKgK%2F%2FgM%2BUQMBL6ISPVqU3cql2RnwdoWHax7ePMY9uyHJpv%2FO53nCf5cxJTsaJbY8dWyv9gHmdseCYVZkZi7hAuogA87OuLa2eweuIlnLSVuSj4%2FXJ5zCH&X-Amz-Signature=76ab6f5c2c76162717e9c32b0786ffb1d3d7e356ec7146bee43a3b015e19aba0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5UFL4H%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5IRF3JWt%2F1xorwJSg8uEhwhRrNVHD6QN8UQSF6Q5fJAiEAmx4SpoCkMjvEKoSRppSHDG%2FcjTiPC6N71tq6KyYauOUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNS9XW7J1nDcYcRxOSrcA6dvJaBxmLWbidhpTV14Nh6H8%2FQjOb55jvuQi47rfRWgeh2SoW3lZnSwx8GgAfroNEGxljduuN6eSH89V%2Fwv45kBtLHEQ6HkCIU%2FCkRiX70%2BK3zkPbKSANv7oz34aqFdPfHex3gkv4P600PpeqP8KT72nrgnVOzUcztWcg%2FkQf8cfnWd7sYt8Swnjj8PLKn01Eb4xjSjFqTyDxP6i9Jk9tqqP4yEvemwvYSgjAy8MdoO%2BX6deJ1fEtpIeCqWOZQ8pb3fewAfKli63qkF%2Bw3z1x3iogU8FCDDwpKXMaUDaAcRl6C3RsVQXfFUPAAHU9JQI9Z37vLAZ1rQ%2Fu8JNOedVU8Yj9R2aESG693JDeTtakHZA3TTDz4jYOzsUXvfy5UZ188oNDEwLYars046Odp4BiHmFUyOswRJAtKhv%2BBmP51hhzSh2tVeRKvgcP8HIX47lg5QNL21teSn6t8YV84jDzPUwYqD2wGgGLyE594w0OaGMV7%2BBlNpyt%2Fi%2BwGoDofq15GsVkmipwfyn%2F26F4IsKLb3p%2FsWI9w2R8Tn%2BPQ5Gi8uZ0w9UNsUQIQWA6rljdtj8X6B3380tEfBfYHzVHlj77LkMqiPLVfthbTBpVSp5Jq624VlA06yYfHDfCrVMJ%2Bzi8AGOqUBvbHg%2FYFA4WSufij3J1zH2rqEjB64tzb0NoQLjPb8uBX8%2BBP9wxfW7m1oc21U07Z%2Ftv8ylVJbOtHEBtwGchg%2FhgilyWHcmbf7KGuN5A83GuMiwAp5dSeSOTeIv65SRX0Dqeei8QYN09TCn28wL%2Fk7zLdytlVsDaL9KkAlK22ktqXVAEhlTnpWTtn4CoIoWzrktYyqVLcap9J6GvKlAoWFUX53y3rL&X-Amz-Signature=6705f050b96b70240d83aafb869241e2e5910289685d912bcd7be7f60a634d8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
