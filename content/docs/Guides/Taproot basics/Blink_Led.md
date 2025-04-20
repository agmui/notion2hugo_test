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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MSODD5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFZU0o4ZRXlXnqyHwhsgGcG8aQqXdHzdtUwiFRV4HrHtAiEAs0MLm9mprPKFSx0oQzHejSDJ%2BHxdk2pa75G%2FD%2B26w4IqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBMeWxllBbNsnlDOircAy8xzP1kwoE%2Frv%2B6eypnHj4nQVyaRD8OMRyhiEItvzJlwmNsoZK2%2F5ZZczDped5YDOBCN%2BVHSP5CFiJI16AVQd9rvw2DWoyuTotDnr6GQ8jC63D3EhH7jvMacvIx%2FqyGA0sLeBApboy77He0ROWyzlqIQq3j47PUcv4hUNx42m7NRC%2FbLgc8j7WVqRmPPz5zWifDecLqYkRJsENYaqhKMvv9KMIxMPk6V24fSlMkcchaEA%2BmPMVA4T1BEmXahgRsyKgpUwkR7f9BRnTRr5vrl%2BoNSag5sveGsWepuNtYL2kr4ekBozavDpqTJng53ceN6G0Yx13O76DwpIS7eMSoI741v%2B4oCDUbi%2BFsiuKi298zHdtecaTutKXYYrT3tnF8mB0jSZiynncBILE%2BwQW3YNdUj7%2FuHzyozU9%2BxOEcwtrohcuXdCbprEaXMX7DZ2GaeEPilT5PoVFCcFrALi0bDM3LLpthTpRXfJt2wJseTHl2YjGelq3vQ08jEORMbdRLeeT%2FC0vAeSRr59nL1TDnIrjERDX1lbSRfSerWe%2BsFyFWJ855dq2YcXHDmMaEQdhdh%2FRjt4Ni1SHeGxvS%2FwjmR1pPiScbAdmfQWATU%2Fuc5qsBs7hYBmhiB%2F7jPLEIMLG8k8AGOqUBNFECO1yhjEVOIwgPkMAxStbL0yzIl42bu7CXVgEtWCthrNRB3FKFiOz9TiOn6ypGj9zTyn852R10qUstfhiH9JygKxz%2B0HHTbOHsoiwSMaXe72%2FF8l1TKzw3Z6ua49LP0sMBK4X8bG4VTgvWGCS7chM%2BNjzdqoaTizq8K%2BIJ5rM0SkXAlJa5hGHaffpS18EsxmvPw7SSbNYrRxT2DBuQUEWvjv4h&X-Amz-Signature=459bc3f51669b44c5e49c3c15b7c74cad3c13cb071905991701b0fb4d388e814&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBLLEBF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIACCwmO%2BnUV3L0pc64N%2ByzV3gpF9yT%2F1b4qE%2F%2BIWQkXvAiBV8RkvsyLhqhpzKwO2L56E2fqsIKBPMq4%2F9JQlygN9SSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzg0LfgnDEvNnCiKxKtwDg%2BfBzNrXzgD%2BEo7%2FgdBGpOXqitGZR0rSMZenGdrUnLiKEKk09oZiWCbXaKxAwgjPzPNN83vkGR2njStDp%2FQQA6a9x0qhoAYF4puRgnzb9nJeDUMDWKpzwXNOtF3BNZS84tZocV7143WoBssRqmvvMaB%2FZQuHc9V0Mc14pJDjXeT6Rmo6KDRF1bMzJMS%2Biu1vVDn2UP9jnieYw%2FJBjJW5n9xS88NGso88qzYGsxsRNU38eQ3A3UNQ4orKACw9OpFUHuVLoay9IIxHidFme1ozYaAmZEG9UKDVFUpt7ZWuQKiXRFyzgfWXn%2BlEU%2Fuf3d%2FNYsQerJndavb1xz%2B%2B%2FVoO4tcOAd3iV25TNqNbpv7wxhE0mY2LDd53FcbnnCjX5LRa%2FeIpFTx8iWUuqsWLGWNf%2BhOygKbkNSlmLuX4OQ7Lvv0ZVDYjWlz71rQtqYXrkwN20%2BN8EF2CvfaYndzi1txFbGRV%2BSDpe55SWC%2BqUmVn%2B9xqshdBgZaRe%2Fe0xE5k8mgHa36yHNMhQFzeLJk9n8wQc2fLfhJI5Nx%2BgCdsMgqfhZwBp4zxoTFplgu7OihMaValOORmea%2FqNO6SQcp4UihbuJ%2FPyve4qXLJFsg6VwYCfoZQSof7Nf%2BvxLeCDWowrMOTwAY6pgHsecw8np9ySQ%2BOQibo8LyuTOOaw9uYuhHAI%2F0RszneTKjagsHSsaIIplPwOWaIL80UexlqrHRi1UleGN0TX6XAe8ZbPNHCqp3heRaJHa8feQEy7j5RxrkhUJmkGZXou2%2F7P92EUe0Ok9%2FokCQjMZGBX2wAOZX45pcfvif6hDVnVjzR7wxWIuhuAMBO1VsLAZZ1V7O80f%2B0AB70DxObYpPTCrNcn19W&X-Amz-Signature=b763982d2fed8d1264b5567573cf96c0b455b31d8be5a56be35c379d6fac60d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
