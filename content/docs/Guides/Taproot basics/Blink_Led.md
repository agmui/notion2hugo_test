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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO3ZGWHG%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsvBI1SPsFBHOFNynzYYGpUUod%2BNLMVJ446qyONjlm6gIgKdaJnNng85GxQrWUyyYQtt86tabBTMtJR2ou1ivnlyQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQZXHQ8j3gI2vzo7SrcA%2Fc1AY7BIMRnSyC6HECqGN1x66CfZOiKmbsblbSB%2F6X0yzDZDn9ZQW97YCruHaHfskY6KpUFCu2xONJQlB99WeF3KS%2BsuHOTHJgFQA3cXLPwixSmbLr9y9Rzwd2g1Y3VU3vpwAmMGYVraTSx9k5WpNS6T2jXYfJWjQKV0lE%2BQCaInfuSp4sWBnqGe9VJLopiXy2QIco8QxK4p5IrBdOdqNvVMZY8q%2BGZ0IPwH5hT1L2V7yffcV2NHr3g4NpF89zzYNym5Z1S%2Bcz19CBG%2BFZXZoT4SSDXgC6h5s%2Bw%2BKktYKh7jwmWgS%2FKMmtyROgVY5w1gwkH6PSXCM%2FkrXkNYaaoR3ba%2B9LlqK3Oc%2FpNMHTUjOxPHpFigQGxcinmeZaJ1%2Bc%2FOb%2FdPE7Gjzd1QbSMxxnRoaR2UvMXBMwFGyzbv9Jc9v8DxFVaQaflj%2FBhPOuU9bV8tqmCu%2BR8vHjgvKN8dl6UpoqoUIpim36DMY5IEAEtelSmAe2Kp7AlMvkzj%2B8Lgf2CXSNa95cj8KNAUTypZ8Aau5jCHrENbWrENDBZGbf84%2F7Ta4KByfateTdot5USJIRTzvVqEGY50J0AaZIjmf5L%2B7LuOjHzbBqUXXxmOJiDjiLRZBJWt2nlhlvtxxY9MJ7MyMMGOqUB4RvcEuz1YU7BOwuAAsShGkWvmNNIza82eZSC1QNvlnEzvQ%2B%2Bw5hP3RmLdt5Ei7MBk4k6mDOqOn9zMGbgSngcKqAZAIiIGXL7JkHnpUTRzuRmwv9yXVb8BlbVNtDV96q0mFNI4nPsmyRP0l2C4jOvEGM02zhgiSaRCK7f%2BAhIabNpXe6O5wG5QE2ZVtHlr2E2xkiDnwxiN7rGbHHeMPK9BKJ%2B2NHt&X-Amz-Signature=d8e6017f772cb325837d14a98ade3942afe407ab68d8f8ebe1a71b97abc14cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ASF5FR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBDZAwZh2HYzmbCZMW5GkgPDsvBLMpAt0rrp4drzkjrAiEA6lz741SnqkFrxOgL14giovlxKVdL%2BNLFBhoD7oasudUqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRxmzxBvT6wWaGQ6yrcA6%2B%2BiNQ2Iyhs5YtxG%2F4nq%2B6or%2FsJG2RZY3vzDJ1Ss4h%2B%2BgAHfU%2BwTadqUVujDa7C44ySLfi3ujGaFecu0nHqinjRMXQ2yjK1huutMg5YbutQIyqJSiCqhnPZqcUbUDQifcfxKLVnUzg2xTv0gNlsADpLw4WvvIrlXMaCum5jseJ5%2BHoINEoxySXncqcoU6KZsBAOIsb11cv1dKctHJjjjNUBglYQvAebSeD3MxBuj%2BveXohrEXE51tnKrYfG5jGR90nM5ry3vYNfTXL0cetmdSE1cd%2F%2FzReumocGdVBZkBlcZ5GM8POwl5TrfSiXvWv54rdU8ND4aIaRy%2FeC2NPCVH0v1ZQVYT78cqtRI5%2FknReHHZvYjRY0sWuNYk371UkHFhEH5N3RX4BmzeHZ6%2F8HC%2FeoSmn%2FAo8dW5OxkpE%2BSSrhzvw3HQUwWoa09hBR2qxT1gjk%2BqNhBlvM8lwMHir72Vjwq3D94azfJSJqov8AyxEMH01wynbtZHLSThrhKdx%2F6J%2BJ8KP1zR4UkrTr15rzk%2BwUQnXVkt2zCSwABCAN0HnAfSmTDfgZGHGq8C2zL8CrwPkRn%2FdbcRFJA9Wd633oqvcmF57HGdXrx7AxwAT83ZE%2F5sVZ9BZ%2FPufm4W6%2BMIfMyMMGOqUBOEJ1ugHL47eut1GbI0%2Bs4%2FexEzhypXNaHjjA8kzK726VIChf7z8B9vHpemlqz0c5mg8%2FO5PjDADVJNOkYzyT8ZTge4L8i%2BBgPgBEgsHIzDOaxeIqMBwCbE1HE1G03PmwQqSnRosOeiA8V0pVmDonpRfoIAoSTx04E%2Bg%2BfLnb5B2%2B2b3qZ1PvifH1CXzf7dYPzlqN8JwbNES9r7WjJjm4c1nr7PFu&X-Amz-Signature=58585b9b2bd9af3de25f6dcd1d500beb3207ed152c77f795312f5afdb06b6a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
