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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3RP2IA%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDXb6EzdduN4Na9xqgsUnTSw%2B9SdlkgOXmRcimU6S%2FJYgIhAMDvKwiody3%2Fq36PK2tSEyk9r%2F0ln7oiWp5glCXeB5e4Kv8DCCcQABoMNjM3NDIzMTgzODA1IgyWYFciYWlV%2F%2F1EChgq3APj0NAOSY5yR3cUzBbNdiYg5Re8ed6LChCl%2FdH0FcTpkj3jBJfLYGVuiekawg2YdsH%2FsRuzIW0%2BTSYLI5JnEjOnhaNYlEAa86GVTx5y0Kz09LpHtmmtdN9Ctaz3FAiwpOsch6tZIK03C9dIoP9RCIb%2BujWM1QRiw1Vj5wA06z7b6HklKJfleWT0MEkshHRe%2Fgsy%2B6hIF6hTZZt3TDLxF41R2kC%2FFnuLm8hCVJGTOoctRoliPbpdfHEF6Jt5A%2BaNTLW1jVjAxMyJPKqG36RfalrqFMZJwjV71nrz8LCKNon8WFO130jvFbJv%2BsLcY%2FhMkL%2B6sKsqBVPtli8x3QogBJEp%2BphCwH6vfg9QkJzTa6fLNc1wWafLhS6Mz4AgRLh7Do7dFU%2B35PIJY%2Fz5HWpv3doNdtin7aj4kIAQLwqDKJBnJ69sNndP4YqCQQ6iM8BQxyuc5s6MxGXT9yIk3Z%2F%2B4hqdHGQej8OAlVpgsruReSVQo1DoM69%2B%2BDGRdmocbWbt6tbKPc5pLcQUxXmXa%2BqxN74uYzyxOacVr9XjZtPnTxiygJZ47U6Z9u8wo9VGHQe0laLmBhDyvQ9yQ%2FWUfzxe3i0jJfTek3Co3DE60hioL%2FNRCeqDeQM9vvJPo%2BBIwjDe9ujCBjqkARYoxVoTC5ZlDOgL62wSJd95fxKh%2BwhnbxLJ34RxJO8ays6PLOhSJEAAfYMnvR2SFRWnJuiXmk1gAqvpxxDMb%2FQe3IBa9P6dJBk3qWjQwFYeoM1nR9Y5N0m47AKydTHERg2SThzMcgBaPQlRUcCHHAEosx%2BLFCTPNIoUWXAaDM4N7Dlma4R3mQMzLtqhk5D2uQJll4e6fVW170fEfLB064mCH93r&X-Amz-Signature=e1843b6ca326fb2006817ea5c7a1ba2acd5bf88c26fd10042b5073a6c21e5877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA5BS6P3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHt9AxKK8vM4yZ1b%2BX1mwQ2UnJVXBpFCQ7KXgwey9sO%2FAiEAzujsLg%2B9bG%2BRnun87X%2BZJkRambpbcWlNYcP1OAoaPWsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBif1oAC1X0ylvpM7SrcA5eXyhnnLSylmYA5qnMqFOrp5%2F3l7Podi3kp%2FSgl1hl0%2Bs1JP074Cnfdqze%2Fr5SSGJzFOWCp39aaweWasBzavNMBlKkjmuY6VCUReUSHztHYNrC92mCQlYpVo4QwrCYJs5TLElOv%2Fyvv4G1tTF3GSQCV14riTthnMv386f0agW2nZw5kWIyknqF3YM08aoCd1EyHgJMRqBPeorwn4ncN5f%2FhGxPafb4LZ3YN%2FAx4sPpAsyndcM4tymuunE6MFfg9DqxV8js872Yc24lidlKA%2FFt9eV%2F1zOQB6mMx1yrEml3Z0ctaQf3yrJtDpYzxbbj5fh6GOm9knLpkqbADSp9owVbL8u3BLOKXtZvNbSiy3IpLJbyaVu%2Fw3XhZiuXZXf1RIu%2BM0RLt3zh%2FAeL7ShwqZYQ8HTSCw5uG31pdWRxKf%2B9jv7edwISBE7R53LN7jNV4LhPnkfsCDU%2B85Cw%2F4lZ99kMhztS8lMAzHE9275DJOnqUbdiZiOkuVSCkFN4zt0wo0GjN1fZ7Bnr%2BEjbmireqmOksXYpW0xLfGmMEvsUQOswzTUFsMJiil7aa%2B6Qt6uiOrhTM6sTapvinyhvzL4sA%2Fe92zHNLmCHLewsPni1FV7yHMaIUFidyFVt9fEXUMM326MIGOqUBraQmSIY7DqgVEzVCqEoy7WxhPalxJtedjMk7ld4uTNulNe3WFeJ2Vy8cUlvuJfbCg81s1D08gOj9dMAKt%2BMvopb3uXIDc2JRsswz8rwrDSemy26YZB0Z0EeAmq2uXWIoAity%2BQZ%2BemCV5dFmMy49%2BrTf9AGsCNCtzesBD5IH5alAw7U9QnuvdrVA%2B6OBV%2B4LFYXpXED%2Fb68eSw0i9gf8doE4Xx4t&X-Amz-Signature=bc7b9402e31c50149db8ce00ac65e67fb1d4c3379d62dcb19ea1ae4cd118f267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
