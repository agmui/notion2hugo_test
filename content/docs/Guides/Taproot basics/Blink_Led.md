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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BUPG34I%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQDqFBZzLkkiQGe2BfiLTAFMxAKMbuc5L6HJz0sH2iKFfwIhAMMrgmsD8AEgSh4unURuZ8llsa2SHpi1oqOj%2FlT%2Ffu2QKv8DCGcQABoMNjM3NDIzMTgzODA1Igy10yM3OdvMBERkjCYq3AM6YTbf4vqD1WwUR8cgOiwEUmH%2F2Vhlf1dnx8OCR909H5Nz2W%2FaADPJCl0QsNSC2brNYUuDxTmRGXJXCM2P7gPrtuCZ%2FWJLL3e9Eiv6k%2Bas4hf1i2IxvV5Ii3vRdQTGObgqKJhM7oqhLR3uOlPHd1JAq%2FF1AL16x0thjunY7YZ27EM9PNz2I4RXBXvvBEewGPRNrA1ZaDN2zTeH5NLK%2FG4wNmgj0m%2FnOJmbzbCgtiUa6m78mw2DwDzxPsk5VxGXmHCTwrYSUYJO2lCdA7QvrEa%2FXLaokILJ1v7dDSG8oPE%2FjwdD8NEFlbZotHCGJ8PT7bUSYuFDmjmNmleAg1aK2zrF6hrS3a1QWexYCV576w7cfzkqJs9btKdi%2BAZniiITrfCKy30ITWcQVdUaRBCy07zhf4lmbHBlnI3rDLy0tBXcyvIKopmwO%2BtuCjGNLUov61PMJbzwVSnlDSFvxi0ct8ptpRq8dWwMvYNz%2Bwmanrn%2FCytCNwf6t05GlHTOFTzFfum%2B9lTey3kecMaCX75sjifXIz11jrDz4r73DKCYOSXzEoRfLQZEvyVQ9Hg27k96nnHawi7I1otE2NEDGWNO4WXdPAMslzItCXQLOureTyBle8VJHAg4MMrjq6b0YzDm2P7EBjqkAZHbzGxZQB80%2FjX8upphuTA%2F1h7YFYsn5WUtRIpenK33W42fEdsB6KZOkDIRD6N0uTIK69Vsk%2Fr%2FBIujfQD6k9ca3AbqY9X%2FMP0AKePkOwDCw2en9CKS3%2BN0BC5yOCj4PJtKFDDAEx%2BCg%2FM2WP94fE3NpESayx%2BKhP7wzABKuUQCfIsFmDaPss3eARgzp%2BBvp%2FRd4mQy9GYC0mogyw0%2BoFHcRBL3&X-Amz-Signature=904c399c1923e9bc0a42626d2e6bfab7bacc1ebc0f1420d606be0b586f89328e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBNPFJ5H%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD4JMuT%2B2ZUZQvP1QGfkeXJuigr5G39RLMrEe9dMtx9aQIgDM%2FyerC7X%2F%2F2fLCWVQRthjISbmr4aELzQUmOUyljmQUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDIH65wrXfObC3Ju57CrcA9J9tSZ3fGS4XVpGI9CmbYHVGAXqJdrygfx5TV%2FzOPjWRiE22NkCfO2ms5UDp7JKrET5McY21xX2TbFbyJ3pQCc4m4%2FbL3S1%2BVbXT%2BznZrTdF3F6pKDuI4fUmoqWSk68qFZrsGFI%2FCvr%2BvC2cixdYKpYzDBoZAtK1Pj5qvNiadA9pwdlHLYy9pTd5rslxp3EqyvhzSXLNWnSfTIdsrKxqsmbCMnMVmcXICBxlfiWUcPpS5r8kcjmp%2BCf5M9Co%2FZYObzet680LuWu6LhbGDSByikn%2BRjs1xRIWd8DvUxYpTZ4Y%2Bmyup5QQBjHq4wt9RYUdX2H6GW5qgWw8%2F4XFyXM9gEi1lMqf9xonBFcLBt4WxZ7IeSZk4dkFODLhyaz3%2BX5u8aUjEVrCHf3vS9KnN29JewI6dGvx9GE3BnPRFbmCDeJi6WvKCqMF%2BcmORqM6Fx4gcK%2Fz70Fzed75HkG4NWer7wmpCLDvQLCeYcNmh8xLX2rEFFdZntyypgKoPfjgQsPSj5B3R34GIRQdzC2ZMPMFdwVpxHXjlDZ6U3E1wj000HD2zZ0wVeia1QFAEj7UwZ9aVcsrB4X6bhxR%2BAuKYeagsGJUt6wdxVnBl78nWN4jrxD94DKKPGmIIkffzhVMIPY%2FsQGOqUBxrAj1xppTDsYFIYHDVgia6xWXsQ9czTwhN69o14g7K0HNq1uU47VKNwyi4fXhK%2Ba3T7TUUJeue7TXD5wSffH2Xvlp9oiaPrrgg8OmFrAYUyMX3pnktr68YoRGBGkhM1bGxhZCwUA7MqLXRhtxt1Kuef%2BD%2BmZ0yDcZsmJ%2BOkh8%2BwVKG774vdcmx17It%2FV10saSN1tYUsZsRTLGHCQVFS4tvL%2FNyl2&X-Amz-Signature=8b77857a2cf161e4a55dcbb46ae8b30ebd4e1febdddc2393a2d9a67dfff1823e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
