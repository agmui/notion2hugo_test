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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5U4VPPZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG9o1p05qjWzVuGTwAMQlPYhKObbUV9CsgErHYqJozRvAiEA9YVajZfAkRQxLbxztSo7MEvYytfhZTMlE%2Bj8FVSTzvoqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpkEue1kLXE2vtUbSrcA1R5NhTd9YtL9PPqd6LlLa8Prmwg%2BbAO31VPHMtJ1U5Vd65ZVMbc4SClFPHfcrJQJumf2WY%2F7btsk9xzp6cXFr%2BF29c7O8rUwOawzFfeB9OZOqDqZPhvUyzSUxQ6jXMfHyk171Bz13QcAmPINsr0nrt1qVBySwwuCkefp1uTIksDrQwaHqm85h1V6g6utRHdgzK10qxCaeYMIK%2FGZ%2B%2BhV6MAVahQ48iA58xX%2BgqVnyppN6Is1LvNj2GeVo05mMcDtTwzI7k5Bfv5EEGDrB549WsTOy%2BciL0QQy3%2BX10NMs2S3A2mPp%2BL%2F%2FNBWE1h8RnNf2J82Z%2Bf6HUa9PCrGedWjSjsttJVlKXwiK6r8RW%2Fdeqm5GRlQgwkV%2FzgDAVf38THSw7r1SBlQFpKOXmZmc0GliUET%2FVae2va%2F8mwduqyWQ8V9HkazNEmCMjDUsrrMYG3eXMd7rFghaIf750vsR1UTwa6FAWXoVn07r%2FRh5oqdLFtBbPyz26Ps4YeWcceA%2FRbBTOA7dlSruOvl8q%2FY18dr9Wcf%2Fpf8wQJ5grhwBLh3qX3RAwQAgSZu8556%2FpkLmJDGNI16YeWnGD0ZKRwDvaSgtze6%2BUvcvtRjNtL5O5wSpL1FqLlundX5tlw95eMMMTrzr4GOqUBpiQ77slX2M5YtD8qZHo%2B5PLFLWZ0XM%2FUfMXXdi7j1Z42unfZ0mpCcMapVlpNKCqZ17J8y7ZECccXPu8cdAOToLqFhBDl0lzI5eKcghZg4c5B2ggm8dcqQZX%2FsBWbUB2aKZyuyzJzoqU30jwlTm6HK5f8ksXUiGrCagp9HN8E3CRqo5vsEw2%2FNVWR7x%2Ba71I98i3GHchuQ8hz%2Bcpvt3lxXfVLNr1C&X-Amz-Signature=398a098828e001efe898b2a23e7c84bd825d20a2eaa636d928df12a62ac4051c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKVDWAPW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8gNjYCWFCPmm%2F0FhcQuCxLkezvGLQ4FvmLDIc4pPXuAiEA7Lb4jb5Sg4T2roRXvdjkpWo4OHlmQr1w84%2FOP9V9FUIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAM9ec%2FRpWC3FPE6cyrcA%2BEg4YzY5m0yev55ZenM0SmQJbNt2SdB0%2F3ahsMnY8RRWaCVvZJx8wBcJ3rHXqHXhuRjRWD6CeDS8tjZi6KUjMNLUaow6EAVwLLXZkQAjz483TMTF8vjAcMyLQb%2F7NtAdcKfwmbu4RmhBMNNS4r5Uv2%2Bm%2B9aumKwhwroZKHhHB2HNNg9dMcMHbsAdan2mNzRC8JRTYu8rsg3W%2Fyc%2Bb8nzYmWUk68Y5QXiSb8gatfD7ddHMdyqNJW9IwMDwQHC9oCG%2FRp3PWjk61TO2MIYeSS7AI22zJs6Xz5X%2Ft64kcJK39SVW2p2JvcdH24YQ9dZDmUse7IaoQ0WWRQ61hbZXSnMBJSG%2FJStl%2BqdJ7pzPWS2lf2MNdul9C4DQaK15IG37RhsIVwmqFIWHpTyTVw5KTCK4MDP8lx0kvLPyeSzbtN4xAroScng8eSQiLbMjClCebt9HreUj1B9D8lhfjs0Jj41bDlInO1UBrLozig%2FabSUbhhnmkmgikZrvTN%2BElBIiAZ68Helf65QvzMl2aFZdSe70aiukPwihlAOu%2BD7WR%2FoHEvprN6zmT5SViEXJfuL8zSGmJ6RChuaajW4tSf7e6yAu8db06oFblG2V5Cc0%2FewUC2H8Yx5REcBCGbOMj2MJPrzr4GOqUB%2BPgeScwXBOLm8yA2o8ZM1m2dpbQXJdtWlbn2ZADqgQF%2F9T7PBU0t983t%2F4wP9oFirtKWUifQDUkap4uqGjVHgU04Br3my4txlBcP4S9wXi%2FWa7didJ0sgoZu6MkBPD4IGQfWAoC%2FvWJRBVCGyaeeVZJaklBEnk6lKfLXuBRYSVK9jlVNm4CiZpr8LKXTWC9XV8t0puNcUnQ6AzHAkz7x0o5GaH6T&X-Amz-Signature=08e6f70856a6ab290264d46b0747f729c75586886261a8103446f47936d0742d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
