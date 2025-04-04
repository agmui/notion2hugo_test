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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O72BWO2%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ig3cbKHwa4KAd8ofrD8QWiUz%2BMvrJEBpj5FaoaUqHQIgVbaAMsvi%2BQiMK6jiFa9Z914m%2Fa5KVSXR9f7Pu5Gy%2Fv0q%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDPRIvbZr1xtNxIZGuSrcAzfVS8QGQNQQmGjZ1bgT9T%2FBXnC0XyMgOTQYcFbkJwTtN%2B8B12Q92XZWacl3pavVQbIhn7%2FT7JNq2MwGTv9OK4ImiiYc9oEIvn2t5SLRgQQYP%2BLruzMjL2hNUelDX3trZqUlKIU14nZGPy4PY3BdE0seHBjHa5h%2BVix%2FUmKoZFgws%2FmslMpx4hrHRxT7xrGoDeUBsDMzVHkSJyfsnXVj59vQrp4squVb%2FY1rrg3ZSX1eZrpH3oHTBVrtgHiGoGl9%2FNYyCAGIRPcSsYNy0vGC25936MYlnLOMSiPlq79oIrinBCVHvoiO4y9mVQWpwwSzew4EzQefrZeHcfjHi0UqtVFyKw1f35nJ03rFWxLpjlCD8g7gSWH%2F7DxIrTBr7k1rtWDtEGqPzPiIV1mvJ3K6lVKoGX82TMZsJKKr2tKUtwYlWiX3Ioc88eQzvp4rk6M8KOIsPdET6yyqWFFMCls%2FAgKeO73A4T7toBMwW3%2FaOYuen6WUe7CgLhyiBHf%2B4uFgjEdssxC1LOSn%2FVyuO5jZOZINp%2FNaNvn0tY5bN3QfCvAcMQxG65y88yGfekIAOpP8tVrAGWzSP9zKKx3lC8%2B6QAPuZgiHn0zcOE2dZlVGg1U3wMKqgJiAjIn4YzrMMM%2Fnv78GOqUBymKNtW2VhGb4wLK9XZphJD0QFrimmGZSD8wY6MF%2BGeAqImHP8KmcdVeDZ3zRZ4UpF7iG81%2BRTOZIRf%2F08UHqNSGX%2FK623DaH318dMZUq8COB6%2BmTfecLV5UQf%2FyKmkgt0VpRw3WkvqXoTn0aXQYaUoWXXNmKiKNOulxVjHFaQE3mIgsOOKryQNX%2F8DiqaOhhbZ5NWr46OyAEHH5IOtdELh5pSMQj&X-Amz-Signature=587b91b881cca6ea10250e09b00afafab311edf7be44c5500fadd4d112d8a186&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3Y4454%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDao67HWObSpwikG68d7nL0QnixbGipRWnrLdE150tMsgIhAIRcnkHaqSIfsyxNiJCaHA73gMspAtM0liaVZhTEbMldKv8DCBgQABoMNjM3NDIzMTgzODA1IgxfEN%2B9agEFmeUQALQq3ANZRkqjjR1OhOuyoT5mcUoR7%2BrGgVdvMvNWk7PsB8QQ788ev%2FiH05%2BhzS7GJ2%2BsMT13PRNrDk0LIkqUAJn2uZZvq4QB8E0A2%2BIEnYBxSkteQgmxfoVmLhZt25%2BTPC5Gi50EH9N8YrmPEjRj8z4Cad9n8tNlGzolfrUwv%2BRc1KQ1h6PUq6bLohshj69lSGh820p3644mWUZqhmshetrwKCEPNEWjrW2WD3uBj6OyyPYvWW5qooE%2FpdMqZ2cgzPVMgMRq%2FTG3HtQjjin4HSqcY8ppwyumIG7jtXfLmfcA0c5l%2BrWZBi%2BPohwFQxWrsx8d%2Bb%2BXG3izOV3L7ren4xiAkpbVlndE8YxbHkarSllrdeeL0UXG8wH9F%2F8p876GLmGyOIsm4tA2w2nr0jHH7%2BcWyHT4NQQl0HCshZtQTL%2BEsRcoddZxPDUGKHyOlkNnekW9o8TKGFAOqQUrmSAqN%2BVZ6IigOysd%2B%2Fz39oxJmlwEmjLxuTReTsFd0WdDMJs749tPmTnCr6dSKbhgahIO4NLSNMWc1SeMDam2cKaun%2FGqK6MCPGa28y%2BmMRDhwpzccN1%2BKn%2FuvI3E%2FZdE6M%2BkWgdS0kihhuxSMUPGcvPqU%2FOkYIOZSUrhDNMI%2B7uO9gGG3zCc57%2B%2FBjqkASyKeWwBtST6b02NmPqkjpKbwwH0PlVkj4omlarsBT5%2BJGmnYeggcU%2BEHOdY1lF6aOz5L75h1AT0crw0NUmr6FvlnZl29N9iiTJbecmYNFayvz1oQUCZrr1VyfNEtj%2FVyHCNAJ5ifyrW%2BfAVzcqVfDLgfTSd1A4YNzdZpfRpdG87jCnXMkwa8h%2FfRntbQZgjrCJegcnOHLandjmQ%2FbBGWI6d%2FSbY&X-Amz-Signature=e160b86d8d2157a697ceee10134ea89d875c288df98bbb41e041e43022f6900d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
