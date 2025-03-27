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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LLF26IK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvs%2BUsOC8Vx4%2Bs0h7QjCUKpC1kN57k6tMBHW22zbIghAIgRM8o8Oqm8ZG51%2FJlVlyEUNNHO98rWF5aIBkKqwdXE9cq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDG4NjgLrTE4zg%2BY2%2BCrcA0%2Be8owhTJqnOj6d0g9FkoeK%2BiGbzF%2FPEu%2FOMz6u%2BxlsNcR2pR7d5x8Jt1MMXatufdCLxfvJELMfhpVOUIFJ6db4KmXS25X%2FeHfAio3zDNH5pFc9GXcc7wOYw6KS%2FC2TWvSfJFlYwO7ERCWfz1WJ23S4FVrx7JlsdjEfpsDDWvfFt2WVYQ4ofJxbwurks6oXF2x6HH2gKetcVC8KWBO4VOHD%2Bk02JV20ZL8DsoE33ej00P4uhg32ul7EVAyUuxj4xHtregFEvKR7qLR8%2FIfi1CiwQCJ%2FMOuVQHcZLzdk0%2F%2FrJleemkqRxB9twNeUxXoaSJkx5Jk2RrdJP2fOFHWnj7ml6JBnIytZ4Gk3bHwREbQqgOx35CnpNsYB%2F4W1MWCFMj7rWvgoKk%2FSroFJmPoWPPaa5qNVVS2IFtSL9MD5769BAZvfLe5Q9xKYUmVpH47edvMtWYBG3r9a9Lk7GVZ7%2Bbs09vzio4AL5L7TJbBtY3URd6cmVhdad5lu9h7JF3ewH4W6rSi00h62c7Y%2B9DYvTNtmQ7zx35cK%2BGJXSHGxw2JcdLlqFn2sK1mrlLNVkV3dFwTlveZ4skR6XJP5hAIQL8WoGa9xezkKVvGwXf3I%2FE%2FUJFl%2FdTS7ZQN6uFaCMMXok78GOqUBv7PPTIWE4OQV4J61Sg%2Bux3Ym7WwHJct%2F8%2Fq%2B%2BoAvPHqvt8YOuXyLWdjH%2FZbMWyn%2FMPl3hyAfPDuVy5ip1Nef9EamQBhVh29mn%2BxzKzRU58OYpfBht3Z684Z8V25guswkkJKnFdfsMMKJr2T1PhrCZ3Y5W6P4QvhnzPdCGqRobOsSv6z2PsuyQkUcDyxT5QNge62eV996PLkgKwTMRzOhfuvPbwLj&X-Amz-Signature=939c16c757177821a4d40687f629ef4685dd6723eb4bdc0ff64383752fe0e66a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDMQOUME%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE9vPBo4IxXQqPPL5UBlq2aWtbxJny6V2nVXGPppGf8gIhAJbcwy7VfTgzhN%2Fa5rxhKblwEsqmJB6HGz8uRO5d2UGBKv8DCEAQABoMNjM3NDIzMTgzODA1IgwYJ1rykK%2BSJc4J5FEq3ANiXcZIX%2B6lVgfHMZRvzsehnca%2BOziwbYWZDYFmT8teBziSH0Rt2y9piy3rIePdSQXKNAss8W7yFdxdlfmgu27HZdEAIQJYAE8LBxW%2FVCbTF9v32tDuMtjz4%2Brt7mbw8J3%2FN41Pw0Te3k2hXQRPJ8wG2qRMYcq29TzORmytcIf0CV7JZbJV3Ihc2vIHT3V3kLn5eKFdMZuv9OsDupuQrHnNCAieCxZ%2Bs5y9Fz3pYSLrlES%2FeNltreI4n8lDbNAj8Wg1dO%2BvviYzybrTVnQxXNSbGU4ygdvRhdEWJpZFECaozffuDiLKSdlvM9%2BS%2Bw0J9pbu0wdo%2FEcnYTs53gJkDZAri9r0c8TpX9GG1og37GhIcX4gziOKiT7Bhm1LJTabPQmJSFoGZbLM2sqQ45cla27RfmpTSH4X68N1XjP5MhFmjy6GeL6XR4QWQReGGPfoiAZPBFp0BheLQmgHXGNkB1XDpYue47USkwlUU3OJWsqHnyND40jVxi6tB3MjbIKVVv4NpbrMlVafkglcJvFreJGSxR0VN2Lk1gLCkTq2sUIbG6Wfg%2BPnDxrIKDPPoB9XKvoUB3rj7n0X9s46GkLGjNeSkCGvcpzFHNEhe0tdOnScbL01VutioEAJbNLBXTDD55O%2FBjqkAdGIBCYegH51Xt9LTRI5n0u0h3iapnIhTB%2BR4PrS%2BvtdlI7xaw33eeMiWk9YuypN8F8mgbxWykaxAZ%2BD96lRpGoZV%2FDUq8Z4T4pJI1UkidEsM9DjOeV9JVBJAOU%2FuKoNgKq4Mn0Q8dQZjjMIabG%2F244bAUhE5Q%2F46TgCUl6wM9khxXzyScsLESsbI20DmWjti3rWQPWycJAL%2B7BEH5wEu0ICxfUn&X-Amz-Signature=3148c58be95e468ab97ae46311d49f919921dcce2bde81e1b7b892dd6d7fee96&X-Amz-SignedHeaders=host&x-id=GetObject)

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
