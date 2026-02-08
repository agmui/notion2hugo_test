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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E335DKM%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSDrAuLCSdOKJapBGFsPujpRajLP%2BYzxow1C88DY5SCAIgd%2FIJGS4%2FnUlGfxpB3ausDyU68gPgkrPsBQifQ4zoaVcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGaQAjUP6ICEgDFvYyrcA3J%2BR8mexkK%2F4kb32VS3R0z5WLr8Hc%2BfEDpsINYouOPi9O5gBx1zuxMDWluqG5CuFVHeKAqalB%2BnmHQg0huZbYhg%2F3zpN%2FVOGYQSsQr4Oqznjq36Bomon%2Br6zxItvkblksXHtBrRVhfMDxfw9tk9UAtjjzyft51b73r5KV75RgJvfwY4jkBJQJhYk%2F2AfjpY2jkccDUwjQnmKQSzJw5MQH5bP%2Bf9Gx%2FyTGbxh6t2ckfGhvbWEDYB0nWbWjHvarTQ4azfUFu1mUEbU21Sd3M5Pl7el9uxhEY2oUcxIXYu9oHoq4Ri0CGlbDi2P0twmxJl7WtS5CECDSEsLF2o9s3DVm2jI9ok69Mrn11RIp1fjvvKnjWwQDAx%2Fp60Dm8WXm0ep71o1kWtJAQFUCBAY4dcZ3njlgOnPQ5OyySiAkAT7n5qaTMZ4SZJQyh4b8WHZwd3S8iFHEZkb2mScvDxqunHOwA2WIFfz6J0F5LiIkCab1VboHZauz9%2BHL4YbPBOV2SgoXBAvGLR5mmmI12KYSjphUfnLvR1%2B7YeYes2MmhbnTj2TS42McKxrasKIztHsAm00MrZveycbFeU0nSKDkUPGHhZg0IrHoi9dBrO%2FGyHlmBCXnxbDSIBi05x0tcKML3qn8wGOqUBCK1M6Pg3dH7oxRKw9u%2FJjCXAuXKVChzJLdqzJFwPhmqkAhqTwCEg1h50JZCiAD0W9QjMiQAaifkuxaNbohuia7MPcdJ1UN6yQtc2l8aJO%2B8A21OtSXxNFdufYh8TTqowPmdiN7RXWcdtIhJfyZFj8bxBlfgsuqEswUNgjcNYmxeOxTUbdCp%2By1kkAIK2CXszAO5Njhw2clCo6vwOvYRm%2BBj8B1SV&X-Amz-Signature=557901d404a6368d5bd9a4bf55a407a3cf531116fd368f47cb67bc204afbf4d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRLKY3VT%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4%2Fie2A37nWAM7Q%2BaSb%2FbzuU1K5RwP%2BGeEtNX9lnLdOQIhALCJw9rQAUxh39pTRR%2FcZh0kiA%2FpuvwmWKX2ZFzW5dHNKv8DCGwQABoMNjM3NDIzMTgzODA1IgwCJd%2BJJq4T%2Ftm483Iq3AM%2F4RrliRwNslLxvli96e%2BciwThrWUL1MV3Cbj0ey082u616G6V2PjNc4ia4wsXASfGd8u6hGAu5MoV5TFR4k%2FQVZ1M3XIUMClzok0Fqzjy%2BDAnlWSgt422C6rXcv5qER7JxZ%2FChKElnd3E1zTZ%2FxkHAjsULy1P%2B9ZPXXaXt%2BRhJo%2Be5zBC9%2BmZJxNDLhzIgxQiGjrT1BvlROdjkDqpG4XR89gTJcI2Zo3z3E141s4FZgUxj%2BY5pDZsuk%2FZsD1Pw36etlItan8MiJNFccuzMyqtEqzYtxE0gleKEUK6YNhLtMDn6XnZxhc70RXnHCr8bvr0qlv8QcwZgaLVO3j8xyfE%2FbRYaXS1a8iN2SBUwOEtzOnlaOfQu7FHcTZq23A8z%2FlFRcF4BEH44O58AM4MdPwKDRFPZW4eUodaG6WxtioO1v8wvrlQ5NcqNacBtX6oyTXcQ5ybaVl6LF6Wd1ra%2FMX7GPbBdcneINl%2BCOBh9gzp0m%2Ba5f82ui5XyeRLi3PtE06cPhaEEzEY6B6zpwTLx0BDdSBBCGH5L6%2FiFx83GSMVv%2BWZ47dO2DrGa8EjR2uSdqFoIqsijNeU4Xpe6cnbaT9BoDyXjDfLRMjeW42oIViThWCvLUWDYCN45VCOkDDH6p%2FMBjqkAS3pjikQbbSD3xI%2BwrShAtW1L6ctAWLWuUuDlvLVjiEhB5UQekwocHrKQ8ZWBtYgSzlPM%2FIE%2B64H59BN6v1VmtGz0Lp8QapceOuktU0T3LE3I%2Fq%2FgxL0lbWUcrtX0KsYeDbeYGHaTCsITtzoyGRPOejtT7cJVz7pAcmZzr4GMRO%2Ba3Bo8%2BCH6Vq2YcCi%2FtpcRr3RdNjp1EAFb1gncVDH2LRyV1Ag&X-Amz-Signature=3b27f9075e57a6179252afab4c6540044052679156fff924b6b17c8f6c8a236b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
