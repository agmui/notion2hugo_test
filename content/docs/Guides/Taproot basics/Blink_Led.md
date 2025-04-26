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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KLL3ZF3%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdSJd8mKfMCiSdwUn5nvsDgFT8I%2Fspk1S41UQiNC92DAiAlOT6S5GnjR7VchijMSzlvCDEMJhApeaF6oxk0iazMFyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM2QPlN4n3MpCSC%2Fy%2FKtwDx6wy1DHKEkVGz1Nq%2BYWwm%2B8Os88W%2ByeoOZJKNzLcMmuHNntYlyszqMp%2BTRDGL8JA%2B6YeJ%2FpwIp3fhcFRq86RBVtQI0iskWN1%2BqeT2XrgyreRcIRoTd%2BrUWqnm9HadNEvK1DuxHl287sd0elxzAodlAhD7L0hGmPNsBPp1elvafHMyuJ1RodDU95qKwjGKfgHw61Ae5V0xYrekQqrsy7jArnmIVd2PZdqLk9DCBx0Vt8x7nJ1ycyLIMRakuHQVITYleLZP1E5eO6dRAmDYeFX%2Ft3UY9WK9%2FM0tRLSMnoEQoTpEC%2BvZiYRZevnDWPG%2B3WzyNTyim5GDhXUYKoGSqOSHOLqAjRXCsWS5twNpAml%2BhqwzndjmBXPZx1TZmdL8WsKtyplcxYlHJg7%2BFAFr1Q%2B7u7wyoI0LgG4lBO0DiBpeaQM8T%2FO6kGbqVmF2Z9y5EGmoWGRQxge1IDOGs%2B3COR7J9eCE%2B1inzKAMq%2F2tiQyDDeoANxUynBn9DpAPhmnNIbzkR4mkXvmXwBb9bZrxqAhqxZFP80mfO3w3IR4iMP2fI%2FReTcqN%2FVaHdBPaNtSbzvjOEqC28Fq6X1JeyJxEDYQbXhGSJvsUJ4VOTGFwhv9YhjrfIa1U3pszVhoS7IwtISywAY6pgHFZxSkFfhr%2BCYqOD1Rguk12c2fBWWV7VN55o5h6HqG7KABZCqoiAzOjimdLCgP6TUmsGblJBxGlJxCrxhjpPfN8PvJBGZdN7kQYbODoNAqxGZldtm4Jf2BwLqELrvWrnUNntAF7PByuFqJAkczt4OImhtqbSznxsQwuaEdTzoIhuE6UtNe9bK7%2FeWa5wfL3rXI7OsLuvQ6rMJYdoZHOl5eq6tW%2F3IS&X-Amz-Signature=422797f3cc9aedff6d336321094663cadd042e970230f2708849a006f0c993ac&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BJNNFX%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBD9XFTajO4xz1JzFd%2Bs8QUtreh%2F5LM1luz1act7dq8dAiB3x%2F9BJ4YxwpEcx8Q0Fn2VEZglmkWx6eedX%2FEoxViMzir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMENswRjEiWyugQTy9KtwDoLaleWC9LIQJDqUrZcdY2DvDlL71W7dLP2ZLcbbAVV2LwrjkGJz%2FDwqBpkF6YZrgbWD46mBWTg3scrfhrIj7Y4t7RgaDSp6mx9ovuKMlUvkH4pLVKrD7VdNbxrKauHh67iHNs8ilkfpR60ZFQwpAr7hPUUzFBRxr037k8DOuTQMo4Fkvr%2FMLx9beE4Fl%2FAq2sbEUwFDRXywCu87JLMsTYlWjGwGqUZOhXRs9EMtHfBz%2FkeXqs1LolZkfD6n1blIXcmvU8uKZiDZCIA2vnY%2FwuUjuKK9GgmgpZ4Sg2b0FJ5I4Z4CwIGTfrRtJrqz2MmNcXAfs1%2BXxnu8gGj3poG3CEcu8DEKoU9FLDGWUS9el4hKkydQ%2F0T%2BkkFNivaIugf49wbtvmGO9qUScpTBsPnP0HTDrrIV7qPTaYS1n6%2BQ8AefFql5ujrgpcaj9SQjK7ybGPd4mWZvsZGC4qdJvtRSsOte5NmanUMwCJ8OeFPZw1u%2F7XJiwNatSuRXE1PlOUg0iQnI13lO0iR0hNABtuV6KYodWDEB0ktFYKtqC%2BxCpsgMSWDlvx%2FdXv7dEbzk1Vlk%2Fj5IgDBpqYOJGtCvGiBeodMAwe1Vc%2Fcqwyqnd%2B2O2Bwiu7yNioTdScgIbT48w57uywAY6pgEa0Kyz1o9gvBzk6GTN1yrWbJzfv6djikaychbiZXZHRFyBDyexSyxIbRD8%2Ft7Dfoe5EJZwp0mGbWpMPuHcCkvzNPU7ECs5UPqo9VGw7yzCa%2BQ3DdCdAApsE9oQiOTcquhWVm5UycAF1aiGCjXayNsXORk%2FtFSdm1xB1HT8qVXkaC1QSJdvB%2Fj8Q0vO7Ge%2FesNL%2F2nq%2FjtfF9wea8lA6vARuRJZ6SVi&X-Amz-Signature=1b75724775155163adf1d25a2989268bed53df2bfbdef19be42bea34b8d5cd5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
