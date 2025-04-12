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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RIEFLOQ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCcbSi70GEG3Vcr8Gm%2Ba%2FPXOfXZF4ePL6qgsLp1nROW2wIgZGo7iBbnj5TW%2FDzgM4eVvlZtJcZTBtEnNO18UIeDuaEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPeFtNDb03oJUP3kzCrcA4OXG4nc1u4LIe0Q%2FPOfxQtzkTU%2FQPRShmt38q6ZA1hnh%2BSnMuDPEM8VdJuGg41Lwcmh%2FaeRxCth0Z%2BK3kiHz13uffzjFyB6YNGQ87IHLpl4qrd5YapESh9F3K%2FiV5J5QiQVVx6yoR3itYjgYYxYZJSiXbu1yZEliTgEcCaBnPFQimKk%2Bcp8KhV5SEM4jbcitiufZ9bDhrXGlD2DsJTyhZtcN%2BB2gnsBg7RP2Izw%2FEAF%2FdUbN02p%2BC9D8%2BUsijGreZD%2BOP%2FvdLxPz%2B%2F9dOzodyoajvLhLsAhrK3eJqxnVqzgt5xqkCaPHVoxNrWnsGW02eLRtwQwsONz38ld88U5S7MV60idnCKDh8%2BYvfiM7%2BG38urz6BB7%2FcGo2JOzguiSBcxYnRYWfw3b9g%2F5wL8OTgYwOxz2Yn8iO7FeSLoxmotU4sjXDqgx8zexcAY85fTDuqXMVyPfmMxCLBPjrhWwAi4yQ%2BNh3bcC%2BWR8q1Su98uhNBZVzPJinlhvDPiubuXI4n3yci3Hw9boJRQdvEkblZ8U8Owf8ADRHqoQI%2BpiOmfclwRi1MeUWqQRqBwSfyjA1hdGrIliz0daY3eBkXZv9jqsO85fyc6xkZz4wIWhqDHhXnZwax4JDD9UD8%2B2MJPU578GOqUB%2FwvCJanwL5rmedWUiUy8yK8zxPcZXrB4kJ1xJuKOsTkDFnAtN8%2BiK84zTVwRbsapnvcqQH%2Bb%2FbOrxIWo76Va326mOp8KEpOoVFU76YyqxQ5C4Mz3Ymz%2Bf818vtID4BL8fbEc89CTCaoYu970ffPq%2BycAW5a47dynPj5fKu5PBrP0gXQJRgko6Vfmw4Hsibrchv%2BTQiauxrxTOgq9ttJ%2F9yTipRrD&X-Amz-Signature=343d32698e453292d0805e32ebd2e9c97c3e2f5e39b2de6daf0cdb3fe86cbcaf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMZ5JYEN%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDYxh%2Fvn1%2B%2Fy0v8bpllIKb3jS6gkDwb7KBe1fu7ssJQfwIhAIUtjnOzvywSD97q5oN0j0LV53SB5BJqitwKdn4MBkeKKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu4j3GUqVYY4%2BcauIq3AOC%2BSv6tH9Zr0paRAEISOxDyz8Hh7mwgV1INgSXlb0dsqz481rDpZlY2v1o%2F0RlURmqmG6luX4br5dKlnr%2BFTS%2FPbdznqD3j1vb%2B2K1Ckfel4huKAnv5eD8QLequtXcgCLQkwntVGtn9ATFgOEGXf1GAM%2BXXjZEl3XqG5AzilJN7PWU246AGkCNtrSE7R%2F2QqSbh5%2Bo%2FkvHW7AsRiWUMCJVnXfTMyQD8xnybq48ceDDv0ZasGOEnCb7XyTtEHduuu467yC43fEMAKDxXeOyEkwkavZeeeX6xcNC8poSRuNA2amF22mH%2FjL5d%2FWNfkz5mVNnJrN2ByCCQ0nQopSsvnpBxd%2FeyJEaGRPTN7XU3llOVQ%2BjFdU9xf01w2WzPEz3auzeIduG6fbs%2B5XYhFLCETQn9hDGDm3sF7xefsPGhsBXgz0ZsjGHuWREuOVciimMJjXdPs%2FFjaQbmAmQBembt07bR8jrxLPAZ95ZPNo8Jpq5eKNzwV45G36JTQ%2FYEPXJ4GYR8asZE9GypCa6Tb4JP6ca998lg5m%2BqjohEpj%2F%2BwOaHv4iu3GeGzs9APhpxkIdjMdUd42eqjqZUQ2Y7HQ9Ndi%2FcqedeiJsTWEp3IJpCMoRy%2Fzxx2PVc3mFAgYT5DCB1Oe%2FBjqkAdb%2Fb4H61K7r7kr6uymaaJTKcAWxVButquD6yEIWel6sRFnxgDSFbKbLEq5yxF1AhQqOjCAfm1FtZlNwb4U2YFiKYjg8StyCMqvwJEyBr9Ni0icez5OOKoieuYj3vhlVImHG3Gs%2Bn5Hp5f5UI55Bn4jo6OlVYOBPDNsl%2FYDlnV1GVbIw%2F4JNBAe96blUYwwT2LQxSoxRj2ZBudefkKlJgp5mrZ9S&X-Amz-Signature=80dcb452a3483bc2ea190054a4efd42021d99c052d52d6e970cdc4dea0103f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
