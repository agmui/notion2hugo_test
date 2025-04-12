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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRZZIIA4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCb1sn3btH3%2BEBtv9nWmkTZM%2FambNX%2BWL9Nq1bt%2BFL2QgIhAJErPKKFaV4YUx4zi178hxyfqb8q8RbcvddSfkOpBpVmKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjkFRk4K5mvHuRixsq3AN8l86LHeLtWe%2BQoy84s1RkyUa1QvMiQXODNoObEtj4UaPfd1lKqhWqXYLXpp6TnCasA42iSiMy0Q8Ltuwpa1yeI8PI5rly2SDaNpafNtBGwXO6CWlDIYTERH3WCDBK6VuYok1aX6m0tu1Yrlsy7UnosP1wsRmcubPqiwMjt7qBT7flXDHPBOk1moHYJ7CRp03CRJ8XhauPIDmULvL%2BI9gL2AhLF85dZLBLe4UGOV8NhY9cvTDOYwsCc4jnqqVLHt9DrPWOzjHWrQ5zO3U%2FFuJ4mzSi2Fwlhp9eCIHhtzsTEv1dXUQ8qQZQ6YMxmApmvzAKQZ%2FvRQh3TxehvvLm4j5KPJiTWIJ9Z62z%2F0YOK806r9%2F7U0PIs%2Bg1HvXAaqKygyJ%2FrG6wYwhdbDswtvYQQouws4xgeeg1kboSFyZ21VaY9ZHxBSQc2kHaXZGQyq2vEsX5aKVPJPWCAPxhZe8rHJ3x55eRCulIJRLL4IHJEq6F12vBusL1rPDRyQAURehfk3QmHiLksaROfstMZJBnsmMLUR%2BoDlA4UAZH48td50w%2BSvatv%2FY42L7vVSGGe2s8BWHiZANL1eSmNrE3av3MF0qVgI3WCGhN%2B23Vat3zvBT9HPw5RCkulv1NbA7BhDCNqOi%2FBjqkAcbu9HUCD9mN1qQwipTvRkVesd0V4VfdS9dAgj2B1oab%2FmkYMUZatlLBfbHMyBri2h%2Fzvb0LvkrX5z0qDLFoUPIE%2B8DZGc%2Bd2uir7k3jzIIqsenWm1Lvz2UQTH7rUjNvnYdZgNNrCNsrQun8XUEqlVRu3TU45MDQumlpUthQzb2nzFmf3gyZOIbKOHAtDbgOVXaubCYHH2SbciDkZFyA158hjwJq&X-Amz-Signature=9eacb0f1efda444d0dcbffbf61572e3ab588e82fe166dae85aa055067840b6f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BL3RIC5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCQAXdEKh35R7vV1yQPVGAoD6bTQCrSOvWWPjpUP0cIowIgC%2FiWbl4C1XSRexDq8l4T5a6sqJGmM5tP%2BcOZqNwSDbwqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKi%2FY5JU%2B51KgWJMQircAwyUgzEkNw5oT0LN8e%2FqUEpcpwjHII72O5pZmpniNRRXOSKFczY4pgzk%2BDsru%2BWcASfP0Uf8JfJ18qVsk0sP2mU8mGFK06IyujrXwN3jYWGMU%2BYNltRvsR99Avz7w2z3suA5di5c7j6xLONq7ZIxk%2BOQdBk2O3EAL3CKFGpq6al82rYF%2Fe1e4GJdSjcCWG8VZIZ8TAGlu%2BwbFNcorcZMqnwWP7KojkrWtd4BK%2BdY2%2F47FeHtrQRkqkD2bX4CxSqIA3x7p248xmwmph3qiv2mgH%2BRQZpbBhZ%2FTosNmc2R1%2BV4R71qHTTpehdtooXFJ9vb0bT8KZeTWxksDoZ4d%2FPwPtGOva9M6AhXN%2BwvwUE0KymuuRhagif6ZIC%2B4b17kTvtiX01r8Gd4TMpUPYEzLO6j%2BtSwVAjYo5CIEyRJlMkPb0vxhkl3ISBZHyoszbVvI7qbIAPv0OM%2F1omL60XoIhQsH3ZmiJYdchsI6rQf%2F9YNHXra7GLDfTkghO8wq0tkNn0fRfq%2BMsmFZiFOPdgx0An%2BQTMV7zm6POr9YNbpZnuPTRjgYjGSRGfGcIf8UFQokn8ql0ERBHiziikUIb3ooYPuAfDn7AZ76zxyBvk2ruEkFohKQ6RWk5YbP1T1I2HMN6n6L8GOqUB53CHt8ZbyOU6hVjUSc0L%2B6O9vW71ErEFQoK3DFYC2hTphy2ZUUgnVWU6YNQ%2B45mfaDRai251Ruzussd7i6OpZWcZQg9xVtDWpYHafkM2PdiSXSULqNkrsUTtj78kxNFRIv7Yj26WJg2eL9lHB66AfDEItiyfZnqgjQxaCm3pbkYQIRPEGt07Wv%2BvCyIe84KYvdUbaGdtMfd8OIxt6bfa%2BkXIryNq&X-Amz-Signature=1d0e8dfc05c4b8f718830919cecd68fcee9f24555ef0cbf094dc13573b5ac42b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
