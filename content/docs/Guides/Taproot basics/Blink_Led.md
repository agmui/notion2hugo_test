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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZO3KX2B%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDuTBcukqHgQa3ixndgNezyh%2FxsCQ7aPtQBblSLpoRFFAiAJ%2B5vK8eSebbU18vdZ2d7q81n3B%2FCD%2BD%2FuPmE6PoDz3Sr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMI%2BGvEU0Fy1T2x78jKtwDwyNY2il1vNmbk5e2PCUPo%2Brvt1EkaT%2BKbDwtIvHjuhW1OPV0ikrxD5%2F2nib1KYDdHG418hbNIPHiZp5LHV4eUXS%2Bje0sEqaZoFJ4WKE%2FoNWXficzLCTFHNjAeoBsUUNOFUyplVUJNp5PhTyPXQPwynYoRj7RgLCJeNXR%2BET87IxLVAuoeecjh%2Fm93MfC%2FjVnedw0WyRjbXfbv9QPotRUPv2pQD1AeUyl4fTavdqlDeSg9bY8HY6gq5wDl%2BVyMITomq4SMKKN7r%2B5wC0YiaN0xhkYBevIpDaVGV2rvvQlwAmVXX8LolpoJmdff%2Bd8Db3V4Binb9ocUI1sjgzmGJ6JRGrBy9TBd49Zy3V%2Bo15QApOCLUcV2sLiGh6tEFR5ziCCehuRGI0ufJIdTjgxseYYBb8gYHISgv31KYY%2FUyHDY1NQyBNP1DQSJYcDl0rbaar5%2BE6wFflt0yuoru1wtEdPKq0ncoUT9zqBRA1bgG%2FTnRfAkGcdtc00GHvyZW%2Fbm%2F0tHgtk1hOV2dqvGN2PUoyswKOv%2Bu%2FagSk5hNFazBia4TfaNjcN6dZZmXHeqlLMOTKn5X4z%2FGvfUfxSs7SADeZ%2FyoA5CY34j9vjdVsXO3ULVBKe%2B46YNLggDOaurPQw9ZXIwQY6pgEHgxJBlFV7k5VMbL%2Bmri4WkqYIhL0is66Kc0%2B%2BG1QdehF9pYJ8QNNz4%2FE5SJNVeQgOGt4TcchjYJAsRtcmmYDZZJ41vYWt3h350tuKpJTPRX6jgCV1dxpU8Bkg85KAIUSExiZmRzMclpo9jXYt9DM24oXIokkK3bjche9aR8rIJSgyx%2BgjQl7PP2Thug8u%2F5rPdzhrg296IA1Ioi4ZMO9tFYTxUf3n&X-Amz-Signature=63122c9a321b67b2d17cfcc7912611f6cc95b7fdc7d9ff7dd31ec04d4d86ccd0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASD5U2B%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIGk4sP5e0PA%2B79ajN7eK3cdt%2Bb8HYR9lzbE5bL2GGa1pAiBai1Ma9BkLcvL6dndsQT710P%2B4pdT1gb7d3YDYMEJalyr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMH%2Fv0xA9d7pn7Pho6KtwDg4%2BR47fOKkxJXId%2BAJzvcdQuyAfG3Jg0a%2FSmDFQeApokT%2B2BWNQFd3XC0%2Fe%2FWcLI1ZqIsyYBPBIHw785Ev%2F3xu9xtLkvOVYho3DDTjwLA3xMfu6rY1o3TU7TrKEtZl63qtMPxhVdX%2B%2F%2Fjd%2FK7zreY6jbwK8%2FmKo%2FrgzKWVHcuikNnqmn%2BssLw4NeMS7zBUSdr%2FDHfgvelxN1hb2iE%2FEVWQYl8x2CYMhe5KPNcyLkpuLOu7wC5Arf2%2FYhuP5Snwsaq3knBiCD6GcKaSB6lJPxgSZ2txvifIm4s5jBxc9ZntIsL9saEYSGYoWbHltxqLLnz2VLPtjNw67bySNyc6bBgbcel6z4w4jPThwejFT8wh7ZumpFdaNcFg74tjNiKe8BbmVjT8RRQAI1Hb8KwHBij4qc2Bl%2BNod4KzQ%2BFkJrTKmtYEkSlsGQNmJpDxSW5PvhfbCwyLwmbBY16to3xAkF5nkYN9AM2MPEDrmDeEp0H4ZBiRjHkU5PrbXEJqL3yj1AL9H%2FKwd30FmwgwPllu9ONq2wDfT53r133I%2FeANkQg6NveCkxjJW3cRkppnS64HBxbmmP%2BRXYtUIf%2Fxba%2Bw7WL8DImxt22%2Bfbcfoou2QnLLfj2gufNyOvOfCbIbYw%2F5XIwQY6pgEnT%2Fp7Uk4cEv63vG2oUNfpitzBLEV%2BE6DXALtEG8AdNMmD5Qehz9Za%2F5FVjksZFVJhgYc3dDYDfroN5BKMTZevm%2FCL9QYR4%2B%2BNkxRAb%2B3Q16PWNsiqf7Comjl35Sbt35xU8HSVpp0U79mgKajvvJR8ZaafVf%2FmyZtGA%2F9fT8z7KuoqD6nr8gUF0I1AN4HhZXqWH3pHRi516GcYArXB1sMn6gd3TlXT&X-Amz-Signature=a2c851b698395088d326d5c8143f61c60ef3633f2da23ee2f988c967bb256bba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
