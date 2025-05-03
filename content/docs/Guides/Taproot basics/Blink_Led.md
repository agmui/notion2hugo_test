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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UI7IRAH%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIC1aB9jWrDqPCx6cNUijuqO7by77j8O4Ki6DoWqfXgDaAiAA9BDVJeLpmX%2BHL%2BRucewU7tKnPt56Q%2BGd0OgnyLKW7SqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcUFhLZUi3qf8Sur8KtwDVQI4%2FdDypCUyEQwmlD4UG1HhkQf5TsDxnqENGFxPR4SgZ2mQNkEguEDyEVJ7M0tNmgVfaJIJxxSme%2FkklpcUrTBpE8zRHiIcQe4JgBc5Z8J3DP5BwVYhSuGC5TNo34FMEt4m%2Fj97LRFozAl72AV5CJ4oOH%2BzSDjl%2Fku4LsuiHaMqB0wX1%2F8VaTXP%2FjZYfI149FDwfKbBdtnyFq%2B%2FT1BDss1xkVnlNWZzx4iOOP2L0l5Hqt92WwVgLJPtmotD5R9lamZvVV3JHeR63q8y%2Bq%2FhpL0NeAbvPJBoe6JKEjclC1NviPKmMs2y%2BRhVdsCpsrdRWNlx4%2BciKbslb2gs%2Fy%2BPJ5VAhMSo42vXU4M8bS2BCm%2Fis8w01NyWAIvdwk71vdq7csU0N37bKKqeJgl3s2joyzluEyttFcQt4byz2ZSzviKf3VDapX6kVXA4Q0wK8PYHW%2F1ym8Gb%2BN%2B38V2Wh4LbD%2F9jGBcYlIcAIcMIoGxEUTgCU2IY7Rxjf5umBvgyTdDS%2BsGF0Etm1GgAPZQfsAB7O%2FazlaAHo9%2FZqA5hiQ2g8ZN0bYMo%2BgBc45AH3vSpHSyTxecIkLvwDvnBfBWpU80818WxlJzMrQu%2FueORTcKerT6ABURMvN2rLOKiUZEwrprawAY6pgEYX0bm3MyuvsPnUZ7TkUbYDG9AJQO0Qbi%2BoLwaEgmV6FdkZ3p8MOnzLjSLVmRfZMNaQkmGFz2j0TTF34V3TQXeeWI6HVn%2B489m3wC193riJeRUggaqOvlJ7vlXI8zWAzBYdANeXfTlyFYHF3LMUCemPJA9n5znpC6IVvPefaGiAoRUTDJK6%2BqeFaxBjmnfQI8h5Vq%2FVfABNqgudfjcgaY3Mq9CDSzm&X-Amz-Signature=406010045ccf603cb0233d62dc7870a5343962832bac20dd2cb67ed0e83a776a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQD4BDAF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQD90fS2uM7m0ceEI5I6YhTRyc3ENuGUmD7a6AJw%2BzGH3AIhANk1eSgiAKlc1LsfFt4lbGhlUe8rbIZFNaSSH%2BQonVPTKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx03QQT3S%2F%2BbA2Ef5Yq3AOQTR9bgacGz2BtnnIH7bNJLBoxjj2zuuh2T%2BzSSmk9hWVTrQuZR491qD33KV93Z%2FGxWtr2Sye3XjzEssS7yo6W7P6naufkWdZSE1FA6XmR%2BlS74G0PKiVjHKUnS8vLRz%2Btmu94ulZguJMZrkZRq01Qp2IBduw0JcnTMtpd21mDYRT3SEKIFSVHKzKCxrozxSBMvomo8MMHMYUfVSXQYqMIYMxtrkz2L2lFJbj%2FyaOlAoRFk5gHLZuloZ4psN%2B0rZxDTIcT7PVrT7h%2FDpgLlfpBmFPKWUv87HMYkwL%2FRHjBwhu3qyCZbwQROYkWLQD2QzdwPoUNHoSoxnKhvcBtBil%2BPz1FAj1hMijyJHh6f6bl9KSjUJTAfD%2Fuj%2FjahJgANA38Hrl7alWoSpSJlVGAWp4%2BjnZEt%2FGPW5%2F%2B5FNA1%2FZ2Wd0YiJaFogLXZR4iUUYAXnQ%2FPDciNMaWlJR3nGSf5x4pphSvuGTnrGaDQs4kphTvqSyJ5Cc%2FbISg7juokqt5UNo3uFhs5KvziT4O0o%2BRNn3dGzUdBQKdI2bU%2Bc5ayLzqPYK%2BtHqTUQw7GUdr7PsonNukCEC550OME20dUlpfIMtQeIxgP84eyVfoeAVcQQiimjFkCWLF9e1HJmPv2TC4mtrABjqkAehenCRiMmETKwQhNBj6xVKNjgCw%2BEs%2BMNebMrYUD2MmQ8YkqfYubPzdnNa0101clLWjTSPwuYrH%2BlESY81YBV3u4vzfXMmEukwMEssEkuOqx%2FHpXNbC5IaW5%2FQTfnXiMtdPueyAL3VVNxwtBZijxLqca25WPDXaUMGv3iY7hD%2FM2ATV1IUK4GQySugGGQt%2BdGfUeQkexJ2kA3Z1TR30KVARdXc1&X-Amz-Signature=70cdb37a45487ef1e4e33da4454b117c2c651d7b1fca3eff4b3f282aa5e3c0bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
