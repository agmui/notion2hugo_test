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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DH7KQZ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS55UpX3eMYwVlC74NqoefiTSwUVmiEDuORTLtHCaXVQIhAJ%2FLNFYAMr4hq7%2BCtSqPY5WjUS98OeOiNbovpQtoB7siKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7zHBhLAK4adVZm9Yq3AMKOqRBaL%2BHDpI1sHNajmVeZ6Na%2BGVV9KmhllARovtxOEbaP2liOdoTH6ler3s1%2Fp9DtyX%2BEVbtYBChifDBaO7WtfhqFj18%2FjIqE03ylheMVMr3qInDHiaHGDObJD9kjgVH5pZZS6Fvbl1ZuB12u0XErCedglQQbUoJThn%2BqgR%2FO7kZhjkuHzwSGezMxVOhm6i2NEvcpO6FwzUdnOXt8qwHNc0xfa%2B7Sk2%2B3XAUqNmgqFm5bZpoth5B8GUvk8uvuGX2y9ySX3DYmtbtfxaA9Covg%2FaYuqkJJ2bbciR3P29wh7D%2B504njYQxDRatwRClafkzDieP%2FhVwy9n2yr7BEVaHewDtwgtXehfzpah1UdHwdhIrD4FVGSq4nIXBiijpdJYRUQWDHtrAMOedbQQz8KHCidpx%2FFTGtWcDM967y1VDbE%2FJ5hYbDwTf173RFhIa7s6jzmsiHT%2BbNEq6naczoKXsCZWhV7eHX9O%2Bc%2FZiKe8yQxdc3nbr%2ByxiLt6ji%2F%2BQlOlZViTpldPwwoScLdLWvkTl8RXxuS%2FjiZPWG%2FC7qk%2FfDJkWmOIGboIhrILcFIvcKVTd7IDzxkPXd%2FxoXcX%2FjFap9Wly4cyYqndlEBqszv%2BB%2FLu7YZgOe%2BY6uIJhMTDosazBBjqkATGIq6FPimImmQv4ZRRwXzTEVHm0qxYE3AMUyVs6f6zrcjGoEQng8FBsB3XY6cFULQh7a%2F0%2Fa6%2FgP32%2BFbFG5PGAFtAcHHTeKggkcyF4%2FLVybU%2FdNzR9%2FRbnYlJnQthL%2FwSNiQBZhL8tyvda4sDfXMfCjOMdRw5ndDZZlmMY9F4lGJMQuz9T%2FNXI9msUwJaGVFJsQ3HByC6icTpRil1PcBPR76rj&X-Amz-Signature=07a16f678f2cd0d0ad0ffc1d766475bbc8699ebfa73e651f5b810d7f7b9e3d39&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4HL3LVW%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1T9ok72Vo5Vq2t6g6K9Y46lOuYWFQin%2FWcQV%2B5rFXxAiEAzSDdv13v6Qw7CFGWKIVD8syjoe1nMpB6l%2Bcdqag8yWkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0seyiwl7Oeli6PnircA743VH4mx8169BAacEosIhtrcBqAwucGE4eRhlpyQ0Zkb%2FcFHu1%2BrvTsR86fCefuWeeVpgGR0hFZ4edch%2FYfyVwmmns6G4KflK64Yrrijd0GRQ7QmVO%2F2sRAJA85oVJNxSnWk1w%2Bl9%2Fm519I3SI4IW9ctZNeDrdeGWOt0fwui9Fqpk%2Brby1kkpi%2FdQsgse39XHwz0n1lrgcS5eaWXfBI47Tdl2vpIWLEIY6MC2zoMg0VV1ZDP90RvvMihmT8tOMF1PfTKsQv2Y14VJr0udfO6srWHGc0w%2Fp08%2FW%2BGc5Rv63NusTYvx1u%2BNMJeDpdZvh34ODGH16LiZ7cn5ICiHAyRWyGX1k00qrrA5Nf9J0ZKZoSA8BtgVgnKRfaNuioRQz3eJHxIs8wnf5EKh9Eqzjn7M1iY3fRVzj4vh3yCdZuGNmxAXTzA6HiAK7%2Byi9QJsaANxFwciOr%2F60rwkOonjPxhuAlFIaew5lGJBYqs16nXfW%2FmscXLpOyhUDK19%2FsdHvH1Q41BQo86eebWN4nBCIDUwdnvM0n7SrWs0Z%2Faeyqyx73aJ1J%2BERI%2FtKMJt22sViO2HiGz4jT1MrcRgzGDpOn8TMYKRajhuImZHOnN%2FrOkwA4reyxjgxZpGtm%2BFyIMJ2xrMEGOqUBsG7h1rB1181PbeTeU8xKOR28lN0TDDNfetII6Ftri5oJ%2B%2ByOwnK9C%2B49qJj3kRnIjXaHAQ3eLm7LXOPvKKLScTkY487HT1EbrPyCIB4YWpclcnJowJ5PE8gmWzDNHW3%2FIa9EwDlWqc7FYa2TREN6uk%2B0FYMvS%2BCfq21EB5uSPXc%2BYO7o0pTH2BbXzgsUZf%2Fac0405uXt1T5avOtncPqZh6k0%2B9tE&X-Amz-Signature=cfde50683b96b0e986b9fe967a18627abbd06748770f6337d3df4e2172c313b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
