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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP54ZH4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAYDRkGmmAPz9GxVqdKOSN6bbdhZBHxc13PD2TexHDhJAiEAraOi3nbi8LzI9SExFIFnYYUl2nD%2BPJcM%2Bm6Gflz3604q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDA1efRIE5fw%2BL0dQ0ircA76HLOJw%2FQfCVRLqTkVFgn7YcE6xOB0Bpf2spd7tXFqVEKL6AZn3N9bCVooSQDSypQ0ujOYVxaCc2VQtdltj668stnvppY3sfaXb%2FnnP5rFPKBIEkPzUfm0b8HQ6P%2Btfnl4ZEAn39BF73mzqz%2FD9%2BsYlpxwjY65Fp%2BobbfXdab9AqZzmyyLaerOv2arCHmNjlFX1ia%2BgnrcMVYOZiw5zHG7xAmekdjvM2PZvs%2BjDQz%2BZPWkbuPl8179odjkl5G9M947d0Wdr0wpj6S6%2BgRldBWp8M7fsBVaJwYNgWLqA%2BKhs7qC0hMY5o1pmkNDnsvohZ52yHSZx2Lppwpg0Sg2dm%2Byvs7V4WP9WA67v6DFWPZ3af%2FdytdjMemx1d%2FLlDjnykH5txCsmFY6LQdLKHMaAoNiyy%2F5Zdnyzc9Rcq7CsFP40Iamu%2BhMHCXEtxhSZWMWk%2BBjJ5oYzUf3pZ4qSAlX5ohIqgesKo1KeWIz5QWODRSm9HbJuU%2Bf2T9Z1YkZdionJbJwzy1bROp4xpoGyVEOPoO84xrBBQCi9pYwmu7mXS9WqyYX6YeSPgPNJU3Hhc1%2Bk%2FRvZXW67qE9opT9woJlCfU1nPP5XoCjdGUF99IcO9uvRVwdhG6Rn6M53%2FsE7MIy%2BsMMGOqUB828VuYAXt9jRsMRoCZGxpuseB75pdVrOjTPIujJBlY%2FkoS1T%2BKJUGT%2Fy0P%2BCGvOcFLwIekvU312CaEloiSSgywp0OAb5qMlFv6yeYqst9ypfm8HLon2J%2FVDhKEvUSo0dqugGv3ner2KcqPf8dgWm3%2Fy7T5C7qxVGnQIyHegIMqVjKr1KtQJ%2Bb4%2FKJCgeX9m%2BqaGUyQMkMAWd6TmdFwMaVTcHZV%2FR&X-Amz-Signature=01fd6ac23f02ed365b67d005820978b0d80d202a12617368aeda5a5587ed9cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKNSHJZM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCH%2Bhy2LMBgtqOpq8xIJd6DS5z%2BrY3Az3UznQGSZD4l5AIgG5DaXELgTVveH9uY1pb0v9DEJmY8KLSrdiKH%2BI%2F5fGkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKBJ87e53LXi1hreZyrcA3mBeUlFKxH9nVtxGnVOUhgk%2Fk52CRABWlApGwP6Uj9p8u2unpf6rI0nfTR3TLjvqEB%2FWA32Rf8v0B%2Fi74f5olMBuAKAmJ35pQm056qAtORB0pHjZlIKRiZVEi1b3Zt7BElY%2BsCDQRJ%2BVPkD5tAHVKRk6jjbX0iSAQNkcCiZOrF4JK1jZZIGUCaZ2ro%2B1Th%2B8u5O4DABkZaNFGz%2BDGs3n%2BMKLmMOEXw6dAWq3aOrPWKwpBSYSDTaBIdzTMbxirGmk1TZjMlrbtaZHtcdbImcSjTyiRO6hTX5bDieCc9oH5y5kR5Pgwo25AElAPcq7SvzRs%2FJoqKTegWQYeqB09efhPgLQ8dvREhXBE3CTDv3eL%2B%2Bk5FhnYlUninBmvQc073TtW6ms%2BjdHQcpFYGP6FW9WIIs9yk8etUCs4BJqMzOqtC9hoRSKZ8LS41CWOzSkjJWRgZxg4c7ilTGa1EJTQ1daRRXBnzW1rzvYH%2Fl3mrB9V6aZVmLM8l%2BwbSx64SF67kG1BUr9oZUt9DMs4kmkPNONLhEnUt%2BJRcGmWPUti2WZkhSCKtTqzfsQs47v8lhlMTYQ%2BXS1pZz5yS179IXPRgULjpmuTo37d0E1L6bikBRGLVInOgPw81GDVVy9PVbMKm%2BsMMGOqUBIOhZuCNsV1lmmJpbxhWBETeNmBalAbHAmrCNTq8qSgu3uOpt9GqIlTQPJgurf8M8DBx4XCIvfJsFdsu3MWilP%2FuYiY8uIwyf0hX%2Ftc6wdLFsFUEJTXOot90IzTIrTwYDvJPuXXtQ0Al1vdtTenAefoG%2FXMVivOejky%2BEYj%2BHuZT1k69B72PnI23YY5QO48UUWdtWl50kbHs69H3FTutR2xxw%2FOR9&X-Amz-Signature=e861df6043b70a68782f4481bc2d05e062eefea373776e88ae06f66c80ce642c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
