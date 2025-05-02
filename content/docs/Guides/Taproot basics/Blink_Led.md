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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F66B3C4%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIE313F%2FEHrSugpdOvG4f3hDbSfOsJu%2BnQgTenl8ds55GAiAzZOkWKzziAtl%2FJbs72CfZDS7uou7hLgKbmNsgn7jWoCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMByV6z5vSwrZL2E%2FvKtwDz%2F4lZzzi81VTRyPwVTD9tbaLZqT3Dq7mFInjEzATMacx3a3rCExtjfIp%2FYWV%2FZBWZPKj2zVdda4bApYtEuBZ5QzYppgSGT3c%2FQ%2BIO1I9G6qGkNCijP3%2BNMHggwdDv4BbyxA2GhyYGkOyIC%2FgSLywXOjrkYYId68Wf23rFj1EfrQBki%2BbAK0Gh7sb26%2FSRCNRsvj8VQNLmQqO4Q0Nhl%2FMNCUK8UoJV3u8D20vTVmxGe8XZBYs8yLZvAa8u665SxUQ%2Bzvao46ZZ87q8fal3Idlh3mPRCQq8N9Q89%2F4J%2FQvPIk%2BJ%2FMzx5h4VmUboG863FGL2bulQaIltDXj9XPiGQOKO6UNLQOTdSx7uiTyNh5isrEuehkoqu6trTCzY3i%2BjO9RB5lvv7vgXhhZVD4oOorZPKyjrUo3rUfeXEKkK7NjsesqMrUlP%2F3W6HVukYld9CxWNI1cPuuIbVN%2FhZsCqAnXf%2Ftq0Vlm1baFlZFHwPtblD%2BgUlUcNrm33qF6rITgyQ34SO3CKwq6gVS5BzvVQcl5Zzuirez6o7cFg9p%2B0PaigmuqI61YWTNl7z0sfJydBqaik8kzvT%2FhcnTlg3cCgcRpx%2F60N0ie62BjIrNprCtuclL54ku%2Bd56oenz%2FNdIwqOXTwAY6pgGPJmRATXcvS5PAKmJ7bzU%2B8C%2Fj9pRGbny6nHtfXUrrLHHVWhn8fNaM21rVQJgAMr6Fm%2BLBb2jrFm007wV9DwTxJ51fPpTiw9RyBEhLgAnV4TrEWDPU1xo8cfbbjEz3tDJ1entuFWnRDujmwwF8MMSSUivbxS1SmjFxRGRvrEtEH%2B%2FZM3eQGZ%2F9ZLbnBpbZdd0eGC1Lcfd7VfVQXdL6EfCLKEhFp2EM&X-Amz-Signature=32d90494a0bdff5d59fd79ce1f76af4917eb523ced92887ebdc5d5271f6b407b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGWVLRVZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCEAmhwfTGjlQ9%2FsLfqCY7IiPJ%2BHJDApq1%2B%2F8tdtYYoRgIgAK1tVWxLUX%2FOzhObxjhaKenbsk8ykJn9lL5XQgstDUYqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBgdWSJi4FZufUyYpircA%2Bh9nTzSqmZAysesnC6jm%2BMy9FKPkpL8MvoecyprMK%2Bl5%2F3P9C7JkD54H3T93B54FOAc%2Bs2Z9mpiBPsaN9iDe9KeeZmY5Grb2sRB86mV841JISOcPGXUi67G9K9P92thmEO8ydVRFTm1SoPdSwjFzPAY6h3wN%2Bm6%2FWjW9oRDY4htiTVm20zj0Q191HtLTxIAGV27KtSw%2B7ruLc5mSkKxvmgMlWQaP%2BC5mGD%2Fr1bLbPQO%2BB6oSANiV0sfouJIH9sFdZdeiGoCT1a0%2FLbjrn8pKGgcTDI0h19u8edougv04zD8eg0waUpCi1zhLx9FnN8s3Nu6jg71TxquVoZ%2FkGneTwWwdVGu7qKvxP2vrqyvV8w6P0P5xtYxDsjxXuHpSxExrqGibHeFew4wgyPGoIuKT%2F3US%2F7OEUmwY4diigr845ggO0N76zcDvW9QOOS632aOhznrbehOFTnhGWRsixYulT%2Bnbl1Ts8Zg6p0ZqBix%2Bcc5%2FA8hqD2pNLz7LAmu52cpCUVwM7hDLwQgF%2FyXWZNRtRYre%2Bk2Xtke06ULqDbFgjN6zM8xHZkpNFkLm00uIH0%2B6p26dRKCJVpV7bZvIpvPuFln1kFfFvYVijCajgCJ98g%2Bg1Dd1rejN9zkKZCPMInl08AGOqUBVdNy6njc320jncHl5bI075ZlSc9nBlkDlEo1Qd2EoOeDluW8ztitWDYiE13vXefDF1qFTku8s8VD9jiCK91rWJrjcOVqcA0ntxtmQkTeWCRKCguZ3Af5IcEk2T%2BONWZcNvPQXjlt5EkqGkGkPn1WyxStXJ%2FD5WS9COVql4ZKtka%2FqahagF7cdHQPDxnprAFhK2Ybl%2Fh1Mq5u6ia0IzMvY58oOEYR&X-Amz-Signature=21f9c0feaeb0de69dc3528d147eaf091f2b75de52c9bfdc2748c3d8ddd9413d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
