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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRAQ3UY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIHVYacC%2Fjg%2Bff6YA%2B%2Fg%2BHxG3LVtj6YpQD%2Btr%2FHH6ENMxAiAv2ensJNwwyNHO9to10ElGAKvbDd7MqRcmbap8zadPOir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMm03E%2BskztNeYsLStKtwD8dscGYS3QVfKx51zYOa5kfcM3F3nYUd%2FjRW2z1yhSzThYO5PgCLm%2BqH40BT%2BPcYYvcWinw7CNN8cswksYmc8Gl5OGf%2FIxLYHbN2MFQDI%2BCm%2B76ch2HwB09yPzwkOOL1UX4wccZV4EUmNvWOZf084qTfCMHVqDK8hfV1VwhnnLiW1e8g81LY%2Fl6fj1zsJFqk7r9YMWDIan3ojIjQUHbGfuncd9fNqbSGmvM5ruVvsHNrdR42Cs44purR80o3gxJ3oaiWBKahklcoEd5%2BXKHA5gAnvhv%2BvVO5JcNQGFJzyzrEtNHFG%2F4g%2BhKMKtKcvyiYO1SXLtbhf0aYfVcrvofg5S%2BCLN8JOgr5IIA6qUEQq6eEBBXFQsQ7IoaNhuP%2BLp3btltymobMeo519TFiv%2FVC3lrgJQ5t3ACkVWsX8RMogGNzE1ueKeLCMWCi38kltV3uoj29QAsTdTpFngTQhpCYBhWFp91sWKSnSXizqeOTLKNTy9Ssa56bxQgdwGPXBDE1RMk2iVSAj%2BqvJ3tDs21%2FIeOpIzMbyOoUtJcPJmDe4w1uBCoiStHrtncd0Q9Tjrh74eB6gUn22v18sfVjTszQrO%2BuTP%2FWjWSSlI1SPvBFabbsz%2BxMm6VDXc1OjwpUwzoqAxQY6pgF0eOM89TlV62pzbaBJC8dJKENCzb2kLokLEvgIiu6O4YqGBgwsDVAsYuFJYLd7JGkeQX4%2FPM20wLteuKu4FcZbOn%2BsiesOdlGH5VDsaMMOx1c4Vq8ipD8WCcgW6Nd5gOpHGxZF0SHhUnWd5m8mW6EMrt6Xvm98cky280vP%2FEwMKjxqoRYmCAHvrkayZpzNIeLIR%2BdOtkrIdxtVERdfZvaTKnbdsqwX&X-Amz-Signature=a80ab6183f4c57684fa82e3129045167e41d724330f332b91c61e59075e91954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OZHCBDF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDB2uRMPY7JmuLMp5n3RzZeMBRwKastk36IFVMmqntG9QIgMens00vXHmiN1T0PwqGpxijw6Es548JnG7JecbfWFycq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOLGuAKcE3n3HB9MTSrcA4ND4HAm0WTMjTYPMRjldVlULKefu07yXu5eSVk%2F1JobE3c8yyWg4ssmhmHGNRBW81i26jgSkPfPXEee1yRzYRQblNIH0g9kipcLUCQSzbeQY5K7NpyYL5e8V387qyArpwWWT%2BvdWKYZSIlQn7xGBVwDqJYlc4mkEn18d9a3lO1tdQzDbLt3sNXuahJYyeUZbsH9uQQrefq5ms13iwqF%2BL9eZh7eM7dAWCQowY7W75WY57CTzkJ4oN0G%2F76AQrv9BTuEkXUnVBvKt4CCM%2F5V5WxW2VWj4nQgGNLEYfxSs9ijyYnG%2FAalzj9dzrI7fQ94BA1vJWiP7UBF7ECxB4MH7zna1GzperLh4lb2aA9xZ6HhOuozp%2BxsUvMhvYKYlM6oEWVyx%2FUtgb%2BHlEgy%2BFKhKeLKtE44FUqY9szQy%2Bfb8nZDnNaNrtvrj5KkD842F1A1w%2BUcIpR%2FUhE9WML7OlhgUFlyjkwFFX2hUPTCY9UrgEaJLE%2B4nTiCTUdC10sjUevgqt%2BgLJ5klg848MOiedRRc2IAJBKLJo1OfVrAIC7Ng1gPOspUALEPIVkdwQ8o6SJi4o8lnh0Qc72hC%2FhqBpBTvNNwySmzNlK0D0CDXypYsJPPygXSrsvRuBkqr8fwMKmLgMUGOqUBNz6KQXRF%2FU4zZzgczhJ%2BZ8L2UXMkOFeAhztdm6ZePK%2BeUAyR9SzdDuUdDnCEnhLOdxY4OL28xeS8jaD7RiO4KP%2BUiH7g6IDvQ0hTFt6z%2Bbw%2B2ErvUlDj4VTjMS%2Bcmw7YRrEyvwj7CQDPYWuloRD8Lkj7DAJ%2Be7e3b93uiNDZ9sTr4Znii7Y1LuTkzq6Vy5HBGrzYIiFRaCWY3yGgqPxACC88hQdP&X-Amz-Signature=3cc0cd5fd74e6a210c88eb085d2c4b485f05c4c6ca1bd55c965813760bd0f54f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
