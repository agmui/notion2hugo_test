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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULOPIAT%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMerjMegCr9S6oQI0JKC239gNSneSi2TVfpvyoVX%2BpCAIgaedQFGVbsuM5krjAocFHJwiBP8RQpByEe0uamlxk%2FVAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNVJ1cyzCZZubYkNKCrcA12kCdgTZLhmVVaN2di%2FHjeIoTKTala8La1aXLEy67PDpuA6W5jTYolsksAMXZgfzbx6%2Bi72nN1os9FnNi30chqUu7XDpNfgrZ7VoUbecex6lx8q5Fz3jjbfwV0c9bSpMXfbi2okO0atXPT1vfyQNz%2FEMH%2FBlkRQ%2FB4IE2v8NShILQIRusOi99XaMLyg6sX1cTZLhxA%2FDoO9Mukb3umcX2XuD5nz67wtRi8v4tnTQMhlUjSitz5h0GbRBj8SQuMMFy8R6hMuoFmzL17dp5Rs%2BSWf2L%2B2P4L853nw26rUcr2bleYezRMffryku22L6TDXv0PGwYqHwtCyPP0jfxR%2BbwFNSZ0RjFh%2F%2FuPYgafPBHnmhY7PjWcj5QqXoSBkJKB%2FFfbY6O0XcQknndQqqTnyhCikS4V3BxAS4NdP1lf0rXPxJwPVRJh%2FYdBs4qXjelSGfEP3k7CWRP4gZvsn8GfUo6zq8vqotQ%2BG2W7YJGJy1RCr%2FAd0kfR91oF%2BPqZUAHNvfh7rWolhTK3HqufH4bXM8sRDFOEh0x8qhV0u2bb94wVS%2FOwatOOD4RGtC2OabLKNTT9OPJL96bIgnBml2xIhQkGJWmG3PDji8vZ0UL%2F%2FJ7pZL11HhhJXAtfpXO2pMLCPp74GOqUB5%2BuKc%2FHzB5EMsi7LzKbWppe57qHXlIMBYYcqMJExHVmxRSoG866TRQNxUzzDoLrMnmTk%2B%2BY9mko9hZX%2FG6jUEbl35UEpaO52CPdZwn%2FpNyjtM7EinaUALOCGSJOJAlzt4pQW%2FP2jMSlFXGt6%2FGqNutokoAgPdIvpzjTa6YkkVr4CyOEEgvDXHaIMVCMoGDnwJV3GrB2FeN5yKR%2Br%2FvfgcNYTg%2B0w&X-Amz-Signature=60601c560b3193a3c7a0c042cd7971cdcf442eef6f47af447632d986215e0f52&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRIF6MVH%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T170719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD1o4mkzOkbFUNGP%2BXgs5lJ%2FAk7R0nknH0W2Q316l%2FOAIhAOWJlwgTYJ7kv0beu0YFZbuKj7KDKpKYvJBsUqvBoxZXKv8DCDEQABoMNjM3NDIzMTgzODA1IgweXtF9wJg7Obh4yZwq3APYZnU%2B1r6Zff2AKRhn50w2Bf%2BZwwBAgckNDOwQvMCAOmLWiQU4VaTL7vA2BgFBbRSbLfwgH%2BcWfJaa6rcigrrJD%2B%2FlKb5i%2BzAAFQ19RakvAyUa7ABo35koZekdEqysKoVKOD1SGqI9nkfuVjX3SzPkD4MWtk%2F6pAU8bBZHVwUR21FWKZCsItG2zYhRd9Q%2BwgqPK0yszPvVpKHbrirqMPpz4N73FFLt%2Fy%2FeAOtCjgsjpFSvlj38hx%2BxwZZf%2BU%2FIU2CxRK4%2B8pBeylbfIvGNnq4zTT0ZnqCVqYN%2FG0OuxQxdnq1iG2Kh7qTn3T34w8E6%2Fc0ocxicsHjgt4r0sDcWLtAhneNA%2FCks%2BiCMqHLE%2F05MyGMcKJYi3bHHAUBUzEmXKvmGqck4elh93GrBQPe%2BUEcw%2FkiKL0GNeglPnii5e5kaK7%2FqSAH5OSi6BdzEZKZJxHR7wQIdQdUVlju42UAZEWwY%2B39E5f44%2BFbr0G6rt8PomvZlm5lgieK0oQeohnIIRkvsgIGMVlJJhfrgD105Z9bbE3okNcj9zDwciyufS0J%2F0hFpBAtk69gmd%2Fq33dKYgiLA1APVe43xL%2FPvfw3aR5moQja5rhByFTx%2FyL6%2B5OjstnSaX1%2F3aGAOHydeyTCij6e%2BBjqkATBUsHIBm9llwEzR3qQu0jg7A0LR3m%2FM7eiWDOkv6iNrTiN9m%2FYN%2BoKnpgQrJZupvpxDXjoaJL89bH1cI%2BrzwynQ0VDPxNgJQM%2B7RBf6s589dw7NroHSL4LVoZB1EVBH%2B%2Fr6QgxjGHHJojiAjOOhDa19zZqy5ZmsXJlgj4qRnDJoqMPxKNKotGVMtxyk8pWMYa8CbNh2YcgEp23BG%2FEOJI1fAH2h&X-Amz-Signature=e0f22609a05cf567b6538e354641bb52f5d77b5aea93d4d828de538e7bdd9deb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
