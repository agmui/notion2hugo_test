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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YYDNTRE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCMdefy8C338zGTugz6clxXf4jmaBqQCyBUPhNMFH0sKwIgNpRCKKHBB1UwRFHHumFfj1ilLuJ970SZ%2Bucv6WN6pzEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDNFCy1Np9Q2XNZQoTSrcAx0w%2F68c6ym0j6IB7ugh3bQc7Fqqcy0zyW0Kxqh9Q1eC9qYVqY%2BG%2Fj2TBiQKTj43eywXZp8lGrRXgeMzQeFeF64Al7odOELfLWav%2BcKEjufICNKWSm3i9bBqZARWLDwepJ%2BXlHQlUjX7ofdmovRbVPk7gxN9wF8VgZlp%2BXa4tqSYDmcvp%2BFDYqItawjXHix3Xh7%2FC0ySCvzE%2F9ZmtIhsY2NIa8O6Zm2uR8Z0zagELXNUaQZBFu1lN26RQzjVKXBezWbh7JHJnuJJMCkrjvakk0j5GDEYG8DUGQdWu2OhqI3iMiDOV%2FkL3iNmI9ExYPfAaR1jY3tnF%2BH8UKOJhVzUFBpgjZJ982HaDE%2FjoHrRVER9WEYpaM5%2BLFkcmRoAaGjRo2yNYaARKF4qvXQIriSEqiAIp6MZsVUuGyXuE3Pr%2FP1Pb%2B5rhCrjjFVku81nV7j0ahcNfk0sdWI43iXgHx9X82dQwUnf9VRO2AG3H1KXSni8NhXDXdbU9bm0S4ooM7x8CkSdtioTFMLLNMHzZjY4PHyt7wPMUj95VkEbHWH5vVFlRKGG1cBn0J1SYKfXwMAdBVpUycC8H2I0QLRB6P%2FAgO0UOtiJ8qC0UKKs9bkWzy6cgpIzhQo1MQV3YYSIML7Ly8QGOqUBTZR%2FJ%2BD87LhZOtAfDPmWz%2FtXdCJHB60qHz%2BPId7qmRt8MgubrpBkRCtB4OqlnWzpkId9tdI%2BiUmp9HIjr70ykWxTYR8cqV5JIN%2FDKUdWeHARcCDZXwd%2FDjJ0qUH2jUuf6xXXXRv0xtBmK0yfYVe2qrwpZMt3SaZ5hduKHMDe1eWH2qY67LYOdoQNIpn4ae3iev%2BDFrBrMtUqpN2mWeyfyydz0Y%2Fq&X-Amz-Signature=54e24ba5103309a800e8c8e68c50535be8d4fb4f98212623bc79b791013f1d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6R5JKX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCC%2FK0GWYR0qbf4JRM%2FvVHaQEV%2BjPWAP3uVL3rYVhetcQIgMjZHWiP%2FVlTEtikL297p7BA1d5XQl7S%2F9egaKqsjkB8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDI1QIP5KVUUL3wIy4SrcA63ZC23MRp027UPdce0HTyoFfhgHKrz6CqziEc%2FuTS%2BPq0STCD0tesPY8WetjMCZ92g9P%2B8NYpL0ffVrCwCAR5OdberLm0wOS2mWNroUwup8hshzQKxReufCB71dwwxbqwRYSftF301N%2FYf3MwqsoUZxYNez8fRuZVBIJNtNYv3DcOE2LWCcGYtcFEvW3xV3ig53%2B6lc9XeGnA9HKmd8QRkPEjIrGGIm3F5bui43VMI%2F1Va8RLREL9tiAbsWQl%2FodtZFrpt9tSLaSslEz0HBVygXs1WiZ03o2ZCGgXdTY2utim6otgUYGv9TiAoCKabxvgFWW7xe0J%2B9J8fJFAfTmE9K8OTQApP%2FTUOIPfxoDyxwzfjmBBR4331u3E38XW0EAb4B3MVGanhqUSMvsDHCc2Ln5e42kWSwETs2XGwASXy7m3Jc2kkRZtustQBd12u3XSuseHEwybzCA6aewvimiDWXo8cTAC%2Bv23rRLJW8cMddq3td%2FFMpQauI%2F0Ngms8X41xSZw5mBlJ8ogKE1UuUQacO9n1HZNoVmOBja26goLo03LcBAAiB0gqZN4KTl8sGMMaFYvRLSMWlIisAx5c8mwzsp3%2FiXWA2VzeXvBedA6JkSPXoNTsW2pKCO0pDMLPLy8QGOqUBHKd8CW3lWBpZw4R4IfJ8sPnkdvVEkYUKLLhLYAI34eCGmNK5Lun2e1WVaNGKI1P3vXFXaUf1cmm%2B%2By0rxKdjeadLcM6Mkb9EGTV9xXFxMiQVKfunwn5t27vux0v3v%2Bc%2FlDPulihQqPbjA9G4t7tg4cgvkm%2BXN0QVbTrw361SdiJX1t1r9eeIq5Q%2BPb51qGq1u%2FyPdZtBIuTnA7Lvi5fcD%2BJj3Zp0&X-Amz-Signature=e4dc4836d1ff29c456acf30a4387742ae3c2d5e14cb43dbbf48e5f31993a7618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
