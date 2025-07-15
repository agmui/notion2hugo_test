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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR7CMYYB%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCICGrix04kzNlKAPgt%2Fo%2BaqCBTt3Py7fHuwZtIA4DgvW2AiEAs9a3IJg2XEHvn4Y1MGVKXFdcj0TS1gEi1cYMUJrHlAsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOir0%2Bfn%2Fcqis6tzdircA70PTqlU6KDiH5BjhwpmaU9FltykcuMKfp2hkrbLsS%2FQLSEaIsKNoAF3uWkglNwPSHSIMT8GSOdiH28PtdytbLKhOtRxweCiywHG%2BZv4oTklofSDFh0Qbmnwd7lZUYpPAtun5XD6E8eX38dTy6T6l%2BseclIpaf%2BYblUEaF4nez1CMe1Xvt3Rfvra24HUwLAPE33mZOxZKvUk90%2BrujORdmKBpMNOJZ3c5tMn%2BAjLeDolKKQx3Yqn5Y3qqizQy0DokHKI3FwfkaRkHfyoRMcqAfyO%2F3I9VxZWkBvqQAgzuPx1ax3SOE9OGHRCJgNr15qLXI3gyVEuG6fmqJWCdEKiVHzTxVhdJkeQl7XSF0dCJ2bcFzmsmDMtn9LjrGZUifI3r034n2XpHIIlLMsbKcNIYmK1X1EzwMee1RRIzNRyvOaOA9TFO3NNBHay0u%2Fniv95Hwr2VGuVoZGEfLUf%2FlS%2BvjdwTnWszKuVis0u42lxY7hUrm231hhYwYwi3bPR26mAyn62rj%2BIxgExOMw85ZVIk6IQVEvCFMl%2BgLluEKolt5WcLw3PnPFDYOxa8nEVz4K5J9AOvQ3057p9Kas3%2FU53GGctOmmLodL4idrReHDce5ndqsBmwz%2FBS0m%2B%2B7SPMOXa2cMGOqUBfkdx1LAdR71ATu169uwfcVvNVB%2FmJ9sU4%2FJrTezzG1SO2qsYwz4ERq9YmlZJ8nGvlXLwJO%2FuDH%2FlUY4XHP3vN92I%2FyNAszRZRrlV3vCgxNEDNMntIU8VCtEdJ9HMgjYCm0NNzL5ujIhDRyMaUT3uH5YK5DC%2Fx%2FURanH%2BHjAv3Zwcr9VMfRPRrRTNWrCEeWvreGaosUXAyHDXfVV8FXehwKNQg2tb&X-Amz-Signature=5ed7f86749edabaa885dd58828589009a3842ec2e69615cc0ec8db17e344c295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S62H5SST%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD8Lg%2BM7IkOyR180pN%2BNAAItP5D63somU7GH2dvEOGx4AIgDFWk%2F%2F6fNr2sKyRIWa%2BJY6awgqFGfTeWcsisPbh3K5sq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAOav4Ljr37i8Ag9aSrcA5bGKeskkeiQ0Mu803%2FIeJHAisUzIfE%2FWRIvVm350HBaig8%2F%2FIKZPJff7gZnxMVEceEL3lGrpfuz%2FDFRnhaxqGwKsdira9OMv5dN%2FWUoJOOczBEnIUlvgus65n%2Fkr0xUmr9b6R66X1lGnDYKqtsxTBjDIRFEdTFnp39hKT%2FAYBwODuXARYk6Cng5VG2DHxygIb2XCDL8r7ozWfX7A3lWX%2FG3lbF9wz3aAbb%2F1l3XGo1jIqV5v0sZZmhKR7sOYMLIfd8j5KM8DPIVbcWrnMB%2BPdZFcDhQjPoAKORn2g%2B0VPQ3ruy7nCuBy55S2Wcpm6HMBensjtM5pdslZyQ8KMAYoQtVr237Oe6VTDmDLvQXZZUQCqim6hqFVtRpKy13SSCJxV8rhGhRsagqPrAFGQ%2BqEGehvE2JncPHeVKkEsNgHhKfHXi%2B4TkfpLltgPEZ8mQZdsuvAtgt9AkylSle2frYRT958DIdsgvss3TFxtLaCOSJHU1C5QSP%2Bupjp%2FH2ZOuxsZZiWSHt0HWHZ72XSShSD8LUo0nW47QQNKlREbTpMxEtJnsLf1oEKgvsZJzXwkoJoUTpCdkx4sFt8CXW60CSkykz%2FqTuJm2wE0LEpbT0VTJnWdeGqKyNPBRvj1OtMP3a2cMGOqUBR8zpXwAoN%2Fsru0znv6bxQkYHu2WlI5cHhwQvMyvfnGDelXhMmtEdEwnTR8Xq0k7mfZrA9UPTsF8K9BoY1vNG8DgXgz5EkdZEw5mBGKPiniRGb7%2FN5vHOIdEez2F2WmuxcjVu9qTQjV5eyztebO6Zt5vPL3xT%2FPyDtQXP%2Fm1%2B%2FdyyWYdA3omkECWa7y4OUtwOgJkOg8lAGX7VUrhGH%2FAwNdUIBfeK&X-Amz-Signature=cb22207f2c4237da9d1a4c59c52ae325e9ebca87698f8ceff0103c4dac3453ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
