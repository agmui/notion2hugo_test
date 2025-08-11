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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E4RGEKX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB5ORrUqyxJy5ufn%2FMS7XFi3TF5HXMq31UAGNkwju%2B1QIhALcZ6MN11wqMbeSqAy%2Fe48LiZLjGw7XTmQTNHc0XmXgtKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzqd3WvOp4RHjsNXMYq3APsEKROO0CgZHYBDxMG3Wdry8ultW5zHFH%2FP2szuoy001bTjdGsVH6hgyQfkl5D%2BNslu8PrXRj1jK7dVt2yw9SoGfJPHkyMKBWBP90loqhL4cWKSexiv90dIAE2cWuz6JQg9YBGPnnSKPelKFcNoA7R37O%2FnC1i4q8kENxD3ErHMc9BeTRuw8Rsst%2FypOUqepo4oU82FJ%2BepzpusRMzUcdSQcktUvB3%2F7ilKzh0Lgf68gh7dpJAkHSenAWBc%2BVaBmn3UG1wklcZlmYEqwTFpTRItYiUaVMm85Ta5R0nymGfWzmnUyjL9%2BCqJ3j90NHVYNXPT4g1YitdZ3%2BzcdjXOiE2g%2FqVg9VX6zGq45meVsnkssJDbNFMCC%2FOFDWjE9uxgPOvWCx%2BcZgZH06fqd%2B49f7%2FVY5U595TcbGQogMVoK%2F0N%2BkV7Unp3oo%2BSlkR1DJ02FogFL4mmppi2nyDTDznn0ev4i%2B6901ACXjbvz21H7HB%2Fa9ulZ5MZfPC2wNrZizt6V76%2FrOc7ELuiIf1AQjuFXAFEkvlf6YWFN5%2F%2FwWc39z%2FTCPI9LRtSmr5urw7UtdonHK6gDoE3mIC%2FW4Rtn%2Bjm7%2BOfmOQsJoFr%2FFQQedxmdmSb%2B6OoPzWYHuTHPjarjD09%2BXEBjqkAcXV7tE5OJB9KB2owtXIWtMoOSXXLHKc8rQddM8FTCftoX5VT1%2FGWNsBShGf0zur%2BjoiASm63MS%2FbusDnCctLHkVZ9tg3pDe2uaUOBm8lX0V4w6t4RdwN%2F92SZFP7N4y6anlyDtOW7WtPtcpJY2S6q%2BF%2FjakGod5%2B%2FsCo8vkU6isrZxcFvbTpYACTu2KLPF8olgl9Ev3PsRtl0%2BTVNJYshLdDxem&X-Amz-Signature=dd2213d81e7de523d5297129048e92d6c20137ac5a28a5979e831feb4ae0668f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMI4LLCA%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAysxsg7VuEFhzjhp6q0M8x5VdKxFRlM38uvLvIXZgANAiEApDo6LswPWIWjYvYf4Fwu%2BfrdneD28KAoZl3sJmVEnMgqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFPZQBcJeOExBIjDyCrcA8%2FV7vzZa3PA2UNeNItjOZyIerbKFqBw8uL%2FET4hyQKFdHK9bROCfusH6SQvIdiQmJdrThIqQEjEoaYvXsU611G8YXlT6XHkgp566fRL8eWo47n2zeKeUNR26CV01H2GEeELLtllG%2BWBcFouBmK%2FvJfYOdlZUcsLqimUG76o4xepzKOirDWmURtkWq6A3hJcUM6pAwZoLKN%2FO%2B4EjEi4XhChh%2F%2FVdc1p4%2B2Hpke2UoqP0h6qgCaIqW%2FFuFhKOEu6n7znzJiydn5xeARuApikaFxWMDoRUxdR31q0rjZsEce7dV7bF8X%2FF4pxpMw53OilrWmmu52iAKS4RlBsCIDP9wx8kXi5vclbxKqF9NkoSx5bQTImONEazuSgEOLFiozUYuutrO3S%2FWXcgHJc%2Bls0b6rA%2FIxk8rg8W17zZMxrrIkkHYnKlLoYi1LpohQSr%2FfTYYVQBt%2B1j6gR%2BkQJdwxYx38qI4VV5imxRdzpxbhZTBFKDgZkVH1MB3X7q2LIaaTr2GU6BhutjisYKLNXbM9sJl84EWPQSQMWgIU4CXBqxqrVuMnWanCpHQ%2FEDDkIDXcJR7PbKNUoiDNTVuH7BLUy3a2TJaS%2FULTJhWoIyV1HDd4oIGGXqDACK6A689umMJL45cQGOqUB6Qf9IB0KEYLGE4r%2Byvj1%2BAYJ7NTpCvNy51TPXcD5MuKDfx%2FHKj1eEbbW1RfoHgYBkVdcfJWcXp1akw%2BDxLKymTxjpZ%2FYwlvoGk1XV6Vxw71jKEjQoTMljxKxqJkixsYIPNTY%2FRiowYl0JSFq4XlU1hKhMT8R9dxOB9lg3soC10rqHCAW%2BIYWk5eW5OWZzpnrnxTn%2FCaCfSt2a2w3P%2Bet1ipP0XA%2F&X-Amz-Signature=0f2d9ad22a733f285a6dbb491bac53989dae5b7dea057f36e37ca4fe8e59e4cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
