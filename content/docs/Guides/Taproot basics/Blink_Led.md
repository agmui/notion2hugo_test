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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV3ZNMVU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnOJFEF2iufjv8KS0GehPVATDBUgm8g0wbvJktTSJteAiEAmJQfjAMWQQSTxArsBrNA166iIckXx9lKXfs3j1S%2B4Ekq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHL%2BbRG00Sqald9O6CrcAyHEp06PIIyyclF5r7PODSZkLyd%2BPBfq%2F%2Ba2P3RkhpGBlKo9J%2BQRF4Flmj6xRZ%2FBYd0nU5DiB41mCIPEwZ1Imc3gDQerQR8%2FPAUdkWwYA55GQ5j%2Fp%2Fo%2Bs0Qln5r%2FoXNl9Urf%2BnkE9xMAB%2FV2edbEC5lM0JPdLKUPzagtiqpBN%2BsVrODamnwQT830JAwTVFuKdiBs%2BYd5So7lkDYri5sOsKF%2F0lczk1U1E3nXgu2eViFPzZgSD3Y2g9VvmwrnirB5CKL6FWIWb3zMxuoPs%2BCK%2BAKNOq23DNnJEWCYyTp4K%2BT6PGJdlF2jmbmhN83yKYcEyldeKAYXH3D8kQDW6UfWrjw7M4mrtH6exVwCe6a0TrFLvRhBZZKk86CiuHShr7Hqhs8oN%2BsiTBZ%2FSU2uFruUhirOBC9MCd%2Ba7%2BAcSo6clOgwnxBiur6jslmNfH1%2BAkkCEtTx7odJBe0lF26cbJ2ZLaJLc45gRiPaHR1EATTjYF2W7UWxwjbza8Ibg9tROlAdmEd1Qgc%2FHzU0s2TcvqMbmk9pCsDQ5xMdMIVGrEy9A%2F0wtZ1umivgbj8tTg4Qg8L833i2e%2FPYbMMHSmnfyKLYHqHiXj%2FsVOzQ%2Fu0pNAiELhv6jQ3oNFiCzC5Djp45MPjNp74GOqUBNJHh5hIfEPNMMgXjnyKk6lSrBCYr%2FHwFsUAkqCmHdplPPfCNguxWilUewprcWlzgxBO3ITN2871HmNIKVjb%2BP%2FvWtYlXfT5l7fx3c%2BiyiWY4N4yokfBxeowGJdfP%2B4Ti1qCw9waH%2F62N8cbnsR%2F5ayo3MFAADb%2FkJQPOvfOU8roTGg2smtistVtA%2B9%2BSmf1YMeveHKOj4Rs8qtebjguiv0j4AQr0&X-Amz-Signature=9e0f68582c94b3ebde6e24ae5f1bd0300da4a754a1769d4f5815232ab61de7f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZVHC3Z%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T220721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCipxYqGr4RVM6TOOKTVO33CsGgqRnVVlj2M0DKmLtDIAIgeiV2TVta8zNgPCyuol9XvxpFCPfj35Jw2ItjTahMUVgq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCofNNM7kJ0ynqr0iCrcA341ykUtvYe5uiY7Iz1%2FoVAnYhwb%2F5rESAfqe0o5VQ0zH960u96JC1o0w1xhjrhblW00AmhBRvAI7sjwODay9e%2FSmOOGmpLHShSeaTwtYK5G9A06aWo7x3PKI6gnpUGAjUwQxtadDIbKxXXeNmOK4Z9TH%2FULvdvSNGIPFxaskVdQXfH6Qx953OESgbPF%2Fjm2exX5YneVpiQ5bT0B%2BxbtGKI5XhsqTviE4wpIBostX8aDLAKA1i5dlF%2FCISddpzEjJoE9B%2BYFuKJ8i4K9SoouIATgi10%2BwtActsuc3tZqqQ%2BgEeyTBbIedS%2FDvdgyfFxjUHse4jCjdTQjpgC0lu89Cz4basYco3owq85Mj3umqZrDfg80YB06QtIysiNflfrI5rRpXoIchgEvj49ZL3Xw%2FXBvKaYgzDkBk5TGKL58cjdwokyNTtNyb1W0OymV2Ua09OYWIjbSdfPiGfJCxzK9HQzWea1hzOWL9sMWjPX%2BFCdjd%2B3Xr9lKk%2BRRHONk0Hy213t%2FLElVk4X%2BBInPRID3Baw%2F6CWLGRRb4GVD728tWPuZU9q0catqoxBlczl9QPiW%2FnZNeVVmf71Au9%2BVg2wjAqilQMdoP9qh%2FNWHl7yyguk4p%2FQBg6KuS8wMrMTgMNbNp74GOqUBzu7LqzGRf1lSAvYy2MUu9NOW3Yn2Sm4un%2BcT5geQ9QIhCDKOZxcnrf8CnU%2F0hdwJ7SFuuTHwXuEtiPVJekC3fIvxOfQfAnAEZZhAOIaCG1yXdu%2FzD07qQEAKfECpGu9xMOQL%2F47qVa6iL4nsjL3M9AX8Y3C15t%2F6%2BuKuTUAtI1Aswuuszk1Ak4Vqv7n9KUGgoleiuTMFqQLdLdQH8SnJB4Vt79Qj&X-Amz-Signature=3a476fb77f8a277ddd9c325a1053e059c15100ff3d53db2f2f5a371995876fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
