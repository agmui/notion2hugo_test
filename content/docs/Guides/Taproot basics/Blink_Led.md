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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCKHVIBG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzoIyDN3WUqt3QjRpTNdhmZz2adMI96%2B0Hx5Ix5x0lNQIhAKGfGdUexvsZYK9Yq5IcCYdrozZULsjZfA0lHmvOwX7iKv8DCGUQABoMNjM3NDIzMTgzODA1Igxp2PVfNrpD0MmoGDsq3APeGQuwOEssUV0Zvv6KyuSE5k2JreJduJxn6Fac7Tn0MC4eSCjfDoB07gBTb%2FjyBIjWb6GrZ0Kkj7h4fpTvjo1mM7a%2B35ZRtamWkroLMVNlFNYfmuz%2B0%2BDNeQqHfVrxd9WgW0QPydVha%2BHmlZJNHw5cI65S57VyiKlTYusECtu3SrnaQOCIBWh5DcDSPGGtsIePEZwiUacPNRdpI6omHvtcoOpmHTWetow%2B7Aa4zfwga8E%2B%2BE5ft19ocgP2upYTIVRyioUokyHF%2FSdiaH4dSC97%2BSh90Ks9NVggcFMLXamk%2FcMliiQFgi5FLLTz%2FvKGifB%2FYhDwS2aVpCT%2B%2BosOAX2KyweXFHcFYgjpTVLfuTuH5Vby7Ws%2BwIeeX6xwpiNQQhkD%2B3Uv3f4KKuNgHdfUpHrgKaHKWa1cOwwcfkFh5tu6d2yOlOr76ssFaezsxtr6ZhzAtJGiHhKxVVputaRQ8ZL4%2FWHORIDOrTNLNV3pySCxnjLKsC5DY9vJS%2BsNH8yiDk%2FOyvF4qN%2B6K%2BB1cw49tjBf1u7okzX8Tc4TJMDofoks4YshcVe7mis19HLqzvdeqdf7Zg5VWBI2iRKURAOVt8afaslVzQIjRkKDdPLrWi82ylG%2FRkwhHxZ6MylBcDDH5NC%2FBjqkAe6gt%2Bm1DJ1boo4WB3KK%2B7Wy6eD%2FTO2GH%2FgW2YkvKhmbfRyp5s52HHOTY%2BsIdppKQmxMn%2BK%2FRbfKQfiocPn7JgsDAuw2hTbciLws3skT%2Bui98X5Y9mTn0On7ToRImH7Av8vjJ35BOmQz%2BoSg4clsS21QKE4FijaI25ZqzSBMsiB0WrxD2HEFslme893z%2BTTXGM6c0EvBreswMTV%2FPhqY%2FVfzPmEf&X-Amz-Signature=3e4c44bd74ffb28b1d232d35f854e43c19066620d80c0b44cc0e1f7a9594ed98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK6B3CFB%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECi1pQCvEAMf33C68RBwjFRyxu8Am%2BwG44KRTg%2ByW0gAiEA39pNW9lliIR40S%2FPB1%2FUny2do1aWHChTz5eCZQNwkJ0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKgglU7Vj7SZw%2FLX%2FyrcAyG%2BZgR8HznxOBm%2BAToV%2B%2BwZXa9IvJ3O%2B4mSAO9cWNKQh8KkcK%2F%2F8Q0eRx8nCwWqv6I%2BpdTf73UESkGemwtwoIbplsYvyXZhqlz4fGNpVtOYgzHIikiBvmaGvxgNjzaXrNcHVdIKYHsXzAxQ76yQ8oo1arAjh1TS7HkASIJSq64aV2A%2BySgVAs8q%2FDht%2BZUXhvorJRIbgh4o%2BK%2Ftk%2Bz7CYqoHpK1rmk%2B53yihLREk%2F9cZbWiJXDjNh4xLc8txdjZZ13KaptYDWd9IwQOD%2BZ8cSNGBrJ6gbyNhbQrOvEbRxpFlvFZ2s5CGrsNWXtzjhqzPCBJue4aGe3aBq1xAosIAW1AIRIQipE71uA6a2oyNdgLMbA4yiVwgXfm5Nu%2FZrtlQTVzi9whRGPzDLGS3jG91evmdJZtGZLkeCBhLj%2FtfumxbD3VGpdrWYO7k%2BED7uW0nZ1YeA9E2pG1f6DC0m8MeWWorF3fPkS%2BUw%2BxU1PLmtgJyfPvPCx7eZz05p6d90G%2F8Bluc5kYZA2OvbQ7uOibJfmeiywjv%2FfYQop%2BJbglXmS58roKXKRzfWPWOjSujlTRj7GWsLIPIVb3%2BgCyzfQVhxA%2BTHseY1xy%2B2UV20U0FIg5sq8cmveRYAMlUrBjMMnk0L8GOqUBPp61Es4mBnm%2B91QGytv%2BkMZFaaaA7FB6ndeaq6wy4Hf8lp9cx7Y7nvRr00LajUD89ADAQNJnETpePBvDOP7JnjOHAn7rmxkTGodCLQEZtwqNhxEkD8PZZcx%2BdntyoKyOivimdXuZj8%2BUMTnQOQRRdypFHsuV9V7nPHe7L1kyVmDGololccOowcrbHvMy2couIt8Dwc5PQmeMqt5oidofqsQl9TBv&X-Amz-Signature=4f89b4927b126a4bea2fe5751ba011144efbaace6272577fff3ad640516adb74&X-Amz-SignedHeaders=host&x-id=GetObject)

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
