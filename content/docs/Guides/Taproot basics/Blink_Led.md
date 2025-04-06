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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQKYABLL%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIBnY9lSPXwHehtAyJ%2BwNAyzggPPr5UI96tRgMfPPFvAIgfNeTODbp3fvGqAoZ06b6zrbW9DT%2B2TNFbHSGPoQubSwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCHrQO5Ze%2BWPdEpoWCrcA3EEORzDzXGUeOfAyXBgubaghT0A4XHbtxLKDecgc2q6v7SpcG%2BkE0n3ouaoJGcwfoLZir3BHbBACjNHtTzAPjX1MXJsMVbYgR%2Bte8n3nYPwf4WesnOHthBOXNKryyT3%2FPCXCPnMkXeUKghroV2xAYZ54sNRvEoLV%2BpZkagUehcpGkXlXEd4ciuIXTmIgOZN70u4JMqxQDw2QHzEVvtP2T1MAkgEZEXo6JnmG9EywP9RwyAfSo9AvGNOKGRv6%2FMxsWRpjIGLVnY6Y21L%2Fwu6kj119gQPxfpneQY286HKgF2LlpJuv5Y%2F72z668nihBCcfd1GCFhcY%2BuFo6KEKtt5sZ8Funk79IC6V5LVAUbtIao86D35IOZ1TdFh8vSJNkI00CajmoQRw9jWThzO5ZQj%2FPNaJqSdy4R986Gb1ncvQ84oxGOM6%2BlexWNj5oNcNJntZ5sa95%2FVRq9LnIuNaZNGP1z%2BsKJmYWNsYB%2F8KBFfyCk9HOs3Ap92fh2M9czrxRuvoCuHpVAHabN%2BZdmASCUK0xyorB3w1%2BMEBaBeXCPPPW4BL29MaIkqAWCdBIVBOWSIYu4o3AioAy1ye8y%2F6%2Bnzhom8tjx%2FzDHVv5UA%2FW9%2BEfXY9aLEz%2BNAJw6QP%2FgIMJ7nx78GOqUBcgJ%2FZQh1T%2FR0NeLexw5e63rDxvKC%2FK1UzI7OlMZG%2FrdAsZ3lUrV%2FD1waBknNMgDmVhRg6ISXeCPmZhgkpKbycp5YHMOyBTGR%2B6HhuagkVGB260M%2Buxt5g53M%2BDipQvnAFxFvfQHqG7tBOwvXRqfUfpUSDZba9HZmQs1MolkSwttgtD2agPmzk2GyoHRS6qYI9%2BgzGl4yKsReHT9xhfs4U0f6K8Ox&X-Amz-Signature=642cd77a8999e07c352d6de4d60ccaf4f471cfb476aaab2df5e257d25c7c6da9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTMEEMS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt1mpFu7wrN5g1uPJgpORL3GtcIxGIxyEQ32q2coZjFgIhAMcqUT%2B0uPEN1ka4hAgeLuBkbaDBp%2F81pym0sCaXdmRvKv8DCDcQABoMNjM3NDIzMTgzODA1IgxuGGhD6Wi%2FcJlv2Moq3AO9R%2ByA0HAG2LHdUuGsRAYFjlKC7ayOYuCBIEUPsnV80Zng1fDssnuvpNxW1cU4QiLg55z3e7Mjjvfw0nkhGrpdh1taTMzCldfiaAZITiXrr8w0WtzvGVIycBoMNJDmA7Lxag6F%2F4%2FKgQ7OeSTyccNrNnLmyQ1h0E3%2BxOmXp4oCjDRu%2FisQd3JDbolDbpqxUuPOPqL7wOs59UtBMCFAiNdZ%2B1oOTngxj9DMLqQmq4gU%2Bu1prsweMBH7voAs80yUVbkkZlOvFO9fkPjGJmAznuGSY%2FqD2FsOF8JtKPyDA2oUn1WB2H%2FXEZDBbrEj5KDp%2F0RtgBccHY76zbAr7hHrc16RROuhqvWXBfQ%2ByB37bsQGnoiNGXI9iq90Nt6uP2OAZwVJ1yFVjwSxm9OAwJw%2FfMU63Xkk2Sh3yT2T7LUnLRlhb%2BdFwp0iDi3Gs9QFKJyxqlAfFMtprQCxPmuFCXwnUQxZtEHFOcgoZULF4OnsypKd8wWiqjKGjWmimp3zfboAK5VMMi2B6S%2FQucapE8jho3NlExK1kQoMYonFhtgy%2FUKLryGiYKnqdif%2BZsIfJ6dp4U0Uei11uH6Ay4POFupk1mmyr3%2FnT6yG8FETZhGb4WoRDLPi%2F3Y53LFBGXdXezCUyca%2FBjqkAR74c0NjCFlP6EpMj4x%2F2EAD%2BpcpxKZ365xC4jbbgsfmjad2p9Otry9JyZgr%2BwUXZ0PMeKOpYtC3a576Muq%2B4eTx53SzhjFqoVJpYTmm78R0d0hO6PMW0XPFGiwtfMUb5G1DS3NTFY2UiRWUiT%2Fs%2FV8MPFbpOF6HFA6864TX22mnztL0u1YaS9Ph8%2BTek6RsXaeu0pSsTZaE6W6iJmJ8xg71Zn4s&X-Amz-Signature=f85518b93cf4646e81d38f608905045a4989d4e8c63fde87b519b541b07204ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
