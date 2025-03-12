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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMB6EZ7E%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDkLP%2FEL7M0Are0Vxa7quaiG35PGDwNZV%2F3EIQw%2Bg2u5AIhAK3Uon13TkPjPEB2AdXTcBywoU%2BcwPgpNS115atZwQ2PKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2Fs7SnmbnYykwDN4q3ANwbrlBoOXVVoHlHf7%2BHs%2FwMIsre3YilD%2Bo4uoD1mPdTaUeJs75m7L9a9hmtGAxc0e9Z0Z9EcpFeu%2F2XafNuGeaYFdE2ZrlbLe0NiIjGi%2B3CAZj4OcKW7w0u12dEZ9J6UZQrDicKBKTmSb0ksX0Q2eHdsPughXV3KUjt5CL8ninQKshDiOOS6IlyBUk9rvJA73GHi3wRyreLul7rN1G3ANOe89e18F7k80FW5nkthPqBVD7i96zdr35ei10kEB7EyA41jtcsWAHorZ%2BEuUVAYn17wUIhzEI%2BzFWq%2BrsHyYOR%2B0xG44A%2FhPgNgqLH5nDPEVMamot5zfXRhfSLoEODogp9FE%2Fv1WLZZqceXc7qhTori9KjJepstAQn0uUpFWJlwbCyL%2FzAI%2BOYABzsYrgCpv%2FPv2m0N3dLeFSEuJUlPUO2Fv6ym5lDn6XcakNX6Hl%2Feb8kJm1kKoMf2hSGcbptKVbWz5KG6BgdBB32QPEVkVctv%2FhTIQ6%2FiXkzuYdcg3uXUPtbb01GYV8F8rYPT6gfZCpf9IN%2Fzlc0rWzn3weuXfMnE4jQQCv24XjUs4DGugRz1HptcxKo1QKuw5o%2FHmMW2qL0pJyT0JOhN1hMU0CZSNGpO4w10H15kyAWr0lKTCd%2B8O%2BBjqkAR4Jk0vQKCAIBnthIxVnwFaH07xOlLRk1%2FS6MI44G3wA%2B0oJZ9xr7ihd3iOuQYKTf3envxw6mgmV4ftpC6ihn0TtRDxd6CtQJ2P%2F6O%2B%2Br87DUuL5ZvZBHVDbvypvGWgOPkh9y3FERdMwIz%2FRELncTt0SKpeToEwinkb4CR7bbhEfWJiWwLxx7DSNXrOs615VgHbhiZL2b0eqhXJe0Ct5bXFHOwDc&X-Amz-Signature=24caceb98e74e07f6764e27f2b928d8bd12d6ca2a1ae23640c6f37f554a38d90&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQQBIZH%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDsE55dq7eHA7WM6sDUhfBb9SQbyOTbMyOlO%2FgjRGTIqAiA9SdD66%2Brkm9mH0d3mISDGW%2FMHqid0r6yDWy0wISV8ECqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Tr9EeJDlp1JVPRbKtwDaVdl%2FBrTaTVh6xjO%2BLdYCqdn7oCEZG7%2FUgo2DdRGJc8Jrk43WePTn5Zccgo7OstzonehkIh2H6aSvVjrZ4w3c27wUfgkEDpBoz2QQUYcGEKICrHjZ5b7VgaSGKChXouUkIJMDSNdRVRj%2FyeYvTTFQcquHSEaDo4FBDUq1W5OEloIcd9YviP5gNV8fdvmgSNJGWw31ufSacQwaxGhK3BLHYiysF9TzPVYqWU5Mupv0hWS7ixIRxogMPjM01UDI324DDe62ravR2%2FbGKNX115TAMn4mn%2BoKqJXVFcA1wwpsWyXdN0UOf%2BS7L%2FhkU2kxEDx4wsVZMpdtYuwm25ZnooaHnFREI2DxNipg2UeSsSMQKWAJNecinh0YZthUH56MU5c2RU4m4jHyyBuZmU8NmnlgKBbTaJfNULGm6oPW6wVE3UmUdr16cMlGAv6QnBRaI1eWbUGE1zeZl%2BHlqFL4d4CHNj60J1YKvpzaalHq%2FLL%2FmwO7X4miZS3WS%2BPkTsRnG9OQ9ByGcIFwexNlmSucjEIYkzNIi14LxeHPb%2FlBXrdH%2FJ1FSW6X1MMWT%2FdPTO7WGqf6AIQuIoglwvABxLOwGRr6WdG0pTXfwNhxZMqZu2AW8DFS8IEPv6TP3uX1gYwqvvDvgY6pgHcwf5LYL2iulABwuz2yRSYx7u8rDf4zFO67wa08i7wJZlL%2FBucGeFBsJGG0dhaytV%2FII52aK0OV08lxKO%2F1K1Qi0MotWHbuuzQoW5%2BQiWm8%2BSTB5NICbVyYDYUstSabxfR7iLTBWH5Zzqb8gkwBDIG4BzZMh2lurmd7hDpAFULOyOKQXPYWMQPgMqobzGhJhbpnUWJ6vDVJsSnvqNESM6R6P%2FdmAwE&X-Amz-Signature=bba9be190431aaa4a503dbaed9256c14e60fd9554be2709488098d1fe19cee30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
