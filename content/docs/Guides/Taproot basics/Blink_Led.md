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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HW7IOV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHExEz%2BWiqA9eeUSRk4io8O%2FxDM34spP2K6LLcIhIphAIgLzXYyPgW6TQKCiW0PoelekSW70Nfbbkj2NyElMtQ8zQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BnQuvEFu7OXiGOSSrcAzosUWpDRhQ7KwmnZpErcWWiymh51wGVs2xQKSANyQOkFcP%2BZs%2BxyNuCUh774ViTslSQ22C6yL%2F80SS%2Bx%2B0uAtvgiXj7iQKNpol86stFLD8W1p57KaZAY0xTljpcCWc%2BcXwO58yRSfVMtqY4v%2BuQy9ehGbMvssSiKEe%2BcryplNfO%2Bd%2BlwkTXHZ%2BDWu%2FROKOqJTlcSThkOeAyREIxZqhYv%2BD0zh1XVAI4JUE30R3oWTIz3u8%2B7zsjmeu0SydqfmoLQGyh8IHrvy3giS9DwkNIjcEw0nyTo7hdCF18EUM8tdaz%2FIhirshI6J5vo8ha8DVHu0dw3hcNmvjbUCqDY0jQrP5BX0f3eu1740AY9h%2BKBVhB%2B9IeafMm69lgv%2BBGdPPnvcAHAShs8tnTDhjYm4vNqSyWRK16ULj4bHW6yesH9xKIGy0xbnaA1BwjC7%2BGUiXiC8Z1SuLqz4LwUj7tnk9MZogGY9%2FkyRgqEzI81mVJJ8L6MtY1SmAIV4%2FAgzSy6Ic4D3FRnXuCK%2FQXyMnkumVrAxHyNksefiGy%2BPZ8bgBJFZabmAMfjz8u0w3mYuyNE0hx4XjBtYIF9wkPGxPHt%2FVK9OHK2mwOefCHSQkHK4p%2F47Nmt7s0%2FKSlRKGwPq8HMNz0sMQGOqUBz2x6Q9skE3ax6%2BM8GfiR20p2rP1omdESmbrmjHfxK4QJ2IpWyMMArMAoO%2FX4jJVfTynyEMDpL6XbwHpzc1Tm181GT%2FL7A1hud5yIhCgyIbNMK%2BTsIKXfNx9miwbEIh9%2BH7dWJyZa0zyDunS55Eqrll6xAec2%2FYXXV4%2Fro%2Bca95fMohH5KVT3mQCLQHo7o0Dhc2ekkTiF%2Ftg0ZvmC8rPBZjK6UAVE&X-Amz-Signature=5870bbe4147630c5c16e6705980a871e5c196aeb9e46912aa8c2c5d6aaab07fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTLK4PW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T044350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRA5la0ZpQXwb5EPBrGFwuWtTzWSrowHEc2F6egN4c3wIgRhaXQOeK%2BKuiRGfVIzVV%2FdPJL0WW%2BzvDNxpafGOixyUqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmrDBU86x7eCzxZZyrcAw1uApVuwmgK%2BDo3onVR9t4ygSJ7NJlOU5HMP4pSM4CiySY%2FC%2BsKeBZzYdGAlgQrukxjwoXWqyP58vwI0BwCdRdCxwq1x%2BKN3MzetApG7FVSHfJOd4THwCR6rczwm2RNpxtmf5fniHkKOaFBlyTPlADyIkt4wZ%2FpLamod3v6%2BDcTa9IFrV46qyscL75D7jBX3wd1LNL14b5sR4t0%2B5gMZR%2B6mii7xd24mUHjx8xBBL%2Bnv3dtY3%2B%2BTxzv84%2BBIAEBf7egHhgsrbJYvcOY7JUgM3mQMTFvyLDnexvNWlHeqLGxebAJ%2BKo2Wkz7LZxycaiekpe9mTpNmmlaj4cPI%2FtaR6gbJ24ca8o9Uh0wsp%2BJ8wrnW9UNu92dqVLNA6BbT1VWazalgMgHvq62rS3velqz8uadCAHpN4XDv%2BglZJr%2F843V%2BYp0h0Mz8RjtvlRJsJ%2FjbOxKj6aewHfpHlktiNylvR1zFiWz8TM7KN0DQ9CZ%2BMqH%2BH%2FBFYGXViUAUZTAStQowfE74HOFfYUXQDzJmD5wFEV83TgNUp8RLr8cYQR4Uq1jOtLGMVnNZlZOoHEhohWcWxi%2FU3U2Lk2p0diw7U7yuvwrjCyenrH9EYzVmnJTjVZX5JlF4FHHp4HpUqctMKr0sMQGOqUBWSkQA%2BmWm%2Bp8e4DQVNBkrwdvrJXNjmInkXcI7QyURDsOW2evZhtmwd2EE4mzkcvtjyAtbAL1NNkaKlJS0KsUoS703SSe8hik8nhpq%2Bm4aaeDFJCTGsQmQSCubJ1T4jQkt33KgemnZQ5N8PBf8xLVfF4sRniHO9RJDLtI1flTIAhTE6Z0idj889S3Q6AcKXlqScfO2GN2F5Bq79kKjrsgk54HkYMm&X-Amz-Signature=dd112b5a1511e49951e4f6e61ff416b6f1b956a2ce3035676b1faf499b870b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
