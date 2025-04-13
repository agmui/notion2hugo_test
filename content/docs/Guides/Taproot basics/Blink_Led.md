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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2UTR72Z%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDGafJjFHM7o7xTd7%2FAumUXNMZ4Ha6zR2dvmswFxMjawAIgBoH7ZnUQe3cNwKwKHE5TdUf1vt0ojUzcldtukWuXGCAqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiSwVNosjuu7A8QGCrcA1VvDN%2Bmc5AOi1d78clzAoATPmVamjspUXIoTbFoDsAddKmhF3A7g0uknCkO0KM5z4nBassOs%2B2axMUyiRAN2gpLBkviqqX7AHsH0pyhY10iWjtSCCRo7glHtw3D4Pr%2BAQ7fYUTxhnLWlD2ao285AHAqEECmwZCFuUbYlmRHn%2FL%2BszqdCEM6f8HmyzgVP7TUksX9zR%2F%2Bw0TqCE53oTy1Wl4SWb4GU611Jyg18c3hL%2BV%2B8iIZIHRPQVFL0QCQGASGDXBt204qqMOzNUGiDgBoMfQuAF4gv3n%2F1PwWOaJjAUQgk5pnW2uAKD3U86D8MIBeCuLj45fSctfQr3OeiH7upldxjARXDbfN%2Bk%2BC7yGoUIEgvRtZZz9Kmj7%2FDQKcyvVErt2eTwEjPcIEZ%2B5q4g9X96rXyVpXQ7jKnnw1fSZC6RkeV57oPg9s6tCPC6k6LYo%2FBrONVB%2FoMTsfkEQE8PPMSwpKSRnB2AgbtT1EE6DmTOk%2FGgougTLqvcwrFvQTWdUl%2FyJnhv%2FvymSj6gY3uSTAWonaYWUsNKkLv31%2BR9U89RboMQraXQcz0C%2F6BV50JzIqmxECsW68Vf1%2FWXoYeLXqidXmI7FL7lLorKbfXXgLG5q2onylm0gvHZMSk1e5MLW97r8GOqUBQGJXS0Bh%2FfRWYV4idgWEBt3JJMzsEcZButxzsnge5e%2Bpo%2Ffj1lopWsabJJkZ7OIvpM5hYWYXmhpGIqBNQqknh%2Fnvk%2FeMFOmIQmVgmLfAhwrkzM07Zv58xpVzAEWSImhqTbkcGOyKO5IwMZw5gVl6OAiZ63SmnTT%2B1QcM9fB9SvAxfrPWFm8aM7j3vmSLCkWFB%2BaLQR6Mn4HNcnj7ZOCKel7g2G1d&X-Amz-Signature=874d590411c6878087ce0843576657bc650d4f12a4fce0fa52985e7421661710&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHSHBZJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T140102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC66qkpwEdfAQtQKI%2B%2FpYEZ0nXu2rC6nbzZ7soPgEClVwIhAP7vj%2FTjIqfrAtAdPpVRPDGefRErO6EbgUrO8XfR2K6OKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8sN0uzlCaxxTBfRkq3AOjvpNlkoQ07EfAUbiw7X8JJInQC49HYagwFWr0uaDp6JtkfvM%2BTR%2FvHDUXnwdqmKM29yqlFaXkiS91g4DHXuphNUGoYjBHvd4ml1ti1qwR3jQVXI7jo1eO%2B%2BG7DRCGpufGDEB66ovARPnxpVe6pMqUGZpqjCrlzT6pk%2BQtvSoisBO0GoEOflKfYrB2nWh5k0TWLhMLDFty4zPeYmpbxdXaqluoWq9shui6O0py292BPKofY6hD%2B%2FSc7TodPCSTz%2BF%2FMLO0MlTRh5LAGfj4XD3nPLE4j%2BDe07EXkUVr7AkJ6fHjqySH2X0H5ahd4DDU%2B4Xjl2mJ3S%2BbiMb2mXFMFnrlKKEl4u%2FmuHTFIPyMvd8dpm%2FD4%2FQHM9DBsQmO0rjz0A%2FTga2aQt1K32nl6uqXiVNprtlK5%2BeUtjfB1p1mIuGxYZRLGq9iuTk0jmTMFgDW%2B7v2crKDdu53UBU0AGpMmCgyvKZI084%2F28bFgqLwdRYU9%2BKS5QAvd7Z5KVlDusCJXsiMk1ld72t8AvtjdxuaY48SpV4NQIHfguce8LKigrK8S5Yl6NHUhxdFNn1pUWhOO%2FIYhUOcmg1W1o0sksAktSYziDha2IVmOdYG9hPgHXsUKGv35WvgVadheNoxqzCNve6%2FBjqkATsYo%2FTmI3VpDwiiZcHtqZyN73lFSp0oXly0dwUFGCyrfAU9Y%2FvOFwn1rq2GL34OJrInOYWEBmAeNuyjzl9hAf83N01FqnA6ijwducyEDVtUW35tKVsZR9Wq6Cs16H1wD5%2F%2B3RiM4IobRsNXUEMScOTNGwq2JgwbNwbMk5VPYr7ugbnV5LWabgKxAT8r%2B3RB2L05MqTzpx%2Bx2dt8DNHIWEHiI9CF&X-Amz-Signature=172938c52709f7eb0fe9d122b509a2e4cbd96335d4cd2be7bcba8ec3db8c09bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
