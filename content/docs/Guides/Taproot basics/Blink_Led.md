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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2HR5I7G%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU7ZNR%2B%2FkoHvgyUQu26IkNlXZiKm%2BARNfmB1qgjd41XwIhANv8j%2BQxo84so8XXmWnWkOzRZQnTGNgJXIkJwKWYUBeuKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BAKS2Ewu%2BU9caII8q3AM8j2eEG8JnDptX%2FOQhb5%2FBL8xzHbTyBradnHjhYGNm4uPopp9lyYWKLLPFUCk1Vo4UoZzyVWGIgZZ8Ip3PRRzYGbMx02I9nSFxR6r8tY4pWYkEcgCLYJwU60KlST%2F9bomK2qD%2FQP%2BWz02bOf3s%2BsSb9%2B2LR3Wt%2FhljXJkD25Lwom%2BBBh39E6fu2LPs%2FiPtsFf2%2FkyP6x5%2Fp1V0tSN2xbyCpoxyzkg%2FRe88Edb78dtRoNeOaMQ8Q0Nfe8f55jPNaQ5hFYDMAkwHQrueB4nQet35infRzZQH%2B8Pqp9IDodDB36Gn%2BMSW5bNWkIbbic0JhQ3m1lvkJ2mA8vRb85ZoNX4%2B6jPFqVurqRVVhD3CyMoZjXKhvzg91uSdcXHLgzs0OrFUloar1emGu1oTUdeftm6GQ%2FgPQM%2B%2F6MsKI%2FLj7B%2Fsl2bjJlykdTVUQvSRdCpG6VTzjIFD8OeGb%2BUImnA7IcDjVUtXbA5Z%2FOql302ndAeRGEsku2X2%2BFsgbbVGfg59Zn5E%2FE5qYE%2FI1Hxs8iMuGj75J3bXRLh1d5DYSZL6nZjOlqGJ41DzbP9UvfK0CsqLWAYGX7Lx89WwbYpeUhrNpH2pzQsofvjHzjyYzclo%2BnzWaLNdBj0q2PKRyc0%2FKjCT84C%2FBjqkAd8EQEqy%2BoGp8YcKnw68MFujuGeV1SOUfn%2FUpeuLj8mrvWBOVwzRNwQtO07ercq18SMbFWOmH804OkYJ2ti0zJsFB18Xd2xxjHHzqN8NcHB8eq3O2gl6x2%2FiplLkuBaPy%2B9fWSxaz0pWJ8Bp1XMfBQr6wHSOgEsuAXj7%2BLyhl63JbB6C2CRFfy8K%2FLFZpqyuLAMXiAszVdOeUMokZiw%2B7%2BJprv1s&X-Amz-Signature=a3291e3705a2215e804fb1191d044f82fcc629fb95951a17116d01a3d46e7695&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IG6IIUQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T170153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFg3GKFfvNpzWZK%2FSp%2BWnVXkMTCc1WRS1ChTy%2BwCH%2BxfAiAxtv7ucjy4S3iNIfISpUkuLRmYMTOMWbIhouc1U9Td9iqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFoTwCYqdnEThTWUjKtwDxF%2BDEA1CVz3XFl%2Bi89u7JMAdl7S3qN%2BD6XpBgfU8L8jflQmaLJxusuDKl1gPkS0Mq0WlIrQpTJuVzkmr5jVpCPrh%2FxF4CWzRbqc7KmD01UXos1I%2Bssyu9f0mqxKfNd%2FLaP6WXSNXg5XotG%2FjU3WMZWF%2F3pB6QfA4ltY%2F%2FykVg2PT0KAOaEwT2G3h3A%2BUN86dB1zQQ%2BU%2F1qy8TPn133vrdu62ctb3FkAwgnSI%2F3BW7yxQzGbivCAVG%2FKWALXJuRoxDVvcNu8TTQs2%2FwwdyuXu%2F2HfCzBRgHqmt5DqctRrqF4IQmqHUobu0F%2BuljNm5SHtlE9LdZRYSpbG7lUa8LjZkX7NvbYG3JIt9yLsuJnRd1BtZkFRwXouLEDYtXX4384ClG3tXINS%2B%2FM11xDxTGh8q4clvoWjpqxEbFmQtI3ynAGwxIiZqBe9jmXqxGLPLoJSMJcyqr%2Botj94iGb8x9TUmxG1qrcVu3x7zaXfmiP6ssZo1yA5NU9lEyYa4guFrGm%2BThn3ewdRePtktrk4VPGHVKPUJrYDWHdl5WfoZYMEcq1sD9AghmcsHimGnVMoJ7BgVF3dXBqWZ8e9xwqDv2GkhGqGq89%2Brs8Q%2F6cv3wHUHtZWf46A1nit293fl7IwxPCAvwY6pgEkrhJbiz%2FfuYi3q99fPKWX%2BMjiwXPA1OUNLjH5AxxFep4FIz8jzfjpUF7t0hYAYQuckKHYznOUHWz5fQOMw%2B68iTysuKsmoPej0GFqx5zGMV%2FOSL1w6NAadBbl8BixquOwlfjKPSmZI%2BcQGVZ5eLR3T%2BKkqNUihEKbkDC8wZGTFcKyjUZ%2FX3iFk6YilR6abJC4V0nz8q3U91AYFv4h%2FCkfd1zbYCT2&X-Amz-Signature=847cfcf5ea79318e1bae9976a5d447298504d16e1215105c5c98647a467a8ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
