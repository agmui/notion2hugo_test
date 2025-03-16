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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N7GGCW3%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDUKTDaEIlEieU%2FgzbuQpIfma4I0mXl1Ng3fNLsNcMWXgIfaawlGgT0Yr3CMjadaJw9g0gydc7Np9fGQRiMUi7GkSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMZ55Efbfj5QwFhY%2FSKtwDloZ46kndOHhfEuD9Bgzts6hc70CMO1HuOs5YTyOPBiwGNz%2F2aZgj9r4c91rDU%2BjixFpnq2igClFBbwYH7yG93XfJDU8XXfZ6In%2FZfTYF7Z2cM7zzY61FQJnBdIjDSTFtuIfidXPxWT6ds6W9jT7THvfoO24ZML2XPgoEv%2Fai8ao5hqj60bSdXWNITJTGGANwqBmFmUHdhWwwgFnPq%2FP9jKynwqA7kiILuma25xle2OVGemTuL%2BdQWRBX7S0EA9jYbtlvEIjHlghAgBsDYz75OcNQfSOQiQUFo2A11p19fyqzjCpw59FEh3SXkyOlzt4Yvr2ueFTJpf0TPQZFnRn6dZLjxvy15dYF8FI2wgmHVS1H76QCFTpAV3TkiPfVcCnltGZEXgF9sFjduTIfk5xCWVdwiXI0wHXPQD71oMNZnP8z2Kg1t4bZvgjFONeDt33KLWeA9mv%2FXURSnpRIHftd0rpsHyTeZ3rAHz74EAZAaC6Ae2pRR6Szv5ab4%2BCdjR58%2FROo5gRoR5EKVwSuLQ3xrA6%2F5EpWUbWBMTRSjWdEwW19KUnpJmh1NTy%2FqGNqPuf3IFAsqVCL0FtQTQx9es61aF00e4raqOi3mwIohXO7q7rjteV%2FHlJCQbalncAwzr3bvgY6pgGq4hgjz03MdhsBKtk0L%2BW6KWn1oimQqFi%2Bn4YVAHQh0bmJJfQybfX7hnpov9NhTQTaCNiBwxK74m79yuRO%2FQbTGIx7NWZRcjYIQ0azPYvjaXLYIWPqzy5qoV3Vj9BOzErRb2wtj8dzfR7YXmWTrKnCP4ob1bEPWGWg4F5WqE3YdP7Gew0aIbZ6CaEj%2Bu0BceI00V69JwQikQjxXhgeVB%2FtCxFeFYOt&X-Amz-Signature=d6858fec047e3b33b9db9f9d2c0055346eac6f91a78b175cd0ee71faf6bdd631&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBE4Y4J2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T150403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVgpq8x89tL08picU9wcFQwX51%2BIkTvoLP3e%2Bfp2ksoAIhAKtDZO9n0B4BTjJKSlfAcx%2BjlQes1qWqt%2BM7Y5WLAUbQKv8DCC8QABoMNjM3NDIzMTgzODA1IgxtF0MZliyY0cZOTXwq3AM7Njf7Y%2F9YXYr%2B82yRDGoYj43KkVhPKuqG984MqjXA%2FY%2ByKypL%2BGeLRpgMhlrHEdbe%2FEue%2B1bq6AkevEDylyScCMb1k4fKLclomb6SdkBnd6h12hdiczPc9SgpxjISVfmzltEKJXaSo39lNM2GMQnyNt%2B5b5NX7L6mkp7537s0b2sMFSt5nnrRQVoDMUO0Pgu%2FECrmPSXU9R71nYyQKNYUXeV%2BA34SJ%2BXpqnpcu8CZkJR%2FgDQKFimPYxIRAih%2FqUhc%2BrqAQSBMZeudZW3VUczO%2BDxfyV9KrtB8bbQ8QTH%2FPUI%2BRkoYLIjR7AbYLxKNyyQPYiJH6t4ybFzPrdZpj5nd5FCWh8nOF%2BwndiNaFFGfBj15LBcwS8dQF8rmmKyFusf2CkYcA0Q3wpby5xtfMUMmJiOMeQguHmKh6hoZIDdZlxz%2Bdlt5lT7n%2FGYDwgBakinfDTObqd2LbV9I4YEhMP9y61N%2FWzAn%2FPnkgnM1Xc9tOJhYaFHef%2Fq%2BqvwQKJbnaB6HR0XCAcLSQ65%2FHuH0L5smzMFB4CfQ6V4eYmBfMOrC3GZ9iChDm6wahFSZy7bUoJXeZJT%2F5MR9GiGoVWtCIvKLXhcXEZvduefg%2BrbUtaRpnOkB2vQPantnwVK0UjDHvdu%2BBjqkAQrH3nwa7tV31InFaDJ%2FuDPjb1ODyhwj3aY2nEMR%2BBh5wiO95AmxJjNPe8nq3K1vOmXnesFdN8g4JUbfdy8f72SbQfNsRi5YAveDPGgCXUjm1iR8z0YCaUqV7IJ9LAuN8JPEiGyeHi%2FfAVKQajoDd%2FC%2BAgLAQfg2qmrbNunfWd3JA1sd7oil1iKbuGjC0iUUj7M4h5fo7tfJFldc1vwZKFnsgHo8&X-Amz-Signature=428abcb1c291f0bc82554d350f9cedada59db79904d6044c9148930a3af43193&X-Amz-SignedHeaders=host&x-id=GetObject)

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
