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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIAVQYF%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIHcZ7cLhbbXVivVfSTxYdfJu6TQ7TcfKYvRT4PtH%2FABAAiARXXOYtJCC46oZhSmTz%2B8dMPYWc3yhRpYOnk0dLnHZOCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMNSZKEVtDdlGn4Va7KtwDsNLmMoP6E2RcmmSpKfuNn6J8ThbNEDK4YnfBSwfNSd7Mc%2BuPGEkgES01J%2FMMudYOdSGDacdwXCZ5yEWgRZx69D%2BKmVJGPIPIoJHpRk4ProjMiGDPyRc56CEJ7qLWQba%2Fdx5%2FmZcNVf1FmQj%2Bws2%2B3E8dQ0oOt8Zo7lFr%2FmRXHd3PE7XioMDKKshjlndw9wF1ooBCtgEK3hYCtkIsQNxjGmoeWeUOQK36Xu06mEDMfgpN9tWXcVvwnHq06Gj%2FfyxMXuAanqrrjeVQSiZPZYNTzx2G3VMH6rpFEJEHpdCB5bGXl2HDFZ6DN7r0XQKuYYzG0sD0rF61LmKuzao05y8EaLWh7bH85ri9DUS%2B0nianHwB0kZrQnjg7ny0hqub9%2FH2c38%2F5p%2BL39guCdMTOTRkW8CpJUG75mg6CTUp9rmmCmkcngEH2VnsBbVG3X2g1HUS9myeNjjixKbaFi4j25V3TL6GcJeFD9eI%2FbVmQ7DbdWVrgHAZusiwNsEt%2FrBFOQ8YddCKBLaljlYM7uDyzgd1F%2BGbrekYmvu1PULMpBJPx6%2F0x%2BYsf6QVgMyY4zU1Mvw8CLerA2JXKqsdBDZt6rHU3IvTXsu1Duw21NRkKRlsJ9qnRNdEdnXEg2UCjY8w7J6OvQY6pgFavLWqMqB516X8GqINH63RFViYVJD31WODq%2BKu50DXQrWx8BLIWiF3BI8uZd9P2Taf8Cu5K8EggARf1q3oJ9t3rd0RJ3lcv3m%2B3iGpM%2BjdIduoqj2ZEp%2FDIkWAlbuHN1Z3vcMWELvvCkBZ4nLY54Od88M43IFaYyjgKI%2BxEsKZP%2F8Z9uZVPxhsi%2FZrcvEWgb%2B33N9quEyFgqL4FcDYnycuLJ%2FcMi8z&X-Amz-Signature=acad750191d907217d1edc2dc0f51918eac5fe73cb535bc98b0b0dd94562ca5b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GF5EIVG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICrNy3VZcztQXYeVy5m6e75vNfI%2BAqEnH%2Fba5WdmC6mBAiBakVaJokyRG7dB2Mg2atCWzZ%2FtkFT3pnigqmMc9mB1gCr%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMA3FhaUGPKn5v13%2BPKtwD%2FkxFWSjiEx8CSd8%2F68pJK%2BE5cq79MwS5%2F3GslpBLMGYQCiFq557ohNnwrpIXt3OS8ySyFB%2F3qb%2FwyxJgi06pnPjg8PZvKFVt3V7zqJ4%2BWMnCKYWuOHgR7t%2B9Sd4PXFvLx1OTyy4A0hTfxhalUVmFaiTJGhTZrLmkYtC65b0rBi85NFgRnwk4mDROxuS0Z5ikF29%2F6pwriQJ1hksflSzZvqTps9w1pynyDah4UTtWgbNeX7IelsLVUje%2FHZlBfYMeYpOplY8Gpe5bkk7ZUBNrczUIcnwrWK8XdHpU1R2WpGj00Je3YlV4Wf%2F7k3JfTiI7vuxJrI2FFE1mE8dAOS7yxiEhpNzu3OgvX2QiPBATRbvtyzXO%2BtvAXFymu45P35OsKKwWQTtisw405VEUbhXjtIJ3em1A1UAnihPZgf8CdPs9bE8GuvPGBOR3xrMzl1QUIsw7mE4qepTJzNqahddxblk37owRwgtCO7Qo%2BJvIeSYxbw4CCucOJftkwVmywm8l5dPhHr3CwsT5t3n1fw3H5g%2F72nJ2cDD6UGSxbsukvAQ5ij1mkSTBsK825OCc33PfVRy6BDatYcuCBjHfka5BYsT%2B6WgDesEs%2F%2BCC6trn9lEmJfFhHIMdD0YW4JwwzJ6OvQY6pgGsDNV6cwWjR%2FZaIumG2sDlXxiytRyyZC9asJlmhLUiyQdszJ9%2Fq2vnrskVF1CmMXSp1Rswl6AZHx0HWkd%2FFJjk3NR3vIJUcAnSFSLaXKjRrVPF%2F%2BaQYm23qW8JCQN%2B34bA%2Feo%2BFclSpeJV6gTAZUPRbj%2BXeb3FDsCiFvxVUvLhfd2l1CzsbEIGpl9X95JmsT9cEFyJcGAYSUOvD4yiiR5rWnYqeCuO&X-Amz-Signature=76c8db6bd2d289cdf5038f27c5a8763ca807103b7da84fc3e54d5debe7cec1fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
