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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T3QTCCQ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIBhu%2BoX0ddxpNpFHBCimr0o%2F9uxbM8Kup6WHBgvNnjQFAiEAgywrUERhRLvgkPoHa9v1gOYip2Y4pPJC0y9vGocNA3kq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAQaa2wLGoZcoWgzbCrcA4xWsBbCicWTTxBF9aZ6NaUzTI8vyHKwQ5m71weFFlWQyUcnAjl2Gl%2F8Y04qlSfKJ0jL5OMNlbrltCPxfURl5I%2BzFi3KNkASAcCY0iRVzWJS4SKVcZ18gUgPmlekm6tBHBtuUAzHdwv7RRb3G9MpheYJqAmNfnFvf1O1%2Bk1s33pIJCfIBp4GbdtYuhOCAVQaD1wtLqEEMorzGxXoSvN6ellM7hFmVn9JvUe6eW2CFhhywVtAZt%2BSqX%2BpC%2FCVSBKBJ2tC1gWb42D5Yyg%2F1OuQ2G4JS7b9QY395IH0zNrsZUKzE452c31IQMxTFvhmZTis1G%2BWYEPEi7CYvAEon%2FD1wRz1GkH3ID6qja4RcoZPqGRAlUNCnCC4sv6p3CxtAIgvp6830WR0nhXD9CNdAFZkQDDgCJtIYWmYDge%2BX0pSbMP6xYdzo46Se5fzE3JxT0lmWzIgXhCuL6OM9ntP8t6x23RFJCq%2BFT1%2BqNnsdSA91Sm5Grt8ZoeSpxxXoXTuZQIXshJQ5n%2BMmMitGjpBBHsy8JGWjhLJAqa7RjCgUFIh%2BD5JJxqMVAq1mIHoYTGqWuLKPjRMkVZU2%2FMr8fvrY9QjmQGQpAcRStF5m19ymAUnxxKzmkhQOUtdfJ6W%2B3miMOKOtr4GOqUBm3djxzq0mwXmmAU8ovR%2BAdWYQBeKSFvrpYAlqKXc6sDPh15cQ4qFQVo0a7k%2BtkOJk1TSQ2csJiNwFeoUfx1GYBNOhsVQbIwGIJ4VahJiUweot3Vhvy1xjDHO5MIbNhFtAP9TUyXbChBLd%2BYIIMbXt5B76wIQMBlvaH3R3vxkzwFwfe%2FIx44%2FmcPVHXUrU9yw8%2BEflj1zm855BaL0se8xvNWu4mIU&X-Amz-Signature=acee17e6c0be0cd09994536c26fc4fab8dffd9c1d9cce58e32783b67961c2c74&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N375YKG%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICJ5ukR8MU1OuqdwUb9aH0Q3pyilgitoogKymvtIhJMeAiAeFP7FPZCbdA9LsAkGLLSEvKbvD%2Ff0lTjaE07cumE6gCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMP3%2BndsNBX9FYS60vKtwDZKyKpVnk6G88757ud7vCBGp%2FV7398Nk875gGGPXkP9ZFXJXour01N5UKUAixurt4uW9Uw3sESJuEmAEXztJ%2FqiON4b%2BNFMGEIQLboucmAEq2t018%2BvuiXuLHc4Mu0mAetJBLmzHgzFFCPsVKMQkWm713lgVYqn%2BO9eMsuPZE9xxDc85g9%2BpdCGAxGbfCkPaU3ssYhu9n%2BlXLVv2o3Jiws6Zh5zuqTT1R4JeDOp%2FAS8uI0mi8RfKqYyjdl%2BxottZwez3z%2FQCEBbQzAk4oQe6PJU37VGM%2F8k7cWMqCDaksh60dR1uKbA7GSJAkdXgEqozLInxSizXtfaL9bDVLRUdgQoZPDq%2BI66UbJP5uB0%2FM1XgBr%2B32dTEgkxFfobABCPStKDY266ov389VMyw3jxdrAc%2BDvIRWyYVS8STq4O7HMtWpcnI%2FoB7%2BEtd0hmCn29tXKmgDOQy6bCq7ru146B%2B867OlF5iWcbqaHso4vw9iWRX8%2FwpV%2F0tWamHQ1Gxtuz4efjI7T%2FbnB6vL1mMD1lb00CjGwwzoc8xins%2FSwnF9K2%2Fsec8EB7J88ArFdXCczE0oFPxxgHqb07LXRc%2BBxE0DsPgOnR9B4NSyZz10UYwK0FOIW86Am15cMwbplaww8I%2B2vgY6pgHnva3limHLsD%2FFdIZc3SnhMw7%2Bj12S8XDb6va6IuvR5R7i3JrwFeMupOiMH2ovRDZiMBvM3YHGegQPgfg%2BTXflYJdYoPEIODqcTCtLj663w8o0faf6gKILMSGUf60PupI5FVgILlORhz000PzvTYbkE7hdCGRDCEjGB54QJWlpnYIZlWJUPYDXXfDM4ION2mKe9khbTo37bjb%2B74GXfi7ejPA8JAIe&X-Amz-Signature=638fc2f2fc4c5da9ca986713268a78ba714fc3d10726fa67c64dcbc87ff148d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
