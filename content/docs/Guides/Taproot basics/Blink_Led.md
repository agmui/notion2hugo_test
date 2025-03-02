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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FC2N5YH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGZmbNOfH7uvioOnQQrbu2ATtmH%2FabCPrX8DhSdNEBGFAiEA1YFVq5DdZC6owwA2vZUBoXWCmM2aG3pw9tbDzdfwYooqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHykYd9s53ay1i55ESrcAxyvMAfHI5nJCmM4qlUAgPaim8QkYxsorYx%2BTYkWuhYarNX4R961zkWtFydkoJ9mWsNgkyWeoLKWRsYTpq0QmuGa68n54IFEFCIAiHqGz9msfFhHmOtHW7qmks3w1gIQPvVbVXage11gp9ewHguFzbOEtE36hOWc0qQwA8E8h1OQSdg5Bc%2B4kR7ERNYhCLPo%2FEXsrdGR%2Fv0CSF9AUzFg1ONPdoE4fJ8juZRCvEgknpKTh9NgC8HDrovG2W6mkbLRC16L2sVTfsFhfrO3O8zPx1YjKIBbUG1JL%2FWfYTaVnMmFwBy1XyKnlsAAwwALwQutCuRzGJUB2VNkenlCPKcYApkT0bM30AhK%2BeJCpOW13S0qmyopRifFbacmgxu0TnwBNv5t6BjJbCqYmSf%2BpeiDUn%2B8WjYEVpZMMcqsrLtST2pQ3qSSDSVroWv4XF9X8f4L78PrF50vXIQlimjdi63XnDzB5qhoU3pqXvYTjb59PVgEqL%2FzkDKrNcbrorsdxM4vVLIP8cQRuKDn45Gz%2FWOa67XgZXpH%2FkI1Pn8MvONdNA%2Fuj46r5xIvLgwH73SaAKxmhaY8sN7gWhiVz%2Fny6iXHEii5v1O%2BbOs9s9HcTGCS5lj8At23D7gaU%2BeyTx6PMNPXj74GOqUBgopOtgOcSw5008qtJUwG%2Fw5eoQeaTnygTDMs1G05DURzhu90wMI9X1ilQNcqBklSjeZvdomjgN9KBNvyfR%2Bk9t%2FaBGbILd8zphLM9hc0KTXAo0sx6f0RB%2FY4ha7Y3S8%2BmmEcnn1isqICKzlGYckNxMBz9y3He2AO8Nh%2B9RhmsLhj12fT1h0zdawMbDc5MEaeDphmQy3FarGKxKv5PY5KZUz2PlEn&X-Amz-Signature=4fe4fdbd5f1edb629f3fc144467a95d92b5c25c2d297d3480d7495a08ceb20ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HDVPMY4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIFodqMxZds3taOtPJ1s1%2FsJmcFg4E0Mn%2BsjQ4sd04IYqAiB8rPkKQeFrqNqil8vBdlh%2FHyo42opF9tvdj1%2FlhQXIpyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQMekMdU0L698Cln%2BKtwD8rzpTcX6cZO1fd5w2u1hc8Tnhs485snP2w3zgJIBiPiLqt7aPa7tDhpjyujI1y2saEC0M9k5DSquSbMYyY6xnpWJogDXtBC6cvqLWqM1jhDx%2BjIeilYCIlA3HmQ4ncPtF5glcboO2%2FXE6a3GfWI2AqspipZZz34IaOW57QCgOnlxNGw64QU3rOoS8qUZ7INnXSz4mIyvjNZOhWjfsuU3iSF88FbsBeMY4bhzX9fmTIPjzCMqCTvwdoBlMbzHni0lXozqcdMCjJW37krNK6V%2F3ZlSQnFsRr9xFfKPQPL2eITyyFIhoM64QQyrgbDk%2Bmm1JCuad%2FYM22XsJiCU3ovbh%2FjQ8W6%2BHsgVK82ZMaqTpw9%2BMAWTqiH%2BiETYZdZCJ49HFHpRLBCrQSUTAwTkIkxq2dfIZCwr1KD5hUOO5Jc5VPOKRtZsJvrcWTC2edZpaiKCAeGBVSAZHvbbz5ga3NxUyUAP%2BnKkF763RVdizyOmJcOUiCsNAlX7ZELx%2BN2ZGo4QEe9Z8%2FlqVzjp3oYUeeCtpSTTV%2FjIxc1DNJcQMwJaT9KH4XWvf8Sqr%2FBth3MrLZG7xR3lJ%2BBN5dHexH1Ez5ZSWJvUOssEDO%2Bw89uuuLTx82YEPaBE4GRji7r34acw1tePvgY6pgH%2Bk8MNIzfTczMEd%2FEjUZbZiKhuMgw6qzUD79d6QFDgDACwXzrpeFIEYE26TlTA%2BGyd6i9svfWRnXXoSQPxXTZ7j%2FV3sq5jOaQOqpYk6sb9wXixeFTB4I66qajDIB6onrM%2BVz1%2FekH4zIkPRIu6EA4%2BkGdBcDUZScaNLWBdkrASSly%2FmrDw0ULlOiSr2EeixRLmPp4K%2BT2UJgyHzN4J6VaA22AB4k7K&X-Amz-Signature=01f06f6f42d210eebe53d97b7f73d0489cdd61adf9c0d9d0d3745156aa11f42f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
