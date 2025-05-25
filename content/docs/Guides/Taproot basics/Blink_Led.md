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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4VXYL4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDRd%2FANDlon86E3MBk%2FZrwV7B3WsD2J6uhIpmpucbxy8wIgL8SBt5mSa01HJOgyO8b8GEZcSPNnhIEXuw%2BRymxVq%2Bgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFtgoo139RmUf5QZsSrcA6tfb%2FW%2FznjZUjZkS8NVdmsBJ4rqBvAabqrFH%2FZ4rZyxnjnI47TIjhwHtUMlk53hWWbUaJaDa5KVHoRU69N%2FwWB1xCQ%2BzudK5WKmfAyfzBtwfxclKiC9o6Lpv178M%2FZRTz9Za6xcDmp33SMDb%2F2vGcv76tMSQr27eExUhC%2BMPEpr2k4fqTsUeHZOvtVu1Z9UpGl9yLRJbxqcp4dMmmOl1ReIOT5AKciKdQTF9%2FTFDYadPsdcP%2BZSHq%2FdJOn0eeB%2FsQR74SX%2FcLlKl%2B8WXB35j6iVuIjWCOUW%2BTjEOvSIH5ViuGeVTMl1hFZs9h3YQV3j2XjSbeZpqnYzhV86CSVBeVN4pxEo6eFMyC8tMPJG18mMHoMs87Quz91bhqWD%2F1ftrswSX1%2BSKL8L5PkAKRE18F%2FFAns7r1SYBz7LoCIX7N9bcVFns12CkLfaX2Gu%2BGvbMeQO0q%2FGgOed71meZHtvKeR0DPNAjujsI1sCBzef5iDtoL4GnHkbMM9O1dAGreU2ry2Vk2jW%2Bw5lqFw3dRDlqZGWUvocfaTwCwEt7ikWxphZwB%2Bki3HAhF3mFX%2Bb8fq5%2BIkBTAwcSJzf%2FNfHoA7SwXf4%2BC%2BE5E7bgDWXgjbJHtpCLeuJSa7qYwrpPUt4MJjey8EGOqUBzRIwFXDF2h2ZUZIOx456lwGUVQPj4pTijy4yGrZNUhasWI8H9LyxTd9%2BMyOOGdJzYstqPl6YIO4ayhPdZ4DbRnQvWPriRjHZxdBwbm7v56UjHzWIP04W2UkCxWuAol7Sde6oxTqwex3Axjjn%2BwiDpU5okNOE8kDH9eXIwQ%2BEmqtn93JzDLCYlzJYssEXTcpThJvsVMQ54aK5cbQXoW7S2NRzEAtb&X-Amz-Signature=0df7addb285fdf7d50db776a1614680941a8e38b34c7483a27b7cdc777f98313&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5I4NCF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIGKYsoSU5uGsGtFpfsR3bIxNNDNznO6PX2%2F0HHyFYZtpAiEAkYP3d%2BYeETMhI4qX9sFl%2BA7CTpFaGtjr%2F4zN%2FjvO4gQq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLTN9G5%2BoIAHefXYPSrcA6xye9bxGxcdOOTa0FZ%2B7yOaOHN33uZlDJf3vBIDlUFhBPIEu7pLDz3kWC02Wcl08%2FZrl%2FxC9UX9KRjyY3u0T2b9EpNthkewm9dYVwhdZ5pUx1n%2FZv%2BEJ98pHrO%2Fw1cwouYDqssCOq6LXOnO%2FGuoxUkX5vMM90wrPTZiyQmBH3lK3kb7YWNz25ofrJ5QMv3OdevLY%2FBnpEzc0SG7eSnSjOEBSWNn16NBTglEiUE7WHV7GTcc0tpmUzzZb6s16iYpbUYj4jICWD8fDaiNK2L0%2FMOj%2BBFz7NTZ2CBBcNgV271X5gqp3JON3RJWXVoGcXRsb9nzI%2Fb%2BNL2d14fBFLXypCxYOKozIdAYctUgk%2FeLD8m9yc5WkBpGkkFfo1uOPal8EqddDzhZOnM0pEqVMv%2BlHyJ0Je0ZS%2F2AQi88qk9qWO30wx2r%2BCL0xmlS2If9EvQ22AFlq4%2BCmbHQCoqwq0OWchVYqa5%2B%2BcqD2rtKTPikdCt1yWQmTr1XfOoRBHirB%2BsMYoWLwUCvjDKKsczCKBz7DWnWD9uUM1KMqA%2Fdm5hDwf3eRaupNtaeuAk1ExkZQlKzTnKXh1VZ9TtQYXo6Ji9K%2BTmRy7vZLfExJYqpAI1JsXP1i7nRd7%2B144Z4Dy%2BGMKWFzMEGOqUB4XuLQXuifYx9Hx2xSUgEihjfRTXAJowoi1zHrBVb4D4i1TfXMIJvm81DkmyUiyjNm6Hmu7WGDe1yLuX6alMfYrz17AmuJYP2D3homdMUhnThGfiiBjqvYsHRbcMYYrd%2F%2F%2BNHe2LP9peyUYlI5im9OJAVsJYUUiiNtPBhMtb7AU8%2FbYVHLWWz9BpW7F1L6kQwzxdEUSYQX6EieCZqS2vWsOUs7jXD&X-Amz-Signature=b18b087ed3ef4011ce824d336d9c40b702b6a3588548ed80d1d4ea17bf4e3731&X-Amz-SignedHeaders=host&x-id=GetObject)

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
