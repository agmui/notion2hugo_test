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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFF3MGUH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXlGWmGgI6lM93hlkAcNZkrmsmDhetkv0egqj19iXdigIhAPoVmizL066dLtntSkeU1cof1MlDHZMgemIMrZDI9SwkKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkHJW%2FjzTgs9GVuFcq3AMc8l9UWQ0FNVsAm405D8LXLCM7yL7wPQh35Mf0Sy3%2BNFYqsGwyQijmRmwlpiMSZzi6V4%2B5tqIe%2FTfg2e9O20ZrFLQNowaNwe6Ec%2BrQYubxdV%2BVuilio%2BJM4CMtF4T%2BpA51oCHtFi1gYOW%2FEB%2FvV6zu7ylD%2B9Vv22%2FOaUcdnTx0W5fH0MHXixbGPcHT5U7MD75ZGEjUaeWoGrE8957y%2Bhb%2FeesbciQFehMiN2qIR8jlKm1HNKo6feu9fmxURFIo%2Fwq%2FgZqw%2Bn5p3vv1v0wJLG6Lq3MRcJQEOf%2BA6VeHBGfDQORzgYBdczH4Fgu%2BuLvkRKSsSQ8AhmgD%2F7hl9hQjXWSQkXt3WrpbfG%2B9rqqyszLmbh7j5LVzMDR5%2FOIWRSACsIGiS3CLs4QfIsbLEDJPJLKf2LVO3owkFUGofIS5yzGCEU5s63jy8e0AzNk7GhpSdgH1hnL5mLzuEmC6aWhAYXyL9%2FV1KRw2sW%2FVQcsJTYLIJg1AK9sA05beUcYWW5n25tLiHE4AuRHo%2BsRVL5GtNGni%2B7ZKE8lWWjyTuBCE7L6yaBPnwiI%2BnD0W7pFQvRzsp82nPIggcf2h7Gd%2BOEeXwoD0F2UF1V4fbLGyrSrcge4wrLMHzkCp1wInYxP0DTCR4YzDBjqkAQXis%2BElF%2BW8tDUkQaY8yW4aky%2BpPkQUWXXWxaYscJYM6UmN7dfVlbbh0KqkGcjBoeiDkwzmfU9ZYFyB9jcQ3xk1%2Bp8ac9ofySOWq6Y2aM4MpPtWKCrMZHnkRXxaRVYWlCaw0y9i5NbmadKxbbJMMJiGVAEkMAghVatDkQcD3BVdgV0CZDDHjfIP8XcRKZLPJ31SZqYPs4yuKHzC43KPyZ6rv3dr&X-Amz-Signature=f2ea337a6f85647c48fef48f7c2c6c9eb1f57f31c94ad1dbe7747a62a3ccb240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZLRUJG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzD0n51WSyxcwR16cJjOI2emd%2Fb2%2Btg8tVoMkbx0IkOAiEAqgsxG7C8cmRucoZukv1xeCUssDWp1Xme9aPH4tPmTBAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErK3y%2Fcy%2BRtiV%2ByVSrcA%2Bq7%2FJ4vTa9fvTCNo4i7Ic8f%2Fw1vxFC9VOUAwICr0Fo%2F%2FCr3dhou2xBuY%2Bc17XkFLoOMNtMa0ILcmbiMi38E6ooQVmGICdRJhEeDq4huQ%2FFt6oJjPxXoH%2BMRijAEl3%2FuKaW76KKSMyajoNGmZhgujFd%2Bh4Us7M1uW2OVAadaaj5AWnD3QT361L3RzgAG1fPhzUg7Kt7rKC26IBymtkY1f9RQqHqXZyBrIc5PiJ1N3x2YmhRQxm2ji2nWoLQf3tg5RB4zbcgaShnt6FJl71f%2F80cZb09iH75uWmJzpmDFdx8lYVJZWD5y2Bb%2F3jdmNREE8vk%2F3hPS6FV2Dk3sQuLGIuGSuQfTKblQUxp6s0uHjGsJQ33SP0jCbCbHiKA0P81rrDKyzrfG4NzMsursZCawNuiwJaI2lQ6nTOhQ6Wjzy9PxQO1S%2F2q0VYE3Pyz98TXTo9Lnc37%2BPrYZPJscWHQRKm6KvQ1waMbV4PbPcr0Qo7jGgjPFDWO2aK%2BIqDDbIfyGocnmYRplMO0umUA7NCY%2FuhY39rZHwfMUtjQR95kCeeFe3AQ3yYaDZWW%2BvViXGwfSb6PL1%2FZts%2F7yzvkXTMawv35zQpt8Bf6IyH5S%2F6mWm%2BybtmxMXS6b%2F5PiASgjMKPMjMMGOqUBaIEzwXoWH5Ja2YVPC7A0ZO0tiNLCj4S1ccckAesUipnAXNcr%2BU08050CazT1eZRMfZUNtC0XFEw%2Bt%2BUPeQ%2BhquU9KFYoFEz5CWR58JqW3aV30UPZ89NXHAYNtrpKDSnBRODaN%2BW6oe3NSZT1c0BUlPCseGbLWacn1R0xQ6tMK6BbOTr96Zpbhk%2FFrJWIrqYqJm95LkQPXpiI0wNmU9HeT5PyF2oF&X-Amz-Signature=3f5f8c6ef2d07b16ca104b4a437fee9b529a85ff358102069627bd645731cc05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
