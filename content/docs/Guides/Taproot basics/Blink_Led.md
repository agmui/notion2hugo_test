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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VIIIRO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDEcbLbE%2B1MAyhQzTwK27k2%2Fft%2Fos4oJsocaYlOC7iZ7AiA2QmM5Mq3mt1rgDNM5jKAioLg1gTXd8HqWHBp2DO%2B5MSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAQyC%2FS0kJsBcV0wEKtwDyk7hq15xV1luQ3w4A7rZk9COv96sCjkrlCV62xGgCD%2F%2BfioLMdjbVwEK1M8fkJdwF9oNFNOmXy94s1frj74p7k91MgcFsW0Ya9AUH90dZSp8vwIU0G8snfyu1hzR%2BGlNyQPGGQvAOvd8adqCls2zA5UbHF2d7L70ID7x35Rz7z%2Faww9ieWELzHCGOpgWoiU70bVjPWlqeg8mXAZzFGPXS0pIulohmc147BQH4F%2BtF12zTRE5%2FeGxFZP3jNpyvVFRa%2FqIr5N690bO4hlYfITu4C4KF3OsZJAqXzTQddPVo9SMhqh1On8fxplXX3X9MP%2F%2B1yvT6%2FjuqypWxeQpExHlpA1IuQ%2FyDcl8SRft%2B1fMMmxXeLVdwMjhkYdA18CdQTiXkDO1P5SBdnT1c7PpHVFBXAifO4kY9xOHQhKnrAUhLc8yY%2FxYEASxS33hvrJsZuckcoav7NVFoluUoK1u2vG7THfC2zJ4y1z%2Bp7qaXahMQdBnMNjY%2B5fZX4yu%2FvtIhrDpW5QkioyO0dY0qnwDWUyUR4I1wsSklhOCruBEJbUFVL9Fy0DIcRDT1LzrEzF%2F6gV%2FSXwhEkZXlrpM15hBLUZWFehBq8JE3LMruxSpLWN9wOmF8G%2BSJgCMMdxut8Qw7rLZvwY6pgEKLesfKj4NHmYzYmk%2B5K0M8tdDQejHr4ZNd0oNMrhCqm7gy7VpgsvhpSLl06m6DnmVRD8HoIiLgRj1SwuIxRVMEWy1WVIXqyyqQvJBal4cCWdnYy7t5LwYrKNzgU0D7VkltoOrEM2S108jF%2F7lCZbtEorszKS%2BVzLTJCNbfbx2dNWZeDnEcRzmRwi87HmWujamjFaabdq4cHLPDblY3tI5EnS%2FVLMe&X-Amz-Signature=b72851a32ce54c16ecf37f62ab9cffd47494e0db82822bf3f1f9853021da800c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV34FN5R%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T121442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCGFFPwQ382nyNRdQohaOGZNsvL0tERiD%2BrzDuSU%2B1BNQIgR9ZvF4LNXfdjljwtjdQdCk4DhrHQnSMUVnMWMsIOmQQqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx2ZTWr%2FL5sX9jRDCrcA2mBTjEGK2Hx34oxvJk%2FD9mgczKUroeRQABZB0BzAv7TV6LiPAX5NJm0Md7OerjSb%2Fqi4LhYWnAZ5SI5zO3wd6JCGoKLpuBhjRDSAln98dHDsU07Sc0mbHuo1VewE%2BkP8%2Ft97lOESFlJMIb9KjGNrVmlsFxW55uRWQ8lkMkPtuzMMfA2H77%2F%2FpElWJcx8Cuk6jZ8SyEjF754tXfunjBY%2B%2BaH9ogqcdaxW9nyVmFAtPPG74wN3RJ8otORHXe440B1LFM92lKxY%2BYZWIyvoVIAXGGsj%2BSs8m8KhcTdLKiWZkd1JC8XV5lLuFznK31Ki6o4rc4wTNJJVOhyqj8ilhiAuVRnlyNPOrt3qeSOg82cbngsFzGoo%2Brpu0mh0bPGDsgHiuxaWdzCoUOFQxXf3TWHu8Fq7zswd9Xny%2BlzPhHC3pAwRhL8dQMT4pD9%2F%2B8dfC%2FUx6zXwjAVDFXeP80PYIJh%2FPJisBHjvccP5XHVpSwgEO2xB4pRHyz2b3SY%2FUanhjAS6Z%2BqH0zXqsOI5n59QT9o0ZmZJNxoS%2FHJcw8BwpHwqDMeHmk5ElkF%2Bd%2FjNylsOcsBuUXqKS9NxNg0jub%2BlrFeHLaAZ9TDy8fQAFkOWS3CQCW%2B1KsQS3RmBgxK773XMO%2By2b8GOqUBH2iMDgETe8uPz%2FmS40BgU3pkW9zBzJg8SatClIoQBe3dmbFyPiZ3G4QGCnd22wHvLS0Q2l%2BqhnIwKJidV2VQON%2Fr4ifz%2B%2FgYYmfmprh4DZq0qK7BAYGxoLamFYo5kdZ%2BoguHrGAGHf6EbLrLVlQD6zC4oafBZZRd2kaOTaIcAHBk9deDzG5LEfO12BiZ6MMk0Io3g%2B2k9NI2b4TJ2HouTL9PvmgX&X-Amz-Signature=097cbd3997651cbc117c097c6f5ddab2ccf61873ac412754f13008553cf39607&X-Amz-SignedHeaders=host&x-id=GetObject)

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
