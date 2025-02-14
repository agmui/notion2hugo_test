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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLOYQO6Q%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDFD6tp0OfSQUrIqV0gD5Tw7OETsSgmaxumTlOn8IlrmQIhAIJ2Xe36UmbwoE6kGWMF%2B1jNp6c9W0N%2F75wII9iqzim4Kv8DCC0QABoMNjM3NDIzMTgzODA1IgxZbGxnMQvcNr00gegq3APuFzovv5sRWkY6fdHXy%2Fp%2Br3x2FzxyCsjBMeUud3ZymdCN3kGZbl5fVrsqz%2Bw9Hnjr3ix2420jglgULvDKjHuQjyYyX%2Fd9JJeSU1PDMAW4Gj6FCvJAcc9lhq9JUS5G05dJ9Bk%2BwjiBj5b0zE9aRnGcA0A909nZHgKjpsqNecpqYada4Y9O6Ifh2BJfN3iKj3x6sm1cGlnlWXqX8db9LTHQhPvOeN6pz9q2cxkrDhVz4zljdW6AExZP3tQrxy2Y%2BOOW3QNBBXT9v1Ok1zav6rQHTW0nPgahPoUIKhRh8gJGdqcU%2FT%2BeosA6ZGHalRKfecUVHfs1ZZ9GuzYIXpTL%2FiU%2FA6wFcKSKEYSE0FSp437FiZRi5T0tSMJ0R5pbAGmO2OBaJL2ubB6kqK16K0nt9Rob1U72oJg8C2NSFzeUXkiDOc%2F59Leu2sOoY%2FrUDRrLon85YHi6Oft8mheLsQU9b9L0%2FgYQ2ajZPSoyhqksdU60vOZM7UW4yPUUHBbRHc%2Fx2l4DKYR6jvQFmxcn80PWEji71zYH94XWrd9AHiYQFpA2y%2FMdmrTCR%2FXqzlVccva9hQGCkutGrog8d%2B5y%2FwnarD1EaP2I4GMUwE3sDhTBWDFkA%2BL6VCuwDsJO7u3aoTCV6ry9BjqkATFgPXF3dZY%2Bxc8TdTQg3BF52%2BOR%2FfOIOYUHAMLG9WQGHqxlbnFplV7OwoCwAxcf4UVrW6Czj3Ib6%2F0xqvwtxPHdQDhRWc%2FC6640y7B2AVsxoE72rWSav0j0u%2FGltbG7bFxXl8ney6fUGVg86d60FFZiT93%2BQkn23Xaaqm0w9%2F2SWzx161Xg0hiFlLrWXufvzM1pLRstZb8%2FCmuhmV6FnocaAec0&X-Amz-Signature=05178a91dec49aad7a46a0dd5907345199b41f9e52d81721f753499d30fca399&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZRS4AB7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIEiiRBZa29kveA1BriqyA%2F%2FyK7pBcMv0eJGujEHtW7T3AiEA2cY06KEl4lyVhHtQqAYTIppo%2BjomAk3xic8JBZk89%2B0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKMPJaddsI3gGuG%2FZyrcA%2FellK1M3dF3UaTtfuGcI8QzTeN5TyQe36ilH%2FwoJpYrtcLskxpirdmZtqDPuvSKgwlv7sTu1J8F22AxEmOJctgK75y4IvSaPdoXZOvh2nRYNxUBF3a6ipTdJAcrZgbFydKuii0PztlmtuNxr%2BhNQGL3HYI3TTGOlzygMAMGBtqoEj1aKO1ZFifNFnlwn4cSlx5PGSRyxh%2FQvOA3l3PRZRUNDEve3aQpbpSmjZeiQHNg1DSNkNGfvuk0wnjQH7cmWbOF236xdzmrb2AP5ug9dKbpazwbyDWdbkePu%2FjfPBZ9hXBRG7R24g6leEGbDO82qMybwIZXLNETO%2F3XRvNHUwkuupH90mzwhWcuN9wZAgfn%2F7KIaV0Q66OfKcvXXf%2B9znOTTNMoDR6gRUJJXMDmtzEIgwASNrFTudQUyU0jhti75nuswnSvk4Ou%2FtUeJYP1f68ncvDN3cKWKn49AvNwOxYBuBt2eSw%2F%2FHRdKEeZaVQoS0BVeOpjD%2FkW2lo2zbZ8OmghPFgwdXu3RBsKw%2F13TQ2h%2FvXhs2RgIEXL65KHSgxM1vXwranB6UcH8zibqXnkBB%2Fz4pE3AnAseYWy%2B7i97nQkuk8ZTGKKK7wVs%2BTusF1ju99mNmOS3G9IteQ4MPzqvL0GOqUBNuVwfllVW6OlEWGBb12pvnbQrgpB9%2BugNW4b2QIkaSwib6TEAihDB2pWkFEKXA%2BgVAG5zu5RXiGdkDEJVnTm40OJdXXl%2B6N7P6DfsdFqYO%2BkKs86Z1naWW9Jq3Lt81WNUT%2F%2F5rAvwVoF9yc3F94PRirZcUZb3FbJkJvWhwga7uG4vyUSUA1Sg9zjsvHrxWjQHsnNVbz9wCehNIAQvFYB6KuiQhDU&X-Amz-Signature=77ef41c6e6e53b7052141beed9eff4e897b0c3d61e46fdb522baf6a50faf22f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
