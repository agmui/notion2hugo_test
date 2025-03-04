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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVBLE75E%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ADy3VL9EKeRqd3seikeelR%2BxGVLdfgedYYAeD3zIcQIgeRuExtsMbjKI2j4QMzpbE7EaYQqpmw7NJUeRdExGiuEqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCox3TceZHepVGtkcSrcA0L55nBq02QRz24n2VigZmjEpbRB2FGo%2BzuJVoF4YWQSHJ15dmU7eGRNNwJOsM%2B3k0wh2SIdldK9siB76J%2F261AyKvXAdzRYPJl%2BKHjHf1nWxU3%2B8lEMxgM%2F5BqrWufFPSPP%2BjPXtD%2F%2FWPNJLt%2BzSWzRxSfP7WMxArrcrlvpeLVklzt8IX6%2FWq%2BSatGV78lPTmTbp64MstOKUzmdmoyUtpPLPeKcf1e2idrjMn6jo3mxwX2rIqDfZXLYBUdZr%2BtdB8643Q3Z2Al8s9vruCpuGAAmI8RKUdHBPKkTi8fCKpzWyXYV5RURRaacQnYVgxejzi%2FphrWRYPBr3H78C6hCfHkOZu5Wv5pl0RT4aGC2ulTuTIcDz9QqgHY0EWbPfDugMDG0LcmO6By3J9X4h9M2RHGDwyMBRUZxev5elZqfk1ryt4deXVZankFGVG0aDbawp2HPfIMvazubju8zlk6jUx%2FIXFaejYcjM05tSwQ2y2kjdatUBmsitW0pWHz44gX%2FdKQcz4CWXmySZe5srWinSk0qHzNgJeSNQF3hhPOGo5q1LEbf9AtQxy7QBwQ9w7kVcknl9fsJdbWqSWB405cm16dkN2fgtLFoVpiSnAzD3OMbA4sj3RJIQdawQKS2MP33mL4GOqUB9HuXtcDoZuu9A%2B6EZVsiO6ghA5eNNLhgygvA09MzOmBU2RcJw9p%2F7svW%2FypPW4xYRnIvlq8nO9%2BBmNEzjTDLDxO5M%2FI%2FSd72sXhehpXFFtXUAwB6OzdjT9YQaKRFgPa6Nshl6S%2BsE1OLcj4okzImA1GxxtTuF7tzColhxwL8nquvJVObAf%2FxAW6sir9CwnVec5G8Z6P1yI9ZAJ50xI8ALbI5q89l&X-Amz-Signature=50ff414118f50ad77e5f92e0f74b9f41c916e00934c05a0623c2f719bd43bd48&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMRLJSC%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNJroFl9ktq%2BbQ4LXIIGkn9ysd6rUgXcHcRNB7LhiG4QIhAP18sKTd%2FaHlKG%2FzIWaizhlccXJHZkN7s3L8qvx887sUKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5H8SV8eJS6e31IFEq3AO718%2FeyDLa4fwzMCsvP%2Fs1859KP2w5oLtQbdqWepBxBJT74zqZn0p3nfgVCaR62yusYO5wizeI7MeyqT0B2CTcNO0%2FOtxlmyWXu0tOBBR%2FU1Y4jBqHOaZ%2BR8YjTnU9NZ6R1LpQWyrQ4xvxEDsMtgl1d8oeBUYhH1RLaup8Jkt48AyvHqlYNqea7f4sxNfUUQwdVLCDWJUqTW3z4yt1egKJYkeUefq0C7H33dEFdgGluiozYnCi9T7mh29LroDzw55wmuIPI33xg4GLa7OEV37cZoCB4IIDSGSCYUVG%2FYMP1dIZknotdhafrNg0pFZYyAaPuBGT78i4vM%2B0gEsS1TC2QP7NtZrm93UB9p7NE%2BF5q%2BZNkI3JoVF01NWN8KYMFPxfZDeIU2McweaBT1fMdRZD%2BKmxli8Ylhgo%2B%2BodzEZdNnxcgC306uVBpAj2M3iaH9Q6LG3Elm7I%2BYbL%2BkBukIgwbScALO44Oc%2FFXfxzGwFtAn5nLcLOoe%2BzMTmF%2Bk8gI67eTxWz70kAPFyqmcxcwKJ7eYngZeebfx1C2XKUUq8ndhaSnCCEQcEqKmUhQHxDN1PHzWBKHC61TZM5yudFvDkaIm4Wad2QxNwhCVPBfssbHQeyAgz9%2FUZ%2FIlG%2BxDCu%2BJi%2BBjqkAYtJR%2ButXrfCMKmPNmYZv08W2L3oYz80IhMxQsdSkSApR4NpqCu%2BQM2NdoWaPX534JAvIlbW2%2BcDqzgMRFdONhi8Eb0dtQey5jecqy7fZdJgGT6CWV52fPZA2itYAfoUyLlCzd0TIsijuCYxxgVfS1walQ9o48gxcy%2FcL56vDQ9ja6mmQSSLq%2Be8WAtBE%2FnQRUXdav2nhhdrSl3JB4QQstf9Oxgk&X-Amz-Signature=f13d8035f8770ab7d61568bc85c3bccfa81fe55e53645b12a13a0f9d01975fe5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
