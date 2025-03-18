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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CEBJLS2%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFzylTyzZc3TR7kAyAgB5SFNdjpzU0I6OaZhqoaQTY7pAiEAqBjewoH2OQiQmlLrvmw6WTFtbINPbzQGobmmMn0YV0gq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDCBtSmK8omsYRbincyrcA%2FPWcEHYNt6C8Nw70KY%2Bw%2BGVALUZUonT290UigYr%2F5MBQm1KQFYhVTlN1wXYqDHeSV9cvahBiidD0DcVNVNthVdJCm9IgmFvVn41R9rEX3el4q6J4QWrDQkc3z3a9ml04aSF%2FeBuMQecVuOwZTVFqG%2Fd3bWJ4wRQ%2BfOt1zuyUEN6W2OcmAfDhmgrRp1EV7DnSLh46cslE1N4zC9JZXr5Qr2UxrzAJjLiOeflWD5kSuiK564xweIWgGWcPXbvEcxSotVccTqHWx8iSmqrdRnDk4LL0AAalzQXnQcoXAKNuYI4QdZv0H4gwJTFr2V2nPV%2BTVOLKaSuiZlsPMsIMxIOGh2XA%2FbBhEV7nkQSwZW3lcQ0fPBuVd%2Fu%2BTrDpdcStG%2FcQuVHXiq6DBrkVUcLtVOYBUpAavTObbUktopba1NVlG%2BPRwe6zip9YtvitVK3BW1WY8lhFTaaxkwa0vFXw9L44NuwEGdpYr2lu5oIhrNQojh7JO1gZ%2BG2HmravB2X5hI3qMGkd0ihtyeOTEga8D8FwSdW0jsHL2%2FmZUFQ3SHWgW1bBoiH5ToMAt%2FpKLSJk4L%2BrL2%2FpixwTdy3Q4v3UuR4P49cKJD5N9M6ZFqeRDHFy38fX6GjySVKuMT1CXxmMN2w574GOqUBy2kxX9Q%2BdNDL0GfTWbQ3yZhId8LyxkZ9lzaYybXiIEH%2BB2Lyc%2BLr%2BMFi7xoCUZig6ztLbq263S3L61j%2BQ3W5raifAg%2FEiheZkZUZlYQ5qYGAZHfAujEQtajTV%2BJezR4BbUITYaAj71Eofo5oW%2Fxf9CgW6D5uezj%2B%2BUiDVVGe61ox6RsbTc4C%2F2iTbPRSlrzDzudxKXxZhsMoxAhGcOl8uBf6G0kv&X-Amz-Signature=e9cc15c0b4f8e27e4a2c48a145b484c16010b588d4049f15bdcfaca1685d8168&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THWOIOE6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIE0%2FC8e8%2B9rMO6ZIg6LpHQIlEb8GqfxKaPU9MV8M1bkQAiA0Tjn4RNXKRVOPrCDAAVMPYcF61nCUEqgyZp94LV0Iqir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMfnjvU8Nb3zdzYwKoKtwDvIP8utOoHY9sReJdemUtmsCdeWAeuDDFGh8y0HR3mMpZKSu0sd3UlK3%2BdiycwLDMtnfpS3l2JatUJZgKxI3kw3NluxPjsK0aoRT5l4%2BplqMAYPn3LzURZRULr1eRfkka%2BB3C20KpD%2BA8U%2F%2BwZKM2HGtrJ6%2B%2BmG%2BbEbSmdfi3TIqAwlXVO4ZJRIa8dDZePM%2BOZhYqj7D0QOEbgldvt%2Fp9TGSWDHTmRXhG2q5UieqSlVCxjLcYCODjAGpBGudIvVma6ybmL3YZEW2T9D2Qc6iVsOHDU7P%2BJEAcPqZ8iyYzmS6%2FjlnSQSHowh93KpZzgfiTxDM7jo%2B91F2OOzheYNGjSXWExmYfcfSqvLiYxtGHNmZCCthBmoUKaIjDAhJx8y3QAJNlyHGcF5XpotEF0Tg%2F5b5Y4U06hMLdTC%2FPN56awk%2FekGl4rm8QRsZmIlvD1jpnQ76qd5OhmJHjDiPgZRPCOT5lTeBleX6JMXCC8fF4m7Oseqtcs3neWhnaf%2B3j%2BM2I7%2BL12gVXQoVko%2BKvP%2FTfJ9BsVbA%2FxdsTV%2FHOtt5YazjhrMZJO%2F7TT2Jc46FlD5Rj9crXQqvC04qDE4fzfm0NB2jdb6CqwcAP9NwwaFD4ZqFDzTCqzv24tmok9RYwxLDnvgY6pgGvWviZQllEnYhtHypfKfNxQ6ntA0FBTPOaKzKQlye4%2BUq84ImsgbQZlFtOQJHB8ZdgM0ZSILX4qV7WVAjXDR13NQcYhLDtOayNip8rV8Pzlw0PYtybJI2uG8i7r3egW7wFhIR7J1rK%2Bo%2FiD%2FMDv5l7tOm1MDdp8dFc07zsFswuYKM7SNmzw2uvdJWKkfMQO%2B7AwQ4HxxEBOsZH%2F%2BDFUOxwo2%2FqxLyF&X-Amz-Signature=85456a010b58e3b321c26e9c57e0faa22263bf4a04337945e93100757be71a21&X-Amz-SignedHeaders=host&x-id=GetObject)

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
