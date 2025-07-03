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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFBGZFE7%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFKe5NhJ2UG4ZGO0QGs1niMFASxQ0aUSd6cCu8toLDJCAiBLA2VW4hQQ1mbPRTO4RZK9LinmcYss2elwipQY4sZJ4yr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM%2FvxDPsSQLhiClYNGKtwDcIhDkGoNTFHx6ZLaVMzhtT4VyQUFyPtUpy5n1zjMMhJpCgER2sPenHX571dm7hmAdA2Dy8aZrqPg0f2gJ47DnddNXn5sbIfesqOeZeE1UBX9eN9owojyOBi%2BSJlnSLfXpXK0mhY%2BkFacL52%2Bl%2BBglBKtP2dzhRbJ%2FIsk7BI1%2Fv6IXbt0N%2Fgs4va6%2Ft9rmk6geT7n8CtPiUOR1yi4NSH2%2FSasJXZrsGx7dpcuSwrkCM4ujKegdOVspHXiLZS9ze8v1CLYWDIDVk5AAF1Z%2FLvOdr4c%2BQ%2Bqr%2Buyl05avFkqMti7MmkdKfXIXXcaT1bSFRPVODEh9swEDeq9kGJ5BBIgIRyKyqyCQyZweMxd8iWA10iYL2NZgbpXvpR8Fghhc73NNbQduldsYBGj4mHPEgs5pqGwylUZ3bQAVvOVdnRNxFA1o7cNRutUPklaXPAQHp%2FM0Y50vqzcJoofbE6rSBLz%2BC1QLvzvRAHV%2BTDSXcnhceASZ9JedYmf3iowkn9D24cm6quaMHELpBV%2FbgKxJlnXNWj0wNK%2BN3Ur2ZIF4r1dEJWco1RXTmfP%2FQRvOaif4jT%2FQoZpTNVeqqUuvrRwnrO0waCnH2p3ZKSsT3cRHm0qR9TxSY%2FGYl6JjdBJjwIw7%2BWawwY6pgFXD03g0YhjeQ7I63Zx8LuVDih7Vwa56ia315zP3xVBxGQqzaL8aybLxEXCB7R8GKCCeVH0363Z1INsHHBC6IMkoQgNzejKnZdSGkrQCDjilW81QKFjdkd%2F29Qz22GxcQc9UrdihLUhK1eU%2FMQr2IECaicyYpGskH%2BhSes3AqLOcUmX7LiTabJpYlgHscmPmnWXnss2OP%2FiaGY7JnHkq6SYTUprVRoj&X-Amz-Signature=0ba8422554a8ea5c52a51e1cc9e23b8aad64bf078bababc8f53e4752bc72e00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSHEBYLM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQD7EWfgI9g0mhKeTfL%2F%2BtH6PtKtL0IGJ9enZw6rF3tNeAIgKcjqx8d%2FolFVrXCnmfEwsVXB9iO3tH7o8nFGr1UDv%2Foq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDHuTP3jSboU1LNcqKCrcA5Zr0I%2FpQLKpQ7hnZIWmhMj14iPIGxmwhrx2BrSaj20tKHBR4BUja8xdU3dJYHg%2B7M1PAMGoMkxCJvIHpFAsFVnN%2Bd2xIR4hnwaaASNjoSWf%2B%2FsxteWdfNZZxnGuo9z6qLCV4Iu65zXPi67oT%2B313HSx74wrXKlBl%2BWqVY4d48i1Nk5OKhoHw7U%2BHc8JzgnqR9pPI0nFEoAi4C0QXwNEebdNuRB60EMVfWuBcfLK6jkSxMV7GAjKIcxtOcGn9Ig4AqL8rjVhKM7RvfkGEnD1EBqtgIRUVlW0kWavZnILtEyrIJt%2BYwa2ePcF1TiL%2BWTKBl3KzbXEEp2REyJStGtq0b%2BjAdiQZ0rCq3dj7j3kgYjnb4NAJD0yZ98o5j6X1nAKWo%2F0wVGKLKKkBxXi3z06t19M0pqARLmkq4AqEPQrkUyRUXdx4n3r9vqNBW4Y6T3Xl1jF1wziR5bpsW%2B89k7wJ64%2Fv11MwYeHTgwT96%2FMAC86%2BA1XoclNoRYGpAFwxxDD1qKpKVJGA9NyOQdy0W7p%2FGCPhFs5SmJaGSEnIB%2FzILOvUGHdgs%2BKaE7o8PnTlxLDrFat3JlcDu%2FKz%2FBtlRV5YTR%2FHOSkRkFpZ6XCdhmo0Se6koU94gNKX0iWilr%2BMMLmmsMGOqUBCp6QBpTienH6iVLuqBJQy0P6yU9vgtBkM5YOJzvO7B%2BxXxza4u55OW%2Foq0iSNfcS1xf4uxxJsfmexd7h9boUSmKbGsQEVMfG5ycl6csloaYIyvv5e2KH8VNz8DtZyISji7nek%2FN5g0GzdDZRbYFRi7tuprWHAxZQdEUb9iXSmLDb%2Fo1FgnGjVddz9SiZ4nagdzKJyvzgH3xrYghdRi%2Bre22BnAmx&X-Amz-Signature=60e32b213635db76d0c10113a9dc160f38d83971989f21ac8bb4d7566f0dc145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
