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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUQQ52JN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAm2GuPtd8CagvUH%2Bc7W8DNpgauh0eWapANU2YZAAIsAiBbCC9BcnSfdfQ8cazLbuZg%2Fabc%2BzckCPgO3nTDFLLmDCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMkBcSi%2FRvXpfPD7KsKtwDd8sUGmvkHzdbJ5calL5ETZ7L0XKvNuX%2Bo50%2FbwypLy6rgiNnlY%2FKw%2FRmnxv%2FhmfRFSbJU6EV4QqdpuWWdIV%2B%2Bwz1eKNwwJgmE8KdviHpeNCJ4UdgMVX%2F2adDc5RoIiwD5%2BgDZtqVfi7gxWn%2B42UhAIMiaKoimGrilHTyUWA9OjDuVqR1p1j4XwTn%2FQz2VJVL3axRRGN16RfWIbVkNPqitMCNbKxLvuh03d8wQkxUV%2BOA91Vo5w%2FB3807kQGb7t2CKjsLBeRBzl%2F3m1n6PdEZPrdJNMdS%2BGWoV%2B7l40xOThip%2B3Dyw6KmvGQrZHJxk7nKR691y7XWYdl1zMBEfeklPY0VqZQDC7Mo9iCul2TcvM0mpFDmJMJ4ZeeQeYBjROSHAEoB8jRtpDLjt5U3gWEM31wE6iq0yHQibArdjw5nqqfrvMFBtpM8zHn1NuhSnOFlrWcdpT1DW%2Fh3B%2BcEjBaRVF8jDxtjpi99FasjCZy%2FZ9VsiX4WeaYAYABnJds85%2BqDPVsi7hwpDbDN%2FItm%2F64IoA9tXiWWBIOm8lY2rakamgdutRixdkqWbfofWNRbxjtDE%2BzFqtWdXNN0fZ9bK8JwZOG2b0SspfHDvSV5j82NQWHCLkliXlNedDYjqqQw6LevwAY6pgFnoOuzvg1lXbwSTWHNdyBWOXxUfPni27OcWpcRx9MAwfBBDyWSVgJ1hd8Mku4%2Fp87Urles2uRK%2Bmng0jJpzrYNnyirpy07piIk8lX1z5zaPgtod7hqK80%2BcCaEYDlKSnTH2HC5EXJ2JNYqC24%2F3H6pkgWj%2FqvwSQZHUquFOxkx0HLi1KMIcQIjrr0fANoO1YQTnA2fa2X2aQwFgXH%2BzdbyIJ%2BgQ2bS&X-Amz-Signature=dfb498bad5a1d23280e9cc7967a0736b1f8dcc515ee1612a2d8fcd477c1abc1a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIS2GOJ4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T190513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB016la5GsVOpBR2wKgLbgd99cB3YQDeSZ15FOmndz4AIgBifSu9QMXPSkbm6ts8guD7hG%2FHJ40ZBAzEVX7q1v4JEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDAgaFLgvnrEN90Y67ircA4Y%2Bj7U1gx2AxzRaz2UzbLQnE%2F6NRmiIPj%2BsZeRbUfn5SyaYSno3vHxjWqk0rO9z9tOv2wvd6szTNgGF2LczRI1HBKSKmly7nZl9LHZCfm%2BgHOp79eA5WJ7VnAJeKQeoDFXG6iHYPB%2B%2FYlo%2Fzyv%2BHcL2emraTL4jTQZdtA4vzREgeYEETSj5zMbi7DKzTlK7mBo682G9vRs3I7xN%2FVtf0ovQjQ7P0MfYA1cwlXhjKkrbWBYED%2BxmJM7ohefnay61Eni6ugoj2mly5fJdosGtBMAZ9YWZNpNkS8vKBoklerBFM51Wn1Ub17vPY3wl9QrCROvtBjI4pt83Mh6s3B6DGjn66%2BOOEFiad8aG0Z39n52u%2B%2BjlvNOewUyVl84wB5mKZCHKNoKhJ23YgVwrrqJXwPgXZoFvuHezSV55jyXBjBNiqQ6SAzr5f2vkW501S%2BXgppV1GVXEVMylBjqJ2OtqMHP%2B%2F9jAl%2Fc1MHlufXK7TMKgwDgKwTG1NafnK%2BmGs%2FffFQ1TVEE8jshDw4dkY0ckEOHmQJFODrdvO3LvfkSC90yucG6MFNNQmWvIwgELbAFmnX%2BYq9YwQ3vmc7DpJiiwQ%2Byn8f9ihJX0tcQyxEuGOJRC879fuZgCdiSmvOcWML63r8AGOqUB4uuiioPq4X055hio5Xu%2BFLS2iXxQJkvFQsTpy7pT2pIjoTaVN8zLsqjkNJ0Yi4MLp9tIqyk8XAJkMuWxo8mHCYfkpRAbiCT7rIzxSmzeWGlp1YGZoAH8LDqdrT1vABaToWvdUVt%2B2TECO8nkouaATdtAQiUinGyQVT1iMsxqIFH%2BDnzLx9ayjIW602jn16oOXlNRqoz8FI%2BmQcu0yeO%2B709dQE9C&X-Amz-Signature=3d43b63477d42e9f9e3bd8af8600f092fe32df3f5f20b4c72208c68f931b2231&X-Amz-SignedHeaders=host&x-id=GetObject)

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
