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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGUJN6TZ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC%2BfVt34w2FA51AGfdYPVmLQPSBAov933H03%2BAdzaVLkQIgFqfGtly0iaxNy86R1tqdWItFO72h1tsbgXDC0eWgVZMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNRt4ocCslg5t6EtDyrcAxXITPhIgahecaQ6TOX9jYm6O9NFQ2ywqni%2FEQJxwWXGlEMuXc0t0OSZ0RbFPDWTFvwhaSuGqlDBvNnyx7cyQ%2Bxo0lfa%2BkectBZG4C0QxN9ZUbpyUuDTzCm6NFL5uxLnpriRBMDzOuZ1oU32xYSosKNJO6UAfrgmn%2FlfzjjTZdepCtZLlCDlcCorT0zJAy%2Fv4lzH0%2FE5U3T7wBzPRtU3HtsEKlDTV03xsYASRZeg5uSvigjF7maKd62YmhuUCcGI2bqZVJMAUe3%2F6Go%2ByBmayr%2BOit4w%2FyA2qtSiGuLi6oNVQzLlyCQgtZCTLpa%2Fa2mQR786xrnEd92v7pNziVLDhjrHU59%2B4xlCMe%2FdPEb4%2BHHKjYw0LzA8jfPEStzTDBZBenZPV8pb2bzRXrGQaG3Xtm1RWSwSJj3kXd4VkRyOrE8j%2FepfRJppmYttMBXrjcs5UWs4ovNd5t6p2nmPbnWK6Bsq90E9Gs7SgVYGD%2FLxklaYy7hTTtjcuNDKtZxRYLkmJ2dMtSenoGJAAwBDrphHmjMFxmi5NLZd7xV2GdFohZMauwfhlJIVozrAmxZx1QrbJ8luUcM1SbMWAWhVD%2BGhdA8LZgOV4bN5x3QD30ZBZCnN3ro7ejty1LR%2FFLQFMOuTtMIGOqUBUCU5svFelXaF4wfH2f6UZE%2Bwf4iMP%2F4aMfTLaLKYqS0IzWrYYt6ncFsLgizNPSHclIqXWQTPzjVq%2FC6dXlypEZu1bDdSZWyA2IdeBUCRVijsAvzXE6CkYQmWihjQRJMWHYwm3tQHg%2BNFJIwc8ZUM65KKF9iMRBCqxzdXESi9OdpNMNg0ykWaECD1h%2FxJAjV19t%2BAMNANnv4ITCHXLCwvolKEgjJQ&X-Amz-Signature=c1e3e51a040e0edf1b79413b1fe5c0eddaf1c3c1223b7157b5730c5969f4aa2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPUZX5L2%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T061115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQCLw9mxHVrDvaX47H5eDkRr31aSmsdVryTQ%2Fa5yMzOjfwIhANtEYIs23O3nn3svi2VEA1nG6Ey8yOQAQ9F%2ByisC3VTIKv8DCCcQABoMNjM3NDIzMTgzODA1Igx0mn3Nv5DfhCbX%2BZkq3AN%2FEhxg%2FugdCCPBjkdpBRjK2KDUI30Eyq25B9XeW1D9SBHommsjFz40FJznCaN5uOBGOtrpW6MF%2BArxThYEjvvTqhHMlIPEGiB3dYyj50uZqS32WLHUO5Ht6A4hB548hOEe0WgulMhpopEjOzgN3%2FyFpMXbHjtsD9rCSSDpCFxJdlSh1k4TXdHJPVeHRnuBOqQl3dE2bmJnqqngjFTCh87EGF33Nn2DsHkI5orX4hUnSCTO%2BDTNKyt4KpH0fCtrqEwVJWqnB5mv2viPtJh9Xwp3by9WuGBnTidLLFezIWStTCzaftrTbNbUDsVdCp5B8VMLtCiyZI%2FxG2WPztBRYtg0MvI%2B2%2B3NRbUYUQF7BdnP9AHQOEUqjRxkn7qB2N0O6NbK7XsOV%2BSi7TCIOa97WNFJPjm8NfuSxfou%2Fdh%2BSMkBT4YpNiVIvOJET1pK93O5NZDg%2F%2Bs6kWNzTbukyTnRMClA9YrNH1c7bMUz9Ta9LDfqA7ff1RR25tOWkiF9vDBy9AvqYiAzlZpWE9Z4GIW%2F7QKRYg7WQ7%2FhllogXHYiGOKBJ2TfhniAjg7AqUFNvY6WVtru0FErKF5TcjAPcMr%2FAKMiHej%2BADeTj0CP7z4%2BXWF8OzpGr8wCTbKg2rHcqzDck7TCBjqkAdRBOYQ4MEWMTsArPfSkh5g%2BKmjxzLe97KsmEmLgNkDx2aKzAp4yJTyxkBqID%2FBpOjlrokXNwr%2Bj1sKfoS6mJTvwcFuU8wO4yFIiLkmLZf8q%2BxkYll2OCxisYTvFSp6xWiWHnpaxos9uSgsmdf2kFg5YwanXX1m4s71eAgkTglgVEWYNe%2BW7HzJVLPV9AgNhXPKnXJ640Fb91fJMJQeMo0ZRCv39&X-Amz-Signature=4ce0b6ea74fe0fba898612a6dfeed8c745a4261eff4071600a6a85b565e8c3fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
