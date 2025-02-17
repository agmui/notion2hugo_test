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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4UAITJD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICSbbvt8DF8gUx4sI%2FdHQPp%2B9clzW%2F64gJyBZc%2B6JlSFAiEAxxAZsEMp1HGK0HFryd0jJ9v%2BYhferLANtMCyMU97YMsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGRID02bFGA3ChmalCrcAwA7rhyTpjZXhh4oU4Hmw95dnZLO7j4vSgSm2ef3PcN%2F9rARUCav31M%2B%2F3pgH2usiysgD2sp6X7WQCABh%2FTgjhJ9xwrWcJEtnXljQbZFcWXZIjnm%2FFBLa8pvtgnmFqVlGeokeASansf1JPCViUaI0vagtJHkxiji05baOQ6tVyGjMmunIHb1wPuhXEhMmzw6dTQRqStQZpP5Qw7DXG97WeR95hlwpBgpzId7m9Qdxr0sQNpDrSZNIlAKdena95EU0gV7VtDBrjjCCF3%2B9vzqCUnYXcikVhdxf4Kct%2FyorpegFcod%2Bm5oBfIPRoG95YfW%2FVDUtIucS%2BV5iOBbrOcLG1m2r7im0pDWkzhI%2BzDrONdeEwA%2F%2BpkyagoTPpMiIFnxZZf5VEfZLEF94Ysb0XKD%2BlL9OQYHiAuHVIU5On2n8kyGJyonZ1ImR%2F2RR4LHd6bvvqbfmEJjAgPMCOVgeGBCiyWlABpgWtvZS3T2APDi5ws0MZ1tIq37OZ3eWI6a6EgxPJozJlZnlVmMactAqxjkFSr93MNzgmSIPPBg6KyHJe%2Bh24S1zf4YEA2MXn3UP4TdO%2BVndNSAFVJM%2FGMMFyVI5kR2v6AFh%2BFSo7KuBvfy%2BdvuDJaUqRDAmiTTsm3fMN2vy70GOqUBs5tY1q8zfxqvmoMQFoHEZvnGYXuXOXKvMJMYneLCBa9Od3de%2F6HXiY%2B%2Fq3sZ1vzSj0uEHfleED6e9S9%2BAhH99zFdP4fwEoX4OwRjkqn2OYZzOvUznswUCCMbin8pOGvW5CC61W2aVVnbi0NR7PF9BYo5rgOS6VkhSH1k4kWwfcn3n7jbKWFzjI7eEzHLlbaf6RQvsK535Fyr8h9ZeZRTjI4xpj8o&X-Amz-Signature=02452a5e83bb1f546d06ede7d7dc712fa0e3fd40266321ebe53ea6fc7c5e42ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463ITKYV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T070834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIAl5Vq5H49T2hqN%2Bf3oPIx3HAvPQ21TS7T5KRuCPjixcAiBs%2F7%2F3d98bBbyryLRs5%2Bqra0hhc1eg05ttDn8xX6TAkyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMfRv4ranB1JRWQB0YKtwD%2BE6zHmAXk8GJQvMnEGLNPJnLDKYkYCAYBxRZd151%2For1dGjSPbT%2Fky4iUvzc%2FxlSIV0hW5QpIitzgEVgozvh8ZU6PWQxQFGdoAYzzl2OpQwmk4RWlPGB2RgTvdhQwvkCmGm8cA5%2FgvCr%2FxmPwXAu3gwQvmZVGspj3vlRBHt4crGWDCvVbUCIAMoFY%2FDkttV7St3d9PsYi2FOIabZ5c%2Bo7%2B%2FO96evbCjtCSaAgiojRuPAMQTxCKaWf%2FZuGFVfMActur3jBpEOSh0kS0AnE0GiOmmD2Ex7KFYyCsMXHt%2F66eNCrJYY8xFV%2Bsf453EkSStLTvrX9GA8G9CfV2wxznqZ%2FOiJEHeh%2FwBQVC9PMYqYlSgPd4OHizH4QukVzJjMO8%2Bceqi%2FrlatuRb9o3XXfLw72J0leBVIAwvF3%2BQofdIedlfp8bYeWLtSCFAp6ttc1b0Z27WraUcusMJqxB4Ke7uQW8YRzaMMVDhG4WWK%2F9P5WcHbXTeXe719iMDnNegsrk1r2HNpFK9SS0UpzvDToZL5982ZCYnwCTLfvvoopf00rXRw44hDxXP%2FpvlfUfVlTMGUspWGn%2BvwdZGhlccNlReP6fSjsHyIA6x3rWk7Tzx67brccTvgSiuQG5gqgTgwkLDLvQY6pgHlnVze9N8Y7dPqjq53KY2FksO%2Bvq4CkbukjwEhd3Vz%2F7eZpfHJ7JfEp5liRL1PNgLhZIwYC3VJIq1qiBkUWow5AVOGGcCUCmr9C7YWbHjXMVQkW0371HEIr24vy3uFLRqhmcsz1dimgDxSppGHwtX4LDNN7wpGKD8PN6hRILA0MHBcZzCxWwKEs8ZGKFsxZthWY4HoPPYSbZE0g1y4fMAD2%2BP%2BjiNe&X-Amz-Signature=9c681ec7355bcb828abdb3f924b2c03291c3a7ad1dd87ab40c5aa7bd14186b12&X-Amz-SignedHeaders=host&x-id=GetObject)

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
