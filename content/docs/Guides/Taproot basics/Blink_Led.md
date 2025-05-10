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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5UMDC7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIC6Ca54z%2BqbcdCyp%2FB9x88KrY4aRAHfHP9n%2BCzvhIsXrAiBokVvU9janysuZJLMjpNzJBp9GgC7iHH4qgruGgxVikyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK%2FyuKNiPNUJqVhVNKtwDu2bRqitF%2FXldkwBWJuCLT23fHUJwLrQC3XUN8ZUpkSTg%2FSbaZBidHUSWOZMTzZUaNrM%2FLWhVauxWnJ0DWnyUvLDUlXM11%2Fmy3mEhFzj0B8GgX0UM9AMbdVioE63FVwX052tJxDQjcfsI6oXQdnsR0UB7dhMhdIwmBiDQGPNjT0dw%2BhDp9If%2Fw7hKeKxhuT4joTu3qAYE9oLND4QrAyGeaRvUZ4IPr0dY7nkQC%2FSPIfOFe35M%2BgQJSsmCeUgoL5t%2BREyfi1wT3v%2F5hK3ynBF8kJKPDJBW8E7guKiGvQjUqzNsEvSWARRoUAWIaDoRSArG5b3pMMiA5HG9q%2FyGUjoYot4rXIHkuOJPcZ7lIrFd7UvmJmQwbkryurNOPWMXc7xb6VAiXsyCmXjrTAmdqy1OzwXCQXPd5%2F3RmHBKiP4fSvnpAmZxA5zN3ccyDMUFYHH3FD3J%2Bqc9yqkvJrtEvRAOhX%2BQlywGyxGo6HgPDjyQcE53BT0IIOW20l%2BI8wbV7APXqVoDug9lqHf7tkjCWFBwFtWE4QAngsCJWv9g9weBdOllCWPU7I6JfF0h2TdO5UZ9FKlXHXchM%2FnLC184VdY8A9ErMBZWNKh%2BTKrJeAGk8FMArZw4qE%2BRcctL0iMwvKD%2BwAY6pgErb8KXUwAW3%2F2XI8mm%2FxW5mxEXDpO9IlctFShkFDaqJmmZYxMyvufRv%2FsT1o4OgpQZgfePQc8OPrvrBG65m79HH2l3mLeNiZwKax1LYTRLCOz2GuPjuiln9amvtb3aoxM8KD3CUo4EqiaqAWrweW9EcKXSTI9dLzDxoEVxj0CLLDcnEudMf%2Bo3DVIA2fABWzPOFzAEpxEY2HaORhdkJSa3PqScHjAr&X-Amz-Signature=c75dbe0382bcf7bbbdc4c3dc5377b152f584871d21c47370e9ae089518a1a08b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKEKIUI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEb9R8WhvDnNp87wgO9Vt%2F0fnzP0%2FzanV2LWvvZbAAn4AiEA19bcLC7MJj6EliXu6105QzpM6LzX5IK%2BepTNbcXkW6wqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOO4z15VEDE0YfVlSSrcAyv4pPiabztbwj9mvzqvLUZz52oOi9cOP51G%2FmvIMP8IE%2F4jG9W1jC0at%2BkwxvxCKNxQWj3yObDu8yDVfTSR4hxSpNq3Upw2s%2FI9kw2xEo2DL5JV7w630SHM5AUUk7jzwgCW8Xc2IuAJWw2kM4znfrygpI4DRrFdGWML1IuBYtIC098jurJ1hG5bUm09LRoY2%2FDjgZYCRqCwf%2F%2FrtzRn%2FqnoxKW4cJ%2FzkVakVIIyR2gilfMuR6JcFpGCydTEcaXOT2i3ODBkijSGukMixBf2orfhXa2u9rb1wLgVXP83J8TFDNdSOdjgddq%2FLKOpVJQXDjWk7URVr51w9AoH6ApxI0KcYj8cKIJYYDSgdCNKcGMTusxk%2FdL4UVVWqEysN%2FWyME%2FGEAlrUFFPPqnclH1sSJmnahbK%2FH3N8EmIHzY2hblTEqEj8L%2FL7DQTP8W9DIsXlSdt96luXg2hqT%2Fogf%2F2uTwUuExQE20URC5o%2B9Eg%2B9odME58cfdXN4bugdARHgUulLfHdcBlhF8JT7hcdG5adYgzkZbDnfV6O2xfP95rQpTK95JLw3T9VKg9k1kgTVgekTsMpE%2FSiquHbZl3vfHmz4txLKuPfDDI0IC7J3JL5zhPe%2Fji%2Bobm0CkewYAjMOug%2FsAGOqUBv6Tvk%2FNFpRaEnT7962%2FzaB7hbvgPZO9SMfL7sNGrqSQg%2BADRY8d2h%2FB90xKIIN46nfCHhFP%2BNyFFbCgqhwqNRM%2Fb%2FKVa9hTPfzmrUbddrIacymiR7sK525FpqhNKY%2BOwpAWAPWFBm%2BXYKuxw%2FVmcXHrycZzL9vHVAIrdJNPyYlSZmvnzN8udD3PFgCCvHWadllMU9ZymdrUuO1kmbxnoSgyu0P4n&X-Amz-Signature=77641881bd651b5ee2d4bec033b37e6af7210249360a77b926e431b5b56b5def&X-Amz-SignedHeaders=host&x-id=GetObject)

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
