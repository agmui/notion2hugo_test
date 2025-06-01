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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWFKERNJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCgnmlWEwd%2BOcaH%2FUq7bsDaNibN7mPCszt%2BKdypuF9BTwIgWaXzkw48NUWfuEAMAwyKj7i5U6C4DDmw%2Fm%2FteRSNgGkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeXkGZRznJFKRLt7ircA6QpxtgXwQyoS2XLWbqw3EZ2p9tC6Pf7mrG%2FldhXhjVfpmHN4W0xUqpNli95U6B4RLgVHUsRua2NkL3FTmfS%2FSvBiaGEGN%2BVYs9Spa91Fbr1Q4rq%2B4Hd4uete6BPRp1ZInHYTyUHasFbA%2Fs2RKaeBm50qpopzBAIJ10s9m3z2e0bxaGJlgoxQmGjeLjOwwRf%2BMND6HFcknGIYko77JpCKafOx7Mrtw39Vksly7m6eI5CTh4diGoGuC%2Fe4GPDE7QbE427uU5Q%2BaBVuWaIXWqfEGLOjItMsUdIukCh3dMSsJ8aqqv2cMP9DD3qbAHEbyOPiumMf%2FJw4ScSNiYqTtSxEltFkYuJKrU1Rw%2FMb6FGAk4mbtBQhYrEWpCn1QxxCZjIW%2FO2HLYHrq1jLVLWcbyKf%2FSeZqOxrnfmJvz1LbnfO%2BsCkxMJBy43wtSkxaB48Qs3h0QeFM819w9chVtbnltizKJ5BiTwdAvgmyiZ7avRwWHtLhhNlTAYsFpR8HC1KqcHv%2By2VlQywbYwm2t3yRAiFTZNQa1ez%2BKZtHU7teQp3sTd9UgKMMO4%2BEoRWtus6x%2FpdMqzS1dUQbFKufWTQrcuIwusSmsET4Iil4bw2oEsKHapxaGYCERteSBFqYEJMNXf8MEGOqUBXDi6Ye9rGja6SwthXzuFG4qHx46VQLK%2BmcUB2MA0mmW59biWXgXcDtLDp9bGeTWl8eg9HNoBuZKkS3YRI5QjGZpzTK7KdCLxIKDtaLGxiogZz75ixmonWesxxmArFMjeEDn8v26XygbOg1Jjc54g1oSWWE%2BGRR0J0QtjO45CKriVLnpU8BJfRYsu4%2BVyh3H7WFKhBXTQS3vqQqQ0gZRqD9UMOvYb&X-Amz-Signature=1ea081f123b4109c09cda55b4d6d2d3018e6d35557c5e380411b5b269b592680&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XINR2O2C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T110149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIHJcCeKb29fMBXRrDhtreG%2Bh7C44xYFPGh%2BtlQZJpKkfAiEA3sALhX6OyQmSUcUxBHSAgGjrwlXt1rCXGpB5YhiiTmUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCtZ3MWFu5%2BvxvAQircA%2BavpfeAA9%2F%2FNobsECqAvrhxgptTdNStVVIh%2BLJgQZV%2BJiQQA5iZI3jSsJm5PrrfqWzch1iWJdDh%2FkShru2gx2GM1%2Fm6a5b%2FxsGyzqrkECRlDZVA8em0D5nEYEB8NF2%2BaWaQIvwY%2BJpapeKxuo0Kk5NIlcPyd%2BJ1km76HQjHXU%2BiWViuo8b8A5D0s4kXecVvouI%2F%2FxFnYx1tBNDzFtpSsHsMM696mFVBNoONb8ghDItbxGvt03wMrRkvGSVvUWZn7R8q%2BVgPNbXTOuPCRiw1Y%2Fj8WSVS7qYgYuOkyUyN9kNKk7aS4qapf6Xmdci1XFRye5yXZjkOaKOhaC8RTd5dDGZohl%2F%2B%2FShs4j%2BiFlIlon5V0xQsVOAlxK1dmnVLdDhP5XwYE1XwCevIfWvvrfRAmxWcDOyvYPzxaf%2B%2Bb51ZYn3BCAheJccOJIeUY3VMIez4RwOw9oVIKD5Yj8XUhfoiY%2BXDP6JKgV6cXRqdMwKS5jk15rchK68sIvy50HoxJrXTWVS7peHKxZU8yk8LYHmEvhEd%2BSdKAZ1Pfa3y5d53ZlxpyYhGYnIw3SKQXT4uA5P9Cqa4KzzPGJ2HHJzeBAQs1TVJpYTSa7wFFtrYTokNA3WgdnO%2FVMG3%2B4JWCPikMPje8MEGOqUBSx9Y1iaF5flVWNiHyCbpQQN%2BFOx4sHlxZ84U7oVGLURJF97nLoZR6Asszh2VJ2xfQY5989J5I3ExfQDp10itHDEKk0iEZP%2FsXvlicF3nhzrRq4zbSJKmYZuFnnZ1Tr1CFq29xN27S74rhwq233hz2o1UKoXRgBzrJLFqfEg0Xh1qDFvTZ5nxfrFaGnU3ImZT9NN9raSUiq8ESRqINXEpztfb2Gxf&X-Amz-Signature=856f7d15a28f8adad677e96e11ba6c3e96274b16ecfe8162f2811472ccc58c51&X-Amz-SignedHeaders=host&x-id=GetObject)

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
