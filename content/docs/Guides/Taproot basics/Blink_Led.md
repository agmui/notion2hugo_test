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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2EUEGH%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEMBiw76qXsyolc7phsAlrR2Hi4HQG9Ee3DqxsI3IjoIAiBZxftUm1b89oGBKACYvdcBECOllguAQROUnOwa7340Fir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMSFUeC8vefRPsdwcgKtwDeHsN6GEoiUVU5VrQP%2F6L2uWuqw2cFASKM0qw2iK0Rn99wnSE854KedvMJQb%2BxTHDYDyrUQ11jDWRtU%2BeERXZ4JwoMx5XGcn5I%2FIITaOXhZuJKXtRTEW4b1itzmMNJs5Mluj0fH608yD%2FX035jGNFy8%2FhTihOk9gdyNR4P7IKUjWNmgQGhC%2FJSp4T61rGrrOrH%2F34ABmqmy5CHw8sQCqe3H%2F3mgF%2F3%2FzuZzLpsXO1B%2Fq3WOhKkFD3SUKHeCrFuD6cNbA0iVuTEJ66fI%2BRvWY71GH14wqJTeZ7j9vUwqwiRrkmdgJf%2BAW2JQStCvLSoydbJQUH5Mj2RKnjgZ2sMaGgmxRpjkTJ8znYbbybDSHWYGKBXCNS79HtBhm%2Bms%2F7Kkrg3MGqeofNgZlnFXE9T%2Fn92jGtAglOMGGlsBXUJE%2Bd7VJiqk7%2FVtBqA21fhFvJtcIMRhkHyTqDsxTIsUy1aiknvcxkf%2BzzvzdKOh%2FigDL8AQnv%2F8HeWJbvJnTkYbGHoVb7aqwli%2BiJGfXw13PydpLDry3BqX7SnbN5OE0V0P3aERPGQTX3iMtS%2B6xSeVNdYCtflqhO1JNTstLUn%2Bx1lRyOtNm7cDR0QxT8KqCiGRFxltk%2BRJNtmHncoRYwC2Ewv8%2BnwAY6pgHdb1nr9DjDAcvRrgTogKyKCH%2FNEwNRs1SeAsHYwfaxlKuzwUpCh2g%2BngAjHBjzg3zKG1j%2FyQi0JirBH9%2BUAwdCYLD%2Ff7IxPG2qwUvjiWdBMl4EeIiEULvQvqI8NN6Zuw0yAiTHl901QTsajUYi8yjpw7ZOf47xWfjQvDuhM8FhwMN32qzYANQzFmz12riO6Ig2WQtm2WreyzRQvUsUks5OjXKf8vDF&X-Amz-Signature=b9d533b692722cf0f207810c8f2bb8c2ad563e4773b511744455d746829c3cce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZBNJ2N%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCM7LLYZ9mAF3voAHBgtPMkrmEgjb33EgpKSLU191CINAIgYpDpq6HyouoXjIcY9dWO7bK8pKXHAvkGTcqlqOeQdIgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAQbtmyyYZIJ1Yj51yrcA7X230wlkRNpnYuBUCBhLwEgvjfajk8F9cssLYLi2%2BKy0DrltRGi1LfhFjZdydcCF7c6ZiQkmcm3%2F7GgzWtzxzv0F1ScjuMEsahIWndE7%2Bdg67rQCqccJ7pzC3wExkx%2FetiEWQ3ZkU%2BftGZA0%2Ba57RwwA%2Ba0IbzNlv5bp5LNtKO2gqKi2MVWKUa%2BESqp1bZDxqlCPhvLnGI88bufOpnBTKj36SsmpW6jB45C%2FI83KApNfWD5fvhDAyM%2FvIFsF4WlvkSOJAPyEHFJeK0S4GBXY%2BHskI2DZDbwMEbdUMJkfF%2BhQ%2BSN%2F%2Fmk7lhxWDeNp533yUh3lFjIuoSxBl6PvSvnhtyAglJrNZPATpc2F%2BuGA3EhmVdC6ao401D7mIBecTJmRYHHBQ2h9lXJdUckgcPScdTW1JgHNy7UtPbdo5CPi0f31GZstqh6Lr2Xl7Po%2FBt7WQI3vJlBVsb3Y7LUogyJSS73vIp%2BT24C5Y1Elc6VAIG1P9LBG1HIM5a4k5neDHSDi0ioLe%2FxH5iIR8xgOVv4LOb8XWb0lIR7MiJi8dN59WABsnkS5cJbHv91oHoSBsn1bkYpzUrO%2Fvl%2BvaJw39mIpDQvaEk83wUN%2F7%2BtyLvf6Ay4BePzqGrNDfsNphIkMOzPp8AGOqUBIaiOb9ULJyUDaTVepVMg0ZEtB09opJm7JIo9%2FrMhg7U%2BLVGOKmRxbjCOvdCj9OiL0tMt6I5ILYC1uENW9%2BIJzwBdExYZhBWUIAqZdDXlw3YGgbEl8WUd8tD657LBZ0js9xOxQkt4Vw%2Fi%2B0hyyAFVMvT6mtcCR1FYlD1IV2VVUqMVGNQ7GRwysKAsJLHxVu%2FND0JnT4bw%2Fw3Du90wphvFSYUFM1Ax&X-Amz-Signature=4bd3f2ed64de7f41c410f13ac9894aa4ca72962d7beb436b22bb2d055e086bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
