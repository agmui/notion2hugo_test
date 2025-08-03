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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRIDEA2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMQ2A07vQ3wn%2F4jSqyGZtUsHCrP%2BHg0QJSNX5U%2FfYufAIhAKt9ZXDLxjAb6XHX%2FZSbkaIGqlaX719PXLFxQWtmUg75Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzSGKjPf5LThcMkg7cq3AMMB%2F%2FDROCQ9ZWZfkUke2W557Sp03U3%2F5slM6pVtSbiPvOl%2FIgS7pDhZG8zySxZ4Dz55cQHYFoUHMlG1XwPCfYVDd8JwZj1SAcMczGdtDTUZXx6B7X8igOPcEwFm1N7Y0bm8wDLRArNIsV%2BPT311poWEDv5tZiYDd%2F33mexX0xGy4YsvSHHPO%2FDhWAZb9LjdqYzEhgwcCJaIUp5F%2B0eSqnKY99%2FH14G7Iu870x3Fgla6P0ChB0G0zkf65%2F6r6YpIYCMnvgW5u6yusrUf%2F3Fwa0vqYCTrUQ3YApafVfg5pKEzZFUFnp%2F8%2BtS7fhvmW5frYQyQfF4eMR%2B%2BdVWaF7aA9g8H%2Fv%2Bie7nTiTBpKk3JHS%2BXbeBwDRvjOpGmDzqjcBreDsN9Oi%2FxXMRP4tpn67KgGG5ocZmYfbrzQqHP2K6eNoU34QgWghE45piuuePyvQr4HzEoKMvkNFeEUS3uOk2FyMxddWtLG13aaVGfO4HHsUYd4fjQectoZar5i3T%2FShlrSYxeoavQu4xieApfNhBnEOuQTIr6u%2FYhcou8lIU%2BS5QyT5lGPE8wwPsj%2BbntyIKXR1t63QN857kAFXyK83bGW%2FBDqJyJ2hG2Gv%2B%2BNQrQKZcC7DCrLfEWdCx%2FBC1JDDZ2b7EBjqkAdCiLs0WzH9aip7i5LmKk3gxnltfbf6cttur%2FC0QRZhrK6V%2FHr%2BuHTdNCAk1P8e1%2FTsq0H7zJNOk59H5U8tanry1lwtE%2BshWaIR0d9Kasmed58lKN%2FdfVh%2FYXQjUnQQmVp91rXzmj2G5wcOufAYsdEu5%2FyXpF%2FD7qHv%2Bvvf4SGe2SMdZ3jvQTZIHSVcmaMJU2%2BzRFOwUWCgKmx365dwNSgn3PK0F&X-Amz-Signature=c8b03020bcbf694539db6f51e4bb48e562f1fb34ce146ad7491495591b66effa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGI3B5X%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHjAMiXzjiPxbTRwIIMY5Ks1ZLJFbSjFys0drS%2F3JqPNAiEA5R3zACi8Viy1Oy3rskI8Yw0O5xX1hPnPDbhsDbWfxG4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDHcd9GHLLigsQlfcUCrcA%2B1rsHvyXGWun7WgBX9B4wBZvdykMCO%2FAb5fE0yH%2FDuTeH0yQ4%2BNfMUSsksL0aILsH4rjOsDep7Bt0qontQqmJqgA1eVL2gC9nmJk5ajRcxUNRyZM%2F7ntES91uJ3nqWXjDG0Jokqs0GGuDKCYD4B4VeLLGu0eEFgb5Z5lL8fHs7ztKvjm29fVmKUED0BAI64k9F99C4jhZXDb%2BbuqntlgHoXFGAAJ4t5TfL7Xjfa8ro%2Fbz%2FMcSfxJK6iMXsSjuIZrE5wFasMygJsFmTu7zKottmJuh0dgmLufZ56TNAsZR0jyn9qydfUIQzds5ayIjLByXgsycHiQG3rdJGBCYFRGBtpXUZHTvORlUahdS48uacOz2XdWVUY8AQqJd0iQlZ2mAJnNFsgQPnUgLnmJTJjV7iwdrDb64hI7qVyHADCJx2ZwukCf61MOe6RuMMYNrbV%2Bjd7dlR8VBHqct1JRwRN7cUpKSxigx03rHwfdYjAPnqmU3ayZ5yQv2aBmjENXk1LNjY2cMBeNoPCXbTcAq9vJ6Z51Ddpk4jTH4kYk9qmCx2yPSk4lFLpou1UvKGRz%2FBIovDN98NEK5Gw5%2BqXQLmQrjpuJvU1G9WJPWN8yfdH%2F2Tj%2FF4o4%2F4w%2B2COPwTUMM3ZvsQGOqUB70Mk12RGlVY5rKVq4DR6cvd2avRoHL63bLf8Re5jMi9%2FjF33TW4oX9hws0UxbIl5FvnhODQJLXB2VOmEbryA5z6JcZAPvl91eidJo4RX%2B4gwR935QEJBUAB7AW4hymbK%2Frs0neWXJRd%2BnUpLGz0sSkEbKlYyFFIwN0yCg0q3HO%2FxYqwrANH67m6GGvN%2BzIyz38X7vJuBZG%2F%2Be6hIKC%2FOtf1X3KMf&X-Amz-Signature=33016cf95a6f04a4e533029a362637439f931aee7368fb8126656ce9baf7a67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
