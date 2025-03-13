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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK44OVMT%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCYJJchEGCkTAL9vEhLLLRmj54oYDr8nGKjUDZXA38GAiB2y3vynECIko6Qy9Mp27VxAbphiEkTbEULrEZfB4i%2BOiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYS7Z%2FthlV9KUWHNPKtwD9G8oCXXzLtGzbnOaW1hgX2ahLZXmpvIkQVZ4lMkQd5GupsQZZNehj7um2q3PZpTz%2FiaxOpU9XqH5wEnODde1GgxBpdgi37mkbCAC1arS5ezL%2F2pQ1VeAE%2BpdEl%2FibJIfODdqbUDm2iJqL6OfNsxVYHnOVwhDum3upT2zTtuh3JW1aEEg6XHZNciB2u5hpaeWvFv1Ku9Jh0GH4ulbP21ZBgnlxWuuKVDp3fOzProOKbI87L7lgq4TG6jFXf3uWx7vED4nPl80YJ6ib4shCK%2BYTk9jtqjOSL983ljrzdCik0J7GJlBM%2BnK7ckabuiGW7zOOaIdKY%2FYtySvgkh5LOxkNtSlNTbFsqVo8sRGj9YGnif9yVo0RxbEfRPGrViaLTifxKMF3lLqizlAwvnHXXjiPd4eUaL2rxAGaHhp7q1XU%2FcYqyPNBmEfG%2BT7uTMCbmA5EgYjVq%2Beds19LGxU%2FjYDpfPMEqAh3zb2bmQetIFYfOdANMSD6Qj%2FRpl12LWNLaGQWRRw9JKWw4YIXf8Ij4IJMc%2FVIwmRHa%2BONDo6y0uamVCXo2fquv0lfMuYTOnIYIg2j4jScM%2F1YLJBicDjDtRpCa20rcJ3EVbFLmKvsrGPw3oxUPvnWMVD0KhEmeYwjJfMvgY6pgHd3DaeBXZ6vtrcZF%2BXAGgQFwcb2otoLRoyBYJmowiIxEd0gjRgxqifm5mGS8m5l%2BwbhajNfFjpLHukUJWjxhYDiPKsU0%2BJkS5O%2BKjokKXqRM1WjREWsz46NvsTW5UpK5LmOlWSzKnZQeFtfwjmWZ0gaNR114t5f%2BP8CZa2JEgdJVlFWY2aTXlJjj1IUAokXoKYRajWauJwcmOzKARl18%2BAcI%2BNhQ56&X-Amz-Signature=8d3d740b5c3f3fba8fd87b5bf702e9bfe69093e80b021d6459aa58b5eaf637c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7XXR5H%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCo2IafqbwxDABLgtUzGGvY6cO5FN%2FG29LmJ3%2FAzCm0wgIgRLFIo3cdEgad37RWQEJtq%2FveQeRBhMQ88vbWJXp1paYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt7IV8Ua0FH1tHPzyrcA%2BTyUMEjUn7t%2F3cUMb5zy5%2Bll%2BQ4qzBin9C4tnCq7ZbvoojPc0T2KfeNiZBYh%2BEF1m94461Im%2BDN5OUm01En7cmFMzPNH%2F%2Bq9aXUCYdadoBst8HBKAb4Ffzal8uUkUxKDjd76fTBkYTKaVN%2BH1Z0DiMov3%2Ff6rEy%2BnWc20k1QvesIZs3C8uAD8j4UIP%2FhbVo4Nyv7u%2Fagn%2BuHO0OoWq423FyuRncWZhjYJnph5VOWRBD08mSohp%2FjiYoVW5ynkiB6gYk%2BSOPOazTXcTifvTwP0qILqrI8LFXNsx5Js95V0XYtElOdiCVo9OVmHvZy8PczPZHk5Pk88CU4pXMbFZgjLpUtDjpRMlqwbcqsy8orh3vVYcgWFsYwfKjb0ixej1K78mAh3%2F%2FqsYCzkdnrzlchcAXGqJKJnGbSwYqYnTLrl6LfKt%2BMI2WKGw%2F35FwffH8KgD3iuHF4ksXvm%2FGlUvaNmEl06UyK0HWnMnZ2mQwtDefpnReCfcL7XCXQZ%2BRv4XRclgcoTxZSaGM1ZL4pUxTCBHQ9B%2B%2FEY0VpyXnus8mTM%2FYSOeZ4TWIG1dvb02Pw8jzCtCefMFUUfHp%2FdQwUWktrTtYMceY8yVyUc%2FisMULhO5m2Ux9kv7ORY9jAfrLMOWWzL4GOqUBJSl9NY9r%2BSUbb4%2Bn1kcmFL2rpSoWRgT8cPJD8hdOvVFRkRFtZrTp0LWMTLhb2IQaPsR5Tw%2FW5r8vNWmbMUtN3HEgvJB3lsOy96mwF%2FgXshOSjWtDdc8C1CRfgao2N93jRMcFxm%2BH70f911aa98OK47oVCjm99jy84Ay4SgRkUztvSA0QQPYrjGCe0TGchn7%2BmyMq8UTtxUAJ2vkKnUJ6MEQmyJdd&X-Amz-Signature=8f066040cc6acab011bdd63fced01494054cbd27a05c7f5a0d22476ea2407949&X-Amz-SignedHeaders=host&x-id=GetObject)

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
