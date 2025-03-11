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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKAL4HE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIDfjU5RAEEpBrZlftd8ZRg1x%2B6LWAebeFmbI0W2oQZZvAiAc1YW8KFCpRAzImDl8OkodrMBlwJyBNWd90fqFuklVsiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEOfKTwDedvYuaeO9KtwDe%2Fh8w1jC8Yqy29wZUT%2F6%2B99jKq%2FGU3GU4gt0WszY3pHyI97W7ZrKon8K7S0dlxkCyPXTMvd2kwz5XEL0fgLfirf5sHrSBVRLD9GNXSaybAgnCvqvby1IkIWvq0r%2Bh6PjPm0r1J2m6Awc%2BUqRBs0K0qFGRa%2BkvkID46pCPoABSgl7gXZihYJ4dqMZY%2B4Q3IB3vlShVqblyDXHUaZPX8cO%2FKg0Zy%2FXI9z3yPaEkGPUnqRZqR7gjCRyWIdbTQdHghw8Q8DOXJdGy12Gpts66TEi4nh0rH50Zbpb%2BMUD5RnssKpb%2Fa5SMmeG7MtbGZc22v%2FfEwYZ3vSJB418fsWWe7TZu6cLQhL6IFU55RCb5ZBAfGKd18KOuIA%2BpDLhR5xHqtnLr%2FBpyJOY23eKFvdNBjpGyueZqcxYVm5eNHstVXC7Ai7Kieyu2obibinppY3I0zxcX4fAadqbXEHDvudN8eTmS3hEbddkbXgo0fRZicIUGkyim7iPeiosBVrEjCRk%2B5ItkyEVSZAm3wkLgZh29%2Ft4ZAUfdGbxReYiWIX7uJx0HG2OnoZRLycSEXNlROYkSXO18odjb8xaqewTfr4EL0%2B5JPSwq0wGvguoMn%2Bdwx0ODb3SDFZA5bTpZn28ZGww6K%2B%2BvgY6pgEdjTDOlgOc46eXU8ES%2Fbn5M8kwMlm%2BLt3qDLJ%2FSt95e2nGC4WN0iN5tQRjot8JUzvhDVKQgBBW6hIXDM%2Ft%2BEwrpBrJJ2JEwcpZRIvrjGjZSl%2BZ3X%2FOnTthSnmt1BUepNkGLk9nU1ZweWeLyXJekX7d9QXeS%2BNEt8HXkF20d%2BFeQh7xgAoySAaBUcwDyb7Ese64GyqmqOuWJagc5apVV6e%2BeNUANA%2F8&X-Amz-Signature=e696c7720f136857aedc3de0ffda72c53095e27333ae04505d56b4953183c9a6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BI55NLB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIF%2Fa7HmcZaCz1s7F9hi0MGFnzsYBSnxvbILtAj%2BxzmMgAiA9vZVoWTWKgXLbcpYoxnNBAfN0MDuYKaPQJf2%2F4CjWxSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDGywm14VO4cZOSdBKtwDrsCx3PYutI64Z7g6wBzXi6mFfvm7fBjnfjAU7Q1Q%2FfdQ%2F8%2Fg%2FUUDuTxe5ypHIUIEcUmAppFIcftezvcqd%2BTWsHm41X90l1eEkBxHZ1zo%2BSkIRaIc6wv7giuoixtrO%2F3zHsUWf1W%2BHWO7YtHAy2SMFwi%2BsUhWiqqulNDbrGKoJZEWaq77IhtfDVAdQX2qcMfw7x0578UrzGGzIPVbJMEQ%2BzitKOvOcVbNSnCNTlLre2%2F72aMAWYLdaGg6aXRPEJVUEbh5Qy6%2FR6pbEmNmIdtQgbaCJdsq23gH97s91aPmtZh%2F9A9o%2Bl%2Fcg5F7TLPPrLq%2FHgWY2xIbOTxory2aqkXBSZH3xwwCf8BDlHrRUGngAuHT1aEnvmlehqTlCSJFM1O6FxnjSfHbCoAJZob2uf5JAtLXd8qkyZZWkmFjfuYtP0NJmltNhjVmlOCtLLmXjDTQruGL6CRucWghxFxbR0EGtYlBvma%2FjjX%2B7t%2Fp2WaEnAorwCFzBa6gGkIZ1NbNasQCA5oEhvZJGxq%2FqlutWIaXGrhvROryUAPG9vAwS4lNfzmVotQ7dz2EyGpyuWqRm%2Fi1EBf%2FmuCc1ncumfrG9VOIdgW9ONu0DGdsZliKqU%2BkkUARplxEzB%2Bmd0hHBSQw5a%2B%2BvgY6pgEldEXe0eqLpW9nY8EgBKvds1A3QCwsIBIVSEwGfz3XqFfb96PSNQWTPrgkBOi%2Bmycd8WwcAsElABYuEkpTYUNI9Hr1VtE2kBQwDbnqMPqAfoX91JSsmOpMWl3bGive01bs1m5jctxAazKNvtktgU%2FMXQrFlwZiwc5fVhcDB2kqAX3Vf2shmNX2QqlyVgIN2sP484OZZ507svF4vr6eOtXGpe7cleSF&X-Amz-Signature=9b9e50473eb9408eebff9603bc9d10affcb29e23f544cda023591e60c2057a96&X-Amz-SignedHeaders=host&x-id=GetObject)

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
