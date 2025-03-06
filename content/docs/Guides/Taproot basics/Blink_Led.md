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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJT3VYLU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSdF3Fb4%2BNmNa%2Byj6eMLvGk2ANw6eCk11XGH5f0UUIAAiEArfs8hXNkZ1KX0onp1v1AwfxO1cxcRA15RONB2hdh3Hoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGAJ2GHwsaNsCiSIgSrcAz5d8%2FLW%2BAsQ2ADH6I%2B6%2FgmNyr1%2BrxL2Fr%2B0%2Bo7jQP53IesSeLmpOxDAFvXcJnGcBn%2BRs43PTTfht9VJ9LbdMwdCEqefwkNO7d3KyNpyfn8OS92BNynnxUoamI5cgt7EcFm7P6%2FpBuIJB28Yb%2Bn1bmK8kUrqBPt56s1929ePD4B4vR4A0gTy7AEYMlmXr9BFtYslkFB3ueN7CpmH4of3e6HykH7kE29QrZBMmZYMJzMZD3St7Jn3YrA4LqOwcSjsB%2BChwKTRcT9XFZyIyTw2WdAT9wjxQwoAah4ERaUQZlOj4r5Ac8sFk%2FvgDGxTzLQpTD76pf1q2QKXo7i2RxLH2kSLRXjAZsuTqldLwEkb0Mf%2Fwqc4FhDzGLFQw5bcugBYAsRo139M95ddg6KYlGdxy21cm7VzMdyCt%2FnjCG%2FLSxFISsLA38PV8PZDzk64fO4yrmjI3KKMviGl0TRycJ%2FJ%2B%2BzABt3MAsnqS4idLVWzooQ%2Fp2WngsoMP9ziU511a7ZM8ESBuYKpLmoHyX5RDYVrymQebBCBP7y99TuTnMLBCL1xXtEiLhYJYh%2FxG8dAIL5gHNSmM%2Fvqru5qFC1pIf0iLWXqTlbPDMDP7tfw8SOVnZTPNFJa1NC%2B2229bwfoMPCWpb4GOqUBgAEAge1fyu%2F9mukBTnvWt4dlsbOSZPIM07cHUp3rPcPEISif9Hy7qDNGE9isySOURrlEKIaUBtjmcLBC3mr1uJ5YXp%2FUF7%2FesCWUF7F8%2F3V76KcOxrNJRrCJxgmV1q5%2FlAvgDN3n%2FIOPlgeeaVWcL0Ob6iCGnSn5QumLr%2Ft1NSzntUoMg%2BFMlAGTTXyV6IiVyss7dacxvpDpz%2BDkVfKcyQlyMMcJ&X-Amz-Signature=dc4c0f6f004f539abe96c986fadfb3fee7ebbc46e7abe06998f0d5984e4d6655&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SE5GZ6V%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGbygOPCBl7He%2FUg0Y%2FtPpSFJV6vj9uRvv0HD0sCXa9wIhAKCZvcNWWya%2F%2B%2BkZXnbhNADPslYhfN2JGFbPVJaY%2BH0GKv8DCCgQABoMNjM3NDIzMTgzODA1IgzQViWXZVuKT6op4u4q3APmRCjl61lFNpf8uioJHOY7Tdgp4ugSJLTAYCnrxcVOHj7FK14%2BN3SczzmuqX41%2BNxKtXIP6D5L2%2FETEGeiZ0J2PfGSp9FAaE6AAJy21EAvd%2FVYbS8HKtk6CHP894F3n7w6Zz9zH230MuU3a9ader86ncG9XvKVUfBq%2Fxn66jF%2F5RFeludYP7pit%2FE68YuxyCJ29PNZgZfbOePWVUw9QHiQWUgsRxwipHWHTZwOP7ut2YZ8jqfWY7ekhgWlTVDQg6pzKIT1fmpg1S5W8IcQFMjFHuRwG2IQu0XTNn0El1RlpGJN7sGB9UHvvctVUy1fRxOhIYGFeSo5MWdN7d%2Fps1MRA2SDqZ3ZJ3itdvTw2oNDarpQwGgztDBlkt4yZ7cMwx%2FgHuzjzUz8WXwYH1Bws5so2BKdnnczV0gr3M7R%2BWpi9UaS6SBrWuub1GUxMtedG3%2FpLNauYECMkHauqva3oQYFrIpbyoiHIgoRWim%2Fa6agMGhuIllZIAMjynMCReIUtQnLLPE7JanQzA%2F2x8SoXdOaS7SfqGG8F8tOBrtx9MJg%2F9WsX8Zj34jn7UG%2BVk1nBvZSLdwbnRNTFqhIek8ImQnyyeD66wGSb%2FZqU9uRgpn3wkQhncS%2FIylMkX4dIDCGl6W%2BBjqkAbEsQaHU1X9%2F1DNOn3xCsuPjKFBc4HuKiQq9SK3nzrPbKqZIsiTyPSiGS5wpFeVoD8ZdL9WLYh04ljYVEEaQ9OT%2Be0ARgrrJBGIDcEn0NtYAiH0gGOulmP7iQvV72OjL8rB9E%2Fv9t5jqM80PIG8nRrxKlZI1ITr4ZSAnLHI7kj6L5VcardGm79sK5iIWwBiQRULWNwVzb4WWahUfddb5rW8v831V&X-Amz-Signature=014b7591c1013c9a218815f184bf4e623ad7577f453014ec06b22634ef3970cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
