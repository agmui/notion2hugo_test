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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y3LFPTR%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDQpx2feqRwqRhmMpCakkJCaZbd0zIzDUpZ3ILI%2FfPdMwIgIpsZAP6Mlljr5PszfQJorDe0fXDjHmQ2YzK8b54orIAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJReEMOLweCgoByC0CrcA0SQDqhCjbydyo0U90Vgs99rjozL88zkdPm%2FnrMKUxBDPJ2dRKfXNOf5rS81vL4rS%2BWb6daWm1wD1CI38NV8%2BkWmtywGjN8IuDFiohY5O7AfmVHxIJgeeUstuANxXOs6I6C1ACu0rrDUluk8oiGA83QCsuOQtl2phQIj2YqSjXXudos0cyCmsnXu7LtNZ2rwSnADxgL1962rmGeEKVQCRcCGeaJtNTOaLmRVrrq%2F1njDbDoBp7ZoM0RCOTkorjrX1mhlG1QWgqlTd0xANd77LrcfqFsj3u%2FMT9JN%2Fhv0jrkRo8BOkcTbdbma4mODR5FbCr1wAM9d1KoPii%2B3OblwTmz3UrKxk8d2IQ2%2BuAWDdFzFPIHqzqrno24enVm9NFEg%2Bj%2B6rXMkX1uIlp77sGcTE86L8CpChwpYdIg0AENNfe6k2R0UsXG%2FWS13T5Q0yyxm3VVZhdnb2kyIHiqNyRWeAWU62uoeXwIG%2FshZBGcfeKF2v3y3ANosBYta2gIbQIzwydS5eCDtBSyYj4XBp9xHDgCj%2F7SLiVvmwCFMsydzLFl6DhJocOOQ526isCp%2FgsHdL5aF%2FQQhdy7V5KYI4C8vasacVlnugy5WZ9pKpj28PpxypAEwzlPA80%2FIofUnMPr4iMIGOqUB4DCQv0zHLpOjw8I6dcG43HmiaWUsEfFTfKimW3UYxIRVxlrHLinuL%2BPYQ%2BpApkfsb2N5yxmoKSp0gGu9rLKh9HvT4jkUruMeLaLUFKQaEjKKCFB%2F5ZRzRmdONtC6p%2Fi2fe0dzMPm1rAJIS6cZGAqQJPnj6wcLJMv4WufBI%2B5VfaEjSCBb%2BFjMTDWUjBpiksiFYOAKXR%2B4bHE9NrziMtktPx72fCj&X-Amz-Signature=3ff378f07e7386a8f021a0898dcda3a1f53b7dd4f8a20646e8683b45df12043b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJMPUT7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T050942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDvLtXYyqqDb6ToTiLsjA8D7XMs%2Fil5oVlEX1YmX0vzdgIgevYz0bFAPX3SFR3FBavk66hg1ABkyOx4ot3frGlszIIq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGp2Kvpz6aNBkcPyKSrcAyc2RFeVlXUTAsUMtCE7uia3dKR6FugBl5a1yUARC6IYxMebFFdAr1pkTo6zJJulQjaIqCmSKFsTbNOSqUXVQwOz5vaHFW8sxyiNa72uat3TIFHY7G5y95uDTGKRlyK5lvA4bxXXX6599ALF8k3IJM5Nofe3Wu1m5gt7nW1UFYvPImJpNg%2BDm8kNQ%2BItKDdYQxLaLpOg4iz14v0s6vwmS72zTySf6swAxeoryBhjUfHwmaOZ2zotlhRljAqlcIMJ3ePc79%2FpTMnVlL6jAKmySZ3EczgFi1VqeSRI%2Btd8ic0Peae7xRhypufHI6QYmhs5hQLy9OWEzBy6S29HgKKVZN6kLxbF4SQG61Wlz%2BVCqrfPpn8ZFukIw9jVxKxHGc2k8sCd7N4QKBtFFWQJArdFuMeUdeO2ExsY1n1UkDcOQ91Kf8xQ6dxkAHvG7kZwzVlM51OH%2BYKqmyHQz7ux1QOC7IPgNdth6RKVnycz8M2Atn16wAZvbyKlfs8eyYpaf%2Bm155Nv2PH1R3KTBOhAnYJwxPEvoHcB4IOFwLEIOnwyFrH7tAM8BJmXhzbzEHKzWw41GvjMbY%2FNqIXflUO1rbZciQtl%2BV6I7J1REscZHtGmBuN2IxbRyCfNDChe9u3FMNb7iMIGOqUBMEDCKeujos11K0nEJ7meUqbhNDuvqaZUVQ6rwNXLyLtqKvib8sT7aWYWmXWoefb5GNQpTHp01MS%2FYCBaXpArzbUQ5aIJ9rccn9On6IGQLWb4UpDRQRnELeESJbMcOuaqFUFvNVVuxxywl35H1enBKN%2BW85LNnvhFzSfdgvsN6bQ9D7cdYSoPWcukSYZPN4dRXhtC1eddkF7fqTv6PB1y9T8OEINH&X-Amz-Signature=85550a7dcba1922e89ba6020b83b2fff85666584877803c63603becc01deef0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
