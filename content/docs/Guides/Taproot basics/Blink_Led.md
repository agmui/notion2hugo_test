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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PODQ7KG%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC1Pt%2Bpvh1HqRXVj%2FNAmqgs3Y3HN5dkig9unDSlMu2qNgIgIg1ABfkx1Sowxsxzm2jlAZTLi%2F3z%2F7qPSbkC3DqTR%2FUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWR5xrrhL3kNM3%2B5ircAyWohgSLfUKYS%2Fn9zL06efd9E6yfFxgg7hlnscFU0WTb9cQlnJj1Omb4oKkcTXKvIKthub6qjHL6OnR3J3fstcKEMe7%2FSxAZmPIh6LOA3NmES29l7ECiIetyyG4DXM4ADy%2BjhHpl5%2FZmVqeSG0gDOdFdsKNrhWr7J7cnHRGp3eiUTr3yaguu5CK3qJpisjE%2FT%2BtbE4FB3cNh1aDCMR0wgX9TdZ%2FSE0K0VyOBrFrFPGMFuNH6btWBvauiWjqe7ZuTpNxyNp%2BIVQFkwG3huI3FbvjHctoRJbMe1BjXUKczqeDXeFlGcVVKVMEH8H04hmqPGaYG5bGCSybyDvLd5%2FCktKF81y%2BzCDFZ4aIakemk4CZ5%2ByXHb%2F8rMc4gCVWjjzN%2BeSkqR3CwH7xiYBnRAyjhxxDSIL2zGdZcqp0wFJxNHM3Iw44WiOWN6SiitIqL03TJJcsyXoyuitXhowcaQCHSzSbHKhz5Qvtq7WOkXADA9qlsgmo5FUgntbtbpJWiZV6ZEtvMLmy69eGnARwEtAkTg8rVcrNlcb9pBsW5zjImLjSeAu2n3VWpRwT93aUy6Ii7XXf8VcA14XqrKucLzw87IW0cOX73uXJcBaRGzrRd4G7b3YfNt9OQgWBAiBneMO%2FS%2F8AGOqUBWTqEifPZn%2F%2FyjaZt9qX5iz3RcrBO3ForEDB7S4OgK5bqh2zZ9jqXSiaKLQN8Y95LYnUTfUwZP2dDGluPIUeCm8dYQxFjvYyGy4rZvcwtPbOQ2tXf7ggNXnOKsD3VhcA93FjxW%2FIizIgwGxLv1jWAtOimt08iKgep0CKktrlMtCNXwRPVS8HJLG2f3jitmKHz4mkFo3kV5Eic9ShH87d7OrFU%2BExO&X-Amz-Signature=7e1e4c5846a76c401b96c1c6b036e0a0f20cbce0f0a8d1636fb6b357bdcaf995&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y73NY5NI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFp1%2BNRtY3iibJvSXX8H2MZ1cHJxMcd7ciD2XPtAsWOzAiAkXo4hkDMm5vyFEYo6mlpdMCK4wKGJC5zTcHxSrZRHAyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpBnqz7l5mVpfHHuQKtwDDjcMs2EDRBm8TpIn9w4tmIVZpWBIFbV43%2BAi%2FnZW%2BkiBWexjNdzkSUsh%2B04gq8brytACEq5sopmYl%2FeecbetO1nyVEY%2BBJzyjjn7c%2BaP4cUSmc2Md0K1st%2Ftd7e7xjQe4NCHI%2BtSkqfaNGsr2Ek5aY2SqYuE%2BZuvZh1vk1lk1x1MOrCaBKOAD95mSNpJggqo29DVwWXD%2FLSIMMZI7zJExvi3JynVhhLbOXEFFlG4Y4BsWGx3%2BXipF6Q817bb%2B6OE%2FO7nqIkMW%2ByNDt8k8n6e8mSqay87XzvcG2X%2FI1PUHuSRJdTfzW6jcnL5c%2BTGLWHv9KWUdH2t9J5WLBdB%2FgWA7WF9UZjmSNLtwiQWW2lenLj0pqmZsnwNW3W1udYuJdPxctUaUevGIBDUBRDV4pgZx7WNQrLECviHMzsQrOY6RprPjnSJb8GF30%2FYwcHTI1m7wXVGr2i1FMyMcpD8p0vWWVQqnC%2Bgcg6gBS%2FjpnmBK81sFJUL%2F7lxSgget%2FgJ3722hHLjYbZY59lOZ%2BK%2FI7kFidNyB%2FvlaKo0tYOcBTK7Avi7i0Zs2DCZjUhkvecFBXwT1ZRBCKvFWDnjB5CcAVxyF4cP1MsiR1vcHA2LWvZi6Nw3Q%2B9GHYIIfxe8yDUwkNP%2FwAY6pgHpjpkdbfoNSZ%2By3zljrZior18PJPw6S96JOgxXIg8VEvrMn0En2PKNaTHIPtgNpybXNac%2Fd8mjiuoy3XVkD%2FkAPVKd8Tgg1KGt4f5gBPMtGj0R%2FA6J0emTsRSyZSdvEzAjBBn13OgOrPX%2BefQZOahAj49zmZ%2BcYdNUkn4Z2p3CrscTbjw%2FmOCzjsa47lGxtlgrusgCE7nSKeYgqwhpUTHu%2BwouwRTm&X-Amz-Signature=43f8897aebb10f57b60c9b0114e232054e93ef7cf57f855d220d7920df3cf1ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
