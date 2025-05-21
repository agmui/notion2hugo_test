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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TNTO6WF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD0C37JT7nKcv6Pntr1i3E4k5DMYHM%2FOawobVmC1zQEgQIhAMTqYqDMeGCewqwNRbMlrysMrzIR3dNLIfDXLrzM9NPiKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2JMFx4YtovGfpaIAq3APNmaXiCUN2VVUlMVci8NtXs%2FHwiPYBEarrFwDzODmr6MeLTBgx007XfSK%2FbqKbnPFIsCQt7ggYkm0Txl4emRcgCtrninE%2Bad3LeAYjCw0IWz9cbvPopXx25urj3BJvlfehPxgV8bAYbbiNWNUABVJf%2FnkSUd0LDNBBmxGrF6duE6ojt3akXEfnU1lMFtgGlaXgvHNz5Zb9w70%2BnGToL0ugwKVRRAVXWDBiQJapUg5wMQoXChcjF9RIaSQn1QBemkbPb2YwDI7np%2F3%2FTo7CJGAq6mDEWbtR6vbQnjt12H%2FioBoQPxz2oJWsysEo8Dx6o3zDOwK1kta4nXNTMwL3tC3en2z7jWA0q66zjo6UOJdMLE1J1PxQMxDJE1rpujYQ8AJF0%2FnT0AIw%2FJqxmzRZrbKOouEN4zSmfsXmVwd9lq%2BpTnoGhKLOe9KxNBnao8oRpUgOI6KT9NZWTrC4xt4WlXb2kz82%2FWEvRikBK7ypaspANj0o%2FaioET2oL%2BYb08ob45qnJnstOYSnGkS2bMYagveI%2B6mDmkh09ZEdusgjTNu2EChv8yLcgH8GHsBJfj9dwPoP8RENYray1l7ZRo0755tsszQypgz46bCh%2Bc4DPh7ffRjwjtlKER3uJ%2By%2F7TC%2BtrbBBjqkAbJ2fM%2Bqo6285bxqKeI0WdlQgeC5W2320fhuG2090%2BqAeIYGsrDI9Iq2DOJgWiO0zJd7Cv3WX969vmtr3yz%2FbSd5tKZ3RO7Lbamz8tWKQVyKEhf%2BWyRha9p%2BgWRzh8KAJgpGN8JmPZslL6NCGtaWEc6nh8YbIpvOD3qFopQ7lW6u23QRwG2webwFYx0pBnlKK1hdoKobAcUpjy0VqqQF5HNwhaJv&X-Amz-Signature=4c9bb58d8a289162f60f9146288cc71696baa3f6d8aace0c1077090fec742de1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU2W4G3G%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDPgwiuc4LCKZ9nuuGpNiO0n4JrR8aisr45VwymKDOEvAiAlaFyGIlPYBGVnRYOVWydyZekFEdEhhvAHYldiTrA4bCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3MpfSSxzOC4DldPvKtwDPDpG%2FAcoF3I0ZY0CYHoSUjZSsJBcladdL1JjL5T4YDLVOrMsZ1Z21skdOyNVvQGVqfhtiQA8pqOIET8i9iZaIyjW8gDv99uJfrnhHfDpdARpXte6inJVple3wTti5Hqi6yAeZraN%2Bnf%2FCSHI558WVMf5SZjByjmlF90fG2Jjzbtcs2PhPOIA9I%2FvPtjVDtecjCsJy%2BkHfwUDmDuds%2FpVD1BkWE7UGrKSLsbQSe86BTiRbDKlUWMLNOsZIPE2jFuDbHHj3OS9Fdg137v2VJrzETUOapxN9hkIVNDEfobD2Vnmkrljuvl6X0TY1irNWShdKVrELi81tt1He6ZBdIvipzTFwYWZ0zLYhwKCwEwb%2BElvMDKeTi1csIZUH2pAk93oWiG3ZV2obiYm8nUf8hoQT5gmvJO4mnCcKmthXCrKcmbnh%2BmxCoj1lOb7yX9PmorV5y%2FgRuK7qlvsCmsutvIdM0j7ArqSlUqvMM1L3F2T5Wdc6DDjLj27y5rHQ76uSkBVoHpA1DqWgV0tzkadEx6WOPJxzxHsc2Yi3KJXPQHu6S75ua7EfSGhkvKFAyhradk3XIZTo3shwmadlVE0MfP5CSTniTVuBy5Ll4RLnJkMdiYh6Exl%2FYWMlCa7c2Ywyba2wQY6pgHSXm%2B12cZCVthJLjfvcv3yYEARm1ILhhJFhOA77kiEqxUmSk90d1NmWqDc0IboJFLRX9gpENmjYB%2FhOL2Jxf9zCbu%2FsKvVDvqvBkIHYA8WQseETzaWueTRAzlE1lO2R8XTDskALfFER963tV8lnzVtYiKsX0NKKn4Pf0brEKzoehx%2FA09U6taV1s2AM4Mfih9VHf6vhPt2UaDFLg%2FFaeahZnTFYRX4&X-Amz-Signature=3bb43aed9d1e1b081bd5868d5c99126c186c5a6c318d5a0fcc95ed67cb0b133e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
