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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FQCPG6%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIFKQyFb2ZUgnyXLyCyLnewbw33dVXddwgXIukgVqDJpaAiEAqLaZjsKg6PeajZlaaB6hQL%2Btpnly1e3AAzRYDNe3K34qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNxlgJ8garVJBdVCircAwWjlFU1YEWk1APcU3fVkw%2FqN1iW6AoiZ%2BJ2e8ceMQJraNprIJ%2B0gGQLKO3SJjXyOoO3kMo2aOnJudE03aDpoifIl9HgG9PWdlM2Zey0DzZDquFBmO0BBDinMFRZLE4C8qeSrDiJtEpOutPq1tW6ksCnQHeN76e04sso2%2FaLdGogaGZdWkVfyq7ViSi%2BGcRNR%2FyODkm4V3gQbJBrLw68S7ZnKtvZm2SIBRlFXnYmJaQEDyXi%2B%2F7ZjxguslHfg6Csw22lOA6zVTsutYzG6Db0KIKeFq9oMPKGFOd5WXO4UhG8yOBPrzUaYB1MKPVie6UVE43ZN%2Fcx6ixIygt4ptxsbefSYOMINI8pEvR%2FRgBzQJN9J%2FXaKUwO9VnJh4qXhGFkz4GKW9pFBJXXcjQqNv9ootK7ifrkz4w9kV7SMoh9UwRK3Lrx1fYLCAd017dT4oRVBAUTpwGror7Kyc8ODSpS0y%2B0amT7aKYd6x30zITodXhTGbVoH17yxO0%2BR5JNeqJwGZ%2BhI62uBjENQ2xn%2FJQZ4W3xsSS0y5sqrLF%2FU4%2FUIDrmSG2GZKDElksnxCRByw%2FydYKf4pfhSagR5TID2jyDTsWMOrOOWdCxn2tbYB3mOkVnQ%2BKPPRr5yih7dEkEMM6FqdQGOqUBqFFR8Vnn6TDJ%2Fy4DOnSlR1JG5LoyLaxnxyywhxZRhX5C%2Bs5umsBAcYuSL9u54qHUqC%2BKEdtikanG8WILGksRqoe6W2%2BaDvoDiVXfr1%2F1Hb87PNefH0%2BGVqFJxrDO6eDWZ9CieMgbkZcOJh4TXvKIhJdoyJ8DAdlKcms%2FY%2FW7dnZFgUPwuRiv3RYUrn9Nw0O4wpL3nCMDxr8XXXd63PwB2mq%2FatQ3&X-Amz-Signature=edc1cb64e837115ffd2754f60b78419bd67db39e271d3d894fe8e6b2f95e08cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IAQJBN%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIGA%2F8WTreHzyPqnTwTbj%2Frx48zr6yeGjGrBTTxnaNal%2BAiEA%2BV9IeyP1YVm%2BN%2BGYToqBUM6Ha3OkwyhnWgV%2Fbk%2BCp3cqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoO0zyd%2FOAaCoCixSrcA%2FsFyero47rN5QIfkjwimOeAnNkdFkfOAxy8bPJl%2FVD2vIM%2FoPvtrwjAC%2FOGikUbTsanSaaSHuvoqffNFYkPQ%2FAanRnyvFr86zmz2r%2BQDy6NYwcnt9kcu8ACKk8earpqlt8xAPK5srkWGRYpvGE4%2FFecapCWHVAldSo2m0WbSbJGfhYGWybq7gBvtAnrksy4Z3iu%2BQ8b3qltoaktWDv8lpnuKIAyqGUB6OVBunWTw9U7rH52WBxGYlrhge2fOSNe%2BYybd0TBpxAnbOaVCpBt%2BPry8ONTeWOGjuajBl%2FoPJ%2FHCV4ciQjYaOULHazsjx4koV41F8x2aJ6e0RW9DqyO8YOxDIDXGYUpRpDbOgxWF5xiu%2BiqsbA2BReE4xj2j28Y%2BGga5tfbRVdPyLmGmQKUgWE1hdBkplOS8oUx1AsgbkvynZq%2BlMwxPfRSBqehyY0e1HMjrb1Lsgg1sv6n1me936sfbRsbTtfze8Ur76XpFZhMlK40XnE8AYkTD353fcXgOuiElNJb27UBGzESbCfhm%2F7cMiosVPenRTWO9mOPvttQEMVvflWlI9l2e4AdEpjOrqelIOsPPrbK70R1e38j3oAK8IlDQwIRsfMeTrp7DuE8ELLCBQyC3OEdZzCuMPiEqdQGOqUBCVV6wFfgBp7A0APqXZdaconrGg%2F0BEvMPNC2su%2BB%2B4h3NH13zkebJQhY1bFc04G4NrSKGmIGVTawum0VVKvA7UoNTdlWtFM8nDBmWqas31tveQtbtEwHwUhse7th%2BRji%2Bo863uWQPFaSKyhlp%2BfBTJwh8iQAxHfgn7TTUMinUies7%2B7w6ICc6fjpXNL7AM%2BPR6DGvhibs3tumSH1gobCI8Iz8p3j&X-Amz-Signature=99cfc02414392fd1d56aaf811eb7bf3356952f616eb852e288857c1caac17f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
