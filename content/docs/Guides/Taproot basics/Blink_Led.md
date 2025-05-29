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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P37HHJI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ8rFA9lbVypTTZCCZWrA8hsg1jBPmz2cY%2F3D7lJ387wIgSQb9TlIhhga3qaVLV%2BtwNk477iTkzlRGFAcvIAbyYjAqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI2Qb3tzVaWRvvWDSrcA9NATJbjabpikk%2BfEdR%2Fy9ZxJSOdbBCNYv6LR%2FIvSGJ4dzNbrZXkjUitZ0ZLQYM4MOK5K84rct7TZCkBsQSdDezp2mvEhZqb%2BteOdQq6AXIEEJGHwgcPzTEDA01FYQuoIMB7c%2Fe5XZngT5a1SsMX0tMe%2B94TxFft7iUumNvvQyW3Y3mk2aEIBJtwaiA7T2vphQ9YD9cEdY3fBOJ%2BF8JAWGdNXGLoolzoQAiSJRSZ%2Fji6ttlAyA1Mj1brgASxhrLHzUTdPW9p7PYRIhtK0z5qsiZSV%2BBsBRE3VTk7IQdN3BL1LEnYtGQPvYgslSUP2rs9QZT9XMRhNUnMLNm9iV9PkbdV3WYuTiWUmSJd8OH1k6hVeofrN4d9k61joqXAn6QYX8th7g5GYSlI00He%2BBVKtzsTe3U2upjLT7c3bjW9fXxza2%2B%2F5tAhmcitsBiIViUoLGXFYs6x8jmxZpIsvF7IElSsMbaMEFJIXp5Yj2Ngx8SnlSMjoboIeO3hRj8BmLelo0VDDlDHjYV2wMrq3CCs6rGcu9f3BhinvUEpHVyFuSc5aRddjqoS1%2FZpMAv%2BjOSV5osOHPBxi6wXYsfyePDFk%2Bh0%2B1vvmswtGXvLdy8e6ZwjSGfes88qoRR6jvTJMOiy4cEGOqUBi9LMo9%2BPOefW0PAq5BW1fRB70n4%2Bi%2BQok1fImEsYSz2WsAHixISPGdjOB6hQuBdNcADJHMeGTlRnMi7FMq1N%2FqeHYAjWoSj4XJ2J4BeVtNuIqzxotyBih0ZDXFl4OCsDhicIpjDmEmRipLo%2BcF6LT4vvG0PsLqNUkCZmAOyUMjKQ%2B2CA3W1UQ%2FgcnaNIq7VjnMgRnD2wpT%2F3gyNYP4gL3D1zc76J&X-Amz-Signature=4b0844f0a67a5355f631f6dd8ad8662ca27369ba6bc9c9c9c70596c1e76fc776&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TZU45DV%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXfeAcet4aH5LCxzPiMUUW%2B5faHEIhHXiS19v1XJ6vXAiEAmIejO0Dr%2FMrpYUZ5HUaawsjeQguSNFdqCNW1OIKlbQgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNEgeN7kXr4DAUrvISrcA5GRUcHlZMozupkf%2Fh%2FEmXXbZc7QCMs2Vdbt1OYW1%2BG5sfW7JUoV3ul9jdFZeZN1raDkwWtB5WVPpgZj8ZOzaWo5S%2BcMW0OAOgbF1Ii0bfOt90T9gC%2BN56N8bLNlLVAFff4k%2Beztf4EV%2BFA%2F2I2GlMZQtZgOvDd12sn%2B%2F7ro46JkrfVEmUi0WNGw2WcGw9WDX8KeupDceaSgBqBCS4aKNtEM62EyHhNkBI7zyXwcXm4ga0navKt27XHGjujUQVu88ppq4qHTIJEGHmQu6%2FcfD%2FcwJLMe7tKaSlgRutJKHqfdPeNL0jE3vqhH9pnUaPdOEMNPCtqAh99NvPI3%2FE1aQscg0nCXz2TuOYdmiG4soq4JseVleh80S1xBedx%2FMYR7XKqP8gSBDNhZrHAdjLTjN90mt98iaU4pqzRBW0UrH32SRd3v1FP4F2gwE84nALZxd8pUCDvqfLZz1Z9x%2FozlsiFiplwh1eB2ieeM1QA%2Fjhjpt1Xj9aPRu1fTOjOa3a0D4h84DT%2FfnY6DTiiK1WWRHds5VZiOMxOeB00rnVoCTpHUNH99VHza9kS4COMtTAfkDx8aAxyQFReqC6v1UTfsSa5NuT36olNnMYMI6xMxRvxvQhaXjX8tRG0fURvpMKqy4cEGOqUBCT4dLNbsCtaeU7%2FguExEvS%2FBkuxa6cogfQHbRhZmcfkcoLXE55w3WvpVLbK3C08GeQedZm7%2BoNfAFbxFiKE3vC9TiIn%2BTrtsxsplUwpFycd95Wwdr2HhKw1llKnGBj8xFlhWk8yFRCo1UtFJpqzdlRP9kBteqbuDxpHvRUktQWQRKF%2FHVEFEwgxzNtW2rXWt%2BIiKiEOnr6q5s%2FVQdlKUAzMt210O&X-Amz-Signature=31d5efad518d4872e26174853c10ce3567e08b88c8ca9e97f4238051edd6c2f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
