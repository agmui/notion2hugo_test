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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J3F6JSX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHlYa%2BgcoC1J9I0HR6%2FusH36XKWN%2B69R8T23yUSJqGVTAiEAhWD0tp3FZkREUO8awTRyCwQgJs9qBTsVMHInxShFGuQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGsUQmEMACjaSauy%2FyrcA9AQbejm9Q3Wi94J2aElsxnsRmNr5PzrsLocCQfmQG%2Fk17tJ0EPY6UlSCClMp8AGmW78dlxfEWROHT6%2BdpCOvQyxUh6rFfI4iQQC1LyS5n%2Fh1lfVFBqPwtRRidp1%2B0mx8H8Axhkl0lnqR7IQ98j%2BwG5VI%2FTISN3QIGHD75zkbj43tDqG9pggK2dHZbeNg%2FEqDYJjCW9IH3iPrQ1WLvGiPnKiWb9R%2FSTASihVnKMCSGPf9id51pbXUp1xc8kWIrVjN9ducpgjyK8fEKB6D8ISb4skJxkDVXOrDEKN7iypVfET8E9HC6S92U1TiH1hpk0b22DXSq5NxDtL37xgYMTgIt%2FTdwlpRf%2BDoNwRxIbWJIyYnLErANvgVaztOL0cbByWrXaCxA7Uzg0YlSCnZJZzIEgBy4XM1Oy%2FUXdJAWGLrIFQVDUXQuwH1sxhmhHk6pBfwV49DiUk6Lw3xKpFgL6CoY%2FfolEK7%2FfJb1wMFhwU%2BeAqvugxRcVWft3TJI96OYJlMvKvJtRMfWfwU9qC0aVZAFR6VH6DLXwCJmsHLy9m9ro4zL7E6TjsNl9NPC8otm5iP4wbhmx%2FmkTGjQXqs1VnC%2BNRDsgIjvDPJtkH9gMNm%2BLq%2FTwLDL%2BM6W9qPnzWMOC10cIGOqUBZ3CBOP58IG6%2BAj5ieuoUFlCtX0MNHRTP6BokZNpgJKRQ568Lq%2FvF%2FHezWQFZXvvf5U5cW3%2FMvCKDLKbLMzRw1JGwbIImDHwzWJs2VghS1x0UKFZdPizVX9PTGswl1EyJgPjIhxGVB5%2Bc2hqPMP92VqKnv7EmqfQGl3grfr4RBUS2bIcgr2sB3JO7k0i5mNqzrKYWxIJlzfDbOEBc%2FsmS%2BJajgJuf&X-Amz-Signature=9686e9d263ab11160b940b181b1d7a8c30822c763127f37c65adc8a64ff969b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HNMDP2H%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVxNQCBmruuAJlHYTk7vSWoXSJ%2FUfpjK34AqWcZp5eigIgG%2BpJjc8hMCnfpo4pxLweUnx%2FGsErMDtuc%2FhVzEvLFrcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHppAjfqMSluXyt0qCrcA81jer%2FYESWC0mNoPPfWvO7KEnOTV%2BqmohDCEnNfkRzPmR5W3DnX37uqyYnAvEAH5OfqIY7qcGTp1qcIuyCbo3sPTab94jj20h2duDAnGzjTaDUVexS9ge5uhXuY0qkTmO8yY%2FYPKrCcfap3%2FCTLvX489FAihamEPD7yt2b%2FOwbYQHrilWlXEICLBl3%2BLRIeCGVT3VtOhLZCnyNpWvEDc3LIlTBJjI0DG7BQL0s8VNCAbE9LEZQI3CSwtdHbJuK1CdBsCgTnKFNCWXU0fGQZuupZ4YmUbXnBwAFppE1CvKaBKFCqChbAL7vvTt3dowVPPre3GsuyFatG%2FXHDjEZ%2FAyu7aDOjzf445vhQJamj%2FhizXQYWhbcxm0vWVnAkftGVOU4viXFUPTKqRmbBiOEz6QG1c7olKTV1Du2Tz363dEvRSqwmQZLbZ7JHZCdEcBAIuriFpIYdcwYTBnXXo8AuXo1wfcH8G82QTxn6AegWU2Sl%2FRYbbzIvg0wWqw%2B8fKGmd21YAB0IVFxp0eZVCAwDiJ0Vzkl4ssQI%2BeEKsHM6UpN0KkQ1%2BIOqSkgopYvgso%2BNNi1NDdfqErlN9ys86lZ%2Bdb2NRFIed%2B6H5%2B%2BipkUZo9gDkWszMPj30ASP%2BCZAMP%2B10cIGOqUBJotyPGvFq8vV9n19cfHBJxpv%2BTrElXmWW0k69KNt9DodsbT9FlZ1CGA8dS4NroWCBqpUT1IFOjBV%2BpPIt5FIzpQTXfZbefy8tpyGrIVou8mV5XHuATwkrCVFdbnROKlHIvvQUMhWMe2lauoJSoLCo%2BHgpyOKOL6YIolZw9BqUDZaMVQDth4CCnRttsa11u7imKhQjQKynbnC%2FenA%2BSjf6ZNWEY3x&X-Amz-Signature=ccdf851602a84c4e0109fe88816e26afdc989588e74afa4123184a76acb1f1e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
