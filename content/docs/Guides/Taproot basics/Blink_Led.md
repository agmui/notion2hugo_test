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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALXFQHN%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUMxXfW9hHe1sX%2FC%2BUwmTo9Mg1Wt%2FR94HykTgfH75voAiEAjqSvrjk%2FjXluLvXEwwSjSpinMVPsWbhJs3N0CffhrzUqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnifQJzHcf%2FjH88rircA0LwEPhCppe1gztd0q0aTfY2zcVTD57YZYcOY153vN35SLZD%2BbfgDHtErdbk%2Be3ZOzXdYo3x0lh%2BEo2a%2Bq0SWZjZA3WzRibaQ47UlQabfBmKfJabjxSRYL2o1UcgCmH6ZLeInLZbfu%2FcZU9p08kGw3KhRq8pZG8zVjPg0xKxqKQlY%2B5XSuriKfarxRDn%2B3ASoIe1DBlc7ELt736E49Q2%2FUFzeDMPH09Gu1G%2FEygQNvmfLNul32YD1GbKXB%2FJTPw5%2BHUGy2GaCQWyG6UiBad76iLAAdpu3E%2B5IMXogdZudlsUVUF0NnZJq7%2BIuZrGSGz4TtXLaSbwlQKT1JP5z99wWk4cS3ZbJel5odFeTIyqs87gs03w5GvEKqhMLNWTQh%2Bvte6qN3yf%2BtB8zkY0AkWPMxNwPRgdlKwA6Ea8vekYTvcqPgFJqnm6u%2FRcR63a9ZwKJrBKHMYFBK33znyboCji16RTkf9mThVTMApohmccTvVHojmidWlK7oK3u7ATxuzNafDveYBA0WYcyVGmYykidnHofnBPKH9j5WJ5tbor4XYNaJhvECf0H8Nzcpmwb4YUbTXycNjeVpTDpu5MW5OxhDJ4OQ1uByD2LG7k%2Fcfnck7M7Xn9W8jxEDAfrhL9MPjEhL8GOqUBg5HgVpdEKJjiulP7Vk9eqlKWGDE64odTgNEYP5z0ie%2FG8W3qYSkIbkOE0Bme9VPsm2gRHqzowqjp3s2GHotSJlnh3Qf%2Fvg2729wtMio7G8rY10F1sFqAe8IIxGKXCEldwOzMeOk29J7JoJ%2FwAIqvBPy7ez14ERdpYuhLewGXDhXJ96MRhhveMBMVUL37UjTkaQ4p0pr0AeX4JCSiAHJuxmsOWZMH&X-Amz-Signature=c446d63c95f43308aa9cac0db76ddd48ac7a2b693ec55e1051588134c1e2dfb9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GBX5C5P%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdCrNYQPaOCktEIJN%2FmzYoQOu61zjZT0ZQXQ47hms%2FhwIgBIhcQ5UVbIKCxvfKav0slWJLKq2%2Fi9B%2BD3ja3rUSftYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6ongJE6xpNh6m%2F8yrcA%2BXXM%2B1uf02ru9oroxqW2x4oR3UrmZDYA%2FVpsEsH8TBPJoQrFIweL%2Bclt23FY%2FYTqNI8ZgQhBgzk%2F60mnq%2FXgrh7DF01On2yA4aNT9dNupkQxgRPS50eNQId07m36d3d8W9KUKYv06cPXvR2M5HMG81XM3aOFB5DzW4ksY5wBCNy2OZLUgoV9gtFX3FUw1OwC1FKRFg8Bp2oaAB%2BOmat16%2BczEcc4g0iQu4v0zBwGgmVoWlQuJhc9nUkf62SojRj2ov7ifF110xvC4kC1INpT68%2FpL4FGpBEI6n4QmFsCgryc0kxAspZCAvWJcwhgbdB0jWuQZr6kYmUQ3e07XiBa%2F3SMpc4TgM9yBIWFpU%2FkMRWQnn2Ge8EI1CoRl0%2BQ4Ady4X3bXCnQgxf0KydT9x1oyQ5UO0Gf1M0MQ%2Ff55bWDwzaUG%2Bkv31GcumAs4RQMgO14dLqYU0mfmwzEwqtCHaoFnJHREloPhpPkYBrGRiY0RN%2BdtEclwlWjN7O%2F1M2eI0Fw9qmHoEDFfOKG50NRS1HUiF1nTLHOwvfoFZcD5QaQoIuLGm6WrgL7In5sUr22PNRyrVSO0rlKZC0o1PtXkUwQBB0xwbupYIWWcTZyuZnc%2FCkINDKzs4XMNtFiiN6MNXFhL8GOqUBw7X2jMcDrgvVcw1DvOvEIv7eXlAgkAUjtu51GtFKV7xuCzR1bYxemXzEYTjcizBABkYeCQeadT0npc7H%2B4%2Fcqba%2BgwZdYYdgEFyNlTFyYEnFsyBhnR%2BDEXotTea1y2BY2BKldttobdrpMwVvkCYmblhlq8akraserHIhG%2FOKPBoaDdvaKhBtK4zhPCY4Fv9Wy%2BEvDGvEVbmIsE9%2BE%2FalGQYORxZA&X-Amz-Signature=d8ad19f61500c6b08b86a05241d4070b83995799d265b70039c8ce1e9a8b9777&X-Amz-SignedHeaders=host&x-id=GetObject)

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
