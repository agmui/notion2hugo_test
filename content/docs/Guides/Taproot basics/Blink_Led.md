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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZHN6I7%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIHqbRgzwUI0ZJAfO2apJ78ju%2BAzbvBeG%2FR0iDIwMLVhJAiAInF2tjvbboWc9pyByrVt5vbcPreW%2FaZHI7PLN2aGJciqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmehuueSorskhZAJpKtwD8UVMARhiIrazWCWeYDn9EXOktBN%2F8pMkE7OvpRfh3LPFe8Nc8qR390h9A3Ombiw7CqKa0ceIFqiqbchM2MktFEWRqF3z1FhGpjgDP2FDna2krUU%2Fcj%2FW83lW5evaiB6qqMlKhRvrmXPZH%2F6wuE3QguhFRapV7frCUxRJWFXxYI%2FO4cP5TvTMrao4LhGQvZs6%2FF95LYenWb82WPjakH37LLyPf3QezWkJ53xSOy41rPM7HYQEnvjAt32X0Dy7iYoNVi3B1a9bm34pBH%2B8DXICrZyEfOb%2B4ZVnEl2hPDshkLych11CW4bbNZH0qY6OJbeqlhzdTe%2FIFd5EQAxc%2FSrEQhMAFvS3Sitd4A9v4qeCixobCmli2NbUe7Jke7j8ctjdEbDgEwrOaYgPN4UkHZ5kyBsTVnbUBu%2F19KvTJTXCzte8phdvCS0R%2BKqytxEqt3%2FrF8XqonbvIp5zM3NrUuImturz%2FQQpn5CVR7vBHVaj1R1WGLoE%2F6TSg4wb2zq9XSjK7CERvtqnrmjBq5XRKq2p8Jeotga0503r4zAavTU8AtLbwr2Z5St%2Bo77WtGJMOxFRgpvFAZwH%2Bn8UYdyg3os9bNmp7ClQcf3PF4JOComE7W8gRqGyqn6h3juOBeow9uu7vgY6pgGPirO0%2BQxhegyjJqv7VV%2F8%2FpqR9vnsUFSjhYXFlIeiCqO3hsiKvxfTqpvJE4GOb0lvtdgyijfPBT5MQY3MbhXEIuT%2BJLbPh%2F2yDc5n%2FBKf6yDFslgRLj8SXR9NHtFaGKG4BxXu7xUW5jaq7mslRpjTE%2F5kEh%2BLpALDXTZM46m8kPmuF1KmLFbqdybLzTmIcofVrwCqcHeJmNXb%2FdzjmUKGu%2FQjXQfE&X-Amz-Signature=bb0a3a6e20b8f84a0190c6081cc27331a76b1f7cf41bed58868aa55bd919815e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKE4LK4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICSUv5uIztRctzNjxbXm3ZaGtsQ1bIU7FduV2ByyXDWSAiEA20%2FCMQEyCrgLINdXvhdkTLx4TPReOOApbQHHLbVZPmMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOMPce2wD3dVyPLyuircA4StOLTr%2BGcWurCicrVHCqNZBF%2BcLZWb%2FQM8riLZqMCzZuHbux5p2wy42PTU00HQSs2cPVIQx0t8Ngk2o9LE7TR4y8PTqSICsKIi1aQMTdj8%2BBDFoCQ%2FoPW%2BOvXtPHPHMF4601FMLVLLE49QwMyOoALH92FkAqsdeRWU80X%2BWX2cBdTjJgLGZtipgPhjaD0GXwZNQe4M8YJC%2BdIGkOTd09s9%2B6%2BZ5Az%2BRrBxGzQxFrIEajdGR5Nw7sPYHWPTTla2ikdEbbKQFVaq%2F0Oxce5eeJO3tUxk4SlE%2Fh0E2bOL%2FbxM3qsnUg5U8KXzUbuathoer11peCdRxJi%2FIGsJ%2FsC8EI7cgPRQkfPzcBEIjrxUpLqlkVXkXL7QNQpw%2F%2FC0f6aqPXP2YtPXGb%2F5oIftKsiDMrDVg0txi8DUBectPYOKuyzpBs1KJzSHRCIK2aV1pTZdhOWZE%2FFW6drnPOX4JJGbTV5n0nurB0fcLKudV1ekNO6faX1t9ISgPSBzntM30BWX%2FepxLPh90o8rVA%2Fa86gnB9LbAxeZG6UPqcSNe1RmmGpNNPJgXPX%2BbhKq%2B3P0jZD0lsQ0euOen2wS3NGQBGo8DHZ0GEfLWBGE%2B2VFbt%2Bw%2FB7Kq1xqXvZm%2F%2BbR0AMVMPvru74GOqUBtY0%2BafYlWuXfZ%2BPWu8xH54RXcT1d4a2cmJPyZ5CI1jn8lgSOfKOjjvHhAQwYB8TegC%2F1%2BO0xdx%2B4jMkWSlIoi7vqmOJUZ3lHiXn3qHr50jMCFqm6xWPn7zC7h%2BE1kZHBcoflb7vT361kzepnGwlD36vovjCbqNKDB1IFqUBFLOkw8lYlsGcjR%2BXLiF3cqG0d2dxx56Injt%2Fjtd4UyIlNlacdriGe&X-Amz-Signature=93e252d39c778a6df8eb740929a7e6a42fbf3c6c32c984bd451b588aa348fd2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
