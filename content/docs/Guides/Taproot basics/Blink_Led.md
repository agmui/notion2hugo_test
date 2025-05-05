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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ELFMSGM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDXcKCVI6CsMEe3PNp0rlI8wlNT70oymvCfimE0r716AIgbVPNcOakCJ%2F%2BXM3qL4OEloaSkpnC6Q8Mgjpmda9RF38q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGAcW4qAAVUyJDgm3yrcA8WXM0WggRmtvnpgGnpD7dEQXPzrByOceXedf9GKUqmGo%2FIxEdersgEjlqE39fnSbWxi67oNGTVHYPpiM3CHxgXOGvUk9TY1J9LafAZ%2Fk4vqZeJKkjYtJdSgj%2Bd%2B3m2EwhdvelyBjIux1u50TS7Xtiq3fefplpakJJVJSWg%2F57KMHk3qEK7SynCy%2FWVVZVLcFc6FsbycTgFLAojR%2FWQmm%2FiWlVTuMWzjmACRKnJFY2ZXTdLEuALQAxDPriHWHABA7DtDZHDMu15E01lDBZ%2F4trQSOWSVwGw20olLwNROcwGoI1%2F6KjBIAXD5drJYw7B46bj%2Bv%2FNxfsEMS2utbEUiQMIxgAQZUArxDGV9auyDdQDm4sMIvjKCWBad9Ad4M2PtNRufjxJqwEiP73LE5Z5ZUvOEf9gsOEmfxLqIl8F4StVxxhMDjhMNOwuDfypoCjtrqf%2BypeX%2FZliN4yrBOUwASpfnULnhY7X1F4G5%2FUr7ZN%2BD3puZzGAP%2FEPJOOsmm5Q4xiezF%2FiISkhv16LbiZdSgPWvp2%2Fpb1fiY16U6o14iXPOz4Wg9XuPpZki%2B5OlylXpPEq%2F5DgKDV7foWh1%2Fg0vkzGCUwLv6w9mNQxsHbULgJ8JJ0t4d%2BKe5V%2F33qADMNKx5MAGOqUB%2FHcTw6PO5pU%2BFssZa8qMaUXkS3DE4yJgRtsc6%2BCULx4diqipuQZi3g%2B1D9uII3EQVnvl2B0MAQr%2FumDrbqr121JfZcNqcZsHnci3RGKltzxRKsOdVs8abuPTBlJmXi%2Bu99fwZAiBBT2B%2B2PZ1zu0DbVy3NIR2UK1pNScuiXOTTLAIon9kEZpiKtYpRKQviR40hihb7Ct28oebVPpuliUJevE0xWu&X-Amz-Signature=d97133bd7248f10d82c3e1f1da7fd4e2d74cc0fde0044abea7542e526cc27d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAFURJTE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHFSYfXLIWZ7wKLdjkbgN1WHeuL47XHa8WC4X9RXZHVZAiEA9KkMkN60SFyCA5gSZIwCIbR1AdcWHKs5pH6d7YubfWcq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDG32MZQCuTxgQ%2Bny6ircA2oaudJA36MIUUgWi1cHK1WEz2EoaBlqGVl1rtYLb5zfK1jbIjgNKXI%2F4sIRGorD0sVnFyIzzS84pVlnArTtVUbzPPPgEfV%2BRjufdNEq9U%2B8WnlPB0m0WItYr4iInmdulC%2FUVJqlv54iaYexcXTBrGjDkauvRsFOASVDCumYmJk3EtVgXAuxEGAVFEOr70IJs0TCaDQFJplbWWdUyUHKrKYMefVV0%2B86lz4E5JFcTeP9oOYmX49GH%2FMjZ9htA0SQeUjCYzDyXFfdDbHCG9pvBaQImLrr02Mxx0ghB7PbhP0rbnBH2G2%2B89boAtazBgTtLc%2FHMStXjLoSd%2BEOLbgSUO2ySiCEGY5gJ9GUUHmHT%2BBJKE4NFJoCatREoaC5IOPZOghZlUkuYcPokTt12EePVsLZRASHM1iuerSmE1EoCLe7hQ8NIufbxqRXhej6Bdgsi%2FfxO7K31GMUMMeTxTRepLA54koH8B%2Bc5WHyYAfj9PkVDpvnsgEjYrz2a5wWJ99tcpwPVA0kqV3otbCqStC2xbxoq3sbOvpoZ8AJyyHfhEDaOB5PwdGZEZe3p%2ByVsGcTJNPXLEAhpZXp7e1gd29lVrvzQ%2FZKZLdWresWv%2FL8uLzJIUUF0uAm92B%2BM6fyMNix5MAGOqUBtKICxwnW3xmBdm1FNsIR1J7x%2FmUGWpJ5y8hiIdPjuHt5V3jgMFfm65OkQ16OQ7iYTbszONACbwi0TcBSccflkq%2F%2Blk8AgNZFdS3nQfEb61dIBOOxZC9wrtsSqf246f9zu9zcNEJDJUkaPd00zj6moGca%2BPKE6kEDGHjBepRJL9f%2B5SuuNIqlAX%2B4r%2FCG%2BFK75zXrG%2FuiB%2F3tBz%2Bw5BSHgb6BxIyL&X-Amz-Signature=324d5f59c46a1e7caf203d6b9440aedfeea98514ed99c0555c30cfcc7727bc11&X-Amz-SignedHeaders=host&x-id=GetObject)

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
