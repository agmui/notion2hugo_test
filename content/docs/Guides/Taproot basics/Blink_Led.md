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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXNV4JLE%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ3%2FBsAVglQKgaI3ADmlRI3ZdZe2Wj7AnrVoSXnDAwZQIhAO9xFDMDeIaKzb1kcZqqo9HqlLtkfdboYf0%2Bnpd12U89Kv8DCEAQABoMNjM3NDIzMTgzODA1Igz42dVGdOZ2p11oQMYq3AMqRBtAcZoVaj5sVvI8AlXt0RMEqZNLyJYh7Nc1xRQb6QljU6e0rqziWC%2B11xrpNT3I2gQBvweMXVZRMDNYDsMTHEtkvPP7qpx2LYiaichAmforYnJnQJYrySALb3UxcxCGjohr9cVqH9dgEzcQ%2BGydNWlReCYoLiBZgcE%2F%2Fkbb71G70%2BuqlSrtuPui7Kp1yYUUCMcsQrQ72lfCeAv5NHNh8oO4%2F69nGwQgulAsOBxULB%2FPQdzH0EfEWtGHz09P42OOEhF8Ll9dS48DELazD6%2FF7LPP0ycr4lZ55SPOIHfsbkMPQnbAkDwvUdvd3%2B4WxFEIOhggYtB8cfBDK%2Fw5HdFYrkJEBqiohf811CZEmlSIqbwQy4rnvbuG%2BSASJTKoEbTV0k4jMVggUVKQVJ6xPGeWe7%2FaZ6QUdx4d1H1NbC0Dsd9QnCCl63TIR%2BKLEcKkpTMwMU6BWISqH3D8J3mclTEmFeNWFMGrGgubW2JW%2FUid%2Fn3a%2B51aV3jIeTFD3gjb5rcqf4YBvTXuy08YJl2YrdkyN8dq0BlJw3WvtsAdcKTJSY36BRdAHNRil87Bv595xoiOdQTWgz5wXNthXYUUdKhd17KDF%2Fml%2Fokxkzyks374s3cXaiHn6CSYZvQcZTDMwMi%2FBjqkAX00oVEm%2Fj32cM0G6ECB69Uk%2BL7bD1x6tukOo%2B4OgzFqsHGKQNiqFLAOssQppW3ImfwloROD7t78hfcH9FQOQJdS35fuZgwI1zpQYxVwWMLK0uAJuKoVNyjF7pHWx70h00zefz989OQftNI9PHG7UYA%2Fwob865tcab4C%2BoskKQ%2F33hlGPZ5XcY3%2Fx9IE0IUyxeBIxYAT9JGk4vGkjzlaUR6xxg1h&X-Amz-Signature=d734168c4e79b0643e43265dde24815a47722d6f65583462a6f8590c1e626085&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBISS5EO%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T080926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQpPIbdJK7zZIQr8t5hk8xu1Hll5m6mZV7xqIJGC0eFAiEAmTDvO6mQk6gfqm3Pg34jT11FUQy%2FzIiybHzz8WfLWQkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDJt%2F7IQsJz7mPpLW%2FCrcAz2NbkoPvdeTj1NDjAHKmI1HEJr2mp5pTHsirlWEmSZ%2B8rURJphP0XFu2sGnFXr93UiFZrIhBSBZBePwzQbQawPD28%2FoGwj4IjZwS4fGiApodYsBL%2FGLjBOGSV5xni2gWkaTn7kwqx20J%2F4zLnlwlJRBF21awgGLQWDilzHqkpoyfSQORVFHOdnJcYnx%2F%2FBLTb%2BnM%2F21K998HXWDScEGVYXxst2d%2Fq5vaZqHeLEGreMubcBkHv5yVOMd7AqMtv4Vl2Wc0j6F1twyTjZozgAVeskeuKb4YUDN6O%2FbMnYbZvl%2Bp3rxO4%2Fz8Ymy1kgb1vFmKyWozpBpTelaDfzmpf%2B6wwTFNQHLJHFvekF8dwY3pUw11u6c1H0F6mXyANa2ygf7oL3xiS6oxooLnq59W2c8Eddc%2FPNJ5eAXVRiJjB%2FyuDu35GLoZ0OuTSNvstlSlHONALNqu%2B%2BZ5C2qH4V9%2BJ04BOWEemL9PhltsUiW%2F%2B%2FenN3%2FMEZjuUWx75ZRQhj1XxPUl771YhcGFmrQ19LGeW%2FSqmjmJp13kuK8sVbaFe1tAt%2Bk0u%2FFRaRmKxpygKzJdMgBWdwOI5u7ab5%2B7BkB7L4R%2BrUyMX01NbogdRqn9MfUFMsvKssHfFpE8qHB3Z2HMIfAyL8GOqUBTeJYDcgis41Lbw8U7LkRkIY%2FRbJdq5cYRc1Q94uzdQ2R8x0za7M1R1h1NNpKX7VO%2FYfQBaLiP1KTJbuTyG%2F7beoUIZAyI7O%2BBVlDYuHuazMezH9LR55pqwPzuzzWtZs1PFeZrPGSwxJE5kKeWq8E1Z9VxK956ayFfDS5Nzd8BJhrXLldbpOhdlpD0xwTT8QNfF4UXfntnqQ8WH%2Bay36xgUmZ0tzF&X-Amz-Signature=88ed17abac8363fc91dc25a4a0c2771bf29d0a64718178738fcbadafac0aa0ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
