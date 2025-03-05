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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3M7DIL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKM6JdyApy6%2FKLm9cOPUxCoiJw4qPJKyy0i%2FHTzf98XQIhAL4XqvEOU%2FQiu6ZShud29kgFFKA%2B7wEbrAWbgelcf%2Fq0Kv8DCBcQABoMNjM3NDIzMTgzODA1Igwi9RhRyR0cFlcD2D4q3AMunz25pDD49TiVh4%2Fmgu3%2FQju2%2FoDB7SgtmEa3lU6FvwiJnGrdKXRDEJYUKmIx50H2o6Ca1faLVyXn2UaLAHMbZzxm7yTYHrOUBfxEBuImZQs0pjo0BU7dMhmE%2FW2%2BLJpzDRQKkWZLiRGc1%2FjH1HnbtHF83Hv9Pjm9c1DbVk7N1ZKb7bSk%2FPT2CCaC%2BoeO3FPSKFsIUXgrGUSbZbDk8jqceL1HusYYpVQq5g5gLDGVpoMHaTJBfi8zm9eWaRpO9SUM8ArujJLT4mCHBsYPVSCUmxBQslWoO%2BItl9UshkLgHZGjVoiv4iNQYExmC6OBtvxazru6wd18rJ8zhrV21%2FQz3fUdlMVkYO%2BgmbiX9bNX7JRm7%2BgV5nnkj967ZXc2IP4nXQCXtSZhxux7K%2BfvI5g8%2F%2Bo49J0zNWWxz2IhTTNau5E2qjkSvVRoN8RbIYjFbKJKhAbbhl3sC6hyTE%2B43Y78J3MvpS%2F7t3LlYLeTFEL1nxNS4dss2AyCv2VqsurQa4HOIlpDno1imSvjuz9D9S0RHnsGxK7naLp6mwWnA%2FBTTpmicJlSI9f78issCMhZBCMOiF44Nabg9qprW7me0iWgH5PA%2FHFdvdI%2Fp%2FFe3HMGBbGiEZmU8MOd285GKTDAt6G%2BBjqkARh%2BRa0WPcl2idofvKRkikzj1IR%2BzVfR27ZsaH1fefTJK5ugie6mJ6V9dJTphOeqHO3rPjS8rFjb7GOhTjyCKbvAUbjLdQb1wdgqIkz73mNiQEjBHXvJm41fkzE0l90xUV4CChQRe9R0Y59AjDyT3bLtjZn8NT9ALXmo1TbGXdBUsXRiLk8myZ1gS%2Bqv597NfscAv8dM9vkvrh0XUzqbrsWTe7q2&X-Amz-Signature=0e081d71335f111e185bbbf037f5102000e1933a362b4da59700cb4f0e8bcecb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPZUHRAX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPKCq%2F%2Fy1r6udRcHsVtQI5RxfUmMaVG2C6g8FFlyM3wAiEAlqZWv%2BqFC2lfuPpRQCbEFMFzsliNBZgWmlbbvLXU0uQq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDHDLLQ%2BobuXizCzzPSrcA4qoC%2BLjF9nt3JbDHPK50C86Ypl9SWy3ZgRlke3U%2FhJzIcH2YQQtc2tNLgVdU3mDjXTf9z8yz1Hyxjx7DiHILnT9yASmIKP4xL6q2B4PpV9oMl22chOlaeSpCU9fwkt1Awvyf9fmmhSA8vXBoYIFHkIZoFAWxNEj8zv6dLcoH8ZT0Ejrq95fqwIMBUNLTHVlCQX3fgLV16HupT67ND3DKZtS5vUzCyAaqD8UxL39BoQ7cnGJI7hgMOL4pMBdDzDlTfL6XhpGMogGjN0UQYqV%2FdDuH9uxvf2hlD%2Bi7KyCKUZCW%2FHTfkXmttr96bFRwfu2qzlnRJkr%2FKV20i9pSg4jYom2N1YLyDiYrbn4h1yt23PRJUUUC8CU8uoIcLqe24Vr9Xt8e826llu7FLYfvmSG6jHSVwFN%2BQD%2Fo4gJJLzvrCZ6sriYs58mm1jtVPy3WJL9vkkV93x%2BNKeL%2FQiybflGwOl1id81Xd4ZHWETGlZ3WV%2B3sXNyW%2Bw9%2BvD6h6YW%2BFGkyDBeppJGE0EGVC3j50%2F2iMF3bCcz9wqxzVEmGhn19luPKvnpspjylrZSJcv0m5CjQWci9%2B3EXIdFPLorcNstqs4BYhuodcraS795s6C9pW9U345qRgOlgEkdLas4MMW3ob4GOqUBeu5UOUiEf8bZOTmjIs7%2F9gds7jWozYQG3OY5I%2Btn1bI%2Bi972LU6gEt4FwRtH9MDs3BzBeW0LbDKuAmaa9dQVpChf08W3QSBjxMeIHjVxCIRV8XZ2qJlZJ%2Bq%2B9%2FcGEQeNnLYchJGlxoHYsbcPBbO8aeshjn9cauavjP8gtZFLY%2Btv27Hq9Rf7b6Qd1Qj5gPq0mGwTQSvMD8CEHUh1Re9%2BbE0gfsbS&X-Amz-Signature=7b8cffb97f01d52cf3b33bece73ec0ad819c9337a94c3f5c1d1ae20d979ff876&X-Amz-SignedHeaders=host&x-id=GetObject)

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
