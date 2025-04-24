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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGWITE4%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDHfnsBs2UFSjxO2QJf4GF90rTxXEp9o7xy1oFmTe5gsAIhAMK1OzNxMPc%2FAUHD2SMjdIe4wJTyiGHZsI4xZJLBtJXHKv8DCBQQABoMNjM3NDIzMTgzODA1Igzyx2DuSzW8o0k1Iusq3AMQ7hAk3QeK6ohxz9HWRzDJlOrm%2B6bjUphD%2Bu7g6%2BLmI1T9XY%2Fj9leMueSAFKRvrb6QztdLd1LejN86TybhDbTnsnXtLY7H8gxulFNjapuyQSQWDnXoavoLVEXuetwL3QbLG0CWR%2F1FRofR9p1EYqN%2FuiMsZrq%2B2sKeyyJytZrM4g13WbveEqLuykHnE%2F7fwNOotrPmATeRiP1Ipt%2FdswJxPD2d8dcUSIAEEhtQJ51i4rDmQSMj6Oe4LsMqD0%2BLHDDEDh9JOMA1DJobU%2FyIXdhUIEJP1LhfbwkfNUdQ6tl%2BGtquHrh%2B44NzygtB7JC4g7J%2Fxn%2F8rpmgqVMaWigVYk3K7kECKM6qTJp0u2Ud5D6cxXpqObbBgGByKSgBfMPIPqaLgCwzMdqH4QBIQ4eSy3glASjRYhcRiXWImnOc8227V2J3mq0Sw5VfS4m02Yz62%2B9BmgsICE7Jmbb3elOsrYfVMnluC8sBfZmXQIaA%2FQ6%2B4G460DHBXKbU%2FWvRkDH3YBqyRzcVdlYIciFS1tiIbho%2FncmihbAtDtzOTlqM5goRa2D%2FdOrrOAZpUkEK72M9slyqC1Tt%2FZM0uF0dvgG7rJGTZJl%2F1Rm3kM9isZ3DOW9J6QYCW%2BV333Lv4zVQ8TDrvKjABjqkAcscylspgeUJ%2B9uzwP6ppd7PY9IqIxxiu350XkJn9N8Ma7r2p1N0H53MQm36nt4K7EPnATR%2FZxBO775lSszHPRU3%2FoTisYmY32ii0pnJ9viBhDO5SfWhE%2FFS9RwPNZOrSfCEEjFRA4%2BE2JhqBsfSsSUTJvw4YK57DZYGuOoT9ETkGbDNVMvkQTmtFVnnP02HQyuQ4OjO0qV40BUQ46BSSSquoKBq&X-Amz-Signature=0a4ade7812d6265096698a8516894cd0d8ef882e2ebd3c62cd265691c5ad0028&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMBKG5FO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDuAUlDQwCwh4NO%2FnD1x%2FT8ynfNK97OtOG1%2FK6%2FXQzOvQIhALgxjQyI2SiCdm7MaPfMVoiimOgnD9Rs2yq271QiD%2Fq3Kv8DCBQQABoMNjM3NDIzMTgzODA1IgwIbMobZKIlW%2BH4XTMq3ANpckrSFPN2spLMwkJkyO27dcYmIy14ygyf%2BESwkeLyme0DZvAnX%2BQwdcGS%2BDVy1Rnjvf8SdxD%2BOJzP0RVdUGxvhj4L9jk%2BFDKbBGwLofbsCcrztQD1aozcfWMpUCSVl3rSrxW72us1oO1ct%2B2WbNF0Qc1AKE6tqGE3E8Gx3FhI78JErCJ%2Bc%2B7DhmffZFdT56RFFfeWX1VcZg1dil9jGz8nwkTmysyfv85r79S4iDFTZVAS57sMT4O9vOpJ0epOluq5H6NQDO9VAv46wRRpjjpEQT0nzK9ny4VkBaB0xBUzt5Mqv4w5sLXnjnyacrQOJAY7ohDehvGpwLs%2F27g2CndoR5BuF79Iv%2Bo0gjJ5HgmooAidLnhXqrMq5ZdifpwEj3RhtsKvkFT3K485zIQKRwEj%2F%2FyoVG55DIIuIa9pos4%2F9KcBXveC5o%2BpCwz61mfH0xHZKoDHgnv8fTAXKPdEosGh%2FFAb%2B9AWyJLRurl4%2FMTEPMq3aHME14O2dbmOe0A1wVA5r36PwYufmXtuBAHdmgR7iKR93KKx4nlEWmbHrymtky0qqIrpExaxnXf3WhT9ertMItHtY%2BZnnitnZ5VFvBp6d11ZHnsjVSMjqWZeLgGfn22lVwO5s6OeK2HktTChvKjABjqkAW1whjzMDv2W3jR7LrYfFO53Kec1jwWnzgWQLE7GTzkd0NBvBdmkEc8Lob0OdGR%2F7NwF08ZMPgJsasfmyD7GRlxFYvS2hbIZCKNnHOAMaWTkKG%2FJGM4Udu9dn0DI2UUQmcGUrmrI07aomrjBFIMa9ZIhAtQ8et3GoRXKveEaZ1PDUl0R8hzFpUMvushJiKDv5HUoHxx9hhZ9ARsNwqYBKPnOPDvo&X-Amz-Signature=6020b8ebbff2a4d6eb460796048e2288dcd8fbb70e637e12abc7b2303608a857&X-Amz-SignedHeaders=host&x-id=GetObject)

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
