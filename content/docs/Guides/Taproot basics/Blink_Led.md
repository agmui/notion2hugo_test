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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULLDF5X4%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQDzXkWAG%2F1H4VOjI1BdyMNbM1fuHBMHzNT1Zmx0sAmfkAIgWzcw%2BWjy7NdSoUrnqKk%2F7M3dFmaCgGwHuZWrHp0ubQwqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPIoPC7doNICaz6oircA9FJRMaPzW4VZ7p2VAHSusVchinve6FxuwqptyS3UlT0zslQLPz3vPnZX7rnxxZrRR0lxbT7%2BGsHS%2FQBu7RicjIx5Z%2BYAmTbjDFd6xMLkMqjDy56Cjv28qpNnQL8a0XIJ%2BCwDrMUqeJ0ucQ2lbTWoDb2j7tTvveVEjuAzJ2Fk58p06Qwh8BzkALrF9hNnkWPr54i3SKcN37RgMKERsH74sY4k6miiAmzBqf8vgbFCDtLmX0TrHR7RnQUB5SeCjPdEipbmA93J7O8kK9wi2zoCOTZVUJSZqYBe0QKLVqFjVI1Swujry%2BtJmId%2F821TaK%2F1xIggWZFTqj2roaPNYUrjS20iC%2BwWlh03eNYqtxlLH5xLJEcM4tRXy3kqnVn%2FsQezEMbjJLKDTefKEyEJJ2VvQXjoR6UnpEdk3pAw6VPPKbweXTFmPF45H1JBfHt4dE%2BgE7vWQBGijlS03VxLWaP8sM5s1u5OSoGRghxktS2oSr%2BWfT%2FXsMMpyJfrQkkTH1Ls36sHIwyISj%2B2Onct5Yy5bQsMOOO9hxQBhdfsGrogXrGBJn6qYPNJjdeIOilpbNajOMwLrnlMOG%2FFqkrWIwiKKEzSkj1lGkl%2BBf0skiSDnhykQoRd%2BK%2B8Lm%2ByGC7MKjCncAGOqUBoIvUnZP0sYwd5gcHrMseF0QyRCXJv4fwUlLMhSd6u8CP8fzpIlCn98U8ByeguCwDreFX1%2FXQUsiZhN0H1%2FT01s9seL9YF%2BfYHpcm841SBxhcU1MnZKDfkQlHnCxM%2B4t%2Bvywd1zwXTPDtdt31my4wscBCumPyJPhnK%2Bw7bJX3Bjy1n5uuiaksRVpyHZTy2nD1hGCLHxb07%2BYnp6zvyz6S1%2Bm2F4RZ&X-Amz-Signature=03b368b0868159ed59544fa9aea8c771f725a98dbf8fa7fc78d2d14f5c782ef0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4QDSGL5%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIA8%2Bl2Gn0QAJBLeyU7v7%2FkGw0heImDVj3hQ4v9F%2FgV35AiEAkGn9jqnq0zz5nwGprkm5qBuN00pX6siS5WPRyP3e3usqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJvNJioTNkQPSImWircA3RsJ3oA6RtbHIaA2in4kg8CWwmtKKzQFTYYwo4usjnzctSgxSG%2FE0UB6D9XXPH2xcrBE9BSdySnq3ManAsviqc%2BT3b1O%2F0aMDL3gPlGPBh6sgLZL5zzOHvO%2FkAkWXeo0T2jO0fxkRCK1MITtenyFByWiS7aBibQ0qEraH5xESB%2FpJHvTlYyq7wQm37UO8iyX2zFvvufmQrGZ4UmUyduFYwqCi1dindIbnx1dTSLNucrdKtimlsieaR6T%2BdZIBj5JdqP4f7Xbub1C%2FPTOwX4cw%2Bv2FwFhFZkNWZTcmzoZ71%2Bn1NsD1dUYKHDgRfuQgQ9x6m9b38g2Q0Tm9sr2GKUJ1kgCJAU6j6wOWN3fo4MIF0u2gRdmHaYayxEmGrjT3dYVfm%2B%2BFJjd3LaRdN2s9rl8AhwBt5OIdjDXL2kcGXblIGr%2FLPxnU3zXVl6Ec8pazDzwnlsrdko2hkEqJfr0asOrCuAm9qeqlFa%2By6KJg54L3YFUhCIqhlKO0PTIWlUR%2Fr0QQL78j1tNyG%2F5NKEL34Sy8XNIMHFrogvDxvD1qm9Ok3CLzhGZqzO%2FJmL%2Fe2XHbWYWhADfoppuhx0iNtPeMK3KnfYb4ZR%2BFKYCky2JWgPP1k94KOYYGoEaH2xHUX2MIPCncAGOqUBuhm1l9hiz8b%2BeIPuzgF6jhmzijB%2BScPCiUAQ7EicmkAumWfELmqNuSBinhehFn8thDn8G1VL3V0za3mivGV86ffbFdv3KwdMaXDiCQxHouI4dfd%2FqliDzOxBpabHggwPFcISI2a5S7DuEyTUuPZS53eq2EZmQVGGyio7AnofYhG4pixOhTqoQ9g82JEHl4L%2Bby2F6XAOJ8knNPI%2B4hEgozU5YuF3&X-Amz-Signature=068465abe293db61c13e57fd10fe832510d0b2d93efc07831a443034d0b49fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
