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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ULXZZN%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FhGVkM9RJJaZzrFXjAKHeRBhOwGGSuZ842dGPJX0z9gIgd%2FW6MoIvtF6kUXMNf7vUWD0TzLZ0N4adJs3t2EnmVYMq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDFDszZcSRWm0NIH7SyrcA2ftidedchnkedtOqOPsTFYEtoKAYsCZ20GpLhdit3m53QzAQhgTLuHPn3BgUGp0DXduJFoU1xaMWGjx%2F8JHbs6hi3NHun2hB6MJ7mqn%2FYHoA%2BJJFqMuZiQvqGFJZ0%2FoJtoA9xsrN3wkXhIJOuMSNcbzySPu8Ndb3Q9u5RYagSloMjSUHb9meaPOQhN7Crz3OcxNZBuCySMRRVzr7uUHUplXP01Tn9274CE7Ru3SQ6%2BRD5Xo8Y5AGP%2BxMiI3k6%2FZuJtLVY07x1rxFvCUYLP5t%2FZEpITh8gvJ3VP0TF2DZdeE52Y4Ch1%2F6%2BLCWrGQcFJFbS6A5stdEOpVLLhcYpYkFBr%2FRIRA6fxmfGZH%2BHpEVTr%2FNbVYTOm5yxgYEoCKCRIbBXtt2uyOqZmev%2FY4V%2BVn3EGs39KL5729JcJj7lY2TDM0OIsDUv5%2FnfO%2B7amWZ3HIiSn2vV5ugb2yhQCkasXJoW6%2FmwhZLTq%2BiujIQr6Mn3RDxOKK6foOqDd%2BHBn17PqYp6qNYNG5MJXER8wYGWhMajUX2M34IfT%2FQuUudwJcbp9f4DNXO%2FWd%2Bw46Wmycy2kXd4tnv%2BXCPcKQ%2BfTKk12Py5Luud22AQjTJrQvSmf%2BeVL7mjAVnnSK5VFoaXRYMLXk18EGOqUBjEAOSU%2Btlc8f3NvX110zE8TUKK0UeJO1f2xgvu%2Fbh6ZpNSLTEzwK1IYpxnui3Jw2rWsc05Qi0d2MJwCksq10eymMBPDgzStaDgdg1Vv6JLmE0R0S1Y82OkVJyol0CrgdWDp4R0DjST4%2BleBJyM66k8Pxn%2B3YCaG6vAa47pEf%2FPI3%2BiFrFp6C33wl7wUqv7N2NHt0oLzuulk%2BY3%2BVgkHACSlygsT%2F&X-Amz-Signature=4067fdb9d6fa55d0f16dcfcd7d176692a5f3661667fc7a6d37a1f161e3a808eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MUOE4WF%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjkLa5cEdzIaV%2FA4TibsKbGM74EEm5ivOkMXnDzvdoMgIhAOR9xHQX3kPRwQvm6YASTNy9XwAmWc9blrRXY0LujrGBKv8DCGIQABoMNjM3NDIzMTgzODA1IgwYmYSDFJ6A4hevnWMq3APmpq0UKCdxbo2VnYDVMWiHyx4aHGtYCSZdrlLw4oyrcZF1lKq26HfXMsdkk3Zqv9f2i0cnNdJjpSuefkEMnBKmhUc3br2%2BYkJHOW9YM9UXizvfOsu6uKBDASRbg%2BdyFsNML3IuJRi4HK34smrgEKSMM5HwHk6tfY3gO8VrDVN%2FpE5BIsGhXol1iqqMtwOaOZsAifBNXqDZjU0Bbb1ErcOKRoLZheeyVgQUa4TA4%2BusAUlNebEHekPb0BOMnRMHUcs11gQ4zGR8zm3S7ZYrLz8WNYd44Cjl0gbDzp2tHqd84cWdgmmRc8Vel2Xg2tVrWPtqM1L5AlC2kb1m%2B5EIVVgn%2Bd8IBk4ZKSrUAC2LFb0Y0brBmK5bO5W1GTzfhQmLK5XZ3eq9Kp0Il847oAycVG48epGgCKF%2Foxw%2BULhUL2FrTm9hR0jkHdPcAdHw3cX5EBzIsxOyBi%2BxUqDWO%2FHF4pG7zpng90pQ0ZET1fipu3HQze7njvvX5xWolGbj9h5A8s%2Fld%2BNyayXHA3kYxF2IwydBjKoG32BCNpwDoLOmR2vzWD2Cv22ytg0c2mAtpwX3JUHLUxTTxtGREVPeM5k4oiET9gIkxsxLkX%2BE78I4ClN3wfpplr3JZzoj1UiCajCn5NfBBjqkAee8tfMmXaNBiaxBWZAAmQxmSpUdmBkEwLCJd9nFnrfScxK0%2F8hyKJcXC8%2FQsm8Si1GzrEfeXAxL8JOXXMDPnNwlbAwGKsIV1cNXKbfx9yvN1DLpadSE46ycP7FP7vL0dRikzFVyLXvyRV1Pstkc3ylAF5ECwMg8hzFnYoWYdXo0qdxQEEfNt3zuRiDbAoQCwO%2FNxosPNO93JA8pvGWUwTZB20O2&X-Amz-Signature=83e449b74b1de940ae02b6c73bd5697daddee9818c75adb5183bf70039734314&X-Amz-SignedHeaders=host&x-id=GetObject)

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
