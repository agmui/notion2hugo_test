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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFF6ALQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLxnKuE05by%2B7GMrHL8H5xzeYcyt2cqFcjoxiXYNZnLAiBb73Q5HBc6QDWNyWCnNaSLLABTMgxizKQ9g40%2BfFeMXyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM7t5eJmVEI6sAclYiKtwDBDWGW2BFSA7zLqDw9mfSBRccfv1%2Brg5qKeqlTrg46SaLcVD%2Fhw0YdQ2zwuf%2B1q0EtffKH09wXCb3KKQezPFb4NaC7okO714D9s7zaVGvKpGxpFgQhNEDrTQPxnmgupZHWHj6mqqvuKqJ%2BaYSTONhMLWJ0XSco%2B%2FTny3mkte1jUq4EFH%2Bj3I1uIISmMXy1wV2ELPvYnoOuxOZBnQRCYXiKJb2RbxTZPSrEZarHdskbWquLz8wovOuakcDTURcdjOluGirXb6DZKMpZe2lXfta96yRBVm8EwgdDbK%2BDc5EmC30zi9Ll3cR9bX5jWEkaUO35eWi%2B8tfFTFn5jEJCo958U3WbrQa5MAJ%2FL82ADpSNgi8bbsjnachguVNJxYkETk9bn0kwqIW4c7ads0BGKqGqyc5nBSBRH6JOyQ8LAW39AoN4c5vtTGi%2B48tmE6PJqTFYATEhBpxetRD8hqfm5HIzOatLlHqhU7hTlgBUFlGbn1d29LqX0pFat%2Ba6D2NCLXS0cWpK8ZA%2Flf2vhGrcL5SOZY0hYOBOUko%2BvpqZVwfm02eX3Oj1TI4P%2BpCH2Al8lH8UTjhNDSatWj4N6oCwFFCl2quoSSYQ7xFngGlsJB0hNdhOWzFCqiMPM7vN8kw%2BtGvwAY6pgE3Pasi37Xtlm0rPUcF37xpSHY%2Ba1K6YzIpQrN2sv5KM6EGQzvFqLGTsMTCKa4fO8Gt05FH5znPl8%2BC2m3LcWj%2BsPZc%2FhoiRnfmlrfz6u%2FhTjUIt7WTilUGbsJb6pZVu48HbPdjXXQaltz5T4rJ%2BK7mHeS0t08xTQW5pY9lCtn%2FL6vk%2BaZoyhPNbt9yvCCujCRX%2Bhsfju6ewWw%2BHGpCRfl%2FyjtyIh3o&X-Amz-Signature=0d32c833562126089592e3ec93db12a730d946cc6364b8263885b6059401e5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPHUKJSQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOyvzyCSOu9ycj3JXy2A4O39%2B7B6lOCTgs9BSV7x5hKAIhAIr1TgT8ErJai98fUUxFMnwDmUSPmQOrk6CkqxVFYkcPKv8DCDUQABoMNjM3NDIzMTgzODA1Igwrwkjgoiz9DAV5mC4q3AN3tAvhEI6DtJPTcH47hFGu5cLtRkzHFbQFYHzR%2FkD0QVjI0VHUKUTp3F9vc6%2FtlcUkz9Qtdx97zNUZ%2BwGkeG1myMrvjx2ACCzIm%2BbdWByI9c1Q3UcNKldyY7XdIGNa66IIIXVWfGfMfdGUgO%2FD%2Bba0F3DCRROW0NHUXHWP9UOqEeT6IGlT%2F%2Bxqi5jV21bbIZyHFFkHJJjqcxllAw5lD7HEg6a%2FqCy0G6yPVmLy%2F6yNxXFZOoFaWM%2Fe9Qkj7y1v%2BsVyEMjh12UiR35dvun1otaEh5thylruL3vCa66HAbm%2BLzGMPm1Cieh2%2F2U%2FrHuD3P6qMdBYK4PyqffLbKvQNM5hcneHw77WVIHxB2r%2F35MWqf0KPXeTz%2BPFhXJkQlF3qtpFNvkaBywQ%2FR1cdwpQOcIHw51KwAnU%2Be6WD0W3H9FcxYxtIwbWmANjl6iDTFID6ZOzABJcXrA%2B5IDa280L4r%2FY2dQhMi2jh9c9JIcdYH6a6N7gCg%2FxpJiUzjV684c8hmLgrNn3eFCHlN8T40QdMZBzU4py4AOZdLjlu3IWqtD4texLFiTZDhHsA5TzV1Xe%2BESGgCkQ4mQCwWUP3HrvmvTRjbGNWfSoTCuC%2BXlvEL8PocQSqlXseN7vKuGhljCn0q%2FABjqkARh2aHdR3L2A4pdpSqbX84ck8wd8Dmtu5MhkixBABzGUlemzt8gonbt8RORYkDlBrHMMxsZzHy0PJ0cFN6HGb1R85l7ck5Abh5XHpKVowD4Z617tE2%2BjKvrPuL6IgfoQwhpWo8OgI9Y56otlhD%2FIeJOE0ztCLRpOtrx3HiqdTiuBQpb1ZAeMS%2FQ7k4OHiJJhd6ve1sszBguGd7wEy3NH3%2BPikHJ9&X-Amz-Signature=8c106f5e2b5530144958d891432f015f8bde45f71be8e7a5e495e40c7d733cc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
