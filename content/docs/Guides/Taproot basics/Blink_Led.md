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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AKOWXIE%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCT4E7%2F7JcGSkJYi%2B8Kqh7hL3qMT4KSdjhilc3OFiyNdgIhALTw%2BDk7qxRQ1t6eJZWtRge%2FGTDDjlgCR7CB9O3MrTlGKv8DCAIQABoMNjM3NDIzMTgzODA1IgyZ2T8sHizFfFP1fhUq3ANLTXNMf3UG7jlJkzopdLKboxRiWdzHqPwnnKu6aUoQVMkBzZmlcCKoBXx8i14ui0%2FotqI%2BSB386o753nR87WX4BKBUcXNTW7G6vLKg4N%2BAD%2FrMp1xfxBvM81bcRDgeqWztghfTyBjhloW1oTS4vWQCWbpoIYkNNKG7lBrwrdsf42klugQ2Pci6o7eGtkH7bsOiGvGt31ZzM%2B0iH7bF5KjByJpcMLKjFqfS1wxDwv88TzHThMBq40QjfvTFX281G0EcVN6h6e1p%2F6We3yC95JcV%2Bc8f%2BpIYFgFPRSeX3oRTA7ozYhBWVQcmfXa2o2MEr7gX4ph8PJPunO8Xty1UKep%2BDLWe%2Fey6iNTLkkCeUnRJBRs6qtYuUxb1mzYw283GKyNOl%2Btjb%2FgLjBKrC69wPrkjDKlNWefyYDG45GaAfae1JQ5X7bijU5Uxbne3PVPX8bKb7vDTfzbehb21ANIk14pHLVvtG1t%2BM9d%2BRxIFndDreRHL4CIL8l4xhGnLp%2FeREFp%2B3tO5eouZaNf6XESuOLoWwP6yoEZ5yQrwOw1%2BMAeuv0ky%2FPNTr%2B7xlNrg5urS8NS57uIM%2Fd%2B6CWG%2BZe98Esi4wRrava3N2aJhA3m1Ba3TdR%2BsWRi7XZg%2FX%2FF1NDDqhPnMBjqkAa3JaAy9fkALm3ZW4eYmPiTtLwH1O89nSmXZi2gAMDg%2BmjH6IR4qWOd9H6nYPCjAXVv3jvdl5mY6dz23ansyg0YoTNLmCfFut%2BwYcxEKh%2FcYQeFl4wzJNISGrQa4C7zDHZqZXeRIfRHdq3iB%2BCAPAq8%2BNKUUK6wrqP8j8dbg02iZSlq85K5F8HwrSBaWL%2BZIeQ2aytDWhmE252j3M1HVRd4MFTE%2F&X-Amz-Signature=d298939015d9daecd8553f29c6031da56b58255d08239d02ecfe3fe3a34e9510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652TWQW7F%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHurfmfjR%2B3fVC5rA5xWC37daPXa3U2CT1rq7J6e2ibSAiA%2FWq9QZEl%2B4rA2L1lBV2gcEkL%2FACsjPjdKyZH7zNwTIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMpKWOXJe%2BJJGIjYg8KtwDMiOlptbN0Z5bsOzBdKD3Zc21aVfbcq5o%2Bo0yDwBkgfF8snLCZSyNv1p3CJ36VKXn4CWkaAuiIptglMRUmWDlH%2F2NbeJQBNlyTpaW6KtbEVgb%2B%2Fm7P2bsbAguHuxk6quMjpvsDLLzLciokI0Zw5j5g%2BygLcMasn6bKkEIOoStUNJsjRx%2BFJZQ13XhkNjVi3%2Fba36fX7VE9McX%2F8jrz86OuAz0TbSonRBJ0H0%2FTtnurrjCqFmEXOk55fNxMXm4OtVYCxw8kUTHh%2BWSIj6ddE0B7GyUnHEunw1D4vLB5DAlM1eYtsC5zYyL2Lyo3V6Gsx5Nrm1p4yXOqeuGYmiNYQx1GSKnT%2B3GJM7snbBotv3TL164csDrgltRqjcCmpDZAgUnUGtMRsOYBQhgrO2Rjr3BX3Hv1PN2ScnUudYwIc76Q2CUxL%2Bs%2B2TGfOjhYGRUgZOMohPMZgX8mlB6t0mElsLXcvL8woK%2BVfAVQ6cAElKjxFAm%2BDBRt9kINgFZw%2FODZzTDmrri%2BfuZVsMJtnmCuTqPsI2y7BJEUEY3Kx7JfubVUgG3wA5OLQ03OLvL0QQpbYmatcB5FLJpnyXsafmEJ3m%2BaCTAR5OuRtjUUWcJl312nCuwFZPq0qf0WFEtLAUwtYT5zAY6pgE%2Flu2vYRDO5M6K%2FJTmi2XhrEg9g2p2uoZjv5%2FbvAC%2FzE%2BTmv7UQ6ifCIAi7rIEgSBd%2Fgr5VAP8qTnhvqj9ZBiwcQkVXLoP9rJBb0Og738fQ8jl9GXs1%2F6OQbcFY2rZCYSH7K4x7mqHDpMTLrKDVqi%2BOdI39OWuaz0s0nMRHlgr6%2B%2BX4b2XFRj5Ado02M%2BPBkGRdHj7kIS%2F28Dv5UU3jRLNATtwxS8N&X-Amz-Signature=7aff341c19acdc52d1d5357334152f2e6bbf8e53e2dff60e8e59a996881b2144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
