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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL4PBV5%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbdniS9LIRGf2S3N5Mdei%2FEUrVp775qsUrdS8mH42lLwIhAJX%2Bk%2FoLney1ZvpkNwl0cDyfy9b5akW42QRqFfyTkCqGKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2q8QqcoROZgZpG4sq3AN26W%2F3mdltsfBkh5TD9r9QiZWDn2TwpIaoCoo5ZW3IJaUBRB0tnAhnZshs9ZfWM1rVzQrHDKh3G1g52p%2F%2BaWpAaXxRNWXC%2B31HhIfRi8WSJpfHWFPJgs2f6dejW6CG8rLMVzAcWpLraXnCpSAQoyVB6QjFl%2BpQPGZXrx00BE2XVAH%2B%2B6zO0CnOzToAxXrDeCzahOzmEaHQ2vY4iaWZiPZ69AzsyYFl1TUiclDh51td7xNRxy9zLqIKV8ytOAqbKW5MaijjabhNBqOuoUCWPZ5uKtrlmk30noSZjX%2FaYP%2BUs34IlTBhGcsM%2FJE6JBHm%2FlsUk3bDTcOuPik%2BbBV2QRrxzawu%2F4JS6s1bnShENvwp2CNmsXgTY4oWQm6U0JtNmlvSD4CxIrevEerNL8aNogXMjXgvDoziIBNPMMSTat6j7rj4l0j60MCEFOjKXa5rjvHdVKzYjOI6hLK7DcJF4h5GnIBfCjskXwqk%2BVmgW8PGmw5b%2Bxz4fRCFAH9x9esJL0ZhRAh1Sijz0ktLB5HUD9fFK385Zas2NHzBMV9JitnckYFbfxvYN7ZLE5%2FIEQOUBSEk9F8sI23CtYFkakc0u0PA4S6eQPDtfzxfd5KnAmiT8MtY0b%2BDtfZ%2FTkQZTDCurbXDBjqkAQ6XICENC5%2BEL8CtIHDWtaoIA2kyKQB0burhCbf%2BqmYDj%2F1h6esQcAotEk20Bwo1zx%2BFo27yXSPKVZw8vQD7b9e3NgZxrlrqDX2vozlZ17oMCf7u4oz3bWCFOdZCJSTN0rYyyH1JhobZWqv1JdRrgMVeIhT0wgdNaoUuzM4bCbUtWjXvAFJAYPn%2BkyB%2B4TGhgL4hkIFR2BV%2FbB9hxKGhpGO9UUGF&X-Amz-Signature=c3dbd72ce0f894212f637823c6c33b9d7747009205728e00cfdc0c4afad5bd45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZ6XNVP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T190733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAaGzYqL2MVB8IwXjhzYoihJOhEt7oA4oZeL5HgouDEAIhAORky3zm2YzThLHDC1uuzDNRfjcwhNftv4vlhdcpc2dgKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq0VqEPexTp5bF%2BGsq3APmCxEIEdS6y6R3Pm9yXmntjawPjvQvUbhWgGFfuNpRSoSzPGfnNhrDkjQ8as6MUcWfE%2Bbc6RqMlWWthTx0LntLsGhlsFc0GRkScQwrYdjrwio0OsSwZS2irL9d21wo59UJORImBWClNx0O8RFNsvzovPQCJFtHh6%2BPkHG6lska4yd1EODdJdwIRwvOzmFDka%2BnauxHCm1AePxp97HrL1rUS7VADOoMojq1OTmvFT2gHu01%2FNp1hzjXjv%2BTSouxydqyPUlBlrBAvnwpNiHLF%2BYAArPQr%2FW9Hv3h%2ByLSqEX0FoteYCFm3%2BEW3mK02iXR7onFxTIglMNQX9%2F3Ozm44ACH%2BPRyPq0dh%2BCVQNo1AN3Mt77v2adUtl6bNZ8uG74pHJtW9id9wF90I7hJTAJyM%2FRhpBGZ0%2BwzeNcw5qDtVnpUku%2FoAArM7MWWy3VO9yeRa09UL%2F3GvHaKIocVsu5ViTFEsbPF6MWUpf8hghHxPd2mi06pNUthqOP1QiifVS3m9UA%2BtYHOQYlClQp4IpmHgHSA0mJGoIQxifzAAqvxJ5GjOgReH5a9ovDGJHMZwPRhsAxKcHLM%2BTS9gHigLeHglAudhw%2FY7X6nygP4Pgm2%2FkWNJ2AAJBV4qOmuY39G5jDjrbXDBjqkAR%2BscIS3v6QhU0UPET0qwHzD2yz1%2B0hiSmNh6Cq%2F5Al38eF%2FUMH60ZZD%2B0tGjYSvhIfwdoHafJY7ADecivOHfrpDqiU7WS0ZDHOYn06AC2MHLAIEmpjz3vtri0JLWzfoVWa6wQ70IdgFfARldcosTncCCAoihjurrFT%2FOIIvwfPfqvguBvUIZNWJu35TwAAvatmMM5KjFw6hoUXeq2PUjo9v9fHE&X-Amz-Signature=2f357b90bbf171300170ebb6c59d8bfa623d5d550995bef6c54735d5fb4710a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
