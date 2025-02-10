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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJWDFWWI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBqWGV8liZ%2BR6%2FUq3ze1Ps30ghJ6EoOe6v67v21l3bWAIgD3CrrA7Auo8I6HDaWLcDB2ohhRHSjdWX8j2uVIifqEIqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWevy1hv6BD9%2FWDSyrcAzJ6JtEkO2pwmhcH4rkaJ4ymmBE1O5HBlyLPPzUOf73eoXWIXRld1HS7PfuOv7n5LiKtiJ4ohJzrMgLdFNUVObBa3nJk%2Fg19efoh55SvCHtWoph2Ruc8oqkS6CzXzYY3IZc%2BTk5E5Y6PPU7FF8wmCzGdeyq5SeM5lDzybGFlXsS74klIbw%2FkPLVmxALusRBl803LWTDbxOZ3lor0NdEdefhpEWF%2Bb3yiaEbJ2zGjHws0%2F5eyWTMedUiaw%2FZW%2FHctfK7Xx6awOnzsItBxQ4z695d%2F1bitK%2FA0Sb6lpe0ZFI0yQfomuFfWH8HpDygn1KrBB5mrIBKDTqo7uY4ApeodXXKPlXYlXntrBXMsNWSdtqJJfc8XAISTJMk10V3302VIIcJTHHYffDrnBpFM8nCDZC%2BdksPRJkUTxknwWoqzjpqw2i3v%2FsYQnqNVRRMbmy%2Bw1mI8ipXEZGlHi%2FmN35GlcOSHxNd6j9qA9G2qS%2F2hb9n%2FHwj2tBtT0NrCoRZ9pk8xrRXdtWIOSh%2FqGt5WWAo71fsWscpL2CmJ%2BVZaT9tGVWa1L1vYvSkPJQ785oA6uW2%2F6USzWU5jKvHKQGpr%2FVHqk9SdazIXOXBQmlBUXQmJgJTFzJkuGuC7%2Bbqe0P3wMJuSp70GOqUBt5TinRUwSQhOeThpuH%2F0coFgVEOnQVKqxm2%2FERjHD%2FZdMN7zfPkLsaXvi05C1v4lZfKLyz5ijDRxiE5w0vsgJsBosR12Rck5pZV689DPiS474F2j3CvFfY4Zh7xYyypKSDwW2Q3B8x6klIvM7wLHlG1amJXe553vlro%2FrJUmhWYC8U8SHYlhx%2Bggor24vSjTVclv8qJNIPqbl7tevyU0HuKlQyHZ&X-Amz-Signature=4b31bd690aadd434f79794490d7947926dcf9d72254bb6abd66a533e8011c33a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673AN2CQL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyY1doVlGtRs2iudAyiGI3%2Bd%2Fh%2FsGQKIM1%2FZKBUxEoEwIgJOBYqjDg7st%2FPIsAcMXU%2FlXT4oSPJuko08Pn3WJnSkAqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzFzzJV%2FhoMZKKdOyrcA%2BD%2BMK5d3M0pxtlNlnBc4Gxos87xyTW%2BujUhH%2BwE7qlu5sKNrsg0jTW9BgQq7kUeXyG6T%2FcWyzV58IjL8%2BembLSg9g%2BP6JSBAnBnjYYOl%2FkdTTz7lxT0vJDzronQajTl1E1NexqIeRntzHdcCOtuNlUkUkwlEGRLcRzlyCefpCOHeBk%2BZUlfIQIfP5Pj9t%2FbpZ5cS8YI1T9wZ0U25C4U8DQ659BqmDkWzE%2BAgpaedcvf9bCqGsMWMcSeqf3FTBeJ7Y5VEG85HQElnBc%2BPi4%2B48q9YK%2FZ0h56trknVZXQNYHLhoSxZstR7D3W%2BuWk4KXdaLwSRzil0glPCs5wt9Nsb1z3hb3NLpq0D7kBDFPtWllrwiI0afLwPX6%2FaLWBzaEyCc7KDRHFZHqvqQDJYmoo4AM5%2BwnQTK7K7bwU3av2o80HhArbEgOraOtGft646hE9m8Sy5cISlsZhJ4%2FOJN%2BoW51hXlzNNm8C0zucFrXMn2bX3q2Wjh3YPqz3eYP0lklY2WEPYgkrbpBvpwRVKiRjhJ7P5Ci4c6q0GFg8j6x5FBmq7BRtI8RgIYYafkANS9NUoGiGhHOTxt1%2BKGxvj9%2FkhgvH9M2MBhKQqIYzfUtXmB0JDQcX0kJWvf7XCfi6MJGSp70GOqUBqGF9JqC8gx6Sx0qesUK86EQbz43uzduZUqXoIyydUjgLDK87lfXxDzyMr20ZVkL9GTfYFDKytuTCk4x6QREMTIPmEHFHzsUm4L5KswUJ%2Ftu82jcYB%2BUir8yDrZW90LNGL8%2F2p8DAlRuoCwwLzLJxHRTNjTtdE4rVfjrRp9Hg2FpJw%2BY83Qff48EBUiVRwHNo3G6dxHT4g%2BV8OpY9C1qXc36lLJ8M&X-Amz-Signature=31692bf10d656d08ca4859c3cfa055d174cdbccde0d4d9cf56d52f43a734ce37&X-Amz-SignedHeaders=host&x-id=GetObject)

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
