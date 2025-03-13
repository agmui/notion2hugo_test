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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXTGZ5TX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGa%2BHel8sduhm8eIzhMrVTFEMia%2BO1B43v9d72xSwSCHAiAEW5LMdjFfZ69bTuP6ezuhErtgkZVkCm2jt6lsiJZmOCqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM97IZrE8hX%2Brnk9UvKtwDElYm29eDZzWXSysOGtxy5Q5LNtOfIW4PLNcu41a1tH1tR2yCaQzoBPCZg3LMGgiE1gxOv4ufVBDitKToygS7bEeXbR3SnSC7%2BpU40%2FbwVIgGlBqReRiMyAg1%2FZInkd3Hkv1U8xwMJurnqi5emtD28XS3cPwtIUXHarplFvX8FmEdnLrY%2FaD0vJ1w8MpPZvF9XWQa9XAiDQ38fqZBryvS4iK3Vf4DfpS1bvrQnCHHuf1GPPkybHHlYvzJ1Vb%2B%2FYkJRVYrAbYXoMWLeaWE7eWT0YhFQci3bp2eaP3h37vJSWLF7aYy9uYVQyNiqM4w2xmhQSv6cNkpDv2wlEIoTvz4m893cdzO%2FB2WlLrl3kIALKnSFyc30G4tt3z8tE0C85hO9PQPY5fxaisVAxXIBCxMVZ5FXzbnCm%2BDgaTbT7%2BM49G7eIjXZrPrsV2OzxyNSgN6y9rPOEaN64C%2F1eDUzZrsVpS71cIM9G3eq%2BhE4UqxJIeFVmvJ6%2BptoMSrkjWV0yBh%2FrSX4hRa3ZQmo0r4Fjmvi6iqq6JRKtLZHvH8ZYF2WqNKU8BsG5BPj40CjHJFfXrVwBBIXWdY53f%2FWPVOS6QmbA3WlEIni0AOG9eH2t8%2FShteT8KiqAjMOl9YNwgw5cHKvgY6pgFgBF04Xf1TeTzfb%2F8cvJp0nylXHTs1pfYwyjjOsTpF6PA%2BBitoMIuMkY0YJGgx6OnRuNDWdjI%2Bb9ucBIYMeLdTIubUHRLEP6fGo0G8DjpEpBnMLsrAZX0BjsWWeoxSNA4w1ebtTyN9k7sOmYRO0Y3Ch9sG99b6z4jNtGgF0%2FqN8t3fRrgEMLNWrU7xufYZbxCmAb%2FQt3TgsEdYhcAPEuBMK2HwRARX&X-Amz-Signature=417fbe9edce94881dccd60529b1cf09e7f8f44c99e2d9c9a8bdd69ed5caaefc0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPS5VVBF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIAZDVvdxrQ0Ar9NDBP6Yu8%2FiZQgN6UEOdsuvQJJDVbAiBnBQ10JSPGevVjVID%2FWFsyouNscArIcSSqEw%2BPkJEkISqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJFX3gZC4A5XfbGp7KtwDm4FrYQeo4GUm5wrwEH11USlhM%2BFBE1TDKqGSQxseBYHRZi7G%2FT06OC4Pc0w%2BM69RnuIfphd5qBcPcbAx%2Fcqetu3C7IYmXHCcGFWLJNzjCCk5oPx3vDw0%2FXVIv0q7msf3C8lgn7DvGLlzQ4KsGVR2rBtFGHIOQ6hV7nM98y06UTrQciU91ScLj%2Fe0ZF79y617jSXaqpIO69KUt9GeAzDKJ2sN8y7%2BR423RH8bPrvKfSop%2Bv7hiAOTVuY9Hn6RNe9sVYYWMAM9of%2FBK4pYxnqvU5ydX%2FZkj3JVF%2BLb251zt88xbOZh9r6HcyeXIwCwBP2%2B4b0UDOuzYyHSg0nM0dngRv26X0VXEVV2jojLkIvp1q94GkjyA%2BuQw14hzBqPcFc5luQX65YILtvjzpP%2FgzRmAaN9LryHGamwg%2BgjGz4YguEXBTONgtgJitc9mkQmrzdOHFAUTxLuAiVXeoZ%2BGLuAyuysHBFqI9kPKTD9qv9Lnpfx6bOb4SDsJZcyEDWx5nFZkRkD%2FIKCnG95BTww5Y%2FDwYOz40yDhcZoT2irtKXkqwlls3C0EuUEeypt2pDnRaT4gwm2y2xLXkmCAWLVliDWUxTENttQd7bIHar3R1eCQTZMTAsUDOJSPCg3vvgw3cHKvgY6pgEIZ4a6IfikFoVX5MZL0XtqwPxkoJFpmUxdxix3Rnx5yH6VGx5XN4ThHrEaIvif5zFTWksEN6PcTF%2BDZ%2BFjuhZhvtwg2MbMzmNkm1aJkaPPO3WaPgx3Jm8RX5pOE2r9CONu0wvN9%2FHl%2FVQUiW1mUbGOjJA4XCgGGVPGssbVJHqPxo4KnicTi%2FQztBKRIczm2LCVI8ONRSXbKzfyeAsQIE5GV%2F11HqOB&X-Amz-Signature=e2543b5e98a387671df62b2a5fc25443b96b68ff458ab3495e7c07255d84c1ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
