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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRY5AU3%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDakSyHV8uMKmMUWhCLIJKd4IalixhH3O%2Bjbqyqi25JLAIgQna%2BtE435%2B7TzQCtu8c5f388Grqx3T6MZXMhTEtYg8sqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB75cOwHXBSuUnWh8SrcA8z7BrCYKvgsntzpL%2BKoPmUU4%2FKJpf3J8V1wgwu1t0FyXIBrY5nFI8dhV6Cjh8%2B9kG3D1eDdpCBPJYp6mpPEuKP8p%2FK8clm1mNvL9Vs2ObttR3ihBH8K5Z8HPo6uAnesl4wOgzRnOoedrMH9sDWUfSwO1res0hn26RgmG4r5dzITSrnwl4ilz5RZsC2IAeThfR1M9qkeC33k5XGmODnqxHBD4RHkSFB6pEWp3dts4Qe%2BjhCN1GgscVe4zisS9TpC89wOIQAwM0CUfNkAf2fXsd2MIl7dq0jbRDnQkdmf3aVP4RzImJbNu5GA1%2BpO9PFbkfVs%2BoiVvacSmmQa5n%2FimRhSGtJFK1l5WZLBNbI7b44QmfcJOI7lQWeOEJ65%2B%2B6wXYunLIJrgdAXJ2Wm7u0rGqAMC6DH513NCA7BxOwm9yEGDgW6g9pRsntkYM%2FkKMFAxEA32ZLB8%2FrfVYB7G%2B38Xwpuz8VWbLGGwkitSjh8FcOTnVg8LfbXx2kL4TVCrCzHAqDuLABrbdc52vI9UtoxwCRD%2F8Kkp9j3%2FBt5rlSI2j817RU7oPvtmTYU9tHFw6nS3zy7KZkHOKJ%2BczjwOvb%2FQyYLGfBOchn5rOEEYAICpl%2FQrbibFuk8jNX0C2GxMP%2F8jMAGOqUB%2FUSOyxCk6%2FnOaVp8Id%2F%2BGv05wsrcbmXUFadTHJiPl2mLKKmyx2LrIsgeWiYTZV2CGvZg8TcajxNJMnsZaacVGb1hLq%2FUxC3HJ15A1udJJaHvMdWm3IAnRSfACKGw8K0c2F6PLI21abddehGVD5VCXzJpiJ3xx909GnB6B%2FFdyQ4mqRJ0a7G8GPuekAYeoGmEzQ342C5PfAAoUv76jv2iB6l%2B0UMF&X-Amz-Signature=677d7768c4f7d360ff055bedd3b3511914581428f6c75aea80bfa259cce61b24&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKLM5MQI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpOOy6SoB5qCni7oGxZA4FeCMGhv3ghj5bt30kmAgKwAiEAw26WqDeZCXtCVWa%2FvCCt6kkIX0h9M3v3Bw6rGSWixmEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJz6yA8jBRUDKHE36yrcAyCOvJBqI8nonkbUrXeZE9GSKwzcDp2nCKdns32jrP7rW3Q3pnYDVoD0g8rhDzDWhOB9xtm1V%2FKurfh4SUjq%2Fqjfb%2FRmCHzw9QwwY8QqsnKzD2E7yAdS1Ly52nEYSRgGHV%2FzBfPrD1rCyz8JxKpr2uz0VdygGoukv9dliasY9RDiR75VOoQDSuQZyZ%2FkGtz8SiKOuwLkz7uriq3WvwTbsteyJCNRJP7cHg7s3UPKZ8gkzxhq8W04MiCZEY%2Be4df%2FAE2SGiOR91PyEPsCGWJWSa4fCtePFW4%2B8I3O5PxflL7ZTqDeFWYmC4eO8HLXFbumfr1JiKCINS9eDJDeeUebN0IIFgLtPoWTpM2%2FH%2BQFUthaQxQxyVRmOlY5%2Bab%2BarCgFccl7XlK4M3rdunKUlWKOAef4JXWu1ehgHLXcn1fhNKoT8uudfdZk5ng%2BWwZEBjFzpHWBrHvHIt1VIzVIxmTxnv04PbuMwW5UNCZZh71KdGWIBRRASNHBoRHspsbfxWnjUlCIdVFqrOlE0sgW7n3nP1iAHdlt%2Bl%2BGlcfK2zGXcntvNH7qMA80JsOIadk47o3lUTXkTU7ChcbU1D1XeMGN4ooaagvuWkXMt2lCx0Yr2hkE4vXc1sHeGclumteMNSFjcAGOqUBFdAfmU%2F4XPverqWYZRXtxvU1vukFeLRYoGDPkS%2F%2BVKc8QhBTlNDcWuv6XjyfvwdGvGJBqWEO8R0KAn43230xMIRTv3uuH1IzPripG0bGRLUr5r6A8d6Eoei%2FDQPn1kr4MrVhr5nvLFJarmk6b%2BaqYyPj1G3zXlhD%2BpZnXBHCqMKRRowhrT28Virgbq0qKJfHcM4uE1pkwIPv6qe804G6VezXP7AF&X-Amz-Signature=c156274ea2abb762ec62ad534220cf46569d53b13d15ab3ba3c523aefe5d960c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
