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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GR4Q32B%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgueniNTSOEDWgI9iQM4Xrjod8rLYrp%2BnMvXXNdzA5mAiEA0WSQFcJZpnaez%2BN1pCaURhmjmAMeHTqzmK4J2JuDZGoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRNu680gqSaNfwEfircA4xQvzO3sosLdjASLLstdyT836GG0fC9Eb04tR5zWS5wq8EY38u9GNmD0aL7946aiDoUMiK3o%2B5Ff%2FpkC%2Bnq2FrYkjgSTS8D01rYnzNlHcjaUawBuWxFtpma%2Bzw0%2FAtQUfmmgN%2FgqhJxeG5qM4xqx6Nu9Alf65rJGCrjmZeS4eyMK7SFtvL59rlahFa1OcdH0A5%2B9BZAlZ5Ew4FRuozyBs0p%2Fp9Fv9zpD2tygYrfBXXdownKNMMoF5MJV4onjGgmPvJRZ8DnpfNivraOo1odTCYxuvWY%2BBrifAu%2FYQMedbYWJv82rKkwwCBgCEMFYZaapr8g8%2FtRpSOETMr9gWw%2BEXnPIwAAs4iZgRVakvIMIcg6zexSs8dR%2FLK2kKBGIzdBQ0c81nZjfLz1KbBk9pVy3%2BNZuYKJhUT8q4HP%2FHNjJMQeT2GptFumwMlN9wMipgKoiHMiJZZoHDBRMixAHoKzQrwJbQkDg002AZ%2F1K12RJ48Nqlmq1L6mhuxVlo6OiGDetH3IQwitQBv3IsO8bEddB%2FlB4IA1aFRpnoX5Eauvtv%2FdUtmFyq%2BSJYCnqZbwJVkEFRZsdqmXyj%2BRpsnI3RknCdnMITJ7yhrXeFIZuCn1AXvJLB4W%2BMr1vQ9zHP6rMPzZpsQGOqUBwH2P8NpgEWxayKJQCgG2MrbP6DiLEfDkIHUZec7HDlcNPZxb0UpI63jUFxMawXuVXvbk%2BVtEsxZ52lxJM91EzdXp0bPwmepgh6e34WDD%2BZYbb%2BkpTobTSyzT7y22ia8K84dwselqwWaZYB1jJOpLVMbrB8xoHtBxoPZpEwY1h0QXEJ4re1KUL%2BgCLUDVIiOvGTksa%2F%2FOntp6bG78wM48aw7uB4WB&X-Amz-Signature=edc08b38587aedb00f59f1fb4aec689030b1717a98224a308c5eec3e0cbeb2d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G5B7VKZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHt15dVzq3gPW7zSNaMzQ7qpyB0R7bgxvG3cnCHJ4ebAiBEhELYjOXksSc1H18K2uTOVPU1A1QgtYdLim4T5smXfyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd6hNtvv8yowGA0mUKtwD5pl%2BBY9%2FwM0HK8A7u0ybzgtPei99BgMJO0akRAv0HUiDmRVFJu73QAtA%2BmhIHWmuhlETaB82gJieUVUWBOkp97GFvFIWaQvaH2Tj87n%2Bu0Htr2hRN1nrWZrPucnxrK5exk9o0lX15bkEpuiJiSbQDhjXe2AwyMV9faJosNl5T3K86RbQT0jinkTa1gFLqILZDgHsESOmjIp9%2FuxLSE%2Fv8oMaF6fe4PxI9zjuJJRrvW4Nl2HOy1h3E3FX9naqv%2BMkBfnHq8Z6nA31W0DHEJfO4mW54ZyFjHKDjXubwsa1B%2FUDcnoH%2FZwJdShQ3YbljNoLn9qkr8UIk50NHQeaNuIB4Cp8wSs7QAeYxtvVPhAbQAJCu3KMHPEpSTlPcAQHotkECPd15LrmUpZHtBAxqcTmfG1MXO56Kkk8LXAy%2BdF75VXCYw%2BcPwOu6VxsNE2VZR%2FyG14%2BtlEI7PGj8K%2BsEY1tNRjuZfd57VTlsgqVd9FOnHBceS3o9rst%2F7TReUspOsyRGAUhbxLlkybwCNrElcFcIc7It9q4JFUbxADOTG%2Ftq41HZMDsu7ZnmN%2BMhJw2A7QszNqTrxxhDecN2zkaIe0FXg1EohJgFb7QMiKQfwDbAUWhgFIvU6hK%2FXWk3nQwn9qmxAY6pgFYJxLNQFRsOs%2B87VA%2BehXlyGEVXW9xHBZzfdtSxzPP68ReG1Gjfab2pUZXVaca4L%2BYyr97MMmAPgwvNafjlRMNwyoLnPCyJixmyMmbgHRBeGNi36RC85COI9Xue6EAhELd4qzfWQ1rO%2B4bGS4ZN2B29%2BsDRA9UL0S5nOyYQoBPycc8Sg0YLNQATCsSFAidkqmPwLMcdL3YacG50mG%2FsKILiWpntH9y&X-Amz-Signature=0af610c7a38c18868840990a2f29d8d8bbb6574090456e2e360e75f4ae1ad704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
