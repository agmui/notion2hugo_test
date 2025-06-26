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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TXUFUT6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQCwBLRsOiLDn7M6lpBIJx%2Fj3KJolR07KeZsyZy8mOPbjQIhAO9rLVbr9i5HRuO%2FFESfXdZZYjjTcJWOhp46aEUWBM2bKv8DCFUQABoMNjM3NDIzMTgzODA1Igz1XF1tHtwQB%2FaLH%2F0q3ANVqmNlK1oL6qz%2B3EAuhfsq%2Bp5RWGh3oAeec%2Bm2FmZHftaybGbyd%2B1%2FjyO%2Fz7kmBcwa%2B6ZGGTETRYUPuQ69MrboUrBG1gewf0mXBM9mmak2Qf2%2FeiGqZJmKTDWmhip9bbD6ZXbTHOkD%2F%2BF28IiyugdcOdwdaSwBLEqSrsxeDCTpcGzzSu5DBNkTOLORQSuZDha5Or39l6OQONa3YjKsFnSBDPsod5Vwf1jPiAKyS1iIpFGrkAt1kKzP5YqY5wbZbyzGhzy63FjM2TxgtBM5tcNXjEzmTn62wNCJ%2FTrlopJzQxMSCWJflzHbZU9mfBKZNLsnkdOrngKc%2BSx5vi0%2Ft9mJNJ7JZqH2tiqt6z4dPZu2LAe1mBf2EF9Zn%2Fhw2Hf%2F1DsPGgYM3pQTO4VbI8A%2FFvDGFpe4GF7xpATDplA2qkSs9ady%2FyXcxMxOxgrmPTYvWW8%2FllgQqQ%2FaRtSikxNjEGLS1rPNcIEXM0%2BnjxelvE4D7263TMakvZt3frZYjoWirDZib8xK7CV5nECtmy3ibya0IODoEieABaiOeyPry9kqfpy5%2Fr17xlPHFcSHD5575LHd4YdfvPkXlJE8n28uC6cquKUdY4fOCj2ibskW8MjlCNiB0ESuqZvKhmfUwDCSifPCBjqkATW28M%2F2ffYBcpalKap4Bbk2TQMwFWKHX8B%2FMx9LQU%2BQBtDduOD4Nwa129qjibPp5RiKArYhtWDVMciTUy01r4NQmN3Gbasf%2BvC1pwJgb65Nnzj2W2SIuj2GXF%2F7jJ1m2mk0w%2BWjmb4r%2BrtV1Zo0oNCNPEHgBCmsYKJ5aOETpNStrArUeCyeiSekR6N0mpDXzW%2BbmRZyzXCHxtmU6BfPbvKTLKKs&X-Amz-Signature=c4f8647c8a0dcbb578f156d2c769c54c4499c7724d0fb5c8b5ca8495a29cdeb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G6DW2UE%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T041831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIE3mnf32BiZsbAeVBf0ONnhkYGUo2e2CHa4xnBnAqBIjAiEAkw3%2BzwtE6cy%2BoAxcjDOuhDK3eDfmQZ5m0q%2BK9MLtLj8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDILOx%2BTZTii0CSXEwSrcAzOSqWdOxzX0ttPgnS7WaBJA4aT8iOlAS1XbVtTJM8037LQkpvRQqw1SHkOKzYAsBQPrHQiaMijP6M6e4E3CvQNP6Sa%2Fi8h%2Fi3hBsjs7zdWKtZqVfxCiLNg851ruaZEoX20WWoxSwUF6j15tkGEkp152KY5VNMxJ76GjwGYO3oO%2FpaTs56H0FQwrQ5hKoKTaYBH3rp5JZAdXanQJMle4YfEnIwB64NIHvSutq7uF1mrYfk8DJPCsshaybSlhzdRqwVIMUN9o6z3qeVZQFspwoawRwabd0%2B%2BErvsT6R%2Bs7y9CYiB3YG4ICHD8nJqnCD0ANZs2tASQshg9tlOUlJdOIhTjhgU8iywS04noFViAE941EX5MTlW2ZfWY%2BpqlOfCu8DK0jZJzIuFYNqfwB54Yx1aiou49ogneh6213Gx0qfoneE6ihgWsFMVt1jX%2Fa9ZKe%2FnkE7NNV4f7VoiMctgGp5A95PhhqCwKveH7ZKU2lI5BHxnLzRBjVDR5lu488Ski56HN0%2BHoGXHjwp23o%2B5Vw4fTUab%2F%2BJqcV%2BwbhKcSwGR1NzS4EHi2gPfDStPVV5MuJmoITLOXYFeKABvxfnRrQ8MsVkNxiwDYMienuYhzfjR1hJGhwhXfuHFjVCo5MICJ88IGOqUBGufB1Rj0a7hhBY%2FZb3qjAD5K6y6PmuSKdI6hh2%2Bm5ajVxn8KOj4kOt3D9c5yBA8n6evoBh%2BDQy%2B2oshdE5V3gPNLGYkcAVN%2FlP1ss%2FL6dNbA%2Frtqz9UbwNGjugxLE77wTp%2FIoOMRS%2BYrYX8SjnDgi9c6Sf17k5sgFA7YIluMKv2xELlX08reoz6hLBh62FdI1srRuDMv0Ge1kBNla5i%2F9MFlHkVf&X-Amz-Signature=6e5b8e5af408bcb7d041516e98d061eb0e2d718ddd4192632b3dadfdc3bf8596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
