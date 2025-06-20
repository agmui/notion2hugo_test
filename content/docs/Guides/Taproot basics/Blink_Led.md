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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WDIF4GK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjfRsXTzSs6FlwPotQdEY2et7caiZsWRaMFxUkywvDEQIgI2wR%2BptiBALcxE8RIpuhYbsq4RHg88fXzwePJoh2e%2FIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8O7MsocpG73MQK6yrcAxRgX8HgwNjjIleT6Ate3UzhfxUxqVKmXRu2argns%2F2XwlCGZ6%2FFj1vfdzyTlH3yF%2BCxe%2B%2F7FjeJRTa8KUinZT56UlPq4NoAUhVndgBfZHWt6YhvUD3k%2F5fVRIY%2Fk47upu4cPB%2FbMHo%2FbvZQtBLtlSVofDQqlwZoVBQlaTQwPUOxF%2F8UvuR%2FmrnTPPLE7ZHbzQ04CtHfFwDGLUNg4%2FhEpskzOCEDoOjRYaqCOlYdpdZabVUq%2Bf4%2B394DvcgF05EkyhKMzxR9Z%2FczXUGg6RUKy6WJYQ%2F%2FywC49Knq%2B3jBmRtkHae6uGjFsl5WY1tbpROuQVug27Dz36CfQAnqlJXiSXpwkOqcewSblVisPBX7k6kYhA2dhbGlfNKLGUpb3TgcwTIFwwKcJ5snArIjkB5p8lkXW4SNFFYfT141RG97X2r4Lh%2Bx4QwKyZvy2PMTS1I%2FFHXlYyW8WXyyMzon8dxq3g2X9QslmyvfjaxbNEP6oWGQG8IT3nHI2cAuZB0ynrhMC3FAlGeDQ8cPUJAZjuBGJWeVf%2Ft7yMTTiP%2BrzLZ2A5D%2B5kSFq9PErNbFTjhNmf3bXb%2Fi%2BQhGvXEbc8AiLeZ5rF1tX5DcRR8ZH8rwY18H3hoAMyX6VMSaF8hhLo8yMMCk1cIGOqUBtW4XH9508FyMof0k%2FqPEt1mZnq4g607fsLX1IKSlsgBSCyf90rogmTgw40dOxuTZLGDB5m%2BZkhQs%2F4nLblTWRQXGSGl92KUxhO64e4q0w5dlyX3qN6jjU0rzOghk8yFQJ42binpStSm5D7ou2%2BeXLI7TKXfVzUKOHnVm693PmOPaBbX5No1QrMvZU3CZSplUBIW%2BQzG0%2FiZu0t65%2FWpLYCeoIxYV&X-Amz-Signature=ac3f0dd78d19861927dc080d11daa0dc73eced697fb47f1035c3185239dd7e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGMEVGQB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDarR%2FS29CTxIeMnviSs04Ir1M6GorTFkaIRC0LbW95YgIgGEt%2FjytVJoXbKP4vH9VNrfzIVlpbKYIU358QpcGIT8MqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF74DEgweDYSDXHPSircA4BV1EN%2F8uKzvSRkPqWa0CtusiEB0cVNHzEaHzjD9f2pR0eIqpnC%2B32vBJoXML1NvwESxwC%2FSWiHHsxR8vhm%2FLiM8GFK5JIzHrIO8nhS4i7TEKuouKxP2YFmlTkCHa5qpQWHWpBaydQ1JvxFvbJHh2YrDRTIldZc0tV2Kke9Vv1PnezgG0Dk9HcLme%2B5cbqIVmpNxxu0jvRdWdZA3ybNb7FuDoojhqy0GsRoibOy8HjtwCC9vN6imH6cSk54RfPX3yZLmswvShVB8vYG%2FXVyO3%2F9zYvFJ3mBXpb7K16cI3AU1yu4GIpLfk4uQvAj0S0zpsRGb6zyl7bW3dPELajF%2Bw9x%2F7nHtxvWXZaIV%2BmbqIPgQW0nNiSfBD86%2FlYr09MtUW4Y3bPUljGcnyBYSNs%2FM%2B5ey%2Bm0d8Q7v%2FtFa8NV2NNwxcrNqHUyAEZqi82LuAKeD8GUiCNrMWCOkeD5b2jkLNfXNs1FqIr6ggAv5x0EVOoWc8vjhVZHLKAx%2B1%2ButnwD%2FBMEYNlhPkg4MZxgyuZibymQOHTlPTzJlMFcOsfR%2BpJqzfzir2QKN%2Bz583fabqkZVNnOA0mVEsTJT5vPzzNVto3GRRvJTAaFU425SXsk0qoayiJRXK5tUD25tyfNMIqk1cIGOqUBAA4%2Fg2lT3rf1WuwS1KzSpzU0VqUviyMkShv%2BP7bwDgWVvEcUFhn8YCsGIi3ZFGZUFIE6uLTNoZbRW2ApiGnpteLuUQ6GC2BAn%2FanJWnpJH03u9L1ZKu%2FIMdOO09ZvfmlOEasyh8n50qlPdLzrlGW%2BPtXar3heZbu9hhDoqnqAkL8D%2By1mkPqjukwfC9RUTGKBUSQ3cM8OikduS2%2BPGl5IJ%2FsOj8L&X-Amz-Signature=56273382535fa7a28443ca2474be288dae5c6fbe80a30d7f45d91f71229f8834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
