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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBORB2O%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGE8rehluFpyLVg1CKAhfmqjW5pKHtM5O2E22qtDW6tmAiBs19hjb%2F4H6MsWZeVbJ7W6bqGx6qll%2BIcV2N%2BethO5%2BSr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMO8Y%2BX5DDMj7bP%2FuDKtwDC8irWpuICc3%2BIK1R9EzM%2FaqVsv8uOUY%2BYSdAPlJrV7YgoSaEg8X9JJ%2BF6UIEk4AluqEaxlTO1DtUf0cpyifHGvxjPbuVYWPUGxPJ4PtJhProt1ZBHMwWuzSbakv9hSGD4fGOXG3ZXS3%2F%2BGLsIrG53cJhD%2BABu5HNBwMvmMH6AXNa2pSx6%2BLeo9X4lXbblStdqRhDzKvf4JY4MN9qZWi9sj8TM56kBTxhZXMHxt2nXELP70TBIrHfTSB97hKsfe0p%2FlCjNuXcijZBRcR1RyI6hb6YombBLIsQN4jNZQjnmxt6dmtP%2BVNJU7gl%2FV2l6B3ouvsdenKeiKU4RCij8pGzUvM2PPpC4YtTia3sWEYjMVUtTk2zUv0DNZ8PONwIV%2Brn5y1%2FECII%2Fz4FjCLC40%2BtuJV401LySRONAtMg1%2BHiT851Op%2FUOkMQSa44haIhcOMmSKVgl0MfzfSpPvkG5MO1VGt8e6KDBT1Itfs6vfhqnfx29ZUOL8c8cctBHyu2DfyJWB21%2FwoWlPNgSVYbtJJ1lG0vBs1skvwGgkHOluFycqXObgMHQvm11t7zFF7%2Fdba7cl%2BdkeGPRPxAFCR5hJZNHro6%2FJqqK8j%2FX2gpzYJ6I2goCICq3zTJhP1C5B0w1qa3vgY6pgH497yupfjV9%2FBM9ntQXYnaM0ngsKZSdSTYaNswxCcmmeVDXkHgk9RIBehhE22GbozAfi%2B5x69j7xiNc4jAl428%2FozO8MgUbBAswNqXtOtGq0msOABDARhioo%2FyO74EQ6%2FrpaIXI1nIW%2BOfvIYd41IelxDcShjMDim93hD8J2Gmtx9Zx9%2BSv1ssUHInp9zR7YqCCI4GEcx6KeXUZqJPxNIvVnjBfPvf&X-Amz-Signature=1d2a5c4863af2765218cf42dd025e580f95b21e2466261e68441326efc657065&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4IJFEVW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQClOwbpi%2BPseBbXLx0gkEXxaiLztpR6EswPupWyn%2Be84gIhAJNbKWCIOo7YaL0U%2Bbqeqnbp5oBrtLjkb6vgy2hVzSJjKv8DCHsQABoMNjM3NDIzMTgzODA1Igw4z7z1WoNj0q%2BSucoq3ANyVcitNwt4YI0QBaOO5%2BtlltTS9pPGIQnmr59%2FszmJ%2BM7n36PWyl4PR35colPeLfCnHBjt0YJD7xZKsoM%2BwKbX7qMY5k3uED%2B5QdUnG13DKxPXip2ixZgwWpfiO6zJ8X%2B02J29BL5lTIhO1p8vNoC98%2B6EaiPUj7AIAA%2BvDoOBLFQMCHkAhZnEasLtqhXf5GrnesrRoMgxAZA1FfGVkzH%2FyhQXELbrNbJ5RFF3sS22nSdpy6YHAc94P1TEjMKziXY6ZUtLBFn69FTSK%2FEq0aC8WvqBGi4H6UzvDCoyjB0ArnQ%2BQxtO3DgdrgSyaY2lP7YRSnNC1hiM%2FWekoQHe5cAl2TqjDTUzE4wJMS7WUEbRy2QsMmRCgP16RJbgiXvTqN2JXPOXX%2BpgikrBqxhV9b%2BSGUV0uSZNa42TV%2B58mIWLX%2Bf52932c3OcI5RRktlfI1roYklgnfgsBtY84wtVrqP9WpX6frpWZlk7J5fcMigTk1kr%2BYRlHFsXzj5blFFkfEDULe0KlGXCh0Llzu2RBW2%2F83T%2BmI4%2BPu2k3Z9QKw1mh4fYqjNjsuakMKiHTQuvhUeDQ7MD2pFysCb7VlGeSPj%2BajwucEsMrh69U7JO93uN3zCHtdVNsSBC18UFsTCIrLe%2BBjqkAVK9yIAcIRG%2BQZPpXypI29Oj45E85SLE0NMm6dntZbF%2Fk3Z8NImHZTX13ddU3jQ0YB6Qym1nZXWug2TZVXv5x0RPeKJ7zE4mlRWSTByCSiNCF2ubTaVJXTuLn7wAbDp3EuVzFIsJTD1QlQ8wSd%2BscPekohfMCtfe%2F5KXEZ%2FCH907GBc0vfBNr0o%2Flf1UZga7R7vFmcBFInTAksTGuybSq4hggoMm&X-Amz-Signature=d4348c5e3282be8e4960a8cec2e72b6608d15a3684d8bec9df486d7749e05907&X-Amz-SignedHeaders=host&x-id=GetObject)

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
