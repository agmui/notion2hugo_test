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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZUQVGGA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZkLczl5GyxWuSfzU2vqH8BePwwLD0YGMKZJKvhDp0sQIhAKQFbGFgF1jJkaEvuccaDt9%2B1th3Q5fqgT4z8bGkT5AfKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1U%2BPf%2BSJiPHYgvoYq3AOwwFyCbGa9hb0JsrOxg%2BRzVUHoA9PjMsJ1xb1fjA0KLALwGnsnOnYfRywi8u2x1xZm8hQWYt%2Bv1OS950f8nX9GesjB3i5odfZDK36MYc32J9fr1SyW8wx33SWdlePvAEi9U%2FqNhhG9J%2FrTrWt2AUYriaYKkPTF9EIueYphh7Yhj%2B6NJT9dSENN0dIBeAwV6YuUZy61dIyFlwB5GyS2o0CHcAMFd%2FyeXoXPljI%2BMSt6QCea4KQsw35JeGWsmolziRRUaIU%2BBf8TeYYwy%2FoSmEo6PKOv5DWDzKOV0638i4gip1xY560O%2FXmUsxWPMT%2BW6OTg9VZv6VlVIjLN01%2F0EXZrRINO2WMVvMKG4SPldjRHmMCVRE5JZHqZLiB7ewjA%2BVpx6%2Fd1Y5%2BKzn%2FtASY3q2QysnKNAPd%2FXvlZRuubZTHq3rHEU%2FEtebhwhbW%2BUm6s3Oldd%2BVw2lt5qdMFtnIvAEslDc3OaVa8VizjLtJzYbfEno8YCWvjq40NSNRiOoeHvoIQv2Mxnk9Ge0BoGDI07gLXbQHeUfNQpGpteLRY0Nv7iyv0rvdDQuCPPxCIIQI%2BoM0883NRgMLmgtcHnQoen%2FZJi6XPIL13wyDHbzSP8y5JnnRSYXIs%2ByM9o3VjrDDF%2FIzABjqkAQE9Bw27i02FZ64rErakx6srM3bAnjrhqmGoykeJRJCxCBNd05gZEE3o0mBjD%2BardstG5cwtv74GjJkw2VRDjE3NvbByHV6uhE%2F1yAX4FDrAAGV7VeBbsggVrAgeQm%2FrMjvyMd3enkEfmQNYU92pO3X2RFHpmcj7RPMx7lN2hVN%2BkKPnnJiA997jYCsARS8ZCCo4sUAtP33B%2FhZjr6DkrVj%2Bk%2FpH&X-Amz-Signature=b92098d2d7026dd58b53c61a460e66e348f62875ec6f750cc69f21c1dd958d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHB5A7H%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEooNK%2FHkCBx7MSRyTB1cVDsKmv5tgmS6fiWtGeg830rAiAsq7mr9y%2Fnfwj0x8SW6ubuF8AZ918JTXbmBPT7Cr6mxCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8v%2BBTi2GDB5Hi%2B%2FFKtwDTBWBM3USlhGCJhv0Qrr3tAD6NGVQcRaDyYYrVnI4OCmou%2BbJn2ZTfUIvCWK5LPKVbpjXYG%2FoD4PYMXJCYVOew6mjvPYe5b%2B9Wn2%2F36aqiQslesg8qyKA9BPowSY1b%2FJYDO2o4utnzRtABPw5lWEhgw6XPj%2F9dIQ4E0TQOzYft5bTCmUTJtG3UwGzhtNcWrexFR5lk7W4aYN9mN7ZRKuAjZEg9Wl6i%2Fue3jWdUkX2vgfGsk8kMIuf65O85k4sUmiZsmeacF%2Fpt6NjH91Rpk4pq6hVMKn8QH0iQqprPjwEhHHLzH1bsoxcQmVQsDkF6mv7ws13uLS9dkroYcIXPWFhnzpKpePEgNgHzzL3GuA70IKwSoQjGIS51MlF5BZPv7B2G5abPaLlFVK9KrJ7C9gv%2BY9t%2Fi7mGtDEStiAsA5R%2FoxL936bgVe7TKGkYizaOTmiE6LEBeecuq%2FukzosBAxRQhXnAtOiZwFyYKCq3%2FdtOSl8%2BhUlRvgLRNmKKYNrCPKMBRjT%2BzJaId%2Bdv6i0vm1Yoh58kM3P%2BTYDf%2Ff06qYNeRheQJ6IAsDoqi%2BsE24L%2FLIYlpEXqBHmqsr%2B%2FJ9xsk0LIUPWbqAiqd32kc8W3nhj6eqAam5lIi2RIbjMvaswxvyMwAY6pgHg8PMZ9PnvSufwP4%2FAbTE0LjPWiO0j1uBhpZBziZ19L3OKy9JNOkddE4I%2F1HWN6YoyV%2B2rXxNWDurz2iTDkyx9mN3lU9RTcddniB4z13lwMXW%2Fc74GdfBM1ZA6P2F%2F56lcqlCt68xFnQuck13N%2BPQvb5wDKLoWW378%2FWOG8PUTHx%2Fybd3LRW8zs%2Fo23s%2FpPgGx%2BZnTSUDWXeZC6di6cjt8NqHcJzl3&X-Amz-Signature=6546253fa80e5e4708b934048e8cc0c30982007922375a8beca1f4389724f415&X-Amz-SignedHeaders=host&x-id=GetObject)

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
