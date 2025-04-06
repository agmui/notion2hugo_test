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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672CLFR3E%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkfVg1bCzIBC5oQ2PjmXd7ErK5HxC4dmfNryLFvExPwQIhALOh0pg49xg9tS2qSpIeXH7GdAHAOMx9C5NuKRyo3iReKv8DCEMQABoMNjM3NDIzMTgzODA1Igyu9VcddCIwSC5PXZ4q3AOOhfgzj5y16KVW6Nu6%2FjJH7hl44%2B%2BLpZHS8hhRXK3pYBYpq%2BVlPdMUBBpIpVgKaelTEWxY33oZ338oB7ONtcI5o47m22y18Z%2FKqFx%2Bq5vWRBY5wpQI2%2Fmk1BhLzoE0PseJ520gGGTM2fAgxHepXH3s6Dk1k3Kxlz7TsRJJAsYlTZflMgU%2BtC7VagElVb4YexvbeiFZkfI3DqwpM4jcG3%2BTvjiyTTNYtZaYfboja62HUoLKCAKgbSYHx71F2X4Oru%2FKgN8kbKho17w3jPwhmZzCYa6MYUW7xqrxikq5qr%2BKGjn14hlWh9DpeseO6XirRVnjTVExuTna%2F3JKheUiCyS3wP%2F8%2BK5NYap1GSFXnb5uiqKyA9o8YX6owAWsn1nyhbxvcAj46jBNlvnxyKFeCEoOr2J8d4CBcNEsXwcLvzZNpRDqBbmyptIDCHkJ97T5rM6V0rG8yc2Dz6P7GSiip6IzGXP795Z%2BHEbueKgXefZHHlS6SiXKMHMntcv5ONura9FCGKyKFNhKLZgybRgcp1zInS30uy0fFghmgP3jjqo3N9PlaKxrckA3HE7ZxIv9spGI2sPOT0Bf4MPSQ0pbppmyJiU8RF6b%2BSrpsVmVSkpc0zt3jgAW4kFBtnGmsDCLoMm%2FBjqkAXH4CDyEV3QvPW6qraUl9MeQjzpTJz%2Fd6v1vEMcdZx%2F%2FV3kqTgHZBkLgwQLKLDz6PpwWI9AvF%2BLaRf24gGNZLsvjEIedyzmFvhpRmLBIP9ygcaRcmvSvq2zqPYu3tLJUog2awhE4IR7YuB299fjxBPVYALvOXKq3Y3HmrOJ0JsozPWfQ3ErvBjYLhYt%2FOYT3xw1WXJ8lfFQDBgigUr4EVc9vytQm&X-Amz-Signature=6bad4c818f8cb8beb23b1e1a4aab7d8404507e74b10cb09535e3dd6b973cf44d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTBKUIFP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T110155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm2gcTF6m0JZblZEuRWoe9MlP9Inu%2FtdH6ONtjQAPP6QIhAOfuMuLN2MQC9wUQvd9wI23xY4Rsw6TOsHHf%2FOXuL6HFKv8DCEIQABoMNjM3NDIzMTgzODA1IgxMvguDzVbJlOL%2Bxdkq3AO1hIsHzIYqymn7cF10%2FAPicxdhKlgfqRCtYdaCqSr020DTQX29FelEVtx5O1zyoUyofEKvnKE6FUFgh%2BA4agEGQ%2FAVIiqiAWGwvSS%2B8YBe46t35Z%2BJpJ8x%2FQIkNl4YmjojrYHku0lef4Utw4VTHTcwt%2BvtYMQWjxiwXYi%2F5Khd2J7n3LqfCAR0SvqUiV%2BOSPkMJnEi0SvVrFXts15gAkAuXkFyM5gnWWB7fUeD6u5KhxsTl2Nf26KKVWT6evhLFLF3jFlzlawEZOIWKHM8O3VbFmnV2KVxd3QDicrq2nK4yE24nTYV2IG2hscTt3hrbI49KrpLhrC22m68epEDwJqQ%2BgVH%2Bg6jl%2Fe54w%2FMQmXcdBMjt%2FhGcDvEeKKw0sTcj4ScoUIYGQapltcfq3RF%2Bjf20D30Ua8CJWHDs8MHo836CGvFv3RTfV%2Fo2zmJjjf3%2BdKiegt4lmye%2BZ9e5hb3oTNVWnZ0TJ4U5gjGevQojMcHF4j%2BYAc8VadmUOYfcsBgAZDsVWblwsYxc24L%2BmvetvX6jh%2FtOFE9CWbJlhfB57gAV9EtrUStR5rY8N8d3zTtxt0U%2FlGdugFwN5%2FfZPLX8OUfQcTGVR5R49fRzs5Tfd8WLYrNBUiDygOz9ijyXDDG%2F8i%2FBjqkARvNrKoAghzorZe2pOZQWDyRuX2ALX6mtwIkyqupwuMt97IigpYwFNbxFLtEL9CCDFaVbY7K6%2Fj1z6LpT2foTEnHT7tUHUw1%2FAWy7gElHKxTOEDUC8rE1qFVezf4ivaR0FbzL%2Fb7njrEUUkxPgWpIEU%2FU%2FSXntc7saP4K7NjGPuVbWU3fk1UiHB90dK9i5JqW%2BXj%2FMNhejCaafpF05yzwR7TLScV&X-Amz-Signature=1832e7c538e0b0524180e55b725e17e27789ad6fbce7b48f21d897568fdf96c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
