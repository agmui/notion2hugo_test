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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSAB34XC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIACDTA%2FwJYpxyuFL%2Bd9aHyK5FsNwg34njA27yqmv2XNoAiEApL69j5VwaM9D9uhiST2IMEqc5u%2Bj08Ra0J%2BOYocjiqoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWV68nMuRFqpzUZiSrcA78K4PDPcoVi21PPRqdR2x5k5mDmZfQa415hFQkPI3fvsX2WxMGx%2BgB1O5P4S0aPLzDr%2BfGoZJ%2FvsJYXCY8vfaqsgwnPqCk6YWEQs1eI4JrB5aNP09wW2aq0w6yj2IDMAk3pFr0cahHij61j%2FH6J%2B7V08F5ptWM2UCDqPid6493CalUaAyUK25%2FTnwYxlaz8cw3ws6u%2FxdX4coaF9kC87B4BTlDblJSUpFLFuV8VYbMS1heSOnT%2F63nn7NtU6J72qW5OnB4yODNUzTeHa8NRuG57DL2fRxpje%2BpXxuYp7GBLsJLlocpMzZFnz7eGpnN%2F0R6dKP25HySxKYi05JHGoqpIDOM4I4hEGerMKWGKdy%2B3orsoFMTf877h9rjJbYMr0vpocu8sinYDErnLdIvRPLT87%2BHIUSD36oXN1YHzL0oaW1inM712fl8i0JzSFw5e3VMdKCqbeyb1AIlxtyiwVCaPvAQqjGA8l%2B0F2u1rfD1RMk%2FMW1k0FS4QZIZoF%2BHiQC8hPZibeJNIuNcKOpJ3O1dDus4uX1kdgt20ae0u7xkmFTgzFPJVoZggzVoDMd0D88TuJ9Kc%2FyZk8XRDFYRtg%2BDZ8%2BYGBV5XPlO5lv0mCFUv2V97KH7FyoxnBOmuMJz388EGOqUBgWSl1O5WKNxc%2BZdF0URXKhuGpCnCTt57h%2FOfd67jv4tY4Z2Vq23U%2FXoINeMd%2FWTocuC%2FbkXcsENMkPPFwoPayXcjtmv0VM5m6pkTb3X9tGjr3FnRBQhXI7cJ1qi8lBRSHrdtkPxI33hVleEW8wM153l%2Fm0vnJDbmRGXGyn3uIXkaBAncnq4GLCJTVYrWRY1VWax4uOddg%2FhvFvZ6YbbuyXBIiwDW&X-Amz-Signature=89fee07066595484000bd1081ff69afc987811a13f503bacc039a44bc2bcd5da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z67KD6E6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T024238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsyDlHgWGFPRkifLRSeFH135IhcqfxBZ3ScBcm7oi%2BQAIhALT6gUsapD9Joynk7zNcVO8cNeIpZQiBtqD90itMN0AvKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyxR6fzD2dZ192C2K4q3AOzKeY1HKr6IHijL%2BoYuIa1w3iYlJRo9W5fHdsPh3kw4kHO8eM59n0B8K6LO3BrJbA%2FiwJBs2FhaPSo5OfpTKid4Y5PFasLitr7NmdTGmywRWAyYaGBUnw8mz4vXjD40L3vACgc5PB4c98NVRIXqPHn%2BfjkndJZJVqc0rZkwcGPn9QxyJfB7QP03R%2BYKof0LjKyrdeDJGp7cIP46gSQ1b9Nkgbq0kORL%2FSLjACcR0MtAsjy1xVnSG%2FLUHqOWgfRDDUuHnC68Ff2ivB65lCf1Dm2GXOAUpD7e%2B9EEHF1OmaPi%2FJ9v82GRqTzPsPcK6mdSw5U8Hl8bJehi%2BVm1Xe5Q9TCDFSIdxeM0pktj370a39seu75RQzo%2FOV%2FKSg3%2Bz4GrY4Msx7TKb6SRhvNT71zH0JeA0%2F7mVtwX4bbAnPF7Rb4AvlJiBj5%2BUWEs15T1X4VQCWYIMYUUnC58S0LNVKZ1cW2twPVumHZT5afx7PEstli76kUuAaY%2B%2FDA44bwiXiO7VSljL%2F29OBEtxASRLZGtU6aR7fb2zHKcfCaOgyrLSMGrtWzSnzCz1NTB2VYuT2cQA9uCEofNJYuRI9kXp3zQFAXkPzkB7Ps2rnhUvgGIBzio4Q1Iii%2BREijJ9XYpjC49%2FPBBjqkAZ1fSOJjm8xESdhfoAisNR9kIMSMOyDW8ffcYL2bW9pvct1%2FLBzlSvNG2htcxfWgV2SToo1WMs2SbtdxlIFJF%2F6VwyGcHpk0f4%2FdGFYS4WoGJgAPW90cgtYmFquEXw4Cv3Rh2sMGMCXIjDSgk0BA10A3LibGOA2dd0WH3jfK3XXN6VPVtoU8DFCx2S2hCb%2F6JFHQj4dnCrcpCbm1432O1bPQ6unF&X-Amz-Signature=87dbc5f4f9b6d73bc79ed0c9d2169b2830fd5980c11df0ca7bbb2141bfa2c854&X-Amz-SignedHeaders=host&x-id=GetObject)

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
