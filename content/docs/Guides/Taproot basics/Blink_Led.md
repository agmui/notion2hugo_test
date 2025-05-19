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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFYICUGI%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0J3g6KadiYz2sd4k%2Ff30k9ApUs%2BmyLAu3u2R1UbzliAIhAMcvxdK3ES9W%2FnQiFG9jMCPPFBUpfG18%2BErkPX9efmtZKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfI6VU5YhSy0sWBIYq3ANzl9quSlEeqKcP5rqAjxObmSHuSFQBbhGISgtklvoauoED%2FUftcqp2ijJoZNiIlw4qM684%2FUzHyV7hIfu3OJ%2FoUuZlcDIJs%2B5sfGTN17zyoU9C4%2BPVCxVw298nmS%2FPyMyDB08NxiLc6KMRaJk8lVwEJgniaKabENwvV%2BCgQ9J7dAYpqeGF1Fxyy%2F1bOf7r4HCK9DOv1JFF1mmpINfKLr3a0ZisQTvqJSzypmBRLzhPZK5eqsGH8x72XzjhHeepmNRMG14GsNO8cV%2FHaDrYJebVITmLeRXO%2FDmAFJ1DYMBYFT591NitVLj7Kw56WVSjgHbab%2F3NfWWpM4j2l2HLcV3RTjiUAfAOYtx7PY5kkWK5OJg3apcF9QbRor3jv0VCbLFYeNBGRffk27PFrlTBtKq%2Bfh8VfZ62ogdZ6bXTlbb0O%2BcLn7Z5WplDa1t7AABEsUh5OR7iwwqpH0lx4pTWUFNY30HQRGaokXfsGl9ezKbBrUc9%2FghpZi2hkipTfO%2BebAAO3FzZokJzUIAfwF7NXdtdKrwa6Rb6qjqd4qhViHw%2FrXiC5WYar1Wx%2FGJ3M0M389mQUs9%2B3QrWN7cF1ZBF05xCsmuV7oyaaz58Hq6DmBfLHF8vHpJiujlK5ss6wDCfn6vBBjqkAZIhpzGYDknHj8m7l6oI8DktQA3pPqJ172YfaHdh%2BvEF7kX20oo981%2BOSMnOmWuKr6WvSipZ1rdL6EfkrWbJESG7F%2FIH8a5OpXKvcQUMwQvN4EN6CVYZDhgZ9%2FVqT2Zs4Ss6eFOZocmF5XEYuTRX7RHD4e5XLwTaaDzjDONXTA6QATkgCb%2FeqMfl8r1K1MiKS35yeT9eSjmrlcwJS6NgDv1i1UIN&X-Amz-Signature=a91e1e76f510e51f34e5bf55a0b8d27b8500a42d77a0a1bc164235429bd8d32c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXSESEY%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T070955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICtGeX59zDq2gdqhwAhusfHq%2Bb5i74s%2FWyI1IFQP6n%2FFAiEAoyrw711qsTZu6cF8yDlOzW8Y%2BMB8N%2FarUhidI%2BAUsrQqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOs2k5FRQIZjydZISrcAy8MEsarbwZJtdKeD4GguN6AAQYOoYldc%2Bhlqp9h5whTwpfH6JRcx58f6d%2BKXtFGWTOt44h%2BynZxbbZvwev1SrEsaSunuFeU8wt0R7obQ%2F8Fg0jbqagqiYVtJfHw9bKIDPxjgUJ62ZfSfHzK6oXDi3hdiRnPWSH19mM271v9REqoCT0sYHUsDj5kGbNtxrbyOv3ClYuHdTd7uD%2FjKJSVtiMapsSJ65VTK8v4tm2rrTF09hBR%2FY3OkU04L8Vbma3qAm%2BpfmCzW7os7hAOHawT8V9lYZycOp31Xp0nmUJxU9wZNYsSgHsztD8172easYXohwQ6oa%2BoDS6sVD9Q80W55tOpjqrVc0ny1LA37nKEaFqj8mOGdblbdwnMFBIjtIhRdKI6YjtLgXKI88Sg%2BLNp1%2FfrkNd1DdTrSlcX35CxVGIP4HO%2FvQp%2FYWrifoL2R7uyKfHn9WHL88J3MydIC0acDA5rlAk2DpAkqKDuJrE6BlT5mqxjX6bWCJ759O%2BFOQVxKb0deImxsxzCoBMX502kqbRJ9xoxMJh6qZxhmna7l5CDwCQpxUp%2F95t3mDfq2ipd4SLV3c1B7S1ciMIY7JuM5%2FdcURh%2F5zs8XsgXVie2pdSPZWfn6ENTuztSBh1LMOGfq8EGOqUBs3nduMLyv0VypFymblJo2F1dgmG7TSPtyDdvQhK9%2BbMyZWxvdjqReKG4DA70zDc%2BWJ9BG2T1jbvCiwhLylCoX7H3h%2Ff0IqEPg882Rtk38DKxfZUQgI1%2B4aV93oZlr7MpUbwLtyHMabCW3RevwOpBt5l5e79daaByqiRYywIX6YhuPtMMgyULhGOUJeXCUGjeCKBHLoNu9fY5PmUcExmzFYaNkstA&X-Amz-Signature=308e567a5b1088eb97171ee37d96032101ad425202a77169394e91c422054be3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
