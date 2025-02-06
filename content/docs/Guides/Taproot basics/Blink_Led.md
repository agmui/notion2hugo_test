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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662PC57JM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDeTSzrksqP9gkNqpdXjdUbGQeLbUeTOA0QiAoN3ZNcKgIgSi0jsIEIf0PYWty5foAFNN12tFTxAne3pz2S8py%2BBngq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAqoVMFHr9sXjunc1SrcA7%2FkiMQhzfrGxB9s8PC%2FJJpfhr4CUYREaL%2Bg5ryM22F9F1xuSINGScvYu%2FjpK9FkQLddMB2QzjuZWdTOWWxZbibTComiFgsZ0KNUpxh5KKNEyS8zy0fxO6aODiN9HQdsTid0pjfdmFxkWzCyBM7NR2t3GP3esPzKv%2BbEp1TvCd77koLEwxuP%2BNfs3mcc2n1dCZYuKXx1bOCnbnlE%2F8eYwjHShsEG9zZZ49ihzENRCJ2N%2Fi3l6u8bDiLaVEVJf8uDN%2FCQkQ9I0VeJbhKi9y51GXjNbYEGhcIZDkptrCgrApqWF1JVEpYSj1f1SKMcIFbrlzKNM3K2U2NhDUDAVjBlOucCKTZy6EnEzZAstRCdGO8zGSJ8Hh%2FD1USPdbktyF3TQuAS%2FlukNjnRGzqiQC3Md1J8drz5GFvsw5Eyq4QzgtAHFx3K5Btrm2UUy33sL0PYrGviXndCDUJW4mjFQyjZx5tPuczR0mEOhYm%2BZ1S3b%2BmIrOawCxyo7l5%2Bto%2BUHrkd%2FyE4sPeMyaRGgwPvvzAsYseaROKf4qUNFnMyTsiZjBTFT94GFaROqDcfcF2xrlvlgF4mVcJnj33E1LAtkP1Ho1WP7VhCb1rpcoS9v2xOGGObDA%2BT2HaDoZ1O253yMKXTk70GOqUBXzLClzFAuUaJNDYZVmbFITGWMf%2F4j5FeCJqBoEWyiifD3zLZUwtZ36hFeB%2B%2F1APr0iGqZUJwHO6Jjb4CPhPdD%2B3u%2BmkFWUwUt%2Bjl6mwTY88qUmXlssXFcxR1ET5uket1F%2FhARlkHHTCO5QfYqaJkO9wV0NkZdE6j6ARJVW4SnKqhtGBncJmAEBCUZJbRnPCaI8B2eEwqrTnlAgMD8lYSNMv4owXh&X-Amz-Signature=0ac9c1b049fdf0e17fb599df09adc3456d7538cf7c5f8562bd528dd4d12b1d52&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRAXQDLQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICnHPJ%2F75cKnntcpilQvNkbuCOk4ucIQm1Qo1dzym8dtAiAjJH39erUHeZM34W0Fpc4eixVffpEDnKu4RY2qZ6LPnyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMSjiDM0HubAMlGmxFKtwDVcMS6XD7Wokkf6gLLQo4PneMSdUU7ecJ3o6Gf9NHjl986AhYVsg0NNQlryYlYt0TlRDwZghEXiXFGQBaJjnx6JY%2BCKfqk746YikpYk2nka0RuGCOcLzh5iBOpfSNTszOtsa%2F02GBwiTYDd6dwgz33VgkRlL2X5Zv9lyrE75chehQjS%2B7hwSX0gv0eC2QuhDD3VdBrgn3TGcqBmgfdphVvUu1pZz8Lp5dd7dHj39wUxfIdRZf2TrV61zV6BtW4aAap8Fl27jEKQZnAyvK5%2Bh5fxANLFM3xXMiAOs5BNYlGIlofVDPSY2DJIuN6chI50t892gXwnlMKTVP82ygps1tI8kdEcciONXpPx1z17619id%2FNSPMBQJc4wCNZ%2FMl%2FPI45QKCxak6O5P%2FLVF%2F3LoBBbjtmruW1CDTZfaB3ntvehmn7VOsg6Ol%2F9c2IFYCw6IpCjdtV97d2hJB%2Bf74HOjO573wn7FxQyH3P7%2FJ0Mmq6LkJXRkkHRs5df956LmPjuK9C%2F%2BwnyaAjXSRqUBvm25KoudIfOjFTmZob0OqAEB0GNWGSeW5JBDZNZuvF4JLStJ84FASfeZ6xWMbaAHhofs0vMEtIsgpjljFfEfhmEsPyzMIdeS3b10VsqDFf5cw6dKTvQY6pgHMfWuLGmZ7z9N6x1yHIeXv2%2BNFNgmxjGEyDycxzt106s9Vyw7RWI1LczqVMLnFLoPotambxaKveQ4KoEkY6q%2FedoACi9msk6dOHymdOD7exdKShZuXq9LswGqX4YFVGVtbT%2F1qlLoz1qxfxQg66q01F%2F3HhfiMesbvzIbRvsRvJ5qBtCmAv1Ji5h634sBexeXu2Mf5SI8ESD56BjR2h3acB0FLhstk&X-Amz-Signature=5ee8eb1594f3461ba4e6550ef8736e990a53911df92a3b0076017fc1e7786981&X-Amz-SignedHeaders=host&x-id=GetObject)

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
