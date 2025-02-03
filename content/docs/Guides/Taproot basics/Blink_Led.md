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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675VMG4ZE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvVcQ0ZgvCrBHlZZ3KgGnCvmxovo9SUU0GMRrsB%2FJnuAiBiakAQrILKv4lH1ikm44DULfv86ek6X5x6eCfAUSbiBSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMJonKIzbv3dwCAb4ZKtwDkLkwKvgbdU58Zo%2BiDCMG%2B%2BhY%2FuxTLdqpxLQmwQOC4km9dxdu%2Bn873pzU5rqR5n4fTJEHygXNFeOhA5yUtzIqFDPHwLyjx2NyVKn1duA11CliP%2BGjDreSNGglSMqnmr%2BYGQiCWRRmpvgxulP0IB6EBNmI46dY%2Fm0MphwXgylF6K%2BcKe0wryj67erA8Udmt2bLKJgUYd3J5czfq%2FCJwXDoPi6A%2F45Y135luvDfLDkdvc%2BPEizLlCMdDgO%2FM%2F2IksXF2hi7Q8oVLDj%2Foh%2BDp0JFP7SDPWLDY4gyuc8UWdaz%2F0b703WE9P1s1qwwlAt%2Fa7XqHyd5VC7chr7xgWiZqmgr2HhOEUym1FpvsMrvg3E3TK2ig8ixQG0FUFx%2FTmYlxTlT1YDZ4GBEjeUDEMtuPqkjy%2Bty3SyrQM0KcZ3VRfYkUKx9qFj4FkOV9PNnMrdj8gOTvQIZTBa2jB8O1BqzWDjRcNp%2Byio5qYIoo%2FmFT3VHV3bAk46o5gC6o%2B%2FxObWdkxNHkfkbMbDZiaHsBLwuIR7%2BCt%2F79OQNb8PjNin%2FKopNUKwUvK3CrwqwMAwjX%2BTmFloIgdK1b45tVigj%2FcMsHR8HPrUVzOGxt0hLki7NwuBOQ44m4UULpbeuDwvRUIIwrfKCvQY6pgEY3tTWl0UavoE2J5Z4%2BStjM58yd7y8xZr0b8bK7vtAPB3JesK%2Fg5GN79G%2BegytfAhqMIYJd5J4cMg9YVsA0qmFDKPFL7ttkMFd%2BsGJJUjg4HX8C32d3Pj0U%2BWJF2eCKFOpm93i75TA6Evz5DlzuuT40ntt7SIQ6SreUP6%2FrBWFWX9nedG8k0iJ9p%2BGpDyVsMRQq%2FPktFfIetIFXpqdpDuEddfN1aVw&X-Amz-Signature=6768d1fdf8a6de517b808cb104a7b8d4af3016aaf5cf7330a88db8a81d64a4b4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIH6A4D5%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEhMsp5s6rV%2BNA40JUuIJBxOzmVL1iCrEEvX5vPFvLGAiEA3iepSdA6UTJhaHf5%2FcdscEYgRUkenewY2GGaX9bdAawq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDHgJtAq8ZQBTMtdC4SrcAzrzMStexKQAMFsKn9yUqa7uo8H7A64%2BALDI%2FuuQihKKUWLbS7ZX3YmPvditH6wn%2BhPBDVYNZFGZApNIdQPH7kfV9ote2b2Y5qAM9vtUSSpqqbruNjVStL4YkmrUgb%2BKCcqIBN1nYAFxKFwyZAEKt42z2egOh2IgPOieHP%2BAonGYSHjRfzG3Lbyal0SuhL6uxBIKztRwWRREQPMTUuRTH%2BLJyf1ppSgVSTWuExJi9n4InZlsdr9%2Bt37oiFdjvM6tP7IWEShgghm%2BKZ7Xj74t0xlZTCGj%2FrMSUlsM3Smjoh1JCl1YBY7mSQ9o5IFlfxvtX9rZOXinMgswmHdMhgdiDn0U%2FfVdXtiw7hd9NVoh3Vb1SKcf%2BGr1%2FUBfANY0RBUvo1HZ3C1lc8t4BrILS6BzKpqP%2FgPe3Nks65FvElPUkZSepHRSeFkEBee6pCx%2B%2FOF0VgE8bVy3UdTVlRgtZ6qqW%2FPX0DaQuYrXtdqM5lkw%2B9M4rRz2ZfrODuIDiZQpv%2F4zchOzbd68GdbQTTTFUnuiSYqHYSsk1PRg69FTrwlZWPWTrmNLnk2cnVzBD9InDPowumCofUS3BcY4Jnif1ykjb8N%2FVdMxHMLV32b%2F3LO5x3M8SSw08RlX86ZqApO6MIrygr0GOqUBuR6kUY3CVjls89FwuIEOjz3%2BjaCsrojq3d0t6Mbei%2F5H57WdvDUDqkBVMUZ%2FlEvHg%2FWa4k206D55tcvXbgQBWuxnTIplo1ZI9s5smShZoCs%2BlOvpbI37llXFoyE4WNNOAUBTKQ1l2X7R5C794PmpPkYtv0r3lzBgHGZ1Ycx8tR6T2OQbvy7q1%2Bv91TL2ITiR2GdoHBRonncrDEUVSucAtpx%2Fa4Lu&X-Amz-Signature=6315fe9de64873a183aa97cdd49db1a60af0eaab312ca60ed9adc7d2568b0f80&X-Amz-SignedHeaders=host&x-id=GetObject)

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
