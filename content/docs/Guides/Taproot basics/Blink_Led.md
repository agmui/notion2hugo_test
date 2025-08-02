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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQ2O5CS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLNWh%2Fy6WuY8buZuJMo7oAKVF%2Bws6GDWdIT8z8jaetOAIgCpfn%2BUtg6A6bK8fZPDkulRVs1BZOa1Tkikuv4D3DBfoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9i3la0hDWGmtDN7yrcA%2B3W541va5LAaUAEZQBv3VFCBxzxo%2FVByBujudJL6hh6N2%2FKL172Wy1NdeBvDgTvRZCCRGhiVbgkCmHrIVln6W2S2z1Wqna4UXeWI1pkkESR57KwdTdJIw0U6JCx3WXFGP6GFe0DAhpnXzquoW2y%2BBNWJgFK9Wipn%2F9FrcZuYQTAgtEluXG1qpt6msEbljwjvO5NnKw6Sm1Gnm8SXU38T5C6ViQkWUlfDw5EYCCYgLeS9s%2Fk6Fk%2BeoqtXW8efCEbdEGjVDRMmSNY0pfTYm%2B9rgQCTkB7xG1a2%2BQX6rfxzAF6PDCQj%2FcyXkhpuAq31QywJn0z1obFTj7pXWzDN0ZYtwjgTp6ERR%2BmzVy%2Ft7I4DL%2BP8yS7IrjtIzDATPCaYAswKkredNiI%2Bxim9hE%2FMvdRKqUGmh%2BWBHKdZtjxol6DOvOjeaJG5a%2BrkyIqAyJHYbHaFxu1BKQOErgRMfLLF%2Fg1FlAFw3fUDcI4TT4z6LnxMI9SAucXY4k3yBtjl2Capdnh8hZOL1XL0hFG1bDHpryco1RcrZ6cSgQeBHXJZB6pNDF9E%2BDjPaX8xFVB1VlFxfZEGnf3Q04lKv%2BvbIPwuS7%2B2O7rI6wJW2L9rPYVgnvFCba28nx3cs1u%2B%2BQiyJsRMI%2FStcQGOqUBj6PazCIAOC1j7rQPg6aD2d5bK0WHKTonsE9FdvzYXtTSZHjpusGdFS%2B0ODvWesZEduuw1f746Ur4bqTRemOz4o5fHWddMet%2BZQ%2B2B7J3Zw%2BPMZPc%2BXzKT34Qto2hzqzbq4PEOTr0l842%2F6B3PnoS3aK%2BpXWP3WBANGfNO7gL09O75dPRleXiRcYNcF6pqtC6Qc4K0ourZfuqvS5%2FNVoqJ5lZlxtq&X-Amz-Signature=6b802b68a3fb52c21a52445ffc698600e459e850e00f8ee42cd08c45d914df2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQSBSPP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T024604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyT%2BwWsmHkOGEa%2BHC4M5sGkUkJ4DvCQnuOMcKFPWsfnQIgRtVeOsPjDlzquhW5Wp4toycHgryeq0yiOtFU%2BYYDIGMqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHv8f8%2FyVUdCUKZNzCrcA8R2i6RWQ7eGAwE8at0XqE7r3it0tk%2BOmIpCKO8PHOpiKK%2Bt%2FUTWZ%2F%2FDhWHDyPmlIVZZRPlFM8k8XayeUo5TMv7ce%2Bj6KOkqQG1KZ0HDKdV2qBXK1yoNy3N%2F239ImeqCTd9Cat23QhQ5FDxsgbOzt7rnDlIYlQ4n2utUskgGNAsGCU7jzYVJz0kiR2l9uQTuI3fUE1eBXs3Z%2FpxmpeSlFPBxpih%2B6zwhqIt6oq%2FWIfiHWZaJl5BmfyLyIox0dklgkejddrUCZytZk4Qcy7rwz72BS19YHF4l5PTHz%2BRcYMajgWWY0xNN%2Feu8JeRKxWTSwnv1W6LviqtVR7bRcIsYP5u4DZPfe2%2FAg%2BqXxUXKPZA9AdKo3311dzX5V04ErxHfhLHd6TkzKu9YuQbNN46dMfbzzRXUGYAUUE44TtwHFMK3sgfAmBISoZD57y3%2BrMpyjEg9039dhxLsV8B2na8VMMleCjSsFtY3bRhaPJIObXNNrktl1ENFmf1jeJ%2BIweI%2BQODCPzXOoyO1QA0ZK%2FcjYOCBjACOhIks4IY%2F2s%2BJ6a0q1gzCVdjWwSHmxCq03dl3oU5OTKR7h79WcS7hvwF895wCeERglwuFgWjuANQkaAyag2MkEAHJexjdBrCUMO32tcQGOqUBoQSkoLgBB274aiJFFn27dqDz1OBelU%2BuJexD3oJEVaRhTk8nAPtsLZ1qvS5fh9K%2FKWdOUgsS%2BhN5He1dGhb6UnkU8vBhcp14wejW9blfVFT%2BYL%2B57jpRbJ9CnY2q7H0UUs7c%2FQoXCldymJ385tWuZKgfDwHGSxnQSQjQWlKXp85so1uUbFY9ASEu6qaQVPm1FSLR22%2BqSNWrw99TwTJk6OgrCZM5&X-Amz-Signature=2ada160d33cc6731711564e11ce31294a4e193e147bf9074f63a99cc8c47b52c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
