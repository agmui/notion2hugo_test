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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO6VRLFB%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIGgZB2gWy5z0HMQNMT5L%2Ba6APgk9chl%2F23yQ3arDg%2BbSAiAPIW34SERmWEOALQX1C%2FNmJCukd5p8x2V2oiur1aW5Zir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMM%2FwnTH9tIU7eUmtlKtwDEoecszSTeIqtxdrcA7pUulHUuQw2myFwQWSkWEqazvtmPS8%2F%2FlpR4LALKKQgANRzl4poLjF7M30mIb8OziB6QvxyhBlrvdGwqelLAhdV3mxNjnyiPJLSA9O%2BDWqBwW2CSaX5vwFaH1GCEpoxeLRMja49201jD7AUCH35PJZme49W1yusAJENLHxpiiFutWbUK5dfdVKbVhy7CMiEGIgJpSFXWHuvMB0cix39x9tRIAKUMZ6hfc7SCKPnOk2KbjN%2F%2B5qo1ccychy2cnEy35IgDh4LbHeEmkrilMvWw5xx06r9JetyyD0SMMVDHk6BXG%2BYIELBk8gwzsWSQSRi%2FrXhIetnhQzCBOfYPXHW8VoWpliiaxcWHKcl%2Fj%2BRT1ARWTjDPRYRkO%2F3bm4dcIRBbmJRzQfEmiKJAm26ci5mxyAai1OVXMpKOXzOk8IMOhFXCb2kVJkxSmqXfKIHFUyruzVevs3iEwafYnoA7NxDYQ%2FEZPrPM56EKtT9zwUdHEzvSCq%2BhVIqzBjMr7AoaYJvuYuG8hiqEb3kfQ6uJhg4sg3IghT%2BkcWIr4E%2FqDlJLOgB3Izc%2BBTQWeq7zGpi%2BuJD%2FnZLzv484FXJxEg%2FOgB5XXQY2onvxskCRTGI3XmFmI8w%2B9TXwwY6pgGT9iZfWR9YJb4qLEjcndHbyk%2BWff4CbPlXKjecib89PahmwOBqaUVbXxGoGujDduZdZJOt08butXFTLG7cTcY64qUjVIrcyuJJqHXXm0e%2FQ0hkhATPnIFB6E2S2QzhMq0q%2F%2Ftu4JooPsgv24iuiXy1IqOonTttN9K%2BDBETGq%2BDQEDdxqxVKQPjQTrKOq4lGsx8Qeo9CB6XwyH0X3a5llgsfzey%2Bghv&X-Amz-Signature=e890a9405df29b86e4690a1316a47698a8f52273e94adf12e89039f21d6a5500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOOZHJE%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T071258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCbUn8f5hnKGPly%2BUlUq4TsQKhiw0Sj6zVGbliL9rgFjgIhALOOzT6vFzyg0T2FUVnlTGM8bRUdW%2FuqFZE2HSRNqaFBKv8DCD8QABoMNjM3NDIzMTgzODA1IgwDqUsXG7pX3d8Wifoq3APYCK1%2FE%2B6KMsZsluEtclW7gpJViRE1NDDOJl%2BdDr9spJcDBPd%2FqLRdNeT0tN3lgGYKdTkaOtqaMbZLKxDL6dXjf%2FzevWlLHFBkUYihh83ytLKLv2eq%2BvMdp74CycNTP6UIcuU9w0NoPVXIV%2FsAVc%2B3GoVYJwy7P8Yy6YnIDVmBvNDNrv%2BgGgKRVPt59Y8yamaqlSzLeknqBal2KWP%2FCQyLIw1M8pxj2f1RrPpCfFMEjHQBrvH%2F7uyaiflq54WYBLk6iHOcheiaL0yrQVbFauXXjzSpgh4u92HZS%2BTgQ8MH6bF9ySRQvLDG7f9U5tsAVsobK9PaGN4OJr8DqLRowUZnpLVu%2BGpd3ax0zlbBHBOQJujZgtgijW5Jode%2Fr7XrGaaUdtXvXv0Gu5%2FWu%2BfKRO9orljA5DxGEmhAlph%2FSvDDy92SvY3V7QFD5mPXe%2BgwFznR3jF4Mi5Rvvyfj%2FmAVjHmE19l8rIa853FDpTB0Tdvj9HC4EWqBkpY9c6E7mURQ7tuPVE%2B6hgb9OZUgrUe6yd4Ty8JapcGxcHD4Qsg31YIKSuurCHMPlCXNBFRP1vW8O%2BSO9HBP9V2KTqm%2FZtNH2Cc3sZLEmopl58l4Brhtn2zpjDzVNMMEyLz60z4uTCv1NfDBjqkAeee1uZ3Gbu5P2pDgaSEb9G4A8PJtYBcuu%2FW02draApGRggEc4mmCeX3BwE%2BWU%2BdI%2BI2erCqfqZk72l8L6FQUFeKnmo5mYWGX5vEvJhK%2BEOk%2BB8hJXwwsmu8%2FxqJQDH2yIIgGSU%2FpIK2T3OqNlwbiebNjlEDIM2I9F10dsr%2FNPhiDk8QhU%2BKmfFKLfOdYbj26u1TBXB7W5uvQvnCxvnsBSkJg3ba&X-Amz-Signature=a0ea6f1a813b4679a17b88adb5cdd53a3eca371ad0119cf58dd86afd07a50377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
