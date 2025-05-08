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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGWEEAN7%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDi%2F8lSbOn2%2FxAv8fr4iaRYc1qeUFYj9ZgxVMlz486OeQIhAL7N2EAAGfMdhLhZZ9kuuqq2SMIXUa81THWpXuC4RU%2BSKv8DCGwQABoMNjM3NDIzMTgzODA1IgwtIbsQwQDfa7c3p7cq3AMNs8YDoXexihZrzkjpA3qrzA%2FYbcawshN5%2BZ1hu%2B9n5d6P4jgt6L7C4zashb9M6oCsRTlhEYL%2B7LMKIwuJQrbd7UAkDOQ6oSutWQu17h%2FUMmmyAnmsbFdj9e1Udx%2BeOVgwZV%2BYOc%2BDjTErVwG61hvNyFmhE%2FARR78RkH8ti4W1GT7EEJfDm9ruWW8Cvq%2BMsdNmHbGgrlrxRYuV7SXxhlmPLizhxXKDrYLlW0OM9sjFKTrSLDz9sC3aStIWcg66%2BAx2j4WZ%2BLL6a9ZivPBPu724mKg8h0cbct5UPLs8x0lguARqrlgaOhutSN0%2FFIDVTGav0NBz9gWg9GJqkumyqCYy4v0ccBKIAdm405M76lTM26wVWfFVwZVJFaPDD104TrG8Y3aETC6hM0EteAjsqF3XVNAWMwz0iNiGczsPA5nawuZgAnSYxIVtGU5WpTtUji1f%2BFPq1LD6rVLhVn6Z73qlMUPTk7N0yJloKBECsI1zthp5pX038UF9t8mcsvaMv6ehOnzKFsK1sZi3NOkKS%2BD2q8q1VZ%2Fbj%2FNFmTXy8tvF9pCFooGbJug8socoggWE5GmvMGm3%2BWIKv0iIeLJKPiAIhDiw9h4isMMJ6eOEckmhrMoGriWpGS3l3rhcWTDMwfDABjqkAUSQBRks%2BUJ4dofkPvZeJvfXZCsT8cnZQbiJDL1jRu4sPB9ahxMlaE6h58cnTXkc3zCE2qv81qUEaF9bTs1Vi1XhMM6oVaA5vCwwBZ52%2Fr%2Fs9GmRBil50sQdxB9HL4AzpfB8bv%2FmSiDJCvfFEO6Tp4xEkfYv1rx92fSRor886Wg8CUKpj5qkLY%2FKnF3afdKzOkwipiOmbQxh97kCsEJF5RyNOjsl&X-Amz-Signature=0b0b8fdc8206d8b7c1030a826113efe9ad7b00dc0eafe14a61e234b819bf3baf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE5ZHQI5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B8OuRc60%2F1msWJfS5hNO5iixdoZ883wclQN19td5wkAIgZt18LJLZNeqcnE1MwVO9BHYRsDOFhvqlbxq9xoI3i44q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDqE9qNhGXNHQuwU4ircA6Sy3v95f6op28IqAw5LUdQgLHMhYttFfBzPpcxe7FOVoBejTjTEouasxuUmMZewTKF%2BVSvtZ77XQgxa7GQoo9hrVPlleSzMG1AG4LKBbNZmuEUSiyA9pao8ERUM%2FN7uwfNegk%2BvROsrTZUyuzYM95F%2B63%2Fk%2BkdCPqjzRtBPV5E6ByY6Sx%2B%2B6CIP6ccjsyCH6bOYjpB1il6gRoz4TooIcc8qrwxtqZiQOktlNYTsPcE%2FTyQwAhZOZhVd0WSVQpevfAiu5kInR9w8HzurU2b5Z2oqZFH8g57qjZ%2BhohiPI5l7O9h8b5FBlIGccssr%2FdOxyq5H4vjbkOce2TROFd1AgDhSRbOeLye8LzVIM2Duw3JkxwcxHibUJCJSRMCWWu2GrSFTw0ZpB6fCma48WrpdfSbE1ckXYbWtld540ZmdlB%2BKv8pel6FKwqVXZDm5tfomnPAY0A4Yta9Scnhr0lliFEaYT%2BVh3D38ApcOBxtXifyUNjEpTCYlpn5oDOK5J9O537QiEAFtOVvWaXMCuOWecQUdEswRTfnCnc2FZyUQZtDgvjNBdeKOzSnNmL9ISc3WbRRDYrqHaDXHHoF%2FMpcfr6oqnP%2B6CJ5BpdHlx5knk61D4N546J7FqbUc%2BT5mMJbC8MAGOqUByVeF5jSz%2B6u6D7hKADqS40AwrGSeoJQ3ILSs29vm1eyzhrdnT0aifBrtijB4pZC2f6Ga1pJanT0pu0erd4SzJJXEO22tRrdVzdBWwVb0wp1KAUfHD3XHgBVuDPQq%2F2uJp88KDorwUAAR0UW%2BMLHvLMe6iPjDqGFH0a7n1KXQMmzBdVNO9VzMxOaG2L4UiAD%2BpbHkkFDTNhMINP8oYO0YA2HsWVQN&X-Amz-Signature=07a67bdf17c4b56220300a1f7726b08e3140917310c23cf4781989ffcf807dac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
