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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGIFBUMB%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIB0Ne6Oe4%2FMv27eiM9avPHL8tLfpPI2vTK7bKgIm4nhSAiBdSni02IwoxdqfFaF63hHf3btNTUaSq%2BGacl7mCMfyniqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl51KuyTO80yPa%2BH%2FKtwDt4XdRPpWrqfJlDbfGfw5HeDmP7liGwQhzcopeifX63h5DiFUIkBcw%2FkdI%2FYhZpFscvw7eLlh3DRDuHkItUY8YSxZnk0qnmvH17UqcyDJGCdxDciijoUWTasmHk3zyNrkWh%2FRLDIXtq6Q1OAoV3ho%2Fp9GhE%2BOTd3pIvvOyKAYd0Fkuw128ITKEkGnnhzFJyKUj%2FywLla53bY0jmKjc%2Fsod%2F1JdgRZwO%2BVhADPZqh4KCAPrEbj6Lqfq9j3KCZJCX6cDusL7KLDd64gEI19yZhNFq3tch%2F07yqsmS2VYqV33QcFgpMoD%2FdP4s2fjMvbwozOalFFIy1HGWabrSCBi4eLaUiTaDufZEs380NdyJsdcBFBej7zl%2FYTGU3gW0yNwlCX2H9RTkmFwElgKcUWLohmhHFPY278UZjeUilQHaQf4U3YgB4kVTCkNRx1DNyGUqUoifTd0zAu3r0oTkgmg7QaVs%2FcZmyzpc7UskxIW1JifuWP572%2B9YQBJgiKvU8w85Nmglry%2FtJoi4KdcQsS9ixVPQwdQP3k2dvvOlS4k8XzIJVs%2Fk19VbPCbsoBINjt5WdmclGG871QsywlGQr0RzmLp5FV5Q2SMdsK%2FJnHkGyCcmGEPWwHemZ5hLsQ1q8wn%2ByQwQY6pgEZuvLqHncbAL3QieGTrET8tlwFrEe07Etz4bKRTuiiGnAGqpSSy2zgj0gJ%2FnvwBCv%2FXaV%2BcuY4zw3ow90zsMYJi3mnQ5%2BzQ8a66nAqyN3ViGYLH1gxMRAVXQqs5LtKkYN6gB7NeIEYn5Tv5gOk2i8%2FxGDYu62mX1fbNfgHQdTGLRRQrL5GS59ujGMV%2FPGhXL4nBF3VUMTBk1DMbV5vqvfuFBuhMrac&X-Amz-Signature=d0f874c40159412ce6db3b91ad7ad3ca14fa08a7211090ab08b3f2b0ff28d15b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5YS2TI%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDf82xth9etb4olKl2VAX4cXpPm3GBVOMMZO8UWR3y6IgIhALdoskOIglBZNzuq%2Be5K9INyeI2BKkYemXGhfiU8mu0ZKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUiGV%2FLm1TiWnbkVAq3ANKVLqSQlBC0Utx%2BVi0KuB1Hcl5kJoZUfeXXbWC1FXW%2BZyFLEueCqmziWhdNnZFJAqBHon4gmlmJYYxhtMXE2fAA%2BLtIuXblU4Gsc4RUKuPYwX%2FaKBOHyNLVx7DUjS5m5Y%2B%2FrokVUFSYKDqDDXYYj1DWosAXZYEMpVWXO0gPRY9wgJGa8hHdeQg8dVXHt0%2BoXcA4CNFxiJzthkaFwS%2FVaWQc%2FXz62URM0fqYSzxsdT8m4bDaCTJGQITILnH%2BmWKC1d4qvp0DXeJVc2bDA0uxmB0CPVSlImNHRbCKXsNSVkVwwD%2B4vGPCGTiTkQlAFT0FxqepQ1UqExQs8ccYfx5wEsT69uZ1ZFz%2BuxkHSqnzrKBL2EEaOiFBj1GTCjJywmUQFpRj6VjvQ6A81bYHQhp183eZCfUo5RWm64X6h5%2BNjJrt9ut9auK0YLjpvZiZnENAghxu4ddX%2Byq6pULBEAYGHhgJz2ZhdOFfkVz40oYWb1zV2w9S3FneNYWx1OunvZXCQv4ri6cxCT1ZFlbJDNYMW8uNX1qyZUkV%2B1EUgXm5kDIq%2F09to9xXl0R%2B%2F7rglaeSh7eaOR9gXBlp0tTtvSiCLIMwMwJVsUGrXb%2FTdzLlrArYjlXVqN4lRs%2BK1ljuDCX7JDBBjqkAUI27IJSv9IV5tkIlWYlKlfFV%2Bl%2FfLB8rNonUbPJ18lcSSxlxp1uX8Y7D7G8uAqzwiR8MoH5a%2BBPSAEokhS%2F5P47msntwDgluBjlhzRosDaGtliF5iUKoRhxVfxVer6pNovMU172emNB83y6Ix11sAzRug8su9BoTIZ2y3Fb4mVRYwoqxaXapae5iMIGjhBebDj4VqOYgPsYvqUyAHQt%2BXX85jMG&X-Amz-Signature=dfb4476b011828e968980ebcba98c9f80bb68a2871e2506cac6838484012de54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
