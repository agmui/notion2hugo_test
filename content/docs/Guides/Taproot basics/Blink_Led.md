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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y634BLG3%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCe%2BxUI0GizFb2cRa6ZHezFdkf5yxjIrTsVkw0i4GtsPwIhALW8sO8FyyFLdBLv2q2CGGptJxWLQijc3HklXuCtS0A3Kv8DCGcQABoMNjM3NDIzMTgzODA1IgyBp%2B%2B2DUJ2WrxOf9kq3AMf02Gdl%2FjInwiwnHMYLxwRx7kxf8eFaT04PkUXeAGCKywQVZOP3%2Fmm723%2BXRcf%2FFuIMYi%2Brjn602Qx4OY82CQVigseOVADycoaa8ybFT4u1atR1j%2FKXvuWxCJzxTtEEu3dXEcG1STvfwwOx2VslZOVpAhjqOZeEUrL1SvhYIbqPdP4AjEeMq83bIxal1GqIzmtz%2F9rppXaforVtGJP%2F2foF5T7A7DFLc0tnUmO2RUFbVM6PrDg5GBkNZijCgkA6o3UERH%2BadFcvhXGszccfnu6v6jtwl4pGWH6w%2FPq%2BFnJDlr1vGR%2BJhLw00PrxQNGjynVEUlX37JKGaBm7Drx4eFgZf4jY0rZ56P4xtHb6TXx%2FKhsHqSQhH5qUQz8bsjkpkRzL52pzGyp%2BDFQGeU1%2FxMkjm7QVlqyZtLnlXo%2Fq8a21ZgCFArVE50NxnrJxrZ5jvUo0cAh2A7ovgYidLxljS2WpgxEE96nI7PZuQgViH4Psr2WWoF8vxlpWHDN5eh3DIEAwTIInYgSkv7ncmcSmHjtZjbZMBNWxB%2FJCFfoFd8N7GA%2F3BEBA08xNL2xrDJPDIdT9a%2B%2BAjYNQApsm0gcQMOJNIs3JoMziwq0RyEC%2FKWKYYwzSSjV02WoXxFE6TDn8rK%2BBjqkAWnaMcGLnyEQQjKjX4TqDmae%2BD5mnM7I9uQ3tN5kUTEW28iCDcb5k6w3BuOJt4cj5PqlMgFFK5g4wwrJ1TcePR%2FzKu2tnrNKua2zPhUZ6gVcpEPGkpVssqoPantQA%2Fs61g6SsT8kNcH8irieqye%2BEdQZBIhvOerXK3SuWv5oP8snSx22Rm1R1XXPgdkwjgzVR6fTYrWfJVIu8kYO6PgOCtnh49H2&X-Amz-Signature=452ef1b8aacb0118622c3cf1c85ad5080186344eabfbae3476d8432e4d36d5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYMWGNJ%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDDAFPvB2kp8CM8AERFvm57lmIEUA2u7KMbbCXmokDWsgIga8jdXtjxl441s4f6GaCHf4ttG3gaIKUzmSztX1txsIUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLmj87GivBDHFS586yrcA96IoWwz4qlcCVmAjblYt%2F%2F6fPCPs2yNSjyUL%2Bfy74uSct%2BmFG5MzMnNUd7SczaBzGqm6JpqiOcQ%2BYmx0L3lYf69ohYPnbHzLBCP2xWaUJBlzRayDod7XxwTiTZknDvmJ0AF4bnOlPlL42mP%2BZ2l5pTRJmNwejNyzHBPUBkPgm8CA3pMUX%2BJB%2FtndwNjWzbN56JBOnKgk6CIP98hLpiOz10Nnfj8dozkZcsX4IfwNmaCQgI6UVSNcEC1KCcUGc6SdtRo4dXDDCycC9eucWx2avDIvbPiTS%2Fp5JeKgOZeNIh5smtM61lAwQAQC3tZKv2Jvwge7WRILVixsjMi3wfTW19n8bVeIS%2F3f1k3XxDPCoSqiMvNfmQayiyo1slxGSTfSWMAIloWoPBS5%2FxpW71horuxtzmuNPbueotcNSYF1ySspLFS%2F8QDJLbyHqOMj%2FOSFoe%2FtTAKFK6MI5uf4ThiK1CZ1Y1a4YPCw0P5uFx6gm0Mk0cmT75PoNUID4biTVRQ7ITT5QDyTfqzIGPMHC5NpPOQzYXIKE16YP94z4EhVJNN5TX3aSKI5JdIhsq2830W%2Fb%2FbaQ7EDxgJb1xMZKydcUrAdTMjQqUBRsKlkVMBrSSZPmnda1eBhNNTpQ3lMJDzsr4GOqUBJXBi4J0OyEYHK4sVWMGIIHnlEDzElAn8574ld8IE%2Fk5EVPV2y5Zxw2beoFGZyxr3YM1Is9ZG78qElypVzmujZsDsxn50a2SH7rxZFHyXBIFJi24KCJWt06kcEqC0IRJrmyXgpD49zh%2B0TbWG4WXujJvrtzLPaDtZIOtDbMZnCssUkKUXiJaXFEuz8m9RAHC5VGAI0khvFkrAjD06TkvDvJUt3U%2Fg&X-Amz-Signature=2e42d8d5c5142b6c53c07522cdd294bb84f3217212f2ee3442bd9c2dff8c023e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
