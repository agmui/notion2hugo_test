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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4CMLMT3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIA9cAMBzZ15szRRxgyQTyAuZ28sO5wJngR4ukPrz5pf0AiEAvlnQK8OsKZIvep65dVC7yshNYxku44U7rqb%2Fu9ouLD0qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNgYH9wfhn%2FKoMCAkSrcAyby7K%2BesNjDQdSnT%2F9nCNns0MKV1CPSf%2FFgv%2FpHBrsBAeMGuqbJJq0f7FZ1nT4P4dJiU6ThzOgAoD8nlAfLyfPgFMU5weei49sMKQt%2FUFovyUBlgT2Dz8LYg7nW0xIhdSaWwMq88E88ESrnqmGsHnzNJoDxYMcpzzLSQonFZDRt0Qg3K9n%2BqGRE5gauY%2FlG9st0jnPmEYsExcU7smkX6ZJKJTk%2BKVDYHuyhBn4zZxQ%2B9d6F2TsDCu%2B4b5c0OPZjYdkJJT8s%2F2oGJjbIs9P97UyYQLica%2FqfEPChqu4voaGZHs5hJgiZEuf2WiPfVJdbKOJginxPtdKu1fkGizk1jiiJn4r1MC%2F%2FCG3OVU7w9xyK4bg%2FmSQjL0DqqPq6aN9g9osQNPN7%2Bn4jJFMpQIBox52b2ZlLSjHL2BURh5D1XvT%2FRUa1l1zb5a2Uc1gEjq9BuOvNRZytlhvKclMukHi6%2BgOkd0uPgXiw8KILQTp98YCWvaddOI5Xwbxn4wmm7Tk%2BPwBNkNB1yrzm1hEWvXbdFv6C%2FO6GzdzRrkFW%2BMIqvPjh75UvK%2FSV8zW1siinh98Q24pEpWoJgxCepk%2F7rD8hck6QKNDkjDy9HzvU%2Bb6jgeBEdXLy81V4qI%2FkbVGZMMHyt8EGOqUBbJvRPFbyOnB0fJreyFpqgZp3f8EnjENZi%2B86hZVyZSQtG%2BlX8ihoA7cT2LA9QdwmiJT8CddGPUqm%2F42oVMEVeFxKe%2FstyPEygoOmQkggUfYaKrR0Rmx6yVex7e%2FtBDDhPT67uuODbHnRBmmhO2jMhHxYiiG6qeu06ufNnkSdZ4B8AHaiPjRjjed2OOTL7ltycIwvyMHoi0n8Dp1nExHwRlmAoWk4&X-Amz-Signature=12a8521a5fed6a4ec90b7d1bebbed56af259e28e044c3386bec22e46eaf3039a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLMSFFYR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIBwXAeHS76bTWfI82zmTMQPOnEuqKzvWYD88cH3gPTN8AiBSwN94lsRI8EgjTnUH5aYfiyATH4JDzDvc%2FiVf%2BckEOCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2Bm6F9SL8l5h6IJ1KtwD%2FP3CbYONeRIKGBHkjY2wLy2serbACqSyQvQr5qL65EtMdQT%2F2bfU8D5TcLUAMPg4wf%2FfeE%2FyN2vltcRpPw5tK1urLpyyLbhqHdsdocskGDxs9Drj6TckS86w1BF6D82v%2Fr5X74sj12QLbEF2nOyPRkG2M1XP0WrdobP54btX6vMod1fQzG31jXWkRI6cCm8U0y29wbbIzrBpMx91aGFSG9Z2VHeYIw8oZOVzZhu4fTs5LXtKCM4oMoCKhhNL1DyqTDthktFyWi4fiKS3iKY9%2BsDH%2FPIzCh0UhYkrOSjDu4Cnhlx8AFDuxrS6kAleM48F6oEkEk9d88he973lH%2BlGyfPNnQWDzC%2F3no16RFfMWKp85UA%2FsqmQPMfOOdPXsJbmFxW3tZsaapGMd5Ih33xxu1TmSGTwAaS6i13k%2BXNFFL%2B3QhzTKcY49KP9KnrNcXQ8e1lVPBxCL%2Bgjh3zE%2BjigCGXYDHpe1gjg2dWf68vIvsx%2FJVBdda0eAaZ1N4lY0o%2BtKwYJ2uKC6EYbblquPrmwJXlHP5D2BB%2B9p%2FNL7XYCEn9VXTxowNn993TKonxzEGWz8FQfPEuhjdvjsLe4GXmQtbAH6ci9W86Qki18Nnh4sSEIq16Qz6UnMiovjrkw2PK3wQY6pgGwFTgufhJbD%2Fdgd8EIagVKoD9V5liHBC7GBOZR%2FdhPywiSTM7yo%2BAF3D3rRl4uqT%2BvJIA4WuMbjjQFbGN3v1xH56NlxputB5uzHT86DX95VYwX98QwRi9qUrYJgBEe6Add0Qd3aC%2BlL2CnZwMWdeQTatHxKW7jYKy9M0RMvcwQg4TrJ6r2h11w3x5CKHQBzhxXqqJS%2BuBOoM3oA4cT7JQQQA6iSf1U&X-Amz-Signature=e768658bda8b48dd36f84f6b91f8188bf4efd80bda51dc398ddef71045a83d92&X-Amz-SignedHeaders=host&x-id=GetObject)

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
