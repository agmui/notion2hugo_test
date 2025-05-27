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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WG4SLKL%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExuAshRujdyKVUvBS1XYC7hW%2B4bs%2ByNyBMIZZodgcX7AiARbKDTgaJky7c7bnUJ0EkK3l51Qt5loigDTXezhAf%2BASr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM55ODwrLCE0KGUVMTKtwDlKlPyOGrzp35VhYNrOxcrxb9QsXqGJrTIBhPajOwj7%2BiTAf3hUYxYEF4L%2FkLew1eK9Fdhd4wJwU19heIBUq%2BwXdJ9%2FYSMJGOMmnD1pcxJHvkIJITmafQPILhLoC8gkL0UaruAGt5Wz80Ep6oijyJ%2FWFoDKoTo8Us08AqXMsgLbPVefRcyEYNu%2BjotSqrljvmxx2dL98gU5MR2KU4LokPQ%2FDpiQ2W5ZM%2FXayh0KA2cUzcJRGU96Yr5VfdNQEi3PDXlFO6jXaSlMeiAl5p6E6qXI3ZRJfT3oZ39LJfbZIPlWg4qIRel1vYnJ2cq4zgnHLO16KOI1seCAx4kEERkqFT6UHtQ04EeBahZ6RXdDCU%2FsBekCXrCnJ9AJmM2%2BBJ0rLIaUxWts4ac79y3%2Ft24wcisEP3HIyAoiZHQzAneYiLdpQjXR4inOiQDqfzIV4bYfXR6LgSI0HYOylp9LSUuT5z3vxPDlVeqp%2FR7hPz6619l4GJTqxQaq4n0HIZ2GilPK6XKH6bIytfpPIFxaKBjr8zVlMhnMf49mo2VoK3yY9bjsDY%2Frl7J5c7JMJtYU7eUGT7%2BGmUoAIA0Qg9C6g9fDC7ivdL5qXVDdSavSA4nHxRiMWnV%2BdVgtgTBmztFz0wnbTVwQY6pgHLtE6vIhfdC1Ox89L6Nb%2FuNS0ZfNwI9M7gCzs7xJfuMm2rd01Fkpu5janjigYpe7e44tBt4%2Fqj%2B3r27AIiucBLw12d3uo1AHiXO2yM8EjusbWljQOuB%2BFcWmxn0zlFbSEyqd2%2BjEYYJ4qX957JFVoP7mULdbMsVqcR7NljPwHgv87AXeWh2QkhVuXx7XEuJcdjtiwdDRsJQ6SiXmAj8y%2BH%2FRL1zTft&X-Amz-Signature=496953604043b5f2122a6aa47235a469ed063127106cd982486529332b83522b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTPXIDT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T070925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMc%2Fm4w9iQ6bEasz5OT9jLK6%2FM%2BWzLNWPKr4ZKHZXV5AiAQSCxehnzzj%2F0L5PcPFnFUxPrNBrpzM8bYBsIpXK68Kir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMCzNzykPXzqPVKN5gKtwDVIrXoQQhnHq9GT52%2BpMDivPujqTGuUUEknURunuhG0lg6PC3tytaAwzizFlep5T67VaeJhOZMN7YYa%2FSd4KCp%2BwMyVo5jZMywLQtACMXi7eFI0z6njg7Y8MH52wSs1oYT6jY5e%2FtxXYj56GODf9zZY81kcSkZL3YQSynJbw3y5uB%2BU6odGAZnz%2BBKYTVesSqP20TEn92rw6VkeFp%2Bw1DnV1V2PqzCLUvynVqPj%2B2Tn%2FSIlT44VvjkOSrqGfpHKeODI0zvnSbLGkpMUNMFnC7EQCcVYfVhVS31klBA4FcrlnzGY3eKlAVkWfJgl62GtsCd032rnBn5AtPBUfmlLrfFsipzss52q30EJ0hiTuVJFFBFGa%2BEPbGTMPhnDr346BfpImxgUP4lXpMnIPQjHA%2FGI7D27f1ncW%2BsCMkQzIhJBbTH6h67fVTANycSEfiwEvlD8gKuXm3jht2O6ZV5BNNpd68IRiceV%2FQpbMY5lK%2FbTF23pFUT3TFMq892MWmr88eUcW%2FLkVJpAbFWk82D13CX4r1sVzmN0rWrN79jEuP1UkqwI7JzLCUn%2BNG7bXbqsYVOltstIYJmv6u7D9gf4RpLA5JIS06fMaageM5kQ1OP%2BsmRA6gXFUvxRJQBM0wjrTVwQY6pgE6RyeThhzAqmQZXxXDcnCOCNocnbiBAZKDNYHCoMfnW4co0J2Sa8lVKw3loqEut79suVa2UT0HFYNNxJYmFYbkM3xQN9RpRrf9IWH13vVQH5xV9148%2FXXrkfnmk93gVgiSDNrCIKwsIm2PIq4jgIOT4Gks3ES4cGzbnC6SJoJLZhcOGdLJNxALB9lCqVwG32InZuxZ7NOwuMOt5MTMMjCCfLbCuYJm&X-Amz-Signature=1ca59a09d8812e97ef3ab6a1a2c4bb128fccc048244fc2f0f00048db356e6633&X-Amz-SignedHeaders=host&x-id=GetObject)

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
