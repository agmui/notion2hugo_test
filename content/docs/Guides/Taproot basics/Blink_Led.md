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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZY5RX22%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChJ7e3fWgtCW1rUIkiiHHgE6vLMMPQy9f8yTJB1bitUAIhANaU3KZFxm%2FmkpkE3L7qADWldBp%2FklglTNFJo2zvNsRHKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8z1jYB8sNfTCK9ZUq3APAV%2FQlyO0z9dIw15WhGEod%2BmJ1QZq%2BwG1G64S78kW9XU%2ByZUEpGDvHMqTHY4%2Bf9xgjnWCrwM23awwQ3BUB3nRx0cHNvmyWG4vJCs46dHvcVzKL1K9Kbo5OGuxYeBR8H%2BN4Oflf0YHopPCwvLbcWdr309AHYyuJwnSt%2FkDpUBWNx7YQhHSURINy7IJNJTcrgcekEq%2BKSyTNG6KWuz4SJC9K0WwE%2FY%2FIfWJw6%2FrHUpqc3ujeCVmwIKGz97s%2FB%2BsD3ZYtlE8SkEgf0iZKteIn%2Fqcwsk6IDbuzqAmueL4KQnx7O%2BBLzP43WVEclaHRNDwEf8k6GmkGgR1YmsA0gaCVjSlpiLQW0HCqPT2l4apT0EcwskGgwgaCG0Xw%2BjXbkDdvqOed803mgfvN8HKRibl1aji9LvcPwP0kpgRsNohxSCXJpvK0K6jJOUnZiXxmR5Cz%2F50AaC0%2BtoaKuTMFiYhAY8qaPXB7XUpyrE8fobPl7eMkQ1rhkc4GQ1q5sDDhklGNLBnPqUW6PuVIUp00F6YFzeBRAaZr%2BR99KScWB5KnHhHQkmt3tQESo21pKFGK6QzSGIiHw58rskzrTThtLT9KMu3vk2Vvnlozp0kUnh%2FgKPSlin6ECL4d1atb5E6x1zDKkcbHBjqkAaBHkNSsk%2FmwZB%2Bh9dCJOaD7yVNU%2F%2FWELvlqqFGrsnD0ApyVP%2FsXopmKvfil66ZXmR0BysLBrD3PsLPz%2FA9%2BDhG31iBL71uGsXUebqh4a1CmzPfcVrullwaXqy6Lnyn1zDPDjdSrAIN8SArldZec9ZXxZVN4Tw7Qx0emL9g7mLT8dcdc5idj3zP5ZtMEZWBT9GW1xz%2BuQ6ilA6eept6WUbHp2NKp&X-Amz-Signature=ade53bafe0f7621f1cdab25945e75bfcbad54c9b08e4c25175ed333d9cc652d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYWKSCL7%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0PDaGJuMIPRBeI1QwoSZp%2Fv0kN6GCteLx4N7rUWT%2BDAiEA4l44FvbI0lQvTycWQCp5UWEl2y3YoDq5xy%2BvhSqyzkoqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMSygwHsTV5tl7q7ircAxbb%2FIZ6xi0rP9%2FCRqLyhqmrRy1SU3amPk5HTp2TEWF3WMpPsl3ACM0GZ8D79gtU7flEaHx%2BD9y2%2FMFe%2Bz4X7s%2Fna3Hy5%2BwZhoVPltFjBOJ0DdUgBNH3IYEiJD%2BgfodRyQz5MR8Kn0Iq42awou3CJJARPyeAg3s1ZWXMJFBg%2FZyBgbRgGT%2FoQX1%2FUG2m89%2BG5ij06Z5nIlIEFrRuucTnXCKW92kBBSA2v14IJkNm6qhLWKBLEbOfp%2BcAfhfkI%2ByARJ3v1o%2FrQbYF6%2BjMATR9%2Fmn%2F6RQxh3gHcC%2Faq42LEg373vxYp3UQmOuKUIZ%2FY3WBqeUeF500u0JqL3XGtOF1MdG4R9b22uBmIYwbMF2ILAHwFw%2BLbywfcSuA94WemJ2UpeM9xFqzsGKETCUsdxtzi0ECUGcxSk4hdDfoX6QeSDMNEeUMpLNf8cK6kitlzOF5FACTRvugrlZcWwh1bSgFijDYdRw%2FfdIy%2BCciaZNW%2BAqXK%2BYJXkmf4vbIlCb8%2FRoMhWCUN6hmw1K59iKFxabXFuBDj7Okn5jHtuDfY8vSHQF%2FDZP2C%2BV7orHF%2BTtm4NlLsDQIy2ZeZYuoibyF6p52zkbzanqloueLOGxRYD7NZyAmmP%2BsjVH1le3BOomIMPOPxscGOqUBmEVgxTcaUSFGqrfGOjV5xl5ch7cvfXbb2x9T3pCi0Wx%2FLTlh%2B6SFqZPf%2FdgMtvMMVbW7g%2BpnSuNJy3aiH0d8sz6d2nAMVNozxR2qbZTsQffHcoJeTtETHx9F2nAfWdx4nKIp4TO0NGvEaBr4V7Iz2WGgL7KGO0ypgXARv9OqpE8RZKAMdwfIInT%2B0vOd80X%2FItspaU%2FnJ3jjtfswDGdyYGj%2BPy4H&X-Amz-Signature=4a0c5fea0acea3eb4b95bf540372039cce951025b637f4e763e638320334a7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
