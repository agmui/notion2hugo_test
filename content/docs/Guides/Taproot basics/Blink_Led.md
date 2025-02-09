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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XWNZBIG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4kudG9mJyuCqCq8SBktr6ap7u%2BIe%2BOAeFAFhvu8pb9QIhAIam180M8KtQwCCgEGlJqIuYeUeSZ72ku2%2FjlAyz5QfSKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz90Q60uSXvrxUdEmoq3APPDGix0yqYnjclIlpRhmRT4nSvaoW5UQceMnXf9I00xWZIu9uzvnoGQ5ZPCq%2FZDMkH7pe%2Baeuo1MBqdUtN3t2Xrwj81FPeLa8%2Bpb77cM3ZooLmOIXvB4khLI1LGmbYP6BG8q2qClOzRElCC39VZ1m1GtMrEIFq2qss2BAUhAtj9inpiO9Tcaya9wwqMXPpKyAK%2FWqPtX4SviTLdYSx88UY%2FGsE96gv%2FHS8KWTk%2B%2BspufTYXa2f1BtKE3NarLTiaFJeGmq%2FjqmMhEHax%2B1ZAYvmKnZhhkEv9pHfFOXOYxhkZ2Xt9A6%2Fn9peFQhj1ukf4TtZPnZXZOX%2BmROpPiFQIqih5s58OXHwbi1cgS1RKjWovzE%2FGFoTSzm1kNGLiVzOWetMoEyk8hwJ9mpj6AwhrtjDWuxOLq%2BKNC8b47FWXcPo9dcBM3G%2Bfwt772BoY5GTXODxrNomB%2F9s%2BR0j5n7O1a%2FGYvmG0eui%2ByifEwbIx7enETI1TZ4l87XEhXc%2FGZtpFHCLZE48VB%2BkNPNN5F%2Fd8BQyr8Q3CRkFPbaNx%2BbqVSbsgHG8Kn1BAHjwFHaVqSUpR52ltHQXD2UKmgQyi3tBPQPJ%2BNXDImomLaLjFcufeDlxnvK4xr2p%2BaI9HDygITDKg6O9BjqkAVb6Fscy2t1mHfY%2FC4dTisAaQVPsJJNGBt3sfKCO2fgllchl5STJyuLqoR3%2FUjubeAlw8rg6dJiwOfwtaW0lFikaQ5b5tdZHAL5ektv8a5Pm6d3zp1kiWsww5Q0fkgcAH3Bh4djkSrTkaOjeGEghCmM6%2FCd%2BE%2F4E1zj%2BkNEFemswzEtIf4oulRdDZcIwUSsZNqmyZABOmXjMgukGBO9cgW3H0Lh3&X-Amz-Signature=cfaee43136bef1513ac5f5da92be9f32583fb3d64e5f1e3e1639bc87c93da796&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7FPYO3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHbSoeHXjtRiNO1XgM5TXGZmDzGc%2B0d3tL9WbBmm4Q7AiEA5j0wne%2F46jhZRsVO8aRv22S3h2CQv2WEmvU1AJLxSoIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxBjDu0u%2Fr4GpxqQyrcAwBLaRUu6oZF9XGGCh7lcL11%2BpRfoQxvg8Gd74F7%2BCWRgFoYBPqxHWUD%2Bd2sO5SkyE6KitL1Ny%2FH3TC80V2XBRnktYzInwFKZs9MdMVqV3Uk%2FpLi%2BoHxVDCxja1ktq0FT7hH8akSLhGklNYVOVoXhjLkz1qZJK6I2yMBAqBQKPogaZ48HaaZkAimM00moSFxRsXiWv5nCyz%2Bv2RFcvlxQMmgTkHMMg%2BiTlyZmeG6QNKe8V7IdF0S96EAfgpvn0CKbhqMhmhtAqA8ZcI92mXBaQbXsmXDbiTF5thtmbCQquapaDzfQKLnSVkBNZDEd1%2FvPg6cKmBAbiqD6ROZsBzKJDCDg1jtEsck7tj8PGALvDjqaLK%2FhH1YfWbpohvB%2BhIJXtkopBs3dgvKFgntwePSxBWCuqULzc%2BJL6t2UE0jKx5JNmP6YQA2TdD5Y6t31T8oxq0BP0iorLrE%2FPxK6%2FzQav8ydVOEGeqV0Zaeq5EEpHasFopw3sUt5hzBL0iP39YkK8e1lOOkv9fqHU2xHv71sux2%2BJhh8t0fu3J4ZPvIzkBV0ksBeWWFY2MxeZRzYaqGQDOClBi7iUa6cenufqdzyHNKISzCc7x2rbOQtHykMZW2w7kyKSEraOPEKJUJMLKAo70GOqUBQPzIKj9vAf8OfI%2BkLqApQsFIKDAb2Tz%2FJ%2Fe%2FsS3jxIEQQrR2liTAmzj7r6ugGBWwlo5mhCgEexvB%2Bo%2Bd8Ezq%2Ftl1slRF4ukvKD1GqiTIWKWqG2Q5d9XMqWn5IXEXAYxDY2CXwwKOlEIIUp8DWdxSggTo3jB0sxYk%2BkaLu6Ebg2sS0RnShWL7u3lx3%2FDir3v8x4h91Md%2BPvgWQOmloH9rlFPA34Mr&X-Amz-Signature=55773afc6375c0beb4e5ba3e3920be408b1d90957afe8c48c6e5b3dc88e8bd2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
