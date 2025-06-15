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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMZRHSAK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCoFj5fDmg5S2%2BN7UUOlI2cDR0mwrHVAZAvitQB12yMwAIhANeywSlYsuRoVibG%2B9iKb2Dx7j2JpQAQGZYbgoNJVTFUKv8DCD0QABoMNjM3NDIzMTgzODA1Igy1DRGmMRSThdr%2BGOgq3AOClrlhnwkNqHEENvTbKlxOVbVbDoHCqC%2FDO%2BQjt3lUBviNLS7VjHANvY28sZeAFRwqsk%2BYSWMpqjq8mX5QFSwup9ITq7bvzXFMvQQpzSYObx32mZhhpSnYtjTzAWKbB1yIuECkrNxP6JmSttVLPhfxrLQ97Eak6fp1NWosHE6W%2BI55J1pGL65HUzQ79UssJcBs7m1SUWk66QYcEVSvUrRAsPJ69tAalvzDZK4HfkxTFC1tVwmPN8gkJsJbVpK827XGsrnHwZutm1UnN7n06CK4zZnGPyPxc6DvPfjfxDbRD0z9QOJpFqCUBk8fZdNpyW0pghq79HPMuvBBLqHiEWo8ifCgz%2BHKblm0sWB%2B4vBMueIvZbM%2BHbI%2B5gdQSanPnwMpvA8VC9ijsXWG7TIZ4HuNnqdBQ3j9I9Ps%2B%2FyWSd4vjVT7uVoggOMgkPu19EE%2Ffch%2Bpobm23kKwG74WX3z41Y4I2%2F3JIsQtdAHyOUU4PcBP%2BAnyYSXdNgDdv58XFtiHbAo3Hspcn7ovty%2Fp2oi%2BQqVqBGipPR1hPLkp3EFyKXmkJixlEn2MlYabz4I%2Fi5VYUKE67T6xbTUVBpLKD30cdtB8yeGF7gc4gIotq39XbVsjasGGPqgfOmM1l3twzCg%2F7jCBjqkAdsKJnYS43LqGxlHKa%2FaCxi0t6CisGFVrz5JznOysdberCbQC7JrKy7GGu6wMDC%2BEITmDkfuxHbKnhBn1Mq%2FXhnz35VplcvJwO96Jkn5f3kr527rrXxVftyk7rMueV34RR4VwxZXt9k2GJ5Kr9TEKkTSQcqQnLmelfFC%2BV9oe%2BPeYE%2FY8zbraiOOX%2FbtLvKSSIY7Q5nnXShXgC1ggcOsrsnq8wQZ&X-Amz-Signature=f27cbcf983a098c288b32267d4d52da466923a0547fef34630877a2f513d4cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ365X2D%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQC6HYe1A02JHzx1zQ%2FzQEriL%2FjMj3wLgYpN4xQeG%2FzPcQIgX5Kh1VSykWxKTRdJo1yCCUgk4xMd%2F4bMlANAi9EAc6cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGDQHymBlbE13hNsmSrcA2DVgD2NRG35dKiI84lTq1sd%2BOn2Bhlf3LJMMdpiOqMT3YcMc2lJC8tQmoAoiNU6JJxsoDdHY3F0ran9F4bg04rmzUmI1dBbuWVJYaZ86FDPoPg67Pi%2Byej2KUNXOVlzNQEd9k9etcEXbb8ovjQ7BEVJKpHYuJv4Q1Hsqp5GqZnd2BH9srbRBAtfJxMXNrcAo3b%2FJOppRgo3ou77NAehLHtBbRcrdDLrFzNBQfm6adXLsZd2w9mlyQbHf3wXzZC0%2FQCCptCMG3kIfml%2FHFbynENRDX5jUdGO9nXVhjjgKr9xbj434lsIJE6ctMrEKAFDVxBDyhf%2BV2ZTUFLYnUf%2F6YS6gMeG4FaSK2t4j61HzAA4PKRfuxreEuRTeZmj0At9nW4mwajk0Btn%2Baoey85Yfz7qjSytpZndbOiuVn2zoVhkC2BM7ujZTdB1sXAhnBA4MBEF6IYn8kR97aRj8P022w61L3ivpu1iYHKiAX7UxqR8g9VC%2F4YkcLJQJSArIQW%2Fokv56TuQcqb1Bfq%2B1gXT444gKSVDT2%2F1AbNOCZcsWVDEaBflI%2BJEHy91s%2F8%2Bx5C3bOqzMOR9pjH9h5p725WYUvel0CUx7%2FIedLXJhl%2FbjWUht6TlrBuBQJpSrobbMKj%2FuMIGOqUBLs5alAWjcKOn5sua74tPWXWX3%2BWap8xJU0E6OrOpR3TLtDshaOsfKDrYG3KyYHfg2DNpJGMJO34DQBYmH0gBlbt40RenyxUk9uiDTzthDpdVxtfmx4FJreLD%2BJ17%2BI%2BayUoji9KrwooGXm4qIXwW%2BTp7DK9nKUl%2FJzLTSylaT8NGqfCRx9gf5bokcuKB1bNZdQgsadXik6trE9EBAOT%2FjnebZ7Wr&X-Amz-Signature=6539b8e13add387c6b51ce9a1f6fabc4726311fc6e71b8b28bb455512c503d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
