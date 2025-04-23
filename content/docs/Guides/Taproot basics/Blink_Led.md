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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AUJ2HOV%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIBx%2Fzz99%2BiSlWveTAKVBdGv9C0FTsiGpqaNgPsHaL%2Fx9AiBBX1UBIzFB%2BHcD757Be%2FtGV2TWFnBsOcunzzrFhpvIoCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkJ87mh0zDgFKK21QKtwDfKOsBLIlo9Uwlx7isAqKLvAst0MzSSba%2FOQdIKE3jluDLtxNa4eU36JP9ApfTtnYT0EQzpcZ2VJggG1O%2Blk8zdXX8nWPHGhnrrYgrKESmvni%2Ba2H%2F3ICCmpL8ICOwMpGTcBmzifa59w%2BXn%2FSiUhg6gQmJcB3d0zyUi0I5woj10JOkSvsfAFho1qEfUXovGdDyWngmHxKJJpwdbb%2Fb1Ll3z1sf%2B6wdqVECEsJ4RjHnyQNmLy77SuyDkJSi4XTDAkm6PbQz5PqHuU2U%2FBSuoT%2B9yfnroHuVltpfClgEiTCI3kYd3ci6%2Bs%2FIld7lWkq%2FThh2lEkLHH4NTmiqqEFhIcBM%2F%2Bueus1WIdBYypjPVbvmlUfoFB5NiiAsfbapuwT0RG0MwglPC6vY189AfO0Ssar2ozd6O2FH7uuiB9ym7TWdOmkkrJFQPtW5G97fz9omEihps9SmfvwVvhS7AASaMWB4IRL%2BXK1%2FjheIbbCS%2FF0bfQXxvLW8lBUcbN9KlzybxMdZj8GnEtA2JOPzN23NKVA7y1YPxRyzPOLgxx%2BfBptekf6D93U3hhPA%2FzZj8meq%2BEUbzqbxTNZkC6jhko28Q%2FP%2FbHxBAfDdsnlOp%2BpwQwMQZprmuxIZL4KwYSqcHowxumiwAY6pgF7xTCbSeabtdnxunwDZLpBdUmyOtWEy3smM2mfuEgGV0PhZ9UqBTAzKEePdOG1cseMrGxh1zWvjLTaUK18txE%2FH6H3%2BieS0BveHywM9n1sPCJrROgb7ZdexSRk%2BjShuWeeudU7Cjx1Hz4l%2Fm05PaCqnUyujIha6O7X337OEBGd2GaZINie7RuZQq%2FSE8IkCsAzamMhlhhWEgnKfYUgiF12NGNZ%2FwJO&X-Amz-Signature=8b14b14d21f5a9b88a161e6db4ab44b22fcaadc7bdcd73aa3ab31bdbefd6c581&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WISAX6HN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQD3VicSdLRyCX3aQO%2BtMtOsJe0FOR7YON2D9WzPTXZi%2BAIhANv6VFKfvoi3VF1qJq9EzeFL7uhLl1WP42JzhzVG9JlsKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwi4uXfdPbDLjsrJuIq3APoyHumwMeWHECJkAe63ZhHWhMYlGLguStrd04Mo%2BFFpxfFNlW%2FuOidtavCoeE42IvJtE%2BPzhhul2YPdP6NYo5PcO0Z%2B2uIaO1HeC9hDgUW2Si3mthw9dl%2FaIggjv3mh%2BpCKdeMmc4Eig2q9hahQNCNVSjkla%2FR6GBCOHghZD6QuwkiqyrbHmKqHMbOibWY%2BD5Hn8YcwJMriEG3QU6M5wcqR%2Fh5NIYQX9s%2FINtQhLY35njI7GJqSeyuAoJP1l%2BxPiICyYJ9w6ETJvsFin%2BGibreX03EYG7P20Q%2B%2Bll2P9KoxgyoiZCB1oJaB9x0fw6TxNHdtFlkkPSWX1rigAkaomVQSB8IlCNd1VA3%2FU8VMqLuRwojao6palxEAPYrMblIW4VxxQHdDqpcIsGK8mYarbEfXDBJiFI%2FrD4eiCm%2FMwH0zIrLRixBJldaeNUhBSbmiqP1YxxjCMcf%2BHp3b7kynO%2FAY%2FtBowIKYDgzeNDNBchLflizs7s0fZScvkywTj%2B9M5Aw07iUU%2Fus0QLI0kj%2B%2Bxh1q6njL4ScXPaUjQiRQ%2FcwQPBQythcbBYrwSQuW%2FlHtGHL%2BgmSkjc8ABtc7%2F2IQdgPCrs4sV7gFcr36eXFqVDPmKQe5hdu4w4RlRh0TjDs6KLABjqkAatvKFieowhH2jHK9x2yvDAgZyfp49EpJPZeSBLehCjt%2BHe9fwuWkytrX%2BmgUu976cYZkBG2%2BN%2BipENcagtIyDSVp7N4b6zpUXERstFFdSKLQHZXHmDnQRbX1mzTz1wZUVFzrsi1kjyp3xAaatoZ%2Bi36qDpQA84RO85P2%2FzCvMg4eTow05vOEzAYy8LCx%2BgsplCSu4iZNtpUE%2BbYI9B9DaStxgzj&X-Amz-Signature=4e666453363389758353f65559c00bf0ca5e1ff2a5c6c78b241b209e4b1d6689&X-Amz-SignedHeaders=host&x-id=GetObject)

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
