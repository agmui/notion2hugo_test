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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFTLFJBE%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx5lvfeJX02e43AjqfCKWZIIbuScD5H9mdueX%2BNkL0HgIhAP1Z7hfGF%2BGO51eYHpUW%2BzltOH0STfJjdEFhXB6numLYKv8DCHsQABoMNjM3NDIzMTgzODA1Igz9XHXLRQOpkZfMKZIq3AMix%2BiOkjgGnEGHiPPjg%2BMVJPyoYzl1AxGwvzPjo1f%2FAnZDiFcG5sl3QGHIEA%2FGdCC2anVUURYYDXxLpP97txXymEuUgY43SXrXIvD5XJql0Wn%2F37AfSHHSFX99q%2FOgf5fq7%2FEOuaQbKLcSKZ8H5y06%2FX4ANV%2BLvCxiECYhMjeXNCXix%2BC7k1ao6xx6Xgk1X9eae7jMasasBlQq9KMbahBkGb47PSFfCdxryWR7v6N%2BRMuIQmaId3JAc6wMFirejY8fx3%2BtNKLnim%2FnxNcqv5IA6qJyoKKCnWr9Ie7OkjCfmKHB3zwplew%2FjQBLvbggBV8eVtnuonRPEG5szWitm6lPyg0ZpSxbXOr3r%2FOCh5YAq%2FgjTlLStFk4sEXRIWBb5SuKwLDOKShI7bwbdnOI0piYCK35lhBsg3ffmNrK0m4u9sUVw1kgELHFLoXfbDeXzUaMOqPRDjWdYjHJm2Oip0avpljLLn2tUykYe34%2F4oMyu7sbJivyudBMtqSg%2FLci4r3HgfEKA9RyftFgRfKlS13W0Hjhp99UOcR9JLlP6K5E2CWI7TGsn%2Fa2LOZ8qGoVHfiRFDYO57nQp8d6M0wsH%2F8pcle1XGic9fc%2FootTfuQHxfa9hnyO7IYeIGxsATCTsZnJBjqkAduGqcBH83q%2BdT3E4t2EQsfiKN9ZdUAJgIqeQ9J7HHFhh5hje1cRMmRpHGud%2FCNWZhMZDxvPUND3ZNDLJz5TwEhs4MwMgX%2FQMIQLjnaJvkhfxAXFJ0Fsz4jbv1V1BwDsapjJ4EwOogxXGOM3353IDbTArVqLXPhZFhy1lnG44Do02v1OwrPQUXj1hGUlKmWhmJgBU8bTvxw%2FghKZGMh6p%2FYuXiUb&X-Amz-Signature=535a2be5cc44e8987bf3c40adf3553afd1611e5f2cffd58f627205364e8003b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YALMBTD%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqeSnw1fKT1bZYebOhFVr1MNrtbcldSdqC5sIurhS8hAiAhg2ULj8q1o1vki0LYCA4A%2F7e4YZCFphtBRpdOm7P6Hyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM%2BddMjNFX00NAAreOKtwDkdjb8bWqIWdoemO2%2BhNNAGsrWs9nNij9MF07h7upkgJqkgnnvCYxhBCICUJJTBOfnY69KBa7adA%2FsMowGzaBpH0FJy7%2Bu5C%2F1nPBEb797tmst7ZxeAtgASbVpzWSZ5YKizNKclDwVPkpBFRCTIe2%2F%2F7EKQOPfCtdA8xVrjhFpQlWVQNdvX9K7XROEfTlzAkLkdnUrcIfhVwPsiVz1%2BAgY13ThmX%2FYqpWDPXipYmsuWneY%2BXEL7sMG4GMEzu%2FZQ5WH%2Fls72g%2F5AwMCLgMeLrWP09AiCTQvU8pqrQYJNbWn68ICHiHnW0st5UERWVzuH7JoLaeLdKrpyuSFUoiZ1xwl5NofAf7rGdlpAx7OgVciTnqOJgTdhxT2VqSmem2Ao5CU%2BIyDVCZj%2FfltrvzpAATXoFFIp6o7f47mNy8hPZL6miaP9edXYqNhwZfo1f9fxMmacSn95rnjH2b43dtGyZxZqyZehH%2BFIKgoJsLSUcX8T5m5sb7v8VM%2BD7eKxSb3%2F%2FepzZV8R2tNYeOuCRgylPTMokBJjnhCfhrUWFM%2FpxwrBvO9gz9wyli%2FuMSov7Q6It5M6bgcsvmUQxLe5dDcMRemGd4KrBxqBywDiFlLUN9CL6nAUTO1QjagoCg3eow1bGZyQY6pgFKZh0X3p5ka1y3C2%2FeLA%2FvbdOFJ28xj2h%2BAzIr8JkWt2ZMO9K7b3TAjPuP8SXl%2FF66HIFwR5vTEn6f6WhKXbHXwzj92R1KfD76n%2B4nUKqD0zk%2F%2B17g8uXgFwtFTlEHtznJg75JdhUkKpD89zFJiW%2FPI4mVFKScs2AAgsVslDZZcw8%2FsmSwY73AApN5ZbbNykMn9yrEAmDsDGvaO6UplTvOJSeN%2Bkmx&X-Amz-Signature=a87897755fe71df27cb746adf47da16aabc1e112e4f36342c0300add812898d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
