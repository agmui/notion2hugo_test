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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7OXY62E%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIDPi7VRyVq9rKMgg7radgv%2BdPi555YcSY9f574IjpNtvAiEAg2g4GFl8Zsb%2BD9nQtMUo9Fh9voPvmVdRscz2UNLUqlYq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLmeUBpzlRlCgww8FyrcA6bkPKo3SmA%2FKOZZD5E11EV%2FJgejkT8INf61XT4dY1KbzVb5gN3jIK1krvuKBvyKEa3L3RghQPl9f6ExktLyv1Sr3QtpAMVUAmdqN%2B4cUoezKMsWLpaxH6IYwgd%2F1Pr4YmwrF1v%2Bc9UUXKDn9yn3pgoCnpARErdiRMl7dL37oHhaQRQRSoQnnIASmx4xAnKJheK80mX3xnu0%2FA4XN1tfGYOw2cS6JqAYm799BmF8Wxs25jH9lTVcqBQhsB%2Fli3htohAGhIGYG%2FkxlUPTWMw3%2FY2hDEAIGV%2BV%2F%2BBCfO7CBGoWUB5fOzWz2NyRyOfH7YXnK4k3IwcdKoTNVuh8gwFM8rFaTXJLNdOdTVciRriwqsZ%2BuvXuIH5aCRE2NrWgvXtjbEOe%2BcXAJhXVJtuCFi%2By7gQjY4X%2BYBaBSY7Rci%2FhTNU50JyLRK9xYqxfAsSc3CNWuebdD8c4egqeGsf0RW5gLe0CygK2kieDO1TxUw41VhgyVaF7yHPdaq38ycdxxZ3COOCq9XDaVdNW26%2BwRk8gyjnx8GZMfdTLP4mBGUMnJy5DmmInScFfwTUnb1yUJbiDeJ79BVn8HOTcOwEIdIP8ZAa3xUpd4BlpcS%2BU%2BOfrS7Xmbd6a2mvXie7kXzV7MNHDxsEGOqUBMHFLc71TUBsjTslA0aMB6SrSrs0rSLKTL7b7t9kONT7f0JgkHeF2HtvmThHkcn0e%2Bc4WWz1uY1mGyIEtTIt11qNKhdsT7nTMJygm3MX38zMR%2FvtHvY9ou%2FUou9aVv3de4clawuUKrFjpsYwu170%2FgWPrpEpBoiGhcqld6EbJ7K%2B80XXZOfmGBH1U78mVCWYUam4x%2FqGW3F%2FiFV0Q%2BUNeJP9jN%2B2E&X-Amz-Signature=0d569216042b7c2bf0bd7973b6dda9d908e2b164cee08a3ae165e28eaef47212&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AFR6ZPK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDNnouONzRPXAUL3rG8yCx11Xe2Bxql9cuhDXLZsQXjWQIhAPjGOQBtJU02WJHVbz31EWx2FPX2ohFYPz1b4nkFtSehKv8DCBEQABoMNjM3NDIzMTgzODA1IgyYlnt3GCPFyG5DxaMq3APhQWIfZ1kSfQjPdYFgJamHVVXSrweOqiBNsAvYYEUpcBNA4maFAZQYkDR7z0lH5Ts6cCKo1mwE89WEhNmDmACzCLXi8UjvepYFFVdpRzj2Ny3g1hp6hwROwpKDeMpR%2BeY27JGYEWYGYjoP58fqnpRN0glltOcludk75ZkirLyDEt0Vs%2FDGy%2FCkL1Vd20zjNwUEWuI%2FSSH8Ad%2FAEd2CBWg5xyf%2FimnogOWHEdljjg3NguskrJ9pE3X0VnsH5uNtX9SfPXp7ZybRBXlxdhCtXlxecV%2FTvd13f%2FO72OgN3POD6KzUbPQ8RqPSSvOnfD%2B03sLmZJErR%2FjQZRWpL92Tb0ZCFbwFLrCObl%2FIGuTzTJ0NSKiw019yZXO6GDT%2Bz1v7o4%2Fh6T%2FvpQZnBZnX4CzWKwjFHKLXXx0s0lP2MNp5EpWFTVYpKeTsL8DXUjnCjZyDIZ2wOp55g7x%2FLn6hhmJFOZRWtXSPG1IYnQx%2Bpj9ZWrUb4WfzzkkY7Sbl9VTQCs7JDfjrTSOiUHnFWIPKvPj7pKt5Z3vNjSv97YD8XV20tvpV4WqsyT6LGWZuRzjbbh7gqJ%2FusPrkdw9r4AIZH9cmzbTljZdD1s7Jq9rYXi1qHq035VVrmNvhjlas3W3ptDDpgMbBBjqkARs3f271j4rWKTh%2BHK5VRlD10Ef24hLGprFXSyoK5R8HmEEOBygEHkxjvYUMKyVU2rCx3h%2BK%2Fjg3jYIO3pmfG3hsyZ3E25EhMC3t46cHRnRbLm8RvRELxh%2FkG0SSrNRxjW87HfLNj7f6XPj0cAVDM9CayLd56OKdJ6SF%2FRF6%2FrMGzpx%2FeXY8I1Fvf2qzM7vlHcC3fgj9Vl2otyafg64Bd6fxufHI&X-Amz-Signature=2c6d4dcc13b1340d34d5acf3aaf643d45e67521469baeea85b8356b30d70f391&X-Amz-SignedHeaders=host&x-id=GetObject)

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
