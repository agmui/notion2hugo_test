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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UXMNFAG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFSsoBZEUx01%2Bk0s11ljP2fSzOdxqfiVhCoO8%2BuJYdAnAiA9%2FVgqL9ukBWJCUhB%2Fzhs62d72EliZA3BIPvE3iH2H5ir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMT7tvArHlwZkfb9evKtwDvZtRwsgat%2BK1BuJtYQ9AMoj7ovZJQy3O0e7nmpJphpFleFvWZCJg8Y2rPT9ahDLVDQhzNlk78R1EFXsslMHBoGbcpjTeOnjWLFqWGlIyBX%2FXe96c5BDNct22hl%2B3qjXq%2BWdFCPFEOwsbSVlx8JI420ZEO2Zm9ww4UwveZ%2FP3Zr7PN%2BOx2feTN%2F4fEeVnukjdsoKLZSBxvZON8KEHOwfEni3RTXHX3CMHGQexkwDUOhZQGcxSImfXW5yhwdRXQcZUnjLwYEA%2BubWchOWmngF5lf%2BgJaWBsL8SUWukDwjex%2F9qobbTuUvCfh2O4hoSeuu6pTZa7hKk6GhpOTnh3jd%2BiWIC3O%2Bm6ecLQPdJ9%2B8RcY4WSj%2BW2el2F1JJErnjPHnB9hPU0f4uywAqJJXAF41YJ50c92%2FYAfY7AEEjflgmsbQ5GmbMcZQZS8AtiNIQllU41d%2BxpVegdhR01JMv0NvzI9YkPjEOAljeRmVeX0C0TuPoIjtifBjM5bJS9bOoZ4nLbaZiUvzcUIAEEuw36JT4xfw799oBL6cEgRCevwxYrCBN7xBG5ioQO174l%2FzvjenQWwuvr0a6Uad%2BSZ%2BLNpi3NDrj0x62iGO83wEExGitGYD9T8Qs95uVxzePJjMwkd3cwwY6pgGyc%2Bl9ALKRH2EktHHSgtM9uisMr3dsMcvH43xtr%2FL%2FyHElS63dhihWZgF%2BoyQCDtbXKoh9Oa03qmcQ6ZF4q%2FKySUJgHSpyBN16LpyKY7GK8FYonNq57RQ9AXhQfFAFSKj2mAZZoLVHidBuZHQ8KCs2c%2BesnTHDN8q1%2FO1Ke6ypRIwMoTeBlbu7UxlfUOXF8k46dQqBZMmTQsxcndOwR5R4LrKOU4vV&X-Amz-Signature=3e041f62291b01883eedc0139fea32c612e6ce9479b015c35e8bed1035b7d102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW6M4SUU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJFMEMCIH6s4XOen6a9nU5Y3vFL%2BXph%2FKLUWBB3yEyrIixKSTIiAh8yPPkx4yQnpBE4guNnyiDLXMEOf6b3Qy7gBa6%2Fq0fGKv8DCFYQABoMNjM3NDIzMTgzODA1IgwobeDoUi%2FxWhoUtv0q3AMvFlnsRPOCTbpYQbHdpxB%2FUo1nZ4g7I3hGFKPbkLPyE8sE7gzs1jfhO%2B1biKQngxL%2BzOUvWBkveLIcJjRj%2F139OGBUKdTno9U1ARVa%2BRJAla7u6JQ9tk0BbsFZneBsjxJeysnFBdXATbdmaDpw%2BacNe2V%2BTp%2F8VlWDLm%2FI66eOUQ4W0f4NwEzi7Jz0qHNZNf0xkg3VRhwhWWuLIv8A2NSj6WsoPiCkReBm4Rrwn7n0inXnn52VqSwKIY4Pejd0%2FQqh%2F5SF23tGLdUf6aCGLS6zwk0ihZUyJCvwsBa9bBqLQy2IjjLKZQGKGZ%2F36Qw%2FbQMrbHMrizsBtLtAJSrVmFHHbHTkLiFKOQfGUyWfQ9wq4g%2F7oM2rZwBh2dfL8vSWJqPYd05OJ8K85ARRR%2BLlGzz6pu1EZZrsAqwcHAZmNkPywxa7MnNYdSpYz9HGPBtdAwCrxZ2aglHMs82nvBaJ1ABm0eO9H0npdx5e9zvBqSwGgPhf4TYalEcMLfl6B%2BKywC4Xock4a%2FtwX77xmIMNUtbxAqkoe0soi9kWxGhM2R%2BZhbZhpV6xqHdIJa5kpUnI6rm3aCkKQOTWde7%2BRS3kKKjJRUPsN86T3QCL43MpQOkUGkeCJVxoH4CqnuJhDzDG3dzDBjqnATotuIi%2FcR2qD%2BGD0twFOu0EAeC0QIWk08THJg2zoe2gi0lPfv1qTt47Z84fgoaWcDBu7PY0Ztf3VJLdDe1c%2Bl6VUGulnjNukw384mZaNSaCmDZXn9J0IVvHsZjS7Vr%2BuEfieLZqL0P8nCGXCESy3sWdEFY5PurzAhGDF7qH7%2FBp5Pnq6PrLe09c4ZWNjBBnySNM2S25wfT%2BgaqsUmf2K3YnEHlMUFiU&X-Amz-Signature=de95a65dccb580323dadaf87d346b32e9e7a674b22621da363d7d7c9d6ed3a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
