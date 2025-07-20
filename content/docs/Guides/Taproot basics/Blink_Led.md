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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA2AGJ7P%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGZrtGubpCJ01LxWMrXz1jUwpKZyav1o%2BtqjDkixOxpgIhANQ00piujX4Td9r1mjw090tDEv5Cuwt97hh0FFE3dASgKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE5OBaKDN%2BVXAxRYkq3AMU3euwLcHgqTHWO%2BL9F9lRlIAb8tjhONPxDZxwx7GGh3VDJv7bmM4PFe2Nh3fqgAyifEq4qOXcKOMprs7olv%2Bd4NpqHEo80e%2BnefE1%2BXn5mgpbzmngJhaCF9jXjmFFwr4yE5qfzEQiPddXwmhuwxFhG7CA3%2FtN%2Bksw%2FUN8F4uS2j2EU1YLEqybfqb2htNJ%2Boaz4bKWw0AXguzKTUQ3Umd9AzEEWHD8wvRDbA3qBd1JX2twOh3HOiifCRWdwhlqZpyYY4d%2BcA3YOeRjKyYHDxTL%2FvKtbBv6iEWzDTTg%2FJWnhLCSUbfhutQvP6ESQ9XN4iqHF1kMlkymrN%2Bw%2BN6OQ9HNBJgyS4YMLOnl8QW1FBrjMoh2Qnvgr%2FoaG9WGVFY0pe2pGqYz4eyDJZDpTNQAl82kpllN0uqhcx3HRbvVugtoRqDxKRginl6Lim7JA3iKkZEPIWz0OmNrPHZkCc5tqch%2F2vgPOwvDkUZ9iCFcGUn6cbHn0CMheQh5TcSZ5tONADxy5XLMLR7%2BRygZECifrAgvr0FYcYQ1Crm7BPM55qyIE4cW4xjCevUp6IszXYLgt5X9oY6DYeryByewpu7JcRgN8v6UJBz5NmYufSShi2UpmCIEASWX1gWaRm2E6zCTtPLDBjqkAdvZz0kbWJzOLZhGTC55huY0jx4GVoTOv21sKv3ufxBLPB7aYfojjUmB1LmR%2BuMjrPJbekDXr8ktByxfiLM591NNCiotuKuA%2F44TOPY2kw%2BSfvnXiGZB1HwfJJhftiek%2BcPCz7YCBypZUpwd9Q4T9QxU%2Frvi%2FL9jCVm7eSzlLbrNIEA6Zo9mr8D8nBbXjgNTykh8ZOY%2B0Se7acT1kwoVUj6YYIov&X-Amz-Signature=f6370ff8850e7b59e2eafbc15c32355b460e82b3a67e17291dc54f35ac5e801e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VOM4LLM%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCUf3l53TgRACfCRwhcHkg9jN1O2GQRVrpkA5UeRsptAiBJCplOlfz1t8vj6Nae3sJfHd0WGeyi%2F%2Fz6a6a0MZ6QYyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhSMACRmXZJqW6GoMKtwD%2FLiQfN98b9ARhxbLdDSuBgvbZxc1zjHXss8nFqAI9UPZuwqLMT8ElL6eduNFHsNL3P9FDRdHyLaiegWuKymMnMvVmrx1KcQ89I5%2FEN8k%2BmyIVNroMIou5UwAwHY3h917a%2FOtxniLkEMYP9r5kmDdO%2BnKTSi7F0YztXecVO6bImEVwpMOEmJCIp5vfbru%2BUie51blHvvJYs4G02IhCVYEC0fdmlafGOWFrvuE%2BbnVJ6w%2FrtOQh0VR82beNHHqILnDGnseeP6q4ARXPda%2FJZLk949jIX9CYj4YjFhlAq9hIbxWhPtyzxJisw6T%2BkhpIZLLjO1G6H1p6TYn%2FUjeFwF%2B6NVxqTxwpQAniaAWz9AovNOMgNSP9mj4M2NMFQ8D7Uhdx08WBrrLsxkmHtcQdg7QHBUE0Cx618d91r3KxJCn1B3F%2BFwUxMuL6Qkq0odU2HAa0lrlQr7HDLR34fl8nmG3Rk2WUm3i2NbbY4sWMK1LJBR9GlFv3bQ8X1G5rpXHo54csHPAcRImeoqb3EbPDDDYGgIuXTv2prKnYNgAMwxYSGMYg%2Fep0xx1KEhytqXjZ%2F4uI9pYKzXywLNXOUIW16y%2F7h4OfNxRoKr1sx6YXwyOI0I9vJMvJcTBTrBAU5Mw07PywwY6pgH%2FdYnjZ5GuuFDhPca4JVnOn0hXhxdZ28Wi1wEAdFPNB9bgh0mN3hFxhCq0tB%2BpAQI7xH7xk2vyWghBkAid9Jy5Tct5ANXsEFTEvSeEZa5xL11J2m8wzbYckebDeTMliKfUkXAbYeW2xg4l7Ci8UvHPMXCsuA%2FtvNxKOnjd3L9HiqyoBZOjbXzv0sYoZYe38kTn5OQEHTx4h2%2Fs6wWmtH0o4ESavliL&X-Amz-Signature=75bce2dce0fbedc7777b33301ad300d891f0b346e07b4051ecb554f78e147089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
