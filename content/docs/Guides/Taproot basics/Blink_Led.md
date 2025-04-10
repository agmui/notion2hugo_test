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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663362QO2C%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIH%2FFA7F862%2FcdqrEE7HSGmTrCPsvtJrch7196MC8uAEKAiEAy%2BW7OctolwBbuL38eb%2Fjk6HKD0HJjyBKdmXl7t1xplkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBJgHeIKawq%2Fu4CtircA9GVjROnohmFAgAbMuxMSu3kOGjevOEijqyY2eMWitJizjTCsqTxmbi1RoLKzZ9vjiBZFC9YMpLiZ%2B4lZy90ju06dnotW5q48P%2FLzFsV1ikIs3TEEwS5LRPNqwfPlWTVzwhi5Eg2Qy%2BErF1a2mICekna5%2Fcg4ZZy03bVszjqeEnCNC4BFFyBJI%2FbO6OY%2Fb1ynsU6Y1Ulud04zZLWnpTNjfgv4Eo9TMTVRNqqKNhaxESQ12xJxav1XLkgMa9FcRpHOzZz0HROjOj3p%2B%2BQ%2BnSrzzbgQ466VMl8Olj7dY03tHR55zWp5brajld2kMR5DxRFyJj6By7BbQEQamAMs8V6%2Fh4M54r8GAfQdaHEeWW0mNjVIxY%2BPH3z4czbK34fgj%2BPR2c1IeM2z5xOYL%2BWa6%2Bgv%2B5ufVhIpLFc7CPa%2FWckuevcs2zfD8rD%2BKjPIhv%2FkpnYXTY1jNz0e7SOB4zNmSkJeiss7StNCaUm8mPiBsxA%2BPQ1oWT3gdkb8kcc1XoFomSBYmgxPzm3sFlrpDT%2FQunbo2%2B1bFb9oA0lCK7jzm9nGnbEWpiyPYfJKa3KKhrlQgktFgU8GldJbR1xuGI%2B8ihJt%2FiIPWFLmO9XJOk3%2B78EbNc%2Bg691uJb0Syf%2B0%2FfoMMmH4L8GOqUB35Om%2FWcBX4WDInxxGKaWZlqBAhPBWNWU0opnj9Wc0JW%2BnuAp%2FqQQeZ1FBoxt7fpO%2BZWuvNooU4jySp6I8%2FtUNUchMnIAmifHKc8AF2EoZDP8L2ntuSBlAOocBFZYQHvsStx2NhCKelaZwZDhu30hk%2B%2BTDrin%2BgEnS%2FQh0j7i6Z4X1SEz2RUWBEQTRvCwe%2FsMqb00TMBaT%2BIdnNqFISl7d%2FqkbMJ8&X-Amz-Signature=11927ea3e5610d543d753c920480a5ad1ca18a535423353f679134c15ed25df3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DS2FTGD%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIHfIogvP%2BOMj04GqL3rzocM5OWoNfTd8HjG1q8eFWg55AiEA4SgqbfjP8WXVzxGp4YQBRieiHWzNShotMivZLnnlbwkqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISKZeB8%2FcmcVkxkmyrcAy0Gu%2BwrBqXH%2FiFvWiTrXkslK4fd36WqZky2OrXTr5hCvkT657qJoUVdcFOtysIhi50nFcEYknYZR9k2YZO3ioq%2BICeJfo%2BSKYZwbvrTn3AK%2FsSFhvVwMtbKXGLVLj0TIHGTq%2BD7UozM5c6sY5K2qkP2kJstFT74c6orGtzZ%2FRl2dKMszgfqDtDPIv3M5ztJyEZNZNft17PlDPhDTM%2FFdeEn4Mhutl3kOzcCaUC%2BYIxlQfk4r67mw5b8KPj1YgxoW%2B7O33CXY%2FFI6cYRPwGzkhwHzshi4B235dsNA8Vp5K9qUsh8VdqK0i0rLST7HhjDVaDgYPO44v23FciuguG6Ah%2FTr6jDw5vvqA6EHE6xNJBXSHqDcfpVhvjHSzhOjfZQKGlBDz8S6DcsKl%2BO2AhvPjO7n1jd5zqpyokNqshbuxKXcaiDBaQ3tj55us5ev%2B6029F5Sj%2BBS5jXsrNQu%2F8kwxsyeaAzjBXBWFW3WRxIp2gfuv%2Bp2T%2BaQjQm9L5JLrvTLVc%2F2kqnrYNB5yZjTVf7MFRGwWmJz%2FGjlqobSA8qopabCKxfnf8Bd%2Bl89xx4ghzHUTsv54cbGqFo%2BsRjE7lz0l%2FxBkLY8GxFDROPhvkbe8cEQiQqebSAPqcV1zgGMIqH4L8GOqUB%2FyNAigI2vb%2FkQk06bUuaMXG3UQAXw9chECnbpSPMrxsjes96MVBINA1DLfncotjMSnIeMj%2FFClMnuGo4i7N%2FBZSiA2lAuzxqy%2B%2BOq4O5kDD%2B%2F0ZaqZNfCv9iT5z3McVcHHXAZj3QxhNsIV66tYfiCjPJVNxgcyblrIAzI8kOfJDojgARnLNEvBRrOSqdGmNp%2FZv8SOKWvD5roH8rXy9WkyUxJqMs&X-Amz-Signature=6ae544b008536eb8f581c47a4fb938a267e9e0641059894c4d12661722bab9a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
