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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QVPHXYU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0svD9v0wHs3AqoGbpL%2FXfflfhArceXamRZG04ZrBa%2BAiB9TRcpLJZie%2BhvHRAwRqnhirmpxe89ZzcEfVkK2tpK8iqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPdSMD4tql03pBApOKtwD86ot5NsJnzrU8yKHwAUl4BAzwM2%2Bp5t4JHVurI67NJMCe5K5CYiMjGWSQaDnjBL8J%2FwRxZgFwvlPgInYCLC1o2GxGU7kTUFGqmq3k4jBuMjwLpAQzgi2ZJDsNqzqJyNkYN5V0gAjuikH1s%2F98Ib7Ww%2BdCbqurXf2oIK7PhT3x%2BrjWHeBeuVZdsYE1S5ym6WXfYVgaHCCOO5sLStGWVzhTG3NyVeeHuIWwGN1iY9GPDYNK1UeNFkM4YC3UqEJvbzFQKuomEGKFQ2kBJs7D62L23D2U%2BGlCtSxZ7QcSZ76XkgvbQ6w%2F9s%2FXjzCzsh5YMap3%2F0Qqti6t7sE3AsLI5gWI9L2AGTucfbgNrrS7TJ7fqDFaLUXk4Jf1YfE1z5wrt9CD6LXxn5cFsOu0Bko2Jv0KvrbT9MQiQvXoHhWp6evjd0mS2IS3Tqj%2FHQIxfDhBrDVEGpeJypK65JSlazy4okYmUza2ENFjer%2Bp3j%2BUOHTObhV%2BYCargRKS99sPFncRNR1hmpgWUVHtH27uYe5hO%2FbD3SNovkz5GINx2L27zk9cbJqn3b%2BWQWNeM%2BEz7E9odtOJbS4icpQoCrlZxKOL4Yb5mO0YyEsgxP4ZG1%2BZ03rL1GfHQjyJa7nW4JgHb4wxcXswwY6pgGZIT15u2pL4CB958R%2FFVXw8wwyE3mAx3o%2FIn%2B0aq7TWvkvchqwHbMFKU1kwkXwmgjDElU6nj62ipJWFYnZ46VZieTfTPNIgE8hwQV9l1XDuH6NomLxD7VlAIZPz%2BCrbXXOREvQU3uX24sTu1oD%2FnzLbdPIBQ6yKEEfUZH6oFYwYe6uwziCQSLXaeubOxjz947qlnpoZGlpFeMmYDoyUyIhR4kL46tR&X-Amz-Signature=80b5d320f48c09a3ba6aacde1aefcb24cdc79d71f0af3927a5c79bf286229bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UEWAPS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHWksYH0uhUTCXmgVfXiGYbZjQeIGzmUpVzTjmr8sf6AiEA0zsXxmWaw5bgStXy3JBsoLbZV1BRW7gfebxIuA%2BzIaAqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xxjxRI%2F2iQTWS3ircA84p%2FONxcpAZDGhLoRAGv43MQcdCrlg6bwj26nkedSvs7pCnQTVMHDK4WvkHYF7eqJlD%2FZF%2FW%2BcFCquSvpgVlqUd4UPhn3eWMZtwDahsaRa0CdpVQEu%2FXm5VioUH0S7ziekxNntfTzMYqdhNyhkceDgAUQngdksY3VN8SDlZ%2B90LnfEbdhGJOwO3lfWBZ%2BzzVJgC0n22J4fe%2FgadIs8QK6jv5ezudO5WfapKDZ%2BJStRFnRvPsmCNMEtmM68XdUMjJxz0RAiNrJTnGvU42aza6UAsCa975GFL3yswlRfkdsU4aJxefXQQPlorKzqUfOah8MonlHOMtjoxj6hkulLoYRMR%2B0jOC6Q%2FVyYafd7y5okQDjfM%2BMBCWYIkv%2FkrRtAy5MeEds3XK5qs3JL5dEZCevHZKtVGQBzH%2FAawF6yYeKtPyDjHmP7qDhlB6YbxUcVASpvtNBRe2FUiqAzNmYRfcoCN5OW23wCK12FvI8E55x9KstKUwaQ6o5I2XxjkDxXpt4sRTcvzWZt%2Fe5HHu1qwtCpkc2l3wCTH533%2FkUihorK%2B5pL1bXsW1xeOMqIesjokrRpiZ8hqCQnieB%2FAD1KsVxqEtIzPjNmPleZwPQdNY3rmQC%2BXoZeu71rWJU%2FqMKbF7MMGOqUBw4OArVdF%2BEx%2BBVwRpsMJ7fpZ4dq%2F%2FQpw2ha6t17CJZuXF%2BsT8v8UXHDvgbs0VwtGn306lfmQXmgtfHB4gX5cIE%2BGs93i4lt%2FFXsM1nXRPT1H%2FLwOlVBbA6%2BiTAJRbNNo3samef0yvN0pgmDFOhJjLrGqlvQNYPFM%2BgcKQJRlWMstxboRTm3tzmDLEJUNEAavIzNoluTXg9R6cYtQ4m5nTevYXzXT&X-Amz-Signature=5514495cdbd1979e3282eaeef062bbf2d6cbbe896392b52e7e139fc3924d030b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
