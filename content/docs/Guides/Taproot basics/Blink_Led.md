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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFLOKI32%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlcZDxiCRzCfOsqW%2F2SjdGOB0oGLK9zpC0vBG9VYTofAIhAOXl6QKuBmNBKGaxL3IU0%2B%2BW3n4PPeg5A83uzPSBwdlyKv8DCCwQABoMNjM3NDIzMTgzODA1IgzgFQcMaNpdhG1%2B4pEq3AOGMOr7NfKOZh3NPxKHHjYxEnxptNmFYB4rMeWvvnQObZ5Ca4rfmfZOj%2Be7Lj5CIbfQKu3%2F5P32tYf0A3yxKuY9RogsO6FGr4FuAq%2FE3fJl4DWDJMMjExbCDDl8kxVxWZPlZluuGzk6AIERB3vozxdXX7rMGKKSWWUcVbBCLMFwfoBgJUSx%2F0R9pGHP1ClVKyWbS3LM6RDB0A2EGba27S070Fk4SjxJA4INuaPc0ZDEwmxNZpW0nP8gRO3b6M%2Bgj5fUje%2F6lsnqh7ARp%2BehVcU%2FKh3X0Jtux5dWXlywrbnJ%2BqaOsCv0abe0I4bnVUB3jZNeGcuW9%2BP9qEDXVr9ect9Dah9SLExIzMrEeeW%2FdfJon1vHU%2B5NPCGVZrpUmVoCkNOejX3IMozrtS5m8JhHnt5OhaMFcpHaNxvpUVI6zGpP5fXt7dqNtmTciOkGYoctii4vq8a%2FEceXjez2%2Bbx%2BFLGF6zIX%2Ft9kcWdpvEBAk8p2nLh9kzJX0Xm3eK6xldkbLQoadQ98CtEd4AF7fJd5NyRG4tJsQPNlejQQLJVvVzVT0%2F9LJBHrHIvdBS0LI5LMGgSUadD6mWj%2FTISmY5ick5QmeFzOdMuJzr8Rta738PiKsIHvEK4KncR03dqVLDDn2Nq%2BBjqkAYII57rxzh%2BmFiTUsXX8cPJFV32EpkgD6oyTP435ChRggYYVp2vXu7rKA3q37FkusSOOWjP%2Fxs%2By%2BbvXfkr%2FbIEgISLxtax9nmKBiAw08U8kMuzKfFvR8xrSZ4BQIhiXSEuD%2FDmGJxWD6f27zH69Msyj4DLtv5ZUyX958w%2BAojoyFLZiftTtTZYpeePELsuFE4KdFKAr6EdHc0zgUJborZazhgjx&X-Amz-Signature=4045b6d258b60bb66f95e9f848133b0b5f7fe1544c0a0890b23a68f6753df002&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z542LWOW%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV%2BEFz4ZtTxLvYjdU8gJqFPVNdAe9N0WjZpwlNcgOL9QIgHWrHjGN2QDq97bzC3fBQvWR%2F0ptCAGrHUWZLEQQ7HMUq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDMdiWtsbhhhRQ0FLfircAyJFQrRljJMkdlakSoIT2Obnys1RaDxtLCfXNcNPaXw371%2BgZ7HvFrG1ATGsVVbl8KZpnBcSkg3P7IG8UK5Q3okfRPaQQ3UhSi4Ltj3uEkMWLuoFHEoTqt12u9MeaAYkSDgOtFUg5OjN3IZNnHg1cBNXfAIeyMLmCsERpI2r%2F8iNrJFILufMmoFrIFl9mTCtygcxAG%2B1v6sKggbRPmN2EbbIw27gcGpyxE1yhAmZllRZ2sgopBZ3h2%2F9yssoGxgbOx2GUXCBQI8LjwlhhUTEakN5UT9ixfyX9US8KlmlENAFdeVWpQ5brlRA7Ea9q4Y9vpoq2EtjHDQjaH0MhlX2dpoaLKfO51yamZOd6e6q47Ux5BpF1XR1hnaT06o0XpsnHHMmsHQtAtXyffR0qpkYegeK6xrwbxJ1NgHMavtkw86oYpgmV5r5%2BaQFLsRko3QBd2l0%2BA6nwpaGIAs5met14N6rR3tWPxxzUJzFwmC4wksBMBOQDPcjtaisfH2xb%2Figgt77y%2F5AecXQ3%2FtrVltBYkPo0Wf4aMlFskEmyP3IHXSP9z0nqBOwx0W6QQc3%2Fe01w%2BQoGSjOLIvtfSXM5IjYvyFxXmtTFLEN531jrlJBqSaifCb5NRGlJ8MEEQxAMNPY2r4GOqUBvMununVchouZoB4KaXDI0o40RJKtcYSxMtXuj5Azlp4tcJdNbZfZEF7Sl%2BTGP8wNhnBy44GrtbHC3B0tn%2FmlhKXP3cH%2FeiFMLLvuWzHjukYOT9toncJnzvLVSGaG%2FrRa3a1K1AQqm7NB6CTLTJyUrFXT3NnrxzJyk6NaEeEPGA%2BdLoOJzJo8IKzPV9O5fuqEQ16vxKQR0Lmjon7EQZco1xkzdugd&X-Amz-Signature=9805f8bdc3c8645219cd027c398e02a82a9aa6921bfc0f5d8345fac8a493e33a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
