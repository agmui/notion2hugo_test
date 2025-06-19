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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXSHDBB3%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2Yuiqy07uk6MaRzeCK7Gzh0jlxiIL65fFJ7TT5QcLrAiEA31QigI5bPUKM96dFJCl%2FAa%2FDSATb7Vvl%2B7s4IgdE1kIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEl9aGvp4DGXlpkVIyrcAzkhz%2BM%2FLKSGjG%2BEF7dGlrgwy0pZNQSFAV2rAwHkpsEhI7gQEPZI6jNqKQDzj4%2BFPIr87EWVW3S65Ytm46zjbtMrrJdlcrr5SIIsFK%2Bk5mflr2LM3rDVVL9MASKbcZ4CkBugSCpGPtHAnGwN4QwAlpMX3tLSNCnjEBdvy%2FxPLoaFNQoxqqxqVMEMJO47eOkBXAvPl6wC5EdEC8z1AWd6wUW2srAVvBlX11p%2BcrfVW%2BQKg3L5Q9XpsFjd9C34mlsghEX3YGDN2jykVez7OW2dC0PTYassREZzgby4lTjfcehEPK86%2FeZHa9FFhOsOSxxBKhBFkzWJsh9GWGUAdZAeuiGCJ8w1lOyDYsFaGhlb5vbVRYFU%2FJwwJf34sEgRRx%2FsUmrjfxxBdrsJONVd2Q%2Fd4iatKz3kYKITZZaEfEgYOWvScUfpA0uYQAnRNLx8Yt5mExaEb9mLtgEoc4Jt6Tixjshsnry0kHRChbm%2BCBsjP4b7B1sIDz4kte1yG1P6%2FZxDEawGu3J9mVVa0xnxXLRUEEzZcGHSooZkxmr5CGE7XX4nczW8ODfdxCLh3B%2FRzmQ0mjQMM7DgltwcWQ8lxuqFB4kTtl%2BVZK4D91%2FHRk4elePzgrYUbHHAg9kzIfsYMJ7Sz8IGOqUBxgyXuScxapAdyrlzBG5x2rlSx7Au0mab5lDsW3HY9%2Bg5ICwRIdLh8tvuIXSC6di4cCeIe4FcacjucN4qMdfw0hM710cKe1xQdlYCnu5iuvVxLXNLwcpun2jSaNqDAMW2cQfqcUAcw9e4SuBoBEJeiXop4zTt0huJPYmPQo%2FUCqbjpabQzLnt7hv3ymvSof2haKthNhRHYgQA2esveBTXCZxHARg1&X-Amz-Signature=aa694be06a62a908db90e3ed26cf6a8d05a8149fa0dbd4577d77ba00a78e537a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBR3TSEP%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT5XYy4eo28%2FZGZ4U0AOTzUlzM8JwCaZx%2FVjkKPXyT%2BAiAo29bDGOUfDspHRSZK06yTr95gpvjcZI4UMBlnSkWK%2FyqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFn1qkMZiMA8t%2BP8mKtwDWR8%2FRWcVYiz60i%2B7jW%2FSbm9BIsbVFTWDpNK14Rr6Ju1EGoJ2%2FZ9NQJA0ZE8qGOeAbL2151WTN%2FNI6FgkXdB9sPcH6ruVh3L1JM4sqFSLo%2Bp0mwOfzisPMuOI6uRQQWVeY2gYnFTLXOgb9Ytecn5CH07q92%2BRzTadQM93qAzq60nWTDvZpheeOksAPQyi44aI6h3RRgG5grk3keMe6H2aIk8XUmPEVoSAjkhf6isXvWP6an16%2FWF%2BZ%2Br4bUKt6LcW8Idtz%2FKXXgExF%2FcDMjq9SfF6J3fTy34D2R8R8WQDaB0%2F5BmpdGxm7%2FvIc%2BqeUZfbR1Ca4SWKEDUNFDh7c1wXoi1sNeHq83OyB0cdSAH4Z9wijiT6gAe815%2F3FSNXHtgGCjRSrO96XTipQ3VpOmCqJavZuZOcPK7mXBi4jqcz%2FscS3XIv1BrJDg10W%2B3T%2FIS36U47sPDw0qld0RtnXPjh6jc4p6SZO%2BFR1Fpk4OOrLb6zkNODVujmbcuxyM46c2nKHXLuvFSxlYJnlEdrCbhK%2FlgPTFp4t9IlLeTS7rf18NAHtmJXSwmFfTLjoE%2Fwsup7HS0mcvjd%2Bne3lHp84Fbp6n78pgOdDgCVjTvNRKA2Jrxag7Ri8KWbdpAvdGkw%2BdzPwgY6pgHarL69Q%2F%2BHwJApY8PKWT4uI8f0NOnKKUhY9QKjIuWCW%2FTuQe5ltKTxwOf8D4QO3lPNQBKbe%2FCc9zwRNkDW3a%2FlYDnO9jwXoCdQO9gi4bCZC2Lr65P0Lfe8dPGugvv5Hk9Jz6LIlSZU%2Bn7tHwvQTSpH5yFNB6LOyrD1GfFeH%2FGzbPmq9XnWnOX8giZMV70ou38SHNU7fdp7cz9Jp2XIavoszz2U1IbN&X-Amz-Signature=56a1ce460e0251bbfc6b08494f2b748c0721f41d99da512ff9d68f693c06da9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
