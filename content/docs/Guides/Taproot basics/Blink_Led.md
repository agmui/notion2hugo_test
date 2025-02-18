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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR7FCLGD%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCgiD2oE%2B1YqlwHiUIQWDrR56iW3UlDcjphgVYmNhNt4gIhAKGkI4pCoYdp1JQkBQk5yZa6ZPGz2hd3IfM9R%2FK0KV38KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCaI%2F3XCfJNjhF4jMq3AMlKa%2B7uIOGz%2FG5jGojKT9f0JYQWoYsQdwuzU4SacL0Bh9zjfmKhGE4Pd5nMZO4UbdTwA5tobVPFVARCdyHMKndzScESHDDiyH6MHErwHiFcqGBwjcxBHOnuA1rzdYf2dZl56ts7fhswc4Jvemt3fNsnf%2Bba2LrAm4K3w4Bqh2P%2FJ3AnaeFdNMG9NJeFFm9cFBGPu4xo%2BMc9ksJ6562lyvKXVG66hw5RFfKI7u3zrabpu4L%2Fyg8m7JIp6ZT%2BMFoqQv7paLBsB4H40enhd%2BliAiV5pqGe%2Fbb3E412EgBYWKPl160Bay7m4EJmRp9TSmB4Cc3JuRVzsLyPDbTmtTy%2Fx5qKspx%2FusDPF%2FiJrVvStr0Qz9vkGTEUtAYK6v%2Fa5yACJ4oTM7X6oJ77VKxnknEpzSfYSzpvFPYhtMxFXnIZkj45PCYl9cnW4PD5TAO4H2oYvBW58wYCx%2BTfs%2Fqz3EZeXkPXnxziiQ1hClBAm92sEkfe2BwmDyoWY0byu8SaeAxRyHnD0tyyAwfk7C73byVcD8LjZDZxu02oVA0IvD91Mm3lmi6J1PfHIWZ5Mt4PNPdeRGJwnVGRE9ry8ZzzRlOhcPhyaQu6p7CiIMZ22EV%2FzFlLdjuHgIwNJGJtL3WKDDU9tO9BjqkAS6PiZSfXeF31oZykHM3DiPqaiMJIo5Iivfg6UYtMIwgfBfpxZ%2BCmUO1%2BrQTw%2B6wtefDq4%2BFhNthuK0%2FbWGFI8ekYIJ%2FpdB%2FHlf0Jhr9eEcOqTfPuuDQNevzcnp3keu6gkC8eAxxN5LRuvIHR4w8HgJOLx8lEYG89JxIZnTEqG7zV8yTNR6JREbNmoYquaKvO4vCczOrSyEpxB54Ro0BHSUCj59o&X-Amz-Signature=fa57a82b212c10352fe9c9ac8def0ad1be0cfe849f0a0c09b6a8536ff8fed7ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQPXVJWE%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCtv62ne0sIz4bI8veU%2Ffztd6Bj3A5%2BUtm8LxvelRc%2FVwIhANX5usUuJHWsU99V7GO%2F145NE1AeG82VP8BQRnOj8VPQKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwifdkNNF93bDDorVYq3ANu6JeULzrqGIoVq0gnR4fJFDqfZHv1%2Bw2VW3O7O3%2FSbfthN0UI%2B2crtvBmajH5teYBAeXavurBNMddvpLy0z%2F6L00VxGHc7eLFFsMTjXc%2FyUTuTrLUZkrc3jFCQW6oOgugWp3PUxNLQjguTQo%2FZJqNPArCnTgD8%2BKHIgwGHAMK4btmf1jp%2FSIQQzaaK1sFWk7CCT8e6LSv23P8YftOWg5vqt9mgH7m89A6rLoFKGEv%2FztYDPju7ZQxoJDXajsYJzQ4EIa9aCD0VIZcVWzzX26f4ZTWFdSP3uoGtcHx0c30VxfkdUJWEF%2FgtWmAP5aiKRFe8kgwli8Qba1dp9K1%2F62BCYeUjnVX2H34Q93D1lgpwNsr7LbK6MF2t47fG6sfdWU43Lvo1YJdtHPtw3pYWqg7BLnL0ZHyT8lhCbFvXc73k8t0CnWDXeFtfGsyGRsuOtQqV0Vxj8XmYXjqnMlgBuiQ2RRk9MTyWkMZ2cLby6g%2Fx5FsKDz%2BLn6iCHydQP9wiUZHI5NAtez%2BVQ3Q7vnvT2abl3VJboL64RLyyJw1HhUKbE3a7xCF8xoeXww43Vn8cVV2isyLSf5bnlYgbo2SmpS9bY7%2F22D2VfKTNM2%2B7JK9KDHWnaUfuEoJhQikjjDF9tO9BjqkAUhGjTdA%2BrMqUcB1lJAymrVbi6fy6we2hntQ9hRvzFRwvJml3BTzaTUTdPSeOSq573Tyk9IhL2g0d54mLRakVFoz4MdhG462yvvwtYMF9s7Z%2BqfJMoILMAK9h1XLBCGNR9qvUd2%2Bqh8dON5g5duRmjdwCSsXHVDmk6%2FCQyvtCeOjQLoi4wg1VDviXr%2BR4V5wyW10h2AOKI0IyjpnM8fN1DoCiSxB&X-Amz-Signature=dbc979a8dcfb78e739bb5799f45dfc6f375304832182b9018fa741375e05e33f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
