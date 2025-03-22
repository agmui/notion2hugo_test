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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2VGQ4UJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCNlQFji9TWiUdbbULv%2FULc5egmmTz86baT%2Fp%2BArW9PiAIhANWRHGwvhUG%2By2YLBr6wW3TZxWHGZzf25Ze%2FAefUAytLKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTZ%2FtzDPjOESOEGMoq3AOCylyU%2FwnZALOZ0PFrpKiKiAYwr1zZxCcnqtsFHWWskzyHsfrVnkprJctzVnUBp8IY4VoooTZI7Z6XvR%2BKQttMhbrSntvDQNA9tU%2Fhlzn3Hx2LvaTq6rykXdgaAAtFSpGGYUIsYMzxlnjzMmpkmg7dkgvkyiMHuYCtLoDIRd5KFcF5m1GFMZ3d7qDgKmGAW1BNQdL2qmCYQoTaMBQdIQqWKbD4KkCHBOtO8jrrl8JRbE9b%2BcjOP1IaX4fBkDhI75DoROeY5uNNSUIWDuMRbdxdUlLlUjh55ZR7Cqq0dhZFdtBvspoVRBWarOk0Qyi5%2BzUimJUq1e0VpcL%2BDsJmHrq%2FWAVlkjC7%2BGiOFV4f5VXvHS4UcZDL25EptuGT0KtKLN1ZAJsNSTYiUiHfOhOHhDqVM7%2Fheu97Zy5EYsN1pwuel9J6XJ65E5FvcydYsSnZMqdbw6N9aGcuQOOfy3wikCeRZjQEX%2BzUs3a92WXQabgsP5UuWhdfi7oLtWN7MKjLfTHZYtydjKSmK11SD16TCMM51MV7SIxHl8N86t4aY9Gh0YwkspXu4O4xoUtYVKn%2F8bDWEvhxeUFYLaI2qhvnz57TqqIOkh65iFAfCyqJQZ8uvKnLN3jxkkMPAohKtzDb9fq%2BBjqkAcKIxcAt7ZlAGfgO%2BSq3FuBj%2BAUVa9D35Rfb26xT%2BBiE5EM9%2Fqcw%2BPm3oER09ZNxL6OBZQ2QuNE1FuIDd%2B3U%2FRRpTm06P0uBav46QNIf5A0ysZzFms7zcB%2BVb3EKYTJJKXSezhmfJiqu96ljlsaXN8%2F4FqTAPxTWgqHafBlfEc2ZxeUpEijH8PalabGhGXkr4iFZ5mpEtVDnryCkzmm4WeMJVt%2Ba&X-Amz-Signature=857307b602e1e83f95e5fea0f39a1bed4777ceab99bd5535b62ca68c0fc184dc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJZHWIL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQD7GOFd4Hae1lUAEdkL4eiZuXU7LpVsWDWIyJ7aeXjw%2FAIhAMaiHYEvh11v1f4wm8ysvrji1tSw5F7tdO6D8DpDkDeJKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2F9z7V0HO3pJTaVHgq3AMuo3GFLOD11tL59pk2i7k3E%2BPzryLu3dm%2F7mgzrhlUL1WIu1%2FHT2KjI0GjPoPyQYBjOrx066XexRFrBlVI3S0L7N%2FN%2FzyP3noGWjNfpG4oL%2B1c7XJRN7XWbbvezlOiz5vtuk1p%2FHyk88WFpTwjBISuV%2F4W3qloEHQwAizAqgYvCMTGxDrWoa80dOU4inEQeVNFdWlCHVeIROL%2FayXhjcRJ%2FthxzkuxS75fCbW3izwTm%2Bf%2BrK%2Bv7%2FhaMuSb%2FJTc34rBZgvcAL73mj7c8DvmFcGDj%2BGGKJw3KMLiaR5gP%2BI197p8P0vtwYQSR%2Fjpy%2FJdHZ7z3uzX5B39dATjD%2B%2Bj73MZrRdMrwpXXx0Qj%2F%2FNqbOkuUaCEfCButpxwqengWn73vRBdhUJkIHsRM%2FYuMLR2DJnoPNw1md83ZSeDhwbcBm31srEUGrGZKaTAJ%2Fnh2DTNksNeKA2seZgr9vZQo1yb%2BzqwbpYOZpPWQhDG%2BxMJdVXI2GvG%2FpqOV2l0BPP1OFJHG%2FWFQfeyfwt7U3nphXwFHRK1NJE26Fpe2%2F1idGcczE%2B6wKSrbPWL6u6hjqQn3Y6bzBWpiX3UpctgAh%2FGCQoEZ5IDpyQnDBp%2B6rBiEN5aC0JJgyw2APntdyO8LcfoTCA9vq%2BBjqkAUgivE45w3bp%2FUbOdRohr7CP1geE3umu5%2FvOh2QKkT%2Fc4voG7bi6KgXGBt8wvdPWgKyDQVp840m0sVL2e8vhVuPr%2FbXGJFFBG2YahNR7RyTKhp1rzV08AvByJudWVe5lOQMQ67EShm4Kb5guWY7guxshpNxbv5DNxrtnPEsuU7z5pfwjAq3vuc0z5f3YZkWR%2FdDfLMBAy0yuhel%2Fa5twx8HxTgGm&X-Amz-Signature=ebfca490fbb0e27f83d5fec05f5f0beb1f3afd449d9b45c4000720d07c3a1407&X-Amz-SignedHeaders=host&x-id=GetObject)

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
