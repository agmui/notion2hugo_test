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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISUVJ2R%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAa1YyC4DGR2NA%2FpJaB3AeRr019%2F192LbhW15DQ0cZzxAiEAgO%2FSVUjL0gfZqWeds6SEwTljxTdKDcQAPfHJxx4TefYqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLK7qeZxi%2F6JZFXPBCrcAy27Ly1%2BRRQj%2FWJSk4MqD5tahFxH4pOzLeBGvjGN%2FCFz0ncmKsThwFNBZerbmY83KA4v0Gw17XedUfY4NKsqDlCd%2BfRAd0ZRMayEVR2v0Dz0SJBuoFwqFXBR7stn8QamFFTJiF5MdW3fnatvzLk6yix5yVJrPyR3%2FA%2FUDFSL2A0FLwgbo%2F02dr5ShD8q8vGzoHqXRhjaE5E1739mYhtTee%2FwIZGAfMPZzKuNuSohT%2BUVNVQ32Kvs0viiUi4u8WQ8t5xV9GWBY2VNgxTJYo%2FJTncJxD1jBs71CySTT8Pax%2BiqaTNK%2F2RnyuAJWe9VfuSVFnNmkT5sQUhO6x4eHl0%2BXbUNBcjxWR%2ByQQNsnlW5aB7rdrMl%2FrzWFJ8JFfiGhuzgJ5GtaZinj4wxHQ1LSQ9OCbq9B5FJD2QkK90JTiX5SNSAmTqqOT3IInyBgRZqovCmbDECJo5GtS28RhOD6yO2cwr0F0AwWqQPKEOH1OkdbG2fxoVuDCCMD%2BY%2FUoXB75RB%2FBgy7TBuC3QOxnpsvpjmXFXxQhvBmL6TVgpB2Q8QGqK0YoVP2pPKUh%2BQjxEeFjZ%2BZ7w%2FORJe38ma1vGovJUIrt2CU1JeZHQWPWj9GQRpr9fHWp0PkHLGImgkB7o8MNLMoMQGOqUBn98QfGCT5NauypQTdUKbYTVUNclThbIyHKc5ircV2%2FV%2BNHziP2QYpynfGe%2B2AQgWGjkEPoVgVLZMVrVHd%2FeSBo3o46hUf3kqdu6N18afINZZydT%2BuW8WbsHRIxUsZEwbAuxZ%2FukXkxQuzPWpAfAUZyrMwwnjWCUdgD20qqQen7hk40wj55%2Bmy65Uwftx9uS4mlOf2kpnpnb%2BKtpYrFeuxK8SoF2Q&X-Amz-Signature=4b714b5d4918824af6ca9fc0148fe3a1df32628081ef59d09c58902052b9ec5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGYYC44N%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T051943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCRMPl%2FX4J%2F%2FRrMPTgR3YVwe8YWGa0xecu4vkXOWxMRhwIhAMHQbpVfZ7J%2BRmEw9UtP98eVtuaUf0fR8wPF3hAigM38KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlSR7keLuG5hv3Yr0q3APQPQKlICJp%2FBY0ezx%2F%2Ft80e%2F5KoP6%2FGfodKQsINzFrjQRJG0i63StkPW%2BgsXndig5045zSyFpCTOgpUOLKMmbBBkuWvJuNZLbFl%2BcEBhLCzXkaF3gu0ijasEXd%2Fw776vCEDHbByegD%2BgrS3ebe%2Bwq0xEQ4MBHtXeMjwwrTDvqQ7HBRW7nvm64TZ%2BC%2Bv3zDAI6aKStJiNVoT4g6jso%2B7mE8%2By%2BUf3iUAM1nUrcBQXDs2frlo5e3JOMG51uqpKQFXVJpbxxxLaCeMO8LsbdCCEp6aYqYhthHPQp2q7%2BfGSVaz6x49kBoeEw6w872QgAXgYt%2FPvb%2FLccaUDCoga%2BHqSM91%2B6dEAJ0Th9FjgyzEOtbYtfPDu2ThJALpMRj4Pi9cJUInKHN07sr16i8FITiMCm1OELyfR5bddRy0s1xydTMc9uDbycrgeGjAqqntbD7ZMK4q4PDQK%2FGmNftLvzo%2F8IkYY4%2FhaapxqYm6fGtbudCHw2Hv4MaVC5NafhHwGnlbXx2Sg4ZR1nLecJ3665f7M1iQRPhkwiF5lc7XbLJ%2B9lrB%2Fe5i5mINfA%2FgZMw6ibci%2BdJlwEP6WRLKvDkHj%2B3IeZu3uboyIhX5dmvssIljtUrRe%2Bcusi6jfpqdbCZHjCbzaDEBjqkAeAXKPVw17REEF%2FwOLGMYyh1qPF5Ghn8VGhoMiWpWkaF7DrftgInILNYG4Om8HLM3ksEi4D8iti6bXGPf0a1q9tEvFDvKOy1RIGzELB7H18KY3MKdPT3ecZjaWuBzcdp63ai7GCnH6zn0BmA8ac1CE9AFbueSig5Qy8jsdQQC4lQf7yw1E6HecfoT95YsJD6tk2TWvR3ORlSk9Iosvi8GX29k3Br&X-Amz-Signature=fe898500c8459533f8eae83561f98e65508112d31656567a9d060debe1d1e4eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
