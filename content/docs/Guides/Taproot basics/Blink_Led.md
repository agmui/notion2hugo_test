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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T5SSXUC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgw6uAfYTqtqpXLaKyg2kd5MpatkYwT3P3iWfIteAShQIgZqc0iqowW90a7mRSmO5Xs0VZu8beQZYQFDNHHKdS520qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqkIVyCNm4n9ymJxSrcAxSCcFcoj3l9RWfRjWBSJmIs4%2BKzsgmVwV3dpEJWsQXffiK0gEqKi5pduxLITFlNp6OKaXqBcAlL0Qqt3zyz7zo5DNUfr660DlQpGtRiHrKIyQNPAoCxJRaSpc0yRPgq9NRk7WG9lcv99IsqPQ%2FU6xsLbXrg4McAVoGdXGIJmYFVTB2TfFu4TQ%2F1hO96jM8AhJjovIpQPvnjE65opP9eDy5lcTsNicRf4MKnCAsrQiuy7%2BCWDx7L%2FWHn5tLNK2aSDkAClyOEeobFsRuEUfSk9rmWHNcKTl78eTO%2BkQJLlOU7pdlLmo85KPKEg%2BCNc1wjBKzkZAitk049WGYU%2FTcF%2F1Uov9tOsmWZCEETiAAfo9RCpylwNZL5MIxK4SW1CKt00NmeGyGV7qBpmWIDnkbbdAjAEGdGk7QsX2D8jWQuD5EvdvOtKNnivdrSXWqtehJMikBsAB7l0hTCpMKsRCMDmKvWVmA5%2BuM%2Fv12Mobs7qh0%2FUc0nV1pFSRO0KWTUyEICZLhwrwSyNJfaV%2BpyZAAJi%2BgzeQ%2BUedgSeqrxeIEXQoMylXD491lBxa1PJWjEDr4Bc%2FoCRC%2FTjDoBkr133vIBqREpqrz%2FHUVhOcOy%2BD%2BB%2BDJvJbVpoHCkob2KWphEMOHZysMGOqUB6y5xfwaxG4rGs%2F0dHdwHbmtvyVKCHkIUxsDwvU3MLRnxgwWMfQcofKCJc24ADwFzOEtodac%2F8SsvVqkZHwJTIZUqfw1bb5JAFcltvsuvgQm77CHStQCswKNeWyHEvxXjrf35I%2F3ReV%2By5UE5%2BdF4PcP4xzH7ELJJfD9i3zpMADLZn4UKuLEikLuXZND0QO1EPhT8Cl%2F%2BtLcuJ84n5cevfufjHIlv&X-Amz-Signature=d23fcf7123ead7f5d2c4379fd17ece09f033a5dbbab8473e00a4fed009965aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGWG7Z37%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFavBud0uJqpt4RdFJiOa7grrip0xdauDZpnbX5nKmL0AiEA5EIp4a83d3xS0Csv6i1fAbdMwVEX3l8VjGcO4I22scYqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAy7YEW8G7YiGk%2BbiircAwWJEpTQhLVdQd%2F3pvL3Y9%2FZ4sSVHkaepqWPJLJ8WSbiwYamOdiRHagkikhY%2BX%2Bzp1ieyxIBKgVvYhDn65Fr8qmqSMeLH3%2Fmnvvdeis6S2zyLGpcHeujGaYRoyx9JCKrQ3dYuwu3H%2FNjsGyIYdFKbuYfqkg4RUwQ7733hlye9jVOw9wJZiImEomWuI7l07%2FOZv9jY491ZdM6gfHh%2Fp9bi20z%2B335X9CWYPhnO5cLDNbKndv78todZ02pE%2Fao06PmJWBVk9rkh%2BDfFk8BXqNEW7d6aYWsKtbPI66SxNHHnBZIYYcNJK5CLWn%2FLc%2B8r57KiOBmEXKiYE0nS57Zicc9ShC6xqrTSK42OL5U69kaxaKICZEWq3vV9slJzo89Q59zZPW5U8U21uf70Z9qI8SwzLX6rkPPCgOceYd09O5atw%2F5hmtMQ2aZbfH36pQ5pMxFdMGMuMpXYTIuWkXreCsWjyhQxaEv59tFMwIT8nsy1qg3zH2fp0tX9CNWiX1krKYJsta1qx4WZRywikD%2FtMBvV7OKtaPqjpKnzFruq4hKMiwU6vw6ZOe9GsW%2FhQwY3lgtjZOpYqCxlC5tOc4NHcNu5QzZ6i2TJkKlwW6qEGVDLnIrLryvEp4oLuzYnAk2MO7YysMGOqUBk4yO6zxaOsFjQloLDfF9bbLRTi7bam%2F9mU3y8HuXzJbm6KIvzFortp5mOXHuemEPQwY6okQ6A%2Bdjsneb2KZcbenDA9n76CbDKwsQilg1Mngu2UgKV5dWoA4DX4h%2BgdtII42mKNtQoXcTO13j98m%2BdyMprLZ7hwEue75prUC3URCntcgnmJelCBf3ykUleTxMZaInLAQIvA6CEEV5kbKyv3nr1dKl&X-Amz-Signature=0e6b4128cc94b3d4ba38c98802f86244d3de1d6a54716620f8fb48ae5c1de8c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
