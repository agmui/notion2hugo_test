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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYNXJ4JF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQColSNfBwzmftV3WbK00qYAU%2BGwqZifqxjAYPQ3%2BiW%2BbQIgSXPyKIQZDv5QwsGY8NqsYtOcTi2eyKLFMZ3%2B0sGIPJkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDHEfF52%2FlapQWkiP3CrcAyVDIm8o014T%2Bc9Qhgws9FCwGUGFJhxPdIaQ0DzALerF4Blu9nulMRLQkT1j%2BD2c4OWo99q4wsG5cLumUwepJrrLFc%2FQjablE8fSYMS0%2FB9xhGSUgYa7QZtKDuy0LC2fvusCIuK2wZ5ylQawKe7Xp1HVwEGXnn2uXbL2i9HVdwrf1GT63aWTczoO5jTsKthLtt93HxcJUhWzpddLtru1gSc6Yxt%2BFZ8viISxZgOF5ZYUh9%2Bbjuo4X%2FchN9eRuQUEiIZ%2BLFjKPFRohpKRT0wFHJrmMaSZ8pe%2BJiNAIH1FqKqUfR%2FHXFsAJD1yRuQi1NW%2FIz2E%2BuvDV2aIV6RAR3rsWaLRc2QIXDh8WF1oILCj94uFerDPYeTGbbyYCYV8fOVhVTnNS4CbttccUYrNmCutyx%2BwRYXjbB9apwlXBrKRxI0SragIWaFNFVuCErM6zEdRw4kYZW6X52cmRKVKMiB7aVIv7kih%2FISoMcrrFBVPs%2FP3%2F06f9RcDE9qyS5owqeoE3VgF4XkmNlmDHGkIeteWfmV0fTHx9ISxwBPd5PKrIdwKwu0NqGmoPa5yaVqqaF%2B1ccQJA4tB9hPCZMNBMwOsS8Bb1G2GkhpAmtVPSNFr188Rb8fiWJv6cP%2FST7alMIyj4r4GOqUB81eHMIuPhry599VmAJ2Rf%2BOzDK%2Fhoic5XoupoomGA38uLOEuwoXxaTwfjgUnqjhpiCEFteFGrJstYfA%2F5%2Boa1ts7sA4Fd5KY4JVmoM4FRF3zA9RflFgWgpkTIAse5kx4fL8c1vhm2vNEoNDeSUY1YDROcsvPpdrynHnonsITJmRxe5y168nxiWQMp1b3zsU%2FX8UdtL8UnOkoCGo90LPAvYYS8r%2FJ&X-Amz-Signature=c5b95a908a8703bf0c456a146cbfe08c61ade7d8a196e3de10cd2a2260d43c24&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642HK6IEP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjPonLfptqij8vbyKZRz3%2FdIYdzEDydK35bdWksz2hmwIhAJZnwjH%2FpBj4CeAmHUB2ssMh%2B91c%2FPF5ZQ6dlgcf4Cw5Kv8DCE4QABoMNjM3NDIzMTgzODA1IgyTqSjq57k4SrUpvOsq3APAF%2FDYl4LSDyRcPpVRq9lvJHiJTiDjNzTOIAlsvecWs7B9Z2ARQGaXpKoDxvvknF2Q9cnq626r5P7ShOeM%2FcDGAxlCs8zxUuMT%2FKI4irGh8djpOhhiYlVK7h%2BTqfbeIT9a8RQZBa5vefwe5Dj5C9fdqh28LQYtbZZSa8eRx%2BxzWbj0O3Fb81qJki%2BqVOJCFEmlDjvXXJnD0grYmmpSK7S3OdBDDSrPd70VFo2GCY9HaOj0F7wx6r0RzPn7cX8PIS98T5oTU2i6gqWIonaXMU2PTmGYBUBfVoy31PC98uRsnPZ0Y4k9D3QMMWAmYPRtL3jUpVmiVoKW6sLGL%2BkKXNP4hZkVWh%2BX4UNMKFzTF40yict5y3BD4h%2BJSNk1l8BbGIzBaBl7GIyjZKNoCydyq1wXpkDVduvk3ZJdKhsYyK527b81RlCL4q%2BOcrYmV6ZdMKb9D%2FkrvZGO3Er5XX1PjRJ7CxNQMLJMCg2DuA4lvTQTOnwAaF9nyp0cES%2BdyD7mokDz3JwtKPshj5kM8uIu3viogqpwOcxl%2Bg23sRvpsH0smRQxXnKI3Boe7iUxznosRPuPO6sBViCgsiIblZkjVAihxbVquHtlNRWpm1Thb%2BSCRYDnURd%2Fo4XxSXXBDDDio%2BK%2BBjqkAWn8tvbHIRxGTWnQlmiWYlRX9FYrsPnZ4Ti%2B60gapbNf%2BX631gQiFJTxdkjUWYXTd5TykK2eAR9n%2BeAWBYGuMsrTDYHHfczfcpSBTftXjc0jTso%2BKSBbHQpKVcUAzMb9rHJv1GgBJFfJUr9%2BFs1hHuB8vTZ8p7lHEZXssmD59bvuKRCSsQzGtqP1iRcdCoNfrRgFyxknLaxJLfUoM7ddJ7qo78oV&X-Amz-Signature=0e8003becf9c4a5fb6be7b8f0eeae425a32e116d6931d299b293b3c79f8382f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
