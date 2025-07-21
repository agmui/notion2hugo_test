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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUUK5E2I%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8lkctpPUMsDv17wa2eIw46zWbzRxpklPA8fo50dWcUQIhAMYI1s0tRpUE5yUCUPJYsZrh8yk36oiu7F7LpIzLpaAyKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz%2F4slyjK%2FEV1rEO4q3ANOC097oPah3%2Fzh3cg7XokPL1syTkHt7%2FtG%2Bayjzn08U3fmUq9s6lD1YHbFfF%2FSKd2bT71e4s%2BC%2Fo7A02w68hWKn4cYctkV6XuLcYW0eFneOCM5G0YM2qH1divoHsP8mcX5V3MlCLZAYBLQS%2F0hbehCpXE%2BmRJbgkM7hqthG0e1Pzk1Uv42Jexn%2FbKHyR20xFfbU3TlkohTbSO%2BTX1JQMLijRVekqBRJSdrzF%2FcsF%2FmE2oow8%2FgYLwAjYelphLGnhxbbbE9oQ0HmF1LIY%2BRqiKtWDMbKjlXXB28Js3YQT7hDcX1lrbLeJyfoPevtfcY4Wv6Dy8T3D6JaUxsVVG96AG2mbjxFNvVvPWn1XJffVAIzNpAMpz0SZTz2gDXoZ5cRA8LLLDkaeJTyDqAtpdKYerUj%2B1PIh3jvKn6x3GGBc09xT2aeGfymgrTo0olunwWkVPv1nRGfYAlAudSckVnvqamoTwUEncSYH140GkvWDZkRLln6UnxWkAvPcpm60Cf81qXpunIIsTINGDv6KJDQOG1s%2F0eGmen6WoOZfYPHgGWNRPO99KCWQM96QqmARPgL8eZiVb4zBi9o73NdPpNVoaW72tBXc31%2BGmY2n7StPcBQyH14R%2FUXuMmRRe6BjC3k%2FfDBjqkAS%2F27O6K%2FHXd9%2Ff2iX%2Fn3Bp7v5qEOtc%2BjdqjX0aigv73cd3KuImAxnQBDhho5LISKF1dzB3O5hpn3TnJ9YZWNYEvT%2BnuvmIkhkw%2FtWH11z8FjG0X%2BBBSQ8kOKEWZUkf%2FEKZtK7CcEN7eQta454jAG6Eb2MwYKL1vHf%2Bg2yohwLW2RmCVE%2FszA4E%2FtFoKqiDL2tw%2BGAh6qBP7wfzQhXdKPNN7eouc&X-Amz-Signature=38bbe1239c00ffb1874c3d86ec8322b6aacf1074d903e857797ef656ea6500c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VNZF4I%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFr31%2BmqVquUUzhcvaLOiLSdF%2BidJY3fuGYg9TJDkJqAIgFIisDXTQ%2FqIpYOdg5J3owPgkqj6cBTe0IT8Q%2FTTWxioqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA5R6c0B67d0tLJdQyrcA1UUixP9Up%2FsF4iqDjgfkPJesWRvrpWuvan1VyBlWPkdJAerD8b6V9zA%2Bc1mPMo6QZPzgWFgD74xLBnKHrDbC8RAxsvRViNf28HH1oL1xbza%2BBQPoGZ4%2B6UX%2FUTB6OO%2FuEGiCknlmYodCmB3TV9CUGJNmYhMEWQbHM2P2z4vlqr9kkSpW0JI3pmd8fHmjlD0bWJ0mE835xqIUdOgJP%2BJSNcoaRvGzlbQNJK4l3nA70KLy0wHaYQ9Ypo5E4bUsytah64JgoVMGtmp45YKQeMOoJcV%2Bh9oqJXIoM70z%2Fwa%2B1ZViq0vYjuKCIpSjaLwBGGWPujNSnLvJX9p1Jz2sARkuj2zY%2BWgusfoMFzj5dSCDGgtyuhDC%2BPMZRopbhIE79Attoj6p0WT2msgVuBYmYBZJVOEdAPF3b%2BaZ1x%2BOG8%2Ba2JPaC3zAlzN0uh9CCXYWGbBkR%2FrdztnqZiPDbGcopsxmXKTLBb7TRHn5XI5TXIGdsApL0hNko%2B7F34dYZG1pWLuzm2sQtSA8c7ws2QNfqABbbPUdItJqG7CXnfH%2BixorDMBHyEqoSx9LkdjBJQ8Iof%2BuxJGI10Ib1XPaOjyb89CKrOONKhmVIa7%2BZOSLM%2FqDgukUTsHmlkvnyz%2F6NLEMIaT98MGOqUBspaD5L%2FJB6miZls4513Bl3wjeO%2BHxcC8z729Uop4Bz2zugdDEpNq0cODT9eTfc5C0RtvSLNlWKYBLyhbhQVTFTAXLL%2BItWlPlk8tcaG9vN%2F7A9BCo4vIfIWvlc7Y1HNkpnT6xrqNNZYHJ0fuY0yfkipGIXE0f87Fk%2BNHQ0rMZvz3VTI7H8Uagqg3Ff%2Brfny8JTk8IOqyNAIK2EzaSMKy2pLhV%2FLk&X-Amz-Signature=e8d16d2ac6cbbb78aed2b29afa5447c4245d1fc650c262714d8f1191576185be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
