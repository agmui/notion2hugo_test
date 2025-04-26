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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJJUKGT%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKMT3XuWtF8h%2Froifqyu%2Bt55zFWZosD5pCIuHV3EMw1AiEA7RCVZJ3YaBkCLlovmSwU5yTywbLVXjeQkA%2F%2BhJzFjBIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDKkKCoEJrOoj4mKHkCrcA2pZrK0yQ2H75WGzFRZC6KhtJqnCmTt7eyP%2BbV%2FbYgSeRwRbeSlUu2KkpnFlK1ma%2FSK7KWtCyCIEDO1GBo%2Fv8vKUNw1AJBaiFySU41IPPNIh8BkVgx23lz%2BodEY21tFZTFbAUgQwL8C6gyy3FraRgImXPnot4TFefP1LVQ4W%2FF00mqeCV%2FKb1Ipvyaaqz7Xuwep77QYSWMZUZI%2BH4OnbOZ6bh3cSkEQB7pybBKFLAmJXPhpqjGtfDtC7ip8lVFUGrAV2%2BszqvbXRIaZ3luiJlZ0eedMJSYt5XNK%2F9YryK6c%2FZxuOWD6OJjazAMmCYxtfC5tHOfBrGtrmVtJlmkfveHHlu4Z%2BJFmtpx8uHcl8V3ZJ%2FTObwukKiPSewTrE3I2yhwsRuGkXlFnbs741DaLHLnfeYZI3pB4MPNXyR2wFGH5VovMMo%2BtTGN%2BeWz49X56K%2Fa5%2FWgsmoeC0lPL2oSF12XISoS5KsYNj9SrJdG2YOlqO9NplIFRe%2B8syn5sJb%2BcGdgvSADG1F5IhiUXtciuSBvtI9ezUz3rLDe6EGQGKwkS4LiZA%2Bohj9fybGhIpKqG%2BBCe4YcrJsED2RHJVXuZo%2BWy%2BdHW8pWILhXCOwOAP5cje%2FnDejdrVErYnGSaSMLndtMAGOqUBLWzPrvhtMN2zjfQoJ2%2BLFoGcyf1SrXtnQkd6DdivP1DiJ2%2BkOIuViGtPAyQkH2S4sD8NwUhurtIhu78fh3MAZJV9mUe0esbzk0kHyToqX0mlQ6ykW8NZuSI2s5RY8U6oMbkljLXwRk5EU6DwaIdAcWV%2BqP44qAEwkj5aCbHC1qpgJPeUM4th9X19MHS%2BIDdJpe5%2BdHFFq40yMzWgCd8LpWwk%2F8LG&X-Amz-Signature=85d6cc20acba5a4fafb52301a00ce8219b45fa97e5f448f0b37a7fcd40872a6f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ROKFVC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnUur9qld8f78v%2BwF5hYwFDXPgSF4V1RvXifh7YvenXAiEAiumRGSEN%2FCen2Qbn8Sb2NHRBJfHVpi6mfrIC8UjM%2Fdkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHXQXI7Hai0KnaUSzSrcA3qK0tg4lnz%2BQr8anSNsVtnXKNyURtI5ugoePy04taYmciTf%2B6s7hbvVnhiusF0bw14vNXFJt%2ByC2Q1cRAZEKAjS%2BVRcjrmhlIWj2e3oG3Ax2rHR5iTkCWGFMhKQYyAIMX7Edal3%2FFvMSMzIFl3aUFfop%2BP40nprN8bmdXlDchObBwSbg5P%2FrxVL5nX%2FOuV66FtPg6YNrbqXLbF%2FUgDxD7IaNWK3JE1E0VG8AZWDAE4zko3Sxu5uoft5mYaztmt0rf3zj9FM93N9NXOFGiIEu3tEy%2FnL4%2FdhLBuKek8rDL4kdw4lHtpf8iC9nJfy2GtDISAe2pO8IEv4SYb8fQ6EpbV%2Bgs%2Bi6KKkqq6cZr1XLejHMNm3KzmOMQnO5K%2Fjfaq78O0W85qh1NcYrcvOx%2FzjJX%2BWYUWdV0bsSYX6JvAZsxn0NoZJ3lJTRbekcSi7ESUnSjV%2FelWyGQegaoXsMFKTNOm3tvWXy8zC1mVwQUN3ix0AzBsMTLuQhljli0CU%2FkOTwAL9r2s0IWr4Z%2FkkXS%2BaQXXpYVC5RCsv09FcSi4CPhWwnVeze1yOs4jmwKvJPZTJOPQVzL6So5qiDlnYfU783LJKZJIJREwjbpiOwxh0Af0DBu18x0K%2F7MRjzHK0MJ3dtMAGOqUBFpPJAvo5Zyk77pzaDRCgC6Xt%2BJm8WmOhRDp83B69kSuASfUo8yOT%2Fr1s5eT%2FGFJe1YHHqrpGW94FTCLvJWarkqXNEcDUcJDWWo9cdCMvNYP25TvX4XDhU3BmzLL%2BIcIOqtMgzmwYDtGVHUwSG3ZtyEoBt%2BgkIeBcXl8dQo7S3TGhVZaIlLPWgdnhy5rPKqw0BTiTJ2Q5UfOvSUAVrpwuVbR%2F8hwQ&X-Amz-Signature=a699de89eddfe9660eef7636d9cf8ca0d1bb7c91e995a23000cce1604b5d956b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
