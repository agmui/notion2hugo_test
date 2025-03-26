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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YZW5OX4%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdV2Zs0aJDvp%2FB4%2FqxBTuNzEicDodfW96BHsWLVNNHyAiB%2BhxALPvDKVAodUN4mHdUEXAUaHJ%2FG9l%2FLE4L1puLkESr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMtkpRBoyHI51PgaH8KtwDFiJ1dzkRTVaqYXvITAv0niNtfS4yZAgGe%2FUakL5VZJ5Wda6%2BUCiO7bwzi2wCe9zIUdxRr%2B1lDDo%2FQGjAxRukCeV89TdqwHAef5xq7k5m4xvnd3m98MlBVFqL6qF%2B234be27Dxu0AcT56c10V5YmtR%2B%2BCEmtF5NKJ9E%2F3SQRAFPLIO4FnpYex77R961tdJToHsPLfOQl97SSQiqNj3xTJdFeKZxou5x%2BeHRwp10fEleGwhB6WTjrb%2B7pWHmbLCYKDgOn%2FiX1HwwHi4PQ%2F6CF3u3qHvNgnk6P5u6ONRRSRr5Ic80IynoHiq52nVLJ8OpMlRjBIv5wSFeCo20qiJWSdHNOb61mE98fpwLDUo%2F8IWSv%2FAW3kDFF1lGGDSF7S8CBk2JJI1ColLJO5IDwMLbdLO0%2FAZPdoJAIabjbcOHyBpDczcSLXT%2B2CQ4fWCHQPbGU52JU6O1FbGcsxp4LuLy2gI88NMA3kyVDmlX3Ab0r9mTflWcHtMAu0unJa2zSt00mpd%2BNZ4c87Rp1qt8C6b%2FqSyOTEGrY5cbNPO8BgSVF%2FDVw%2B0CdxmJVum1aXuqyoiBI4klRgKkIKpe7Lsel5sB5QI3nqrZ0wsIQR4pz7vc%2ForGLHoEk8TXZc4HWPC4cwkbmQvwY6pgHSDT7ZjpofrJBIDBzRKS9%2Fg%2BapEwC2JrIlXN%2BCHBK2tYJ58WJGs3VfOT1Mbj2i4jTZOWSHeKdbxBt6FqbGH8wipjj1196xUDy3UnhYT70ygYJNCYrPCaM5OJDwyK9ZYhvObAVBqbv3XJK4GsAmVowWv9coUn5eMIz7wF60aZCF0tWGdhuHEd%2FCBcxKqoEJlOAmBUyPOBu9xE4YE4PpXdzZRDFztKiW&X-Amz-Signature=a0d6181197eee88987a38401b210efbb9210419e2b9d9c543474bb44d7057cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFRKZL2S%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD03prJ1nWV01RMYQDloW4nDNy2roinGuE2OGaml%2Fg7DgIgN0OZoiy7q9n31T7v0URlpoQ0cdBLghAu6xDSUGtLBekq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMlZF0JQsgXaGMJ5xCrcA9rCf5vQFPJd1NUgsIUC525C2SDzUh%2Fqq%2BK5SYBLPdA7RBUWF9IjL%2BWF5zJqL6YlCPLGGmy3sECAMsRhQyi5NKrATDltfgi3SqKFPYdk7TsyKx2Swq1ejobONl9sqf8g8087Z6nFMVyyLEhLLQMfOvdTOZhTPoZ9w5u%2FVfG22fXa%2BIMChx7StShXe4ReD3gFOS2oGADBPYUbtjkKWKDT5xmCcnx%2BOco234fW%2FddjTTJdfvWlXpRLnXDa1VBpvsGkt2777VzQ4lpRZzdBmeQ%2BipYAsqLp8j%2BTnsq9ciikKaT4rN9a21GrGAqHHUdjNBzJH6PPQDJiQBUxNX6sqJEdcHYmujBQkOpCnzxPJTWnY3SYCLBxnmpwuLaZHnP%2BGP6D0gm4lVLHiSnX7OYspMdVHOAsgI49g0hojbpSe9eor4XwN4VlSdlqEwHkAZmTS4nCcycuzD057kWY186iTEW2hqJIO%2FefUnjv2Nn9lPjP9bnCmK1ttADTHmrHoDHRdgOsq5M90vIPGIXdA5ihUhyKAvPda31GauATFlPQD3vZjYzYzlMR%2BAU13I5WCumq8cOkTVslbeQIewNZpzySkMb0VLZNzCeGYLCPI5AVDc4sK5%2BXuPCGqVjFdFuRnHfDMLK5kL8GOqUB7CRZIwJo8GEp5CdBXVx6a3aB52AYPc2pEvAGHaaB1KROeThBXy%2FEL21oc9A%2BWkcbhaF%2FEo3VxoCq08t4WGZlrVDFlI9a5I4dU9X2fWtJ9CGmqy3WOeGl3ePmAFWK5nkkjCYqkEXqTgoRu4OJqKuynlY7k4eud9X4%2FStsoXSftccT%2FU3ErqAhY25IUqW1CdRS%2FmKhFKqirH76IoCuI%2B3QfsH8llh%2B&X-Amz-Signature=5207b74a47bd35e3886f54a017ac400875fe86de12b823f460cb28f982c4db43&X-Amz-SignedHeaders=host&x-id=GetObject)

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
