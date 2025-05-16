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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5SLII33%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5xIRgdVw97o%2BFNycIfWjhnLeVJDmm2XDrkx8gijHZmAiAEMbIQgkNq9xNzPV%2Fgm%2FGQC2KdQjkL5IQ5GgSfgiX2Qir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMhGxVt4LfARVI6GWHKtwD7tu2gbVtGJFYk4OTR7WvGI4z1hsBELjNh8oPoHSaQQL4LqNE401KF66aG30hThGT87a7dYWHFSI8nZx%2FcLi4OotMoJro2cmeqhdyxQMKL47MUznMh9deyUmd6JxCXHGOc%2BHvIJg74Ncz0Gai0RJ9G1gMBByhOwJv62XBHOKt1DkehdfLVFDyB7eRvMufp0ulxwpISfTQBY8kziW20JT10KhexxD03HkRZXXe3xl7BreBKWTKxA8xPx%2FyhZmABXSKKPSlX19g8%2FvWVk9HLIB5DKQFDDJIUS%2Fm0lIaigJwdQDrnhcz9hOy1L2xIoruoUeAS6%2FoUye1RVabwBff2kj22awlb%2BMYieutT%2FX9TuqYOQNCliE1Nzf8HqAyJ8oDlhDtMhuNmiiHBQ2B53jA7DM4FsoV5EgyWvtz8pbrI1oG%2Fur0OI8E0EWAux2s5ORWWR3e%2FJE%2B8qEvjnls3C8ON8Kje6in6C17u19BxilCENXBuTlLi90%2BLOOkyvW6%2F0La3vo3UPcOhTBMYQlW7EbNoaRmzUZ0oq33Y0emmUtclQ1C0GCpwnCZ7IvpYNtXoHLiZVGdmyndvju4oQelEaCA0zpcIp%2FeL5JiPByTuzAMK%2F5fLv6Jy8mCV967b%2BFZOvYww6ecwQY6pgGIDVVUI%2BH3zxS4LqWa6gAuYWFhLyz3Y0K8ZDe%2F5Wy0EzTRUFJm45jW5Qbgu4CWxIJ2lgG3fJA2OxbxAWYT%2FAY8imI%2BCall4D3mPWFh7ExY9tVCAl9LNAE9sA33qtpJc2rIiE2sexbM6Zp86wxNv5JO6PRzJl2zZ9VhQE8G9QuCaIPEZT81ZqifyjAoT3lmV2e0v3WRpzR4i%2FnjnoP3RNW0W4mHAwZ5&X-Amz-Signature=02f14db1c70cd74aad70899956ed71b4473e26dc9f5ea6a72110c28ca878dd53&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4EOKC2B%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmHT7uJf2lit8g1ly0LbWXcP6haf4FhWbvKFOApoBgQIhAOnKpOHdR%2Bc1UTX4z5Q3GWmUhPSqUcdOQ6jDvGBe0z81Kv8DCEQQABoMNjM3NDIzMTgzODA1IgwR5LpaOAP2S3wrgNYq3AOTJj%2F8diNFobIxEFH3tESK73oNLsSw6PeZHVc%2F45F4FEsKP3Xb49AM2GDCOF6Y0TTrBfpwE3ey4JdhGi5wrDw4a0VgZYVnQqkPhXNrWzM6aPyx5d9slTRCLOnnSIRKK1TK4RC0Uj3vVnXEkelCQTUu6vh%2F6jdNuKXFr1Y91Y36L9IgWyv9GwbbBB8U1Rdp1vujG801Z2fgrxuHxW0Ai7jkiv8gzxz0dBwhGz85z1pcVbYTggqzxKk2Yb3ak1iHKLfKWuaLV0hVTVd1eaJgjJBBf5Pa9wNqshYpes1m3RHep1c%2FmZB1oSWuudAr%2Bzt8KBbOe4QdEHf477O%2FbnxY1bU1eYlcJWJ%2BBTok0usAskJWnZv21nn2mgJErWAOmJUk6bqRiIPoXeUhmNknMV7M00BdCgAuNdXwkgPY97%2BI3FqMv2bekMfHFufnDg7BEgGXo7IopJN4MXZB9yhT8%2BXGpWxn36qnzr7hZA7VPdc2E23Y%2Fqw4Ke8DDDhpl3hOrI5DrgO2i%2BDSwNceIQ7S3zHMyyPxmxCTBwQnWk4OCrTSnphDEnyjWLF%2BAEHlJzP2itvCoTwDsObU0zcP%2B51zsU7oCPgH0ME3rX9e71iW4OhEdqRyigLGZtziBZPHMdt57jCmp5zBBjqkAWh8b3JBu7yyJwvQ0hrJ2vQWz%2F9aOcFiT1zNwoy4aLGTg9DTMswJJiAmyizx%2F5ezhj0kYxpSY2Y6q0MtjPnOCDmk7URtPHJ3AOHMmjbuAFAnqOnOww%2Fe37aKUCgC4b2l4Rvu6Txk8aA1%2BjnnzSwNbBHvTrNWXhEWP8L3nZ3yvd74uESy%2FYqTs6s40cOwAtfb0uAo9Kw48DDYFsRhyntaIMDXhZeY&X-Amz-Signature=efaa67bff246e66db2c89352cebf634c274b38222c35d253a9a29254bef4584c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
