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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRW3QLSZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCof3xuYq%2BTnf%2BW%2BUqF7V%2Blz4IVl8729AznOHreNbLbgQIgMcJXBeq6JqDDu69hmPCmSdFH%2B3cjtbapOne5h7RefKMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIkC3svssMD1We00wSrcA3WERnBFjCjoYZYXBHO90Vk1Z5YFs1lCTDy1tdEAq5aEknPfYyVGxpbJGJbRHqiFjnx5Uah3EB1Ft3t33iG9AFvIcTYtDaBDcRgMw5o002Bgy4ekk5fZCIR3q8Wrbr%2BS%2BCGZOSGzd%2BJUsnJJQHJzMXz1QruBLMXhfRyv6MRzuNdNbyIEvQp46D2BxjXJiP8UNsvStORor7nkuLuSdnWyart6XjXk5jWIQpeBClR1yBjwKWHTfGZrRbTFGKkJoq2dE0gOBDW1ZvnPDcgmkD9K0pLWGDUNhf2AjYdZFAWmyzIpXOnKHvF5wbzNNhjSdF20T1ABFBBeKCG1TM%2FTjfxaIOeHsyf8oZJF8yYPXjuwnr4qHE7vvieg%2BmchuHE5R0bq6EP2Uyb8WkMf2sYwe208vMHcda6Tb59ALkfJHftw9fRSmEDcv13MYEbi5lnFDCUctNHvrMu%2F0Mp0uoaHuIlDuxW2VNPeUUM8BULypDCTMUQJr%2B8mKlGx4351Fjhex%2BJ46GyPVYMwS5dErwKBgYxVl9JrnKqycF5ortH8pdjNalFsAEBVttceOXpuQjE31fw5mabNScWUPRbISRvTfIO40X7mJcDz1sLL7iOFUzxWRJcf%2FYALYdIwf%2BOT924UMMrD6b4GOqUByGdMC8zGbpF2jMbmIHqJdx3ZR4BqO3%2B6ivRhjmWGdamaLfDEjUSAw5nN8eCRzh3HlOiDig0S%2F20Te9VDCHGsq8mG1wqgYeB5u0J1aHpRI7G5%2Bk1SPo7Zk05O8efu5YNGrMond1%2F10gsKtHIAVggYjdgQi%2FNl7255ydNRY%2FThoky%2B2uOCbd2r%2FwRR%2F0QB8NTD0eWrhM%2FKb6eYs6zj%2FFfP1eY%2F7Dyf&X-Amz-Signature=1ef3d628e9758dc9a88fbd074a16f6da9448f616133b32bba099f81199918b71&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3UX5KF%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEFx7RX5vWNUnqkR%2FYiDs06jsTKYpP1PosQPVTUIFpkOAiEAm0al25KwzAT7noEPwD4QJ5ZAbQBjayLnmmQ8tqloHwgq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIJE8e7lsRFjzxp0jyrcAyqZIMKeYB0vHAFZyIpjkklbRfUA7FQxCU9Ih7mhqLy6YtXNkJxwueUYx0dOPpXy4d7Sm8wKRb0nUa6E8bqLk0jKpV1PkoG55HjFxIBv8i%2FaZs8%2FobQxtbdphbJFtAbyiHzD%2Bu4dk4pOHRaqFgzmC2yKeZaJjAG8FRkMN9ddJny78lDjp0vkY05AvLmJoH8uhje70rSJQckccIkROzk5a9WLZHWKrCel%2B%2Bsy%2B9NOEXhpFyZy6qOltrFdhKTbNsf%2B%2BaXWep5dUq9cKmj89JDTVtEsMazYoeJQ02WC%2ButEIWnMf7vxKuQ%2F2pXvQBDC3rsH%2Fb845jHN%2BHRRaWfjX%2B8PMf2zqbfjjEbgqRqPm2Vh1Gb3D1EztWEE95LplSAS79TeKJMFa7pghV5iDHQe6W5Oof0gNWYxI9RKY%2FBSpXLAaKKgrWgSQGYrQd4eKngKhypvdGrQwYRz1pGVE60r%2BJuPxYbGiKnGVG0qKgiXp%2FvjiRbIVZZRvP7LY6Oaz%2FjLOlSwWF6Npr8dw0RXbSyBD%2B0xGU5C1MW0qJxQkZTQCHrs%2FLXdiio%2BJmer9etaofNGhx4t40HucO6RgJu%2BrjegntWFeaU3zmY7hDhxH1kYsPDod6zA7RRKt1WpGPaavR9mMNbE6b4GOqUB4rJ%2FletdrugXsTGxnJ3085g4oTLPspUVIlZz4c4o7km2F7lrsVruMJK643tQOPhFpvmTmgnu3JkaDoY1zY83mS6Ie8ZYXbxiTqkc8kgUhqlY031PWs9ECXSTF3LP17Adi%2BTNMEj9mhLkXDGjfJBr1uJDS5MG2hSV%2FCJ0Fej72v3PLqQUEw%2FFlDPFrU8bvVrk4zbzmv6HuZvAi9TQe%2FKbE9%2FUjaIT&X-Amz-Signature=7fdb43ed6f3441d431cfc8a82b4011e28ca60785bc1300dc69237f8eccc56b1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
