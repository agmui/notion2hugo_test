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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMXDJH77%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCt3Ahdk7WcVTSiqm%2F9Jxv6sDo8h6EVruDlpYuc%2FqnxAIgfBqPxnM4%2F%2BjIAGGOD%2FckLxpd3Vug6EFSscZfarzf3RQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDJX7rfKVEXE9RF6mQCrcA%2F75nQGXsLhzuf%2B3n%2FHto7Jsb%2BunPa0zWUJUxRSNl7a4tILnawK33dkTWUN6TuRHFCgYiUM%2BCA7okeAfTOxVaM7CzUH5LiUaewH9SfU8J9V%2BmQbrXFnNCc13uPlG429UEzUw2zQLwopo%2FyoxRRTjUsl5y%2Bkqk7OzchcVTCvxrpSb88t3CFtTKeuYBgKDyw3Rl1Y3Db20cE7N3DqKkRlgLNHbHUb3v%2BEuHy4WMfH32AMxk%2F8CkQ881JU5vd4cjFeXsk5srSjEUMW%2Bn35Fi5fTC9UUdVHKm4OQOXWIm2Rgdd2uEC97Ldq3vquUoLo9KT%2Fqh8ysm1P5NTCTmjFPJoemZdk1JMut4EsnEc8lqzG5fWsl5kmyMtSvbKextsE3JEdfpzhXNhqO1F8kUcPAWBXCydBl4C9hqjks7P7dBCRdL0TUmAgu3CtGyW3GnwLz6zpx8ZdmdF%2B9rrE3zY%2F9JbjooN%2Bu43W9ftVEgx1t9%2FY1%2Bbg%2BxoBNOda9xBmGR8VIewBWPkG3zwp5Ru%2BCikkJJ5mez4dCXwjQhr2JY%2BZQS%2FmHaT06m8DfQSdfUs1v1tZ0BIVfdioXt0GHlbdxpAZG5zym%2FsEKNft%2BOjqON1J%2FKtT7p%2BxLhbrDQ0hh9RVPtcMVMJ7ntr0GOqUBuWNJIkA6F98xaBucK6TvqaNctLYAEfSeTtqahmCbbRF4ejBtWAf%2BUmn9lvWtX0xRpGPKlXSaBLF4RqCb4gAJOdq9jZxBUizIIyMy2por3wipCXjIV5BNPhpalCxxrqoeSxYgzubvB7%2BYE9OQwiCyu1CPdBguN760S10jqa%2BFhvbz1km6Z1XTUEJONFxvw%2BvsG9Dj9NjYE34TMVniNaxVRDS4oq0%2F&X-Amz-Signature=da3b3329dad1e67dfd58e29b6eeb85c83a38730af61a951088b645a83c486907&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGS7BKIJ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiS%2FSF4CInVwEWFRwnzE4Up3X7%2BHH1w%2BMZwlutoEChFgIhAPr5G1t%2FvNv3%2BIsDUuU68OkhIBldXpl%2FWiCaNb75dL2OKv8DCBIQABoMNjM3NDIzMTgzODA1IgwJ6lTaS9f0j06Qhucq3ANvK%2FIQ03epxuRhEAHAtd5wa4McQjg7uSp76HPTqHG5EG%2BNqypOxnBsvGMNgptNLviLqRZ8yCYFu2IoN7SJ3B2HxFdgk5rxRXWadUvUuVdYAEMbJzfn3FNFLph%2Foeq4tm%2Fz9V7O0Pbrrt157G6H2qf3MZrPWou5PZmbivn%2BrD3bKyswTEUq5STk3HnZJo60gRWoaArmjUhBTZRKQMnybIMGhlcTabK%2BFw6bfYalXgrai2L5KpReK%2FE6Qg%2BDoh2B5%2BYnUu5lzn9GBjU6lpYme%2B6jO%2F9cavaP64dvI4Ek0%2F2ze48IpWE1wMOsm7NSW7WqjAZCo6rlz65dUQie6FrN3dj3unGkXkZLCgsh9V%2BlYyVhEIST05di8xhkXLdicwJsjIgxjsaGzOQXl32YvCMfwtcb0p2D40M3AWaBajs6GJrZL8jKXqqIql29n%2FM3GxGDYMYLzLMb2y8nOtA0WyoCcd18D33opIMs7LUoIL4uXCDor6DWAZN724R8k9fAeA1e6FxwheV%2FLFUPQA%2FeUUbFXjAQVuVSiUTZA5Ru4K5ueDZpXGxUr%2Bq980VWhrqnLVOvSUYIEeThJklBeZOkjI%2F%2BDqs1WfZ8oCXMHHF85nUTutBOKrwmvL9A1uKlttVGjzCT5ra9BjqkAZ99mDNeyuYL7HgriRh83c2PWTCqjejMeG3o3cmOGUW6MoCkwKQQSDal82MhjrIlNemvmPUiuacS4CWpOYuZxtWOBTETXAGWGUgHsw9BLzkQxzEVmnPbqrjcoo%2FJUVoqBwXg3pKBLLhdUPkhYqCx1CmkYKiAONHZAQvvvgSL92xqir8FyKTr8TweCOLfYDcqmwV1jE2MxyXwuwrXo5flc73OF0J%2B&X-Amz-Signature=d4061c9953823e5e500902ead27f004bc2088bd6541fd2055e58da6766f4ac31&X-Amz-SignedHeaders=host&x-id=GetObject)

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
