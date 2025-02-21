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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVCIFDF6%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY%2FSql69AziTV1Wv04NPXuraNhgYSfBjTwBacvoRo%2B3QIhANRwAwsgOw4Dw6mm3EUgbDusM6EJ%2B6OuBGF5LcSYBOsGKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FPk%2FWEW7R%2B3%2BikMkq3AOOJIktq7rjy0KxPpTTDybsdOMTl8R7MIjHafMKm8SeQAcW%2FbKjzjLfDkfVBhDVtt%2B6jKwYuPG2RzXDBYDk0QyRuDskHgQlrph%2BYNjmLZJvNculEaQ0MtP2ES0pONmrBuD1RAT7T2mFga5BUItvdO5LsE57E0dLhtQgXaoqFjx5BkGn%2F3tKQa1itEhEG8OP%2FkVNU8Fov37yUMTC3mYA%2FdQ1tuBQbu%2Ftn3WPH2uMElf7MBJIv4Ox6vbeyDwhjodg124n2JcMWzAvGbnVCiZG348TyyaCi%2FRo4NbI23sTUAhfnLOf0gNrCwVJ%2B1J7tiaQKh2%2BwrkdJMU9tw9m3W6Jn0HqmBtRjLGhUkkInnAhT5II0DgE7VSKBXxXVs5BfunXeCgPhaDcARmmMZWRbpKtV5YYNhX2phbfjUGCmWBKq4VF7Z4rb8aRC46sxZDRgDQC1w5EjIoQLfO9%2Bi1X3iN8AIziaCdCnvy9uMHm6p4K4SLpAztHmdTlFqBi2kcWiI7aQrVHvRQ4qrspwoNfFqQtVUMaZx9GjXjIQBQR5rBmVIDdsLPkve8tCXvCME5fRrH1jtPj%2F1sW6gp72FsG1VxUaY9Dwre3yhtD2Pcqbx%2BWeQ8F11h8o8pX6p9WQi4jMDDawOC9BjqkAVNHF1mtD2fB%2B8Nuvick%2Bf%2FnyTztByTGY9bsXDjxuSO4PHSO3mc1RjTAcIkP4fTvPanS7r7BNIcy9qBX4doSyzfARzqr2Hit8J%2BigvRIt9H%2Fgqy3FzlpfK4H0Gi8TLo9%2BXiwdanog9UM0O1D1UEdC1uTJUbW6Z2h3BY99FxK4u2pQUT9bKbuz46H%2FRFPjpRLsis5nIFD1ieBxc91%2FVjCC%2F6%2BuDFY&X-Amz-Signature=22f5d4061ea7596a36ca648daabfe52e03911b704b6111c9bf22c07f381ddb5f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XA7IMEM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz9UE%2FK7tiUwgsEvr231JRkCTo5QHXplGgVBexHLw2egIgU8YQ501SnATZDzdJ84JOjgm87gJxiS4uw1nRB64ps3sqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMqVXdwfIM5ih9z0CrcA7GEc7Q%2FKA6tRfXVemUKZqc1M0rqMaDhZ6xLUkphG6zdWg9bqSSJcB7yMxPdwGnqCOKMxYFeHiteaiHKl72dXGM4aRJS%2FQ7UPTrSo%2F6H0bTAFgONFghJ3sL0A4VBonXqsBhhgAGXfIe9Mz6N8vgT1%2FTahBM9j%2FI5bccYQH1oAlPhUmhBGxBSupD9Cj5veSeNl3sysFvLYYO0Urc2umtAlwlIbACs533y2LHwivtRVIj1QBZfvAQHCHh9LTSmJJJKssqHYgiLfbwKyaS4cENlTJWx0QAX0JfnzHZu66VHzWh0irVy2rJy7LPqeu2UzArpApBsM03SgrfSzIsnmCkZhrFEF%2F6Z2krwbL%2FlEgvDv7k3i3SOYOl2XxryC04hH%2FVoSFh7%2F3tKuQILcHLAF2%2BhW%2FIvBS%2ByKPhLG5F0hIqwm%2Bocv4EKq0Rfe5PpvhrSEiinM2zjoIvkY4H3p6sQzZe1YdM%2BzmthqQHX4f4TEM%2F8IZmjBb89mrcMnGhrkqZXQyNVbLDSWaJMIS%2BzHpSs9IyElQC8nF0pwSYdzyFGMn6PlGNl43Vuhqayz2qK4f8c5cLHunZmgZLIpQNCnGl3U7KJuDIozTd3Z7kCUMSxEoWDW2DzcL7uIpdVfyOwYLAJMLHB4L0GOqUBN14%2Bpxxaf9esCYG5T4qfs5iltomSVqJ4YsR1YERO9OiB5WpvYvLMVoBrf8LW3RifJMqsnldmUq%2Fkw76pOADGjwjKXnEm60PHdLEBFw1WDc7xRodtdmzXM7eqAVZ8cDLNZGW7ELhsz54zVxj%2FICRO0JDYUQNmbGVmOuc61tLJ%2F2qA8Ho6vy3ULTgL49tYDLE1OEr1eHNvCYqSuh1TUu0UUPg9bz19&X-Amz-Signature=19fad8a2b25c2e0b07f5a71f56a611741e0c88947196b8dd4696fa4030b66010&X-Amz-SignedHeaders=host&x-id=GetObject)

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
