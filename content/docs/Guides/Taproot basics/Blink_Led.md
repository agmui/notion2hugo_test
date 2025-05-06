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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNR7SVVR%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7TluW2trfOBwP1XR%2FUtzaDjbEMzCIXGgsxGoz%2F%2Fg7QwIgaaG0Ffz4pqnhP%2B4xeAGQx941DDine57E1vkqvPvochcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAJnFMhRS1xyM9dpASrcA18Aaftv0nen091ti1OPdoavEEtotKO9x4YbFuaRZB488rVz1CpDEij9eptHTE1K%2FrbxTyulRD5zwO%2FmEgWRPnSdMTrX4hmGl3y3x0exqXfEVXL6nwbYJIN7Yfvtd9yLmSa1HoaEYmMtJ0Yr%2FeI64Kgwkb3jQb6H5m3QfxjkkAJ0nPqjwBLLwQnpLcfL3rd24HTas9DIICQQFDbzgtgyzi0i8F4aTtLm8adkVPQT8hgjSvoNpvNknhV%2BkpHgOFKRO%2BtwRR9QR%2FR2oAnb0cAlyfzoTxSnK7fty1Ls7sU3HT9dUtGrs9XMQmogNlIHRTxCyRlRE7J5y4NEomX2bKLE2mJF0g9Y1Fm7P2622HxstR5Q900jNUDRoDJvfnB4J8Neb7q3da2tvTfNf8tFuZHzgxR0CWh5xXWwHFh1C2Ayb3wzS6gFW1fuHDwWu8d8BbRz6jbdCsW7z1jAdH%2F23%2BuIF%2BSP2Dg%2FOXLrFRkJjP%2BPo2C7BOzUNluCg6Scj7ikQpaI3DZHCQpk8y0MXbI20zgneGYC%2BhMzDjOsAKLLKjoTgZLIQmYGL28uXFNN7EBLOFWM2iaBlnU%2FkSID66D3RKE0lKm6qN3wrOvIeltaFL6kD5eIczLYqffN526T%2Bd6fMKaW6sAGOqUBGulsN8GhTS77tLrFSPtBQ7sNLubR%2BJqrTG5tNHxcL0Ge%2BZo3eFbRp259skmwYO0EPofUdHqZPjnTyiHy1%2FsyrBzoO8Vw%2BTbTkFig1fQCXIk1kmw5gfcHaUILuuso5Nsfszu%2F2L%2BI%2FdJiXC%2F%2FdC9U8HPtZJ%2B0IR5jBq%2Fup5R5c3%2BuXBPVNfhnuG9fAMaA7SDfYTqazcKk9ew9yz4B9bOdbRFIbHoo&X-Amz-Signature=9a827c1610cea50e1e3cf974cc575de570c914320847303c761fe4527b4004a1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQC7V6KY%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0JNYjyw32CeAtsTYrX1mKbOow9KqbfsINVvVKc7U8AAiEAzGG9N%2FnfrwOUfn2BGUz%2FAooWWK0E7lVDeloZy%2BBd%2F%2FQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBR%2BKwui6qZDuWHcJyrcAxUL%2BF0x%2B6XZSNZz0ZG%2BFh5Kc00HFxYT%2BWIT0o4sY%2Bz%2F2Bf0UBmOARnxJraBbkQtw2BhBTQNZ8075sMa%2BZ5I2N6PzPt2TXRQqHb0sY5qAV1X88imlO20e7%2FL9y6ETutsdlVS7w5WBoGj4ZVRXSI5S5aQT453GEx0qoSAIE5%2F1h2ZUwXCk0ptBaN6Z%2B1V7y0kgZHgi2lEURX6HP9X6%2BSba47ZlNUdVmlTiDSHnxgXCjk74CrgoRg4NAS4stUX60OJd85oKUYl4nZhM8ejpNCEpv8Y9uKZSPc0KzPBnaBPbdm7%2FU74%2BBLM4nUYPTJzTk9PyoXm5SA0nYbJf7yivf2mHKMbI0CAvrv%2FhiFTfWhwfJmhsUcnxAOoy4vppS8gBTZ17PXahmj2qpt7CIoj7SVc0bcLR2Oz78w3%2BXHa%2FKS5viPGvCRgpQ0SngTXX8BmozbZqFi09j3bOzUuqWmgrv3s6mva5G6%2F69KIm3EsEANVfsCdTJSPOVqiHq462iKV4xNvfwFXdChF1es9LhHfqyNwh%2Bs7w3STC6IAIZ2sG4bs94NqKFwEiD2J9H325l1A0kZVOpct4nh701nFDLhjUPNhEQf%2FOsKtnta3tIlsxx6plK5IqlgvqeSjoLEBxxeSMK6W6sAGOqUBIlDHoHkN%2FxP4j2uOwJRqOqukGiTzrXUoJPWkT4Ye3CMa5lbs9OPpE%2BUyQMhknLWnp38dtJ4vwfp5fHFgKaLifhUXgXKBUJCHNDzXwyH9oE6%2F%2Fw4sPlc9jbFmzXY%2FyGQbz%2B85jN%2B2ixJK8dkaQPqrQrYiU6L8p%2F6%2BRecR6LC9Xz0RXsTEm8HDd5O%2FWhNZupPxWrICoPEayfrwgae6PbqYHpMnl32s&X-Amz-Signature=61cbcff029294a649dbc288124f29287446deae09e7ca1e5edfb96e727c17d40&X-Amz-SignedHeaders=host&x-id=GetObject)

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
