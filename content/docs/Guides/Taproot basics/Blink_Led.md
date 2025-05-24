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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z23DYPRG%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCID2oKSd9lWZx%2BlbFC89CzSGVSGFiohnjMgHhNuk3LTL2AiEAr%2B83gWvlJpdjf0Ab3OhJKV8%2BcofRVWP67rDoNCXbBVkqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4UdG1IUeydF3ht5SrcAzwKhifm9vOk8Lu0PUkk6Vp7lEaj6uFW86OXlGftFmtaO%2Fqo8UlMwiocvQC35L3ZHn3UAdOsYv14Al%2F6sZmudG5omL%2BeREP3r26xrhF%2FBAZLPv%2BzXyA48LQ0VuPyxuoHEKZ7hmLdNDnj8LInc%2FsDkNamMzK%2FtOY63I1t8DvXPW17azcVK%2BZc%2FWlccMaUYC6FtWEGcy567M9yQ5snL%2BdvahgaZ7Fcn60cPonnLsghYsvpCPJXlpV4Vbp7xSIAMCqG%2Fv48Fno%2FQQmmtOeNGu%2FzAS3c7%2F1JLrgpd8T4%2BggdY3114IFoQTY6lLUWlAJQ%2BbxGzPfZ1vbJ6SGIP4QmSgqty1WksBWfpezVruCnI7VIHbZtne48p1jRZ38DWQKVnOkIGuxSleCDiKVwcT8ITTErLUmaHTfXrZ0UeRztDjkh78KpCaUT46witwW4ZB8XrUU8GZXPL8WIdq7EKMclDFdsQP0BXakqAnujV4DvdB%2B3jfS7ybs55HJkymgMY5TIin2ZsQE4wJVif7C6nQ9MwM2RH6ndl8VrGt3pWWQ%2FcoTRyTipLbCn5LUG079t6zEwY7a9CXsfDKLd8HpXTPfINI1WoQBwEj03Rc7Ef5MFn9XzcuG%2BI78aUPqu2hTVuCuuMKr4xMEGOqUBCdVAs7PsqEYwm45dXyD5WkBQx5f68JhX4k7eG%2BIGEyKkCReN5pz7llzpF%2Bsd8qFYDLpxlRx9Vv0OwMngDinQwQR6JuwqYIsQ9uVV6DQMgi4uvMAnxt3AkN6DaHZVac3VdD09%2BD4ViYs2OZa%2BUuZIZnXNIU0DULmIzklPoXAqMYkJAuAmUANvaeKgS1pgULWYTaoYUkJ4Z3gVZkt3L8%2BxFPepN8el&X-Amz-Signature=ce59957018d18240a7faf798169cd79d4c1b5e31a6a5f84323f42710165cd093&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUNTVKZM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDJo82oDDraqGEvuhEto%2FiDqlzr2%2Fihd7uE41YIwSqztAIhAOxD0LzbD1eAeGIFvwyCrR83IYvHb4Bm0j3V5rooyU9PKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtp%2F1WsKNsBVMHfAIq3APnWZVCJd%2BnnkAySU6WoR%2Fu%2BwFeCzTSjN2n4hadmt6n8hGScrq5DBEKZSs01HkrLbpyHRk%2B1i3f9D39V1159iLYmjZTmo7OOb3SnSGuSjDXTPe8eXIwlAPhWO2%2F3VYEqrFj7hoXm6JkINBSGui9lQFIdPwWmf8aiP1VYojh9PljUiMA9%2Bj%2FeWJj26tZR7HReqW97ZPKDaKa%2FkPqMc%2FUKSiYlhJ7ziHWoGS1vI68H4TvPJHsotzZgsAyKAnd%2FxImTY5kfTB0JvyhCSaD7z%2BTOLPUm6%2BduD94n2GKYYFi3qf4k60IAzTVpN1sf2SIRGDciikQyRRhw6DYZ67g3n4%2BggxQ6EG7gv0NDS3PYvYdp3vcVB7hT729tCU1odWO3qIkaSydKM2KxGlqON3g6FRTy81y5oaIQSlr6y4OoVfuTkbG8ocNokyJAlh30bjphu1c%2FvRD0yIFtzHFP2gnPFs6QCnoBYkUlp3bvGoMcovp4QEXFBdh6vn1LBwC6CYhVJjccKfMDO%2Buk0CuuXbsqtrYzwjx9bOdgK10F5rx6TNh5JmAUOoryyN6xvJMHliRdhqOhx8%2FZs1BffxyurEKBvaH%2Fsy5qFOwEaOrcbiAavKopeFQU1%2F%2BqMYuuZO2KP7d9DDF%2BMTBBjqkAcv7LtISYSkaxZKQD4QHT2anXq4KJA3z7%2F7oWlXGkvR%2Flm2ZGERuGuOqrj3gRtOOXbV2LWujf58oTzyfGvPoXXa3km5VAacgfOkjPDQ%2FAKG5bLLYQ%2BWAQbnm3yVrgAAeWoVHUBSkw1181Nq%2FF%2BiecwXub96eDDm9Y60aLvlDi%2B6huETN0lGYtYgQtpYdOXffSFgWdAo6tSxZZtyZ5ulOOGKg7GVj&X-Amz-Signature=35d611bd1ac13f593b8a29a5232f4194f09965c0ef7607e520916bb2f3ed9360&X-Amz-SignedHeaders=host&x-id=GetObject)

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
