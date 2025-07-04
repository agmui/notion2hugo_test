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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN2XCQCH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCDoogmoOwVIXEXTm2DwXFqaZdhYlhNcr%2BJ8WtRrg3z9wIgA3I9re4khJx%2FAsTmMbu2p3W0dBkbZJhZfbasZTrz5Asq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIMlnn9Jf0XJy3IoUyrcA9ON6xCQAGyBlo%2FshN%2FcSbxlZwERVBqeHSZQm207JX9wwKizo%2FMx4aDMGmpvjOEv1K3qEEDvU8XXLhtHb5yk8JkGgk4MkmxjbgOtbv6aEGnoKUx21kkH9Tvak0mTL3kOCidv0vX28a%2B%2BQg1D%2BiKwEarKP4BI56I3zYr7sEYhwpAxMBgDVurjgrj%2F0cyfKQr4AtL8P%2Bu%2B%2FHo%2B9dKvXmFH84Kss8XnjXqkrw0ASMB8dZMdfXCkfugHDVaVIeYn0eVuJnT8lie0efOkvVIK77zzdGu%2BCEmsvuKILsPgqRctSMTVLS4YX3GY1HF56U0Zwg2n%2BGC0S50b85WeG8XwR4SgGPFTN2eUI%2BzgMNSACOaI2Vv4N72u9zBedkJLyh6EbO09hjgtDSrgqedLtqqnTEUMP%2Bolnq8ldqa5DAqzpQtyU4%2FQ2kICWeEiYdQAD1hw%2FoQ02itXYAra2wR3zkuBVMK0EuADHFP13WtXFGeTpbhUCwNp3aC%2BpI0VsSD18Hr4s%2FQYk7TZGxECDkeHufN3%2BTPXOCYImeT2C7ylX2sodz82APve8bW9GNesgt5jQkwFaFRB9bZOSOxEnQJjK1nAwQoyAjV94iBIhqHlDs6csbQfNztjHTPdQ7Kgs5k8JdioMJDsn8MGOqUBFOsGE8sT3%2F8rDKXXLvWom%2FoqHEOwpr3xZF5g9RQ1spU8wr%2F5T4FmkSvhlANVCVSMdqgomZd9rdfohtn5hHfvHzdMX8WZZsTtXm5obWWTRO4SXTBpMMhJmF4pc%2F41asm8eA%2B8ZfhnI5F%2FJ0eok1Pl%2F3fBNsM3129YFpyyjAGQ47YV6ypKwx%2FcIzUh35zMVn5PdbEeG0kg1VttnonA0fgD1q%2ByW%2FVc&X-Amz-Signature=3bb2e46fa1dc90350f6b4845d9cf8f79938d2b9a7c9dce365a8090a0794ff179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXSS4CG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBb%2F2KFcqJhbKo38JMbVDMu0lE191une30I3ipBjzbHbAiEA%2B8jWXV01kO9aS7QDRI9BcaHl%2F8Z%2FxlWdGzNcxxpJ%2FQsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDJ5xvqfY1Yvoc7kfLircAz1nQZFxWFu%2FszlhwOb5kOQy6MIp5CnyTsl5Cq1ai14ZjRAOJxwiz%2FepcRAYc0nRfOjZFug%2FBpBoY1s211yUEsYlaw92Phub34%2FYIvKEMPv145%2B7cbbBpwG5%2BDOHKM45OsjcnWnAsrQW25GTypRXE1A8g7uG3AbgtEPLiNcYHRk1hX%2BZJHs3KnVf3D7SNvn9z5PUxcMP7T8tQkpkKxO5oVBWscZ2xiPPDv0C9V2Uokuz1d5Cu5XdlVCucxvshzgi7dIXZ7CckkAnWuES5fDWgHgQbapkRZlvqMJNMlxaT9C2S0SF7j7z%2FkFllz0x72a0RxegsGZci2wPcDpGvHeozhNe06v3PFBxhG80JUJ8%2FwwM%2FlAp4brrnaBdFcN7ea7VmdN74ODyF31FvQiok9FTWtJEWZcOkunYDGIDvFcQChmMx%2B%2FxWq4G%2FHvIQiARi10Si5kDUga8FdFqfKgo2UR%2BxdhLotGbe9vHN6PLcdF1xdnmeiBLJ36ByIjXH5aiELSGMygF0wJOcxFry2JRy6v5xRRbtf4lDLTh5yqGDkLludfPdHDdFh9N4FmRgmrQDWTTWh%2FEnGCDfH0uPsifVdRb6SXNbOynmSxS8hOBrEh0KRGsxbM348qOsRwXJw5AMIvsn8MGOqUBdKgOXnP%2BEu%2BIY%2BjY2Zpb0417zNjDEi9i9pzp1N%2FsHYanVayv0D8J5RuosGb6VVJwzl9qrGATzuqOcwPLQ9nQ15eJ%2FtUYApeJAwN82C9FGg9UUKmVAEM4rmNiWtOOn4fFI7MOvQKJQ976zCjE2x6NYb7a4lSqQyjRlqhGU60AF4gvQpfZ2wh3tExGwdbr040pO98Nv7RlEWMbOqWZliWEZBDp9PCA&X-Amz-Signature=19f64143e1edca6456fc8057de58ced9bd1c17f536423028e77c18a3f00ebee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
