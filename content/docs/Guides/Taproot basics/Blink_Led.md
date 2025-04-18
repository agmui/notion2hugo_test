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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4QNGE7G%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWQDF6wi3UORaZiwiz6vtxAij15%2FHX8E3ucGl1jqDQZAiBS1xIo7D56n4jet%2FQ882s4fzPODA4%2Bc%2FjSrYjSMxhs3ir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMjKGFNFknLZBEzQPxKtwDtGiYWULoSNU3IbUe7MRmA9VKH%2Fd5LAx0CaWhhGXWEO7lw8xCQJZB7eWxUToO3dzI3Z27FcV4vbXfzFhFe9SCfyv0HwI1LYpRWidEb38%2BjsmcXAyMg4JybWZftRZpiAdG3ldK4TV5p1oeAOcQyG08CjEQbDJoX%2FZ2ZxC58aXDUa1Afyv9NGiJE%2FahATYNNs%2BIYglErwW827aCF9CtW6En0Uff%2FncKIBC2l%2FgmbjzNMyR7GoInzxwOqzmWgzdE9S%2B3sZMHI4kWx18OT3mmqnwLnL8ptCd5%2Bh6TCb0GcW%2BD4wwy5Ia%2B%2FNqhMR19ICONrYZ880eTDGDuaTKgE%2FJndUnCRSwMOr4sLzPCALnGjNgrAX1eQiSEWEGcuNJlDftoC4kZwtqA7ezaHg0LuPBLogMu84NjD%2BdL6kmXGKsq4qXaeOE%2Bv3m8aYB9%2B1PdQVH53tFV6P7RZT2N8TXrmRvZ1AkCAkYKCeyLj8gKBsG4UegLVgoygnOBOAqQTlFFewqpZFEfM0Mgza8uZOgidx6E8Ki5XaHkLQDvKhsz1nQUa4dQOE1Jd5YeR4vvgVnLulSD6RXjr7X501NAJwBJVm%2FJV8lBv%2FKYWyZPLXRcNRWbFj3czw%2B%2BzFKBCbd7UKIE0yEw3cOJwAY6pgGFUDGYJ3up3PjIgNjzx%2BXG0GXA4v4xVmx941tiNkho0rhrigiWzCtvcooDzxhkHM8YF7Fpxf6bRCRIfKig966iwER6PPm35nx7h9fbhmIENCaykMoXv356DynL1lCmjaNhKkGrvxmChRUP6wRBG1gXJQ8dYr%2B5BmmpvHkZ7PBlthytKZCkGBkGa8EQXYnf3qhV%2BZ3BC0AI3Fey2%2BlDd0YRD4TZxWVS&X-Amz-Signature=5ae6a07ece64cf3827a25ae07f26bdb93befd80b04a51408f70646c43c08ac89&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYE3LTHS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNvnnH5tATQLM%2BdNbAXCaedR4izzUVD1IDZ31zbGFL1AiEApPox%2BsZIv00cbrlOfbsQW2EizQtC0%2BozrE2n1%2FV%2B8Mwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIN4I8rEVFCr%2BHZQgircA8AG8qde3g8qY80oWXd1sV05RFhOM%2B8Bj5asnQb1Dh2r6nnElO%2FZeOxY7n%2FGzE%2FwMfxQSxPAM1rgQXnztyjcJUHeX8i4MBUCU4eEGMX8D73vWmNhzGpt9dNygGZll%2FTGiKPgCTTTO%2FNYOXFatYa%2Ft7Ic15%2FeXFhkkVUuGAxpZ25o2UowY5c0%2FlCwHOnRWiYnMSeCwCrzEZH53mlpspLlkAsFWluJTPb44dTbIQLnmgjjgwH6eSS246aAWvVytVRBo%2BigEgaMRz47E8gaFrwIFq%2BWU1JYtrFdls9lHnyAjQx7b3H7Hbj7iuySyP%2BWT1ZHUXGvuis3pxU0Jl8J8iDVXhPIQjSjv9kktLLvuXrODtOkDnDSaYd4f0QMgrIk%2FUGg6w4Lgl%2Fau9BLqpRKemi4TlIzziypIYgYUKH17GMhj9yKtjOCrXOtLpceOw%2Fm9M5fADZx843jpHZZCMeELpzSrxokH5w%2BU6vrPIqMVpMTDhg97s0vPtIQgxBQ5iSbxL42DlhsDKB2Q9PVyGEo5AsI4NM8HoWnLu5wOjYk8Y%2Be1LrqZ%2Fm43z1jp2YUULDV2AIpkiv%2FEJSPSgxQWSKeLR20LQVLRexym5g%2FqLmoMkps3%2FJ4rmdXxijpG3pMYH7cMIvEicAGOqUBXkGbifBbstmeLNyfLWfihgWGDiwVpcQfDEXQWLxRoJOgudu4VnApiazI%2Fi0G0k6NFqOk7jsyL%2BD5iTVpvIZqRM2z4k%2Bv8zPc1bsIoP8vEOvL%2FAAJRtqbUSxqxnUc9rnKJJ6CndLkZgTiwZIpRYBv%2B2Wbg2ZSQDCkg2FRY5MA7ZyKRtBIm9SGwcAJo%2FWNd5%2BtwPTUR9MxwKk7%2Fv9LDW6Psqmy8aFe&X-Amz-Signature=0086d4099fe94ac335dcb4e9e7f0c2eddccc62d96dea1b39cb8ffb89c8d13d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
