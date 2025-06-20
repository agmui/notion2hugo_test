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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466552OB4TJ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd2%2BbtyBn1%2FScheYwPSEsfxorctoDJPgCIB54ruq1d6gIgKvkhBAdCz7GLUJSY2lnqcye30nJ0fWmyrN6Y3V6wmh8qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAerAXXP1%2BRVBpv1NircA%2FPw3frQ6E%2BNf8y56ULQnGjSaHn7nPtK%2FzycOMV9f1QrHbLx1MrqIwvaoed8eD9apb%2FpK7IJbTg5QzBQvdRKE8Ui10FYBZbwOOqQ7WscjDtvPC63ByGQ%2BwzVQ7r68HAR8Hh%2FQNctD1WgrBMIbsMRj5bHPjXoWgt%2BCG2a8vnL%2FSIJ1A72Nw%2FUa2mQ%2FSjRguh5uAEl%2F87BKuxrevXON1gG%2B5O430JUkdvUvgizh6P0YBb1XpFIgAhecnJH9e5FpaOK7%2F1jUn%2Fse2XfWrFZ%2FLNBnkmxBcOs6RQMI80LC2ODmt0XigMGLRQp746RRvuL0zY4GrTh2WWfhGXR2j8mEvwPH%2BP1a0SP2slj6pyALTW7ZCESbVdoM9q%2FKJmhBAyqcy1fDi05iJSzorRMvn6nG8vdayxyo6NkVajwkbgQoARyQsnyotTFzoloYxXdgA0jB6aRZ037cxnDQEcih8rgI4muso0RRZkw7nES0hKQwoYvHi3bKxVS0VF5YaRdoTrk4rST9uFGpm%2BFOMjz9GAZt885Suk5Kp8GfChHk2itk8RK%2F6%2Bm0pqCkyiTCIZE4FRQNfRggPmh64hJogCHKwEptqar6ymSLLHBnfD%2BriaEud%2FN7lAOTEaXjeBoymt8gdcNMOC908IGOqUB7BrcWnh3VBF%2FoLz8Z4cIQDnLhCZ0kZecSjy6y9l9jxsOZfPODHpx1nq%2FTjHr8AJdXL5wxCrtrptmyYieC9wA3LqgaeJTCcBpwbFuh4wViRgH%2B0xVFy9ozaFnZdmx4BoateARYwPvnPd%2B9oYaBlBKKRjMWC0ewvqpWQyZoZZvuwH0S%2BVL%2FOrpT4Y2aIVoHKYtZxgWDrzAXb7K6BCxf3qdJFQ7WgPG&X-Amz-Signature=93124fa78d5bad55132a39b1673f55b37afcd1f96555734543bf3b2512f02da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5POFU55%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVp7%2Bkk%2F2WS5BpbA3MefeZpIBmR1Wuz9FKkjFZozOKoQIgWyv0gPRAmI%2Bw6Xid5yH%2BC%2Bjy0uoRiLhamSQctE9DnRgqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXs9orczak3wBRTyircA1gioP5kwGIbCgWXICPA5ANwNv9f12we%2BUBDc4AInYFmrGsNQPVzSatat1ftcKdkfPjmp%2FHG3peTaMjgB%2BTjPr6rMCMnmb6xQ5qwd9oROsgufZsMEw6%2FbpCAeRlqVvXIQjPJ9mFcqO7r9vE3UYcjjG4HWRMIktTb%2FLcCW3lyfvjPLC5Xb2HFlciVXtRb2kcyNmCbje8j1KYQyLH0PODcY0zx2JcOX2pUkxG88SzG7fi7wjQcYXdma%2FsaQAD7f%2FcGiT5s8qngemdROMcKY%2FAhFWCzfKNII8RhEVK5UCGJ3fR0Uj%2BylXdCY9YAnh5hdZyyn78Ngj0IaZO0OdUBV4%2F29JmWXkB6KscYB3Z8ae4cBmGEm9eLl3%2FdXdk%2BHECzSB9O3bmUFoBfcMHD1PM%2B%2BmjlBngFf7%2FLeueVfEbs886LlZ%2F3nk1MJPXgZf6tW67R8td2kovZXVNIOlHoPfH84bo8IiKUffaNzdeJlvuYddKoky4qwyoQZSn1gAd%2BC1flf%2F%2BNGvjhRD45S1oFs8ck%2F9zKc%2BjNnMNpgEyNp%2FHdQGvShZbfeclGdFleuM8snBZAITLzQkSxsu%2FQ2jke6lASa6Tux7k%2BfGfismSHo8Reod9XxPWnr5kInTPMKJecZQfDMOq808IGOqUBCFb89Vp7a3npOdK0C%2BTdiXCx%2BmPdLVHT4ZCA6GxTHx0J7ARzefmVfeiN41DCHguTlvsiJyFYKDQng%2F9W8otGhSOJbtF1uVuk6dpTJ9YgIIjtZPeNop6MLoGsE9%2BUIv5UFzGH4nQi7b3uqVLRilBrANoDGtnEqeIKf2Cr%2Fqsrni3B7MB9fGM6qdqr4xC0TOMZjhl5Y03fj8a8NcRrURoAn8vwvvNA&X-Amz-Signature=cc91d6861979d1a1e33d1764eacaebe5301854d3e11f27cb8b44da9cf81bdade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
