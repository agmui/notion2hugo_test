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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SN5ODJO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIBJp73AbHbV31DkReS3UHUcvtjiQk9YMDk0Zb%2F4Q0d%2FdAiEAydobzFHTb2Z9Sl2jIqWmOHtXmXv9xGB%2FPbIO7631pb0q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDGNrkYgT0N%2BFjzzUVircA%2BMo6poKiBOAX5rCLnmUuYJBNxYTzURLGfFH19a5qBDJsuvkJBkE%2FAmKBjMT8FRyBh3vc5wQNZwgCHF3RRbTAguTmg7TcICR19XkhYNMJhPGi0%2BAcbvtFYgAMvf4l2sUwioVjfWnnJ0XkI4vWIY%2BdUjif6Uq8RA64H%2BJFdzvbcIez1iLoD%2FeyB7stISdUdNfa7kVxOuOSjZgx6VWlJob6oHTOnPBkmQZPaO0me5bpQZIVacLIG5TX36UVgn470mjxsPWCq3QeR9Pv1owRvX7YeGUs%2Bhtj0UzqkZ6MJQ3KgBF1KEfwzTd%2BYh5we%2FafsfjvVCQRlVUPbTCHyla2DvSKudJC4et3GbNg6J1Kg2q%2FWgHaQsApSJ5Epb94A9tCjtv%2Fh21OT3siH1vGs3TxgZ%2Bfm4r8TgSoPhxvesLijUsKyj7EC5hsVVGqs56V3rT%2FBJ6Mg004nBeisqktqDeA%2BZhbWx4SP2MebYLGxE4jLIgKLvJNudfNsBc2vRDDbFKlLh1mWSRsA6nq07KBFD81a8o5gHLOrTPYCNtdgiLc7HDHNpZ0X826C%2FtWbcbCfv2%2BM%2Fnc%2FCvrqdIIVY5BdHmxFI3IUjSWk%2BZy%2FSuhsIq7wbdUTm%2FzbDhHdWKBx9tw1vWMLHrzsQGOqUBnvaWP68G294YXrozQpB5X1NA3K5%2Bake6b3%2FAm8P8eULWvvrGIPKhhWHbOAF0RP2vt687MDMRAKBnfAwMYAeTCdg4YNa90fjPRtyynbANtu6VQmMU%2BGMgRkkz4AFBLjLyaI8F4S4W9Go2HYvRyZ%2FlieU97tK4xDafsstu5zEzWuyi15Bc60voRg0P5zNEqahjlfhx3QiRRdH1AY7KRctFJrm6e%2BKo&X-Amz-Signature=06f845762c4543fef475e0800b849875b93e539f71254109745e87ff124fd1bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDNRB26%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICbc213%2Bpnn8tr2WgVGw6O8JvXQL4NfGd0pxjiL7oquGAiEAxTVmnFIts8vOKlMYE3oNg%2BecpDSXLPa0%2FbM3FoiLBKIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFkCC7y2ZVBBzTlKHCrcAyx8wLHnkf0oGpArgLrzYbiaIaP92NxsnsiHRQRTep1iw%2B5TEaaR98PTtWwUW%2FaA2z19W7Bg7FlsmULIG1M9WwXSuK3inZysTBxZ4Z0oTpY2bpSBrq%2F6gYO0CgTgOAnRbO6sZjLxnJYlpfs7c9b4H2jYzlt2%2BTtOVw6tEb5izlTjJN2ivkmfVznFjt7sDBQb7QC41PVqvhEpDgw1%2Bl2gd8tXCD4HFX0cHXU0R5FjS%2FoZ8ZQUh713uMQ8Flh2swX6s5I4yq6%2FPmakNjXxKAg%2FZIYjBavqdZLC7Ms%2BdLhcXVN8%2Bhck5VNd2QS35X%2FQOhmu9mP%2BSqV0XcpO9A9hgtiacOzlN%2FRffNLIKlodjf%2FCyllUzGVn43oLlHrBOtidjD19%2FzofXr4jvv2n7gDEr4slpptx9us%2Be7z1Q9KI2plQF7E53UJ9qJTQPrdMNFhlNtUazDztVjCjUj%2BXYoapLVJFbj6JXt%2BBoaAiX4B%2FVq3GWrSDDZVoN01Agh5jES2d5KVQZfW%2B1YCKuxa7II2ED7H%2FcKwFiAwOdZZ9Ql83aThbSCfD6DlXppnXxBQJvDUBmLGtFhleEcLxyiVo0e711zwj%2FfeY32uldjm%2FXnWz7vcAK18TSIr0touoKVyh3wpPMMPqzsQGOqUB2yoDIlqPIzgibcL2CKJaPMWBXwGDLV2Dn9pnzVUGo2UUt0OVdkt5V2snFmQ5dD53BLGiUKRgvpG5MuHxhwOvdUcCVK1taraWjNzsNDqMdxGXrQ1%2B3dZzFEMu%2FDUOh98UaKhxUuswZqQvC29LtHyLMZL5He7TrBocu630tL6747neRW7MDuOcDQyZhoYzhVIXcc4qi1f5PhMWujrWKQ6JkCyTPELG&X-Amz-Signature=0945e593828c106120cf57c682358fe82b8187b79c239f1541be7af35a4dd926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
