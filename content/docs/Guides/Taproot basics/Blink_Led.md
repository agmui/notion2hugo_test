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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6NRF2PA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH%2F52186QNM1UEzNpmLyfoXjtoRHG6ir8A1WPVavEnz2AiBUqvUmliZNMEgVjW3k1dSL6hWiLpcZvqD0jPk7z3yKRSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNysU9o%2Bth8eQ68WKtwD%2BiQyub3Md6ROUiNAhvcwmHeRVBJptMp5eH%2FTCqO%2FF4D%2FcEcnSz5udYFDY47oVN%2BvQ2Pt8aKLTHFBdEX448IB9t3nj7capWPyelKspWlMdPeytCW3Qcuqiu5s8H79kq353IHhCH3VhD7JmsvWnFyptLIVPtlD63ofPLGnmOWYcsQlJNTfZqcjEakmOkFjodcMyGIQrPbufrOcgCAp1K1oWttxZXsOtWt9kNYg0eHc0dwi6qulLF2wxoGgiTaHiHkn7eqyAtoxoqPzmIKw04cjXAm%2BgoBz7YahwGEd8DrZ2Ador%2F0pMNJEkGCY0FGpKc9ruO9vI6w2AbUobI4SKddFI%2BdX%2BHgWZxNQYBp8w6yJqQKjiYh6LAnbUnIhXdUgY%2BAL8V%2BW4LLauH73QxPx2QSSAuhAK%2F5NxELmzo6f7irHbkKTpGEUVRDM5Y8NVtJyNgLkfo%2B64b3YrvvDL9Cl9FTUoyU3KTpGjhERMydiBfuL6tocU9G0IrGz6GQfIuEtVBKBqBdKyrxVdnQ3M0P8aWASKcA0qgd2H6zid6CpV7vG3HYCT6t%2Fc2QSo98oEA10bJR6FB4yLJ494K%2FZIP2NHlyzCkfcrSItEzDIjuriz6Z%2FnIL58zeB2u6V30xzojown9uVwAY6pgFME4B9NW6HxhAyz%2FICA4Q76%2FfhD2jIfv%2F%2BJANvsWxFdYvZxMvQwQvD6Ui2PE9VQ9doKb7mvdU58ZnTMzGmbZ54MQmtz8T3ltiwyy7uf1cFwPD%2BGA87WsVIW6oxIjM6dKWh6f4ekA8q%2Bhx011leQOaj%2B7Y64WY7KkwWTNJocv42%2B%2BEXMl5JXPA5dbLBHSQSsRekIsRfMlZMHEYUNvyvux0RMaqjPKQX&X-Amz-Signature=3d20c26631c0a590f77fd7673a3ad53da29892d0b9a3f5e66006a553f668d8b7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS7GYTJ4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T033332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIAmHXRI6TtxODehW1mwr1BPlXdJ%2Fsxcdau%2B3ygzMYMz6AiAjXOf9%2By25nwhK6fHb89PlAxW4fg5sMFXFYrg%2BqD8mZCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOTeih5%2F1trwXy%2F2lKtwDCMziVjEjc0FZob4v%2Bz74wVP2jbA7Dr0hEWS6AG4UW%2B8Ht5yFccdS5Z82c4%2B6kl9X%2FTUORbbfiJNfAvRvQ%2FNQZkYmSrFxQ%2BYpEf5iYr%2BauA2EQJTTQ5A3fL%2BcXS0ipgqPKKkhqLc7PrDeCwFq6SoAGz6w9jqo0Z1dRIqbgfdcHSmnRLb6DXWahwv0HQesPjR5dwUHPcau0nu%2BA1hDs5vfkpxljA8fHTCpEJjVscLTatzxWYM%2BDVyCImWl59Tce1LIfG1RnAORd6DvBTADNR9xnUIyb5tJTdPIVRPTzUTwi84QxjSdjqxba8etu8SyYnI5awUVrodn%2BS6c4TyyTHsynt9FalQVoV0ooNsjP7DT4DR693ED84dP8L7oRwJq3yls4XulU6BYocanI1smgAiZDKcxk%2By2gfU46NUGEUK%2BwycdQh4ulpLFXCKHXm5QYPKQXpu9CXJ5CF5CTkQqYmQLMN51p%2Bk3cvnYmEd%2FJsfWF%2Fmk2Tx6KnTd2tAStV%2Btup2Z8ENMFTn%2FCzl2jMhzXXPYMF%2FPf7dAnQjocXA%2FTqmgzQ%2BAJHzTCBz2W9yB5KTMTUKEHyCxB%2F%2Bkt3pOVQxq99ZkmvDBMJ%2BNJhJqyrKzj%2Bl4K5BbYOzrHuvTrYim1e0w2NuVwAY6pgGAuCJtEjDfypupqN%2BqLsT2fADGl52BsqFB%2BNRuQuOK5h15N2tq5MVqpZYjbd0obr476cR3JgXzSCeQezDrRb6MHDkE0DZjrGZI8OQTR41eYzSlt1RkBHTB5DZw5HUXyUdvJTyKwA61RgZhRgfWhUTsK1OCxLfnFTJHzLsgcFp3MeQkaAAtiL5aO%2FtA0nSX2a3RGBJbT6KggCRF2Vi61fW7oGuBwrde&X-Amz-Signature=e4773375502b772bf14eb0bee33c05531e4cdb2e56877b09a66061f75e5d169a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
