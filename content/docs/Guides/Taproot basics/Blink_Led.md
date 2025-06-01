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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSFEFWPA%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDwVZmhmyU1Y83kkP6jnxGQI5Ewr%2Ft%2Bq5qNNAlPMRZ5vwIgTuqhFhakZet3JE014VwQeBGkEWCS8CjKMMJ3lTikTXkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5c0qlk67wfibcxLCrcA2wMYKyFQzqQluI7qHb7RJGyubQhojfI4DuqC2lesIRH9dLBcnEGi0q96ED6AN0%2B3rMBTlRo%2B91q8AogfetbRrqC61W8H3WkqlIN%2F3f2o7Gg3e3IfEiiiu7DQvaI8AJTEUDAH0lVajeTU%2BZWiy%2FHcwisZ62I0vEH7fqcuClQ64F05OWny7QEWO1GmuyujsCXUQnZg5wUJlra2lnbpAjRIp9NaMK1thdDrwU1kxBqe%2F6rkmiVBs1UiS8rvFndE9FTvay0bLkMEsi8xDTZvHPOtONzvRfRmpdGjCK7%2BcM%2BWNv0gBpl7jBazvn3rkuisfn7XhphebMESnJ1Eji0SRfYwP8rjvVcDiMvI9Sp5ComriAAJvEBJ5fYTIs%2BEtTiD8VsL9WiHsoRzg%2F3CAY8esRtZyuxpPKoUbWIysssSVeEzSi6ZsNI7XF9iUvvJhj11ZsYu2G8J0PlJWPIMnqY%2Bm66faTjUOSU8gdPp9QoJs8TPNFkhapAdYSjhySl0c1YExkkkjq7vbdd8lM2Sdds77RshDBKRQl8tN4f9hseC90%2FHNOPJStS4EfWxQVaNgsTqMhXDLe11cxjGjrVMbBk1ZbOeU%2BpF%2F%2F6AhXlezkoawTkMF3l3A209XFw1x9MX4dOMOD98cEGOqUBySZWTHSmoTgMvnxjtYip0arFDScbnmm7tMpekUfrDcHQzx0lKSH0RAhFq7D3nd8t7bNmjedEdy8fgqfoUrJlqmQU3Z3OpLh18KizNYaAigLEqKnQTxfWu0g8PsckU44FJS6DS1%2B2ED49PXGb%2BUsn0yGnKpAn%2FkXgGxPRFTsMgNuRqgfdD4mcADBHnSkpS3CZgv3zyb4IFSAtSuZ0rRMorHWNOCjh&X-Amz-Signature=4dac83cc6ac1e3ec7e0275ad39ded4553bd11d881943e2ccfce90ee4913feaaa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVOPNGS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBSom%2FUdwPh4LCxTFUzQg8qM1yJy5O4%2FagWBfq42onjHAiBevEnIvqhTUOBViuWCt7Rs9pvQ0y2siwkD0MOcOopBVCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm62pMBS%2Bjjvp8as4KtwDrxemC45s1d7PWjL4HWN2c1tTmjS8HLFVywHdFrP64Q4gCB2OYzXAe%2Ff9g8MqPrkfyfWlUq1%2Bh9MNxbNSdGgN9olH6pyPgNQUaV0cBC6%2B5gaiYnTUppQTxkBsti5hSjGXXrUL0%2FG91Pe36aL%2BNKd5ZcgSnUpdlg2c8WZdIDaZ%2F44JX4cCy%2FqNL311AbOOvce8QPa4uDKD8i76Kobkt6PDTFjQyvvXypFykuZfZ7EWak8VN3Q9hrShyI9I0BVqK1vzJ%2FVfRyzmfip%2FEyNLCD24FnlMGuDUeuf35iSsQKkYMFdILbJgA3HnhCNe3K8mRSr9z0t61ooFYLiUw2ihD8kQBaApaUAVfZchluudVbNV4Rq%2FhkX1LCucNSmksZMYf%2B4huKQcOdF6FRlZzLFrDbxsRWAQ5AIqfFd96vSF5cQwAf082xVdp%2BL1kA61nMkC6gW8cFJG3kuzVcKfsZvteK%2FB002CoZzkyRnDR%2FjcU2XSj40RQCtRk%2BHSwApJpj3E056of3nHWU4%2FBCHTpRAZCjJ0PdAZsdHTuRnJ8szYIpzfRa4jMPFxPPW3wt388tuFt1ZM%2BVLUUK2kmfy0ZBpspVUV2mI5ciHUeCkv43FEEBjDdsh8xsw6V4U0m2ytvLcw%2Bb%2FxwQY6pgFsWVK2p1jmCXP%2BH2HMUcZG6ffuewjADDxOrnIEg%2BHnPxqBXnMqI1G48HkWnhhzBwy1ZhWibhUUPDp9YhJ9lGKZ1lXao7c7TS7qvQtwCleM4fHlGxo2IxFt2sAoMRFG333Uv8U43pOde60BPAKq2GGQqduDwdbfTgd%2FdWVXV8PF%2FLq0VKvoqgaMWZKSMLccij0PLpt%2F57jfP0LjTYmcSrkJoNw6gr0A&X-Amz-Signature=91e3508068ecb0fa9836dc8fab477298a45ad1b5d68d9122f3c86c633b2510dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
