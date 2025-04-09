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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCXR2M5Q%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCICRwnEFVb%2B0RPJFf%2FUZRrwQclA%2Ba8VGm75B6Qi%2BOPe2kAiEA%2FEN4gFwe3d2tN6gttc1nMCbyK8QW7QmQ8Ie1M6b1C60qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2P26DA%2FnB9T1YmvyrcA10lAVz1vfimpSXfywAB8j0aY7%2Ba2No%2BjTdJm29QZ63DxQMSOFjaIKVFCMFs2ZE0XhIJ%2FNjexGc5Y7ygy9xYKnN6%2FXP09IcI4jAePFGwvJt6GSxkyYHjqXlDuEy%2B93APT5YxdeRVeMecti2hjcqr5PTj3ICxuK%2BHfecN1nlHTm0sFhkDkgpapOganDmWtzxUVpOUl7gjUW5AYWE6Yx07T8LBnhH01YsFyIYxlPu0d%2BhZGGH2irkoJMW3%2BZPcvW9SMiMBrVxqXcEodQkb4RUCuG5LGKkik6naXgK3EGrC%2BSXvMv3yHxRTVX%2FHvPM0ZZAinA5akv9rlKVwanCpeWFpjyaG5lB88Sh%2BomRfYT%2BJiV8ajw3eoh%2F22L6W2siX%2BIGmPRfehh7IZhTs0jrBdOqPKz5uazLoIC1f%2B1ijFoJZRvVxshxyyKT5frtt2JeuFqtGl9u3ZjfgLVy77sYkJWbvsZ7PjZXQifPKpDQKNamVmFS%2F0G0oU6jSOv5rcz1KGiFKrm%2BM5hBuYX97W%2BSMqbJwwosZx%2FeLmsNHS5Nma9dDYoAbjcuM8005rTzmb6kxsOjgKpALUKzFqu6sLELxVZeoblLeI3yjk8f%2FO9B%2F0tnb8tMjPOHeYA8Dzx%2FsJcC%2BML%2FI278GOqUBbCxi9VdtKW%2FlNqdTIHvdRYEktaZOHbqR2sKP7TSZSnAxuD%2FUARKtQdOnLezDWRI9thHe0PoTqc6%2B9dwNtgURrN9xplbb9dRfIZSXV2l3bcrsvw7Ho72NgUEFDJlFh24X%2Fs%2BqOmBePdiksGSbOCEgW%2BBa9yJHZsY3PkyX2kEFJ62VSyosxwyUH0eeXRy%2FTgDjiWiIDDe2PpKjEFbTkB3sPbCheKsZ&X-Amz-Signature=3bf7df9743e28baee035eee9a03da245921812ed06806107fbbc89a9999c4fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFH3TMJN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDNbnE5tjNNgQzZkUdjyY%2BrCboXKI2pzEkpIh3MwXrdJQIgKN1YKsl2SRQZrLvsZZX0bXccPmCaKPL1ksvO4wjM6wEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHKrKtt5bubK%2BCIjJyrcA4reMKx13iKFOWKnm%2B%2FJ5OuPfB8u5oppag2EEKjEmq8P7yxgRH2JMI6YdT8ONbpysXAILzoCKf63gR5kq3cKns3ImHKjen6kpo7GDG4rkEVK%2FbaKk%2FD%2FLCm1FxwFLTmB1oXxT%2FwETX4l1wOE8CnBEgFh79qzvFeBUvCX3eHfjTDZw2m1jW856dUAxIw8YbY9QtebRUr1iETmoSoTlZlfYaEC8dxgCbo%2B7AaOr46mJS5DggTq2p%2FFqm%2Fmw0CoofrAZ7EeJzfaai%2Bstdxbm02JqXD0MsQSKs5WEJGAv6QemII9pv1vl1aTPE1uGdeJhDuXR0EIJcoDKoTfAzOZcs54xzlnpO5oL52DlAwmeCMlhaqEEfBv1hlrKfQc1dVYKjE5XRjkLMUyiifnl6ciyDs2K4Wr2QWTva2FO2dMOpjt3gD1rMbEuiAI9r1%2BunVvV2tffSGcfI0t5K483rIbeJY6yC6KXrsyQjicxqxMU%2BjX91PQ5JApX7QJxO86QRJD32g8hY8ahdUM%2BX0E%2FU07Tsd8vEoXus8DnV1LiE3UGxgSkm32%2FN%2FJrnN%2BPFb4j3v3htuMFpOItFJHIHu7AucCar2%2BbXm3UHUg%2FuhfizM1%2BZ1XKKOGLkiPFpBlngwy60oeMMnI278GOqUBnvHzURYrS4cTC1itgbKC2UI5mKKu9qQw8r0IICwWQOQoYSG5Lu1x5GLigX%2BxFyJcs17dc1gTfGfryCGm8%2FJty6im%2Blq1lginZvmQ2K1CDt7f%2F2YdopWlpmGBTi4pCu8%2BohVMoR%2FeukcTcWF76xYq5S1IBHVk3s4BzSRUEvxr6TD4d20WoziIsV9BK8aSmEiKy7k5nBMa5DJnWbD63%2BvVkEWlfvHV&X-Amz-Signature=bf68e1d3cc59cb3938322d7bb682a8b655ab3f1cb8ececbb344e80708f7a57db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
