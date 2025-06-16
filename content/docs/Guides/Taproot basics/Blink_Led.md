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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XED4O3Q%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDtvpmy0Ps9Ef25sCSIRx9PU0UqkpAGARfnyjz6XD%2Bc7gIhAIxwYUXAsh%2FTBksydQ3VA%2FRGN0ngDbuZZpkkI3VKPJc0Kv8DCF0QABoMNjM3NDIzMTgzODA1IgxSYCUXCnD1DzboD1Iq3AN1oxwqGziK8L6gpmrPcCoR1W5owbD6zES7v%2FQoOoT1JEoOm5L6PnOGGObo%2BucSDwejWB7bLQn%2F2nn2awpt5RbD6QICeP%2FQQ84kwBtsXVGjRZv%2BoVdvs8hTQuMhOMZA%2FdXFH39%2B%2BLKvzCBE7%2FX6sS%2FoqTgwfbrn2TtjWIfi7YILJc1W4YxvH8jgsOXW9ZLdja3NxdugHTCMzmIQsa3e0Mp3IP8OMIaxeTrjFbQO41GAci3SBO57FTXvqtU3QTUV6GkaoUDGmyJHFwTqYFtKdCWWYWovjSFQtXdgofXyU2VmUt0ls5zCF5f4clYZoFvAOnpI0ygORDXPfcW%2BFSf%2F%2Fqv4xFe3bAvjibLXQ%2Fd5tjf8PcCTahjn79EIzUe%2Fobxyl0nk8HnAbimg420H19xxLe8KSN6BLxwsuAPIGT8uW%2F5A%2BumMIE3i1ws4KB5azM9RyI2O6zFbC7n8FQzWAwB%2FF%2BamJCALMNNnIPoX33ofXtUK4HXJVcRsqn10%2ByGgOiDxy%2BU%2Fh5C4cVLTPRN1LSTyCQujahXC%2FB%2Fp%2FTF90BPwz5zUUXR1HJm4UL4hBBdHW9qatj4qN%2F0iQQpYWboBHdoy%2FKWlhkR4haG7y4uu0V32AM7q1xe3szbQtbMEtUJAcDD4gcDCBjqkAW51yabDGA7pIHT1rDgu9lKn3E0K5ZNsJ%2BDa4GiFY8DoSOOqC3kW%2Bpc%2B03PPcdJs81clSzY6ca3xN3fREHDdsGh50NCLpVIM9Q7yoOcAlaWMs9LXRSf7JTAoa8ypJ9fdFNVtahdna3oqSI7p7RZKA59dL9bOQ344pkLL%2BNZDzII%2BZ4N6Bnme4TTXXQXIdPTpChlwTQBN5q6SICKfQ2BqNuqp%2BU97&X-Amz-Signature=a27e89aa5dc8d991921ed261933fdb66fc4f720332bf75dff7b692f477b51584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF274S5P%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGCcns7uDhmNNY4Uk2%2F1YOAQs%2BqPdjcvw%2FcUcPMsCvTVAiEA0bmReBcam0QBMsU5lKmEM9o07kz8XfBFCEU7AHqtJbkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDB%2FuZTwKjbTJ%2F0QIoircAwHeWmkSEeB7a2Q%2Bdvnciuj6CEqxzk5F%2BI2tp9hp91uK11UPKt9Bc1wcG1GBDmVrCwzw%2BbHIc55ruhk8kiAcJLUqrboQdCXsQ3qCZJ84yOiKykRm1RDqGqwgFucUjCF0b%2BKhV%2BI%2BMBrxy%2Ffn5g%2BJ9WAg805Xpc2pDiHMQ%2F9tB43Yb67tSFTJqzk4%2FBWuH%2BS2uWBmOH4aOpcFstgAJoo%2FD8PEZjm6mW8vbHa5jR0C6%2Fy88uVa3BhmxqjrOiGdqBwSu5LjOIy7UfiHjc1j1gNCAv3ymY8o4Hq6CxHw3d1AJ7napAW%2FAH59HH03EpEtYgpSwZQtC6Uxkqu%2FIIu%2F%2BNtNuTe%2FHBGA8dLO%2FtAdugig6E2AfNqrH%2FukmX7eoM3G7zFYPBt2x49652qjBTTnVqa5wOIiT9MJkODWFqnQ56PVmxKN1%2Fl%2BTKf85JIDZ%2FLv0iaSbgptc6Gm7eFuPxkcYpdPIL2A9XtU3gH4diIjKd%2Bmx6W0bMec2HIYHcowTtannZfmNZ1bGaaHjYzD8JPoGMANt0nfjEv%2FFQvqMZiIkHjEyDgKnqKZBSLL7J7Mr5COe2NfKve26qZu61BJBj1F9Ts5id8QJNidvZ1ps1syzEBS0rBcdVg9MO6kLVelXI9WMLrkv8IGOqUB4HOGvfxbkPpa%2BBWp5kIYojyZFUIHYDh0FU%2F7Urjm0s25xxhkt%2FDaTZ12JfDCLrFVi2jR2BLQK9SfUVUUTTtRuEAXiNgvgRN5q%2FBmtXuAisQjFS7v%2BqU2nPAvgcKeSAsPCHHRBXwZ%2FXvNduBxaUjMUNFhzourwvbv2Wwe3WyUbblck84qHfjTGbaIuK8PR70Ig7m61fuqdJGkG%2BQG6pFBsytjN5pi&X-Amz-Signature=a5d2fbadaf1443cddae363ab3b86a8586b1e9885301df358396e5ece3a06d90b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
