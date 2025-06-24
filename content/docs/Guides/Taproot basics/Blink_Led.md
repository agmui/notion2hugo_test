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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R2DIABR%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCBxM0unxX%2FW3BvocEq5gxQWx4%2BE0Z3aUT16%2BoMUbVMjQIhAMsmYrj4Qq%2FX0jFlMHSrLvbB5vQWzo5He3tXMhsa6TU5Kv8DCDMQABoMNjM3NDIzMTgzODA1Igz2FhsqpZFsv6QhNmEq3AN4E9L8NKSSPaQPcNsNh6l%2FiTaO60l6yUvXqRQRYdNrhgGjGM2d7R8VRsf83QDKxb8TZwWxpU9pa3VAVho8YeKEgI2Je5ZyROwPQKmunb7Gh3iWIjRzz8BZPYgBBSjJPWNaLfBa8B%2F7xZOzoMF1yz3r4JF%2F%2FFl9rDipVhS%2F3TxImnVdKU6FFwZdJyHWs6kRY4ZHpDk8RfdWqO2jnGLaqReiplhotQYasrxgPpI%2BlBpSfv%2FP9uRb6lhtKgA5HnMXK16SrvLBxOBse6zcxXECwyIf0t%2B5ni3FyO7reTe%2Bnt3%2Bkf5nS3HGJyhbKUs%2B4VR94K9yIM2e%2BrHIXqpiHiSSykkZcFt0gDOaZwGeP%2BnHhcpmn0WoScg%2FtN3zPTSMb2kz%2FyHEgthl45TmSOIiH8s1oSNLBnO8YBCmnNTphs7vmP92Qf%2F1WceDmdx2tcZzQHUsK1vd%2F%2FETIeae%2B62KTmZz2tDo3jYXY%2BUoGrKCE2QAkOuS%2FhWwMlU2bMm%2FjOsBFUuv4mU4UyHSSEhuwIxE9Ez1jKCwDD%2FHPmeqjw%2FCotfmRci%2BydlNg4DiGNxlJAcA%2F67ikjab5BiKu3yOrP2JTI6Dj9D8nVJHXqn3ZogzrSAp6ixU%2FsXMeOjANCVtJBsDCTC4yevCBjqkAe2UW8Tb%2F4Gb%2BJ4GXF%2BXCyJ%2FClD%2FHAEr%2Bo8hqQvNjoK9uVOZbriCHd5uCpSuvIjd8p9ZL5Ie8rsbjZ91bDvIQpEH26xPUOUgJ99gjlvsJHn5pqignX1EALTo3t%2F%2FlW2Br%2BQ35%2FoNo%2FB14Jy9pVhUOd3uq1CxKhXshYM0x7XlXBnRifmd7AsLW%2BAL7q7IXFwigef8YlaK01PW9bkjievk5R4xDdCh&X-Amz-Signature=9179e64c71c7caddb1997a573723da29ebc8c514fc911ea1a0fbad3c2f27cab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUJ5JWXY%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEeWJ8LB7SEB7nEveWyApGbEpI239n%2BVnFSAeNAKJa3UAiEAm4X7suPYuq4ZAhyaw1FAKfr6SAPHqU2erqsT8FLRAN8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBOrDv7vOq4AZQk%2BySrcAxnmxgYDUyc%2BWZ2%2FslMfYjMq79eZPQkOLW4aoSqMM9%2BrhOVw9ZM0yngM0HQMHQmaXUBT%2FV5wnpVl2sLEgNl5Xcwgigsyo98qVq5%2Bun3Xjgcy8O6FfeZmBNwgsHhwexPuk%2FFIMK%2F0FvsiFit3JMAWupzLcS7Rz1773gKpUJ6inBms8AkF3JpvAmKrCO8myQFsJ%2BAm2G65uEJnxjTaY9goE%2F5CI3vjBhG6%2BDUzTBKOrB%2BeBsIne%2FJZM4J0K4ymPWg%2BVGgNTBxGZAvKWBteZEFnnI83IF4mdGmKHMQkKTBMX5dxgQIlm2nYBpXzP2oTdykRjcO5JDu%2F9uShdz7zfwPRY8KhGGxpXQAm4mmi1nTUx2ap6Qg5CtXNUeK81dh7PKJJ2DLXZMKPbyf49%2F3JYgRQ%2B%2FlOqIzuyOwlqJKabVtiaNoyb2C2%2F3FHM0ubv1JKkV0e0UiM6SyM0L3nGxmo%2FgBj6omzn5e3sO2391IFMiUM4jtx5Iid7cEHOgD2VzinhjtpxvYTPd5xsrhXC4bLfjN91LrNvN1A0A2G141MHCu2fIW2XrtYP%2Bv6tabsgGO5P5Akj1aNeGrcvO7rOUuaWifNNIu65QyDn6L8A8SDl%2BnaQ83HWHhwTSYq0fGfgsyaMPr268IGOqUBmS6lKMCBedraT6z5JtrORWUeZSJ8M%2Bl%2Bi0Vbnex5ncrWG%2B%2F6NBr49rrRObaB5rF7SHeKF5P%2BBmRX8Dcd4d3%2FsA%2BqSu87C8DGnMkq9zOWAwUX1tGAZ2DTFKEKR2ZLySmRcMC%2BWtv8NUGhF0rtK7%2BeD4oDaoDdB9%2Bq%2BwjPKPBIS%2BASs8e%2F7zt%2FZ53zHVjsw7MtpIyh6JreuOtYPma5A5CRZzyIIam2&X-Amz-Signature=f473e0d269cdab101d8e44e24d628677fce386167554f67c599a8f3c01484c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
