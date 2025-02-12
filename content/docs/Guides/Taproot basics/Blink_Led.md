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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQMISCYE%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnuV3Uu9knrbDyQaXcXbQZsn1mdreemyBycU3hQsKP1gIhAKCGqwQh0hWLrf47rHjh22kLP949QBafawCLEQ1Ig2C1KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRDfOAGh44x5pWyScq3AO1wFIO8yeziE6si7bbTwm2JqnYp8aCOZwKr9VeZwgh8Rlnnfbf6sI7NVxzu710QfXBZm5BSO0u0zzae%2FjWhdjRrqFKe5Bf53kKvDgtD6ioUA74oPxMIM46QBWN1Zega%2BwHNJm6IzXhb1924eatVNwqijfJ60tQVpyGCy8u%2F%2Bf468KyZSHaBBhYd1eWABNG97Ncos5UfiRL6kXk4hbFSCD9cH1e35V%2B0zhGGghskO45BD8pJtYzg2gvPWg9HqNgq%2FB1sQsh0vQkAQNveknw%2Flb0vyjYWYAAu%2BZihAanAb1iEcVDZFAQzmn9NapoUlsU6NqFBYF2xNFvxpxIUzwu7sjvfcB135LgsXRhM9ZTQx2uDjIoJEpasfNbOPteCo9dNXyNdCyGPvlzUTyBjpmJ14xQTAzFrkGhzQzblQxtSA37JAIvBp97nq7myAzCS6tkGH0P8lvhhyQiYdaYV1juMecYfSyIRRi%2BFYT%2FSKYzGbzRK8tbYo%2FA2pvNc7voxjqBbGVInFHgzrzGWZNVri9W%2FDohJkAbTXyOqEGHiocVVQASMHdCdDL%2BLP2LS%2FWxpqW87AkXoZj6pr%2FaQsAYL%2B7LXW9bVLWCFMZn%2BE7MBVA0XVZMdrINBADHLhIUrPC4ZzCf6q%2B9BjqkAbb8a6fBe4i%2F1QPi%2FQejEKBaBzHSUK66ahXUAgiAKdYhmeYl783VYK5lQa%2FBXcHF%2BStF3XpXQf7i6dLshXF8%2Fw9On6qiaW7WtFQsjsqOEciJ4CqanO657%2BVgkK54wtYgcF9swADSU2%2Bw9rU1KJp4z3ttgYtro4QEnba4JLOswIkrspo%2B8oAbzenCAGeVGQDNKHZnH5IJTLy%2BZCk345N8SlHKOIZl&X-Amz-Signature=47756dd21d67542900830fc633fc2c52ae4f6b37457fd969e6ebecbbc8e3d6f4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK4NVCCU%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAan6KFbPTMa%2BAj9vkOV2jdgihNwgfyxreOKj0KR59j5AiEAio9yni%2BU%2Bgpzoajy7kdS5TC%2BX3kY3y34B4n4G9C54h8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8cuuU7yWCmc6dJnCrcA2l6BjJ7MPWVkkoTv4YcIvKtFZ6DT8GVVc1iRkgOsB9xmNHXKO8undfNRRdGVANCFnkbncuNJg56MXvPOL63fuE0B4J3BSCrFGdIvB2lTTM7eQQUoL%2BGtw44niUYqxC%2BonT%2FNCz%2BNKkIR8yClqB9kRcBwvNXWciTON1tlA8sj6m5iLUaHFMA7Z0DPpbz0MzgopKYig8ABvMwHyFTVzHSXktjtpYyoXx39umrgCyBMCAj6eFnN8xCaik%2Fzy6oDwAS9njAKiZz7WkOFhfuu7UqIQL6R40P1sphk%2BtQZpD9hwjaz6Z3a6DQpjKUPfvV5LLqpiVa4Saa7AnPp%2BZjU6sLR4yMn8ArRFKSYOMpCfcu%2FRyMkSkU3jd%2FqwqiO4Hhm6R%2Fh182%2FxwF4kKGt0RQS9hnC7lfVxt6kxudJFCDZIjkH1p3eKFpSmn1hJXMU3FeLzbCYgml1RUMqgTp3BBtwXqC4NT3mKB8ja4KGj%2FX8FsE%2B9slZoVfIL6sj0Fc4ZiZH6yaoeBSobzr8N78HkzoYGiVDeLD1avOr1E2ufGJ4uuSgN7vI7T6yqO3nUxN6aBKLu6%2BjEuCfJJHC660hEhlrAJfcHQjk2OC5bc50cNtNoICvsKuHO3trc0CegBkhwyFMNftr70GOqUBYBEsWD%2FEsP3LLa96dQ87AMhdV23gV8x63Pzy9xFpmi5COG4NBUzGYyKeasMJzjomyIiV%2BmsDq38T2O0zM%2F2Npml6fvM7iHV8VyzVVtAehTqXIA%2B2En42%2Fmmz2PSWTl8I71Z7fnY%2B85WHPAIb6miKkfXHoM4hngu5tOskkfrw4r0Tfgee1FarN0YTMuK3vBLDvkL5deoIMUW%2FhKPGd0UdTUpB2yew&X-Amz-Signature=372d10873e4c1b39c0f508a6ed92b9e937f2f807dd3376fd1fdd3c3f1ccaa144&X-Amz-SignedHeaders=host&x-id=GetObject)

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
