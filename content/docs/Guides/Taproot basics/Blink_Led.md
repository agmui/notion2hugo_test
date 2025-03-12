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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSA4NKBX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDyjoMbFmboz5z2ef54Ym9oNYrF%2BFdZGY0Cq6JrXX%2F62gIhANdotRpgwxvzzurDv54Tkb8wQ7IU2Fh9GM6QrZCW3J7CKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGLDTuoSgHFLdM9Tsq3AOgv4PG3MxrVUt%2F9draU3dviHXYAoldwgrvO17e7zktAWZ7sXdgdsBU4tGO5QHcbovZdRWc6RJ4QOgiHRfLr6IW6vMwo6R%2FD1ydTCic18CaRx9%2BrDPc2ZEL5S%2BCH18PN1MDI%2BGYIODzr%2BffQ1ferpy3wwCsFbgluhDfNo5PXRpXnVB%2FyzH0ttd%2BU%2BmM1DlFTMlVsTrUYl7rAnUCYw%2Boy%2BM5XgVqbnOhlvOmJK5fm%2F5nTNNpCCs2qW9qwBdvgmZXGKtU3wU1%2Fh62TIaSxgno911I4RHsCBsllCQdpCbEA6F1KUmWKfDsdXTSsz4pKjM3DM6du3lqQnoNBCbic0mlW71R33w%2FOEwfEjSwjPCrS3CuFOh9p5ebIqw%2B9ZtS9RaxWVlTEmM%2BXXCmJAW%2BHh%2BDOG94rqvx9RYrWnTkINMEC%2BVmmJh3060l1HwuV0o6PIsVUrDKITKAsR%2BVIDP4SUUubBHlZeDwzChrs7IXGWYDhhjYBVE%2Bgk%2F3vbK1FqQ%2FBGzGIN2zKJFVhKJaEqPto0aJ3HiRMBcrTw%2FnC%2Fl8BOJL3kh8IopFliKVGW7Hfo6ecPfVbp6HdaAGL5X5GKNl2XSO1N7Lzs1X6pa0J%2Bbi4sgko1usupUp7MD0C4U1InzO%2FDCD2sO%2BBjqkAbHKuujNPvVSFBR0ETVr%2BKuMz04ZRB6zZgICnHRVqd%2BApPIsdBwlVbV%2BedTBUQhMDlX%2FCmQ%2FXnZCwYTy2F0p4ZNqF5l6cXNZmdBcAyNY6woWe5gL9GDPUbKu%2BuvvtUA2O%2FIzQAIs9xaFDCklYlVkqZuehHnoXlfWvqG3ifVKz5E9qpZuixRkn0gXdUNd5kx3cjbfUMg0nXJROdp%2BSa%2FCMcisoJ37&X-Amz-Signature=a5dc96c594e486bc7f2a544a87361c3d44f194b639d81fd7ff0e9fc5eecea688&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYOW5D35%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T031834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAPaV9qslhx17bvjXcKJu%2Bmpji7VbIcb9rgTVds%2FS88xAiEAzt0NdmATaHPtkE4u7JfK7Iow%2BS0PJtRALCckP947N2gqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhR0%2BcydjZnZerv8SrcA08j62p0aK5EM6%2FE0LlYBmym%2FQjwC9PGrnkPB1gU9b07R%2B%2BYU%2FPW%2BmJjvU%2FA633CJNsKHA6ndMRFOo5X6y1IRUE2xQaz1VQ2Ea9C8eCyDmGWU41HfZ2e6QJt03ttu%2Br8URzbf7diwtzzpZtW%2Fq3xA0lOdGOKhYW0hAxltsfr6xMTdx4cqV3zrCZuz9ddmuLuDeyWHZjeKBRvgtNFIuQFWf4P%2FI9ziNTTSlufwMB9ghZ0k5RmfU9%2FrKM9V8q16IWg%2BqV3I7hYmTnApGa5MczTGP74CH5qaSZPaCYy8vvK9%2FhE2Sd40DQEiR12TroCK5LKZDS%2BkaI86YPJNRd%2BMzYlyw4MmuWNWHJsdqT1eXGW%2FtELAO5B%2FJ9XzJ8fnMUPQGxT7gqBABGBur5yFcYs4QpAeL3ZZD39LfYnD%2BMDWrOfSx%2BrvA2Wx2oen%2Bf7uf%2FsoRpUJ9UjKAzDwuDKsxuUmVUCXCsLV4RruaPSB%2BhdFSUGiHfQnoT2MfXjVV36Yf63hUTA7ukz%2F8XHwLGboj9G4OTyf5d8SvuhhWN%2FbUmk%2Fw%2F0mCg6YWshpaFnRoeIS8RZdJPigUJWeTMm15EOHPvVfSzmmxdmJkXyuAivbppSOVSJgqV6dps0AnEQaAiIwSLOMPLaw74GOqUBKThizQ%2FBs1ZAFM1JnJtH88cp4YiV%2FBgrVrUxxLM0it2%2BNzm6ab7ylRiGzxKvFBUmU1qtGZ8MQxE5pRciiE72EXfTkh%2BKqURFS2CZBK%2FIrsKWbYyVr8UeeUecJyJfsD1gVZVGtZGNueojK3bCo9NHh9cUmf7InhATzhTKC6F60HvIyGZ4dD%2BSasLhtLLoRyYHBJtcHHox6%2BEaLg4BaGSpdgYkISAp&X-Amz-Signature=42f593e38d1b373679e2020e16adc4c792ed27cd5dd0815f74f898f484a71044&X-Amz-SignedHeaders=host&x-id=GetObject)

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
