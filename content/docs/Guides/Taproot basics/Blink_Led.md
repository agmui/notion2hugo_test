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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EVABCEM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCICp%2BRx%2F%2FUmnQv3EbM1LDvLobGHyNtPp%2FfUGDjSJ1vceqAiBOChQSvgEaqumRCeWMQkTX2V7fbyUsLeI4O1sTOH8vGiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIqQrwrqD%2FSa3HH2mKtwD1avzO4243yr9NulMx0VijzmlBnUhwCv194BckeUv3LTnndLCVOjhNoZ4kwX%2F8x0gxLlnFq9lmgNyenMFLacU6%2FSo4k8ixzv6edHlebGe%2FZjV32YjZ5TJuf6BpF%2FxpgFm7am1DFkMho11X%2FlFfpuNOPA8iQL9zDoRVY2VA%2B%2B%2FSocIQTp%2FWyapuRWUD%2BpmdiA4o40qEaX6XMRBl40UVxKPyZ5iddc3M6wsPEhlzlZOx6TrSXCZCzWLtRC3yDqpvOTOVwNA2iML81Lb%2BK1xPgLXwhPpOWF8UmNY17r88E47wBXuDDR673XOE3Y5w6Bu%2FtjPViimzx3c4Vq6%2BfpNcKPdZN8ayQ0fCEOu%2FDVwRrOigLb8WxNUUH%2FpflKUEfnSVdMf5zQmNvsK91E62C4OiHX%2FLaKbzWmzzm31CclI%2BO%2BeZJ9w6IvyqFBRxebHEkNe5hPyeZHJl2MnaDHYSHomEqs1YJ%2BM9z0s76y%2F8WcSKxAyO9WqunMEruqZzNQidqIzysJqfaNOzYcgReUKQd2K8XdCZfifELBe1Wxk0VbgbgEP9atiGcN5wkJhMF%2BJfyNzaK6xnYMmo1yf3RXeUZm5cvFPHuwpmODP6YMY%2BKbzWg47PTViEDTwWQbTwvo%2Bj70wiZThwgY6pgG8DsvHGWMAp%2FJt1GSy5UbnPqQtj1UGUpaokmN%2BUcxYZVqs%2FKao1pcwsixKS%2FAk1qpmkWX8dq0awWVZcVKmisI3J800ZBLz5aYHAhjykvuAm4tPV9cpccMhERrfHCmwL2Ms79IzXY87Ka%2FVDHMcvn%2B3WIA5gMZAQ9FTYjdfgs77Vp7F4b%2B0vi%2FDk0uZSC3748nKTwYIpcwoh2noK7KTOVPdLkxAmjER&X-Amz-Signature=90e91b7b60414083671361ad38cd6311bb1c01d9d233235627dcf6e8ca957e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM7G2MHJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCID39tfl9mstjlRlwSlwXXTievGEcI%2BpAzW9RwqOEHYQDAiEAkDQgAWAiw3aE0wMIohgUJBBNu629GuU%2BvGtGhoC9WMsqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMyZbzgSG9ey2hn0CrcA17f5FOE2IrmO%2FCggqPKUHuzbAaCywEF9yR64OFznz3LWKTWzuz4C3K0BD7kIMYIjBIqBF%2BdPIbIqzxFfhoY%2FWKdcyHJsQbTkOmcasDflxP0HOj1LUSurDUrO51h0rZvgUGWLTcSxq%2BXT8gunI%2BL5%2F%2BNPk1uxIsFGzWx1dF6uP03FOHD%2Bb1SVoH50jkasGkfQVr7pDhmvNwiNjOI71d%2BTG1GwwwWfP2vdL5FwImeT9nWEPvD3n91zCWa4WHZzW6pFZ7%2BFCTUqsuRw%2BMddD1W6fx8X6z09zbA5hhX8NYM41K2Oym3S29ShO1JPmwfxbeKFJNHs9QOzRzsJtgK8KRtpZVOXNCnP7z9vokIWXpLetpic%2FvOCvQeoXLV0eYx6h38a0NIbtw%2BHRo2umVtcV3QZnUYMJB6ZSwZ%2BYToE19k6O5XV%2B%2FRSN3dyHlCRrJRRN7HhHMkNVlV4SSn3IFo8g1dr6GrQNW50nhyVFAph1uTbBlHBBlWtt%2By6kivik7JvJZpYkbRpWv5Lc9ERFwAABskLxcmPxKXaK27flmwazyqqiiI0MxEeXn8sGz5WCnC5ZqZI4yabb6mTHfnAus2R8EvPECu6UJybHy8ZpnugG0OlQdxjZsOpfXbVyRWR3UzMLiT4cIGOqUB3yIHtGG%2F%2B%2B8pq6rqazS5qBg5jgd0%2BFmvrxqrUAZgTPfezwC7Meh9QbyCSwbxt7Q9t9jIvNdttq9Khn%2FC519cGXB2UOPtDR4zK2fDxfR%2BLzRLgARuT9zT7lMtDlp52SD%2BgOHS8qgBq5i6i7CDHljtXQuouhT12nNagXZcOC8tDdFF6Yizg%2FK3yhXl8KDP503JF5ZtoPMpOEDRb7fGt4%2FQ83kAE25%2B&X-Amz-Signature=1ab3d7a78e40bcc875f251fcb6b883785c53e469610fb1c60a0653f404427c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
