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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQI5TWIT%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCJoGGpsYTC%2Br%2BN2j3C3S28GYa8av%2FcTAb%2FOxQTAk%2B9jgIhAPcfVZMlclX1qim5fSb7G8zneZX5dEXXlKIYypgwI%2BGlKv8DCBkQABoMNjM3NDIzMTgzODA1IgyqZXOMd8LPoKY1fbMq3APjyAW2EKsiFZTvH6HgvSehNDie2meGHuLXdOA163YwLLrAlIDeICSwoOmbLwHa8%2Bwi3xvujdsjcBC5jDP4qPhM3dZr93TkB8n%2BQz%2FmUWUJ5o%2B65Hz0H%2FgVrakx6jBZq1bZ7gIwzXSQ2wyVEoue8ufQyTxHA58gieqEmJTd68H5AmHHyv4Fc0ngRPCplrdAAWZeeJxfpk7y5Y735BbS7Et095fFe5wv%2BYp18x0bZogmL23xJGSpY4Ym%2Bf1alc2nYfbRkSdtOIusz%2FVOyiezc8mvyYQwLLWogAY0Xpwjbg96eQNwtq4qJm9YqzdU%2FXvL730NfPCrrJM7ffwAUytwgTnlGFYwE1bwC3QWBqfWAK0rNaiewMrzcmO3PKUjUEBZz%2BDWhPBKXG66N9CuivWSIjXq1cQ4gG3IoGK7YMI0g%2FpwcwtTDGxjccrlqsXH48kHbH09XhyKaFsFJIesGQ%2FozTku7T%2B%2BwUgqcJCs7Cx9qU4p1Hm2az9YuTL%2F7XUpg5KfzJQoEfoh4R90eTMwu4tnYEz7r6q6rUjtD%2FS18FjRcJuLZp8thsAuu1PMOUBA7%2FHJDvS9fCr0wEuYmjGtsMNo9sKSMqolPHCJwluPudXSRg4keyeRT9sddBEPnx88rjDbmLHCBjqkAWlSI6nwrh0A2OhvJQPuuA6J9%2BgDbeu7LNV7%2FkpviQ8cNEiJOezMoJqSHo31G566RFWteF%2F9h01U%2BdusOaNoM0jTcNQuB46JWfV9w0TuJDIc2ekgiDR1aqC%2BL0Gh0L2QLetObXYrMDRdSPv4jRYsB6VuZkjZaMSV0ji3OfNZXVA8ZNzw%2BS0miw%2FV1LTe5F91iWrh7yjiM%2FoqGi1fvudRPBZSMRXR&X-Amz-Signature=dead8b9129ff539829c87cdf1cb13495359726928c89b9d3eccd3ae43a72a255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675AABCXC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T170753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCK70vHI8LjEGQPGAuis9RYS49SqkpPEz9WWslyWHJ4qwIhAJC34BB20UlwNJJELZ4PCD4%2FylQLQx%2FUMfi4sPQipMCRKv8DCBkQABoMNjM3NDIzMTgzODA1IgzXQvQvwvJPQQ2cHH0q3APKCAX3lpm2wv2iaYE9MrWmpS2kDczpPETOwzZaHA8%2Fg88dDm%2Bvu0oITFKjDIaJq4MuxTB%2FlcGEKWTQeoNA0vN0KiJO8r5eQPOB7JgQjeUUuR%2B7ox5ddlBTdzj%2BB9BVmMETIVapKb4vYFpluHjfo6kiS3ClBFGFN%2FPVh%2B%2F8kXqmmNR1HlrVRftT9JSGXGjBOFAF9HmlM%2B53nrgzBswSbTXUIWbZmmihOfpyb7v5ZBXkF%2FWtj1Z9oCdZGWlMD%2FdLJzkv4CeuyEP4RYkwtZp8NEaDVMHxUZCPB0JZzovYlNsKSBol1Ianpydcgsns7i6%2FN2h%2B7xD6yBY0opl2fdT7itkYy6F%2F2T1qL3jWIkpgEG58c8gqZsGEUgcGszg2jPQlWLquL4UGSavLh6v5s3d1QfVUA3XqeYao3cHQOpDTM6xQQ5iwj3Ztuj08iz1VbHjCMceEKQQ7128dA8WRmaNjwVM%2FFRwa1XFl42SzvawseoXKe%2BLVqSDqepsOqJ2G5r4R4N17COmkxMDUryVlxpDjPuxLTl6%2FDRVt80U%2BrPIkMtwayWdSQgrXB78OD452MxZlmfTNP2qr7nLP08NLK6VmIt8d9kBCpw%2Frhek1B6KWJhyStJCJ3tcE0I96qu%2FCRzDvl7HCBjqkASNq5EBSdeMmvVyLHlfuGqVGmCBHYBqPfmxSsyfogN94q9Jt9RUjv0RH%2FBvHApT7BEEKuwCGbJsmZlCJrHTAypIA3szRDRiDz7TScK2tPydC2DoRO2O7wFtclqufiQXMOGl3sq%2FU9SxpDnvqDcFxqKgeF2YcqkxUYbvN0ezd3dMYvFhxQ5D09%2BnMN%2FYWH%2BwsmPI1ouvHljJbUgmIH31YzM3aBzI5&X-Amz-Signature=6f74e909a2dbfd97ad6ee8f76136a9d3bd48cf06361baec8adfedd7b23d646e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
