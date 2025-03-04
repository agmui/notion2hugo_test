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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645CSIVSM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL%2BMnszW6w1V%2F5kB4CYiQB3ZdMN3QsCJCdJPnXH1sTZAIhAIrlh9ix%2Fq%2BzzOiyI9x%2Bs2EgSLA%2FNFOIbTwjBOf6%2BBwGKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3TO2xL1S2f8Ru8M8q3AMLeMyNTwzqInOGYXFXsAiu1eCPKFK0iuNxw5bGmaE0E1%2FrWZNAsE9Grze8OJOWnpgytxchrt7wTFl73b8%2FI%2BAXU7I3O9nB56z0oHqLAHChkidbzj%2F7xlSRgsV5VDcSo4JotSeQpfSeXVoJaY9pB5QIkR4tD%2BKpNuBFqVsXzSo4d8EFiWapQ5xpxRMT7bN9xmraOl%2FQE8jxGZnJIU2b%2BE3DXHOjrIcCpnSrhiZi%2FsnriRdLIDD3699Y6mp0zNhUWuUHFaI7yGEAlYXseEmmbagvagrBjrLfQJr%2BJ3Bz93IQt1rtaaqU6fDXPq%2Fex0eaqxSjiGElAZtWMCQjggkvUymz3DRrCTeDWCsDveCOkg6muD7aZPFuqfuKq1uws%2BGKogXI6K36g9XGWejajFJ9zuT%2B7mxbtcSBIbVb8LmmKSOP26ZAfygYrolyKGLUA9lMJyJDEX4G%2B2l3iW6GRoCS%2B%2FaBEukTGh%2BrA0I2YwPiWcpMv60Z%2F2Ek0u59JyMJEjzwz8wu6M7Myq9Suyp%2FblaHyfzXXsOoD3J%2BUJDBvgRTbbO03JQ1jAem6PPNnw5gzLUkpa8mwapfcp529MrCB%2B6xrWkDhxZL5XVf3aTuGX7cIPCd8FB%2Bwij5k4bMb7znUTCM%2BZi%2BBjqkAU3DxqdeXbbJ7TgUnK7tYDi2hGTJjdheBUxTpuC5isTu8MmvUQ9ym6zeCGUyrcGDDxVYY0lTr%2Bjx49ns84t714FxjqrcwLny720%2Bk3%2B6HHZtESQp31e2PfUFLXbhMBMTU5KA4nwoASYig4dgLvgKDlQPnaLm6FOA3A0GnUi52ErPjbItE33L2%2FyI88CNhGUVIrHqgFdWuAR4wW12WT4X1n27b2v8&X-Amz-Signature=30bdf9e5f38854c78244e60d5640b337dab8b9977b03b33f632fefd9d855cfb8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFGFT5DM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1uogFrRmVCObNH0uUaAbYIfNHofeo2eLU%2B1S7TktmHAIgd4oPml8nAZwZqApXufTV7PLLotrynvnUrw09KfENdeAqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMHVNTbUlVTijN5GsCrcA27r4tzI7Njlxt8NSSz8dXGYVGY1mCZ27X0HMveTc0WJNPGbFFEcKmSCshyp%2BkvdcTIBriM9%2FnaoKTjhE2BzRTGRY0HHgriBCwoSnic5%2F81xLaqO9s3O5401riPOYLF8OWoy%2FRk6G2BaVuIieAhvrxiLdN6lOLYqVg5RVQqYwliDGVgbz27PSN4cOMWRRdVp1n%2B9%2FIAFaMetQBvf0loxQ4l3Toft0L6kQWNyhz2TB6RvL8ea3fopcO%2FA2aA%2F%2Bmo4tJP21XpnjWVvUYmopHni0L2lchYtkspD9EDlXMgEJg3MJrWwVrnf0BqEoZ%2FzenazJqHOOGigJw1ev6hWSqpHXCGW19OQdyVfqlOXi43l0rK%2BYVX5l98uENSdqCt6oFdrxjBBAH6XcfJ5H%2F2zbm9OHDXfIlugYFIseWU8sv%2F3JHJ3AWiBMpvVksV%2BgY%2Fpv7O%2F4qxGeRh3Xv7RTEbGu%2Bkr10T2fXfBmp2Lb1NrQIqlBEN1r4MvDODWPq4Opb5eFDSnO%2FZ1vNCdGuciJvJuJhEGP3BiyumOYyotILse35%2Fb8GuxTLisEFXN%2B%2F2JdpzXcKDYd2pzxBg5Ew0LFxGgv3WQuTCC13iDPSxTOvxN9BX%2B1X5KEPIht8Nl18MKfNKpMKX4mL4GOqUBek5aQMGU4cbx0GdJMvXc3lj9Nm360RG7gLqg09QERX4FjF6FkK9vfj%2BPWjs4wTRQmkmX7Ai98ysIGy1FlQHtFz%2BPDNYmvb12urTkdNnU4TOQiQevUtRw84Z8nbiVmQ75jV%2F1KZZq06MntSts5pavSWPnTrU8xP%2BEMvd0cDvqcWeJUWIyV4upnwDay%2BAz4Do5bOszYjrwvbF4ctX7Wi5G%2BBf4jsEh&X-Amz-Signature=93a0fe01ee335e03ab0a1659bc06913e01a9adb9b1b4efe814e91f80dc986d82&X-Amz-SignedHeaders=host&x-id=GetObject)

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
