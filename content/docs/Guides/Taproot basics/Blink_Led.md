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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLZGRKFC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJMPn3ddXMM%2FnQsS36rYSlJogouX5UE0Fcp%2B1yNw1r5wIgRnmszKWAm1mj%2FNyv0sp9GSAPXvOZEfqqPlOxOhfd%2FVQq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBVh6x%2BY70YWcoQjASrcA1cM4J6RxyZU826aHHJdLPTPr1mrDQcukilxcy%2BWK%2FFsabeUwWgedMHAAW7MCAuBgYKfc%2F%2BM3%2FWEBv%2B%2FJfGFTvBAcfzp%2BbkPd3RX%2FHsUJ8zy5HY9XdnniZIyrXbdwW8jsv9T%2F1yqoIGXxLDDJoqfSTstjv%2FsB7qdrjpWBuAX5JfoEabyO0P6gYbgICkK6HZQrg4AwgqEWvvEV8ugpAko5KtebdFylB5Vr%2FbdGK66bJKu71IR%2FwcvEB8XaSYv0ukRypCf3NETdphEGoJgFTSfVKN7GPpKRoQtKzv%2FDdRfyag%2BvaVzdlNF17wQkmcWwWDuvQUlxGeAzrS7sd5tugTkqoDY3rSovvH0FF61Lm3p06hedskHhoGRNXium6W77XIbi%2BocegywB65XAnmuv0mbWa2jedI9SIcEX2N%2B1FZ1dTGSecr7RTCHuEtmHSfoznQwdoMCgSO7io1A94UyCxKLo7ftDYhumNhshwWyz7lDpLgzC7BfOhZgx6Lw7fLpHwDJYJqYhAA%2FBj4kIfak7aKzAS141FrPRlBBwXf5QulZn1UreRZ%2BhQfq0eYfPnPzCaqgiSKfF64uusEhssMuv07zodHVaK0ZBLQMAzp5B1KmKvWa%2BkEjHjg6CWEEcca8MJH43MEGOqUBsdwmNaZsbxC5uph%2FT0YzCj7AGYlMo7Kpkj2FXIdWgY5j2%2FOXRO57IXr7TdS92pkbe73d503%2BSMMXv9y4PTdgcXrbcaPnXh%2Fj6E8iAgofPZ1NT%2FH%2F7GnXSO28Jo6FL%2B0x9tq%2Bg6BvWsiT8uZRvUT7E7pbkEzJXQFf628gYKqEUW6EhKOLbuxm8Frp8RobSfoXHNpgtEp0dIH2MB7UbfWI9Er3AZnd&X-Amz-Signature=51cbf913c4b460149f79be4428e5028f9c11ee6b7a25b15fbf2a0f6d961e878a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWMI2FQO%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEA%2BjturdFtcPFRe3u%2B56yvK%2FzY0k398pLv75%2B6BKHPtAiBLEj%2FHCs4cS5Nsy6u3Ky%2FkR8%2B6kIMDVQK9cYWIcMjswir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMkXuNq4j20sUQrxqeKtwDU9%2FMguOkKKtgtl71gggAL9%2FAOlmzhjC4JqIHhfvkYh6THH%2B094O9CdIJfixvqFpwdVFkGt0RMlFG5TzOsMppeicZGea8H7eeRMdlR3uVIWThic6ZFSg3pkbnfXJmk5pIr6yVtdPL6WjbSBPrPTzK8DR4PgWAGj3eNvjnNnEILdQtD0TQT9Mp0XfyvNSW0YKJbW38FU%2B6c3dA4sTldg5PDYNRWKyIQGicGdTDtVOyJzBaUQ5HVcp%2BpjEgKJD%2FD2zlzviuBeVAnv6RRwWkGtd%2F655%2B697Fts2Qkdkn%2BaAuXFMImPbHtArZasKTpiQmCfSUKjrjVsm5DjntpP1amn455C4AQGeKDm1vdxGjaMh0iM5VVLS5t9sxECpi7XrKnWxBYSKkn3F7WwFWtRksIGzGh6Z0PSRSIvsBog06TaMZ3cWgPP7aZOfcyb3KggYrETBHKHCEigz%2FItfrcQkbfK5BQrhtTECYmHpsOX1X6OwFo3eocT2DvhMKl7zzUIHJe4DPOEDWIyAyOzaOY5XEMXkqPWUZZiKcCdNmo%2F8zgR2XsaWJiPWclzeFkIsar9gvx0FqU30zgj8FI%2B66ccdFP6YW3OC97YebwF47OtXVkqvlgyV61iVJ0DmtiiVweOkw1%2FjcwQY6pgHYYFdfrXxHw7E3p5RfcbLnsx8n1oGSfOpUbScrdEX9sA1WxFoNyc3wS19cibeMOskQYHZ39TgA2qxT3Y17vEaFHOjW2HCw8OjPF1X5AOYn3RWdo3qwJKOXG8rgwYeDUr%2BPKYNQZhCvZjDuPfrK%2F%2FRJQ28uMcuUO6wE9aZzLfyLEGBXzApJov%2BOksV18%2F5F%2BWlNZYkZq5fs%2B8nxr6ltMhkWZO%2BMYbAv&X-Amz-Signature=b924a3478501115d8d12e2af29af0ce1a712d70212bcc2859304d7852d0b01fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
