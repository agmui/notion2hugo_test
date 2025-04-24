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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHBD6QR3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCEBGR3ShLdx8pvK0w4KX8H5uX%2FM3JG5Rqk6URpQ1yexAIgYjihqKBBEfP30quNtJZYEHzU3P432yHy3b%2F6pRxOR%2FQq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDIU%2BWsHXDBa6s4u%2BDyrcAzfBY6vc89V7M0Mcn42TgWk7%2F8rQlwJPadUXooR2IwJ%2FOMBoxIZrzZ6Fh8SGjfvhy5Dxb6KgxIZPxjXOxC6Q4%2FXyVLcgQOEEBbvtUzbCmpGWJ%2B8YjimilySqywwm7zCniw3WfPJapzReqIefa5AdvJYdh395n%2B1EoMoGaUu6m8XDkA2eCM8L4obrU7I0oKYMtTKNQgrPzgmrgZB3bPohrT63%2B02ijOsfdJ1cOhAg1%2B154S2pv0IlXPGJfCMi%2FKxCW7Vw7H7aDE7ffGb8ypGcitdQSBQiN8SM2Bzg4MhxxQFgp8S%2FQCJ4sJga%2Fi5jV2w6tyhKBSTNxWNFlP8Ue2I2zZLRMIbSJ1sDGsoDz8Z35G1ZiOUofoyG6XK%2ByO3eOGg7FyJankgAVHwI76yyB8BoxDOKjQYiUEWFgT7yua81JOs96MmnVNGA1ria2T7aeRYDg53rtugHVmQS08JhUBpdvHdO%2BRU0Y2OiwXjmZMLSa4ag2w3AsfatJDOqIzlSfBHvQRrnvyjOarh3ZwtV9KJq2TUo7BbqRGrjCSsf%2BugRE0hDFn2oc1I2Jpt5whk5%2BOZ9i3m%2Fyla9TsjIHE7DJMOeSuK8e0uARWB9ZdMKWYCyHQxiqP5%2Fg0ebXL22E9dnMOCfqcAGOqUBrZVSui9EwF4GxBueKl%2FwerpqJ3acj1GKip0zpUHszx%2BieodF1lb5ihrSsMOuFSvivLu3thdLXfvV6uZyPokAgX2DEr%2FD5tPcZCKXK3W4ZXikxIylB%2FzueBCDOQnbCmd94yfFTaBMH%2BrfIEPslhn1N%2BFJ9pbUW%2F7KfGAByLrUYStccx3DtnLyejhci9SUjlbjmbBaoNVjYOgjyI4bOv5bN7ZhQl3J&X-Amz-Signature=2051830856c5450e325ee62c78f50f94deb694c64ffc659ea8acb17a3dc49517&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5JXD5VF%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDm8moME9zJQKkftwbd6kKOMxmH4oO6pyJ%2B5004HDsz0wIhANRWLvWRuYBY1wDpmSO9hdeCpzQnqYF79kHe6pC3kkbqKv8DCBgQABoMNjM3NDIzMTgzODA1Igz0QwPO71%2FADyaLKOQq3AP7d9%2BXHhcyPUcA2rTeAaLggY82e5GOBEEZX9CTiUfSa6zWGsdsQIzhMHN2mWHqcSbzm56OA16e9xXBFXBlk9nqto7JWSC9xQPDvltRZIm9VZxtnTiG1Vp5YegG7qxpDXnuQbYSifij2877lI5iXjdXwi450vg7q14QLZr%2Fp%2Br3uIKp3nUS6B657bZJ1qWnRPb954bqMoVZPSwBLFN9CLFK6OwlAO3I3mp%2FzCAzLIaNXNtbKESk%2BR%2BaYoSwUQkiflcU6p%2Bhstmv6tZJStXjgFFrzLH2OAs%2Bxjby0xSFwwU1o9rmQmSZi5qY8fKU47zzmIebR2yR8K1WlOGOk6vLQ6HG7VFhrg59k1kMv96n6f1TKnpxWlfDoD%2FyZpYbFQOMxhxXuz6g55uXiKjqTiQaTWJKweV5pN0OQrRaSkF3riV7qGhWVYU%2F1POywF9Q1YSnhq3dbEEB6Koe70YTznmpVsT%2BT0qXw1tn8Zz2Z0tpotfQqSqLpK5V%2BrKtd56zAcOypxMGzqAFuCSMyGbVFsHlK7gnZSWy59Xm0t7%2BjyTLHNhrUV8hnhgYCsSs6hB5ehtAixm8hcEaSvJMNL%2FynJfhZ5zgC7lxkvxIgdj0G42RovZLQMbunC%2FNc6Q1pKhS2jCToanABjqkAdZcWwMbS7FaxBPWtZUaG1Y6pzTlpoQd6Na%2FIn%2BAavQSO9K%2Bx2lvBM0X%2F4PDYuL%2FH6D1PFqU4jBn%2BQAKefMY8bHugcqQ5Vxu9%2FB5keFoJ3fXvtTGAt4NtPDdEn26wkboXRzIzGTZIm2p4W4sVbFVbAkEAwL%2BQCwa4VIOBHo6BBayA%2Fl2obkkZ1DxQ3DfKnINae2C5v7JpvMNFIYYvndeYE6Q%2BV7I&X-Amz-Signature=0e223510bbc985a55512c0cdfe6c849471a27677672ced82b25e5c29841a7fde&X-Amz-SignedHeaders=host&x-id=GetObject)

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
