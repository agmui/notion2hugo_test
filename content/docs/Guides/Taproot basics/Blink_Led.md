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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3F7IS4%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOETyTaaT%2FcmYUNIdXGoVkzqPnFmH4n%2FyMykQibQsyTAiEAuLKGKSwWqalMwSwUPE00hM3OPW5Bev35VNYbJ8fjSfgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuYMp8F6D9XTYzXlircAwnQnNLIoS8MrE7vrPu0ODSAv2Kif%2FoE5SSocDaTYIMDg%2FGZ9m1gNnCGB092y2HCePAowbR4QJL%2FWQJnEtnFpX2fag7bkY4ijUoVTlFwA0nkLlO4SfMbT5SSFmDGpqdTRdNCdlpt8YpjVRQovqh8Fju8OA8DeKzqWzM5rSLu7jTuLftRIG3D0L0iAIN%2BxE9kpuZNqkYjhrb6Ur3XKJLeNRwXkB7b80yBCzqhYZMuFbvBYwP6XkTPR0EGLS8J1k8K2h0mC3lIxBfHZ7t2LjbPSXN3W5JMJHm8tIATaCcam2uHQVFnov9Qfu36ME%2F9nIwtIANwcS91UJd11yKop3PxEGdD7ZnYqPBxYxUt%2BDFFAnLE1ALmam2SbZl5tQ7PLFc4XpNofu0RCotT3MQGhgaHTC9AulitbejRLThWu9HaqbWHJgpSc%2FqX7QBZFqmhk4fnrhYGjRTeG00du7o7RNsWkgTJZTHRZOPEZGB114lNLxIBtLlNBBK0ukoyeU%2BKibd9FdYdGAOSaz2D9GhQ3zrVF52lBjprf29e8%2Bs2GfZhkRHDaNlx4u4zetNx6V47hO9BTWHcmgehO5eoiwEFVOGcRpPEUux6BCAtjc1vvMBIGWZ5lUKtRV18PXBNq7MsMOqy48EGOqUBjgJ5bcN%2Bn1%2FoXyULbgv5FOrQkARZejhSDQKlZkZtRacP7TE966auy0tmQ9TMKwmTfAZ275XInKRaVoAJ13nD6PYC2e78TJXr3sO2E5WyVhzyby4M78%2B2SySrymHI1s2hZDSeqJfaP4wcLAA4aWEWBQB3AOVzDSMioIjekffce%2FUL1HkkRxxsNTHf28RqUzcACGoMfTMA%2BrCz1Ud1kSSPPQUe9MZ%2F&X-Amz-Signature=6765b56b4c9e84c7941afb5fb4204149fdcbaab71092421103a0a43c027a43e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X6BO4LD%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3SL54Qko9khiQYSCqSVwiJghRax2jTx7Go%2B6CyICDqgIgQlH%2F%2FOeDrfAztO9i1vVcrTKNUKBnrvRn9iT4Kli0qhIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKIA%2FhYd4cQD1mIVrCrcA3fzSEOI35nb%2BA2MTESot%2Bz7JwspdJqYEJLbJ7CQZ9VkxQww%2BPg8HumX1VIZMDdAKi8SfU27riuKKlUCFF929ARGq97Afig49XQa0%2BAViqPJXQNoxXxcROs7xJoszLvtUrksIQclX%2Beu9bGomARTvzzUmjD%2B6yi6%2B2EquORP48qlkGo88qZX%2FIHe6olj0QqDZGXmVxMrPhofU36Oq7wOfl7vwBOxq4B4O7xV0PGbpO8dVz4%2Fl8LSiJYHFpIVARxMCNmcK6MedKk5Q7XqAF4FshkkahZd42n3TKY2o668oSmFbm2GG2IGsmk7ZK%2BST8EuuyWUKE2qDTAwiyOHpt%2BiLIrma7omQDpkEIX4mpGXU72aH8elft%2FNTUIxJZv0lBWuhSS9cTWkJb9MoaD78c%2BNA1ydrrYrspJWw02licy045TjMxgRo3n%2BvcCbe9q7pL9yUBL1Cin7mBE%2F95z5Raja7U%2B8%2BOkr1%2FgNF7ASudKZw09cZdcooekGkT7KLYSRLoeKQerdszkiRVDZQsgI8oKTp2ZTuWcj97iq%2BbyXqtLMMurKmo0yoGKY8w1F64tIOJO5ot1vzPsYfDbraRhNbZZ5QYbj4pGDJdY27oWFur8RqO9iKcJmu4PGUETx1XyuMKSy48EGOqUB%2FBK1FQZXxkDQc2%2FNbRB0QwpXBmz%2FrGOqnNaSS8tf%2BmFcmF5cTI%2FKLz35oq19EYDD9wCQy2S3DfUQCncsoUJpbRlKYkeDDEnO0QgiMQbDTPVxRSnd2nKxRgBUeo%2FdcMYgnNkpZxK43L8u9G7p5DburUih2AeHd3kf0qcKk%2BRy%2BAkbs6pjX2CjFnPW1fySLRVq75YA0LvIePlTnO72pYz0gmbijg36&X-Amz-Signature=b6a2e473feeb7a9bc47f0327a11ce70e523a5a07a3c7ae93620f944f4d1142f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
