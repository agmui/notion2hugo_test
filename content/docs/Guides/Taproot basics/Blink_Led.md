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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUZMCIRG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZX2FK45wj5wnxMgmABwP5cLCQY%2BTu9VLdmdbBnOYGnAIhALJzWeWP0vE9EpNvuTvyeK7XTFrfiiXwl0myC%2FiAjyCHKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFeXkiZyH%2FOl3lcJ8q3APtcLOS3zZIP7ucsi4EKcwy%2BXXgZcMNnSxnEHaqJR%2BrR0yiXiTFUSrW08jtmm8qM1JB0ZmpZTpUbSQ1DEZQ2cCitAjB8Nwt9fQNde71kM0%2Ft0UHngrX9GCIJP4ONjYc%2BPzRfZhSGrj8d62jIu5jg%2F%2BKt9FYq6WgT1BLW%2BjlYfSrrInHpJVP%2FDszPL7tlHoP8ZBeGSJertW2fsLxPoRgmgnEb%2BbsHaYl%2FuYZoVcD2a5FOkXoGF6gAJGtR7y66McynyhpvYzpOOYpCKjJQDsJnAPLS13CcrURVumglgR0WoI%2F0BhZhyTMfoEc6QLrBDrV4aVrTfg%2Bnqh9splshb41z09A7sg8HaT5xcwXcDX30s%2FzMo%2Boj2W2usXppzXwQLlGDP8w1R%2FZ2XrrNvNoPjGYm%2FNLKDiczsV30Bb%2FhPFztX%2B5%2FelL89hmSIAZnpa5QTg0bEhezIJ7Mz9dcjLGpsUy7zpBnRNXHOhz9okUWxcqgzrfpWu8xn%2B%2FdcjRBewpl%2BZe76qZS%2FG6oqB%2F66atX2rB1UNAdnq2JRzue%2B8oeE0BMvqGlV%2BWxzSEtlE1F5XZsVmdUyV735RVkOYAVeM5fPc0ZT4OGV5ESXiMqRSzGzrIBNITOWC89aj%2FhNLpnqIkNjCQmqzEBjqkATmRSHq0SfcVmhPfChJYjve1a0ANJSt8UQWPXHEDLTH0%2FIFGJA5V8kPTUiAa5%2FrbiM4McN%2ByZfCDBi4LcxQwQv%2FPbG3DG8EhRLVG%2FRqbHHfkEHAe23jVLtru%2BKMEHDCsZAl%2FwiNqNA1BvbG1yGJzzDfxQcQquv%2FtUJuTiDPqnk6Gc6NNmS0e2%2BfK8O20qRF3doJyPFhwVzXAVNyOxVFysa4vPe2A&X-Amz-Signature=c7cbc53bde3207218c3c641bea90ef46fa6c380466b065a61ea187a3da37f66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O452LDR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5xTyiU65xVM5GRDX2%2FrVqb8qpSdTyE0NxLYDtd7lHRAiAwwKP1hL%2FwYBmBuA0YnfHfVtEX4k%2F0ro05IrG3Tu6%2FHCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdNqQ4P1tCE0zj7kcKtwDG2tIoJFijgAIrryq6VNaM4ItmHl2kHa7N7zrF63fUysGsSG%2FlK8TSi54%2BBzqG9gCiT4Dg%2FNs8%2FPGm3czG1QSZWdniiHGCMBMsOe3L3%2BCJyGA9%2BhAxMayZuLRqSAQXbO%2FhZm1obr6OhMirVxitwjmP9y4RF8NQzR5oh9nuBZFjaMagk2lVL%2B98yywXBidUBJoWaqpIqrXQazmI3xllI6JLgQND0lAjgOmGpAbObsWbKl4Zj4Jv8%2F8aUjkZJPEgjLiRJtjEnmQCdPMphmIRMZN09QGQ74HSTDH9Nk23rO%2BViWu0gsYhk0adstDQQlp6oXE7CzR5aQlkddr23eyPn5GJAtulo6%2FHRlQ1It9ZWLJMJAXRNCi%2B7DzyGWvASwcIZhOOgqf%2BVc4JKI%2Bqk1HjjYe4WvUkhsqNO7hTQ2Z8MSj%2BAC35UGdzfFkNldIv%2FGwcr1qoe%2FiCy72NMJQWtUdq13trsYvp5osqJXr3LWYa%2FFlw0LEsC4DadDUQScx%2F1N2gRFEfIqPPLbL0xwQGfgm9LojlPdcVRcXF9U5Tz6FXoq%2FD3Zwvr1m%2FPNzr43%2Bn8AtHTTfy70AbkDNP2F8k6iZoGxmUKmR2k15DCMd1r%2BVvdMH4H%2BiyRFCYGRuWeTHrScwwZqsxAY6pgG%2FB0I4spFHmamfKq69jH2obfaVHuQqhvBmpXsH35NuUC6Vky4GFBbqr67vRCYifePpwOwsSMemp3XbIiRMUuC2eM7S9Oq6b6NkIAfYk4EAy%2F%2FvfBuTazYd1%2BPoHVUYpZM3u7admXcV9KfSl5%2FJV21xWoxiwe5xo6M2VTilCwPJ5TYWNJew7owBErOCzZMXGgvT9Yt6%2F3Elw4HP28O5Gs20QTQw7SKW&X-Amz-Signature=ed3f74c2517ca5dcdfb705b3d3d2ddc3515c69dd3ce17bac74f91013d3798edb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
