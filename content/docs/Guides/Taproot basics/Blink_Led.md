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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLWTHU3Y%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCKme2Kh0gBuqA%2BYfDvRmPf8j1Ko6eSJ8LFnyWYldwn4QIgMmwIXtoTtqwno1hfVYmZD%2FlpKjQe%2Bv8DG9ddof2nGv8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKZxyPr2wLxdGObHcSrcA7u03RqrKGacJMo1wkC3i0jsYKBo1d3IDJY%2BytQwYg6H9IpN6ky5mekL09acBbEwffZZxwOGF4JvmhD6ojY74IcBbunm6jf%2BTZNZliRkw7aF81ZSBbVEKyn9D6w1mZGjvOL6lTOcYMBXG6OEmGIl%2BRanTTteEaVmD3FnVi%2Fnac8egIHdPu2vD6mNsFFb6ErSurDc4eNBoqc91h2m4VLdwO3ETtlPxbX130B7WAkkc8eN6ZWPWWoyOrU6LfEY9otzlRDbYAJVHf0PVkWQApM1BtjpTbsKPDSLqNgc51VuzxQXgGOe3WAcjVKj8PicTCMYwis5R3v%2FxXum%2F%2BhEOVO18qAsRvxUO2nOBBFb9e2%2FF7zV4U5MbxSJNg0dyYo3zyJ7Jwyt64fjxw9kIngNalMO8k3Kp%2BXQHnmITbzzcUsfuRHJIcqHJ3m1ECkVWBXdJ19afxm9vIvgS0%2Fb4yl5%2Fw20Cr%2BMucw4i%2FOTCYDUVIgtF%2FwSwMu6im7lrh7jESL2GrbTYoAANY0h4sqTc08icY9A7t7r%2BQot%2F8unk5p2x8a6QxmFkFIOY1Kat2gOh%2BDOD34BSLksiujVuUPyjOU6Pu0WOH%2B9gwJ3BEh5FTuIzUWpBMNb5STS%2BAnXiOz2kBN0MLiqxb0GOqUBMTB8jn%2BgDdQOG1nQrE7t2JsbXpsziC00T5xFsag%2BVP5%2FumIE3%2Fwsemo%2BJtAopYxfiE7A%2F4It13OF1XVbUfvpy9OgV2s43q9w%2FhAvFzFQJjQmgBDUIemOIom7cErMQLVY68W%2BGGDt24UIyrU0%2FPjatgEIcE62wEcG0lj8v3bt6E27R5bk1rOEAgtsC7C6jjk%2BinkqFJdtFcI9%2F8K2X1DFuy6o%2BhRz&X-Amz-Signature=368d7b3a222b2fb2f27332257686b00a3ae4c3d48eaa9f25f0559eb3f5f655f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466562DLM3S%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIDUQPs%2F6Bc%2BY8adlUCI%2F1Eu8nZrhmDvqauLe0CcGlTM%2FAiAZ3ioiVSBbFHWKAGl0SvvcKuZpfBFP47xXuCxHI89OCir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMLaNm%2BcsB2crKijdHKtwDZihWO0lsM7WRNWT5J%2B%2BVVJbibgIBJlx%2Byx9GBu%2BrodHtf0pUjDiRoujF3%2FhsRGkenx%2FOFwcN5Ot1g1LBcNZcWU7VzC2tiZy2oHwBYjky%2FYqMp7I8sJtnWdyFXVBZRl3MaRo5nQGrVf9VzjWvxtaW3rxdX%2B%2Fjrm86fVeT5QgYyihcIkSwiHEUXXXFypZPBp%2FdXHZF3FTbOgfyL1xaajxCK2vsYCYox5ferToDNldo391tUfVjM3nrV4CJ%2FOl6HkBA%2BZsoyz9%2Fcx1LxcgnQBOJgYGTWC%2Ftxoh6d2cFxe0QB5Aht5JMdkUtMH7VpMuuFrld9oERicgJvX9lcqegHHTMZcCueIgd40vl5A4n6VIhmNUZUs2AqgDe1VO2CiIrzeU9IClGlfr3DwAq8VOWSbvYyyWx82ofimWfoPCC6iJ6TI29B2971Bk7UNyxmOs%2Ff35QeJK6GwK7DIB64q%2BUfX6R9EMt7WRq8ohgC9JeOxxceH2mFsJFcWnz9gKGrfL5KGIBlhXNFMb4Cm8sL%2FlFgDHPrPw6mVBLlXkENn1towdI8iXQVGHh3yYjhy9ooWLihajd6UDcdQMFM%2BejUO4NqfOD0h0THNWTDNyGdw2yVN0wAC3aLcMMsm0DwlqLyQ8wpqrFvQY6pgEZ8kqblGPA%2F0DYaOkUl%2F1Sx0t8rpM4K2ZPyD72m7aRXMLsi0J2cdwygUxFyPS%2FBySDB7IqSuBfeOvosJMqplGDb9Zq7AIobH1m5v1lR%2FnCdmkuzwq%2B5e%2BeVjO41NB5uta7NAhiK13WTiPCgACXmuEguDrRNqv8NnuLlilFbhg6AKUahSg8hloQZSynzRs0M8VH%2BZ%2BUPYVRN7p1VWEjZCJ3Z8Ga3mLD&X-Amz-Signature=3bb4cf78fe5d373eacd90a961bcd56f12e24e5a8796619bf9ddae89d74241d4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
