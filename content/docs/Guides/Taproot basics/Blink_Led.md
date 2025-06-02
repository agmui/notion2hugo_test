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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VNSDKQ5%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCICT%2FbdFs5GH9rfkygBTA2u3i4kiExd6QXkesIMUSDuCYAiAXJurge95h90YhdZZsVxhNb5WvDiGb2A3spLy1RCikjSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUTiPEnvhngo%2FbasCKtwDE3ysjUni4Z2%2BUyStseJEJ4VAJXIP4d0ib0WhpjvZjGsrHKdwW7eWbHqP2W%2Bliuqbxw%2F%2FgXEom1NhwFaZMKp1G5he868eqI%2BzX7vZSn9aqTz7lADK8sbD01c0fsck9gpKANZxwUKLuL%2BrlfNDk40tDUF1AeY05QoFTxFBKW%2FflImbi5HS%2Fq12EdrDMEd9r05asD%2Fw%2FYM1ShloIKyMYy%2FFmCBRp2XJP%2Fr908G3eAyyQoQ4JMgGCzYDSm3myCvuplSCvXVHjfFy2ptD7J0vTgdQjib76bHQPjWlLtXS8J6B8YGhPsiD1J%2Balw6YfDTCX%2FpvWG4cGeelxsjoBkD%2F%2B78mgj6ys%2BCaPD2uUP8SUCPkeX2iiDOdtI5JSPUEp%2FAEy7DG1fw%2BVWYRhdbyyNB9ozby4I7MoGCWyommmACEYbsGILSDt4A7fu8QtiGh%2BoEn%2BXtDiwiIrnEfg3lpExgPBJUmVX4%2Ftfqo2AVKZH7T3GECfRCVt%2BRfZHEtlgxrSvGFP8JgcHsNO%2FOOCSepsfe4snPbpOAo5N1sYb0tlgaR0w6bMGN2GaFfQtbejQlFmISte6%2BKzf5iNRNKp%2Fkxl4hrDEXYRv6wIEyj3pB%2BZwWWFibbAGq4zzmo3iyncgawth0wrP72wQY6pgEcmqp1bDx7Y80H3%2F6hGpIQGnkxfdHvc%2B8bzsB5EqIVW6z9yQ9AmsRcwiUk8mbXt41SJV8Jr1SyaOIpNBU1sBXSJgot1qCOOuCxds70A9Ajsjy%2FsDXJ8AXWC5svxrUug6GVObj137Ns1SshBIvbGS5ojYPWuDL9pAj0hA3ctURVeVk4ZFAhM%2BJtFc4Os%2BN3AxHA%2FlxKiwihLDJ1N220SNXm8k%2BQMAyg&X-Amz-Signature=9319374bf0cdd8c8792509274d3b3101f5bf762b75ad07a3ececd3182ca78478&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4N4UA6Q%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T161127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAeB3S2Ew0jVidf1K3H9TeCLslrc0QQz8fAfBmG5IwsdAiBQkIedWuNSqmGTOKtqAmO2b9cqMKT3MfIWU9V6D6T5eiqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7BV%2BKNr%2BxpD%2Fm%2FVRKtwDDjECVrTkvDEYsRXNKhW%2BFgMa7YqjZEKKR67j51004sXaIJuih5X9EfplFd4Hg%2FFapij8jH8HY1BH%2FNBUnu3z1nXDx7tg4ddLwLNepWAN7vnCeomwO24Y0Wz78T1Vi8XHJ9l3xz7GVLEfA92SKbOCw6qQWOA%2BL6dYckw75JVEPIyRHBuQTzP5VgUN2egxvfFB6vjEFdwZLNLVA2rFYqb2N0ttRDnnFjn5FGIi7e0tJSp2WjYhpzqOl1XyPrdMd5xJt7liZH%2BNfyHc18svryD3ULHNlFUqKDK5MVzsDL%2Bw2eflgl4SWAViWtZMMYnPTb%2FBorj%2Bf5ZQx6ziY7vSout%2B9u6C9UHTbpQ6Sc3FWyZkI22K49JpiMGuYvTVfyFsYKPvjxpSLlDxwn%2BxuQzRa42IExfshZHAsIYWK%2BlAwj1OykHbhZt90icRv%2B6sb5k0IaTj%2BJhD3n%2BVPgKtvtI9nPOq548DHslnoKHfZmPNiWrI6FM5rl%2BzpyIIgGWsN%2Fe6V26UodyG2sLn3NE6buFFZA4uapjxHvhodB811uVIw7LnjsrUPgZgcGGblGLgAcuuSK1ZKx1akb5k1PP57oEDQoUSJR%2FkD2jW2DWnNnF%2BXM0AJ8kCbQkA%2F9ac%2BzKSijUwtf32wQY6pgFDY%2BQd7DjPhkUBFJuS8HheTro42nV6aNvrFjE0jQxPU77LWJi7%2BZCA8EL9EGFQdoqdaPakS3949rL76Kv6OZxwa2bC50dPv7WMH0fSNIoRpUPrcFNDv7ryhZdMi6CsP%2BPKM0aECWb%2B5DfpN%2Faeg26jzcIZeURNvGqpSjTC9Xbkc7%2BiDya3dYfSKq%2FnxYSrfdBjA%2FufI33mH94QYgpdAl6BP20SzSwA&X-Amz-Signature=28d922ca5c8fa294b9c1f4742a2c503393916b58a49b0cecf9eefe43dedf1ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
