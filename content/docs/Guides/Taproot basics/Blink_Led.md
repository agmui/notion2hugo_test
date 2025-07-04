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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634MJS2VB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAJuLKpDLWEkHk0i2F0MwJmu7yJI4wZDgCMj2ne2FcTOAiBleRGGLuXURbcObQyoUSmBwVrT6giS92HBlAz2X1sQEir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMk43cfH50dLtNNUn1KtwDairskU%2FHMEQlLPEE%2Frb3CKNuQwWxg1uAOHRDqBPM4g9rSt6hw2SQymXi8B9OKjcx5mMt0TccYd4TnR%2F7IALqjB1W9XLE6jixPGYFdPpUWP%2BJ9%2B%2F%2FEZp7OwkuYnGhRI0GAKtaeMuUg%2FsfzlTdC6dxXfDa48hxHpvBrfo%2BynmjWA82ysXQuuBC4PYZLX2a97JtWSoLTMS1SoknEszw3Ce0bOSlXeSfVztXqbQN%2F%2BQbMB%2FEburmmBj8A0Ip8MjNxucSBmvNgbJp2Y6kNjpUJIJiihKZwKzA8CyuuWLUlq1ZTj1Nu%2B4piPD2MRdvNLMjAI12CGCNnIz7qzJ6ejPrzZzYhpaC%2BpP60b4q7Kid1VN%2F9eSAMYPVlflIDbLjcboE3vAfUtgn8sPX8qWwYU8u2T2lmpdQYsK%2F6imZlHe5YcKUTSbSL790KOFIWrochlSZJ3QcYd6asZCCy7JHYqgGoVJeqQUtieUfUFunubUNKPmxcs5bntMGd57llvdyDgnqQ4QhP0Jqx%2Fp9TM6CxJa%2FF1N9byiM7lGR3acm7eTZutFiM8jXDAqiZ8B1%2B%2Bo7oERbctCm7cVXC6S54b4I6W5bLHJipQmscy0sX6bSSyQh6GoIyADga43o1iMVPRxH0nYwyOigwwY6pgEFOlcip%2BflxVueQMnAfbJlgz1jDE0CbRQN20tjW6y9trQkcmq3jDTXAhCMgUPYWLALg6QQ79%2B%2Bt91cZ%2F2GiK0RdO8Fvc0hQ5c%2FyBkj2oolEys%2F3XWAinLZGrQCpGCTfDnpxD7umxxE39EBwPUPf%2Fh1xboUO%2FT2if7udITnebLJTukK4oQtwsx8HtTsHRAuCi%2B8nPr3ZTcRZbyc6Q4eJfNXTuNCltwr&X-Amz-Signature=e391efef98c34c2ce1d7fc6f92fd252028d33c9fcdaec4dfedea0df8846a121c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RJWHSA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCtpwRtpQaVIxd1P%2FNvWeHIOKe13bRjg4tsntJf%2F4FU0AIhALC6vTMi%2BVc3U38a77tAXJT7lB2GjQwK2B8QVcGocdw9Kv8DCDUQABoMNjM3NDIzMTgzODA1IgzZkAZc%2F89mf%2FoH8qIq3AP0S0x9%2Fj1PgR4xC2KYFT4lZ2DGKdQgopxy7h03VI5pteyMlV11r8xVxMpvMxWkIh1lJ7rdqU8sBMkjAyixIwKVluB5cW%2Fqh88K09TZ0Qr0zL%2B4dbqcQpyuqeGPMyTfY9nAH2Eqo75B7%2FMMUfbBrSEiJoLZQcsdNVp6zmO3Mdz2FHMaK8OXDpV01VlFBjYUV7EJvhcEYNQR5sSiFQiTCepK97ifjgnJNKrislfpUou4lyTEXQoLUCn7BlD3HCSOozqf1UfSOXlW9UIo8r5%2BN8kr%2BZ39OZAisJ3vp%2F8jxWtsyKlafhq2RQ1P%2BlOf5Nj%2BoxWCt8rGGMFnf7xovY9Rn2SIjnwYRJdfyNGmxnXOLOlwzaPDP1zhK5hSCbplqrJ48McNgkrjOVR%2BOV7lPNLxS4dTb34Huww1LrZJA2pxErZ3NuHmtT5J%2FjMybY%2BW0Pb4NXfjJ2vCnOPFUXwIh%2Bql%2BPOdZ9Fi53bxcRyjzOLoNFiYtxjLGjwYDl1K6SeIU4bE9C%2FCSFiKVBKLlv%2Fjj%2FF0ig%2F%2F2eXmo7NkcZPyLxcEa3dh%2BqDsvqAwxgq4jnJQ5MojGo2Dxu51ueBxoqUhnH48moyIvBpzaErM9rHCDAPZt3DxkuWl7sZAy7%2F8OCXvhTDp56DDBjqkAaFgmo7yEhzWqKmpE0hJr%2BtJCPJeGXSOWJw8I49cLSR%2F9NrrLb1o8oe1yLiJbOrl%2FHajN3W2HzxB30dADzx1i4XKwAk97QSEBBOVlFKb7jJvE%2BtzM0d8AmigItpwDGtniKFsmkeQv6nCQ7eDZbLxGvXOPhxb8doPVzyXEVydMug5TAYinTJHSxgmZjToarRfzvzn%2BGBnWPKmG%2BW8MGY3l0PW3PYI&X-Amz-Signature=eb973bb56cdbf3a444348b45a4c0552857fd21a2568250026fad9fc1242b3b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
