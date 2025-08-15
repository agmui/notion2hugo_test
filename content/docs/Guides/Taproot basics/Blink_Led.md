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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRZIRZJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCX935f1IFyF%2BK87P0oiSPRW4l1LcM58bt%2F2eLI%2BNBeHAIgGVBIaWEaslQYsQuptHNHG8qyUujO%2FC9ENbwSOtxIWxIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBXPcTOJqk7aqwgltCrcA%2BaMVmNaOUG%2BKFZs50rsYb5sWJLF4%2BqSuqwVJDLi%2FFUE8HOw%2Bwt1O0yedAOuz8gwajwi6z3DE2AfsVXgEWBMFy0CsollygZ8f%2BzggEhSQzAka%2Bxh8eurz9iL8EynlLbmh8LqJfAPxIPmDfu%2F19XWslJ3XLsQIPLJh%2FoI4cybgMyOGt6EAl4XullXXciWhP2Or5l08DTupVlJE1v39x64Sxhtp916ZWl4f84QiSnJ%2FHqLTBwp3nD%2FXlnYKXR5L4yZpGEbCK9HSE83wHF9pzibjrEsQ%2F4m9oqhzwaewaaV4FCt%2BlI5jgwE98tUJADaAL8srDdYsmqmjfLNH6TSDi8MIEHvnhyhvrGVoX4nEe98BzhG2%2BDx2De%2BL4LrPIZ7xVC3pRi8iiMeSTEGzU5wy%2BSWEWrDcPfiFE4xf5dJaG77Zdekuva4FWiZr7OKLnCJh2xfHXDCLzu%2BLL03Ism%2FIzPoXbde7nhJ32vVHYzPg2d%2FRQEdaf%2F90pdUYKbCuNzfYMGFO4SB9ca0lVtUHzIHx7p%2F3kM0CsnpgT%2F0zjFBDML3hMs5tmcME1kn7pgYmnifJ1JJ%2BYTT4mPsDMZSasHh%2F7WPnghDzKLpoJntjtteQJQ42%2FAbyTUbjXQrRvNpWQnXMIaj%2B8QGOqUBD9ok9qT4JfH%2BdXCBRcGp6f4iacOV5gOh%2B5vMOdKsteew2YZL5apvCD7BZUucoTgOF4L1MBKBsLJoFcGdshSTDLcvvp0Avi4HGeSgXSvqARCyDHdKvudzKhoReIIyuz5FiBfQJO8BEVoNyh3rjXDnI37YvAKKAnERA%2Fw28ofMHm7CPoB%2F9yLI1PfliXY8Ogos8dQqpd0x2BUELKfANifGDCsEqam1&X-Amz-Signature=3afe8d656714d48e0ad9a70e90e378794f76b53b382c4596c7875167607a0512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLMRWOZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDkUFHwtlSQRozeWRq%2BCeWqwPb3ea9FMucKG03092ZNZAiEAmV6KZGDAQ%2F4VK0SoZxaFEwsCO6slLrgPSVOi%2BkfIBrAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLUNXT%2Bei1DBCqpARircA10FNiToUWugJq7V2jVO5m0M9Srs8IZYBCcD5UOLEFNp9iF6Xul%2BY0EV1lTbv1oEyK89KpDmTOQSnHXZqloZ%2F0ZL2Hb%2F5fbauab3Q6O3%2BiC5EDsY0azCqP4TUOtyUWRYGmh900hiCMyLkAlGu0Zt6%2FXJGnUpZcw6mfkWKyqMKIpyARRtmIlDHIP7Lznbth%2FCmqkJIskhPh6k9ZX0EZ%2Bqhsy7Tap9FwB4BylY3l%2FxZ%2FxOFhTh2JFIiA4VSKyM%2FVvQnGfujPT5b6deT9WUr7hKuscWTLbG5kiP9wgIVEoxvd5mIPZzBhiVfTERtpP2pgSgsT1%2Fa6H7u1u877%2B5KqLeYNKnd3wRkGJGMEFhKVCt9UxYM64jYhTcB12Xa5DXTii7TigrCA3oDyWtraX2QFxboACkge8hSjLZ%2BSMFj%2FFLtJF%2F7t%2BZl8wtOJJcYChBN9l%2FPSFYqoAOo8145zUBpfK12yPIsWtyQrGf7TN%2BnSTraib42o5%2BcqjU8Rd4ja2sSInoDK4LAVLyauWBSumkY7YIjBVMcOHuWOB4uA3QkHTReu5j%2By3nrTFUbKKbQfrscTlIHXVLN%2FcLZ%2F1YwtPtO2aw5PXPun2Wyy9pxTDpSBYtjdxdseb34ochoI09u4McMI%2Bj%2B8QGOqUBLVn%2FDkblpUU52lxth8vHAvIvpahmOjC36JlAxlzb%2Fl8kfp5GP15W%2BDgobMNPt5ghSkRzGbRgczKe3bvGesZQfzAslMfLuuM3ZZ08ysAT0LVk39qtykELWSuO410pEE2%2FrbKKA26ZUruBFU23iglDKgLUNbwL471RakqF9BANpttX6t7BvocxQgNP1EMzQghF0Ff7QLVnAiq8YI%2FNmswQMff%2FwbJe&X-Amz-Signature=3d52e31d491ea304b75566e70abc20a63bf73966379b4ac23c77b7de9e896e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
