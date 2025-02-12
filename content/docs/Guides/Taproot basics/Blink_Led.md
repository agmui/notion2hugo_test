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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUQKMU4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYJbZAV2LgcJ9ujc8oG0RnfmrfDeNqSOpH8T%2Bq8iU51AiEAr%2BWRgYNYm4scoOqtyWchUdsWbN9l9%2BT2JphSt3cSUeEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Bzdqexfs52w8TYWSrcA24OByC6PYWJoCtqdwuIzxkHrJ140FD2jeIRXi3H%2Bp1JcpB7H%2BIZMX3OzRkqM0XLIrgYpgK7DpBRumKXM9a8pQebxUX%2B03VFQxiccu8f3Y0KixVakBuWsfuHSjE0P1qGQLJFdocG3tgj1cCaUOX8wuMwf%2Bu8vMHmqSdlkQsUu3Q26RWD2BMAgFRTzU%2FslvhXTghZdl20yuw%2FdJYd9xiZrUSby5izsh%2BmUA3AC1YB3OYMuVUtTAi4aCnBihtjcmWmXpH9mOeL7QJt2Ju84o0oE36TadhLzKWtGca6RBU5yLG3YLwlPcT2eD%2B2nmu9o6WTHQspZ5AV7wrG7w4D%2BLenzTgD5oHd5Ge5PCgjr2Dp2zeNFmQThwp1DL1UIxPO2anyHIATqTPX91PLuT8%2FGarX2OV5KQ%2BdTx3vGXPVfADNHVHfGEKmEBACd%2BJYo61WFbRC7C6Jn09TlNiSrIM%2FGbv3%2Bh6A6UH53bQXitnhkSdaRQ5NrSlYYVe5f%2FsQjga87blfUxZGteFImnGTwwLZAZIYy7W4OYE44lXdycNM7cm5DQ13QtEWyDt1lwlEve0g20dfswzmB7P%2Fdv4q3aGBnDlHIK5pFuQHOlryWS4uzR%2Fe7s9bxIqqq4Tv63Ld1pZ4MMGGsb0GOqUBflZy%2BWmd60ZtcVfCKPc6RSXuRNxOVEyChUej54JUEzc0KyY9b%2BVjG8mdkTruGiQoFxjnZWlAbmEoLvVnTCL0hCzsKxjPLCbmB2mzdFXPFTh%2FSEXBmzDIMpEAQq%2FG4Lol9DruIrEwjPE27UvgA3RiOgcCZcbt422z33u1ZoVm6lT919aOS7rvfpgUYeOz2wNvinwNkrI2E%2FLFEsGvVDHkSFZ8H812&X-Amz-Signature=13ebf0cf60e477c7151285829826305d4b2ffbc742f14d1d506ba53ce07d8874&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466572XV3VS%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDczEDDVakgv0wza4uplbuvM5IR%2FodcY%2Ba3nrhzRwHy1wIgH7NuX6sxbc3AjU%2B3cMTo5S%2BbeA%2BM9dS0Noqx5MlOe2MqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5OgC4%2FBopddDd5WircAzlwU4TiHYpBoyYIQv2jGxcNofHvPSAGmK7K1du0gTE5fwgKzAL1yD%2Fq3EfO9jy3s%2BLCwVPeBf9igC08HSLvxyw3nZb4W94bsKrqjuY5UdCJv8CaqDgdwIxNfSY9egPQ2h6u1fFn%2FFcd0pMSNDJ%2FrZl414S7FCjlgflSRJwkBxkqBpvM7ECgB77jF41fEbXSbW4kswZ2rglUUIsaoOycrxNVaCj87%2BLGxgOC%2Be%2BybQj3m%2BvapZaYohkgM0nND%2BYJwUu2piVmfEXH%2BYV5XDI2a1tDLiFPW98tYuGEXr1JiqfueR3obS5awcgMRPFdCa%2BNF5kNaGPDRLq4GFK2ErGnOhRJSgvN%2B8jj%2F9jUruxmq1DR7NzRDHfi4544HSlhTEfrJvFLr19VB9R%2Bo2eCqv73m8Q8y4IZy9%2BRQbp31PajVzV8X5BFtLZweGyVkwLbYhPXHSePgym7ZM76%2FyXGjzMuYc8MqtNEdJvySV46HQ7U87MA33ZGht6qQcpJmop7bE1uI6kEz6hQ7xB9VZ4idA3af4s2aMs8FwB%2Bo%2B8%2F7Q5y8f4wb5GLTPwbu0LQ944jFN8Yc7k%2F%2F4StLOVmw0jug4cFfEHz4MD%2BwBpGsYYWUBzl4mNsmht98LyuAMyFtUVrMKeSsb0GOqUBUiTrATz9sZB3czHd5%2BHwRTdVB4WKfijq6d2jeiKtAlL2ekLjJva9kGyPsuSUQTksO4Hk0sf85F7Hbb5PBkuPPgiklLcUeTHDZuBDBRICjkc8B3DdN8tcqsxzOXALQgSDgcLoV31jdEZB2M9R8Wga7qleHTnafvCg73IANbuLJgXQdf7Aftu4EbE9NLCwnvEvMxQdT8cJ5kZ3k3w5ASi7uHEXTy13&X-Amz-Signature=470f74ec2077b3a14503c5f506accec1796852adc3c626b3e5fd501fbc92e6d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
