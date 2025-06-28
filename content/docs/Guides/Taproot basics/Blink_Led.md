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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EBKJQHI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEEO5ljVD2lck8lKs%2FpInaDOdp3d3%2B1vkbWHJWC6dhiLAiEA2fWw40q5y%2F%2FI%2F012ybZmTC0zR5La9%2FhFh%2FsGUzkgxGIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaRsA9rB%2F5Y4cSeICrcA18kaDCTkvp6jOpg8PTyQyYJ1gTIpkyX%2Fq6BE%2FXmhQN9sNkU7qIkhAOYQShfQJQzY5rW6Qb2obHjskppPW%2BMnhXTnXbR00uUKRn37V3dl0hIcSM469KNrtMExHrMxs56rwma%2FcQLDKm2z2a8jtYShbD%2BKIbE9WD7z43%2BACPeHeW6ZYsmd3d%2FMyCNenF9EGJOYOy626HGbeDQGSbKzSUMBrOifwJpPeL4C4Y7RYaDIa8wmSysQQYUuGVxRqNcO6wZXmj8AInYbqq4zLg7A1RF339LxQMPfqmFLa%2BScne%2FoztWNvXmfBHfENc8qF4hHEaOInAejFk5jt10czQqUjBTl2uabiU6m3%2B2f7xrXWIy1Jz5E1n4mkKdleJBSZZfhCyJKtvJ1Apdk45w1RL5qB%2Bar4V6MN6TmcOsLYcmsPNtmk%2FM0dnAmzINLuiF%2F4SCjFeqzpcoOWw2qt4vO17UhHVmj7Zeo4IroPS27pgRzioxohw5hnCT8u%2Bt4YZNxsWwnaRq2CrOlGWsAfN%2F0y5W7Y2TSDJ8LdNWIPBTrLkPTTScjcYim51zZybZ1IL%2B%2FZTjbWcl0SFIX80CWlIh2bx8w6r1hBL0OJHdc3fKUYqPoHlCiBm3OVliiLxxF3Of4X1hMNOg%2FsIGOqUBQ7WenT%2FIzMOYoKsX0egWx1RkaUavEQAGFxWtfIVI3l7wMhMOFc5tHhdLe8KcdXn2w23j1XSPIoPWN2KOcbjKIsCZzK6oYRMEK0rR5kky4tlEK%2Bg7M%2FQf7Q7IZHdOOkBmMhhg8khDVEd%2B8tLWs3p3ybGoc63udk%2BglPQEsZy%2F6PcjrN4ky91JrphNVa6T5CYwfKEu62m%2Fve0SJNhBUwswCkhEOWgw&X-Amz-Signature=a52a1cac14e938413f6b4dc1fc7e2f3cb41b80766588600db15ae73a31214bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFWEEUG6%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T081031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTKhUgo3qwauMHiMZf2Pa2wqwO4ona0OphW54YcVMpgwIgQdYbkveEyorwQyZfWWHYFwPSEUt%2BQr5H0TAJ5AJ2IrgqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2BVNGsNBT6CdAIE5ircA%2B%2BKBWr3OjEJ757h7GwS3HMcAv2BxQGVHr16p8i9LI25T%2FNxrr1icUlssesBtbWCnVKLDoVUNpDm6ZvXUecSEYX3XbvItmJu9WQc4bdzLcHPpdA%2FbiWYYGoNY8xllfl96GVawyQvUrlkjNsydqG1WhK4Sv60Y1cChAI04uk5EDslFVoVMtU1F1hVTf%2F6Mh%2FhYaOjvgTZkfFLxKslZ0BS%2FWOAmb56QIWbf%2By16Iu5otbTOJ85tDcJKfCGy7euLh%2BlyidRdz%2B9cO4u7zUV4x3oky0GKinf1lKsZEm760YoRyn35WjFoMNZE2aWS2JI%2BMu3gHLJDz5UvUfbgMSpmwf1VmWul3na%2FD0uf64YgQM6KgdXoFS5rrk4%2BTFvGUyNAnqdaNd257T8iBNOXWggdoEfbpXx2guBWplKXb6XbWldf6SUY91uKnx9zsq8iAnMkNWjCCfSbc5BQqX6%2B%2BfX6BLf2hRVhQuNnjoOcqHUpWEqZSUF8jq9xfXUG%2BlO9W6AkZYU6JqH7rskuq2kU%2F%2BcJ9MCi0DfObUzKkuejg%2BYIJ7iMGpjUYT9fnbT87Ig%2BPpMs7tXMNr7Ik3ZSMOwSJ6%2BSUungwC4BjjR3NnoRsdCCYhHgXzRchkw8thQE0QWML4eMJCh%2FsIGOqUBacDZJSCkuHMmXZy7eiU%2F2hkDSGaCZ9Yquz8gTuhDkncF9nKa8PcYRyxQ%2Bg5f%2FpBjSbWwh7vYgSTaYuYPuNUlga%2FA482plaQRT1rBgE0RrChcRU1%2BcXwluHAMW0kb1JHaK43dKxNf%2FEJT4nQrewE3Th3Y5PTOwwP3QQqOTihm86ZHLAZiETru%2BHwshepYelhhXcMt0HLkf6e5WbfVevf3Z%2BoBXbyW&X-Amz-Signature=39834bb3d66647c1a8576714d3ab4d6a20cf58f323b196612e9a4aafec4b6912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
