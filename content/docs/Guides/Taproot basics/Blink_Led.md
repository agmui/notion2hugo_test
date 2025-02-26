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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHLNJ2E%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDendeAyVw2UjIPmrFjXlTHLCsP%2BPr4YHXciBCCnjrLfAiBKPEwWzea9vb7LRbwHo%2BmmIB1ZpmGEZsdVVNrimFeZGSr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMFdIeDf3aG4vFcUjuKtwDvowtpmI8y0YHET%2BY0w7CoOm9Gt2rQ8Vubnkp6mBUhMjsoXggAIAMBam1%2F01Kodp2YqUCZtvu0B4YKRluRIrcBuqqm7HxQX1IP93Pks6GMPxZiOGDJj6EjxxGgcD117EeyX7gJ8KySuPNshyEeR9f0ioZ5ALIQYY8LOmqeqNChydzq1E3z%2BfqLuIwGj79AjwT0SVAGAZ9lCMyENRuKiFjN5XTYdMBSFfwc804WO8yCPbMcDsNR2V%2FjRcf3ZjU0vJwq07TvsjmdbINPCSL4Vyy2fs3anx3pKk1d0q%2FTmRPoEVAu%2FiqzqEF%2FAx%2BO%2BIC8CLPbwNRy3b%2BL5y7FxwU%2FJJBuM0GWqqHm3%2BnjV3n2I0cFDrj8COL8EN0JbBrrJHapH3Jep2npO6t51OdHTWMolza6UeQsDKTSYwGmkDgJvHSRL6td0UFAWlLiayrhzbL1p5Tugzc%2F1C99%2FjJk4%2FREqX24vObWZaKN7275SDloLDbY%2BYDB3Hb7%2BcLMBkb26QFTdoaLjd7N1ekLwJ9VXhznPEn7kO7wq5EcWZaHSzyhxdHHaKu3jW5ollp89KPTU0oLlvHbBygX3wEFcQGDkzZK6OdhT7QWIm4xfqcxzHduQTBjKDz4npsYYhlcrmvxf8w8Lz5vQY6pgHvdoDYGymy4aUf9rkgms8ktax%2Fs4VQBi0yiALe1kuBpD7kBSL%2FpIvuxiPXpH5bdmTcufkk7dKh3jOmuy6soS1OXTzsq4yG79mdg7AzPzQEMPGbSLc9hiTkKfURqj%2ByPATkJeGzNWc6iT1WTQWkyfCrV4mdlFd4wjCFazPrqbTp%2BmeuupNFnL3ZWbFBgzcBIfPio2VKYce7GyRJu%2BzSS23Gt990OKvD&X-Amz-Signature=ec9b4892154b03fc4bb5434cde0e2b5680317f7faa62cc746e7a282fc7058302&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5C223D%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDE9XJMLW723dFE%2B%2BkDlGxNjFQioa5tju8lvokPZ3gP0gIhAKBwiiFka%2BMmY1K5WZ2%2BCImVgEUIk1XTwWFpj3U3COMBKv8DCFEQABoMNjM3NDIzMTgzODA1Igxu8T9nSq0uBlRXdSQq3AOuufJ3z9ML533IpPl306MoEwuxXaYGnDGFXJNkbDL4J03qLhtvqdURqsxGZlzAJ5sRly%2BgoxnVGScgYAZaxJQYZ20ZiGRY%2Bw26g7m3Wn6RArxaHCo9dfzvurS5zwR89jQA0aMjChHJR0aOc19NwBH%2BKA9yEv6vKuX%2BQIZIq4EqI%2FSdYSXG6VRIz9gjFW4zrm55rxA9d6RXZbLrnZHzll4dH8gdGQBJx1%2FGWq3VvBPNAi6CoIPclvquuGjZ%2F%2F6EgLp3%2FxR6irOamezvZHTOledmuoRzONm%2F1rfVFAHGkVcBIoE%2BRNBxSJGZtZuk5jew99JNwfpZ4rLQ9PjtnmtlQbKBwEd%2FplgEp4jJR6lZkb7vkvdKARmlcpVdLgXCf5%2FEonAaGdWSDKqUl%2FlCF7jafGaFMtudFmhqgxCBoS%2FnF7Tb70y3xK853YUGFk8UbiJvLFD%2BzaAZHZBhBj3q2KojLwg5mrAqCQxlvnio7VYyE2t3KhXMxWXXrETwdc1WsHwzG9gjqNx6%2BnnsJscoyBsJb9bThQ2MisyOprvJf119OpleMpaBK1sVcLmeSimeYSDKoWFwYqZYrZgskEK10z3hauV%2FWU8EZP50UQEHw3J1AkTCELinR2kvWWyhC04RFDD5vPm9BjqkAR7jY6UZu%2FDz53fAUekUJPCw7pkViEA3ij1KLXeQ3mRFSKH2mSJsOZ6%2F7DwEn0Sy8Ue%2F%2BVE8juPyikGf317RyUCJsN44UGerlFNOjBKJ3WrprcWtjzZ6rVbFrgcPtf3%2BHDosU1Dm%2Fm6buoyilL%2FoOese8cSa8tDf4kuO7K%2B2j2JlsNbQ8UsEo4idlcOI95BUkzHKCQOywFh2LOs3AnLCEEFH6tLN&X-Amz-Signature=454a078cdb1e615accc94242ec41179a7d4d074a4aabecec954fd11e3d28c76e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
