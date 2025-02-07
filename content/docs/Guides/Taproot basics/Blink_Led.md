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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7BHZETT%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIEZU78gQi%2FSvYMahD5bju%2BiRK%2BBXhqmWa%2BBA01xerJZwAiBG%2BEoudlVH5rLMYIb0%2FIi722u6Bg6Gy43mJIop%2FXi3tyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM2Z1gZiMD9Jq5Vwe7KtwDj%2FLz825jKVkfZzeBGXYuUFd87yuWQ%2FtRZUYE8GDp1H8b%2BDTnVUyHAS7t%2FOXmlny7Dr%2B0HsK%2F5UYcMRd5%2BkOWZnHOnl7%2FdJaF8WLl0sgzQlJZ2ueqcAisyWBDfhqqkwrKvWTtl0dGFN1GR%2FzlP3dkbZjHETNmeQt4lQDW0EwpMLnwZHUZ6eYh8FJcHl6C0xyYPKG0v99h18C%2BKHLzvIjqyyWdTosj4tHUCvpV3UfOUCmzpbGOjGoxOZ9SvzTw%2BSVJgpVxny1rh4Q7H13l3pyhF3AiYt6HpypLcQjY9MFeHBD%2F%2BINIdfdZKkiZBMeUJ9xTxzmlxL4wXXjeDNKjVVx%2FTPtavkRkUt%2FhugXAWfkkZbRjONPoLIdwTnyOp%2BkaoBVPp%2F8WYQfrwBmZ7aKVcYF%2BI0tDuANG9HbsVi6N5qOMUAuAjIJtZ8IsgOYToYJJJ23oPHKoY9U2er365U4s%2BjlIijWVlbXegvTxcKCE%2Bmz5h3%2BiKVlVpHo1qaj3SgzNbBUUienrdhPHyzbGBxub9OSm5R4rwiEerOKB2sJjBveaHEfTlUSs88%2BDsxk7LqIMS1L3qECrG%2FMqWirYlinOajNgXERQu7eLceaxVMFxFfkRssYFBzQoPu%2FfaWWuWnUw%2FIyYvQY6pgEPG6IbhV1yeIsUK5mWNZq5ZDomkdaY4qhKfriI855g4sTzyJm7npirueVqtiQJGc1Q4BpyHB1s6n1jqcA2k5ktgjRMocWkrW5rP6yzGoQeptGZiywpIx5cIBBKNGpPZP5FN0n61%2FLpTaNZtj2qSjV31rQkZ%2B7odrZAOSKsGF0OBHH90LKTyq8z8ffWPwpnhmJt23vFQ8IUgO8j1fupq3NlrUc4Ufkp&X-Amz-Signature=bf0c5a76dd928b93fd30f043412b2030fc407d3568f22a32a52fae614fc3692f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GTE36PJ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIGqdxVEPLYpHdeXz7nDUgfv4%2F%2FieLiG%2FRJr8jge5n5uMAiBhLTTgV2UiLBjVXUDEPV3quCdupUpPnIeFuI3fgIcuMCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMGTq3F6s5TO%2FDqlbnKtwDSwy40ZIt9UZHhBYrLM7hsdp33FO6ylvL6UJimFAu0i4wMlaLO63gdCPA8aXFx6khYL3ueK9MnDrnn6SuXuXdQOjk31H6EHdf%2B7HSm%2B6bdHf4qv3Cmh2aP4bHLFnodgC2R2pYkWXubwKasUsLk4IS0b6KCvqEDvZKe6jaqOLOWi6piadPlwLqGskV1joxlSCZt0cvwdZkjuk6yw%2F0YJEv35v6mSW3zK%2F7n2LM93%2FOXjI8HGOkM6OVA69VfZIvzt6kDf344GSufo24Oj5eXUgg9YABkAtQTor6GmYYVIPqbEJF86B7bZoATxbVhqI%2B4r6CXQiFFivSbCSXfC3QzYJ0ZJazyq6G7xMYbMf6shCa5%2BHPxe%2BXeGuzTYPiY0uSg9U20fYttLjZAlmO1ztt8RRR2616etp5eiQVrt8ZSyKMnvR9f25OF%2BUu3m74MAipQy4mogq4Nejf%2BcKUiD2l47NPEe1GRXCJJi%2Bh1%2BT8iMTyIqYFCsVVUDcjOEXapKJxLH4D6PgfOF%2B9lQutSgaAKvS5xRhKdeK7yud0PLbJKW5mhq3vfZBNzNZjnnjiLHrtYvlVDCBqUoxUJyAYLtr3rBI2VOt%2BtYReEF5KjvmNZ4Clo0OfQg3gYAWheT5cLdIw8IyYvQY6pgGThppWDUaNZhcMwtl7BfrG1ZAJiCcyUWSbtppICxreVOErj%2BV8WVuusTfCL5nqnZDKGOmGpPX8u8pT9lH2PBEbxicYK6zumF5SuLUlLvuM%2BFmWU6S%2BiLJ23BnZroHN7vuBykIcoFZ%2FwylNegt7oiGDFkb4WhIKHQSV3ihdsuypSbqc6N4hTSkbE5zsHWE9%2BiUaNSFeUQnbfBLASPiqxP%2FMDPk6Kw8y&X-Amz-Signature=2102bfee8427bf75a097d33dfe8e483dd6216c21464bc48c6c99e9f7527c3d0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
