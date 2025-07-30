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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G3YFYSC%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7l3mYRF5T2Bc8GG18N1kdw2hfK2wWdMRImonnu6BN%2BAiEA3VLEOJvOAMoHPMYxY0n400qMoUHbXMcodb4bTtsKdD8qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqe6yd2xGTtd0fMCyrcA3FgkTl6MwxU87VxMn3zLdHBXQtzcjL5QZkEbk4WoA5YVFE4IeAFAcbXzWsrxkFbLhbjiUGsDLjVj4NIZIzC5doHAWNBA%2BwYEevUUzUsQxbd2knZhK4NsfeKnCS06hcWBAvhPFr93mHZw9w1Nn72nCPSfHTUrlUc9uCKx%2FdXA4jcySHcAtQscoy%2BYS2au0PZCTapuQjeIcCb%2BdehFIkbawsfxCa%2B%2BJay9ec2NqzLt0t5Ci7wi3ZPefwAWZTfsZFqsYVDWxX4TsqBCai4TKjCJoP46L7T9H%2FLlq5tZyHa%2Bb2IYwcUceZtaF06XbXtjgX%2BpxSZjxwkiioFjYhigdqkTCrjtkgUnWKiiS70sO4%2B4Vx0FJ88tYkODhTLQphKpCryTqkTJtk4PQoS%2BSbDELunOwr04ttdxWQuAEIZhAyJD%2FnBKzn6XLHNUKo1Z%2B1Yj4A7QDu48CCDl0igl7mtR7Q2969no1x4sUGBGSdANHfjGSJSD4dOyXwU5iywO7bo5ei21reAbSwbpgOjsG7u2zc3d4euEN2E8h80P2cH1gEhMSdxq7%2F65JSzIvLDSrA%2Bb%2Fn1hyrSS4735MsA25iFZhY%2BjxmgvlZM5IleRO172Z9CVZHSJhAZT8NBU7nasNKMMNOiqsQGOqUB09O%2FUijrrDbvl9Dynvlttl%2Fp3JzgBIrUGyDJ0TbBgE712EPutFA0xbIMWd%2FkOZtg5%2Fq7ybhq9Nj366C8quQRyJhyz%2BAeFwMWYl7HCWaXH3oNPaFy%2FRZhEHTrGOrOWlwzITbYmBA5yXSfqwOIu0Ptcpak5ZZkmnYYJwsDEcljtpiat1RrKZ6S85Y7k8Vdk6vQ5jVQISx0QBjhS2DDI9hd5cgk36XO&X-Amz-Signature=908709814182e7301427004f10c36993e8019b8930b08478dc28ac02ffad129e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4UIHTS%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCewKFh9R1JK1kBfmtZQ8c7d8QiSU88szkkPp7V5szY8AIhAIFhoOGfciycPLovrMYolbqiAhkQQSw%2Bh%2FEOlTjkzcchKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzroPTmivUetCc9Iygq3APmxREJ3xIFZ6zJKypEyUb788zKi90GiasrcaZKLRWLgUA0YSLsprBOdS7XX8MKyIWzIsZ4OF6wDLLB0HA4lKxO0%2F3n%2BWltrxzb%2B6YpYhSVk%2F2Pkio56IgcAEMxU0OTANPVtvllf3xvsaigBFNflrIIoa%2FtVVCtZmm0g%2BiSQbvaAWjqeJXQ08G08hRGr5lrVnNuLbSoYgA1f4OpZFU49oadUIdB1zbhdqBizrdr%2BfVNTEjnrkaoP5xen5c3ZyuMrtxegu4HKcoO9IVW7Rs5c7pAZHzGokwU3EjFYM0GXzEjm8475VYhKqZC8uxftm6pnYH5U22YAjtvhBRShSJVfBFvdtgN54%2BK2dvA95oszLJYWgQyAwvjjwwNwBWvWKWvpa0OC7Hu94B8Y8VMYNr%2B9Zz2QawxPDFl84H%2Bn5Pb7eLnEcLaMEZHlmgNZImeL4sT9C3QJ%2B8sPunJSQQKZDnSjBy22RmPHlGRSqKNUlg%2BG7asa%2BA5eZdHgjrInZ9vyV3OrFecREYVhbZ3700U2Uu4Sj%2BA%2BNtShTCAD1GYbI5ZlZr%2FVwvvSAF3A%2BPsxABquX%2BXLL5CfqIX2MIfcqDiQp%2Fx246IPicOioK4lbtDKnz1JfGqPMHRjR76ZQajZo4UkzC7oKrEBjqkAbgX1iAu1yBGcmztLWAlId9F%2F%2Bx3nS%2BLjTUzpZW6vABIV%2BwJ0F7b%2BHJ4UDZpxYA%2Bj3YUzl8F5jyIPFABUu8MFwnJn8wfgodQglcpwGKGiAwhOzGaRRkXYO7gUafEhDYwf7S8BhbCGaTOwIpz3yQRyfCLAY1ZucUQVcnrgChgPlWv5nxBZ9sc6W7NOnI9QMDiWd2pZdhr3ktN1jXX66dpFWoVv6iJ&X-Amz-Signature=94fcb9e083ca761dd165b8b31d14f27b6f8475faba2f89a1635793aaee31e26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
