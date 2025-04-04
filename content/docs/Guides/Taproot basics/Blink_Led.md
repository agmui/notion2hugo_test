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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJT6SM6W%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjGjoUsjfwELBxAkPpshzeH%2BLfzrdXxk0G6dsM%2FoVjbwIhAPrZw87GTWfFKcHhEAIY11TSoQl6dX7YHojy%2FZ7oA0d9KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyX00JcDYXCoTR2ngIq3AOvsn7HXUXZch9OWBwx1YLBRHFOxY6oVgSIaxburQsf%2Fjub909VphXEEANdpT%2FdpjQS4KabrYQVjSbeJQDdNFU%2BsmqeLJnbfqCUbnG1IKZLjolHnAEUrg0jg1OZmkLdpasqHJyYr3XRgIaxw9M9eO5p0heH93n5D4JWVl4iukiy0H2N4%2FrDjcFAJdC2Ra3upUW7%2FWagp%2FhUzDWNKDCH7SwLCYYlVFFF14WTczY1Un5u7zAPWU2du1pNVNJWqb2I7rRHuYz7eQZzk3GZj2jNJXHO%2FS%2FQZfbj183pm%2BDlUIOY8nwFqqFd0Wf6VkBDf5a3Q4t0msQwM2UIDwHWXHCB60dgF5JGXiGZWzsxJXfZhE4aTICJ%2FJn3WFkt8BhiXzxiw1FDvaEvNAfLA1kubTcHC9eYxJkfoK7YNXZeXD5TGi1pXfe9m1MkaJ7TJVppDxl6io99v6%2FYtViM7y89Y7%2FFOO4uRDRHJHzwteUOeeq7PNRIqR0uLcBAmyZuSVJfyhTO%2Bd8H81AILtkpiZRB9PF%2F0y1Zj2D83dscAJ4ykjoU7Xz0un3i%2BaygJURhhKExc%2F4JsaRSNX1zL7t%2FoR0aKgBb7BbYgAVJTt5RpRU5xu6qpc%2BqIp%2BmCTfhRwzPsU5%2BwzCIxr2%2FBjqkARTOg3R48IIk1GgCaEkfLBEbU2vfZCUUKkb3PdTfpBFNdowLi4D3son6z9TvAwQBhax6qY4QP4XougRsHLqg%2FjIun6GO70a2srUT4e1oTj%2Be9SuS9%2F0%2B4OyCr%2Fkp4Ent7mosJmGQ9ADsa0VMlli4mZA%2FfZO7OQAUdTG0%2BW4EVNWGNPVaXDhwt%2Fc0bjM52V%2BpsWIs%2B7x6osCROkZZhkm4vOcJNL8e&X-Amz-Signature=ed2604b472c442343328fc7b6f8e44f07e3b5740b8413a9d4310b58d5e09def0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMYE7AEU%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv7pZr3WCUwOpTdbcXzCTWNuHamnP2Pw11dyDV170uhAIhALzXsx%2B8uICe79ttGXKQglUjqOy4JBWb3Z8CpZeo3RngKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BrfZ8G0w13fLPONEq3APxLjW23gTXFKdWyWVRqlIBFDip9JURnRIlnOfvZKlVFlxyT5zm43u9MWk3pyTnKA0FxRe5ChbETxwB0MfPIr1Ho4Tmkjo0qfZAMipS5mkT%2BOYYLK1ceBSAW3x%2B7De9%2FTUwCQfeYqL%2BLTltw9GK1IhlFkCP6%2FQ8IkE6UNkFIHKwzDxtG099C1pBz2v7tX%2BzSyvgtLB8V3HFVZQDX%2F5PKYFJHOHcWdqHA%2Fp7UKWzR8p%2BwI%2FXC%2FJwAdithelw1nWegZmEk5usqaGLiukPRu0QhU%2FsmXfm7lBBJgPnSrTwMalgjQT4RArsHknraVaXudJsRmpOxPAcPIEIb1uGUNUKc0cJCOav33uoc8U%2FRi74%2Femzlla9YGSqe99EJTApyWN%2B%2FeVWsthPWryZF0mPNnex%2F2Eb5HJ86quqp2cYMjXIR0dgBo3bQo3lxGYXyE2Gvh7NIU3gZpicG34y%2BllSYrEx%2BdxAiEwPJFEEtFykJZNa7TqwkuDoq0CXxCUIK%2FbL%2FyvCGFOmU9qYA%2FxxfOXLGLUxNwStWypaOrqmDpGlOhW3kpZcWz0b90LcpJRxcMPi1YvNQyN8Z1u%2BsUpqGLf%2BtSO9vBsEd2xJxWvAhoBRwD%2F1Er2ejRS4HZ5z9dOhBJsf0TDmxb2%2FBjqkAbwHTKxl34Z0%2B4isdHxxpb1aPk6R9iEeAf7GNq4xbRf2Vq5DnVdwyR9JFRDFHALd3%2FnHWDWeOjWTFqUybA2PoxTV1BiZIJ5GpgCZR5a3MzTQm%2FEmGxegxNA9YTJY7bi0frTQSBruYwNMN5Mcb0JzVFj7u10ORWuaj8Hm2eQt7sxhmFNV%2FqVLQG3kgrSAZriUQt13T8OZYz8vGRt2%2FejiuJp8liOC&X-Amz-Signature=5a098996820cd2548ab2abbcfcb392e26182be7d9ee6110379a8b60c73cb3675&X-Amz-SignedHeaders=host&x-id=GetObject)

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
