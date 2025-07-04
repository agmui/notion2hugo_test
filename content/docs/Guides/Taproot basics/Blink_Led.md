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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQZ355QM%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIHR694RQS9goSVWUDuMMhGTVZyh%2F%2BMr0QxcPOsHE0jO4AiAUJkqgS03EEHb6kvqAm%2BCSb0o0rsW1wXFr4CT6p%2BCOzCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMZvXsZ8yl5NmERXRFKtwDNa1O7aIias1OoW5vFyJrLqNNdNbnErVw1%2Baunu%2FFlTCyICnZJzMUE2%2Fec7DGkxszx5elb3Wx9rklOISfWmrC2LWkcK7HDapYva5Tqi5tU8tvZdGVDPrptUX9bd3wnssELghWqPX5ZB47KSLsAYQy6oTx5a5h0bbwcG1E4WjiLdIGdbmPdcgiJkBL%2FOrVRgguyeh7VIoQqNqlpsip0hRiCET10dLGA2ltcdxh1b%2FOqoWLSFzyLZm0%2BD7%2FPERCpSKri12Qgs4kMHIlx6Xn9YEpu7k6jdKSoYzOBYYPnTngB9zXb5zAgJ8gpvDba%2BedfbDdFgL7lcT3k259xlSswVT3CmFdcRv1vEUs5cWQH7iQuy3a0Zg9CwyVXl8OBpHUJKS2XN1Uw22z03CJd3e%2FsaL23Mb2t%2FkFTIaH2ezajriJwGOP1BWyGzy1xVz%2B9GSeT3P5kPPsRxZKuihcE642ZF3Vk6XJw%2BYX0DeMpgBqo2tYgkmxk2jQYWmh8xoHL321SBCpmBgyBcRAJLB%2Fojg8NLWMrxzOmQ2eofm5jNPpe4r0x8%2FgnG80jCZ9kyHUDIZGyYdzbtlxFkPMQaGekYzVMl791lbUmdySJhJqyJE806gIXm6rUVveS2emTWv1vLYwv42ewwY6pgFYg7lVCzM6cL0d%2BZC1L8OM%2BPFc%2FhpW6GS1ZTuSdPg%2FGQ6xtZlQB6kHUl8jbBZuTromV%2FBP%2FBSXuDib4aZqvdNeq9z7vipzchS8XArRjYlKRE8gQYjIp72yR%2F2m0Lp8W5EQR4cJj9O%2BaeT%2BKmJOiBvMjdYhX9a9B5H8UF6CcqaEChoHYzFS95M61BNoh95RuAibZYBP6t16BaXqXYW8SDV12dyqhxSn&X-Amz-Signature=0f2f0120c708954931d35b230ff373e805b70868942e1f2411c8ed93f416d588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJU3LQKX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICe2HFXMO9lvaoVY2UAEX7mOkJXK2dVuMQhGlx%2FBkvbbAiBV%2BaaC%2BDQ4Cn8YmwIhBaEnS0qtJwn%2BLTxTiJOffle%2Fyir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMMbvWLjL4NgyVHjrRKtwDUiYVKVh1mxKy0r8xjBEy1v0e7BtgkQKeIPuO8H42Qmm0XIp%2FR0D%2FmjytA5kvqk%2FM11ce69OTGt2OYm4UU8WRUgohrmZwB%2BU39IKOZ1bVrOmM7FgHeWkuu33GuUzA%2FiEwhZSqPgujda4sAxcjPZGUwSrm9nf3MvyfeXoRxeLcd7Hp69kE50ftzuVGpZnDzu%2BR9OWcp6%2B9ZYaFnhOQMwQqFibVLzT2pY7ZibjLe7sjRMCPyTb5w5a%2FoHsIiH1%2B36BcpiHDMdQmM4W8vQJDdYz0HslyVylm%2BJGWSXKzh4pJo2F5Vdv6HfX8JarADiU1ycvp7lodQYCsj9oYkNY8V0YTx9DjWFfmyYcAa8KQZmy3EaOdECBDzJrZgJWeuHr1NsCwYOGxH7dJgqGAc770tEo6Pt7ZDhyTVo%2BAH2Uyh0XRneKaNvH4nd0dZ0YCH4FP5nroDYXaE9EQ7lOoI0PU20CmywTtRRS%2FgUKSBTulsEjBY%2BXzW9S9%2BDfm5SnxTM8HdZzo4VtrAJReVhxGbgpIoE1bBCIyR%2BfLeBSWhto64ofi1IEJ2%2BxzURErUrYO2mJrg7XAK%2BOtjfvg3Yv70h9ERWjen3LU09SCw1xnzUPH8vac8qdN%2BIdKvhGDvx9ID0swt42ewwY6pgHAofRCn%2FQZv91gbcgwLhb9MQz7SZgQiK5eNRh4VaGXs4cwAkHzdHsvCmGz39To6kxlq7vlQoxxtEHsirk%2Ba7ySO0A6hTPTClsWBJkOMB%2FEXZ7VCfWn%2FB1yk97IegE4JUUnkQJYp0NfCQLitqt61FH7z0M%2BZD5fvqaQZgA0FFqIJmEdzjx7p14Iah630kLfgMMSBO1zr1x79WHftFE32BbvjQNlkepo&X-Amz-Signature=64f6742e06e41125efe8f4edd746537a73decd75865f55b8e56fc43dda607dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
