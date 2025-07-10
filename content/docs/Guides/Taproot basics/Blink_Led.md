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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675G7Q5R2%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfDvMmiD01z1cGxY8XSNIZmRK992cpy4kSl%2BIonXzvFQIgSIFMxKcrXuwEowWJ9nUyKQq34dj71TZfajkfmWMPuZgqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDZfQijvnH%2FfAJoBSrcA2yaYVq7lzfHYo2bsfXRX3nRayhIdhpcX36d8buLTcqR%2FccW2wdddzH04kz%2BOjTolzOfZxqOJUPyusqBFXkiSC29E57hjDf9qztk6Xf0pihiz2BARHy3EiFctVNRFQBRebYN3biP%2BiLThi5BnB1d6rJXHT0MlxS2w0pGh%2BdkBiuz%2FPrXP6zD%2F%2FfLMqnXIz49gm5EiBj2i5vWYagi1WVbq%2F%2BfV4Or9FQ0b3XnvvS8Fy1722cx363jkq0JM8VtL3pBuPBAHqmI69Div4aHJcy6GlhG4l0W01IvyFsD5fRwSHfj07qa3s8h4O0Xmh53bZU9U11skTl3fwHnIx3R86QM2ChoT6bRXViyR3MhfULalloc8T%2BJqqbSEIxHZOJoh3jv7sEihE1sedmQ%2FFWz18F2gmbERPY4U2Ia79dJ6DiECmC3Rpf0%2BoqptP7vQi2GN3GdL9ZPOYuDFtJ1M6SsmjZpinJaXZyfRCcFArEgfFuqfWaBQc%2FEwUhNFroYrXxKUvAmMOeRVOf3RVLhs0uuEeiHNbtkvsoU9KQ4FfxOpOeSaMrfqDhD5yb8VOMWaRb2lpmJEn17%2Bk7fppWo4Xe9AxUkn4Fzb3Rw2eMyLSJKkC4%2FXLtJWzqyQt%2FHy320QmV%2FMKaiwMMGOqUBggfd3l2AWUhQHK5jxdZ1VBsxvw9q%2BAkIWmdqCEHcFe81pF7dOf4jF7SLcWGNGkzqwgLomZe7sJNRbgvEDWwv7Us8d5XItAYlfXH5sZVZrfuGerxw6dfSU9KNzAcla5T7bhIHocgXDy4CeFjAP2Ki4ZFo7w9E8mi9JFtvn2SFufbjxJDBGAlWuJTJ1MbJVNw9xK1ekN54vWk%2FY5YqZ0ir3Lu%2Ba1Xp&X-Amz-Signature=c607f6fa8e81b9696635938dd6c03454fff9189d72af06932fa84d6c68320150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4X7X2YT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTGPJkglFtsZd2vkCdlH4rKHuwq%2BEDENxT3DxnWZbl8gIgT2t3rJuiyUS8xxDIt6v8feAOCUCBghPapYyIsob3ClYqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAOTnkfq9flxBW3RiyrcA0pOtVBM9Ax9KdjQPFUwd6rv5vyDzyn0YmVVz%2F0zJq5P2xl24Sva1BYxh7nGHjbEFcAT1tiNUsL5LAKqIzvNm%2BBAxLF8BnA33Y8PrQ4XKYw7ULY%2BrROVKixEpmSfOY4OSV4B%2B4kgHIYXbRV3SqMwYErETpm%2FiwMAAm%2BDAj%2BrgJCPwQyF8j24ma3F1x2z5TWyCNKkZt4RPN6ShqABmqC%2BWRbwrGbtur8sdbd8Nipu6hFs733GZj4YSokPCd24L%2FypoyYC0lvb%2BpueMQMQ%2F8%2BwTNPDnQcX66dLIGck%2Bc871SAAVAxr1pHIRPuGf%2FU3tbO65V6GcVZKtCFN6sBkH07kj0rJcmzeo07lAkAo4EJel2Tq%2F1oiMpdNzJLHIYhko3w2ZPF7Wk5lxKQKOA0QrLYyft9Hslu9PJ%2FyP3tvddKmNYoUi0mYAhZJ%2FyP5zREHSoV1smBbz%2B%2B%2BPZ7x%2B9NTl8r3%2BJMuNQXz3Eqeym3e3u0WkTcMXkDbx4B9kaRZ5m2G26%2F8iY%2BkJPswgl4%2Fv8sfzijn9KG2nws974L4SlPDtMyHW%2Bb9GfsEYH0DcDOTKSBgFzx%2FfXKQcdnDyJwyv1KEqSJajZNbF7kF6sGKv03mgxsMF2PCmj9EufuqhI7gML9zMPmiwMMGOqUB2bWq8wF2%2B7NvbVzfHsUvdDr6m8X6FAqJZn7gFJ5vr09ecK5QhAzVPF%2FhNa%2FT6kxdavsdsjrhdWzkhz2pu8sTGrDNOtb6xhD0li0yB9byFwlIueq3T%2BupqeuQHLxOYreRTbjDDv9v9fvVpS6IEeDZUuOwTwbOIOfM2ZgbizHDkg%2FHfPIlTnRw1Joc71SVbEihjQZF0PaCHaQRKsHVyrgFTud944A3&X-Amz-Signature=27d6d2588231619b91bad61b84952223b271e4a81266f3e3383095cdbf35e860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
