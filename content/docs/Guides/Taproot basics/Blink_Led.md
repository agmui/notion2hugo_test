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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEY5SPQZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrXGG%2F%2BkgMvo0YmvpdfQPucb4bP1KnOp2m1T%2FUTs%2BtwAIgeT9szWHzV6QLb8DKZg8VbSiumexGHLXFLKoroQeyx%2BMq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDB%2FDqo6kDjH381dlHCrcAwCQK7EDFO3srbuT6sXe%2FIjFwiL3IabltlGTUqU3KAvJiXHW5Lu2mAkOgG7NaQyjmhtHIte8NZL%2B1fvE%2Bb0KT5REg8D8dAVVrTbLYmEA3Zl%2B0Lcz4m6Iy5jIt7yyZxHCB8LxtEKqP409KRRsrm9lmvA%2BQGvsWGijGqh8wPpsiDZ7ySQBaUsqP9kJC0HPSbSxY9AShOTfZFQ3ZiV8uLf9AMrQccWC6DLVgq8W6i659IDBt9jBEFj2FfKWPV1mhGzlwCUEuKLcdW%2FEkjCv8UFyvIzlsPW%2BkxVf5y4vAT8ALOrjL5DYhgqvJlfBaNAnQfwRy4UqOTxiUD8BFL6e6Z4IvXMcUOnwnKfcsyYzIdBdHjDEuCaTE9iiKUycHGDdhojcZaAWsTOfeAt%2BDoGo%2BNiOKU838Gu1eclnkWMa3fkJPM4xoELqgrChQComLOlCHZyI7kzLbTcGFbbfxCKOClmCWd60q2q3FcrHKzJn3FCqC4YcF%2Bpfg9Qgv19KRH4w0GaxKPMuUZumoAppFJqMjq8SYPOgZAIqrKnhgcd%2FhmqBjM%2F4WfW8qjJCV8CFziu20cH8dQtQjEh43bLuKVy4zfaR3YKj7tHitloNH%2FPF%2FGUZzAxpqR0QQKxpcn%2BlT6%2B9MLjSvcQGOqUByUfoHvbpY%2BvY%2BhXRFEGO8r8jM8s%2FBapAm7AFyu0HLzv3zCzfpcJE3lymANsv1Pg4w4Aii%2BjukMTJS%2Fl5IYTtG%2BDm0em24D4HM%2BbzHO6M9jV2BmrxowGOVCtdDnAJPPTXlOzmcBT54LvBiWx1LR3lmfjumdVv0Fz81E%2BDKeGt0i4Kiac%2B8ntws1oEcqrmVEDD9CtV8l3rW0LP56oM2NYHz2FJCfb9&X-Amz-Signature=86dfa27d8919428e0d2cbadf36b8ce01e34c924ee27ad1fc220bfc7969dbb813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CNTRWTG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T160957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzPJxRc%2BkM3Rq5PWqDsnAS4BsC86gs0nTjWv0ZEU0oJAiEAhQz4IfovG0UpZqqWJeqKidobVcZ1lrrlUPP2RmAzm3oq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDK051HJM3Xjwse1pvircA9e%2FFV93C5OEgt%2BD9iR30fJQsAthphrD2Bmb72PexWUR44aleFbaf4fUdJZbgZ8340Ikcb48xAGfh%2B8QRS5bJaML0l6ck6wmxtBtlg0I6YsCkVyFYnrJPpKrCn7Uwk89e6wHgRi8%2BQtQCRJgywZMb29QunsBJAn3oGxQAGarFxv6ZUpIK11dR0SHgog%2FvaEqaOnUYh3GuDE0Gp4OknhK0oz1LwYmk%2BJou3wbAkceXxPl5ZM3yHc6lwYgYmTyyQu%2Bgcr6gbXRpOpKDfIIsxBC%2BEt%2F0Cf5Zpjd2l%2Bjtwz74tWlYnWIQioyWpHjk6AXoz9KxeKaexSaH9rSdYWt9omcyWsK6V5uDRw9AcrkvgZw8md%2FxINw2VdwgZqKExZaaVE0akTY5azyJSbukdQjGcYvlHligoF3QNsUhp4U1oWy4hlvDrcvsAwvCKnXzIkJVSAvEvSW5bBt3vxBj2e%2BkdQHZaO6Oqq0xmnViXQIr6GGIYisZyxqxofEJj0RHL79LN8IVALKxGBMpXXnHJVyKtoQ%2BRe8sgZVIXQ3ErzFunqmyswJSlkuju90HCDpxOyjhQrKWFLLNCspqH1Fi5XZ7rxBIPTA9BzXRNEYM8L1M6d5HBAtBNDKw%2FuYk2osRAtTMNHSvcQGOqUBt%2BWjw6IOg9ci8UTIUGldDmUMQAxGk%2BGqCANPFB1bOpBIzRn2m%2BWt%2F7m8MOA4cL95IUb6XJNEGA%2Bw8xfMXg2tUQYalJkdUsFCAUKbwrPfwPL8MDt8pZG3Nukq4WtZaogZ6MyQDLH3sI0q7VJBgB8bcE86hsQbYKLp%2FN0OpU3vM6rEBZeat6E4kFn5nkF8fySfSOH6ZzID2tZFKI4Why4ys1%2Fv7GNp&X-Amz-Signature=eae339a1036c5f688c7a43e7948c6a4b7e42be888946e1b46373a20b151b778d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
