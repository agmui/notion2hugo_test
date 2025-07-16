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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5I4I4W7%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDqP4pu6Y3qBoYEZMZHhN7bIoNZqQbmV8Ux%2B3laXHcoowIhAMgy8ct3TBDcFPfy7cdFchlIPd2wCH96GySRG9DeITjYKv8DCGYQABoMNjM3NDIzMTgzODA1IgxN%2BidyKxQcUb8I7A4q3AMyfZsNuXSytuo9svgxSYy4DLn35jaeQxbzRYk%2FGA%2Be8gckjhXzY7Or8cdEUcPQu9y02BzKFMK5kqf3H6aIfEuw6jfFAyu6bwLN1dfQpICWBM3fzikEyT%2FnE2bKGNQAMUE8fYNRwaFlbbimzx7lAX0RkuPd6RHD3uBiV%2BnJEFo%2FliJmaUIW%2BQ%2B3otQZSaMTIVWXY5lboDvGPZ4nYwr%2BkGnlbTzlCp%2BffMufEKHkaLOEOqjgsXpGJtYn9ZzUNTWECfYbaxWFSFyd%2F0Y42cH0K%2BhBuxIoE%2BPVACrbzUgvaLK4pDjKtnOLyeyU5YLBudd8QDLCOtlMwkdmunjy8AMpvtRT467Ln2M4Bj19aPLLvMMEB8E94r%2FhfIYUdShNk3BsjEns7fC%2FM1mQLR3qwOS2m6GkBki3gPnF%2BOE%2Br3eIJ%2BBb1vkkSlRB4eyDOwtXlb6DXCH32WnjhjPPHIkROqClh9ZhshXvBI1pkGsI%2B9LpK3U54eBipASHhWi12zfGgyg9Dz%2BAUGeH0ZADpv67%2BHJC1nbf1zULYn2Rty5Nkm3czSJpTrm8mC8BBdl6dcJKmqFVpPD%2Bc2SoJ7uD7IZRZMaYzi6d7jKXFe6OV9j1Kdk6MxGCdYJHeJCr73N1tTwgOzD%2BluDDBjqkAfIdrgmlqbp86najokO1j1KjX17dzobJK5tXS90YiKOc6naSenvCHZqMXKn9D7nk%2Bf0LISsDkjCDV0dVwH8qdD5w50glSksP%2BilKbFzOzxbAjG2gTUmcTgxajtBrW15X4OxsqSQoXalYIVJFb2AJRAwAQJpbEGHiFbgtJkSK5LiKpAeqz6%2BnBOv2Bx8foTcmM4itcQ091sldHf%2FjLdRevszrlbTS&X-Amz-Signature=b096dea979f41440ec28c77afa4a26a069b8dd400dc1afabe9034bbbd052e533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBSMZR2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICyRdYsAL4tnM71s30Hg3ZdGZm58PXgGTs5luPBIQUKiAiEAyOEJ%2BqgMzdE%2FkfriJRV0KL%2Bn8GhugY%2F8qqRiU8%2FVp%2Fwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMvP9ysPFagw4uNktircAxw9L%2FqfbXhzMzHSnWp9fsfj7phUoPjU51m%2B0DOnrollWUCrSPsnQbT1%2Bd2uYng8OTNBbqkyxXEWu1ugvBcwcPk5FJ9qCBfC9GBYZtCzK7QNF0z3Bl2ZthdWitA5MDa%2FjcrAtN%2B4jKGOl8lAz80NQba0%2BJaLlphossoUKqZTDen3fi7h%2B48ThQowl4E2d9%2FqR5Qh9SgL%2FcnTobONiyk2hTglGwKync8OBmV3K6AMViqekLiD9yS0mAtNJJPeqZDe6ErKullXcfVdwiGhpEOPjMPcU0OpCMThw7Jg8hBtWkE2R10nhRE5wyAq3OPHrt2yoYFKRng02z3Texnz1esQ2gBteIlg7cE6db0UjWWmhzCt2FtoCkMvO2Zt2kQXAbuvzuKTXQwoZyBlgBxszHL0hE7WYVjRCkUYocWLvsADvZcPH6lwajowVONl12gP8sopVFgx3fu%2FDXm70TMqz%2BfRh%2F1f3ZKVg8poq9ycVj0c7eIhWL%2BYHXn6jz%2F7V7b96YqhRejly3z1NS9P1E%2F%2FSXBGO%2FyBOKs%2F3dkzkIQfhuHDRTYl6jw4WaUB5bMScyEmvnQc6%2F7UrU6Us6BzW2sin%2FzgbgvZEjw7FuljWxO02kFf8B20r%2Fz5c%2BioVwjjHkzDMPOW4MMGOqUBy85dUeBTLx25mRUH7c3kyQB%2F3U7BjCWFJYAn634apEBGaBj4wSG1i0kz2nAQGYIdTNtRyvsXW2o%2F9N61R0IeX35rO3ubfRlg1fY2crKJurEwKPYqhizSl%2FRclk%2FwNygouFfo0MJByTBlqVVgw74MVEvTzwUN21i8UqD6QnzegJRjBBr1RTvt%2B874JWYkjUbphVIECHBk6d8d%2F%2BKGdPaAY3v5ZeSC&X-Amz-Signature=d87f4f4d0fb902848f7a5425e510d867fc476dd2af87be54464d89292874d55f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
