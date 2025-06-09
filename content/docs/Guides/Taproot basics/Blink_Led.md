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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D3HJYVP%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVL%2Bd3ITvffgdGvicbd5ZhA0%2BJfNVH%2FnRuOBqtFGSugAiBIn0v366PxYMzQBBwtX4VLE9HVVAms600nKPAiPC5dqCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMScM2F2F3I6a3VlPfKtwDiza3NuXdS0mNG3Nehl%2Bc7yT4bOQYuY%2Bwo0P9O7uCEESPzqe3ePt2BeZWTr9baDmmpn8fA1tTle1KbMmUncMe6oAO2cOSfMqQ0ciZccDgrWMHLGQ5MxGhp2GlJMOOrxDgv4hUgf7nIrMfom1KN%2B1NIshK5CN9jB4by64UaBfTSkpwugi6nmvybXmFL1O8Gk6lxkWXjZhy%2F%2B5IgNuoVpia9qGlh5IDmoCCGC%2BSktuWGq8hx64b0Hzdxu0RPKcCu55VhLd6DYOKz98pes67Q1jKZSsZCIxzfZGlOmIn%2FmoTCCd3e1k060Hah7WT%2BkCfBkbSrGOQ47bX7uklB1eG9AVgiX5bBvOvDseB6Zr2zvISu6DxX%2BbA%2FUNc5vaY2a9jibIi6ffIJAWSduRQJ7OqdUkOszZ%2Fr9iL1VPfsdR0Qu%2BCDMFYG5OlDZX2Mn%2BKb2EMRB2OK6Azym%2FM9%2Bk6Cjltjd%2Fh3y47sctXE5gZ1jdYTuwaIaI1ZCG10fEfM%2B8PyrCGVZfPBn5NgcQz6SiuI%2BM1M9truqUMn6uMrdmzu9eefl1hN6nfY87z%2Bgm%2BsSF9294ma9EFc0TYJ%2F35EnAgWh4t4Aiv8D9NmYDWtc4BehbsK5gjSa8ED4K%2B3JhgDJ9SAzAw7J2bwgY6pgGiqHlpCRUg3%2BGaPEtQCViyaWabN81nnzjQYwhzvyYDUN8JJlNHh2FBy4CB76zLQ5mMv4bCunc5kZi0CbpXo%2FlTNsWDmznev4H1YMo5EXPG26jsaLr2Mj0cwqGZ%2FFSGl0ptixX6zot30lFyxIPdrTTciGLcjrqq%2BxN0KelFfHGLcQULJDcx2MiWqe8MrvPT%2FtOdv08OGcuWJkeedkQjWkpB7RgHKNdz&X-Amz-Signature=f61d9ecfa8dccecef328e6ec5862ca4de4ea278197142d0387ead86485f9f4c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUT6SYKV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr%2BnVck1cGHz94Ldp7nMnDPuF4jy2odEIMFNn14y8XGwIhAIS7GNa8M3QHYZwWV1pkYIsXi5nuyZ2ll0zbDcSuhdJXKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzY6jMULSM1L6KEZpYq3AOHIUJqj7ztXibvKRLr2%2BaMUsF6KsQKeyc3uv4btyS37ul4GSS46uWF%2FeszuqMwjaZH7oI0eItm7T6ZtOMbO0gn6WlnltnUKOMZv%2BkZIN7I1Z4LEfDedaKOl7skoePK%2FmT%2FYDXKeWYq%2FRwkut%2FLb3Zuzi6cLqFSKlsH%2FHjrl7YrDqNL%2BUBNyKaMyTdSVfd2bUV9TvPkCf03n34%2Bmx509qEtCuGVA7RNnAf8cjHaTnDSez4UM8OscukI4oj5Y5Mtdla7wxkKRh7TsO%2FZyg0LHWRRTlUoaQwYNyQvmKnGDONt9YYZenmRZ8rdyhm3H8d2ly6ZjEVrYlx0Mo4y8K2Rde3F1iik4L5cUdRcnJEMuUejFcvA8I97Y6e%2FaHizo1qIQ%2FtK4%2F%2FT88FKiSMnlRY7aLcUAOqc8XVtPJQZkmVVciDSZV28mHtae129hiTOf1VqSRtr6WS8Y3ZtDGDCKh6F608RHja%2FMGh0eIhw%2Fmq0RM9cctVqqFnNCvNCBJ3tMdk10ZJo9zCcCY08YUmfOlvhWMgu61gguicLXjHuUePyYfWbZqkXV6AIW8zqwgahgt76EgTMYij9q2peT1Nlv5%2F2p%2F1dOeCcPYRGz2VU9CykN9WZtQJexR4FyJolGguFuTDYnZvCBjqkAdkqGTQcVCYTPJgiD1sC3bWW9Tc32qY0ERp2naIqrVI9cgkK7mF2DZoMe83zMtS0Rpzk6tnfk9fnmsaHW6v3u91GASPvgIxfle8qMQoIaB1ZFNWnLKo9fQmtuZAhN7fXkp4p2LR%2BuU4Lye2%2BShne6pRWZh%2FG2yVRlG6KSG68AfzcqGeLm%2FpChRrsfy0Bdn6S41A%2FybPYMHOWqnZNsGV2CsrUAuyu&X-Amz-Signature=7f922d03f6e74de247b621aeb131177947e27c006ce93c118c85518e439b0dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
