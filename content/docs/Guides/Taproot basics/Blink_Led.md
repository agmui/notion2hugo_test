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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEA4BEEW%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxWo5GfJt7dN7MEA80Nv8NHtdKVTY7w5%2Fg5KJr31OKpAIgNNFgsxOn3P%2BHXkCZnodZ9AEkjzhLb2SGgQO74CuAYMIqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkM2plY951xaJPOuSrcA0UhoGwBrXJx1u%2BL7oA1zzAH1WbBorI5lV2YU%2B2akTF8gdTCTO7P0%2F2K8QxfiOtiKWeCAf7Ry2jAEi7JwYt5L2EC9lp%2BwMEyaRghknipEP2rFpnOP5juJMKZnoNJs07aJoZOseiUepouHvkv1BqUAJ%2BhJRfxp8dWgRpz2StX0jfY2VSlebtxguQ9%2F9ZLNu9L5yvLxRk4jeiniORsQTLGGr4JBHK86iVDrAPanuF%2F38ncThceYL86D9d%2BKnxVsNTZ%2FL7j4oBxpFr5oehtgzgrL1C1jkHnK9v6Ntre3wMUi8H9DNvpu33Us9FXbDwNMnyszkWpxFI9KBWd0JQ90%2BtGGVsVNSEUNWNZcgWxvYOzfalfhVtv8l2ljTjESGipaIGFLJ0CQktXDq90ohqT6Y5a1xg7WgpalDjf%2BJ7MPWNfoc2Pp02mJ62ropnFjhcdfqFpBtt9Mo00JYyzLHcENgvC%2FZqCF0IvSEU5u3S9oWTOofa07UIJEu0Sgej%2FbnWLpzdj5SWTplmFVaWxXGy46LBjvqZllbmrRqe5%2FVIFzubZwG%2BVPdx6sTHRy%2FNnRjtd3%2BJ86E035iKERCPZFDOciFUM2WzC13xwMJqym4MX5wjCwOUWQA04AQIRUIm3lD3%2FMLf6hcMGOqUB6QddqXFdnljHopsGq%2B5g7i6i5a6Zyui0juouwhe6oA1nOUOh%2Fg4Inw5nvP4a6AyKBx5y8O0hQro0RjK7L%2FZJ9GOt8gIX7ot2wCx14nzsetc8DypLIaq5LTZSHN8kbJ52xAeqAk%2BrFnVSLZythNnur52tsmlrXOL1k82EDgrR0G3DZUJAc6%2Bg32asBxgeH7jgmmmYJF8p0kajE%2B5oVKrSEwtebzZ5&X-Amz-Signature=3a9f7c29555509b0191709efb49ffb25b6f5eeb9e7ff07efa8c80504370a633b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ATROX3M%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXYHr%2BVHV5TFZ5PzfgYX7SInpL0HFQG%2Fp6JDbVWAuUagIhAMbwMSJJI%2F%2BYsq25tJKfkvkV%2F8QNfnp4V3E%2FlYKLl0%2FoKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmlhQi8B%2BlsOWDK7wq3ANQLamKI7%2F%2B8ZGHF9aZIYi5Z240E6l%2FE5xdvNVSZf%2BbiFa9U8ne3ORQJsJxq7VYpfYuJ2oJ9OZrPk31Qs7KqwozWf9w2SVSkhAj2GJZAPbjsmgdhH2Ez7TCkNPftce7OrF7vrBzk1Uewv625z0pQjuxwokEsrIoliXrIsXm1F5ylHblTzt2LyOAsIvp7J4lBC3UbKW9VGusjpfk7Jp8Jd6aom7vJLEYCGZO0pb89Kskc5TWE%2By6A7XPDTI4PHaIaiMmgZSsb6QN%2BvE4uJqPRFIIqONLxJ5rir3zkV7DEB9MVpat8knx%2BgAN58fdZB%2BWQ79y1quonrPNULzq6mSVQ%2FuUyBEl9axRmbthXF%2BNlCfcaiEEEGXGqzF6wQnuAayFJWZH1cufWtQ1BMv%2F5ikv71V71URSO4g5YbjR3NPjfBxOSW3GQbY69Xh3ceRBLhLJ0NgMe%2BKto845K%2Blt%2BcmwEwnKn1bvCdJDBkXXHTmnM9yliaCFBUi%2Fe3QPKl8Pqtp5GFdeO16Gb3XeL16GW1iX%2F8zd9uAYQgeN2zfLC9tIMILV0bmotjlUJgUQOHb1SdsG13SEx3u3KiRdubrfOvtROyl19dMz6x5h45KETZ6lWZpSpCZdbYtT3CR9WIxbfjDh%2BoXDBjqkAehGTDfE8gEAO5kUvqLwI0zSsgtzIsKBYzyWqSxYo0AlRoTCYM01SRvn7wQFM9TZ1mseOdaOn58vf4xAOLudNAMlkI51DrPzQjcMK7dUcejjTe6l8iQJcii7rdYv2UVvRAEItirLI8DFiHfPnI72590EeJDa%2FZvLkQYp3i66n%2Fe00zgjcDUp0gVKPtPKUGkAMK2tUwmuCHnBDQeP2QzID8MND65b&X-Amz-Signature=b97aeae70e0811fc743cb40a2aa10554626051d39103ec44bf16b6e55214902e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
