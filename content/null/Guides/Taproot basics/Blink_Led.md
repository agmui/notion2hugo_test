---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "null/Guides/Taproot basics/Blink_Led.md"
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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWQ6QTN7%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIHiWpIiKiydVlzKQeoZwjq5x1fuf%2BGyPpiTOz%2F8xa20hAiEA66RU9meAgrCGqMvBddqELqvFnXs%2BLe%2Fzn%2FJIx%2B9LbLkq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDH81Z2F4KnRWFAhQoCrcA23uj%2FAn1V0v0MN8m4%2BNUBV01Mr03bFZqJoIjVmrhQ9rRAE5OvDl6NRET6lJiQFFojTW92FjqVGXQK2dCqSZ1yJuBB4Agtwx3mcJiGa5ffYO%2F8DpC8%2FGUQT1HNwmFQvzkKdgAMMjXVX5aYmmogcflKLqnAeSQ%2FPaPQEU0%2BXJ3fsLiPFGMRxhRr1Kle%2BAIuA7pWl5Aotk4lTM0KaXltaGouVlRZrr%2BofxXOrMWZmxUhXFhJoyBO7e2UxlvJH3SAE99miz6yXVMwt%2FN2qCO0%2FdQv2Da0LulegSEmkHL7yWyML3z1OWFVu%2BQUNMig5ixlot9KNg0CIzfPhzbOcVYvL3vMSg1hfBdsq6Kc28PN5vuBcdogTbKiD60RrabJ0%2BENuF7xGjkeUonTsuHsIpgsf0suZZ7RurKTLfNtbZTrfonOa1pWr%2BCiTudTrwMo6iBWY23vWs69fWuZvutp%2FNN5lnmEk47SjTjdFR1qnODEnv6YL96FJT6yCntdix5cEpAgOd7T520%2FLseKxzBAKq%2F601JvarWjMBoY8UEAHIfPJ1VMq1fTz6hahE5GaAVrDw4OrnmT8Ca%2FGZipkr7aH4SPsfD8IRolM86F4ozG1FNYFEwwkt3ioJjxClKznAiIRJMNffi70GOqUBdAwWXKSuCVqJWsQkmBqmXIVpv2lx3dIY4nWQjEZE18ylwEaSe%2F9dmC3wcLdizpuxUaA9hfp%2BlOXSwPSzBifJGsFUf1q1trNYmG9k8zst305D0sXziTjlF3mBnrlSx5b4yLGkCo5bPC2vFEiYkmtosGEvxRW%2Ba7Y1PMTwlrVN8TLwxT%2B9E1IHlr5y8KUr7UjHd2MGxiCrGNn8SfO7YbNovQ6d6ubf&X-Amz-Signature=f14df3d3a394255d93531c394bb365f50760657a4061e165a4b1859e219b7013&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VO55W3Y%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCR%2FCSJ9OJ7qUodF2UjHlsQ4cPNbdFeMQ0aLyPt9%2FJjLAIhAKS7CF2me2%2Bnc%2Bc%2BUbZfMfQ%2Fw5XJz1apvdtEMm8rGKpUKv8DCD4QABoMNjM3NDIzMTgzODA1IgxBARdyYBrwkUxTVGIq3ANOOdQFKr9BTV9YqvWOUAZqJmwVoDQ9JH1PFGvix0XEbVuoh07RHV30JD%2BTKJc2CuL5UUbPziZ13aRuNaD%2Fx4sikHhlDBtkmJDT%2BWoMA9g25%2B52E6szV6MJjyJ6h6fYNRn48IeS2QqAexNRdQIl98FhiF5v%2BYqWJDqt5YU09VrDlpu%2BLimjoXUS9yGG00l2J0y9xVPX9m%2B9P8J1DOMHIAY%2B0pSU2uFOx1j3ri4xmbaFzOThFvqw0%2BKGZV7ykHYq4j5AnegK8uWle3pb1PVXRHF166W%2FNXMTEoujRIKuyg9WXPqV9ThZe%2FLKUZLScQH38sU8Wv1lnDIHmioOesukVIBdxlsybobaxkQiS1du1ZAgtRxbNP0yse5t828kcEYYNiJ6xXY1eNs6HCpHqC5IJBA8thxpLuDfq6hJtnN%2B9mt1bdjX9h%2F21pPqw5vzN8lTJt%2BaR8Xl5pTrF4TJcVD%2FqYV5tRPDSPpRa9fflGR%2BdfvSwapt%2Bb0J1OkZVQUW8NfcZpdE8znpVMa4sHSX6vog4l0dBIP3Kb4JnjnXkD6EDa82SWOpPhMQHKz%2BFnEvrPuwf%2BlUBe4XOPZytX9CK4cKUhlIyyvM0I7e4Ro0aO2M5zy7OZ2Hj6V%2BNuSpXVDaujDk34u9BjqkASLrTsRwe4pxbO3tSUgLfU6IIEtFrbNwuwleY2nSMorDG49r1LxIVZE3BqsDk%2FKiVK5TZEYqvH%2Fnx0AJrNunsj8MScX%2F716NHk4IfG3a6WsvauNGBNqRUalYW6klkqrP6%2FDPw5KtGkdQnOD8ZTSdSzK%2BZHc2i6cUL0Fr69EbSb0PUKBrmDeBjVoNCtZmrmfckJjsgxp8asXbCfrDTsTua3y3FSHA&X-Amz-Signature=151f2a1d7696ea0e01b3b4d11112239565a8a1557ab35c33ecaccccc50de93a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
