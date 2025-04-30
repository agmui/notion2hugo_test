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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4GU3NCD%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDE1LDWWhgeVSUyVwiomy0FHhra%2BtfxYatxOjTHmRf%2F3AIgTKKHgC%2BbnTEDMyC5pukkzIISsphM6gC2OQTCy2YsQLUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2BCa0woc%2FrsKAYVRircA3d4u4zuGeEyyCEh1Jl5%2FkNtpsn5ztfxhJu55yov4DKKwoJg2V9Tn6ib2lLA8Q7i9JjtzWMTAkyXpIgxTpDav5HWqOhdDqUfP9T1SQJu7TQBs%2B7IW4Ozurk9dpVmhuDL%2FlmDAPDLJJdtO69GIVI8T8fRUrvWZNL2dTZvBiZCxsK3HBTZU0robXXCjFn%2Bp0rpuJ6Boz4NT1te%2B22fiiIvpEZBdIt0tYL0kDmejVKE%2Fqi8pEh20OEdEnrS9iPIVeg6QlotaVucwvAwPGFflbg1f4tnMiBa0jq13%2B%2Fl2O0EJcIJka26kipgNPuexoZD%2BV39JF%2BKKsxUbp%2Fz9yRadd3cp%2FNkS7tquVgyRGV3SBbznTzcPtvsIUe7c0CnUcdcPcZWLAr1HGmB3xhsaSAwkJXWu2h2D6e%2FpCg7iWlri7Ym3txBq96DQfvkBJhZXNPRJtQBHVsLZtxwlxZFmeHAOKr2Ha8HRlrBnpkMlobHEysjMIcqurBjueJYd%2Fp%2BS0D4PJh4Oom909VDxJqYO9%2FC2wfuXNPLBkOG3AEnDZWLArwZl5MqzhDQK65RnAGzh2sAdTLv61lpJW%2BWSzusFYmQTDJU4QCpVVQc4MkJ75HrcHhq%2FJkmKG%2F1nYoiqEqPhJ9VMPeAycAGOqUBE%2Bq1njSFw8wE90Z7YPMGqY4v129hQ%2Ba9BlpGmn2iFLWTTDlZDa8wcqzX1Md7aswiM0qOtzKl7Q%2FS1QJkysUBRMHVGhg7F4HUoyGFpUYm15ozVwEErRGiS0VhfpC6mdi5i7GB6FqfarZa76W4ont74MW9YZWbBjEvAjdyP6b%2Ft%2BmCKjcI1gjGangsgiYs304TCOMSsPHVKiSY%2FNLksvzcDvuSgjK3&X-Amz-Signature=57ea0412bbd07fdd8d90d9252472912db71b6589ab5ecd3bdd4f560f2fb378ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EFPI4W%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQClqV3DoOKH8SZ7AY6DBzdChVy53lRo9NGNPBe4K5EVEAIgS5HIdh%2BKZYw5ATMDmoNlbCaU4fmTDsxMkyQXVEsjHpIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG11YsOqt6XkPzZAOCrcA3ZvHPIA6UXMRL%2BjzLEulaChV7RS6KLcWoJDKbgZ154h57oCOKm30ONnrU39klkAj9BQLq0VbQLLR2z43Y3KykZ2Cuuqbla8txrgnCnVkIHIBERnZ7DFVOGrHqSny5neDYYx%2FJhDTFG3Ya1Y3dqC0r9totRpqT6Z4bpu2OnlpJ%2FhUtaWrsWEfJlHBJXIJDuNhA4AQ7Wfm%2FGIqoBHhviR4u7YAQonJwZ%2FEEp%2FcHZjTJGxdO3gh%2BFZWXYHEqT9wpvSBzpMleWGLpWrb%2FvWG0EM5kvtApRlO0xasmn4brnFZUe9inuyEfHp9hSeabpTS5cBOe5hGZOw5yBfhey3u%2B905GFktN24qsCJKxOqSVBdf5a%2BjgarPNV2iWGT7t99K7Gy47TAIr6vftEZJVg5H%2FG1Cqo9zmEf1pzfHFY9lIWNhHOX4R0F%2FuawQehG9Xi9W0edZCOTl1GjzQd%2BlnK9LWju6SNHrWgWf4SaiWHIx6YRdLNrS1O0tVqnbMxMrbAsQ0ihzPe9uDEIU4zkkxfJVGhoU%2BScTZQFXWH445a7x2Q0Y8x%2BNcOYDiZ47gAy1Azg1Z1Z8CwZnSmiyr%2FUzMAhM2HPoPms4biurbPTR0oBYOJu7oie70e0TpEHRZfRevyNMOaAycAGOqUBmaz6wwyC5Fq97516prOz0HUAbhh9lbD8GEpHE4X%2FrL%2BgLZqDmRw8GL9IAKPuMyTq6gxjn1Qk84yR1t2VJ26ZYWuyb4DDWOMnvKdZr3q1dIBLQAbgtIh1rPMSWybqJpZTRERF46nuJQpL4qWzjIgqkNxNm2kHiQ%2Bel9VVYSrOo9khgMl5Iv4LN%2B9xkZ2X7fPozsiZmlG2eNL98vaqfSAxmisuj608&X-Amz-Signature=34012357d6e7ed37ea0e0b2f6235899a7fefbda1c9cc9328f1101f2e700529cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
