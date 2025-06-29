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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVYPHLDX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMmQjkn%2BtJCP8Nt9gp95Ffn8aQjEhSwiymKPHate6wTAIhAJdHwa18%2FTJr2phWBgbf8c92y%2FMrq2u6l0TB9jJCOkD5KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwINXNLDkmYzLc5ue4q3ANB%2FSfVAJJIumQqXzFYq%2BiN5h%2BPWpMcToqBUqzg2mIsorDqPtbRGNYMpbGJ7DXn%2BDvvvOJE1Z8PrkdJ%2BW3QjD%2BqEa%2F8MtRy5EFhJMOSd8V8wWnkDyhHDyYTV7E2i6sGlvkFvQjrddHGHjOpYfaDF%2FFWVnWz%2BEmiDYYexmMdrN3nr85bHUJy8c5Ar3vGIneMU0lf9dEONpMGAfz1moPLhAjmOeiTxoa4QlzY%2FJv9dmC3CaoB1PZUa4tkUrS0FuiUyaz39qMGKKD%2Bu4WFJcg14bnPnLWWfXG%2FE8pLmgixp9aK13WO7Fq5%2F7IGxk50EdT%2Faj6mQgh3FwohMYCQKRjcazXM0mT3bUX97uwzqSy5NCHWZGx%2FyCfdIKvXfrlwzzJcj6NKNFlpNHSXv3zNZjxH3gcuQ3chYe771pQ7CABg9dKhcjTeBgCgLOQthL9wHio2THlTUBeIT%2BmcbaxmbSeknva%2B7oj6M5Y9oC0OAN6IfZL60v0nnYaaEloW7jFG1iQKEUBzYn9ym3uIsyN%2F%2FQMY0WI7SI8BrbxEU8EPhlt8YRP08c1%2FTGNawuzQwSl9ISGbDcUHD%2FlYbpFSDDSrv17Qyzo%2FH3s6eCYs5bcd0NLK4wvbjTCQ8Ft%2BFqdG46YzIjDk%2BoTDBjqkAf5q4BR9GB6ju1pY6Jg4XT9g%2FWuwFRgIOoyDuHUAc82I8z44a3MuDh%2FiaNWy8Pduq%2F%2FTvEQtVGTQrRrwoehA59QG6QqYMtFM2Jqd%2FY5xjuk9vxjfk5kbVKySrY5SoD8CiPVboezP5ozX%2FvyBrczd%2BPTF8vHtPrvpHBGs5Qz%2Fdf1NlArgF9%2BEZ0BGECBHNDHkea9lBQD7jjBT4K2zIuCnGz0dsXdY&X-Amz-Signature=e775bcd5bb85aff6dba754f8d8df35a4068513839d85a399cd4d280a12f76caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBJVYW4U%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoJYo0Lg8sqTAkqCCgG4hueTft57E9ICyP09gKdIYn7AiALYbT32nwPmDYiWnBhZ5AGSEaCDOgL67yb6sa6qcvvsyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7AM6bXVJmBrR79HIKtwDu33jO8tmxv5iCLGzu92jxHefmxd4IiOJJcbJHttfFn4%2FNBh2Tl5JJEwIcAGMc9OMNpW1ExNoHtlpKVcIWMQ4d%2F6rfsKx6IVFydqyr%2FcSIcNoPqK%2FmOYTqim%2BwvueRSkzj%2FEWjkjRGZhyiB%2BCFBWOLtEaeuSJkfXe7FV2P%2BTD4fq6mozuqCIqu7oVVNa1LMC15F8aKKSbxDYs4mPLIuEV1r4O4xukGgC5aaonUlWJgBilimE1%2B20jZLpVv%2FkPVKnILszDjhDRskY7FDLVInUj%2F5DwAYB%2Bg5FFsV0vDc79pztByDwCa1MMR5on6gfk7xOVw%2F2irlOzectnVdr%2B%2FYtAXWihYkNnCeRRb9BJ5XzW7mASaJoOHfY79%2BiM88zDWs1lYuaPAdWn9138X2RCJ%2B07RO%2Bv1HmuA8nWbBGP0RXejq3V1k8Qj6Ubq3ZcrgJfJQj1FSEgVVDqwIFiYKb7rg6%2BK%2Fxr65YbMccvtQ4WstHpQf7UO%2BVmjyPQ5fkAB%2F%2FvxPc07LSocHrhOB8GTc6E5X92HLEOCAT9I%2BiWxRZ22opPYbeymsZQUpvl1BkKQR%2Bm%2BVVWyskzfKMnoJayVzUaAPmI2KLZt3vH2nRPq1CxqmwtK0bA4E%2BCYACEsP1AC90wn5GFwwY6pgFJRh6owC4mS3dRZ98oFbCN87n2d41t3FXkkwoUckdLdGK%2ByERHg30hH1QI5AXQRTIlLTgJ4DjdXsoRnmYO1obv33p6rKsfOZ6x6Wh4ycA86hzi8AGFk94yQjSbBkhWq9UD9oePuo%2FALCpIeyDwdtg%2F0t24xUfzfIIvh3N%2BH7fsObKTg4YK0%2FPrY6RL5uGc9fa%2F4fPxBBQLlRxK3MARP4gkTj0Icx39&X-Amz-Signature=2e921307846b897c0d7b50b53a872832d23e2e1d61f916dacbe309f93fb7a016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
