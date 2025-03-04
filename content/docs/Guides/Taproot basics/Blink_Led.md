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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T72GIXYE%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9BEHhW6cfUh9LVmE8scES5AKCjFtT4QOMltMZe4ZGvQIgHsuoF3zsWf2JAqCa7QutNCCuIyOjY1AYIoH4nBuH1rIqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAssFoZjdjaXFfzdayrcA94VmmJsQEWKnMVR5FUQ%2BnEs680gJWBZBqA2NZc4PJQ1PWM6O3EHOzRO3SQ0j2YITxoHNE03LcwntpyJeR7WvBsB4DnzVJSM2gSEQ5hmuyjxVW213oYZ5b44qGaKB3Pw%2BjfCerjOMo07HE0xxaMKIuornxhO4kh%2F0iVXxcXrVlgKyMy%2FnGRexZFDH8iO9U%2FD2JMuaB0D2%2FMW3GFWYihEJGcjJUxQN5UjQ4sYQuXQENPfAUrPgzA%2BEUpkF46aOHXmFFlcjN%2BspNmtspiOHK21h2D5G%2B89rkNTXVhYyPW2Jw4B13uiHDjHazGEf739Rh133%2BE6sPjkLNj0bb5xLl%2FHdxSBKXYiIadmrMRo7i%2FMmRvf%2FmK6nbjHSivKBFC5sJWLrPyd6xHQcchfS4LbAqHYBiNwM0J3hm4ybE1sIsr0Ti6PV3y0eHg5DPGKOzEhud8tskES3QKFKU9rh6YOK4nVzNKO6yFWkDxUyRsD883AFuH1hUQ7PBFT8dz58t4oYH85OHaWteGV5tTRQHM6r52duae6c%2F7PIOuZRzsSBd8GKOtXHMncDiNq5DiJ6EFr0lhAq480s00Bo0i9jP5c%2FcoyJb0ObQ99OzOtdKkjWla68bFsV%2FzJWvBt6WS7%2BuwPMLiemr4GOqUBb%2FaqJSCYaG0hb4bWIAIFssUr7Wrk1WlpBQO%2B4zhhTXkt5%2FHn03lblHTLAN2L3sJLm%2FqhasvvRm4TkGXKE2HP7h6ZdafL%2Bnnk%2FOGrVUf8PZDv%2Fm2y5DFH3E%2FB2K%2FpG4nF8JCVFdev3uYh9PO1aqOV5nZD8Oq%2F2Qdbgy2XxgzNKbt6kCG1HK%2BXhyJlxpKvqF6CpBJyHVVHYtz1otQZLSrIxDlytg4v&X-Amz-Signature=50649612048c4f48f9f066545446057310dcf47daca12810c20b79c09a9fd6f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBKUY7TY%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnFXGqplhGkVMUN0ldIioi0cJ46ewt1BRX0WDs5VQXMAiEAtJQeUT1eTxdg8YsuBqpY19QaMEV9cn95aqykU%2BKccncqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkppvHUccsMwoZm7CrcAyx2U2oEJ4pKVOuaLZLfHcBb%2FrowjARH1VsTfu%2BnKHdnxhL31Ts7fQBOwWbJJl8m94zCUgUHgrDU26h1S9fPpXajXzOqRfxqSigTKJrHuL4oOYGb0RugnTt2DviGdVqwmJEZP%2BYXUjher9dqO2X50Id6G5cEslqNPcXlVlJOVwmtYOLaujkKVyvPjucJWztC0ZSZQ%2B4%2Fw7llPCmrRo1iSKH1eMKRZL9biJ3OSPBCp6eH0aYNnEVLHKdcn3OUtXGkiAv5lSKwXg%2FI3EbkSNuC7f%2BdxKVw6E3wE6a%2B10XMBYFl9FwM65BvgOjgjLMGWBqSX8BF4DtI9B%2BrXHeUjAPF80FKTgd5leZ8FBOnO%2Bvc8vsLnNUgzR6vah0UflopnFLNi%2BXwFYZ%2BDAAXgoPks%2F3O1Bf5lYcbTHq6f5F7Yk2CtJKF7dS%2BbkYvS4tnkGZGYAjzE3kYMt8VPxQ7P%2FB0EHG8%2Fd3P9yFedC0FGg8IEy4x3AB11EHsjG7XkWALA0lmlwaau8KHs4XuAy9KMAIiLov0tMLj5UQErdEYfjvD2nimFz0CjezwaE72HhVxGyaIYQuh9oEthtKDVAIAKMf9oXtdfbxlFSpWVSVTEgOsbEumFfygxWCD3Hh2Hs%2B%2ByRjlMNSdmr4GOqUB85mztTJRWCA5ln1ZAokFO%2Fke%2FEKPrZiSEK%2F46NJ0XJHDqd3eH3jEWMnCH70kzDL4Vs0qFzeA%2Fgcx7kFnE2eZCRey9CBftwd0p5YuHoU75PirfnEjhUmNjtO1gkd2R2J0Zc3Ftg97Chdy%2BMvaChYEMF1nv%2FfmcsxOhBwj7Db4wIs6n2ukf9FTrTVnoRwGNNe1WQtADbkuUAu5AAGPiyMntdM3exA%2F&X-Amz-Signature=2abf658885c6fa9b290f84294e5abce66a09fa0c58dba7de1ea65f7c205caa16&X-Amz-SignedHeaders=host&x-id=GetObject)

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
