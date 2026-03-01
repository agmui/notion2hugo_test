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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XMMYZ6K%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEP%2BIgQSQEh4rfLIjw1pK0rRy%2BitL4OKoFi6XlGI7fE7AiEA4c%2B9ZEP3vlZDS4mGbtPZkl8MhemqWmaxmvz0AwGyyGoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCEgP2c3aUd4jwp5PircA2aek2DXfNtKMkxX1U5tAMKWEn5dkb1g5Kbv0qDU41%2B%2F2nG%2BMLeiIiCd4TUH3iKOz2uZQwUCptLfZEvpDACI4N%2F0h8v9EEvlIhUKmc57tcqC3e1hdhk3MLsjugURhDqtTwSqrBIfHBw0Ynd1WpRgogeeSNTD3xHRUZhEK84C%2FAc1HUungxWeKWLHH9UnmzzjVu6Ldn%2F5B%2FWZNfQv%2BFo3ZxcybEbCB2rf3%2BT2YC%2BEXVQsLZcO2ETS%2FcBJMEaPX4UMyQzdNEhURZxZiVfFb%2BkqXgd4Om7qH81TU4O5ouAXMPRhl1h9L2vu3YbN7ns4fPFjptvywfQPIhp18o%2FvNwZIDPBPZlYyMKsxn1UsSFz9rDusnR6zNwEjjowNE2dgXgRdSJ8B8nWlTOUU23iUoDRhmwWUbQhCf197RFQQrqZnendbnmFbbanUNZVrlAK9XcpLRTCUyTMZZNka2uzsJK6ZzKWcjnQrVR9fSRlQy0bB1D4lo9Ju%2BAdpWez930jbyBGEy%2BMAjvExSF5qkW6Cy46PBztTzCr%2Fng96UF9XL90SGgs8%2FP02E3C6LrC2WfgrvxgfoAdz5J5UGmGCefaMeAEExYqZ9ok9S0cBbLWPs086jbCT89D%2FhZb3P%2FMjXIPSMJCujs0GOqUBwARAFrUjsevgALqTzXIFnKQHfo1QPY%2BynmA9Jn1%2Fiyczo115eJwrBeJgpftyUwi7uHre7XZkvDn%2Bul3UpLzWT7ypok0qQGIyS%2BZ556bDelAXw2CmiRPmw8v2DvVXcndwJqZ4A6c0XF15NM3Om3puv7a8JWGQOt4VpMAS7l90NdnE58rk9Kab3C0u6q8LubGW5hVdgYGPZEFFnp8F6HpVg9kOyfjn&X-Amz-Signature=a5fbd524c52f2c7f6e3fb0b35dcdebef17fa204e6b747df7a0d9515dc09baf10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZYJJXA3%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD16SqWauW1qSN8ahLOaRyM4EVv7pXZN894QvXhSG3GXgIhAL8PciJ%2FugSeZs0ACcvVYoMS%2Bwa0wdtcbuv5b7zOmlTOKv8DCGMQABoMNjM3NDIzMTgzODA1IgzaxBsXDMtVd3c6vfsq3AO09bdeTqFnNOOnxAc%2FbbMtzuNNibEB%2BvPRNpL17Tf%2FML7LSDYmzEX8QirlDBCqtHQw57AZl74JebSUslstSYirJPFAr0o1xjdI0PKId0C5sfGPn3nglBOZUPFfVTXwbcv%2Bm%2Fzc%2BudARY%2BtIBId55yCywVCk3fXmXg58m6t5GSYcjmDxMjTuXsg5vx5vyriLFbLMwFSekcUlmuCypPuNyXL6wfj6W861qWuHf1heEnzP%2FJmDT%2F0FLpGkcm7RfGzUUWaWRSUnadRLbFhW%2F%2BUPUr2DoDkSB0WZJ4UArzTaRo8zKQ5eDFVASdCTeVz%2FE8TanWCA4OLsOg%2FdPGtZ7tGkUWYU%2F%2BPJuKwG%2F4qJGIaekGwREdORaGgJ3nfyZRh640RAH%2Fhx%2F89TmAn5DqVg62P8flLhx84FQlKKyiaP4T%2FeYfTdri81j9j10rcF%2FzK87DnLd00FfKgN4jOvO1A3KINEwoAOGG8Tx5OLX78cOHGiRuNp3cST0bs%2FcPPFeD0iCmnZf9abk8%2FYj5ob5ljQXHvk9gc%2FXbx7ANrnknjwnrdqJE%2BvvO9AB%2Bj%2BtEQNzGhwH6qAdGNi6gmBcZXrFlu%2FEuRjtv9j9fhAh13cAu%2BT2xerQdWcDszcm%2BL0r5AL3PThDCsro7NBjqkAYTGCt%2FBZ0AwdSVqilMFw4JF47bjDcSymsQZ%2FHOr0abRF2LTGgBbQkR9TldfHUlq9yd6pXJVBkU4jBL%2Bgx2oPsZjrrJHj5JUe9PJvdbu6doN1GJMYRpEBmtjVwFGlCO6U%2FMfs4hBZQOmlIsuwzubyLaxjtSc2%2FYjxLGyNM0LYrBufAZlj%2FCPvzWnL3bZaHVpbktvbswfYFNrjb%2BLQvUK1Qlcp2Rk&X-Amz-Signature=2fc7726111290da9af06c6d0e9324591ba10e590009fb421f10ad0e6498e0d0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
