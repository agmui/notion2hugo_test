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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P5NIKTV%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDh8ySw8Zcau0GLI%2F24R1%2FSqwU2NdAMWkQqUU9qQRypqAIhAKz6aV912QfwthRWVFmR2xTAD9vwt7PBzAqzD6qmRQldKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf6pWZa9cqJeokVzkq3APZmTWQPWQIfIxR8vsgO9%2F7A6XAB51vEocTrWAsFdSHJ7oGg1wONdAVDRPwvdFsDpWH0G0epOh24ft3R9k6y4jvavBcFfPkgZo5LFTBasiFyspTIp3XR32%2BVfWEERmQUr9OTunWguKLP1bWlrYLzdOC48y3RSYCEeuN6Zlvroq7t%2BnZuQjt2SofC5HWh9wcsHaN66ohc5uR6qcARRWO18CLclpbjNWyIu4uF3zHX4U4lv10UQN7Gv4G5gyVyzvXPwYH70CKRLzgOj82E2kaT5JsIaSfnr6m0XcuTMn%2BW9TxL4y6gluyZhL3uxpu02Twigpr7a2uNjwDge%2Fr4TU2fY6ZFuj22cvmZ5GADBfH%2FDr7OG6rfuGIs7pc2jZhKOEnojT3JmvZiWdCpQqHKC%2BmaR2IoryJ5zY4R6IJ6hnFU24KyrWdoLYO0P%2Bq%2BDqVuf9bhLZvItpIiUwhE9HNjlcrCvJwMB0CMQ2pWkoGTYUcCDaR4Hjj7MhvgQPTymuf9ut6YK0BvI8f3d18Tznbx45F8ZDxqL0ojxmdf6XtepTWkj6nomd7NUozVxGwGeHwIjkGSFc%2BFKbf0BrzIOY0XgH9uaHfp5aG3y8Ly%2FZ%2FibgMrY7vXOlAdl5oy9PTYWUW4TCoybe%2FBjqkAdRtV9MCZUzj3%2BYfJUIsDvexn%2FHJedDJsODGyYdc2HwDaMZdaWIlgg9y3BKZJC2wZmbqLAYzn%2Bkmw8Yt%2BWNshATlF6Ah8Q7O1QLbopDddXO%2FEo83scq2l%2F40vhts2KtGK9wOhOifEqXbs20W9JOgPwJQsbmg3X8jDZZq4WqlW2I1D4SbcQ5fX8vpuK2cr59TbPpT1bxkAg2kX2UkPXLmKS1c6vfx&X-Amz-Signature=9c19a953542bdb896652b009c61ae790bfaba5f71f9204eaf554b9fd7253edfe&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LR33UEX%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIEEhw9tWCzfYk3OZJzfdMzGRUVVmNsxelfDzphDQNUrsAiBsL%2FLaRIZO28qhtlznnlK1o2HBwELr52x73wpQKH1ukyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMABRaEPDaBi3arrKXKtwDlujIsxZNs06bGkhptFH68HZZ2zOn6LoCwaa5mhNbqTSXRRuXeuHuOFEpao%2FvP1di9Zeh4sdZXAhxSTQpATbAGNw7UriZr9Jgwm1x8dCb5EDDyhxxdNtNr6niZT3K1XiTmBUX4d8BJ8%2BbgvbuuotaW97OwCCJepbMEk4Q9jjTa9EYMbFlOqssWxRQ4rYRhipWIx5r0Vcm87tfKYtpeWeCWmyfwB%2BYdJ%2Bo36mIayL%2FrRoMWJ7lsODh5eRRjVX1YET6lWnmIjc5N4ktaySFbbmqkasHTBgIxKCohlhD%2FhcybEm8ylbai6RLaSZj68Cbpyq56jVIJqjDzdCttf%2FpjmVKFbs%2BxkZ%2Fs8wg8Rl9ZHlrU785FSr%2FF6dwH3d1%2BgcR4W4%2FwUrDQlRJrri7W0%2FMa4q1WDhkgW3r929PtLl8%2Fm%2FEtT58E5ucqM4XrYHj54mozuvCwCGf8uAhhME%2FUVkumMpZqjSBiXVKWML378fLNdz7mcTc4hZtefleMPn128ulXH5ao4C8NAF4701XzpidZbEmZzq0x%2BlL4%2BZtC%2Fv8PcgmeqH95SQAEJf0fjYZN9aphK19XXTAgkZS19Wh3x7UmLlANJhNDaGYaaeMDv8Fw5MVMk4V%2FcopE1MaEiIHwMMwtcm3vwY6pgFXz4ESDa32hZFVWA44XioMjgbzjbl1tSeT4pLst7WvugoHbngKiiMstbLEoPv1Z8o%2FmRuVrp2zfmuql%2B3uvxiTykS6e2ZVKwok6pu3frW4pTgdLOsHiaprZXWKiMgppNjf7FCzjvdNK8uc675%2FTgh86uy4gPzGbFi%2B0honGqcSZdLw%2FmY3ZvhsytPPovjwnNnTjsr68J4AKvBK%2FWepTNyFFYBu8EOm&X-Amz-Signature=71c25d4d56ce98cde5e2b0e4787c708ec733deb6b1f41a3ab0e64486fdbb0933&X-Amz-SignedHeaders=host&x-id=GetObject)

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
