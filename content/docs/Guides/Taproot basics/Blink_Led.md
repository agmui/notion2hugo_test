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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYEJ2VAK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpSDLTc2jHDnjhZxKMhK%2FQNnX2CGGTcV527UDyTPJA0AiBdBrDrwsGuC%2BoYhBn%2B%2BFHEJw40LuEUJkAmRxxuXm0ygyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlve2spQFa975N%2BysKtwDgWSwnYX10wZNsF%2BPNQc9xcmwBmIf47zrNr3Y3oveb%2B9xPhvEA9FY2%2Fdi75a32IV15twv9u7l8bsF26zKo%2BGtPcG0hgm7jaR06g1JxlJuGNOrSd6K1nFeZM%2FUD9t2v4aTyN3WPjlVQz%2FUkP5JmVlddVwbyQNEnK5jnqgh9NQx3ewLcGFr9DAmcdDzVjNHnexI%2BA9GvzRgSISXWrJSjwmEAbxDexzsLNE9xoOM3CKJv1W9jt6fkrmH%2B269xe6zvMIGFhkjRQoKhvL6QkAqATrWECb9ftSiBL0Gbdbey69QP7XECrMsEz4Zx8PlB%2BCJ%2FcG8G5eAZEnFST7wHNj9hf%2BjS2psd6djpKKJFTt4gKK7z4WoQj1nN9N6FH1WWiABLY9Qg%2BYAcJwYT0iBu1n8Im2zGLjEe%2FL7J4inQ2c%2F3GwUjMjxUEC0VOgiWodHkVR6tDk7Tq8mjnW9l27mY80LeEC%2F6ZpzUHXqxiN9kwehPBnrV7T8cmF8E7zLxIE6VCF4EQtS4OEI8s5L6eAt8YbtyT4R%2BuBrKklcXcAY4%2BAbH7jaCQB%2BWP%2BL%2FQVlAvvJuudXdomzeFy124jwmua8HTivozuEGSeO4pmAm%2Fw%2FtoOJi4es6MfZehDGIsvwS4NJ2oIwqbLhwQY6pgHTODpJY9yBMvsADiK3fULezvfrFyRntPGDQorgppyn7jfgVIiFzjlOxfWFGtOM7PuwoHtuTJvEJUmoWmBwRvU7bsPODdWoEnU0mlsDJJxcaApjnPIIFngzjz016FSuR4DT2WDxSfQ%2F6D58SY%2Bwv2zyjSHmBqgXBaaR0qWdQiLGI4OhqRnets2nlYpzzdSQKbkQj5ucIWh8hi3CxUqUu76rVp1va%2BhQ&X-Amz-Signature=c2d80cee51131f2bc43a8926e5fe216ab69625541cea7c53993c1709f383f0db&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZGN5PT4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHST%2BQnMkUIklB0F4GrbOIQGBaciWWuizbSPKXFBkl2wIgD4oRdGnlrtighxY6q3zwXJIkGel2qVMQEOJjiygyF1wqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvYAM2EOnVGGE7HrCrcAwpcc8o8BpPMpl%2BNoftz9DKFj%2FgJxdOJGo2dUxCpd6YBrbDoiKJqQVoAWIitMKLpQx2E0vkv73jMuC6dEVeoV9XxCJNItnw2TI7SAwyerNt9PmlkGOqbLC7ZGORaTYCXLv0f1GgxwQr1qA3kaYWz19BqmNlp5OFA7ut6jdhIsfzNVc1TODPywPfoqRq%2F5VU6TocCI1Sy%2B8neAyLLxUkayzMLa4%2F3oTUl0mQkHrKBqpEhEx0b5t6%2FJxGiQ5X3BUwWhTZ%2FOEt4L0U1gMti1fEsjxZ2sy0uGk9rYUpVzPKSqNUU8dyt9lPcBXCkLfgn2ILRFIAASi6A6lNe6K3gwC58Jussq57kGK%2BQtZtFTREpVq9s14caJh8mSmWSjns%2B3q3fHaS2jpf2olUuMV8Gs1X5Q8affL1dmHwIOM3tz0C2TBFaxbvnWVaR97Gnr8Y5Ud99QQVD3upeDNm04oOiwL12gWny8MU%2BhRBmbLLWby5nlqSFWCL2qdSOTPdy7%2BB4fetg1sB64RZs5w1RiON1%2B0A%2BU7JF%2B%2Fh2VCPqH7lZaW8KOxFmMHG7CLH%2FgLVaWb2NFu6YH%2BQm8N%2FPK0bglCktV8jQ%2Fcn4uDiGzq%2BA4Bc9ycA7PyMXGDVMVRLZh9G620IvMNay4cEGOqUBuXikmgS%2BE7yJ7OHtWbSfL12cenoKVed2kLSL08nx7Xpr5phFnjjb2t1zkveuT7c7U1t9ND6NUpm2OubUOwGOQNlXfMsAVc93Q3CLXfgWMZfQtN3P%2BCGcAmRUVkVGRubN0a0HJAh9FKSOEHMLH42h5DVSkxIUq%2Fpg%2BPtgPv7mHeI2b6Qiz14AljKeL8vic7MjcGlMc%2Fjv7mFmVsk07CKvf1dnUf%2FB&X-Amz-Signature=5d6068443ba6578c662b164024c1211356e092dbfe6ca663b43319f0330b7708&X-Amz-SignedHeaders=host&x-id=GetObject)

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
