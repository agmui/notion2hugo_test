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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZWW3VTS%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHYC7k48%2FAVjYLj1um62CCBk2LnP7OVP3vyq5LOmsOGPAiB3hqJZ1Ct1va0uWYgll9zF9X%2FDmPP7T0%2BMqP0Nc1cvkir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMuhAmh8g3PREBhADvKtwD%2BHP%2FA3RfKhCG9s9cBCC%2Bsdz15NxCwUO%2ByYv%2BYbhrGdUdTVGWDw1MBQKF1ItF0Ytvkm1ONBN5r4gUYJ4P8iiRy%2BdfRTP%2FkKaQZVJebRjbqiPTkRXJa7YdL0eeP20iYwq7Ywttl%2F550r%2BpQnuNmsTusUi64gZYNQtnWnilLXznCR5IvjTnjz1Dch8XU%2BRpAx0jzx6LebmUnnQ3FbH83wJ4PCd0iKBQ9hh5iifMkrDy6nhtCrAGjDcNT9RuaWB1S8mEhyzhMaQ9BeYIlwVbSkam3WJOvFUnSpSOb923e59yvWObJJ19HPUgD5VfSsvzHwe3JXltqa0bPxAKxVA0xX9EecAWBaJHym%2FJ%2BmXyyvXC4kEDEfvADURaEMqaHrPd55uKMh9qZ7%2F%2FLXXeJ6onysdZ2xTIw4%2FDkunp8pULrzBNvufrFjSy2yAUqrsgHmMt5DtrwJfGEca%2Bv%2Bj%2Bdnf6lV%2F0Fo%2BCqjC7B2unY5QRDPYl4BD%2FvGcmzXH433Ekrt1QMSUOGe2rSfno4XJsILeQXUVr%2B5RiPvvYzRIELcADigqarac4uEcbOUyUzFOF1cYWY9MKb4ZQXqPJhy4X%2Bd%2BvZKpB1vvq7jqEc4IAPgXdzsTOCMmU%2FwCSgwlKAdiHaXEwzanIwQY6pgH2SFYZoAzAeny6F9kgbuhpG7ejkhCCr7vPEJcpW0mCku7IFskqZE%2Fq7qeCfah3FHzA%2BFyUQjXE0ZL8IWoBPl%2BbPbxLzH3THKsTjuGincsWQrEZwn0t%2Faw0HEGxhmpduf%2BLJI4EE16hOW%2B6zISI2dywrO%2FY0s0OArjfvFaRI9O0vyGDZ1RamU6txuh22dNyKdB7zvk%2BQ9%2B6KT0T7lnUR%2BXQut%2Bc3R5D&X-Amz-Signature=c2d3ac3ebd36d16933de0900e155a6be38819b193e0db3b4d8919dfcd5c52195&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KU3XDOE%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIH7ApxDS1sOWBxjqu8heLFHU5IHavwv47FMRtgH72RNOAiB%2FuwDlDHqFjoWN9sTLw%2BEjFr%2FJtnptNJOsAAW%2BtIwhLCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMUr3m%2F0HknwqDW6zjKtwD3AU4KoOxhlD2T2kG3nLn5My1TfMbXbVkigHtU2%2BRXNQJ%2B6a7WZ%2FsK6lN3JLKsKqGaF5LQVpU7jte50ssw2HtcUxcv18CQCbJuZdR8fQYNmYyO6BS8Mz4W%2F%2FL2r7sFnTfutssij8GXdLjzXbOWdT%2F%2Fe0bv70JegYUCiZgDuIBRxTi8BwgtVNLxc2Rutld1Vjvm7Yz%2BRJvVwB%2FVbj%2B%2FP08iD3MrqujkFXBP90GcuwXOdONQrSPmVBY8EWfSwRKWYSi%2Fe%2Bq%2F0X%2BjFMjb0VUsWEHjljr5D2pBuk0yZWmyVGlZ1sRVUan0fHrajie61BwOu2Ioc2g6vLEsHjvoZCasqhboZ53mfJqMDkRyyLRup2phsMwgYDT6uUwkh%2FhGcrUYmMh%2BDmbImIjCyPgRwOM9UvklrxWNEi0TAaiMekd1wWkf4NtkH4HS6blZd8DeDbCdGtMVkI7MAqgUhemBlYLgph4h0KeWHJUUkPThgrfdSxAp0PtYL%2FaMOhyg4rZHp6lqRWHtYp4gVAJ2bxYza0DeO3TzE66DmVq7CaJFoNSdAcwWyO41HrQ5fFUkpRCqZE%2FfLyGcnbP%2FTErWiuXYRlt1DwtU8h3peTmwDhpiVm7QrUkJ31P%2F8sIyXS5x1hObt8wppbIwQY6pgHzeuG6Y8RsC2OWZgwjqSkz78dCL%2FiEdWS8gcnu2A8y1RfbTS7Uivw8s8JLR%2FG0Kzn%2FC9QsEP4cWBclK3D1cgXeagMUgJK53aSih%2FKnpr%2FI46rEDOBgL1NJMQxO5kxzs9lydkswQgHMFTUC%2BWlYVfh7XhYa8P382FAk9NdaNIOIY5szWpqv53jRlQ0zqzR4q59K0SeSJT4%2Bdyd17wm8ws%2BbSdimdbDH&X-Amz-Signature=d097f818923e308fad30d37d02c0f3a5852986e82a406378b3c411eff195c144&X-Amz-SignedHeaders=host&x-id=GetObject)

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
