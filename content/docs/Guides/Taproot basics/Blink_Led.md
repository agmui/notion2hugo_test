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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ATKW2F%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICg61syq%2B8pGSLLfVzyoJ0oqu08iTbYpdfHspWxoAgSSAiEA1XLd1pwIcEvLz7JNe6mLN2u7U6%2F%2BSUF0yh9iW3AVy1UqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUK5AU80aC42SjGZyrcA5nerKri4wu%2FJUDKQ%2FGIvsBJYaXjGxbDWDXwQoYZxRF7WYlY6ZLBZZlTAOaTIMOg%2FSpgqMvyimJx%2B6iGQ5yG3Vi9gs2bviKwxMc96gm3pokuAKd3hZSdRZCNSncmVgxZZs2KFf3XKz8sfVU8fkHeLdDHJRtYIHZileD4Q3DOqXCH2rpRh0t62gYccVxtERGfraAlGwLDEPB2yJlJJ91REyok1iHjIRjbX%2BdIqBMfig1b%2FQwQMdH7BG%2FqoAHgD0qVNbqmvx0%2BjPaCmZF400zxWJYINH%2BkyUyLn2WuXMlfgz%2F2gEuf0pV5Z8a3Aow1VR1V3aAOFab6ph%2Bgl83LPncNIfY2k6ZD69ZZQgze8XR%2FCU%2FzPMhCWZKyhabsQ5x0bJUAulUrAD5MYW5zAA75oJ%2FXhi%2ByXXOJWqxoJstklT2KMQupBLnYF%2BRQULImedcZKqfBcV%2BmWNpObUKqiwD6JWaZvyrlPQKlwrgwXA%2F208YRL8azquQXxduh36dqGMO0opFpCFEWFl%2Fk2ngjFzhMrNDCYNDx6UDjgtTk54XX6sS4fc%2BnGURTn9QT2AqqLcz2CtvrL77u2uXjqNGoWefuPsdSng5g7SeDDYJ6qMeg4Erl3Wnl2AwDWgh2okMkO07LMKGjycIGOqUBp53RHS4L%2BhQLNIhhTk8TTdVWXF97z4g9bbuj8hTyGMIhmaU24zUI4dLFg2P7xu3ZiwqYYTXrnddnW2R1rQhLJWgMdcUSiVOSQJMq3d1hSUOPj%2BCjRA3P7bsMlfLDzV7%2BWR6gD3HV5FgYJ8VOR3%2FY4PK%2B0lyeIHLY5Re4bp6OEhI75aeJRCh8FviNZcWojOS%2FrtXDP%2FnidFtoR0Rb%2BLcIWGFlPSIC&X-Amz-Signature=e6aab8e88fb6f3007753761ee8ef42c3ed71b0c64a221782ad6d46926c30ab9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI52TQWL%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPG70%2FvTbfWx9fg3uX9Z1G0mBRwpvuyHVBpo83dZ7PDAiBkHNqnuuFrn1zKURPYmw7p6YzEid%2Bq0ySvUpxg16Ha1iqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdca7QwDk6X0mX6MvKtwDSSCwUPEQWwLV19%2FU00G7qomoa5tlrxlNMHz8opDNI3z5XwCbiJTS8qksFTVnxxXRqU8LzNFYIAWVivroWbZKKzDX1Gpw7HG%2FKPJUUzIC8wT33VOEYcq9qDjnklgTiFfNDjyMNPsAYxS9Bp0Hfxl%2BuiKoPICFC9udoVNKwIDs6k7ccWkQ6bGGVmJrPyoeRvbDKtJ72Kub8TpujthdnoKtj4VxICYkyf%2FV2MAC3DfCV54tf6%2BPolgyT23OuklfWDTEgCgffDPoxqhC5dCIuWrF4ObHRpJjYj%2FUJ37d5Z9gkxT6nuUwhddDnDTjCZecePOJGi0DVHuEKmDxMZFFJ71NNgFnr8qIJNEfWuLRBNh57Nii4Y6Ouj5IGnWor6gDndh3wmap2oEJN7BjDUTDnvLvdpCtJ5bVj16Lbvr5%2BKoBRZzpEMC1EFR2X8gaj3%2BnhNkbad2kW75CJ8A5KQz0vGKmGpOYUIjUzn80lRGI0OyTuJ1hBbNnQAapKxGixgYPTVh%2BQojpu0aXzM9n1K45oVF%2FSrsyV1BBkvIJhWqPOVlGg2djCOgdrrSpS1vSNGBpJPR%2FEmRJMumor%2BhXBXpQhlZXztGtFqdqyKf1WXJZkOH9lubeytSG31u0cWwDCukwmKPJwgY6pgHkgfOwm9m8bUiaoaNPzdxV2LPbU%2Feyd%2FTPsjq7nca81GmAIlSwsX6758zmvYEHIJ9leY8x7Ol98j2lPNM2mRZaagdikZ%2B4Zq8jSG%2BH6Nf9NA8A3KXZFvm8fvNGyvHHt4XUJMnApF8fcHNRHdGE217he8UWCplKk7DmJxYfsyEnBNIcrCIsFisiWcnmksEl18%2F04SMz4Lm0nBTAQ0EgMOSpJmhIqpM3&X-Amz-Signature=6aad27ab85ede9d05f9a25dba911c2445dbbf4e4ca769080a73da6c6f911b6fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
