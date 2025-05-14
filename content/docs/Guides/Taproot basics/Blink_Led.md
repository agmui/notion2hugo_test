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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQERAML%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCLhc%2Bk8akxxEY7I8CMv5PMBBTlrXQ%2B9iX1cnuNoUZwpAIhANMA6K4VCTyT57kJEPQ8LJkWm6baqtruZRVj6bMZkvxaKv8DCBcQABoMNjM3NDIzMTgzODA1IgzGqWAnT3OFP%2FFgAjcq3AOCgvBwuEB4svX2ItEyaG8lOADzNS8CH74n7BXaZxUQn0ybicn2XURod8J1L16q0GbTdntw7cq7dKxTGKj%2ByIU3cFpWhgLWfT%2FV8968mpq9sezPumL6cr4Gb9db1P5j%2FlrZ2Y5sjl6M%2BUX4kY8bqAZka%2FuQWcXFZWc51gif%2BMSkdyqCZuyw779VTBBUcHstvbTRu67aG6wBe9zOSARVIfRzrWucrQ5IECUYlpTCuP4v5Ov4g6L7FpG3B6hW7EAihkw1EeNZGrMOqSv8j4Ffdgi2vSVdv0VM72cEbmxDzkIJHC67Kn5qx76NWIJid0Rehu8j1GXfVb2csW8a2X39r656vThvWmaqQbpnBIn9Stwrx2Y0Ce5HlgLXU76HMKwDdUUS07C9WSY1%2BSxEpPzmr6KX6upZ0qHgCH6C%2FJC7pE26BlaiZ1bpmaOR2Pzlau7%2FWe6%2FEqLmoIO4owdPkrzCz8M7q7fQ1Nu0yiZry0PzCq4JNb8KwSlGb8t83ExPHAnMqfg%2FgpKVqz3aui%2BOM%2Fv0zXD9RrPrKWiG7zta4ymfCYUrSPHxPY1%2F%2FKfFUmgqhlhWweIJggMsbqM4CaWZW1kcFp%2BnjHD25u9eAKirY4XHDdEgJfISNbPtqvL8cvvfhzCgupLBBjqkAdwcaiuq00gZKsxPFKV%2BVU%2FbyTXjlAOAv5XQ%2F%2BoCjKK83qctC4eyiNcU9SUriiWs3gLGUxoElhcU%2FJpuGpVrRzmlrBQiqhu3tqcsL9eo2Xc9NJNFC4km%2FVufWLMOD60r6g2xPwgDom9fznXBuSzjvHx0u8f67jSO92rS2fwLyLwcqIZzQm9ouAXzDOtKMnzPmqIrmbPXPpYeF%2BMsrwcMbqLVtTrM&X-Amz-Signature=3a298771d1160d79a64ea2a2e6364371746bacb4837df57369a4c836b95be1ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2BNLNMA%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIHRM%2BmbjjnyWmX4CclJu%2BAlcYimBOisJdQwYFvErTYRLAiEA%2FPVKN53pAY7Phc9E%2FxsAjMNqxSBPv5WYbnxjvoRXSZIq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJAUOvX1pxmPsmmkBircA8%2B2Bb9AlIL0dlVUA0YC1LlY2fhYimMi8h2TDOM3OXMTdJGfXEWrKOnunZV6A90FEG5MP2qI6N%2FyqqEcaVbae4EvHkNRhC5X3BPOpu3r1RkZqU0%2FQbaMT%2FyxviCLkBA8RxsSI7a6mQwSvtN5e7yMj1vvk1GsT%2BKHlGDeIsp%2BxTV2fd0VaSlLj9NFQunP98H6jfg78F5cRAabaVGuLpT%2BVRF5YqHlCfXu7SBJkcy6mIsrivSTkqf%2BicOOh3CPtIND4hFZesy7WW%2B44N%2F%2FB%2F2FSCYJ3FU%2FXXhze%2FHePrPC1IPOqE3si6FoK90nGCYFKpt3mrEFKaTdWgU3XqCP8Z5R0uEFtVf5zth%2BtFuTf7N%2FRsiByQMw0WEJmvHz29XytSIY7GEOpLPrPt0A2ONw8h%2BbodmKHjaoOd0x%2Fk6nOhVDG%2BHhS73Mua%2B4mItqlGl7yFsX9hQmyx4AXzjfzHDUKy8mEisvVAlG3OEbEdw85NDV1JYqdW%2BKJzitCA8kT4mk84CI4lvY2nQ%2FXy%2BWypKK25Dtjvdn7PwwfZqig%2FXexSRgawQEiq7iqO28bRkDR5nQ7w57FSl0g6l0Ij29zE9W6pUGzu0ThFGUbsBYYRUJ9AsH3tJALXiVyx%2BLpRK2fX02MIC7ksEGOqUBxELfIdSNgN%2Fa6Mym83yn1XDPtm1HObXd4i%2FyWjXdKfSvnpYoycE%2F7oVyfFFZpZdVy2r7eQnVd%2BR6URFqktL1CK3frXfXnK4ah4D44yOIV7DNQdtqSPPOKwTz%2FyARAm%2BuaFeD%2BrKnqWBT4iSgK8cR6Li421DzO%2F3V33XCbq%2Bg%2Bn%2FnrusnSzkKweIhnNpJYv1pOAh2ngGquvPMkQGpSO2C8pYM%2BkgM&X-Amz-Signature=50d2f17192acdc0f03eddd15a91d89a82cc668deb269e5dcee596c76646907c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
