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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THIDO33B%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqJVzaR7anG7Z9bwGlUWvVPNA%2FE%2FvXZFeIBzebaUDdlAiAUjDSG4f94081l2AyTR1yR%2B2HZdoxI47ZAIqWtVFyEFyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMaHwgGN0sHjlyh%2FOaKtwDDO%2BLFfMHysYsq7C%2FoTw3czSqlw0g6lrrvndhrKFGT9dXsg8k2AQIYmfyffL%2BxujxHMhLKHHCaAI9nUjrSHDoq4gm7nhmA1VJnLByjHUzgKP%2BKe5IsDdDarHq99ySo53Oer0b0ytltPXhvt7wsAA18DA%2FQ0613Jj0XnTXG05Spd0PDRHOj4YiQnh%2FRB2%2FXi8p8N831cdcEKaU%2B2xFLi1ccGlwZYKLpLV7fK%2FqY4PjVroEdRje68%2B9YNEDetylQ21srTYaUdmbo%2FpEpctErOBYIMA1JaCFSIl5Cu6acQuSO6rCPnrXEASLEYgrdhDsmdx%2BXqjrS1GXn7tUSpSOIMm80uGeTihfltimJ2CCaw4OAx%2BILKdYr%2FsXWNz8E0JggTPKaxL%2BDb6Vkqzsg276DqKSIdgqWvj4c3CdhT6iB%2Ff1zIz%2B2NeTxon%2B3FAPT48iAKb7fZ5t7WGZoZ3UC%2BO9Yiq7A%2BoWA73M%2BGXyHUXWTWBfvGjhYzAJ4294GTk8Ur%2ByVElX2bvLQLobCTIKdU0tNNrwcnJI5fqsbW2Rue0TRL0xy%2BrQGBdvmv6nEmCFtX8VrDlIXQlzoxnnTfGnWE7iskkig%2FJ4z9qa7VO37cmbShB70FxSLvrtAWAYDUubW3YwoKyOvwY6pgHeQu9RHnnpL0sD9Dqze0a%2B2YT%2BpwC49xQUrztDptoiZniZiSTodduH1zkfKUf1bGxLfgd7sPIcZlfAXGgqV%2FLPRtpuYFBagxFUImwVW%2FsQOLFhPfO3tbPRTg0N2FiZ2P8yRbVr1DG6hb1DfOV11S7m0ANpZsDJohqlb0yvUtvyv0ZbJBj2AoO8QXBGvrm%2FJjPdvn7bf7INZrOsZDV4xc7ui5twomMA&X-Amz-Signature=1028dd050724f3205621e951242d68299835a20f70fcb25476cac6ac12aa649b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OHNTFRM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKup0UHsMpzlWpfeEYSvWHXDksVlIRcL1NLpaOhfQmAAIgI5UuPk%2FAMmrn8Mhr%2FtfVJT%2FIBA3lhwEWzc2eECI3%2FNIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDKR0BmvyIRSXmWXNWCrcA%2FEcxlxiLaSWBQpMXhATdH%2BZ10bEoP10%2BxIo%2FLY8Tt%2BWTqtwditAJyRbU2Vh1YEzQ7YXFdgpiX6L5CzRw8EuIO6vYOQLp8Rtg3zl%2FBQw%2BzmTQ%2FVyypAp90oBXCypVtBtD%2FRAVuemMsENmkclCvTqDM4qy6v%2FPZVrLWcukX7nImyqEG%2BSX2kydd%2BCpGMu3AMT5IZz6aKpveXk03PF%2B8kOz3oZA0Ok75GTsAriK2otr59VKRNpTY3at4SszlwHUJSVEx51hU0K567rVLwFlrtuIfBGM02OqsFtrJs3OJTn6LoUq8uwO%2F0wBQjP0Fy1wGyFB9v7k1OKC64DNh4Cj1dmc9xR8K1LazEztvw6fEwKWV4bVWuoccm8dfSKEhLsU2F1T9sqP7gFD1IE5lyptiSjyZtt1uXGGAg%2BP9qlYbkHDfhvvl4Zd6oytlSHxXkcZLJPkDuo%2FPERMcvLYLvpA%2BWWgDboTInuvjLB4MSQueYKYt%2Bzczd7p%2Fr%2F04Qji%2BCYH5yxwXRZXJ9HosQ2ODG1SbFs3Zhy91J%2B%2BEQUz0EeaNgbKW6fRfyE8j2qHdJo8EALWCVr03Dm2D%2BMoVI0VuobD6dGO0X3vM4oOD8wUtHw5Yf5garM%2FVaHhd8kqxcoFinpMNytjr8GOqUBlSGPFtTSgrWvyzxpVi0mWoyfiyVsxq1HSn4H5zvFp%2FIol%2FCwMy%2F%2FqVmL2llzSdbdfgoacouZxTVtZM4QgZ6wCrb7NKicaufBQglZGmyHCxCv9R8HN985fr%2BLcHNJeAlqp12%2Fkd4tp6eLzz6uQ1MGicYfY1TzcDl1GFuh2a8krDLUlUj%2FDgBx%2FIyqRFXKc%2BmAUuPeeQ4H2nu1ob5IqRmo3CuvqFjC&X-Amz-Signature=d4862b0e53797d0a8de54a21b99d94e071b435793fe5152b89e5a5c83c2d3205&X-Amz-SignedHeaders=host&x-id=GetObject)

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
