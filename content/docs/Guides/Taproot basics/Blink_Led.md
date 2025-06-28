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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZ3GPXU7%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVF9l0H%2BjdQ1hir6joJqxHDuwooW0xBPuZZ3DkZPmruQIgCIQZtGRdFqgPj1%2FbZwePGkrjPmuoJEYg%2BXHJSCVjWakqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD9n5HwUFyg34BB6QCrcAz8ZmruoA7Ws1Q1PF6ECzF6wN1OJ7EmzCrnzPfuZqXTVSBU%2Bzu58K1%2Bhq%2B14TWKTftHvkHXEkrxyWmuXbgOmVtt7nrngGAOkfUzXL9QXHx3TLCPjG3uKcNPMb3PlkKlUI%2FUnAg9mOOi%2FtwSlzQn1UbX%2BOfF5DPRl%2BkOF2KfjbzkjVplm9HsEmWB2w4rDxa2fK6HoXrcid38chICOzB0fAYYzN2zxNZ4lz48DpF3%2BxS71piIoFBJWQ8ZDqVO8axpHfOpivMh5zTbx1Fjp%2FI0wIhrYI4YQ2xYIpshB3%2FQXj2WTO3c9ywF3BQRr73rSFmhGa%2Fjm5EaBKkEWYKoe5qGfPoAwvn7gZqQxGoQuk7RCtpp%2FKxFRB7jC3FNYxJB2eG9UTHgAJA7tU6gWT%2FQrL05vyg8jBkCEU6NmlZCi7UkyxvM8CeZ1lLghpp4N0PrGsBkA5nvdFsT3jhvZKNFrR5ISGkCwJXTg%2BhbLvhLdjKDstHmSOE8UiZ67f62Z7lPMJvLiozftBXYPrTUe7HHPXfgBemNjQ2hRsPvBwz%2B4erPlh8HYj3lxgh%2B9J6depBwtFShxOrswVk52haiAVPtaDa8%2Fpv0ZA8U73xySX%2Bl9QGcGztQQ2zjumDqRMXN2Zng7MMuP%2F8IGOqUBtZfaBR2WP%2BkkyqS3OkUAFsL5pWNDjK1lpme1f9WD%2F37L2%2BJ4bMQo9KeEDiNFIba7V3zzMiAmFQK4pLhwLD1jiXYlpJ1CvO3eOqXOGp7POraE1hqjISu7BvQdtc7W3WeWopSeK4raUe1tLNKtzvE8%2Bv1Zk3I9kCP1Ici1gUDNeNT1tZEdsf%2BkZSfcZfBayBIr2dIgdGhpDOXJb%2B9c4O2aKQpq2dH9&X-Amz-Signature=39a8230c8775760e691a804b3b513352c1f69fc0c6b9ee8f7864f5b0bc0ed28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PVYM53H%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeGaRna%2BvidTVTQCD5ESKe0AD1v3pwSWwnDmne18fFmQIhAKBIoFkPyAjusOijpBFnIZDX9HJKz1mrvwhkWQMNqni8KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWGowOoJK%2F9QpQDHAq3APG0wRl98N8WgqPlKebdHPHh9w18afQ3J%2F13Ffa9zhNv0w8Ma9MC%2B%2FxgN71hcRIxbLJ7Ekw6%2F1xxKcQq9I23Z00amyytKBPpyOMk1j6qtlKFVbUNTIHPgGyG6DZFC0wxC8HYw2RCuqWgzL0neZQ4jgiPb6kE3EMsM3U%2BGZVvjZLvlYi3n6e59iOeGFImw%2FNDR2XrmEGsVifmSaqYUWrHTyqKfn7xqAiLuK1VSrIcEK9GdlrK%2FBY769c2MmtwUCOYOQJ8FnVs1SKsZ1UtggH3n8upcAupZpsNxaKDXLbF8HHXYoV0ICLYZjlmEFwYMkNi5eD4it3KX0LIZQGaM%2Fs2EKlKNK0E66dbjx3vfZ22NrKFQ6by8pRQglUw3ILtknZoJUgtKpC8N9o9Yd%2BHGFZUf0ag1JRBXiBvnKm0AeyVtC327lLX%2B64R6wnZnehWkzxmKmIHg4chaZtU0F1sbB%2BlCehOHdxldhjusfxuAeXJTUJ86ohi15hOzsRye4y3u9Anrlo4rt332Ld3cZGRsDlbe2vuLywq4zSdGyAVA0NgvWYbLhokrLKfHIT9mKGSXPOXi1%2BYT4h1qL7PWMbx%2FXZhZJm6r5fmWz4r4sk2hc6z%2B10lc8%2Fq3D219ueVfJFfDDIj%2F%2FCBjqkAZLFNHpY1th4mkx4xthdT2vMmOoLNFWBVopELbOgZhR6XGTb%2FlUDupuxZSzeVeOR1F63rrCSCG398%2BBcTFmivze1cnSnN7hICqNQ05v8O6ieaFOy7BeqR6VvTRjjyjRoCuPS6rAQ9pOgcjtiReGf9%2BmAlJjvY4zXbsBu%2FuwYk%2BjvCx9smfXYiiN5BQ52m7YFReTbvKV%2B3QLazxtGglxO%2BCX%2F1GI2&X-Amz-Signature=8623403ce7d723b57f24a3984e116c72b6fce368b0f9e9fae36f091736901ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
