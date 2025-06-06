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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OHFNABQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHUwQO2M1I1qagiOwRuvPwPE3AUPT93K9A3KGqz2LXwwIgRhB%2FE8j0hfHxog5EMCtArkTtzIAhPHYsSscD%2BY31NcQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJUvQ72eka302nIz%2FyrcAxT26KvG3Duke4f49SMQ%2FkRmj82xhtpceh4%2FNb1QeLa6PfTnCwzjmeCtWE0Y%2B0A6hMrL2mkycNchtKTRpt6hrbPFgswKRZAO8vAgS3E5pE8UJI3cc2oE6EeK3yfUEU2O2CUcHXLcRwdAQeSXzQBZ5dT6MPr44P96eTSJnaa2OWXW0UxRCBn2pk9NHHBtiJOxQygrD9%2BH3bzLAAgtnbRRMXTadsTgZpgNVfAOY9KgBGlmEf0Srtb0hbfqAK777PDKBCAianv89LkuBVgP%2FrwHbhPjyahEp4HUrox%2F20ho8wPqVh%2FrvTyf2T68DjDVNdYSHWVtPpY1NwVEzs%2BN2HtJ06t4WGd%2FJXdXWZk7jWh8NDqAROtYD0ZF%2Bc5Eqh60%2BTcYdGWYlI0UAcgkz14hVuLgwEiVkKqzkiYYojiHcz4BdeRT4cgc7ub7VPfap5ffOwldKGKY4tMqnF77BNiJ8xv08UEc%2B0jmtoDP0D3I12mVE4Cpkh6j8DcThMNpAKHwDNAp7GGUoHOXf65eNCJNnNr5MT36ZNPwFrsPqqywZeF%2FAaUV7wknGUpEgQ02DOH5exXfgIPTzepv8J11ID8iOeXw56Ub1MgNfZGjPUrtkzCt2h6v2N9vhIISLBn2dnUSMLjwi8IGOqUBZGPw3Bx4l6fr6fSURhdkdoXEPpRjfbHeQLxSbw%2BN%2FPllOeRbT1PkJGZ0%2BTiPZ%2Fqsxj5SR%2BeSNDID0NA83xx8vIIEnuA26dvNHtKHG9VVnWbjyt4hp0ZuhfVCi3jBPvvlFq8zIvOekMDdYtAg%2FJEMIWLdV7SVtAuRTm1cMj4d9F6shnYdP8N155HDfc5WH6Xz2Sfxk%2F3slzUkGGibu9AYg6uVnI%2BQ&X-Amz-Signature=cb896024892d76a9175b79575615b153367e13629d8cfe18a75a316595ae2ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Y5VQLZ6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQEfH4clsuPKGjmy3SPSO8w0F1CTvYb%2BYQMV47QRqHvAiAnjBEk%2Fa8yNCZPKmPp%2BA8ctYwJFJ6S5dRK1kFS9os67Cr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM64fqmUKH8wb%2FQaaWKtwDQbfZF2JncAWcX3lNz4tqXZMSAnVSSMSSUwhMPx6T%2BhkoFPm8RN2OwwnVpQIfDsu4J%2B40QAJu5BG2G5ZDpHPFdbF3JHDJ8WXIBs0E3kSFuZGTDS8AZE2a9y8vyL0sP%2BcyPNonPDl8%2BYw7CZaVW2d082aWyriPkDrcjdHVM%2Bmnv3rhZeC2W%2F6oEjrq9PvKVcPqZLA5Bdz2RikgWu0rbZlKEOqzfQqBy%2Bx%2FusRsdZgMd%2Bado8S6MB6y0%2BwdO1ZYot4Tftjj4erdYFLemoQ4tmbGn6CC16DTGmw7lvOwHGaaoi%2F07BWgQa%2BR0ND8ZFEygtOdUqt1EmKPn06NdgCzCEPYI2OBDucdL30BBDHwcxhKXgAiVOHceIKpPRNTVDpb3edWxmwqEkY%2BIWctaU1eDr8UYfFVzm%2FWzo%2B4kCbm1r%2FMXdchW1RBPbT7rZgsWeR%2BEmr1SLkVyD0rJICtTQOAWiDR%2FyuHLcuwA2u3VvWA7jvXtPlsOY%2F8R3MgX%2BM2BlshN8VaWOLkDpufZwW%2BIdyI%2BfJ1XTW0z5s1MmTyjzFs4reF5J%2BPNv5lr0aFOKP9umMM08bty74mrn%2BVB6M4v674r0snvADy77A97bncXmH83L%2BA4KRjMiIYfB4nzTLREqEw2%2FCLwgY6pgEfrasVoPk8d8yG8AkM%2BIaJlKowDp1vD3k6K8rKbRJYKOvdB6PdjlBuRT2932EhFoGQprkTuG4H4NL6j2cmXnWHliVXPuoB6tBfdHjrJSn%2FG5jdvk%2FS22%2FjwdJ1eMY8YnNWki2OhhzXrf7V3ai0LCNbo%2F%2B9Z3ivR%2BU5sO8Y1PHtVthvMxMh2nfW1wDGNgmxRKyy5ltHQwKbEiV3ZoClzPh%2Fh%2BG88Sw6&X-Amz-Signature=a0b01a9e86eb02a0a4ece230c4d68a0b787c3164c3d2596b8bae5b955c0d48c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
