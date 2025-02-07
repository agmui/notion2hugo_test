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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JWHARWE%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCICNIkiVdpf7mkd%2BZtdt8kv0scmgm7q77xlbOYYSdfGfVAiEA9iE0uWjiMP2kR7xttDe%2BbxxyNyx7hC9V41gqFjVScS0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDOHmOxNIrmpfNN5caCrcAzzya2GZLWuuYoGWLTXrxBH65eup8VsOJsHkjGyph4JwZrVkz9EF0ZxHRPQb8%2FwM5sYSj14YfPOEKj2XD1%2FoGHYX%2BmuKhqCKURz%2FH5Sqz51GwYIzVqX6JLrzVttL91rSdVC3MjGEh2mVJjcKfIkg2ygQrq%2BW%2F80z2xFYzaekqYE3mUpjJYXKNXr%2BW5G3aAX3XSYGALbqwMYgx4GaAlLecRQ6JluHAHLHFtpx47HtTfOydYs7rGZrzUUl51bH2%2FAKndLSLoW51aITZYez6lqsp4GgANPYBRVx8NqIdDzujVBxPqsAaHCRDocuv09%2BzYxGxZ%2BDvkAXjsEv1nmI3TRl6K9rUrPYHssU6s0%2BSiCSkq5VJgOoooBgMER4WpKHUsRHapEFFf7Wg5gkj3O2KXPW9OcYnAm3N7FuriVVG9FUOI5zfktrkzgSAf%2FLQUPdfPRG%2FEiIql1iVdvCuyLvF4FMtPJEpxFMX4NuJhMePdK1trXgu4hksi0oM2Xfwp8F6yTgCqYE4ZZ7hN%2B8poOTcmLnYN8IuONEFcF9x65rEvhb42GY3xcA4ySC5OQPWgg8a6pRG1M3mWv2ikfU%2Bv9ek5RML8IDg1GX%2FW1fJkV5g0d6CiDD1J59MlCPBfYUQaGyMPvAlr0GOqUBTnectekdE3irfGXacuj8MyDKmM%2FTojqAOhJRiEmSVrmMw7Iz%2FlK3ZXMKCckrUgw449Oe4AYgWv1yQe2KmVPJRXNlxANavuUpVjmrAqTBfpMa7QH%2BZFzkjS%2Bk9v2%2FdJXIwnC39Sohgh%2BPI4H9BjkeikGlhbKawNRCWQdSuy2%2FpoO3dFz6PyJuiQZTJW44WMhReL5Y3DEOqxmirKi%2FCSm0PMyljoL6&X-Amz-Signature=f3fc725df6680409e12d282981a116c139494c95804e0fdcf647079937450fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4PBM6NU%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQC6WIfUczi7KVF5D39iESV86Iu2ADahVu6azAcxRTAV8QIhAP0m8X%2BaBV0IGs3%2Bpwth1oiC%2FmctuacxRYyDis%2BHAXaXKv8DCG8QABoMNjM3NDIzMTgzODA1IgxJeW68QJn%2B4zwsBOAq3APwo7g9jCaKmdVTTyyAhU3U85J4F1ZjzZTmDJDTmkcpYVD4e292RTtyAiec%2BjcMQzaeeSOdfVeNHhkM50wPf06DSJ578FFwi60%2F8gll%2FDTGq8DCvNO9J3o97yWP500%2FPmReOO2ipv0aefih%2Fbh27o2HivhINMvlBQFGDizMZkiXjExlNboVw6O4Lu1P%2BbEXMOrAHktoC12A0rtHzuOR71YLTZ1p669LWi4cAlmpiFgLXffTehjSm2RtOuRFxT58bQf9tq%2Fy0CdLfNy62RgGnJ8oU6NetmSaowSfSfK493pBj%2FtnzerhI5888j1bxn2nnnHao43Blz4zk%2BlCm68z%2F0CTPSgjUNcpH17%2BfSSVE4%2FqMARyVUy4mE9vGZ2wh%2Fo5Y%2BWkSecDmwXq8iI%2F7b%2BgtuHuX9prmRG8WxdEy4tJpxDYpqK%2F%2B%2Fv11FsxI7ia12IkNw6Dw7obWcsr51CanZDXUPcuLXT5eCYjgSN9QbJ4IfGPOFtUc2pXvSbS%2FYIUZz06zzmNFVZcfPSuUbB3A8ykAfYGkFWv6aYAPFn2uDzLXCqvvxrL%2BUAjLnlDG%2B8kUzfleXTV3d3JiTpW9c8Xl6YGg09386w4egTQOAaTPqIV%2FC3NA1abtm523Bdr%2BuyF1TCEwZa9BjqkAf%2BnUaeMH3YCsOP%2FcEu6H3o4z1hJTCdloERdgIjjFMfTu7hBPtgOErimUJnr27XUk0L5b%2FtWwXameSO727eYnaIkU3%2BFaUoRl0hDe6AEEXn1eUQQoCJc3okxwmPmMnEKMBQMGXNuJfQR3IO0HgP21DvbI6cJ2FjqjLE6FOvYhGxoDjUPrJykIzJ2FL82aujYq35KDwDE4BUfKNbnokiUd70NKnzm&X-Amz-Signature=a1efc380cc683387258bb72bc8d14958b75d3b907eeaa329d84da7d1dd046aed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
