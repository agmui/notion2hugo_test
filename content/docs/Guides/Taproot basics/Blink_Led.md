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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JMMB7TR%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWb7tC9euEGUoc72OVuMTGHFdvuV8xulu6OirKKg1vrAiEAlyWA4d4GTMYJ1085TgRTk80CPZuHbTdIl%2Bgyx1WmlBoqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANJkLumQFPqEiEI6yrcA4nLZBLbFRbeWN3d3xP0RllNi%2BOfQdI1fbKoyeB4obBxLCK76ME8lLPD1q9Z56oXWIZ5gyH5QNLwAZizwTOwi1NwIjA03ep5UYTD0K470crlqXqMitYNYBCwmCAr9ri%2BRS9TvRoXi4NgCj4h0O%2BLVR1IcQ%2FHzjHZ6oAKkk%2Bgms%2BpSySNUBa4LiSVz6u6lcTrCzLryDYdXaIvTdIbon4BR1iEcd%2F4Zq4ynYa1SKgNuCkNI7yGZTv%2FX3d%2FHzBoYErZZY%2FI8z29JqNS4SXNDf2PNMI6T%2BqDqr0pav%2F5Cs9xcpBkCS7DiL1ZBH%2Bh0pL9Aivi8CXeHH26eYu%2FOZ2zHqtN0BZt5kv%2BEBFwKpFgAFsE6rfGMwAwVeQXcXh5j4xT70FviaiXAXDR1wgj8TVVVjXxq917lPBHZF5lPNsJd3dCSiGwMFxa4heUTvzmoZtoMpuNJHit%2F41UshBRo0oroJwUQ92U8iTFIduxHs4h8l9XCAu22RWbOZiJIGvFRgVrrcEi%2FHD0VrANvEFsKmXgKUGlgRjxipfcmPmWv%2F3Xmi1DEa8P3Wa2ir8nXWg11N1xnNYWwPiKO0TgiObUb5Bu4kJzuWSRR2yUCveYyWdFQRO94%2BIugDYqMf9sO7zJZ0AzMP%2FQ3b0GOqUBIvxWZs5XHBinRlRLLMa8C767gH1T7JnuFtZl3xkvBCmuduJ7cjHF7xI2EKwAB4FSOo7cgSgVjIR6jNtySDVCCwco0EW7dZwTHkyP%2BI8Eit%2BHmd%2B1CLXjfyJpAzxX6Z6m4YYnh0nKhNrk%2FHsFJDrwxucm58aQC7ZXbP25HlDZIAcwLY31Cf6NEfPccAU1l42zY2XwPsEYfpB2gDgGYS%2BbfnRlnf8K&X-Amz-Signature=c74e7eade29791b8d4a999f8d6cc8fa635b0d700885db7765f69103046ec5524&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQDVRNXM%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBDm%2FtR0K1xzXrbDjf2l2DUxQ5Ix%2BFAbwTY6qfDw02ggIgdXNDawUsrBUgZGqay%2BUmeyVZcuKhKnKmpjCguP1XFF8qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKloWNX2fqX8cSGpHyrcAx9NE5sjF9PPf2%2B8oIGVPs%2FBnh%2FwGb9W01kCK9lufXlZTwuJwzl3u2sxHkeSGHgjyASVVSp7MpOnu3820EWOQpCXkLAiCujCBADxAtl4OSnAEP60XK2d8uWx7EaVr71ccR2EzedBgSL6lLSyaytojP0fxUePGJMTOpN7scum4YGcymnVVDxby4P0VVCw4%2FpbARAhnY8Js%2FqFAvLNV8Tsa8DJIaOfT7gV0uVYEJW9uDuyL2q9cPRPgzYUdCnqjNS5i1PQ4nRB7nqgB1IuSdBtRj10F2y4FZFygLheQx3ngvEK0ugIKTTbGehnYhBgk1itv4DlYtFWT1xNJtcLEjZae4515RXASuVWtsB4QsN86YcMnFcl1d5o%2BYLYkDYN60B%2Bquu%2F%2BcpCL6flccmvyRAQklvrGxkFXzAgbH2tcBVJZWgnnAtiXC3MlYDd0ZMjI5SBmTgXHyn8BJbctX5U1YVNTummsXTPyUR5ozNND6zxRN6gB71z3nlYoekOW1VfTn7lSrbOOAO8Cf4I3gwYRxKgE3ZSuCngpMTeEF8%2BH5UEGwVchcbSycfTXdE9veS8DBhbqtGXVR%2BACAwxc7TqPZESDPDg%2FV0WYjIssSOkvE%2BgwTZihtGSg5CxlYI5mCDcMJ%2FR3b0GOqUBZfBYcnDPts%2F5ebGoIhWzbNtO4Ua%2FinqKTsJi%2BLB35L3PLxHHKTHN6ebaQIEePrmrtApsejPmJng4eHxHhEmALtW3mmrgYEBl1sud8YfQKxwYplGRHVuyafUiIWw5%2Fj4F5gkqREfjYJuBLKRi%2BXTdHZ5dPvB4ho1IpT%2FCR%2FfkOM%2BZSkDqjvgWssJ9V5SsMQvTKcSFGJ%2FBXzbMSVcB0Pmitep0DAIn&X-Amz-Signature=bd7084fd0449b366afea38bd7d60dd47dd7f4b1ce9fb981e48e1568b0b69ba8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
