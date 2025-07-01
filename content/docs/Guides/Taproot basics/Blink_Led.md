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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHTOYCF4%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfuxOknNjN3ZxlqiszecB07UAku2vB7BMhJ36I934cLAIgSJ7MNHS43WmhbGCT%2BFsR%2FpD0Bc9%2Ft8jdxO81QFaDX4EqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJliaPfFsdgWlrI37CrcA8oV0aam6IMho7UbTh3uGFsT1xCsVNoQt%2FPxUuaovBb9YSkRMyTtiLPqdNyQJQDcWdWXvrastK2uN8DyQX9XJe6CXIC8dPlIDwlTGw%2BgfWOwneBs%2FmiCGWs73qh8HVosgam%2FVA5agjwsZ0mP%2F4djrwLM2mP%2FLdKduD0%2F0aHkyz5DJWHsG%2F7t%2Ben5fghM2vO%2Bm5BRwYTvE0W02Xe%2F21yy1u4sU0%2B7KuQFR5QdQqwZKEKBtEXVHXqRUHS3gufqCIisUTI3G3XtPfg%2FgwMYot6%2BKwlP7FnddqCrb6V%2FHsP6xjafpvOTZqU3JrMARCABMYX3beuAbGVUhx9S8R2PqQEzD%2FS66Ifrgp5t0NEtAo2H5PfQHzV7srCJzLQ0y1qF8YUDzjQBotcD6PWuVhpIG7NR3wAoghgPJG7BXCCwSjf3OBWw3cyVRK4t7YV1352Y520Mbsk9LPkG4J7XounTnYPR1gURKJ%2FHHWHfILdjuLFDUx6Iue9SnfTxt0NlWnyixRsoD%2BtuN7j3lv3DxqdNYSEc0LxNWcORTld%2FjxZKRb8cxquvvGJZHtJ5hNhaondzEa%2FNN5X1jElqKyBJ%2FkifE52JQtiLPVnIC8qFTijiVvHRLg9GO18QSLw6apSvKp%2B7MOOjjcMGOqUBwzQMcj8INoRKX4woqBBa9Jr0WvM7f%2FwL0sUcLmscujuV6rYJgD5ehwg92%2Bbuj7PnwxnWfsZ44YolGNJoyQ6ViOEWqFnYMODFCDsbGSQW8SEk9oNiPeF0%2Bvcu0ktqxPsrU6YjAHqpRmb%2BqbDlEWyrkczPIoUdj5ln7iKHdvc24iRFDcenFerw4PrdnhZ8i6VqJWhkeFnlOX4EaLzC7jtHJ%2F2uDLKU&X-Amz-Signature=9fbd5e94bfc2cf6fb53ef6ebbfedca891a9fe223a5bc5990f49ff4449890112e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUZVESER%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJukYemBzN0B%2B%2BZd%2F1GVMEIRuvUtWKNm9N9AtYoR%2FLUAIhAIqBomZzCKvFS6oScDgOW3GyLzMkwbL9BlSreRyILIo%2BKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9IExQJDQ6BUPPhvYq3AOLc%2F5oY2AdlKWA5OydiNj7MiUh30ldr3uvWFKI8cGB7CUO1y3j88v%2FWFhBJtlIOaiHZ5lj%2FxB6lc7egtEaIBFm4uIxmlgHk%2B8rUZmqms1lgFZje7ZUcxvBs3uborcPoMc16mFMeQR0hw5MLIGSRHHh92rzdfk8I4d87up7umErz6aqMGmhR9UZudI8o%2BQcat5QGRnrLzYJZGlwQ4jGBLZT%2FFEFt%2Bn4EOOa%2F5ppjDeFq351lvX%2FYaTRmq03IiFHulyp1jz8H3fQrMy7j7MmcxAuOh5YL%2FnJwUVduwI0Me%2FIlHqgKsQ5XQktBgR9Iv8iCuFkLQXf3PkJWZPoTT8%2BDddgIEKc8xeWLbQ9j6sjoXApttrJSlOwVDTtC%2BtA2dychmHRkNrtzIo%2FnQpr0%2BzY2finnFk8JX5YCj3a5qpICnRCnAVGtBOZGDTiFEdtk4VdBgNKNPiMAfISJFNW4zCyDmWHfcfu2Uq5bstJ%2BdXOPQeJ4y8zO%2BgACMYn%2F8ZBHt1HF%2FrDeaUUBYxAr48g5Wl2TbTgzATFQ13Nhcu0dy2DsHoG2LqfKXoB2OXQh3A7D3hcu6geaVMlqIHwdDbSETfogOhhr518wCcZ0dWsv6TrE4XhDbNueseRWWo0m3oDPjDSo43DBjqkAeRKXjE0Ml2plb1WLfmk0xVRJfJS8L6FDRQUsOx1JD0iM4ioT7ce2Ia3H5NaGlFr%2FRweUMbLIZuI%2FeW48UfkJQ8vKZAlvu6AoJy9pkhs1JRlAHIetpqHtGIYIUC70f4b9sIEBhRAMiyXfeOHJ8op1VjXI3lKiL%2FYWSIKTnNJVx%2Bm0hzhFd28i4On0ynEhw1FNkiBUxURtAoK8wM21ARcwt6ismF5&X-Amz-Signature=0da8eeb55ac8b300c49131bd13daf01f4404ccb164ad169d311d82984467cfdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
