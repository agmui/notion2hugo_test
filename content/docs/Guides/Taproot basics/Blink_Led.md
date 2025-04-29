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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSY6LYN3%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdFM8WqfrVInH6Pj1qlDxbHnRODkzERuFwDjGxY8Bi7AiBa78NNM66A%2BnwUIZ8qp1x8pcHWI4g25p%2FZCPjDVp4nEyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMn11WzRq28P2mTh2YKtwDgFI5hGbtycsKJz0GPXojLZhHywkKG5Y6oBdFwUBquTCgW%2FukyMDoozPDSgb0Id%2Fxd57fpVVkP9ABa9CkQemBqqDZ5MMXUsrnC8D5jVLs%2FcdGGkRxetEv85uDBhCkuPPy3aB2VpwdAYCFNwVv1Ecj2NEk6luFBn8YhVwPEmv%2Bma6x1GfW8%2F5BcEgBJ1%2BrdkvC8vNkD9L2Bo5J9qm9HpUyENkGrc0JEtEBKouPaOkVHpCwA%2F36rPvX3tOQUs5AKO%2B52GNciMpBSwc%2FhVmpevv2A510mNOFU3mxTmeppqgoEojgNN6MKPJCX5NPNZfsD1JVHJSz9sOs3%2FtJwfe9dUtK%2BU3NstqF28cSTcwm5KIr6eiSM80eqeIEW0AiA84DFC5MGQrEwTfh79WwE4iB8C4piQP7Vk0zFUnY%2B6eef5vz6GpjO6h8vukL5Wouu7025L1pkElAQl6024bkqYIJqYhg%2FRwLEzrUURktzCipRtefKPlFM04cknZRWcb8WniL6IvyjjiWgx5DKLcqX6fu%2BgpgQAFi1HvD%2Fq1MdLgs4OvlJgoKref3YyU1DDrH1Awow1cIVli25UmTUzBFJbmnMbDdw5%2FoWDZKRALZWGrpIauL43lFw411W4qdXyBSwXkw9qPDwAY6pgEZ5ydVAKzg3E92%2FY8XiKYvJPFnSNGmedmW%2FzDurFcV1EYQV8Vp8xhqg3rbFjga%2FsrarNL0nZRGmC5N6l1IAs6OrYloEquS%2BPzuCsMaUPbcQLrU9keYMwcbjQ8xVJi9B9Yt%2FpA%2BQrtjFYla6krw5Jc%2BJ5nCmsmbiK91e7l5ynpdPjrLDfglIO5lFWyTeeiOg%2FRa4oiKZx2eDK8CCC242hcfVfEt2xi0&X-Amz-Signature=3bd4f839e58b896ba5083e7f80107ce1e7d1dd6b817c796ed87ae556eadd461f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMIY5662%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVICZEpl1HXpq77lZmrMlx5fdDzKoghM1g8gj8s7LiLAiBM2sUV%2BV9N2twCdjwrZFgBMFfppAV8Tkl4MQ%2FE1gaUJCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMawLWzTRXp1HWwHnYKtwDM5e5livhbTHx5hQxbsQsUXJTku06MsZfc1qHlVGtSmeHY1bUAb5cNUJ7zqpKV9pAjGFaiaIsBjM0xKSGUbXVQ8LFxOTtfXGhyi46nPtNqIio8GNpaV%2BrS1O4DioGu4XSpPmgUUUVDoVTzseAMkSJLM9q1Or2lu%2Bhy1fING8YEiMvAXnYafdnkks1vRDAcPTlKLtMH3nF9NVJKc9XaqmdsWRC8umL32DSzB9UQD1HIj4UlZwFfSPj1RjWEChqkdvOH9WZatuX%2BavP032Snz6hqU5hy15Ot0Xr1wbgVEbq4zkVrYfPPFn1bbnS3V1Y14TOapDIRXqKIDAZImuB1VdLCFxMkgdv4N8cDjP%2BKiUgAa1al3sj1lEufrol9TH4DIa73w3XEyxnXEMZVEewYI5VmxRWvWUhWNwtyNc51ELkUJiFM26Rsxbs7y2Q2X8ikTDfP9qlFr8Jh1vwzlrgM2dCeRHOm8h9%2FZF2qxE9CswMyjjgJtR6yFztQbxWoIEK%2F1vZ8opr45SnVeu33s6JSbQSHkIgLYrYePPxNLOFIC6n8%2F13Sg9aiEibZkAsEuaz3cqmuSS4Em736BkY99pKEd4VV2v%2FtIoRbBEQ%2BWIVyH96Hn66NTZki2WbrMKRmOAwsqTDwAY6pgFsbc%2B%2BzaOn3BhBQWnSsK6tBg01etYIf%2BlzxiNMwcCaAocGQcnneu2IT%2BWXg%2F8Hua3Z6NV%2B45pM%2F%2BKrJ3Yb1nB3lnQk%2Bngh9dhJYGSifRk%2BA4bNP6xoCWNCAhCOKhDzdU46C9qZpWpyzLIwFWrgkzFZ%2FtDfQWB2oMDdpphQ3ZbRSnG7FDxXRaeotIizSoGYEL6%2BboEiRHxRcEqOBfvN1mncDgiZqFTo&X-Amz-Signature=c9c057a33dcc06f31a2332f5c6e62e5700245a2949e6a7386d7c1f719824b70a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
