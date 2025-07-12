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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNC2SAIX%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ht51bQ7ARDo6ZijLUxEHgKKemOSkFb1FN2oMSwKFiQIhAKHb0CVbefaAFEAfWLArgwZoQn6s6Nrtx5u8KlAG8%2B2oKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2B501nH232euTHXcgq3ANPVOV5NFCgqsLASZc3ctQVdtvGBQHfEv8j1JXTwGKv5Dqd0utocriI4dVfcR%2BU%2BnqKqDhisyqIsoZj4dMaw5XS78kjxALDkMMYBbvRsKkMkoOedgBVZJ087y5niIPPaqdI611QHSwMShxMK6BOIhmq5ScjnL%2F9oqHjWLYct3SvrZsxk137wu6nM9hi4RNjt2RHyl0p%2B1ORaM87hCoBhJGNsrj4VXVXrnYZ4tytH5HZ%2FoHv875yWi1UV%2BHcSwwBHA3wofUpO%2BEeKkC%2BJlyWXN1BVmKv7UVOFMtQNaUW4zCvk48NsgM1X%2Fv7B7NHXHcX%2FmF2u2ttPmiYX91LmxNkaIpft%2FWNRWX1WL52lmkffNO%2FmD1%2BdIkZlzZTyugaYJBJDNfkr083qCbDSLTj3zgdIkmPlQrUZLAoHxzde8AWd4zw3MiBmROIpeBnQpVuxcD6Nc8s2j1noUestmQ7229d%2B5ZsUpJMsjQjQWpkFQukmOef3%2BCW54c9Df501s5GBYVfeVpWvU5FFQYHRqpDwe%2Bxe9l5CqPiOBNXRYkr1p%2Fz1cuiCvbGQe2PObIQVuPOeR9jcxqHa9YcOONs53RSWS5AGpgkHzgRgGicfMxQHDwVH%2FPCXEs8T6T2SB2EB3J5ZDCf%2FcjDBjqkAd8%2Bsz81sQ0xBr8WWMg2Ix7fTPGA89bKW8BJuNGwS6c404c5njULdzYqAXcnPPQ0BsZ1q1guIEaGOiSmxEMav11M6pzmWX9orVSg1s6R6CgJa%2Fd7NskBOH5pPmuS6VNN7vEsk%2B6XWT42pNpuz6DbDZEIoRwR%2BBIHnU5zHr9Y92ooc6KxRrPb1sK0Jnce6q%2BbqXa0KBfnkzlFj6sGQIZJ9Qr4Xqit&X-Amz-Signature=8df3418777f6e7045b9ced805f4d11865646828736dc266c1620871f8d0fd4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYK26YFZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9HGAQFFoXpdPIljkl%2FrJKzt5jnC7mfawXdsJYODzXjAiBlrTm5OY%2BxF33bEx40%2BIUb1dtlo6ezABZ61Xq%2B15Pp%2FCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNlunZkOBLX4jURL%2BKtwDoMow%2BrVj29rGzeaDOki8V0X7kDUD0N4x1R%2BgifL%2FZRTsx9lrz7wo2Zl%2F1Ycca5l4lWGELoMOAiKgD3vqH63AElnOTmR99jifc0S%2F3NnVHAbPQVfUMhrZsZ4lzwC8tk0Zkp2NrTWrCrLRFl6OM6sXt79fEFg%2F%2ByTu8%2Bzp9VXboyINQUhmCTWFYgVKcs9ZAj%2F7MfBIpMENE3khU5KV6J2TZfs0cOVnXxAWZPR5%2FECXg%2FcvzPWJAnGgqHqm2yrJiS%2FPCOogA9Vn3RISuIB%2FylV%2B68rqX64R4GQHLdcWEFNpsQI7S0QRt090AsYyUT%2BJtPT%2F3XcALzK205lX0PYwKV%2FbSfMKUSJ67LfPEDevyz1F7lTw%2F%2FlxoFRA%2FW%2B7EVh66Gmnwh6g5XP59yvR28eLoEKJF73ppYgWgpiAoSos%2Bu3Bgo7v2M%2FUQ1sj2FxT2n%2BHggSZa6Rbg7jew3SxaacUt8E5%2BackmpsIfsm26uNGWA%2Fe07xrXOptk3lVOjR0k6DoxPH%2BpGZHyXI2tOBOuwdPF3gPhYMw3VkrpaF1PSr%2B5hPKpDLsGrio%2FMTT0gEaI5Cf8uuYbsuOsao9q8Wd8NdGsYOAqOouVER78aT0DqP31TWb%2FEdL30S%2Fdyh44HoIA8swnf3IwwY6pgFySkaWFIhulkefYi50vEZHDPiboEoVQuQsjzzJZ77QOW21R3XyVzLKv4%2Bj3rCX9rd1ZuFkLJCCY88dTwWZ3IL624cjrtJpEWqrDDUQqOcjIB441x9b7ZzZ5fnZduTND9aklCa6E8mqsgnlIkRUzi%2FrUK4Xm61bdfmQyH%2F40tF7UWZFBNS%2BSbi1j%2F%2FrG9yiGh9gzRcTvZ86TmenfYn15zlSKU36yRMg&X-Amz-Signature=aa660086597cbe6546e6087696498d61550ec29ae1ba8b8f30b523b8c909ca6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
