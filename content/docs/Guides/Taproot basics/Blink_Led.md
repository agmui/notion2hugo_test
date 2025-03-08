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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHXM3EIA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIEtuEnmBHzl8UA58bP8HeqGIQIEO17xGgQWVtgLEIyOWAiEApKgkhGKYICfpc8Evkg09mArrpuEbPQbn%2F0sS09F%2FZRUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDFSM0cI6b%2FLs1%2BR9BircAylnsd2aTKdunlFTPGRO3oZ68iXx9%2BchK2KWFXjWjsWAOSKadNSH5dNUf0lx9T3930tRJcnFZYpT4EPr0jCqaApWws6m%2FQrUNGfE9GVJpD4F6Vq9GfNK2M6JCKCl2mpKnZ7WMHdEOY5CIAnmYRAPeKAj8OVlc%2F9nA%2B8mJTt8iM2%2B1d3971Batj6DGzjUTnaRhUbl6CGAAq%2BipyF7fb4ms927RwAsn4te2PfpHvp1xJy6FQ40exl1VHCLwGH2uTsYwnj1pR%2FNV9giCmpK0biSx%2B%2BMxQQ%2B6tJFFsz%2BZLoU8GXGdPkKWQlsq7IfXXHasUi74BzJCCUnSx5cRpS6l3xY21kkEj5ZdJRmMNmGU4ebNrMpcNmGIJLWqE2CosCDoLcHyy%2BdQwyZr1UcegrPNhYK3YFQWgfcSFJzePoTUNTvxo91RoMJEYf%2Ftw4yuBSxY1FDthSkIdpwBAOhA4b9LHe3Wx%2B%2FsTXT84RYu4rlFvOvTEXOfniFfFG3Rc85%2FVmPw%2Fw0fXuVekSp49tmof8zrA2Z1f3J0AYFjwGGGkv1GO0qtzHWuqnXLZ2ehLCgN2pCliXtxH7E8QamSEffdCzmImGnBXogZrlWzCqRVwE%2BjBLP41EQUw%2FYGiSw2%2Bil9PP9MPWCsr4GOqUBCaOlabcfdgOHycx1Phchktcm7diX3Tpa432Uf3wGkwSq6xxctoWJkBh34b3arxpf3ljFq49F16bJa5lbid6MnqYEsTAjj3HaU%2FeS6GNwZLeIcLGMT03DCh0XWN%2B2hB38uzEDAeIoTt2TGPhI60Fa1RJJupBuHo%2BYldLAMPbySR8bhM5CsoC3%2BiRzb%2BGJLha7FKGsLabVQqh1McqbfA0UiMlXGssT&X-Amz-Signature=52b16588ef924f602269a2b45dcdf5aed379bc4f514c10f828ba0f6f3076ba6d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQQC4DOA%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T200122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDwOLUyuln9PGUI3DipyHGUwQSy7QKR53NAGGRo%2FpJ%2B7QIgOj%2BjreJQ8dT9aXOeXyVeSWSPDg7NGODTlPW%2BTw%2BnO1Aq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDK%2FwqSx1bpkkfAT5dCrcA5AJVaanISmdi%2B8Oi%2B%2FcAVVRfR57EPd8i79C61IY2NYybtGJo8i%2B0fUkT%2Bqi6oBLNbsZ6A5Fpn4yEKpaQ2tCo6CddhfdfD%2BkwBpheDg5Gq1I3GX6%2BscIELv2DKs5Bt1f1IDXSZq90mlbHUxQIUBcTP6lmxrBp44HCQbzoY%2Fb3jes6YKj%2BgUQ9ZjpWSQ%2Fu9De3EhgbSwVspFZIMQtgnSSNt6wFKdpQeiFRwTZnc99t3qZfu%2BTbi4hKnHHOrE0QSvCzTIqloMg5X2wWf5ftZsxZj8m%2FM%2F%2BvDKnBPN7iXlkwHfrl%2ByDuW5hl6efzuPv3chxAygQJty9ioOPGpMNUnYpf6CEIewL1s4lRt6QsQ0jNw9RT5EALmox9xdAGuu1UwBF0BUgquCyYDWHZUxLwI7Bv50sM5kMLz5p%2Bhl1mb4%2FDV1OhhwyG7fm5q1%2F13cYU1DDIIpeGLZr7cJo8ur%2B1KBS9%2FoGRTiN0pcUqyYRmyoRO3qNxy51X%2Fz7WzQfhgw09vEKPW78DVx0BBypo8J8w9OMQapRoWNsJ4PtCO9Cj63cQNlBBRQe3EI%2F0KSnXicJA%2FMFp9ACKFPiO%2F52zD8sF0iERVRmEraT2V%2BiDVVxaI4xh4JzQiTOj5tMwTvP50NwMN2Csr4GOqUB02bq13yM1VTMsYWsEOq7ty8qrLz9Vs%2BWf6ChTHldrmq3ZX3SQhx631cgv4Mos0vPg7LEUxNEyjod9Zw9aRumfwDKt1Jo%2BWvBDoL4e1spO9hsKPRo0brDRdmkAV7HSzn9oI8psTuSQa3DQgsvbDbWACiMJlumiX5XmiqrEsWhENNMNKxPIKW7CHw3jkY4rFAmS%2B8RX2%2BlHH2Fvh1RA7WKg8iCLiTQ&X-Amz-Signature=fc2007c61309fbdb1527203b2612749ec95dc859605965d6a7706e9370aa0af0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
