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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY3E7PW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCYqfV%2B2cer6EdcXXYWHjFXWUp5eM215%2FNLEGJjZnV%2FUwIgPEOoKPPvaScNZs6Sn96ZvXV9rGWJ72Vwp%2BF6zykf5zQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDC%2FjwCj%2FwQMwq9XnrircAzLBYBvdLaGfhB68sM%2F%2BQvSDHwDlSDtM4C52Fol%2BqDe5%2F0o%2Bqm00tWextc8KqyfA4PE40ErRODILPnKxEKjPvzJGwPTqwW7GwmVlz%2FAS78ts5vYdADdBw8Eai%2B%2FlBsyBUoA4hsal5H5s2RJRoEsq9d4KZy7Js34QDOSNmWJ2KuCbiTiVpJ%2FEUu2rwVVvxXKPG3ej4OTInWLpTa9KAr8RqNNyvf33lxaE6Gg8T9dHw8gULxUyi%2FD2HIRarB0UPU6kcft1w2dtUkjDa7Dv7QIdxxx4sSTYWK6L%2FlPWEPqEwh8sH2plGS13FFEGlvuXQlYjJDl3EuRD7PaEXsNIZLDBKk3l%2BTq5h1TusDbdS6onrHD2dGtaazt7iDOscE4Y1VZLprGnbrkOmmGhC%2BsVadwhs0wZmmK2jSCT60SIP6HAkvC9gQiHmW8sRvICshQd9HELS%2BB%2Baox4GAtJLk8PUCPu1KqkzpNk7C2HkuMI3y78tuNQOAKgACL8Rv8%2F%2BPEnMyg9JeREs3wPJuhB7CIGKacH%2BZyE5tEMr0OErTrQrNPtc3mCgfQDbmZY%2F3F4gBa7fSQs5sRk24b9QPeeJD%2FUeU10AwH21nuUp%2FwTUBoNEQzj4JSsndAuqwsZmuIMXzZsMK%2Bgrb4GOqUB5o440uHobdPth%2FVT3c7OJmW6s38YIXrmNd6Ozx4vsjkNuSOySuj2B5HOM3K4MJGdAb2nVVeq9slkbBuVWrxZ8uxHJPOWX%2FAV1Z%2FihysmKRXL4GUwQxd8x3wIc0wlWv%2BEN3qbzv7JHT%2F4rCu%2BwTbJK3JhudFMeTVZk2%2FxKV9nTesbQ%2Fl1og31K6yt%2BlVQlJxv9y07GLUyaqtxYAdebhXDXYhr8e5Y&X-Amz-Signature=4fe2168551b69c900153aece6cc5ed73db486c94cae56740306b68709d563be4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUGABBF%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIG8zD%2BdbHt%2FgeeUIVbqGlsGDbSXjPEpdxSH7jfq%2BAiG1AiEAwljGfdof%2Ff17trItXy67RGNmDvo%2F1TvB%2FJWUUPjQX8gq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDH7SOaqlX52LFd5cKSrcAxIOT5oQYWr6RbmXAPoHvKwXF8MMva60vk86UsN6vI56C4LBWBm54Mm0nXJtmKOvWlvNnhXWIuzLuOsQO8bowVtYGCoMB1NhracfHNKjBv8OjlX5tXD9jEsKdITnrvAxAfawhwdyQPFmP6GYkiKrVITKP0Ht4A2MQC0hdjaSYkNVp30WDe5seGlK0jXJu%2F0d%2BfCHAlLH2eFCyr%2F7oXLOe33W%2FPO5I6FNqqDta3S%2BMdmGVSV3J99a7maT30IHtNA9CTKK557CaaA3SOuoNVhZCUmmiNxA85asJLV5YsbxfYrZkwACIx4wL6lmBv118AXvbchWLMpxM76r81uuqQaXlSwaXyxSOzOAZRmh8y%2B7cuQwpAj7aLnuktsKrZKaUaTjCzExaYjsttBIeSvpjuAnNauNByXoRC6RyaABJOobLNry1NAApFWLm6TGzPJwgyQTtbFLjdZil0QNQvGp3GgoaIVzV0JZEoPFofA4cv0yxGVQ6RRwyKxsSYtj9xLaHGljptbowDtQzpEvtLy3%2BL93k77vdzod%2FIWS4bpp2OxWrmxmDdBRW%2Fo1Fet5Ic%2B2Mk77Ao2X8vhTg%2BQjf79CjoU%2BCfYUCoAcLKmRCFj0CEn%2B6gm1poeV0v4Na5HrQo8OMKGgrb4GOqUBqz93F8TTMbpLdLQD5qxVHDU6eYtdYEWCOurRTz%2F2ZvAMGcPDcf42l7fhBjt29jch%2BN70VZH3AfEEuoOwonboNNu5A7suzYF5kacAlPvHOs81Dn4dkHOae2BhSjB3jmCTGa8dNwe0cKaDL0KwJxIADssUWWp8ORuqzaTQPXDxy%2FhizP99DMUBNZVMyOs3dvc8PbYv9ETu6Iqivox6FoP8jklwtE8e&X-Amz-Signature=31169fec376566dd0bf69d76f80106dcbd7a31d76c3f4b2d188bb7b4f21a3380&X-Amz-SignedHeaders=host&x-id=GetObject)

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
