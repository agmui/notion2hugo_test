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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJ4SC6L%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDv0RSmrzaT0SKgE9Xu8YOyfymNZQr34ksCVmiXRVzw6gIhAIH7dym78PAB6NZnmBleRLgHiC3C052beyoygurOGO5YKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA3pQ23tgWEQXruTsq3ANr8HTmS2Nf8xtTTO1jdcV%2BDgP6XuEsmPiTnglRVEtXw%2FkWptBjQvOxS4QnKe%2FLpjRG6ulWpL9IXClkAbqni9nrTpL6ESP9xmnevvSsHiCBKB94O5oSfMh2kkk2ezDyXCdutexuzbGnKpAD0%2Bgcq30mvugrnnjhG2%2F9TQ995Y%2F2tpzFQ%2FwPnWa%2F2JU30M4H1eHAVeJ3TW3KpNynBzGclzsm3PY4sE2EngqpyXv6CmBeTv%2BUrDg5wyCnj8rFk2zputG9XAOT4V%2BQ4MTBWfbQcYc1jWWD%2FVhUFjRVJnSN%2BWhh2kGsTz9hfq6lctmU0NJKBdmj9ww8dWbsup%2Bytb9jLJ2lkWmIovz2DkPUHVQDrUB7ltU8Bwo4lt9PGygvQyUAyRuQaZnm9kKk38b1z7AqPDkYHGJfoii8WSc6nPA%2BpSRPhjnbYjSJ9wQhc7a03QtaoC9lfVjJ9gF7gjg%2F0MF%2FrViR%2BiW2jbEuZCwFFnBlqV0MfrXNKlS8zuHK0aZ%2BfDu04mkj7RE0ZCObNkQchGZdDQNDY13IM7hYTXzrY%2FvpDSj3RlVJjemniEcNpygz5eeoGcltke3XHwTOSmKhZy%2B%2B5iJqhhU2uzwJK1fKs3X4Ux5duLf7%2B7U8wqriFY1BnDDKk%2FjBBjqkAURbcA21Yv0XuYWfssSUunfdNFRX%2FDCM8oKoBS2uDvQv2l%2Flh60qJw416gTh2FJ5jKF%2FA5pg3h4Wiwh7NbSXM7BSIOwErOBltV3vr4%2FFAANM0IMuBM2jl7HC7aKctbf56OQeDk3qSdX%2BuWE0%2FznMoLHab5y%2BCdIHHrw%2BNigpFc35Fuf1GaT2IvqpOFOy2E7sTrXYzjhmCqm61WvK2W%2BlUNP3s1Ix&X-Amz-Signature=acaf64fe9753f663988da392b23835443eb0e9c3ebefcf6b66a05c5e6604b1cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MOPZOU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCkx%2BhSS413q6E%2FJf9B2%2BfAUZw4ZLuxJWpuIuU4cJLOvAIgVYummnquHEcEmk%2FcCtddx%2BZjWySxAm1VKAsPEfylngYqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtjMoRHg7LEDfPOvCrcA2HnODZHCgKe10OTE9zjHB1tdtjJse%2FWbbw8cOHfm0SxGJU9f5QzxTZodc7zEjdjcaqs2cGzChrO%2FmR4XJuPY0yGxCojh%2Bj%2BqdiZ03ykQagFWr4xqixZ5jkwfsvNpmKyWcsTQp9fXpWeluxwho%2Baxbt40Nnd7%2Fu%2BOr6y%2B1rj3VXBJNFoHrv9w2Mz5Hhbg703fExhUqnqeYAGFGPqdCH65y4mpE%2Fknm4ll3yreHO4qk9XIetj9jbnEy6XXJK%2B172V7Qs4cpUntgXv0UObXDm2oaYMEkHO8duZtWhpMIpEE%2BEJNf29WylIG3juvcLdLtJGS%2F%2FL4Y8mp8h1CzAZgvdYiIWS6eOmZ5nKzymt9OvvZ50vH0H33YqIO48r5Fv%2FM3oUs5IiA7f6DRJGtfZCu45mjvI1KoO9jOOkMPqpkd9CHUWISZ61MHvM7IW%2FrvtkHX8yzhnYTwOEzaR9SqA0f99mELT4NBXeztE50ligGxMIOQwr7gai2IeCCuVIrq%2BYQtLCPVPmm1PQBah3bvbSwtGH9%2BfBCP60WCg5CF1wMInnWm8FvDyiJHkF8OEPR8sMUyuD19aZwAhZ%2FfFpfTOcn8EXMKAwD8rTie73V8cy5ZEUjOeWewPLxQcAY%2Fy0haGaMPjA%2BMEGOqUBJbTe2wYAEO5m0BebWDmxuSZSBgYrmj0%2Bz0pelMEtj9pxk9oTDvOXO7rvwzwwoP5cQvIOg%2BgPXe0GY6ypPnBhzwIycgT%2BvvArNm0zs2Ti64k2h5OZbFCvb50R4hbUlgbz7%2FB6Nf%2BNjDj2WDKYjioB%2FblffPqUPiLfahik0VHsx%2FzCuU8SlgbDlIlzynRCX20NaCEyEf6jVmunpWCWbZ6GhZGl6P8c&X-Amz-Signature=285accf980f4262d29d58405c710b94133b8ce3586ee280bce74105a1d39904f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
