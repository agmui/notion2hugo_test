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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ4JWCOW%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDfdUdsWVtbfW8e1H3mIOe8qjZpMYvArRX6pokie%2FUomAIgAfxtGXmB8TUZFQRmlMGYltw8Mn5sf4iYRpVgEgwooeMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDAFmQNKAfZ6RmcIgByrcA%2F6qy3Rx%2BC29LUOR46%2FhXcwSzfcrZRcScm11Pp%2FRCdzXP1ZHprVt%2BBxjpea6whEgtRJ%2B6P%2BORVyfybFEmzM6f4C2SG3WIDMLZBULF%2FwYhuQsyoTXxlOoYE3A6xoBxDizSe%2Bu15ocjQoaNJm8UcyJk%2B1m2RC7QLC8E4Xu5cyPFjYXeAizRruk5VJ772y%2FwxOkKt%2FReIHcm%2BzVKmbU9spr05SHbDML3cbIXhgQ3xoCwpwUOyeEWNAlVBh1ZCj6k9MtjZP9fEzO%2BQcf1LqLxfIH%2B4YCU2ntND7sdVCm4gj0R9rkFwGrHoO0l1p%2Bh82v%2Bl4YolFXKJTZcmxqg%2B2i1TDon%2FDIDIX2pWCByze2%2FedGezApGYyJi2K%2Fnebbcuo1yiJAiGv%2Fp93W9%2Bs6IQVaX6ye2qdFZPuuyg752879xiBD5ec%2FU%2F8gMrMUGmTg5sbPOTEhVi0UR6AqcGvKFtk61Ts%2FP7TKtOLmIMOpEKDbBu4lj74drGrLt4rmUHNLH8h3gMWnt7yvSmYl%2F3aQ%2BeTiGyBrMvnuh3ro%2BIiJZkr%2FdSAI4tSLcHDxyflpu%2BHhjhZGUwjQgm7yfu67tf37iEmhKeBPEenWmAmzp9KFolh4O%2BHThXHffXsnXq4vhqNuTZ7eMKv%2Bv8QGOqUBXRIa4ski7H3RR3ho8d9dY%2FQdvyuj49Fk3gifIdy0ogXJISCNZMoCSV6GX3QwCAvPia4ScuNrCnzar5Pbpp3lmj8vCU%2BI%2FJDykbRk9gQyNTgpszo8yYbKuPsqlFPu3hVjUwmaP1wL3a7kxbEHOv8evfkqrbglfEWpOmM1rwF3fye0UR%2BD%2F54dEN7hd2A92ovkP%2B5MQiSg7zp8uPSB%2B6GjShyQr%2F%2F0&X-Amz-Signature=197c60f6fa1c30c175f838fb3ce2cf08853820f23161bce8ef65921fd9ef304f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWRWEUBM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCtrE20mv6UJI45FyAbqbmDSXeVsChP9r1YTg6uyA9WwAIhAJDgEskX9Rp%2FWFG56xGvoOr9igHv3hf5FcuSfHh76B4QKv8DCDoQABoMNjM3NDIzMTgzODA1Igz0kUmUUe6X1DxrqFgq3AManpkH4wBpUiaKx13duOj7ir%2BTo0ZE5zMBb28cyLbpNhqLddo%2F1wsNY9npHMM6olMhbxEuR65HxWMcG1G6UU51hZ3%2BbONY6K2%2FN3CauIV8soY%2BGUfa8jczwtyZUCI6Cu5g6LzmBrKH5X%2F30NgtdPjaSMha0gaBJIiNuv1jgtm4I%2BcrvKtay9KwrsU1cVJOzsi%2BD%2BD%2BKuvaNObT4NbA5it7eOdOPaUdkfx5homY6YPfvQON1ACVs8icIkXFEqz%2FLAA3K%2FEP2GC9pCMJi6pGTDvtnqj9H31WL%2FLggpQ%2Fp%2BwaO4yZZYgwP%2FPsKPv1uyVzEE%2Bs8anY%2B4wmbz1YJ01JvKmZSMlwJLQNucVuoYVPYR49hDbs%2BO3e5YcjOgvWsklFdbzGKSyFv%2FzbmO%2BehJ1MNIcxSVMZjOTVjHxKmJDcpl3ReFmz9yPJyCpfTQ%2FkWGqRP3QwSxGvAb3lQXYSbpGxMkQyunGaPuPJSYmic%2FDIb4529cDqlsS1OmeM27gLIXrZ3QQchalQu58fY0eXoIIDgAqwqQv1kqrNGIaPCl6L6CSMl1zK9a%2BCv5ror2NaTOH5gRltXtGgfbQ2igT7ZXHGuP1oaxBHCsoEPbqExNbzRMrq8I29yvwiO4WaGPwhCjCt%2FL%2FEBjqkAVCOWUzcVr0FyFC2jAGNxQbkTFrh15H2boOQ9%2BX9OC87ffxt%2BABdRvZ4pa31BW97Q2jmufFSUBgpBHvziaPReNX29wxcp67lsFfHA%2BJyQOqIRpQYq3QUbvzHuEtczhGCYNLVEK%2BTCCY3UEbB3YOCHMTi0VxRTP98066AqcTz9nLy4h6zdnK48TJmGdoNNRcBQfXdVErUYDSmYHDHGgHCfI6qB44K&X-Amz-Signature=3a83790ded0fe4684fc7a23531f84c577ed86e5271376696c3a0b66fa76d38a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
