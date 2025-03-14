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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIBN727G%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8AtRhfx9aUtBGGGFKJdIRoNPsCVWJzNFr%2FjXBASKGVAiEApWMesyZe%2B2W6g7tGyBsQ2H78oXZiSFrdmmG5zoJEKwIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZSFEoP0BFHlFs%2FWyrcA4N5MZxJZMsVyW06hrHTZKNY6fV88%2FdGEm%2B6z71X%2B%2BwzHx4jddHcN8Dohuaro7mvAcklRY%2FERnAAVShXU36MAehv3pkBHGDPwGt788SUgNL0DZOEWr3lgGbSG3RLMVjD23nUYwFWdd4%2Bxqp6lZY%2Fqy67XWLj94job00N1IYBDZ8JJ59OAzIVYoLMLe3HDBBhl8qMrGj8n%2FzBfsExyxsuIB9IsNKeotwREEw4kcnvVxAQEARrxgIJDCSN2eDSRp4ljT0XNpj6u6px3i%2BE77wNcjLrZtIqA%2BuRQogagsaMfLJBDi1o9Lr4fZauLZ3Oqjl5t%2FTtF2kj71Q6sZl89nIkxaMYDqdGFqc2%2Fgi2z3df1b67lzrtQYlttS9y2N%2Fz%2BMfzNOjslt3ELXRxUqy9q%2Bq%2FKyIYOO4cKLU9RJKdDMr5Zp39G6uUpWsY7NBTuNjEQmQcMjPZugx71qTe2OGl2ysCIG3AYP725Y0zYjGF8XM29RTmTm%2BTnZXktgYMig%2BOtF2iWWYS2zMU%2FiEPYBD9FyzWcy2nuM6is%2BbhwJtEkRS2HBy10jAKDOc3MmCdSxIhrHAjWOd9Ucq5wc6N%2FekNB9WULLGsKUczDvGErI2hW%2FSuKiyfz%2BAPogYBCY38k1E%2BMN3Q0r4GOqUBWcEcbLLhydZc%2BK7LQdwgz96e6LWwVPwmqrlU%2FN520X8I8HfqydrhiE8ixK8LrsSKZISiuJqRuR%2BqobEdQsNVQ77RrA92vfALKjtdOePV2lHtogwPiNm3qhxZpWZsBVuN3jIHs8gJxtY0II7bfEWhw9zTzJo02e76mzQqDGl0g6VS%2FF3N1dxgNFfcs8idH6SfvO0vr%2BsJcaZAEpZt4cSXlZKav8yo&X-Amz-Signature=334135299f43e58cfed08a516dbfa0539feaa1ba9b8b7e0f94c5f64d86e3d36d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYAQINIV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxpxE7wT%2F1W9jBCJfY5K9bkQ8fPtZ5OKfzM2arY6IYKQIhAIjiTnFfGc296LbiAf1I59Fu5ix1aScxgtXPEznVZk3rKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9XZMg9PBVLMb5Epoq3ANpSGCDB5ncEnTP0N0TVVLGddQW8U%2FzQOvD4audZpKXOBJ38M%2BfuLWNExDmzU0PTNu71G9FvihdCF16wsiiWQ8lK4ui1OOWPFbMRQ3bz790apJVhZtU2AuXmBMMqwLJxIxpYH81CmQVWjzeYPqKB%2BzLF51Xdp8uU3zDz5bwTpsI3pm85CiV35ohSv5wBFpiSKADvLl6lGyxuarsqbMCUdOvcsgUHZJ7tgvrzx35eZcKgMhOOlRSLGQBkGq%2F%2FWcxCbxKqIYqPHDVLC%2Fecl2lP0ub9VVsZ08lmtuCoGooCZrJAtZqgnEHjaAEEYckGnP9%2BFKjuiS2rXmt3gTXc406EXcw0Zg3RCtdO8fQ38pPBrjy4d3vsw3XWVIzit6Ja07mZINylwQ8WW2jw6AV0LzitNFH3aFohSIQFgQft5G2%2BuA7WH1sXGTozZJ1vQ4FwnAEA%2BpnPLSR2rjJ7tEuxckUokylv2ZbhyiiBrdaI8%2BNH%2BbD7unGISZvyPSchZhmdN2yRyQhXyfSk%2F5epgs5exUDh%2F6q%2BMMoMcqi9n5MaQeKnft6HT9NIPpaSfxT4rtCd3s7nZX3Lw%2BAk3LUPy%2FarfYsO1Z22cwXwQpsanULhdwULDIHXHSv7n4OrnMAizp2sjC%2F0NK%2BBjqkAcM4rk2rkJMvwPRwKaD5iLwjdPZOv3avzHZnLDZPyucKk66dcvh9GMms16tOjjdTP0Zlfcp7N0zrdNRRf4%2BrSeMi6xI9PYb3RM59FLhwuRB7j6xD%2BRSXpkjKIGf6UtKUh2vJV1V1dGka08cgru0j%2FxHzfF1pRz2xP%2B%2FWc2xe%2Bqlbvo5ilMYJmPcxntGCSjJd7sqNHmcrWPnbdGZEm%2FnWMHiVhdWH&X-Amz-Signature=f999e536d9234f2278f64dd0e794c97af2cde1c7b799710a4fb25f1dad181327&X-Amz-SignedHeaders=host&x-id=GetObject)

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
