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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6PSXH2I%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKKwutZi2W%2F4doHmwHiJn0c%2F8i9EMVSrineMyeL9xlDAiAOgpAymGgG9%2FZwfpavh%2F17br6E4nfLRHjQ732IdXlsoiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhf%2BuogGqjEvehec8KtwDhV3TvDQN%2BvVQ3jritY3AXo52KQxTnbtBVyNGzG3WCgtnQvULfBqTMdwfR4sR1JiNCzQoPF8sb7j9WoB0%2BxRHPJaCOJfaDmw6mNZTlzeey25qQFc7TZRFuGTzqaq2Eb5xfGtnoy5mSF8kMONSlzSGUtLkVVhWlJggdYPmH97U3QZ%2FI7gptHxXuVr6pEQvCCHfV6QcO2NgxiJ%2FkIOvVS0B4FtajuE3gp5RB4SdSC52SXNS7xI6FNu4FmWcMj6qwfkKEI1ggxtNMGyQnDO2LL8vqRYYJlGhSshxTfMsnAk7VY6w64aoPlL5IW%2FID5PjDSgrrWPn7D%2F7c9D2weh3RQ32Y7kEERc8L5SNs97mBD2byX87dD28iu5oZ35wCCT%2F6W2r6YUON2SuqllwHmfiXOHxkSVxXKCARmWvXMCi%2FCo4UpvnaKEiQM1ZOPlXPrZG9kaSdW%2BIL%2FIdV8FQjgo5CzmX15obeuUeKd%2FN1gSA2vYVoCUEGLlWd0%2FZG%2Ff6zCqLc1FAgiVeA%2ByDZVomy1W9evBR5T1AHmaIBnkPNPx0CfBk9QiGYDDOMjW4X0%2FSatqw4iBd3RZ4haBJVIXhNEvrAAT5T%2Bc1NsqulmsH8grmMnqeopm0VDkzuHey4AQ4E%2B8wtO%2F3wAY6pgGR3uHFR2EflQhQwTMqbtLDqH4dhr3baQAw3tMPV8XXb6kSRIuHYqz%2Bb%2BqF3rENwS442X3S9uppgCYMtaYceDTquEM2EiLcw12Amg75qmM5roLJl%2FTuoMp%2FBZkjjSGucC7AUtuB94QjHAYVxReZPlSZFa4FH%2FnulZh9144k94jYeM9DV1R9fgUVvpYTMt7eauyeX%2FRFTuw5c7YK8fG3OA3XX3bVvvjH&X-Amz-Signature=2b0e531cd4d9728e336273c4c8fae72461697a3468aec63bcfa7f93fcb53eb30&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXNITSPI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEbYP7hVwLAVG%2Fvc7nbRUoDoC%2BT6d4aiUVomeVYfXjnrAiEA1Bd3OoaEILw0nfJiSFDuImQhdrxQ66FCNk4CrLEVmeUqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHgAp9s6WQDBtbSdSrcA5w9%2FQRqjWB1Jw1u%2FGXHHzLmpJhL6e4M8Xm9aD7ObdYvLqojweV64mO12tCcCXXak4BXQZHEhqXST%2Bme8cMpVKbgL497KlQbXEGA9JtL%2BLqpQFHg4zRFXoPoPEGocixdhXvOLy2Xsz6PUhl99zjPDZ%2FygSX0zmKdyeQda6K1Op1E8cm75UZknz0%2Fxzn0ueacrOrgOUUoBVMA6a4cQ9gWJ2vdFDmwXVdKxiHiQjCRx073zuozb2y4F6H9itiTDOyo5C9XfjR4O3rDJMVNeqn2roivAQwYSulhQ3rgwYddn8nOw1Ktc7HKsSJ4R%2Bjy%2BCemgDtcOw7rgF08Su6De%2BNIpocV6Ono28X1TQWNZAGWXtK9bHoZi8C45ZgXMVaIzayOXThaic82eg36VJaG%2Bz%2B59O8KpoB%2F1qJvfuSBBGXnuBB9j8rFNRE8%2FVmZ4xxhXZgIjg6vAQLZMu%2BwUY5W%2Bglh%2B8M6DGkBDgwa0XQk0Bj2boV64F%2FbHsPLBukv8upULPWvRmUUIC9fzI%2FJxhToNs92hVs3wpVg%2FQmQn7TM78ZO3rb9a8e53tuo9MhU7lw9gVqGv2TQQStNod6J8bxMTuKR3zG2LWPih6xuMjDEB%2BhOokDjdh%2BLmnulbJSydPNqMMD%2F98AGOqUBw%2B4133CX2%2F5hJxXmKVIsMt5Czzxt8a68AnM4a2UgvX%2FGXbFbbs5FFFjcV6w75KCBiVZRhck5oz7HhmTzsL070hKX8gXlFtbHw%2FHseomZyxGil8b7GGt2OPJpX1F0VgL713EUBaBqsVZ7XJb2SkGe1sxer18IwH4IrLN%2Fkdlj2x4OMGvSHAKvo%2BcV1Empfw3Mo%2BoH%2FYTAuwY8ZzUWlAqAUejeGcu1&X-Amz-Signature=8fed513cc2a5c2cceda4025f0022bb07f05af28fd8f017ec1e99df9c9aa3a70c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
