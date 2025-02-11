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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICTL65L%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfYMqDisXXe5LBflpt5tVp7SErqJX%2FN8mJEB9kDK9uFwIgO0D%2BKf7WGMt7dPFGNtrNiFhQfBhfefp7N6dbfHxlre0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACLT8cjw0WwEZfbdircAziu%2BFa3jyHbV5gzfs97Djgf5q7ZfxVuF2amOI82u0r35aBC8tB7ISN53MXYDb0psw%2FCuLbu%2FkthMaSmoaD6dcPgA00W39Jhhyq0NqHUWVjh0nhHfrSQ6fprvwONS7c%2FCRVUkefMHIyd3fbNoftnw%2BersRxmxrL8lF%2FhWYoD6mZKA%2BEh%2BuoZkd%2F%2B8490%2BKIePwu7%2FwuljErNzdJuOIZLuzLios%2BAduGgjTDcSDONB8oTAMlw5DcX0vrNAgSZfYjlVz0KDpTDDv5Wn%2BdkR%2BMKkbQoG6waqxpMEH%2BpnNgGYMprdaYR6crELgwhdnRl01r6zVZMU%2BtTeQ3mcwJLbuQOvqUgwzoI4vX2E%2Fr2n%2FoumQRH%2BIHFD9OYC46ZNRr75mTGhN0l%2FhouvvdGiMVy9PWwfeejNLFkjbzlsPn1e1rTYJPFjOlh9X8BN3tIhHHtv2rcORzSYu0IgRst0eSW6LKqsHdNkm9LWCqfwLrxgBY5aZ6xLZK38T437%2BwkuezJyj%2FKdI2WraSHq%2F%2FiTN02D9KYq1oiTQ8Cq30nB5NCtljzmh%2FQtXFkgq2%2BDSufcDu3yn%2Buc%2F0zQWMDsXXO%2BlzaCl4RSTGowauKoZ3p9vaDs3MkcDuBPdSxk636%2BQ6wwFRMMKvJrr0GOqUBJmDTOAxolVXS3856fVa6IPwvDtcGIBFvFoG1JPednheE93vFXqvvh86GB4knzrD3sMKdosVaIKYS5lhQFdlVedV%2B7y%2BZ3EROlRCGxj7k4e69c4%2BHEszh%2BmYwEeZSnDfhojJ1dDzwraO1p6OFFgkHmvl%2B%2FnvFD1kCU9%2FUkXs3fI7gTjc5JTAcSeY5DM6woom9lKR%2BIjli1Xj8kgS3Eu2Q8yRDFK8Z&X-Amz-Signature=8b118c5ab61b37cbc1db5352f7c4989098a55534d8c3062a1f91aff88452e6fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3AG2L56%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICoWDOO5Iep9y6LVDWFPDiRpYH5etwV%2FFYaDupe2V%2FP4AiBjNxh22PMZ6YRywkzGea0fWT7kl%2FJWPrrVNfrdyqyZayqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9xWiEXgaMo4RzljPKtwD5vT7TXKju7pIgPoS7uQaEFfMsTYA9D2AgCyKXNq7aBb%2FQ4bOOa6T6Cp8TFlMERX12CS7Bssnx8YwJ%2BfVtySAZELcHy%2BvkzLWZbhD4P0v9%2FfycLWn7gHsHppuWdUDX5go%2BhkHNJDsKwvDfhMxeGRyLG%2FRyqkcx7pvTs8qqACKJVvBTgLFB6qY8s%2Bq1QXEU9XzvfkMvTwoGpRIUufAOnTiXm13i6TlMnFJs7m%2BFktNTtNjVYnYI2mXUjddezfbJ4kmcIYZuEYiIGUCv0q%2F94Dih%2B0JQlQxztgxf8wXUWNPMzXpzBOvV%2FDtwHkfDmABTS3oymn6KNCJA5Rbpm39gL6%2FaAwq3ZRALoyKjNnZyr%2Fp%2BDRP9JUllsZjBwozkqFPjzMp7u54uDOKRnFsFa77sWdqcJut4u%2BQvjHmesdMjMuYx8zvoDNoX3MZXRBRmua2BCJy%2BjwkG2%2B56AYjUnBd4v9zG2sZVKCFxX2wBY4rCwcazix%2FbnUvXZh7VxNBjtp3Q4rhvum6L81sWzCtqWmq7ZAYbyHGxkHi2hB8nGsPkZJJ3FyisRVaBOF%2F%2FdFkGfBJUU%2B3ojSlilVEkyPDfbV4Hd067nYR6RQlBbBAf862FI7j%2FCqjmqiA3BrrHOg8rjow7siuvQY6pgGzLb8xLv%2BQOn%2FKc0LgyKQjFuCtkrXzwYMxfWQocOeS5gJBXSg5ioXq%2FHmEzKYgcCWi21Yu81a8%2BJdDPfsAPQ2DNuxkAEZ%2F0318Y2krtZxdF%2FsktSBCjfqzkLqQ1VKliYNvDpajAUHAWZkhDwNMo1h1kwPjD3ALgjstuf3EO6eVd7THOg6KlvyDq436v%2BKResleQxenkaQXMyZwJZI0gKGth0mTc43i&X-Amz-Signature=10fd6038a908dec979e1b9def28577516f0aafe18b7db5c24bf6ba61eb4dcd18&X-Amz-SignedHeaders=host&x-id=GetObject)

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
