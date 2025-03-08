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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIPLHFF%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFCALWvZLqQg3Uuu4N6fKdSHEoo4%2FJ%2FJ5mryd82r%2B644AiEAyDLNZ8TRoquHePB1M19Q4nEYCLZlzho5r8dAqnQh06Uq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJIISuTyf2uF8lPgySrcA0%2F5WBn5AhL1RxHUaxjQVHNBuDoaFBKWAo7zsgAQsQaFrgn6%2B00M4x9A8f3aEIIUSfGLlFYWZMd8DG4VhTUyC219PXPfdSmYuUbIfhwzv8EkiHRk1Ay5iSq3EjKjvZpCPDFuy8Bqk573ogPTnWzSvOUMaeosT264YafMwneqG6gWndjICpVZhbE7D9xwOl82V11GbW8dmIXh0d7QN2r3hw%2FJQ4SYYFl33FQwvLLQAJf081NChQn8QSDli8GAMXxy9JbKHhUspAEmnoGN%2Fs%2Fzb82NeICtnT0zowbNnlizd46jAMWbJss%2B%2F1kCoJ1n9HR416%2FAZIRql0369WGysjZh9jJBXj2qidKqgUOZKENxcRFfpxJOAoeE7AqSnBYZr3SVkDNhB%2BzUJ8Wv0MQg0i3cCYcEvz5DNnb54a9NlFOz7MKDvHFob%2Bi%2FdUXEdpy9MHGIuYig8SCSlezzumyVTagMivjFyyq8olC7yhWrzv18478yRDR5it1iHc%2Boj2%2B5xCnfvrBvrQEJ4QjBV4EjeUba7swCQ5Amkee65jsCs1vXpZ7nepW6q0FE7U151xlQdKnlDuFzpUzFARm8aHUAgGM%2BauFPK7Uk8ozX1539AiyYZaO5NkBvAO8mK4lC5rSpMPTUsr4GOqUB1bnOOogD8zcE7hv6yp8ZS5lNVR1CUAxXykaMn0hBAuU0OU3Oe%2Bxqh2Zbpi1cldnX4J3Cgj55LMx%2BFifujXWZrk6N0SEV5UD%2BEQG0lZs4I4PowIKmxr6MZ%2FIaFNqy0GpTtTLaKfgHQufYCzRu4f7JAUkgQExWIlfKT%2BQAF2SZh6cC9f44ZAIw91kU0GAt8aDG6R%2B1mWfqkg50gzI9TzlfMKCL%2BZaY&X-Amz-Signature=c144652f37a46f4affb1246c31a381cbe8b530c9d8aa5e3a0a3035bad250dcdc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAKD3ZWS%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEtca5MomDMz5lGL6j%2BeGub8fXKkC2fSs1zYek2IVo%2FxAiAX%2FIH%2Fdox8OnF7SF%2FkoxGyncU85pL55BBmPyNwiZH%2Buir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMIwT5UkgQ1vV1kQWSKtwDw7l2%2Fy2sx8MYCYoBi0dpmvP7cuNjWKPz90n3ccWZbFjVabvN1sq7q5WZCMHF0%2BcIOyY8uXlzFUek9PeDH3YtDPdOzH9eHZNlxZCzfAtDgOJSfcGa2z0nMJ60MfwZgR22xKksVEfWnmxf1u4jQe%2FbmKO1DY2CQJXRhtORMNxs6yGVXC25TbPjVNF37Pd6YCAYHZRa%2B6V8TFmTPOZ8UzJWD9mf0Wme9mPyCErCTK77gYzR0ZJxTLHZrZP5BsdO8JTyEXw%2B7x0hzZeqvCVh7KIvdzffYtPAdux5t1gO3lJzqvZuHQlggpwkdr4fYj8b5G3A9AMYakWGcAKKSDtFUCuFLtr%2B3H%2F4J74LduazgK4Ru4IUzRkB3jOmOyE%2BhWm9g7NbdV9sQ3HqNQrrxwKfeg7Upr%2B1V7w%2FbX%2BI95%2FrJ2niSbf%2FdbrlcaOsw0K8DDF%2FtOMaIEHMKRJ6cOzKCP3pX%2B2bJAg6%2FRW1XYWr7XQNL7c%2BUh1EMKHi9uL3MZBTbuLJhKPcg1rNs9b%2FdRDuHvFSEE%2B3OHTxWiAadBDlWzhhLfoAV1rEsLXyz4oSdpyECE7sGyNxreBfz6Jb1idO283Fnmoyj1OXYAUJykzC9Pk0rnOl5s3n89zSa%2BHQKfpGTkgwitWyvgY6pgFLDD6%2Fg4V3vcBq7B6qvLBKCAR0cHc8dUX8%2FS8Pu4jH8Cq%2BE5mqYGcXhgb3qG3ebs%2FeA2WXD8Ho2E%2B8DjXVcQM1T5VYka39NagEGCQC3ljrqlfTmPSXJIhFTxYECEiHdC%2FlPCeAUOxeQ8z%2F7qNfFWql1MwbW1LNy9LJeqXUbvUNI42T5CDN0ILqCPaPl3Z%2B77CQ1uWXigsBLnkHRwMwDGWCebDoXu2k&X-Amz-Signature=291847bd8c75d250381b1d7a694dbc812a6c3eec5a55a3e0b087c4db4aa94f88&X-Amz-SignedHeaders=host&x-id=GetObject)

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
