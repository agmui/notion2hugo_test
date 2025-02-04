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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THGGTIZG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDhP3seeBB8%2FOiEaBg%2Fm8DMRIF1Y5VxPgNyH28L1hTMPwIgEznwvoo8nDCDJH6iP7amMnDj7lown%2F1WUd8nMUuHuqQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDNBNBzCMsWnUQxcrcSrcA5jootBTPC606A43jC6W9QSiiT0QOUNamRHS2wXuEHAlDeApYNAPF5JE1Sy0%2Bl6idGi3YUr7bzTqJM0OWGWlBXk7ZcnhIkbGLhAKxD2YELQcCwkf1ntwolwDYHJayz3S1T3uLzjz%2FAjpnAGvg2V0yMjYxpXkTAFpGZIctM9pONAdxvlc8WPjeSqEAM3UXRV2BVVQ340puWKvScDMXyIB%2Bh9tHSx12MHmAwdfhKWEyNqa%2BN%2Fag4k8Qou12HYH11k3Z3%2BwEaVTg6Cyune6QU2MCMI%2FSTNrzgaMrdAbexZyZ7LxQgL8OmvWT1BoGspU4AI65kYCko8rq74QB5YvZp5%2FchWycROATFNs%2BcnBSPURcqqWGfKHSeD7%2BeZiKngzwMv7vSNPGjwXit7GTo21pMcBsZ9X8hbPGnqG9BnOy9FyFMYL%2FyTXx%2B4rltDlebx5LFzLk30zt0nC19FwBxO2Eue512nDASk0uutw0tipE8Z86qwvTmXinPbSJnEdw9K%2BulbScmgZ2KCIxld5Om%2BEtLrFCfTAwl90ebPx4A%2BBLtE9DKbb0Z7YuP3o9D5D5PZ28MHLYGwKjQ9JFWvXqk91IDZ7n5JjN9Ov27zf7UqYTxXDWKETtsYhRZI2LOxBoq%2BqMOu%2Fhr0GOqUBBJHM579sBUz9JsFDZhlH43pH8H0OYB07taTRg9bSA1QHorwPyR2StYfGJ75%2FsIbasnpGhNEuknKvajLahFc%2B%2BBUlt86Yl5IsaKj1n90G1%2Fm4gSabP8p28lj5hZj1YgxX9RiU%2FyW0ud2YBwcfRUlxjG%2FMSfS3Vbi7Sn9tpZuZFE1EFqZ3XpZBBYOohLwkCpwBqqSmeyRAbd1ZgddDGM6wkw9yFbCO&X-Amz-Signature=dda54cf5eaf9a31b618976ae0b4d614cf11e2307ebb22ae4b36295adeda630c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBXXJU6X%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T061103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCxICk0Q7%2BwKtdzHYUn%2Fwlyg6bTy4BsWgGauFdlPL6%2BlwIhAIeYIq75dMJy%2Fkcs%2Fu4GhLK1XTdflTs3ituUA1yw47STKv8DCCYQABoMNjM3NDIzMTgzODA1IgyPxf%2FyaOGYL4Hqnscq3ANyxDwCaUH7Jq9Q9q8OvwR6NW6kR5aY5bc0NnMfsOt1hDY3AuUxmx%2BOXAVggZ7RI9bnxFA6zbUj%2FujsZEBhQKa7YSx%2FWpD9Yahq9K4FFHlQrqY18%2BoXQKYeTnUIbaaCusTN34eVByr01RD15wq%2BLVhY%2BR8%2Bh842DABq%2B7QzJferqRC2TpQZKxtXdgQ85HqbbqrNy7u801LcVlaaMN9R7%2BmpK8f7lfYxLjRgI7%2BEE%2B9WogpS5A%2B4nLfqC2P%2BYs2fqK8AEDzngOwhI56mM2YCJ9ypG11Tb%2FQhNKjDYKpeVn3cS3%2B165WKokEeylNurF5kuhpZaZoXApu%2FVF%2BHISoJkq4LblAgkkhYhy10yR2B%2Ff4wlHym2Y86lHubVtlOtX5gRwUPZUhFuUnMY1tYO7uFYEjV5gHkDCL4CmPKWAPFI32%2FxSCJpL2qHNrPX%2BlAYIxhBqj9eb6TG3ZZNiEL0R9kYjydcmW71cg%2FSONVUbR8Nak62or3iGSfcPLADP6CivN%2BVnpsOrS05NXBUQt%2F%2BjPGASTXG1u5G9BRNmEGeH4sMuGNEi%2BHpBQYIzNLLd46843fctv%2B1JrO4I04i1gnX7UNm18dFegODVM%2FMDmWHcFuoCWW8G3DF1YLIFWJORHbSDCWwIa9BjqkASaWy%2BfBvhvIZZKGHc4P%2F7x13gzRZd6SDQiDoU%2FGIm3kMdqgqcoArOxMihsJyKoD8aiuEYy72YhCxOnC%2BAZkkM2qBS1WEM20VA06nv4RK0d6iPlx0Iri0H2awuV%2F3Z2gFD085%2BYhp6QKkED3cBwWPgjYbXsKIT0Kp%2Bbpk9AVgQU%2F5u4QGEB0OJeM8D0pDa4naxvr90ZBLL9eK7DRLepcsoP4WLyX&X-Amz-Signature=bd70eea557a662aba63719e9970cdd05b8cf584aa8e93f148857eb3088badeef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
