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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNHKQWUI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIC28d5%2BJH%2BaR1zqbjZH8B8AkW1%2Fy3E59PupCqL1N4SY7AiEAoIw6NuUD0taR8PL%2BJlxEEXRir08yZDyb5e2R5q91Xpkq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDF8QNyVDV8NwxbL72SrcA4eoZu1F0nyqBcMF0Erqz8k5pbnLt3OW3OcUfEMNoOOTarHe6Li8Hnp2Y93xdfBgZmfzRo5NK4IebxK5imFiXGiavwkz0%2FaySd2DnShKf2FIl3uW9STsUSOmZ2XnMy5It4dIwyOIzeP7%2BrC%2BTz4DTsntzaOqtDZmTHMbREdu3heUBh0%2FSRCWwYU9rJPvO9pa4sSwgRxbsQh%2FFPYxr0mEEDtCcSMwS9wXw3fJ7U5EeFoycmj73giFKq4RkNxZE5mmtfZh%2F3%2FCOE1KCf1LQA3gryadnjQgGcjMritGXhpSPK61K29cXqPc2gW4SClPGFFjTDsd19GcekVM0IaSmm0ZXqS33UPhynwuvyWimSGj5GXrQxJUUGR%2FoPGWUdaHxOrTpeFDGIApta2kzt9awQYbXJgQhY1b1uOiutUPc9XtofKmUsZS%2BBYrFCrFC%2FVCYvCxX3d5eE7eBfJG7XJ4wODuWJR6P3vVPqdvUpL%2BTrn1Zn2BV%2BUzxzkCOWuCLPKLwp9DJqpG0c27AGbEGnmXlFr%2FLjwoZdLd%2BcJwJEEI%2BgvDuR%2Fya2ToG56EDuWdRKmRwqfYYdQFyk8Lh9Xgluw%2BmGFNtnn0R17xRZ%2BX8dYqsVaPq1Wwj%2FxSl9XayuCNyuU9MMOI%2F8EGOqUBTHOm%2BcizE2xh5KDNyPqJMpQH9f43LWkDp%2B26iVdktBL3xJKstezbDEm4ZlNyvHa93jtJG92VTZrBlxI9xyTZRV9M8HIVp5uaGBMDA5qtiEI9gZXtRI6stb1ZhXKOgqcPKcbboAIYoO51x24Y8kRyHksJTyN%2F0DDMuQDYHOgzM8pshGdPAsk50htijjoYrGaSbO0xsFRn8NC9op6HHzwfisRVADh7&X-Amz-Signature=125605253debff4e842e5064631d02e137ced8e658cb9ded5c4098516787c623&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3Y2VEPT%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T041618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGEt4bzsE%2FjD6Z287Ta1k51JYkqTsKMD77jEAe0kJdn2AiEAsr83KxlXAhszsfaKyZq1sOQ%2BQZeKEw2%2BurF1nCg%2FHGIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDMQZyvj1go2bVsnx%2BCrcA67aKCF9A42bpb7fwyhAEX3RL5U%2BwnRSkrQQHLfdb3YgbpnKd83eZ74Pd2S27%2BGD%2FBi49y43NiGn2TFBPKL4i8B93CEG20h4NvqL3MkRXtmexXAMijVue5%2F3RrTWmBj8wOttHHtT%2B5K3EGBNkYFQ9aCgoKtenIi0gphCQIgF0TNGi5T3mhf5k0dOF9cMjed0DkAspa8ZxPxs7c18nrisC8LQ%2FzDNR96E%2Bmdimi60tPO0p1oTTs5cllajhNcAU13FLm6Rz7praWc7ZPNU13W9Xqh2sAK9xQu81%2B1lOljDb1BofH9seux2w6FyvHUO%2FYoI9wqKwdkq8ua9%2FpSvCUCNwyRXxxGuMirRtQqR6mpllGEsOyg2X0a8LtkxPCp18E%2BpgGEDI%2BVEk7XxvFBBV%2BIJjWfNHMCy%2Btu893L7JTYTcTnVxhwAoURJbFs5dwP%2FOicrcGcCjDfcDAy7DYJ5capBQLJv%2FWkPiZweEaKbQHWR34EfeCjjXe%2BHdDWhHnvEEQc1Exr7YLadjDVtcoDGaBbZZ%2FufkG%2F5TyrZEsNNRl0mE4LWp%2FVCQTW7EV26W1ZjaUMb2pMHnqLQFGJ1RP8wxJUd%2BHDSK%2FDQTf1l0FCMrMJjrQ%2Bar0rxNUXt15Ij9NLuMMOI%2F8EGOqUBJ5Sk7zVU6jX7tVJ6U8j%2BXhV0Jwso%2BllcMRPJhXXTr27Ssl7c6vDnjm4nQ%2FjQCh2qsKH%2B9CQNwxi2tz601auG24Lp%2FU%2FXeOSl73mooh3ya%2FA0wNZLluziKD5DGE5uyEyIT5%2FYMkdauOya%2FZc2qy4cX81EH%2FKx%2Bosf%2BvTZBekHVXJw9n7VN0vWrXTZprDbxNA4kZYWLsdxqVxwiE3E6ywaaqA%2FXmTf&X-Amz-Signature=f760aaa83cf815273108aa042a27ff32e4e5b3f29f2ce5d7b3858454ea902ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
