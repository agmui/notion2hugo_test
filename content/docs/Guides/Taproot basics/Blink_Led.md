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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632NQ2B3W%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIC0GW25ur360pQaOPqQyLBfkWQvDASFj%2FZYWkE6EgUVCAiEAks8JgNtJril%2BgCmRySKXU0rpij5r7B5lhg1KIEJaTpsqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH73mZPrRx64WjSoZSrcA2eIuI4wqYDUlGZQU2AbC68GAeWHuvh1JkEqZazRL6C3PwEpH9Jwe%2FpnMLLr0VHgWlwjtzWchUgWdNalt0rDKGiK31Wld6Rq%2BNlsrMchpudVmoNd32zgEZKlwcLNfanPvWtnsdIOqJZDUF2bRXjULT6seRZwkiikH82juo4aO3CMLox%2FfUyHGn8FNW1fz1NNvATXklbrZafSdp0W05YWHwyHCTLHs6onS9igdBe1ZMRh4HW0ZX%2BMeQWlik0lPFHz9U4fxigyTD80bI8KBeNrUzROWGZylH8GtEevV%2B0hVEyv1x51oFrGchtu1QE%2BsPPyeVQKxzJTJmObqHh9F1AFeU9C87tKbixI5DmiC2fJGTNW0kr6mjrhOrGhli3wM1crmcs7XzAw3BAntJ7B848LorUysP2nKLXWkxb9eWeY5scxGIpi%2FkqPc%2BUMKKDoFx7O9exJ%2FKmfI%2Bp4c%2F0cZwvoO5sxKtKX2THNguWVWajiJ5b9MuSvzCITrhOjhHpWkUZT3xh2NRxJ5orI3utSPkX0QKKOLctcIz4TZ4FBO%2FewKvTeCP3UFyW6P4ZYR8oCna%2FMtUTFbbuiCdG0a0c5WM5sLqdBsXTwW8KsdZsjT5yJXZPggMAS5GeQTfOcnE92MJeWqcIGOqUBiwayi0tPPPmZOMmDPq%2BPgqyu0ZaNU0qyJICA8SWDY%2Fzcf26IH6qx4WrhuKK7qpeLqEEtRk05vaNz1qChFKMoVeXP1wDaQTxk0sKSwfN6drQKzUKhJtIYutmBo1aDjlim6XhS2T%2F4ft2ARKrhGCv14%2B8ZFoSzlQMnRcFF2jIjEjAZcczhKVpXYI8sNAokf6TlgWAyIWRrpHRVApjmoMrpDTVy%2Fw%2Fo&X-Amz-Signature=eb23a9d6dd40f3aab4a27374af340f041baeb67729e9fa69c88652705fa828d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUWLW377%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T041631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIH3iowN0ZnFlCAvb%2B2YtipzESrWEArIWeGoO4w0%2FLTBTAiEAtOneiqdsFTd6aAnEsV%2FQtOhXeMC6DIq4lpbWzze%2BfHoqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFalD4a6%2FAcPQm5KQSrcAywwyUzvfTmKvGjWh8eax6TB9ZaCQEroUvsKJgSvdI7pxWPi7QTcjzns7UNuL1ysLaM%2BlcmQ1ZDwFsNq1E2tu8G4N%2Fgj0JQV4Sw5naXynCS8%2FkBJkZzrkJfkufwTYwo8Tk4BMuGUT%2Fj%2FBNbHCT%2FJ%2FLummv%2F5Ss8QMVo6AmSuO4a42%2F64qlEwzzcL7N78AAbtBhaq9QhmpBYFkJQrMSyiTlKMN4BIXv4GLUVhA%2Fbtc4I0wT1dkIaCZJG1kz888atQGzfY%2BY%2B3lhMYgyXg1GPnwV2TNrIT6KvvxdntNRT0cmyIrY69npBlrvQmxVT3NlqG9iSWhVlVged4vRDxWnq%2Fv42ShmofLOLGs637WNyVziUwVclwt4m6maf%2BqMFBpUyFREiWDz8h0MMoBoJN2wRwnfPGaBk9WCz%2FkJX%2B7VTXloYS7ijWl6yCtA3ogHcA0BIKfj5aUiVt6llewAdfQ1wJHJobtPaSFZ7pHo5K5la6rgyj6Pt5F%2BSx0DHonH%2F%2BEeHy6818GP2muS4hLt9fFYy3YNYOBJnQWl%2BnxD4bb60vwSUA%2BJj059c8fHM3k6wR5OBT1NYP4%2BtAmWlOyoq30SRkChU1Dwv6q8xDXgADR02qfZ2LPR%2BsOlEcpoxocs9NMKGUqcIGOqUB58A3GdlIwaWV1F20UCdllIGIQEI%2BDw2Ok%2B1J1SSe9VAxChwLSqMXMhd%2B44oASlw34kawlu6aAluMJ6Soq3eMngAxI3%2FLs7D7DRfYhijEcNlNRHIL606Ao%2FXc7Rqo7kJZs9ZdP8cww2DbNxQ2JyZcEYLZCksoS7UaEzsBe2HiAydJaR6oaiWTe%2FwJL8noYRoza72%2BSDNsrDMTl5gGk0X8YewM%2F6zD&X-Amz-Signature=f039847d952f12b1a4f52b3f387b8aeb7e6b2ab82b25f132ff2429dd79861e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
