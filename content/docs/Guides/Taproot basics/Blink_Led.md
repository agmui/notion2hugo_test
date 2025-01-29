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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLYZ3PS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCipxmWBXy59Iq3KwBIj6va9j9NB2yX%2F8a%2B3EqBCQNgaAIgLAWxnqUMxHWcsCuG3mSB%2BHSrGdTkksQiBRNnXAt%2F2bIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMilae1lqskGuXg%2BdyrcA%2FN9gq%2BnZwgee%2B1zA3O8HYBBAeaZVh%2BNYFvIeCUEYGVGq45y9aLNBuzSEpWk3qdq55co1mEEz7%2FZe4dpMmlrMqmHoxQUEpGvKy8NIcMT%2B%2BXOYEF43weCYF%2FlHITMvDOZpbGUANHEaqc%2F3L9%2BcyFXQkMFdJoBATd2gtkIdLjnjrHXjJTgy21MFtHiuRDJh21tQ4lLIPa0JuuxtBzl0fUjbH45eH%2FIgaJDMlmy7AuiupdBhtV8%2F5mvk4F92gyXrQStzUDiZLDsWlrRJSQiCNGi9i7mbSKwDRBKgbUYPPnAUJRUf7pdwRXsYQalXfHpXb2u19HV2T1YaL5HQSDLFsG5OF5BMKxun5a7HOFFjTX3pckuOk%2FvcKkhiegiJAH6P5f%2FMmjKnbBluCUo2HznXIHRSeclye1QlTOpgO4uMuXKUNPD%2BCv4elUfC1U1cxTIkl0Z0grmy2DLgPPL9KvqRRUPERhMpmk5AHxQqwdcPK%2BOEaw8nO78E6zmPtlW0oDsZPBWFUZyo%2BWSVnNkUJTsJHSvlAV2JHm4nA1br%2FaTJFzokR%2Bov9ex1%2FDqEHHUaabADA39mXXHtJM9hPm9M8xn%2FSs67xh%2BjnS%2F%2B2k9MmLBwC0yJHCzP7KY4MuoE%2FJ6JTPeMI%2Fa6bwGOqUB5Fd4FWPwMibO2ljrvhUDM%2BjwVQJ1vSuonuFwoJFgfq7kiSQxFvWgPaEJU9Wypyr%2B9nI3Z8qwybagG4WqYNGtflLiXBu1kDs9uoTYzda5MjBblIKlCa9xFI3wxR9dJfZYwYqsx5BJl%2FlTVBBd%2B8VeagfwjlSx2kYKqo%2FGpb0zu6U1eYBgtgSfJ%2BLHRxhDbuZQOwFkQlIBgy4JGB%2Fj8itgzrGzAyDp&X-Amz-Signature=3cdc378f6208f92908fad224504951297d6ae6cd8fdd11ae2a7b528b948995f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5JO5OKJ%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXlNuVeba%2BlwBZkG8o0aydopudT9UYbvyhMj%2BjYTLYmgIhAOKjY64G3wuXeeHcYhHDkdiRpYiqB8XdRvf5t0TdmtU2KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaR5UMjrdfxh8DozIq3AMBawNrFt2dDHqOR5u%2BmrXLz32qnvFcDIIc146lChZZUvmGXS1wC5ZC%2FWGFwwjfcvtx3ICWNquacpL69SLrvLWQ4HEsKr8fnygNmKYG4BNxW%2FkSRdffN85dkNlnoLC%2FHJyfRollM%2BwfBrNPtxSw43Lolj9KHGoAbOmD8bwz9fBuXzOqX%2F%2BacDuX5VtfbiUpSdgB3Q0KJaqFblrmEOh30KWZ4LoNX5rwXLr9Ea8iE7PR7UuQX9N0aKLvAWpGslplwj3gbA7izXwIrcueF%2FAlxC1uHFbda1aNvr3RjUhsGBR9x84lwM4AArpQRrA%2BzQPticOQir%2Bh1cRKi91ESNabv0NxnxfHOg1bojHgIl9ZfzPuHucJzTAD%2FtdunuLYj8coLgeDSnWFNE1PGgS%2F6nUjX1uoDfy3EgJPEmqM9H%2BllmjCOS083JfMOjMe9oVH%2FNxW3zZuy903RUyMuqp2W5DxFgSUM2v%2BBHkpp36wQYo1ErIHEQDDIXwLAH2sNDF%2FQra3dvS4%2BJrAVggz2IGH%2B75rdSxPx%2BGh5PPSqDRe17H%2FLRWw%2Fzjo%2BOTKBKUgR0rOxLeg%2FoS4G74A8SCebSn23NLYa8tHt9jYKSN8rBD7Ht4%2FggAmd7ZYDD1TF6RvlbOpWjC62em8BjqkAfkbtkGkomSr%2FX%2Bet7edSEftj5PPOZBbWdJGIX0K5flUVe7DeHM7vqNA7H7Yr%2FKyH3Cv2d%2Bko8ah36WLWBPAoMkLu9b7G48t2pcSUSs6MJXzZyf6XtFCrodsI48kAZbxsb90FMSY6XXaqIRrLrv0bugZk3jwe7BuocQM3z4d5V9I3v0ml3ForN%2BFhjX1fMEIxyZHfOmlX0YIm1uHQ53Fiw0sTmp4&X-Amz-Signature=31dd38e4d7e9cd99cbb8b34b80049f42b9fac8f9f39a03a46abf4a6779dd91fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
