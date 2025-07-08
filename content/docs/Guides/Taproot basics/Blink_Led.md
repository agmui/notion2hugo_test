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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVG3LQKE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4etvYz7ReecNuxRCwnkl2q3VGDONMwAJFFziCitt3kAiEA9Q2p39IPYwRHDwj7Ef1iM71jNmSuixx7Z5BiBl9J2pkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4zmWROxZwD1vyVeyrcA268I5PLaxyWv2SkDjL2%2By%2FcSo4tmqCy2J%2FJrgCov2jjTDwGyTmxbPmW9w%2Bwnlr3wbRTzC5%2BLyiZD6SHGw2LA3PA%2BnEZR5aRnxouvTrMN9HWIvcnitWqCe7BT4Bn2zISfwIeWkYgLtNx7CGPnWbhHtzj%2BSKUWZ6AGY31EvHg3GZpqZNAeQakS3bYTVfLSOsFVR6mHzGGc07ub5vQD%2FjPpwXiFs25T3gw6hN80UeIZOmPLNR3vptr2h3aslDxiz6svBjB5hWEGkVU3R3RH8kgxXfIyJxqrQP453tPpN5L1qP5eYSghr7Kl5xuVD%2BoSxAAHDYFx2c28h6C%2FP7l08DH6Tnmu86DOI%2FjCN2CplGJeiT8TN23ziCAROi63RucjXPPtooe7C7gITH7AlxqvckeuCTkKFuP%2F1QVpH6nHbySWwJssH1YcpbBeBE1VWbdNaJsvsDKkD4u4Vxycg%2BhNl2Olu9fX9r%2FsWBtON7e6Lrcbda2TEgM%2FcDdHAXwS9wGQwUvg%2FJohDCyWet9jAbiDQR%2F3VnML2gTadRKuzQOjG7cu%2FjaNPB2Ids%2FG8k18uH0m%2BLBd%2Fvzm9TYQszzGEe4luuB%2FiD6fPFWMNfyxKVsucjb%2BzHMeZaD%2FCi2G8aWQ8U9MNGDtsMGOqUBK4AA%2BDALTdkkOqG4r4L2LP%2F1iTYZ8TUw7BI5vaD483b6lq1TjibO8nrCkGcDPR9E4DqaPguFRsVeKII9NYqnrZFo41%2BfFaiXfnFlbBHwFpal2%2BTIrIfUpq5ogYC8YTsv95hFBUFTBdoATzeXInk8T2ILmic%2BwTTwW2uz6PDQvTOt804dxZeCOn5vUbvzW%2Fnh4Nr8lw0%2FtAoSD%2FT%2BGKUzDT9vmWPx&X-Amz-Signature=2b30d12482db91968c317d637beadf5695738c08968aae90bcb68681522f4ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I5X4XJR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5GCIvLJGrOC6%2BnvSUqpalYC2Got6le0KLMHUJgya03AiA%2Ba2wZ3gn3gBFBWg8C%2BWVXCTY5%2FBf1qt3QXAHmp3ySRyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv8JJeGXIsJRFNNtyKtwDK6IKOVfLshS2v8e3VEQL%2BxGTSOuFXn%2B2FEffpdvI97QUK8fcHYqlNJOEvhSCiRAaqerUNXISZUDqCZl4g4JWzr2zvDkDvz5lkVcwFgGhruN6iWfGwX9FBmcIYHnw1c0Ga9g9ewCeCExSJS8eKWTVWJfYtERGPoZHiclVTHVLXWFcE%2BzXUgwYrqgFjEcz70OM2m5DbrjwSVY4N%2ByPYBCB09kPoDNg6SEyioU074ge3ZhjVCoek7kjw2Ty1NLXNYXITbNdsFqYFWxUFzpfVaz6IW%2BoKVURoLpZ0IQ%2BWL5HzojVW%2BzgUrZ8OgNnAbwVDeUlvE2yFUBnvRu7g%2BYs5FySxMnVQu3IBXTf3%2BWKGNyf1fnIwcQ926ezkPPSyO5Q7kSwwpy1uVyZiT7t0lazRrMSe6n4XI6UwkFy6kA1BnR2JkrxGOZ3nLgAdWskR%2B%2BVptS6qvg98Q%2Fuk%2FIDxs%2Fyr0hAnrkkpO2INIkr2n9VRSEwrdtiftYSWZibGVMydwDHa%2B1z%2BHWd%2F%2FSBhemV%2FVyPzfR%2BOk0s%2FLz2jUs68YWecyS7cG2xTg0xP2no6N%2FNHRh3pwEMhA%2BLG2JR1jU8e5r9nE49Q6u7kb%2F%2BURdg5WoKML83qOLFKKkI2ZRKVFqaR%2BkwlIS2wwY6pgHBfprOAKuTmW35TlKg6lOCwJzhbIBw2x7PDoVjZN3MEjrmoQVozz5P64tr7x7ntqQjk%2Bj3jI102URhMiFZNC25nqHYveE5Y60Hw28vlcScYo69TLJL6d4t9B6bMa%2Bhk8kQ6kC56XVwU7iheXHtW7fmRMWLE4K83OUTkGDQ%2FnARpBRr6Mdz%2Bg2bqt1wib3h42l5Psqr5kkviYHZ%2FBgBeyRX9xXsr%2B4e&X-Amz-Signature=c8755a5b605033730066845c5fa7f43f9e93c165f4ea845e85e55ffc0868e029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
