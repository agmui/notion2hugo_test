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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM3WA2UR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJKnqW8uF%2FakDG2cQC1r3LMDTgW%2FdCjqdL%2F2LpsMGdcAiEA1pqeRxABAqIVV44XKwyPezm95Z%2F0ihwl4NZV7m8uudgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwCKo5BpDGvmd48nyrcA6SAGOqB6%2FggxEomgUwE6ZaO4EbATzsb9E0JD8nQO4qmOlKYgVsIUHBepofZFp%2BVohlD5MWiCrhuoKxTn%2Fn0Yob5M0WZXko3xy0PfO4%2FShGGXL3bOhK6siXJK8IcFMBPB232WE6sphRbz%2FRFjA5dGqjW5Jk7SGj6Z2Y0%2BnUhcT1%2BJpP6tIcSrOCrgZpe5w%2FTBuwyaXLEZubsysKHcdqyiF5BsfLRra2BXl%2BTGbJNFoi2UY7SNRQTLCx7cfi%2FmxC1eF6VAzHr%2BbIAq9tN%2BDldF8AeB9hcbAYi5Yp9wFYIZ9JeS5g5Jmc1PUxmJQB1%2FHxHRQHbE3oS3Eel4X46BDEYsLBQWckzqqRHRGoJNiBiw3aIXKL10siUCNONNqfIwTSTEQCPinUwaSg%2BwPpjecM%2BKdqr3RqZVv3BdA1fkxCOP6GjkvBzb3h7cQWxPsOmsq7lkSYtCjkI9oqZuJc%2BCQUkx3LrrecT%2B%2F5bCMhr7AElYC5RKi4hKqt8%2BXLV6lL%2BHsGk4U%2BswNALoagIcfsVf1bVeCGKGeQc01k6mOAViPp1XGwEwuZe2hB0DL1kLPxhQw0TaONMwhAf8UWh79qa4eOTGxsOQeeymjhZQtXHFBKT1QjxUlVTnyq0zD1zNN3%2FMLXIrr0GOqUBnqZtF4J7LnWsGOt%2FPNm1cCW8tsqGaXfB46Zwy8p%2Fb%2BZidevog9gg7o%2FBavc52VquTiScwLVXo1oZD6%2BN3JcAsOPoTIQDJi1utUIPctOjwGKeeive2MRHuTc9N8v4zf3tDZ5u1qYyfYoaCeM5wWeHiBPEA%2F8GLt3Ovm1XBVzPOqPdBDrj%2BoFpXRZyFxS4CQn3fZh2ypGCl4%2F2BlDViTpRIsrud8%2B%2B&X-Amz-Signature=92aa4d9fbe669bb977e137a90edc8e4945ea4c0dd33f3ffa55e794eb275b1176&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQSQRME%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIIrwwQXGHvKIwIPysSMkNLYp0UtBcU3%2BUreCLOGXp5QIgctLrQGdz%2FK3iiNfkUEt7q%2Bp4nBF%2FEDe5CeNWi3AavsMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8W9BCIpx4qRxVrlCrcA1I5iTyZH%2Bo4QBzLsTKhNgISgpY%2BmbKGeVYRIekkKv3AvLJzHVPsNgiZnVgfg9tIv3UbTB0ffGI9QlzI2x2RT%2B1FghYxlv2%2Bj6UU5CaNd8hX2YoJNNMrFOjVQkaAHobq9xejEc1V9bYwfovY7bxvZqdS884W1GC%2BIaP3qqZ9frvRGCLTqUyDoXOxRcVu9J%2Fz5CiIi6V%2Fza92FCXaCS3GR%2FLrnw6vuoaluw%2BmWShg%2Fcwyg8Rw5zml7Wt%2Fd7QwDVvhRH4PkuAhKlcnrsZf3rzkZIsNEzrpz56UOq1HPIWlqQtkgk6qC%2BlekaTjo174%2BgDd0HHGKfWPHCQZon9twZrWZ82y3B9KmsIi%2F0QSV0pYTdKJ8IZm%2BlSfacCu%2Br2M3RBJxnwNxO%2BdYJxS9mYRC3vqDM2u%2Fd72eDLgQ46c8UHCHCkVAaYqkGV%2B2bWSJUHPicnBtmhplKlyav2U%2BCFlHxZ%2F4Hn1g7mSD9gjUneebHyYNOLooutjIvkkGuL7W4ArWKOD%2BFO38ThuC8IEtGb%2Bnfuutn1NK2jsAN%2BLDd4hJqAiSpuebIr5je0n3Q44fDmAdSUW0IjWY5049KxKG14FbfpMEu5yI5lg8Jhp0oEd%2Fc7VtbBMy6KRtnWMszyM61SiMOvIrr0GOqUBmrge8AinKNX7aIy4u7qGHF8ktT0qyxsGGviwyGu6WPBuh1Jvw9bDylTBpuVrTuM0dNo3iN8qGtVala2N%2BPCHyKBlg89nZNE%2FUJBOu5iNUfVmgL9X7zV7oNsFyE5HwP2qdTZeFbVNNjsyE9J6Z3n6ZnIIh6u1g0VUIVyW1rS0tGPRcMp5%2BfDJOAOX3PU3%2F3YiRm5OrIx%2F2qyt3WAkJHcTVsQVyXDP&X-Amz-Signature=c621847edb89977c1acae6be195a6af41f19911d650ec84d1ddfa9ed5480f7f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
