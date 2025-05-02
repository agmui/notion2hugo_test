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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXL3Q6U6%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBdhEt7cIApi7MfaUoa36c3hW9xEMp0zYPWoyQFKHMocAiEAhcR6LJy4PPCmbT76mOdOSfn4nj5bR4Bc3O%2FtwyluZkAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENb86FQFPURG7GENCrcA6U%2BUb7imxwhYrfzO5oMn%2B%2Fq%2Bjestil7%2FBMOGgudW7xcico9fZgFaP8eo6aiFjrW3ALtCney%2FBPzPSGrJS9wxh5ks0L%2Fi%2FpX%2F%2BAGzDI4kQAenoKLgoBLrwGaAcaul707KiA%2FeiT8fdin7PHV%2BDPpKWZL9bs5mFBfdLn5NJsVUd4h3HJ%2BIJKKzw5U%2BZ8X2V%2BRotUx5QjlqnPZQ8IQQXKtyvOoB7OFv16NP4%2Fcgb3NHcU4B081PhEMzo8xRvJf05iyoXDJRrnuk%2BZLCiggrjI1eMn8FFikqYxJoKfUpyk8%2F5FZXS3l5iQB4X4XpEkMpasu7iWTglLrM52iuoibEpIOYq7NfIP75tlaXesoSru1GL0qE%2BTcCHJ4vLaF0kwWvILzBhMPYvCvZ4o8Smn8SRaQPtSCwo%2B6MlEkPsq%2F8NgiblfTA1QHlje3wWnb9Agw3NvbJRgjd%2BsJifPYl%2FH4SJmljZzjZG%2F97y4b9iKUKu0qVyx4wMCpyVJmVQYsvz6%2B0ldXiT%2F40THmOt%2BmZthXvKB7qulOO6uOPVLBEQb9NgMfZ%2FCV8%2BRiVjCSbdWhLH7HBst3%2B1SjvW%2FHtTUT3OQXc5OLeoGCP2jVXM3nav%2FIsOFOqHlGaVXZ8YOxvkwMiRsnMIXX0sAGOqUBgG8uSfXFDEfWZajog1LL4iNRkdx99j2UN3nsdinMvngs4oyS7eObAJjXyQ41tVa18bP%2FutZ52G297pGhiJ%2BOxaGbHi1ix7iPAswqdqqH83L5ZEq9W6T0SeqmjfVnv7pkkLY5JkB8qeCE9QdjrsM5VKsyp%2FPRbyU%2B1SvHe0tNgqGYMR92ZVcEUrbH%2F4ITAtzZSe9FrCDihZuMQQdPhSnCd5U90s%2F8&X-Amz-Signature=1ad249ec5aea1134ca6f3ce37f3e353ab05d51c7e04dc18e65bca20a3ced31fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5DRDRQ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIA22SD331OJta6AZkFlHbsnmJLx1Rnj6oRoDXws5lz8dAiBrigU9K7lNdODE%2B8NN6jStSzNE%2B8z%2BlxA2sY59v5XSgyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoc2%2BruTGbvg3Ug7xKtwD8DFRUDVa6D4qAUvuoebBQvz%2Fu6TIjsLsHEa%2B1ZNRdicIlS8%2BAaacZxtYE3SAcLvsfyIe9vdVU0rvU3PXttm2a%2F8RAqQGq2d9%2FQVOHZRd1R44sZH44zxOZ4WlQ6Nbaeh%2BRf4lSnseS2n%2FQraKMQ%2Fhdag5XOwtJCQhJN0NFvH%2F0tD3UjhUZ5N2jSt5GK92oedvoS8wtbBH%2BewHDIidCMdKxSFBq3BoUOY0hukMuVvnSClFP8tWQOR9DIIYDx7VG1jGzzCtQ9DII5zMuziMu6jGJHflcsaDUkRMtVD38IE6u4qAftkrGKx%2BsA7HlrkP2dHPWtkew9yBEA3rHnKKp2pAtRpgT5YOhgosHzjmCIwi9q%2BzvbfltjqvNHCCShMBCFYE%2F%2FttKDabJOGLoLkjL2A1X4BHkOQPw5Fzxuylwxv%2F%2BNOSYW%2Bh%2Bl%2FdNsgyapEknFjustkg0j5Y7DP9qxDBPN94az9geX%2FDj5J6D8b4b%2Bj3WMX5wa4f58BMFhm73qVKYDEUxmYketvFrJQEnS9FNsHwsdb7coblpzAhPcbRD2xBK1dkunVmAxxa%2B4ePuRK27O1W8fJfMLrjpEEJ2xKRdo0Ij0wwxlU0RXHqcgmpru0btUnbqX41Yl3W7vy6TiwwptfSwAY6pgHVvoCKCkIz8yoH4bVV7qO268VBFc6DOnyZzLjvcyjbiTeM10bYBQBHUdT8v05epZxj6P%2BDV0jBVgRjk2aYkLawS6hj6bUrkygqV3785vjWxdPrlLM%2BGliRs75A1XY2hbsDbMUxWg0PvqP24yiOEoqGM%2BXO1Mn2pf9vAHaczxk%2BCa8vg7cXT3oxVCIgZ800w%2Bcu6oQxqunyYQyrJCpq8zzyHz9EZRu8&X-Amz-Signature=52e59929c467da3b4a35ed8ec5d6e667cc11d51c27e6f63f9edb91ce9d88f655&X-Amz-SignedHeaders=host&x-id=GetObject)

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
