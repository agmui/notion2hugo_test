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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJRRQWHQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCKXztZhUJOWSvZciWi6%2BIroPKRs%2FgJJH2vqxjatkJmMAIgH7PRIU7TXEcTLsqnHNp7maAFpN6aJFCUl5zJ0r0sTCsq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDPGNBtpnXMPcCf3ToSrcA0cax8ZsOr0%2BCpMFTnah89Uh%2FGglJYk2jA3zjtgHTj9BHbDtaNmuqiBc8tbCo%2FSTzZubtFdIvAlXqrcb7i%2BGNaz41B3ahhyJA4M17vQGyzj3OEHSvDg2yUCV6s9yZOa6zo%2FCHuLvoyt5E3YwXmZCBamYk6JS0H5u%2FRcWW9nQ0PGBdjqQ2EYb4G1CWpXCOv%2FjYYfRrCuVMKD8%2BZcqpEOGw3ROO6nzCV1thiL3brs9Sdskhzlc9K6VzgH03fh4XEqr0JM57NoXc0cdm25esxYj07eU35hlKolEUjyCS25hKg475M4FO32maorq5EIKaxkjaxcvqoDNXndADLE%2F3CtKKqJRFUWnSOBaCDgoLFnmb23Th9rCT%2FA%2B%2BI0mYljfBe%2F7M6lCU%2FgsV9fsidWjaIa%2B5OXAzyb%2FI44CVt1N%2FwjPCNPfB9%2BtZUKmWBWC1EbZwwI7WwVUe7XLLhTlh8CCOXrRP6xY926r4LvtFykaiz%2BsZDTD6RKobk5ok2OoE8gYG9uFmyazMPs28feuz9c%2Bjhe5kTqOQ7wezjBXvioIayEhN71u0Bi9eDS0d%2BIp03pc1VpHx7h745H%2BWi%2B2OeoYghEQOwqUrOv3WphZKtzzDhVjC1FVqodT5LRfCokb3S8zML3BjMQGOqUBGKQHbRbrUoLjWBS8ClGKx2fuPCjMPcHLn47hROh2Hi6gzxsjKbJbiaOtMRImjk1hbvuO%2F9s0wKWF62niE6z0d0RysCmVMObGThlOjMeGfFhD4uwiFN2L%2FoGGZo2489YnKMKenN2JDRVmZ5Fs2kcuXlmTxpl20aCUUJp%2Fk82so3G9o0Y%2FK9HtXiRwEYK4JGVp9vhNzsIj5OC269i%2F18TDstop3gKZ&X-Amz-Signature=2379c6c9c988cbef5cbd18fb15088b6c8b8adb49e834ed26ca6d749380334e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCVJXKB%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDipr%2F3LvmOlrnOFMeT9PBLn31NPnLaNxNP6iTWrR%2FSwAIgWJL%2BBNSsB%2FBZMx5zLQV1D71cc4AkA0%2F6GpRmWPrCHZwq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIUc%2FMJi5yP1mETNmSrcAwhmxkrcCEVM3rBRIu2si1OC2%2FkZhYkhvnVn6UasB6aHVEJKQvEB8BNKN9I6NT6PyJjuS0sGgxECioMpBTfbwmUtwqkygR1ZOlD3tytctIfT%2B%2B%2Bmw2O3YWI38hhiS3Df8Zt3hz3tNnBoiw2bY3wtue63tR8DJGSycwtrL1Vas0xJKpGUs%2FGdqgANHcX1IrOaHy8YjJtMtNO6Ug5iobf9TKAAL82l27prg1nAdWPfoej2fL8M91VWCVCMp9CYoUtaRn9lO86ZhZSD9GoRgNkcjLid8JxytzT5liH6HUrAXfMKLnTF3X%2BDMNF1rSPK%2FIRzwVZxPo3UbYUSwborQvaYIdXeJSw98826ESsXFluoSPCQDW8eRUFtLE0O0CY5kfNwjIGteY7HBiU9TwEwShzcTdGebUnOMZWATWDwNdfinYUrzrruogX5OKtLfKegZHbamLMZFaIy8ji7FdrMh%2F9meipOzETuxJ6IoUNoEoTAuv%2BIal03lYNm85XE0aLSDFUJYl%2BJKFMOlms58DJjE3pLDlTYPUjXV2O6EFzJyjJ1pE85Qt75lbNOL5HBQZS%2B48nXgEcYvvpPimKJ95WFXRfddOvOJXyd5jmtRdcNTZcEaF3AoJwG7R%2Bhfb6K8EF7MN3BjMQGOqUBzE9Zkq5hj0BHO4wFZJeXE5zP3QGdGpUY%2Fdr05Ibq8vYDvief7FDw5KpR%2FDuEto4R0uLPmjdMGS%2BJ7Qn31hXCoP38uogrXPc5L%2Fd8itRswJGxpzoMysGYGjymZZGawlNIRzFymE2BGGrUsdtQki52J%2FvqoMgoy0JZiWqkzojXcY3p44hJpp%2FMH9NoXENpSUIYtH%2FbKQU2wIPvR4KIDLso4T7cbfC4&X-Amz-Signature=4e4be2d8b67bedad248e810ed5f5e0cf8a7f7f83379278bb0db8a5840ca950d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
