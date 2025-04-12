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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CH6N2SR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDymvMd%2BMdNZyYH3cmSP2I%2BtyhgyIFF3f7KDCFqkR6amwIhAMUwdjPsIV8OQvwG%2F%2BCgTNooYM0Na66Y7NQJuEc%2FyAVbKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrWY0CyFB1PBIt51cq3APO%2FETkO5Fiis5eCGAgbK6zc18iSs0ubgK7mPOMM9qJksBrZimn36etH1DZ6aeieYHOF0bgSFp7jQHoAjoc4AwNTayxjGpNMIqqByz8nheMRb%2FD13i0byd6AJu7BQGCvzDJT%2BhkmLVnLNxglsoFAhZCj2ofU0Qj63GtxxV2YREFcFJQkJ3i1IWFyCaMnZPeuOTgkPSExV5YEuDy06pk2SgQFWxWbQCIUulFMmbB8Xjf0TyJQqL55JPKx%2Fanx%2FC1z8%2BQYfHTA5wKoJPyKkfwSbtuvtoIrW3vH%2FNlPMgUvACQn1LxG6JTIT524MkcCIy0q37SZSjQYwJnDg8E7yAq6FHQhk2kCS49vqyh1WiMUyrbIX5FLcu%2Bb6zOJa5dLv3jfkU8EAa6CoTsT2N6H9%2BBE0ZkSeFDWPWFGIR5nM9ASLF1HHAghto7H%2Fr3vnyQrTy2gnlVhu2BPoqj2cuxfjhtB2FyRXj0NEIi15Vhbk0FzHwULHZVOjRkVg2jDm%2B5y84b3W94CjtO1tihQfx%2BK9j9XHHU0n0%2ByClHKp%2FiCoaHTNV5CzYXrfbMjz8g%2BH1GFW7yI7FMbn%2FSrGezk5c549ECmdBTnkVxnp%2FZcEGxfwxr2KEGm%2F3%2Bz3YppAZJDdbEKjCF%2FOm%2FBjqkAWEaYWLeDp77Y%2F6t4r3MUOT9HMMt5%2Fg14Jtbvb6yBmCQzT%2Flmcake7rFJ76GV2cYclYMQM4fpap3o94Ih%2FAZKRxaaVgrJiQ81W4zDk3iXVw6%2BsE80tDKNOO25JX08IvxYJAf5BbLqkbi5XsIzwnjrBx6F8mCCPyV4R5BJS%2F%2BuZUqMI%2FXXf3tKf61NWZA57OJ7K8KTqaErbuAh%2FsyzNcXeAGvnYOQ&X-Amz-Signature=3b08708e30ad5260a89985bc7c1961c254a26fd341b5a3efda05aeb3938bc80f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2WFMAS%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIAl410HtpRPGNGCZeTlHyY0TrUjhYYGl1RT9WahikcegAiAnOYqfMEObbai1fTDirFTV2XOt4H2IHPZgtvXeakx3piqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxWuvFHV%2FonnDq447KtwDlDI%2FGfnzfYVan2RgF5R2S8IlunWGKtZqyAGEeM1fRpn22Is3p8bx8%2FE88awLoeOU60MU3yXvpYKL6rlyHNclWyMHdDbW8B4ELxEG51MBF92W2f2c4k31ZForl376VPLhQtAiQduhJe0zcMv8LEZC6D3khbGrnSTV%2BSo6091G7M%2BPwOrGY3MudjUglrTj7NzOr%2BUG1k2AkDMcfQvirp%2FgMj53YashKoLEBsMcBdFA5e3aeOxfVEaTewZtQrLXEyRcMlLGWQ6zySqQoWiCbgb2g0CibQJVRrWttbfXMsfYmZi6%2BS1AgT8xhYgqz4ATCx3IWYTf2AkGrHrQJrPRsuzLQFCcoDeHgPMNIuVQSoxAKYScdRIf9jBIObJHOBk1q%2FX5OaBeKsOJqygGA99kWzpmuM3ydf3iEFWJ4tOPXTNaI88Qr4U6%2FUz4Vz7U0e6DIvYHSpcNvcta8O%2Bm%2BKJYWv0chlArSmgzYM69Jj%2FdnhBq1CdM8hVUQLSYmUNQ6u0Os3ch8B%2FivrBckyi%2BPuO1rqHkXgDg0YaEYTeOXANjrCDz4RZYOkDEhreC18%2F2CRNgWK1xsvfNsxt%2BlT63YozUh66LkMMn3rNruh8oN4yCHZ%2FrWU7opQZ6a7y9Cf8hrAcwqvvpvwY6pgFQ44lwOHrzuDFwmZtF1AK%2BUvG7gWioIc%2BBLq2iIhgffsdgO%2FmaKdUJ7AFpS6AGMe4%2BaEBRsptqmTfBhvK0HEJDbMWEx%2FWTT1Q6PBQjL3B1aMBaI2O7DBpphXvlYIbPDVN0VZapNDvYTaS%2FvMln1fLg8auChaaVZxvxuLH%2BSJB6kx3TVp3PXh%2FSiFfxi9MoYoRg5k1AB8OD8NI%2FXRzCJbi5f%2BmWf4R4&X-Amz-Signature=3a7afa56cda9a915d69c776d609a8229fed17740576690dd6aee62ac95f5abd6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
