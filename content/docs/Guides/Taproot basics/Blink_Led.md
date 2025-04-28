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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HDGJGBC%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2iCbw7jJug%2FGjL2r8Py%2BilWdYbQANCOoEY%2BdWcPNzsAiEA3ZdVvfy88vQZ7QsqhD79V60Xn04CCSYAq6ku%2FxFoUmIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFZU%2B1RHQU%2FvRY2kyrcA8ukbJG8q%2BKWIiVDW16%2FqN5ZlV9K9C1bKOXNJonLzG4zDkcWLAm9SqX3WsLb6uYcm6qj6W%2FQRyV1z2Mgg8GYw7q792FilncdfLQYq80%2FY1S1MB3Z4oQfUxgfN15e%2FPPaHR0K7hNNeyXOqFHyfn2Zr99ZhLhV5ub%2FqcyVFozhqNl9wqzUhjM7IWLxqVzkznh3bWM%2F6%2BHc%2Fr9KkZ7CH8G%2B2flfQwCRGl1j%2FJ9aXXWj1Md1dhBnklNJ72UHG6SCuCk1L%2BVzYDCnSV71AFmrVuoYjETknrZLlcTpHCP6wMSyY36Kq5mdEhe7wQMpQRbI2W2QhFZpSXKw64qzCTtVvYlz24bTL3KUjRY2jGKtwqCWtOHO5vdlbVh8aTHaRhPrYWA%2FXNAi6Yd2FdKj96V1ysIFhNSTh3hnF6OZ%2F9xJRxSXYyqih8L%2FK3gzc4lMaK%2FrTe0xbRsE0GSrMpHm2iPv%2B09yGSxnb1ngDSOyLnbz9FkHmBe7%2Fwu%2BeBa7fNr%2FnY28vEeVaRZ4VVJAe5Kfp2xImoGChaMI64j2k07dxLrWpIyMJx9b0Mb5KridvSZy8BMR9AeSU%2F3ExPMe7f%2FaFnCLuxthabTzbIQCIre9XECEErGQYmEtKTAejFgtfc7uBBM6MKWKwMAGOqUBJ16E8vrfTbly51ZlHsSTILYxkFSWw4GAfECPAtJfB3sKfttB4V9yIfkbal%2FKViO4ZmbMZaQsjMN%2F4%2F3glL%2F8z9Fc87MapI4HU7TOrCE1XvWXETaHaMkNYgBlzDpFLmqhXPh02abRpPMZOWuEd4tgYVo0nS1lRUQGpiMK6h2YtVoM1FUyIhWrgu74GlwIMljKVdPHFLmzUkLoxBauWV8zP75KzZqY&X-Amz-Signature=cef6f2a3cb15cbcd3b4a4c607b1b41bfd17d273f2ce6cbf805232eeb52a62d57&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWTVH3ME%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5cK3NsRIyTGVz2xSnCHACsQ00grXYAwPLRV3gddqSeAiEAgzhvaxLbBcyvRgpsr7Cg5RBzoW9dmb8l7DtRhvAiE4UqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIxbr6A2Zabwoisb9SrcA0wTBNVwDap6yrIFRjwtGthCVYECV6LedIE5HrNUmRBkoQsK4Ngsh44zJFTYMrP2uituP0OXzr9hPDE8AliTcx%2BKHaSx9e4oviElesAP1Gu0ixPwWfJQu50ClH0TWIosmvvBwEUmooF2u02AUKY%2Bcoz9g2P2G9Q7XjguAM8N1uJDVEtb5rJh008CpqmKZU6cLhN2Mak2FEI%2FY6TuVeHbQGq80pgzWqiDlRiPfbHOdE6FCNBPw5FU20TIdAV3RVOTpATL%2B1oxQA3lG1iGEuTq%2BGMBYMpH%2B6L39VaZrU3F3nhJC3lMmWbu8X7zssY5CRklA3lOVd%2FlJWz8TOyVi2f8%2BdDW6J%2FENDvnrmoiKHkX%2BMCa7X%2Bnal%2F9k2W%2BsYLxGlfBi6tIs47rhlS17iQrGPOOJeS4U6v4ZEIeGjW9R5nvgGqjkRVY51qX%2BWQmFvybRJzh4YSnPfXjw83x70XJP92%2BOR3Yw7Sqc6USQhv35575w3RBir3MF1e0d%2B5%2BMUme83h25mimeG2RowVqeeoYZ2JlaiR6elJASKvqBMxcRhF60x6PfCKseGNKvwIEbM6gI7PbSrvNYegepSHKeFHpcQ8Yk0LYQm0oUyzdtC367m4A8CdBaMzVGwQXfH2xwFVZMJyKwMAGOqUBDtq12AV7Rmkml9CMcvvIcDk6i5rfQnXbxayHsBu7KviflsqiFDtRtgLFfvCIm0%2F6k85VyOgP1z%2F6Ibuy%2FkMuB4ZkAnv2wxjNF7ahvEfvlz6SLTHCAIBG77u0xcQYcMjyrBSq4LMQfnFVJE%2BfvlnGDESjgYaOFCV0hFnleyMpKJjLFPh7kmfNOjeLeghu8N1tNot24WL887Hbe1MmMDTnGjErdoJ0&X-Amz-Signature=3928a51146c51f3fe88429061c3cfd19549deb4ad3d8d94f57265a3b6d6ebe62&X-Amz-SignedHeaders=host&x-id=GetObject)

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
