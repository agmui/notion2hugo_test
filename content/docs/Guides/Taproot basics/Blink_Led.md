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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K6P3VSA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANpXR8U5xXfyw0UwNmypEr2OeHDLkU0fzqo%2F1zVWf44AiBNte%2FpxplsKXAjB5ykDGT0ktZZ0nLNN8sYA06ze5ifOiqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBUO%2BZC6pWmAmaITFKtwDLKi6YOqqQK5NXmgNge1EFt8Ih0NzTojNBDqz17c7aZG7X20gtpBMHFCFPUTveH4TgKtqI9Xar1Y9VfgWd9zWf1bqsGjWmpQYCMIM3agvEvbTgpmVoAMiqc%2BuJfziiejLX%2FyUHZNdiJBc2hYekciFDKsZVT8gWr73NNfAZ%2FWze%2BiREQJX%2FrELrSxj4b8GahenihnnIsq8penT9PKWkl9rylL8MIRv9SQICJmXn1%2BIl4mV11XB9TQMCTmAhbJ0w3IA2LJnoZlj9mSax%2BrPC9qjwdzql9DLU%2BrU7t6%2Bj3HY%2FuNKSlUPq2haDuHolK%2FIHhNAk6dSfyXwCb534f160mRlSquxZacZPFy4Zvq5gvcEsS%2BU8Y%2FpdXVqWaS3KTQGUy2ncC16biKi2EIt5envV3JcnuJk18ZT4EwtFMfQfqNvZXIgOjNeMa0br1tUm3rPXE4r1%2F%2FhQOO26ZU2ZcGmSJ4XMunKys0I%2BoN5AhFOwZ4AFIAJdbtRNi2yLTXOSuRFX9mQvYHQEaIL6kefNdtvzfL0kKjl1vT3Wvufki3AuMPmd2RV5a1aXD%2BfCwcLRPtMciKYDE1EEL6LhrohKFrtMH9SeKintbfZxWyTXKv7ivBg4WvLktq8pUFWSbWK0HAwlN6awgY6pgHZdTrTmN2z8Dr5JNj%2BZgYPiAEmY0h3yi2A1hm9xFTq6xgmJT3HMAKfmRJZQs5AtTXrirZyH2xQcbuL9DSELMvuTpNaHTw%2BkGjp45eeUkSZecxQn0EJp%2FOjRx5d%2FitoUaP%2B4sQOxee8r1rPxJFJPMVrEjHsBLvsp1bCU7LC3J%2B8LRLcNGbT9f9kXDQYx1X5pQLwzpE4IcJB4DjrOXQ0AHIFlc2nm%2BPl&X-Amz-Signature=ffa33c17840b7088db1d7c0226b50a9a061630273b62ef117d9a7ff544c8c431&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AE7MW4T%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAP%2BZ8TtnZ1KjOR26jVR1DSWRFsWemnOa1wPzcQCwEgAiA4nJAaj0hELirzTGH%2BM7%2FFzUjSxxr0sD%2BHdIPOUYXAGCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbWyPbqh5Q3Yok9j1KtwDqXJ%2B%2BloAgBnOW4qyX%2B7pQLC5cVUDiZV%2B%2B7fpW94tuwk8T3i4XGvYGMRVrotTKSMlQ95FkT9LOF9HeqA%2FD1E336k4HQG%2F0tBAkgeVVwM7TBSfpPMI8KTGGT9slTe3cisDWPmHlnH7TYbNN3vb6X1WTRtsyXD5rbgWHct31Kc3CuVRMbj%2FcRjCT3SmRBgzh4xmWgFTR%2BWzbA4Isc4h6eTI7mn4iulH416GHULVQbJ5HqlVEYHLe%2F4nE32OCE5faJgma5P3gppEbS6Eq3Kvfww3YgB9JeWmnZ7K1h0%2BXHsddVBfVyVFm0UfWu1MBExs8gZiivpJ92su7bNTugOLQFKLnHWQDCPGEjhWIGGIFNY2%2F4MsrIHDP4ZIuhHCUzab8ARZypus3eqgenM8blKLFAW3DI%2FGO164T8gc7Efoh%2BreCRKwKeKIlrUtay1hHowjU8I%2FQGW%2FEux7UEl0LQ4rXOHVTwp0EbFqYX6xwi%2FNFYxPWCh3cqPiaYk%2FKZ9lZTPB%2FeHXUtR46J8nbK5szJ4JA3%2B3zs6xSfc59w1n2hru6ZYzs2f3UACUP%2FYiixTiQsnRrZB3765A1oPARainbIuZHUSTw4ef8m37eFVa6NDhPBq8nDoZeMvpsVQWz9dZe%2BMw296awgY6pgHTxPP%2FMr%2BI9P3jJht9TN3k0yFiTEn7PU2AbwKhUDkCd%2BjIYlmoUhHam9JWAMs4Yef5HOZsbzjH1hYK93Cm%2FZnoBGlc%2FTSZ3MlB6I4iSRYByBP2S3KCyZyxbtFjfVETmaxRVdo3zOkutqMa0UNGoqnQfy2E0%2BEo24u7MtRSYCBLJQR0fs4YX0PRph46ZyTiJ3QoLHpGeobdcHK3%2B6dXUkko0TlujNO%2B&X-Amz-Signature=c5f864dd0dd9b5380642e0754283280d543777a852fb69c5202092b5313fead3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
