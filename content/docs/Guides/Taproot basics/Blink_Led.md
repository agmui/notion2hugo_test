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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEBXDCUV%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIE0W5C6m2Yf33VzhSe8oapYYfKDyydehOl3uxeA1dbzcAiEAnMDyEY8n5VHPk1olPViXMT4P%2BmtVAGCXpML9xndwA7Yq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGxtjyQW8pVCceS5BSrcA7ZWn5mlAQKOt5XHAQpxGRrFtj4iYDCJYc34hZRGpaJpcok2rx8GoF1uvamA3PLTZkr7cg%2Fi63K9kFDFQgavapqx6bi8%2BFSZfrLESUT2RDC89ET5Kjq%2F4Key6UvkQ%2Brin8UDl9CVrC%2BFJwS3iEtbG57IAqYxIlfnjdvekCK0DoQ3Y2j7iMX2hkhIufg1fIzjE3FeqSE7kW%2F2LHSDdCguUu%2BON0HaEJaxOrG2YFXg7xkZCGdNXlqKgOG3KmaIGbRcWE582x%2FJELm514ZEsRVudU5FKqcwY5kNJlko2oEu4FwhCxJUzV57N%2BEnemr7YNBS1qHsvRPo5fTZIJHPSRdkziSCMaKoKFt4HWRGRT2jKmdQUz1OXtd23hYdYpGyXfJgMiryZf5lSbRKlZ%2FulLvvlgEMZ5aqxegxrcr1%2B3BDl3cylTccnta4zI9s5TuONhxBMEJV5UeATPJANVYWKrxI6YtxXqJFqqEGoKtQw05MZUA%2B9mY02Qid2K9S6lXsCVUpZpGkEPC5meHWMd1Ire%2FriTVk0XLk0459U4Azn%2BE%2FcvNHO2V9vAtEnDaiUG9OuvTruZQ3QN2NgR0tpVgB3yeQpK9FnWEuX0mvWPdBxXxXUBnSzXmR8bcpmfnzRtwxMKbfgcIGOqUBpYCfXGzklLqrbgTcIR%2BJO86WXqOMBuyzZdW6kgxy6QzLYzw0RJkR2YJ0bwp7pIEV%2BpRqC5vMvxRhJw1LWykbMINxKUx%2FZbYgtqzbRM6MHCpu3In7iBa552axolGhJLHmm7%2F973HQTTtxBJtVGvMYmQ9iTs7N53Ug1FW9lh31nnnxm766LC5HWYKKhUZOGdNmjwElLVtyS0JjYubPsrwEXCTzbgnp&X-Amz-Signature=c7f2fd3ff2b3789c23443e58385eddabe59d83e51fa174fb255ec99cd1c81f97&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYAYADMM%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCm8DgVPhZSPLsca60Nw5cVT3R6SyjySCRxWZLcHvV73wIgKCWFvWBgfA4NzM2CgoChPdi5%2B1d64VsFvUfObrvw86gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDP6u482il1lWNaSR8yrcAzmpkGEx9Ow%2B0%2BgKWjW1lB2YS7E5dWRzFBCQXbVVfHF6YwX21lXCngRa%2BKODW4nioK%2BsSl94sajrqI0Me4vN3ywYQinzq2VPa9Csi%2BXuPWFMupFhwi%2F9ZHC%2FDNvXXN63xq4nAJk%2BCRayQvXXd%2FcoA%2BxqXSVVRtnlTIWbPy2wLMob2ROAJh7N%2BNMKWiDK5w9wQg0W7zbF%2FNZkfqHFSDZUEOUGhfpWLOdhabRiQM%2Bjh9cnbCMqRa2tddzcz5tPcN3NUPNOUOYyXnIZ1%2F%2FCfHYo4NwAkPTgiM6%2FJMnUTGf%2B1Tw7YcfgHT8zLfrD9O9FbUSYKAtZcPPAHGlOy7dBloXUBCPYIhacpi8QnU6qFm6WQDJ0%2BdohnQXRatNJx251u%2F7LnLSYQEqAqR5WJ8VVEkmWamfirAYIHgG5x5%2FU7kpHhj3OWkAKfFljYanh2C7S5aFRawZnZW%2Foa8f8bKQoTC31EicKUDjpCTPwueT%2BAkZNCCMPUkVMybvChg%2BJ2E1XST%2FSWTW0EQHQzNRHivHmzWMbnAilUa8Das4NUF6uAspxawXr7%2BUAkz094jsZI0hN2t%2FMm1YdFYzKGDJk%2BhSM3ZY%2B%2F62haLXFGgjKevmSkouNb975wIusGAecc3HSjemUMPregcIGOqUB6cD1LP%2BF9%2Fs1CZDznQw9dqjY8K0F%2FX1YZxlxk666wnf%2FoqlC1s44u3NG%2F1TRFIUIy%2FiDfDEsWoPPUR%2BcytPZbShg8Eheers0AOcpgydBgsjZE2MOAVxgW88kfsbTqKhjGRIPYu7eUF0RltO%2F7uyjWiba%2B9k%2FKpHXC1OEf2ctyMotluXVVFAcz4JCGPKcxQ5JbRc8er0A89saqjBZQVDmVISBtk1U&X-Amz-Signature=83e75b8455f016836c83bf0f6030f5d3ec7dde96e91521ca5ba8ea6748814697&X-Amz-SignedHeaders=host&x-id=GetObject)

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
