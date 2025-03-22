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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CPMPIN%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD2cpO8DhHgDnaT%2BGMmrn4VU64sW1IjCicNqw37zBR9NgIgCiQAcUa3Z7G7ogNn%2B0DqZ8tEqJsyobuNr1JcKsXgoEAqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENQTy47I5glMsGUayrcA0ZhNvQRqHuCG7TUmyfXJh%2FTGvroGHVWHOEkalof9JOT6oyNEtBVzjG4Fb%2Foe6NeKqooWbOPDowFGBgmftbp8P24BX0kBcelvfCzY3luLTIOCZ2UufdSnQ1oGcrkUlIQ57ify7uadWttX0QepedliRqF38qC1Kb7EN2RPoFstNk26Sjp9BkL18Al4UcLt9EEM2v7aEss5lCqPAgp7W4i9AayyyUicrbNajfkyPkjnXiut1h1MsFxi6VqIbQM10qb2u1PK1Va4M56HjkAtd%2Bp7BK3gJ7CDcwn4rMB%2Bdj%2Bl3xwY8t0JodEUd1pdLnsIVUbrdbEGAthiTNQaNgO8jSmMIf4kEDC1SWOwGV0u81wwO9O6Z8HX11HPJoDnGynuRp%2FhBFWgFiBEmNZQUI4sJgcS1ZBpNo9wf66meYTr0vBAPZ%2FiOT2xneK8nkFnEV%2FIc6qft2cpgxBG9Axa7qNfSBaa6ZzNqBQzchlnp8E6wTXAKagcA96lo7WwbhCSrOe2qw1zTsllvwEmEEgjPRuNYRHalg7NIr7%2FlmuXzGnRsu1Q%2FETTwEJJCtIaykgOZYXTkBpjVRcJ%2F96zTQsXqTGtrUQIfErMiM%2Bss2y7uhnQ%2Bip7bzZBiKaF3S9yckFBTOhMJC2%2FL4GOqUBdOir0aC2IIASJXarB%2FGOaMlty2yBMEttujbT0b0T%2BLPEKbAVfeOusZm50a0sdZVU0dAPYasAj77XJR4ivyaaplidxZB0DL8VQADZ79fggy99Nj4gzMzOcngFcDpUoqEZiVYRmuN3ADN0qXWs5FblIVE%2F7akE0He13wYexsBZ4e1m1o435e6T%2BeQQvv3ZVXmYKQ2pRKK1JSEd4nIz04x9KQSBEOIr&X-Amz-Signature=f93c4a99d3bd1677edab465c4b4b8419a2a17d4dce9480f0d9c7f2763aa62770&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667DK53RI%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCrppQPkrDMlum968sU5oxr3nRsDsfn9NI%2FCa2VXrf%2BDAIhANSTlJAprn2S6rdneEWR9r4RKM%2FNYrLmkoyzlo3%2Fj6qlKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBJ7oDrqyhzfTzmCQq3AOtiYY%2BwzHV%2BscDn%2Ba0CGYf3N2h99WrAPWEpEu1owGoYN%2FdC1%2FDYJ7J26bNsl6hqZHNgXfKAA0zOMbRAVF3KMJDuALr%2F9ap8RSxOwUUOdFfYdmwzk3wzijzNTzZuoQ2IccXF0NJOe%2Fn5AnxG5pq03tDFDUtcnBgvw9wuaTlWibZfJ21EfnC%2F7CooZX%2BEZYlmue3kg6hoMx0IMQmvMGjzUHxOxA3hdRzfQzxKyp6af5DuCD4rQMPVFwSSizEuxdjUa43yHVJeSqjkkZUczoY4e%2B2C62qEBdOZVyj5oPMcp4Snb%2FLSsEtkVsMGckkPqIyfcSAJ5uGjlUap6cataReyGsrHPjpXVjEyeQ154pw5U8s2IGDpzrFhYRYVBvzT%2FxgnFHiMiUM7gSOltc0E3tJpH4SOQGofwNJUYHZfJqzaeZZBaS0UB0V0VFt3T2iY5Xb9vwtvEFXcT7PpEzz%2BByjX1nOadyv9tvEVzUxW%2FafVbfQ5a%2BuPldWuLuaO%2BtIOTY6a6BWufil1TpztQZVWY%2F6FTbVHT%2FFJtmff1XnXZQwMxJc47%2FV8tHR1NhmQF46fDv1k74yh3nv%2BzLGcBGFK6jpWZh7AFWdVj%2BjfxjNG%2F3F%2Bmjb2VThuGr9nJUB1jngyjC4tvy%2BBjqkAeLvaAOoO1N2P5u1gjyzUfGiJpSfAHujaXRHI640QqRVXsTm%2BIa%2Fax4I4bzP%2FJ3j93jfQ1XI6%2F%2BiyD4AYZuj%2B6THnX7vlL6NtXNwY89V3ErLSqOaaiavGcv0HywKTQqpmi7NQwOOkUTzY2BLqx%2BmCXUeiQmmISQ8vF1hJcZl50Chh5MdJ53ixN4unva2e%2FUEnKIQQCmXXu233pTI6C%2FLwmQWpW1q&X-Amz-Signature=dff64692951bd13f6956ea3fc6f411b7b55023a29fcfe9f426c586bfc494b590&X-Amz-SignedHeaders=host&x-id=GetObject)

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
