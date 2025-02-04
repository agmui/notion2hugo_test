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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS7QKVSE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDn1VdpxhPQBKQDJz7Pkwp2K8pjIdjmiSpLLlL0pChhEwIgHZXXm6HnoI9d5117fxd7yRLi6EfsyBALQjM%2Fn6unG1Aq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDA1boRL3b6M%2FAMqWOSrcAw3HHbZ9FoB%2BgI9QDC2cCUc0Dkjb0uI3v4c3mApzyy24IZsSVPNNfDxw4eTmqnjwVfwcAz9ZfNu8b%2BZKyCz%2FBaus6ATpa%2FPFX7s0cD1DZswqyN74eFtiaxw%2F6hHByPsYL7mZuwdd7PQQ4b2W3wc0IBiFHzHvCxAsnFbQBPAs3non62Cjr0gtNfUukbu9bGpx9kqf13b7mFpuMqVuyxtaMqgFIOxpecvz3BK%2BKmLQIpJDFm%2BM9iYdNV5YXBpzlNNMj7zNtPpnNoYrxywbbt3XROg2Sg5VhPSCxrAP4s3ZLOtypJrw47oYUPRgOYWZ9fDm7Fo5rwwBeZzAufDR425dUa3R9oJeG0c9ifAN446bv3w%2FBgG5pj14fLPIowKmO6VsrWQl3RKld9GlQK%2Fcb71M1jIk%2FIfXG3fNBto%2F8gPljNYca89EdOX3qrLJ0FFFLSuTnv9YzSyhMxokTybijP19kNpeOWFYy4DUB9txPVyLqJ8tzgmWNBOec1wiuNLTplQFU3Ufga53KhcykyzcZMZTfUMn8dJYUHsiGDwU2vdRN23nvK0LOPNvuW93%2FjRUDlKdRTi7T6eWiQvAWO4fpN6ZKkeTWhJ0k3U%2BixkU70xwPH3ifBtTIkrT9orIcuP0MP2%2BiL0GOqUBG2OIAWeabhlumBAWyhRj1COj5OpqF7KzVCN0lAYDyn1bNNTejUoQjHptq9FvTJOKg1lQ4XhWpxJFyvITpTph18E76NI0alUpCnQAZCgkHnW%2B5GpIMAE3b0L5%2FUwLmNF3Pxsp85gWBOtX9rn%2FpjnT9lXDhxrHrtZLt%2BoBDTbHkp5bCbKEg9zm5An3H8jnm5xg4Nu39aQVH%2FqBaFpkUmkS1a1P3xRv&X-Amz-Signature=6b47e4cd265e0ce75ecafd328e1a9506a010cde24b6f1beeacd1fd7f2394b05d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECRJMBL%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDKBClMU28qBuQM%2Bhq2aNLOk3TKGnQqqEZDHGA5hddK%2BgIgK%2FA7jjSCN6lQJjAabykC62YZl0cdDnmX72fWCSNiCfQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIbDN8MQEHDv0WvH3CrcA3Tx2mSH2U5R5fxICqtwoZSdfPWnl8LhOnxw6zSL1kkFmb7chH%2BAkeeBulC1MXdNE91xKqnLS2QxoCN0hsaBNQGI50RTT%2BfwhewAKUXzRXwG258aTzIkXxN9KbW%2B8QG%2FJuVWwtPf%2FIzhDVAcgoNjmXmwkZ5l0WVDPjRQ1v1n4eqGCtA8i1vCG6y2YsRYKVRJG2Vg5gHqL10%2FQKS%2Bv7sTxP%2FC%2B2jpqeMeeq1u6aPQ4MDp8ZQOHTA6txAF%2BaG%2B%2FF1EPZnV3jealWp2aBoKGBL8mccsimsxkNx5Ucw7G77XQ0tqXLwr2Hi3Vnb3MDJ9V8Bos5pax4NzTxNZ1XOB0CpSIqutcWgmwygshpJmrnLItSC5IcN%2FzjASrsfRaMqsGQl0Nm8Jw34POHB9BgiqBuDp7PiSmxdvAjgKur%2B5XY6cm%2F6cQMSPsN2KuSgD%2BxUgxrfEjPmfcugyVpiUa53wa%2BZVUCkFJXrp%2FfRAZRdCbQ8R8ojJXn%2BxhqsLR8FMVrJ9vqDj5z8RdsWHmcXlB9rBYqFvvizRPRLAsOG6g5JjaAUhWxJDoKUQa5AowXPsKU9SPIFCvhyHt6x2aUswY7usz270IgYE27oRTXXT48Oajbk4CpMWSYCC1d%2BKHcMu2ioQMOS%2FiL0GOqUBQZkc4a2pREc1OAxZPZVotSVpO%2FogTGYnVCpIMgzJ03ce8aYdfBTrtp0134AETTcjDmc8iXyB%2BuYubDSy0%2FY2a9YQWoI5FexrlkeDoourBHNOsydAX%2B0Bx5QMeCddlRcl7mb2tg853SCUTvAeyRfHXeuzfPvjgXEu0%2FLB7oaX4%2BFcx7pPNTIE70DIK4PYX%2BGN87GJ9IKoSbErKbOuetkTfHRdRhil&X-Amz-Signature=27ba14347fbb0e6daf072e1390b92893a7a3c97bccc59905ba73287d21c03df6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
