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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQOQ6R6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCIwhvQv2HEaF1B8tqIsqRK7fU8qcArRz6LzkCLPCcRbQIgHsbCM4f44a3NI1RPRFVE6qv9PmhlT%2BN1GtKN425uWfkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeOWvd5HX3kozjiCyrcAwXQSLvuddJnwtQxUGM%2BWZ3XLLB%2FEGlG3d9IGKDK2AX9VcVHeZDEdBIsU3OpYbF%2BpmjENiF2vcKi3L0VTQl3TnZC%2FWhtyUhmuOielQpclDRfNfZ3yy92Se4kqnK8zeGElH9XfyCFG1GqrsYGoFyztQZ9nOcOdMB8rwgAZn3FZRWo9A8KqTsetLPH2whchN%2BVOYDFVbDPfIz3x2pOcCeRSoZ4V7DNJnfdDNSRTC%2BanwjD5bY3m8AYy%2BObed5L4%2FUJEOkATsfy%2FpvSJx1aJSPiZuIXL%2BAnNv00otrLlNw%2BY8bHeu452VU83tZxlrV0y5D1GOH4Sd4cMNLFe05TVJfIJOK%2FjHzUGr2ifjXAHAGXuHaCgFCu1dD1%2ByoA8p9oTxV2v9VWY%2BD8lrTHlY%2BgqgvbzBgaIYCmK8QyKjQIxxjo%2FiGuG567HwGSivPVbyeSCbOa%2FClYbvXgel55zwCwvfUAN%2FWWcUjcS%2BnZOdtiwF0sLMZ36jT%2B2ejfrqYHBl09NXDrKN5NWA25u%2BzCKvwnzuUMWxusy1eCL57bSha2l9kBdsjSxPLS%2BBCrV8EuSx8vI61pry6EuRRbCOBEn%2FgyGq%2FHllTdXv5SsaDOLit6FUakIz7GD9%2BencMHTwiWKO68MKia2L8GOqUBHifTP%2F70Iqeuk8Zu8i9yjpdy5nRzPSEVz8som%2FB4vweYROE6RcDvSwXGDDhc9v%2B9g%2FcaUFJw2g6uf9GQBqBQG07u6BC%2BzBaxBcA28hbLrl5glUhzkCEyscEiK5zZEAK1wUNZCSujQ5UxeHdlzhtCCkb29w8OyOJIUBoKwQd9eTHXmEbB2zFnxuY2I0DOah%2BMj0PWhuBvi0LyzR3sXWrgzQbFJFXm&X-Amz-Signature=f08da4ea8699a774b65e5efafccd0d0f6eea6b2eb9304e1ad00eb4c9acc44368&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2U3CSYZ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCm7FaGtPBwMbWpyPlHAl177a04CaIdQjQi2CX4hTqRvwIhAKZuBteE%2FbdeQYQ1PTous4heY7Xix0MbyICG01PqAZZbKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYKnaUqQszCW%2F1YaEq3AM6K7HjRWf%2Bss8rOghnN48heCK1jkij%2FhULaDous1Embl%2FdlgXZs9LLHrceCMlwGz%2FfByI0Cd3OMW0Or2BSVCxysZzTS2khRZdpmgdrlEyD4zUk3jTPeYyHFxyrye7VRZuZ4pc%2BWy3P31F3%2B2A288dSQM3uAVTFz0wPlUdiYOJi2YjAq%2BjiEYda9aHqyFMgnxTu6tGFDouMjChq5GqRUPqj%2BRTfqvkV2meIdjK14ywvfX6TNDSd2edHeWuoG5xtdxoD5hj88XWSf%2BL2%2BDI1oq078qWRZEHbySVcO8IHJgcsKN%2BKZD4uCqEIvAAhOdhjJimAO85fknX90n87XUr4xUJVFkaIznznKpXzVbbpVlq1EYF%2Fd4w239XhCarwSIrNAZVwfJB2pYyF1psDHD720iM8mXeUvuNAdrIiyJxfs80433Luer%2BuiNPxm0ZzT6jd%2BLjcNXTbhBYNvURpDBePyEtGU8Bg8sayDSqNnk2OD9Ajl%2BGeZCTIcOC3T0QuBbF%2FcPiCORDVVLOuVkVGI%2FVrtj%2FxsUD3yiUhIZ9e3KDOrYfHzBxx4osF70vyQvxE3364vc52a%2Fv%2B2EZ%2BFpI1NEaX4YJ%2BapwRszcxq62e32alvO00%2BLfI%2B4n5aBados%2BbLDCqmti%2FBjqkAZVY5Cg8w9M0jSjxarTCsaZVyyxKYjOiTy8nMITNBwsDznN2%2FK2XdkZ%2BI4s48%2FKbC1TVZVltocO%2FIA0zIH%2B81PxrD95eUp9DrK5U%2FkDogGALdp%2Fiq9zSo6BhuPLNHSCXYiwrFJOflxX1gvRvMm5n8hER94hFIIoY5ci8KRVvOkwEw75n9F8Z%2FhPAmCnWsVkgskjufTO%2BpFL3mwM%2FyvTMt3qRyJWG&X-Amz-Signature=3fe93e6ea670683dde5e27f5750c0635bd2224466be951a58bf5ea19492b826c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
