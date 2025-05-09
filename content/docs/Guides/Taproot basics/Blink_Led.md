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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RATCKLCM%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHy%2FV87JwKguMpaIb7WPgWr%2FMqlU0EoFoDaf1FBzTtMAiAqNKFAxC%2FgEHzHlduQl%2Ft22X8TZb%2BibiGZGzDNq1hzQyqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwCMbAgOTNrM3HZhoKtwDRe%2FFfA7Do3kcM5QFdYxiqiSmKqwUm05M2bYI87poSOOkgOIiFgFWwWQh1LMBWEj2bx6UQX77cDxLVWVbWdKuKWqsZHbVUX3O7bCkhoWZku6h4Of0GSz2pEIJYgLTFVDfIyeS6gVxlzymJQ1fQt97vu1rfu3baHRHr5ZX6twl9yjkm8XDfRLhIx4LmKZRdkxoY4ATH4FsMH0QXD6D22MQRqx%2F23QZ38tZb0YBIHsqQz5RiSFqqIL9X4AH1ckxkUsLHb%2FVz68OAijQyhtZhYBe9Hiur8eYAfooX3unfF03IHOBkb2x9bDd151hC0MzshuNRMP9Qk6OVvaN%2FeLUX8xHwrBmDOjlQ4Aotxs55ughWNVlLgIDDRJfs0LCluHtl3aRjjnFRSeAm32SBZFnlgUktigsrxBf2DLUV0T84Ec50QwQEVIUcib%2FxOTx6JYkdn3BDVJAltUgWI%2FsR%2F3olDyK3b9Is3RjmUjW8RU%2FbDYTcfIVoGSYo7xDJgEsCx7x8%2BUIaPYF8A74MT1S%2Bi0x0KTFhj5Rf7uUqlbnyC1Jma9LpHkCMmPUwZwWEOpVy3%2B4nu9p%2Brjl7XbJlpwC56NBjlCKlfgn4H1XczNpKWhNv6DDS3v2nTYDj3m%2Fn3V7kHYwxeT1wAY6pgE7g6yfbdadQGGtAWT1kPBdiJGQe%2FVUHwYWl%2F1lzqBQuMW6uW1MgE0JFqWoOrTIA2l0baN2yngmYquzwsnoTC370Y1ueaJyQHVgVVhoccEVmXatyAKUHuU2FSHlCxRgcNg1pJXD6WgiaDCDTiePMhpQ%2FJnYJh9upsj7ddGixth%2BTLyRbxtWV7Ga0fImrcpk55qy2HbdJ%2FS%2Bhk7HTngTWr3ewLrJtNX5&X-Amz-Signature=a6da22f4ca7d48747ac307c8d7996ad5c01f21e18a3c4208e861eb547d250680&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642SM643G%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcWjfXe3XS%2FnyuXvAzEQP0Q%2Bh41VaUBzf%2BoapK%2BaqLdAiEAmMDwx%2FASD%2BfVpJs%2BBanbom00AOQDoeZ5So9eFTp8%2FyEqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtK8xHPe9JIY7BxZircA09SIspH4Z6DuxbvJ%2B87ogy%2BPnsMN1CQsiMIKzHb5%2F2DGcaYakDwvr27uNKTPIZ0zoFLzxN2N%2BOVVbZ3uKAPx4kdcPx1YP5z3PiXxABGjxy9uHH7WcOFwkLNjvErFaca5iHJo7dag7E9BrxdlWESw1DLcPRH4fW4zq38XxU8GW1QWTMtQYIIST1NUCQvRwxlKYPQwzo3aCw69yc8L%2BYANQSyJyclhC79FfsUfhBmZ%2B33pBgK1bHYuQIEsaw3Jp%2BsOESamrl%2FwcDeLf0pe%2BMttI1JtghxhhyIkdRcnSYNYRLMSCBiMmNJoEGUa99W9bdLUdXBQghbhl0J%2BxJHMfpnXbrK7QAQcsRmw55IitMa0f6sSZ4V0LKtI4CFM1%2BvR4aGg0%2BO6QrtSA7muT4Oi72pXdBBKJQp9annoA00pCHmMa57pkGr%2Bt90ZDHACRJOQzXvT2ki%2B%2BAIhI8XnXAhMug4ZLciZva2Yf6n5L3Od7DM910lgAKy2NKBR6uWONFA4ytBHou9rnjCEKujv5lB1EuyhdrXdQOR7BhP2Gp5BWOOftg1HlhJbjtzI5mKPkW9Z%2FwZgewCsnfRKzvFcRzUQM8ZPLB%2FOoYnJTJMgm3A2e%2F9aA2aDVkokjWmkXTbDvzEMMbk9cAGOqUBVFzf3T4Sf5u12jIOzaM8OOuJuapptb2js51Zmx9vmb%2BLsWv5b%2Fd6Hi3R8e1v6lpwuy%2FSghfLNKz4j4p803X1ilJbcmRDPJNc9vtcNNiRoaoFFXOsXMJAjop%2Bb8T9SbDQc7bWc%2F6gKacF0DWvTzHbxqm0Qm7j0ZOy78q%2B7%2BMbeL6Qq%2BvioEgtMM%2BvuIlq5M8vO2e8yYp9%2B%2FboRCC3MA2qeuieUBnD&X-Amz-Signature=f14679da64b5311301095dc20bfd5a8cb0083da66f7123417196f9bb53f7d282&X-Amz-SignedHeaders=host&x-id=GetObject)

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
