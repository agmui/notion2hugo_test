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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULCDOICO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0fwkmuD4SkTGnOv8s%2Blt0OkXYv7XLubneqrGnQo7%2FawIhAJq9hQmvLm0BikgrfZUKhxigimCCh9gCz7KS440d1gbTKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTdNg3A8O%2BQC8GxuQq3ANXLS%2BdZCq7WLxyCfqIK0YJ%2FkBW%2FipfDlAQFQAqvsAwW34Gq1ar6nqLcUIvhY3YMQkYSiwwBNNn2luQ7xfGk%2BNgZ%2BteQbqfnGVYC8SGFjlJIX4bBr6u%2FOAkcBMU1Ke8zt3cNpvFr3iov0DC9t0dzktl8JwYshoUd9CU3xBX75rEpsLA6qdTVrPR357zgdmqyRUDNOnlvmvF%2F56Jd%2BQlEknyGpOZ%2B%2BONi4h4H%2B5EO%2BvenrY8kKIxFkainEMyollKpXG9wuH6x7SdSTUyynD%2F7rtXnNGV1mnFxOkC6TmQIaUJV59xhfrrJfxfQKDvyPM7GoxiNH1uuHOntH25ZnlgosKfQCqrZbq2nF1%2F45gFMilwkgmoWCrYYniBZGuw04ydbH9e9jBAfrJtY972LQjLv0%2FViMqFk%2BtXo50lr%2FO05t7qSTUeqyuwejw0jQk8h2V%2Busc4jude4xMjt%2BtqRgfqRyzCJLP8GGkyJ0gixBPvTiG62Xi1S5e9%2FSOORrILmiDWw0LSXtdKIslWXoTYJQt%2B53mT7HVRs80BuwtDX5Zpsi9O2eT2a7CBCLs77jksqvj3yRo%2FIXGmzdJlXET1MJ4%2FU4RfM6MbFnIvmgRButW5UIFQh7H4WtgrbpLmAWb%2BmzDAn9rCBjqkAd2VNONE9IbvlGaXtiw8r%2FADxxtxaJ0p175Mvf3PRHo50NdJ088%2BDIa%2B5Gq55g2gmJUjU9Hl2bOrBcD%2BtusZhHFx8SQDpWFym65kMOR25yo8FlvGd3tWApURbciCjA%2BeEoIvtaqEldasArQLsueZJnJZ339FiZZJvDEu4XONQi2Fm5gq8YerXx%2FblK%2BlykeyDQNQW13pXcXTS3onXfHkNHLRYnyc&X-Amz-Signature=30fb6e6f9eac3d90b2a51c04b2a6797bcf0e456d5f04a60069fbbaca42b6a7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2RT4YV4%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBi96Hy9lo2H64ukyc4Can0yRNNYriFvlVMtbnDuj%2BWAIhAI2jd%2FEfWMbx8tORFmnl2%2BQIBfXvzQhmI6B9aAeCZqTBKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6CfQ3zUTcPBxem2oq3ANdH0VTWFv%2FfqpLEemuHWFdNACT31YTip6INa6rH3Lnu2cFhLbqVjFte2ifmrRSLVr6FuH0i1EG1gYHgvMYe0j%2BqvXwfxydnAkfGwc1KJONRa2%2BOAqkp%2BV060uQehlxCWwltM%2FB3rYL3TIIFItnu9pYc67UFmNjEJ6T6UFIvD%2BOd48dXE%2FER5XXWtxuyEPKaxIPcHX29huuaaPaN4eo%2FENaz3Hy4JyEqVWawLcDIJRx1OS%2BsuGoNWvz7Wugd6HcX6LqlEjsBo%2F3vDR4gGsAFseoPMKQ3xvvmQQU5ZAMWN2n7dKU7GflDx7S%2BnUNg9Ul10VYfO6lw4EH9tUBIrux2Cn0CRGX7o3XcT0giJkIOiaGRVSmUNYb9x%2FLJ61Pnqq7nHBOlFRv0%2BOOWoDlSyfGpNW0esIqLwOX3BRvv2TWO%2B3qCj%2BKpVBiMfG7jUhXB3I0FkduUckIs8i7JIUgaXRk8k6ypi1kAYh%2BZCesZ448%2FiiZm2mgzD7S9u12X%2BXmG929sdSNoqsU%2Fm4jaZK5fP%2BFnK%2BbMsqqLi3vltEAeLlGaBnHkBMVFhB3ho3C%2BWVI4qdBz9MrpS3%2F3V78%2FQDo3usZZ2fk3qxXe14g3t6LlrUL1LfsGXCyzVYLAmmX6Jjg%2FjD1o9rCBjqkATtSNwQbc%2FsubTmV0W0c4KlqTWWCH%2F6HjcMM50hx0NsNnSDGPGYeFvmlhcRf8QIPOTQfSkFTvS7HJpAQe9rze3wVoZjxKyR0dcXc7ISQbtgMuMnUYbFkZzDIZimoXh64t7D4NIujw%2BfzNwBjAsdT%2BQduzj%2FUlL3PGC1tsFZ0lThsalogo7VENdfEa9pZyy9c2mw6Ha5VNWLQ5c%2BFkX0xjXnHpNuM&X-Amz-Signature=211f477ed38e483e4b3ad907ecaa867c7572ff77410d870659f3e41610f2e1a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
