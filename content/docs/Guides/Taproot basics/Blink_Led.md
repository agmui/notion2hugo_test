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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZATLP5B%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtNOApKCL%2FL6CJcoGfJHsncbKs3Sm9B9%2B3uKBi%2BHjnaAiEAonxXmfvTcFI1p6YAF79VarJnPciqLn6X15GM6Rp1Hdgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPvHpKCnNrj9uLBG0CrcA%2Bl4Zzc7onBkvKbMJyKJGWq3OML%2Bef0KJ4iJep9fDwH1th1V0%2F2kTsEFX9LKTGFARkv7uQx4xQ6QAp5Jr9Is12nedhEb68P44tQxlGu%2FwRij1lUi5pB86bRHKkr0UFpq9v7evGwpavQTrKwNISb6bK3iIN1halAddZZvGNRBPonKTTUEUCwqK5R8oXyZ4PD0ZKSJq3mUAdjakD46NfNUUz60kKERii4c8SSUQJSBeamKC%2F9ZgKoYEdURvMdGdOcdjEWQDozqZq3Tw6OdZCmGF4bovx9oJQUfsiW5yIfxZvXz0%2FVR0c2jTCZTSBqP6OPC0HA5cTydVQhDFekLkGHT%2FWzgRXqYS2U3uqz5O4RIHSw1n%2B9KaeE3txrGNcpP%2BQsc7fYy%2F3CiSWbSXD2ObLlwvb1Y%2BlGJWPmJH9NhEwhPdoT2C1FS0IOaZ7Wctz7jqzCEBovYySAuNcDqdy%2BAArtB4kNkVFodu1qasJqftkXeDh0JDqOfKgg4XhWxZ%2F6lxydgCnUnwA4yiE6rC53kXV1ua%2F%2BaQx4HUmQorJNVWUTylW86f84hDd06i6kTHMpMdNZT8TvD2Da3Wl%2BLEQBo974vjpFYr%2B58yOKTs5KQ5Gevm%2F4mi2z3q3dHJlwPkPi4MNX0y78GOqUBINMoMrwqPk4zJbqrf0WkgeCHj5qrIQIX7nlhCWqbE8Wz2OhKcDBC1UnW6ZWLKjx4Co48l4cKl1kp7Rm4zNY32xSJm6n1J6ODFLQqs5Cudrw41GwLSSW%2BDlaqv2Fl1NtF6VapmgwOHa%2F9D9VEJNe0YffZ2Qprdmu6JDpSW6cNhml9nTmeBywshtx9%2B%2FIC3OIoYFHVZ2AlOc2NbUShwmCdvehlZOrU&X-Amz-Signature=6342ce16036a0968c9dc373c3a657dfe105cda1213746964a48e0a2d65e9855a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHPKQO3K%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRdVLHeGoGJh1xU4lPd9CjUOCcbmJLbbvzOq31KptKSwIgAP9hVXtp7OHtHQnxW6StAoEPW4O%2BzrJNeWt7Dvr5Bdsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDHoU3yapJk0OaDRALSrcAx6Nu0ePUruQVbpwbG97XVuRown8pkmBNMWfbE37UqeEwIUH%2Fq1ZdbVUwFBTkWZgK%2FfK2pBIAsMeBFq8PbV%2FYvSLLEKDkqt6FC0bIz25dHNH21C%2FGyE2%2FwOKlnUTqjw4EVG%2Fcudicy3ByWJWzxqk4GPUet%2F2RieIFLX3SvpHo3H2ZeBF7uRYUTiEiTqgEiQjM53liOd8naemyJIqD4VhW7LS%2FGYDemuzNMQX2Oi0bRAc3B5Pzd8BY%2BInz8sp%2BZwBw%2B%2FGweoOznFHrn%2BBud5i1ag1IrGuw0dWDhTxdV%2Bq9mL%2Blk%2B54%2Fc2DNNQRWV4RrHcf4Jk4Y5BOJ0ug5GuffNWx6C4yYT0yZbVI0Rlit7%2FWoyqrTVn9AZDHLDtal9kLnvgvLCAUJUYA423wJMyugkscE9qB93UTnYX%2BaYAbo%2BIax6loXurY%2BwOpj19vr1aCxf2ASe8ZeOGEyZDJyFxQtb9SDE7cb6VaDrx%2BoFtUkKKp6cBb99jLGrD8FXrFb3GgJGv1bB4Zl1qZPZv4UM71ZJYYmP0zPXTjfNm5cbtKdqT18VSiaoZQZMWxtJvHPG2Ipx%2Fk690J0bgSLwpQ56btnTBAIndEi4Cl9ikBuKxNitCKjM0rvFJ80sonf1vhFxxMIb1y78GOqUBC5b%2BQp62wMWJ%2FiIf7lMGEh8MYEjrp3pAcvmdvQDys1rNqUoAhU9EZ19bSaKVNpTNfe6k4ynnrtnHmygBjFviNW4ujp%2BEUxPapQ9MqhJ5p%2FPZhlC7NY7dYZxGjS6Phsx4uHW9k5P%2BNL3kEdxQkSLr5uEBmilHoHoVxRm483O8BTaYGeG7DKLRZv180qftyVzQxMlQBNTq8Gk%2FeoYGVxHEKAa0EMDn&X-Amz-Signature=c8e3c00ee7ef4d049c3fc99daa7c38f0ae6c4a0a70e56a62eab8e2d3ffafbd8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
