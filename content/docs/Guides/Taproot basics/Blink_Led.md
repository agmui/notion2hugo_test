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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6OA3PMP%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCEAwNtG0ZkAMMO5iCGOshnjuetGw9Cj9OflZ7TuoB3OwIgYhuUnwVeXbTDauEKTIPtoJiOTJhNidh5xH2oEGXrKiIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEpywrSa37PKKQGzJSrcA7qqv4PIsGmaM5Akff9Ip%2FSW8IEZ6JCu3tsBtnjbRehEAFve5MdTMShydILp3JWbVWRr68sFZuBKkujJzGZHSFgfzww5laIpFNc1S2cgKEEv0fhkpEQSbIcdlIjZRvKJd%2FhzJLgW3iG1pjTSW%2Bq1%2BYRMXdFrIPLhvUJDVjF5810wOHzv8rD0NPGr9GSvN6NX0Y8x%2BmTqVXVXgM2zgX%2FdhIWUYwHSmK6DVi69MJYQfoP%2FiV%2FXpOibDlosFFOF9%2BQXEzQ0nJ2g3iWJu%2FrRaN9mpgq6tl6xfICRGp1tSso9nb6HVjyMHwQ3XVz0JVCuZ0w6FwrFk6tQ1Bf7sGyE9NArAqfrED2GxGsaV8AZWaqz9DGi%2F3Y0R0O1CNWaF9vc49pxxXFYPE75BW8U%2B9JXLuBunPzkEZwlRXJWdOt4Qdd6P8dtIjP1KtYkXS9k1jxCWr5cnDhyD4GImvg21yb3rACmqQeWC4uiDXwXXZaVvt2wGt6IgUaub2PGuBzf8qDV1aPSeK1DA13HWqnkLjJRHjz33Vm8MXsDwEhLhli%2F%2BJ1enD8MQwcI32%2FsPcHSG7sxteX%2BAAw6mrBoI32wDaOeQ7IU41uWV%2Fozgt2PI1Oi5ReOn07zZ85hwatsuO0TdUQ%2FMMaS48MGOqUBVs8zwF9ULhi0SlUJcvFsugEpROvkFk%2B4Dhd3goceKEYqeivcSdOBz6iOMSBBqpGScRIazzDnTdDHfeqzjRk%2BsbecL4v%2By%2BpuoEZ72aje1OlgiA8ntHNAOGZAaP6QhryrLe2E2cRst9c9rNlBsGgpQhVLvuIrsp0zDzkPgA6bB1ue41Apc2TuIj20g%2Bi6YzcEvBfk2xbbe0bo5X7T4hBehVuH1AZc&X-Amz-Signature=cce049b09ed0af22ddbc7c8be7c4fa11703c66203d50d304a6e93b7bcd5239b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6VDBSYT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T101033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCICvUm%2FiEBIQihURawIb7MNc902hRGVY7QUvUbF9LpyYuAiAFDtuFrM11WSN0tBuj45VOCF0SbjKIgu4uOUmfvrb53yr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM8EGimVRcp3xdbayJKtwDEYJPwbMc72XRVk0iTwU7WJ2IPzF7xEulnHA%2F64morGLPxFQ%2BuZROPucD8IRs69At77lKJ6Wweom1R1DCNGgsjTDJCLip6%2BB%2F349Rg1LqzS9SJe8FfZhVa9gduRpjR43ajIkYa9PXvAiMu%2FvyTuVGiOau7v0Luugj%2FXvarqsy0%2Fxviepj2pkg4PM4CHTvFgzShMOYg0YO2HjdxBg5zp1dLvfqrl%2BnCmb3zwiO%2B%2BnnYDn3xU8t1xWJs7o9eI5b%2Fu8bpBdg4W91kpSRofJ%2BqZOvFYdvBG2oVKPcY0aSdI%2FhwLNu1NzpaxYssjaHRhX9fRZySlYKxAzPPNLUKcl6tWGDjw5MYiqomxI6Waoe5jdxinojH6egShj30hv3fFP1QU8pJZXdmYfddECK%2F8vmIRlWtxxph168gm7lKNuYurChD75qQYykwdLUfvikoUrdiZfqgL5i8eaScw9KnqnH%2FqAMRzuvyU79mc6Jx1D5AVYdfue4qqQprtU98CCLuRYv02p1YVYb%2Fiumfln6VgU4IAteWyWBOPYo8qBjFj2sx30IN%2Fadcq12VkbWmyJaoPuwgu0W3J9AxDULAfGd%2FHt9pb9QE06iETADJiFb3JWXQeYfE7ahgVSqgjI6knIZhPMw%2FpHjwwY6pgEFaQ%2BGT%2FZ3s7VGkc9wScN3zlk%2F94yQVTWGkdcmwX3As89cf4s2DvJEFFxhy2T0VB0Trw7h1a1JxtvXiHvsTYr1N7mklTuC5EPi1Mcp3atuCMpXpTrY95Xe%2BselKFtRw16%2FOaIk%2F2Fm2VsCN3IQr8VMQRcWevc0yQrlueq3ROzwjhNgaECLWanbMhemBbDirdC7WpwaoRl073YpzaNI4yONrH994jKX&X-Amz-Signature=974a1784477fb73fe3e811505cf8a7cc6da66d7e632e41f77c43bccdfd01f478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
