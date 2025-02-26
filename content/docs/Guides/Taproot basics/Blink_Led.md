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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QLCSZOU%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCC2wn8eXX5CrL6JAXeYhYpOK1SqcsKol62J9vXtUjiWgIhAILHobKWo7rfMDoJNDogBIcFU3WRyRkgfroRdivwmhNgKv8DCFQQABoMNjM3NDIzMTgzODA1IgzEYTzOko6TC3FjuGUq3APDg4hJsqtb2W3GdWeY8obwETtby4CBrSKJzBEhhwR%2BlkeTAWST6UvgU8f4WAX8%2BeQfORMhlacKuT1x%2FsFcXTidAacag%2BLDGEZY%2B0j21Gn2Rm%2B6%2F9XxwhC6AUyJePsAQA9ju%2FHl7sjpBryV1mOxJ7xsKTFZvWbmNHefgV6vEdZqHeDdmRj26%2FvKiGUGq3gG5jbBL1va5oYW6zTSKrDdbk9Rop5946MRwGs8oEwUUR4c2mEbdQqtD54iGCtflJUVFEsY73UPu7gCi8IRtjrENr2Wf4S9dIwgreRvc%2FuGPOKED00pkss3G0CMxqD%2FrpmkumD8kGBK%2Fk4bZ0rFoTqzgPkHTejzfBkym4y1Ufuz5kRzK8lUr1uW3MXp7l7Iah7WqX9C%2FcaxgAash7a49eS%2BF0Hw7SxWMGaKEwVnhO%2BctqY4H7b6yJYpb0HiY1W6iwwnd4QLRtqobWFJtt0g12pQ1qlXXlAE5KyD3nUQcgbZYfY1agQSp%2BEx43fokQB%2FqD7zA%2FCRLjL8h%2F%2BEVP7H%2BvoSl6enTjHdY0dEQErMoQHlzF4bQqJGnfjeB1a9%2BauhuPk5FdJb23geX7vEApj4FVI2wb7gzfVFjCtnxl40JOLJX5xXBp4YoV%2FbsfvMSittTzCIh%2Fq9BjqkAd9ePadIk0POKm%2BNEpvvie5GF0dNige1P2ZqQcoZhvkIqVEBQYir4eGJ8qFEx1hskpcA3bFt5u9euG7ZCYUt36qt9L4LuJA3sJUmPZecxyxPu2Sumb46iwuyMjYu7fMQ7IbgwfeO5Pw1i5sqSYYHHv40JGKHDcwF0Cy9Mr74sTI4cIyMyEl5bMjwaljUt2y2RD3CG2iC7Q5D0dz0vbZehPVRcRbV&X-Amz-Signature=fbfecd32da33e0062eed2be7b7195001b5c050603744332f7915e77abc76df14&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQELXCLM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDRteWpQRNsPoAk0%2FLSSd68YokrEEeXBzePdyl%2FbujzEAiEA71IVoh3u39tvX%2Blmt3ZWJmcloKVSqB%2FL6Umk0TnIzNgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDj1wknIicm9PpNb5SrcA06zUM54cjSQj6u4%2FqjhbmZHvGjIlwRJ6QljWTEwv5D%2BTK1j6zkvwwQFSXPS570FiDzYy6Ukl030yhvNiBidEzolI%2BfcJt3b3jXgnzh0iPHcdJV27KQePR%2BLMfQjEddQiy66YbG7XgbKtFhNtYZG%2Bm42HMWQnOPMUUxbq2rdgZjA1rDzl65F47VNHOXVydBmNrp47zixVKtZK2UEVmR%2BKnO4mAIANbOSfcOku%2FBm1sp%2BM5ToDwauckWXjC4GuV3PM735qgM4124mto1LKw0BIhjY14OqY5gZ6TxV0mDtx76cgew3%2BeBfxRj24S489DpuTxpHx8m3LoG5M0mlX4plWtzE1Q3jU5RW31i4ShzCG0ApjpQt%2FvEi6wBx4LEGlpe%2FWpIff34z1RNh0cOaQae%2Ff7Tr2dlmsSMi6sRvvieraDyzc3dVbCX1r7CS5rlEEy%2BtMzmxnCU0daAcsp3QbhlAXXoR8hJUy9h8GxcDVRRQKm5TQwcqWiR2scFEc36E%2FWtAo5ma%2Bp8QsqQ60FO%2B0f3tYP3w7%2B3OeAkreps58LTTkt%2FAO%2FwkjfRiNOEMLic1yOVcOzmWVDwPAI3o%2BkA2LzV7z%2Bzd0zWrfuUed1C%2FKPDzuUEW%2BXXMJIya5KiXn4HvMM68%2Bb0GOqUBCbSGTYnFYYsYPeVKHzmeFM0ayHS%2BlpZFpUH%2Bp0PvN4i%2B5KE%2Bv%2BpfjMzIPx%2FSvj7cK4h4x%2FL1wOhltMnkPUwIt4F3oDvurlLfKEeQ%2BH%2F%2FXeMq4kVQPF1RDziFWGhpyCFJOFHlnw%2BOSVNlC0t%2B5Iid1jzN9sQM8Y918FKpUMllpIfmduG6%2FtwllKO3Np4TFGQauSMab9SuLMRzGjMvJDL%2FF5Gj01Md&X-Amz-Signature=599be31b32afb9cd1c620a95df1650fa6bdfeccd1a82df7c8e1350d7b3283f2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
