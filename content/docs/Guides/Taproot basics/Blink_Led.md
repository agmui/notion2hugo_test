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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNERVLP%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIC%2BLhfKw4m7AbOn1hwoRtI9OJfmhg3j3byhm35AMgLHdAiEAlCKGxXfTi2CCiHfNN31eqj2ktMz08vbhmzeG5Zi41Tgq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDF7huEAmG5ibS1d%2F0CrcA0TWNpq%2Fg3qQpvJw025carWq9VzIsG6MnxZeUuf70Tk0zF5NtmYbkD%2BfUIARRvh28YcemtKFnBNgPgMvnlmTreAWrly8orNg1zyC8%2F80AMzd3Hu1q0SLNmY0868D8G2NLLz2U2Nah1%2Fbh9kJaXGvgSd6Gi5Dip1MNAR2qNHRJPlxIEdIn1F9enL6uCWguoCBFtPPAyHUGTIKxjv3wUiX0BdH5r1%2FwJ5mHPXupVmD1R%2BllzVu5HtmtY0zpTL684t6yzyA8D9ysuAOH1XJnyGfPo%2FkIoowWVkqP5R8WNbtCunUlu4ef1I1%2BH%2FMZst%2BKg9oUIuiBdAPRS4%2FQJM%2FuEzXEpiB8Z7hMA%2BnsWRbRNvt3VEp94LTHFN%2FK3xFAS9rD9SrtwA9lgfOql4di7qzdbI%2B2UWCenNg8ogtyfWxk4jU%2FKpA%2BiUlg3VVbcNyISXnA2GLg8ahbF7j%2B79QB5Hmyj5qmqzpE%2FgmdjDLFuYEZzvL7XYKariZyK6nh6CCPMOiFcl6200VjS8xs6ZvA4TwoTl%2FsE5rxIX4FUwwHD2fV7GYJy6pErFQaD3lnkWFKOvfJsKl%2FIcLjmuHEqu%2ByC6UZ2q0fvheucYtbNioc7nznkQq3qsajgNWYmS8yhOkVueTMNehitAGOqUBDaeRZbbPVl0HvwbVJIrcNJMNG6flv1UPOFMJrtYUAeE0eD%2BtFr45Lef%2F20ubvbrmoZXVjc1D%2Bw44FIzhWWPaTgi0ahs7D0LCUw5PvylYp5iOAYGyzIhrz72kebv1lXaOTcDsyvftpwBdJdPLoOiaCaXnhKlA12Wu%2BeKNJGAA1IIcyOBUzr5n2DyCPfCSbtf1cn09ySrKuwLGuQGJa3BH1xXhtBsC&X-Amz-Signature=8c414f47f390d3afcd63e4243dcce9c4e6386d53d37b98b72f34b3556cc8d693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662G7ICTW%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIBNhNFjvX38dtDDEEzOv3caFIJKENdH94yewuzOh2BmqAiA66IQOVQIzdYAVusSQfKu1HDW9SB87pCNsJfH8I2GtUyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMYoiFLMrDPM1KbE5TKtwDiX%2F%2FZ9jJvpfeZNpiYdIIFDpGBjYJj8e7Rxy0z9%2BgEbQqAJ3oiW8YnL%2BncBbZqrzeucykoSm4fhywoBvZq9Yc9SCAlxwrmVGoayOgffczYYl2Ir92gcaVTEqLck0E3TH0vGhEad6%2FsrIvwz4r%2F8ZWZdhyutofVklcPitQvrfhsoIjeyKKJExx%2BvLJPIeHxRI1tSnP8onjJOD0VLoj0evvLMKcdTTkjWLg5SsKh0clABQi1rCra0xHHLqa%2FsZEF9tiu4Ih9txdqu6p0hXEJdWjNNLNu5wLN36PwXMdhtxhDVzHUOj%2BSBTxmuQSPyufxHyXFTKN3hPlp26HOQQfjoP54ky8E63r1Gu0J2KVsZfBqLZCUc2C7tdIas%2FFatYkz6v7%2BKOPf8KhTDv60dZKHtYW24h4hAKTFqsN8YGNh16AdJKWJ073b8qb%2BSJMwld2PF3YFbjxxQowquLk4iWPGlcjMzE12nAUDuYJaFu5RCYmbu6wMyXHLQ2KcNzW7xyVXpf%2BkhOtHKxuq1lEhWuQayW7R3DqZBiJLMEShX8OeVd4sKVONWUKHhHzgf7y%2B2Klfjk6ruXSUsws2%2BMjvmqtSI3J55Lxscj97vDGeLnNU61oTrkb%2FIrWQrjDcRv6UAcwwp%2BK0AY6pgGaa6fPdCn8AIxl4FQNjdBycgja1UgDnWULLJQ73y8VCAuiPESYtf6VrIZKRixdMuszY079ncUq%2FDYyhhNnKZ0oxK8EkDflrTluWYSmjeyJj1o4b3%2B3GuwcdFYbhOF9vY01TB69oDKx31wsdtrsPWGg6XmBFH4Mw5dhpn1s%2BphIKpB9Uga9w5kqMNq0%2BUpMWlZMNsD6SzgpCiyV%2BJtaNVwoEPwAy3H%2F&X-Amz-Signature=8aa512e8b069e8e9666377a1081bbab0e64a81b9157684725348fffec76887b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
