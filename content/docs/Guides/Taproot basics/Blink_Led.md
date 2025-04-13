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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KHMRD5K%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD4E46O8pwKasegxuGDolmHtQy0pO4phZIPYJxtOS8E2gIhAN%2FMWm%2BpEPsL8VJX9%2FjqQWrUkhJtd8V5a5PBBIPiKPc7KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpHqfcHy308cymFAUq3APoi%2FZ0lrbuqPw7ZENWBDFJCObfa7HzPBHEb4lalIOvqlYKER3GRAj8pQypGIA9%2BqZ7oRFsp%2BA3wpOtj5BIvRrCSvhLLSg7ivry8Zc7Wvwc6UPjvVtvzY7TEpUkJuQ9Ah%2FqAMzWWInz%2Bywr3IbNj3kr8pp8q1FWnyXi4qhPjeeZCLEqC9y4WdHRUFa0EjYw%2FGidcJ79F34JmzYYFcntIOAsQTQG9BWLf8fM%2Fs647o5k4JmmxtkGu2csyL2%2F0NRWn29WXj9wynWt3p5wo8wJ8vaU7h0HC41UfImTsDvH6lpqJyXTCnlHhf4ytUo3QsJErJGP2aZqEXCsU%2BZefuaRQ55upgTSnJTffce3havW2wPPIt97I9PJitFwDK8BSwXmOGuJ4Il%2Bh5VDQMwIFbxpI4QfjV6EBYpS1rjKCJ6oHLDxhYwOHmM%2FycwGj62CPAcoEWdEA26fwZO4O2O7JgUByQ%2ByNNoueaNQqElQ%2FA4eaBkjoehg7F2LVQXyJAFtb4qhOdX56ucjEragPqaW%2F1ZHgB86UOEFt9ZoRq5Am6p4REBxQ%2Fj9eCYnvBum99QnV1V0v3rB2ZaQY%2FdGZtnCeqeI1x46O1TT8LX%2BpqAcFq2bckBFysAipxa1gQybdHLuzjCsve6%2FBjqkAffCpO2VLo4YHPfLslBX4l0tpqrXlzJXC7QGeEzl47LbbhpUKuiKuGkyAZ1%2B%2B4Dm2MrESYfr0j8%2B6WkHdUyPPj9vj7YLhO418JjWNSxeNGfmyIR06fV1XoD5Am%2BnP3uFMZ1PihEh3cs2cgscbvVqo910NJKSI8OWHfOaQnGaRCpACXhmWrdlAHeAg7K%2FlFhuEe7iMjoGUk%2FHLL%2BunBTEO%2BlcS0Br&X-Amz-Signature=3589ee332ef98610984f52315f8e0e12de1a05351b7e55a649a55a9ed187f225&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP7YK2UJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAxvsCNy0EMjj0aHfblRoZSKcfWqSJ2URJL3LqF9%2Fx8bAiEA0dve8p%2FuomnOYTe5nHtAVHWiW7YbX6Xph7iuoxH2oKwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIc6lnqBAYSkHJQt9ircA47AsgkGHb4ZBmsyzTwI395dimP1qgwQtwEtTwwXRqIsff%2BlMiK0x22Hpw0pIPypdOuBKluvzEaF3DPPzgEJEiuvOTeQGKaabGerx1SjOmPfiKCVQgyJQok02UqaArt1eK8fDIMWVG1iFe3EIE1qjbMRcW9Q70PTYAkxkeeqGgmDR%2F2yDYcMkgTIruiKzlGJsswUunpcn1vgUxGI%2BASPCQlK1uMorbMgvusT0V3Dlw41cvCJ%2FUM%2BjQNlzhmspwfYqNUcvgyUYJAzwNJVSi%2FQqlVgCADs5OtkaEJDucXU554k%2F9GBvOBuR5kxBdTskqkrLAq18q%2BJdnvfYGxdW7glhReKp1xbt%2FcA4I0S84QAUxypZg0f1o0FMTK84WCtzGyVj3QBsKYhYeXvt6WBRzBayQipOizXY7ERGCzCoxG49ZF7j6IRyzoCCXkVVoymegwGT2CQFycWa7gYg9OH6dbg%2BI2j6GHSXiBpQOmEmgSM8EYfpHP4UW3Nh45Mpgx8TC8p8y6pjoc%2FStTh2osOP7bElmXpsJjaLOb8Pr2aNjBQYseHrEdE%2FEbMpZSx6aTw1mHwGt%2B%2Fp5bUzFUp8K0c636NId0ntC8kqhOZIAOeVRT1leeozEFK66Zb8URGhMWdMJG%2B7r8GOqUBRPQPSuPsBDlDCBpgw7RZALxDMJcJ9MoSnsJ4hDS2N62TBoCj9TJBoQNs9I9obTzdO2z62CuNR3YFejpfaqVxnTo59v9UXFoBhgpvEfJDSBLrI2VOk%2B9I9PJ8mgBP%2BPpF8tK049EcrNPlVh5xmpG13gJ1NuSPEM%2BwskXPO7%2FjWObl7avbsssvAFr7Pay%2FY3uUj2BpEAS24fyFH49JeSubSEto6x2J&X-Amz-Signature=b1fbbd3a75d056e1c485950c4d0cf283072ada2c25bc9b6c771c00d2c6a5d9c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
