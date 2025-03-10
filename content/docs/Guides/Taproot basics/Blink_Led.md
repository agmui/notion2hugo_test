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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YB4UZFQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEXo5zd7AzM2S8c522fpRUjwSkctwOPBlSVDOklYolr9AiBb4RxIg%2FFqQ3yhLaRzS%2FIK1t9AQlm2VUeQ8v1JFEPRWiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0miaPhU64TdXIBWIKtwDdHVCfzH1hEm9c4hHvaigie4SKIA3x7QitEKhxn%2B7XTB84wJnZmpUz6y2KoEFJtT46Kq49vPKfegVLsDHmgvnVccZhyAf6nBAIXt%2FDGHZOa9HmIcjs1RQQW6qufYZ9qHm3ZGhdpDxhJMQCF3o3HQsxt5gRMNBWG%2F1LvW%2BxiB0VBHWGsXEKhxOnsUwpGwl%2F0NV2adRbz92BeESUoS3QCi%2BxJAzluKRmlV0UQahwARWPmTplRv%2FB%2FccL10jW8cfq3DPK4CphCU3dXxX5UneLxIF%2FV59HA%2F1hG9YjG624gReLohtDQX9TRHwbPOhi9IYgH9LRu7VF3N9G%2Bba1uL6iShNRzcB6P0wJv6fG9xAymR70Mxq2RzwL3QquzAfKuoppvEgsE49UmAWVJagMnHJ%2BCEfE2vJpMdQ8FFMLuL97Wzhja%2FXDcMBwgwLHytBXWIaqnrYFZd2D3oN9CZdy7NBF7aSMmF21q9pmWTs8Kyl7Zkw9ph46xzxQZ9jUnblMzxCXrZCj8v0V8RKGgIL7rdhFdB7VNzJXhZdzQaZstXFpxP6LKVWn0zfieMy%2Bp7v%2BljGIASpjcwqwxmmO34PN7BT7bGim8nm86UIwOl%2F05HjdiQTTNtY%2Bg51norLDgW6CXEwoYu8vgY6pgFCBEsP3aIBfrda%2FXuAuGPVyWI48ASWGXLr9jzcRxdiTo%2FEXS1ZyWTx8o8YlgWDDKDtJLEJX123RvlgL6u1rnaPIo44iqShHLazuXy7iuIxkhEbohIBc2T9tN%2Fe3vNNsrAk2Uf0uMqhMdr%2Bxo2vH38lZd1nEWCTNjpsKWlocTlCnI5sDlhAJemVWvD8xrUoESJ%2B%2BpWi8ugMIjk7VPiKzG17meFi6nfq&X-Amz-Signature=8bfcd8ba4e0884a5a8d6e1d82c512abe3b685b9bc79f5d6d34d99a7da7801db9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZ7F5PH%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGofp%2B%2BUrYXS1M57SUQ15GCllDYM8P6F6Q%2FO2%2FkwRGsLAiAwnP6AfJrrP42Kptuu8OHUWYvF01WA3eZ%2BZHxSvbbUSyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXHjYtMQdXVZV8wiiKtwD7bjWhR8ju%2BAaelJ1ScgPu0PQK3xbC2a4OEtCrheosBZh%2BEV7LKx%2BvKkauGq2eXWQudzhmPnJ9ztJ9d15cb9u5NoQ%2F04g3La9I3XLp%2BYQt4pQ7jp3vV%2BvjsIAs%2BH1plF%2BHIeo7Yaligb%2Fus%2B9Ve%2BX4i2LmH0xq9q4DK%2FozH4mNbmzLVUMWG0ITeD418fpfnUoS%2BSzLhucOXUNrZV5oi7%2B66NR8rdkaV9crSWDdFU86S%2BysfCJtXzdVLelin7Vw5HuRuPpmjVXBPaJHAPGMiLGneqJwcLGctJQLO1k9NbhcSb9H%2B6GOc%2Bk37fj1ObLRHdCmYKvBcrYBtRYrobbMq7l0a5pfAG%2F%2FJ0C4cWNEQcqqUuefjmwQch04HnMMTVBrII%2F4leKPR82uC4jpU08wPBgqHF8p6nyoCHHEs0gNxlTqUi0Q4FSW3y9w%2BNzITYtFPn%2FP3YqvezEjMImNMRyv7ReS899LN7mN7kE%2B5x%2F4Xl53wxvRkA5vNyyNwTKozkwmG%2Bn0JMHefJz%2Fq56DhgxAJPVHgICdc9LSlgO%2Bb0nUPcV3JUXOn4VosxAyt2AH06KT0mW6s48KVCEGQBogU%2B5%2B7%2BjR1bnOPoSxV19ljbScjOn7LdmxXRGWwxT23R3l90wiJK8vgY6pgEXnkA1rA781X1hewk4YY8QsxN20VZxrQza37MLa03g%2Fdk5N8jKw4tj%2Brb8DnyZipJ0uDTjfkl%2BYiV2UV0Vh6rNQigUfStzto3f02%2BK2OhHwJw6WGlgCR%2FqBuVnNIjHS8XKekmPEvtNDVx0FcPqkyzp7dKgPilDGTXvkRNKreBILgR9Nq%2BnalXWrVxMuYqNtSMBNoVixp%2Bem4f8q%2B3E0H8QEsouzL6b&X-Amz-Signature=d6a84efac94d9890e18f1c48d4a9b3a190c55cb8ee2c5e1c64d2dbed2a9dfdac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
