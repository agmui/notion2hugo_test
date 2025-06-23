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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QTYRPZY%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDxO2rz8y4qULvNeIvtpZbmtxd%2FSsfzNrWl0%2FyDP5bXzAiEAyWxDqssOaIOpnp%2FM3SnOvhd8nD3t66ZNYbqROEsiPwgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDBbbOMH8bItsE8HGaCrcA2gxetsjcvdsJfaaZbk5t%2Bqu999mzSNpd7iJA3abwmCWX54Y0Z9JxNRF3r%2FPBkc%2FPBTm84LfT3sDyi7WNxWC8DIOCnqfL%2FzHtPV%2FcfDW%2BaIbSF78gbCUwZw%2F1J4k%2F4XdOyGWb3kFBXArWB0o%2BY1uFGUB8p4YGWnWqYDjaMXh%2Bgz8w%2BSnWH6t3j4uMYcd7lkXVL%2BtZ%2FRpgih5GCZAYZ65rhddNtQwbOOVbrokSTcHpMdTIFYqhuYh8HbxaAetjLqRJRr%2Fd5fnYl08indY%2FdsFa6EfUqkuN0pbZjhb3BbQNeEjfu%2FOUlz9hMYYpEitgQ%2Frnx8igI1pecdCc0c9FJUwjo8mDhywzNsn9VZiwzplJsNmhYox8AarmyV%2FC2wRSsh58Eml582pbAD6FP0c9AXpAUfYv5NIIn715MXjSMAPvSPr9%2FgrzfkHXD80xlo4ByRbz9MM8ttkC8eVPCb2YoNtw0%2BIHjnQ8H4SPYph%2FSVeYn6Ygn2aq0qh2oEOG4deSa7qcGjrmGGJ9UGjgn2q5cYQQeyXsEtz0ZQLy%2B9y3Y7QRKQ5DC0b9u0Prg8iG32t7KsrvOyBnCxVOWCJ8lNebEzh%2FSzUnH77yEoC620jo58PUlkBkXz0dtQpiHGrCoAsMNCE5MIGOqUBumiTCF2si2pKu8zY3i1YiOQjKSr1BgphcylaWKtRxgpcitimRsnMb%2BoKBVpQ5XDn3Moc4PRwnjN6UP7GwSI9pDRJdkQ9QQEVU7EL1CnTJEnLux07JYxO6yHhgrTOn1jZz6Rq3OF37n5xBslY8zP0qCWD3kZaf6a6xFnCsr0f%2BERhR5q3gppwq0%2FWBXGb6dJHzS8mztd2qJZ65SggVt20TEzApxdr&X-Amz-Signature=598a414a85942c75ba42f41857cd56981c8c2e4c135ad9240ee53b272fd91f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQKY6FAC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIENp1%2F7n0idS0QnrO1HMgou%2FcmJ8dwptR%2F1NTBLYpBgcAiAxzY73D7px5Am3%2BDwJsIOyMwumWVwNct4rekaTNTL1qir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM8Crn2Ezo0V0tfmc2KtwDkeh4T%2BtLdFW2SIQAdG0PmtgKkq7b73aYwDO5hlPkejLNkFM9nJLxx8TLQbZ1AtqV4PgX9F%2BnBacoMwabqibskwmDi3d4fEgoG62XavIaIsX%2BSLhuD529HLwce9YM8%2FDfoOSttJTe8nWScnsAWHQA%2FUPJeWgRrbprj5xUKcm7MPTzY%2FZy1AhqJF7JetvPcVyBH7Rmt17eJX3daAtDWHBrP7wk6XuNiEP1f67PQ%2B9RIFICNNcmBjjenF5Ctg5QgUpEXGhI1ircKWYAnu4Mfx7JkRxaUvgJDnJMNX%2FKMLfM%2FCCfEI%2BZout6S5C7G3h8LrRULxml3Y8cipmI8ETrgseuOyAAi%2Boq7daCsJI%2BI7SY3D6VQg7UwVWD0ge5D3WYpcqEyCAJzQCkycfeAIIvTt2G73IaCSeu3WpCEf6hTzKhza3%2BAM3N5xWrJuQrSr2EbTYCMAS4KSPBo3Mn45tR3CnuLA2fEmlENi0brCONSiqwWp7kE1jrsABtgfo84FGEwJEJt6OO5Chw0YRQWQ8XsoAGNxYviW1qlnV0MeM%2B4h0uSmJSK0CB%2BCR5ArKrJLybXhv9GScoscVr4DYnzV30vbQvbYFf0%2FHv9fVkEQ97YddIf6rO7zMrVJq08f%2BR%2FCsw6pbkwgY6pgEYZoai9guzihh1X1L4JM7LG0yWDw01RLWxCeBLtmNjEAV5dvLQG8uDsp%2F%2BkKWhDOBgwRQsZuACPNkcxbToONIqMh82R%2FP8hWe1c9t4yfQvO28R6imshFamHvv2b0u26Um5svzRt4bMjYVlxwqG2pkPt%2FKpf8yit7iGjRFNnPxoKVxwU598MDR2CMXiVxyZC7TFVd37jg95ZXuIbhfxld9HLt%2Bewp6f&X-Amz-Signature=b6436cc234d5e7040b4019f47e87a7de5159d5ba3102d4868ee5be74f5284421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
