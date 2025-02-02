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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJSZ4ICU%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyhS%2BOZ7iY3q%2F7%2BrjKl9buGQnBuW2mDZtx%2B1MFbMAiSAiB%2FayPw6SxiBIvPFYrXuL82IRuDz1E5bTD9WudzNYKWbCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdKJ58ZNwiaWd2Hq2KtwDdnFULvBiq3szFTbGOt9TjWjbOKI9Mjah0NyL2NhGIf%2F6rg%2FjmM3k665o0EtBjf%2BJH%2FdBJSgIqE6C9R0miyKiIHrstKGcj92uBXBrGaFki93paiWhnJT9kiDwkoiZI44SUcXZBjF36MypHv%2Bj%2FJ9ZeT6TSHLJe0oFsW6BlUWAbeFl7yMzpg2utn9%2FyeMQDbBVzf8S3zqrkDTYMkhQHMpfbqYL5MZt1rs14cJ4%2BZwiiBvYz9wfhp2g2mwmMTpENWtG7o3euylaQfoqETcyXx9MqBnFh1zGeQJLrUdc%2Btti0ZNF%2BkIXwWkquHE4Y90Xm8zUyMKeWME2%2BPQOQ5qT6PnsWpgXPFvaqt8hoy4JBEvTNUWk4t5peLkCIvq%2BAd6%2F9kX74l3QPn3ZrbiwDb6PdhsSPHoB5LSU3LlfGfA84PAn99sVEle%2FFocKryb4ZVXhduFxIjJohQ7ioK8OxdhtN%2BTktAFkNH%2FKQGTOHhkc94k7SuA83pcQEerUfMOd2diMFQ78Mn%2Bs0YPqVaOfuKjgyaDQzIIant62k%2BtjBsTGMSIHNVqbqysPPCvAHU1OELb5MQTBBokwTzBQ71%2F7n3gVei6SfCuoLT2cKXwvdp3vi4Pj6CEO4Na1FKBRE%2BPDZSkwkZ38vAY6pgGesESssXIIJWxApX1Bh5MgNtCyMc5R8wUM50sqhhra%2F9Ya%2FZ%2BKFCmdRLTBqMCVfjTfP%2FID5%2Fxx0YkYjgGxazi9TBhfL3u319d5woXvQaDtRmEJPIGKWU%2B3g6nBXnHF%2B%2FWCI703TivLY1sx7Olr9LfK0FzM3I%2F5DDmpk9HfdBYwMsuMJJN1DO%2Fj4t2By6H6VwpDEXdGo94IHZLnExNdFP7wtkqxBfza&X-Amz-Signature=328271f2f29abf623bd3bf80435eec9508d87d1ec1b915aa5c544064e23bf67d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4EIWZ43%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCINjLisrSkFNADAGlf3ihJbmFo%2F8qyoKPtO9xnrtHKbAIhAJULJgs2M%2FYQeZFmHjdwV5T%2FYvDdH%2BBVhkIg3cm%2FHQaGKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYC5miNBLqHP%2BV4EEq3AMwqItpbJcEcD%2B%2BunNVE%2FC74k12NBS4C7UWhlesTnCfQ%2FPFv%2FxMPZOMzYUGKe2%2B1xAp6w1a%2BcWI%2FJtTJCz6dtwkeypBvppNWFC2tAb1w7NfRrgm51UnjC5flhR4ojhriYPfNlZFEB%2BxEpJYa%2F4S%2FT9KHNrbWTjLfYT2WY98a8%2BVuIGzbSpWrqYK%2BcKJ7vsn3j1YfQBb845bh6jbHKYSc7dhF1HjwKnSuniE4YClMdj%2FWgZ6F%2FYojdX6k7gzNZuJX%2FAwM%2B0naQ31jjoVJOVymshSDzPGVuYkc4Ao0fToZ8iq983MElU%2B78D5gsJnmaiklr5wXktXNbjVkn%2FqDU0ZpiqjZYJGXGFDp0Mn6j4%2FExuPeX1689VyjqPMDa2HKiI3nCzbjA4Q5%2BoKhxPXfGWFQu%2FKJCEr%2FS9CPMB%2F2Wsw4162k16d0eJqL4Xv3dMTkRTAgmabSWjYsCnZME%2FwkGXuVQk3pXQv7eyEbXOw%2F5NFjdnXDlCVJZW69EG481w7muJlemKz8LbXxsmdi1%2FWOsvThuMq%2BZBhKwWOmcDksUH2Dz63PNPYI%2BAZEJoCouG3orl%2F%2Fi9JBiFItJrnL4gV6HSduxTru3dy9V59r7XC7ABiL6FzTZ7AsMWhAjtABSVgmzDznPy8BjqkAZeEniJVlymltHUGKzy5kWnmfG1arhCcW1Fxyk3an0jJXsjiisKufBe%2Fk2C9GfWY0K3mTMic4uWgkFKcYIjRCOxlEtOuc2D%2F6xmP41r59kzDlRVo1ToPnHB2OMDoxS0QXBoLPnMK4gkwUA6Y%2BcxQvQaTTcK4D8LwB9yC9RWH%2FA4K7OesT5ctGbZm4VuNXVjwyHVD8HwCNrieRen9Rs8%2B%2FHQ8dXwJ&X-Amz-Signature=f69f21df8b65d615efa4f077b002249883c1bf7ad83631a802aa026ee9e830e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
