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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IZPFJ25%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKT7X2ZJKJrG7uNnngGzIYXL%2FLcwtt8IaEkVMJyS5rSQIhALWS2rplXyAuNALdccdSg455tcPrXdQP49ThW%2BjXFMfhKv8DCGYQABoMNjM3NDIzMTgzODA1IgzJhkAjAcDhcnaLAecq3AOrv6XHkUc1KD0aYmtvCOj1A%2FDWLB4jvBCxJoAUINCjgZeqrdz1jM5qBGJgttEfk%2FFXBcQ3fuCefCaHGt7JfiK%2FTo21JhPPiN53hmm1qQsAfyZns3cEp7%2FEHNCP3H31pIAQwGyXF66O7470WzBRLtfWCwT6QMPW88uwDgv%2F92ZRfAyiKNiYxgrn1E3eA6MZzYMu9xRsY689IUe5rx94eO5ar%2Fpa4mycFHPGMbeKkqhXxHWg0XtAwvN4TnUZsKq2xIpDZx25WFrDN%2B%2FbDWGTfMgr%2BF59ANr8ZCRyu30QvEYIVBTlQTowsRSlusyGqkxcpQoZvETXInHnKAHMYjV29W2UVrDBTZXkbHjZKR5vo%2FyyQ0QNpfQpTLHH1lF8wMZ6aekKIXGHU6InPRe1lKhBYBBlPG21mA6XsmCBcUlBW04UHSxSWEOLkExWC5MuFmY7fbxg2KPauOOSP2qjypBO5A8o7Oqs%2BgGtVlcwREpvArUcZxjZ%2FFv5%2BnZvUuI8mKNzfbCIebsMXYkS0kCwTIgud7XNVgODzrzjwFWp0JiVVylBpL3Ic%2FrQ2bcbUeXbFavE0SlQuFg380iTN%2BvgZr4iinoW6JZIWUHvNHL1l0w5ztPrCIrcpkYFTEh2RICQETDrydjBBjqkAQ9MjL7Q3ESIrJhN%2BIK1oteLBATJFk8DtoAiccRhzPDKias%2BoS2llPHd9ZMXPGz8uZF095OH4tsDwkL%2FUximI3fHL7aIdD0iO3R%2BA4pc1geTb1mh56rksNMspEoGndbYFkK4yaB7adC1jBPcjPXqkkgGJdEn8PI%2FRySrzm1LD2draYttXsY4FZagPSAUpr6M%2FwVVZZT3QzAknfIHWcvZ%2BhnTFUDP&X-Amz-Signature=e911b1e2aaea39b38ce981fe2cebf377e282dc6e889382d36953414433128681&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRURYGXR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEH2%2BFhUimlHXMurPCfW%2FNnv2vPiTq1DDYuJ9wj45EAnAiAEEIi7Noc%2FpikiA4Jg37G1MSygKP7qjND24mKZmCQQCyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMRSItz%2BUP%2BwQPNPBWKtwD0j%2BW%2BGr3ZeU5h1J9M9su3GHj3fxvLHMhCelehb4IxrY1d9pRdRTwOsib0XsAyW5Ix0ZzaEXRs8SoHQSfedzuxQHJAXo8XV8ygouwuwxoN4xQzCfbCCzvFzsXUWjcvwTXMFGrm9ikC7LZDiNwtPKJw0vi3x95KXJSGK%2FsO33idZbLs5gbw1VotRSSta0Wl%2Bjl77MBgKX7vJSka%2B9Etih%2Ble1mLuTKSCeCVq49mJFXtzySy%2Bj%2BYYi4xHrzozAt0eCp9Z9c8zEHesSuW1UiE8l5PNcWU2lh8eXEvWBBD0%2BdvQY3oZoxiAeFF%2Fox1VLTdSsebOYWKcmDUqAE1K%2FV8Bdo1Z7k4fOY%2Bpp45Vwggp4FGvAshmPMvo7%2BEdSS7kW3RcmiQ8jIJW28TA4eNF5%2Ba%2FXbcBHLJEJaZdSipkJ3%2FtPqHwwJb7111ZELW24diiJAC%2FpfAlD5a42GdbKQYQ0DgllY%2BlOvdTmVE1UugTSlR7ESE%2F2S4W67dtJcjD9GL35vbCEQMJ5%2FLvQZXgvoZeeMrhUXJObu9av75Pysvembox6q47s2DIPpYCkE8kRt2PljNdSEUKqGAc39I9BcFbWApbYU0Yu%2FROOgStkew%2Bzc65eBzCmEtGMsxu1Aa9Ov4oMwu8nYwQY6pgFlhCraTO6zw%2BLfMKTqKI5QtYgQu6hvkE5IeRkcxnjYR3JrtRq%2F5rHzkrDkLYfENSXzdOw3dLYx3vIgsEvprrZrW3pf22prxH%2F1TZm57KZdeJzvSQ4irz05sbV9%2ByWxq%2F41Kb6HJHN%2Ft9V0SZzeOSr8H5yUhsvis3AA0are1xiRl9PbWOm6KKgmOr7sI1%2Fli0Rdmaj5pA2kgyMi%2Fc4HlCBSNDkZn0YL&X-Amz-Signature=755f81d2f0dd761c496999968015dceb921e91ec1af28d54c2e3cbf51f7b2261&X-Amz-SignedHeaders=host&x-id=GetObject)

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
