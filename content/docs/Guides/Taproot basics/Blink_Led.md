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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTCRM3WE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCws3PkJ2gl9QTiOmrsSDrscJlkGsp7dJ8h4pnj4XC0dQIgGdREiYrJNukKENxP5hbMprwdlhFw9GCeFo%2Bo9R4ZbCcq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDcwP2oJ7h5Uy62taircA0FfB8XMkNtbmm2R5oCYLeVDdtgiwMtCfv12bw9tKXXip%2FmmPZDRZaok%2BBAIJvft7SKWyrT065Z0Zg%2FtCMrqn8LJOuMNufU6%2FPmxYOTuOTD35vSkb8q7RfOfXftN13BvPaWsAvtN%2BOlJ2XZqMqEmawQk4hdx0O%2BBgfwNsZAVYsDdBEIZURj55fx3m%2Fk59c5eu5wC2k0SoUHFQgLsKp4gx5CJTm4B%2F%2BDHHrxoYDP0dHQWvNDx9iWZCu7%2FYkrijTaTeFmhQlA4dlmlNnTF20fiEvyACU6%2FdUj8%2F9I4JWnzrXXuDFM00X95Qnf6Ay4LhSncAjWg2VJVL67dveOugv2Vf7AXJia5c4ZLpfKRbwoE0KMOkBglRdSpJ%2B74QlIXiqZLUyYSgBuaVpMDjknmZzuhv9LCuqsdHNGKGsZu8x8ra3x0Uy%2BJswQHNQRJwc%2BvZziBKuAOOjeLc4%2FAUGf5q75%2BsXU9hpGxnFpEYEGb94zAQustFc2of8K%2BmyA4Kc2YGwSR%2FJXSvf6n%2FELMcF%2BzXjb5lSNBwGLdIfZLDyr7cbd5GjIASuY%2BqUxBmeNDmLA5Vbh3shMcGmNF0SE%2BfuZnEIX2RADRg5%2FGcIauvb%2F7oVBa0I3o23AkGJTpc1RdvAugMLSB2L4GOqUBEIWDWIsJ6KYE5e7ggcS0PxIWopNdieKzZ009w5C3C6ySV%2BfpFMetyb4oYBYtCx6enL3G4VHz1Va7fcUk8dwrygDeUzT9YKtLMYO6d18iBJTaoOeqQTdIvNjGofAPmome6eIgxut3SXhR6CTbSp0bDzlY9mGtKE8fkt5ngMlVtraMBzT5egsFEFD51twDhON9MZq1G%2FCRgGQgOyh%2BPp2LKpdHNSh%2F&X-Amz-Signature=b7b76beda043316c6d5c589d57c847be118f7cdab6283be439c5085ec33ae116&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EKUE5IY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAufMbgi3iwCrpk4waU0sGQuHH18YH1huphAU5l3D6PbAiB02%2FoFPqf2mknrEb1jZM4am9JdDAYHtI1itwvP2ITqUir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMx4X4XcyI0ZsMGZu7KtwD1ANxPj61FE3rFB6E2QWfRAqlHz24UZLJNewN1a%2B09%2B3TyLYVPA7T4kHt%2FOO%2F91A9ETRR3a1GGRqLL8IQb8ww0HtUflE3DZTq2%2FumEBzz4lXoe90BxvOUCqJgh4iH%2FeiTAJxcfCpZvSBdNThJqLCkW%2B5jdgXWzCg6TLkTDlha2oeeuZjzhkcWDmxBPVLHi5JdUYKltHyrCwBSrjCLQO%2B3pjlXEu4mz5xkJQJCJYQRAzZ3g67NJoJ8X%2F0g0Q5NdK9agZugGrZL4P0rCq8tEC9Aefk5%2BigLxM3AQ45i9AOzI170lUGKIpGmm%2BZnFJmWbHR7%2FpHaS2NYcJWchWzoOkLTB8%2BhcjO6%2BtjRTL3lPISJQS2CJgBoKHnDlwlKqWC8YXRFVgp69j1OQKUVD0DV3rdVhKiMS0pO%2FCxagSvxPkomj2y%2Bc2t%2FPy4mhJ6JpM%2F3%2FApR92EvTBegMui4HVu4%2FqAphpRqHyOoZkISuBZLgH8Ys9enCdtj%2Bbl7itU8gLOeAPV8%2BxON5ao5R1oA3cympM%2FVGNeLZojbdxvED38fuTGn6hIT4gpL0Jgc0ecUOj3XolxKxajqJP1NgE1CLIRlygvkPdkaKmSpPr3CtFh7lyszExGAQsBYje5z%2FHpmnBEw94HYvgY6pgGlB0F9OFpJ%2B0KzWoxlGnw0eTUWSEGTd2tqRqHtTJe7WioMvUj8TI8vM8MpH%2BO94jlsjC%2Fj4krQAD%2FhzCY0eOwu%2BkFrGhSDCIDdQ92G0%2B%2FHHx4akdZN6o50j%2BWZzipOESZ2qaurb8Qtil4Li2a9EK2wQYlIFs7ZcBiFJ%2FGe%2F9GVHGywi3BOQ9xPXx7lTU1RRMtWJ7foE2KBOcWX0BzdLLwS9FSXCQr7&X-Amz-Signature=58508a64920cf832f77099ad77a9cb9732ad9f52a8bc6c82b64788fdee6fd635&X-Amz-SignedHeaders=host&x-id=GetObject)

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
