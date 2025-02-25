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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQC4ASYE%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC5GcWyR1WLBA0f4A7PXdICQJBHbTgevzzUBwWt%2FGj%2FswIhAL5lkbnXZmO4jZOkXBHQJXeuFqUu0Bgt90ebGuBvCnQkKv8DCEUQABoMNjM3NDIzMTgzODA1Igyjt%2FodKyaUHXganyIq3AMH9tF56b9%2Fa%2FNfxr4xQjdqb3XKBoSyGl3WI9QgP6np9FsgqocjNQ0AVww6eiIgRZtJuvVTwCEzczwrCPJEhwvBVmSKd8w2M8cEje7UkwZIuDN4bEqYOjRXIKlqEsNtwk915vYvCvdg99Tuxri65lf7Nq5RBROMw7gSNlaVUQXGFulTuj2wC1c%2FIIb3mFcmL3xJmkdgXfxQZP6TNM81lo1jDdY7it7O8y4Ql51RPVLRBPWzE4SnIDa5bLbRKywdzV4JgWidydagPQ2Vr0%2Fvqr8VY56jKYwmJUQrLA5mJWfp97Y66py%2Bd1JANcy%2FpEPeNU52MlQxqOMaG7V5MPwyIyKaw0iz8z8zq6PoFNgJnZF1PkbkhHNJZ5GSmfKZDwyLRDo6WNfbWpGU9stiN5stTm%2BzmDdBhBUlStUoj1WHM9i3%2BsxJdrSwXxlBx2%2FsZFsiWDq9N%2B41NpRldXWzEnF2BM7MJUOY%2FTSfci9abAo5%2FbXS4e4ff%2FgHv3GFJYTretmY7YG6bbZlCi0PzkHdb9EJKlOLlhNQFGPYJVUrO%2B3P2mhr70CEZvtuQMvT4BA3tAumAVdNsa49H0x8AgYu2gJdGF109vYWVnB%2BpVIOYWb1FPDLv5%2FxoGk%2FsJ09Qh80bzDj2%2Fa9BjqkAZbZv4Ir0JgqhueaAy5XwIggESGPHxTyxOwh4pWRp4y%2Ba%2BWvVvyMQaFSHOOvR15P4TPmslmHNJKqm6e1w6LfVf9rsADozWfUw7WzY7kUxK611QfrMnquYTLrOLD0WvHt4uWvlILZTWKXjFvkDzV0IVxVDcANoXjwkuiziw6P2YS00aZJCP2LJJrOpz65rFgN2yILTJyDbJqDhfsxk01GZfzOkxMU&X-Amz-Signature=5489ae21cf9f7358460a0b7cb78e38bed9da27bed7a633745cb9cc1e97b1e5b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHF726I%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDu9u9TYB3AEzjxRmVctjHIgqNeO4HzpbWhc%2BA5fgR9kAIhAKiejf7DbyLJBITa9ZhHv38Fy5wbPkBpbQ3dI4krhcy5Kv8DCEUQABoMNjM3NDIzMTgzODA1IgzcXEpzSqfEg%2FOZVa4q3APQue%2F%2FZkcrcMC8qZc5pAYUWnd6DfI8%2FS2i7Iuob3cFbBpxAl0SnVrAieat%2BiyLqWCQ9A539mtjD0LxFOKGbVvXfhkup38IbNebd4MQojG89XdHpqHv%2BrufrCUOOFBzQLrGaHrSCNJJW6IrZAaf5xSVsxw%2FWGgjY0Dcw8B66aC8noLhZct6JhchuHmktnTF0AOOZjKr08Aila6XmBYRlN%2B8cFH24rT9%2BV2Ze%2FpCB2pBlufsZSHeyypqjs0gd8aNsBteqKJsV6HNRq13sNHmFp0qKBRt4ztw4%2F8%2F0wDtdOyjPI9DdSnfeK2JJIWKuUSaulhvFsd0GhJQQBDasK0GN7eoUG2AUdI8m%2FjDsGskyqZSPw0RKJ1wyOsK4xI8DS0XZkf9x8lVTB5dxuWBxLcM%2BGZU66PZLIjG7GMbdwCOJW0rM6qO0gqNRe8TqZzJhbZyNFvun5YKPbhaknqbeSpN6eAF8eiiT9F%2F6PtCRXb0PUDfI5VG26CGxPFVxC14LlC9wsvI6DmiKsYw126dvO232qJFNTAAzb8KIPZWnFEKIUGlkJ6QJggnZjfhw3jXuE%2BAbL%2BrBk18e3a64MYehvA%2BQPtv2RTj3opHFTwCk%2BkkphBSkX6BcCJhTbjCP3ALIjCx3Pa9BjqkAV%2BwDSMdSgKrPqCin1CXVeFrAlFC4lU48nQwOfeLyhVblq8FfW19ZiSXyRBv3f%2BloReMMoJkzJATs%2FJ5KE5hKHVRX68G7CnaZ5bIFJoGt9%2BIu7vsMwPa0YZVVkFgMvJxYpVWZefig7tYJfX0CU%2FBmVr7GsdeCr3BJbvGCJywaURZHeiRdhkcwD0nngduX4lyn08c%2FG%2Fa8fl%2FA5Q8Wkj8rx8ceThX&X-Amz-Signature=6830f88d8f1db51546168911371a0598bcc42a27b68ae17fa68dbb7932a0e834&X-Amz-SignedHeaders=host&x-id=GetObject)

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
