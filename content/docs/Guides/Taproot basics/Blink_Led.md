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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN6GUUSC%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQD8HcNQQa66TQSKpAfcUe5cBUM3VTahCpdWsILm7YahTAIhAOOkr0OurWgKl9n1UVtBGZ%2B36nRFWgOxI0md1Qwwg11DKv8DCFgQABoMNjM3NDIzMTgzODA1IgyIp%2BW0pMk06e%2Bzlgwq3AODbVYxdaqZwD0f38eFXYHM9qSeMt2aMFzrRsA7%2Bv6N3Fjwbo7c22FG0huZKii7hJl5bLvh7ak1sswKaOZem13%2BD0ZBbzBZt4naTShe0sa4SeqyPvGScWWDzC2mjQcz5305mn%2Fy%2ByKNAFmKP06ZkZULTvSdVUhhGzduk%2BHAvnMTobRi5hsSA8hoqHbECyrvSV5njszVkOzY5gOm9EFL5zM7WIw%2F7IRc6ikhiyTdBppo0GqG5TmvkWF2cVQyS%2BW0O80H6TRUPolM743cn1Yxf9VprDiPafkCwjC4ROOUREeLKJ7cVp2EtxF2294aoUTm9hd3WMFirr6RKEVlcqfbw3%2B27Lz7rk%2FxHfStTJmM6vBwnP4JPvkYY%2Fr%2BSPnOcklyRj3pYopQel7L16DldErNndAPu%2BGs7qrZrPoowDJu6aJOxcQVDBtfR6fQJtBOl8q5KPioFYwBXwTNsEN1MLoTD7OqQff9NMgWOg9qUfNR%2Fw5SpsTJKvkb6O6%2FgfwKlMeqkOadcTLKUbOFAxxgKIA0goOr2GtJYgh4%2F%2Fxodxe3RXwFPtqGXueiNUH%2BmuT%2FSjuolv2t%2FfEkBzJ%2Bz0RYG4X5Pt%2BK9JNAyXevrQjBvPlCBhNuWZFB6d27OBR4J8U%2FMjCdtpG9BjqkAcu3JY5bvOkS9gvLgGFxrmTppEB1iIUUJ5OGf0SEUug9Y1EJrjEGqI9wlOIPo7nwiLxRHAXDu6PLpeC7CD5gIKSP6nTYIKSkVff7R%2BGIGXMM60kN0hgve9o5GO9951ZJ%2FlDGipLIRu0%2FSEmsUx8e5e2ufg0gSs2ukDUS9sPkgVRa05FgLEEfNhZt%2FfIpFaeSGhdugg0CHnnvxrJAuQyJq6J2%2BWua&X-Amz-Signature=d352202e60ca7de9501cee656bf2c8455a8068fa9ae0ce79d44003968a008702&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TCWKX3L%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T070737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDgh5mhO1mGSJJE9lI7CpRIfjRMGmqEWXJDki6FrPqzhgIhAMrSZQHJkHfcbPNFMQnQUdDNRUYox9I5FvXnC7hQmw0UKv8DCFgQABoMNjM3NDIzMTgzODA1Igzh4d48oV6Vtehm5eEq3AO2u1jo3448R2ZMlaj%2FSym9PRgAzL0AReN2RkmNZAVN8xeRwlzuSQJ2AuYmfHfSJsQDKV0V0c%2Ff9XfK3oXzQMQvm5ZAB%2FRa1awnALj8yFhtjYRu9RWN9coSREa2b%2F5AkAhtd5a1Rcppv6UlOA%2FRPdpZOirzHzwx3iuCqL9rWxTheKcyJaMZ3FeMZA3BfnJe04kDsTtjZ9Q3YogXnI0Ccp62OUBN1j%2FRZ2W30P86hZu4kmtJAwRGKStXd%2FeteWz4z9UQaE1GLuT1%2Bt8kOcLFjTv8Vzif2awdXs45efDKlR%2Bc46xl6leCMuo17zvh66cqGEI64mJf7cl%2BWcHSkdmP3ba06OVKCMoSVci%2BxaYgo7eLYGeCBOiQsXNJK8LQM%2BjCpzjfMrrMQH5KRj864HkanHNvc7tSp8nUvJgI5bI7z3TtQwZwsf5tCnbZMZoZObS9RLUfiZB02ytiqYqm6Uk6YZdqE0PUb9A3vQPEINC9s4aBkYSMcMZPPA3m2rx9J6HmfFas23TJKytqaQpUbGmxybUZzqW4vE%2BRhq7LGkefnw4z%2BeBbX3UNEZatJ%2F%2FCSpC0y%2F2chW3Ybc%2FCAhyJCy030dixX%2FVM4e5spuc6rqbtGsyFpwjU3gY0VSRjY9t6mjD%2BtpG9BjqkAT7w%2Fbz3A4QuD%2B3Y7o0u2RPQT9ao67nuO2rUFRAhtoZAQTEmgvFf0LvXv1QT%2F7qyBXpHZ8N6muXaIqgLvxJI2cI7Io7laFDUEErXMnHMd76Zsiy0z79eWRuGeghgFpkXlSyZQMbRzLqdAmR%2FE7L3jS%2FP8grct%2BghZsK8lXHppyOjyp4kLNIk7CCOF%2Fkw2hqyqmSpmpoYdHmc9OHs5w8IvVzlCW19&X-Amz-Signature=bd556cfd5e8645e10ba34345fc1d2bdd0c658dd70688e3739165e259ceb8733d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
