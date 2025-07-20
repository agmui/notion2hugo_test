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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJRBRS7%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfZL8JLTIV3MJjsnWI6HvZ4NRm2c7yjlJVTPqRUhpuswIgAWv2BzBOsQMTCHJwMc6buBwIDyz7Nh9NRXl90YCjMiMqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAcb2IkVUa%2BzOzMLXSrcAxhulf%2FuFhu9h2JnhT%2Fl54lggmh0Zc%2BK5G0VgcAJJ%2BWTqMVWY6XmWwZv6A3dpKHfErzN%2BEAHn7%2FsxNHxy8OcCVqyLAbKCaRcps3tThO5oMYZoeOiomwSesiXJXPwdwBOQ%2BPRliudiE5KcOIH25PAK2IXsSG8YR16VOWBtPDVRTpjohF%2Fd2ceY4oG0w0HBF%2Bnz3BB%2F8nl%2BkO8FnRI1TdMs0eWsu7wrfPNzBu9GpWFJVSNPfSa%2FgXQmfS80lp%2BF896dPffPq1GREwfCvpvkDbGqz99knDcuyjtETWwkBNXTYDYvgrANMIba51hgkO75Hiu%2Be6uydU0dqxx05E1ee0FLwYzdm3JyERADYJxSH4BCvNrh4W%2BafiUvbM8iDRaHI4Oll%2BmNOky3ygSvCVrIZStM5Yuw6IYlltfHIZZsumH8GSHsfK6aJXayRb6JM9MW3yN2GKlBhB%2FlwpKPWxHMQEs47sXicefsy7ikwYcdcbbD22w6g%2FZJD2WMZMyYVHc0XdNOA6q3HC1G%2Fr%2F%2B8XyxQpPpYpB3rG9w2vExoHpzVW6J3YnFjDQ0LLTn98cqz7y7Na2jTPzX6NX6GLH%2BEINq%2FDYYVBZWyKEtHJiRNICdY7zos%2BvGuJq6ursN8TMkSDNMMz49MMGOqUBmZ5BE9EIOvEoD9CgK5bhUIJMnLPwH69zdavRhNCXlN4jF6tP9VRimsbt%2F3d4fRDdozkfdQTjn76YL12fvmfnqykUFSw6kLCsbp%2FAWatfzPSESddlp4%2FV%2BDbV%2FTPpiPjDkM4YVjfN4pYZEAdWinUwNyM6VqE3O3hGUH%2BgbOhVv61ytW28aVnGllk5lK9tqcbDXa0g5Ep9YVLfYK1BiBg7KoFoCIeS&X-Amz-Signature=5d3d5f430891e9dd8d1dd77a8eceeec24c4dce6766a3bed810827b6f8454b07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MU7OQH%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUmw5uyUxKtFbC6SRO%2FTcBC268%2F46dNN0LjYFRCh6ZoAiEA1hJ7CVXSPuevj2eyqu8QU61Nhe6SvlelWwX%2FUHgkrVoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAk9tqB3Y1nshIP2QCrcA2riPAfZHWh%2FREfz%2FfkI2SpN4CGAtpw8kMPlmZfdV4%2FE%2BYkLf%2BlBR4IU%2BQimnVENJd2mjD%2FJpmiGCT3Hq99DHzMao2O7OpKc%2F7nH1%2FzeWeNhjSEZwMHXecZgDDipGW0I6QDdsbATnC%2F6DcOU8YXbn70q1uyhL3YKqbT5jvng2hC90KY%2FXVKIGb2mU98DYy8%2FRz5iyKrjZl9H%2FeObH0bYEAupbTUt2CZWWHyUcP1dMIKrnSWvqszkI9IgFbXjDmsnBbQ5LngqE1DNhLZGWP700fcozvY0zTEeW4dzhMLbASBqQxMOSx%2BNl8aN7YSZq0PyekYHgMlPSeZyxEZLUN4Z949H69dz3qxEAJFQxF2fdiZ7jcYPsNzeGrBwJRuerfI6VReD9tFpe5%2Fmk%2F7edgcWKrh%2FFlI3JtwOAI1ldIxoQHofDAJpe0ywdvWNLBniwUyM2PffSxjNAlyvH23sx%2FM9G98no%2FFm9JVwr7jFL5WgtfWGN%2B5NURH2jYXWA9vzvy6bTflhQnLRC%2BaCk%2B%2F%2BW1cGIrVzJTTUZQPkdnKIcE6q3OWX8aaX7ZHHCa8iCExVvCakFldYPh48eebP%2FGhZuDS3tR0HhWtYcwi2c7Jz9C6IzEgqtH25H5D5tdIZcF0QMNaC9cMGOqUB1V1z05JOOQL6XswUDvtQsjjkSEcWQmbaUaW4389GAEM0vhrqxzlkQRcUNXeN91q0LEsWJ1JbzQe5O2JimaEM5ptOgHbDB2z9qgl8VV76HShX5fU0DWLxF8G6bO4dNCxRIlOiXiBXPfqaUQ7HwZUNiKJ5cOooNIh%2BjFz7NKc4BoYwrWEdwnIywelcXjxkul0%2FLwXLwmd7T5ZA1ARZdPWA4e4ZGx66&X-Amz-Signature=2a8c53872a1162c782ad180e79932ddd6c3ffa7e3fb76251b5316124298bad2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
