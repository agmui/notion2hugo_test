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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636XZ7CD4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0phoz5nl4EgpyLk26A13S5cAvgB77JZ%2FQcuI%2FnMOl5AIgUQS9W4W8YdnU6K7liJyHdDAbzCrJosbfwQ99PmWSODwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQpWwHJVnea1wsJESrcA4Y%2BJUNTJVFaXiQlv%2Bm8CQ2GY4zIRP6n%2Bf%2FNpVni71g33vk8ZZ2xSd13UZYhmGB9%2FIk5oC1WlzJYyWcEGLuXe9p6n%2FLmki2Ws6gKhSbZvsfNSv3LQrRcFcLoTKBRu9l4x6ipTjAzoIIdq%2F%2BSOxQeJXXxCHlRu9qvY8Zpx08yEjNUar%2B53D4mgA89%2FB68RxPwO3UdEzMBw%2BiiEoUWAsrZW%2Fk0X0bFJP3yi9KBRk7ugXTqp8A0SU40VtQcW7iaZgOawe6TI2YhCDfPw4ClNb1dM9gm9CvATU%2Bi72CnRIOC2EE5AmV4ooZUVqt7txk6IwlkQFf0KZpgNORFb%2Fk5HKPEAuFxo3RyHsGV5w%2BfWI31d1dHr%2FejbUjBZS6puIvLGQE2QEogCqHuEwq0qXv4ZNa1MCQFZ%2BbDppT%2FNqyykzURyDNyBGy0Im1N%2FtnJ1gDyyvE3fuawjvThMHMX87tli0RDsN57y05tjemmMSx6RiCB3j%2Ba1sd5C0odhgiIACfxwB0CuaGfG%2BxwkFErLPR4YaGCKqrboX3pT2iqd0GCegd6hXbyKkXNLqjMxHW7ucD3vVWZvdmQxjfw3ZcjhepDJm8QFuu4%2BQ9%2ByDG%2FTGbvxCpG96wkXEHXsRqVklxOhlKKMP3R8LwGOqUBsd9AoJ8n6rT4WF1j%2F4HKSKg661aN7NuJfD%2FhlwA1zrmDs4gwx2VJxqF2wI2NtcgsMBEgzDADSPupwJpt4jRAPVViCWJPkLVxcU5kYY4qfPVSsInhGutun7qkU0waiFfpuWFzWZCfvcebyY2%2FqtVDFo9NYOWn5gnTBeTu6H%2FJH2JJfaJl3KJdHjuHvYLIm4API8lLv58Mn5R8NgrBJC%2BNLIvQpGH6&X-Amz-Signature=222d06d60007f8db62b6e35edf4760ea560ab17df03d5d79efb01b1b30beff4e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS5WBKRJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMHScFgmLbkOVTAD%2FUq2r2yjQh%2FjdV0Fr1ZIqkStsB0wIhAPKkaat%2Bk2QDuxdCzrWZxNcytuyn5Qd45sWW4uDljZfCKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwTv4kyVE%2F8jc%2F4zEq3ANeiNWyy56eWGgaRm6p3Hs0dBnimVZm7ctIuDqTSz9La3HlVgWb6gy5rXAfBSaIVYlMGSs4ZPWKSiw0DP3Zdf2LfpZxm7T7qwnJXYEN3wTeFjjBN3k89aefTb4qev1SfUiAhtpjInWzGDvLeN5I55lPT%2F9GCT3CYriWXuQqyLSPCY6NLRv2hbn4Qra5x8gm3IZpE0sYgtrz2xMRfjOyZ4gfGiBECKlj4nszbs7tVuSVqBv6JKQOSAZbv%2BtPAl1b43%2BsLMLDqu%2BmzgouDNMAhISIltTqZbmfXTm7byyBABbNZiq7LT3BeCwysW2lHhiuq%2B%2FAG0lyItuQBavffR5T9Xb1nWIMTgIDZzBrvFGeCGFKHUxzaomAlEgUYx%2F5afve3D757zuu%2BS2EM0AfJopwusg7834x55Di0ypCHue23wdrEjgxZfsyESiWgjDA1WbPmSCByClLG11ji4yayO%2BQ6TXckOG7DgL8GX1mqedlVK%2FIdAxVAIwESBXJkANWYXJ47JbgXWsWHucICio1Wex%2B2U4CakqfzTyh2G7eLZunBWcVKOUAq17b5KK0xuCVasSM3V0yDeQPwBK7avmznw0Duu2AyCPjcHrHBkp3LZ5eoX%2BNWQ985dxxp%2B2fnk0xaDCQ0vC8BjqkAbzcHnqZWw7JNjHf0tflWfzrJ2phDAPegL%2BfO1McBqY9LA3T9e%2BYPpqkP%2BIGtazHVugnpszQ3IDjf37%2BgAuCGTWeGi%2BygwIPiz1gcZB8OHZD2eF5BHb6KwpQvnibKkRnEHy9B2LK4hQ4QBA91scMOVXNZ3mCRGPx8Ig2kcFNV%2FpvIF6pGan9uKSKZqqqZo0fdir%2FkezL%2FB%2Ff1a5un8HGvGHo0f3n&X-Amz-Signature=a666db8ba29d4007f2e9c4a11ab530659fe4c5c38ef3203828e98dea007790e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
