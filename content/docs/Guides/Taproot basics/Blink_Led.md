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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFXA6RFH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTGyaX8ej0OleOvPs7Bj6b7fS6xBrftfo4%2BhK62ORjgIgT4ng70bHLwxdilxY2o4s7h3Fn1rNsV5AHPHrb3O6CnEqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhTQ7OZXK%2Bfx3AKZSrcA6f0304Vxab0yRYTB0LPNHLzbiRPW10xRQCso%2FWQSThqvNJrzIFnH2OPzEDWBNjra3hzbebqxsGkhok9qpdQO5c6jwhpAdoDCBFhBj2b%2FnRGVjDGpnEPlxrEUx3grGUk2SLOa%2BQm%2F6KIJ3%2FDvEy9aNJ%2BCzZnYAgvxK8fkP74WZf%2FXHx2wpLllVwhIWZ4nevgkUPGCXrD2LtytCs4mCfi7jgqhvtL6GxfjfFz9OjZ3hc%2F%2Fd9%2BXWmhctDkxY9r2qg7nbJAZsrwpEsPP5NtMMYCk38wFIMKaDx7RHX6U1T015csTJgYlmBKOXEXWw3jK%2B0AnbtBC2K%2FlJC10nGQRHCKhCFS90jJUr2V9eWUXG%2BArpnhcpZdLoOgmoC7sxpBsCh4fYoLeMPrjhfNm%2BwAxHVLSBftpFEEmxsBgyxmoLyzeqz8pA0f7w6BEaBqbQuWEYqZwhr3H4U8OWlZKeq74H%2FbSSj2tJqCNtdETK4zTl%2Bv54TVk5pkd6TEVv6AcYNvKH9TR9AnwDFRk2GXU1gHNGa7SvxHOZfiFwaKNE3Y5MaEzAMd8nvAF4d2pvl3z0O4XaEgn5JANDIgBiBPNpx7jubLT%2F%2BTRdK9F7KpY39%2BdiZJIp8ZlpMQX%2BX%2FmmNv57KhMOulj8MGOqUBR9wMcIH1YmH7qTTVCkPU2Emu1r9HCETP3mH8LICvPuzM0w%2FG%2Fy97nQQ41wsw%2BnK5suJ2q5tE%2BI76GMYbXtDyllnPoF9D7IU9yL%2B5NR%2FOdCpAAA3CyAc7YCeB6ksq7br9mLS%2FrQQuROmnQvuwxOj8lTc%2F%2BwimYB9jhaSjM1Mf0PgL4khPxz%2Fzwfyv7TJOPV9mV2Gnm1z9w2Gaf5AUptm83MfEA0yv&X-Amz-Signature=15a896ae6f50a3f6c9811470e094898c81a130835cfbff861283bebb50025177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W22OWGR2%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMZtOg1W%2FVRR6%2FWek9LD7UHTfiS2hTSSYs6V4DoyAzrAiBPG7mCGoi6D76jWlZqaXTY4%2BAMT496iw6d0kckAnQBWSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0QsJBQohb9YdK7jfKtwDPp4IasZwfAfnGp1zK0FKg6%2BmjhtDqmTuQ6%2BIYXddls9V09yIKn68ECrCE6b6qn5EhaIDFoVS5vGzYKxb9h5FkGd5WGN9iyJCZxCg2G%2F%2B%2F1M7ve%2B%2BwV0xUVPYXRpPjNM5vHaRmFMEsyfrLhUxQkAxzrPw7gXq9Z%2FFpYAz2KM7MnZ%2FSIw6rTBjiKbmPNQzLghlKMd%2BaQEGfZvfKTpRuo2CLdQL0bAzN1158sw%2FsyGTYS%2BOX4mPwo6pTmHc6mtMloATBaC8qvFXb3%2BKSLaroNox4LLaj84PXi%2F3ROB11oAGGdRVS7JTBwYsCdyij1M3MdcH%2B1BLnGVffB0dvwmTDyiHWtAlNxvqCY2QIYOlXujhODpTKzwbLAb8HiTFbRoyp2PRDMetMzlHlisMHy7i%2BTtLpw4QnnwYlLJNJEqfZYuEjd%2FeVsVXY%2BkSOgznDOKOUU4JAKzDcv91Yw3n6ZMaaeZkZISq%2BV6O7A3ToT6OzaJ68Ke5NftGlmGjZQyGamozI8323%2BqM59NtnPB7L9KF%2Bk06fnGVPS7XXZSCuM1Mi5XEG%2Bi7L7eXlJB5WkOBAP7DJyl%2FiYJ1IvRKFFrVUtvOljNiWC0p3Tw6%2BwRjNkWv%2FO5uQelHAsRe3O0ezfqGNTEw%2FaSPwwY6pgE2WZ%2FvO1IBvdiMhhno3mQjeg%2Fqs5mIh2dS4LPrdqbyciOT6veEAvBQbJu1quBrE66Kb%2BQXSuzSGseHZK7l%2FR9yhutd3PZ8TJI8zmrRVAh%2F%2FU7B6VDVxlsXpqxYqBG1V2ay2fgI%2F68oO6dD3mljmcWtQXBJV1S0dZx%2B%2BoytKqgyxmRKmQWyajchrnbmEq9oL9Io4bfhDos7qpYGOTc9%2FjsZ9jy%2BLBgs&X-Amz-Signature=6d090912882dc62dee1b4466a53aa68f5fe2bb6016124c55ebbe70e287646063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
