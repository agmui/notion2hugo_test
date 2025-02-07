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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDGYCLUK%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIHWEpmr%2FY%2F7IxtVNtYlxz8IMLOslVXXmC5N9Djcz1%2FkHAiBGkZhEF6Rx1znaxA1vaX1XYxAn4OlgUWujzsdKZYDgCir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM1ol0wDvpJhYDS4ahKtwDaRYjik8vNkj2AD3TkMC9R%2B1zr%2FzzTvc5TRJXRMshOzgjbwgY8l0WjJQ%2FncugHTRHrHS0W%2FU2COBMSfo%2BJ1umsV2mlveG3uYkQqL%2FVpGiV9qymmFAwe4Kh%2BkYHt%2FcGMPGoWVw3W5JdjTQKv1J%2F9SSfeYVNsk%2FeADwxV8oMu%2BXEWaaMIEmuXcPpp%2BIJPXacGnEhRYGqIiUDP7dxsM4PaYjsQylAeOOx7iAATSWGupcGU7Ovtu%2BTTyCs0oue%2FcsftC6k5KGqBw%2BW8MCApJ4I%2BUwFkELapL01ZL51n5pvB4naG8kCIT9TfZRaWMW4Xweq4E%2BlKzdh990zHvb7mi%2FPXPbmG6igTU8BC%2B4yz5EbEjdcGYXzsDhLd8nzk9OzTXSixiDuvlaECs5DwcQvWVYYk7IFj59wKofWL1hjDsi04jnpdDO4vdvBu2bJktzAu8yCEKDuHk78vfw6FtS8sp69y08%2F1K6zWkiZhLGtzYnahoYfoGAoAbpBGN5cZI2GdpelK2YaYBiW4fN22PAF%2B0aclFitHfFM0YvV2xsrZZUnm9nR%2Foivx7NpKYriqkHjPI3q8t1fSV2NGA3H1ZwgStHOFd5fptRA676bFvSn1eCD69ojopF8DKbyQi8%2BBwdG3cw6P%2BZvQY6pgHqYcMsrAQrKGBVGhPWPyyjvJ7HoV4TlPNT5qTH0pIRYMpwq5lvz1OXjaV1ix8SpQqD6qceTgfoBg0cRvEr%2FF63MakNurZQjtuYyJhf9sxbNHBePLuz0mMlW85JRGKQ0VdCThDIceO2SPhIpHatDYLuONYTGCRxlVjzbPkOvoYn1%2Bo40J7Ygm0LP1hnYKdLOaz%2F%2FXUmX6oZVWRABFp09BYRKqwGSHx4&X-Amz-Signature=ea4f35fdcefb599b91b4123e3939fc5624e90d6c11b79cb0ee8204dad4228d47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTCDNWQI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCC%2BHoqtIuUCNuclzMNVCezVPnyNitJQEGqYQeUZjNdDwIhAKbEMpeWqDmMV4ThE09heY1LJUZ%2FjJ13VpxbJb2vT2EYKv8DCH8QABoMNjM3NDIzMTgzODA1IgwtV919EPe6nWz7nfAq3AP9F%2FbRY%2BckVM9AQ%2FE4%2Fghui0OFvBJnMJmCAW9HGeyGb6WDiReOEDoX0OPUeWIAxZ5Z42STKd0pzy3KdAyrXDlAHdT%2Br0MwCdi1UDyoCBOTLCb9%2BFu1ZrVo93Z8Q1951adxIoLDFE7CDg6XqvX8d22MOggMK%2FDllFFClaTQYpfPfeZ4qlDe5xzF%2FwwSeQc6NL1pCzsWGJ9EYuhygImKiDtNZ%2B0UrUIbkGFDv2%2BxD2qNSQ4An3eDWV8JHlPCVtd7ba8MtS1d8DzZ8LyhrBLuKk0nRVo2ZwvC4uGddU0y%2FlsHkRDCzQKcVpOaS0AmIV6Vo%2BI6PH9nVBTZ%2FivxbQmdOCZjFTjLaQeW%2FzE%2FnpjDUKAA6s1D6vUjFlil2f5jFKPlgM8N1Ln08ZiIpm%2BoaQM5OJMkN%2FRvU5Dd0Xd47pXnjOpIjPf6pt5LT28P%2Fu%2BZD3OXr%2FmY6jNsO9jX58oneCWZcTsDIupQ2a2FnRczhXjw9SUVVi1CiEJP1kQVhUPWyxdJ0an%2B6CtIObpS80%2FSXUnXTp7CajSwPDdwPjN4bsSF0bG59cvy9HjR3smW2ogoKz9%2F7VNVheRUtELtMTfhQRz12aRJmF5o5thjc%2BqZ9o0QhFBtjic3lJzdWJ1YTJtw3TDegJq9BjqkAev8J0lGtrYGooti4%2FF8FVbaIiNquMs%2FA%2Buqjs0LlQGWekpS3KdPy%2FjvuG%2B8%2FHkDO7N%2BZ5Q0igCgXW%2FsFzFgS%2FyNA23vT8pVSxwvPR6iX07c4p5ScGWMGDz8n6viaN%2BW0afA2dIhBBi4a9dhEPfk%2FW2%2FlTJTdoZYgWyA6YCUfvymgXBpi9upaVIlT5K29oDwyj6%2BNUNwfkisu5l5XoNf05nj9Gls&X-Amz-Signature=6f70bea4d79bbe7a43484f8f28d7fa837abb68297348fe6cc880d306d7dbfd87&X-Amz-SignedHeaders=host&x-id=GetObject)

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
