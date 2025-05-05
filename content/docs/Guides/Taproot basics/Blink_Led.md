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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KULXN5M%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1TN1OLtd%2Fml%2FJzekvPjq%2BS2EoAf9WwtgP7fory3GyZAiAA0S0he20l6LH8b0EeCXf4miSoJ3ucKcUieos7x34AJCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMU8o8wPZ6ChDb9A97KtwDwj2PTu55YvrP37KG2TAfHjz%2FiS8uSQf0SJTsW0Q9CZDkPmOJXe3YVKPVB74DnPp6ChlLRVx0%2F%2B8B51APm2y2XtzoTogS1%2BEzjXW7VnyMHeYRNAERjqUbvzgtf5KvNn9UYTFFzdxiQIvabcX7pV%2BQlgQk6NjzJjwny4oZjLDmCdVIuNJ0OD2%2BRpdEMDL9loYSvVClrPP4DaJCLoy737pofSVAaeGSG48thVSWYgh4eo5ydtTsWpSY8cIhOkfaAYoLQWMERwwFRZfTu%2B4COFVG6h2zST6l5wQdsTif9Dc4l6EQxmH7CboGTiDxiOxZjTqeAQOOYqwJyOTjkoDRTHbcwJ4W2wVKhrSq7Ja8HZ8247HO12my%2BGqcoGYKFUvquug5emkcMFZAta2qCDeEymbq2YSJE%2Fwi5e6JKUlcDa3EQxhVKwFRQ%2F828umyqDGwjGD%2F0RKpyZ5jSbkbzUnJlr5asMh1JHK52B3OLF3R0%2FInbmwnR2mWGyX4WQjlx%2B1IibihiQT%2Bm89sU8UV49dLoRmgnwjQBbCBV0qxx4aUwLrRKxuLNkKFnd7As1iw8PuoCWZ1sBbVArTXtJJblxa0eae6BGV%2BpCcBGPQPMu13bfZb6k7YC%2FSBI%2Br6eYkG%2Ff8w5%2F7iwAY6pgE1UIcNCEU9f1KOtFGa%2F4mOT%2BEar%2F5i5ARjsRfyFzJsSCh1WU%2Bq2xkfFYmQJRN%2FQgxil%2FnN1W2Bubnq3tJDtLQTW%2F8DCGZso6tMmDDDpJYy0nXFKNfbBcuj8hjzrQVOyYBpo0cSSjgWRuANu54AF6DTHlK1wLvl8ABIrd%2BlmLMgi935a0b%2BsUZS3xmq%2BbCISP5Xa7UneJwM263MBhbistzRrpZyiO%2F8&X-Amz-Signature=2407c12d67714280cebd765271ff85962b7c987538b82c353a1d250407f1f671&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CF6R3HR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJl1%2Fcm%2FE%2B6BV1JMOwbAj5tu2X6rvJD4ydSqIPvBglAAiBvHJIwuM%2BNb%2B74X0gTxxU9TH2OQQlYFFnbIzDVEe7Oxir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMHGSWN5z68W5%2FH3l7KtwDjRK43Mq2a9qPJvTsRMvGyBcbjtOpf02KUlQz5dSjH8pxIWJ43DaKSW9a7vTIMHHAww4M6cYKUOPbldKBPryf%2FtiJO5YIyvN5HkvSi7bUJMZK1gqmhhO0sFr%2FZ4RFzXpFrHCnbtYp%2F2D8ze28hZrnYGwC8MkBh2QK5q15STH9xL731Ex24gnrWV2MxJMFdlAu2Cmj7UaXlyHm5IKFt%2FqYv2Y6XiIwTxa8Vth9yOdcrcjbwpy6eNMz2EMsGPg81HJnjd71bSjSrsxUvURR98umpdAeQ0B6YARl3G1LopBeGZxtGh%2BIslAX6HgkdCHeuW64j7lHQhxHmjhkazXW5J3NTH7UFwN7qHVOe6G9HEnoysKEveYGx%2F1hDhpdC00Dq2mcBRw2%2BL83q85cQJKHW%2BrtlyJD8PH40I49e4ynp09PHQKe0BjaA5UhMFcMW9e560lUd57xBlZasQCM%2FXmOuWPS9XqkntQRID5ph4Y%2BX4OYK4xZzOP0cfdmsKq2r%2FMQTbvisRTbP6rwIYHtQAiO2qx5148990LrS50tlhSYpeKyv6NoVNHxwdiUxMdmOAsD11balyuJdn6Ki26glEEfRrBViyhJUBLfsYvmQyFJw5tCv%2FQRuBo9laj%2BLpL3X2gwqP%2FiwAY6pgGsThUaHOZ0ZUtAp%2B8JcAtAJUr%2Fv0E8YcpbIYEOi3vFeJPaTKS%2Bgp2JoUEsQjO1vuXpmN6XtSYHCKpsDNQbpr2k7aOttfKKOvUuMwi4VNSxlio9kzv%2FxsS6jx%2FjmQCVogZ%2F25KoJeZzacf4Rj7ih7tbtGZpMrUv1pXNLFUuhZ1extIvm%2F9BtjSEPYeJWQAo3C9ymKKIbTejlxtwtubGUc%2F5q04Ey0G0&X-Amz-Signature=efddb398210421734d13e5120b563ec2516e4d5c5dc2563842294f35fc312f58&X-Amz-SignedHeaders=host&x-id=GetObject)

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
