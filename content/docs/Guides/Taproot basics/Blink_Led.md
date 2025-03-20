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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTY24RDN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC%2BFyRIY6eRqTO5%2Fuf2aL0VMmwWZHKnE8XdEv2RyDpLjAIhAPsOy3kwAnLoVqYhAojiabj82T8Xflcn5zFaSmbUJTPrKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVLpfIOh58cZAc5ZEq3AMZbupel1prEA81SrnxRsCY%2B0oo3GXRA0lReOCr8GKFqOagLZMZ%2FP7SUpasm2N31wx41uLJ77EFvrgw%2FBMLyHXrVe4ScDmvNMDJ%2FqExIanbYGmbBl9OQal9s9D1BtaQAJHrMEKAnhhagZLLmoFVfCHliIZp%2BYHDPo7Lh9stRGph04XuGg%2BWgpQuC75XoiPk215cc5QNSkEtr7wUoXU0UzNWDV6mWs%2By1DNt%2Bn%2F8ZTGOlRYyRQrahADTpesIzhIPOmQ%2Frq7Et20MNDVrBzwCej31QHUOYuJbu4V4huH9l%2FRckakpaVyzwlj2A0e8bcSW57kiX3ixyy74UrvN0uUGO%2BBO6vchJcsJvYfkzBP%2F498IUM2iMd6IxclNt01m7YGLMQKttELJWu%2FzY7PHNNKSJoTQO3JpeSe1xF8IwCRlDsiDoTXZVdFUq895mevevHeJrOZmisZ7jQA5LvJcOXdPk54TxI2P9TaBwY%2FVRn%2Bdqstd3mwSAPqOzaoDyl2y8df6TOI6gd1LNwaZXIko1t5IzuHOSe%2Bw%2FpEXfM%2BZuwDFMM6pqGjP3hR3gjYcV%2BbX7bWKgwaBTJ06r61SDBJuFDR3XIbxlvIYQB1eW68a5EUFsyUasI%2FttsVPmnd9IsTEXzCvxPC%2BBjqkAW%2FFs7MdWCmE%2FxL1pRbhXEX%2FMI7bq%2B2NK5%2BzMgQ7CGV8LJ5o30sz2Gk%2FYzwVGzJqA0vXIJVSQwMKkC7HNruwl3M0UgUyPzfv%2BWrbNsJd%2FFdzS9iVlyOFpGVN4FF2qKlLxGuRNRqUMGFLhlJCp%2F8zdrY%2F7F3vp6%2BIzxOMtX2vIFkmt6zL8vvv%2Bj%2BBJfqykcbbLVMWKNNwp%2FnwfS%2BgN140W%2FKV3r6y&X-Amz-Signature=2a6409702bd5615de8566bdeb6cc7910e38f3f6c13889219b88935bb5a9987fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQVFWXLA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T150852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCwZFxfvMEfJivRlx3yFWR111jx7TJNueMUrQYlQT2iagIgMwkKAR%2BATTQK72CiXPHodZgAauqS83rEs%2BIw25cM6s0qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrW%2B16ct3PYm8aqgCrcAyDiRqOKS1aNJvxGff0%2FaUPEW7pYIRGy0DxioUklpf8DTjLnAzaAPslk7f9eAm8mMyM%2Fvf38p7QxyhpjAzlcIvNkLn03iGbt82EDnt1ChNB%2Bgbks9uU62RLHXBK2Xz1tfqtKyFpUmRO7NsdOvwOIEiTlfrl4GstsrkalYxwKDexFalDmDNh8khe6WfHGakVJnPZo32xvicxUtZYRCHuIqMnN3inCkYLZguVa%2BIs7pX50V5m47wKMSPro6NM988nnMIxxbMK5Qjwr7%2FCAhQr6f9iN%2B%2B8QlGRmtZT2IGqVBW3Hb4S5RT4dA9Wn7ItJABDfRS7TNFJry0Hs8zqCJO89%2FNMLQ7NB5yNzvD6WIvB65U8izvKmBPZrRMcNV7yHCFu1NRbr1kuPF3FLrNSEqyFZw7XD7h6rb9RrpcjfXVN76nNRU%2BA3%2F4sDCaV2uAobhl5cWAelE2zsz1RbTNQRmTMm21XCy4L9s%2B%2FvmHPwCXbkGDB5yifHoxL9hFEQ%2Fq%2B2uTLAjJkbRKRCs0nsn1e%2FaSUv%2FTTMH%2BQbAjDH3F4RuSq%2FDYRWcXje6ORaeQDzwPN1yOdLyd8DEe5m4wIxJY6GUsrse2Wu7Ajs%2FfYEVkb5dIVgR0mYL3kTvzMQI2tog5UyMOTF8L4GOqUBuMiFfaQt7d28KWrhP3%2FZWGcxJkaVL2CT%2B9YBuEARjXfcO9uA6Rsq5zGLnv43erm4MnGRa3dphymP5K%2Fic6dkcAUB1RTX4nei5y%2F0g5q8O0NUcX8khdbZz1bIOOM%2BWRZkQsBkkDq7seb06YM2W0cl94B5ldtfbtyJTCi%2BT%2BMhj3t68POBPXwx9JFo5zgp2FdrX3%2BkP2GkLqWB2wTg4YqzeoJ%2BphmD&X-Amz-Signature=71ee4ca24600d1b825fe7d6b52a6e49e8a3ca6238cf58b78bdfe6295db08135a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
