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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HUARSD3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgH3XBqa5%2BFGFhvUiV4wMNGMhssOXGOvfSJnEmKjdxWAiAL86LgREqSRSMbR%2BMpdw5RPTSG9jzKJRmVUx2s1dgNuSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEowavuU3eZf0Tqs6KtwDsI8sJ5nMqQmMmBkejcOpOCNg1BUSAFhMk%2BWIAjm8GfYlM2ycL1wfDizTJTWwvrlmJwOoTeLnDdCDQZaFnK6YhaTmjiv6Pzp%2Bz9OhEUKCsEwWFJsBrkthaUCN270fxUomTPMDgpFk7kJXfUIE2k47TMvlO9D8KZ9xwr1ixsytPXQ57BywtbigSd4000h02BUKJnxrtLpOpGVc46gvlaErYCP3XH8eXScxlBAP4y%2BetVCeMsv1Np9X57XRFWG1O6l661Ro%2BPx4X9oAhZNWNh96W7ZJvueGn8OFHI793BS3%2B5Lqb%2BxuZ5pQWH2itxTJnuqrl0C2vPHLBAtreNcYRIo5PbwqtUUA7ZsvsFV%2BUfoULBpn%2FpRxc3q42gOETGo3nui%2BH8CM7R7%2BCr3xdlraGZMnIlwbF7Chx54dFeQ7blaEB8EsIzUkXwWV2EC7OFTKfcV6Rd1eGhyglZY39Hy0SUgyOdYY0P4V6S74cOn72b3AN3uF6SI1hf9PXqMXseHctAQeu%2Fu%2BJuZPr1yzwN2iWZ4m0anj4zug7qiIGJ%2F9cw9zOz2L3YCNM2MyuD8Qu4uC0TENy7xFsdMK%2BeCux2KIw7Bz89MV0LGhqYWgEewVWMKyWSSC3RuOoJ2IkcX%2B94owgbDYwgY6pgGIprENUUqmkdE752e15Oip2tuH4GtBoRTCI3kcUwq8wYmJZ1019qDhaiYXbWpQBtFPZuqBiXoNUdH5KkJvSqFDlEKPFucC6N61EcTWGJWxlIOKZoQRR25kHE8Mc1u%2Bwqlit5hrY4VuJWonCExKiiRjYaeWV8H37kbIMHzW78l9rXOa9bu61zISGdquhRYu5n804gKQTWd58oJtu%2FU%2BJBvp5L1Hrg8S&X-Amz-Signature=26e0d1df04a0fcdc1775264ebc193d6cab309cff6b35b97860c07a10051eab67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNUQHPKP%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZe1%2F8dmZto5DQkOF3%2Fmj%2BabwCpBJlFlzsGdl71ZRLWAiEAmrbGfCpvWkENqXz0HG4OxNJGtOUKMoggZ4UBX%2BB6o1EqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8KcmMYi7%2FZJuNOhCrcA0%2FJRgGO1tlhJJjat82I%2BYuEmWj%2B1%2FvgkqV4fCALqMOTovbBd3ErI7386T5FsxohaABVsGu0oRZkjKk7DLh7Ip65Rq66K6BTuw7yXNd7Q7QGAhpnvj9g%2BZ7BFxMsGZIdwHDOpcE%2FXl1I088zLkSHYbpew0BYFIz9Ro%2B0VHBr63NBgAa1IKZsx7syXXygs78i6mVfP47UbndcRBuFnZ0k%2FABxRfIJe8XrILQhZgBDiI4KyXta4N5geUzbtde4KJrVOLLkGoARsf%2BLDyEya3n%2BecbrsPUno5OKq6vpmy6mBVu%2FUmNfSpjSi2zOfkNZ9dACVSr%2BDEUYW4Xh8f8NqI4kmU8fVwMFqYtSaRdQVarfyFTvr5u%2F0XqA2AptxTA5xa7qxmGaRIphJEEyaS4zPARfeGNP1RnBmTiA4PHOfayW%2BkxXAPDl38FSjM9GRiXxb4rfFKwze6DKPbdfbpxuCJcMUcIoaifjcBXP4H3iihBxSJBHWipL8Or5PiMGVLKj4El2Uyfb9oszTzgRSSX40VxPH%2BuLH18EDuiuj%2B2L37LUWf5jE%2BV6lje6qFT43rGEoXZXF2r7gbTMxmOsmyU65tzURibgsinMUbO80NRDFi1wg55hMWZzCMb%2FzvlJuoHiMPCv2MIGOqUBq5FTdW9j1IKCnPk5kYoawWlmCp75bX2HTsbyDjN2%2Fzb3%2FVTkwlqGCvr%2FGqu%2BzLESAY9Z5Esi3iPJUuRXk%2F5CELY1bitJRRRcCP37CiCphULXlRiKF3w%2FCa2gXax9KF2W4hn7Ltorb1d5Puz3EuNV2pwsS6IutT9PIl7YhDJ52JR1Z%2F8xDsbGx%2F9dTlC13Ff82KapNnwBxHVuZRWwyHSW6JhAyrcG&X-Amz-Signature=170d50511ab31e90c0940d0d6dc7d3234d3519d7522722d3d64578efba1795cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
