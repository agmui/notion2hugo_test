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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFONS2Z2%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCIzIq0eZP%2B4oS5GSId8JTyXubv0fCsetTs%2F76hC5evagIgCN3%2BOAu6y5yKik0qyQ%2FZmE5w9%2FOX3pdqRcNJwoEcAwMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNns389IjvuRqLcq3CrcA2Mx0OFcxREyIdE3UVZQW2Eu5VZWuRG6wUUXHc4nU7aIWGiqmbF8RYwLmAdrJk%2BlaRuyEb872oFyhHzLTGbNr0zo8pZ%2FS3xv9X%2BI5epyUbEWYzucQYL4NFERga6BfEoASdXhw2WlwvS38staZ2ELnOxTlexl63tFYk6nhlYtpmSHIMPO1ls6ELIyyAkVv47ogPbYl0k%2BB5IePSSdi3ROJF2F4kE6qZkyq694PdSJfE540BzCKkS2pdTyOxBHbtTdkt1R4MIrjY5KBqoSLcGU7ROT5L%2FyJ%2Fv2SAKZ1HnvXV9ESqzrOkXux0UlzIj75n2ptQ1hffssd%2FrxPyGFr4%2BVYX0clfoRHZPywUO3G8ChJqjP%2B1Jh0LYDP8MLxA%2BbFcEwCxhokK31IIcNHc9qEwlc5D2siDhnGUgecwO5UmLNv%2BqWxtbkgQRPgYGz6frJGG2Z7MeIru5bUzynjhjXhTjE%2FvuKfyl%2F%2BbxdmS%2F85ny9M5BcWAW9aeiQk9LHtM1CLIBYUugmTov7KuJ9M9nBM0c%2F%2BbDfBQWIPQimwoy5tXY%2BUxTl67HPwLgn03WbwnEu01mMhTCTVu52NzCmgZ4OmUxHhRRjIlFjy2oGYuj6YotteA7cR84YWIfYsBBjEHdEMOauh74GOqUB3%2BU2BbVhuYYvqY6SAJYRpb1ShGFkEOqSspiTPqJM9cRAHn1uKPolHnXCrakL2TtG6rHLSdSRxXGIUM7fa7lOOUdKyCMj%2FS4vTAIBPBsqTV5c%2FRZ8SFGr57oZzzaxHIBvZu%2FGmE3kzn%2F5VhqwvMhRwzrDQ2ybxG17bCNzqk%2BTQcdOKENGthVctSwFFLk9wAPApjJNEgj5BuGiE4SN7EIv7vYgagBg&X-Amz-Signature=921df237e5a270d58f0cbc2bda53733d28b9a2ea2050c8445b610cd2d86d2434&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAPVDR5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDK5bRsbOuHFtc8JzVgFsXez0JSLDMU2AOC1xUfpoFPzgIhAMFDoLQFWSHJ3LeyOW26G7HvWSmCzR2gBp%2Bm96YI1KEIKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6PKX6BEzwwMzFSyMq3AMjA1TwoVzro%2FtNaCp%2Btl3cnibrdmfybt1nE6j%2BtRp6Tdbgmn47LePQwXsJ34WnbFcTcrghdk2H2zCzFrTLsPQMSC2v02CUN2f21Z550lujY2hCBOiWD%2FzGypMFtttni7glrcvjvB6HUi2B2L5vJEnxkK01gyOZtPsFpSrb40LAeLl4be4a2hm%2FC8fLmgAKJ1gSWzuFQ79%2FeRAqruH0Xa0ybpsmQfVARLugie2LOHhw0HrzCcFMIqqtypysHKFJv06jBUS4Ztxa1wwE%2Be7wDIElkpjU5Dg%2BMl%2FfEJYFLfnYqA1i5EC67UOSPI96UXboYvQ2Cj%2FFiI0DdifkiCEvJQuggeWW3T6gkjS06XJNwS1%2Bshn6iMHMpsntkqYIlhuK7naXj%2B%2B4HwWnRiyHHHgNyl1dE%2BxKkZ2Y468jHpTjzWiubq80H4bGp2946Cf9tO7N4pvrLZ%2Bxe0oIYj9W2Q0506WCzI8It8XfPQ3CplCnx5zgGdZtMqgV5fnoA61x1kna6YCWFcovpXfRKDL33Jo7u47T%2BIHC1JCoFOUXwRRKQtMEUSaltEqOcxq%2FOJNFRBI3q8sIELBw%2BJ8nhazaab2A9ctAGcnXsvwjR2FcjgzxE1CxkQS795BcApUZnuwPOTCQsIe%2BBjqkAVixA4hCaiebjxksU6lXjDZi7I3gkV3pkQsdCYUGNdP%2FtAXDO6pWaKsurDVvUFEdc%2BEROacmhQJBbSBi8TF%2FeObPf8yUWQkBoI3nQ2XeFAPHuKTIDlcK7%2F78gIwLZQrjCmdeMfYVcEWWNXO57rV4j%2FSArw3q%2FOl6p6PhWjrxWzzCbjHi6RzScNJaKTyxKybktiS7tdNIfzHG7QmkZQbp7NcdyxBH&X-Amz-Signature=641ce73f4934f19dda837ae457733243e0f4a6d3f8ad7880b0b56bda0807cca7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
