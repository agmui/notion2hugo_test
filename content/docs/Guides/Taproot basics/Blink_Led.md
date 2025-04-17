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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XH3KDEC%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNwQms%2BBd16kg%2B33RxVsyNA%2Bjl4utnHhPlcdIMi0OYkAiEAiEkivDfo5eDnZ6nRaCEjNheHLEzj32RpgPTr%2BYOrRFEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFMKC0VajGp8pcGpdCrcA%2FNKhXf7WSM4eD1CMPVKQMgN%2Bqvj8vAPthmR1VeKAmsb2PNVRWSuYPRnLos6FHnLAFHWSBmrqGr3MTd98ElYITR4XhDcclly44sxv0FWCV8e3R8Xvp9%2Fsjki2JEo7K6kE5CrrBNK9HGTzgNGEg6C4hS9vN2h4qzspRUX%2BrxJtdNYmH5w3EXRmZ%2BRRyk4lv8KOSra0B4iXMgW6Rp12UDgahlz8ZL2oFy%2BAZpNTKsFChGcYmM8bPkaS1tK%2B7x8ivllivy9XFMNKTEU3IQJYYzFk8WN1zHeceQffaod8q73fF69BxpVY9YnHcfrWNhFDJqYaIyv56ZRYVXrfHxEz0egKc%2FuuZVP91ty7Lfw6xdowKlqSfSZORan3uOlV5MRdplEsHmPvmeb%2Bv19yJXgQbitl36fWiGXGtR43RUZWHQX1PEjgjtgD%2FtpR09A7RRorVvpRpvdjOfLeTXfp69Bvb9vOBU2hycV2rf6HKpTjlNTAaXRw6%2BvQXSjnTystiNlqWDW8%2FukmPYfs5JdP2cLg%2F6autYi%2BEyBg23ZcghzM%2BMtweQ4fMljMH3nxPTub9HjJ4UPdJn%2BK6xM%2BFP40GYvsnyWw983L1GABWe%2BHxJM%2BYk52Mgdb%2Fcr0tfCcllz80q9MJzmhMAGOqUBpbCNNSH19R%2BU5WJiMR57XuKs5TmjzHBvDneyYMDzGcKsMVUxEAxmyY4WqT7XsZTByV104QVoK9qSrbPleu673uRGhUAa9Ej5ta5jorP3Faij1LtivBlu%2B7YFzV6ilLbFhYWgaprxVMOOEqsG3EMpT27nMtB83HCWdduTk4ailJ9du2TvNqDySRevS06xU%2Bx9od5dO2mApP8Q07LVIOXKiSWQGjlt&X-Amz-Signature=a20358c6e13c87fc0cb58ca8581dfa0f2a55bd09b6926d938853f0b42d7a7130&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTSA7E7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T170729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtWR%2FlEjbZBhYvXsKzPuHR0UusdRO3Kv9lxkh2bejo%2BAIhAKLfekPflstXhRLCEdlpVyZdGNAKICEMa1xkc3TzpmAuKv8DCGIQABoMNjM3NDIzMTgzODA1IgwV4AovofoFSR1HxmUq3AP2E7T5djJ00TKcWBSbeE6b9Q2Ttgv25o7RtAN9zfu4tfSp25L2S5131GCzAOP1hGFbwpJUfWgy8AfBMG6oDI3fIkYHKBYlt%2Bb%2FeaqiT9HFG7PA8oYh2xufCHjoyDlw6jTY7Va57K3AsrrMZ2P4prE0J7Mg95hO051727YexNODyMYgIzKrj82RxbBVK8oYsAosfotR8QetDPIhUfrPw4Z39eKJSrgm6apLbH6uwfrzQ5Nfy19DxNhmYCRhGX1B3xk7az1lekjMLJX6b5zy9mGpFQQYYEskkyCjfbiSBTUmSdDnqN19eXcXnBr0mnTi%2BqR9eiTr6xVrYB%2FYcMoqWOoyWmoLPpgvJijLsOfrTxbN5Q%2FpEOl8IUHl1Z7k%2FyLFWdtacprO5taOPg0V9kfmVR0w80NQHucuI6zAs9jdJOZIMRLNJ0sW150xxuhnmq9IURBkAZcCjXXuaA31NxR09hfH%2BrW1Ndo89XXgy7AhKoH1IckoNSyJmlBtl%2BFaQ22SVp5%2ByZFnP9lPIeT9xvjjFQ30j5runlpUIlXEjCr8zZbsoCpGdVrcYcyPcNwQqU5j32mwuqhVPpNW8ztHIx%2FmilkIe5j%2BWBQxqnuzO8CNmUi%2Fn5rlkkUpkrTWLftT9zCW54TABjqkASlbek24ei1QlHjfeQNxDbUCaEnuyk8q0XM2CfZacd2ZShy2ICY1fbdywB2AVapeUERqj83BhKqpgduZrwMU5AiWdkHUXBPS9sxck50WxMnNougfLAFUvxZ23eUv6mtSWzRKUT5no7x1SmPRBBmueN7KzxCgy46iCCdpXWTZWFMumMZZ1p1ipWDhdv9HpTkjNRvOwv5FQMo%2BCFcjmRyUUlSdxf4C&X-Amz-Signature=2e2299c273587698a6c44b58bce7f58a339bccb947cce664d087803eff3c45ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
