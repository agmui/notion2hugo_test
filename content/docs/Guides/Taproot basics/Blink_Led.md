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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S7M3Z7T%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCICCCHTny9YgyiPk%2BpfzbbRzBHoPLgfFJUPyp6m0fVcs3AiBAovl%2FJuz7viGxIuVb75oUg6K%2BzzWrx%2FzVwGsMrcMVbCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM45oTkxEBHM3UsNVRKtwDooafcKaIpEcQSx4Yq1KMWm5WiWAgLsy81LhvYzXDpEkR2ZMjpX%2Bo5W1jSdC%2BPBQJW%2FzjcNk7PPTAm0dn5jyTrjN4iklFUi6naLZtk0W7yY0x8FYvzhSHvfX27rTJnZmbu6aAKkd3%2FK1WEgwj36Guqn99bPHnmqRI3RpN1%2BxtZXXqrC57YPWIQRNDIMpnySh9s7q1G9Lhb9Bs%2FBZSUvt9sl2LPN%2Bpzs%2BULQKm%2FOcq3z1ubNp8OqFiPhXPaHQqBcFTR4vZ2rltHKAdwsYSJE4jAQLyLImzfN5CmKRqmahloPsF0dm3cOBF4HvYh0et1w0STKcMuqpDp8ooVnLJ23C5q3XE05AgVw8lbecfulJz2dup%2FqHspi2fkBAS0MrtnEI6Qsdf8SxCoODsFknp9MoEnhra%2FCmJF1bfc7%2Fbn9zG86xyUuufJLM664XvIKWayvo3CGKd0DTOZ23aZT71xskVw7eOrNSd2ZZ6a5WQEwL8lykmePS3lZcIv7JZwzU89DfT0SH7i4Icdrghlah6O%2FB3a7DG%2BYnfLYqJqIWX3Qi3o%2FOakALRch2k4RiOTwSOeKAZuZW9l8mW94YOPoGtejlCnMgyULNFyyZHqQsHLlyvy9hY1CGVcplsfpE4TJwwmd2UwAY6pgGTyQZ6pd9NBXt2OIzpMsavM4mB60AkOG9Ff9ttI2RfaQ4%2BtOQg9UWnMgrU2LpZ%2F3Axto13keUkRjDKtaPvGnDKemTVaXdoeaVkkJQcPf%2B8%2FgDQ1AwIzrC70wmkaTkZRaC7HOAV%2BOvJ7qVNIMvs8Hm3JvfSzZocXAgzufy1cqZocHAA6y7PRgkVJRwfm0uph22XR5ABb5KfeivaaGWqN3Q0xX9qk2LL&X-Amz-Signature=86fe3bf6dbc3cdf4d7d6833f3deefe5976fb47ba25f0fdfb0fe58659d4694ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEE3OCRC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T210657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHNfLwunSL3Abu1TARcnhYpsKhePOvc1fNIpitf498XcAiEA91VN06yr14cdouT%2FOrtOp25Aas48DzRcre0BLNTb%2Bu0qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6qP%2FjaVBpq9aM2cyrcAw5mfadohA3sG6beuY8dpL%2F4dHIV%2FS9BMz1U%2BaBLH%2FleJ2umLE0zhz0MP8NJqMI7uMO%2FLC8%2FM5GY0lxLIuHCDtQx9dRC3QE47duMhcNuSwMJC1hDGKE6Bp8Xjkpc7GWwDXy76yjeIEV2f8le98Tr%2BIc6Zxaakv4PTTpM5R3rfeveBd4QQqva6Nsyzinn59B9e0tTbdnWFNTh4mvUkAdceurLxN3odAH0ka8DyMcBjvG1wlXLqQEsS%2BbnQW7%2BCnlSLxUahgpHwPD6jtaEGQfXcXpEElBHYiySz4XbQX4yeANi0iWpn2B8hsQRJZdoLQw%2F4ugBwsO0cfReFhShzd77xjeupUcmsygb47PkoDAcBeEbcpu6Ug2v63HVpjiXRrfa1l0HZx1o5kFe41HxdALR9GCTyw04VQyAxosx90yWF99OakMqjn4Q6LOK9CmlXg5d2MLmUSXZSCe5fMrB%2BrUaclxXRWGFKEnG3AW%2FsRKxbLqWV5GpGRmuJJkaffRJypfOlRPSXTi2ekqd372WJ3p3n9vmG0PBeXe7HdlMwsOn%2FwIT7xE65it6F6u9X%2FjGsNOwhXLFCy30H6eBO0vYhB8Wni7YZRMseCYjjtgOeLpm%2Bd5n%2BrSo71x%2FTReu2zfrMMLllMAGOqUBA7qi5%2BvUEdx%2FcuVFCyG7UiS7DOjIXauA1peURitoDv3DpDEcW3qLeicIzDgiuIGRLi3%2Fu%2BKU8vvDUedA6Zk2UmMIE%2Bjxq4bavi7rjrr1NYKT%2F9n%2BcVdFPdIVFL5fvXNbGUA7lT%2FZa5JWR8qY0f6kEYs5kQJiUDYjgOa9X2yD9xwQV3RJU803pszei23%2BnBbM%2FWrq%2BSruHLgALNsLU5303SCRsC0q&X-Amz-Signature=f0fb28546fdda5e745167e42ad1018ac47d1f948dab3dbc55dafe6655b4c667c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
