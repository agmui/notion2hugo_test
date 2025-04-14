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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PY22CKD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaapE911Fx5jc9BfhCfHA%2FdJygMGZY2maO%2FmuAeDb9tAiALHZNgtvbk1Z6AV40Zr0qXMAmnGPs7S9qE8DyQYWCykyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHgpd3cCNCXo6CE%2FKKtwDvwvac45Dkog7tg5rZkLq7AXgEa0u%2FDFeLRNbT4iok2UdsNNWFWzAIezRS1eljHTEcQu%2Fq0YL%2BP7k0xTEY1FBs48sBXmGEOAtWpRgjOHsL7zgXZAR4rjY1%2BneFSuc6TTpS%2FZaZn%2BoabkPWAijUuL0VpbE8b4UnYF0%2BpgFBtgksEgVgNMrQD0oFAVLFdmN5hI3YwjXeWJiVx3xAP1zjmlgBfuoA%2BsAMGPu%2BOuDM0Bn3Pl5WU%2BwjMWsWSKOu8y3MqNPwvZ3jsXpgkN9%2FaGvdopTBzAkf87Dag70dJlaqlZYzjOw%2FLeDw%2Bp3188Vokg%2BfrxYG%2B1jNmWwpx2CsskPpzHMzVCswUTEbGOova%2FCHMZUF6hmeyAVHsjN5qUKAzDHGxzQSu16JNHZfTkDGXRmuDC%2FECX5T8EdgHuZUH3IEUES5Yk%2B3aRDc71jinfY2JpMTFtE%2Fm53WqDEjXqt%2BEnrWYJw6e8SDecL5xuXcb90vpNvmy8tGKEGpstxrWnhvoLRds32fpyX3zc4Eum9AjbItLkuESwKRryZJYLUv4F1TesG9Aj7zlHt3pGpi2bhkIIy5mbTwbWlT5ANYH2pnJU0B2EEGbbQYnR6JOUo8DLyyYm5Sy47ZdDWWMFVi8VkJnUwwbjxvwY6pgFgX5HAp3wY%2F52wBIHIyKEylwdWqsGrq3118gaQmXlRYJOJmd%2BylHMKjuxNtzLk3mQd4oimpXxLIGbn5B%2FzqI3XLnVEsQKZGWi5zg%2Be56dLH%2Bbsz8Vsm%2F6kg%2BHbgWotcUJe7wD%2BQ2yAHLmrA4R2IqXwbMiD5%2FZPu4uLFdBhOQeWza5FQMMkeGHdnxN4lijRSuK5cP%2FFvUzel1OCAul6Bwq21MXdw9MC&X-Amz-Signature=aaa3f8089d1f3b75b561c32df5a42dbfb200658835ed3aa60ff43b39306accbf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZTNXQ3O%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRa2GJZqmoiUD3nzknV8h7jwaAVLE5pQOrpHgWbSqwAwIhAIMOjl0MsP4nsLgmdijkXIvbIeXLyVU0nvm91TyQWfkMKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvqLZ5qc9MblseeEoq3ANhkevCz1iq%2BKszbm25QdIpQQqpoL2%2BgwIfGrqScM0BU%2BayMcJfEVJa68esWrO8PBYtE3wKqa%2FWmM87ZDoReQxgR8PhVT5ZuCM09WGf2UUDcfo4i51t1RvdYg8ozCtZlcmkNN1RLKHOHkYaWiZJ3ToqlgzNicMrxBAepN75x8x%2BbK46MaG2x3%2FPoPlrqTSn%2Bm4a5TC5j0TMEk3MUsQyR41d53K1d89ouVA29Uajwmh%2B%2FdMgzDgzMedl4nOWoSBe5tTudpPVOblJhwZI%2F4nNupFWuLZp477vdQFI1tRGwLByqJulHr65vai936Ciby8dVy4H6xYaOUVvh9AcQ5op4We2fkrs3d5sMp7YInQy%2FqTljpmHsUkVwViSeFWWqizZjjnrRJc1v5o%2BuqR%2BtCVRP%2Bgbl%2F5WAuZ9ipu2hOIw0OBxBhTO18R8%2B5C54ge63%2BLKbZctPT%2FAFPLXCWuaPslMuAYbn56mj0gpbQ2crim9bhBx6D1L%2F5M%2BW9A%2BbNLhgZC9d0Yjus6gg%2BOu7ha05VJ7S33tV5b2EbvdhDS0kTz2FK%2FJEx1xlK0ClRBBEwi7Bx6WYH16PpDxsE6OT7UoTwZEq8Pw3Sjdz9IhSVVMjG%2B3lTPugt9QOc82latopXfQmDDaufG%2FBjqkAaY7oiS35qwUQHqTmPo8GX%2FaPB1L%2BQ9H2dTCJ%2FLveZue%2F0QHWcoeGPYn7HFTc2pf1hrMUX94fflfIm0bxFl56wRJYJ2ZBmJz72DsHQIu9luRNpKbcICHCN%2B3aD1JrE5iZSEvup4JVN6kctLfNfcJRY4E%2Bt1zkJkm4shUJ3VH1Csp1QF0NUVSZ85rEvxq5EzlXrcUez%2Bp9ejJYggNEAEQYJjwo%2Bcb&X-Amz-Signature=c6ffb0e447d803c568495476766d5381f98773b59e26756ddf7174a215c5d7c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
