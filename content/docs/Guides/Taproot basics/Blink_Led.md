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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVMKB7FJ%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCWZXjLjQEjdZ%2BzxAn2OYgmbpk1KTR8erqf6gl6%2FhRRYwIhANA6xsl7cA7WJYZgBFkerm6nGthAX717MvY%2FwtRAc3ZwKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV8PEQeIqd5NAtRzAq3ANZzqn%2FNNmF9joqaqBIinwNkR694U%2BQR32xeV3LFPe3h4QuwGVxJ%2FbdJ%2Bp9ppojuRz3SOisajFOWABYi5BU2rXnXRpOT%2FLgyVdRWndgfOQw5Oh4hJxeZ64XkAe0mCkxJkAYuyWZtwm5Ui4xneZ8%2BvWk2rehLqX7AEQqK1%2FeEu1bsVfUS3MkOAealpTreIg0HfgiyOOsPb31Xz2DBuP5blsd%2FFSEYQHcf07VuJrr%2FKXK08MAtTEC0vaeo2cmCw6%2BkyrKzCPl2NerYRqOiz23jnr0MweaoLfsN8gzp9gZhO9Gs37iJ1bQBHKL%2FnQUFry0O192Yv98SjtFNX%2FxMq1u%2BRrRNa1UbqgcOg8o5ZOOPQd5v%2Fsyp6Bv1VjgFaofFtZbDak1En3BOcCjPChQDgYomxAOGKNtxwmTaekWKrF8wtR3pXAUUkt127OFosOHRud9%2BaKEwbQtGXj9SRl%2Fi4frGlX2kWYJgzpKlL2MtjZi%2BSczS15qDWj8a3UoCUe0bQZt8wSFzGGVtLpnlLg3v1r30zaw9bFYOgNxcliY64UTJ1oDdKSHnZ655qlPU3oLzaZk5BUUAKNbH9EUllryx5mKSTQwc63nVKZ9Yy%2BPgfkc7mouFhC3gMfgG38TNa790jDzwqnCBjqkAXhD43ezT%2FTzUC4X65zjWbdgFmi1GtWjh0wWuYCleGbnkSAoPQBsAySIBXmITCOVM1%2FefLOG4qVLmO%2BJhn49S2mY9hboBFZy0MTk686FE%2FQrnGPlRJwjcMeZ5XA9usWt4Nv0LANyLkCEuRfFWGS3bECYXfWK1e6ginfHWdbA3ptBo8J9BmR%2FV7pFWBkKzdS7UUkfO2ThhhX8StcIpcyXZaTqmnLj&X-Amz-Signature=9335405d019e06b371cf1508c50a535617126cf8e9d7379f9c5337ce88d7a17e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZKR3VME%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIH6QnVx87cU41bdwJp9xiJ5BRNcZwe5ohe7jTDinwz17AiBXUXUw56lGf8YshZW%2BJT05K5oP%2Bu9Ve0MCA87IwSRCaCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUrYfE8MbBZQV0jh2KtwDljda%2FZdo%2FlSnQkJvIXWlu07D7oVShlCJq3VmmGq9AtiajvB1%2Bukrnfzy903Q8Y9%2FEdNAbeyseWuhW3mzHzh7F0Hvj9fsDsdTO26eyFqpPLFiX14QBWZxd4ue7%2FY7fm%2B7VR9IXTsl2tZHS4ZUUqvohQFXLpLYpk5cBCZmwE4VAoFoGVDHAO3d1dD9M%2FqGR7fM7UpQLh%2BwIEe0zWx2UClk%2B4tdKwxK63dSoDhIAfkk6t6J80n2fH3UENoM6LJaBCsOSPCE7UjO%2BSQqF5Td88PR809kDbu9qpNVkXDcUFihrhUaIGAF7R%2FdvhSPsnqKg8DxmF3M5p8c7pfFxm7LZAPbI%2B9ytH%2BacAWVIXpEDeDQsi%2B5nYTWf2Hx7ohaJvx95pJNDSpqYZCp6dDUnAKRrkS6JxoZu4FCHLSlVpPCYYhY0xQ%2BUQEvVxQz0jCKWzCiNllb4rnv4%2BjF1aNIs1O5myPTeLmz0w1RX8bJOYLSsJrWuZtDfBFJODPDxxMN5VK%2BUJG3P6r%2BLANJm3kc9aa6hn9bSdFziMi63JZgx4tTSNGGxCUTBJ9Td4D8%2F1zqNO0iGd3ClBgmdxkaJZDpzy1OGhGNSt5ihL2wburndyygzhpudLVi4tWpKfoz0vTfKQYw%2F8KpwgY6pgEBgp%2FdIeqtRUhGyhNBeFsX0WP%2ByLBx7w7%2Bzd4sAzipJONZ56nsNIDwCFRte6qABDIbPOxZdw%2FEbPi5jyzxjKxfM38tM%2BRGWEDAaDX2bJvmw4lbF5lecPW6cmNWmf5Da3xtap%2F1rnH6LUQWhzS4z%2BTU9W%2BU8GEgI84c5YVZ%2FO%2BoMoqlsVwlF3H9wpGQc2SfDiZCUCv5NNu7M4z61%2F1WMqReFCQj0q3F&X-Amz-Signature=19b7daaccbc92f89824b2c82b77a56473e445462b88b459db501bc61a46f942f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
