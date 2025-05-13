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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3NUV4RO%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIF9kScc3AXlL9VpgY3yVQseoDcKiPHfGX047xVsqswr4AiBEre5WSMk8pMV7sgmthmWRONy3K2wJmlX9Tvm2F8aWHSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJJ9AoD0DncbJSQfkKtwDfOL7lTcMivUAgsm8wk2Op2PlkIkbCP7Zp5pXm%2F9UkIOPbZff0cw%2F6T6Xh8JV4qORPM9ARQJ5d5Jhmpk%2FNr4Gw4DlXOgzc6bSwTvDEnyiginYXMf7UiRgMNgzbmTqF25kGvZJWcZEE0shBK07D%2Bq48079v%2BE3aR8G3SNy2orw30jUBv3kG3bM742XD7aGM49cN8HkbWTIjeEjzeTu1lChUY1ETkY7g2iFly2dEIYbH4ulfaCDnuZWtu4xeJbs0WGj3Qe%2FUXtX7rBAmDoRj%2FtP6psMtsoNdFw%2FLxkS%2BaWOSRbDzFc5xoL0w5PKPKiqmZK7X%2FXUPXV2BZ7rx%2Fa8mqt6kWpPm49Fqda7xdLwzo4h6gQIQn7wgz8vgDFRuPHzqEUWORUdtt1pBU1HTnGgcvd4VEq0LZ9SVabnZ3ICQamdQftBjAb9dv1Mi8W5CjPYqsIMVA9KQWPq36KV6jJNZN5qB3r%2BAyigUzg3FbL%2FESNEj1N3C4Hht1tOgQ8W%2FhWJRiiNNVJ6Q%2BcHNRfz9q28xY2efsFXiKWpWU4NuKcI0CMlRiBJ7BxAyEaGjF1qIh3Uep%2FH88wUeZRKwMUQxPD3JhVejGx9U2DmVMCr32zYo%2BsNoJMmKHjCr3vpHSHxjmcwwMaOwQY6pgHZ%2FsUlscS%2FlagH4b31ezq%2FLsCEMAjNLWTBL6ltgTSWF4QfM12NYC9p720uxGlHYPS25Afg3rlKznILs90tS8Wq6k%2FBTAQbz29zPfv9c%2BTShoxPb3lo1yUdB2O%2BSH3ARFPUC0%2FdjATtO4S5IJwFVLLkNNUpxDDTima%2BVAedzEr8HWQgcKjRTP%2Fpev%2BeTEaq58EqeqxtQfEi6PrqVSdMJtTHi9xtdFF9&X-Amz-Signature=f075e0e74eaa4fb7715ce38a3a068db5a305de77bb7e2ea854d13d87041352f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XNL4GCW%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDY240iBoD9F3I4iZdf1taPWLIyvEuYzxkYB%2FeVMDPImwIgQoaOoxfvnzjztbnxjsgOQ8sQuLsfkK9UPhlog0SQsd8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk3WCo53Y4hmrnLHSrcA5Jz8eZAOy2msTKWo5KMGxpBlLwE4sowVCxFRFkYCtvYh6KZW%2B3WmBePUSKtT3tpoQBbTWZxkxgWigWzyz3%2FYZObkxXjiNfzfi1TqDrujxDQA%2BfBEIzpP6aD4xPMSqkkiJ%2B6ETgWLSUEsHD%2BpEUPq6upye2oOqD9NTMqkaLrxIlMweoQjz6%2BFs5qaOD1BEQEaLi470zEUfmcqsNFwZskvZEJLH6HDRuHlpJOUOyj0GnVWY8HqXRYHLuibsDIyj7xb%2FHpFEcFS5nSPJ3TO%2B0%2BZmTOSi2I6a88IWulGUzLrWGNJ%2BUPnNiSbFyCGU8WiCw1SshRxdusYSdyNf9PtZfAPET4nxVe%2BqVQgL3H%2FTkfLN4wKimwKMGnvo6oc4XkuXe1uTOvMWzd8DUIFJJbwcZ%2F4SnINY%2B4d7UQGZyftIuWwDpeyhiTblRzg1mVF9g2RuhASiqqTJAmp0y7xmx8aq6TH60ac1N6dmzUhXGuRt9tjOYINAyv6ayYFiWhkF57sULnFOln%2BxshiDi9zku6jOAa2Rz%2BLluxWO4dylnc1mlFS1OjJU6KNCQI6SFyN6YueRyyZQfjFhXv3dtW8yXR6byl3n8mX1kg%2B0vDLtHw4WRQhXzZDHqyikDG3Kh6pZDrMInGjsEGOqUBOfrIcxoueF7T0akPVhRFX4kqXc4Mm8hgtexsIBpWuQcAQUSbJkY9buUrU96NT9PWFYP%2BH4B1mI8G02C6%2F2lX43O%2B0KHXwB3VQ%2BFUkL27A09%2FClSstSCMX9QO3bvEpFMVa3Bkm99AAIZvGTotZyZiZ9lsvJGiyDbpR47uM%2Fqy8G9OYN4NFHF3Ah%2BsPTmGlmx8X1W71arfXjT4fNY6Ndh7bCxaB1y0&X-Amz-Signature=fc48b6f113c0a79ba3e1c0f98cb4e12bbbead7cdd5eec9c0ac04c227a39478f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
