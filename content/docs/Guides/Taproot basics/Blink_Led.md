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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTHVNG4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIFrBaZIqaFFNjf8tGiEMo6mcDUBz0I%2BLv%2BMJqy4gkkgJAiEAhTjEH%2BTkh8giRKJaEc9VHWXHPRUKSlfGrbz65%2BaMDuEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDA%2BcCKTe0qRdf2UpgyrcAwJqtn64FgdxCjwa%2FuVpGa9zT6ohQrIOlf%2FXTrJAipWSEWGh4vYRZ%2BuCImhkTfANlatqCN2cBgvEbI8JD4S02%2B0FW%2FfmczrxqUpT0zxC3J97gTax2OGri0COS5ooetdZdZ7iidHLff1lkucxvxJeF4c44DnFUV1l8Vte9XGJYfe4Ion95RVnDbJ5TEMOa1KegBX%2BNA1NqAlNd3wVRumgTwygbfOGHM4E06vfYIFflUibnGWMFBdyUyqaahve9kZh7XXZoKlFtO0IhTP%2FcrZvM1J44ohptdLztp2g2O05nEuJ5apn7t8v4m6T4dhSO5w%2FVe38EC1BPbbxySIXrx0JMEg6CvH%2FbVb811f74t9F3Urcs59tn0hV3YOJ5p4HigN6L%2Fpq520gvz4AH8uWuJjmrNioI2Z9Vni%2BNLPQACFEBTlRGqnWb6Ir9%2BzkVEn2U2IH2tAGyG4aTxfnd3RE9zDpvEuzxpU02Q3be6v5K%2B3KM%2FuA%2FThGKAuBoPLHqa8WHh6W0tV8fw55SiaIt%2FPxJ7pSpjis63Tp1bYdntGPvc6T47Rp6iXi7G2n1cJi6hLQYSDmqwY6ashOI6t5DeqIQ1KOR66fajjEFvwc1Nz34SDKP5%2FPPpBD09QtqiPsXne%2FMIv46MIGOqUBTKWmgY4Je%2F5iVuzK8gfMkDoYbP%2BM92gSR8%2FAbc36yG2NiLKSXqZaorcqsMg%2Faj8NX6ZNNKPm4lQ%2FU8PXFIttDumUOx9wP1EWHD%2FFugHiGeyCVtGabXyyROJNtTzVqBNFU7bLWf3NKoc1hy8qWFVxK%2F0lPjkMnr0jf6TKBfnURl3qMGPDqIMoN1kd4DBXCV0wdF0ygw1vtcjB3mkxmk0N3nSff5UG&X-Amz-Signature=2da64871578e15d823d5f2f1ddb994498fe72ac83c6e009b64ce5aae883b5141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4BBSQJU%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDg%2BarpvhVBHRLiGFZGUGDIl8%2FE92FTMMOFRHTnSVNZqQIgTrJNKQC%2BjgaM4XYttjgO6%2BzBVSUEyX42J6KItyM5DXgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDHDpn2XEexPwLMQaYyrcA6rDgwG6kElIt4uhnaGZX0QNdYCfzGNBTQrdMfzHDCXB8KlcPaRNG%2Firk0ow1kekBzZyNPJB9KgzWyKSCWnaWHb9n6SPK5%2BAYx15IjDN%2BzRbQ%2FDYrXXqbKU7WqdwKoQgAlJPbkdKwM7rMIWFDTuzjRAGbKzDjF3PZ3fJrUAl%2FJ2ODDi6pLvy7EUxTcCUliMJnlu1Ef9THhA9qT%2F5FL731f34PvokcA4AzH0vmLlG3ZAz7xfzNqFB17qY9jcNXgZuhWLqaXbYFq0HE2QlJzydiikRVkx1t6fQ8tiNBGNN8z9LGjzbv8Njm9qQSUqKr9QRF8oCV%2B7HQgQanOnsRDf5u8g704DkLf5EwYBK7PUebvWL6xfYBA%2BC86nwPA4iujAnSaemiRXQmukTInsgKjx5YreEZi1gCJJwbIUQpum43gVxcoG6YboNgQCuO3ddI4Bhdeds0JD%2Fe3JtA9nk8MEKGaZGggkOzQ1DvhvJLmJ5b6VglGL9eV276BUxdhWzSeylxRo0cQzSxiWPOtzzJ2%2FVeDAkK%2BPCoaVQ3ZjTdUAqIwqQE4U5X9BYtGK8okbAjbeZWMR%2B%2BHso6t7QLmHaIQ44Ld9njnHeri5ycpWs7zCbwkwJ3L%2BE5pau%2FlAHuuzNMPz26MIGOqUBzo0N04ujVIEkdjKrLNkKKTMLZJNy34816A%2BHQ4CGlkYWxk%2FUFiJQIzsOW9Uy1FPRRWDSztLvBIL5x%2BGTqA1aqe0R62mwIbEwHwktMzpchWXbSEq8V2YDpumfiSYyvgmWUqXb9CAw%2Bd9sy%2FV6PP68BplCmYKM%2FVYKyNmGrZVcVJhSMHlqCHuDCoJwflDLUWMgTUrYizP7E0i5CLICAa2qriX%2B9%2F%2Bn&X-Amz-Signature=63dd6d3178fd0bab997cf39c1c8576f2e2b02fe3cae3ad80a59d61af2e319b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
