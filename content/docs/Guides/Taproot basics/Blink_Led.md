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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU6MZTIN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDmgYfpOwljzJpFO3Hp9MRvT2pZzLFId4ZJv5gVwW5f6AiBqq%2FkNu33oBu0kORX7xYXJ6pGdt6KNwoK2r3Fv9l2uQir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM%2B530GGYXT6rC6CpbKtwDQNts33U9NX%2BkB6b5h0JDIS1%2FTPnQn47YcRvOe9zEaPtJwV1GesCRVFEiMjEu77MfhjQZLbLAz1VPTwcvUQB%2FtU5AUIcev%2FqShymHkW6Va3BJmzjU%2BpU8loLNPAa%2Bze%2BnmIzqvQp%2FbxvvcjJSDZNvHW5soKMs8PPMYOysJpGWQDZjy6PKWQYIGMZYoB7Rl1TeWT%2FPPpD1RCPXyvKu9N8sCUcdnE0LivVI2r8zi5w4vncBdtTud0zNFrm0RbqaQr86dlNWzncQxmxhKG8mOUET%2BqaSdECGrkkZORZsBuC5hhPnM5U6T1TVq0w%2FEctdBvLTKU7JtrOZGDmma5%2Be%2BYsczN7WeU%2B6ITePZxtWgkCjDT1LVT3Bx2mdDkl1TLoloYxLYxdiApVsb9eg96BdDnp5mbo1u%2FBWuv9sxpBC4wKrr6bsv%2B9Jgz98EdDP%2BeecXZP8KgXvxZ8mAL0PKE8bNg8rAJySX%2BG0DbNUKioflFACY28XDoaUMTZuww0kBXc5XYfvJmPQPycYifZGvxAiy3sYm6g9oojxqrd22o3cs0AL%2FzH7Mk6tqRcVR%2BcZGcY9UxlEWDRvGQbYz5wac9biGoUFMSN9OlHnuXhqSTKCa0awfZxotUz%2BiobXsraUhT4wjIGZxAY6pgG8Nq%2FKEG3TO%2BnxKK3iDZKOORe8j8StIcGZzwodN%2BV2JGxfBE14gxQWdZbL08IbsOyuhEug3w5xJgpUYQwzylEcG8mvIhSH7yrbRdxotAFP6mWjGRdl3wcu8axgzD5I6EJQLgT1YFmusLs8xOy9MwwZb%2Bmi8rPqfyio9NX04FUFC9lS8YYjJYOCiF19OSIXxCboI4IE%2ByG%2BkIwcVxvm0jTb7L6jhXFX&X-Amz-Signature=80f98d2ce74c2f9b9bb58f5b893c4d913a97ba9a52ec7d4aec6eb009573890ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZWSPGWK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGTyBBFDtjftIlVqYaok5SIRzCGqqHS5OtgCduBQcteIAiEAkCnAv%2BID3JDdMeLNYa6VVaGyuNn156dUTMPRh%2BF4S%2BQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDNNf9Y%2BV6o3UaWrqOyrcA5ho4MviHGeukG%2FOhe%2B%2B4s74%2Bhl9225LRqFj24L5dDVQpNZeMRhlSB0PdIcGl8bs2p5OGcX9j2MTDDIcU0UaeLNPeOAkbe6tMmxioz0w9G9l14EHOcw%2BAUnGwgh9H7KEO%2FG%2FWz%2Fgiw%2F75IkUU4IlzNhqVidHG0AnsJFQXqbbWTgyZn1Llduo590vD36BGDpv54%2Bu6afV%2FDvmfKYneVMXGRpayoV5VvSWeyMqhEehWHnTdLr8pjznBlWQh2xt7pDCjFzFPmaB1Ms5H4mNrYdulhIGB6VKkKgymN3nfnziR5VdKsf6k67olvreFLA4Z5dqPC%2FSPKrERxhvHJXWN38y5S5wFfe%2FzMc7X7tF2Et4wfby0PgfKZW%2BGL8yagLICsS2o3WAuPDW95y0IN8bAs%2Bn%2FQ4HG1QaBankZ8VHenxlqSGTDEHc8ZJx5%2FfMh8Uov%2BExJFwPWAADSKXnONnzneoSqBk%2BNehyYrokgtzxBN3K4Ra4zN28S60B4%2F53NaZLQXyC4PwJhpmGoWUvs6952MwPoSh6eOPrQjgri4Ace1ujI%2FMhLD7fPsVtvL8wiRvxLDR%2B0iJRM6G3vUbhqLR%2FLu56W21ZpMXB5a5a4hf0KPbGxN66W2TXAsJAxxNYqcH6MOj%2FmMQGOqUBDy0auAsQ0xD93h%2FIkiOwiZ%2FiYPbLqpIlX%2Fa8%2Fy%2FzQB1ASTKcaavV7jp4HZ%2FBOU0GRt6cRsFsrLoStE3K6MYil1ua0bxHLAC9ub6gpg9%2BgdPH14Fu6msF9vppKdkD2RGrB%2FolAblLbaut0rlLvqNYF7eYBQRUycdpQhtPDSFcDncUe2htBc00HVjzPJS432%2FQMYjax49mRqVwDHm5JzZu7qxSSxQr&X-Amz-Signature=47c365ae3bd656fbc45dc70e5170282fada90e751b831b8c391477e0ec54d754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
