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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667SOLKYS%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMRZTQ7HKsta9wDvci74XCYgxc1of8oBz%2Fk6x%2FCjeSlAiAuCgqJ6Azz6VZCpmZf0FQ1h6XGOxy4O9dEumRyKR%2BZ3SqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp0Q1Hb9AIBZsCV6KKtwDCG6Qoyn56KjvTQiMsIIiMPDBViIt4kHGCbp1EQsA1bCAaJPT4EnVVh0KZ%2FIhmO%2FA191uXIHEUajUmmZ2MwOX40n%2BArQkDMOWWpEpuv4ScbyAol9beuNwwogJaihZlnFA7pGmHEXEtNTr1diOQA%2BqLVllZacWe2H9P5RqUURLGcQ8zVcgFvTv3pfFCZ5LhGOhxfydbB%2F9dXlMFwrsDFDMZrT1F%2Fg72njWh7aK%2FXTjRvls227dTpLMT6vRuNgzfsBWtbmyYKZpkmteM4hzQ%2B2zSzYhZJWm8HfCXoc5jTKFOcf0ikxKrYbze472pAODxqEXCXBtlgaIztkDTApZkzjhqsW6ZdY5ZRWQwz4SjLhVDN%2BED7QM9%2Byj%2Flxmt21wZBxRhialM4QdZLujoJH3inKgG5yxlmNtkADO2%2Bi1ne05FVzkIGaRl6BHs9PkrurbOSeia2vwss00wzjlA18zspQc8uQRwTTw7wgfgrwyxTlVt2vzhG1aS1nWRXGTjD7rQObdkfgx13WOlgQhwmLbuSWNDls0FHTBhl4Q0f%2BavsqB6SiHW5w8XIydbmrfdp96G4bVYQ99B39pmmunkjywGdhcny4hxivB5Y9E59uR8cDgqcgv2n7DN8FwFaifOVow5fr0vAY6pgGx7j4vG6det%2FgLJ%2B2C2MrEfhm93BtvUYAA%2BAMOXNevI9O6YU2Bs9jMJBUOWS%2FzfAGV5II6%2Bn4FuGIlgCKAIqD10NtRxFVT%2Bv85Dwod0FzSykZkHSJI6KdfiSyaCU4JtumyJS%2BZjBjnMlVlLe34OmE3%2FUnSkv12DNk4KJJ7pyZN0GiKeB8HnhMLRgOZFJVZmrUl98%2FXflgoBVxwWWSaWnJ%2FEbQUQnlm&X-Amz-Signature=6a2874163418af2439aa47fec3426867b3ad03dce3396193a3f82e02b09c446e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R25OIH2E%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T220148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdGz5b%2BUPBnSGd9qgsSBSwHK%2BlKP6veYy5wD58kdD0hAIhAM1TPP0pw3l8FEcTw%2FXuwYsTPwgEjV3Uj9CCVFFghQWZKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwpny77KqgwztMwioUq3ANlQg%2FzDAhH4iGW7c7xrnctoYbmqJHY7WVHNqBwRyIyrFxPNVOINWlxIIbZNkT%2FOwUSvpn5ZtgosS56DkkrUH8vi%2F3VH3toW%2BBZQYcVpBYdOA4b2m9qoGp2OdhdG7kPFHYt6gwYUlRCty2idf81LbTwVrD4WC%2FCxhje7bbanDu2pFw3YY2mTQkZmdt7XMhLQ7fphLFR1uUR9we0dznyLdLtuiSIbJIM3nHmMkAPtoRLVvuQyYRiq%2BhSxf3a4yfLqvEPJahkSCOb5Y7TARXWIJ2A3m3gYTFbwYS2XzZvBRAIINIqD82MJBQe%2BQWYRqHFCZ24bqO7WIhjpPlrkVy8D22pQungV%2Fh%2FUbAEjuIRrHso9%2BE%2BunXXvtx2%2BCUQQBUElFA8wWAKtjWek2nlUbl8lS7YIseaNdIAi%2B3zgqnAbHa7TNOoxPG20%2FfHI9qJMXM93SjJUwGSnqulwOagEUMRF56qKPpEHsxeSr09zmzus%2BP1ZPdYTE%2FyKZXjyq9%2F%2FFFHeV4%2BlZhwTKfUEYQso0wuc9yn9Q%2FccSud%2Fwi17S2xILksZz2eSKWQi6aC71RGHx5pl154865KQblYroBpa7VvehxGr2iWR0m5pqYKGHb0vCSdVXVsSVbgPOzYqk0YsjDj%2BvS8BjqkAac86P43AhCIJhSGfavwSIM8X341nDVBFpatYB4wKEW9W47fxpcvbilhGLM7WQ2xkaGyQHUFW90bwah50e6umDb%2BHsyrCJGpzag2cPUq6OZL4h9RWlCwodY787Tx%2BdeAo0z0relyePI3RWobUTkFFTKfcItJVel1pUkCa5hN8zbLLBXDwcyZJdjQa9o5O9Lmojpmos5TKvkuiLC5e3IxgJl%2BwHmC&X-Amz-Signature=c0274cc58ade7d34258b54c9b9e8e285ddf562200034fe7b7628c16956484fce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
