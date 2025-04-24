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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTGZRR3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBrmW0zZGZOSgPt2ejsaOBT25JtVUrFmr%2Bm%2BLey1G%2F%2FjAiBOy5IGeSnDJUNM62XNGMmHTcjS5p3%2FXSgsHhpB1u2VzCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMMdubBQeB8D0X5keKKtwDEg72%2B471vG0J7RkW21T9TYGwdV1prKo7NHn35grKKOsstofESXQVnPwXfaOXBoitxoKv4D%2FJmaYY%2FT2JJLHAqG0xKi3XX1pqvcB6Qt%2FAQKc%2B3l22WR%2BLZQI2Hp1dczUKtTil%2B1VIBz0b4YO6EeulAjo0sOPctXi1LwvzA4UZLe9hW0UMYaMlTv5m2%2B90BlcibTGSgJ8iwH6s%2F9tPYs8R5BLWutwJqIer%2BCPJZNTe4eCbMSk8BxBUfmbS3xbOG%2BD17i%2B%2FZOt5yzCdgI4tEAEt%2Fz1pJe%2BzcGbaTMeougSrkRrOB5973eR1vf1F9Nt7H%2Fi3FqXMs8lZChpqdGQDhmivdbyC4aalg5f9P1tdU4xiefz527uOJMsuweEtHWt969Zt7aDe7J7jSrIh%2Bt71s1m0O9Blht3CXPUE7Cu1hngDJ3Zf1KOzI3YuzGoZo7INFQeF%2F861iSpbqLcpDpfVWgYmaBORVYeYn4%2FrKLBiHb%2BForc0FyJEAxXWfPvqBflF6j%2FduE5yOWlmoSZryNVZYyJCmvt0zXmIS4cLDlNtmDiCzCD3yWaZZ01VRPSGW0%2BPEEuI6QK4xsULwsQPFWbOoSBjTpKIz%2BIlsiattYcg%2F1msT1NpkDSPCamD74C9qFcwqoWpwAY6pgFuOoB2AqPPCwTaNzvU1GTIOATwf2TxCy6ePUq8t7AVUWiRO%2B6SvEAf3EoiLPxq7qHavusP2LNbZBhd8M35dNs0KkhX2gc1tzhszqW0gKOQ3nBWpvvFVqkj7hqDhQXK8cJ7tD3ro84gahbkUDoK91MxP58oG3hPTeMQw6AoOdYL7hBW9p9mndJ2PTMnErOeSFG64l6O5aYpd0IE8mNKUEoiZs8ecERS&X-Amz-Signature=9e039359aa2e1a9216afa37a71dbe48526d0b3579ecfa947400cd75cfb0e9e67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPTD37GO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBmMu8zSnAuDit4F3V1FyggZzzeU615pO1f5dw7rkL%2FJAiBVEANj6z7dhwsd2e3UM3XmlFlhPoQT9JMybOmoQi8P0yr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM2cMP2jdZ9UUYm%2BpPKtwD3nKfADqktqI0XScjErWzwkTHArqpgOVQtiRLY%2FzwYUX2zeOhz2tWS0kTveYBIApPzWW66XKodQGA8DjyFUbv%2F1t4VNcJL8loDMGj5sQ5qNjenV1vwnqMT92qUyxbveh10ddE%2Bg3%2B%2Bo5%2B8OsxZxvpE6jlNshClsxzQwBsUghZ2r%2FE36NV2gUJetGGzLYZp3s4XDcdvwGFFiKbK%2F0Whukp2aHueeSujc%2FdNQ2xTIKcVafpnIkFy9bCeQEZgPLREf2H90BFUeTgWzUPOm1EwtcVZ4y%2Ffbs%2BF2MmcjAmWJgOIRB5Ky1Uf4dY%2BYWEdk%2FMpLebdkg04yq9FQB4nvjzDLKymHNeZKWLd%2FnRvuzH9I5Fzr9SOScySvFtroJLTJozkEMSoWNl2%2F%2BLDN6ieCJbOucWYYxkfRj7pf0D8tsovlAI1AqOWykLjwC3FPzl435vPvfoPB04LHa%2B5ejiF2OfuEY8Op6GFsf%2FqJJFRhNzUaKkEIl2JvXI%2F5OEZ29CfZ2NS61MaUmQtw8f%2B3IJARv5CMDglkvgTvTWrikuUA3eH%2Bc%2BBgC%2FwY%2B045admEmmW1Zc9QTkwvvUEI4eC13bau%2FrdvZaNQEFvHok1TB81rF7d7eB%2BhcbGto4qUPEVCpwuJsw3ISpwAY6pgF5BpFdwIaqt1vIhW95o4kqhrgI%2B6xmQZ7%2Fxw%2FjRAby2DKP9dC%2BNQqOSXPFfTdFC5YUwZ6r075xdslcBAzIr%2FYgNb7mqu114lgcj9F119J779IFqxet8b7dLwnAAH1ZmMRJ8aQd%2Fki2OOACI5gyVOfS2hkVBFatJFi2p%2FfDSsDe3T5WZtb2CkS1EHSmNvC6xY8SSOorN12%2BBYEHpfboV2rzIe5gtpLM&X-Amz-Signature=1f2302852e9a00b6342ba15253bf6402d70e999be633b6fa93ce62ca435e32c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
