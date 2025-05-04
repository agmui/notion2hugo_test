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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGJRXMM7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIEvJ7eU01Prrg5nqGv8l3vNvC7eWIrYd3WZlXNMCtjHRAiAFuCIa8UCUe7OkCUAJ0MQ4YnOauW7UJXfW9H5luZr0VyqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6Bi%2BYipsfKfr7PvlKtwDcaSlcxLHS5fob2Uu1hu%2FZTMXHLbzeakzyLIbr5%2F00rdptE1mz%2BB2Tl2KVQUXDSy2MP5zC1f8WTyIRBm5oJQ9CQOCVqBk2skC78Yyeq0lUBOIo%2FCozFBZcusV0kwJ%2BfFd6CGvb3WCIE5ffE139Cm%2FKDnfLwlmlRMgcxEC%2B14cvS%2BJtmQUTInNx%2BuM4kUIDebXir%2FhjDp7mvuI1fO3gmsrO4yjcL%2F0szUSEEbqOM6mBLB1RmrTYRq8dK7aRJcvcw7c%2FZf5p1fnvOnXohnHitXV5V3EzMFeNe4gHgkH1IvKFT3uAMTpVePoR8HXCaVN8v553IWcmLS9UCp%2F7%2BqQxbL3XH2lEmnCiIvhLAWHE%2FjEaHGVWQZP5WztndBTHV7b0vxplEBncG0TQpgCUThJ1%2Bl9b6V1%2FJagrp2q9yJEoCZWFE1Q7kAAzNl82DGiFKsNH7iUjwYa%2FSVvK2j3EuzAJSac30OtDfyIUAd48W%2Bt%2BDXPsD7AZWhA%2BD%2BHedxfu3E8LI84ZQgCqbgNm9MtscZYKYli4iFsM%2BGfqpBcWYFo3HGLW5RaXdqI%2BJ1G3Bcg5t9n0q5%2Bvt6uQomk9FDuAOm9RvKi6djPVeTtFsYpaUImXw6PN%2FBHngdbHu%2BsquyESKQwh9nawAY6pgFvTGY6FZSUuFZpJgM14DODHVL5PPIDctfeRcV2ESK5LxyxHAiBADGRAZxPdeG6jxtP8vQde3xKbk4wTIsgSMcHiOzfyZ4cvCoo4hMlROIsWqnpk1P4%2FYruP8xUIV63V0fDXZ4GTVUJH62%2FlLbjrgEmTu%2FGsmj222GM%2BRhipwVs7x1du6%2Ft%2B1o7SCnpKV8koE0G8OYWochfEERfnizZtyH8va769rEs&X-Amz-Signature=ac6f321118f3e95323bad4eda459d96a5eca094fe2cd352d9cde90aeabe1cbd6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q23B7XNV%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCnAiRCRYgPHGQX6tsIoU0w3LzgkJCrNFlft3vMX4%2FAwAIhALFj378dfEGQ38GQwfbs4DIYWl3Eajnv9kMFLQpu5%2FPzKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwdr2z4qxH3W8uZ5iMq3APHm7LNUuf%2FkCd2y8ELMMf6cbjdxIe60vJyuFBgKsCOCtbI8SEDJEas4TiYWnR8gLxXS0oH8wgPWutiCCzVFPprMDoiKKo5qWB8Ucpgth2jjhyzFoUAl9UvTmSAadn8EJZE%2FYVQlpkFWGTsllknXLr1xs0RU0mgdrcn7iybflUNWinh%2FgigpDhXJn9jvEAn5hCiviCSO7A5iB5AWnuKBRJKknR4XFqM8T4F%2F%2FymGjRENNULo6ABKTgcOtWJ4ddk1zY8UW4XWNlQ8iKJMsNvdi158hT2N0fVtxj6paPhS8FbdhxfJYY5ry8yUr04iJiMV0NntCVj4ckdecTzKjGCIU%2Fw7FgIHdzYgoAix4Q51G6Fjing1LJCMJ%2BCccapAzplsHS9pszX%2BFwaWnIUSavXthr8i%2FlAETXa3lXg3Zn%2BpI8CgMMTClEjsmEVVmXv13suezbnDNxbh3G2xw93SpcArFfs4GlrJufy%2B%2FZhJAzyMhgwVE2Bsf9fyy58oAiNFAetUgmXEWaQ4XpPPBL0j4tNmW6infVIfO3yptW%2F6R%2BENMUrqVp4csR3OfDVmVRV4zl0IGWR1c2B7d9ShQaTWJrb3cbLHGgdaS2gFiw6fqUUWmMCbnDRBOYDLaM4%2F%2Byk5DCF2drABjqkAVJeEbQhxFo9NowCzSDy36HwcMFlA4rDN06TsMHdYmpr7wuj4hAWs0SCamc8OQwtfnFa7FKEmD8c8A1IofxhyHmaVIJGWQCPKCyZzqJcXSGYNT8WU6YDdEFxN4wNbxK5ngUwdyt%2BVkWTMLyVV9HdpSswI4oBgsPDLFbtjVxhul9fqKhV0CbI6I5jc5HndI5htAtwLsKUVBnZg5pdOP8MKLvL1EBh&X-Amz-Signature=68e3e88c9d9bf347d552a2242efd74c318ceb961a49d45623b696fbebc8913cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
