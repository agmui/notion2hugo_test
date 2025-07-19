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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4Q2L3QA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdwgl9evwV6nkyKlp2XYxanVV%2BD9bGfFrZ07Kie6XrSAiBRXHeVNnxEiMNLU8qbagy3D6cGWM5ovsi7NIj%2FFBulhiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMShjjhpGMbEkmU1zEKtwDQ%2FyIjm196CvDw%2FGjCcJJv8RmIIVcK8nIYzIHE88BmvMrqUjHuC5j4mqXFBEFnbc5frsAw1Pix2kePiosumTPzFe%2B9TjcUuz8Ep27fMi2nGMmX7Z5DBjuSPtBHq6B7dHCoYd8p3F2ODuL1YjR2KWgZjAu0g3fdG%2BhIVNJPICypINiGL9Q7gK83QEQc%2Ba6sW%2BGmXdS7G0W151nhx3feTpHZw5f1MIIqyafUcG2Wa7pk8MWyzErZx1x%2Bkc4iaPon1N69ZvQBG2S0ZSUOTQxbpMJlcc6FaAC1pch89Q2QXzTNNhzg9MPZkDpts4DZyQC%2BEQlngn7uVjnThSxobkhyVSIC6jrq3Kvd4k8ZRdf%2BSky%2B2Q50UZM%2FiTJItril61ORchXS%2F0uJz4A918wKqOp%2FWXo2dZk%2BpZ5c3xR6LX1HvufJlFtIbyTNH3E%2B%2FxHQS2W2JkJaVb8aKryOTewTdtsxrzEIBEPHacpf5822Ce21U3l3J9wkCTosd9IewExLzRYn7bSSupwTH%2B8JVmKFGGfNZluuEofn3Rm%2BZbnOXPY87gqfHr5ZwIvDhM9o1WNk%2Fw3SAQTeoBdDeRfYDf8dipY05p715UFyxfnrFYKPXYx%2By1n7cMRgj3IpuhZs%2FoisvQw%2F8TswwY6pgFe%2F73tMMYOLVNHBtwc8zZZwFbsohy%2BcSZqV4yF3Om%2BH6%2B7ZIGly1h1HFID1ewMPgB3kt%2F44tHwOuaaiSQDeHQU4Hj6F%2FWWTOwAjuFvMpYdn%2BfXzmljCXmx9buB2bBm%2FRKVWPCSpxXzhUenOPAFpcN0%2F6vB8stw%2FdBXdp80TM9RGDnEZkARkRmVlj0KuO4pxxeVt94Y6OMwgEFqkr5wC25Gdg526rVA&X-Amz-Signature=034a7f2068fbde61cf24f6793235581c3fa89d02c5f48b358c65f796c5467e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXMNZ652%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi951qDhvaNJk8jYkvEoBVfUAP%2FSha9HVi2yOIYbzXqAIgfwyOBnlkZHuhvPFxf0kd0W1nwhiUUew%2B6A5dNRSI5eYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMVuU1O9A62Y8qhICSrcA5tp8Z%2FNu5hdlrUXOI7%2BiJ95YB97bbRwaMQIYBFJZskiENwdpAPwz1YgiB7RdrjHPE6WtktQShH0ee%2BmTk1qEzQUenRsSTOjB7dWGvFGCL54Rf0GHSfTw7u%2BMLAwTDUF0cc7bktMjkejzUqS9pK0CN0gj%2BEygdqM66132F0rIJcykIn77g8vfEyIXA6IuY%2BlszXhp9FzqA85oPZGm0qpcYToisZvJs8tEP%2FAFq4E4fbVk2AmU6vJQjzTGUI%2BXdmi1yzd9tf4SP7Or83Cyx5lPKVAxScBdZyRsDPHV7qkIaDvWIvB1GtoB2nhnUxLYY3XFYxGG%2FzTg4riyhOIerdKaUgQyqB0Z4rdazIC4g7XunS8FinjeHI0516U1uvQCchuyi2URDBaaVkKZJa6hqIX35VV8D4Xn2Gbj2xIxEwlrGqRGjE7HACzw5VPcLMB1kvUAmbMeRYMB3j49%2BQd2%2BHPv0uNmMTeccMwwnShEUQPEaSkcHNb04MW2zoYWKRlFvObx7dUxA0TKNmnjHwIP6AQdEt%2BJkpCPx%2BQSU0lXHZU9hotzb45qJUGqEXETWHkqh4%2Bs6JrCXIo63FSJ4UiyX7L5O1ObWNBas%2F3CIc%2F8CEyHcyhTYZDqi6RLIfdgsXjMPnF7MMGOqUBpPZvR7309eg4n64Go0JXL7of1PjQBRdhhUlKEMWgA%2F34cD6sLyVhf7ShHrcOyjyH7xXRfqJ5cm4c31h7RfMaQRBxoqX8hXRIZNDkxaEfUSjiIkfO5vXPA%2F%2F5yYTN4y2rLFh4uAuWqz83xCd5wmPH7JEmyVBoVtBonV1jmyXylcg3NNeFgMUUXk8vIIZcB%2FESwyy%2BJ8Li0mP69gGEsPXeTC2IdC4E&X-Amz-Signature=140903b6e5757d960869a6d765d877d62dab7c7b542fb2e2a5328a7d9237e3d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
