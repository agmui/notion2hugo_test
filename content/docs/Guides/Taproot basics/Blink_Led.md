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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y562QW3M%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClnIfdhphw5NKJofpq75e%2BdEC2dvN78S9gvD2EMZ9qIgIgZb8YI89unSRzuRRUIVk2%2Frv2bUgbVyq%2F2jJQIr4V0vMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmhBJnaAJ0cnKGNVSrcA%2BKaIne1SPEeCp%2BQozxM9W35criJh1vDG6XQmytAI7gM%2FoQZWPxMOEjfKiit%2FucJ%2BcwyfRqSlBE5cJj91PZMUHjKiLUleHu%2BHdRFg%2FbYvGc4jzqxJjyZqOqDnjqe10yM68qdRxIsQ25hBfZurMjxhVRh2grvRDeprEICXj7sJYS%2BS6JAgscN%2BzGqkKN4IEJUsMTZY%2FSldz67v%2FElesdESQ%2BYPJHZbHq5T3EDC%2F8NGFXDPw9siBc%2F%2BWqvkKn4ve3X8%2BxaAQMLdnC8zfE%2BcbqI6MsLBPVM8zqN6juw2JvM4%2B3Ey%2BU3Ba1bR6Ww2B%2FZOk%2BgT0EBmUrIh0OMLLBQsklEAFe%2FwPpkAFvCzaqM%2BNyrLtCqA9IFVzU%2B73ltAHFRi6zaDX1Ifk7PdwDz6aPNP02pajK5MBMgCAnd4WsUFt2FAWbSYsDHLNvxqm0LFSc22ZJUFKXYGCHJif1bNYrGW%2FDzlekX9ex2E6uGc%2BUV8aoNC3X2w5eTBISbhFYFaITTrASGT1hv6wQC25ew76dALuIFd3f9TEcz%2FjWUoZArSX%2FZX19FVeGQGUcxg56cnq6IPCEtGCTn1CM5jA4b2FE4vEmcJaQedDAH9PoFFUusg5C5LT2WmKwZiTQFzU%2FAo9qrMJ7EkMMGOqUBkAoi0m%2FBlEg0BRnNbtaYcbfGIWdP4Vl%2FZ%2BfJboK%2F4Ap5c91a9Ojz87TOFGlRkYf14ZmG9DK774foyaSEro3Ab%2F%2BquhAiPlLCUd6Xu7pC3PesHFTfKL9YAtymQR%2FLGoIZKwnX7JW54bBfOo6P2YRWDjqTqr%2Ffi0R7183tsydD58PpdX7zwnOVYrpWbQQFxuW8pRfqQ1nfwp1LvjD1KxTK3qxGj0e2&X-Amz-Signature=d1941e7bbde78e76b047e9752e40628d84ccf3ac4e0c9bac684c857ba057b05b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S64LYFQR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENgxF86gpQ2%2BHX%2FW8G2hwBGB6qJR%2FNXR2vteCL%2F48PcAiEAseBYhW4TMJgDneWaccn2cx42GTGvvFObIfgp8X8eMW8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwuBlk%2FlkQabNCjmircA1yWICQf8F75mnRyAsbRsK3FBop5NkX5hbnmxrHaOzRUzAkZsxjqd67VhUXwezfNN5rm6kZONpmETYJ8aj1g4mMpg1lfCzN0c4jXNssiLvM3iztbasF%2FfM3BRgm2bmCas2eUjU2P9oXTGCddGZxy5CTFHvZgQF8c6z%2BKCIGkyUSavAGja87Nh5XSmZxMmg4RkzAlgo0xv61W3EKDrPXrlSngDJCFa85mBqWQgskXXGm9vWzrm8%2B8NWLFbVk46bjfqJ4R%2Ff51XR%2FF1vaXJwSZ6nao7phpyKkNjYbzpktNX%2FT5%2FGPjG02QJgmy1Gvi9rVgtInzbYyoDVodFJxLSe1O1s%2FJTYL%2FxGrM%2BMwaAoP3FGGMfGyqHoCq7t0WIDGgUGsvTOC8fY3wFuU2gIXFw2olJQkkOHMUALIJw%2BtlUODQoJtT71ylsqk8P2oq3YS25m9sVIbSgm%2BoI9M%2BInDLSq4%2FTczMamz71H5AlAJhShx0539sSaQdeVxfjk8s2Zc53nFr7SK57X05Kb64aXBqA6R%2BUXVHQEP%2B5qifH3fUkxYYOelG%2BMB8UseCdLcVXmw2VtqZ0lCPMOyZsLa4y1Lpe9Z4ABouMsPdEDR9A2VPfgkgQz9H7O77VFVoVV9C5HR6MNPEkMMGOqUBh1Gglq8RHPPQBbfwh6bGu65Lxbcmh2EfTPczOCv17WuoWxFOWZnIcegOraqw8wcWy4NYC6vafQMJxuu4o1Cr2pXzhETdT%2Bnyqa6cNXelYUzxwS%2BorU21kuBWdCZTsHbOKXvudvHudBeHWyf4b85toUxdRTZng0rsk4Ck%2BoWeBoRx1ARVxkhpIbwx73lzobU%2BCkou9wqa8a%2FO7AFhceiak8nM%2BP6q&X-Amz-Signature=7c8f18b01374971cc7143804e9d071d86feefc12e47859f729b7a27cdbe500cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
