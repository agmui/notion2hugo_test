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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YNMJLGV%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID1N98Y4C96lBiMNOUmtAFL3BOaGsfcd3Wbylijjjc7rAiEAyNP3gDszU6mFbyk8UWZ%2BX8%2FNpIOHYTvxH2CXMIFaAlkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAlaWLFvMWQoX5KxryrcAylueneiB2BTjaZelkUPLo4iIYxkJZY9lWzb944UT9qKiu6oTEmwhtMVFghVOPFClfcI3kvFwfd9tbIeH3SE8BWssi8yzKukyfVX198W0AyodSbGSZiKpZbtrxs3I%2F8oNeaXA2jUSsVpV1TpxMoTn3c2glfkh0do1QOT8SrkZ6IS6zt9FceCT77ZPIT%2BSv%2BTUiyXsEQTyybVk4XSEAhkkghG4J9NFO%2FK%2BGiSWvosp23l5%2B1MSah7gZ%2B7TaSS6WLDPanRVvYEEh8O47ZQ%2BA4bSES98LyWkIDmBS9NcCT65%2BOuGsMXHT43%2BynkChToqVtazG2HRzhoMoKqa%2Bb%2BW5QqqQGbTC65Zoe0aJ%2FPFISl0y6jdOWZVqq84dlZBVPw0f9BV04Gld51fkQOUmJK0i431Fa7eBH3vK1OzfgmnYAT0iRwIgizH0uHHy0i8aGFlyetidJhBo14oMS7amd58hsR1lx9dYvnqGktCSAjK3z664jjsTSTyHBIPYR03PqllGySY9f779QciitFDAzNIM9MfVreedFMUs1wFRCsZgBJOitzoVHggJBNWlD%2FkcgX%2F4C2KftCM0o6jeokTJpWf7wZm68m5x3GtYM1kPUkhYxtVExY1Q9kh9%2Bgva5e5lJ%2BMOKoh8IGOqUBJPz0xAV3whAqi5jsd65kOpP61Vrw0YxMmiasJppVxQvn0kPLFHlHvj%2FPfZelolc2T7Hc3aaBzpfqVfD6VI0NYCqFEXHCxhluRZ6vWGcuff7EOSWwy%2B2W2a%2FT8gkMX2HudGYoIB%2BpfcM4cCbpYTYWjBF7gcreHsnDX%2Fmu8DdvY6gICpG%2BX4Lmj3chNBY9xI%2BPQt37R0PsFGZ%2Byi%2BkAbwYILIg3mLr&X-Amz-Signature=5d5bd78a57754db4f75e313d40cd6b1b4621108bc24bacbe682b522329519e94&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657WTL4A6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQD5GSxyZ44qtY%2BlfYXohoXgaboA24VTD%2F9KMxOlafKdxQIgVjPqdJKexIf0Gq9AzLddwq7zNtCHWQCxaI9I5rLrsZQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEdbk8Lu2U%2BJ9j8ZgSrcA4ZHMH7Hn1i1%2FP2aJsyCT%2BPZVw3ayP%2B6qX4R8kiFpQXGliPAl5xiltnHlrU9sF9pwbQep1t8I6DWyvzXdvXHkDWExEcYhTMLeGs8T8cWJcDXwNr7k87Mz2G8%2FWiOZdmdmTMWBpj5%2FCOCQMekhpXvFUvLMZCXVZKmasQ4sEsjbU9IRbjYFul5WL3G4PmAfJ5M7tBh5SfsKBtFraPBV1YXfbsQ3wkG%2BEf9EleLTlIjYp1RrhdrsSccEIy8ylvX3Yjlm3DezM5lSz6khsiTIOyz7ruAI1T8y3%2FmDxXxPvDQbvNa3GJUvvk0UIOFGCWslINjEj7AXhaps7EdOofo05dYF4vmc8w3Ut2agaviXI3%2BMQzDza83rnvd1ryb4c1XLvaYsLMBeoRcH9OK%2Fyp%2F4hxp%2FoHIdLv5Ih3Wvp14Djb7Qn9KQ%2Fa1r9ceA0akKwqpuFq4ixXtLReGYyy7Nh6wrUIMqgAvMiXgGVcHE%2B25amfSIdSoxd%2FK7%2F8dPg7xw5KnCAsTRw67%2BEadt2WlfrHw%2BcaessDxpvEgQf9DbU%2FqOyZAgLDRGkeIntJvoPe0yiOO3HRAfPnumzMZcUQXQj%2BrmZwtO76FqiGqRKaJVYcT%2BbexGh7QEghCsMywqjqsWjdOMKaph8IGOqUBisw%2B4kN1%2FuzwsivuTwId1NKqOYSb7Pul7lAw%2BZkQflCts%2F3rlz71FH4Jkfvkv4ud6z8Zg4yjFbwvGLnhKnIb%2Fc%2FUSg9iaRjCMyeAc65E6fZDGZQ6AUGyqBRvCxcUGIEXlx301ny0NsnIAArOVXPbfWXBO1Rnmug%2Ft0OglUvi6QGGvoffNIeETDHZ5oJM57HzJdun7N34oCL9FIt0b%2Fa%2FJRioafge&X-Amz-Signature=54c1453be392de408514c25cd585ff8c9dd2964a0c171ac5c6d91c5c44e1b43c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
