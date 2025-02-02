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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ3WDXML%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtH0RBDQF8chx0L1icoKQDpxSeEoToPYxwB7h37Xxw0AiEAxG7859EMA4TqJ%2Bj63ZEVwg259P0%2FgE7JGzCvoG53bnAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgbBtXrBj78iwsjJCrcA4AhmA2nfluDdHtlQH67GcTXI6JWVM5uGztEjMtURzKoTqdUhQPkYSoyt6WW%2BiIK%2B3W6tv3dnp2LVKlkzMHqH01Mh%2Bh74OAPUaFBYJe9r50rOr6mBskcodIz2fbYp%2BTRFCgvugkhgOLnlIJ%2BuYrqXrt%2FWcXDCUoAPxN399qIIdEXXiTry5FsRLUsAAv5Fhzuc6dckS%2FDgF%2BCfj2hN18JRO44MQkIVSEtAamMdSGBGLBO8GfkeA1dFBCw9x9l08b%2Fr9p1x6Y5yEMYV9u0JmL7dZIgMzXOTlDqxFoYTviLL6sMitJJA4ASRAHSF2b%2FIf4BlDxoX3M3nxrnoe3fihDuHVIqZ1nbjV8Itq8EmIZ5HHrKUwAaj8y493wHPaSAzbgtN7r8TnmSxnwUtnbv2ibpwWd8Y%2FZNsT16lYU6DHZPNTjsssAoGm2%2FHh%2BGfAEBqslX3VQDpvz5Hq%2FkAnYuLSu8f9jXJctsdAdhpHAZKH0jEtKVfQMdfdlYuenWFgOvNJiEr6%2Fral0UqKx0jVHDAniiMvLNoFqC8RTKie%2BXaIgTeaRwY8yN3w%2FJEeJUeBGrFw8O4tPaBtWd%2F28uKVOB8AM%2FlTcVOwNY%2Ban4uiLl71%2F%2BETl4mEqOs%2BDn0nrKX5WSMJad%2FLwGOqUBmYE3N4vGqyzB6ok2zGFkS56aR2yRhhXjCnlcicjYNvAreeFCvNskyGAnco3uWUG3TgplzwCXLIy7G0qgHFPwx8gZUZQnEgQBHXiA27MMhgZ7hnKR8W33cZUsN31%2FVCNpj8MwK7w6a8MTkihue3G2370Tesp%2BHTofbSiQUuvlTmFLThM1SugWHW3cIBumxahDLplg0%2B%2BzyQ%2BAixUbvWXLRRtFaAG5&X-Amz-Signature=eed7fcba09729fcd2e29273e78c9409634d80a3edadd2476285f1505786bc2f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QHIT6T4%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfnrYrUc5JqWd%2FtNsv0UPwiiiqnUoy9xqp9zf%2BNIdaIAiEA7EwS2cBr0q7pJ5RMrbAJXmOhKP5%2FZiitmFRyvvgUFFEqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH7o4Ga7di1oLYuSyrcAyxpXb733%2BSJS59TkGUi04s6IXpIdyfOuEDix%2BdWYx0RAxuMMGqTeU%2BZTb2Hd2FlodO2LXuG230n2AI%2FUf0h15dEwp0o8NkrBJQo4RwsV3y2Pnun7ct2B5V3mUca4eBVlMTofH1GZ11pPgKV9mTQzbKFTpCnVCqwFr3yoPE78cUCBd4hnCamN9YLjCUyHrO6biZVKLGB7dS7J%2FLMbe7DbItGah4rRmR8N6RcQf1WzzVvXAQqTlCYWrpkvsLCjCnr7bTE6XWwRVjywJVhM7clzCLmiZhWt%2FGqsnhjF1eKL68XOxN6gdBUhxAd9htUYrwLBOCuGnGmanO0mzBKy%2FxO7OYFO6aVFDuWGtW5B%2B%2BNRlMbcRkU%2FARWqnMIei7w8oI9q0o7XfSzzj2eskCynwO3hmFHMLsnrPI3guZa433dmxjIP4GqrtYrXrxIWzypq0CS9jJjuIzsXOZBquf4a02CXjS847oMP6kmj6nigk80OYVGh3HiYvG8dCrXT03tvzU1GWjIEEStvhiCI6096JInLT%2BjEgu%2B4cZbTs1%2BG%2F4r877DUrFB53j8aLTVtclJVQt2heaiohMpHoY2%2FQhu6j4ZjUtzKYG%2F2u%2FB%2BL%2FCM%2FU5PDP90fj%2BpS3Ywio9j9PqMJed%2FLwGOqUBGA2s0g%2FWN59fN7HKrUbkXk%2F7bedqncDRJaXRrTdM7Mo55MauZ2qqWUiFViCjCAhRhW%2B1fzKb7IifCReJg36q1Hir3cB0vey%2FbO0OtAdseY8fh2tUO0%2FT9NbxpVjOCzdg%2BtwuX2A1gknGeAWvaBCqpM24PClY1Zxj7nvhrGD4lFPQ1U57q1lyFa08cS7OylyI9%2FxIptnpbgTYqNsnIv%2FnY7xU5hin&X-Amz-Signature=44622a7d60c6f013a008c54500820f8beb610ad74e2d02a32bf43d3e2eceff72&X-Amz-SignedHeaders=host&x-id=GetObject)

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
