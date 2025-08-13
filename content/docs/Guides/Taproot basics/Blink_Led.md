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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GG52GWQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFBzGy%2FqnwXwlW2tCb%2BaXoAeYc1CcYeuV2FsMcG0zCJnAiAd0F568LFTtEo6cv3Ww1fZ86VpJcdlvQAl%2B0Q2DHQCWyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMq1mkIvOO5aGkmOKmKtwDTuY9494cjHOTzDlQaCg1KQ2y7msy60qFWyuwVAOFUs%2FMv5KBRTqnkXZO2DBKRrklvdeUyJUtsdamibbvmBzLdtjygfabEP2gsggz0Vry3o3dm4AUYKmkYFGz3pjciLPCAVSQlQPU2F3Q9Fm8o9NVy7bYIt0F90cUApWrFOZ6jcE%2Bo8uu86z0XZmy0kfd3ZTvKlQtpprKQzN7vfOJptrCD8zj3SehHQhXT8YRBuWraqP2ZkHy6tgMqVqTNXc%2B5QKKcz%2F0nK3gy2ZVALTpnWN3iSMdQV%2For1h0i3%2FEfCX77gkoOaxpaN9HwlisHzSAddXzaS7hN1%2FgRIQqbDd53w3qMhrlEIZmkXvtBPHqDUkxlTWK2s1ZInk%2FaL6lSgmF2xgV5xooEU8TzB1JCKfdFUJITD5HmHZ64gfb91YanBrfB2I0OfFPBoEtsuAa5CZgLUnyEqAVIBxzkaFDpvvURaSL7UYq%2BXoUjrUCTtu2CqRyH1%2F902RqI4VG%2F0xBZ%2BkoYPwxaXZlfzB8DbAXT4D118bV%2F%2F3EUwkWOqLA0B4hsh%2BYal3Y%2BhbjoVJ5lSRj5mNhHrSGNZIT%2FmKy%2B%2FPSEL9JllVbjIaOJk%2B80K%2B32MrhyUMC7xPKi5t5AbfMCMZs%2Fpcw%2FsXzxAY6pgFBQ9I9hSvRaW3Ps1rcRYr04ZO8RZW9I3mXfGM2HOLLe5AVDuARozAu3m3eYqR%2FXqnIjxoFa8BePMEqHNC11a0YdUCD%2FHclr%2FKjtZbnYzIFOhWH6FSCYfCzuIITDZqrRK9meZP6%2BQg%2BTMPC42mvg9pts2A5TCC6KnbSWKO5MCgvMps0rhW6yC9o8uzYqZ%2F8g4379cHlnECmH%2FqZ%2BcFS7ReZhPA2qio5&X-Amz-Signature=80de120ec524dcd9e4fcfdc9211e4032c2f4891a293f257d04a17eac9e513916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWAINIG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz44IYZY25FeYy08MAflajPpj5WxHyWUAjX%2F3fdnsJIwIhAJQLIOmqP4M2KKTyRIBH5LbckDJyddGssmz3yjACKSRpKv8DCDQQABoMNjM3NDIzMTgzODA1IgwODmeRs2CetbjKzZYq3ANYCV35i7KhckExyWS6oo5wa3gzdEoP2Fq1jPiF8c7BnvNZyQ8I%2FgwhcniW9Kq0w4R1mlq8WhzXIJ3ZCgajNjN3jGT9l3Al1i0LIp06uilnk%2B7TfSwNBHHWgRi4v%2FvmZ3k%2BJ%2F3S69FKPZEpH5GeSb%2Bx8qiJEb8ywaufyuE2npcHnspG3eAktybg%2FN%2Fe4cQ9bHcj6zJRflc%2Be5BFHK257i1aobjSI2L%2FYfzZHTh5eBsZ36f6x41GQl%2BjyhNQT6SLXsXkucSKqeAzjJhjd%2Fy4PgpunsB8PEeFqs5eTOeKNjLtLNRhsp0o4hc9eSPiLsnK089gzkj1Mx%2BsHnjHXrtrNGRdiFm1JqZ82kXJVX2ty%2F7nEZrrRyI7ngB2AprO82wLT5%2Bfn2W9Oz71g0LFHtXmr690r2qzKNR23Ya%2F5dzhEJgxat8PHH4UxfHYL5NsikcnYpv3Jgt4GTAJMvrOShVwq9n1s70zLq%2Fh4cgRu4PBpEWvYfgoLW3oCZBSXli4MJLE44R9bOXlJAcDzvsG2rtDQRAMmRaRswe0Cq8Ard4mID4VIWC3jP5Q6TIw9vRVoAFR2HLLC1RJC0AvYZXaRMUJYILvrdgLAKDryhaNp6x6I1EJFYb2K7g6Knn1XdxBGTDMxfPEBjqkAXDa4cJdiAz15jysh1TxqHb5KaQwQ8lZvbDYxZr%2FjvZNFitCXAZ9%2BM8ou0jTy5VPakCX4m3x7wZ%2Bf%2BXtCnhc8zzmktXAGlEOoLgrdiqV3D7mtnLVvl1Pp69cxJN6vIiWGV1JHmAgyTrxlzNHMQzoaJcdMmjKcYWcoAdCNhe1e%2Bf23npslUuX%2FPPkTti3%2F8lMlCBS7iUtLRfhfTy1OEgL4zxwfZru&X-Amz-Signature=0480d4cfeeb7164bb4c3c669a2fc4f6bf67de79463391261e76624331225bec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
