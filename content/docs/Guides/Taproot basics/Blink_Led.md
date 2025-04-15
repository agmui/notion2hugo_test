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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQ4NCES%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtbrvJBMXowJ0xFzmgxaF5JMSkw4mCL1Y4d4K7a1fwIwIhANyVJE6IHpmCNT1AmFfIvbMw3Q2KbSQQfpMOLe1tBURsKv8DCCwQABoMNjM3NDIzMTgzODA1IgwrzMwuAct88joyMSMq3AOYonQ33FJTI8hW8YaGJhnczR44iFHYbVeCnOf5DuxFDxK9HBYW7mprLqHoC1i%2Fou6VA4QbickmzXzJHOTEiqy5JiL8ciW9BlhVwtUVOKZrePqFtpLHcsTJXhvWHSqz2w1KzwNgCsxm9XErv8Pzqx8HXsV2gWOOyr1Kuvpb58XeGN7bw%2BEmrV6EavbOWF4a%2BkgFvB9yyIcQZjMvS8WdeUUBvC8A7kKs3iAyxLV7RUguTbV4u6PygrZ8G49gfkAIt4iJr%2B3bg7YRPzNcxzvxNeBQiSnoyXb1s2ETl6Fy%2BTKrbGHSiLlOs1BNJYtkdvjte6cynQdISBddMg75sRSERH5SdlSgoawzkAKazVpfmLumXI3N2Cr5T6r8Xcpzdq%2Fbey5SzJNcistzIWbpdnuzntkqWjtK3XHft9OZYEBChYh4jJTk5RBo1j8kp4Jxc6xqqjapVHb8PId8%2FfsxmefchLEXI9I4F1%2Fq6bWNkxnak8vZ%2BbbidMtCVKcd4egbljg4xVWmu0QeS3DvD%2BnUmPAvi4V1HoIwLk22qhngH2Dd3fyGhKAVMfK5SNpBgI5eqT8o9c4ms5YGeLLVDp9LvKyp0%2BRf5C0dLIX7swl5n50Q937w9vtfHvKKy0fGwzszwjCA8fi%2FBjqkAY6oXRKSQiF%2B3YXdMgGxRaoysXt2dAdJXYustlDVwfZOMJCq91aFzSJeXB8WuHUGVR7bVxBPqiY16Smk04k2AB9Y7dqwpnhOJRYvgRu%2FUrDIqt1cqfax0VjaOtvO9kJ5wYU2n9IRChxG%2BXbWKJG2v%2F%2FEiKqD1L9QQNIhFxSsexYthLHJDROvoOStUl2V0FoLQOThyq%2B8qoR4Ppw4dNP4VV7i955C&X-Amz-Signature=4c652277907698b304e75516dd9d1a2e2eb3f2f25f8df13b56b242f8b0d7c652&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TH5KAFW%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLpDg3jUhtPfvaWL63RZNKxZKiv7WmH2SZrGM%2FIaZNpgIhAM%2Fo3drecZVtfanwqeB4P66lVNOYsZMI7ecjDsJ%2B4gZyKv8DCCwQABoMNjM3NDIzMTgzODA1IgxAJ8JCa5%2FsIOeE9QEq3APbDZKH3N4T6bG3KC%2Bd6Hq1ytMbShkdMGL9aEp8NpD%2BeGOZ6OEJxbkQBIMw8KtLXkw11gOTe68Lh5LwqJD51sCRjcpbECwlifEOL%2BR9Lv2VkIjyin8oiIVJyZJbLkFYm9caw4osuZ4O3m3lUjk7%2FQRME3%2BWElnUODFSJrrC28mEHPss3OKmpUhCWN%2BMQULPpTt%2Fqnfu9y1zrLmUmptFlrlPZLHFfrC96SjdrdtYfkpVmPLzN38DOIlcquhzNLxh52PBBUX5nM4rB4tRHqzLw5u5jzJPAE8VlwYarBbACUhcHIkqLAkIh2KpjsnsoCOUNq3zHS6FD3uL5kF3u0%2B9aa84V9eU%2B9jHEj%2FcA6aFxy1Ryd5L3trqq22EN%2BP0DD5vPzKTDPwTiwbQbn9%2FWSj6avebqWdDN5EL6JV1jG%2BVakGZVOYNxFk51Bv5ikweEVe1Hnefre04mXMqYIu6%2FjbPGeMXJrkvbuNlaCg5PPOzi02LBxkAHfAhGaEzxUmZuqFsUMtJRYV6wPr98p9Oq18LtsqpXqzkkQv3knBGkeDq8PyUiYIVoA2WbDGLy3AiH6cvnGMZkmtaT89h4ohP1WCDJwhRLvR7PRNqs1nkjEAwDrmWD5afpgp4xMSHi%2FTpwDDf8fi%2FBjqkAbbV5dxtaZvQUeyFouTBZjqH54jgwi9%2BJkvAQEeGSEN%2BnH8fet1jnviAI3BfNUqEw9XT7AKyUl3KHFLCuK4SnCMSAaZM99iDWHtpctqTCagfVqpAqU8RRsQwg61NpfcgDpK%2FqMpNpsiKYIH4y1yvOwYvkP07vC%2FeXj13reBvAblXuKaW%2B4XCEjBDW0hwAxQSVq8M3gLoN1gTbkBh%2BFTt%2F3Y2Z0zP&X-Amz-Signature=5602fedb9e6fe4e79fed8fe49e3c9e1b0288028b96bebe986f07585d2366c3d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
