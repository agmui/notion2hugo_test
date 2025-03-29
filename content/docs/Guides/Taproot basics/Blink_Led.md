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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3MP2VLG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCICeUFFmsIOhxFyIGHBguyK9LcfpIIr8ScwpomewiZzkMAiEA%2FLA%2F7bOE2nb70TB9q6falb4ezsx6cbUOr9pDas0PbQIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDD5V2kIgxgM8mlIKUCrcA9qlgKgf4LzdEPXH8663KBumxC7Fxsly6N1t%2B6bxVwxnQhWEbvk4OMkR0hL2%2BLFsO617umIPrBoeWY%2BRyJCP23YJ82DLRN39%2BtviX%2BdufhRDkv3LoTEfj4U3%2BbmhPzSoV5B%2BUxZM%2BUi3Oz19oTZhTXZ3vwDz7RmZm5qhNipvI1zEE4OcV54RjY7ZrllbOBIBFPqRi8QhXvEu56bcnE02CtH6p7Mv7eav%2BdxdCROSQzMMDtGvFSLuoWdniCA7IlZ8ZCk8BwovNK7gLq1PUyTxknVu02s5%2Fl5W2KsuaGz9tkdC9NoCDqsFenKlhhTQkWncT1rj26UAHAZIXQzLIFUK5Fj%2F2O%2FzHmCmgWTguimEUAhag1OSgkRoDCH7QLmo8hmTmqxvLv4vUssTn%2Fm%2FrcshmPZ9cD8C%2FOwfacaUtFpVbBODF4fDArHYwRynOInqr78SsRpONg1183hWqSZ7oOC81uV7jmgJ7ZFk6lXcDfXxSNvoQGh0oYXyZmwUiuyXC9CKv8%2BMoFKo5sn92gC3u9vAxTYuyUtUFXl3KxD6JK2Y8HGnOJjGZoKGnnAZWYmSYcXd1yn9rVtbktb5YFGcEd99EgOe0I2E4XEHAgX0Y8llYOVVuUBgfSyOjMMDxcuYMJSoob8GOqUBUZJaKevLFxw3UnCqtW1gtlWlZ%2BcmqPwTB3rkUD8dFIgajrxSbtenQqoimVMSTQSAMlLFfjJCOUUcaJeYFbxkdobNQT1IXOdGiBQ4QwrGOL36snl9K8d%2Bht5LXOxsyaWDodAaoUoOMTQ726giqhYeeIQwUTvKeLIlaRMRtu8IRyDhwcM577bQYYfVh8Yfkma3xVGwz1L9ZuvPWyOawltY0IgHOn1D&X-Amz-Signature=f4fbb018578bfd793284e52941709fafeea5cf92cae54e41b8adf4457cfd68b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJUSGQYI%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIGq2L7BiLM0YrDc6TyVPNGap%2Bc%2BsH1FLW7Jztm%2BUrY14AiAtMmXt8958RVcPWIHZU31D7TR5IuA3FSMz41Fqw68cJCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMXS5lirFZ27%2B9LgIRKtwDFtleICpbb9z6ZWjmHXty%2BJE1m5TUHCq1Dq23GDolYgsJzdd14eRuQdFwE8V2E%2FD0I236gGD7RQyvh3JrFT69xcIFi9L1nyGTNXBnNgU24f3XIn7p%2BYAfi53UCMbVVGtg%2B6%2FlMJrz4axN7jd3Go2%2FwKPXYqVxOS%2FFu9UlPflcsNp6O2OYH951elfkD1zVJmNSbej6qCs1zXftxlo1gKNOXQkLSoNx7NY3XFrSt8VGsjE3iuuTHU1k%2FXpo5sJyJYO1vYmL4xpXoHhWD5cZFsM5pvbHi0CHgyiUkPmx2Wpl1IX30KteisjNAaY0EujT2XBraDmTb23Xp%2BzlsWUfmNMnFgGnOtyfGiPgDF7RZag0xQn3eJgPTn25l41gWpEbWoKxCGSq3OaNNX61ouGhrBNUc17mlHq1xK6NHwgNdSqqkb5cMGnteR4ywgGl3sz1zChAiKG%2B7Hmvec2lUt5Op1jiaqSTQFKe%2FEk3m%2BKABJDXqi5kUtqwSZT7uRmcTf5djui4incH9CiOUyCAU0eSwSClveA94TQzgIeiKOjTRXLDdbCtpJXNfonLAb50wa6gBE13F4aOflAXIeucLG%2FmOgOMxBT87WLT5XY3eoDSA6gzm9bKXbPJ%2FBOKCwEpUEww7aehvwY6pgH2gjdRVQMd6QaKQSlub5NHkUckKQFK%2FCHBF0prkvQIyBPygdvOMUeEd%2BLj4zgcxFI4xFkvBNJBomk30xjbLpMD8PumGNxvP%2Fdc6OxEF1pjjV2ztbFhkqr3%2FgNbrOI948VKYDjrM7r3A3fk%2BjIbX5FgB%2F54nnnvoij8AcFftunHSFGEh9WTHpUDP0bgiMXrxFu0Sv4Fv3COw63DjmLHCSZfc9ps9h2V&X-Amz-Signature=b2ea488f962d6033727a29395af7978381350b30332f4f2812d2910186540a66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
