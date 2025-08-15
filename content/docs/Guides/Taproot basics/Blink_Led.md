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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSCG543%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCICMu%2BAmFw%2Fb8JfXK0Q4aDYDZDkK2JCR6lPO%2Bn61szBpVAiEAo%2FHzBbLskpDrpdbihne6gYHU5WRWn%2BgPJW0rAu9gToEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAvsGDRFxyxmRShiNyrcA3YZca9uqP8vhF4k%2FFTXOZs4W4g7WsrZTfkq9T8qkAUHr0oPXJ4IZ5YZUdCBoO9dFNnEbsAXUXtolu61aQC1aHj7TxLX5lqY3YJSGPiv%2Bl2rFxdWeFZ6W4o94eQjgKrS7Ak%2F1QGVTdIStpli0PEksh0%2Bp%2BVINLGiQ8xmaxoouNrjem2q4k6peFjR%2BIxEi8ZHaPl01I2PpUx0d1ip%2FrFFRz8%2FNxK%2FpaYNRb%2FqmxQTgHt4ABpn85rZ4xzu9%2F%2FYoi2xpMNE8wpSGdasmL0su7sEuLe%2BmNxNNdsTaiti8WmE%2BEznFkDvyk9OKwzCCofnBWsrOIUofzeMDFV0TULzQUwz2Kin3erk6DA2KfU3VO4dxEuQWHGrSVvlxn3XkRaUCNFuJvkDbUerMw3gOBUip4mqnlwAJ%2BMyXnbYJj5iUZtl70z5vHu8GBBnYzjqeF2R0szILzjQYnQg9LIArfKGWNxpblfYIUs%2Bp1MifVSxaVQrqcO%2FQMyznUUWXOgfW2WAJ%2BneplATS3TpKT4%2FSq8%2BSqj9Ec1OEtdCg4Oi0JOcKzu5h9ZpzsMNMgMjY%2BHt8cryOxsbjqp3Ee2Zwe3pIU2bh9wkxybEyhW4tCD9M6bWOAuDOFUI6onAVhPmIA1%2FoBF7MNr8%2BcQGOqUBd9CvkFfgI5%2FyGnmq%2BUYj2oZH%2FQF31YVifISrJAoo2aNE91klS%2BfRp9pEBbi2YNLhfTmtPAGFOEQtlED8x4N3eFlbP6k%2Bx3sbjV7ZV5KdXtVXj2D0hifxT0ibaQQ0bhvlqvuuqAQKcusylphy0EWyW8uTh2IKUzvwEmixvmjrKiFq9VqJjv7jl8qQ6rwdbAKlNfJ2nVk3fiWfduFSi9uwlJ6Xw4eo&X-Amz-Signature=4bc609ad2c1b9dd09949fe9e44e5d80ee9d9748ec3216382f99b8c16412a7859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466273LTMLM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDWzwaNGBtWW6S5Ob%2BK6DydYUbLEbtMdlRDJotWkgDT%2FAIhAP%2Be2toQ%2BURT4HAVJTgntTJ8INflEPT999fea1XC66RwKv8DCFEQABoMNjM3NDIzMTgzODA1IgyHGT4hqVg2PpIfHLIq3AM1lMg%2F7ngeqyh8CICJciclADAOmh1udRjwW2CMaUn2ZGyAQ6iNramYRIg80s7nYJlm%2BFgN9mz6fvhgZ4YBvA5P5f8%2BAz9KZxPRkbCvSMAmlU%2FAuqSBLFxIu5I0nbBApwLy7FD4H8OVphfHmRoRf5vCnmifFuYgzARXBHQZSJRyAaDsY4%2F%2BU0mSFxwg7BI8u4hdMm3u7GFaHTFf4r15ChZWM1eiUePoTBYPLcEShFghtYxudL5nse5roJgJqbvn5XmMlJHiR1f4UdU14QXyJyeg2Oy4T0y282XB4QfQtVCQPonf6oJsUiHP92TOaaD%2BO%2FGckNelQ2s%2BgivJQwigBI02O6eJlfJAe8Au9FzhzES%2FWEr0nh7hJ4XMPYgzH6fynIbFUSjxHPbQUFtlb9mhXTOtzVbotrwHxr2iXJ%2Fo0hXLpJHSOl044r2ROcjMUOg4O8%2FQEnMvQ6T9riyaq8GLbYGdcxviza10h%2FdX22G9GfxQEljT3Er%2FtRMOBuSJFJjYkcfFoPckmF4aNtyRi%2Bog8wjnC0Gk3QqBO%2FdvS9CRkBHy9p1%2F7kL9x%2Bx830P%2B5FFYqeUfAiJrCzA4TgtCGAEDiBB%2F8pNKBLaq6Xgx0c3VM8KV%2F9DzObbOblefLfZaQTDo%2FPnEBjqkAfSuV3f%2BrZc3GpEnh%2FtBiH0jlazMtR8Zf3ksAj4%2Blav54NeDhU%2BuvMJVATF%2FPHqDtjJ3g8jGdCsSt0%2BLF29DPOFB7RfxuBgYliCleTER%2FUrIzvXsy3k18tbGtiynX5DFVRs%2Fq2m8PwRRJawl5ayA8xTD00UeFOgJj99M%2BHM7RWPiNUmkm%2F0SShutTmWY%2BDtsUhrVpuShhZmTUdfk1An5UR6MLGG%2B&X-Amz-Signature=1328bc83245e3c451257572e758f5fcc0f35223adbb3c3503010f106c00170af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
