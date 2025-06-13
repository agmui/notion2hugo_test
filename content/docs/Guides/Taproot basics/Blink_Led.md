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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJKA43JM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQC%2BeNMo8f8%2BmIdmjGxxsgL5ApyipcGvJRbcECLT9JII9AIhANempoUxEvOokLY4o8ztXPRsgM2aGMxO2yzGEWXIjm7vKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSl50KMTef6i2m8YMq3APv9gTcQRqwv0XPDTd4AiINMzKbmi7bJDVzY5SBR3DfvDhpdnMeqafxveS9I%2FhWhUJX6eiYD%2B%2F69ebiRaZs2y53B9Gn4emgftMrTrcdL%2F57oPrBeXgH3rAgZHdBOmQA%2BNOm3KQV8Dow%2F0otN%2FCiltnDy%2BrodeW%2BISqsVB1V7QhwWVOMrcwNaZG0hZQ95ZozJ6EQ1lXdPklEXxLjxpfLT8qfgt3Sr2tpE8m%2BxiqX0ss5C0MrFym6nj2%2BwAyPd5VrmGuCnwf%2BHUVoiLpiWMqWvAHvxa%2BgGqk7RukacQSq%2F8dEcrhcMQsSFrnwL8MqQdOH0iywnd3w6%2FugP0bLX7mHZUlPeIfr0ZP5NO1adQZg8l946fcPWhrQkLmDygb1IiYg4ncc3LJKKTBLaVjjJlJQ8ZBthorpc7XxUdN3f8F73DZJatJXAqEkYzqFu3e1N23zINOFC7UT8E6KxP%2BdHXUgdIjpmpH95bNtHunF%2Bz2gMzBoFT7h7wKMoSu%2F5DNDR6v9NuqhThxEgqjqH8MwzWn%2B82%2Bha4jACqF223gmPnlfShFcXGP4gmBhoWIkBN9WXOEEk%2F5%2F9s%2BhZ9vW3Mu70sxjG5b8h2YCAPdQPnA5p1QL5DluyBK90Azd8egHelu4XDDVu63CBjqkAX6M%2BxXhEEzTngR3BYm4M30dO3vuj3UA6FHvA0M3e%2F7uopSKilk39i4H%2BJaK7%2BWSTDxHzDicaJ8TWU4d9v2PjnyxmcdxiBaM9fPic%2B5IwV4t4uQFnEJO%2Fg%2BFfzR3szVI9DtEMUzHDOJpbJRhhUU0fjslHwJ%2FIcmmDRNPEFdEVGEdhnF9KQfv1BquK59cjMSr6R23bEDsgAHMIap1taCA5HvLLfxw&X-Amz-Signature=7e1dced2ed6670267da0925bfc975bb2a23a0549d02c745801cabba9b70b8571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4D25PF7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCAPrdDOy%2BVZ5jjix96Qbt8uME1LjvcA7F2NDhB21ST1wIhANLOx17J5hGcGbmdw%2BeWaoc%2FR1v4pAx30LVXH%2FEzIdImKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw0WnSFb7wcOjemM8q3AOyaW0lwMyUzbnj36OiqMHb6%2F0EFxdOYHPwAIVxxgP1%2BjGk1%2BqdQM48YHLeCmYVaS1PfRH9KbluMiihgHpPRFmu9Ti4RlDsT3lgLDi8NKzCl9GeZGxU2oTwi4V10dq3P3VgfwO4QJRpjvQDk0d3uTFtjAd5JQtHT0M0F9V0SSUkN0u0GVgnSlbh5rgI7klh3dOHi6%2BK11OChhOfi4K2N51noO0djKFwciCh6L4zFXx0Hzsfod2njEh6qoGWetianyq%2BgaXyADQgto1iNZ8txKmGwFPcOmWQU1yAdJ8S9t7tGRwdzcAe85uvKIo%2B9aYyBUbqEOjiWfzspjxRHMyqS0MGx85EdMGt4mjv7qQixj6FTXQ%2B1rTZB8I6eaQMeWkzNKHj5ytpuWDrPWdztabIMV3rP5a04RvegK8NuGpO2XYhoVgDSzM28Vlbuubf9ZEOUdxylQOFt37tncaJQC71lGUVNAdxfY2IFwREkN0QOQjAyZx%2BA33iwPUSOnhlplEdMNJq2NlAp2Lyd2%2Fro7JbkMBwixFATmnHV8GjfFd9tNX4J%2BGLyRSHGTHohaX5Ca0MWQZ0%2F5l9SGM8MQRV05sWRb2fP%2FUGvWZ5M9uLv4ENrSkP7AmlDB00BgBlOxPZETDHuK3CBjqkAeofs5ezd%2Bv2xhx8LvIJN04vwWNrDo8kEi2BbbIA8qV%2BPcBoNaDF%2FjHNjseUQlEOg4Icssoi8V9MPPs3%2FOpaW4qmW1PsBrqDFYgLXSRafAnlmrirnkFYY4Yfx6bR3AOXBU%2F8kAxoiaOgnoeiZDJJajd4e5cZJ%2BiLo9dlp%2BhEeH31qzne61Mgg5kNrd0rf07uE8mQI40ebGI9xJNuAwbg3NKCSPfb&X-Amz-Signature=51ca0a0551d64da0007dd9581031b32132570f1ca63e510ba7872bddbe4cc576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
