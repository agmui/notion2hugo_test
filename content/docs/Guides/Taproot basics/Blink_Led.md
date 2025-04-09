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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCIMNT6N%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIDJCUWP7%2BInkn998M0gYMD9Oah5wvliBk2SkDnPo4uMmAiA0wfcDSACYPDZb25ehVUlkxPOpG9YbQmLQ73HNQFLZqiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmbk%2F5XYeD9NvWxFRKtwD27HJSTsjiKZ%2B7nRMABCXW61jbNQgeT98WLVPoUDPRCax58LuzfzU9Du1fS3MryMHcLAVM0UNLxuukVglNF1I09zaoZZJT9rHMe6JOwkkHRnXGLUDy6EQUwZiI3YJqtWNi45OiyThPyjkvFAVyou9IuT0f84UsDJRgjOXXn3YY6jGtLPvs1KiC9gQT5Iuuq0LBOATGu9p%2BUEqxy5LR%2F0UiH5%2FaEpfij1TUdBRCWM%2B%2BZA2BiThxuLOAJ0iktlNjSdTBHD5ou2dlm%2FhVwbSS%2F1GnQE8AVjNmDMslCbEjeMXd3sIgk9TgsXs11R1ynUePnNGxmz5Fd8GlpnbMsKhkQN3CnnviR5hWlsrhGKaHlH8fCtzRuo63EpMdD1JICsvWgdUkXzTXaTy8CyTk4gY0kr%2BGXX7BLSf%2FzXLVQmWsVTwmf215DSVpUycjPPmt%2BgZpjdPnrIX1tS9IhOrJlMQKVfiuN5HHcM%2Fb5BRqSuPbx6hr7Txodf1t5hWISoYPNaqSRejQz4%2Bd3pViUa5hXAtfLJ%2F%2BXtXKZdibBJ2B77%2BiZF8KhCgcZjsPzKkMfCYcwvg5rqXCezFFdxgbpFPXIvg2xsMmFbNSJ6krPh4QfKXNkoeOpRfzsWSo6WXYfsS9tAwzZXbvwY6pgESkdS9VSHB6BOYdszMrkGsgd4CRhtSCoO1RLDoIrxj8aBz%2Fj5aUop5AVtBaop7ZHLgo7ITByA01UQYnXji2kBCd%2Fa3lPaBPtvoiv22Y8fPMjiY2LrKm7RJa%2FyNWSOffdeICdUbK6AeZFv191DbYzlamFptRth7vJD0DfChx%2FwkF2PiAS2MRlYL1lTCAI6GtIiUujipDbSr0FtJbGRTd3Fyy8N1Mtob&X-Amz-Signature=dff97f105a4c3c83236b5ffb868f1e8e847805c08353520d3eb7e7c4c1ceee3b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A6LZE32%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIBSTNk3B%2FSCAMF1qQZH%2BmYQq%2FjMivs7bOfi3pAjsYRUQAiEAhs01oSbf8u9TfCICdCT5r4u%2FRvXQZYfvjM8cLiqi5RQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcpJ2E1%2BgoiDeREOyrcA%2BFhHtjYexcwQpEZ56uCqYNrstuswIIAQLiPk5k9IrhLJHIBOSA45myL9ly%2B4auUq6jbLSB8qDrts7cD9OCntjZpVO0tuGtHQpWm2ztx%2B9zA0d62gUjyrfJt9%2BsKasM5rDWwGH18SnGklY8L7%2FNmECCTpaOc9BNViadIAjH0WZDbWws7nF%2BxK1KEyc9kvhrOrCxmwT1JCag7jHIQyLHMUUm9dHojIjYuksPMLwwrPQ9ktR5R2eBqPfd4UqxKGziZ6qcT5RauqMl4Sq609UBpeCORc%2F47S8IUrbrHVYaPkz6Pdk79V7GSqaIoq3odaExgy9fZ2VmxjtFxPZRqAdkoa9Y3wKVOLPn6EUt%2BlAPx3qh4UxejSLExb93Sv%2B1t8ICbZrdqzbygM94mGED2U0uDaUhuCOs0J78ldNfRfu8DQzeknnWt9o%2BkvP7RPPVKDGl3RG81hR6nqLh7fqAHr5vJ79%2B90Ouu%2BxRcRzwfY7EC9aWRKiyUj0X26WCfyK%2FGgAgIcVpKhKL2pBZzSjLIwuQJ0xnzIJ6lr8Bkz6e7QMQancSxJIIeX%2FGmcF2TRbIZvNZ8Zwb%2Fw4AC1z5fHWuuYxVl4BAcNqNZuBZHTP7p7sm5e9OONXUm5XR8uZka6S%2BZMOmV278GOqUBsQFE3lTO%2BRqWQZP81GTRJ0VQo4rto4%2Fe3nClp30T7qRSPxtqoofDymSiUxSjNO%2BbQY4Ls492%2BHqRvSfpEwWP7ACsoxWwN%2F7%2B6ykkOTU7geN9%2BnOn1yE1aVc00VEYDUVLFrf6kDu1IZMGrqCiar%2FGfR3vUJrT1Mex5WNIXb%2BTa4Qk0LEi7Fb2VPRjoFo62eYu5shWYb4%2BNIDHDBvuccOKWkciyq%2FH&X-Amz-Signature=750056a9f96012ac3c3c6af38a7d9b7a501834db7d0893a3b369fe74841927cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
