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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THCG6THX%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIDHUmm4rZagnuY63sO1YmoX7E9M3E6yGzMT%2BEHu7gUhaAiEAiK040nTlNAQy0X8Y%2BMXfrkYqN9nup99nEEoxdtA%2BaEoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNc07cKbhY3h9QIq8yrcA6zTAzVIwOFoxD3hSHNYx%2BvzeXMrNcaTovyPRIfMUgsVrIkl%2BBSwcpsZTg0FA2RP6Ouz2%2BF7LkmOUGb2REp3R3I5TiGWUP%2B7NG5NwEEjO6Pobgx%2FcaLfklbwe6qOM6VSsK7PMjC89xyo9TSO46HAbu65L3entXjz%2Bz2ikUpfv6LtDKCNX5dtMAsM0wo7JKpOiQ0YlWBE1jsgUe4NDRgNXDrrAPIJhPN6fiYdugB1hroaZuLMkwjqPCGNvdBKDVFYZnvvU6mxr5wOBr%2BYJQ4HsOMyufN033NXeK7S%2FPV8UHE4J4C4xGfxJuArrX2aAO7QfzbT32kq3ElOXMMHQ5rWFxOzEWfCpxQnFNnnWi66ePK5x6z7TIWzfUj0bgT13TQIdAxShLhc6p%2B%2FBroiUKGj3rLfVH2nX%2BrjIMM5cIuqVlJeJomidvSkUuezAREW%2FekQem0ZqHNvLSQMB9pxuUKPA7ufRqQqQJ8JCJ9gYeO%2FU4mvJfOQSgrFWAI3%2B2jrKN0Kb8VVYBHSQKIjshs37MKRAfK5u6JRiH01Mc1uTG0o547CvfE2XSr7DHX0dfjlRxdq3bRgAufGnIlcpNnRPeKsEGmAtkPleJ1stoFMnA%2BOT%2FwJDzDah7j%2FmqLd6BLcMOato8MGOqUBGUs4yD7lNq7NZKOg8C1xw79lYGbsD%2F%2B%2BEbo4R5sDelgnB3X3StuL7jUSxOBcO8XTP0TPY4LTK4UC1FNFfZnSzENz77iDZpn8bjhFlb8AKxAbgtcZCYOo%2Ba8d6b4g4qd1zft7oAoGkoj24i5IQvb7ntq54KoFLmZE8srnYZ9QDxmoYoXkWV8nTRrgzBkvQ4T4rtZgLZ5VfMRFWSEJjA5XpkNdLLKR&X-Amz-Signature=2d988a06794711843e219bcba68635f0d3d6b9e6c1e3d02de434cf1ca7ea78a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOQSEY4%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T110617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCc%2BRCyiAFDDyt5xaBhloQe09pQeRhg1uOHzgVTMOnxPwIhAJ%2BfUkTFpOjKJZ6i36d7D1YcADeKcwoaY7G6FIYZVwZMKv8DCEEQABoMNjM3NDIzMTgzODA1Igzh24ZpkRzPtLeXvEgq3AO4qppS9Eq%2B1PuhceJQ4HXj8T5fWVTCICeRPRAK951isiVG3cE02tpKx%2BK%2BxKen8FtzBeB45lDvmGCoO4FwMIM9xP1e268V5SadpXishrxh1LgI7Z4uxIn%2FD6TiW%2FoVYoUe5rpCExLMhxOJ%2F1jtOR7fSQipRGMamtKTWx%2Fp8P16IKaenw2X27oAEKoO6ARiWsYH4OfcvZDLI3sd0bI4in4l2lYjBlSaU6DtV7jVCBueljPwTvtoqurSiPBYuQRWjjMfAtXFZ6aXnwQ5zMsnxBR4PuqhAaJnQGW0PwAt0AMHpYyAfpsdGtHKqGivjfyBnsM2Jkr5H2iMIF7V56L5yfIWoJ7ZbuBMn2xxiFkZWw%2FhOYde2xySdqVQCtagHXblQG0kmZ%2BkYWHRM58qn%2BQCoOqz4foaud2UZqT5Cz%2FJ3hlYn2XWmUtetMMgTBe%2B8a%2B3JDPU%2Bmjre78mijGTOf0WDKWxrw91rqQ8qoUvXZC385XaWrv2czHnEtcM2oZH84OAzbBexNEfM53NLLh29gFIlNSDfueUefKbyCZwtOjH%2FRU12%2FUyxt4YvaaFw%2FhgDd2lCfLr1g04YRyVq3UIo8RhaPrR0qb4aXuew4PsqJRCzGszosnlGpF7Q0bn3HDTsDCGs6PDBjqkAdgK4xo1029cqosFwJAjDhHoRYutF28rNKR9YcIU%2B3y7rrqsghXPBtl4I%2BkBjpBhYpomgYzzWS8ky6XJsx0ozLw%2F0lWUNZQGpMxZxqvSfqit26mzkPPdLfgGjAPf%2Fjsqcg2zkdMk7gNdNkYykBLLKKdbs9DvU0IaTBRDGa%2BaQfdxglru%2Bi1X4Jdeu4IHIm7qL1wcfcUiEqxdZqOg8EpeG8gw%2FWiQ&X-Amz-Signature=52108175e69c17cdda90495b13cc071e884e8143b7ce599255d69f1a217f2d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
