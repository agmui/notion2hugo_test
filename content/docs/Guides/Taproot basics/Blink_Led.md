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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NKVGWHP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAu24vdxiP97bf17IqeZIVHgkzc8Faxao7GZk1nlsfAWAiEA8pFaxgkrMzhrPs7w9B9vy7k%2BTDphMR1LMLqTQYzpCVkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKUpm8cg7OvgXda3EircAwtnQumzYOZ%2FHFT0rz3zQPmR4jW%2BiftK52rmW6EduScxMXv7laNzeVIhr9Mtbkdx4SFhwUSSnp9gNG7XrDN53A3WL1K7%2FCjz9tGJW9QDS0EAR4CKojxd8A3xqTNAPIcXuahtt5TeJcuZ%2BzTlETwWtGxtY%2Bzck2%2FvF%2FU8ZNvCJcmfBKoO6NR4FQnkbQT%2BNBxQrsEQDxBu850kAzKv9vb00pEmwfRwvqQp9gB9tfU40lYRSxkGlj8XcnemK5CVqSbuWtPf7EK100NEho3UeCjH0TQ%2Fr6cQoNYoXI4m2LV158vB8tet2TgE6XN%2F0LflkDf60ghc4%2B2oPtMsXO3Aw6VSt6ciCfYqGg9%2BwOLUF8Ye69J3jgB8vN%2BTyQ3jKJfTnhC0gENifJ085mnUGszy1QEnHhfJbX9x99GozBF%2F7cezaXqcQpPTF3vsQaBA3X%2FX%2Fp3GZk1kzLxZaReqxW%2By%2BjEezLE46jGxlM4n9jPJFb1GMbjVCXzGkRLPJ4EsIOovms8oGhb%2B3eflKc%2Bdvbu215VoswqwmcW49lIIxHk2JBeFcEIGSPaxxY86Da%2BEUpDHq0NzZXiefYYvcMrJjCu134U8kKjNkkih1JWf8n691HNUqNo3nZ3AeeEbHXDh8GqiMMyx6LwGOqUBqGjkhKw2fymCvXbmKdG2Xr9MDIv5f%2F4fHUNypCmRk9CT3rciLA9LzdjddKKcOsq%2FGkm7lai0%2FK15q973ZxynzZyhSRlytCOFeCVENbBtWFr0Ur00Tc7Yfo7X%2BE14%2FLoCfQ8mSWF2snbDYwxkL22%2BRD%2BECwJ0ZkKMCkYUKQZUz0NOf58v5AIV8l%2F0njek%2B7z8yGpL9e98BusSCmAJsHIXAAYne7Of&X-Amz-Signature=fd424bf496138c7323b775ff3f306bf67578670c862e1f5a0677d8e4d36c5be8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTQ2XVE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRG8iMvyk7xbO3333Gn4kKZHBL9CV099t1m2uJfsCRIQIgQ9aCmUciL3HoAfHo0W4i7qdO3gGGk38hZ1uukl2YAEQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvk0HeobbEaVLALmCrcA7J%2FvOO%2B0dP%2FJ6WhWisu5tJFzHeSZa2awDPpUtvDG6lA7lyqyk7m2MS2CpqwiGIkhdT0qRg0g92qE2u902Ntuyi12fIbx0izRlnyWwK9I1mdXzbdemp%2FRkErV6d8m7vGMtJoaKKs5aGt9AT99btGyJ%2Bt58VmzIIynZUR5Y4wJ%2BK6vyTwIbS6ESn25Mo8KvMczPdXwSnVQ81hqywctGNCyXuguDrqNO1%2BPXvQHrABAFY9aPye%2B8SBQJs3xYVKQO8%2BSVoAGZ8LsGHrDP79AaQl%2By%2BHOM2J3mdJiehu%2B2C6WdA5TI417edBaP7t43goNyu8NUiyr681wBLHnMjtTEHBcjI3tPGz7A5Zub7IQtKV2YSTJSD%2FEQcOABztpNkXMaXYVqqlvGwaLjDUE2NYz9vMuhThUe3NPNKccih%2F4naEZvPx6Gncy6cmol9i%2B4iPONEAJmS4AiOGy3OZUD18hrfdjXzDqba6dhZ99mvC3fTqJv0kwNf1Ut4Tfvpp%2Fvr%2BbHhttyworj3tPN51TRkPH6thbWvdZGfpBxJDYNCQ5%2BICrEcY%2FesDBLgp5kSHVnjXkNad8xU2Ttn6IaZsgMsvm%2FRbXPOQESsroMXl8WRA5QRmcXSGHcAzM93sfM9CVmHoMLqw6LwGOqUBtnsinlM853npvIDE543g4mBFOaDCMDt6VyzyeFQiUt30MgiJxmF7%2FLXLL%2F0aY37F%2BeKTQBpv6PSyhWw9xUc6RuxYQQ5uhbOuLidjdTrMlrhOZ63OzntgGs1aLyOqFMzNJ2Wqhlu8k5B75BgGBfeUsduhbekjxqizDH9qopjid%2FGBVSYBO2lvUraVPTmQdZ0rJGdz5EHvpAsTWuynbLhKAxOaclQh&X-Amz-Signature=ee73f35fb0579965ed56838fd07612187efe99e21b1e1cdef0ab01215f4b1fee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
