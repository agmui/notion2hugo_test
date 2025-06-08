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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT5JCE2J%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA16LT%2ByEeNmBXf4oNQxzHPxR9T6BZvoSjWC9%2BefYxPUAiAlNowQtHx9xwYuDPdngNuqkatwfY4USlxmpzzdzuiwCSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2yLQuS%2BBZZ6x5TV8KtwDmNU%2B%2FOOx7bUsWj3UY%2FOSl9mn%2FKnwcRRAN0P2WK2Azt%2Btv3W4n677H%2FdH%2BSZ%2FHpgOp8PU6kerW8tywbPRw9L6FH13xPvekwGD7upm7IB7qF0%2FfZe5TjbV3vaU8ntXACE%2FFiebzK8WNh1gfQpmvI1D5BPhaDQ1MEvs5GYLEyToL00NQp%2BdyM6oyT5TVVZCJcoOHtKjZciHcRkeOph41CHrYl0vX%2BeCapYskuM1W7xcOyKQgBDuCJS%2BsRsri5ubUl6iZOaoUS3XlK9IS650l3jlr6%2BNMTPNN99Sb568ayPM9DLondEA0ryjNqFqJ2oIMPnYbsIxKDjKTxrxrSMnlBDl2nNabr3E0VAf%2FNQzEgKDLn6ref8VMKY5gbk5AfEXHOkJQ6%2FfX36smBpk4keOhYw5T1%2FvrOBU9qIAtZ2V7vyP3el%2BKPRPIjqdiHhO34lB%2FVco8Mnx1l8V%2B8QUrQZOMd%2BUQ6lZBR9VYYQYIkAvi0M4UeCM9GxeG63c72FA1zhjlAVcWIPupuFWUNaOkmQq345%2Ba%2FAtMSXP%2BNQsy1daxAjvARrScfBme5ZP%2FJ5pBAW%2FpxArgQzd%2FLw3%2FQfvH8KKWij601z85eLXFZskZOsQYeYFqm84SZYUdyhtbACJX3kwwpyTwgY6pgFk9J3PaMzEYOsR7JCGcT6xsp8tw7yYBR1wHJquvnAi24t82mn8YDMOS04d2W4f54zTxTTK8pdlqjs8UxVyxxvA2abFUAKrzZS2WjsCMaljwlZ8kEoSvhfSb6bHDC%2BIH%2BXpwmaDSiKFZZ%2BE9NQgopsL%2FnLNTQw1veGD7gBpYhT92NcGjj086QvZ%2B%2BW7Cy8CHxjXXQK8ZJth8qiqEYz0MIiwExuUHcQA&X-Amz-Signature=d18b3c50369e2512871d39e8f65e3c0d09a97913ca10a64e7dd1a8bf7ce809b3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYF5SS4X%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T004708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf2t2ISMjuEMmJMmindO8nsIF9vKqBCtU%2Bgg3ttZww6wIhANvhNlGGaUbRqp5tNLqm5Qe5nobwV0Dqj65RmGRIYJlFKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbL%2B5WDwdRsGhJ0bIq3ANaOrGJbwKXkRXsM0BbgFRdEiVaJMdM2Dy4JS4FB8Stfyq9y1R4B4EGVXjuVvtEaj4jVc%2FNgFOl9clxf%2F4oMfyaYTUXS%2B7AQzuHrSKtM45DeErnWj76L%2B45549IhTZFWP8KjK510uV3fBXSIbDp9pf%2BbIXcIkdO9KzkmIzon%2By3Rf8BixlD%2Bz3Fiym0p3etx97PyqlgowNEz4JXgL%2BtLH5AqyX4jzM1i4CniV15eFgcALiyfkrWq5e3i0G479m1NbvMWVsK5aQlW4PRADNE2hKIjolAYm%2BCUoF6hVOXuXTsE3y9HL%2BKwo%2BqTWn3LYjMd95g8DMtNFUVIcmmFNimzE0oQs3tIkhu4euXb6jxX5aESGk1%2Byke46cZoitMFDl%2BJcovyj9ufRagTN%2ByQY3Qr6YuYC%2FRiGIZiKo81fJb2NY2HEtlUVP6ih9mErj2m6%2BUgx1MSx1Pu3TE2HB5HCLazigf1XEpORisAJfcI6kDJPYjUg4N6To8bHphX3Xv87g2w2mc7nlhoZE6xfcAYHOMfv1yt02a8CG1raMBFnatYdPJoPJRcaHANCcn6oZY3%2BgEkSnWuXE%2BS9Y3JIfmN4BT8tutA1bucDRUUz89ctkez7YA3bTnPlKjrE2RiU2tnDDjnJPCBjqkAfIgqdkCdH%2Fj%2FY7U4ZNFw1gv6SP456iaeYH4bLhpVsaAmV0f0rL%2F2VU9B%2Fu9dvX6UK%2BYzrcFxpZ90Cwu2fUAdrpuXmRYHkucWNiCfKoENSe8UmF6SBKishXB1vGZ%2B7Gise7P5CXxMmJCgI7JPXMqC2HDx9SfPF%2Fpf0Ez0oNjlSe9J%2FqnsBC5JY15WJ0NbzVHC7yFazGjDgbSZhPPK%2F7A0MTKfU%2BP&X-Amz-Signature=20ec1b20fc38cf1c59b6a95e29d4452059315369759cb1b93a818f622e30eccb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
