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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNCODDZP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIHHtGlQeHxjjh0BQzp5GNbpxnrUyrSUjQTU4%2B2Pb9WSoAiEAqIBhbK%2BehPQ8KvaPti%2BDA%2BSvCjRucqRnY0Qa1%2F89KJ4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6ZoIssdUKrQ8H%2BhCrcA4kTyekZu47FQ7bB7PC7kcNfVwX15Oa76y9u5OavHlDn9aKCbvfjnPcHvLzXcT4RrhqDZMwS2yA1gQBtV%2FHWtJVvkuD%2FLLmw50R%2F%2FM4G2SDUC2b8K727UeQpfrqSFkagcJfot39EwC5s4eUyw6TGLzvHQRoA1Ko76wjwBB7a0z4M%2BN4UAoQhDzhgDdnPi2DZt97YOOyt4tBdwlPnRZ19dSn7HOXvpP4M5hNjXQL53b0M1qN87joqiPXPMEzbPxVd7DWw7OAdHKQbDpPL2lIW8VpgixG2ksn%2BSx%2B1k%2BA6zyJYIIMgTMbisQAiFRAt5WkZGQQ84k0GtO1lfovGS9Q6cXtnvRAL69wncs%2BihbRKw6RlyhEOBR9lJYJ72MK7XwjzNaJK92RwBs3t6eK59hGAj0fccQEl6RxqNGeXH0W9sncKTlyTpQQjukxpXEtZ2eXaZFz70Hh%2F9sYR6Tgp6m7burKgWFodxM2fa%2BIQUgoLunqx9Gx3h1aNTeof42EMPiX2OSxfZr%2FxYooGsWRxwia5Ok3pbLU4JmDGdoqTFhdQzY%2FbTcNPNeaptGLnrEU2bJtVajpCOb74wRYIOmsuO42OCDVpaSZfdQF7fRaWuIN0%2BG1jx0sbekxLl72ntnWFMI7Y9MEGOqUB43Fxh9%2BspatvtvIZ8XhKHOuw0r6lLq3Smc5ebsViP1AIYWApqdkpxys8A4UwLxl%2BgkZ6aD%2F7xBXtdeJ6xTunTQvuyMFkpdBU4U3KNx2ObVeN5T1NKWSSX9bTOINeX4py0DRYjTvdHpOLy9F8Nuwhlp0dZCU2rytYB3RDXX7acXg2IW6Ok20dJsuIlzqBFizg2wxZXTIieFR%2FDHQBmbp%2FTusgRpwB&X-Amz-Signature=c998593e360c659a185d898380b3fa8c8287b0aeb1030c586af039546da6f0a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646PM3MGT%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDu2narTZpy2TSTx8FZ3l1aBVxKAyqhaGLJq%2F52JRc7RAIhAINuTOS%2FpB4NWS4pLCDxpqyNggIxtKOJ0XZP1FQExeyDKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJGd2YfwrUbDxy8Nkq3AMdwY4SASoi0fyO9KhWVCxalXkoeJdNJ8J5ml5FwmWweoLb8gWEERdftNWTSiyXlMCgzpCtf5laIBxicW2fRnlV4le9hE6G%2F7%2BNp9q6IihvfWLifxtuq4%2FVa78syEICTx9X%2BUS06FcRhTPnzyHxskEnxXsygxA6v%2Bf6oefsf5JZcKIoyxxVahC1muO5uuChZxmzAX%2F6Zb%2FvF0ikkxCsYMvs4pLrCIWJLoVFUnLSSbthvjtirkpDvmAhhIgMk%2BOehtzcL7UiIX4Yos7GQC8NKVwqd4vxV3rnCxNj%2BtUPEUReA0n7DnPCl1qMpC2MH%2BEJQVOxGSjh3z2dHB9JFrZX8nI7Lb%2FfbhZk1XWmU0uxiXBimKx5LkQMviqKg6P7uwcUqsEZX%2F0oQGiO%2BEGAHWlzV1gRbweVzk094kcHVcNUBFTvsoOgkdYNaAaqT%2FKJbKzjn4EReLvYzQtaFWFPbrJW8uOMJ8dX0mnVcizTEbsiWRLPJESRt7M1eLVCXfKSXjcv25PMI7L2J3Je8cVQV1Bu0PDSwFhA2I9JL3%2BO63BMfS9osg6CiL5vrow9nX%2FsyykQ6BSeSa%2FjXxnupxF75c6V8LHPCvVIlytC3PX5NliWXylBRCwVksCRjX9lJjctSDDm1%2FTBBjqkAZFB5Wdo4UN6zPrMZW4H2B4t%2FJl%2FS8cULvy7kQaIsuZitksPKveNYIMhToRv%2FOY5KJVHGqZ0XXCxUCD8Yg8Gqt33jZc3YtbNWHRlLc%2FsXGNdtRxELjM2FQUJYVql6V0raMLoKJhGcHRkggoba%2B%2B21zsIDIYoQieDoRZuCpBgQ3KxMcAO1cMIvLD%2FsO7Lf7lq3xNXd6CC%2B4RCR0fmKaNEAP2chPFB&X-Amz-Signature=ea6dddceb3e4b2a4f3dd80007e431de3edbb63fd666fef70ae93f1cfeb5486bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
