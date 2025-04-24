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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKLLMSF6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEU40cMh3E7hZPuRMKD7F1ixJUy2ZDklLNmnOY6pbGvOAiBbuSR%2BayItDz6XCFqMfgT8oqUAsKI4ryCbbN9QDMIdUSr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMk%2FzS78XQU5H6CFE5KtwDMUA%2FQKgtRkNVjVJniwcYBFV1bi4Pf4cFQHVyF4RVFXWBgsPuUFTQCaUBHPWFCQdqwi9YdJZFrGPZjjYYmQqSYlaNU%2BasgexnwP9IxbVZcVS3JLe7I7tW3KHwqudgoeMT17RZQJVj5HReAg94ZRs02RKDwLfy76qpYo%2BfmrzcTpgY98LmkzYr9yR2nwLHtFdJAaC1R8nEIOk6GvFhJr7p1NQezr9NS%2FzdOqAJhJH3hqZZ0fp0Nb9sP%2FaLSqu%2FGvyQ%2FquQTm6sCcGfxLRFxKpaMslRna7L5d%2FvHBHnOTpD%2FAfcQWfln3MA9%2BhemTzqCrj9ZlLPF5jabwIbMhwNqbSUbcT5joXdcT0%2B9TlSz9RwvJcYJ%2BZSkXYsFAkGyGTfSlZzRKjtVheLILkvNtZ0T1hWtFvX1r%2B%2Bpz1oAIVTfb4bjVFDwQQpJMeq7zWdxgTbIFvA1QTikya283jH3Rg%2FxaxBxsZo0WnB5DyjrFcsOvrI%2Bx25gCXbaS7QdA7We9w6%2BlVauLD9EK025rb4Sg%2FLHpWdp0opayvk9%2B5E%2FJg28tPm9tqJJU5MGB7jqyciLH3mnG7dh9Py%2FzDPV9z5TGgxtAzcpeOmaZWKm6W16%2Bzb09af7%2BNknhl%2F7ot1mZUTgTEwpumnwAY6pgGs56MB6kVQbxcUCl1Z1PWH9R7BD0w2HwVRyy5NB1lgKtcFeTJuPv75Ba4ulk5ODmH7D574N9csgLtognNajBKtIt%2B3P8tGoXPFLuBedxnicPoK%2FCVMRKKiHEgaSvvCmVeZ10Cs%2BWt2%2BurnbTOxfpb1W7o8v8fFtCfy%2FtlfbA9u0OmlFXjrqnx5SWgt42sYknO9AX2V9J1DhXPe2Mmf9wUNGS5L2u0K&X-Amz-Signature=607dd11e72d9042c6c9007f60338ad6abb75aaf76db85c8150617cba1ccd87b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JOPQTEI%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHxci1b2HvhC7c6kiXuCO7t43UNx5Z5PwKlRxRZd6mIMAiAbZrbybhMSA3wQBiCXNjvr7gbOTVoYQYMCHHNJ3TryqCr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMvtNrQaZoq0e4DhgGKtwDPQ5lTv5L16VS9KgyMToW6xgQFZfieQ2qNP%2F%2BSJuEF%2Fcjg27EjpyIPldq8mED20uuaLYFSuRc%2Bd05XJ8ReZ3lVJQsEYl9UZaj7rBXfcnU6d%2By1maSrAgGfWAJGmuewrUMmk78WjZXud8TTGkzxykdfjSvFQsWA4B6KMG8g4vZY4G39fxYcONGJtq50hsysbJJC7kdqs5rbS5fsUPsz4hdJ%2FTdsw16WZdSQOlj2DLxkFetp%2FxEWkCFZODv3twR3jW%2BE91HpliPO6RJwuj%2Fnoxmn9VM7p32HC8tmzknxyHgG65vCt7gjC0e4DA5VG9H6ziurElAKUYUs0Wo3FGxnD5aT6H8P7pfrM8vaun%2BC4%2FhOVapm9nad8pJ6bd68zYmvc41P9yu5L4O2%2FMBTrgPMlJrV84O%2FrY3rOYU9UQ8O5%2B8sQXT5zmY7Ti1r1I8iZKBrt0K57JCEr8eJHVNYR9jU6SHsFFmKe9ZNdpm9iFCyKiifXcrHknQeZ7X0CQycT4rSReOmkHDmpHui1lPUzWyp0OHUnxRepB6cTBFqyL8ffKzhqzZZvY3C5nOeO%2F%2FeCpCuDPBUY1rWcteK%2B6CzCZWAmnULcEs6HfBP0lW5kVr0s0PAmN7Cj15rKAUNOg%2FPqAw%2BuinwAY6pgGze3y9Ryy%2BoLJm5JRWm1FIuPfKMibeMhUCT%2FSKfOwejhBMT505W7fGnc%2FzE9TfFChDDqIGaeW9kQKK55Bql2D5AMdYfk%2F6onbTrc5TbGVU5fQbyb5vriv93E7a7yWthR3CAPSEfQUDy%2BvT79NqOox6s4qJchktas3oQ4X5Un6%2Bllv9DoBN%2Bc32UZt6OGtT1%2B9loWbY1q1fXxBMB%2BxnuZRayzG9tvg8&X-Amz-Signature=9c7723468e26ae0d35fe8f24caeb5195e7fa1cd70d17e69a0a39620ce7907f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
