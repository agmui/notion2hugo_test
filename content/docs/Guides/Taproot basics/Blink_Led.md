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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBGE5YEM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIE%2Bzqm%2FdnFP58bfrGByvUy4XxhQttpwChvbiFtk09aB%2FAiBWT%2FKRdTgg%2FTYgseMmr5BFA%2BqN8%2F40jkIKTENkxsF16ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMQ2IGm2D3S2gg%2Fg1XKtwD5XPF%2FZjkGS63tqKcqbsWAOvg6sc2YeNWvyyYbsvBIto7cxx2vun7IIE6hUVKH%2FogKlDTonA8kqmhoT%2BQCsBHp5CD%2FKZGIHQHEEshZg9ZTNGISq7nUrBbGaEwT1HrmqYN5yMqXmBLWYVP%2BWMnj1qEBdJ6v2CmeJZuNpQV9z9x9Jvqk0p1eApD1a0o1Qvebo%2BShZxhFAQeSSyXKJmg9PnrBg5jnpMW9YclnyiXgV%2BU6em27dmN%2FQZxOPWGANx06QwKi%2FyOscak2WRT6nlg3CY2UcHq1MPsDs133sxxUJTkLxFirwQbeV%2BczHUcIH7peV02Gs1EEGwDb35FNyDIeC8zSTJyVFacuAR%2Bx6sv6J8FDfTrEM3ScYglMwfU0yejGoCmAz0PKiK%2BMIndXpMo9yyvVwRuSWTfoYr2CEjbm62qsg9AxokCJ7ublkDIvlbSQIRraMSXjnMgJKjH4z3rmecRZB6pffC0yR%2FNZVsIU1qh2a%2BKhlQXyxOfbovkXqs5R%2BIqARUgLgPHut0BfrhqikvMF0QnRLgEGPKC2Prl4Kl6Zb3gkRF8PC4mmgqCuVgVHVT1BRyS%2F%2BB%2Fyhnuo%2F0MZW7yt%2FJndqrVdWuR2eGiseN02N65z21QpRtAkDUNvZsw3qTVwwY6pgHZY3sm9paSlosf4HGgan4zHF%2FQ6TgBqgnQaVqOvI%2Frob%2B%2BTlrXSDQ%2BRz%2FD3gMzP2bd2DCJ%2FVDqot%2FnvH9ZMCXQRl%2F6R%2Bvc4eTnC0vEMp%2BN7gXzkEySiAUb2DgssSogX57ba6JISo17xWPhwu1HP1FKMO8rvslXN6ITDPpR1LDcqnOVVoB8%2BGQflVFiAdGF0UMQsV4IoV%2Fe9%2BCg8dSzZPjIqRNOl6SA&X-Amz-Signature=24c854c1c9787340b97d88a8e1f8689501adf9a67b3a26329f99b6520bd7967a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SFWZYI2%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQD1LS251Y3O6pl9MO%2FmgGxM%2F%2BUSYXARzdQW8LG3p7pbfAIhAN8NRmoaGEG1O%2BkCfhoTMTZXCJbk6K9Nrub6z8B1Itv5Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzNvHUTM9lZKoyeVjYq3APP6kb1O8%2Fx1u82Bg6Jt2aIE5Z4RdLgNjnxLir2Do2gTBAHyV%2BkqzLNOI%2FLHRmt3n0AmbsbK1tsRcJzNqI6IsA5fpMg0VwCEHthHKBBR3ii3Y%2BSQOtXsd4dMf4RU4G8UCa7QjudvBo5TsjAXZHOqRlPnSOYz78QJsYQR6vlzqbXHlEtC4n9DA%2F%2BNyf8MlOrBO7W39INpIiHqwWWQiiW4Cq%2FM2Ip1wLHjTs8uTapOdf2FCJkbE%2FEufxeZ9amqSv0OC0KLq7dKjdE3asthSn2c4DoB2zWki38LpFjaL9D7CHjDLqQZ5cuoGJdABxEgy7vyR2eWj6h0bjNr4yQKZ5nskDoISvkkF86IaJUqCzBRiR1FP%2FLW0%2BnmF0tzLPFhcjNGG8yx%2BE19T2X0m7Asw6M6djCXoLd%2FiGCwTcWDOARDkfYmltk4RuMBVsVj6TA%2BLwhse8y89PtuidDfitvaiJ5fT3IMAf8C4XUGnPRSp%2FETGnL%2FmpYG64ao6Nu19n6xQuuw7vbbcIWp2IsQyBnGyLcVTGtQrNq58ZtltO%2Bc7zDiRjTLxFxZFExQvHnlIx62JpkiQ4JOa2%2FvsYwpt1My81MsbHiZemg5C7FbVyXpZAF%2BMQQGf1q1N1RrfAI3GKNKTCRpNXDBjqkASeKfGXDN73cq%2FqLi3UK2ZEP%2BnCeC9z0JydV99B2hwtaiIE58R02Vhp2qTQO4FqoQxvB2URsSgHarptuTFiU59ENufBk55vtm55t44f%2F8C5D9CO%2Fd0Mgp%2FAoSJpsr8hTv%2FuUfaUP%2FdBEOk9sws3OrUscl8%2F%2FOGAZN2aLQUPrWB0vokwmOaO%2FoxWxTk37KfyEZySxkgJNBUq0BNVNvOzPJe4okpa1&X-Amz-Signature=2e738d0e5b2abe619bffa02b1a6858eef20e65ef20997f04b442819f4cd6bc58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
