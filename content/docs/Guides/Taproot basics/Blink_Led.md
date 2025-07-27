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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q33MK7HK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCLZmN99oHCVwBD%2FDkYD2XOcP%2FOo6K%2Bo46ATtEGcpAm%2FgIhAPB%2FkPuWJoKIb8qEgzFs7udPtgPvtVyu6aQRz0ddJUvLKv8DCHIQABoMNjM3NDIzMTgzODA1IgylI49jigrxQM9cFTQq3APd2lRrTk8Q7XkkqhGYRF1QTBMDj%2FbzINCRxxpzBvukTpQSDexShO1BW5uT2dQs7OsavXn%2BmTP6ES176CI3DLYPitbHhXyH%2BOPsKR41Y4jnyKdT8H0fA7PalJjGXzV%2FpUi7qEGqY6U6xJ86hITrUbWyWCeWT0CpKlXwVZOTh%2FlNyBLcSKNAdVP9y97GN7oPQTCMd6CQYk9HMD9xq4KEXDTUWXu5wt8oS3dJBkKaarOsQ0a8qgUhM64Ig9AVFpdxJS%2BnUwTUxp6Me3YiKH8bYAZXiU%2FwkXBtZe2Sc7PbMdFbpevL2p%2BBubpkviMEl3tNXDz33oGwZKsNyN9AYGBRJshWiOEhKKdtFc%2F4sLsvdJh8Xpy%2BWcqGIQSiIbxhzIVfyP775Gzq6w8TmF6AxGLmfNL690vpxHqEq3hTxR0ONcjHEgmArq5G6WL7VSWWAoDWLHDI49W4I9TDiT2UEobu5yGjlRUMyxVHESqvOb0Y4WyOhVdDhIdI5J%2BC2TL347OPTGesXf4vaCm2aQBE39u0khIUD%2FLbB0vrfXRsSw1o%2FxG8odqTTY%2Fb5idJL42g%2F%2FTZ6CgT1E5EfVWIC5cWF99hZsFSh96nYi302VZBo5M1vXRo%2Bkcvy%2B%2BrMxO7rgPfCzDF3ZfEBjqkAS8N4mf6uCH5f%2B7%2FyfbWpHC3wTX5IqLCbmClAmsel8rynQurQdmdZw3xi6h27gNGL50mycR3k7LRy4a%2FKVtnBdznAZGlwwfPhtl%2F1a1drIP6bbpk%2B5MmT0SWq9eL3oPCzohHbIp4oDckTl2t0OVyJKJwjpYr5YXvmh1FpO8VhWeLyE2s%2BYiaVQiQI%2FnV2gtSI%2BIeufPawDjalz%2BeASqAe2G3%2FSTO&X-Amz-Signature=6a67eb16ca5d1a9152249ab9882d4f4d7a9e82010bb017f5f190805150428ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TE57T7V%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCcFH7Px7r11cF%2BXWFYLbeKe7PZoT8Ytcrb9gd5Zcqj8QIhAIMqbAnh1eBudDl86iTxbrse2kpVvDIDJ0X0k7LSBm2%2FKv8DCHIQABoMNjM3NDIzMTgzODA1IgxgWYPbwskdUyv3l2wq3AOmKsf5OIJmqks4rAmhe2qiW6RSXkZgpUNChcNTelUY6kIjHxexdNJm%2BGtvP4%2BQG6Qx%2BEooJ%2Fr%2F9fHe2B2l3eOv1FZs7tS4tMeUFhJEbrxaaUwvS7wCr55WpARlPUuefs0lye2CO5o3Q5iBtQJoDL3S7XcztZpeKnR64JNqn6wdNxsbPncxGXcLQPwkfcdMddEJe8s3VZst587erMObIO7ZYYOp0NJZjiHVorXUJfTp6%2BumoEdtqeBI06M%2FOyEKTbHg2jpLVHFVsYURie9XfSiEapX5G7iiSLTJzVjFZgcKLW%2BH3YrEUuOKs29jgIXX%2B4eBkHq7y9tRwO1SQVuG1ndSjDdai4q7YqjGogyVm9YfnT0WR0a4YnC%2Bpz3jImLmabF9TBmg6I53zVji6nk3Uz2uZqvOI8deUZif2wYVH8qFLh%2BNWBZ9Zrnn5C%2FISiQN%2Fqr8soTIL%2BF20NXsZZOZh24P%2FK84Ad7tH99yScAVqRYbuXnZxz6yEePfKMrFNcG1oSOLnDlVUgP9fJBKutssJ%2FiOhRkzrYornm0J57jBbg%2FeJSMG%2Bl6330Bjivr4T0MhaFSdSuaHfp%2F7Yd3hkqxBHk%2BUmuc9VKqQh2wOldnPHPsZzW3%2FuW2JAHCMHIOC0jDD2ZfEBjqkAdBSIwjEpf9e6GaZf%2Fylu6QVoVIwJDjZwQ0V8lM32j%2FEJILpNT2ACAuE1lWQswEKEnJcF29dePioQg4UREVIQUiSkc3HWQ3pDwl1piUv%2F5ObAcr3B9JRXRiFhDnPnZZigTBySugRcfzNhxAvgw2gtSbGMEuqwhKYPDnIDVobp2NZeJBO63lEd%2F94zYLuH3Fi8c1CF0Mou58%2FycMeIdYpQKenacXi&X-Amz-Signature=23883855344f81b2db84369bb158a413c5853ac1a40e635eae1c233669e80be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
