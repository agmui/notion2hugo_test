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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQHMQZ4R%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIAaxosq3lKTgQkcSat2MZ3T7JRe1%2B9291OMZfDu4fjNhAiEA8ZiEj6jBvW1yaJA7PFPwHaKDjFNx%2BywaDV0R%2F7I4M1wq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBg3h3POUGQ162uMvircA0VXt%2FoM55HySprn%2FHPo%2BMQXsE06tylvqFOdBjN566Jsx7X%2F3ly7nS8PJBYy6ByCJKXp9nZ5klGIUIm3EpwZ4VyxGKu0fqTMqsDA8ozUYxMn%2BS%2B1kuH2JThaFIO1arZXaklU9b9%2F%2FmDEhGk2m%2F0y9DoNY%2FB1jqi1V4EIk27EJTf5bQNV57YOg%2BFZp0IvaCZWsVMP4o3WqTPIM%2F0%2BJdf%2BbaZ0fFESQz1pzixjQhvfGXTzb%2F4kOMKs%2B8hFHBVQhxKLiLT%2FR4s%2BDYPrFe%2FLCwsII6jtu9mN7F7ukO6mHxrY0X6FKjdZqonr6jrEIzRJ9fRVaNB0%2B6KAO64vroXhhCe%2FtnpNAkPbiUVj9JqnQP47GdHW1i8qUeMGuOS8K0KxfVuME7rfkD36UK0%2FGXyNiziMVfGUXBv26o5JOqPyyKzeoaoadl%2FsJBdUk1Jp4sl5h%2BQdCgZ6QiLky42h%2BI0ovUG3wce16QAzLGA4kMicBQZ3Dd4PU6%2BpvOjlMIoUt5iCepolF54TeeqVPiW5bQPoPJcm6n5JsDbfP3oOjxWiKdQnqBUQN9yMaNnK09fAlZICGVGqv65bFwX%2BRFgx8rxSNkNyfXZU%2B1X1AC%2FucYQdjdlIlHspdsFlauXCsn1wLwfqMJ%2FaiMQGOqUBKtB3CEdXU%2FlCLL%2FsJdO6qk9poNFgEcirD0gd0pwWxIYoBMSRITqO0GliSCiqYxE5ph2loIJWVqJbd4di28a0iQAkDJ3LgOQ5pQwL%2FTgNLF1r9rW9R23x9q9xBuKL9QfhjDFJ1OXzCTkKntQp40KI8MUOLxGp8KW0zc%2BGh%2BDXcFBsUzJU13GbfqlkDSJKCi3NgIrIkMbjuHixHdDk2nNmfUjfIc3g&X-Amz-Signature=3559b14a99974cebb144b2c7441ab20cca7326f8326f121c282cfe9b945ce673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIBDU4A%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDMDTbRKl%2BIoENOajqxUv8VzJqDOCpKa5IVlrR1MGZ6NQIgaH2DdDuWawuAKCSEzxK8VEzTBo0cOZ2xQXFXqfnls5cq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKHNMeVwtraY8k3YOyrcAzp4dydK54TDWUSt5gLUM2k1kgN35mCmabP9VDyEnKSawpT%2FbEn0CIQRtKfgf33tzvcxi4VJ6i%2FREHfZcp9883qZTdTG8NYbJDxVLhE1ZN09NvfLuFqmBqEiSRGb9KSW93XuyyYqCtcctBtmPtyeMXOmowobUIW8c52JRsHrakrxJ5Bdp0Yjo3tCc6cOO6lQLqGRH6FI%2BVmpFVS%2B9gLkNBXYk5er2aUkBEZZ0FOE1dYCZBr19eHI%2Byi04dMv%2BLkywHpqSHpPItsLaz5fBg%2F8SHY752tY07st3fIl77j2LXtnt1fHHP8F3V%2Bs9wsUN5wk7ceXNjahbe%2B7VHNIgSUB%2FxL0qK9074yN627z2TZ4e4qnLX%2Ff4IqVIUxCsl%2Fbf2gg2BbOkJoZdivuBtbkrzl9NYvrNEx1aoxTPmgZpwb9%2BxLwnlcUIdqWmM30zAc%2FasZnDkrnxqGCQjPCutCj2Y3w7rxUL6NPWEjg7DveebxiuOZYAZjCGnQycnicLLJ94%2BXFJpsamq3aitKSqGEi7zmqKxT5eNvkAi99YrR8OENggPThL5DS3gLxA0Ml9msgr6ZKRZYzoQEAclCly1UzqQA2jOIr%2Bx2MkD7XXIrgFw%2BK8JXuCuz2tqjIBO5w2kYzMMLZiMQGOqUBm65R7gU%2BEPhPyxiS6Vp%2BXCM4yXBKRoTsTh%2F3H%2FwTw8tNWOUcm9vOV%2BgVU1wEyN%2B4FmxTzoyqv6odXi6ZH580CSWKzUl2b%2BybMEjWMr%2Fpg76SlVBSd%2BJDJN0VLnq3Mh4cc7Yo1qSwhVJS2J5yH7CpV%2BmotfqPv0rwGVNh%2FNogvCUGffJVG0KzYZrj5QaFI9%2FtADlR2JWEsRGoN5gS0o73CZ%2B5uc%2FG&X-Amz-Signature=797dd06205304440693935da976c09553cd5e59fb704052d49348545be735011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
