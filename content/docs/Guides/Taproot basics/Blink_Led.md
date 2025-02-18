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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNHGBMQE%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCICIeEeYize5oDUBwyAUtehjKFSxS92dbKERiS2OIvRRYAiEAoQSaRAyur8Skx%2FDbcg1aXzWKGAqBhq0YKCZs8vkxyxQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvbdippEDKah0X9ECrcA1FjcUCLPIk%2BXJ1nuSlanUqwPzNYh5khJrlWOD2I4qQ3pFygNaDIJ5QbCKE1paOc2Z6v3cLUUUo1wYmZX4m7cseEQxboLQtBjACyxGtUy%2F3%2F%2FR2W2bBWxsigiR9nGSKvsBj80M1o9MS9YbhPAZuTwLK2p2xWuejYPJdhugJ9KfACcskCOKMHOgUvkAHoxbuTQ3WysAMdWJ964XLk%2FU1FodRm9E3WP3%2FsMELi9TEBPLrdSh%2BBI4wpf8oJYmwftWO0BJyFBimE6tAOW4uBXcV%2BDHykZNG7yD5sgb8nudrHhW9c8udvsf5enGoJY5P1ewIz3eRqFMXZluGURRqMa1ZQmwXL7jOuMOFQ13pyIe0G0FO3ARg1IBUl%2FH0ajFPEY1Q1IcjwbV2bc2Gp6%2Bun8Zqc54o59vn30SKfnQmy5XAhOYKKsMaKQaymXGhHVy5LQHAKykKTQT0wtuXZYOCrPPgpGEhe8cepOfb%2FxTDrpl2GH1vfyIrqztbrYw%2BHLHZi78OhthHW6lRRqG9AzcH11ClM%2B75QmVBbaWT0NeYS6fwZ83O8LV0Nf4%2F0pQvlqlPcszzyuV4rF%2FSL2aicV0nQ0Le9uUBbmvArTCE%2Bxb0WUczxApfL86aSX%2F1TZHnBcyuXMLLI0L0GOqUBrl4NNUavFX2bS2%2FeVwIxW%2BJ19KOEHIQp3F9E1aL9BGeyrOnjqh%2FsVHPsJewyVcC3cxpMOamqQtGPamiWCy%2F7UeK7lk8qvGFNTuxoMWlNEoPA4kXMCPuopKGj3mzj24DJCn6AWM9SuIR98rrvSvY53itM0IPytFrALOSfJ1MFuHoia6bkZGdsOk9m%2BCb7orcZVjCM4HADkW%2BgQGSSFyMUQtd7lPk7&X-Amz-Signature=18fc951a05d55bb1d98e85c2299105cbf026c934c17443acdfd02027e9e2d8d6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3TDX7NU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T070750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQChMoHcrtrOeJYWwCWn7t75uNJgh9dDFqfcr7REf0LrwgIhAPKNSJGpnSjCog8Pig0h1vGG3qhdOX0wU35y5y2gWBjNKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZLiT2e2HEhA3MS6cq3ANWEMjvA1mNujotf74J7Sr70DsNT25jWZoaY1bmfKceYNQa8CoiKNq3xMkUKyAMn72Mx437K0Ql%2BNeZTyl8u%2Fh4nkQyJi6H0I0txmPxQ7iD%2BrRYGzX%2BJxYCNWYoR829vQdWi%2FCIcfmKZn66NFXDrSrCsIm33Nr80j%2Bb2lCZv3ra5siGoif3YrFY4ZUe8IH5GSASzkckBEMH3SYBliVROS%2BEZiaMqnUJkXeT4JLgQf924qtr86HcMpMUxqewSIUqYOTCCn%2BXfpxJY5%2Bb6W7%2FrRrXmzBzc%2BuqK%2BJnlDX0jpK1b5XP5l80Ib9maQPMe%2BpxaeQ06%2BltRo%2F0gG2OL2RbJQw9EcfItNrRS7rvm4fs3Y5OyqLNj%2B7r0KrBI25FtXpIilnPTo6phfkQA8wlqGHzkN3R3Hqevs6NbUD5ZdXuoTFPoHZ5L%2BdwV7TMAthjopXSuwYaRNrXIowfHRHtkogdArsr8AcQSsAYeBi60UyhxvF5DDZXpFG841MUjm3X%2BBEKGqcdokIjsfjwV4X4TAGna54HmSZKBsceU6XfEa8XFkky3ZlKmP7G338UzyKWNOd9qp3%2BbKeElqSuN4uMg5v55c6jhfuXePO5stiJCzsDq2NeKtZDxxVuY74ug7DEtzDtx9C9BjqkARB69wfagjGdErLRO%2FN%2FbLCoaoVDqahlD09hXb7C%2F4SvZn5ClA88fPrhNSYprS0%2FxnZbXSqh8Zl5kVPoNpECHTnODGWtq99NTMKm58In5EKW4TDkreg%2BvCbY1yYN5rh6TVeVJ6IrK5CcI%2FqiMx7I5oycnq8TnRtndvGHNtqOubqpwYUeuQPbyUBrBrfk%2BOTPx%2BfIg5aT%2FWiuYGdOpU4FCZ%2BAuUZD&X-Amz-Signature=1cee0a1c014afe8a07c57b6b5eec3efc61e7ee8cc33300e2b248437d43ce437f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
