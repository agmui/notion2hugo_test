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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNQDF3J7%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIBoAhxAykfeDqdiJPEZFJJv%2B3o4CodHuvJMGvDsONQyiAiEA6NlMBr0XwUi1zq8TADlKhELuLbKXtxJXSp6sBhT63sIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDN4PJ5zk6ONu9ti%2BPSrcA3t4owA3MWMuMgCwPbvm0RoLp6fwtWV4%2BHHkQqHMxRuAm3SJIiJXhDMHUuR8o1KgH2yWzcWcZJJkhGh0%2FoqvUYOoWYVhNNBvxORzNwzqnGlEJarFV15t7%2BAFINOU0Uu6YVBs31NMeF%2FQlZyH%2Fri5G8pen2oMn%2FaSye%2ByCLEqxhnyWHGHAlJvNF%2BVfYWb4dVA5SV4d2dRf5HRtYtAgeg%2BTsNWTZU9OKc95k9nVJg0CuL9vyLNWKg2frKppQzEQd3vUBC%2FSkHTig9l3J53iYBBxfL5d4btv9I5CmLkc3id27oUxmy9CrlcwOHT0PngzOQccYMXbK0frOQ5gx8QOSXNXVrgHezff60TQjP%2BpGXvdPYSQlAE7buHTEgAGAf7XvWjb01IuKJqbDznw00gmVDqgYGXQKXjmnxC6YdhrqnE9lUViw5H0Aqv%2BAW8jkdVbhBouqk11%2BrRypVDZv6Jf43z70F8gPaiUMjMu0S5NHbvCYETcnMYRwaFTCf1rFhzFtoRy7NrkDdC6oFDYsOXgjAbyn%2B1F%2Fdh5U3SdURev4Vqo9gvtu8AzqsgUSKvRBJDWgW9z0M8irA8Kbyype3K95eL9%2FD81kFpGzd8NR9BHW7yqrwlH%2B6Qt4rNgYAJo5XkMIjk%2Fb0GOqUBucfGobNtUMA7FHMtAug%2BGQskXhACD8bBnOGaOKloIW3MaAlnxpFFkH9lsfUnTTZeNMN3l%2BjQ%2BXxgDdDsjR3Nt9gRciSKsA8SYjIU8UVKBoks1TEynJRyVWq1wY91%2BbmHM4Xq4gtO7f%2FMqHRWwb5m%2Bc0aZnGIhmR2Vq3vMP7OvkfRh%2FnXx6Na1B4xj2ehGqgk4p%2FY43C4ix0cZ4PkCj4n4s4HsIDR&X-Amz-Signature=3bc5beb6dca9275cc4c2c56bdfe3c7f6e5d9d3fc870ea163ec2842484752ed85&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FI775UV%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIBJ3HBHVx0fTaY%2BbL%2Bn9j0gNQ9o2aiB9dwHuMTzWlceUAiAp8CtTphli6nTiwi%2BSmKpJT%2Fm7fqhcoAhHzrvN41SUlyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMJRr5eAdweGQGfbhSKtwDNTizIMJBljzKxkh%2Fqu5RF6FCn%2Btch2U0F%2F8Fp%2FKU0QTt70ws%2B%2BZU9FrHXjAxmIl3Hqi11r3t075pq0pn98pxiZLVtF1LoYWXZEW6ocSN%2Brui77c0OoFoJgJudrxt1IGIcMhLDBjtwvEWFPPcZXmMHpktUrB91hkDJwQc2RNLE7LYI111a%2F73jOjeeOXnmpAOWDIURLcEaTIjr%2Fto1NDQMqSuTlwOtS8xZjo0A4nfylh8ytCNeOQgQv9LqnxlbQoSe0sYjvhFk4r9KRVjsupCEq3YIrT2X5Wdk7SRBzpcPXupLS56YGN5ZzODg9Jj%2Fv7x2SjLwcg9JdfumeW15eiDFEQ%2BrDh7IW6V2X2w5C79iBqEi1fMgWVxfpnG2tXoVUBwJaFv0JYsC8z0SFBsXSlMpdqSaBPoGEGglN%2FIBlyQVrXhnrlsn9F4bNVKD%2FE1FsPyXBEnfOpwr5TswWkL0gzYKHVuKfx3AMYnj5EnyFZXo0SvIIPsU3RUzXAVSDTfq7%2Fwc09Lr5eCbd8cIeUA0d7YZoZDGXLMk%2FMSMcNhBlEzpm%2BCXgauvsz%2Bjxi0wmfInD1SriQwPvGH7otBHPwKlucpTr5w9%2FJw6vkTdx%2B356Fs2%2B85Yo96IZhnO8t8zOIwsOP9vQY6pgE8yLOXGd7WD25wh7kdCxjoNIgb2f%2BpHfmoGgs5ecu6vbwcPeBxvbdf8isO8EGtcHURfCGoudViEhpSeInXNaj6oXKf%2BqE7uFw5GAgwGPYcMSYNn%2BacT4MLn7VBp59rmQv2MdHxdradgpgJqtuU79Q0y%2Fmmy4XkWshggkaffx0zqfOmk6JEyILgl8kypbAvRPWvndJ%2F0F0wmwKKvRHCsk%2BPECF7MFBw&X-Amz-Signature=7f6049f1873dd7fee969d264e74f99538e9ad74e765c44694cf9de57bda9fb5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
