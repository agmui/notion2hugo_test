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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TGEZ7YT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIF5COx7MiDhTGcuof95lBCQob9faIC0QuGyhEznRUa0uAiAyhw8%2Fs04J2DXZKPudg0JUzy6eSChLEIFTnefP2d6G1Cr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMUeUbq96hyuxKCrOGKtwDAG6WWHwKLN8dZZNcMeSWPGEj2X%2BnNfMdZ0TFklAFtdP5BZS%2FjfurDbqeO5KxcSSA46vTmEN0aPx1kVGvqewGV3%2B0rYEjjNqNkoC7ibrIdHjx8cK2U1pS2%2F1X1TKNvjqvp7wgd02I5Co1Hq%2Bxk4gQiFrQ5hZdEfE%2FBSKlhcgidpdmfx9BLpX%2FTlHQYcJZmIVFZqWJl3CcYHVQKGTO2u%2FM15MD9iQPWxdMumSnNoYtowoNzdrGNRq2aTVvx0JP0rZMS81aPs%2Bx4hci0XdG0CV%2BX28lpMnmoXkox0JNalaFMzvnUkPyWGZYvxhmURSRnoyhGvjAiRh6LlO666r3SrXDmrJorPhLYJbO99y0ecSNxjze21AXHVdmMHUX5SPkPqub26C8hElt9cB6W9Cig%2B%2Frbaw2ilNyb0hKuyqyFG0AlNrRAGhQW8aY2cOa8EhPKDyVycdynkBqTgjeau3DlQuzzaQyjTCsuUJGysv3tKJga0w%2BAEjgacPNfOAEbFLL3C%2BS%2FOg%2FrymXQNDNh27WTmSW%2BPLP1A1CX3fIUvWxIQ7N7ORiiI%2BXlGt1PYVURBeisxcf%2F4Sp%2FIAE4pjv0h3Qk0j78JFiLvBdrQkFUrCnP%2FoC3KN7MoebbJ80c1PhZxMwuObPwwY6pgF2LhGW7TzoRokbruRGXJURzRlI7q2YU5LsUcAnUY9s2z7Tgnj9q9G4g7V%2FXaSh%2FLeQkx%2B4c5mZYH3oDov6z8TE44FLnGxLnHCLY3NOGOefOp4LvF0Kdk7oQAp9RtWoAzhQF%2B%2FVqynfQLZu290YLe7pRH5prUmrzxq5A%2F67kN2Sb%2Bjq28LLLipfR6tGpw4hTDGsbBHBMDlrbQqrwq9Cv4UKeGX3vDJy&X-Amz-Signature=8a4d95704343273b62f9ab029b535315bcb6bf01dd4a7de585e642ef302f9919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DMIUUT4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDgyulNT70R1T%2FkEGIbPWalfQpPzTNCKP6RMC8HtXlKRAIgdxddsRD3O9laVQNSrJlj11Vbp5uH7St5RilY2NqCyFwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDE%2FvSxvssvkl8S%2B1zSrcA5RkketbplFw8GBjA%2F4lWtPbe9UfXaC6SCFrhIT8OCIEWAy8XQFKixfJBjIqh6RlYRSFaPl8kzhG9%2F3CzgJubmkmicU7ce9sGeREvCy7TbSkTDKBFL0ABBp6J%2BcICJNNEphA7ivBJr9x2hU6ZvDI1L2AogOmoXu2RlHfyb0Se3deunGoqRf2mhw1v3KGneUDBKk1Te88LnhFVwJngdYKCHow%2FPDUq5i7R%2Br5fkGRLmf%2BuZ45GBtBbtlIgK2%2BrZMMQ6g7hWHdhpDPR0Y3rMxh7JA9Y0nT1SIiw8Om7XVHJ2wubsPJ7zFeeuQkTHAGE7UDyK9UnYXO8mQu8GQavbA8P0vgizlnQ2BNTAiiuegr5pnUKJq5%2B1CdM1Zxlx1jUOxfSaNaDhDUrgRwwCMrB6ygWru3mvhCEcPJgL7H6Ps6uVMDYnppdA4qIx2VoaDsBBY5s4%2BGB2ZvxVFw5X8MonrttcX6OrVd%2F%2FQbb%2BtgXbL%2Bf25lG007VDHp0%2BQgP%2F4da%2FEK1ILs%2FCsUI3BVdkPc7WDyNv7CAQ23Zj%2F5Onvp89gCDb2hucTMRiVKhuTmhKJLy1rnEsqELDoWXqlKFQ2HZw9VbEeoQe21dUFZlqwSnD1gZqz4gt4%2BfwaILmYkPHXQMOnmz8MGOqUBhMD5OXyQJWWXEpsv0eczImtUQ%2BUGVS7dyfxzO2JvDYcLxbFPmisMBdnxdMHAH6PgkvnmSvmIITGxaFH2q5rD%2BNo%2BhXg8ClSwYXKJJrBrstU8HdGHVDZXV1eZZTTA5Rrxjy6EE4IaOnS7OpBhKaM9Llq8ih0aNmSHpmNmQqkIjPKCq0RmvZEzukns5NQv7Sk%2FlvCnj6uwVPuzsFtOCXPjIdttauD8&X-Amz-Signature=ad8cc788140cc7b0a7090c984e809ab873ccb5cbc0434c3e67f1be8913b17193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
