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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RVLGV6S%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEQc%2FLOtdaZlvoSseQ5t1RTlk5uZGmO%2Fo%2Bf%2Fus72hzcLAiEArbEbK9PDT8sghOb4AV6jn7p1YV6shnSDe6CzGCKWN%2BAq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOfHzLpcUaOtFE1ztyrcA9FVjj6vlI02p4lyHwchmpcHkqHAzHcgi%2Fag8YyUVFMJIslomejRYYkxudVkoXc6CjHqjKOP746rtIJMQAEokktrmq1TG%2FR%2B5jfweFmClP9N8oO3%2BXBOZLyaop5oLHFtKQ9pQ1FMAojP7JYuwA8DyHk187qyBG9X7Myqy8%2BpujS%2Fh5mJuN0JySoxvaCkwkg0BiFv3IeMRQ2%2B3lLeIMBZzvZatLz4EqrJJojBmqDcrZ26Nv7WxSMPdVq7YcRmTcuq6BoG%2BAxjK7kKZ2HX73lWEidTYUGIN4HSH0wgyo%2BN%2Fv64iQ8RxBcTnezi7qZxeRZyHwvw%2FskbHE6B23rjOK7CqeJA2bojPKMfR4HOjMZ21qTKsSdxF72y1c22qgAAnrmcmkH3oo4GgUlwTjm8B0HgY1TPBtWVU52A4nfIbkJ%2FD9afoJ9QPn2DTjnx5IeIjZ6TYBl7Z%2BITdhYLuuiDhUeH3YHESRblRATUp8hXH7SkViDatpSsguvLY3iOc7gfTPURTVOF1q6ztkrMVydEkOARcNQ%2BtopFYtuXds0P2djHu5yFnSKq6hT%2B3XAMM0graQlNqMPSv3XrWOQs6fIjqnPyGp%2FkRiHFo0ld4T2%2B%2BNHytV4nSlEr9pfS0qrX7CFhMN%2Fgr74GOqUBwPwlUsTqcs96sx1AHUhaMZJHthGiHEpSbRkOaF0jW3KzrhTCvaqFKpLpJjPTsADpVEzg8VCRFKWUtBq%2BehtP5fkmzsvUOdUXdsPGxjH4wJ%2Bf45m4E9kr58kdaepwrcZGxbIaQGkMTDJgYGX78UPNfr6cjRhhE%2BVHCaHsEehZ1i9fb7FmXKC6w8Ix6Erlvo7dKVlbfkwEjDrei6wNq2VTHQTEohAA&X-Amz-Signature=620c1fdda18b86f56e5f0476f5f7110e1fa50f53a6d3553e5a45a5723ea8d389&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNCYG4K5%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T130140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICD7gVUp%2Fu1y2Lqhr64MKdvUOTWvWYcE7SJFtEuagDFrAiEAguTng031wTbH%2BYX7WDgThfTWxG2izEQY1XXYNSDZE24q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDDQU7Qvw3jEkv69iQSrcAwUEI0Lc28DHM%2FmMfx9nyluLYpEJWT7vNdNQuA63y6mmSvqQdYk0eSXA%2FeaiP3LttvlSXrXKppbHg%2FC%2FAF1ho8z6S0OU509SvcUQ5OYe%2BlDuNs2QHntc5zRLHwXKTIQINs3VSUfUvh%2F%2BY0iEdxjGxMRf%2Fi6mth%2Fs5Fi8h42PBV5tXECmg5h%2BH75FXaJ1YQFmMNEFYmIn3TLnQKMNZUSe35pWxnC2%2BzSUmGzh49YEMtVO8%2FTr8RwshKw74KAna7P3bO7B4CRJigzZXd3EtKIFFziJV0qwAbxhz5h8vsJQJeKyCAIg5QrwhpR%2FyR2PPUHkyjwRt3eCYwahZ46FNUA8sQIovVrgzuMVGZOnUyBEDbi3LMIlPuTxUbM7DK1wraHfz9burCyT%2Fps05xk%2Bfbgx5mquxLD%2FlWKwglBEnKEKqq8gY4DPPx1Lek9ZWcKGny%2FJZ%2B%2B3QH75mSwF40VhDDi3xzni4QbVdmA7lwhc6TMYvNl5xAENjddIgpEwa6J3YhRb1piIuBJLV0kkqXZSRJGDaTXU3Hs%2BwhchxJ%2FcSE5YzNv0IXZ%2FNWInvXhz%2FygpYLsAKZm7ACbu%2BC0uRdtqbPNP%2FBqORZ8OOoCS%2BPuhSRsKLd8zikDvAqx%2FMxPU11KKMMv9sL4GOqUBEl4WTraO%2Boa8IY1FaETbaLtT4RNBad0ksgy004n7qj19MZ5cgdtXeR8a%2BdqjIG4faFS5KUWDsYghNf7yvRiptHWmgGY4acqjHHq8sbd32ylf2ynJNePIKXIQo6wfrG1lhhUkhrY1n8A8Dc8KYcTDaT2hbn3HQH7ElVzP2iDIADvOt314F117NXciBTCX%2FlwsFspbUyHWgl6NAyboLwpqOBPOGtcA&X-Amz-Signature=ef798fce97e789ee4b65927a5cbab55de44144db8cdc595b795b27ac2a7b3365&X-Amz-SignedHeaders=host&x-id=GetObject)

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
