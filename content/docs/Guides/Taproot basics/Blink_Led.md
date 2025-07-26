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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMJZYNTP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDGUTWMMVbTgNL9akDSxZdIS50Lq1ogHc8cz%2F4zC%2B21jQIgMV%2B4QdS3jbxRbbMf4kzk5YjfQbOKie1yYgxvIBJH0f0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDL%2FHJ7UmibFVzvSc1SrcA8Y7UUJKDM2VZaVfaS2saStut6oBdmh%2Bb87a3O6hg2TydD14mybIblLt%2BA9VDye%2B48Ba0WSyM6VksvPzE89BxHN9i8K4uPEF75UacVBcgmgN7pQhW7S48fDVL9cUBtFMomTOsCgtLaeBHBsZsyaCztupVgRzLfDengjBwmA2tPMlGvULP7dKRCNfd2Fu6LHhF8KObQnh6IQJittWDxYqbsK6O6tg0ALF9z33UF2eAjQt1GrGa6RcM0%2BNX7jYjVVPvpwf5bk4EaunoZH%2BLi%2BgMc3vf4L3dCu8lb%2BDA%2FUvcotDzh05S3K7x1JFBjUI%2BYfSUKuan7%2BsKmkxzFQvohTBAUc0pShPJnYTZ6RtvXd%2BHm%2B0bf5MMaKyoH2VMdRSeFHZbajS0vZf3UziBVTP8Rl9rAhUmM34oySBpcmH4H16CUKbiACSDCVhCK7OTwF6x1vE2Pwxej%2FfaxAlxgEoB769sDjPH6MhR0HKa8xV5buRryc35sf%2BnxiHLic%2B8z6MqKxAmYCdADRBfsjp5t1sQQL56wcvRWjsWlZGM7Mndx5Zct523B6YDTdbq0aw4bPM92PfsqwQh4W%2BRmX0mA76m%2FDXH76Bl%2FLVaVzOCRDe1c0ZoOnVQVFPS1eJuzqnRJskMNurksQGOqUBximblA88RE0Y4fSVNI9J%2BZm33gTK2IhCo54RCNFnCzSqp29vo4lB9G8mXJMvg3%2BC3b6E0AQnqExabRTAYp3V4hVh%2B%2BYB03HMEhF2cwn1STlqq0uqdiv1kb5ynVtZPY3uWpJiHUfl8gCn8x7JkoyST9UWCgGy%2FOcOaL4Ybg%2BQWPM4uR1D%2BvyjCyO%2FWHgdXIwE3tR5P1b5ZUFpkPgn%2F9qypr35cCBT&X-Amz-Signature=420654eae760e9bd0fc6ecfee8d66c7d858d389ec5c2e9b14461fe7ed1c52eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HMNPIOL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIB1u3DaZSlcRLjlVE0wGmYBO65%2BrQgEjkIPtkWqzHLNyAiEA9RMZCscWtQliGSxTLDnxgEK5YGJFJ9VsaRzW%2Fv2heZEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCEldmrnQNyfyunqKircA3udVIzXnNhRW773YB5VUrHAvpUNFml0%2Fof57Upr%2FkG1i8RDSl0XTADcmlPOoS1ubTHhjG7uwwI9U%2BFaeMiox7%2BMf%2B0AkZKMLmDA5nFJS32Yaal8jNldPzQafJcRpAvNMqTgjxzA4m0fYq1MNln%2BJkmTbCr5mi%2Br%2BiOKh4nGmrItJUkWwWU8NBMkp5RuetnncszjEGyNSrMDHw84qsl1EQI3VcHqbsvAhFMZjYqEaucz9IYAJQuTmSUnIzvObtqbaWtliQUGggBvCwFCby8dFxIsVv2URLY4R8v2w5idMdYTDMZMKTNFneR4Gm1CL7OUUITOIGOGqa51lfhWFRFx59cCLKDMle%2FfbFUBf6rAIiAMXXtIAH7qHTvs3fNEqfxHOkWLQ1xbIJCMTxKuiH4K%2BsqjzUuOW%2B0X7Hc7801%2FNENwVJAIAeep8WbGjK%2BKBnLWwJtTgMoO3sH8X8NXy7EPlliURVecz6xH3XV2q%2FUbm10lNpl2%2BhZNd8AL0dVu6geAO0r2GW9ZS9RnmOXZ2tA9s2ESbMQGdSgvXJdXMT5jru%2BKjz5jVEL9tXH0kied1RTTP9Jdq6le42iZwIIEIQrR23hCOrv99vRYK2dMX8wgmKF1f6%2BWQ4llrlJfyzPVMIOrksQGOqUB8%2FY4nNGfIsxd086hv4ju8DfUlENbzSS9XM40mhT25K7fRyDAonyuKfv1C7bYnjjurwmXV8PEoKULj5c5iZfxJRmJBjzoBDsSjPrrqcxTYO7kQbQvHjwTdU6mLdh0ESV4vnW36ykQfldy3Q%2BCfEPc6ic6pLjo3BJ18lw7AITOeHsfflUxkizVv6fOepL0OVdUadBVtFnD8323yInA2vSW56EUOrVK&X-Amz-Signature=60f2a80009110bc53c87d8c5a6c796764c3bd4edde952c1c2a3caab9a527bba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
