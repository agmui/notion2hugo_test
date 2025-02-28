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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652DLA7JZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDLurWrRSMocZrEB7cNFsZEX3HwMDiBzaatbop%2BBxGCqwIhAN4dC%2BE5FbN6FHKMQZ21TVpZlvUU6rO8tBOOLpleCA4pKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc4SPqUmOQ7uwtpHUq3AMD5Typq%2Fsa5Uw08wPyZ53SZy2REY5KhCxMcBkf2c%2B9QMKTTU6qQ8UPvT31EqVxB6mg8EwfVCVEODBC9KRuPSR9ZIDTjZj6OVXW9nw0hZ2NETBw1P5h%2BnftrgosfQJyRrxLtdX2PirESdZEKXg58TqY%2B%2Bq2Ipj7CqhgOLIrbzY6fmE5rHBLupEc49QXkBm7SeeU3YGt3KgZxxtCmqV9vzH%2F5ek%2FpkYeFHc1eVkPlvZh9B%2FYZeUjuOEv5IJir8ujJldvplqLQ0NRdacUuRPwx5653tjO0rVd2tfbF8vI4upGVJ5cJHWDOD59nLdSUhhlMvtHiy0kaFVVm11pQ75rWd0xe7vBSJv7590MJnTAw3TfBj%2BBWl%2FMzirCos3eC7CnGWxEvncYUgSXyxZRcwp1WMckC2DchQnqmBo0s1Y8oIAo6REcnh4xh8PIjMRjEiROip%2BPozAJrDFFU5Z7tfWp0j36Lk7AYwx7cTzxh6A3kX1spTuPQk9QOp2OQdVgeL5tCHLvAU%2BO%2Fe8ueDUsf6pwhG4zF5VLxcwbECPeB72KGNGovgpBTFucGHkzjBtu2qaevoLav5uPR6u6%2F0xWPbGbfATrDZzwI8Ki8%2F83albWkINn3ieYsFtnUV8ds5PRcTDbj4W%2BBjqkARsPaEUkia%2FNWQcT9%2Fv1nwUqs5cOTa17bkxMxDCOkmMMVh5L0Af8mvwwf098KoQMWIPG432sddtSLUay7XYGp5Zr3rfzi41%2BT8q3PLOisYNsYcqmgu7oN5Bj856SAvnokzYkpHgz27XQEHtcPXwsyxNjCcJras1sJbK%2BkuByaH3MearI3WzFO%2F%2Fxz9H%2FhCrjaEc%2FzP1F2DIyPk9QjsLpk4oG005l&X-Amz-Signature=909e94ff161be4938823f61f086c436dfaafb5cd23e122eda3094d46a1f2d7ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QXRR7J%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDJGxhsVZIoxGFKZ39cxLzHUMp8od8G7ie4XsqaoGXbUAiBh4h86lp9e0W3H8nSDTpsDbGw0kgGF%2B5zFcfKTFeGICyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrlVPeeEZ2pZLkWoQKtwDrUXMl%2BbGhzszHroIn1vb7YHgFxZ2yEh99bNcQjneLk6m40rhaTYam7Czo8MwJPSlpGtSii9uRe2FV%2BPbzzA266zk0MVUQRLiRgkQikzAeXwdtA99rInSlirHfDkDP3AviyPoAMym7ukkZllkbWW9%2BAaIEsmVTRri2pkzW3%2F8RTFALGIz4YC%2BDZXj%2BUV%2B5g0HXclDFOyGMg60dHpCzejS1BsAUMlfveNYzz6TrIpVqdpGGGQMZaLPwA%2BE%2F3fyQcSKdMK%2FnYKizcn3Ws9DWSzzG0LjPOHzyF9xfIPtn6NIZDyIjsdqVO6tRFbEObsVrB%2FwRBmw0u3j3%2FtxD4XcN4IT%2BlJEhFe50GQm2lEY7xhJr9CAWuWZEe9I350nGNLuBURsC76ovJ8J1ziM76Hd4lE0p7zN%2FmaAzoSCvXgOWwpWG%2BMSUZ1QBE1uHEKFwuUQ5U3IeTIHUAOnzKCE4DQsuzk7YbQGBu5L3g6vucGjW%2Fy%2BR7GYsyF0uhI7DS8MPva9FSl7feR4Zb%2FFlq%2FLELZP9JKE1UL5swEWrf6ZELaBfjC%2BA1Wf9X0Iw4cwmB32Mml8TZQMy%2BCqDe%2BWmSuh72Di%2FmXnbSF1jCcQmuOVnoWAvy0rlAgk%2FpYky9tbBN8AdY8wgpCFvgY6pgGY8ens3gTifeOxulbwjRow5kZbrj3EzgDd45iNO9GYoBTf4s8DqYeDgu8OTADigc93ylSXkEtYSho8%2F9Q%2F%2B37jt8g8iVtHst5vEfI23AwRIv6gtZ2I58DdvvE59NSgeoVhEt3u0aPf1JwJwa7o6XRxxmBwsHg2kzFhp%2BFMddWuQCdR2R3BTXqnsDa6p26tvHhcrkIzC8o7fQUtkXOBESPcsNSpblV2&X-Amz-Signature=14569b2ee2b8d328e685b682dbacb801f5a6882791fcff649241561e74a130b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
