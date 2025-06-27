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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7SG2EKK%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvUvLhpvuEHhAZwOJBDpoVtBZptFAi%2B44i%2BMalKbBnPAiEAgNDRly6%2FcvBce8H72gGs0jV1PtLixBe32h4%2BzygDNGwq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDdta4jD9bOLst5EMircAwAYvxtFZ%2FEHO5iOHjg%2FRwsyI4kpHDYRnLd2GerXbeog636m9rFKaL%2B%2BcEQth%2FQ3Y%2FVIqHSTIc8MImOcC3O1j4THKa13idss%2Bt4qVe4T8IxzcGY1xQDtxwaUlG2rgw53NkfF2uRg9%2BkRLYSIvgUai8SJK%2Bp4p2iEHfhS9eRRYU4ghBp%2Bq%2BEVWaSkPPHzndhtMdYM%2FhlRabQ1a5PH1vgOM0Hnnxs1OIi8VFYIVaAHLlEF7%2FvGUMhxgDNm8BljOICATIaktpZcQtTzsRTZvwsKiV5%2Fw3cGG2VvFkQa7PHP%2FNBybbAamR0vD8UyiDyS%2B9wGOms4s6QqAQuvfy62Mol%2BkoEFKS0xEP2vcRUaQc0Ams8DqyBacgnLf6vnSft2N%2FWq69gurH%2BG6mKDJ0R%2F%2B2nHelA%2FYg2Kk9yL1AFukiysX1beU9pA5iGVkGAOKo0lqIol%2FDj7f3R9rXGiK5SgcvOjToez59dvqOGjnfsL%2Fvg%2B54BokQDN0pFcd3GjdySxMh9vfGXAJkWBmUhSp2%2FuhJpMDZMRo7ZcjnI32l6uFxKFisUUpgzQZ3FQ2L0Qoiuz9ZI5gfpU2QcrgWBl5V8aK8KtPkBV7TixIu%2FEc958ykPXx0bL90GvdLMwG%2BZ57VqgMKj3%2BsIGOqUB%2BEXBuAmGGMGDYntHvuSVNzb9Ny9SOpAegzrEZAwc3CtDYSTRJz%2BFXMq6J1yT%2BIslK9OGaQsSLnWhsBIegtjjyvNkzRGLGrVqTm8WTy53rniUuzbisne9jlngWq0%2B41zazcLWgrEoUalI1%2FB9YGz%2FJn4hPCZKErwDa0WT%2BbbJzIOwZR5Jo1fHB0LVMAVO1i7bQT7Z9UpsDrIVZsphvEVvl5sWr14Z&X-Amz-Signature=76afaf4749038556a84baf73f6b6833f282e74b65e4702c229c93caf8a2843fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSZDPX4I%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T161100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwJsU7oEU3%2B8O4%2BKM7xW%2BY2DjvpNF%2BJ5DgsAsbr%2FyBTgIgYV4KRrrJuiWEa4Q3TeQyd54Kg3yUmF57C0%2BnbSEO7bUq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDGgTHllz1jtYOjFQZCrcA1oGs5rRwrKCXoG8JQPtkKcR9qGHya3Bl7VagYJomCMNQ2CYNA8mIxSmpoHJ%2BjxMqYI%2FDq6z7iyVYVZ%2B59o7gQdoIEIyxGk5mykiXWViQffml93O1W5Rl1cId4jzw7HQTRQxqRdSs4uoGs%2BBPTlAXhxfUMlE6ErFWHpklsBvEF8yvGUcI7TT8wh5PV5uccERugjFYzDS9PuhITyD1ZkrvX0TyF7Jazn2LRSPcak5etkxxo8aKfON0xPpiV2hilFkyKh2MeCdcAc0wGr4LMHEGmRS7kvtltjz13UevEGgV4zkD4J4oIdU%2FCjJR41qXhJ4TnkWj3%2FAk3Ehi5au2Dob2cET5ix4gxz%2Bsvs39xABuJUahtWMa6Da%2FTbERfUomCqEu1kFOmawv3WLeRzguqVG%2FVFQG%2F0O1H24i%2FyTTc6%2BkEj9aXfpo%2Fio7zWHVEUVHIlC7ucoPgh8RojwZkP8F5S4v%2FYf2f1Agz8YsZV907y1k8W7En7xldpi17uuLgD0BGnS%2FpY5dQbEyXDAWRwWxtz3BLvYel754FAH8lQVSsRxALzu%2BTM1fQV4OqaVebhKo9phPB7uEpWPBuCGte%2FH8DCuVUCQ0x4pg7v8oejLLtkrs9tqykrO0ac3vkdL0BdPMIP3%2BsIGOqUBzrwFRFXvoh7ZVNbWo%2FoVK9BE9YZQmpvYqnj9tVAoMsEnR4PbElinruCTUDqiqFAHxciqKacpbNMZBDeY2ye598Iusmn6VUDP7bkOeeEbSe7JRmBGfuZ%2Bcwgpxb2rWkEo4nFeTo4RZfL9vlDjujQuatsZwMcBjPf08PRy6q6N1sFf%2FQqz8hEJHvLIS7UGdta513D4bgdkAQDTyx3F3sVlQGVOHqUd&X-Amz-Signature=071599940cac7856e815cf2e899812028bbfb63221ef8c77b68c0489115644a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
