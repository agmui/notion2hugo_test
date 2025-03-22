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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW4QDZTY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBU9h%2FXY%2BwcUZEDqHBKQLJpfGesy4g2KQ16d3e2gynWrAiANh18DctuZaI%2F6YNPLpr2EwCikFTVv%2FLWcuTVZJOAxWyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN%2BfKJwuHdLXGBz7VKtwDy4PLhnmzcGQE%2BGLwwXVo1GRDoTMTlwBXM%2BPyULtJKZweIvlzbl75oG5xWTiJ3%2Ffoy9JRo7SYabiTyfYVWJiwoRVxmFeB9sW5Qt4pRS7p6iAg1OLhozvrobntX%2F84xzLWpC1iO0pmyu6irDygf7eVaMB2chFpMHhhH1JUcRbWiZZs%2FHNkXlsOs68rVBwR5qzi3JX%2FETBK6cazR3xdxwtqnChgHYd6fbMDqYJ%2FcpagctRkRSa3mUofuATMufxH1VoRB4tj1sYVyRUvV0Kk5yTXgfBUFsPdzAhnSceDxctsVeKtlpqm%2BoRARdPxYPw5F3TNcahh7smmFrJXzw4gRQpVDe1GQCczqRU5C%2Fwd3olGvwD1yMmQDYDNomYV4DVzLGlJVTP2jS2HVrQ6nxqp5wv7vXaV7MpoZXXlob%2Frcr3RVZlxrG3aNBDrziceiRYx1muN6H9X1QlQ8m4Zz08f7mhnHIggI%2BiLOB9HiywoyIQjUohUbeEo9kgfIZ5LDXYM9JUHIM4mF9%2FqNLm%2BM8nLBluvo4Af7pVn2XnhtDxBr0STq35UVLjVV13Q99BJy8EANIfJQeokzliaZLjSnPcKEa%2FmaMuyiRSDjU1hNPJ5L5OSlNtyf2nCfDRfglumtR0wjJj8vgY6pgEm08UrTf3OPZWJZNJS0woDQEfWHslnhUnqUkhGAonlEveXm%2Bp4EGFHGdFUimIHP4wmOnNivWTHlSaGK4Z9FLkbWpuiqwh%2FfuzCZvOxYlmE3WJfouMxTwupiBvQwEM95EfE9%2FG5wZzregfsNxxwDKgAB7vnXBcQFcPwC5m9N2Aa8htrU1X3GzYwODGuN1wN52QKX4lHgjAPS5q4iSRe2T%2FzLQT22TbX&X-Amz-Signature=551d6e0e80b37865f8a90d9db4073695ae918d82d8d8b8b1d1f10b1b19dad865&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEPLMY7C%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIC6LtRUTu4zjwFnXTn5j%2BuC%2FqqWSs9tYszOhifJJk4CbAiBmKnq2ZUYFHwGABDHikilWXYn1Q6yyminn2XDZNEo9iiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpNTDWCOHd2uDTMSsKtwDyi8Uz9mZ1%2BdsHFZmvlmvasI3SO3Y0xdJsX06asdXxle1cLqkiTdOVkW20DMJbhVi6U%2BlhcKqyc%2F4RdzsbBpbL0ExqvyVbzeT9XjDzGuJeHa7TW%2Boq84l496id7rMp%2Bg5cZuQbiwdl9iV8ReL8vDkm0%2BumxEsL2fVJfY2uT3Iavlj1H1ttlDWg%2B4lbu6IDUWIXDTrwdQxw%2Fe3CQsmkYxS3S28jBcBRMUdDnH6OSq7Yl%2FDuAeE7zEGp8Kd3WyxWuP2A7%2FRB5PX1ZwumgBT3wgOmsekTVgrVJfG7clI4f%2BjQmoALMSsARuTMmzqMC8C701rFghvIAgMOyovTY4JuZNS%2BEiWUPOre9XnwSUGFS74tij%2B%2FjGHZgmc4wVDSbN5o0nt1g8Adn9rPMqVKc3Cp2K%2BEZfCo9zuN9bqTPl4%2FmemGxmFTSwbNt1khL4Bt8chlOceMCKLwrBgCd%2BWQkiZXO3j1uTANYiji2a9thkuSR0oNoHeEwOT3pn%2BDbyIkv27g1XT6yDBYgZ1qaf0IuXbhQWZOV15foKlFRZzu9pEfdQR%2FaxILFyqkN7RSxEhU1yZF3TY%2FvRjpusG5BNnwd1tJgRmAxERj383Cmo%2FDIlOWibDOODb8Qz85d3AewMw8qQwt5j8vgY6pgFIVhzZ4zg%2BWoroouswEudhVN1IYD68AuFQ3NcMhXXfoxy8WpNgCAjfPreF7dd6Ily3tZRYKsc67ZZtJtD7Hec9G8v3nSw1Y8b%2FtM8TBoQjxjq8pASWwHvXFAZHD4BsHOZWR%2BYTuLgoHmQajb8WMPlHBGzyeMVJbKIOxx3lQj6vL0JP%2F7fOVUss2XTsSh16caTIfGVbhULQxQn20KGfCOx14JOCFrpS&X-Amz-Signature=a1e9604143ff7a4e7ed7fd70a43203ec8a3555ecb3b38053bb6f54b7af1dbe75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
