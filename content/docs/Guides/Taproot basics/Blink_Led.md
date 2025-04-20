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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4I72FUM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFEVWjYzrIV3WO%2FNAPwIK9OZBud8h8CqLjaNQmnGyW%2BPAiEArgmTj69Lt6b%2BE%2BucchSaCIhG8AX%2BHeuQOMndGBp5XaAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg8lyiCm7ALYV3T4CrcA1Gj0QRpEO8XS%2BxMqel3m3R0r%2Fjnzb2AzPOUtvH9%2FxYlpKFzVssZDiEiaohGcIwzubyWzkD6f2FF4qYdz4qWYqh1uHMBP2ybWSWwl79GR7VFn%2F78D441gG%2BUftmyqF%2FlJkcbNQzRyyVKWU4Z58R7ntQHvZUbyCyJCPRK3xb4DK9xEGJ6w0sNvSjcSxxVqfcC%2FJTPRa%2Fz6FmSrk6%2Fsg1LlLAzrGvr02PqTeDoWuNULYtWG9s8%2BeB1LaqGM%2FxjK%2BX3Gnfy1cQwWdjI%2BxubSq87WhEJETGgkdGYOsyGgO1R8eh2a25rLo1lPwCbHnNUb2OlTlSC7nx2pyosdME2hWoFuGcDqwF%2BUBRSO7IY45hosUnShGHPBGReUW4x8UEaK0iZR9w0o%2B5eFeeKp9pzRmFLQOXM18G0RKJ5dotUECWZYyUdKyKxXgj2OwhEc7mQrksYeFFXoqHqkLaDPoByJ6F3tPZDQIyMajwDVcWy6p7oTwPLcCChDx6pfftTY7XNNYqDM5MAUt15ZpxtnJzIhXZ34MUlIJNvrKtag9vBP5h4GtXGGHVqXxqJLDbQ%2BIc3SZvoiU9kGW4H16uguQzC0irEuyjULpZXiABkMLYQ0%2FnX7vJr6k0t1U5kMbPNhTbkMNaZkcAGOqUBNByC%2FSRiuNZtocExYfXeWLK8FiRvqS41XXCD1KqPNyXGCshgTcxSnXlh3Icq0%2BpReDtHBJMpBI2Wd74RBmWG6t50hNoffQhK6BTHrLlqnEudBYv%2FMfj2dKYGBa0BfyBbgBMvulxxb9mG5vHZ%2FATRVEoduVDW2tpN7bTEzJpiFaF%2FpbzajUwyKeu1NiFcdy7Y1CH54nzQ988x2vQ2dTkjf%2FBU9w6A&X-Amz-Signature=7e5ef933b5467a39cda80f163efda08c4b164b472056f786e67b6544eb10829d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL7UESQ6%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDnWchjPMzCuSFZEALb92cI%2FELDsfaWh76X7VbvHuE2nAiBnBvKcRvgwQqu6EnugfdVKCkv6B8%2Bqe4b7C6%2FHRN%2B9FSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOZZYaUbL5hMM05W3KtwDMbGZgjavjz5BB2IOo4F%2FMs0aEKK7BW2IjS6TBISxStWmHT%2FzZIrGFw8Y4eXMb1NtUBNXsi9OnXtpWBt0CrEmeUkURQrdIExBDUtMHOsslb3GU6IMFejpaT%2F%2Btv1pJvndTcCr61Yaa3NNje7foHRCEYOqMwkxUsNQSwtQ%2BrpnX%2FT0595W8tlg9hcpK5tvkZ8EnD65SrEHHgO2g7tcUHxGuFrZGSFjHy9R%2FnnsnMyLHdFBdmbKaQqHxCmVhEJZBJLutIijX7J2LH2%2Fx%2BAkDUpQl4BxgSAQwkbeOzsv8s48D2H5xlaim7Y8H8RA3Y4DtMUTpM53yhScQ2lhoVNYyLls0jp8sfXEEwq%2B8PZu8wAEDh9k1g%2BZ9qhadB3mp54JpyKMuaOXfMhwctckyXVhShiO2e1nlHM3x9x98L%2FOp7dM0%2B%2F0JcZGkqxQEPzH9qfTup2TxljHXCsUg9KxJ1riU2QChKy680JPTeQhvIJCKi%2FjYC37gTqj%2FDoVilS7G%2BJBIlk5y3GGT4QdoiQuDLIuWHESzpB6NZVebh%2BtleyD3OWkkqWG%2F7MhucwW1NNEotvJyh%2FBVCx6ZsvtRd2cU5SCFsWd4tnPx%2F0VoMMarkt6Sotm6mA%2FqHHbf4mLf8iJz7wwg4KRwAY6pgEgJpwPxrxZnaYgoV%2F%2BosXqLB92LjA2DYVHbAH24rG%2BuxU4S2oBI6yBfE0pSjvJFLv1wj7l%2B%2FR58guU1s5tFW5T996qBaQVQS5uSLV3nAvhuGe%2B3Zviey%2BAUZNS1%2BzzMTmlhRNa9X82HNj%2Brtvfvpt0MRIDVNsT1wDK5z9icteIwvGIayyP6PezgmIkH8LTWC980Y4ZKY4QlxdhNWFgMzjrZELBCTUy&X-Amz-Signature=a7db992ccc818bb35f7f122a1b82cc479a7f611da618fc84e80f5717b65a4c4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
