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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQE4ZIY%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFlmt2RxBtlQjjAtB6gqqi1rlqTcPTaZsn8MaxprHqtAAiEAi1%2BTYqeMup1gw9gfmatnMsw75E3Wi4fvgZF5v5K37Okq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDLzWfiLRdiivIBrqbircA2Vg3e0IPXL34VvYP8cM3Xv%2BeXD0y%2FhDkp0FdJ1OOi0UjukvpI%2BoLsRkv5EK8TaR4B4YAcbx8FKRZjb69mB711K2uChYY1fWnSN1bIa3t%2BjNh2sPnVYz07%2BBw2Gx255LyheSwf1v5uASB6RhYjpgFs1hCJb0LlejcHijIA4EznJNZijUkczDhN58Q3YxL3zwZvpallbm78oaUoZY7cbLpgKtLh4e6hgyt10yq4dNaEkmfIohQ7yNVVyCMZMRQ8t51eqXiwPdoKOMmWCCI0T75h8O7zbbO0NQuL2KiYkEP1pDti7kYjIh4WkqvHg5hEcH7qVFZZZ0n%2FNDkka9fTafSqiTl1AEJ8mPyIeerzNf8nXoOikSejhAgPc2MzCyjQBM2rjVO0tjED119Cgv%2Ffcav2GHF41kPURdB0calF%2FtVAEzPEsx18ntHydUIebv%2FMRP7MDiOxqAKNk%2FgBcwhrkJSueelkprMbsTIscNOgu5P8Nd6SWwO6ApJT3%2BZvVsi45WCOJ19lYP1BIG37%2FPYe%2F7%2FjI%2BywKLOJPIzGu7nqn1Q%2FUuvvQ2VL%2B%2BUIpohKIFIvvUbX5%2FDtP6NuZTwEOE4EgRtjoCUBPnSvyw7CPt3YTzBqF2yXWmt%2BWw7raFOwf0MLbU5r4GOqUB38NnfGJLNfEs8I0U%2BIC7fLot%2FZMpgKWKIY0cUURC3B%2BILxyW7v6uwAO5QGtSifH3VAQ1jRDDWvDbZh1iiKpilPqt07W0ieBt835Dyse0dnKmEMnH4Y6BBtglT9sEpOYeM2kYjgNaZ2jqB4ltTogupi7ZI0Yjegvz1KneBLPeAYAOFDPMjZ2EuAysk4DTeXmpagxNva8FzlHVyCEdGay6fcLiXJxY&X-Amz-Signature=6cd4be3d87592ed97d0b0299f54e4b4b37ecc353afb18116615de9c05d276afe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RZYOPWE%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQD0PWcaTORVdQKTGVWasOYOcXEOn%2Fmlld5XmqYf%2BotRmAIhAKcW5MC6pP9NFiOmADE2djtxKA14iEyKIZOM6cNlssmZKv8DCGIQABoMNjM3NDIzMTgzODA1IgwExVMxX5IALkHdCTkq3APaKNySXAtgJKzrTRJYC0udBhj74%2B00MMST4Ib1zwemT5RDpJJ1mQHuTY0zS8EdirIVLnzCL%2Bx13%2BYplddU2ofZlpnIao0GQk2YzxpkIWIs6uunqXDX%2BO2smDuB8VRb7BKq2gpio2%2BQJ9q7iSqbRWH3ij2Knkjnz6FGB5eliKbECHcKtxnRLyxiYNd0ps2Vshz%2FaikEaMhiOo9QMuG0DH4mVlIVW7xRERpwaEUCqvFGlI3tbZKPN0ZxcQcu8cu0S4oXi47c%2FMzbiVptREIpsdycp08hvb2C8y2mbZ%2FJoJcjmUjI%2FewYhsDXT5tbH9o%2FvPQTbt5c%2Ba01gvqoJjSbAeIz320f1MGj76e1Z8cQzCU4EhzaLJPCKy4AZuqCiIdiGyImdazH%2BKFzV7Tzzd0Xg4zCslBnFEmin3O6VfxYt9IO7a1QTl13PlaYWuk01du8buv6RSkXTHoci8EraV8gvaBzzncaOnFZ4HjEBfY38Eb9yscgw1Zs8uAOvM0zFuVflXmFdbFA4j6EWDWtx7lAlGvyu446zRlkRxWwNXbBhtyOVLrk%2FUTJ288RM%2FgtjOPIul8CFEZPjYqYrsBIXJiUH1q4ha72is2b9KTzh4Eu%2FTzSbeGmUuaup%2BO%2Bn63%2BoTDE1Oa%2BBjqkAZM%2Fa1zGGyLHvkkqNF3TBKL7iLRvUEo1XdvuY3Rr7Hra5gSYxdsSDL1jyZ%2BImdlixTQ8nMbCzuC%2B5zUgUe3gN0uL%2F97aUqI5JiEnWh7C1pBWzXXIiO%2FxNMHLqeea8zCugrv%2FC7GdDOxwHqdytuIbgC6SQzXV2OZEXPjouA2qOnWGrFbjrvBz%2FUkxTDxp4JDteMZQxGuSTHrMjHOnfJx4bDw6CIV%2F&X-Amz-Signature=07932e441d73dddb170a2f3e472291453580ce2ee1e0ce84edca5b9ca94b746f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
