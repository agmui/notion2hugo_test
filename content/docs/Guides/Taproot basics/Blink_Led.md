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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4FZQOKM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9GKc5f4m07rQfc%2Bra%2FWIcVEHXLi%2FgzjSiJAqsJrlg7AiB2LetOL96xa1QrpwC6WjPe443Pkqq9kOhnoru5O7oZziqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdFEjWbuBc%2F4%2FC%2BpQKtwD0ftkgboJef9wK0PBxgFAtwe2rLTBXedr6rBqPXoSs%2FmcLdSiyaGR7bXl9ghWenVhauQAhOIA4ctabpgTkNnKgxkKOJDYRc70gcLx1R%2BtrFKHY%2BSucnF9JuZutUjk%2FF%2F2kbW5iqA68e%2FqQNFQhgwfU7amHiqT3GhnTahDPwANqKaRbpX%2FAQVBXQFM4rOJuwy3UmLpzN659rIQrf3abdmWEHBxELT8zBJqrfYcGb6N09P%2FnZ81rC1tJ0tyt0dskrgtpeii%2B%2FIyWEasOSARdQd2n3NyqLPcTt47tq1pHfyaNyzLcDd8%2Fhk9YFO6QbDS0Ennx5ZzkelbLmtWhHwW5OA7Bui4x6%2BVqodRHfD7ysVIU6QR%2BaA6fy5g7uPbYYKpndyvhMHp49nSnlC3fw2ZHdyhol0y3%2FiliaGfVEUO7nIBG0hXp16ncNQIfgsR35pNoJnMoLPJUSonFOBJ3W6GgayBtMqUTZ2%2BmSGdFpF1FVv1zZQ0EeGcZ4ijJ%2BP6nXzcht2noHrLSWCho8MnG4IiOeRxbnwNwBRGEF3dZfvBFNmgBiUP4Uuz551AkspoUvwQHozXcA0llYsdCyKao8WsuT5mlXDtq9TZm0Gtb4loeiwWVGKfftlgj%2BpANyzEUicwz%2BqtxAY6pgGvhngWaNlnY8huLmT%2FYedziEZxQUYcswn2mVwRSw9CWkgQ9K08bNtwYpoli7iEAS4TgyUdKEJ%2BgCQzKBP2qFdVHWkv8uGaP1TwL9zUOHzBu%2BS3ZGKWAnTXb9ZTFgvbG%2FiX7kz5QlbHdtGplxfJrRp%2B7wMcgkkBMA82s13mbm2LXFdM98tr4zRD%2BQUO5UMd5S9T%2FYMYp9a4tia%2F%2B6CXQMXpVKKIVjlX&X-Amz-Signature=84465d6ebdba8e5cc96943bfd6cb7fade126ea27eabc6b4c5b4e4707093bd2bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TFB6TXE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T141227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs83BD0CW3LpbMlvicZkDCO%2BYhW0Wij0t9sUDOsGmyOgIgdrCZ7k8Z0rVIeS5LNdW8WpUPpnsGUdERgVRk%2BqhvyloqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQ3jHVN7rDpA2bxiircA5uw9IboPejdzTJO7UiUHAHs%2BLUweFlGGyfSvw5Fm%2B9Ad7ULqlDPCptEjamjZAtu3ZnGinlconnhRLc%2BjrGMR9Il9aygdhgFD%2FB03Dr6G1SH7Qi1ix9SIgElln9UlfeE2SHW7g8EpF%2FL9EJy0114dbgkgy0mIJBjENDeMbsifwsu3p0jN636SDEBmDjU43cLTc3DVZUeTThye7aLE0mVuJoKJ%2FpKa3Uz8ekXxhhxVnVAlTEbGezg1lljBP3uKzlpU2YQrB6pgZZpoY931tqKvDT3xloxaNOZ8jCxhHD%2ByMZRrPoS1X%2Bhhv6Icmaz4ecwzCGAatT11FVue74oXoVs%2FHkXsyeHGTKSsQEttWemRrY2A51EoZeDr5XG2G7PbNX5stRGBoI0AIYtwzu%2FGw6pt4AnBnMEBHYX8bVuv5jP5QswssuAFBqXXRwDMxww7NzWHWUoJktmOkeCvQVF4e4kmyxOhnt0ftsM3U8g5ClQ%2FUzacXRXYJUIso%2Bfyz0rD1Wok0sYP%2FN1jsf6ELuGerm3NL4Y1tTuNT1Yumu3Au1id5iG6GJPle0zoJWbT8bsH5FlI4IFmQI1h98h5Qc5qZdxEe4ul3LW2ndksBd5rA%2B88QwKcfTzi%2B4qrEE7hS39MOHqrcQGOqUBzamy5DRGWNoHOCiE56PoiDXKxGj06GIZQtnAhQETXC8zqUIokXvgcBZJQ0%2BKORn1yQmLeICDLvtVHg1XTmaK4QjUzvUI%2BrJoMsw%2FYQeccH2SsG2SbdRCvzMLZ4X1Ir3H%2B5gUUu5nZ4N4V4hlmISB41r%2FD54WWXqLXgCuDcP8LoDffbaQrUKPgrMWRWVLXzj6Jy%2Fn2U%2FPizByZoEkWgXjWdQPrXjs&X-Amz-Signature=22708b1092b509fa9c48cb9aefda8d4808b15d7d347c26543b4774dac4149a18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
