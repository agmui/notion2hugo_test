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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG4VNIXG%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDKIxs6CPtJV6E5kJ7Rd7E8%2B7XbYqVVofKRBl1A5KKvAiEAnq9PLfmJdSoj3l7E7tSIBm8e%2FPXbHA5FDqzLWU1IJRIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMblTYC6xhfgcsE40yrcA2cR1coMmNzITwYe8YlDZIhjz%2F38KrBgcYuH6GeB7qJerc%2FrmONlxmRLFywT2YXPQpmQ1bLWx9%2BT%2Fvb9lxvbvSvlDIG7HIIyazTxQ47zao2klBh6Hq2bB4B7E8vGrzN1n8Q0tbRPs9BDPuCAfy7z7jsLBY6eYDdLEvyFWZvlpg2GyqArifwgIjim4%2BpVLJJGHzk%2BUNW6UE7i8hwQKawhRjn3lg%2BvvnwyyI0xsitpXBULA%2Fwjwn63uE%2B29eb9M612mMomazcTQIkiklmfoS0znpQ%2FeK9%2Fc7EF5WkWrfQT4EuRkOPpsQCHquOJPF%2FH%2BG3dotEZaqs1dki1nQ3WHkR0kMIlCqM5L3%2FEYnUYsxjZQLVkLowIR09VaO9NXTDglF0Juiwtlg%2FEkJQA5fv%2B%2BLnc5PW1EYdvEBqmz4GO5JtPRgr7TtjBo1BPO6Szk2p32JWsGdN74pbYU4toaaRz6M69qu0mJhD80EJ6vRBILvVMLG9LZgyvssrUEXiYixXuITF0aA4gk6dSIQAhYip1k1owPb%2FsdcWXjlsVYXRUyqFFf8BxxlPZA0OseCCu9E6Xm2Bm4vjL3%2B5i2TUXSDR5dZ%2Ftr3RAqpHYL9zgToYa58%2BWayNdtBy%2FI9Gm4Pnhfbi%2FMKnI57wGOqUBEHuyInFlWlMxIeMHBqEatG1T5cddQptIagU25Uc5%2BOaSLt6dTf9JKh0WLLEkxwqma3lbrFoZ7ijpP5CAVdiXEOwigHotdsZ%2FJ3XOorzyEuVdkwF18lg%2FWM%2Frr8ZM9fnEpDm2pVa0If5TBrvnTbg%2B7pwRTnx1V5R5FLcQavcb673NO2sJQQYOExbeZXCqtB3gh%2BQiG7KZErpjuh2xFS7KlgpUHS9Y&X-Amz-Signature=21ac030ec8cd36475cfdab9a5f50a6cd9ff6262d313b9063be99df696eecb0ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TMB6QBS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdJLfH4bdPSC%2FVC579UJNppFN8Qizffii4YZUJiuAMbAiBgny%2BoX0%2FV7t%2Fkh1GK0uAsBPe683yu8z8%2FtVCx8n1x9CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxqlRsa8azAgTM7%2FeKtwD2EMK62QQxDDsf2gKIKEm%2Fd%2FxEMSJoYqs4DOVOHFgOfPEJLL%2BvQ8tPZNpMzs2%2FnOSpsfMcEZw%2FEVH2Zd7%2F93czA5xboc2FyVY53ZNTIFgKeH7Z77VszUdBfRnLycYVhxLHiaijopr4H8BGM9e%2BrPgsWauZWpX5TddtOpMWduYqi1g39z%2FY%2FvdAs3uyXIyz0zK%2BSz91UIovTJY%2BfD4msURpBQX4DGxaJAqS0SLP9G%2BLI%2F775w27N5cmsbvxUmIxOPnsOMgDxpz12eY8BYEhH8wZV1TXzfZ3zS53YbY2HXvQJTf3%2BwyM0tYHnuGMFnj6FfvObqd%2ByaSa%2B%2FEqLU6DPPd51tEDLaQzBv%2BmhEfOENBeSW5Ckl81Twl3pFppo4RglhYyE1kgTdNpRf8F7hOGvBpIBQFX%2FD1N7lLSqKfRJTHFBBLeYSbwBfzkDFqUf6I7Higc6Xtw4hqMOQxoHrncNJ1isli82y15mwQhVU91JCKPjQsIy2X0gCSvuG%2Bbjqs1kYjDWJ1KlTwXTJR%2BWmsPngjA3a04Mq6rgjN0tftF1MudSPKQjdXdW8MZgiLOGytHX7ZTRjzJ7n0sGDlLDAnd4VE2GlUzHYKlUYhvCfm3%2FxMFcdzziM7kGW9jpGWGqow3MjnvAY6pgH3bu8X1zmi81Hwpm5cfMd66o6wBQ0t4J6MNL%2FeHIGfemUOfXYYuK8QmiRsvRPyQWKCwKOv8UvuYdkiYeqUk%2FMaeD2CLQs3MNP32k6o4GyLPs0yHytRcXVfuzqsQGJZ7sP8TVoEIe32LbslOnDS%2FXLTu1vEMwTaZlAadtjxHooBX%2BjLReA7DMLURzm5Syf4xs6QF1pZTdsKH97J3cBBwHK56SE7Rfp2&X-Amz-Signature=d62c4529c045a1d2e706e8f8e12ba81a79b743fbfc243d58a5bc24a9f771de24&X-Amz-SignedHeaders=host&x-id=GetObject)

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
