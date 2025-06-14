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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XKPOJKT%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDV8sBao1qMdT4t4aRAFAyuXkteNg5yqj4TFtbDCYy4xwIgE8CHasT0ZTv4AuL3q8tFXQl%2BVQrH46HEFdCyjGS1M9Mq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOF%2B8hai%2FvP8UeCOuyrcA1hq3nl4ZQTCoKN1Yt5zsKw4UIXaCXbQk0NyAH5PjMs5fvrJqtEtlrsIgpHBeE9kYgarZfjEtwLd6Rn0FcOPJsuidKzGv9g4vClv4etV3T35cV%2FjAdGCLrDK9K0qgu3MbplTiMhAuBJtsawdKiw5I53URYgWjXKPLiYr55vsVjC%2FLuYloXMHx9PumgSJ5Oihs8JBKzOhqCQLKY%2BHGV%2BCCOaIPY0db3KLjauS1vEU312gsQUwlHaD%2BNTx0Nty6abe7A50NsyT84ZJTKpBv%2FI6%2FM%2BzJwwb3iH%2B7NRC3UHPZyRPJqijZp7l%2BOvvx0fb6EGzVlbywpVY6NRcGiFWBWATr7e%2BrsCGQSxUaMFNdQfw3khW5SNOWNi1HSvze%2BhTPIqsg2AiADQ7mSSyXuv5XZAnjMg8PHAt2XGsZB08FVIwXioyacVDK1gDYVk4%2FVURM%2FO%2BEIe3fd4RBJW9OVUwI6SvC9h5Cv9doiCzyCwiBdI15jko0SfHu4Q%2BwcIaGLLltAf%2BesHmgKEkLIo9FzdTx485WYZrMwZDbZCTtfLyTE3p7XUNbHJDtyxW7m5NwCz5kqRYk%2BdaujDH1z%2Byok1sBKlzenfMP2IDra5Q67v3zldCSiE%2FWSQ0IegNGZxMpgj%2BMNaTtcIGOqUBVkF9daVjtJSQSAhNdOYRs2y8Yb%2BnP0tDAD9zFnovoCveqPxKnoBb8XwjCCd4pYI2g%2B7B9v%2BkQdoFvGkZSYh97HFyQjtkfU04c78weLoBu%2BFB8aw%2FI4G2TxJKx47AQgSKcRcaXdwRbbsROfkzdTnjDLrGphb6Gy2i7uHq1l10qK3IKzz4cuhvNPt0LgnrDH%2BeX1VI1fsqYDBn4Gyz38YVk8ZW1qQK&X-Amz-Signature=60b33854dc079077cdfe4f52940fb5218d810c119224b2a5ebf405731131ec6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GVN3TYT%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDFr819LSLqtLkhEPf%2FpvvpavCEsEy60YJXpVvUh7tQnwIgV5GQyyjAyeIKD%2F6JYp1WrgW7fU64RmGn1dJoRO0c1qgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMTpi5lMRW0Sj8dTbCrcAwMFpjGsBf%2BwhQR87T6VibQc3IEoEB1R75u5zyoN8TbvXUM%2Bc7ANMMHEw44afmoT%2BaeBTxsuBF4MIpdhpxLv3PEZnV5LM9eVZhqLNK273epxTgi0WyFaffJIhHaNtFFvVCWC3K3oqT99kZgo1WYQUES882N3OjSUIohCXXXGXkYatbt4GUjFpstUkWgz2kH4cRJifxlfT6LBI0BTgV3pLM10%2FG3ygEWIl9V8iYPKlc8NMIC9HXJ3lh0MCiAGRFV0NEogbofq0nd8gO9gpqpnDX67ANp6QqNGSmzeYusWNlQ%2BZ7WQdgveqKp7oNzgTGUnIMeWnHl15HJ%2Bs%2BClCjPmnVuQhLEI%2Fxlb6MHRwJEWKr5Nq0n66%2B4kmq%2F%2FsGzAOoHl4fLVHYQ2ad%2BvFI5jqNpZ9YA7l6sOYYnhRh0Y2PT0LY0T8%2BvsWeMD4hk4j4GvaOjLNxW%2BcykPmHUOiZ2ap8jsnadZVVfF%2FpKb09WZZu7EAW%2FZGef76cBzTJne9Ed%2BqqCMYRy2YyeDEy2tByqlblN6qMGiU%2BU0%2BDaVDcQ2obwxO%2FtKAinHcft6j4GaIMG3Gpp0nnSt91lth%2FWFVLTlWWu%2Fu11xtt6JyRY0aY%2FEjGPyEewDob6qErI%2F9o91Flu9MLmTtcIGOqUB27s7P1aD2w44V1Mfg0V9mKNCQY69gqCVyzaRlZ6vgOe8FPlUM8TU147O%2BYo8AwjE3hexdnA8r79emHhpV479Zx1hybRnSszbCxWyPUYkWCFaiI7v%2FRQRONK2ygOXS%2BpRCNrKGiQuu8LWoVCVym486swaqbHCnSKF5UnSVdElgUHBLepVmnhrvLjFmIa%2FWxGXUgMuCIHcsITCirCbjygtlEvbcQ86&X-Amz-Signature=2e21403b4240f41b70db0923a91969496f77ed97f98b34bcc06274152c2b9263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
