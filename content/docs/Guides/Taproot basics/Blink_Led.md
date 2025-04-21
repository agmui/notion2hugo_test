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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ICAU2L4%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC9XlljJlbPyJvhvQwzhMhFfkJhgRZ3ava0jVoxRWIP%2BgIgOei80BuoQzjLdszn%2Fum2xdZUNjTSnxWwfzh3MyjCbW8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMDyCWkEBLZMmZDniCrcA%2B041Sx9zEfUyYQRJVq8Fvly34Ff5IKb1W%2FQKLmjpC5C73sSYGez%2BndcgQarYNp8daBimteaQmZRr9VTSI5tx%2FdbNA%2BDJIt3zjBLlLZBcHwexgD1peTbc7%2B4GGfz%2BGtAo57b7nlYhqCo64fbTMWZHu1tNdLlyBUBYeLQ%2BRB1rS1GrWymP7B4x8K2hJLCNNTM%2F50n489enmTwFSKd9%2BK3dpPW%2B4zk4lr8K9zOuBBlGlKnKCIvjSys6w5%2BVPbYeeM0BF79dFQR6WNExwPxLqbehSwjSF0skOjTplC8SDSTHuGH2tSu2idPw1q0ezfw516CbV%2FhA05YvBQCUSuWclP44Tmzp0nsPChs5AEkzyFIWjDlkhhtYcUXs1QpYWyYEEXPT3sGeg76uanb8AfyMicCu7vGxnrOQcOvEc1HKYeEaPrw7%2B6mDW8T21A3f%2Fmt0eQT6eftUd92kr9AyavwT7HS5o9v9bY44TkODd4iwhTgLUlXjLgqdAxO6DaMyBBVWowoB2wtQUgXKRaNDoO07OgsBZpONouoD2EAnvu3kKbWN1Er7y8xYJmO1%2F%2BO%2FztCysB92WjW8J8DRrDt7bqVBulaZ76VyfpcxNLyxWcgs0iNNemnMCmojQcR2OQQnv8EMLS7mMAGOqUBGAFQtD39dkYQX%2BEwlXnVBiUgRzQwTe%2FFtTLRNVg1k1kZbjLAsEhEavkOkmZ3cKk9fYAEA8gKh%2FUtgENSdov9EPrV4CuiDWuuIAvch19Pv4AgjkVmYMwFrXGic%2FcxaKUr8aNEsSLfVXhPq3FfTG4OPbAr%2BU8mDmvExd%2F20cmp8IC5Od5fHdZK62c%2FORVicSRNiBLhFnDPLB0JJmJysf%2B8VZjXuKwu&X-Amz-Signature=6ee2031f38c6d83c6b1e195c6e83d075a08bb8100d7da1d5b0cd11181a5a5c76&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ4BYSIM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T110709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIBfAtAzqdXcW84HFoBfpxawzwnAhfBKCra30fohhX%2BsrAiAV1tUm%2B8CBhx0tK68v3Oz8uRiZqoNM5qNfAvIn%2FFex%2BSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnKKcQX9Xq0OnqMNLKtwDx2utPk7U3BCBOYQH3yjzCPwcCOqHtCU5sY9bGNvJCmcmc6S69OKvpVUjWDNM51qU8ajDfYdlb70AUIZAliqG0zNcJNw66M3I52B8c5BBIBLeiXlpjjVVcMdnrCzzBlEJ9wpmUOXmu%2Btz%2BK3k%2B7ZyT4Eltg1p%2Fe0az10sIWVsrlYzChUvZKdMX4xHXToLy4KSo9TrZV1rh8x6mH0cEjfMXhHAJEmlAXXflByiFEZBz8p2pgFq6xR7GtcDZevYb4WWJL%2FEZ9WOmQTBUMPm0%2FuIGi4Ha%2FyY8VEIvmsIEI7fFRTeQZuKEVZ5Z1gCom5k40IAtseXux40nZ%2BWF7TOp9MTQ5MO%2FPaoH7bOB0aTsNlzqn%2FAO%2BGJFfJuFwef5qtSDKGci46VZtHmnat3I0KqMeczG7piAh0ZCatXSf7ibDgqxU9VQRqcKz4tuZXokbIZR%2BTfpV2V5ZXkHwWp%2BiPGxZw6fej3GBUMFHQJDwUh5YjX7doGFeiPwbci9ZKxeApXUs9ULdgdKoSuAhGsCELj6kND6AkD7Yd7CbVBgqpHdpyWW7UhcBwk0qRNm%2BgRkS3VVjTMV7zC7G%2BaJbtINGMy9yewYdxZCQXhiGF9S5e72G2fuoPy69icmrJg123lGxswv7uYwAY6pgG1cijCeHkFLODEdYYyAphLcNE%2BtEAc1OD%2BMHvjl9CPBszTxUBk8M6ch3qG2OhFlQdb7mcAxBIo5FsPKez9QJX9nJfokbwG0bLgVkjFXI%2BwcLxoA7UxnG06nUbibI4MmbWUXyiNxesHgFSq%2Fm3fo1FzCHIQrs4%2FCMbb84HsmA6ahPgwEuQ3Bb0qVVa9%2BTPJWxakoA%2FMWF3aqy93TzE1tZjdfSuSOxdr&X-Amz-Signature=f85b4c29f9fcdbdddcd5bd068497efdb284f2ff29fcdcd1493d6cddc917b2a20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
