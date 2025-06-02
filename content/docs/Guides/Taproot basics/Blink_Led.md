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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZX37AAR%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCICp2ZkCVnK7d26Qev33cI9t5kex%2FXjwPkzs2BwEd1k8HAiALONuaRbQLDH7P3AC8KMSn6jRCmm5aNseUnl9BMNRYIyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4OmjkvOZXjPOlSmMKtwDFk4BAvv1U1KkmMrii%2FfHOkBSsESzSNBQ4Q6kT1vdOHeIHmAHRXQjnfePI5olzBwg2CAuvgq10UAweoqwNeT%2FyIk37hUlBALGUWAXtZTgDCpNDVPQiON%2F2Nz6%2BQQ%2B%2FCxsKJEV4BdcdkAzHVhW2qx%2Bxu88ob3LriYuKekF4KBfpqXa8OS0hBOFlPNvewl5Vp4j8EEAyp7qQ2%2B3aow2l5HTI9La%2BfBOw1rhz%2ByPOA0E8rSyH%2BXWeU2pXFg8jXLzXC8JVw69f5N31TIUi6t89LTRgNfKhBQVvchapvS5quLeS7aVhDVMPNw%2FBS6dbXzcIUZQokmTgkTr52YIXUx51GQDCqZgQcZpEotxqb4xOFBCwXizXyiBzejztt%2B61VEcML1s85Wq%2FMpeEUWalgFDMCsOz%2FIL9TOPUU94RkMoYH%2BIhW%2B7C0uVGPktLT0%2FsqrmHzEMT2bnIDDV269FafHTI5hBACSy3aweOVs7foPgnM1W7jB0zkYf%2Bu3PAIN6LBUpNIUFN8EaBf1mTfhIfKuKA50WQdJKMfsv7ZggRynH6oBWsVeqBN02CKxUcYg9ni9MqDzOCAWFQrE5vQSB0XYcrDCR8BjkAwSl3Yfm8waEbzJV3hWqRIKIgwB58Y7x6DowrsL1wQY6pgGvPBhvBOpCZUFAHUdZG2CUtSEXIs4pzRGuESXB0VQVMHxT4TXUMKDZzU7QNC09MapEtiOMalidzuHPYWfZk8jA9acfYPhrpkbOm4n5aENEQ600CLuGUofvfJsQ3NZ1IjRs%2FWyapsoDd8ykqls8GMe7SXY8Kmhhioq%2FfqZDvpPiW1fMJydo%2BaILkfNKh%2FI4UIOHUlGMStRI8HFIvd5JCYGR8hmlW0ty&X-Amz-Signature=dc7d596fe9d457dd078dc1aacee66bbaea2966057b3ca887e8ef7dae05ef9e03&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKXK4U43%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIG%2BFFKbZvI77EMYgFza4%2BKlM6qS8HPCC25NSbSqwihEsAiBxI8dXoBT4VYF%2BFWXGr6q4KrhTYHUsHYznh4pnHY%2By3yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbLeihWN0BSkH9n%2FkKtwDbluSyCmNXq2ZF1K%2BSaNk3wTt7H57ScviFltazT7T7cVf0%2BRdE4L8%2BDJ%2B4jnhtShX1TXAlLFKt6dfT9KwkKE6jOkZq0TbOYIfNmgzU7aoTviec2Fj%2BOW14WtHxcA8%2Bxm6y%2BjEkoSeFp2wNbA93Wc6Nhr0wZdj1HulGiB5xpfqOGGcD7mEg2H%2FatXSkoINqQ4%2F3FHdKmJtkB31ClEmQU0wHZBTv4459sB8TkXTGtrZ8dkUCbL6f6r%2B338HrnM90yI5NagSG%2FK%2BaquU5wOsGprfA8O5mp5foSuVCA6XW7zgBhHEV00REuNK49tNAvdBx16qObHIpCAmR%2B%2FkKIEdPzzBhmv46jWPEqB6pceg3hae0poEe5MEax%2Fmk4JqySaMPwBlJya4VwqWZ4QWxIADwnv7%2BnH%2FtNeo9eXb%2FT%2BpH001HR4Cwl%2BxKJIflIx6SfR7AzrF3Pkuu9R0zb1xizhw3g3YeHNj7Ta3LM6VnEMpRvMzc81CYr0r75%2Ftf4DoutjO9VEYDXlyVYa99oamA%2FZGwtiZh%2BZgJOBBhbfLu5T%2F7ouh9VtTuqoiervulWBBkqThp6hTkHtKB0y0hgaHDSVsGFC3Yuk8xHoFVIXUdnVJOXMzzoiaR8ItFVOcPaplM5gwpML1wQY6pgE2qwOUpSv%2BxFk%2Bwi1OuKcKT93V4hXxlAPJUeXri4Fwmz%2BZ%2B92T9wl8vPXI3HyvR2CHgH4Xe0VkJFEFNVI3D67mniSfMBIzUlZmklRnduw0wl%2FtR59IXTFNJ%2FmFejVmY2%2F6nKWnDg%2B7cNAHtmwQgoi8wfD269J5ZSGde56VMdR3oqqMDe6JG7JREds5Bt7Amo%2Bx0JAU6MsdNmwVo%2BGt9mllE1kEOh6g&X-Amz-Signature=316cb1b85c3307e61eb5a12e63cf5716c10f103e206294021caab9bf88075a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
