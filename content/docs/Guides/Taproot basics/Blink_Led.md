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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMR6VMTK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8DHgVzckYqYVGrIqouao8hAEayIFs9qRuZQiwn%2FKdWQIgbM0KCJyMM3xS4iM4T4jiCO0FgCMip47xQlYBV%2BTZWzsqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeC3sht8G4%2BdDwCCCrcAwP2Rr1gR308qZtjs3RceDW69Rg2VoC1DHQN4WfzCdY%2Bfxdw6pwA%2FVzdT%2FLO8H1E9WED7CMsy2FB04xM85Ixdy%2FZJONRARWi4GD3F7d5XHQridkFe%2FWvz1pN5%2Fdqh1wcmNi6hbj93r%2F7tOOSP%2BcLaICgKRYN1CmNoFjPxz8HfpUHIOkEbgfhu%2Bt6%2BYeyr1kmbYQL0AgaehxwoXb%2BhoaeBky4p1iFN%2B4%2BYgsZtRQmEqMZaEmIfLz3gENF%2BaZ%2BLqBE6julbj%2FQAhfAfhaYRY1rUn39gd7LpEQXfgESfEIUXuSqBhItQmEZ7Kemmo%2BjpkeREiOaHxylxyKg2kLfYdEjjIEk2McvOhqi0PsSxTh2pNMwOkqw1Rp8y6Z92lj%2Bhd2IeNjsATTS3KSI7lEraKZWJuzUR17ARJ68TIsgt%2FnLMQ%2BclcLtDnyhWmOx2emJelFSDbOZUih%2BY7UzFv971It7bGFZsfkR2ObPPzNBzAnKJqr1Ofgja4SRFQ6lI%2BJau09QXptI%2FJSSV8a3vDb1eg%2FDyllM9aX4F59Gw69YKMq%2BKMoWOnO9%2BYkhxjkbcYEzcIvlISjyim%2B0enXvhlZtwpMP63dx0W9Rum3e8Qp14cPf8BNzr69LM8SRsNe7iN3PMPHZpr0GOqUBKcgjHZSPq2bVZSPjlFwQCuctTXYfh32eJcTDT9KA57DAhOjZ%2F7%2B0T7zqtkfGbtUHv4j0U6Jjsfvq4PS1kkX2u92JD0Z%2B5UzpfnzkdfERXqMidsyUz9L60n4zDBoibQqd%2BqXjDvrcTZYM%2BM8JwO9R8DXwJWeeANEBZwg22xg7kT%2BHasR00fAvPAN%2Boz4RfCznbVJIpxW7ovOlJPUziBK17U4%2BW1bZ&X-Amz-Signature=14c8e2627da62478287a9e9fb90ae58c03741cdb8700022b818d943bc04b8938&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPQ7BBO%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T090855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBSTvlfKMgYj68R2qEtMNZIq%2FVQ2BdhiOSzNhnjecxIwIgO4Ie4KDg9RRdFko7sG2en%2FYdvh2%2BR8DvrMlkKp4EocEqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1%2FN3KIrdJrUcjkxyrcAya4FRBdsFcB%2FX9g%2B8NKUIAJVy1E9IEOzg0UrmAJ1DdZh4vzuEzn%2BXiwujLIZ%2B9SAkX8k39wiiHSocHhtkW6BBRyg6NFQR0fGVYvjQNLxTNQzh3Q4VaBGRgvMoBceKoe75fJlJLHXpnjXi%2BdA00LA6A4IwirSZckX385y19xkKJxDRAxMv5m2yOr1Y6wRWuZFapic5aHbaXL7XiB2dTqEqWa%2FwZBGLjpeTQ9UH%2BXswAhZh0raP3O0psVsoeB8svhYwbBQ0vNyN2j4x8hhVwSnb8BeaL5giH3%2Bqj0nRgeNsv0khXYemxBP7BwdEwJyYCshtieHVoo3OYE7lopur2ncUap%2BgesqzxAeai2wHkEmnIawuJiF%2F5WpGppKgM8GyDI%2FchJDFFm996AFxjH%2FErugISZPAMjbRKBhJCziZVhyTtxNOoE5n3BCWXO5h6eNtc2sYZbX1hxH14ojSI9TyNSsgPoRC3ZSXKzMwMBOVwhAMVwTGGwyWmXxwJcbTX9CGQgttjlH0vIoZZ6LhqV9z%2FtJnQ7i%2B91Oc7J0jWzW%2BUwJIXwAfYo1KLhe7IPJyzjH9601ujgdcyjR4C3TGx3I9e5xnWW0aP5EbjnbOAynx6TgvEMlPldkbmctHQbu7sLMI3Zpr0GOqUB%2FI%2FJcW9voVWv%2B7JnpajVtPV0ZE0NPhyRPZYumCPl8%2FU0jxgXxJ%2FsEfAyE%2FiwsC45rEXUSV%2FuV%2B4l8%2FE1n15sCx349kZQikMgYMtc6Nyy2IPIvy6j7jPquoLMaEMs73AjoiK4cP8BUNivwAwfxjdfzKSeVwTLrgjuCdukQ33%2FC5l2EeFtret%2BQKStHwh8d4JiOY4B3RzdChUjZrhK%2F7DR7ioGaEAQ&X-Amz-Signature=b8f8a614ce780b43ec6463e7544501de34a123122d32c1901f91365d93aafc72&X-Amz-SignedHeaders=host&x-id=GetObject)

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
