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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NC74XO6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlEeux%2FPp3Q6x%2FIgdMOZ2R4vcHIxYKztePCexFsrTZjAiAt21%2FFt22P6tBWvLPYWNZIxvo6BFP4acs2nFViYgz9yyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQsqN3%2F7Ri01%2Bc2HGKtwDyG2RVfd%2Fqvb%2Fpp3gcIrt%2FsCwarfzfq1LlmqBHyhQgbIl%2BAoGKXHi27rto%2BNW3KvyOBpTTahZK0ZNnHLSbK9AQKYDrdnHz9FkIjA8hoOq233uKRdYhwbFA%2BaOS7fv94hIESXFpx%2BGZoY39lxIrE5pHz2UJbdU6Hj7cyzeyOzbvuiczB9zhHoJ8wGvgXGXF46d6x9GtWxCbtwaFGQxuXYDVAetSkvlzHDMxFryUqpRoFabo0cux7jMFAmUbiXdR7amT5OhVjgtc%2BDqfuOge%2BXd6h8EKbvfdg%2BHP8qxII%2FvNAIMSuxmI7R%2BMAkk8msaSG7FSZ6%2BICjfGZfcmHS%2Bxg80xU11%2FgzFJ3TXnq2M1AOscZRsJ4t4GqF4QufwHb%2FZpzIM1FZb8xfjXoCZdwNjGxfRgjUn7jTGdmBz%2BiOxay93%2FwXKzTg8Cl1kNrNpqGjcVuN2LOLNc9CqsuOkQDKFL5SF2Y26sDdLfdzGujbtAtpiAKBbin3bt87PYZY7JgDvciWrE4u%2Fjr5%2FN3KpSLdSieG110nKdhYb3xXy6NuCsX9nipJ6XZQIG3ovv2ya3YmiBj1nKwctZ7MEBGn7agU%2FuffrzZzgt3V3Y5e0TKvsUfJ6Zw1K77%2F8pNh1q78Op8YwtvX7wAY6pgEFlJeuoJ5Cub4sOqHiB9l5BgiogoczWzIJUilhVdqKfH2eZEtmPVjdCQe8dlXF%2FMGiAvBXsaBfQDlShl1ANpuvLfZGPwJBr1WXJNOa0q%2Fo9cW7SoeRRuXqr9UvU4mL1zJnPQjeLg6o%2BLhFHAP%2BjpPeGSVbJbl3TtNxxUATW8XkrBcR%2BDz8ybj33g9xXBrZv6WuDjoWjrGthOkLnOGGA984ILO84nZ7&X-Amz-Signature=434f3aad5822e0672b43aa308c5506793004eacc211a0bc2e81b564031adf4bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3MA6ZZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLGyodsay7D5kDOfP1TTXxMuauDbKGWYfEAMRbpt4HIAiBMm3JaknbgaiU20rU9IEAUK6c3y1qf6PL8%2Bs3kpaGoTSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMns0KaBpJuroUeUq%2FKtwD%2B9U0kEOnURA6ft6EyrAj47MvhtfCe%2BMBF89QLiApB%2BHOFgz4YhbJp9bdUd5A1V30P%2Fxg5CcxSF%2FeL%2FldvmuqIzFmMRKE%2Fqi0O9k%2Fmc%2F%2BOzdVvUbr6Q4cnN4D%2FlppyZ4P4iskkkBM4NYfc8x%2FW2G0mlVK1NjAvAbDGFY7jAxqFQbM0%2B5oqNRzINmxOlEt4%2BQpHxZuEyxyECKe787%2Fz6Yf1Z%2F4qQF9VGlcic1BIDp4cuc8cwXRNRLdnG2zyNtcdGPbUfqvSEZAqtbgGz%2BvrGfXEVazBNJ4DYTgAA0shRM9f5XrKoCV7SMI6%2FTnfXCGpAETne5Z0PtVucKh1N4prN7zRFMVACK1%2BPLMxA0eo1%2Baoouj%2FFyDr2JpYeSKnv1J%2FC%2BY9y6l7e7nN8%2BiwNPRNYe%2FJ3Ol%2BY07UXD%2F1NqRKEjK5kamnhZDcVICv1PEKiebLFRrS7pe47zk%2BYktcb3TI7cdaYSO3vEDgdSl7PWmYbhcxNOQWBiEY0Ch%2BRx%2BEfrgX6WCJsP28pecy%2BwU0xmFnoboTmiCxOwLE0HW1AeC7c%2BOcC3H2E%2FYEc55kP0GwdUEEXMFMNAinOySn1y4oiYji8ELijsj1ufAfHgV0NzR1cC%2BkxSeXMHMC4W%2F3h%2BjN20wlPX7wAY6pgGEWRWQp8GWqtcztf0cVyNJlDSfKqxcUyhvDI%2BIGy88QSYvZzOAne9oG6zu9Cn63eeJ5b7%2BQhT6wQsHArNwdPQCXmITirXR8kiKLmAtQ%2FFBJuxQ5QqPqhH5uMf1BztSdGHaDlgMuyekuxZv1LaKqXRy4JtYKdexfB0srZH%2BGhUdMPAIrDxGyt7pcu%2FjOXYLS84M2PvpnXliHJ3QQ%2F%2F%2BJrh1o2HTEXpX&X-Amz-Signature=1970377cc38a12c17df4d546f2d09cd3ee8a81f49b975a60e30529872dcfcb19&X-Amz-SignedHeaders=host&x-id=GetObject)

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
