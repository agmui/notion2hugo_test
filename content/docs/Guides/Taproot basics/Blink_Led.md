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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZXIEFZP%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGpjpYfm7EkFnukEjMcW%2FEZoWFRSILuClC4ZbAL5AkxgIgS9xBzyGWZX15DzEvPgh46CASc4u9QiXl4XN6INegxJoqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtlcq0BCnkZo798tyrcA44DdaezLVf4JbnKqtm2ebW4YpEhh1LghJccNSm0Ib9aIW5PRb%2BF4mdYvAQHlZMa2N7DLHGaN8dKKTYZEUgX%2Bp82hW%2BRvQU22ICbx%2BsmI6X0CtrpSYGeJTQv9yO7NGXzhT2Mzd%2BzFXT63tctGe6bJmNIlypMcqmQuuHlKtu9RyoXzKPjOYivSj24DKAnoBPcVV4YlPZLcmG0lkMNTiAy0ghA3mfhzBou9cAnNGSL1oSuIIzaoaLJmBi077X1p29ckTkfBQ7E2%2Ffrk5ildhkISbk3MaGkjtKf4w7nYKkoIpaTMxREIsiZat0FZzOb1NUkwgiIktSpHFIeFtP06SlCaMwfyXGEwi44B5YaiHU%2BZtjYkR%2BXqI%2BBOuKR6weeZdzIS1Vd0Q8d9xHRfcmW1lwCDWHyDab0KldzPxtJHl8jFX5fA6d%2BJdGTJj%2FfdS%2FCIsMV6znrA%2Fwr35aMuXoM1bQ0FDLSah6oinpBy4BYwuwntofHLyZ%2BqNo6hhfy1HOFt2Z3vf1zYJK1v6nnqB8q52ygoqfTcVm5Dn3mAhy86OVqViVxKhSuHZvrgyhg4ngnQB4mGqM968qfhLip%2Fti3glhUFG8QTxfmEeipk9%2FuBbghTTZnEJBsW7W6%2Bhks1f4TMKjWxcMGOqUBkoZt2h8ct8ItJp5fJ%2BC3bfbWNlu1tibg7HkO%2B0oKENzt75Qii32Orn5dM2fH9C9kXycLladeUJj%2FLtQ78i4jVtF1mZQEiJ%2FSlemqx3zAVEjbwri14QJvWW97Inb%2BK5Z4tglw0ikaPySLFDBxRUNSOXArbspiV9XU66Zytu8P9GfAOyXB%2Biv8VAPfd7rvsPTE0tlh47kxjxgbCcT%2BAEjgaZU6K31z&X-Amz-Signature=2fcd2f99540ed6ed4ebcbd1ea00ef93d931c2d92a6bbb9a92bd601f7221503be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VETKWJT5%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAxAxK85mOzT29wZksHQEH3khdPz5lwzEIdnCTSPwQogIgeYOX%2F%2FLn0LXCCphep1zmZacZUOF7NhwxWm8B2SuavwUqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQD%2B0s%2BKh2PpdHOvircA0Z%2F60%2BCBRFmVdKRfEpqUqzdikL8XQMmZZWj7amZSvzMCHf5AEZsmtBJEoCIKAgvyOVdPThrNSOpd%2FLxksGcb9pe%2B6CRi6U2XVmku5X%2B%2BlwMpYIVY5rPu1%2FpYoTdzM6l20rnFadHZUKtDicQIUI86Ow24RKyviD%2FkRSECgazfM9Mt87zUiCoki73J8Wav0slDoPQxYpJUvo6RccGd02ZO6s2p%2BUfbCpkXxI4k%2B%2Bz%2FH0cOEtga5XErQ%2FpSFXw7LI11p7%2BtlXAF5dHsAWefYJViOLoiVbteZqIr7RZWs8NwEgvqt6Nq7XP2X9EQ2kYqymoVUxmJwggll0TUjwCkM63CUQ%2Fglx01kQV%2BZi7XSSPERgfyGHDon4S%2BmmFDqDPmcZqv99H6s9X4QAsmlIjinAbvg6LEZfcQpi8eGlu%2Fk3j7W3VPGUvogoSH1fZsCwudOGgpsKLIuiIlfBG6JrH5MYO2alB5PxCPwI8%2BvgXMFzQOXwpK5edJ%2BED40dbF%2FHyBFzphtcyIsghfRkedCOBRFdcyoXzstQmh9JL0r%2F4e0cQrsTb2iB0d5bKR7QXLO6w%2Fcz1cLvklQJdxzhT49duA6NjKbP2FZL45jeaJbIsR022MHpncC5T%2FWh37zuApzULMIXWxcMGOqUBPCGRV%2FbuDXo%2BdAcl3fghIXqFSXySR2qpv6SBePRezwY5Af1GiHC3lcWkzfI3HWAIDrkoygfpUdGMuYmM6fg3wtkhDQu%2B0Uqn0mHj4%2F7un%2BxDJJ8FRLhO%2FZNmEYLlR7wXeVKWHyTQXkxve21iTxaO0k%2Bw1qokifyVFoJEqm7Rv7sigSGybnrmIjFaNndRZWrARWfyrvdGI4kKFAetBKd8PzESD5nb&X-Amz-Signature=27fe441aaa40ba6b8196f86c5fad56450a3249ff9beb39b0f3b5ec90de383248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
