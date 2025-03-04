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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGGVBB3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXn%2Bs7eFucG7uo%2FPmcorUbUSTMT5guTGk6v1JEtNk0HAIgcbjjEyQYJdXMrxRijAYsRFyJxeUn7E6qmp0g6VgRyhIqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFl79eunTmvkThK%2FoircA0vFjmgGd%2B5J2XqOlMSds8YEG5ffa%2BvqK3UBmaJKWxNHGT556gsK4IHByjoTUrzXDoAxYMW3Pk2j60GQY9rZuTBC%2BcvyNiw01i%2B9hQZILbSIb83ImyiFRcqPBVh7ThpMLw1QVyM4x73Zoopv9ipX%2BxFJ%2FxI%2Bl5bQtGAudR0vCsdYKN6uMiJEPaxauVtlWNS7Vb2HZSQSEhZ94OC5bMQoZFsa7fieOA87idrIJV7MC%2Bj%2BNCNOOVVHmVYlgLWi7Clg4hhI8%2FcE298l8sYOA0D1qtbIvrw2JrKCuWIRWhL2%2Baoc504kisjSZB9%2BgiaWW01jU36hwFTlvMpJjyDZgPrGXYMw2QmMIFSzP87lMi2Sc8Mu%2BwoBtO1xvNQyG%2FLUN5BrEClqx79GUj6wyETtP8fwiL05RWdodHlxO74em8AgyKSqsu0%2BiNB5TgUwouSW%2FUcHbKEpQCeTCpq3%2B4EqIAIHf56V57wDfL3PcZadZpKQKxT6mrDU0OHHoIhT5CL1CW8Op2WIRp6rqJJXufuuadce3t6ijicX0642pmyqLV6AB6bpzsio2kzCaK9NcvtoHQCOP9zv1Lmw%2FZgCPe45Cv7%2FHCg2g5Ies%2FXUuG%2B30ykFIc8u965qrEriK8gL60vOMO%2BEm74GOqUB%2FC9fMoBDkwd7nhgmQ9jO1NzOl8N2h%2FTTQoQYMDx2OzAu1oPPYm3OaLqC7XoNeoqx8W8FRwImf1DeaIGgg3JWCG71s%2FZkA32Ov%2FD%2FiHd0Vfac4%2F23iS3CjNYhvVk5WeGyNHQTYlW5YwL8FozeU7XL7IwWClmW4w5qJQZZgKUk6kuwCr2rw%2BTmdPiYCNg8kVbJK8ZQaHuWasfwSyghGwmIBPWhiVcv&X-Amz-Signature=16c39737c8ffb0fbef4b067311dd39078eb0bdeda36c0f7e8eda80af8dca96f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RVG4BM3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzucYWkGj%2B0h1VxneQFOkqcdsYfdFIPjhCdLIq89VQuAiB1KlDtuihiZ60Jib5Dxg7%2FecQi8niNqgNjjV3GS26HKSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyJFpMZBkJ%2Fzz6jEmKtwDwsF1jVh1iDgO8nVyTZkPrc2L3zEjOVxq1W7ircUHXkxjcDP4jRfl1jQlfXlH%2FLkc5hEo%2Bm7OTxCF1HTTSHBDP1EgdhJLtUBho%2BGOdcOYe9XwHi%2BQTGSsJI4au07PqtA%2BLwW7k08sZYAuz9d8S2OohYE3fJWeMGc4pd0IcAgMck2I7J1IOcuFKqJgg6VAo%2Flg29PTRXUgYxPxhxPFD6%2BFmuA0DFEs8rgaRh9nC47ECwwVrkwro6dA6U6OhU8HF81LOrwY0Yln2VwL%2BayvOD5ERikLNnPjuZN48oenf4LYsc8sahNRoeFpbU0F3%2BcCxzVoG16DnFfpOWELEjL7FMQBJ7O7pzB3ax%2BGrDu%2BxBb8uB6Q9zDIzbAhvyJx9ynbKKURj8BakcDq9a8E0q2H9c362bhUa0QrhntT%2FzHbUxtNgaRzpNgqzRLzNfRIal92gqI5jrLebCCdP%2B%2FzwygjVxqssgfLikqSv6GmOCsn2uhtjyaUqgIihhZvdUclku%2FT7FvNC%2BouyG6lJVOGK2ubDDopVmssRK76ly%2F1YucPgu0MlIZG%2BI4x3orf2%2FzXALshS1sp99Pqs1Hn6mkqRHS9ZvUnqD6iKVGGgeKNnp3AFbcPMVizsDaS%2F6sCRKGZOc4w%2BoObvgY6pgEjc3fBSdrV6zWGPoq3q0otgQhF58gYggFjy71WY7%2BSYB0VAmj%2FT0hlaBhN0gZNoUdpIoTHZd9smivtGz8FogKNQtWFv7Z%2F2uc%2BEYsqp%2FLimtqB8%2FYLj3YhyPb559aMLD2wE226Y0NKY%2FUgqdzsPzdPc5JkWhMGPUjEtNzdEMYyPapnoGrf6xo3L5g7Sr1dBSWKQKcIIKyKCc150iwThodvHzhyMr2Q&X-Amz-Signature=89212e7697e6a9b8c6ea62b63f0d6084f81f018cc8f19997ab4cc6c0c60d4d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
