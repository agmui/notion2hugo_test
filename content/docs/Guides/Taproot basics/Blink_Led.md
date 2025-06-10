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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL6KLG7T%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE1KX1in3JRCOL7xeEQTwYkERyThKHaYlTTqjWgHQZeeAiA1cNrn78njuC6dvb%2BFLMcaQbaxUiCgMBQn5%2FfPmN5ZICqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTtm4PHEfFaUbbvWuKtwDEdfr7rzY4RkSAx7MOEaUBD8ueDqItIggLBX8GRrv7XrBqOmGWp7FJRIXa%2B0JYhhM1ehbbogHk1QR4N%2BvwZrQZgxN9jE2ZDZJTb5mak5kt9CQYCp0%2B5B3yXXdBED84Q42izNjss1l9gKo45yJMgUXZDLri2%2F1lsjywut%2Bl2dMbACJOsI3%2FDaTv0CCKDsdq%2FqEsOjCk0SLrxWbj1uiR%2FH7rbKG2JKpwNoTtzE9ijX2VDrNTSnC9zDF8gpR2HJFy13gSNBwgoAG3ANSuujb2VVoST0SHlkzFLyFRftQ2U5j9g4pWHLTxmMeJKIGGwVT05uOa%2FWrmdoWESvgXdtzCBXHOMJnhD%2B0AAyhCTC7tYSGL3rftoblRsaJrj7%2BEsc4qeFSXXUHCsnJdQotqI01eTBx1WmGGhugFNwP%2ByWhXzeBkD%2FqBWoXCYD15eh7KeoftOJ5vaO%2FJRhwCn1QAmDo4UwBvoCTo4yXZ8gKsk4Ec0X6vmH5DfSU5e6p0S5zqg8c3bQHFmA4Jd5JCNVi2YtPTYu2%2FQq0XxnjET%2B5eEVYaQHvJS9q8BZroRJIaVYNdA1IwgibqjRfB75KBR6okah0zh9%2Fv5QYC0LieBJtWp5nzbPDYq3stpYQw%2FI7ydMbOKUw4bOfwgY6pgGx0Qnb0sxp94g%2B3CeD1eq%2Bu265pfY0VEEro02%2FBIK%2Bhvl3qvtnC%2BdAK457D3aV586R4wegKUy18qYxw6v9RMa8B%2B7X3Xd8%2B9AtzmehocZ74huRgBKZWkyxvRB1vO4M2y9pwCOumduu9xJwqmRU6aItqJ35EFx7CPNsPYinRlyCPpzx2B3IlboWE4ctTsfm8YukolhXeg8WwaiTHVMpgv68VsS8fUw3&X-Amz-Signature=37f07fbfff0ea9ea6d688c6e026825494ddfd6d14f86b17d425fcf1232ab78c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4EZVUE%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKJHrb6VFV1MDNo%2BxlFT2j8GU8esLyCofK0AXSk863DAiANomWEn1rUrvr0GXs4FclnPsKOPyyXfjLXyjzuIyWM5SqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQf3RDDHHsRLyiH1KtwDOpNSW%2B%2BjdQLvgaKZ1tnFmYg49rVAvXYrRnswwrFUJPktVhu33b5oWS97dBuBO6mAce5YLJ0YtQgpi%2BR%2BeujjMVPII6ue15yP4dv2aXyJ0IKrqp%2B7FIfRclyICfR3TU5ZkSWn1iYMPpU31D2mdKfIocTXUDNwvKCrevPHdSqoxpKcwiLvuLMumAUFITk7bNqmNFlDVmbrqptRxfrtEOpeKS622h4njZ6UQuwlrdSgmq0NF%2BiRERC8L7LVTlgFz8ujgDxgTYZQ0TSQZ6NyZYZ%2BCn3UMf61M7aYfhMR7%2FBCN1dzcdHjiJ8Ohol%2FEurLw3PJVOEkROomyeCZyjh%2Be0ktHFYCK486UhDal%2FtM%2FCsDifLj8gX2I05sp1i0Qs6lYi6nUnbbaZqd02rMl%2BFmRucyAdJFTJFsRwGIGNg%2FtKY7wRdfAyax4bIQRYKWDcx4fXSv4M3hsK3QpuL8nZS5xd2x04bcYsKznGgXdT5S6wZZDPk7iQ%2BWgCGYjMgWaZvo16RvKoTURMTsHy5A6I7EscjqaToTCkQjSefMtKK9kevcLt1%2Fy7zvPRRN05K9WUhQdJGLHJMcxS7lU3VkHAxHN%2B3E1Xsp3WZDkgopZUSDgEjZu99cyfdAUMuKCjyDOD0w3LOfwgY6pgHVVfIgbky%2FYIXV8uUTz1IIBPmAQwWFsxRD2M5dFds3%2F3g90I4P4yS5utGGztBIjC%2B4pDVHK%2Bu%2Fsdc6J%2BWZQjhnT4Jmq3%2F%2FgWBSIFT0ozVusV1K8QoKHnZXRzrbzmhNqi5EUyxph03l5ROG2oA7LNo%2BPyQFj8LbbW18PsN5gPKKwJIWCaZgprgP%2FFEqdNICp03FdmfkE%2FgT6uefAgDqlwGR25InY2Vz&X-Amz-Signature=937a3dbf2d346e9ea82753e4e5f907c21e6d9705b05559f9ea261306fcae8af5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
