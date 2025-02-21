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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433BZ3TO%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMAk7i9Dfce9plNw8yL%2BfMrH1j9w17C%2FOfwd9TgwomGAiEAwK%2F08Msnrxl6QUTGpO%2Fl%2Bx5ZjsKTSEN0TRcAPuDJiD4qiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMggk1e7vUubgabEAircAyTvIpn%2FiH2Lg8XTCgXdniUam4WUebjkX6nQ0i1D%2BKW8Ag5tkhdfeL9gHMKeSM6UmS9DOrohBSXDkW1XBfDlr3w%2FIkpCak0XcAg2CaR%2BY5zMDxUw2JJzUaJlA6f2vvOomi77YpZUeXqphW6k4OfBMHAEQlTtW72IV3zEtVbZJFsl%2BbSCR338EpY4%2FW6L7qj0V8dwbfaj3JMwdkb59gA9HTSshctnrQzCKBgxrnfbeFcfi0NcLnXxsWkhu3Zk8Yw%2BrpYaoMHRjGczFgDqcyLrZHKTo%2FvJELxTLgcipemjIEW5zpMaJqRgo7ZDGf8OoDV4XqKv6WQTvZWMxEAJfc%2FfStLu3AwwyXmuSeO%2BT8o0AwGK62OFSYHIO%2FrpKQOL801fTS%2Br2aHO5G6UijYv6JR6LRHdF8gqfoRbT7J53KQzznebC%2F30NsBGpWuKo0%2BEk8B8Rnroid3mHndJ21gmnvWAlGYUKqTdZg4QyLjxsP4Iv4xoEtrfF4zy5xqBuSiQcDYcttlAlvajOq16UDccVpas65jna6qGXpNvsZbue9o2PQ78p0r7O9O1lYtzDq5QsgI1%2FCSbUV7G3AtXAoMiOh7YsnWFuAYZP3A0VS%2BpIVP5Ap7nclCDFkzu7JXuQhtwMOrK370GOqUB%2FGgvIGb2ixLIdw1uxcy9a6w75gnlJv7n5zq9PoOXwv5W3XyzcJ8Rulc%2BUutEAsNGtc8oDpR%2BvIq%2BgnwuVjS51OjeeItlQr7zFWviLSlfnZ7Fqmb8Tg%2FgghJSi6mxlzpCK%2BrxAk44Nmypp00TIjZXN%2FHCBfeNLjOLKgG9sXREd46w5foGuKm33sDtU6SkosnZfonJ8WbTP9V6W3I50rTUm1zsoYe4&X-Amz-Signature=a72b72768917cd23234735eb9784a8cb86e0fb169ef6743c680c4328fd407bbc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNHULWNS%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9v5igHjCNQ0hrKYgQZKtKruh2xsT0UoPN9NEch7EhLAIhALsIyvOpkMzwuP6%2FfZLjsx%2B%2BJxhnif9NuUKm8sxbeSJqKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNMZdekK9oDfqHXHgq3AMfeP6M%2BfSgpv%2F8r72ImywOIHASRoQQPF3l3CS2EKt0z2WiHwR5JW4XBWBREH9HuiSNDqasjYcZdhkEK7F9dBwiVntaUuak4ROuNAQoRDzn8rjW7iO0YKfLqXPdXLWa597gfRltqPCUFUtpfRpnPKcffp8jazwkahk45Do9ULbmitIqRlevoxfl4PJCEQ%2BmN5jkQDvU%2FdSXjdPhPdio%2FhF2hotKII%2FljvHvedB8wEqoLtM%2B2Yv6ny%2FWpC5iE%2F9jO9jVd6Bh0SypftD45iCu6WF67Vqaw8bG1UvZUHTBoRUg1X8l%2FHoAYaLKtOsHJSwpiobdsnC%2BIzLtZ1cRqIYmdRKbHC70u9o8JVdE7bxivUvpe0auPlSxnIDV6eeQsNRYy39cbc1tnU6td4Pm3uJEaYL2QXGp9H6Y5RYaf0VHtenj%2BmT4RZviuAYX1k%2Fdo0KA2xdFgwPoj8haQmRLkioefADHlGkHmjEzcyzQC6EzozeVln84mExJNxsFxdZvYv26mSF7vElr38bzXQhpeQUeHLTtg7MDXIa3GBOqKreV9LEWhkhqHjhsuBqtCCq%2F4pR1ZCYc8hhnaIT49QNF5SkiVfmfFaawgKPJM1GuYlo4oMZKcJUfaCUmp%2BPpd3DrKzD0yt%2B9BjqkAR%2BFNL68lv6VLMNit7Q1qJ3p0T5U0RACEkVXbTSzvs05Z7pZWnTuY6n99l9bIZ90wuAuWto1JkfJvU6sGfdzDg6FrSNqsBNXLuPpU3cI%2FaEQXtxEqD7ydUxq6jI%2FLrscjEWebpUEAOg3e2WdmxJayUEp47qBD1Ab0Z2rXgCNx0DfCQTA38wXCplXOEsmjOAjCxdg546883OTFpgtPoxv65dOFw6d&X-Amz-Signature=3a4167ee7085d65d577b55a1c27562561ff4c4a0262927aa5ee3396d2282565a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
