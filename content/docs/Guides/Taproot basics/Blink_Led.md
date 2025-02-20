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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARLPPGQ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN2EUHM%2BW6cLYwW52KieZkYjjQXgh1uLYL411OzBOTkAIgbDhDPAxZVjCA2l3h4bfXfDznv1Er6%2BfH5VxhJC9oKoIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw50fb5aXu9hwWEDircA4Bru5eEcWKahV%2FtXp%2FXruNlGWhJNtxKf%2Be3qPDS5l2nIkePJMwFqej5OZ8d6s8Rhcu3FgH3Ye0DpIGvcjOrZjc1ScCMtjzJ2WHc7wWmd%2FrGWN4wn7DCgTuxQpEwl8f92MN3S3tpXff0EKnVPq3MUpu85OFxbOUu8t8OndCzUIT%2Bog5wII1D4%2FW9oxT97a%2BUDvG6m2dsBxpZ9KvGHmeb4OQMS9%2FvrmpfSZFOrxWSSrZ8NcHz4p%2BIbcn%2FROUvjX64UKD12HzlA3yza4n9UUzg7wopQUWGEbm4RUNLTAu%2BObhDX8RzLWnS2zRpmAAup64%2FQ5BAlWRwt6%2BLM8iGuFthHNVkh6kXgACtq8L1Yr5uSZlE4YHLqypSJDCuN2G%2FsV8L6BdstEA1A0eq%2F2xNYxWt%2FJ860ManztB3gqr%2F4DVuiNjAdyq0bzKv%2B2Z%2BtGTZRvjdPu3jw6ZziyiNvWUWYhB9nX%2BM4FUAlojoQicNRJnvpHT7CeaQrc2eXV6x3IMUBRryPKlhMm%2BkLw4x4F9WN5dlMcgt%2B%2BnY7kerT%2B%2B%2FYPjUxGiOrdj0Wo9U4u9WG8LeD3TOocg2M9olDqeWkLv5BXv7FjpzHxXj1ZBw0JjFVkbQ2d1eliKK7MC%2BEX%2BvJ2cmMNz43L0GOqUBtoZo6FVOkGvZBxkVwS%2BDt%2Bc5i2l1%2FW76lbZB2xVofh0Jk541NvAF9NTSjhPcYlLNXZKNSArCL2SiJlSdlWYcKGhZWRH1mNFiqjif0GHZWgQb%2F50iEGy0gBk%2B73rZNn2%2BP23BBY4y0HZBrE7VVGPJnoVd4E1qp5t4VxRtWrFPM6IjG8yJkFHmWWE5I2uhDrIKxbSEyoQP9cqW%2BPAn70h8iTTT0lBA&X-Amz-Signature=77abbf897503ff4f9dd630eafff14d50c080f2071ad2e3a7f2d4b5d7ca8c4d00&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VWHQWN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPlAItgLPjMs0ScD90R36IfHK3IqzdZncEDtp9g01n1QIhAOTATSPaH21yXuiSw4TxLk1CPOrITTyyOmXeuty8MD%2FbKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEHSmc9yQEFQgZT4Iq3AMZuefkcqQaXx8YHCfEl2tDinsG7z7kFIkOugut0e1CCg6otglrmkvpUPNgQERP7JTUgPpnmzNIbFlsTLHUmFyIkTCQN2GdvBI6hSyg7xLPBU3FhCy%2FUnh1XWEffN%2BwVVt3C%2B%2Bx%2B75hNXjaCs2SgPwDXEC7ks8D4LN31ed%2BZ7jjY%2FXa6NAsyyhdEs9lNzc1BCYRxeHwgUCCxcCCXOHUuXbarYle0gV%2FGeXBM2LA63H8zvY9F2%2BeOFjThoOhRi8GDt4PLPh9t3coiKMN2mkMWoq1dl2M3CGjbgUqGEmtttzQSg0hqeV6JelGklt71RZ8f6uv1sCOLKk7Wco85ahC3rAq1DBgPIOtUnAqQm7sLydYR%2FMbYWaZzNiaENs3bUBtaC3haNHh3LBKvnlNr9ZnWxqqNCNgu1VlcflJxGG5YYcSrhKXsFR1IyB%2B9Tr7HJvsshMLSNVOgyTA48gtzZNgIkdaqRCGwL%2BNMHjEkZcCjMHB%2FQVsfMBC%2BrgwUI2anjpoH90AN%2BFW2odfNgV97LlGuKzYWrSvJ0ubszeShMMEu4tJe8%2FnU5ks3ECbmhLNK0TCYH0cbd6qgHiY69I8ssPILz4JtoWEqiUhLVQ6zvqpHZ6koUGFvO50W1MiidzBWDDY%2BNy9BjqkAawOS653UxrowkLWf3mb71Q0bQ2xvWJxyvioQZn8c4STRIIjw6AEMHgtS7kUOf1V7Nu5xsLBZQuWKbI2rTAanLubAE2zFHPpKqudUM92u9%2FSNxL8wBhWoU0z0YkMgRJq14bwQq4UhUrYJZHokof3wY4%2Fg3O6v%2F3kedLB77Zuw3MdkVUhOqmpj4H0E%2FYXqPR6XhtpvavXwxYl%2FNgdFAXq3D%2Brhmw4&X-Amz-Signature=88dab11dea08fbf63c1f04f4925d8e0bc4dc8165476dd310afdf9c1932d4c4c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
