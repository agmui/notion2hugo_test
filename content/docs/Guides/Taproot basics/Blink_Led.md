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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q7AUWCI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjhfZtiD5EI1d9N3dRcHisoD2%2B0Sj2kuw0CQyvuz7hAwIgbaprXqd1xzndGnitMUVpyOnaVmmP6kVZ382ZYNYJpVkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGuckPhuWk%2Ff98LSircAyByvYnYFLz3%2Bmyuzhiz30SffLrSoX4QQHJS6dFynLnqLGZt0E0Wj9jzH7Ftc52ff9OBKID1DKr4n6SVbJjPG85Emj2EKxBAfQNxMIc4wn1aNuFMqgX0suQXf5xYGRpegJVO2%2BwDLJe42zCWeil1bE6XGrbgqfmvP2qvOPtTJMyedfZLlQDqhDNMKq9FvmlvELtrsk8Y27%2F0109BCxtxz9kc49BZwdIpZSs2mvpXzG58DwtVn74PwXI1TH%2BCcSJxLBPGIIB1RSh066S484b9xeJtIFKm8ogR%2B75pz3ng7%2FM6WONYyNXC8j2MqB9%2BDP9athT4lT7hpng4qK%2B7ml876yX9WXFDLnrDl1aK%2Fr1N8Ocu3EFTLWHD5jDXMmPJe3SCHOHJBx82siOFdcPw7L96dNnJYzRXq3k2Eewewo%2Fyg2GF%2BnYwSfM6LZui3PSS4GsQjpYE2ji0ljUezoykc7qDXlTeWSl0eVSpNU4kL%2BEwRHNuT8nRH9XV2Y1hHa%2Fhe8CGfU%2FcQBl1XFVE5mpl8nmL16wK3gWb0Jmu6htOrn1Nk4FUMo9VCb8dRyJ05Y4iD4vFkpZm2SZk4jzT%2ByqzLCb4UR%2FmQ9%2Bg%2FeP%2FApNq82fZXSY%2BAvCw%2FBeI1g4ypNCIMN%2FRvMMGOqUBx8eyOD6VsrBpZX8Z6ELZ5iKms1nM85iotCZOYX%2F3%2F0UDz7cMAsZOZAMyB8UbBQNppO2jUu%2BX%2F%2B6v273giPyzWZurdFau7bSrjBsXo2EdKe43bM6%2Fy8WUY5UtBg72IhM5EmEy9AMpjPkz49gZOTc2tDdIZcv6Nk%2F31EM5ndxIgjvz%2F3diBXL37LlPWerb8vOQZhtwyUssISNtXLwsi9Qu7ls1A%2Bss&X-Amz-Signature=309c8cbafdbc6fc4b9ab852b62cac87829e09f959c867b2a77369dda023e5877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWJ4VO4N%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTWaaK4nHTopjI5D7I0eCupwihRbcjPEBpfDBXTxdTdAiEA1GYFdXZhr8pcSBVKvunDsYfDab6RpYu9owdcKzypMqUqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFP0AvhHKUB8kYpGyrcA62txe17ZzI6%2FNHxaa0QES9Xsgb1UkDX64GMX1rt0ae5nDOFGqMJ8LmAMeYw8nLdejzA%2B9j2RZhSXAlQm4BGD4qS9QEq8HqMicqAHNOJRGxl0OUL8vAXBG54xZUr%2F%2FiUnBGRr8VZ2rVOa2jWefDbxBCqeX9EylvNNtgmFKZG84aTeos5bnShTaEgaIxxoigtTZv4wxTlyV2txWHMZPUswJazDK5QUbZHrBnDBjJa9qmTDoRtGFICZdz%2BEuZFXtK0mhHqswfTCXkCC4JdDr8V9zUvrQ2wEvthNvFshCuia3mmF05VWYbChW%2B1Uy4%2FzOcjXM86GBjuqBOxDWj0d6edtIF5z2rwjmt5arKNa2Gfj6Pxl5BCj%2BB583loHiG5fMxC0krD%2BwLQ0tP905f4A8q7BqNubxEd3JJxP9vKzKg0AdT1rFCCQ%2BRaWqZzwmqqWwwMMtLwgfC5XvU30LA1iOEa9GS5JbfD5l%2FPj%2Fsk9RxLycsUIkUyEMbru6ZaNFnoc26KZRJ8I7VMDt0up0PZ5M7SGadhixMLRbbYUrrVpnSYKtvn0nBpcnlEWSWb3NV0rNx5v9Hg2p5KMhGeZX8llzColXf19l3iAtTSMZ46rFv7rA%2FVQADYKYsiTzN7k3xhMKPRvMMGOqUBItooaqYD6w4e%2FSwi89wO3MM44LcDnSlMtebLJv4jTfqv7KpN00pw4H0MTSvW1KD1dzUBmBJSHCeUy5Gdj86cI9AYAaD%2FbQ5sIp4mye%2FzH9%2BcaH2KY%2BRAQqMs2g5poZjU55X68Fi22kFbWndUZ2pWbkroyPQdU5rtIZ3ASHw6SXjSlpgESLw9ccZgz7mH7zo1Oyy6TumGglh0Nq2k1VnI5oGmZVM0&X-Amz-Signature=2e0827d0e5159dd9b5248b0c17e7a68dca275c10431de5b741b0a82cc5e0371a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
