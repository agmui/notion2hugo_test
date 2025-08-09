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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQQ6AI6H%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIB4XDyMOUcBvWIIQCvuPxKVJ7aWMU5EgdUpuHCxgAqIdAiBTBKrNGLcReG%2BIvylHbUBjb1eP1x%2Fky%2FYRd3OBN6evPSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2FjUFI5fS1gnHmrCKtwDk46TzcH16gJg8biUxgn%2Fdu0x3IsaiXvaApFjsSCvjS92Y3ht77oM5NT6sM6WBRsCM3b%2BA8Whcod9wxhqId6ZdyKgWMwJBk0jK2HCWh2YH2L3Jp1eaEyh8TtBvRt9KkioVQ7PItTUVqg0Ugf4Rmv%2FqIuFEQh2uGwJwR0J%2B2nso8jAaAR17n2%2FJl4DJsMB7NeNkfP5fesldTdQURzlya0%2F3NZLOI8D9itPVsnpDfuyxoLMMEWGQLOfXj7%2BENle%2BRimJMujQp2SnK36tfDXGhF0mlv5suW%2BC%2BaVFqq%2BIchYR8NdHMNK1iNE0mwx3PTzEMcyT09gV%2BztthXQPP6jkGR0UjIlIKRnXSO7mNGruvcjhwoeM%2F5dBd0%2BOyRXp9efXUjtWacVYXjL2uLOh5e5tlj5j9mOafBhyw%2FGrxgbg4oxRBDrFu9J4GOG%2Fn2kHl0EXzJpj8%2BvqvCX8NqbfDRahXlIK%2BU9W5A34fhBjtTno4L12YHcOI3YqzAuKE46AMK38FS0%2F3C2ioWiR34IVKerdF%2F66t1YxGRyLidV1DVu83%2FtyrEDt9JSScqPa%2FkdZpp4nCgk7Uf3EzAojqqEHo8O%2B6LkdMcZawA7yZhgQRqAJ7pkuUNtkdu%2BYNYlEhGKdlQwivbaxAY6pgE3%2FagRA6E5Trlmy69TP5SUzN8SoB8XuYpk3b45Tx6zAhi4TIJsH%2F8jEgPkkLU3VnyqGglIPzaYocDV1i5qQ0P0zp60CtfVrObjQxm7rKRiDzINLM%2B8eAcET21FG0cr4tpg5ycP52uNdOL5w70nx9K1xFQ1ckxKVidz6eXDfxiDA7iYFwZJTDFQ2McYDKiyKEP%2Fusto3B8SrScSV5uFFmFpZ1EInpDU&X-Amz-Signature=24971b99d918f4244d4ea1b5e8af4db2afc5c83df457e06be2f5169cc3e3b588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNBMCZZI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T041854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHYVzEDoD39l8dttV4AIOwaQGyx3WIGM9Hrknj7PL2o5AiEAgu%2FNelMfx0xETZytdu9Fi7f4Vz%2B7bvxAuXKADrQXL0QqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCnXPCTCCJ9yX%2FlJIircA5yCe7p32%2BIluFwQrTcQHcoiXRdAHtVbfdN6wTtjuBu5sZ%2FNrNclwDOe%2FqenJooBf1lOkSxzOXMk8KXdgtPP6xv3%2Brw%2BFbFcuSh0fIX30kdJvTfvPLFaoCVP%2Bnz4pIN7vI06Vt9AmqlxEFs433gnwhzVqf1B8BwCuIXtRa18X%2BCXW6fxGSr7Zis8Jg19BKE0uNt9F7kMrDs%2BoWWVi098ZYhljR8wNASsJGBxxurvZeRxgiRpSthHO1CvtQXGsfd5jU%2Bbt34hwerMXZt5Q6mKDl802JQNQTZ9%2FplrEgZ020DZtp39ndVQOb27Qtdb7hmB%2F%2FjVM7ExnDyrs3mBa5M9QSNFrOyoVuPR%2FJDjUzK45KYxpPgnnoffMU5Q%2FE7Mnbu%2FvzBBAZxt%2F%2B75wRC1rLlNBJ45nGHjaoHC%2F5oelczw4iDjjsxp4QE1gJzsgNQYkKuy4MAIN3SiC%2BLZk3j9hfaMDfasYtW4WWjIvwbG%2FXvwANedpejmQNEbEtUOsytmx9N%2F%2ByVdpZZ7UOyJtCLVIoSJNOB9wL8SngUiqzFwJKlDl0FcNNDKOHjz7Ql35FgBhIa57Pgc%2B%2FA0rZ22h85tFDSBgQkEMXOXeKDOhZBKNsZmfc%2BVOda%2FlrIkYxOkjLCjMMz22sQGOqUBBSY37%2Fismk3Ne6YAjy5kms3Mg9csZTxUY054J%2BLdz%2BiTBUKON%2Bpfa1SM32ABS6sEpUjTvXEDChrGsL%2FucNFMh4cFtYapDdF1ALXiZQDPdwlZ3s%2Fbeqzb252MNirfukhlI6IzMLGKb4nBuefQNNJWDNnDq3trvbfKuCriqWRD7ivF3tTC8ZeUdzx6Yv2IqTlpEsTZfqnKvWd70PKr1Y3A1XV2Rmoq&X-Amz-Signature=349a66b6d5d8ac1d1722670383a088d8127c8f3833423933c8df5cd79d29a184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
