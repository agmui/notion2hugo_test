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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAFHKZRS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHrol9gtq8dP0Ult9%2F%2F4tBkrsrT4893vDbyqe4XsD7wXAiAETFTODUOtpHtHfNa7jssJnVj9T74Uy7p8YfHbDDfJPSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMN0Ab8iq0dK%2FWRapaKtwDg9MpscamfBTMy8KLEY%2FVOkbrFCUF2L90TDZ8R%2BI9XrJb%2Bi4WKFJlb2Y4mth6lN2F6uvU6H9gnGah41rJohDRJslkhO6OTAPoHyoCVp1TSJpLus0Fj5ie4mY5W9GCqFGFHLG089sVRR6Vw7RnvNAhzvNGHca7cN6kBUuxfQenRH8pGFSFuu8aui79IxPISKtpJox3703onASpKcYcqA%2FiPtn41TNk0qUvvP0Iyn7WMBaa3laUXr2i2SX5tV89DGGoFBCIxCtCqPRB2jQmoXCZByvpQod8qA9OvFzHX9X0SwPbA1Fhzb8DA%2FSbDDmavTiPNu1uM6ySums7k2VdKqe%2Fr5RiM2y%2BIdyYWXfpWoMvIyLoTpK8hJWggTAvZOUDWHzYS9%2FUmbl4Esc5CCgdjpFJfoTJRQzsVwkeEefQvdm9RJU2xSCCL%2F3DTs673TrZWkpGoSW7Mr88Szr5S43TMRYbSntHYfGQ28eADFcvLPpbVIEXPIcCA%2BlKGXBluWs9KvIvwh1LYqAnaqiQIOCHakRZTmQAVGdDjgkzFwjwiNaZ6vzI5GJutrocQGtXzDvhF5hu8btFScbNmIJSU844FCWBry8rinhae%2FnUP8tdYtVzTAqu4VKpKvpZA1iyADsw%2B93yvQY6pgHW%2FR1ucgIxJc5zjkY0ddX8aB%2B9JPNnKXGOoglR%2FOH%2F0FYPG1kwtBcgZsyw5lhU8FTVAHt%2F0fpu23BLY2uH4TYFB1XcNmk9g1bLKZsqHTqbGphhcrjEIIO7eSyE%2BGycK8CkOegBRN5pQ%2B4diMbBESnVuMeFeo8Rm0jUDoV4frM7x3AwcFq2%2FnJck3SmSRRQAzn2uRuzoftVIbeU2I4ecC8l8%2BJ61h50&X-Amz-Signature=445fa087e419c762ab16d9d3bc75403c1aba2826e2530e92b96a8656600d11c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7QFSYRW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCviADK%2F5jPEM%2FaTsv2bAcmuuCBbic2za41blivcsWybwIhAPwbvxhNX6W0SpmZynV7cI9EosZse1bVr2%2BDrMIchsMfKv8DCDMQABoMNjM3NDIzMTgzODA1IgygEaxVaYanVpez6wYq3AOpER%2FtQTz%2FcXQJX9KmVYzT%2FDYwKmVziC2gUNhRCbYEvSHEx6aDyvs4waqjjCBvQQZ2jxoDGSxC72sJxCN%2BHoqd1oMTiEO6hgbGF1I6EIjXl25bnmGjIg5NqVyuZPQ3l7oo%2Fnve%2B%2BV9%2Flhqag7drWPimQpRKsbhKG5Itf%2BvDpY%2FEf3e6szNZWOnupzn5S9eZ6A03t0PsPPTdRRus%2FwrOwtrLxiR9ya%2BvaI2Cd%2FHErcYTODH3AcfsnRGln0BXcaY%2B0zkROz5Xk9Za8BTB%2FGou1jHndSy3R6NHfAWZL94ysa2CFxxw%2FFyeR1bZar%2FTwMzQu%2BFwb9Sv7UBFeS9cgYmkXwZbzZIweFm%2BFtJrBVs%2FhkOuNVfslIoxfWzHabAWx0D0lkrfPJollDZjdXPR8MZ1kfHMbk2z2uV1PG%2BsNXx98%2B71%2B80E%2BQDw%2FSqm7xhnD3uwFfpBPtdEG1X%2FdPoa6n236wa3ef%2B7x22gjMXAu4HX8pURrJXL%2BC3l6TebIqzNGjKHdClNqbgT%2B%2F8dTaeuKxXUcYQqDRR0jHGWp82UUD9%2Bxe427g1wZ0uWT4u0kWwWQuk5HYkipg%2FH7dVJ5mwAGHLJm6AnBNjJ69aZc%2BcbivPl5dLuc0ElxlV0MImUOi%2B%2FDCT3fK9BjqkATMU%2B9Zn9cTbAn71lV5olNzuXRHysVsYaLGGHHQQrk52lUbPzxtJ0VN5Lyf9NIFVp%2FjEZefIKFRMENYLzgZdrApK%2BM2jTCM6Z0Q6NMuqWAxBI7jUJvTsAmrXvDJy9bsZqtfY0F2eXBoTPJCcTIqM9dN4hDiJZ5DLyhp5krvjP98ohWnNhWnk31BHKYrSEIU0X0Ea0GUK9uYlw6iIp1dsy3jbNZjg&X-Amz-Signature=c9273ff25766b57198840ff3f60215d361cdbed3fa577e0b8adc34cd8dcc4772&X-Amz-SignedHeaders=host&x-id=GetObject)

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
