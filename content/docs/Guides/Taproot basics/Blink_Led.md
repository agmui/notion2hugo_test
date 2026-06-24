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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V262YXI5%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBYYAUaYF4Pm4dJtL8Lru8QCYYgkFl2lR0NI3ub3KIPYAiEA9iGs5xRKfVXnaaRdXqPZwAKFkMGW%2FJ5%2BdG%2FAzZf1GAYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNjrUK9Z3p0krT3LDircA9ZYLlWfMvdYzHb7U%2BvvKLP6kWnmXBOeDGCZeZhnL1Qk0oYFu4bcLxfAlP3QZBX%2FZQ4EhhbWV6oplmtQ0LBH2NBOQGAG8mSwf76wsgY69jtwHampuN7kDJd%2FD66U%2BoIyYORd416emTXq6zcqMn1IEoW0yfYToexS5eLjSTbyTtsa0KV8EdJSw3ikw071jP1fuxQWaGDgqwSQgADkHGNOR5PdLc%2BC4frTu5pRr4jrvwijd6QzYEwbLL8Lxo%2Fdte7%2FUHNwZaMyf618uhrsSQAyItqO8uJynELmEHCGo2Cmd5hFaMJroj9NdZIgTb3ReHUXNgN7kU9nSK8XGbiiDOU9I6IRkgaODOwMEzpOzSvAdicWYNXxQAhlcEf2I0zDzaraPrmQweCm9ePryBzmEpb%2BwyXYVxcMhfiJ5pntWkGomF9EiM5F8n%2BQxVlcH6IrqdATQKnwQGcldlFTeLYnQ6LXUIvrWhE%2FJ720PhyxBu2PENAEuQzqo6AlG2nlJZ1uC1R%2BY%2FNCclro%2F8syduQ16FKUKa2515wC5wjG6PocHq8VdPeR5jHfJmHjL1%2BpgmBksalEQR3QPTmw3c%2Ft0bJWHxaM1MS9mZTLZDAXA2SFUv%2BQM4ti30pRgPVClfZIucxeMJfx7NEGOqUBDHaZZe5uTvSbWGmIj1rL2lweA5Japjg4nJotXesdEEgfeYdhawnyeX%2B11yEK6NfiAjdc7u8w203WNtsY982ty71M3N1Gco5iTU9h2DM9Kb2%2B2Smx4FO%2F%2FWY%2FHA%2B52ZbXG%2B7t6nuWZOVEiJU9uJj%2Br2ZaySDXyV3rIUSp4cnmBA5goT9HXboU8cn8czOU7Zztv0e926ZYA3nmZkzFpTQoIJSDI6Nz&X-Amz-Signature=c87bca49ec1215d094a94c80e51a64c1cba4e9c8c221f3a141e371b01e778779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HWUMHB4%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQChGhLR8bISeW1sFkzOM26ic9od5%2FW9Mi%2FqiQZFo87liQIhAO34ScjJY4RiMtFVGWy7ja40IxOp1L%2BV6%2BNrgzzuwWDkKv8DCCsQABoMNjM3NDIzMTgzODA1IgzFB4WCMCOHUqTeVrEq3ANGworpYltowYxWue2sB46Zl5%2BESS19Ot9qGsCljfoBVlalVshTsim%2Fq4IxWtI7RJq8VdHlopcO2IalgdcKWlEm4S2X21lwa29LV5cmL5unhSBQAJGWpfNOVULmM1f9X7W%2B6SgDV1HRMhap2XkM6wE%2BkOmapbBTM8cKN6EswEAiw5yPt69Dwx8Ohj8oPTQRLwO4DC2i5xExSjQ2gOoFcrpAPVCkm8jl1SL7hB25K85JQUAUju%2FLLyn2rBdLcOvfsVDZ9h28Q1LIuwEYwo7JjE5o6S5PuedmAlOugtHRQ8mwW%2BAUbGZhNR3eaAuaaSmHqO03jj7P46oNyjww%2BglYl3l9Y6UikRtWCQLjJL1Hj7tjoTiFN%2Bo3qiY%2FYYEhhfIxQnz5771dafu98LMQ5GyC88LAPpEdz80ZvUmAxeliC9hSireSyCrmt7Hvu8di19JajzQSE2FXvblbwMapjIpGU0bojjf6xlj7OExfEy1HhPcvPN1OQQ7MfNBwyKWyT7zezY9DqbAChsuhefYphY4pFbee2QDyPdT4a7Hd9%2Bw%2FDp9xcDtT%2B5TwdhvS8p6a%2FQP2TbyqRzbx%2BPenErZkzI6sCbOX7fNiy4CgJJZNV1U2FDEVfJ3R864a%2FyQgx%2Bzq2TDi7uzRBjqkAcLYXskMxiuDpkEdWpP7fCQzO7cmtbpMwTQ%2BrlYIr4Q897wovfX%2F1bbgz6xGvjv6ITTK88TOntvZvNrK03lfSdZqSUGaEMqh11sDymNmcfTU9XT%2BiZJHh6NjJ2pr0OyHhf5Jx3ERVMH3YMNawKN1qtcVJv6vcq2sU%2BHtTDXOZTw7caCCxmXLe3dPWm1Tav%2BHg2oJFWmGJVktJ%2FCr7CYGdBvlDV51&X-Amz-Signature=e6637fbf29c3b50de031dc42a51ebdc21f50bb79e07d6a3bac0883af9126670b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
