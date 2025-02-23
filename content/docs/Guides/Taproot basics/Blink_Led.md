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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYMUYO3X%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T060953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJQSwCdABCvyWRfRL3RPlvWQxDBrAkYtZpUCiAtHbz0AiAg5O%2FqMI84mipk73SBIbW%2F5OB8KkRLQQZh%2F%2FgmmzXg3SqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKua%2FDqUiv%2F4eeAQfKtwD366WXrNcuFAdTywXuEWaA2EtROE3GbV9zbhlqQmrCEoSjGzPU71sIco6buWUJFCguYYgfuBW92%2F81Y%2Fr6oj%2FKV60YW5hKKB6Xeqx8iONK%2Beqv%2FaXVdb9DNigPLa%2BOKBf9kPsrG7wHAag%2FUtZ3GN9%2Fx5Ab3jJgJl%2BIHt0AlaV1vq3pp%2FJYczPb%2FA9F2D1NTU0Q5TdtB6i3ciaNTVWc8ReFY3gO6cjG4nKmtNuVtNUH5p%2FfjN1Yb%2BPGsFlbKCqkRM1Rb7sEAsIjs24HjUh5NCbkrf8AnMRpZ%2B%2FrDmrQPkuJlKypCQa8AeWLX3tKY%2FU4HU%2FSsjqchPhGk3aUsGmWSjk1XLnS5UbAuamKuI1LO3sALBiRAQr3n%2B1BPOMlgPuzEAdgCfqk0p7nKoWSJ49L6DEMju%2BXJdGV1Za26LP7eeiNgCxHw7d3m0q3KZnJTc2Au2CzmmnNGTUkfHT7SOVvknZ4JtiweKMvxIydwbJmsnA5KT3aUZ8e6ogt56AxzaomXzOYXr3PyCVL%2FerTl74lYjQ%2FegLHnr7a4X3AnAHVFu331we0vkjLJNmrQpSY%2Fcg%2BMl1hmb%2BEdDV6QL9%2BfC4kxiuCOGFgj%2BvdKLd55nfMS8z5Og2Vb3fgrRsqo8%2FPSAw1cfqvQY6pgHa%2F8eM61zxDqsbbwIEEEEux%2Fbzz4f2l4IgILO%2FwmGOFUb2pmTefzUK3JjNPoscVBfavHMRoLDU0GEIgVPBbXABy4RmI5eqYmLPh0ufua2kY%2B3UnBKwMm%2BOsow0jAUwpnKCKx8UV0a3eSvnj%2BDdpEW5uruGdmUlTQDfHIaBYU6eEabciihjLfEQbhzDqL8yzgwckOCbtoxqzSqGadxvtmYst5VLESLe&X-Amz-Signature=25948f58edce0be241e72fd1adf6e2a8b64d33640278b0d655583cfbe0d2f954&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FF4OFSJ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T060953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG%2FCbK4cDt%2FocqETN%2BikhZ07P3Wj3hed9fS395wyCrgwIgWavGlcvFQSyztoAjeS1piFkuRC6%2FTHWGDddywBXYok8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDi%2FPXmcw8Tw9qExeyrcA9UvDN%2F4iIVI2wV9AkJOcTMIrphKPL%2FhjhqPkyWjvf%2BwwCKH8LgFkfAUa9UcBuhy32oyOsRBCupOrBUbZCgHsg3QtkaLcER0q7tD%2BOqTozFWmQQzNZk3U5%2BERspLSdUFTMnOssu4rszHl2hA9bX3iY5IztdISasAq7hqofP2fsirtPdE5uMFGCa%2B5OufvLDq%2BM3aU6VZJfK%2F9KlnHbCvVZ7%2BxLh%2Fx8aw%2FRVFgUtOwtlj8wOtOY1ZRrlRVfs7pPy%2F9jDeXekGCWXAXdgIU25gjkUtcGcAIdwZk3EOMlQXVKm579C635sb4TJlyAE6pWv6C4FzDEz%2FjGJ7gHbFUHHTdv%2FqzdKF%2FnUaqsGl07EXZ1mV7MPtpVGv2SJI0KJEkOZ9hQ0A6bktof3w7QqiYoyI%2F6RUOjVlTPz%2Bmnbn5Yn4ezE%2BwHrFuigWDULc84qCQ0yKiM8bWvCHraLen0DWMaXtk5G43JVNXVBZE8QBO8PRlAXC7ZZeEWtQbwO7zDPzfuW0Ulu56GAFbR3dtZqrDqOawEh5WBHYZ%2BMiRfJeAPEb%2FLHWxVodXpxnjkF7ZTspsJWsKfiS5VUJdUmHy9KICe0zc3Zwj9KNiNV3q5llN2yCjxgwJk2h08cWh8utHgB%2FMNKt6r0GOqUBEDBfqqbuXG9NAToAlRzc7tcQyhQIbC%2BlX7GwDQcXqMaOwncuiksrxoSH6SaOZd1Jhw1kIKS54MOhFCmFtx0qyLe346XDbCuHtLXEY6T%2FcGDqMjw2arQATpqkDNsXkLnSOJ%2BLNqaCNjHLYH5VyEeMglwVSwDwuruPdAPBGPSrc6SbsO56fcFSfyNKNS4X28K5%2Bxb0JTIhQXi18UgzPqhCzKrcy2rb&X-Amz-Signature=242d4bb8da69ea223aa5b402212aad11baf63b3ab075c7e91d4d0cdf44777f15&X-Amz-SignedHeaders=host&x-id=GetObject)

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
