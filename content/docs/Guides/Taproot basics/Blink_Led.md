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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPE2DGQ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwNxUdhrbdVjF76tSZlArDz2sGfBJQx%2BmJaPMpgX80DQIgKkbMjr6k2g8EKieybldKK97Ore8gQB1uQzGCWhAM3WsqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCXz7V2l%2FQpAfJo4yrcA6Tv6oiJ29e%2BJyfsiL%2FjJq3GOq0KB7K8ELA0NajPRCrKdZzcPWpBcq6wLUw8Ak%2FrRUn%2BOeuo3NxNhLNNkBSuGwwGMtEcBOsa5IuoqW5ihhXmcvr1PqUv9VmPIg6MDkR5jDQEDIPyzzZ0p83aekTCQr6ogLQ%2FR6piwxDUuKU3TuVFBZCpvZZtvSA%2BZlAD6wThF39oe8A6Ky8%2F7FOr7%2BuHktPD81jNJibEonWOCBQ23ZD%2F8WHhbd%2FFK7RRwyxGEzz0Y3MGIajpUXKr9Rs6Vbu3bfZSP0FKWwsqu4lp%2BMpxax%2B1SU5x0cTN7vaRc3CNvM5IbEujL2WR2DWNIffXp4E4bnnE9LEHGlTH9zBHdDGyNweKrtiFAB8k3H4xPQL7mCwHpRTGKUOGYlidX%2BjzykQmj2btovhurdVP6XArmg47Ilt61iortNlzUrUc13pTySpkAgLB0Fm4EIp9gIb0D6Qwn9%2Be1A7uVOFhHV4t0w3XJ5WUyg0z0vRSmSP%2FDJe%2BwjTYt3ann14X%2BkACmR3OriBhojn%2BOhaYL%2BiohJPsqqMlLDw40SeQsu7SWyzuX57BRoFTKfUAEkVAtlfvgy2lTeElXMv0yFbzZ1iwZGC9MqrmrbYrTO1OjtI7uGUPwmHoMNK6hMMGOqUBFBYYw%2FkoJpHN9Vqmadkrm8CUWFs%2BDGQy02XiyK6sSRtjAAjQBl%2Bx43NmDztzRxYxyfeaJF4ZO%2FOvx8cxG9Iyhg8YwCYFHUqCjzjWKgjDUi2RD2V%2BEES3Ey5pmQvQU0fEdgXJpqaRwnoAJhAHJi5iKo8D8MJZnCuzQs%2Frfxwx8%2BFobjerzVKDzsktVFRh53v4NSPvAAlz2D%2BW0fvOO7zHe05Jo23B&X-Amz-Signature=ae0c396dc0c3e9f28d73804162cda382f7404397229bc0d934c44fe7ebd5bd7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5VTWGG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T110541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8ygOu4WixctDq0aGRMuw37%2FoIiK4PZ0N2PxN1o5SQwAiEA82odQBs4b0Y3NQHFO0PWpzfc3TtD2QiFDVgpzQGPAcwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbXAsaEmZNHQqqX9SrcA%2FqGtQr8ZbgRmMEvk3duZJmWRjHevZ%2FXlHPeL47BO8pxPeVu26HfqnWKEuqcWuMG4gxkWsQt%2BVwD6Kam2u6woBNEQv6dnvfVeHXd8nySlG9Ya4HEuSTeGCm8UNe8HlH5BNMy5%2FKB4yWdTkDvodLKKaxsMfKVCmy7n60G05NeUxHKS5FnWqc3nRGsR9rflfRIicdYfGp1Cj1DCk5X826gFAdHKNgQukZysyC2WQSTHfcDuYqHHTYii1q4X8m9spm%2BAdVIjvonUxF8or0fLK8es2xaw8TryNsOSiRrSDV9p3VN61Cy4%2FUdqMYNRjQhVyx4yjfqNNuRqZJlY4VnI5OkmoFebyX6N%2FXFQcnI7tKKFF4xbKqhkhoDaocbXvOmbGlVCxnMkB7kOlSgbu7zCYcQZlSSCFDvILkCHbPnMogNADEHSBEOEEg9PVlsT82o0KQRiG4ibAEdlHMP9FZsI6R%2Fw%2BdstpEwgY6aRzEgMLa9IGrlbCUNy7hs9VBVu26MjKIqGG9otvbgu94C92t0aAOCbcrRb3ovOEafiBEB8qLavI5v0jKbAW98Qi7KCia2d7yfypGtnKtlV47N0gf8ONmVZ9zBttYw7%2Fm8bwknelnL10hon6%2Fb%2B5JlwvOi2AilMM%2BAhMMGOqUBVqPftAXLBbnXfbICXqMX5Csp8f27AQUj0At8tj38rhlGAVmEBF2KPef0Humv80hjjTJqhQ6HhC9tBF305KFD6qmmVIournMmFweX%2FDfG%2F84MFAuSz5FWs%2F3FMO4GF5lGyFu%2F24a%2Bu96j4Llqb2oUaq2bhR38DiLDZOU4RxJm63KDAJKK4KMW%2B193RaUCf8eAePO4WEt1PFAQvkAfC4n%2FlCHvoJ75&X-Amz-Signature=11b5627a1fdbc8e58c25f315d61fe7138c0807d7bd7f93f7778cea5e17ff8808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
