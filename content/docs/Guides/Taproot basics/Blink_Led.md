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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V237BYGK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHwnINox8px0aRLlV%2FxqcTHp6Eo87d44JGIXDcBTnys2AiADIknoH4thehvXZtO4S4Ui4tyjk%2FI%2FXYbTxMorBI8uMiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSgJxB4%2BfkocArtsXKtwDsO41M7VQc%2F3egsb0wtzxnVRJCQIYkp6hanqGojx%2BAbZjp4%2F%2B4kGmnOS2FIV1Tux7cj8zUqXu5WKhyLgyGRUghcuyScmITQJ7ph7%2BuAimzJkEIL%2BTFvQMMIuFQeP6LVL5JNfSSHpY4p2yF5UhZpBpMuFrvhWJVZAqVz%2BXMgsuzNEgHpi63iwZiucqVc9ultGGqwhzJENBodZv3rMscnrJiQWWQ%2FkyN41X2T31vMhnqofI%2BmYJs6JVx0CTK3MhzvVJNRfkilhzqHf0MA269GDhAiz0PyYr1zmW7lOkjhwoKgTnweM5v3gcf5%2FuTwBNDb0QD2nEzAXgt3qNKmRhZTPq6O%2FHr0QOL8Qg4JUSfzZdff72CJONGnQ5bCF1F6Axs%2FFtWMnMmEsCOzQyhpNCSCFTuCd03DMxb8yH3EIxMoNcauUYHMG%2BtjGac67K7nqq5vUttoKpwT9X%2FWGb08yxxjq03MVrzFNHy643PHXLezxXYPQyNzwNMHFjeFh8ofDLTdgylByre1hAuna2sd2cIdudoXNb8MqAvD%2BZGOfu8g3QSGE3KiRVtP1k%2FcZpDwvH368V%2BpKgZtZs9ZaYbNR5Hfcekg95%2FIdUkxVBF%2B2vyyuqPvoohl2NX8EsTdNNzqcwobmrvwY6pgGjJydWsKtTi8f6qYzxmROCyKkSHu1mrTGC0CwfRdNJg8%2BqFCkmS1DDsHekpFLQ%2FG7hHsMZ8VnZ9jWTe8PP1ZWf0gnhqKhNSscCqhAWiumoTyH85dDeRwKk7Dgzk6oCUNgciJiBD2nCQfuvXTCIMENYfk%2Fu8asbpnRopDB0IwYJYNfzB4gK4D6nOilRCUiaSQHFpcfL38TF5oLbm2aENPPmBZT5Pfg6&X-Amz-Signature=d932dcad1d6f88f21e0bb05d24ca60698af1989dd389e3d95d87e812611b2449&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IFXU22I%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBiV%2F5rNQi58zr0xCVpx1p3YfyHmwtzVhAcPsB2qrj5zAiEA6pa2y9%2BnWgv4w6ipkEkzZmQM2gHKAsseI9%2FrsMt9ZLoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8dEfneXIiuCL0ZBSrcA4q0TS%2B0vVzeevuPu0vb%2B1kWeQcwq3NMgd3xeccj3OymKsfEfaxJPyfcGSHXt3KvacXzjiGcicBQ%2BRgQvlt%2FQle6X%2FS0X0rI0U%2Bpe9DpJtbt9rBEkKOK8iZZ0u0PIsoMwsvrDNlG98L6A5gSpcWKidFL99F7THVmDyeFuuQatp%2BeDMpx1lknqyssvrn5I68x6Uz9wD4HQ0ONUS%2BmEZrnchldbVeTvBkrPtQa%2BfeH6NV4efBSyvYiD%2FD77sO2Aj8d2kwvTawv%2Bg1dgr60q%2BWL7d94%2BUUbrDyF%2FJbEiY%2FCCm93u5rCUrbWBmvODRlsBdxRF7mhPwJphfb%2Fp738BHLaEXPsyT3hy3mkJ4rZBGz9SrMGkbLMwr1m1RzcyBI8RYBxlXud2zkBNUneCWt%2F2LF%2Ftcc6x%2FJ5837b5Z4hXvk4joTs9KDXiP2TSLsBuO9gC7yqfR%2F4xRKatIAOkiO6%2FyBxHDYTyqGDozUxvJ1glFIbu6SEEBECHGbB9nVHbFPpuq3K7fj8aWC3EQPhJcLtbaH4632mmIN75Iv09j4%2FQFU12pNzIUGi7PkloTJUn15RCR%2B7dMxXVxWEkZKUgnAN2vKod9BUgBkASSFnbAwNcp4lABXBXtlJgnwLY7zpsvC2MPS4q78GOqUB9SuyEv9IiZntidEbslJ7JyBS5Pwznwp3Fu2UDIg8AnA7rp3Tv%2FFGCAp1B4Rjru%2Bm%2BgmZz1JCid0zJt8NcD7WGvqHdyJayKA1C4lhsBC%2Bqu9f3GmTzepNc2rWDXojhW1D0%2FJGcplzW0XeIXq6lUWMKNztqKV4z42SnaN25yzI52rliD0HLxYVpV3yN6tfzc6V5oeCh9N59XC6gkTcS3NHVON1OUUg&X-Amz-Signature=c69c580b588b6c01715653a720272c327500db5bcf5a8593152b37b0cae375da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
