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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652JPYHES%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDHYpCfC%2F4aXtRHjQmiEjfBgTBqQIVv2Mu1TvT4v3I6MAiEAq7Vo0VeBcCQ9eJvhTjAASeahBNwU9VxG4SE%2BaTgc%2FGYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPojD8OcD44Tx0PwZSrcAwACKAL0KLTsu93D%2BuQs6twp8MqAeJPxgHO%2Byx3jt4O4qvfrX6uCrA2a%2FNJB83c3k5YjWqmYAYgiFTc%2FnNVqudVsPNhd0mYjt96kQ54jlur7NAWr4fuPdOgp42HJl%2BSWpiI1W3M8c%2BlopH8e9qr%2BvS5eRxaHHIU25L%2BjUCx4%2BAaIoKTdFdwx6In2NsjU7Xfm5FNeu%2BDRLdgoRkIt0WS7xazXWKBaYnQjbW3WXEub3FpdVuPzM1UJr%2FvHTfTwcqughcGuuCF7E07mj3PUOZc%2BUOb77Y2B%2FMtUy8uzfFauiwTMjVNBSylm89IggTkhBJPooh4AB%2FljNyKdt5KSkTzdyEa3ngbJCDNttVeGCw2kpJ8a%2BK18DFpKK%2FfeIUg8h5PtFCx9ELBlZexbEoml5AKBbd5woM4GM9TDYttCXa4LhMryxxPpEtNp9uIGY5rHLYc%2BK1QVo4Lhnz8VEe8hWOFTNr2m0aJqIA5DqEQ57AEKtTd5cYlaOHQ41U7Ne1KPJrngChIvbY6NHpxFQHBLIU59%2FjBan9orB1uB6oTMu9VnNAChT3pMrDsLNvTpD7hFfUBBpxE8g1NtMSANtNA6HW1GZS5D7ZgFmf6NMIBsX66kO4eAPwnmNVKF6NN30br4MNCVjMcGOqUBBEFHcOZJjTOIOQdkuvbfsBMtkBLnWm6ORWtVOtNRF1lV%2BGUFudQnEfJNEAul2YO4QNN%2FSi5NbvK4DrTlgtptK25dCjc0mvFLYVng1tmPQL%2BldfOJBogqwZU%2FJ7POyhNXmjqx0Jws82UDaboKYPzHKfBCOfyrwvkr4MvKDnbMZjRUBGolQfO8eIROG0EmIdqjRtvaqzGMh%2BuGHVDRJ38%2F6OUqzFom&X-Amz-Signature=b1ba1f070faaa2e710d22103326811f4705f2d2d0a2bef732aaabe6919ad0acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IN33FSF%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg%2BLWlucxczlq8zpjBgCEvQAoh%2BGuuXrVEuoJahv5YBwIhALVZjG02bF%2B%2F5Ke4dJvXHKYBng22PvxIIgTNrxqMNEFIKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM6kFZcQ%2B6j89y75Iq3APgDnDsSUTswRJFvBnnbq%2BrLf2%2B%2BzFnK7qESfFQwuYK9oA7mATrodlZRbqz3yCVsq1RSncPfP0tmB4WivOhgQWkAQb2Rh1ARH0O%2B4mT8Hc9uZxgKb280q4%2BUfU5e9W46i0Oco6bcReFqqnm6ATJ4IyE%2FTug520MA%2F22tRtU8JU8ME8NR6OL07gDKR7rBAMXvabt%2B3MjAOXPEy2skLPeQ35KyJTdsDjewnQU6zY9UtKXzSOF0Ec9AbmG0diP%2F0jXAj5odgodtx2SjSTQwEU8BDX93EduR8JWLykqBOvZFbA5Djhgi9DW4NFsNgYSLtc8s9f3f5Dyza6GTxarhWUOu9gblebvbAjaPehRkuwEyQ5%2FQWHdcYgTVNEDUsqKgPkIa%2FQnUc08n3EdKYlj9IvJpaKfn4%2FOOODCBWW8OmBGL599ldVPc2pJpoK7lMJY%2FNRmf4fssXHZpNfHagJzkFIywvnwX60XpA0rlNAngfNbtlJf13Y0OUcxUhcR4Jjn%2FbvX54IeAjaz%2FiLoJeO49WTnEG3WUsgrXRaCmCjFpe0OYXzZWyTiTL6Z%2FyJw%2FftK%2B6Pkt7bIJU7xMOk%2FFMqTVk18%2B8frYS9%2FRwpK031PO2ae7fDgMyWi0pibCdjsg652GzC0lozHBjqkAVqXjkLxDL81zV%2FcwPjXeXJg7K9rCJ7cpmUofWoU6Ui%2BvVDqjclpRm2u3EX3C71atpPMoVFPcSZJK3TZH%2F5jE7drSoxftsv6Co22V5QYK7k9lVmg59%2F2ZPn97PRE%2FOF7xTSNjbgYw5gGigutChrFMEHNaq9ZCu90slBayt68tlDbtzzCAZt1%2FV4LCAFOvvvQDT%2BTCKSutsmZg73Mn2rcmVGB6FHG&X-Amz-Signature=cc2ff2c6a1af6890a00bd63c5594cbd90ebdd854ed978b8a4751667ec1f29875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
