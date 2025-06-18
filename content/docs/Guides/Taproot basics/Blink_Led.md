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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677GK4IRS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT8ILCNaC1yGLkeOxX6xUyUmw33x0bCcs%2BaK8g%2Fe5CiAiEAsHkjwDxUEPFgEO3HsiwP72QwIffD0KwnyOTxpE6gt9YqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BbfRD%2Bo0Qn5sQzeCrcA3fLtglsnvOM%2BGaGRSyFgj0pCH01JEGLsBT80Q0951OStYSOM66k1FnGgrcaBPaof1n1e1LJwWXFxPQg4rM44H%2Fc0c6Kf%2FFwMx52hQbS%2FkOr8wt1OdG0mDSHg%2B8sd4gclvvALL31%2FqCMuy6%2BGjtcy8gD25%2F%2F%2BA1QBq23aPxfy7qBQbI2gIto%2BG%2BiaqBupB0saDjQ%2Fv2yFKtrMD5rDCaIqcSog7UbcDzX7YHq8zVsr3N9ntFxo8vxTEo3%2BM6%2BrAvEb%2Bc3B0WawXRGODbUVdqKIjCgaLe4UqTrmVqZyEBAv583F4y7newlRl3txMwDw0EsXgsLBSF4EZ9pNCnyh0Vyw1wbKAPCT36y66ADR5scceFo%2Budhhn%2F2HZTyQzmHtoGSvjRPQ4Obyp73A2iW%2FU6ycm9SORqUENZbEYMkv4KGKg2XeVI35tL1idyhKTw5w%2BExgyFbbLqGHPNpE95FdDCRssGmNZOBc%2F1v%2FYmAzY3goU6qmzJxvnyeT4ltZwVPJ7wzUz2CMn1eRhLNqt63cjeDBV5FvVkf6FxU5ADWoe%2FR6V4uS3vnKUa3tyqDFbtBZ3cOglaDDzwzPNn5x%2BI3PdOlPbo7qoEtgM%2B3Y7ohHf3ts2rSYj5KrvBEKu1lkszdMJj8y8IGOqUB3eap9U2n1PUaN2Zjip1q1n8KRQ8B6RLaq3F6YqRSJbLdhTfioAjqJ0ECMhYXImc2YT65ExCCvSrDzN0oMwtxunb0b7j54zh7bw0%2BtbbpnyUOy4O5hMGathvM%2F7Vesrt56zV2OZjpLCqdTShOEEevklTv2SQVMM4V%2FDeS4JgriOdcD5CfqBQQRkquSP0Suh0HkGwoQ%2B0tBGiO4laYwiVU467h9fZJ&X-Amz-Signature=e793490423899d03487a933297e0ddc1623dcf8991d65fd113c9f7f36aaec8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SULYXUKS%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKP9eSvNqy0qvlev8KUPaZWhrAf7AQMSgvqZbOV8MbAAiEA4vTkb%2BsBVZ2KrMtLswbctmbQe8R%2B7L9UNNfx4yXw%2BxQqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmAVW%2Fa6cUDxsMcmyrcA3DgipJBojmbHFqdy8igNLkFEEn9UVvFX1MnQlwfkn7T2Aq5%2BSbA%2BgqZ7L0Zh%2FCiBVM84WIexz%2B7OIYXyB0H5Ab7nrcf8De6NjsjvU4wXqd8IH0NV3Hzm6CLBm%2FvmPy187Eg3uxwPaYBcirWMsC8kWCG04Bs4LeHvbcLEChTfoh8hXWu%2BwQpklldF9kaj6e9qqmjPqSEnTJxyppsvaZHMDQB%2BhuBth1VPmXDl9BND8FWJiMp3CdNYGIG%2BVkElRWfjrdRPnOBZ%2BDqqgEdDVERqnWB482MbPgW58EPLSkngdj%2F86jqeSkgJG5NYR0r6vCEDD64BfB4unkHMB5iKarYuaFW1yx6z1zIozjENRG6N5S9vBUlLCJTOe7Ig4JRSHEsfHZBl8tn5je8TjhXcZpy6s04gaEpZpr2pEoCuQ11ubHreijk6Apk5HNGqm0T5TR3Y2c9SF7wg1UG9hFKc2H6hUa4xnAxSa9qaVYJIq8ifGrx%2FBiFHLeCdwlSS%2BvoauSbnR%2FX8MHdPoCyCRa4wAsuScApL4o3TL9kbPu8j%2FEv7oeQ0094do1YO9XqIu1q8qNt6rUHh%2FvIqwi%2BHxeH8A9ybC6%2B95a0rjca9Uh1I7t3EuohjsWg7d4h%2Bq1nbWN1MKP7y8IGOqUBrnExgaFqwgI2sb4UAvTs37hE8M4Ee7nEHFXOFr%2Fy0EMI9msJglpowmohOZW8T72zBhAXhq1vL3UTDDKGn8uY11dDYk5TkapFaN7hRIBRlBtQHk5ND5dPiNKNzyy2ig0RNzW0ifqzmKXF2iYZ0%2FktN1I1hEdHWGsuGsIIiak32E8xEZC8B7my23%2BsMqj06%2F%2Buem0zvW5b21A2hwFpSCQzNnOPXqIO&X-Amz-Signature=bff7325dee2da520b4efcf90d4baf6d1fdeb2cc23fad3a6256085f678f9e5fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
