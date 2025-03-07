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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUCNQH4N%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDjduHO91NgxMoCIAcNwnxJDNo59TycmSE6mSs5NvPoAgIhAOemEqFXxLL9GsuGCyEQ4lLhqeTip%2FFxY%2BFZrCc6J4ZhKv8DCE0QABoMNjM3NDIzMTgzODA1IgzxfgtVTzRhqigbmwoq3APcs%2BHRE6goZSp9gr8C47ho9otL0NlUO%2BlFhCgRLwAStgi8oXa3en9vaG%2B2eAZsRHzLHgNj%2F1nBv8xNQt%2B2wGICt3%2BkeUsTBUjR5485x0Gr69I5ZwX9NwCufCr%2BiWMfonX5YRomtGoFtB0F3hlMtHKtowxd%2FZgjE%2Fp2RWwrhu21yUaltR9h%2Ba1c1M5oJdrMjYuJDc7M%2FHTxE16UYd9ovVYUQUQ3GXyZ2NrSIgbjP61KubjnQEpoJ78XcJo4LxwBz0U4mc8f30EJqdQhNpk0SAqd1q5V0szbMLuj8OX47jhla%2B1nJ82scDjbMA%2Feg15%2BTDWLOjGpUPzWl7uTnOgEjrlZhilKp3PYSFZN691wRTSvQg51onr2aDmbil3owPCcNI8z2TxHAcrMOhZtclZDPg9EhV6WVbMEH94IB3JVbGPzsDRZoFaOtF79Hw%2FVhX2rZDMBxV%2F8Nm%2BV1pQ6GgaYapACQkt8wI3AGgARFxadtD9vT53ROHvBsrEDeLgLsx6qYHCdvS%2F8U9VQAFTfpF94K2DrZKeW5t63ZqaPnrqhIvotRLUz%2Filj4SRWtQbrkJieCH5C7gF%2FplkK7uc9pgIsKV42MRxEd4DTGOAJvxooz1tVcwwE%2FcLkandQDflhRzCZoK2%2BBjqkATT6ARyDvtgm2WDK2%2FqI682L%2BI%2B9JIEVlr23WXxsWLCn42Pv%2FtXzbWYOdQOTJYu3typqosNhrgSUlWOrA5yGdbgYiSkGnKPYt2DCtg4kdg%2FQBbSs%2Bm%2BWkFIg87xZTQU111aDIwnxmIN0AJ6MBRfxGeXatKviqlc4Q8WvPLU3oeIwE7K9DqwdavwuQd9nzvC4zaqNzrJeHtVFzC%2FRzQtNEVXnC6lJ&X-Amz-Signature=f5a10dcb559b857d45c049d69e1d2c58aac90623bf70eea799d870345cba1ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAIXRY4F%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHLfbOqCquPstLQP0LAjJWeJDmrCWsL9%2BNw9L6mMWe8%2BAiEAyR4BSTEq%2F9eJKMEMIj%2B4p13CqVS7mVhztunyoMwig2Uq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDMwA99e87TEuP8o9jSrcA4W4rKwZuNiwxJOSMU2GbgevbwcllgUGje5%2B6wb84kA%2FuVxoMw2BORMyXtU0Q9RwrAvRNjup6YlKdqL1aN1bHI9gO2JFraDIJBx5phyfKKKZdQ3NmwV9gIpxFweOZ9g2RziSNiKXatScORaHDRxy%2FuYgRrwcA%2FxuhKQ%2BgtOow1J5QfFPwUO5dHwsS0kTV8BDHEyP3OE%2FQUU0iBvUKuEqOW69x8cUCtbh11HQ9uTGj6ignejloj2y8btBv4X9titnghdwG7HiY3fGPYBJPVM79fu4c9iHpBFFIQSyQgdF65456YKw6ugUQxOfcxSMiuZdnUHLVkBSIm7f7nsSkNZtA5C46dxU9R49tfWmBSMvbVspGBEP1U1ADe9aFye5wXe2EM9GXUbSMIf4w7eV%2BcDLCY5%2B6we6MUqI1FUHEmSmzRCzBav8ObI4nh0LwRrfMrQl3S8Cjl%2BOz9UyF%2FGqt4HIDhgPoOr%2B5DIA14y3ywQPrmJ7lzugnmtLz8PnQVk8Okiu70b8GNedA4Y3AtgEDtGEtKRlkKxFnw%2FHtSk1HDncAesA6%2FKDRA1VrRvVP0fIinfZiTwDZtjbAi7Y1M6wXV%2FIKWE2QTjfMbepY0QCa7fhvUYszJUZc0hVFB7gZdUtMPifrb4GOqUBgEjM5MCc3GZMB354CzKKcVD%2BYMAofYBvX%2FmWNQhvLFiopUSiapogeCcpCORLDJau5EfSkyi50vL9HLfZM3Qrty1NMp%2BUGT8wkLo65VrgVNK3VW2Cc0VmerzOggj4k0dRe%2BFwxAqKW4altUI47Iu7F9nrnX1u2%2FqC9BHBQfSDe4vAmPkmAcrMejJeeUPeMOUQmQM51t9WD6TLFB5bFtde5e8%2Frnl2&X-Amz-Signature=9b0b035a2d23624404d210a892f37a487a36ae957c3a8d7804e9d3e6cce3e549&X-Amz-SignedHeaders=host&x-id=GetObject)

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
