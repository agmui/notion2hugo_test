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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCCCCYIJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDZSlvkqMkiw3x6yZnsglH2zgtCm4cz191dfF2SaOrZWQIgJWkTR0jbtZ3bvhERwuK35ssCzVTRSqyag6EfW14GTBAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE8gOM2KtCZqP9VgeCrcA9mL5NxmAYAlvOG9FM6ou3ZN7jgucWgwbZw4HXsn%2F%2FRUjqitChc0mm6mEmRcOg5t%2FIP6tv2DgyjtlXqZEvWBwpndJO1hMoi0%2B0qCCEJi9UCmgTMKvh7N0jeTB79AEZOrZixuSDAKSKq9g4Af2jcrrW5WtLUCWHKAin6tXmTMfDqMoyB2QAE5pAVMETz%2Bdr1ed2QvA3R%2FNFUQXhsahHrvSyzsliQFLbhS4qP30tf%2BPoIyqGZZtrnwBxxwKKuRUWnQC95nlS%2F8cf4bT0i4blPfZJZj1qyqS4v0hmK5sOGwasZ1chkuBk0U%2B7VRsJTaDzImztnTJ38G66ZL4wfQtpyPILzjLNJE5iS%2Fq80Hnkor5QrsyDQDzK2BkEN2iNJWD3Dc5Pv26TWcTcHi61JVHfPUzxH89PvDpH3lGEfdcyZkzcsTbqR%2BCNY5OBtGNc0OvivvPioS9DblqYsunfWu5WLCZhJeimNJOhhfZyetJcEyBIIdoSQ9jwQycJuIpdYh1tivIazUPSKhf3yKvSQFTnnafYafTVoPybkAEQwaIzKeTvVfaPQ7eeoHzNQLOv3YL2Y6D8bwt2o%2BbeqIGbQaeQXTuxZ6sYdSgh9F8%2BJC%2FxmetCs7%2FXzlniMDzvXtYu2uMOHajsEGOqUBI4dDcei2LiUIVZrdppHEY0K7o%2FynWssbYYzDV8EbUxuivsOY3bQS5geuGr9kqureycJ6U0rOpbUB6ronbRb9uOHzq6JDf%2BTzwa8wwRK5rlmfhy7iDVjRfFWz%2FNjHoABtL5LWTWSFLS4xUlzs7ms3YMf2xnjAqmexlVBCqHuanzqpzc%2F5gSUrkFxH4MDOLTyG85oF1%2FfgK%2Bmcew%2Bup1knnJvSK5m6&X-Amz-Signature=f83f8e0621cb33649a621ba25e5ebade309c96b035c48205053cb99e24d9a2f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA4O3JJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFKUXN7RL8fXOrFo0%2BCNnMg2s4WUttNJHyN6KXm%2FvBUTAiEAmD2heZl8yGKRqTSeXPtDFQG7b5yOJXia9MtaJwg8REYqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNf2%2FF%2FYkYphUcgj2CrcAyI%2BWCFKWVNUJZyLpuZTSB1y9ysG7Vmn2%2FUUe7TerXiaOJvpV15j2Rf7pHHXwjY9dhhZLMfK0R%2BsKYwW10OZEJicXbHuYMVdpVb6Y80zNjVOV35CLZTRBz3M0w6nFCHm58JfsiwehBQ4574VZ0J71LF6end6R%2BhzRtLSmWgxXpxaERankr1pl3UL9XwmHvk0%2BMyvLlQqFeC32ZRKEU7cK6mGUVCKgA3SKZg%2Bd8bwJO6YQhFjxjD8o6eIbWuMnXEwNy3ACb8MtJfO2SAJaZlW4tTQN%2F5f%2BLMLomMwvD5KNgigO6DR965iSJYOeP3PzawoKAA8uNAljGTUrkPNlKvwN7g0oCAoy7zUIa6uW9NmYb%2BaZp4zE%2BWCGNaHaBqFSRAtl7%2BiiiOumfJlyNY%2BbQJZorVXjVGSUrUYmGDVDnmaRWqgEuRpBhkTCFVQp5fr9ilS8ZK%2Blz%2Biee8v80Z%2F5SbLh95hdXguleduqUbEzKpwGL3oC4H8M9p9hk0gP80PVB8phb1m52Bi6cM0gDV8SdnHeaBLx95BkYuE3C7KG7rrBZAFVs%2Bm5LOpt1J3Qz2vbsJiiyLXvADXYCsMZLeZzy9QE19IFTCWkT6GFwMfW0%2FlNMfSy3CMg9WqxL516E0UMPPajsEGOqUBWIUt84mv%2BoWyzijqMko1cESP3vJHecunAAr%2Fz19l0NDreASEylhwiFa3zbyEH8pFEKJ7hOL2iROxeLedHXtLyG0TQ72FrVoOxc3hbeJwvs1aY4lKfefSasvqQkUI8%2BiscgD1ND2M%2BmJlmeJztnBlY%2BQLcQNm0ucCZo0VsgOepIXFr52NZQWmIvekl%2BFL7ZpFQdXYrAULmyFPYob%2B3K6s5ltN5PXB&X-Amz-Signature=8a7a80ce8b1014cc1ce71b740de929b37cee6a51dbfbda327b91b5a6fef660e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
