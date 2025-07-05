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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636WUBV3G%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCICCeqin2gHCghd8V45WW6u0rwRsIUoWgtuX1BupsoJc9AiARCpDfCtVnp1gXWxUTlF1XyaV136HlMB46B48mab7FkSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMhTsMkKY9Wit6Vr2JKtwDpvSLPF9MqBOb3OaAKmOc%2F1lhLTRNxP6AIFWHtjAoVwV5c3ZmDvrI0P4sv53CXeL4WSkSX2%2Bgx7Lxm07JUTVS5o3uSKaIZJvAs4ZNH%2FhcjoClCJ3xHjvniXnNHI9gytD6l9KPo1NAYgEUQvpoo6V1zYI6MfBLdq%2FuqDqQYxROBI5Q1NZoEdJw3Z8hzS6fiYHibbbXCa1R1uE1xj0xl%2FdAaJu3Jylt1f5cPYobZGT%2FLWiqVO8ufi1haMnGo%2BFAAU1d652QFm6jeX3XfhtUgxAEr%2FMCSpcYLsSju0OFIFdiDf51dP3hAtKlCKVSyA%2Fii44KwPP3RmYvgoyk%2B%2FmJTf2ZV9SVPUe0k0ZJFjCNaGNPSG9bu0wGOjgzOYpEEfWrUF7MuOppOKARcSOVgOExVFrt6pI9ETpT%2FAn%2FnYsqSTLGLoHji4TMPPdWshr5%2FRKlnPJOX8ioPi052TLniUXFyWgsL9VmnVFF9FXTUauftZSYrzP1ZUvKAwrGUD2KXQ95MTlsqsT1YD74VxfVpqHZFF67yIujcjJE14Jr4uTOAtBvZK6NQCN5ZLi%2F5YB%2BAaltpS087Yv9TJXJLSYOHjyUnroq4Er%2FeGjIxdp0MF78qDlmTB2zSbLHZYayuna509sw%2Fc6kwwY6pgEoDRvyJLe3c5JlI1ji8qbdM2bmWaw0CYFmMB5k%2FA%2BTl6OUiT2hOqIqc516qNC7UtSsDQJ64KFgz6UHV3KEUKDR1Kq%2B7U4ozp%2FW4sUhHWI5BOIOWQAVSJ4FIBA2XNYGvuQczf5RbbfdnywZEzCywe8w8wiT23vVB1jGo%2BsBKYFJS8YLGbRSWyyQ%2BLanoSlN1kuAG5Q%2BvRcnNu1KajrFKNk%2Bybuv3evS&X-Amz-Signature=e56445815b77c6c96561c679c111af84e599b2567527083896c3585a6384d594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U3KHN3M%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCjawpaSAsnfwM6qDAs6RWO1Q1SnWoo8xkUmw7zFglqXQIgZD2mVGsy%2FMuHd%2Bq82ckC1esIAjZTMGa5NGB0WIbWMHIq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPaqyKNcXH4YlXaSRSrcA5b9w86Uqklp%2Fx7JrNBNGzxiRb1zvbt0kVcpuSTU%2BbGr5HZgoCX1mUP0AgBpbInGna3fFqlpyErxMwv%2BC4NJnz6oRIqLg1cn9NHKK7ij4B2I7LA%2FzE8KGf7oL3iX6%2FnfiNAqbyDXPkzzDk9Q0jxI7mte6mSpnAky0bTROFdqnq7145pJ33pjPyStawsVnMA8cNyjMSJwdMmXXspTJoNzoShZhXcbnASIZIcict8tvIfSajFQulUtxiamATRsHCFu%2FJu2epS2m04tIZBLMpPZnbL9MPGqSwB1HIjVQwUGV6iQui7EasPuu0I8v9%2FEPXLWFBgAO4omWc3DZ070BPRZONTs%2B2Vopn4ELeu1APrW7pNYaODzMA7WEyN3D3DApX6G6ILhjC4oLQY0s9NIQK4DiJx8iYvV2xKh%2F3KaYc832GBoBinAiBcoA%2Fqz4SncqsT5oPP7GI0fP96NLaKNOSci2nkK6aENfNLIx5UTYRIVjt6A2LyoWBUlOol1yC11%2FsaSiu2usO7JA79SEMkr73UzOa5otdQvPralLMNhejsPTSLsBnjjBK%2F90tb79jMfQdSQuhabjzpaxmQE%2FSpeh3%2FK4UKu%2BFluZZXJkTFwAIOv8NkZO88l57gvVqDusIcnMKTUpMMGOqUBh8XcXVG9l6hjbjF0BsDQnmbNVGpZ%2Ffy3KlD9dqiRkgdNQx%2BLcb0LukjI89XRh10a%2Bk6ai0yXNR%2F9FfUcSDJoE0zlr5XmsleETNmrKs35LPpJu%2B7Xk7goiiTQm4r62mde1n%2BwiPghcOmImZdTc%2BZX2FbLd3fWnEp4OL9s4%2BmN%2Bv%2BATeT0C8DhncOEKK4nAzUY%2F3GjYvXSwnVtZNvcIQcQj428KJhg&X-Amz-Signature=c9f1c32b4c1823dfa892d3ae648460b0c6a83be8576558ec00fc052ad2dce471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
