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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMRR4H4U%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8f5NtF5yzbuAH1eYQe9%2FvnyhyoVywPxm0ZgQIao4yiAiEAx2OSoP4WVQS9GSrcOYnWLlouPRlJx%2FPWpx08yRtfWlYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKMyi0Wzmy2SRJtZ5ircA50VXtBe6jCSMJ%2BKOoTcPjr37PQyFiG5j%2BKrxIlXM1VdNE2rbjxTBp%2B1tDXWG%2FFvxGPNLsWFJe5vfuD0KJBg1%2FtbY3U3NrRMuP1Vj8wW3QY2kc74C6HPzJtWup%2Ff8GK5VZHe6%2FlBEB5gB3De%2Bc2tE%2BoP9IJYWR96JIMvr9LiVWNSxAWe5CIBbYUxp%2BgtGnY5oKiNyShTrAVTX%2B%2F6%2BPlGC6qpulzFCpIceqJbFBB1qiJfPOyOF%2Fmf1NdCPjsj79y5AeTpRzCqiKvys8sgtq14I4PIPCRg4lrOLQYAMoSGBdZWyOSDWy9z0U12nmsnD%2BCYzhendJCOXXX2QKFQgfiFm7Ceh9NGPNTiR8VRi%2FE3XnRHM%2FfDGkL5HCRWaVEvRucPVS0l4B8rtfYBOR%2BGR9egcz8H1pIwofe0u3ykL6eI6V4wpjbDeBCWlJRPN2fjBzp6YY32BodQrB9PS%2F5SR3%2Fw4CikjThhp1vKqAVPdIVEyOqsSUCkPXsdzqbDQqUgiNPxb3gfGp6M4z3IRDghdl7yssi6wFOw5S4NCgv2vXSL%2BCXKGM1eQnbuhPwKW6G00bQkw9yAMuC2njiIDg%2FeJlovbMNF0ILm0XMKTVhtHCmf4ly8n673wKGbDLXUHNcPMJz4vb8GOqUBWaH1RndkP9vkeo%2Br11AIf5uk6fDJx4RlVyDJAZCOCbg1YfFpLtW8cUNah1TEhEjt4yZjwGnBHkH%2FqaDDhxl1LYl2EQU1NCbTvKbQ10eUbS6B8MEOFmH6SdGeH9%2Bdz3f9TAF1HSAZBdUwcnuRAfddzHKj2k0i0ApNUpCyYOayZn%2BCVn6D5ma4pUcH7VJBsdq7dD%2FJKx4rT6TQEw2KoZTrUkVTqc83&X-Amz-Signature=8185312f347f3b84125b61dbc50e00fc6bad0f530c0ec6069055e4633ef44dff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKCAVSWD%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3Vydz2Vi8n9MgOZdjalgvzla197VJ8KRM19%2BVKrAvBwIhAIzR6QbRMPXW5we7ZyDu5nSGAfmIqa8I29vxMXXhqWEcKv8DCBAQABoMNjM3NDIzMTgzODA1IgxU6QYZJXHKuUa3Ttgq3AO%2FSOiU2a%2Fw5lLCW1jzcU8WGgB0Rh7OeGOJLdRIUhuEtptJMdUaL%2BtDc3uuUIEXuoP2wVDDuDh04VW6ybLU6x7IcydYuWr%2BE%2BgpzGIYB9u5YQBjVbu6XC0MIinhpn2Fcg7%2ByNd1iBjdoMerdGFACCRJORlhONlpSPsIx6t0iK4j9HbLrSAPhpjgXGbEliPgZb%2FTyehyr4puB5h6Gq%2B0Gk7gq612fOlNZJeTmWj2wLpCuWVzw4RS3Uh3k6l6enJ6BBDd3cVFt2nZd3FAZBKI8%2FqA51xpuvwqt78dwhIHCSNSoQ0dDQu8PjSzufQe1fvSs8%2B4CPeGpt6SIQHHQeHySeZAGVBJBTWo8NzUTDfykcRS4jDKoPvNKQrrSz9SRhz2kbkESDwWiLYgKCCk2eo2dLqrZwL7UUqFvAwgaoZTMOMsdcinVhtVCSFOQUdEP8hQAj0n9RFOW01BieAiGFrwps8%2Ft%2FRsEMFzg6yucUsSkpBhYTCeQyjVn0BnOWdjp44loEGjHHenIvTtvnBkNZNhrdopUxdoLiPzscd7rVhUEBzAcgj4cz52Mj4jMM78wPpFQfaxaXGzjGHMK4d48PEqRPsHMyC77XZGlpg%2FuWum1tlRafHuDsVI8LFnyVphMzCu%2Bb2%2FBjqkAcM%2FdYg9%2F7vNc3R1r0A2mw3H8kyUZ0VbReYb8DOqp3juxWY8pElECzduG%2BoIzcEyHOU59LKVI62ySv8%2FLLnSBsmMj2GFD5bK5JyZR95ZXK7zUm6EdLLtomTQhfhf7ski5xFZ1XfCv%2FFFP%2FLLN2Dv%2F%2FKK9Km%2FzHgueIHvBaYMn%2BsDgpgBq2yha58IhnNsewwhNs2P92G9u9Z44%2Bi24kdb9ZrdrTSA&X-Amz-Signature=a109d60b7b260b5975e3a8e017b496f22ff2045eb3458006e6d46582f781dff0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
