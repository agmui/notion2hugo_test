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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBOEDQDL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCPZj2As08ZOz4%2FlF1hr06%2FcH7ea4vgZSWYXVZuhhfEFQIgWufg2CEHiB9IpDMLlae6vBeVFZEv16fYv4XCURuqv08qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2nSkmxM28CILcldCrcAynlGOwBVC%2FTQtnIfrq3ITK9SFMpIjxLMsois82zWCTMUmkH%2BTzVSKm0PO%2BOyWZmNyg%2FhI2YgAjvEUw2zJ7aI8rg7G6M1qayPzUzp9c09QGUI45yqpTUSayRShuWziUJM9J1Emov4rnEieqngrOtkeGXhCMjjlsDABC04yCbWa4vG2MegOcFbImq%2BWTqj%2BdDgz02USjHD63jT%2FFP%2BKk5PtkQmm%2FQLy2EVkp8GojkicHiIa9Zesz4XAbe9gVNTLbfvlTo2Usxh8oaodt0L1O5MUfrZfTLUIsyYSorry6svykPWjBId35J8BsSj4jCRyrN0VMxRMxQjpdye6cDaAfR7YlmlYWF446zNHlfX7SAqctGmKAaE1K5Q0D3B%2BVMt6QTV0DINipx0l7VHZQhE0gwgdHUvF8Bu%2B%2F5Hkijb14XBSDlCCQ7xPRaEgQZRq4v1mGalR2cmwaMptaaukatiKsUfmCJVE%2BzfKXeiXnI9rkRlGXyDNY%2FTiIMSyF5uIKeC31%2FLuqwm9d82%2FzBXSsgv4nxtGbPxR4ojEmeyTtQ4CTBHCTY2b4kcg5ByhEY78fcaSPmtFrILl3QIAMEkoIfqtSunmapVMQ340aHUJlxFL0iQ4UGJBNrAoX94ouTFyYbMIj50sQGOqUBWB3%2BJWR9T192fueKXGrG4ovM720f5ymER3ENJNHy92HYblqzxpgyXUes9Iq3bNjcYpRrWwzZPoNms6CVvHo4A82H5dcTfchgdFXb3MpKiZ1bRLLJZTRKl%2BPYYYyQKJmkvAkt74WXP7m0Pbzcq5bu6oMLFm2n6yf%2FipylVTCcK5eyNeU8udgufc6ZVHONOIcizHsL786MBH1WXSOFQf6a03Ib8trN&X-Amz-Signature=ca50910c6fd262c2d9c4f5f18b0b0f7b08b3c9ad0da275922808032626167be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMAQX35H%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T151114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCt%2FneBtlPQFuNUfC48mm4WLWCbmGhwjThBoLc1G9ABIwIhAMEg5HeljVs%2FbFwjiTISAceuF1%2FmqtaygdUsaBETg5KCKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZU%2BnnnJ4%2BYDlAPRgq3AMXz8KOKaTp4DvLhLCSNQGYCUbSHqsS9CoRn3XGfZmr6mkkAdJ%2F415X7xsSzVzqlZQ9dbYE%2FcotGkFQf4BJibFq3UaNt9LM%2FQ%2FZ8CKEwhSRUlIS5I1RTClgkojunNyQIAhZ%2BHB58Tm9MYb%2BpqhJVxFqOi2oAObeV6%2FxZr7Z%2B0R1xu%2BdzB7UY2R76YanAtVqWT0OU75u%2F3pqWMGU0D4Qdi0Oq7jQtQx5sDdTBWq4BQiuazCYGjJ%2Br58b231DK8aP78i0mfdEFLAEv5hVd9NWtCxO4keBgDSRb17%2F%2FnhS1M8ICvLMAyLkniaHVkRxr9X4Mot3BAn4uz2BaFq10HaVnpibqaGfm7%2BXCQiUFxVVdZaxke3NrMbo5472kdRpefVNieKs5jivvVtuv77Naq8qJmura%2F6%2BVugfuNX%2FbmC9AKh7jm%2F%2F%2B8YBC62a05bhGHrDmOxsvGdocrQLZBCXZOi0kR3PXGUebQHuPO0V8jZ%2FOeolk0b4hxiUc0tEj2z13IOWQNRohP71DzpszTyzp0q6pqaCgoJMJdPBr%2BYdZvMNxr4OROGrLVWtL5nI3tBtsmU5SkRwx2Cvv2aEUuGlG6sY3eFOYDUFQqmRsXsSrQcHd3VZDP6bfRBlH3od46LdwjCM%2BdLEBjqkAZ4DLBFo%2FqIHYf%2FlDIs8v9h7SGqeG5MWPy40IQN7TtASjtzTcy57GSArvW%2BNHHiuLS1K8GPrV7aVMnrXgqGyZwsF0kAaZ%2BwAB9nkRx1KB6NHgs5ebMBWizQK81%2B9EBaHKOq2MgB%2Fw0HRN4MaLdzWaPHjblxR1JdwzG%2FPNz7%2FmU09iXRmogqpxuV6w9mGXbauTSqrNnazgfQnSi2A3Ulsp2ZI0BXX&X-Amz-Signature=16a0621e06e65dacdf27d5c67bba68b8617b07bf758912e6f40678597753e045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
