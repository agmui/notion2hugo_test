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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BTRDHS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCjwrjdGjxBmyI8c6qSjxzef8XrYtkmcJid1nIVSgSEIQIgJSC1Ll4sGGq7xTKd7N9%2Fus6ggLAvOlEPsxaXH7wGHS4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWb6NatQq%2BasN4UMircAymMfaMPbFhfCaV551IVpCYTsKhuocpeWXe4pWMFPDIzy9YPfCciWiR3R7LavHEmIoGkSh0NeH302IwYgqelwW5v2fDYxptwi4FMz7%2B10YpSvJrb5L5hxDWX1gzBYL8CVnGBv8awbiITa9bNPAS%2FPsQmkduCgMHoxlqHUdnZH1mhAUjBzHQ4QR7Hb9%2FirBLj2zDhPNjRge%2FzYJYgMzHdhGMS9pDvNX%2BR6ERRtBC7UBT72GDILeRC7%2FMFAQLHGI%2BpoNcH%2F6nlxlIgJecT%2FfJZQZ%2BDSHdBxpgcPyJ6G95Qs2fzDZumIAjUZh4g6V6%2Bv1ivK3UT8HkLho6Ir5WxK%2BhczHCxKAEjDQVTw9WTcoKVemuXFNunvaByhKYgFZLf60vHVnxoIin8q5vX5x%2FdC4vrHfITv6t9erunvtrVT3fibZAWWbjWapQ%2BIgAxWUHwjgJ%2BQLZaIvxmPzXWCt%2F%2Bz35BsBSmc7%2Bymy4wN9TvjAZgExqxkrVTCVMkntLAo7Ey71Kl8XiUu8HVqOzl1UWxnw5vrTZyJP348EWW7tt%2FGpep2OsPZ3eifcl8aP1yUSz%2FrJoSeWnbVFZH6IWgxxon89fO5FlIev0Is6ou1iqPzzZ%2B9ez%2BwIOYrl%2FuI%2FxMNxkDMLeEssMGOqUB9KKBFz%2BOL725t6rdkp0RXlBpldKbJSE9a5z8u58i8mWoSubzWASdBBVhBMQS24PmDTnBVuVzQsA0s9RIVT3jsavHe0VEGrG1%2FwaClDAaMIS7jummKl99lVLxMW1Zf2AeSoDKKpmlwlML7KW3dCUEV%2BpvYd1cazuIMReO8rQnRDA9lTng2u50rDMtA9zyQ2C%2BEqTcZMDlYPvuR4Y6mKiYKeV5RdbY&X-Amz-Signature=a4979b08a6db20907ba8dba10565391a5b07c7d07fdd4abba71b0d33e76d9e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QWOHLBP%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCID6YK0uM4o3lXba3UMnYJ7PSsp57tKiFgrK9lF0SRBl3AiAKBxd5niN4rpri5Q2sVfSG2BLvRIKliHOL69GFSZBZKCqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3oEW3CKMdrZ0lfoSKtwDVdAYaMWpRMVmNcHLZtaH2cQ2rhc8Y%2F9KPpnvvGbRoQlDBWoTTHjxbfPdwoU9ZvnDb419lIxa7dJT4MX3p3wi5%2F%2BCrhxcuNFCi5F%2FWgHLUXV21mlbSu91%2FJxunTrrbOzRMrJHfW%2FoQgF7jCX4p2zn4kh5g4rzQ0WEHXJdd8Ayh5zCx%2FQY2%2BYDSakt3WrznEEaXHwrzo6qvm%2BUfP64h04wUvhAO9hWuA62iCt4g8uIW%2Bk9rOFXXa%2BBOE5FmIjLaVj5aO92R2Uu5LI55jf9xYxJsssvjCk9MYAcUGGQ%2BhJbnEjF1%2FRV9neA6wE42VvPtUuBdekAjUW2%2BHxb1AIUZy0vJl6vNqbMw3sqQq8Arw%2Feizmb0IKrNnqLdypBtLxmxJoaRXBjfL2rwYxvPobfSGxeVbTh48sXYH3awc1WkR%2F9aymVxtDQaemORrzaHefAYJviPgCdDfQ7vCy6B3%2Fj%2BdToEPab4fd2TzyQS7%2B5ECrMvsDLr1gYWrPVcCQ6HXECEYGd8J6iP9GefKN68%2Bz7tVE4PISp7ZJ1y3ppFi2zhgjnVkuT1sLmv2MCh%2BN4W1iDIuakrdrF3KP7u4YLirmlu8zpQULl8ZWDCv%2FYG18JbYxyJFoqXSWOt1TopVh4dDsw0YSywwY6pgGjzw367uNkivR4gd1cTsvDznNA1zyHq7ef04sjh00Lyds%2BvVvbIFWD8rgoxsvwasr%2BpNxBfYwR9o6lfSH171k8MhUgd6Raer8wmfq8pBxqCnP0R2tpKrPgVlZKOEA9fPnXe3A8hG%2FUkWUE2ElOXVaNjKMAh8v8okhwfx3QyK6ArJOMjgY6UH9u0tn9MeTS6NfTmXNdZEGDzMFFwEce%2BtzrGp0vNK6r&X-Amz-Signature=7c78a3654816e0a6704779aaf5607a615a37f8870a0f0bfffc8654e6a8c8be30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
