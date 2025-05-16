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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z35EFFNY%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpXwgcbPWNdE%2FgrQ5yjJebD8pgbqRPd71D55naVQxUQwIgeXTmlclB1H2x9F64NgyySjNg22XbXLOdVpOlIZnQJ6Aq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJYL%2F3oi8NMh%2BXbA3CrcA3d4jKKX1xCNY9%2FGBCptNhqwtMorbxSzz814ESOxH0tJFh9U%2BVoA5yJjp8sFu%2F6kq35nn89%2F8%2Bho%2FaUpvdbLlpejBVsk%2FDUW9%2FRg4f2VlF8y%2Fr8lnWk%2BATgKvj%2FDuFImkiQWX0FXCuNbtueaQisRarVvKSyyj1zgZ7jCf9birQYSh1qEjK72%2F6KzL%2BzdXxCrb506MretS3P2O58rWzxhIuQXUreQlQJrc7biq%2BT40qxCXm%2BnqaZSIYlC4Z5pyqxpOL9xknX6VW3CK3y7Is93dWnUJTe3woYKrDIMOucOdMhLh6FWE8Wxylp6Jun9yR5es5%2FlxiRkfxAVEbNGFCqoUmfjTaMoKzX%2FZvSzEhKxeIgf3AekBTLOoL9OZo9S85VBRryZRf7PLuCy5QXUMZLQb%2FjkoXQy%2FUMt7ABlZ7tk5etS%2FpWw3%2Bb0DksOeKgOIWi3u%2FoGRNMZyrD2s%2FYlSqtXtc2b0bojYCrvw2Z7TDhIZyw47V4spt1cciLu5%2BM628aDnC8AeWDI9mGNq0V4J4%2BNwytD0D9iejKm%2BjYKty1YvNvqhar991SyNS7GpGUj2bwxNrdDWEEOVfMebpVJQjN3W5aFO%2BZGfn5Trr6%2BrufTr%2BtJ7iV5a161fhS3LdI8MLuGm8EGOqUBpYoJLSHJtWT4VpjEMR6Ug1RkfbXnhlB450bSldAdtWu%2BgHJW9u77wbxmT%2B%2FJ1NmwZMEd5oz6jB2ARgYBOxynoDf%2F8gWW5wqkdqf3WFGDDEKpzwlrFAcIe780TUeTyV7YpUzMlJcsrCdlQ4n6yLS%2Bl1azNJ%2B1s9XAi8DhDiq%2FLUHVEd8NI%2FZLZ4VmBUCjs4PWNrV74EWCjWloaxLoVxWeoceSNsJG&X-Amz-Signature=93f49850257b7570e9692985e4355344f5337ac48e6bef88d21ddd567bb03090&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBX2NGI3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T050938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWMlIm5KGm6VuBZT20Bi%2BPUjEwrwgOqAMITVCyCaaOzgIhANs6ui5%2FBFzc55YJXnESppjBbjw14wjldKJqvIEvnzviKv8DCD4QABoMNjM3NDIzMTgzODA1IgxHFZtqLzKI69VQwdkq3AO%2B2oIBtOOhniDyDc5qK8AP0c9sld7UY4fj3KnMjsvZXKNTKmvFllB1T5UYpUB8CjTcAz%2Bg4YLW%2FnT01ai625jC4k2qRAzR6kPCIyfySYtVUqFFvQ4YJUIdkdwsmq1WotX2GBzegEyvkUw5%2BejkioVSFhySrptL9cPhESYZRcm%2Bkc%2FM%2Busn6UW4UXpUKqK328FnaONxjI0p7uvJrzx8y7kRnSeWZuqw%2FAfaVe1wY5G3zDToEdkMmoHUl4xbZJZvCsaYhGqAwwhJ9vleN4hSVl00P0P%2FGOPSQNHfj%2BBOT%2Fbn9OoTt6b%2B4ca5P6WQ4V%2Bj4JPX8%2B%2BV06UIPN1RXaujHsh0ucEmRK4SvcKuDbjLHqvUYd1uX%2FzMxfowpqJlipwS%2B%2BtKdaj8Zz%2BLo6LgtcBckJle5ln0tk%2FjYuAtV7h6RpCWxKNeogDX26zBmgxXh39crVkD42B%2B8D80yXJooH4wkzWtI8LJ%2BGfafCN4zG65lsZH0ZTkg4kIbXJFa1oPGTGP3vcogLfcWlrcLYctVkPSCKl83Adhg4IrWylTW7%2BYcsqnfsYSEAcSVTfZqu%2FbqzZcXouE4UZR6YkGOmRcY4EEB7uby3VBVRvIr9kF0MP8IyXebiRgnSx%2B0KPvLszcXTDchpvBBjqkAdEg6F4OVZQZQDS7yHKNe67Fx%2FrL6glK37lFCAERkc73fzPnbXKCY9Upvwgrs6imZDYDtRGT57xhe34kGdXzeknixs87GOLBfM8B0Z%2ByB6jwS1gzBazSyi%2BlsTW3TwvvwnMF0ZPHNgog6K%2Fc3PV9n3gbYh%2B7jOg4O3KMqcm5FgZtKvjw%2FDm%2BbPEoipfHEniSbha2xvBsK96lulZvKMnc8qunQM0N&X-Amz-Signature=36f59172a9817c8bec2daf3a34cce206c9d88657221d62e9277b322757c4b87e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
