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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ES2WOEX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGr3ENId2FGvBfSUTsZORRm6hRsthOkIDSJC%2BL74Bd0AiEAhxUnr%2FUHLoYIKneGYMIOBv9xKlzURS4IPCPdXAiiLz4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFiCSWh7xoOseV6OsircA3DoRgPSw2YrxofSwdbnL351%2Bj5J91foME%2BJDee0fJ0rWQabi18HI%2Bz%2FP5dvLBhFxqCLe%2Br34J2TkVmsU5r0Sp51aqsLJYRyFQ7GwXTxprfFLJPCF57y%2BWhV3PWRpt8OcBqpLWCS4ZzATi1%2BPHCfH9PRPxF1YKakM%2FS3RNhtjAJNlSVcYeo35WgdeeOy%2F2Sh7d3DIywwDflZvaPlIJpR0X83JextYY%2BYKgp0sIiuiu7PZIM47KI2F7QG2JvRDwbtTv8PqlHieC%2Bq6A4CHlAIW7aVDC5aY7TfXk4%2B5vG4Rwx52J3eFjzlLV5xUkojhpdEAKW%2F1wYNdC5T0xh6CiLkqE9TCw9iv2coozxNTfPxh%2BkYrxyE96D1o9tt%2FHYg%2B3JwFZgKS%2BNW5%2FI8pRwFaecj1%2BPVvnXTOOERXAupyBhuHEsRFfIjchS5F8o6AUxIdOheGLgen%2BjB5wbSmwB%2BGRQULtFE18yzrsQ8Nm3HQ1xfiIZhUZ40z4Xs3fgnxfJwYIIvdXHkEwA3zHQhi1EXPG%2BFgAyGC0SJJECXccaKHH2RcAdJnRvcOoxYr77eJMd4khrAUlKM88l2ny09Vp%2BaVoxJOD0De730HyHsjjrePZ2kmfV96oPG0%2Bj2nMaHF74%2BMM%2Bg88QGOqUB9LGOahv0Ao1dyQZdYmH5mKNqhmK9bbM0ap%2F1Zuu1xzubunhucBn7WV9I3ociMujtWknf8OYkxV7eeI%2FO9HKqeJ6z2TnycavY0SMzEnpyV4x9ijkmaUiudFHAyr4hkaaA8JtxId7ByxkaB1YKGm7w9N5CFZoSb8vOBbR7dLZNYqveCb6%2BdYUiKIfjBrsyIwPf1XJxuBjN%2Bv7AfIKmPGHfYmTj%2FLpb&X-Amz-Signature=02816c4626aab866fd255bab571dbdb3384bc1c50ad8f429e444d6d9e002d485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4TTKMNG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqKCNrPEWXGI8FGbm2PbRITggLVu0WtkXLA0XJLazTagIhAOD68U2e%2BSUBmGPjyG205E8x2JUuYnjqYCL0O7SFmDvtKv8DCDMQABoMNjM3NDIzMTgzODA1IgyVJzJ2KKOyRX0C0kQq3AOmn0zQdxKRGUZdxQR8KSHhbRve5dtoEAZUisy8WroH3y%2FbkM1Q84TXL7rJvVa%2BNq%2B%2B1UCkfHe%2FUEVVc%2BqVoTutve6HdxqfokaCYBA8keGsVmUSfbE1JtHnhPrNXfM9en0XUjc%2F0qPQnxZM%2FpUxkff%2Fo5BDe5pJXZgRlMZf%2FE6aiecYA38lhkvI9vHKEZ3DOs3UYQ0dphdx9tOsWoC4ig2EeX2SLiSoYHsQQeDJUwlQouz5p%2FaZNGxsVOsa4pOj1A%2BIuiTRxHC0lQdWNz0XFzVJzgwfJezF8Ae0jjwVnTkg1Fcw5%2FzZwNBQBr3xlS2fWchZVl%2Bvfep%2Bbx46F2V4OpzXoucZ%2BYi9zOQQGxzm0nPnwTvON5sgcCqiajEvhTIuznYpg27djlgiuydUUHV5mOAhageV3%2BHZxT2SSyEaZTO67VAczdCJiw0%2FzrvUEEvK9YbJUEaDrOdkjx5b4wiF53Zlg3vYtuqQEVm7WUw6nhOBi%2FokkemDaD2IFC6GEfXznjTLNGSVEXeZfnMmIr4%2F19V6BEZaDmRm8JFsDzvxPjNcNIQNq3gXJRI3MmNZY6UHeIhlZHT6%2BCmQwkrBV39klAfM4TmsXnz70vajNy2Jjd3o0fq1pUbSceumHV40%2BTCpoPPEBjqkAUkLTD%2BMfrSSCXxz9jq%2BZw22yH2A9nyguFmGxDt90ulSqYxjGMfNHMSuGKHvuI5q7tx7URkLWgPoy0rd5Q0YEeAtHCM3zSv7ZG5DqUy73tV8rHA7WaPxJHAiw%2FrtxGKhQApKMwrFuiGjfaWD7oewb2bMgMyeL2S0yRxUuTTMtiNz7rEw22cZFBC9HbHy2IanIS4fdYXSYHlpjllm0KNjwUYcnSCc&X-Amz-Signature=00cc8d4573b3c1a0605dd86dfbf94f2ec01b75244686319a2b2b400d0781b710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
