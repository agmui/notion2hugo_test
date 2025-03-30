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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KS7D5WA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDe0oWVDJK%2Fe33XanVFy%2Bh41XPTbSV61jMW0AGdxL%2FfCAIgS8y%2F7A2%2Bf1kH0EMU3bwzLqxnjqqHhDSq18eoFft7Zd4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpKULze17dxPsyohyrcA2PO%2B%2F9is4Pb5e1taYd%2Ff5PhHq7i1Fs%2Fat6CJ7NfabjbBG%2F4HRQjf9R2H%2By%2Bx9WOVXZ8gyZIMnvakboxaSx5qgsXOmHYsC4x%2FYGO%2FMi9lYTLOZ%2B6edIQE5tUBUkDRiKGUjSVDpxANXk3fXOtftuqef5ql22aIwq1MXbowdrxaju7CsSDUi1rA60a4h0%2F%2Frq54WUYHsnejDvvkzbkoQG2ZfGBQq6pkBUV88benfHv7RtMaVaN%2BwwFVyOlc3M1uZR2cCPrwGyeL9F264EQ%2Bi%2F5mzA6TRmh8r7iw2RgQmkqT52GgK5OXtAZueIJ%2BIJNtKd9xBh8EcvToiDiIVcRCyVQ2FF1LRcW2vpj7STfars8%2FjmBsBHrUBMp%2FlSsBHXSMQr%2BTn8lSJG5vKcRglrC5%2F59g3WbiP4o%2BvGHku3TVuiit5OemuR6Pj0X96VpUDf3B4pEIzLi1%2FJUbO4q%2BQuzV1OmO3UY%2FR7FEVJPXh1SWhQ3NnVPg9JCEuGVlxdexdLSyzaTEmiRO9QAVhd5NZUYNLmouT14PUyCzytzPySoIASyO8aBSXqjG9bJaBzglYV%2B1bSCTxgxxXEO6aJiI4r49MTqEHQWJV40lYj4VwnuyVhM8ylW0QfoNEcYKDSWGe1pMKPqor8GOqUBzq2znDALiz6NAmRG26kivJXko65qwGveRw2RenMYwDJPobNKyqjdXcsS1oj9INI5Vy27fVQEyntjyKtbjwJuBXkquTzcZPT1mqszpesrDmfgLInuny2I8U9wF1WfKDAffLraLCXyYzwR6ZD1h3jLSYgiMHL2%2FzhiCqDWOMDxNvYxqDCz7OaHLMOIKbtcQqEGD4g9ZqYIqzHDJ9EOf9FoO9yA2pfI&X-Amz-Signature=93fe1c578bf3361acd13617a0a38322bbf2578ba024719da0d285b8f4e013cdb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7G5YGGW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHsmrEah4JwZ%2FMXQn4fPOhDbaRWseIZYHZIvIk1V5PylAiAjGBSIjdqIxtvpsMJA7FuJSXN%2FpPL2T%2FImmGjgjn%2FR3iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoiTrHsdudye1tBpNKtwDEPUfQHWZ%2FRGkHPpkBdD4UUDyv0kP2dzhCVn3Yi%2B4t06%2Fl1h7tt67C2d1MCTc3yTfnh12p1DG34BEnv20EqNUh7DdlZDZrJb4BYCtA%2FnZL%2F9Q2AmDFz6SqJc%2BSSIHZQRBQdAhww1TOH8Y8aPW3wzAOMo6AlPwgZ8DciPgDZwniheXJ9YQSslP6ALnRzPCj692apxv0png6B6YzGSngmgC2mkjHcaNYBxoHvAytz1IHEobFWSz6PeiQEXUHBWhMxs2kgQH5u7o38kipqJnzAdXfETUBmYnxKy6iCUlnidbBdbdycVKxSRSpT7NvB%2BCh75Ew7xh8lPf88wBSAJzl0IhP%2BfaTA0bLpLlvPC4%2Bz%2BUscM6ggs3hbcxGFHI9SLcUiLIMpb69sIn9aih08RiSQJ4avjZxzWyvtNyZWEwycExFIUUXg2hBppvdJC4Pv502CVPQijcXqhwnOvz9ciItdJlkNjenJH%2FWKE%2B9VJ7CoeERWnxENc49j3CyCBOuGodGPO0dJPHtws10dyuoDk2OLa2IXCupYiaAu054qbvS5p5Ow8RZVaTAz4pJ%2FHpebsW5%2Bx6QoUddaNs8vGvWlaSoZxkJEFpZtWbe33vuOopbnFvZmNrDRreaQCOCM21Vr8wn%2BqivwY6pgGBzMN3OXrCuUovduIdyR%2BfNm1oZZdTyZfd%2BheCXik8BayiIKy1AVYspag5iT7uIxgKr%2Bcp92%2Fu9k2Gv%2Bos2rA4Nv%2F1RcHuyIZLLJhkanRoGSMDbldnlqGvdg7%2B2AcdCX8QvZkqwMesD85n4DOlBP18tYAXLnrr1GJ%2B%2FYIrryisa7AlqK0I5JsEs7dTkBVX3SjpNm9Ue%2Fqb0AvGoO5TRfOp7ytJoj%2Bo&X-Amz-Signature=11581d0bb41d0261ae61ed4df6a10338d5df8b33fbb5f3edb424beac9e528b86&X-Amz-SignedHeaders=host&x-id=GetObject)

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
