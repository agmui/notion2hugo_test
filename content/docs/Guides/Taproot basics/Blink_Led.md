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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FVDRW6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDZgVfK5mGvtoz2YTT3TF1s2MFgVUj34dF6aKS5C%2FsJDAIhAPh%2B%2B2CK5ba3hRAQdL%2FyyuENPsbEPGUwSfTAt5ftX5CNKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZ5TpOSB8zhDPJ3YAq3APP7xG3qL08YwFTDa6mqBxOHN39wurU5lCZ0ZsK14e6IHX8wsCPxdXNcyTxv9Ch2S%2FGXBRymSWs3l5mj2zSdyl8xGekxcOVaJzjZ4MixB%2BiZ2uMpibfiO5T4MizH0uTPeEYYkrncLrIZuPp8cs4rA2uj0F7FyVGz8UtvCvB3PefxxM%2B%2Bg9VFnHmyLP%2FCwIQ%2FkpsDdHyyi9mpFmEkBXuqq2NOGqZVgTQnyGpla6ND79EC%2FGBhZ7jdZR%2FA%2F2xALRXUm6K6r%2Bb5okOE04W%2FTvDTPhSbMaxzyrShApPpBOc6e4Muyh0YtFvX54NYxhMI4fxr10urXVgRoYZWrwvFKhudK7cSng3SmZ5O4EpSL2WB%2F5bPK74LlrnjZAxRsrecumJr6Y77P0yC1UIJV9ULMdrwM3hd9jegCMAk6euGrgkziHNBzgY70Jyu6nP711hZaVmiGFZqbvsdo4oIE89tLnL4g4ZIVPrQ%2BpENp9GufQ4oulANfSwb4iWEMOzRPhOW6SI9i%2BvmIN6K%2FmMCt9C0DBu%2Fn%2BCbjCRLU38qLJp56xIjONGuCfJ9fJujjydcPOf87qjieaIxUB5IxwRk11b0PSRvqfS90wXDlJvwdESjmOfRiDmnByyNlAYo2MjvoWiUzDQoNfABjqkAVvDbQkfJrRxW%2FBdmVd3%2FvSuxXHakJEqvSiNaj5tmyZHWf9kyfviPdLn%2FOODM6vs7cuK86IKOII2uMe9nWWNtoa67lmNJajoTuuJVXsjescZQoAvPl6JUvQUuX6xmwNfUZJb2dW9uu8bMoBP3MgOZp78JjuAthsw%2FIZqgvZgusHcrbiFm0G8iKayUPK48apgw7SHms9viJjF6cXQ71RSVTt7MbIe&X-Amz-Signature=88f14b3bc947d8b2b76d5e6ab7411894e43178f83dc9e382c90d36f8bdde594e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZZ2BYFW%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQD%2BSf92Pw6YG341EDb5eyTxyB75yq0%2FBRX%2FKimpHwbipAIhAMQfpzYmIYKH93MubTmPxa4ggmtyjVKa%2FuGJjdm8t9B%2FKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSXjX6bPFMYfXMuWwq3AMzlhoP4aL9fLc00IM8jWkCNP4nW4hJuRRve93asJXIqwKriWEDmO5R5dSBnEBhgce3FeAibUDC4qXVRLK5acU2fwWHum77pZopBqAa3eJ9Em2FfEFf7ky5JlZNVI5ZDzUQJ3CjqSNQnZeaVVc6nBX2yUZt6xYNc%2F%2FrYo4q144QggVgzCQRukQHyvjE%2BHG4C4G3UBi4nNKcqtoWd6xKSsujXBBDbScmdXy3uZZurArGfZ40jMAic6sNTWjH55wx75e75fu58QiAmbc4dXOD17FzbYkFM3rgMcGTGD95V4ABY2%2FtTe%2FhhfS38KPSwhf9OpKG3mmtWp4J8J%2B%2F%2BJ%2FMlWPRpoRafSN6uMnquVQ2jx3KSvHt9Ifq4W57hCFhAAnATNB6iFELeuMSMEp1qqohq7JbvAvGvbS09r8TmSZzQsJQoxPwYU6tYzLUOiENlgU8d4CmNzd6ODakIfh7lftBPkJjP9csExDqBrSOnCKHyOO8jmzPtjacBnvMNV4u4uKozpAH93QMtshuXh0thM3ns5%2FqPU9Nmmhol4QtsSQ9ORaGhjVOyROgG6TUTFK0MSzIJXtyC%2FhBzjdUtyZObsTfKpOq4NK9B%2B9f4pBY1LHWcJOXHB0qmKp6kfY7ULBG%2BTDboNfABjqkATXC2MrbS4xQpEtCRcO79%2BuT9APe1MovFePl51N49Bu1kcHPzReiACGAaJzTJGQlFDsHGqYncBN0%2FuuDkKt27KuUg%2BgtpTJS2qh3KhrZeMflkgCGhifpYAd7gGi3q3vvYddGxVY0qK8h6uQVUARSJEJxLTi0xff0XR9Fa%2BWlS6RgTQcCsv8gYgRYnehC13fD1UFsXf0eTd8LOrdZNaqIjRVLv4WY&X-Amz-Signature=1686fe636725fa51a7643f7db66da042b97ff3e22ab4e485d7b4f2a3000cd279&X-Amz-SignedHeaders=host&x-id=GetObject)

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
