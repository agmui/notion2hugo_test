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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655T6BJLR%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNXm1wojDLw0q81cogbLvPp%2BnGsdbTpBepwCrGMyd%2BsAIhAKmal%2F1%2FTuwiUD8oipitxr0pxMbTaw6DWTmSiMTrm7aGKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO6MjR6L2ZVaFYeyIq3AOjvyTP5VDEtP0PPHshaD3hnPZ%2FyQstdgqjnDszR2ekw%2B%2BjUJq3UzqjlUUhwSD0XTI1MbVniCo%2BmSPm43TK3Z5QBFNM2FA6ws0qVGtfMPdXLdSiB7RcVMx02Pq1lumQgab4fhm09ctji1uzR5nPpkSpvHZ%2BII39rL%2FHeqbce93%2BG5a0OCckh8SI%2FkJ%2Bg2xxczQhiZZA3xd5hDxjnsXVXdR3rdaVGyiWKVNSnwSTVw1CVtOCDY6k9sekGl2S70Tov%2Bh3dCG7idjcTjSSys5GZTtGxLZpgcDTuwvNHa4QLRLlouacIzpcymP%2FuCOd7PdKSANWzLNmizR350Wqd%2FQ5XS9hMsfBdRe4dnutP1dWiQHexvxbooDPBNMoHnDcwDFllCMgq534GVxHxCrsmo%2FQME0%2FH6Jr56jRLUufaDvSLKOkQ3IAgvjfY%2BEJttrhA6b3ED1t0hOrz3C6yz5PEKgVhhOa1yznLVQjuD%2FFat6Vorrfi97oRqaGJSlHRizWs9AOLNjiQtswexvTrghHao6NBIVSgZPa7U4P%2BF9n6eSdkab%2FOMBqO64v93Vgfkcq%2FYMR2ozR%2B5jDsDVFXNXml%2FhbNYJJPrZNdGw8boZIvjet7mQ25B7JArZlkTKYdzX2ijC1j%2FzABjqkAQNskgE1ncdXWutXPLubSqZU6FbN4r0PNi6RMJotHo20%2FsLpUEa8JlEJmlv9ZJcufairUjJsxHnKtnRkBfw4R2PEVfpNxUT0%2FHfdmIs3Aw2sS7rNEcNQ%2BVyKaLo9AOhRa%2BMokToKPgQoEQdshUL7z%2BoOamnds6VILjsBcpYrdI8cZIcpXvi6gxpgqTogg3UidcMrkKS%2BoGAjFxff%2BW7VJnzUjsBd&X-Amz-Signature=45827823c940a7d199bdbba90b5ecb1eb93bf78ece56fd799b0a692244df7280&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z37EAQT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T121314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzFYA%2BQ%2B8ifZFOF4wBuUKXRfqhvjAyBaJyrdFVQph9VgIgSmnC4kgEPCVjcI4FEZ4ep85XKV0dtNa3VjAgAXvFC9cqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIJV6Vvvzflx6DIGPyrcA4CxHKOwwLPbh19ivri0Cqd9oSdUVd5NwkQNFwE4EiIxAd5qKzCt6CYCnOlngccUz%2BhHgp4ygjsve6C03HJCZTXULOfXInXiKl%2BEwV5w4K1j5jx1zB5wlUHAFnkjdhuljvfoap1PoocVHyZQ2kduXKLruyENLzni7TdkfMfMautTpnY3VrD6KveguX4rVyRK%2FtaWSo9LjfsVEUizK6EbQW26XoiFUZr%2BE6MzKaXuHw09C0BMgJyBLxHJECpyJ13QL1AWYM3s9avhq5Kin3dTo3t9ZxcMkhhBnnPa6i16zkIPTHO7%2BdP838T15x14oNlS7LSmy7c1Bur0mVYdt7RbcHTxgYQS4yuHXN1M5zCqBcgtkrDInXbKu5D%2F%2BTmiP60I3mF3lt4G54HWAgtyBuDLhRn9B0%2FfO9Zfn56YSlAQ9yU%2Fj%2FVuV7oFLi4x%2FvjaASYM2Qa5rT8yfBHs8PR1FWV0GjibzTM4kJfHZIvNAUROefbIRtUkJO%2FasgOvF373BMNMWsryp%2F10Fe8Dav4gNYKhq2Cp64PoN6FYOJVCTt6cfNVlne96p9XsSbbCB%2Bnug3MucBLekgbHmz05jDLz5KmDgOmpreEC7W8vO2M4stASjN%2BJOFZihzC3wGPTj%2BCuMPOP%2FMAGOqUBLTMwa2Bx6x0mLMk0pa2f5UTtqAHFr8xlTjMqQVRc1e%2F7Bo20I1ffNV0UKTpGOi%2Fzjjhfbp3mvl25kQk5hnGjsaN%2Byh5mLOZcNQDcYn2pdUydMgicoFpglWvdFjsnDGsn7YA1B3ioDmOQef%2FuPsSJ%2Fna1Z0eSMkxz%2FMnvybsEC%2Fw14pr8zh7HFjsI6Ux3akw7o8bdEMJDeGoH3Vdf1TXnPSzvqDsE&X-Amz-Signature=65b92ac6803fc427cecc25e187330f0e8f9e765920b807781687522c9e6e36ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
