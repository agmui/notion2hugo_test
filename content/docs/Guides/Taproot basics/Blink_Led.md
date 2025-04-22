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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3AF7ZFL%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIA7iUfNhLbJ301UJ8kDpuEBNk6yKPWT0vTWRrC%2FA3DlBAiABIn0UtX71v8Y6siWF2oD2gMX4FuO2sUi4DmOeaDlEiCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7txj0tiQLveQCMoQKtwDFi3WPfJjtMPd4%2FnlYLhUIBm1lvYfgSqar33lz2oZJRgIAqRUOxcXaivLx1rIh91ozwJOEsCYnSwe9HIDIfhbHPFv0a8sVUrosP%2Bm%2FUIvJvHcIrZdr86GSKA1WhQ7XDEH0db8AfM2MmItxFemhpsIiEH6qkh9U1%2FywRL5TERrpLSOQ5ijDNnNgwjD9vHYRJhymfRkN4pyPJ8ugfETJnGlo%2BlL77ablDiGgS2ai1%2BOXAreu39rM1m5PyftJIfUjXgRBcsM87lG5JTlXBo%2BKxycrQblfFKf%2FiVJJHKHQ8jDkkhB%2Bmy080W7Z93yRvsJmU1TtF9TXC1xaBGyLInGZYBHPhmOsOYuQQobw8lIjVUVtd4EbBG%2Fw%2Be6dEv%2BQXxA3rmR6Mh%2BW1kWPe%2F8EKdDsszDDByJeSdlclJ3%2BdfT0gKIYZ5M2uiJCw0ntwmo7Mw39lCUp98dJEcVwg3YR7FJ%2BWTSFoWOSbBlfw6vkTHObAi9VQvi0i1Nrd9H3q0wuLLh2pOZcXiIvwFJwqUGWT3%2F5JNYbZYuJnQrm9T4tAs5wjzloT2PPkuz84%2BrLYFTRPFFEHHa9xfDHdfnjf668UfOm6WPEeSnc5w2b%2FwF78nttC8atucghKfDaC8p9Q7BILww0PCcwAY6pgEOt15dS8uAzSLvpyo3kwiQVCWsSNsdeJ6o7I7mghMRj3K2R8xid0TAKH9R04OfXkNWZchW1%2FZ1JM4%2Bs2HkTUTc%2F4GfE9xzBEeQZxyvHnscOk97k6XTxmmCKJEYQpBOiEgQxL7cHro3X59jN16BWfPurU299LhVTfE1ajJ%2F6p6OZV2%2F2uqc7XrFpMjd2DAv6iKLhXK9%2Fzoj448BB7OPpWTd9TV8D6ws&X-Amz-Signature=a6fb3c965545b5e599ebb2daf178bb799619aa248c83e23d61246bcd011fb5f9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y45O5TDT%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDR%2B93AIra9eDAYSyjHL2hOHkEdT7hRgUbvuXDsLE2YqAIgM7GgFVZrlo28l%2FRx3dsIn37wJGvmoKQHDtoPXOD5XRAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDk3GbTOwY4g1X8e9ircAwUcXEuFh96S%2BeHyaSGxJooj3kNHsI%2BNIauopgAIl7hh%2FDj%2BWNNvarnVO0Sbf7yULXYM8jQh6QuAz9Jbnj%2BdzJUK7TAF0XMlNTSR2269R6KCjw9BrVS00lsn3JFX1C7BJKyH%2BR3DkjsXSxEtGOQuy0c00VElfMB494TTJTSsFubEx%2FyOoMjFUoRgMUe9svf%2Fh53tHYKQSdyrLlrLrbcZ7AufLwE2RFA9ViSieVgugEw3aHCSCoCG75g0MkY5gIcASwGTj2Tq75wwITQbCo7q1DeKIAelzNgJXLrVCWAp8%2FU%2B9QYSI0b98AhLKzaVD77SCQcGDdmuMAU6FVkyoXOVg1Np%2BqhvkpqqO1KPKrvgI5RJdVnz7cDbw7qeK0Qixbe50gkKeTsdPmYrt%2B5beaOd84%2B9ct1ZaDv4kh5bpf%2FRSnV827UQvh9eJGbxt5129qqh2XclSm8gbxpX1vDThxvtEeRe0mQeiZ%2B%2FpE%2BPm2qgBTjpsbKlGbFaABJN%2BsdIP%2F090OtZeBpOKg32bzChmjyHp1gd5wBqAQ0Uy5e%2BxATRpS3LWmMhtMjXxtkqPlpZkXzmtgh5IqDvo0Arei4J4p%2BX1jktUVu%2F0ULFBDuLaeEH986gG0XhyZJOG99LNCmnMIDwnMAGOqUB7U3NgE3W4RtnWt6KVlsObkR5Sf9cfEcs0AiaAm6bq5DKS7hzjp%2Fh%2FUf5wUKElTNIpKupCDE%2B8JM%2FOwrrhsWzcHQp%2B32veDC%2BPcNxR%2FuNtNTa3DYa8T1gXPde8uQCpEM6hWb5fgMed%2BCEn3E77zCanpurKUuqItAYc6LctOhLQej7H8tVmg5tRZwr%2BpTKRsRM5fOHMqJdCAKN9BpGBM6hJTUJ6goj&X-Amz-Signature=24c06222205d37621014f4a5262eaa8179c38cec5f09f0235a6906463ddce650&X-Amz-SignedHeaders=host&x-id=GetObject)

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
