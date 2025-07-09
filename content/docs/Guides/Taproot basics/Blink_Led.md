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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UBMBUIM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgvAr4Uhiiqj7f8Qz2yafTAde%2BTPiK6WFZVIx7Ey1U7AiAtOzrt3Fi2S8hpryCBsRkCnsGOv2QGsMOcaYBBLvJ2QCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUIBQr37l4ub6g6h9KtwDy8hS8ktrFDRkq02h7ZBJ4j8D59Na36UqXZ1dk4ABO2t%2FgXpvhXa48TFdwcegSQy7i%2B5dfez%2B0e%2FfnwcS7mybzRjVGuOarvCRTGx1ujthiVAozqJ77JHhlxfQKMHMSXwwjAX3bgt2dVRxdmBfAhX0GTV1O%2FO%2BUt3yga7CSgXUogr2cbKKei08Ffl7nL23Ssce8Z%2BRBYOUUylLY427wQNxpDptoT2FsqrqhDCAWiWWvSbljtu3%2Fm24%2FbKIKvyZp2eVDg0HLLqCJPS1yhyLz9P6PndyDZ7kp1lTyZMxWfYmm%2FTshzFZ55I0eiHWyrd0vRW6a60dfywhX1yWV6I5NY8E6sKbIi%2F5ME89rhY22nd3Iy4HAd0aid4B4xwkVs6j3tMV8dXc%2BqRGFULIuqVgU5UzoucBXQugrNrpeu2MV8nxswaD7j5GH02t0d3oIJWTAEffOCUDuXUjmmKs0DdFGmIwvvcWe7TPYDc1DD6LxQofWocaORidJddJ2zmntK1PesDTrSf%2FscAaBUdWK4ZqJu%2FSx5XS02qQ12b2%2F%2BbVA9nW6BizzNrfVY6eR0p6oQy7Bb7PcZkn5rQhuPhOnuU6%2FkU0yRFVOaQvz4ZmNMVf8CvBE4xPNaPRPdp7gofwzrUw0%2B%2B6wwY6pgEbaRGvQOaMJ3JaHWZXvQsjW%2BvgQCHvyl%2FTv54l8esF0qcm%2F8UJHrXedIJ1Xt11yNBmcAX4Cc1KdzDjHENTd0df1ve7CinKcDjFzDLIxQ1khjyqQL2Al7rijbQxlRKSHkMNa15ik9A8oiy1byPGFSQpBrFhJJRJtdxLN%2FJQD9XU%2FAKPNQ%2FBfkCLzpOxamEJNope%2FVjGOL0YdKQlCr0Wd9YXdtmRcrso&X-Amz-Signature=aca9efc27ee6d74f72adfb6f123096a0ca3309af1f1a3426f84db162bb36afdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QECCPTMW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7CjuZrCodcNezSq7nrexib5q9tb70XqBDrCuvqwrUvQIhAIYWs2kp8tAXiPqkP5x1VkF26z1%2BTx5QDJtsIyAYTIH8KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeQCMpCbP2FASSGxUq3APlO9%2Bzz6xZC9vY7k83nQTJAbixeJFM9giuajkKzMvbPvwwOSrmIMPG5a2aMpn%2Fm8tvcOnEUu0DlzICYg%2B1KlfrSkbsAdyc7xzwz3azNdq1Gn9ayLD%2F0AcEERcTiC8JvTI8Zn72AbbPb8boOc2JZreYZbzp5oM7f7VC%2BpdO3m8QTLjLhQ1mxKHib2SfLc40J%2Bq%2BPTFDNbwaNCMTaqFvjxVwadiESowFmOe0bo9sRrTwbKlTxfB7IjZN4Hv7EGR9o8RJYexJLiNkQBAAhaBvGx%2F9EFvkY4HUAgXzW2OWNkbzVKnTC%2F9Uwj1hGKhIP3DCWYLqKHhLwb4eJeFYL8PtOM5iSFUSAJtHEP6Xeeujq6LkBjroMI4DxSo8k%2BUL6WNdPsFc8o7Bzg%2FcWxforhocoV9TgKdM%2Fvet9YDcHMkBgSEcbkNFWEnMIyFincGUMIMaqcjoYY45zCMpjEY7zyALu5SMP8BFMZ0YZSD1e37zkY1AW9d%2BcNsgJd4kI7HbKcg97pE0CDTyEEjNjP0qYoIzpz6hpAc2WvBWr9gTbDrcuLTS4t1bMDb4NHFBbU3%2Fj0Q8iV%2FTBPb5A8kNA5JRby1gPnT1%2F%2BsRbeAu2gJxSTW5YVe0rty8w%2BByG5Ziu2i3RDDE77rDBjqkAflZ5nT48HfxwFCgQIffRn02Mmsv95IY1K2XIDTbE8pICQSpCdstgv6TNCSjNL7UdmGzfLaU%2B4onnwF4mXBoeeuK2S6ti4a6ERX%2F4J5BWBjzu6vBsm91w4YaZ7mA19jm9bGu2KsXQmVP4u7r6riPb%2F8pjmvzzWFAtZFsfzMVR2XCqkKJTEiwgdCg5tguQ7aSjekeOJ1pDlVqsRiBSoI70psuPlW5&X-Amz-Signature=b5925be4eec55d1e92f949845b9de08fcecdcc53d3a41edbe4f0537d91f93d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
