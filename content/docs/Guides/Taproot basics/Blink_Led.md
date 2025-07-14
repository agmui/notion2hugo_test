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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZIYHDDF%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQC6aXVPyyx2tSENk%2BZtK35W9eDJ51wrHwc7nDlOuYiXMwIgJbVBJYLd%2BXYesOj%2Ft5IqFw%2FXcUlzkxrXdP%2FVwYtUEO0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDN2IE%2BhX%2BwpBCOt4gSrcA5N8GsrqvT3m4t7nDvcZGfX7tDq2DGOo3P%2Fxq5HZDXpjnuacyyqbaQKLXIcOqiZbksDR9pgt4IPPhnmUfufKi%2BVwQlVrWPHWEVJx1Rb%2FWyvpI%2F3y0x9NmF2h3JcPVOge7bCJgotE8zktKQ1q87umlWVdClIWfYo2hh%2FUY4Q%2BT7xFVz0kDXkg8wCTsw%2B%2BrabeBNQarafrWRZ3qKzh4mLdadJtcQIwk%2BFOPN4MXUsl0Yf4MNO6VQMFPX%2Fr9EF76YJ%2BVqSzpq%2BM2Rd942fepfeTBvyo8RpRu9UPAykf87V1Eu0mlMZWF2wF9PDVynRGaDZaIh9H402og%2BMhxRecv8sAODiL20IRhwU5UWRji%2BLPT8%2BdTf%2BSxxPWjnGLcuk50MmDj61xa%2FL8Ym%2FhqciPnLhAie0M%2FXgrIEd9Hm5mjsGxGVeY4j7WTiAm6Y37dGB2wIAB3e%2FYqzVKKu04KM1hD1gkCbxG5oFwbCrVo%2F2qxKfdvJ%2B7H7j12PIqZSC%2Bll7I0BItkybLA18zNdMy81tHr9rI5%2BAS1LeowK8Pi0E4G3aXRJskA4GGfdp2C2XLeL2n4yQWgbh6sv1LqtD5EpctwANFe%2BfsyQ2ncPWhG6VuBc%2FIHRSexu2%2FpYYiAn2AUT%2FWMJGy08MGOqUBFhB8cKxUkwkx6ta%2BBfRiI77KHMMjUjoNYU7gfcmhbVmWzDs3j4KBNewRTP3ZlwIJYU%2BzHBj8s9AiEehhXxCuYH7pDVvTwfV4EdK9nerV3k6pNyr5KqzhqaBqCxSg8rHZpYRqBHzQnuxn2tLzQ5hFj6Th1rSIz%2BoEeHvIuDiQbv33EN5GacNmO9OlxYWigCwDA9Wq%2Bb4eLCAZlnNgyWvsYurTxO15&X-Amz-Signature=861c1f580bbbbb568b68144c8d72dbf82b2c9e95cbf9e19d1fd63e3d3f26f053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILMRGGK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDFk4i8G5l1HO7Ykm0hmO0ag5M0Ytd4kkMd0tKUeahvhAIhAO3r1sAdpLss0sGqBahchnKhj4Sy6msd4t8hI%2FEpksCCKv8DCCsQABoMNjM3NDIzMTgzODA1IgytNzcaMzpTARl1aIYq3APccP5zH4f3HGV%2F0vGTkV0XcwHYwzwWkS2klE3Ci%2BPWVH1%2FUiixPWdZsGAjclxRTdemL33Nls9Vk8YbjAba6VMKSeP%2F8%2Br%2FCdgjvoGjV7bJ0Zi1U73R764uCuf26lkaVvtHz3ztm2sj7vF7aqLjYnAmB0NFqd1GcUtQfkHAEmQ3TR1%2F83tKi2nFzsvyf49j5J5hDbd2D4EqYU0jm%2Bg7Ltel8vzl9KZIGTAiSCb4yAaFd7WXrAWb3sLj7GXy4qz5HUBQ4%2BGslmnYoXFOS0qkF0N6uid9UqklJG2pEurPUwG30R8KimK7kEyhcfIYlD9NaK8sXlxCgQdy9rRFQ9cHl%2BkBPQ%2BtIuQFsAsyv13SjJrWq1Yw%2FV2tC5YSeO8TlQ0Us6b%2FuKb9LBBPKmoL9SjP9xYmyJFl8AneVbx6AW4VzABxM%2BbxD5FQojS2NfJYu2ZuG%2Bf6uss2Y2E29PcM1QKht1xOUU0ub4omahUErK%2F%2FrRMBs3Wvfdc%2BXVTuzJnG35kZFdtsTtDb%2FJ4mLZHPnaTthg9uhjCOHoa2zah89uqagwgTNKeEDBuG2DmcPR%2BTqdqQsTo2qBt8AZPXG4zZAZD%2BK%2BY96xal7E0QyF%2BSD4In8eQuLLqx6p4I2rcyvKGXbTCZstPDBjqkAWIF1rXFin651p%2B4CZgMK6v8gsSlnAV6%2BWnU0qr3yhb8sX0y61N1OzT%2FOn57zl0xeZDgmtz32SLe2finHboAigdev9Kmq2G9X0n%2Fi%2B%2BM%2BS9qFQKLtaRf6PyPNjEePk%2FTwnbbtrKuUiRXby5P%2Fi1kQCCwDQOnwHE4oA8aVnyXH2KofiQG59z%2FoLM8RnfKQwzctLWUk98fXy7EnIfdfEdP276ijxxW&X-Amz-Signature=7f16aebfa22fe1d386dbda601459679b231a1f20c9dd574fe21d059f959a3857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
