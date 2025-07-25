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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MIWYIO7%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAbkjaq7qurwYpz7TNJrCYg3m7yN%2FswLSTRNlGZ20BXeAiEAkl%2BIETdm8Xd6QxPVnfatidwcPa607Z5rKsnsQj2Iyr8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAgjtLfjaDlQldy3TCrcA8C%2Bxsy%2Fn7N6ndpdQVcRfncW%2B4KxZpYCxoPRjkWlb9x3BXcbAqAjzaw%2FFmYCwfgF%2B3QML6BIrUB0cJcG5E2ENjqpdyqryvr5tABAxfTCQU4lK6Dm3UsWCujyXykBzg6Gu8kew3usecQcvCgQkJupVTzM7Gw4cxXZyNQnF4%2FonY0T%2F9UCraI6VouzZvSfIRATksyH2WWQSQWnB45cjjucpsYZRdNjAkOHh3d7zeWtYUe4jNPo%2B105xH%2F6AFZYQmnafwDej%2B6CitsQq1qqk7q4r4ckRDNku0o1Pqap66B%2B44uNhnB3voDepx%2FvG4YSDH22qhUH5bGc6TuWcTtmUaR%2FfI11N40itazKR%2B7u0Shn8NjeW2NcUWngLTcgzEZ6MJDl%2F61WlQIWyiCu9gTwQHHdSI6BKP6Z90ladDBaQP56ipfw1E8LKGRZc8wNH81anBeNqbObEM%2F2f4cdaaj1XmGrAF5aGESOXdZQKkyzyoGjCjEBdrNqCSp3OxgiMbstMAJSfeckZwSIxrDVncu%2Fg4nx8ojG%2BIqYWsNk%2BmcB7AbFURBHgn7KMh1Q%2BuV2poHa1vOgOUW6cJGEXKy4MLz1GZyxDY%2FPkkC1c1HBrnW%2F8%2FPUj7f8A6lFEFEnzrbuIiHNMOPhjcQGOqUBtEWpGlIPnmnILjdg1gW72hG819zYxe0zaTCpkhEq5PPjCyC07CBvkSTMKV48xOAzBICIrjYy2lX01H4ivd79whE0T1FfocsUyz%2BTNi3ff02PsIpMeKHzNfGemudqp9O0PYAAFE7PAHbctewJJjINDRacyOhPMwk7qQ4%2BmHGsE%2BNOF%2BB20AD6iKKXzdMMqqvZivvltfDq3EwUsqoW9Vldv%2FTTt7%2Fp&X-Amz-Signature=f8faeb6ee58b0477dea3791da7d6056d1180b9444a94935dc9d75ca51bb68f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QNZFWJU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCID7MV90aMaEza4A4S5IDh1cyfNiorAHRYCSWz9lr4PknAiEA76%2BbnK%2BuVCdZys6%2BAGxVDUUy87F8bDFvsuvRiFMDaNgq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDYbqyFYIyuexmlwlCrcAyzYDeAvgV%2FcM3DJPe1LiscnK03uawX6lScJBMhHgpX1uPQmF04S7y2yYi09iN3uS8CrKaBNYEAez1yVmj3rgSf3gBK%2B5crL7SFBvswq2Zpnipsh0hTaVwYBSp5w1o5BmfdoxURp9T%2Fr037N326%2F0%2Bxb4LM%2FvyVtr9iYghXMVn%2FWu16apVog5ea6tQgIrtlg68S%2BNSnpmYmYZAvW%2Fn77C8QS2OKN4K1So285q%2BLXwCA2ApMYGuIKCy2Dn5%2FLZLIzICIsP6JYetQj%2BS4ppiC5Fg%2FhUD6S1omzMNwG49E86kqwq7kBkYSpr8Mwlo29lL1oUYqgfy%2FJG2k9j1dDJjZ7fHwai1mvc3Gytp5kONmFZmO%2FtCnXGhV1lAMMUOBuDwN5%2BMbBhCra7UZN6kFncuucjmtxz2hDxUsM3JHiOYtQwgtornHyYGWs8h%2Bmdi9PAH%2FAn9Oz6WC2T5kNK8ZSJ7CR4p%2Be%2BwIAeDAb9Jt9Ff7B4CgiajJShvOg4XceU4xMbKS2jmnyrXgq436Q1S7hGLo%2BbnEgHF0DL%2F%2BttZXqZ5%2FV5CSfqLHCTnlMLzUmclrRayXaInEtz2%2FnyVNZ0ptdcWbClk1vQZPuPYWXubWPlSdLjoEzOcGn9Zf5aSyfQtgnMKbhjcQGOqUBbH06gDjwLxzEw9SLrom7eVJ3pHzpE%2FvZHR5vPj7Vm7LlJVqXTg2%2FBHmXofb%2BoVq2cRb%2FjsX%2F92dnHD3CfwmWohi7KFjEnGp0s74vsK7tBZveHXVmP5jRxq6v%2BqpPT9U7vzFpkF9%2BwKjwtlreop46kMcnzHy7d01JIvZhd6uGE28dUfFib4uoikt3pqEZN5E%2BZLtlAtjxKCRQpvm6BoaR%2FOwkkEAI&X-Amz-Signature=cabf33c45c4852779ab7c6b4bccd40762185bdedd0b403e78243d20907c0f5a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
