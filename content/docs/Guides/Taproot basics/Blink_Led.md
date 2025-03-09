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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4SEMAP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIESR3LLt6zi%2BHqYi%2FgNT%2BNCMhnULgfgSUGTeikkbQWUyAiEAkYN%2FRr0EinbsujMTCkA5K1rKVVWw94m5caRxSXLuy6gq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLurEYMMq%2BYpEuj4%2FSrcA6P9vNBNbvIk%2BvwVpBRzTt7FVkL61bpuIa%2B21kSOydd%2F6HZiim8dBlzk1cwvV2kOUYCygmO0fWHj10417x0hIOXkqvPahmx6rre9PDqGrjSyQFW0Efr1yXNpgUQiIJeKeTXuRI7LhZvQxR3Yy%2FCv5WiLvmZX3QZkx86qsAYZIcz%2FwKrlJJDSpeDdm7nAuzij9SwG4qDRkcEuElZe9pPWrgdSI7RxLHlw%2FH%2BI%2BOQHnCJSMYfVsslPplcdtRjifju6WpvxvU09BGAkW6%2Fs2d1e3mCtJxvEZemqGNihZMVdohrp9Y6jEhIk1gzRkdTHxynmMDCyDY9p8BlvCfheFjgOCWpsnHdGe2iF%2F1P0F9TAnfRa3hXxVDC5vsCOZw7FInFLiKtBx6R8%2FXB%2FFVoCB8IO1j40xMyPuMzui1X2kQDdv5gcgQEDkIeX7PAV0QAv3ltLV9cOlF9AIuZGzSQE6oJEapZyB4T6cfeImF3BIAr30f4lhsCGY01wSPlSFpQNjuzGZyMQMCoyBAb6H1DGVA2rgiTjmU1iwCMnV3bLqiTrd9I5FyzAMjC1mKbt3Xvmr1t6o8x1F9VSHQzF2MLNUA8e9cuXk%2BLGjy6CJbtePnrGgGoY7EMqICXuiR7ICLZXMJPrtL4GOqUBE55a9hUSfzhJg7I7fQ%2Bh940dnqxLBh4WnfLtDvJzR9VC%2FR7Z8P6tPCZze8DEfK%2BtBPImE1N0I79%2BOHGAdLaUHvEDjcAC0gtR2Nr7HMC1v7Qv2jAjuTJOpwfao6SyzeQtf0mGB5zWWhoujaJEbn4VfF9qw4ocCO3aRkMATzMzbRwyhQT%2FOqLJv%2BNI66ZrHUsd5BZ0DsMP%2BWaRfhSb9lx4G5Zcl8Tu&X-Amz-Signature=2b1998fdde79034e531c286c65627e32f32a684b0d12a18adeb9dc52c8656247&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VL5DW7S%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T090116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQD9j9GJoFpRO1dU%2BAXdW91HqA1ocJ%2Fb3%2BRlnNUnK9%2FPWwIhAMmQElU3tf6Os9XWqBiant1zg6pf4MVUjyUjXwHbxJ5wKv8DCHAQABoMNjM3NDIzMTgzODA1Igx%2FeWDeD5VbKSHRhf0q3AN7cSchXdlHzCLdevjMYKHcdpNtjHrTQsCU1RagaVlTwJ13XbldyDDeEsXyoPnjOsUfUrVwwuPvlgxzdgVP0Xg9hIlknf1RxKdiBKTYA2sUpaSMfnVCz85TXj4ofDbIR%2FWnnMuiFrEMnETr20LRWiX1Sys3EveHf89G6alcrBJsRpTG0rSlLjGmiHceLf%2B9vYBQ4GfUvV%2B4F4cEPSYQcQCk89LZw0%2BOtdbMTgdcY%2B%2FZgk1gDOK29vAuaNGX25xsawDfR0AThhARRed8Qxu23Xtha9omV4LNrWqVppvZ2ThYRDVBLt9kSaOIEwWzcv7UMwN%2BmUU6qXWkDG2R10wORJ88x3koCkLMQUE2IW%2FNkkh2EpwvRc1chbXqzS9tVlKd%2FPxwLKxaA70seeIDObNnCEuByvF7iZFH53F19zixzOZ9s9lEw%2B2jahdCdb55qkJrhTmXgK9UAYWB4cK5f9DyjkOLoq0IhLXVXfG6TWyn00SsRCahl3Is%2F2u%2Fqy3TS3oZsSWmod9ta6xknczeAU4hUxKEBRqFVPhIGjF3fw%2FQfsDq5QK%2FjIgVT4dwwMoEakGv6JzeQDrZxtMWpN42Z03%2B1gSsW0ablOmEZ9fIFs1kZ1UKDO6TwgBRC%2BTbHTtg4TCO67S%2BBjqkAaGdSn%2B0Z1S7qqjZW6UzAP49I8zAHvJ%2BduXat8rksSGHJc9X6KDi7TaaiC2%2BtCaf3EdLxrgqfjxjgBt%2Brbt3Ouz8Jx3Tv7z39W%2FrKh87%2Bo7%2FvjHZSYBEyqxaWt8xOi9VLzCqco2T8VO1YhHF%2F625Fm7Lc0FiDzOZiDqDvZUFazisDRKNbmv3D23BPwQ6gQrh6keOYL9eptFFlmVH5lPhgYt%2FnAG4&X-Amz-Signature=4e541a0218ab7107b673ce9eac80e84760f3bc892908e8e5a0d5b3b5e840e31f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
