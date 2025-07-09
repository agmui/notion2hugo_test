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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP7HHHO4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrKpwt%2BYXG2TNc3lpH9SLI3nJ6bIiNWnd3tiBnRQm4XQIgfU55ClvvnrWDyhfmfqRYcemXAbsEzyBozNaPlTahMy8qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKcENDWS3PQ1DXKmSrcA%2BJL1eur3pQq8OXEMUQsG9OdfaNRSWxXJlCRknCpXi8ZtAaXD9ikAPE7O5bPKDca7%2F2n2kkhTxnJapYYaSyutvm9I%2BrFzpcmcFZz3i9fxHJkeD6q8a40kbeBS3oQpmTS11of39U%2FiJLRBGIY2mY7tyyJ9oM5WKD8YTRlwgMiIquhwcT8FmioybSNNbzKkWjFpBzzXTbhwvRido2LjcqtLiDdQCIHY7ypfKt5%2BzlZVLyLnnr2jmfXpSVH4vxP7CefwatgKDqru2M48e7uW0vbUgJQrf31AbzYyL%2F8EMMOf0yRUvPV%2FTqyuTul9MQRm9qKBXJL4MUO3scGyQWDtY2F%2FMYSl1fOpgOXOYwohPbhCE8kuId4o3EcRZYVJnd%2B%2BjR5qJb6D%2FA%2Byt1AqxXYafq36YX6RGqm8CJ6Xurd7nAdfVdNN7IFAq5roVv7g8Gev%2FMzZA0%2FGah2B8%2BC7SeEtWkNsnUa4kKuSe8gr%2FOFFCbLZ%2FEHMbFKqmvtaZV%2FWYSOD4%2Bp2L0m%2BEm3%2BNLmOA4TeZvYat9euGIgRxfS3pcCoQ66OLsL4qD0SYalkFfPpaL4jVURXsSG5RcXyQiiOFCS6a7xRXU63LmkkMO%2Fr8dNnV2IR%2FyLU50rpduT7LKYtGFOMLLKt8MGOqUBBQ6ThaLJr3MnXhG67rS%2FrtHoKSlgDQnkX5x2REpAv8dIVtaDtN38TLxCbsgL9rfO6t2N%2FD%2Bvnvc5nQR4MNO7tzkPUliKKRQ0R7oYKC6a1TgII7Ij5wdOyQpF%2FUPW%2Bf4crkgmQKM3I5cqX2CM30IYv0rD5OKNgIji5YS0SM9s984rIKfuh1%2FjkfqmSXda4ilQ0AXExI1PBsGdN5ypu4ZKpK3%2FI%2Fuh&X-Amz-Signature=79c5a4483f7d446b9c4693b82904b683f3a487a9e81f09f62873cf262fcadab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TDOCEVL%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFQmsBgZ4Vxt%2BO0IUC7WipciqL0kR%2FH%2Fq5w8wWt3ZdvAiB8BJXdlaw%2BATLHAd%2Fs5rpW%2FEbyVF2IF%2F5dWnngTkTo9iqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUarEJSghwX365nWpKtwDa52AFoUqU3HbnGUyx615KotUk6%2BRQxwVd0nGNxJfSqyujGwmTE1wmNj%2FmqSoOVnfQSWoSP5uy2omnuP0DRK03CiMi8O9slQQRd51750q79%2BP0YJk1IeEIrirk73FQQa3%2FOYphBZhuam195P%2FgU%2B4wYZQwvISMgZBfen5lgFvSXkdY7oip%2BsFL%2BYH8jP2Yp6LH1Sxk8ip5bzPm5ZznD4rHRS2uqrnvAroMNraCabHyN%2BoQhAZGwhH%2BF0%2FXLIty%2BW2SDv4DKmj3Z3wroLDcottAy7cxETfN8jXV6%2FBj5tfjuWnnLSoDH7Cgq3Q20b74rQHHQ%2FOB%2BEcoL9HqUEUbzK8k2XGLpcopm9glviMzMZTXKJpYzn%2FrW0Lg1FL91o9xl75x1IRVrqWwreyL39U%2BhN096QMf3yVie2dK9ZoBuV215EulOuDG0LJMcCFyNH1cVANPPVPHotQIXKsQya9rioVUqU0dLJv6JTY08Mk9lg8ExRe9B21ujIxt0xq5QI6wHVlTDkifec2pWDOLK86s0SwDXS8o0oemC6BUQjgstbC73oZoq99lIZr1MuQ2ybNXSQ%2Fj89oS6Zf5C6QoDXd7IMFouU7VmEZ9BVs1YRMl2flevwzaOyFaz4ZHu6AXmEwsMq3wwY6pgEjR%2FnomqrOeemmmuMmaW%2BEwl%2BlH6ehgMv67Nyf6MayO5E3E9YY8fH9tSDCQ6J891qHpqUWKg7E8dp9XKee6O8wMGJNxPQJcm9EwHpiOlaX1tPImNhxFuPM0Vc2JzMUn4upPsbWEb5ESZzce50B2DRBm9LkwHgHCG7UtVQsqnguWQSxmsCE3OKH92WSyLUvvXTVItyrKTNq5I%2Fs20shtNC9cQi0CraZ&X-Amz-Signature=267c4e80c8d919d467bc64a8a15969dcc55478975dfcff48cbbdf716c7985791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
