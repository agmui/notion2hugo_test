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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656HSVWRJ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3BWvM%2BuWnke9KX8yvFyxVQoDI7pjQnpKxHBTchNulQAIgV5nOAwm6oimjvu6nGsvTCq%2BjDMjEmeZJG8WDq5%2BCiAEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIdRuOsX6pwyiBPgvircAzAa2ox4FFuiqlCaamHsymCJoKlxB%2FkWu1fjRb9Kc4cA%2FJErG%2FqVSAKOVJspMuOudClcbCsncUPz7wP3dutGnU%2BljPajT8TKZk4%2BxKv2BmEE0C9n4VkPe1o7NeUTdlGA0D1pSbczfBkF1eLCUidrKfqapkqnyCeQOp6I4yvdkfDCHQs%2FsXomhFhmwngb3ua5gOrrAugb5D3qNsQe2Y29f1K82Hw1Xm1VAemdQY%2BdMoho64zyfG0gRZafoomLV9Y2wqJigqAzkh1exwWlco0o9CsUD5e55SiYqO6Mi18Bn%2FKTXgc1ODoYtsZNTOVdCJp7P0igA%2FR8hd51r69EJAQdsqZD43aPbVQG53Peq%2BLkScwlKtqOCOMjIX1s9EGm1Par1Tns%2BSQAlIO84VL%2BKts4EH9b0nNv%2FG9Nrx8nvikRNrQMpr9gJil0WHtoIGurSBXvt1WUAQhgGoeCHaQTms%2FZMFYNdEAH803uWeKSvTItd4ncWAXJhLKQ4ttlH%2BHuMUCGQmnZzupv0A425qUTx5M9ROg5xyKOhcIgaMAW7C5UYz6vJM7GNyKmYNQBNZtKjPewdRX%2FUxuu8bEgrZZ0Vg1LgBke6ysksnsTm0rlfEzfZ7%2Bc4kV5Y%2FPIchThzWmwMOPLs8EGOqUBczRrNpN13S3M6YNd32pL1J%2Fx5fpSctltB7G3ZrDwT7%2Bew0iXe9xnRdg%2FsDJTVsP63BseT2HbEog701KrWaH5knai9VYlsXMCEqF%2BvEfQX1qM5hzz4smnfi8Vqt2UsQwDVzGl3SuDHFIryK64wzyv%2BGlgmXlNwWgJpnNiYn1pLYOdJDLk5alOmbwaTiy3CGfKPOl9vVGDnIvPlnGGq3TxabUIwO0y&X-Amz-Signature=28d278f6e0d9baa6f301e070e5c73937ea3c024135f48fba27319a4aba1bb402&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4CLAG2L%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIOybFqKuLwW1TRYCpfK0UxlIqXbNllwyOorBLTYULYAiEA1cpvLt2gd75u3AAp7GA3%2B5uYFloJlBfBYUVh%2F0jye10qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC4TwKgP23AGchu4JircA8n2zxVyJx%2BPQzT926bBV1LHftHdPD1wKQGj1g5lfHiYMEyTOAvK60RiS8VlC59m2ZFUBnF%2FTFfNR4IHqpcJDhNix2enI7nyok1W1kOWCsRNrsYJGJp03aMc%2BM5Dh2Fa43FQeoE5jhhQk9gbz11ZItPWLkOVBMdVUNij%2B%2B3AZqxeyfN3U20h6XnTQCcxT5q%2B3YvOKtgsRub7lCXusJi8p7aEv9PNhhjtjBoDBhDCKh2HBJdWOlw3KeUYPSMWszfA9XlWCIAMp0mU1jVC6lR07Mz74O0tVy3EekQHmdKL9r4DZzwP9DAKJ8%2BIVkD28Q3ziG32ZVq1kA%2Fw%2FS8GZH0fXdiYi33CZLrT8jT2n5RLIj%2FI5wGPrVroh0ZVONEnzjE1%2B6XdHrPaav98q9if2CvF66sO3k2U3twCkxXEbwtsAomeArffx%2Ffa4GHEPb%2FD8L9xtOT5TnHE%2Bg4QEIEm%2FOl8dQFbTQCQPN39QqyBOJTRC%2Ft%2FpYn67d0Kt8sgOEo1xkFHNibOX3C600gRm4aIvgrFNHIidg7o77V8PZy6Nx3bNc0nIrMCzO2WQQChyN%2BZ3deuuICyBaELgVaz6C7h9rCv9jZqGXTyPTH0KlScgaBSdolYs6kTBP462fIjX2%2BSMMzLs8EGOqUBb%2F8nu9x0hUOZ95hxIxqk%2FxBRyDlkqZhA5JFEF9k11l8QZPB2w874HZOJShLatvjP6Rc976e%2BDG0UObzZIWGkSNzGpC9PrlUCncTFezwNuqt3muhyqKdGWy5FcLyeDe93exHpbrK2fZqs79Sa0V%2BN3%2BVVCwArNwZt4qZNsHbPY0ky6hJP1IhyUV77IIhP%2FN9e0vD4a81cY0l%2BS7wa%2FxRi%2B7zpUuqX&X-Amz-Signature=b3af0bddd2009f333cd03520932e1ef43ddd9f93914cc4355639bd8d830a9e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
