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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFYSBQYF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T003956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDd0aofdaiFFKugFuEiGEHwzwtQiCtqbWCuSAZP9qy9vAiBXNVUmUn9fVeKruR0QpJNNd7uqq53sSLPOPhQ7HcBifiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbsZwBCrZzt3fjnBDKtwDqpEIujQ37fnHHFqYwUloQmPAedfUcgc9C50vLHAVcxrlnv4P%2B3OboRfdhjkLk1E76Mry2b0YEBAf6M09yRwkqiLHlMBxpMc%2B6VOMhwjCeBXreMsf0FrMYiuLo9RPcJ5ZcodUzLHil4wZPiQJ03nPdR6i1ozDbKEpepnlw5vShCuxBBXWn0NmN53SbjmFMkeB5w6vwfughB5m3Y%2FndJeYHeEZ1697%2BDsBDqp4lHCSNDzji4hbAUCU%2BAAus2gXlm6%2FWVn36LnC95UYB3TuCtiIVbRh90NtgHeMjvvhkh8u4TE1fNoW%2Fxhv3LH%2FPbFuYqAxzJpSMyXVcMxncpzJuAxV0oI3HcCJu67Ajfz2QL6PNbrREBP8%2FbPuRVcjWDX5B7dFtJ9%2B16NwIY5Bqc%2BVxhjmU9BOhqKNxGQwyjUb5NmRwMIy9vAOOrPWKFBVBmirKmivpB1T6NoOuqhBNLvesqYBEPin0XifE9Nhm8fLdvITJRu7nsT1Z0Iv6NP6EEJVO9AnIcSTFyHQ5xYFiAxPR3qBZy6JPT5UeFJWxHDlEyx5lZHfGp%2BcaxlJP%2FqxJsJZRo08DYVQ%2Ftuq7u0JhS%2BVZNocbZI%2Bk80OtwlaE8DtxuJ0T3YNfV8IBksiFeqXzYow97iOvgY6pgEdKVFF6IYUHhfJ9HnTGJPjI9CHqO3lhcVOs6YZMNS5T0bKERANYpQqdosanJHjHk5ig36fgt2Pbl5sbd94NuroscCiSJUR800pVn3P767tY2CVhGD%2BKl%2FGRRCaA3FlLWfcpMnLuGbcwRdQRnf%2FZC0asrwXRvMLimsxs%2Bol9PPiN95oO4NRxuZlYmj4BnQPYzkPBaTOrgs%2FHSdxN9bToe1%2F0ErNMH0i&X-Amz-Signature=545fafd2973a23542d84f5c0e5d99bcce277461a2b3febc02394dbe0607e1e59&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFV4XBIT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T003956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQCBcQMr0DTjRZHHk%2BUQ48J8NgCVaDxjGTljSWCR8f7yJgIhAOup5wWYhaMKpsVjNCXdrXdP9oVL4hLcn8AoFbP2vH0xKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHRppAUtNhYJih2%2F0q3APHKj3CfPqh9yhYicMNVv6Xftvp2oQUE2NU8d%2FHKfjLt712vmh%2BPObLuYaH54X4M7Z6g85Qrku58mhdZaw3MsoMzsUHXbpSll%2Fja%2FGFr2ymRrPB1EpmBRJZ4TRyiCYpucGFxd5eO%2Fstu8KOwHwSpsxaEL%2FLvdQbZL9o3qi7pE7zrxLAJwaNYzs9iR5Xf%2BGBn%2BBnh49eX%2F9ARb5UzNX3V%2FOzrGS5JVE5ROoJu9APWbora5QSqBXvtsuJUW3mSNSFw0kw03TTnEzZM1jD1hHIauOVDapk1Nsv0tD%2FaCX%2FNTiGlRKEd%2FkZkOnfEpzcGzGsl0HhAgA43IK3PAEYYJwqdXxmeHPOAZRiS5PGMATt0dBXZv2jIlmkP1kXGFjtBNJne%2Bge%2F7sNjdjZFFBZhQlN3QIdCq7ETrljpri4tib%2FqZkObZp3Vp0rl2EnPUe%2BS4APXo6czfs%2BEmYoUMeGDC15ZgyaKMh0QpfSvk2hc9vEyyLa38f%2BHkuco2d7aR3BkfsdWWJiOpqKmegR8XlDNCQrCPph5xbHgFQfAW6rDl7lgICJRKUenxcRnNf9ZbA9zVpkQ%2FN%2FCgGqUeKBlVAyg%2B2sVKBUEjpU8Jth0gcrnKse4JASMxV8bAKu4IfxOiR7kTCwuY6%2BBjqkAVkImT1%2BNYxE03WVh%2FGQftWyzZ%2BylxL2POWrI0EkMqc9grX4d%2BOfe9i9Vba6aufq%2FTaVzMKJnbbw%2FI2OdnQ05HbR%2FyPk49BxuC2cUUyxy4bnn%2BRxyrYXP3%2ByDgIuVD8n0W2t5J5L8EHpkmYxXpLU4XbEOjLoQ2Q%2FeMz0i4MmjbOhwJjmMb9FjAGOMKb25alIkACGJ5DAe88JNh9rgm6QcYU2dMqx&X-Amz-Signature=d792d8d6018a9e0e54dffca29ef9070ae8df39d51859b1ee2e9d3bb8a0538065&X-Amz-SignedHeaders=host&x-id=GetObject)

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
