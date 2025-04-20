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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPTKPKE%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCLn9PHpu%2FkIer6bQU8JZpNnbMltmPjkYH6MhS3ef%2B1EgIhAL2t1tMB%2FvG8ObmL9qxHqhZDvQHynUaLlwNTm5I%2FoyLsKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7sXKplNWCweA1%2B8cq3AN1ir%2B5iluoWI7LZyiHBE4rPeRupzbhqecbD6eoiR%2BdFiQ8zwDCnxDeQuKADVWa3%2B8%2BbhZejS9ZHpJcSJTW6NSZWrS8drqAm%2FeW9nI%2F7CZCZLXiQKkKrKzMVzgiCg8CuYU37HAFLrmWPJVCJPFw%2B88xyBNiuXvswROnLEk0Yks4fDyJlXAaCYz%2FYYJEJhtZKbKCnic62hkpSz%2BjVNxs65QOo6ysA58LSpY9hiK6o181%2FHYQ3dKLeMJC3Dpb%2B%2BzhIjDLC7wSxif2xnB%2BUxmIJ6t7eW3vMpaL5dGR4piUZpXrxeBv734TLQlAEHnF1CsRqjyTZmRlKFM9yEj4IJP06ozEcPXloaY2gfChzhCNo1f420AoSQle022vgsNEWsTN8MLCLDb%2FfczTYaA23rB1SRYbTJY%2F6tpBpICj7ASiPb4gftIk2PFet3%2Bt3e8wD8lzEsbSZw3MtVJFkI8nraTOmOvMlB7oQtTOAXQWdwmSdXMHCtwRqg8QNq%2FWioVnfO5zvGnNOGFIQ2ZC0o5uvyvAuywyoQvxUJMjd8ID50y5jiLpWZqiNoYdsj2oHOIUfpXKabvjvrvNvhaeUE4JuFtPQ8df8XpSR3AZkEkaPP99%2F1S6oS%2Fv19wmH%2BM3uMzcejCEgpHABjqkAfX7tM0s1ijA7K4T9B0qrlkJIyv6sOJCQdZHWItGiEgz9UfTF9W2aVWxLU3LdwIH4ROc5JcEX2qZv7GTw31F4X53xD3osRvi7DJ7lx9SNc8mJWkyQK1SsbJsNpstIreMGqBqBJPBIvVJrWX%2BqVgQM6LdJnjAHLx4KKOX2EU%2Fh6KXiSShkz5Ffouz37Uz11DwiXhgOmLj1z1jYdf8SoB50o38aSvX&X-Amz-Signature=eef1259367413d0e7cd3da5701a742e40108b033704cf18f5d5ac9b915785f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ADBVPF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGCu%2Br5omn9mJDnmdkErevxRFv%2BlfOmNQBfZkXAJehBzAiEA35HASlQ2r7ZrF7qlM0TKJZOLnkXhrZv57j536vNFAYgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAn1sGO3qndYhTd%2FHSrcA1GoK1b9rUQMe0eB80BrVB1oS%2BtX7pXDPGLo0bIT%2B%2BdPAu7pofCHBOurnA%2BLo6To1BMETgRHHkzG21zYlrpKtwV5J4fLfdKkIhD50o5bA67iZdmWvy9S2Fz%2B%2FZCaYxoThVsh9dRA%2Bqo8Xga1IU4G1xKdx2uKlO5HkrA1m3M2m9QOUZBGF8nEnUEln%2Fzw%2FoZK165v%2FEsxk5g0po7MKgslSlBoxo2Fogl3JSfljjMkzsw2WNhdweUtFO6ImTUtzPyaJ6OrIxf43wxd5xOUfuWtovc4BALc3Vnc7NecGDUjPFZLMVMROcR0JSqs4NqkgiO4x7QcBdNN%2F2LtzAOxs782dZieTpfrCdGwdy%2FaExttxkpOTxUC64%2FdqpK48fgx9Xvnhv49Ge85OdWCwcjjRWO30B0DWXg2SJMtU0aSWCV%2BQ44mABeVHldm8nyJxhZE8l9uFM9cJeItDWszewBbbOKdlw1sNNQ931p2ZJnCyGgcm%2F5PdP5n0NtuqaJoy6vtaTP06hySBb4AO6bysQptTVrh%2BfjLb54y0TeykLQnA9cAy7szEPlh1C7znOVQg%2FMNFRfJrLBF6mD2FRyLlhHDHS%2BqyldEdtZtdqjQrpqYX5qOWP3C9G41FsOb9mg7OopzMOSBkcAGOqUB5VI7yYFqdrqKwHQpkrRtUKyWPMWMJb5DV5USF9ECxl0C4ADFFPf8GziOjPW9XKDTqujJ7LbQ3i%2F7U9pi2aRCMXt2Sb%2FGjmGP%2BSJJxc6WQ0f%2BD7IKvbuob0M8B3DsWktazjipqXMwrdo2OG%2Be8dFcXefEL1UT3Lc0GHH8ECKGdW21Yu4%2BhPs24icV9ilW0Uv8T%2FeE%2FUYyYI79p1ltc504Wu%2FMLMR2&X-Amz-Signature=b977631bb7e6ff3c67ebb5fe76eca36fb6f77f14e176f724a363ee88fc2ded0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
