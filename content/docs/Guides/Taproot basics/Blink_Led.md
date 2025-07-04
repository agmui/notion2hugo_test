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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QNBFU5R%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC3EmN7FQeauP2SbLX0cupv6X5%2B6%2FU6U0P7P22%2BzkmgfgIhAItqlLyDKPfT%2FVlTlnC7MHymQGUJ%2BLJG2LE9m8YzEjs8Kv8DCC4QABoMNjM3NDIzMTgzODA1IgzeaMm2rQkveeCn6zsq3APH6n2urUcLs%2FsjvwDWToER4nz4vbWqn%2Bkf%2BOaR55lEtLOT5fDioqAeoVqUC54j%2BgqMZxcGK7wJSl2iEgdSSkD1hrDWGTaojWm1%2BvVZio76EcRs2Su5lCuemYIvG5qkvZNNmOfHskOODeWNfAal9IRYFElvEUBPL%2F4ioaLyW5xnGNqpjxlaNfUOg0%2BD%2FOM%2FeFdWs47HXNlRTzbbGmqP5g1yPPah6XPRP2AvXpbQscGkLpLaepAUiHTnDlxXtilt7kch6mM4%2F8XoHwaXp5Ak9apdZh90efROCA%2BtgHpJiKDghMSQo03LidI786lzJ6vI%2FRzzbCuLD31gAId%2ByIdBxLq2CLercxkdCzjkLtidVQWb0%2B1ktDtfG2%2FTl2XtmY1QfA8RHcxsO9ronEB79C5ENi75h8VArc57PHSTYzaUgijFdC8p5JfwOxh3X5upo7TNx8dKt8vQNVfI0zOU1ACUGXgaoW0I6gppg5ajKrPTmhO2mPBtYDHwwNLBhUzNNCBEsxe3NtFPFdPxTTDrWgF1dDLt6MoR7tuTPWNUILqP73A542nWIeNaKoslQg%2BX0zDLguKyEsAKMHcMzmq2JP%2BLkyNfle9dNJfsVR3HjDBp7UzqzByy7GuLF9icj5anKDCpnJ%2FDBjqkAcZuiCVPS%2B%2FRKmL4bNoaN6R0Ba2TcNoZTs3mIpJ0Ll8W9eUzAuRrHVONJrl2FdHBoW6gFHgPe2cbtMoXF5WIHAUr6kd2B81q%2FOso3%2FPuwus90%2FQ6I7juIkwDQAaaaXySfKvDuUFW7cYdvV%2B%2BmFuzyfMJKTjHhqgq5iyeUyT020KWpUxy0lVFGI%2Ft2QwInLcBrOKm1IHLlRdvJJojkteE0kiQHmTN&X-Amz-Signature=f9062a37c647185dc61d27b77bfb6d79f9a661d2cb9f20fbed514522727db54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOPCKVZ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T132341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCcAs0B%2F3lU%2BKyF2t0QgCILwpYUTJpG7n0JV3i28dLwEQIhAMee1e8uumV%2FhCw9g4dejpYYZsE9nb3R0dXbn3d2gZQdKv8DCC4QABoMNjM3NDIzMTgzODA1IgxCo62Z81L9gFagPsUq3AMwb5S5bpw9j%2Bm77OMuqJj7aXidVspx8pTzo6K%2FX%2FZcIFJPXArdvO%2BMhUWUvK7wNnrnuZRe5CqVQ1UxfclCTmF3dGdEwSldHAnWxUMurTDuIiYAcqMb%2B%2FzsebPSgbo055aHxqbCZ5whnXCz4GCk4eQ0%2Ba%2B4pE4pmcqOhzaGbc4KGhktJxO2jKUrIK%2BtQiLQcqwTYdnjwEuoZVWrgdp7h%2FG%2FWscs%2BnbLo3oyEMybBxzJsiY95mOzEC6Q3RBWp9dIMrsED2yOYW%2BVoYh%2Bge%2FLrZSFi5piV%2B3tOLHIUKzfSy%2BIgvphl%2FBgRBettut9Xf%2BR8KDXB0ctdwxei0Yh5HA%2B7jVerBASWbIRIZ8Iw%2BsXt8%2FH9p3cBKORXOqUf6BFtbBgBzjtaT3ycqkRbkLp9OMGhraltm6d5tOx6gUcxHA%2B91EcaAihD8VObw4ubcYIU1J1udqKPHDi1%2FK0JoYKWI1lSq3GyAsIZjzbiIM4s96hpBLuvixH%2BU8frNmDxNZtaZmtx6lib4Tm7UOuaq24bqYZ5FWRhtsPtGjSkno3Ee0Yder%2FUjGv5Ltu4BEzjakx9hlKpyrZcPJ9skNyi0XZM5XDo2xBq3WSPv5jSOC0ItrARQOsXq%2FGfcY61x4EnfTXQTD3m5%2FDBjqkAXbqPFsbSlZPRhRrl%2Fw3D5tHtynkGfJqcLmAfogxWNrksi8v%2BivNdP96vwykWngHeVAtUOq%2FGMRHUU0eIGBD9%2BBjhAAvbbvnFEDxQkmJ%2F2kxbx6CpiVPlaiKol8fplE48nJFtNDPzt1Q3XmpEPXOOiIdY8KYo5s3DyhgAfiPDme3Ye%2B0VlOKh1Yji%2FgnEIaL2DOqhIGsQR5ox5fIdDNRT6H7Sya3&X-Amz-Signature=fda8ae56e3900f1e23e69f9b7caa442d641e9e6257ad8966ef16fa253a6face2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
