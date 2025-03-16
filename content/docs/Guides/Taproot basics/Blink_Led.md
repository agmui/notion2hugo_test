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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F5HL7HK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbu%2BB9%2BAezUYAWVvnMg2MZBRnZgUCc9KamoOOHpc5xtAiAwKcJUXbPxoAueuB%2FhwIcuHH%2Bc8OORnkBcvPTLmcP%2Bdir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMLfPPmi6EzCyG%2BGPkKtwDGwwXmEVePCkYtXpAp5iK4vN27eRCVY9DSBk7FJDEkLGNyVR3z1BY8vabRk91MHeY3HEouFTBwhlWGdyT%2FiCbfTygAXCMXUrU5eDmK4cm5Wz%2FNWAMjKlRneK95wTB%2B1oeHzoEvwYgs7oLDssPBbTmmAOrh88fJWirW9vgxjdvJao0RzoyhK7LiMR3LOufDJEo1U1FpiSpIl%2F8Yswt%2FTijdW1cbRl%2BIakVsd4I2TnKn4Z0262JLkXhAV8jVLlaMUsveZ2nCCgYH29MIEEtFhr0ghcCiZ6hF7kkRC6RDNSuiscL0TWxZVdnq8zhQOmUydpE3mkMwT4w4iC26yceWWizaPpi4aA9zFeyz9jIDfFMaIWPQAw1j%2B3to7p47ITyZCJ13dywNZJ1mbePqQovCgLXGyL%2BicfbAF27F%2BvMfULKTildRrD5qx61OHH6mx7Yfan7OMv2eb9t5ubm7yCoY0Bci9GJVktsJvdThNIepEGtZtI9UnoQi3tpkSse46EFd7bQShtFi556xMCIwXmZ1BDFpY%2BHoh%2B%2F789ppIQmV6tGPQD6BjK2UevnNGb7ylLgseyNWVQA%2FeGMyAmv4xPt4SGjgKrfUGzRFQCGvj0KgPpLWDTOyOPahnAJLcQB4XcwguvZvgY6pgGb0NiBNp9cvtiCCogfMNvlIU2LDCwmrQVmmj%2BrG4u0SpBLOkPsS8ZyC7lXAGc1%2BTEjra53VbeP%2BWvKGg47AwyaCViEleQFKATz1%2FC7PXOFxRHhe%2BpTqrBaijatMy3pFVmoU2z5JAMCl%2BGa1GvfzUHbEKtLn%2FGPZ3m29LRPpHen%2FsvC75focDn0Z%2BXOqZbk8%2FceuIaf3v3%2FAjwloHQYMQZeVIiyPKVJ&X-Amz-Signature=4cc2de0bc9fb1a5b093e2a379ef8c9473ed779f990af2d7c2125da27b03f7f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674IQIK3S%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYTNri5WGw%2FgvGA67bGPc0p87Njr8YlY0xVa%2Fi%2FXVLbgIhAO6o4Ui5jjjrPpjG02kJD7JVAemWitTBnnOdin366u%2B0Kv8DCCgQABoMNjM3NDIzMTgzODA1IgwLm31d13rlmeiSLYYq3APQyAGwmdi%2FatuR7ZmG73t4jkoAmJ4pF63H54bfA7w9oybx%2B%2FI%2F7wWFo0qeMaZnMtl7jzjTZ2ruizQwZjoCQZMz4WgZJ95dETdUlQaKF4TpzJzdptc9cy85qPT6WuygcdvJSqsG3ku82HFEZ937Ovq5Zr2xoEXAiYLMScXIiwPg4DQ1nho7TSwIvi26EvxWNJxvagrcvb7a3kdlW5g8ankj8n0w6SvdVPvaRUl8edsXgmniAQ4joBZaAmVWm5Nwuyi6m9N5BPUnRvTU2NDAzVMAuX0e6yJQua1m%2BsC8Q4N5XXcjFiFw8nvPNQnnp6L8VWP65dlxp9dEibI37fZyBJReEm1pI0E2VgkQr067MIvC4u0Ugj20vatVIEbHRg%2FOSQFsd2nffwlo5h3JwYIO4s1MIj7tsFon11tp16vqGttUyN0D5Iv2N2KcATSJWSeGyyKcMtYapKmv5e5lkXa6RdPkcXwjulUY1rlc%2FaXWcr8qXnY4REsIsbaMZbmpCbD7hEnNoUm%2BFNAAwFcD8JVAkmWH4X%2F%2FJ%2BFYhadWKztPu06QWX5Q%2BfYUw5ZLOpgn%2FSwicnrYh2iri8xkOJGWOqEWoXLIzst5Quy3UyHmLcTGe7luskvBL57QD4f1mFCUKTDD6tm%2BBjqkAX2h%2FpGLF3EroaBzxlCZNpYA8OF0VnUylGihtOXXEMSoXWNteN95mXid9CrKOactMfZSQ8bsOK6rqCIgWlhs8yLKDNCpBe8SHaOLBthjovPrXz00pElVdUs%2BL9boms%2BH2QOsLdFmqimDpFG8jgXnpjuGbx5Yx4OwZPUnhrbKju0B3aTaKH3rZrmIeFVze5CG%2Fz%2FnymVynTif%2F8q%2FGdkuPzEXHjsU&X-Amz-Signature=9fa9684a2b6f0df6086e835d40548d38fa3a2621d5451e45c2911cadee2e6062&X-Amz-SignedHeaders=host&x-id=GetObject)

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
