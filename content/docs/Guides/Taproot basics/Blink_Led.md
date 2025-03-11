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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIGIVBJ%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFvg7UKhgt48yy7l3fDGzQPbaRyXMQrBvw8APCWWyl8aAiEAi%2F%2BEoYJ20eV39jPQ6ljY6drg8gGcjZtgfdGxSocHVuwqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLSi1RJRWX1pkWxb7CrcA7vnQq7VPEPGfu2fQgEMHR%2Bgnh2Al%2FEpvIdcyht20EP5bVg1z4LLfw%2BihoZVGm1rNlKWoE%2B4lGj4E4qyhHHqWTai7JsYe7womIxtZeIE3aVbSZdK%2FHNWKSOkqybSbapNrurwv777ZU3o6p0l%2BGQ3LNdlgvYMEvK8rundtC1a7Na4GDMcXbpSjRhq4QbgKFsLWUx9fLtOZ7sPWHV8YXzDB5w9gU%2B1Yd3W2ZOFAdvAs1ZEl7w%2B5HPp5Md9Ks5NWW8g4Dt0JLGNtBBv%2BaaJwb6CuMe4888AzIu%2FcHhbuLblaqwd5awgNADpnny8%2BqHaLeFxMZwZabVu87vCcBEhUbw7xfKphb%2BsDRG%2BE7vsFE%2FODR6jS56idRVWaTicBkQqLW2TsbZ%2BaW71MO0%2FYWUk8mZRU%2BSo9wsdNfTuczjnHbIpWPCRgMc2c2Ysn%2BmhHeKzjIhjwyvtEkNjn7QGjbqRFr4OpUWxbXA49vPsB%2FzY%2FzFcBjLB7NdsZ7VvyCpq6bMeYihBDkyrzy1BFsOTTmgtbDcyI49qswboG8RyogMOWiOcqHQxt3cYoRmRAtx2CwjaMhipbv5kHyw4AwpvFBi2PWYzrOQo0r74mIznH2p5vwO%2F3kINQAB15z8VzruJwu2vMPiOv74GOqUBXCrMMDQUcA3Ne1dr%2BM6Edyf%2FaOZgkboshB42eeRunFxQ3Q5BjC9IvGpupAHw3ozmBRbtjDa3ClgA%2BOKF2CRhiNQd48NdXSQjMvIuKtcfB7YxIbeKMKQ1%2B5aFwic7%2FDIWHW76bHcIAl4LuVXpAF9iKFe%2FwyizYjhXF2tQw5%2B82nLITBrdrNCj9px7gfk5cZLccaqd%2BI8C9Ul6xbAVa3l6%2FVC5V9bh&X-Amz-Signature=63df60ddbf6b9d0776682624442de14a3f97fb0d42cd8a5dab14dcbe7304381b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGF6OVQN%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEs02xWqEvJ6y7%2BFUPJYPeKyDUfF4SeETBYxXF0be9EmAiAijkJfF2euDvjfX9DwGwAh3VyQnFbF%2BCuG0tvxNVhJoiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM16BUIGRBGGpg5pTYKtwDRGFvxURTkp2%2FTSlYYeWBDB%2BkNvhH4YPJPttFW1k6KNXFeZtYFqNRLBlDmycGlfOAoTmfxunVwTXZAyzvZyvguwFSM78YOaeuVYOKszA4zGxfwEb3%2BLL4abyp1RxnWrTK9iDEKTpHpxOt9cig1xuil8Fawai5OO8flz8n8meFUA3uIHW3ob7W3QIKKqLuxphgBKffjSx4oS%2BSTmByXqO74D3VU%2BP239k44oEe8XpoaAl1w9m1izsG6BywnsY89Pyvdm3ArmhRW2ovOth7E0uCZrsTZqXmTlfKCvdag3HdyABa2hYu0xUuEkmnvBDWHBcx5QeoukKXdpW3jffWJOClZ0nYTdyY6xox98RIuOGy7ioajXdcuRh%2FJLg8ZXBAhH1ojx1saGg07FTuq5jNTHJ5sGZHfIX2VMMYQiqgPSbCgmtrQCU18L4WZmy0c01ciWTGKhr1i3N5KdqnsXUmzsIgWHD5QgYIm2r3tVU%2B9sB5fj0bZl5SQrwJwqSOe6vrZ7VqFx7zfMeRIjePkjka2VswdhrSuvZXj3zuc70mLSZZYi4T7RVz%2Fuk2B6rfl4FEtxs7G8sp0d5WDCqEMjOA%2BY%2B2mSmd8ChrWGF02JlaiUo%2BZmNLuHXPWbe8L%2BF2HwYw6I%2B%2FvgY6pgHdEbbWUEaAk4V5LOXIAkIRE9XFnzg%2FSvKs0n8g42DnHgEoJjVLh2kyHFKMjVcfKvHSh8LQp9OJn4iwGqvoGRyhLbdlxkByNcacLcbXA8HTSzVEQhi%2BneH5WiKmDYei%2B8of0Kelm62SddAv31JBdNXWMydzzBHHd2HNOwQ4a0giXwhVPISh0W2I86hbUyZnch31WxZxVgqro70tUpuNpgH1Z253c7XL&X-Amz-Signature=df355c9db15571d2166586049e707d57be26b629da61f746876d247ce85fd4f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
