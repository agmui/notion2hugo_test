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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRQUHPDW%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjzz%2Fz25%2BqzJfrdbpkY3JB8exkDj9UxHRvGJDzb6Tq2AiEAre6yujBOFVuOBX7NB17XGGNnmZxCUAohLOOZKxYft90qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIu%2FAATzD635MD8KtCrcAyQq4OenEaiSjWOakiVsznQSwf%2BqwZ3DCmKmjIN096boUGkY0XYnhpkpLI%2F8i7okRYiuqjIo7iJaXPpvlFC3gOsDvV%2BpDmeRKFNQk8ssBLdrB5NzK2DqWYkb2lNc5%2BS6wQ9PebuQnaUu0PyTrB7ZA%2BIWG%2FLO7J%2BOEJ5H6p5EP5tv7NLMSCx67RlcJJQWpA592nTzc4vsFpir4UEHRm%2BBrx8p6X6wDwBN7Ph2OKkyDgNWIaGRznMbNv87YnfCTeNNmVci0AvEe5SPG9jP%2BbuvNwj5%2BVyaFc363f%2B62SxlVeskT2LzK0%2FCdDBIrhjkFsp46ne2pKkgIqCsOIO9tLxzbeY9oYRp3klF5YdMliGYea7YgRYj8mpFO0TUiZ9M%2FP7NzMRxdA8p8wiim6woQzctkbIQDmIYY5MIz2P9llyByAPnxEZZuFDsL6YvkUNQd%2Be1ms801GQ0W1jvLw97BB9EzDeJIa6r6yIacdUGZb%2FgJLgW0EfQTYwvJEAzmTvOd34yZfFPK%2BCOLYQ3AqJo%2F9KDUi8wTh5TKVVdjPyd61DKl5GLwtZyKOm71HkbhfjZmeFwG%2F0FIflMVd3xOwscT1%2BLwqB%2BRpzXBwLiThLVJcF%2BusZt%2F5llObSqHXtimgsCMIy50L4GOqUBgqX5xXLulmmSvngEXqjI9RcfWbHuEIyInX9cEKf5x3cKXQSkXitE8LokCmvhFTCLArfEr%2FYSzfeafMr6cCJyIYCIGbWANN2D%2Bud8SglkAVrc8wYarEAsQNgb9T%2B9nT0VGrW7hM%2FhjhU4iok3kEmCr%2B24mqR%2FNqcmDxTT1NIBnZw%2F9AY5ZjXwYF0%2Fh9fgtsoEQml%2B43Hrxs%2B7ZSDQd7yZfJrRX5yp&X-Amz-Signature=025f48c9ede980350b270c0863126b780c879d36cf667b725633cda8176282a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMA3XNWX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvTvSXidLtJvpH%2BkJjI2RvjW7hosYYqAhFUpD%2F4PmwqAIhAPOEL6PTeEjOV0uHn3im5PN2hM5B3CnWb89wTs7z9l25KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjeXtQ210mb0dM6%2F8q3AOnXWKx%2FvSWA%2BoAXhaZIsxZ053fDdUiAj9EuRJq1X73bTLje5%2BkIk3HS2McpiV3Umy0pAAP6weHunCSQROz5l3CIAHg3N56k3OmfkpPGnAVVd3kZINiiFMjWJyg%2BzX%2F88anCYmY7mgXQlm3RPD80AGTQmb%2Bo2VDCzxM46%2BZbgnWq1n4oDMLCgl25R0vuNm5UOtBR3xWWXUgSaq0Dlf47VzFIZGpmB0jXLT3zJSuIMe99dBocuZ%2Fr%2FLJOYx84gCI%2BuXTAVRxwh%2BH5hdVJM3FFff3vRauhUswypBJ7Ke096f8p8xFCEl8SSJbfxWJ5iNYoIPiEzWq7jxcn727EhJDlbjXigYMQwpjXVw4E7kveZQCXZelrYaxsMK1SSgml%2FmS2ZVcj8XyhVLTsCzGx8dnMqMrjjwmMrAH7hrMqNNGwBvQBw%2FDGUGL3E%2F%2FSbwm4K9WItLnCq3qLbpdYtHtNf2vn90qsI2EPsVYZ27P3HUySzxT2QVjAb9LVMsVLVPvZ3chOtIQTMz5emXOtvRy%2FC5Irg7vriFhQNUlYD23W2XDYEoh5ddM5jacXtygkoG1F%2BuuICsQFuAaB8rqOaiE0nCfvP0phKPuCzrZSGZk%2FVk6KYWbFCs0GKzxKF%2FIYE7s3DCcudC%2BBjqkASmebNOeVcm1EOnrO72Ws%2FA7qS1kE1WNVXa1srb2HSCrSpOEgnVWMtdymRi7AfDUKq8Dg5sW9yb5P3dXHL5z0Kus0JSqsygAN38NUh0sGphE7X2ZX3CxSKIZeZr6Sc0eSLhciZFDGO5DAPVBC0%2BCAN%2Beone02ZYZ141KUY5VqWcks6rwrOoBFjdXnYCiighFgiHiEJG%2B0ythGsv4Au8jWDKNJe%2FN&X-Amz-Signature=c665fde1bce622b272cd640c658157517177f752954cc7b04c56dc0bc6452182&X-Amz-SignedHeaders=host&x-id=GetObject)

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
