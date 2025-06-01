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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWER2G43%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDpW4QWVu74i4vzAoDsoeHQhWJYqSgdL4MaWsccwdYbbAIhAIM7A5nQkXE1DbEoZRPZ2TS7PhwIJIo4cWxz%2BzWn1zbsKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYoTIb7y3usXjS%2Bfsq3AMx5eC4AW6hwUKjfwoYodQpXUP4KZC9jNicwjQ%2FYSj%2B2mul6ZxVJTfP08iZt0qJyoMQq5OYQcr%2B77s3oi6E0GWDXOzz0YByzXs1XlU8gRTyBU8mUCzZXyt2N5smgtTi5zYdRPttz8yaFUiV0snWL%2Bew13zv2mvvrgmZv2bdcyZw388y3LmHJw4nCDOJgcnDQZDw9nTf5TW3I7GvWrwmvX68V2oG9o8aLVvlG%2FPsVVUh2qZxr%2Fnmpu2KC8QEcyIJ4AbtssuxtunlkQyNC9gzLf%2Fh7WFuln0tN%2BeRRl97xs66gEvCponNJVIwtKAspZ6EgaKoGuD4Y5Y3od8xzu9SMBPE8yEZe9Yd9k%2FMa5DRI4ZWIO5Z73sQCsskpgM3WQqjXqn0Q8oEL9wl5IdrSAdtiWy4G8q3hcXH8nDUZsunKtoWVoMx0R9Kae%2FZsCmfTiXTn45yjbONMcgPSCH9yY6cN7IcsMuC693Jb8ROqYEohfXHQAmYMwoGy%2BVJaVRAz2CI6Ez9KVn19JJ2EffbRdn1kYo%2FZSoRj6HJoyG0hn15m7qH3OrvXcMXxMKcIj8elL3BSoP85ntiiscFAGp76ZFEeOcBBtlsqExrCK7BgRSfy7U0vi%2FL2%2FQixx5uLeZlDDCFgfPBBjqkAR%2FDhHXpurjRkHp%2Bt6H4uZ0hloGRDHSnEP8wqaten7yvKV%2F9FL9k8PgyF7SFGONc78WRSxvQ5atSkvUBs5uxvz2Ta3Bbk0WX0AAhg8qI%2BsHkQWJDbrPcol%2BX%2FUZFxmWCabh7VpTnzblj%2FfCp087tckuxUPNC05BEq2ZAE%2BwGO%2BTvLt95MuuhXnQNgtJ5I2JUDEK8KrDyR6jz99hLpSomeU5H%2B01T&X-Amz-Signature=3e7ac39c53010c8111dc58e2c682d1ef0d60d428ef3903b4f1349ad248f237a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ZOIGYN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T220746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDRwF%2B91RDkV6TmJXPURhXj4PmaZCBM2%2Fsc0f64kODSXAIgUHL3ibNpk9iqLz%2FuLoUtLvU1tVYhXvEN9cxk41uDzCMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDV0KcxMOAMUXrlvhCrcA3Tdyw38oUlESUfIDjwHkkjkEs%2FBjtxMuXy%2BA%2FWGEn5lnqN57UG6qjESMZPBLhDcZ0swEN%2BQFyVlvs7XQsAFdSgDbxTGg%2BQJG0rCroxDhdeAlqcvCMpCoScRj0i8bueL%2BY%2F6DmGJnjOhANKnqA5MzWowhPfJNsxmkmp%2FUvnKl3liAzzWssAxzNolof5pobvHYXErVc%2FW9GzdRTrncBJCH%2B3tlGoSKn8UZINFk4sfqL%2FgtNShga5cl399kjavW9pIGtKeHkJUVQnxMuPxDGzPezZfI0cEOs%2By2uBEMtSU9gCHA6lvHXYysPOUVxsp0ZQGXOo9wXqpproZCtPKigGB5PRYHr8zFr2Va26PJsuk%2FzrCkCpCcjsY42LwKOm%2FWQuN%2B%2FCPoe1vPnucT42sr%2Bbs3vRYldOLXXvDDHzmzNpL9qyv3YmSiYSaRHzwjLdi7qD5lt5z2BT%2Fw0KHrHcX6s%2FjpS6cCqGVrBll3hbrtglw%2F3kGFInQQLS%2BtEanOxOvInZgPBtBA4Q%2FELfEU9hzL3GIEd%2F30SbAtpPySt%2FCSATbwnF1A9tKqgXIUQqRs4%2FxMoNMxM2GUUgNBcLeg7VmDKixT0UQfyWeU5ju19ZxyX46%2F5TGZq3H%2BT0mQ4pwc0%2FyMJKA88EGOqUBZCiFwt%2FN5%2B8sI3tVmHZ0fA0qnV8rlFFcqjGJVHlkQprP%2F56TLw9SSPHfDezyfauX9sMJWJrc53lugy6pXor98bUTAX4A3ZFcAhwWQHkNRIdq2t%2BzMJJ%2Bm9z4Cq1Tl9ASoqeJ23CwWFTjK7wNhxnz8ESgIHrDL%2BQQQ0taYtQIub3fug%2BeI6TrY7NRLv54PjkOFdrhFPxDbJ5fZSMXV7CxfhKY55hC&X-Amz-Signature=1a17f4dc4e3ab9fcda9299de683940a8469ecf322206ef07c962c3caa293c3c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
