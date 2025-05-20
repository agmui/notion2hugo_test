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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W3HFY7E%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRjzNvvZTMn0hXQMC5a1o%2BWTY4X9rfKky23m4WakUv7gIhAJIYw4tMbdjbPFXN5eKji97nAf%2FaSge0eSECIg9emWt7KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0C487dKNad6ZxAX8q3AN%2FWor1WaktJQ6NBRJbeWeaPumdChEVB%2FqYWJ3P8PPfeybnJfokAzTPOG2rCg98sXT9pKAuT4QdRjWCPBxH40TYSSBD0EjE5Qdy7xaZNVzQOmYRoQ%2BDZESSL8ftT1Iko7XwhhEr99RehZqPCAwtK8MGlu%2FYqfdxWGBdVs2vcpvy7sWj88cy00yUpljiTvozKFKriynS1CrCQX3aCpgxPCiP2VTRM2SECc403c5GM%2F%2BdtbRl2lQO50MAFWP4OaPAmA4EUl1o53C4jU6CzKtXKZwk2aZBHGoYXoWvox3rlh1VhV9ZLAjS1Dxda8r70NOJwBm4ZzcSwrR45OspHoN%2BTPHcRhHOlA3y26ne3Hb8DE5QrAam1i4jvkaVt87M1VEaFyNBci1I%2BvS1HLO4Yd7srJvclftzpS%2FEFvwcEula181r8584HnEeKfHxclFE7PhIdwWefifE5Q%2FtdUWmOO0RzzjLZpcbfPGlJ%2Ff%2BLd1PDjKykLMGx1FDXs1KoKU%2F7qJ5jvsCebJa2sm%2Bf8OtlAozBiswJy9tbI17eU3mAfSO4HWL8cwfHkcbeTJ2nNmdqdey6TXajVyG2w%2Fd6p7MDpWtutDarbE7W%2BjJW0QH8XIcmpXzmoLQWCttMx34ZwvKcDDmxrDBBjqkAY7%2B0ot9c0PhgdW%2F5wTmLXs5NOmPUkB7dSugKEmkZtl0w2Mfi4DykJND6PNSnnhD%2Fgcb4IdG79BOLT9%2BLkYbwOyWSMJlPgITMYKk4AEGcE2x9zpQWSSaXIRGaRwv%2FMbXHsKQpnccRn%2B%2BP9YTaCXV%2BYizdq9P51zEW29kd8N5%2BGcy6nmLCJ3TS3ffmGOCnBukB3Pol5UiBtfVBKbiokUf%2B%2FkvoYoY&X-Amz-Signature=1a8ad6a823c847b0c4fcd3176dd8af22c9c76194e857fa63f4ed43903a0471e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O7GGV5N%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjKAX0jDSJb0mx1IRvk79ziopLwoG7l4jx0Z1oxKn75wIhALj9jQklN1V0%2Fwa6UzYWu%2Fv23P1C6I2PAwMEpruaxz22KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmaqbYUe0PSuTld7gq3APZ28RGfBoKLsx9C%2FeQYbfHHFlMjVgP7yk1yOyAYmesKgIzlYTz0gC6hLLJVhJrus1CNkGkD5QYh%2FMZUvrsvLAc4E8%2FOACb1rgNCytT2HEFSdnMwXqOcTQFMFDmm%2BwhnoR7By2tGklFFapsJj2YmDwLTvh%2BpXgZExBbCQ8Z33ysiX2n9RprrK8m7PsFQ6iX3q%2B6B69zXXEZsajQed%2F1ctDn648AP56409da2BeZei9Gqwj%2FSbeac4qhTQapVtLeXa8UJ%2FrSi2Qsca1pDtmsvalClYquYKlZfCbJFWsbqWG%2FbEO4PIZ4Nacn%2Fk6dvLaEUnUuAqYDtSCE5E%2FhcLHy%2BlIy3blrkjHEeO4y972U%2FMsU047iw%2F2G%2F4IWAN22v2%2BM4mK8Fbg9AkHBN4H0vCZEnQJTMF6a%2BFIMcVBrGIfeBGPFyGYtOqKoLnSuO62jag2HPJG7BosV0aTgB8FG53RTlkc7UbNycBr%2FHYMgrJSKP88DA0IZ8dwI%2Bii3qfmVTzEhOjreT%2BH6MXTORwHXJcsiL1xqz12Lz0Z4nvQ%2FFoaQ4c0e0zDc0Ys6kd3UiSYgDkKb%2BeEfkG5yYQZK0b5wLVtNibvO1HG9TzlSTa3gbn35cn9zOzpQUctaFfStN%2BdHkTC6xrDBBjqkASHFYHNJ2xhonbpG3trFeob5eBG%2BuXwq50dud9hNiV97VqSm7gxj1CaMBH%2BU3xz4myDFe%2BbSs9wmWC9r1l6Rqt9FIyZV%2F1M0%2B1vDxf5pRdYT2RP062dKXvwobn1vNBIe8Ue5rTAGT9xu0IzHWPIGj0WSVWime5F%2BWycBVdu%2Bw1ZDl0QxxzEYW8jbhcezb6S3U8nTaIYJAi2FNxncB9FN3vuPShag&X-Amz-Signature=22d504ce9cd33f128e7b68f7b2badbe90dcfc70eff682e27f06a12072a213cb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
