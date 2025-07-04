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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLYXEN3X%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCJ3d6dTew8GGqyNlLwQa1%2FJ0gUMZV8BjJqSZwOp%2B8jeQIgIjE0ylnPI6iBaDg8%2FofjsodihUKY4LzucjGEDbMZVHUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDDJgu2r3NZxzl6PI9CrcAybjr90ozReX5oHkr5c%2FVzRCXDiMaWl8sGcZSjz7hQ6JJAOpXrCc2MRZSd8TgmoE%2FhDlTPRKZOcpJYnavMCyfP9Y%2BruCqfPU0HlAw%2Fc%2B1JC%2Fop3kfgm93VpFN98cj1uVwL8e870MNlkDDB2pteB6GdJs1aLXrLzs4I0K0T9uOWCL4BItyZyEWWoX0wzM3%2BBnnv%2BIDI7kcjJ%2FUMjUrU%2FsaoRwndDsrnPCwSjYq2CJ%2FT%2FKAH6J1TXcrD%2BEpsMGHWL1AXH0XFDjmGA6vEVPAD1xRHXhe1KXRHWmdZ8%2B0xT89uHcLcSKcezi3lzkcjamPKZk4CXn6P%2F5i%2BLMO9vYSfYcHWGk4DynM3n6EWc3%2F3df%2BC1HtKwqH0qsRyJETU0aGlYNeMOZkY2huDO2vwgJpNb7TCtMREb8ov%2BTDUlX9B%2FO7NHHbSKglVkxWdhfAKkL4IP9dwH2lRN742Xd6xEVmyiYj2mMuEleOnULyiw9x3wmtZ%2Bpk8v36v%2FxoIVdzGp115HMQzDlhQ4J3Ns4LiBhl8nlehYCX3zQ5ayaKnIJD7OFWdNU8bPMg20tX9%2FYw%2FKoIdpItCNSrHcpNWAjrIy2HbTlxq9tZRvtnPEjCreusQGSm%2FhemvTXaOYqYephR8cJMJeOnsMGOqUB1V4QEs4xuavX6SNNGZbsZX585AxXqd6u0NreHvpTwACO6V8IT5a1xRLxt6etq1jQvonB1n0LdzR8Fnl3erujo1NQFYuSf01fI%2B%2FMbMHdonyhBqnLpL3uFRzaZ3cGmRNT5wX4mXWKUvbARKWfPxg9H3%2B2hsJIQ5LFF4sI8km%2Bbm7T8%2FUpOunJExqddlao%2BbIAh0G6JGZZK1c65oIi1tsjm9sgDG9f&X-Amz-Signature=7102e00f2ed9d3a865816675f616197dd3a4a0e8cc583a72e5c995a3e383c899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUCQ375F%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDLzqi9b7UvUsDd0rn%2BWbM4hzJY5jQzN9KsIiy93vBJvwIhAI0kncz0neXSfttAMmuWRso%2B4NdZfoHrwyfxpKTjqPI4Kv8DCCkQABoMNjM3NDIzMTgzODA1Igzn1n0oBqDSRzN6mFYq3AMBX8JSv8oEWRiY09PzhaJ6rl5ejOomMy0Xb6Hl%2Bk1qn7WEyyLAWZIQgmN7cv4l8qcvOmOVf21caMbURp7LBogvKRfEAFsk0Jy7%2Bp63KgKaeDsSC7rvo4NY3Gcs3xU0%2B18gdPtN3J0hJ6WaBsSr1d6Rn1v%2BtMxsuvIcMTy3P%2FrReRHCKZntxT5X1ATMtlGJOnRFukcDL3fBJWSOdnE1Jyt19taA2TGNHu7lAlU9SyBucS9LTJfFgcaRIgw5ZOtvX6uQ9%2BVGaCgAx40yu%2FnFtW%2Fu4jfgT3NfOdf1fv0AGgsHDYEq24DMkrcqX4aJEhKNVajn9ZmTuinw%2B5kT3hpYIjkiNtMgK78X6IQCWHjTTeIet0rU2q4mobWIhnyexX1EVSYkuojFUqYNUvXWaoy%2FBSxpYd00hqw6ZHxTazIRaiAxn55EzOiQg7%2BrBwwVavNiADN9TpOBZJ405rOY2v38dLhPfJe38b89Mx5X7GvkgUIXCoXS88ywjQfeOV4WcgLQ9K%2F1uTJvX1Gh0sAMCkyr2gs9b9%2B8Dh7fYAvkXeG13twsknrNYvHid1n64pOHwuGQvGug5PFJm9PGR%2ByMRX1fRR4t4Zg71VYwvgjqpUPAYOsXNeCC1L0j9QNdXFqwRjC0jZ7DBjqkAXaW6tnKfqWYHZ6s7n%2FLPIjQYxzkQqbV0G1H6UNmpj4YEIyclYNXFDH6USBms7S8YZ8MF075TI83OctCy%2BEQZYllFh4WSbHf3T5dJmgb%2BEA3UDAvuiuYyB5%2FjW47L6MOT2yd2z5M2J0b%2FMsyfFBk83nl1SqoXhJbuyDnmrMGXyNxnnR82D6RGTNbaIzdBHsItiTJJfG5iFIxVwSZ9F9gZjN4PpuE&X-Amz-Signature=02b2e9d2daf11f1ce0e821a3ec6e5bc68fdca9407e24199097d0a4a296764fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
