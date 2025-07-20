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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQCB5R5X%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1DW4BdFbl2Ku6bNJdOcYAf05KT9gITJrY4%2BeVdgK6ZQIgDUbgbue8ye6eKrxmjD7ifz%2FPqxaFlLHTOJIltYYTQucqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAXnWJ3M9M4N3rUf3yrcA57uc91r4g1wwHUfl1XAhyv83Y6Jt3UGHoTQKqS973V6Udl%2Bq%2BG1JL55TR3dpYEDYtejEzLrOhFmrxPjOdrh4v22Q7xa1IKl9OrG%2Bya6jXyMBADppWpzRjVwqiH3Rc4ak209W1Bk4bx4SD%2FoVLJNTQLhJ0aDcbyliQGWS4bahBDGZg0vPrpTP1XV5UKZxKseEhu3YxDZ3omtbCwbMyX6rV2QhpX%2FOjgXxZikhWTVgXwM8S75CRpP9Wh2XIwcg%2FpO%2BWm6ofZLMv%2BJuqc1syIxfCn9XfFy5s2p7o81R3r5wVFABFsj5dx0JwHPoW33yK7oFTQfUoB4PZqXdSHd4Kvp41n0G8WrNSIS4aQ0DBBJBLYHv%2FO2UPbs%2FtZs5zEzjs3U%2B9hAtyxX3f6Klvq%2BxSHSLKhjJ9A%2BULyIoqW9a62PljoUXzPptLoaysAQiGKVuBjHkPIIGrD98%2FmDVMR%2Fqn0I9ylCnGRNQBOyKaTHhPP4Abz%2FMoft7SF60DoDHPiILOTX%2BNjr%2FlAV4O7XZmX%2BUewoEWMUHq1fcnLS6YIaJiGfNLIR%2BBs8AIuISiQFBoVl9sVKMX9ixNmMWvSH5SHQ%2FYUKL85Cjvp6pZYRuyFUlM3DgHyLVsfX2TB%2BJ5yK2ZYiMPuV8cMGOqUBYoGZ8jWw3KrG03ogRngDkDwO1Z1%2FzOeEvlFpPqCHHYYTiJcAVRkCvcLoAhQbTkYkWP1gEB5boAlb6mddOB2J%2FLqFVzGR0q9puvcvbiaQQJRDJmp3a2RvyvvKPSp70GhfMFO%2BCIdnsfz8eSKNt7R64tJ%2FfYsnmgga2FWVilzgB3XTDFcjgKI4XN%2F0fAfxqgAL92GLOQuWZBPj5OgsefeGERcrlDvw&X-Amz-Signature=5312d2a8cdb292ca80888183bbc75ebf3bcb0dd98a8d64abc67936d9e4d4e628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AEGB5Y6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIErhTWRbC7HfqnYQe%2F2l3iuTRZ%2BDOBr0rLkxlgr%2FCjaNAiEApx8tarSCt4WfYgogG6JJytLm0TmM8J1jIocvyThs8JoqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIukgrZTHF5o8TFEuyrcA6gZiO1%2F0oTMlHJ3xOXruTKrH3MA4H98BOPDnSXec9%2BgT72FH4cWWPxbF2uETm0mK%2B1B4D9m2Q7hMD23kK0Y9Q4XKsqkYKJpPUtIOl6xg%2BXbuM6zwOoZ4Bp58tusMJGGphdXvuRRmqDo%2Bdl%2BNftuL4ItvAwT6uNzcGR8yGghknoBNfLu0i1Zhp0WlrV0BfnbrO4sAqsqb8oshqf7ehOI759rUEHVWyfAbgcFozWMG2xMdiVD5E72UMmmWZTbvk1aHdp3jYcmYmmWe%2BnzXnol5us5F%2BzvFnOfqDCaXpFS99zRtatngJFcxc3QhyW9y0sKwwnNNNmQ03a7TrYaELMxt7OccU%2BGuoHaWO%2B0nxHI0XnFeMkvC7pHZ5JSCCcpQrrsNRQLtIFFs93j3FqFz7R1bZ%2FB4sB65sNBFormSwRyiC5T5rorrOz86%2BfAVE4maNOBxr%2B34hEr3KHTNm0uEkMRu%2Fi0JLCFVCcjCCq%2F9shITGcsGHWjw3%2BWfVxMP1lLszuKpZJcZxoDswhOJmxU%2FDwOm3q1URd7Q55f6H98G3RPlmK03q0lU4rz7QZMOq3v36tnEQLg9vsBZigINhFsIzIMiQZk%2FTqEjOfyD%2FYp%2BMEad9fzdR4Pte8sSECKEkPaMLGW8cMGOqUBjyFY0YYhClkcqCaM4FyMbj1DlX%2BNXcF842oy%2FQi0F3vO62DHsNOiPMS%2Fd%2FoYcbpO2OkheDMtxmYzbtjmdKS3ewADIAagaSFXYZwpYptdxLm1VBt7xOxugseA52n7pxDdgOxuWsVTCE2nse27on9dbMkaYAxSdLPGnU4ZLPTyRIEHi2lhyqFS75U5k5zR0MaQfGrfd5IiPvHwNM6yHZ2qmnZ7GOrk&X-Amz-Signature=a87f773739f442c24e0be22005a77175bb3075aff20d7c1d8805804cd3067811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
