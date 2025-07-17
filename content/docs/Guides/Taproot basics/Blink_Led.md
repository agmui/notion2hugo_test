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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SQDYP6F%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIEM%2Bb%2B0uQVkEiSEtopnPgOppbZ%2BAwBmw7IQai5QhpFM0AiEAg45r77R5lQSs5taWf2ONDrZ7%2FGvcnEWkokznbzVpS3Mq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCsUefmByqqUhEJh2yrcA2A%2F7wcMJHxZp0hKKAtW0yCD0TxgNXn2OfswxRJYAdMSBSttPNE3cooGGJqRl0djMeuqGe7khLzsebfSYT1a4NTUQFhrtk2xaXeB%2BgHM5qdCfa%2BJAyweRQRG1uJpixwGdZfat83whknZ6UCIBwOMYUUs1nYln6E5byD6DqvGRQghqZwSggkrITIKVLocwscEnlEKzmPww%2By8q7rjTFPHAkJPtVccDQxNMUV7UkwXi85kyxNz5s39%2FQ39mHOFpjmJECWvbVr7vMLpbM2fg8wTHMi4WIcAFUIa1LtOpRsDAOYI0YAbhD4ng%2F1MJdv%2FCpNnJaNFk8uG43yYrjIIger7Lj0C0npp9PAkxDHEue9dFJKQGyACTz7IxkK6szj4oey6pc%2FbjGggkQVNgpybaUxIBa3q5MEWWKlFFKztPT2JUa%2B1Ghv63LtEueSALAOjoqegc5c0F%2FRFPCySSsgZQBmQ%2F%2FDb6T%2BdSCQ6TFZLI%2BO2DxZ2gf8CA5yrd4yV0g%2FVTZYZn5ckMj0iObfaq9TgTPQWjdrPMsv2YLg0sj6zcl8MpFRtPXlGG1kA0UNmYZxD%2BGLo9KX9w1ZmcJ2UrOtjYeVTPd4ykgC2EjCb%2FL7x%2F2NAxL36hZWI%2BJZSCj%2BeNPSAMNbh48MGOqUBlU%2FY5SydPU%2BeI%2F9WwtfKgdh%2FvcdEcz5XJ9ObWKpS7l%2B30xEK1RAUcQOklz%2FYfMaTCFN2Ni8cn5vMrZ%2FOcW4%2BYqE99LrGCHcv3BrVaMH2uTxxa5QbhVbr80%2BbcyCdKlhYisZoZbdixIvR2ptMP0jYYQICOkxIsLXSyoNeuQ77iQsyvndnHnkFImSr5FtjSyg0mXOkJwKQAn0Vs%2BvGpXLph8dWsyy8&X-Amz-Signature=dfa4e8df3de2f62465c93559f46cb0775818b512ed1f9fbe7b641d297a5eb102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCX5Z2WN%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDhaamjAvUWN%2Bw4yx5QRJjTpy5yVmLmqaSf1uAVT%2Fx6wgIgAUGh1E4aadZnLHJSqr%2BffKsnjWWRKzZkODXcv1L1OMMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLcZwjBh1nbhDAdRzSrcA2W2vXPtNU37V6iIo6GXx2dPsMHUL8mu7wRg8iYOW71ebDaLTHrux26BXEnYAsRN5aWNapjJOEynQvoQgVFYTOnEEgLtkfZ1atDd%2FBCzgF5ojNKVD9vr6BJtoXL7ZPhQ3Ax5IDvXa4I5OHgRWe2wB38VtffLFPKnHKyG2RaMv8GF5gFkk5OdQ9nWQyA%2BEbVqoexMUbIioGX7moYvVvigzxux%2BYrwMK0%2Bh%2FVc9Xvd%2BTEehOeIecGapn%2BErT5T2eMHoJ8vmgYYTMqFwXFcalSLGfMY3%2B%2FryjhfyswQrfVzWU0Y8%2FTPyc8wHa4JW0vm421nj4K8Wd%2BTBcbsoeM6q3a8F5Fp94F3IdoHNhKMSA4gfKkXzKr9D%2Fhy5ivvUVGtudm2LTGol471qfMTD9Wbw9mMwzmWRkeWb2fcJusGc%2BxTJ%2FOFzliLR1%2FSzL%2BupXQDWjAqDGdoa04%2FvKGbANhtlPt0Ht%2B3D4bzEPtlvq%2BWE8DRjlTyGZNIBNXISSob74AIJf8P43OggIQ3nxs13BXYuLRiiZa3m%2FKeBsB%2BPwACxaKTb0iNl31%2F9GSupRxF2GgnnoHUujcOT2X%2BZtUQDqcfi00%2BxLNh75dngXcRpnmoxnqyIHPOYnp2XjCiuIhLz6nhMILj48MGOqUBzCk%2BDxOJ7KNPXWSU2xQ7u4i8aO5ZiW3FlSCdQ9UsCc1Fa4w0VO%2Bmw3bFzwG5vCcNvpnHm14UN%2FmR56FwxYEEJcJo3QAfTjR2dzb07TQTgyYVca7rQgLev24tCmfJTbqQR8%2FlvaBChD0CEIcfeKOVTjEh1%2F4jb1wYGuaMxbNnoHoaeS7dm3tyL2bT91DeZ5to%2F0cpBw9hQ%2BFbVpzx8FC8Z%2FwAh%2BKS&X-Amz-Signature=434aa57444d29608695f1b6871a67ea16a9f96f35a16fed2148889bc7a0d6ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
