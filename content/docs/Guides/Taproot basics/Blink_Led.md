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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2XN3HME%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEU1e36gdaTNn0OSYPrPLt4FzEM3SPgs5erYuCtkJ50bAiEAimCvZVP5vH42gQ3GXKW7uV96HAOkFz%2BaBnNhYqaDrI0qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqNeGP2f%2Fq8oAbIjCrcA9C5qSEn%2BvtDnPg5FoyaQKsUwOLgcJIDU1NxNpsDzXOCFPasYaQD5OVx7exZa9RPQBMDn8ayhsls1UkBsJQekpDQJwC0GXx6dMHHiKGZohetf7%2Fo8Hwpqp0Ir3Uwlh%2B8erqvTYQyAqljkiZtaFsBCBGo%2B72mnAeatFx7MjtFCeaKxXvot5ffD07A1AOavduNjicKb7eSFPOg2u9J9nG%2BuVLH6YJCY0K18lZ2YRxJR%2BP9%2B%2FFzsFTISyzLh1qFP73AOVwVKNJgnMbcjVqrYKwADKlhqwNE5CtjYxK2d2yrNDb97vi6oKLrNbzIuN9Z5YE0MH9FGlmOKhp713KM5rMcyfm97mkJ1qjspW035xV68zFh%2Fk9agdF3TIUAp0BtIYFCreZYxy36OZjhCGvw7%2Fgl8S5TdbG%2BmW%2BH8DQ20dZSgZtLfBB85%2BwKxhDe9s9vT4OD%2FBurAFllk%2BIVfGmEAAkqocKPkBdBaV6IvFIA%2FA8tlOGGlmx7GpbR1pehOvYCB4OJlKRl3XCyFe2NCBlQWBijFuSUjTcVyY7uAItol7EZX1G1m9RzSytWGJxWoSRsTxjwe1hR58AHXFH34HKC6sSSEDBTlpCMQMpxffWVK2Lhxm25%2Fajzzy6Bru%2By7XLNMM%2F2nL4GOqUBwBN8rCSB%2F4IBiBA3QXjlpUYE9qeUT06rkK4fd%2BM7awp2xVn%2FMf%2FfvQgD%2FNf6wnFP2zuqVI%2BPN2nwRVaszOPSIYcBE32JEdZMPyWk2qaoLBWorvB4VN%2Fu2euLWQjpMFNy%2FirlW4sI0QlLu4yAgPBKledqIuxgwdkZwo35QwocQNC8EXwV1aWb8I6GzfHgeFxA%2BUo47RodLihsuqYxzyL%2F%2FXxd9mfk&X-Amz-Signature=0efa29befe35bd02ed885d76616d2307eb6aa1ed9e291090130c8e4f9a9a0b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WCMIWY4%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T181046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5ihJDBIbaGDBeHA4ziKHIfJZqDcB%2BACumDTXdGuvjpAiBV58oHhuFP0SqmKLza36mhtNjDjYldQreBMK%2BFCmvVlCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkF4qgRZ9cWW%2FncWFKtwDvSjtMRk5lX0pA6UjtNMiA%2B0lr8iClhR9UQwzBP4t%2BwiDdc22%2Fp4WDdiw4NFeqOHN8YT42a29misiWmeJMqq13zByfWd2kO8q4kJAVPLIwjIl7OOFppPtOtn%2FYLEp5cT4cvXqCTij8y%2FXKAPblEgfHj0IqWV7e0beU3jDIxpsm71OmMaCtLOmemSxsJdtJEcK98K%2FMxfZYMjsp%2BzmQJxM8VPXmi%2B9ghj0IvB%2FYMBJjK4rKuIOS3PrBeFzvuOx9miQel7KHRyfcXXAnXcNF0qOJ9egGmXhFYTwRJVuk%2BrSkTOylr6YXuDkK5uCDHZpu2CWh4B2bECVcEf9ML5YsIKhIonc1%2F2eGxtdd81ryZoqgcqA1RlQF%2F94rPeU4TQTZ5OJo80QgRcOHl6yi%2Ba8mQKFitI5o1GhomyHRkpc2cblAK3MBGE1UeKIbypxa9stXYYDolFc9dOQtnTq0F69w2omAJiDVfKuzgAHEXrMWxE0SejpxApOA29nBmXVd75HjtiDOOa8i7O55ulHurUZLpuBukuCWesezN%2F2JDSH2i7AGFUf%2F82jwcGYX0j%2FUYTBXDVbtBsK1peyBPiCRDDTQA5364l29GYfU1tTIrjBYKPRmDKfO%2FAi0Ye6aYt3UJYw%2BPacvgY6pgEpAmnBw5X9mfTiwrQPDOAQLK%2BiADgjHDvIDRfPYwDxMFvwJCKWrQ9hTUC42CDC4ywKUBMvw8U2QRDFq3OXVpa1%2FDix21xwzSQPyejbp4zkB30UMXf4TokgTSbfXj%2BCWXxEYYg3EdZx4p%2FRgsFseZi37YGb53Hmx6Cd7VQqkX6bx9ZxtTGJzZRizPXG9krNqCeu6q7fUUavlD8LZ7XgKS7OtJ1VYnFf&X-Amz-Signature=fb32451bb34bea2ecd729315aa2cedd8c415493ec7fa931e5f221445871c94aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
