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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y356NGA6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDLynIMtHdXnzw6I3KpnET8nRxhzFUlC6CE0hYBdNfJoQIgbDTwn1E56tcdsrYkwfZSmTlQODl3BV9xl3GJU1HrKtsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMoZt%2B8YFn8pC5wRVCrcA41Eh8dLx4WaAXJgN3mwUNO%2FKi29hwM01nKPHeQUxiVcECgaygaWxKVFfEiHQ%2Fmq4RmNMyisMgPUaZtlvxYjrTVBhwW9O4HElLdNYzcplqc4cGs9rCcWNyPzRnc3Fe3egIbcSgl8xZFHQcOnmCgsZQ4BD8ZApNRVQBp2npY47j9vmjuvM2Jc5xvoTFuC2EzlR%2FQ4a0xPUwt0eGECz%2FlmCyaSWED5hxPYZjU6%2FGpzDWZixqHmbCnvq56rU8sr%2BNHSpT119%2BK69KKvG3QjoB2e1%2FISyTyF%2F26znnMfIjNQtI9BhQDNuguxaUCzphQaObTiilDRFliveam4MuV9cU9dOUt5PH%2FinJ6bM8ijY2Mk81%2BZaVfxuaMMaAfE6QJ%2BDZ9t%2FMg67zNx6FXS7WF%2F4tk1G887tbLpitRjRB7aSZGU1UV2yMMKGI%2FhWWQpFjZQgHgMtL503ZRJ3KvMfZcmW1goZKv38eaZXtLuZoCgw12i8keqxv2IKC5mroOjecm8EuzXjieX7hMEWOFEaXCtI%2BfCiSthr7NgDD%2Bi82JtjzZkHerHJkPCDftyAIyC94y5DeGW1lUv7rjDNka9e39RHgzunD3Lyzokf5LwsVwne1ZGcReVfRdS8ILxawC9rT5IMP3bl8QGOqUB5%2B9GsNqt9Ya67rILz0o5R3vU54DAQeVBb7Lf585z9064EledjYiYYKoGw4q3E5zgyt3apNK%2BczTvS4f61s%2BeZ7fmNGp4ous46x%2Bf6qh1TXKcVM5O7s%2FhtPZOKRcZPhWvTyRHZ05I8wH3qmlSGAmTfq47PMvpqsGeDNexxc%2BSniILQSf7OnxPdpbScchUUp2km9lsjdpUTURx%2FrT5%2Bc26A4Pn51q0&X-Amz-Signature=b48f0fec269cdf05ae1c162f85e9465a6a1861642dda40b791536009eedbbede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WUQXRIH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIDBOztmt8vN%2FKKvfMXksjSbd75XGEfg%2F%2FOo4%2FKuLKoC2AiEAxoVoe3txHqrG0LIdxs1fxvw%2Fusg3mXH369WE7chWDv8q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNyOFyp2QjCQxj4fLyrcA%2B6B%2BYwGNYDz10zqj5rxIzLbK9FFJ7arUXL6w3sQ%2BVU0lpom97%2FYfWq1OzfD79UWNlEeLdcYtPYZOn4UNezN4EKsYKfpKPz3WnRKIH69%2B2mXK1kjzmsd7BGCsufUCA4RwQMHe8JBa%2FrlSne1oruvV21ohUL%2F%2BqoS%2F4j0fznr3yglOf%2BAvhEsgSIeVBMLtritHjAs%2BiDE5yIxELgv4wEItUtJvTRB0H%2FYxXAIRiSLVxKeMUTDuUhmm9iWUMSmBsRgS9AJP%2BUm4AQf%2FWtZENedBhH5rgeaUiCNXMEAwCh%2F%2FBogkcbyLLCkdR%2BJwIoLEdeo42T7VaOQ82GKPd9WXaGtyBTcauZKHNWroFA49sy6IsUI37bD2TW3ZHSsS%2FCO6s%2BUlf6Inig%2FSZ4t%2BA3gXRh%2FzbrDrM4n58lfAygaf24c0Uhx2wfxn8T91cO3T4wfrrLRgPs5M%2F92%2B2KUAPvlml%2BfvTcTUivNC2gesphF1q0mDMW%2Bw9iiMuXbK5UTdu2UMc3Un8%2Be3gr%2FsVP5dLFRTFGJcsg5xTRrT8p6yDTKxxjuxzc%2BVfbyWOcvpxmD%2FtRZSAhnf0MZtomXLuBZSA2A%2F65QTOCVV%2BnIrCC9H%2Bxh0NcyqSpaA0i53kt3%2BJqIYhP5MPbbl8QGOqUBk5QMHI7E2nBN5eM0%2FjUvbyzUc3SCGDOipZ03Jn1FpJT8HsUfo7tIyAEqBfupwjYFFGKfiO%2F3gi50xGIzZSchtfiaq35QjNw0mimoec2wKTC37k4UtiF3JkGctk7ipqqeRQo%2B%2FrNKZi4rV4M6VlPKYaRfvFYim4cWxYVNk%2BoLvwYQzSb2ofAGxDPBcO2pczsIm4ayqP%2F4ZeYjhYYLbd9kH%2Fs73WR%2F&X-Amz-Signature=1d797ebfd4dbe6a31ec2f1c2362a1edcaa07852d92b76c4007169c2a240a7a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
