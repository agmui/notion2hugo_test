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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AXRFKHI%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKVIrYQX%2FNzrBu6M8uBVOCDi81aJ3L7FzM0%2B0EwodqTAiAiotY6ytS2DX6tFx5k6UBpTy2F0HQpl60hZzu0n2pmAyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD5JMWEMEdV2QwBi0KtwDBJrG1ZYFk9YW8Ij8oKJKWekjFL0eycNWeRMtj3B0o3Q7cpl38OAZPkqpwHO%2FUhElqbg8Ls0mkDOQJzSvFWF000LK%2BpbaIrrImjn5vRkZEf2X8cRK4RU7j1JWQ323IYRGf%2F2mq8Zy9a%2BXj8MugM0HU0qnVC11fDIpwTSKCE7ZlRFVQa7rQnd7tU0cWcugT3HdMAEFg20fGHTN1huwIOJBzB7B%2Bc4jHLBmQ8xfuoZ6nj6nSXjzlyGyLxkKw7%2B9FdNNlVAKuNeWgEDKvm6yrZ2lCQJwi9i53djv7k8g%2FkbKAGUGYFQhaiKwZ%2BZPoEZU8qrxP5637YIjVgqXzn1%2FMEOxs02VyCuWBv1TzxTp%2Fa2V0oIgAP2HtDS4gDRK5L6nsFP1BOeIONrKAcJi7ZrPhUj8%2B1%2FdaK4feOvh7yDwk8iCdADTAQTsvkxyy%2F16J4U%2BdAjDj1tY7RxYal51EH2QrCQiKoIh1sjfq7j1pzApjoZ3O527Ntpo4oPnKvdFijB02dDWH4Yii8QH4033VRu6zo1DGsGR0BGQbvLIaJpG3RKiae24vcmTZ1pc2QBiMmlGHM07p%2Be%2FPQVGcqFk1FN5HCZ2X1VfQTI%2B24wmkaI6e1182UrRM68xnGRCBX%2FoCWIw24LivQY6pgH%2BORrRFsVMSum%2B32qy6hyHA0hDqiIOsrH4EeJoOtkZpa8r3tq%2BfPjgIi5YWdhltzOAimW%2F%2Bj50xTeYZkQDKjcnq93FUIysyFqTP20yiUq9XrBgdvFUUGyEzquuHHadnvtAVIRF6v0lFd8VeavHjWz2uUso7NE1ttK6%2FVsNqcpaaolnazq3GiYWtdv2UChqOGpTi%2FW5GHe4VsfZks%2BslTKF2mNhtbiT&X-Amz-Signature=1d7786e624bd8a0cbaf89767a03714b4ab5112965460cb42cc8825fbf2d81c38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC2XTUJG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7Q9blIfyfpDYmoLmtmMVdD2S2bo565aocH846bH2OawIhANK3M8VFnGDkulYD%2FK3cn%2BS2IsW%2B6plnPhxo%2B71w1MKNKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmGPEBzJFfoQr7FHUq3AOCBMZLJRqjwA9kcKUTE7DJsyvVCtvB3KhQEB9HRt7Gryz%2FOmWua%2Bso7RPMbS7kx32KuDkKT%2BIB6UB0vc5iF1bhGQLI5e0W39YAEoLbsVaXv3uqjXwkwheRoVX1vhA26qySsjU0OIdPQfFLcLeKEINLsnd%2BxQsV4X6Fgv%2FkE04LQMJGKCiKoEUowoMvqYifWnuVVtcdeqWvouwXdwsgAPKHa6CqXoTQwlz3rx3s%2BmebH4G%2BAhKgFrppcrvmeZBUTOfyE6be1RRlbF49g%2BnYVB4PdA3BAeLKL7Ob%2FVSuJkuN%2FnVU2C1vNCpWvJzJhK%2FZUMIx%2FJObGczLHEXyeQo8HHFLCkOF2wJCUrw7DLIcXm0D%2FCWfjf%2F09vYag5DbOba1BxZfAPPVFNixALhAJ7ehl4jv3lk9HWQkfp7auPe6Mo6Ac7NhERlxrkjsbYtxDS3D4DBIKYuebDE07KmSsRPwYwI0RtMKoxbOZwIrUww%2B%2FqLFBE0oGpSCRqhjoJCOmYE6zm4Ew9AqS5Vv6XF3ynI2IvgaIKpD15paEyCPKW2DRABYAgmH%2FMx97e%2FoJxa5eqIjtX0M6hxZ%2F6tiUTtXNHYDBypgeSO2YFgJxoXZUd%2FhUoIkTQg8zMZIMb%2FgWMcbYTDCguK9BjqkAbiqMtmFS%2BJiDJZIjvN%2B5WAxr3k12gtmoykSy5f0GkWg1vyC6nCkSQNKwYizB1qbOfyKXEAzUI9T1TpIGerbG6cprqrq0vogsSmeZiTywCTkTdrgKnBfHTOzt4Tj7u9ClrRPvGnaLWdAGF2DVd2MShmtnBxmsalyHpQ0Y5EHqS6IWNjyIn1e%2Fegcp4ksYnndv5SfN975gq%2B%2BTpoyf0I4stPpOhDL&X-Amz-Signature=3b6f1145539ad52578a1e52bd44d0a5c5d98221118d300f5c42896639d343aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
