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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GWZF4A4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCOfDMSBKPFZqfQOmHbb6lOAO4r8j2tw7uufuOh404%2FPAIhAJHRjX5cPNCqnG7XXaLCMN6khE6TebchzmQwSf92JbpuKv8DCF0QABoMNjM3NDIzMTgzODA1IgwAsL1UXBsBKuaUAUcq3APsEZO5M%2FnocTi88frrfRLONtYOhYe5pyY%2BLIibFdb6LNG3nhgSQxrF6r8beluxVZd61PjsK3J0%2FGt0CmybiEwYkgAn%2FGqjblSukuTT9NGJ14xc5SyRRz8TTx%2FRA8bHNL1RvI9i5KKWTTvpN6fsr4pblkt6DQwu%2Fk9rsa2u4IoFyhcXnVyHnmjYUCWL%2FLtRZnrwZk9DNniEFZKeusPhYVw%2BxzquaWbbm2WL1f1wRW5K5wCgEfbqAA24CidYhiucJpVIiIGBb5WdNkFGrl3oPKe%2BDEgQQWOXcRlz8wNW5XfTkrTPA2I5PAY9MOceq5N1toGMkMsD7tML8CQWPYq3bpqSNQozm1EU%2FeveaUW9%2BzhCstTgC74K4XsGeUkdydGrgiASf6670AZxay0REz23%2BVEqjqmJk5sUanFfpS37d3u%2BSqmcaDChIidowO%2Bg8inQ1eSOEVCS6SwbTUiMV2augoLWmFASO14nQ5ebAq4VVdMkqu6vmtsYM1kg03Yz2vDz4HAFfcVHgvBbCz0fL0Vnt32lz1NJ0UyGMG6jHeu%2BtQa0gEnlPLBbjZSoSqDOae6XE80%2Fq6A0EyoFmNEoSUvxWtB0eGL4nHzcDwJfRyuSkM2qogq4H0UbzigOJ4wsATCa%2BpLEBjqkAUL2n0S%2BmuelECrXX%2BnivAD0zhwmc4TKXi9oCRt6oL35h2bY2FAEj2t6ZFyolY9DbKX58OzzuvUwTv8c6iLlSKzjid9OwDvh1OvoALivN9dQoGtTJ8GdM9vqOOKHhq0Rf14ekDdioRQYiOjxWh6WNL15JyjNl4Bt4IHfctsXOG%2B1hJY8MeDUCHc50WRlZp1M0npKRqoPGtbqGLjtcQ9kCmMIRRg8&X-Amz-Signature=b18de5a41b3351d1a4138fea07a42e9a028980806281579ecd5698b42fd01a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673NITDRO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIHLQ16IqYWsu4UqqNaEpp9WRhkSVxNZm0LZ7Je7SEjV2AiEAiBlMBeRiN3Abh9J9G6cGETlLztvHIpotexZZEmT7i50q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDAZQ1XyIB7cZVgVUIyrcAyTCx8oB83vFx6Q9Dwj8B7VWP%2FQjZH7CikCGLc36an9L3clbYeKW6jbypk0zE1G1VyxkDjzgAeHLjwPmLijtziSh9t46%2BJn75ffxiNVKICj%2BnanMQy5cTjz7kNozuR5prXkRM03UQkEdHQa5RBOlWuM9i3Kph%2BcMove%2FdbUoE%2BB4ASNmJ43Ms0PwRiz3JN%2Fofi%2BmjqQCjrc%2FTJhjzTgKLQ0M9Zam7oKa3oipctOSN7evXU9niK8IRyADOGbz36my6noXpBgv2IAIaIjkDxZLAEa9G%2F3zzBmCeaAltV3PIRhBn3CjnFGCT%2FIZY1UeIOZ4Sola%2BT2bsVaiZP%2B7qZ%2Fe2zxywxHw2zo%2FpRsZnOOOjI2BEplE2%2Bu%2BfzrVcxPcx%2F3wLtLnrijLq5fVRnfNTvNriB6vsWWM7YEA0PWVqar6%2BvYDkkQhkzRNmAijVn8cRVyCCym6V0DfljtzcP6xAxHDrCI69wYeuaqgw8avZv%2FtcDPejWzKAwap%2FQeAwXhG41ZPmgLBK0knnCzRJ84E3YkSce7ScXS7wvTCOoczSTzmk64%2FCJqzHv9G%2Ba8ZAxaKskWQxuc0MjZ1B84DDNwZMnHAlc005pwT%2FX%2BX7zRqb9e%2F5vnPbobp3JksVblTcngPMIn6ksQGOqUB8UsRby0LqbS4WpamSgYskImkQPgHGqy8WL75iP366Rjfu8DfQG%2FMEzaZNHx00w%2FzcV218rzGCnyyAMgIYr%2BDSYGG4scdtEvjAFiTn1tQtNuiAUsHqoP8C7vPB%2Bwophb7TG80osSlvbE7vED95DIFCb7fbN3pKqearhEtn1XFWeRfUVIlLeRE78rQ2RWKQ5qPOffwekMOPLNKKrm6oTQWhJW10fQM&X-Amz-Signature=17abef086cc94a7687224ea6b3c6bf79d7024d74010ee31d2df262018fbc70b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
