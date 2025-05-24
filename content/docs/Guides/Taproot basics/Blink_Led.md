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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCBIBILW%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCIEhWQt1N%2FhTw1IF7FylnOLwJqSqH2jdOUbwb9rS2Ez6WAiBuRkko%2Fxiwmlj2sj4pRz77o4t22Bbg460NBBwVztI0SiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiqk5pFi7kL%2FH5MwzKtwDc9rXkDn%2FYiGnddr%2FdtpmcgUsULKIqKfl9yr9IGBX%2Byr%2BdK0%2BQU%2F79o5LhaJlPQOTPTIoGtUR2WFJzVEw84xIMDehA9HAD2fL%2FV%2FLoyx66kUKau5poVc9bVWYzbwDQY5Eagi41CQHLziMoNeAA8X56iyKNFbJrP90aGOTxmpOQZw5IkSpfDQQGCpXWDoo9VU%2B3E1e4aASXNzsE%2FBUboFyQaV%2F3h7OOBLFSXM4C22JkDrRf1ZLUu%2BZ2P%2BjwNeKM02zOMG6q%2BzAeAdK5DGhLfN9VA8p3mjo2JQG0Xvt%2BiMFZMCb12kkFxvUxOBWACBcKLrbI2ahXze5uKEibuRhk6FqA7RGrzYxd8u3LQwBQEEyhE6ewJTN1cat7pOVJVsfNWASbsq9JOAJVnfniAnAtDHSNqrU02hQPdw%2FOJY3w%2FAVNZqF0rwGqsScWZPnI%2Bn5McAJxLMwmMwpdJJWAsYyNSneCdy5zUbE1ARqDcbm%2Fe135lfVdxe%2BYI83jvCEYFfHR4q2BDGwBSNN9xUEDRPSXftrMQFAubQCmdQCB%2FBbiRTLMBlAk1OWqLLVAjgzBOLiNh95q1phRK9HNBET0nIv6i5QLYYnTTtLLVQCNEkwPzyyk%2BJSRhhjskw62XXPnWgwtqvFwQY6pgETydFTMH%2BxYnM7LFjYQOtF5%2BM8fWBLRZn27d21O9XtT1DkvQB10ojg2hQYQdXkdGniI3d%2BByrWS4FrU2Sz4ewZO%2F91Fg9bZrwunIettb9M062pvj7dN0xesG7AD23DpG56itBl2GrCVUQpSymlb%2FNC3Vn48oYZb0OQrTMD%2BYwusFelet5%2F8fMpEV4S2OFLTQ5miEipvIVE4fpclRnmJgKfHr1s2UXu&X-Amz-Signature=ecd7ec9adb4632e695750b685e0cfeff5fe2843776bca4dded9f8204dab52065&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGN32B7D%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQD5%2FbzFNO%2FW6evYU8o0iS4cTT1jF91HwiQn7uNpW35X2wIgYLbcOi6TbA0Dg8AD6KIKehx1zVp%2FCPfe%2FXvkGJgnkX0qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMpla%2FhsAvzrjg7hJyrcAwp%2FJ4xhzpao%2BTuSu2s%2FZNFXaRhcY%2FhKiiTUvmiA3xgVmfGyEb8KKnXZI3FNZTp9laaj9QsrRA7xBCPprXBjKY1mFRlrjLLImKjuJr9vs9b6nrIDR0NzZUYc1P9G3qc2adQe%2FsNawdkXnvhwx9yao89phglXCb0G6pou4sXybfQnPebd8Z5NL58CvwwZekYzs9TGO6HAEHTEaE545Et9GCDq1%2BhRqcWOKUIW0CobCtOWbHi8tXQYqEWxO2ZKY3Zga9ah%2F6aWzzP%2FHFtdswkFCSthFUqzqemhLEW96qeFAjHtTYOzunU3JmUkhZGApMQPuBcOXS%2FgdL0hvB%2BaBDyNw6b18sK%2FddWZXxzNDfEMX0DNXVMOxd32ICQueMm16E91HedMDXFItvI%2BiiJ%2FOiyefX4imjSba7mpU8uh3yK%2BVcnjAl4Vjv96qcuFRqkJYlDiK9fgbbBoQuIurPNqSYtMHL%2BkGdhCZXeKgGncTm7thziC0c00KufrLGP5BdMtiZyWf%2BEkms7gJNzYRgsnY966eGIUU1bYpzbOk9J7mL1n7KUFUAxOzVSvbSof8%2B1HLxwda6gEwmFOJJLhj94xXDlyQiEk30bQXG1TFb4YjMwoW2dUrXaxdPH8xBUE5Pi7MOSrxcEGOqUBjhaEJDPBEjsAgg0VrTGnGyo6P%2BLr9CwB7tycq9VamfOSlPbPL4l%2BZR9brzK2SliUKFyOz5eUIMe9MWEn52SjTB4HAQKEWbSgS63OR10ujHIrPpH4qqvy%2BGH%2BEmSPoqTLex9z8%2Fk%2BrwkG5RICBAbqhUQjh%2BtU%2FiRvkqD2E%2BWDUYWZWHEt3aJQsVNjqy1lL%2B%2FrLvYbiUT5tz1YwTvDdrbAA%2BK7spMC&X-Amz-Signature=18f8c61746b932d556848733b2b630edee26a6c1d2fe4a96c623cf2a59b48de6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
