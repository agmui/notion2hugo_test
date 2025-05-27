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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4SGTEIR%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNmjghtXQNflCB%2BofOBklmsT%2B%2FM9iTfVwmfOhljcQwSgIhAPhSC3UNi1q7mKvto%2FFSOcjK0Q0OgnQnRflTwBppK%2FzDKv8DCF0QABoMNjM3NDIzMTgzODA1IgzAaO1i2EDSD8WltYMq3APmSZomFv2rbIJvdnMmW%2BbpOISDt9hF6Ok0B3dKxRmnaqt%2B4JH850sHus5Y4WwRhAN%2F6I3fhmUAWXcrLNvNJ1mBMrNBMTaITDn%2FACpic8rPb92F6Ynae1xN2XvWTVZ0gfyMZJoe5mLtrjrHMDOdtRSJn5sX553PBuU7muWFi7dRoRMkTS8FKucofPrf0cnwyCM5aFiwcBjL27bISuavr1kyvl9zRz4zjzbJEtwh%2FZ%2BvaUJxa7b1oanAQt7tkzB3c9Mu4VpsuekXCey6NWXv9NRJJQqmJvFw4QXkOo1K0qHDJvNA8nOj9ie6U3fU%2FJnIRgKb64NU5E9yyfJZ5HqF1%2FosiyuSCU21jRxj8QPS1Xd%2B3QV67GR2FUOzfXzqca%2BpygS8V%2FbvUv1pLuSwZcBniHwInjOJLW4pAEWPYE1xpLyoF8htZ3dBEua2sn8nh%2BGTGWnDW1KxTgBdwv8CbIYaaM2CmhEg3opVnlL7h8dE%2FGkvxt0m%2FhUoEE000QrXvSDrBa%2FZ7qy1%2FryXcw%2FKWdKMT7coKjH7gIxQJz%2BpbWTcm4tex%2BZLcw%2BcFK1roXCSFDTsbr3N37xXSB6O9lYEogizmpzS9tpGrvQvfjTR%2FWeiJ%2B5wlMyniQLEEguTF7qNwjCS1dbBBjqkAaf%2BZk2%2FlwNSGtyrxgvTpqturfYeBamtUjSSUtry5D06DAVehf34h%2Bt%2FsyWSX1XuBuLH5fnKpu0wPHvgRiY4CDFH46ZUNG7jj0whoJ4XQOQla8hWHDEvxKxjTGC88FvMU2Zxg2lLYyzlBbq5SncpTVp7XHWRRCGfLSEUU3rNpM1XDyLMFr3VVtkiju28xNnrlpABSBjD%2FOTWxR7ilbB9bGi7%2FQJ3&X-Amz-Signature=1955657b6202460adaafc5362376d8bb2eea915197d4556c2dda1d061c2f0f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645TOWNRT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T132436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxJvq7TSw9TVgARNfB1occs%2FVje0tPbSKoTQcJCGw%2BbAiAl2zOhkqiSS2SsZpc6AKUSZ5uXF%2FgFvwtooqgMCslnVSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMORgpv48ftPCBskThKtwDOZ%2F0kt2WY6RrquWRWalRiNbyrtnj5nPwqq4azCaCS4y%2BtO8GeuWCtEE7T2%2BRT9hwFKpS80fcPcWysuKoMwYPM%2F13FOrZ5SPEPjGkBeQnyPKi9ZrCtMRAIi3VQHlx0ndgpTeGA7SQzkoXC5YMLJAGh5yejso4XdXeVqZXGYJdDFWhL3MuVx8LnpvMBQ%2FEhzAxBdPGakA2wsDWPUZncaEijLFSr3Hd9fwgHGmb8dJjCv%2B5w6zv9I%2BJ3%2BQhXb6fYE1nyCiYWI5eiK%2FIW7IwQtE7Z7pGvRYuFa%2BgwghXOf4LC7tpZOu%2BCnxB3U%2Bwp5QOviKAAyOG%2B%2BA%2FkArgHlJeK4yiqaoZoQNKo2R7%2FUGYZUe6o6fpbRa%2BAfeesRElm5w3JXd1w83OECHH%2FSDYXY%2BUS4nJiJF3mq%2BxkGmhzq4XSOhOzkOPxclhnPdd45zI9Rybrg%2FUDw9gdNqJ6EgdvN%2Fmx8eN0V0UmcH1C5bHehD2TPIugOEjesMCI7Akil8eK%2ByQlbtKpaAyyf4fMQxDKCoOTGL1CKItMiz39H%2B3fupzKjzXyZYWA%2B52xuHo%2F14qLe7Zaxqt28ro3p68KDEkTa6U4jIs7zfKCw9nUUQ5kMm%2FR6WbXZS4go%2FjCNTtRFNP8rYwxNTWwQY6pgEtiEyEWqgrhAGcyETaIKOvhpdtna4LdXPfrCM2aDIamGXi0oG%2BGDrRahdDd0GdHPtTWj0g3FU632g26987vDyu%2FD%2BsR7eLc6djZ%2FbQKeXzB8HTcdumHVG7n9mHVt1VKsZQtcQ9aJ8kTN4YsfmcaMRGZrHVCg3%2FY07VOz0xZ0VrUxLXl6mGPtqwo3zSAo6YUg54Et1BJigMExVs8N7ADlLrwZpLDg83&X-Amz-Signature=7af08954905dec713d8a0d5e5ccd0db83beefd8361e18f53bcadb7e6382eac46&X-Amz-SignedHeaders=host&x-id=GetObject)

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
