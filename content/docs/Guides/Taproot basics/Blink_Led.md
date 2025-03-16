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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE7XP2BH%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBM7js%2FuEEAxV3z3x75EJSe47Mon39jOHpry6BbcfZZnAiEA0NASDqEL2XpC6Jj9%2BUB7LRmbSXcqYWk1d41RsJ2Vd%2BUq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJezHsiC%2BMmwPw3wWircA44NgxSrvqgNqqk0SR67NH4t3oXSuYN80fwu56%2BLEivL2aJRhvA2PoCnbyJdvIgn3PzkQy28behsVITFHE0MV3B5vRTxLtERbvJHmsuwvRdsRs%2FKAJBCS45iRnFUZJkhRqcUR7TQWOdTw8KstZs4u9ophQxa2WIxseIFMv1083uyLvBkH%2BXabvuogz3xPMpsAyuHn7J3bOhuc3wiyYbcaEiredDzbf65gNDZyUqs%2BouI%2FvBIC742IfZ2O%2Fdg4IgHH%2B4ac85ggyALBo1s5XZUAfuXZkh7gWZHJTLIq59pO2oNy1Hx5P0DGQZhdQIlv88GVCFN%2BP4cHmSYuOR3MvVFc4gHi3BTfSdaIPXns8xQFNkB%2FkPPUotGFe0lVaCsqN158R5z7hLT%2BMPUIxwsxS%2FBe7bVD3H8OGqMmeOB1vZaaliSBRIvcResTE7VTCQECUMP%2BcmDluJzr%2B8qGjlX9D27G6Rj8106LhILwO6YQB64ZWL9NFLMoXTUB8omDOEt%2By%2B%2BqvGdOOEK25%2FL3KmPjVCcXsJdw1Qv2WJshdTLWENRTQgseumrtJnTGw0Xw5GGmoDhj6mDCiULBc2hr46EWthivElS715dxfI9NFkCvXKvyA0vC4JMfm6iJylNYzWmMJzc3L4GOqUBuOSlZ8Pvl2Gojww0KelObIzOa2e0tbZFpiGhNmNsTJp6x4%2B0AT%2FzgX4BhGr9OuVD11KyJ%2FxIkC9PXtUhzbYe2zsTZ69V0lDHTqdsANnbZYohN0gc0ovUeIs6g0Qytm8a7DONRCKIh8S4l07AFr3fszlvOQgy1B4oJ6S1mnLrhJ9ILvS%2FCjDC0ECU6ZgA%2FeWnBwVigaYDsk1eYul7C8My9J8RIMaq&X-Amz-Signature=59fb5ece365cd74d2bb593e5d817a0993d57f597dd16d39c02548a50bebb69d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HZ3WY4F%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgD1rW6J5H7aCq6Er24w0zHSGPEcUtb9ACmgJI%2FFWIlAIhALgYgFonK%2BuN%2B8s8Ef8Pjwiz2U3gXPfYC15ATJ0N4OQDKv8DCDUQABoMNjM3NDIzMTgzODA1Igw%2BFy7W41YZi6MMeGkq3ANXk5otyFqR0Uf7Q4YZW8TvQ7Hy3lQJx61EVYBwK9%2Bf9SWzzLRfXwam9Ws4iJGLMUKAz5gKWnIJ3fp5VbAmuoI01lhMe13JNPolmsAYH3uoZ7%2BAZdnHGn1gNuTvTgCSQH9PRQfpcFvswWS2rIEGaNdGS6ANXVVtYgzecDPsnMt2Uq4Cf2jujucO8VSIF4I2gHF9eUdmkWoqxbBdfgnyrLk1XiaZAOvEpCPIJwu6niCPKYlDg6xriwFxbWJ5t8uRBPc20UJVBC7KLn0ricP2SN36kfi%2FbKJInyLFQtDCSI215qMVzgZBsNKDAFj7fNdvzumbWVoC7Xae%2F8XoVimd9yz7wbcQHPwalFAZSTzZ%2BZZUL36miNZsHza5wLcQoVpOYrmwIlPgau3bHNRybdFY1Yytv36tZ0gsKMfSiq%2FAwkf1d5ZIQUW4abo4jfYRFKjVy%2F6Z4S1EZfUJJ9JWYsiNsdVtUPkssklTzONVcifbwHyozJnzyJIQGW3VBYiqwMMwZy3wr%2FD4rn7TLgGfTQAOh%2B0wSK7BSjFISZPRTblGThV488YhMXBTwuxYqGqI7zXuw7hxPPxrGe3S8XoIdJmadJv%2BSSKbS5w%2FAE%2FQwHNWYBA6Xlv2f6%2B6bsk%2FvcrttjC%2B3Ny%2BBjqkATFriSIrLrZyR93xw%2Bz2scjNmZ1XHRTQiEGFhP%2FwnhX4oIaZJ8nrjsUjSSXJxzfDrP6rPvXQHuqdM%2FqYZdSNy%2B3D75LXhNiZ2LLWAql2WRKlWAQGyWyh%2BGO82LlJabjNu7eLbk%2BM6Xf70xsVKBIBo22xLG8Qrd62nOs2N%2FYPKwbd9CelWNvGIOCBxqp4ymfAXDUr6zHgDTBKJJmdOhDXtm8ZYjJd&X-Amz-Signature=29fea729bc6dc40dd0adb6448ed3f69f67d99f442dd647cdb9a75a05f7d1eced&X-Amz-SignedHeaders=host&x-id=GetObject)

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
