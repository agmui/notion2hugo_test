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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6Z6LOO4%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCICFl4LsAXG7g5wQsFA0Db%2FG1i4imDyQGDpqCOaNqWdeTAiB%2BvGHUiosuE082F8LFIWt%2B7Nb4P%2FvO75Vs5c9PqXypRSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW6HBZBRKr4h122MLKtwDSoCxac8bt7UsyGOClXbL6XTGI3eQa2lMvSaRwe8NxQb4vF4pHltBkdbOJm8%2By19M8a88fsKh7O7H5rMV6S84D1sHXhjdUASYTCSm10lQ1YA23j5%2FBm%2BgfHa%2Ff8ZnhfiqdWH4X5OqWdcic536T1yvhK8t%2BupPk8%2FiL9JK0W%2BQmV7g7GxXYuI409G78JJBWj67erdHxwpXV%2FLfOtkwtVRascpXf4ds5bO%2BcVDvwGVvUJSoPP2fIK6L03DH2g1VSX5P2ix5MRlTWkHLiHyNha7CFkJAIEkvUcjpdlbbPRxje3ujXJwDKQ2n7stV%2BUBqM6fY31xRAR3y1xa8Wo8atdEYZIcNQtKC9xGB%2BddUOUSvV%2FoClUJEmLySvtifIGJmhgngw6X4i%2FY%2FWPMFiHxtohJg%2BMy%2F3GjBP%2Bj8kT3ZsoDHn6c%2BanHgSyrxzDuuxZsZtqxt2qGxx%2Fi7ucnu9h9NXMteK1vpd3rAp1Ms3YbaF%2FfWlU75KxQFu774EB6JSsWhVolGwUg9e7wsWnBZd7vjaGsTa9iRsukzxcOsrQyGhm6OLdWDtslQC7G7%2FR3y5gnsqMUMAL12XABnKXhzDs7R0uPKguydn45YxYt8DNij%2BHsY6Lk1RR6uKOixWkV18KwwyOimwgY6pgFGgIcKumm58Dva4kW1N%2F2YBiDoSi0YRSCVBtqU2A%2FpvMwENLDNeJt1%2BH57wotDhJyWEGFUr7PKQ7x5tWbKglSxDtsgB9Qwk1YkEqyPEXog1cT6%2FF0K8nWXnUqJ%2BN1VL5Zr49P6ovAnAzAcFPcoE8bFugWpFj3aFtQTMMLFg5laPt616sSOXfxnU5NO8aiQGaMiH7JxorLPvJxk8iZdIJ23eFTNewf0&X-Amz-Signature=ca058f4c1f4b5eb8a51c791f50a004ae52455094414e4970fe1fe25f8a5576f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XQYG364%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIB%2F1Fep0f2E2S0P5MT9ryB7J93%2FIBc8V8Dw87rIm%2FfATAiAOHsk8DDwIyHud6T0Qu5wRSxj2i%2FKrXMsYe3R10W2MmSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUOcyHIfKKoY6L9CDKtwDTcCWAoXVi9%2FR8cDTtPd0JDFC4pEQq7S%2BfWJQSdvwhmD2tZZu%2FHSlt29QJZThvPIjI%2FiERyz3Th9jVwDaRYnLCo0ibIUJBnmxbpUyG5OiHv4en0w%2FCbsFu%2FqiVgigkRPJTbTUhu5ng3rpkHEMaUdmIRwQS1o6Va%2FR5j2lbhuW9Vt2lKtZyGgc5UVGerOhZICLoFhmsZMBQFiRjNtcEDmHOFEr2XBP62M125Ro%2F6RLiu%2FdPyC%2FVAbVn6IGryxg4qYtVtUb4DoFKJ3yxTEm58%2BeO9o8RVSBIbib1xBa6qweJVcIOpSz%2B0VryG98h%2FLFCszLS1AyeykmCHEPXFpsvfZSsaVRgVf%2F9OU6csRc%2BFyiUb992LEZ3lIzVjE3z05dbvgQyN2ZpeiE8qfKhaSl2%2Bm%2FNltGBtSaKd%2B%2BlecsFS3ozUakih0Z%2BL9OT4sneCsBmej8C16p5%2BH4zxIWQet1qu7S8h%2BJG9Jm4orgHLAT69K%2BuMl8MCmQVJpKTR9VeF6xNEg1FxOgAbTBB6eq%2F3arMBvtITVFZpoGajd%2BKK67y2Pq5w80naf7okk%2BnhjriOm3US6LXOeVIXjuPgMRLtonDps6sZFk21YEqicvg34dbHTZx9gHnn3tMiYDA7A3%2FYsw7OemwgY6pgFsOTWaSfkxSSVXmJl3Bm0KlNeP%2F0%2BF0iuCkvIX%2FTg%2B6WWoj4v2UGI0Fix0D%2BPplP9Qsik15Y700Y0sflT9KJBYn%2FQHxRwaNLXXnQJKb0N42mrKAErcL%2Fpi23zkC8dvbHl9j51qEWFy5GLmL3ZTvIavGnWuIWFoYbfxw0Qellc2BZwOZ2pnP%2BaksW%2B9lTKDyOLy10WnnsUYC27j8i3RWkWq%2BEHtWQWy&X-Amz-Signature=a2287dcb5acea8feb317656b79ea2f85319f0a16bf317ff0149cca736695ced7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
