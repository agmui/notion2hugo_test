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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPL7MVQE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyLXjAZzLv89CPCmVJgdfl0J2DOkgcsHziAQ2Wms%2BZXgIhAPq62TxH06zpgRYbUWxhxY6WKD6YsmOwScOzw%2F7o8f5oKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6wxz2%2FInuQzUGCjYq3AN4rZ6J33nxCcGIYHl0%2F9EdZHOemiqnccGnxUSAMg6sml0d%2BPOfD2zcBi9AMjj81raUrYwXAC0FWBiC0AXApLUqCBZat%2B%2BP9WIhFECdnirwyY6rpQBygPWB6v9ugOEBBpG9%2FxIdUUdJZheUrCb9rmjjoqwzDigNJtxYaTXqeS%2BtjKtH46ly8lEoKWiZ8FZElhfYBqycj9q25Oq9rNz4AicWCAXvcN0Ce7g0F7GhDZA%2Br0UIjQeVOd1Fy23gB%2Byo3UF4yeh5LIJh4tu%2Fd169IasXP1cqMz67WcvLEV6ER5Jkqmbtb%2F03AzQNMjU0P26%2BjXvcOOJQOJH77ZLemnFm%2FcTvOvKivg%2FZvzkyVZXIRT34lakqXbLsULftXvndnyNtowy%2FWoz6UDe79CjoCmCi7oc8UFwhottGkAsEMVjoRiUOhGYc2OlVM3UMj5dxqbmuJG5Q1RLS0%2FeZDLUe0TvwbmbDhocrp7vnRiUDECff8eNOOnx%2FCGZvhX1c0VDZ4pPlRQcxb9RKneh7hHpoSZqg%2FCvB2Ko8Mbm98K%2BU1vgJ8Ra3qaznXqoEWkFgZAWCX0MavS9zXApJxT0TcedsQZqcNjFsyeb2MBJbfXjFHmAk6JlKLFLiieHRK0DpD%2Fea3zC0%2BObEBjqkAUzfU%2F8ksU6a5zHDjDilauEr7DwNttPKqZFNClkq8RL6sVMEQfCpdzx0mgqcrTd04VsXebdxyVOUT1sritsOJ%2FKvy5UYT296Dq8dWjY7YiFg0V%2Fkxr8lVeKROHbPRVJEOBYd%2BwsCLOrkpne7Y7Ztiu6dVrFFoNZDHSFfX%2BfplGZDxBuaGQA1WWUVgo7cPrq%2FCb0uAuKsTrdZ320YD%2B%2FACUKCeTbi&X-Amz-Signature=53e8b7975a7cfc3c4138b253affbadb886afa5bf5004090f38aefab0bebfeffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM7UZDRU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOztqq7UcKHEVEspRpflmLLrFn4noM89y%2B%2FbCTfa3czgIhAMz512AdFTNEZ9CKMM0ybQC4qFQedw3jPG9zwc7Rz8TAKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGW%2FKow9LY9vY%2BW%2Boq3ANBvhiMoLt6UI0VvWNAPH2%2FKigRvrUrPjzdVlgrqgI3OMbshdB9KQMcIQwN41GbPQKIHnZ2aOP6buxp8RK9SXMcvnvFjRfVjRZoVflRD3wvDrRfTEDZ5mjI9RGI0E%2FgtSbjo1OpHx5R2czJDsPkRZkhJDElKGSlvkGTWHsoWA4Omx1YHcuQyE6GdWwz%2Bp2fndWWON8ZS5tGJOgNA%2BY1MnS8ie2dIOjE3KPIEQFJCn%2FVlLpUkNb9ddUhRNatwAlNuEmiE%2FuKaeNKcD%2Bz4uBotKH50yZ9Z2cEzbyWOXE3UOaDRoCPDHZ2OSAOfsNPic7oxG7Hs4xh0ci7ykkEWKzvnC2g9iUcwz1j%2F7IQAkQVbt7wqlNvyuJp7QgwgrhBM5vA9sVm0lE3iX27vEKdh1W8yrwlGmWje1uHWAsu9Ido7MuhLlrqmOYj6TqWzxUhgLAdKGKSuSq5AzFms3EXDiKpUHev0rpayKXL2YlwQu4IiARhGq%2Fw%2BKclYCK91Al%2BQCEjOjLLtmssr5AmuKKzzjCYV2jtIN9jTVTTne2KELxxB%2FlHHGYVSkX1uZ1n03YNZNJZCTdGtbRif9phc9P0UG6Ls9Kx0bDs2XPv1Tm2pkNEJwoMI%2FT3M0eXqp6ZDTSB0zCK%2BebEBjqkAU5fycuzVnTYQ3t4s08sZVYqcVlMthbWzzXytlo9kffSeyb%2Fuuvfa904EHW%2FeiQt%2BIma%2FbS2s8DsFi%2Bso3LyujxgFT7gW5kfUzHfpNx4ymVmEOB1NgFbB49Fc%2FjVcrHV2XPqG0ln34f%2FGkL3NvLc%2B%2FxrdWOx2xcDJgPhb%2Fo48c6FQkCfdEan31ckyGiRd9HNl9dWtQ0bVHC8gU%2FTKqPOB20L4jjd&X-Amz-Signature=ccd36b44867af1a86bd102967132adef2be897e4ec09f977be94304d79a266a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
