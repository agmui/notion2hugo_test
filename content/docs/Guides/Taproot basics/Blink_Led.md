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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVL2VGE%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNvusJubHWhMgQ17%2BVOAVjmea3twl42txVZ1LcoZc0kAiAqULUTGGw3mgg04S9Rb7aU%2BPPcH09H1mEB%2FpHqpyuVzyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMlv3McpMFExiefPJYKtwDstSOWFyIlIJ8roTuT%2B2Bx9Pr%2FGcf9aXNhzvZsyOq4Ux6u3UuQ0WHbGnJ3EgFtGTNfuIl5glL7jppSKDaq8WsgfKCKOVjQEVI4qPc%2Ff1hk4awE%2BEt%2BhC%2BOsc5ZPG%2FYr8E0LyrQ%2BgcJ0C14R2GYZTf4p6vWY5VG4JPJrLHHoS5S3CJA47JhYy1vHaizATLvEd9V9mqeSopkhrZX%2F5WeAbH3yFiUCWL56qjDbCjAh9wUKCseKfhfgOLZO5xyZHP1PSAeXMpCGNjO5gwlsXql6E1KfglgT2OuOQ906hr%2B%2FwJljSsDMrmNIFQe0p6Lddb8axY%2BMKht67mvjg8i4nMHMEExjf1dlP2WhTl%2FSzU4KwkxURv16wtE5TqRVaq7anUviVABY3%2BqUHNcqhNSk06s3g2HVImgeDEcs2w6B868fz%2B%2BkYpCj3ZjZvta0Uc6I35bBxHZhL85f4PH4MMw6CJcdJ%2F8yqUKOaIkLZXh5ZEE4zHyJQr8THLK0WezhwWDgfu5NrLnkdXpBC8LRnzUDeFH%2BCVgK%2FD%2BWBL0TJO44bnrDHZRuAknmANDQ%2FH7hn0vsztevKzRFZnl9KecmQGgSFb4vXD0vqndgq2gERWx9x%2F6AG4dAziItx1uiYOxi93SXYwtoa3vQY6pgGFpOOm6FNkcQwQpEWpd7KARAju8IA48AREG5mR9MM9zMgJ6eDU2hlChlIS0zOc6LEUXl6Np39FD20WfzLPHB3ZtaOehBixfOJ2%2Fpw%2BE6D80xjPyd0HDw32EkASdUZsjy7upUB0W3EjX1AsXQO%2BUvXCd820jxWy6jPAov1YfJVM%2BNUSNdR4NM5PZGokOd94jRRDJxuSHP7YtMsT5pf%2FKL4SOWRs3pBq&X-Amz-Signature=959673f7d084ad2920a6ba386387c8c64e17d7ecc8707e3c01392d7549f3b26a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KDAWAQ7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T100831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrEGe0Iea2Sbb1AQKaXsrnWb1yO1gRcIoLoRJGRdhGEgIhANO0bZQmhNfW%2Bl2HGyyUDo%2Fk5PACDxeppdVgICa%2BKYApKv8DCBMQABoMNjM3NDIzMTgzODA1Igzyh3Q8LsyHvJcgMKcq3AM%2F1HZgx72aeI6dIf825Mg7tzWqQYhDIWE9LMWZ38qQmZ%2BY4z35CtF7ZUdb%2FAsDcVueVW5sFdc77jeB3rVvHL2g6FAneD%2FTGHYh1xEv3ZgFe1ScJYpio3kE1tnrpdXp%2B4%2FSRfb0B2oS1Ia0RopwxGWAUCX3UJXnGY4bdddNcCPKENI8ZqRxEb4bNMrqT8F2wsg5Z32QYoS1u78QHeq28UWKvow4xCyBKdS4MZganqaxthnp2b%2Bj7UxbWJ2ONIjorY98Z5nfZzMVPaGXaqkkfEdYpxHk5qZKuBdD9NRZNPdeljX%2FF2hQrq3TCLqIhRvtTOM3q5cE4s9B0kPbpE7R7i2%2BX%2B4YMC572u1AIGRRnPrrtWXMoZsQcvCz1C9Uyl7PmBiGfeBIOTdwVhMz%2Bdbyb6qAduKzKYCGAMBnLNadKAAgZ9LL74KMHHor5zO%2FicyfTBwC8uTMGrB8jABnnJzbbNIID4EsZjfejw9zqSgy26jsQClQQuBPHnmLLNiTOlkLg0TglWxr5P3IkgHSCQ7GUzkdgxEen39p4vDmFEJCigEFQ6s65LFjSVygXPFxVD0plCFjrj8yaTil2o6QxdRJ1MEAR9dtPX2BzglECDXKKVANL2Gr7XWDMccmXamFVTCgiLe9BjqkAR%2BlXwe%2BM5sJSnp46yE5yU0Mn0Z8AFkFyKiHLIH19My9U6NcyaTwsQM6KHjQg9LS%2BEnd4PaRMJzJaOkSwXcWuDz4vQUX07yU%2BltwcltDJhLeYg1iGgveD3XQAXW4EfO54nBQBV%2F3R0hU6SEpLPFPI8PkVAjkaOOraP5CdD0x8Om0n4L4X%2B4P96Pp7UZMC97N3rfK%2BVpKQHBkvWPpsP3Qmk8%2Br%2BR5&X-Amz-Signature=fa9dc208f004693d73055cad73c5f5074d29e557215a3c757c71556b8edcd4a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
