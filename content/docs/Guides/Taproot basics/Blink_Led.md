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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC3NJMHF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCjY1FHF4nr0mkuKvkkTKns2RRqqtUfAPLEErYbGWxIwQIhAPo%2FCkSDzvbBAFktDG5o%2FpXV76Da4KGuebx02vFNru61KogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMdpWiLSv6mxkNAD8q3APo0Om8QW1mhva%2Fv%2Fgo8SBsoShznjmDpUWqliMF0f4TY62AwCQe4%2B9pB7jTU5vwNprCO9jfnaRhXe62sMrSL032SSDKuhgMCrvPxDZYQEoOw0I1HCMiCSgKkjmpFmStndhO620nZqgS6iNLW%2F2lMlO80O6qc1PbEQ5bPZUeWb7CFBBCf4W7nVsC5Dmvp%2F%2Fb2WTXCAo91BdeTJDOp93Y6Qpud2gWgEa2%2FWL%2BFkbBXISw7u05zrdaFaeoqv0Ie10zhw1U%2B65TqYqOwZjgycLPzHjahYeEMI1Z%2Fp86gjy9xqPtP25dnalUvx6I8QI0UiLRDPpnIebWHKmX2GBIvJ767Cgq8g3Xo3DHfUOLKTv8LYCWg9MFVeNVFCMZuktk9a1iQ9rlk%2FC3e8o4GGHXK97xQH5ua2YFSBQHMQdmN7YVhoZWWD%2FIPgp0SEXC0KpfAHe8qTCNk9wa7R2h1T3zS9zdImRcik%2FEIycGDFzI1ZZfdyrYSFsXTc7o%2F%2BIxNx1u5QfSf%2BYKW%2B%2B1kRi7h1Ajp11Fa0Vlg3M%2Fe01HooSe0y1%2Beh1pNEfzQVQUokNB5teor1orDATIlwsKmWc14XI91Ag2%2BVi1RYoAXrrQchqPTo%2FIn9qaknGNrTSh8jFMcc01rjD%2Fmva%2BBjqkAXG1UMUYa9hneb3XxNZkYL3vtFAkj5nmAJIvU4B9wtVwCGdo6nycQjfiDagrt2EsbpPBjeyIRdZ3UdHgQ25TYY4fA9U6u7d4EMFsNDKXS4IUxRq%2BEv1rZufgInmYGr7wsrw3VIFEBR1NWfiOHGGEwUnocForjF4nV7qJZTpmrT2C7nWXBy8yhQJr4wmelaHN6nH7GBpGCReidAonIrzo3Jw%2BfnXt&X-Amz-Signature=9170c70c4edd439c52487ad5a707db8a29cfafb9f26055a98ddb1d30d3e0343d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNIOPBKZ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGHy9ql%2BsgjuuZDsBQAWAtVSc1SwnHL%2BXoh45JjZ9xW%2FAiAn1T0Pp6mjEexKJxwLYS70ChlKO3wHG%2FtgGup%2FWfw3CSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJn49ujhirYHoKFHHKtwD4HyZTmUwrrtjPotYbCH9g%2B3YjU3QetpYE2gukW3LADAyrTMp0TlFw%2B7fejvdIRpAG8xdkorhgAXdWI3ckvPJKnb2GBCa%2BkzFpGzL%2FadDYtNFBQRSZXkPfkdmo%2FIXbfKdrkan8Y5yTrNxl7noMySFjXbJM5WmvA79mwAkRaGXMoWhJOQMdmRsF8l3zcPQ2snHvYYA99nXox2wzjXEG2K%2FeM8obqac%2BYRZ%2FvUKoVmuJcKWDxw97BTz6nnbn0E%2BKt%2FqOVLB3xv938x1TfCHoVOwh1ujnhyX8xojCLg006SAiHOmiKxIXE8zEewhNocE5aqUtzUOQ6swlESAwAsxiHflK6DpE8L4CWtc%2BJKYH%2F1PzdV23hSQG4Aj%2BideOMZFopyp8GspVA3T4XwBEHe%2BKvvBVCXZXZIovpfn5xV3NjyJyp2CWzRpiHpzC5sHiGFoR3Twe7WIqBjUrtnbVBvLqPJ2QreAWXWhx4LDjuznRjT0QsMswjQPmBBScGtCcZGVzrffIkkyNllSYXvnkedLXZ%2Fm%2BKvrwpWzn0Ts2LvuAXP7wXm%2FQZtGsjVG6QeQc%2BCz8DaLPUp%2B5bAiqnCl0EURHYSU79uY%2B14F95JycBc8oGH9hcB0vcfsDukwtqZmvQMwsZz2vgY6pgEwdp5vUD52aM6CV6QLfgmObg9R29y5dPrgJ5p2RHTAsUoEHi74eu2vw0fooLt48iv8BXFOzgbO47nK8RZ%2FZHkMgxtHj%2B%2BRGePrAiw0cAA5a6Ne%2FemvElfqQJmdTeO7NtjCZfJGCiiS%2FeKyT5%2FIzWR7zGTKUkL32ONK%2FAkJ1WKsyxQl3EakgOLFpDNvoaC30aO8UuK%2BAmc69cmhpagbN6saAiOEy0QB&X-Amz-Signature=f1a52863cee92b7b4442db53a14621130b3c3e3e81f2717b111b4c10d7c5111e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
