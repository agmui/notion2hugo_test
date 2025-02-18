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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5VWXVJQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDE3AJ%2FHjd%2BF3sjKaBTcNqwq6VpGlNCl8x6fk6g7yocVAIgKgH9xd79Bf%2FXZkxbrauLo%2BCDjV4B6yT2fQiwHmAqGUcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiUPXJGddvAMVw5uyrcA1w8bSueL9nuzlSUCs%2FMoGwbXDFpsPuJkTurVkrbg5bQzTAcAZ7V4sEXZ6QmlsziNSJhrGQwKMcIlVeW%2B0ByeLbsl3oU48jra2SH7drkEmklKtrkIY9x69NIvyMRg%2BOByMmMgb%2BKteAl08Ls%2BIXi50DogXgS5TgPHc3%2BJSkYrRSFbE3h1C%2BTP4XIgqYPEcAsNHyFSG4CAFy8tkY9U0bJxcQAXATTtEtw9x5OgUG7hZPNKSEx0uBBZpISGiD7on4FZmqgzxAd5Unoh2x1craiTvqKy4qUIQlDm0CqHC%2FvNlUzM2sNKEh5PKM%2F6XaFarcQEFILv6OKVBgWxFTasQKpqtcjMrx2vbn%2BZUiyUm4H3CEO%2B9njPNID11ZEo5hvWWEJEBya5ZEnIr9GPHbXg6BJFe4K%2FUScJrOOaVpKRIefMGV%2Bubex8pXCFkNwz3InnBUmfj1nJ%2Bcu9R4FNYXMplSQNIizbqn6G%2BwATMCKlHbwx5Gw%2BUJmkSou11n%2Bm%2BJKx0vDjzaaCg0QNkA1kQnMC%2Bu%2FfSeZHEFlnQMFVX9M3yPG36Qb6f0Tv%2Frz10t9NOHs1VC%2FHFZLbRH9cGlcFrHdebN7d35BbdcUphdNZrbSRARzHA9GeCLlvtUUlWm3l02nMNX%2B0L0GOqUBHndQqZ7sfUcXqX5Uj7LP5M8laKJVI14fxH6XJf%2FJkxLrSWAn0Vx2DUjpT3tknLZI5Bw0eMA75VZVoTwVcGCKmPQXqIM%2FkStyPzevkwTYGfVpbYJLcmWgW8Kverclv2WQvUoPbWZda8jWJgGOIpeuUOgb7Y%2BNbM0J2qwoO03XcwhUOHvWmPSrxAxw5U5iM9hnNNJ7ZgihgmwCImw3IBlfxntJayfW&X-Amz-Signature=ef19fa3c988976dbb7ef1faca85bc380f02f24c3e4a367df8daf04976958e6b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWXBSU7Q%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIH2RSLmpXdtc1ZZ6B9w8tz5sHAI7Ya6%2BoXggsoUuzXbaAiEAqN1qdee11Xap%2BxymReMKAlQzXdegHNG9WhyuhxZl%2FEQqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcJ1oVtxkpzwOWcvyrcA9iTQkW8Z4ZYjs7S41VZyiTbqYIxxF7jhP5ADTSnfJKTPrkQaSZR%2F%2FUm4vZ9%2BHiq8vmQMpKasH3Lt13GAai0Z1y81Xmzo1u1E12yoM9Ok527LUSSAORK%2FGX0er9Vl2kraJUXcltOrRefjXw4tXL5LaPerhAkCEH8fhHCZHe4WGaKzr9jp%2BA99IuJ77G1E24Tc%2Ff36ufH9ypqCjqM%2B41Uub%2B4Fg%2Fm7FnbwsLSBr7IVaU8VpS9MmllWPxqRA2c09EhYy1Igr7UHOhd9S5rltX3WgmrfZaSIaRqEKjrw9Dqpgj487tN%2FiR2NTTyPFHs6eNgvNL7h1vqZw%2BQ8ixTDOf9a9yU2jhrZihRLR96fKjKlcOfiUmDnRAvi1Wwu58ttlQl8uWwO%2BZ36cSUYqToQ0sCNXXWQz4jlGgrU4SbEHnP%2BfR6%2FyEY0FlFOjwi%2B8AN2kYffs6HAr1ZrN1FEEZty2mMxrHon6m3l2tXZ1hW4PkEZmfc3fPUiTl6SKnEjYKa4dlzoZTSL12UJ9YeZguyVCl3y%2BmDuxcgMvfR%2FPyCc4tPdfMlzN0s4%2FhBXBO%2BgfFiZUD5w6ek0NPogGLD5EaTUN3CAkeDmABh9PT8IH%2FwNDzGJy0arhzvVBzzCJzel7eXMPn%2B0L0GOqUBlLDesa0q621q%2BAQV8RXSaby8yFMsvRfpSmLsjanBUkHC1sb8OXBYQ8sFG%2FloW7NE7CskBMyMdEeknmM1EeQd0mLgXP12mhaQLTQMHHzJkgo9yTFoB5VABDMNvfJm7VpztbzNoBX9386uh65ZoZz39%2FJYr4eDH4RnQTLx04E82%2FlGQF%2FqhQA8JYFL3Qy7m0K4W61FCTThm2%2BzB87o6pP4M3NxOHq6&X-Amz-Signature=f755b199d98ec213c9b60d62146ae954d083e7ff71c8a3ad4f1384cfcc91e67d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
