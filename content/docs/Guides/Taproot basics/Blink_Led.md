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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMTMQOLY%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCaRd4EtUqSmMiDHNMdkJMIaaCzMDmEb3hVCwNFOeXJygIhAOFCKgvNCZBVqGNt%2BBVxW1a35Iwrh3o3M1lhBWIpNdefKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FMsXJhQ5tJxSy0s8q3AOT0nWfSMDVsGpYcaIUsAQzHVHga%2FKNv%2F03CHDnHrs2LWdrPQvzB4YVx6je4qIwnuC22YXTB4BSV87wpnzeTDpFMAwIEUbMbZcYjypjvcD%2FGTubpOMZ85bLzO0uFLIemqnJkICD7OO4j7KGspKbLNhzDSvNBj1i6VOvhqhlI3yYjT9KCTfxZeIXh2kRfvfUAubN5fcRsgf64Nz1pKCMs8lhRWDfRvG6ESDavkEVecO2bZFDclDDH0NB1h7VovpxdhEjEXcTdAqk7QYoCq14998CLLYImqnfhCP1EuTOjokOQZcT8SudlJqb65DLc1pnQAfMa%2BSPXgu5wFmW88ndkSf0TIPKB0n206y5b1sjT%2Bv4xzofdxobu6fzZD4PCOL7yRp8ypzeRvVM1NZtgyMgcCiJwLSMm8l33%2Bb8qyaDiEF%2B4cQwJ4kUOf6M5J%2FCYs8nioK7k8HBREDXvgCZXO6tn9w4e2LSAEiwURSsO0pG50e5zEavA%2BarzdPqJong9WqoiyjgdHMQU7wcUbaULPbPazwm84lryu3eiIgKOw%2BvjaQa%2Fnpnky74cbON1Ov1vYcKVQnWAEAs5Ple%2BiDQyVoymQPGNFeG6OETCQDCuLy02peaBq0tw2hFdKqAMoFTVDCf%2BMTBBjqkAYOyGi8zQLDvBraef0maeOe%2BzsL586GQcYZehx8LeNr0oNap6pqYeHBeo1bJMf%2Bl7Sn3GGCyxYJScBMiYIWC7nOMKBTighVoiX0GsTuDi0E%2FSGZQF5SbpuATpLUKYpdjXjiR8Nset7GkGr2N5Gb9Sq3cY9nW3UnEyZk22CZrAgOL9G8FlWa1Jrkw%2BZlMwlolca8y%2BtDer7JHNlchP3QJpKvka8nl&X-Amz-Signature=0d7e970d35757d74bcb2afb572c9668326bebdadaea9aacc978a71897d9c7e10&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZWRGZKH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCAoLMzNg9kxDXjgPQxk2LugmNmeYMVbSezcdKOuMzVVwIgSn88ozO99oGTs1xfiNrDGMKny%2BeQS2wN%2BsfmBkl0sqAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIuiA5xNCfIbgpg3NyrcA3QKqzken8rbYN8m77DSLjEOTGKbEX69p3hheZRmfnv0Qtyn0jgosVfmGrVQwFRkQUTRUR%2FVmwRKfABkFvYQGLklcsJlBvJJgLTWADNE%2B6k86slitCptQY1Wo78c%2FRROyOXsLpoPS%2F4c3SmGUSnRJWZe8IyxurLwIQ0Estb7qr44xToL02VbTD0Bg%2FTp0laq5aBxtN%2BdidaJjS%2BWwwjKI7CHUIUhh%2Bl007LS0Se8LV%2BGCljUs4%2B2EcuWQsC%2BMCEWBVUBXiwEa19irCiBCAFa9S6Hif6A6WYdf8I7YN72v%2FLy8pN1mbLwKJY7RgE%2FaC88MDACwGthmcW3EVPrpD%2BjPEd3A1K62j075YBEFsZP62daaUgvh1KUSpy6Kew72u66qDAHpdrT1rTqg%2Bhkk8f7vP%2FREGUh0xFdSSB3cQeqSAov5yspYN1H4RJPlYTI7LAlGdUT4GDoXv8eyiOhnWmPngQyrxK0zQT3nFcDaoNRQcCcxK0h9MzpgIRxZfkh3YBtIrEMDZ4vzC6xbQbcm56Qr6PfFH7zH02qg%2FVk1Yb3t7vXIyvHQ9nrwjAtr4m0Pr0yrjv99tBjx5%2BiJBLBC9mXBXZEUjFjkXw8R7mS6cKSP%2F0pUF4wLbfyqzFXhHyKMNf4xMEGOqUBelzO1pAOIJzpa%2B28d%2Bx2zG6NXqVv8ItuuyaU95D%2Fb36Xb8KY5ml4CMo%2BrlBGQ%2Fmel1rBzmQCWOLqbJooZccih7iWJoIV9VaukFjq%2B8izQ7lpfgomyd3QujA1PdSOYuk1IUP8LUewVIhiRHdsZS1YDumYQLsP6LV8X1oMj9YKU4TdollRUmgrkIwTr%2FpuQoonz39onbbqP9mjnB5orTYschSjg87z&X-Amz-Signature=55ead7970cf5504ca67f537fe8c8c4f94ce9536efb97a1773d1df556f4d034b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
