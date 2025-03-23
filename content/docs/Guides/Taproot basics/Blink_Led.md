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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSPUPDR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9J1rD2RI9wOZWfbNsrnVb1WEJIBDIWaTmWLn%2B56Si0AiEA%2F2AVAyfKCHVoKV6MWTVqRoScW%2F7wXqB1TcINDPioQMkqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSbJtpLP1m2vegqeCrcA3q0UToA3NG7NdpgE9tOY%2FuEMChGQNW14gAFP4EBCDZ5bNQwq3BtPRyrFs8u%2B1Q65kvKe0G%2BhQZ013LugRNaoE3sXsE%2Bu3DLi3V%2Bvn5KLuH7PG7JpIh6goB%2BgEPJb4ylvU2%2Ba13PB6lQqqDre5jRRyh3%2B7gvBLZ3MmeRAOcup%2BUfaFON6YzObK7oTBw72y810Ug9P61PbtsLuYyd3GohgWd2C%2ByaPJPXWfmpaGvO4yGwytvmAQ1lIihcgiq6dhMJ5%2FH9s4TyTZY3CjaJ2F48iJh3NemGP5Le%2BiyGz19TEhKsO0NaYz8zvptAeYKXl2AW2hKTROBRJdDzWf17NAuxtsLBd%2BCa4iNS%2B0grNoz%2FULiW8PA%2BLI%2BIVVMR%2Bd44jHutAdzu7YjjGdlGVtsjVsHs34qwlrZLXemZn4X97LO4IrfU2xdT3cVOa8qdPrrgdgYVK%2BAVVQA7vo5SwhLLqSEvzc5mLQNcMGlQ5sAnKZWPxl8P5Ox8XROITy0nhTxg4xWKAREMb0j4fgAvp%2BkeXWnd8c1Rz7XVEgBP55kJ%2BQV5oVgDCt9vrgYGoReoQt3jI8ef%2FYfP3HOmxvS3caa8g3R992N68o3R9pLTgctWjU%2FXn3GuFb0zoXrolJLuZL2mMKusgb8GOqUBBLTN5kDDtUCX5bC0GN1LCTlyFk89vCbNx0O8q65x1ko9Osx9Y0L%2BPGyfqke%2FSCb2zpR96jz6zoUtcPXyblXmxnO67BuhKvYBoD%2FyhhM4eg2Exq6qCrHEyBmb93cB1pGbUffss04VBl8JgMxrDGDr3JX7TEkvEcoxFBYygLyceJ5JtoMtmh9F0R7bXCKeNkqC5M5ntDt7ndkaiQVsHk9455rJYs83&X-Amz-Signature=7612b930e14f44163dff4dd48f000bc01f58f4a8be5367522686145c2f042e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLREC3SZ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChPiauJr3wf7tnN2Jk2m2G7szl4J6GR5xXYHrXOK1ueQIhAIsBie%2BpoHe9JPjYTnaLE9%2BEsEvQpwgHmv6ZryIoTfreKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzi1pXVoWgVEbVz5WAq3AN5jOD%2BsyXAQOuhAB7O8ByN19lT%2FQ9p4icJd%2B%2BRPe7sdDmVuSssJHQC840uZGZOY5FdPEgVQUaeQmrnCI68n5Ho7KaL4%2BRMSnLs8NBQMM%2BTuA7oCZHshQ7fxkvo4PcfSTiIgLP9yOZdAxNxYsoW9w3cC%2BDUbymZjB%2F77sOcsD%2FcwidpA0AO7VfUc7BmLFbTl4DBpqzdeQ9C6J191%2BHchybnXFTE3i0DdH7JISIgrAQG71aZP4E5pDpgE9dJ8gUEv86%2Fq6TdbiHRa06fsX%2F2DoMVNkRYhsJPDY5jnzbgvKVNSQ7JnoPesrP7yzoG5dsQQVPIjxe79j%2FwZTgnBmfmaq%2B0YSoXqdTr3vGawtBwGIin7SzGn%2Fu1t8xtMqKqa02KvwNwHUN6uAq2nCo02%2BcnOrCpVlLsNEb4fju%2Fn0arQ33nD1X4gOlmOWYpFyyPyNHmIw5LBQn0f0VIWIkltubN7EwIgVQwuHErqqA1KuFwTqo9f76vyYlH1bRsAXrYi5pwd707ZpsXfLwp7hkDQCiS%2F8EKRgB4TUz8bLK3hubW3WiqlIKb35u8G8ETQd2YHNIqy6C0FXO%2FMCrPoScssa0W%2FV2hjo2hnNEwq6%2FZnFTCt1qDSzRzKkVbxSZNf%2FFxGzCJrYG%2FBjqkARJzJGRySYvNy1g6%2FUSp4PpWkLz8Y582Yor3FIy19oxJJyJSjLINxRPbJsfF60XafDWsZVAeK83oQrvZ6iayh%2FU5a0wLvdHmqzVjLaoBwmwzpGQdIpKWXdEkkz8on0Y8RmcRwrGUPjfM9jWyXQ8sQEiFfDOoYuEhyVr240gbFINg1uNNn%2Bal7xuiOWu8Bokx6ACYQlmBcPxdpHa3VsjBiOAuaATP&X-Amz-Signature=06f8fea30a6b1d6dbf4b0fb0f4cc33047af86b3be439bcc1188901bcbe63a89c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
