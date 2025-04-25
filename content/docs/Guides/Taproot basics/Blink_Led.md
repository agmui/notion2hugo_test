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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3WF4K7P%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Z%2FQal6g4EvPcR9dbSgrRo7IkOYWF7l0s%2Byv0lY0WQAIgI9%2F2tduFCDSps5nAyIfAolLx%2BkjLMJd0w4zISlbXrUgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDIdG1riKOiA4DbF7ayrcAz5TseVLFzyVuv0x1ALufOp7ZePB02e%2BMJe262Utlgy%2FHlST8KRPG7ImBVCUByxWgK7UqEo43WacYRh2ykp%2BMrpWKhitYMuIenzdU9kWLSJ58j9RQKY9n4Dq6%2FcJqtfzH6Il5JyUWxpP%2F0NbO%2Fx8tLaUzQbtXwOnJbZirpCJ4I4bZhYSSwsvdb1jh8g%2FoTutgTp%2BJUMxllxfYfX0XbiQbCc9Y8qCf2y5q%2FSp4%2F2kMH1ZL%2BzY7hgvLoPJPGtv5fbmxARn1GxBRsFOzMFlVlNo%2BHLZI7vDgH4XmcxI%2FQ%2FubKtkt2GCUXFtQhibnsZ1SvbhGuwfFlssfeb40vNBAopo2NRpOeHoQc7wj5j%2Fikg2o9NfUC%2FzI99yWWYZNuTaAfvspKjLWLQiRp84Z2ehhtDincysxCsKlBmyj93tYG11BCT6cuhKKaoewHGt%2BsQf48LnXL8%2Bb7jj9E3AZ%2F%2FGA5dCZ13K5nwqaCklM%2FbrKReGyM%2Bca0unR%2F2MSjhY2T0u71ITKh1cHnab8SM6flCPwa2xccgKjfcGgT9RU%2FBnugbkGdEbwLkgET%2F0Dx2NdC3CbQhuLlSnwzHkoQH0XNSwT4Jh0bNfJgLOp6O8tjb%2BUW0hoMI9h1WnpTIlhmvVxZo8MMeqq8AGOqUBH5GgYQmdiCmP%2FdogKkXQzXj9Kt94tBWkIUm4Q5Ns2zKH9P3iWedSdrArrt%2FHgCiN37lefYR91sg43Z7xdz1PCyJJO3OBIRLcZGPG1UpmP6fjHGeiysdLP9XtV57NleS3xBtYzHLMkRMjpkkfs%2F%2FgAtyw9jb1Hv89I4GN1uQBY8cE7LnF%2BOb7c3lP2%2BgKb8ZcXzUD6Fj0pZ6ChMZMkGpbDTSAwo5D&X-Amz-Signature=6a562cfbf5dc578fc8b24d73b65f17a1e89fbc4617dd4a520b4658a84374a5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH5ELZVV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T004010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoCzLq3B0ICxXxpBcnqFhLNRGaLFcZvAjhb%2Fx8f%2FxjqgIhAKOu6SeYunp7CFPdA%2BsqIPrvTkhnRY3YEp0Yb1LYFRmMKv8DCCEQABoMNjM3NDIzMTgzODA1Igzz1pvGOHw3PgqCd2gq3AP%2Bm93xjBHKaR3eBSZUyXJdoR1SNgYlzSyt9cSG1S2k37pRjCFpYdw8egNqFQ8ppyNqtUtkPPynKrGRDPdnSm9BnB5BGjc5N4QbarL%2BZYXmq6mUIUJVXcavW2%2F2dBdU6EWhzyrMV1gY8ITnhkabJKM4T7KMmkRiLZ%2FNXq5LgBGaH%2FOkz6qM0N3f6jeh1zdByPYnN%2F7%2BZYKXU1reeDCdk2wrO3aMCWqk7%2B7V0v7VGVPENqHoXKdBO4Jvx4sd2D2FbRfCcZ1vX9AxYuXH36w9Lm9LiGak%2FTS7I%2BiNGmzCnoHrPz4JsUWCc1%2BciHJQpxg%2BLCcbMSeUC%2FS7f9VxwHxzH62ey3QUh89wmjTXlSfMCsC049FTjVauC%2FtggfQvONve7EF9XfMU2aBdfsNc2eYzH6TwEX%2B%2B81pn5rGZumjIzw6V1t8%2F6NcEhXvFuFigYmDPLOw%2FdYNVTuAX9isZKcQfkZjGvsiJdHscOFE5Qii6J%2BnQn3SshvMWwBmD8K2oKMJirFRxEcPy4SmcqVVvHtc8oZMbPixqAGP6tl7ZgvKwGbPPAQlx1ji77aPtYTyrXYZHdWXUyAAJ53eTChRJSDsKZjyRinjI1CGxKgFkbFU9tRq4l5H0dBlLFiqD12CkmzD1qqvABjqkAWjZin%2BwaGPO1xl3bzGB73TkkVzFSUf3rDkfz9Wf82lybV47WXMF9UOPh67PZmh4FHSAmRHXvWmNSUEbIuINkbAGwkIjxxQOGYSHz6iwdfcud%2BIEvJT3yT%2FWPQxcuNwBWACc8N0EWtIDEwdLlmx1lFFXvPr%2FBPtTLTtFoXTza1dlk%2FFBZ3yixELM2JSHrP8EXQXw4or9xp8jEIsmd8lLfUtHqXJa&X-Amz-Signature=2695f06b08c9def0d6b55df0fa8a8e441a1f3450215b37f706b72cb64bfc81bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
