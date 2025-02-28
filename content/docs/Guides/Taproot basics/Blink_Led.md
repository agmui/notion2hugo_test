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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPEX5U2R%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDbrOfkjVIi%2FhMPaPCqlU3X08jtL%2FFdiRt8oiPi8al5lAIgfoNNoMDrQbjI3EyNazJ8ymLtwiewDL%2BuHWaPfSvfhdsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0uUHYOx1LR0npnLSrcA%2FToNKFjsE%2FNSx8WOkg7GU%2F%2FbVYh5w36I%2B6a3BbQA8r3sBIeQE8jz8hrtX9ideMDep6%2BaI5NueelMipAZb11mn6bb%2BmkCtAwX1GvjL5ZJSgHCEa32EiwujgWjswM8TGc%2F8e4dXAc49NldSa7MCXuN2jIB9E2TTcSNgdzFK57FDp84MNAOFbUXjbpUOMobmmfp8rurj3v5Ug7aF9lZqElgv9%2FbGEf4HsyVhqCMzfwfylnVtIxje%2Bi3I8tZ3ZJeR3EpneqtPgNkCICPMc5WJEUHNmjWPC%2BFgTwN%2FllaEjYs8Bxi9NyDS%2FyXoqiXxXP3GictH9pDZM6AhlS017DlcSi97YBtHGE6ris4KE9mROZGxdmNbnmVOzToxuZO3fKN62ronsQk0ZlGtZDEE618GSH76vFGW60nbBFDYUtcc1G%2FV6LD5H5dtDY0D%2BOtY6mp1Q4V8ElW6lIFft88xA4XJiQObcqOnfFs0VATITKBID8GFU3Bz5x27dlMBor%2BWs9EYz5h2fHttFcIalcVtcw8ho33GSOcMNAFw4Jmg2iqepIEZSm5szXEN6FaukNRx6Qp5wXE9VobrsY%2FUXYc5DH3k3uuN1iasbT6mBhv0h4JV7lwq7sB2ROAnREELUxoibKMPqvhb4GOqUBWwUpVlQxA%2BKv8AhHglShqbbyOZvNUc7HHnfIX23vu3wVlUfx%2BEcpD7c6vsYZaZvNvnZH%2FIU%2Born7Ovz6yXb88SBaF0N3ewB7xN6N88j%2BgIGJVOeS7sqD6zrijXRi9ncZPMuJyi1sIwCu0wSkG9%2Fs382CH71wLnCTXs5%2FzWNlehLWzguGgL5TM4HzjC45Vs7oHPD%2B7lprFonWOLq1v0pKDdJD2u56&X-Amz-Signature=7731716979cd858d0468909c9da9a728af6a951f1bbc81e7b4f864396ac07d93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN7HIDKE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHhEIMOfLccY%2BCyoO%2FtN5yn8A3Ynhd5oVdWvO7DHWWOMAiEAh36bsJlQ0A3diVGG8MnTqeBVKakKE0vI3%2BAUVEbRXNAqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfIY6utKeyDRvwERyrcA7fPeOVck8yV%2B%2F95fCneDZo4slTLznXnHBSMORx9FIkurAn3c%2F5OuDgWAWzE4SZsCYbk58Od07JOg5IpJyQE2nLpdRlwmEnx1DPpFA7K9MxLlou2NhRT968BVtTJDZk1CtzAmAH6wRM8Hwdc3jY5MaICqFfDrzjZ0%2FEqUWAeOf6ReOO83A4%2F1IoE5RiF6ykDF0AWKBTOC%2FLCpDk%2FTXjdZIiWbbkUXIvvLti3H7Dsu3u5NrBRM3eHgZrkTeBjS2tZjQsHvidBWZ5gR3XLZBUJFwjRH2aVr1n2i3dTNiE5TXEe6GotF0aG3JGhsiZg6m14Kjz46lWzhhksnIOk4XWP%2Fgjc0%2BPdna46b779i6K18fnj%2FatFsopytqsrzlG8jUEgeSDjhzoF9DnwVf2OMO3vEocPH491%2Fs%2B8jVpcanFY%2ByE9XEdhfoez0LjyBpenSSnkqwGt0WuybY%2FX2dOgwEO9o0nuW%2Fh0TumWeL5XxGtdc3lrNJ3qXDaA2YiINLcKmNMP5%2FOjwVLr71%2FcTqGhqOej0Z7j6la9oSC3O3az7UToUYLYj3jKxSm4SB64RB1WX%2FDAqGf6prOTkmsiWUecYQSYglQQBcyw240rCetSTpJTfZQx7kVPXWm7encURHXbMJ6whb4GOqUBJBiKgBKOF4Q1jtGn8qC%2Bjlds5mDqiqLisqoDtIxk0HsHYFGQnIHbAEzXOR9axNqxqKJYaAmmrqIBV%2F5mE1o1XYzbjGCG7HOc2gBxA%2FSau0uKPoFSRRfyYSXO71wKUFUWKqGfFAIpU2pHdNKkD8dDUvUYl8G1v0OwgKLw4dBUoWyoIL%2BKvsZ3P4FX3JMJjf3prN2Q%2Biy2S%2Bv404U2IucU9TxeDRiY&X-Amz-Signature=dced26e2fccc0068e80be2ba51d561cce5d3eecaa7e412ac7ba184cd89e40346&X-Amz-SignedHeaders=host&x-id=GetObject)

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
