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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCK2SVZ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7OykxjvyTBb5BxXvFkRSKIHApPqr4x8gFsVTR1fhNsgIgCZhc01vAIQipsInZqFz2xeRaqJjaObRbZVdbBLIbasoqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2CfUuVxPRrpp4vzCrcA43yn%2FyQhna0Z4NA2p9%2BIp1wwbkeEX2AEqkyuxZY9JS7d8EXHi6wx7kYKfQtSo8ycqgws8ZoHUElI69392p4m3qU4qQwVyr6uvYgrxFZLNGwhX0b9t84h3XAZB8g05R195vUEFRoO0SZYHhRrGPl2WXHcJBnN0jWQxFrrqMjv4o%2F3v3u8cuYO%2FbDzZN6GHOgb6CtM9EyZTJ5n9dr%2BqN6ppZc1qXqRv5W3ixRURODQTf%2BY6fupBzDIEbfBVBYE%2BsmUyDACuw1LISVMelogIv%2BWjZGc%2B8RraZHbdkHItQMbTiLgOOwJib%2FoCV8yUa4YONmC5eUrtAKgFhhhT9%2BvpP6%2BmnGn1rfVUSo1iWvZFMzYVgvVfs%2Bgp1WMhDZAi9Nxborkc%2BtynGXJ9aLQQ3%2BmQBjCsnRHlcGeLq%2FxjXhcheDzjKLXi0j%2Flcb1L6%2FLEbuf0ifEB7bVj2iFvB1vWjeO7H8mQgvBO0bXtH%2B5pGr64Ex5XIx3xy%2BCF9nAIPNvSHxjr40SdV7oZCkydxcl3kE9D3EJMA5DR9R%2FiqbRk%2BdCO%2BDfmyic255C1FqUkLKuoAMjMkwKcw5yilCzTD%2BKgKjR2Iae6w7ILZxDFffSj0%2F38kHCchx2zK2jm8m%2BwV8tuh%2BMK6GjMAGOqUBEKYY%2FnG8nmGEG8Z1GIdEEAA5%2FwgyWJIo180Pzd6pLAZerAG3P385%2Fjh7sv04%2FVeJY8sSGve97Wdrvl6s66lfX6KBOKkGayOSRjmqOx%2BYW4WSVONpzEBuHaB28ZyoedeBgLlhhVS2uMYQ429qutVLE3myaSmKSDeW6MY2C5yyjsFridkrBz58BDz6yMDT%2BxMvIDd4Wy4OB%2BlFChUu17JjRn%2BHllDw&X-Amz-Signature=1cbd98911f94d3d45343eaac6eb2a2b945ae641662c3585ed235e6c2c3dc6733&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZBEPCI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy6Un2nt2Hmlp98ne82OGdLBvZMjKOXneiiCVIodZdrAIhAOcu4gPkilX9PDqZLlovluMZy%2Fbke9QpdCuV%2F7JoocS%2FKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyguUXX4n41287B0I8q3AP6gFnBL6hmB0s0j2hJkB3InF%2BKK%2F%2BH5TtW6QpUUyNQr8meBKl2CbiuSCn0FnckkHglY7AAvo%2BsCOFvIRLIKS7cOvcbShxUaqGyK5s86uDhrLsMcUGAY1rqOWEd2A4gDag2wk0ZxDs%2FMSgB%2B5J%2FHkNWJJOgHSsqbNyfJW0rOyUJOoS82Klg%2BTHbtbZW2HA71O2hqAUeGBl9jf7VEsZgabROEIIh%2FKO722oM35%2Fb7ZelPwrukkkghPdZ6gDcpyScKVpzwXm0mq559pZzaadv%2Fh6Ru8Kk0%2FNpg6hTrbTn1pA3lzIdc3gY%2B4ECBBuGbJ8CMAl2NSqpUVQFJxqgKz9ClkTXNnY4ncIzCx9y%2FXtjmKxMvx052VWHfH6ttEiztEDYEHClYrnm8FfaMPNiJVqM7Qa03KJ8%2FUNwBWMIHK48vDpThulUAYiet4o2n%2FtumUbtGKk8Br1q7dz%2FXN2XyCBTPRIaj7zSfuuGSbF5XsGd8Aw7ing45AogPgpg6UIvHza9nWmNdqo7xyChf3RC7fLn9kPaEO8xWJik2Tp%2BnyqOF5BeM0Lsmom2cRyUK6yurWtiMxEyR5DWMiEAD3fD6sKzX0ZsclZa%2FLZduZgw8JA2EQ%2Fr1UAAtTdS2zXCQ03RQTC2hozABjqkATtPyu8Kc6QIiac6XnxbI6TsrUy4BJxJHtUlVtzI6ucbtMhZv%2BeSq3HxWmRJgsrGO7%2FkZsG%2B7QihzpYz6y0RYteh%2BUp%2FBOkdjzlSD4pfe9tyUmAxCW19Kbr6N9ebtciu%2F%2F6HuVVMPd8cvW5xuB8QYVpddkNWhEm%2FXz4XGMKPXVWx8cEhyTkcrZ4zBRwiGUDlNw4xD%2Bxjm1WWjZcDmfvmNy6w%2BamR&X-Amz-Signature=32f82fcc3a7787db5121ac5db7ee780434f264f7ab8429303e572bc6cf868335&X-Amz-SignedHeaders=host&x-id=GetObject)

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
