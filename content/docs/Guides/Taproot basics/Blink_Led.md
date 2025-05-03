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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBP6JF6%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQC6nRPf%2F5E1Epu91x%2BYKbhLU%2B47IKDdv5ivFAm%2Fdo6rDAIhAMomvbLU%2BZQ3TGVs167mqOCNRxz91vekMcFOFZtmKuBFKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMSSNeyVTm7UmEqUEq3APIo%2F9YzpS8XKTykSLEA9oLIP%2FsHaUDB9iMnog2ACjuAQIf%2FNDfb2myiuayqYrGEa4of4QMtn0cUdtTTwVTATLqM3ey2pX%2FbtZ5D8ksOFEHBBxV2yU96s7oyIn%2BIQiHZ%2FialRL7hjLXHRz8B56B7Pnrdjjiil3QJfKdeSQcgR04beSvqLJYMOkgGjFDw2wrBO2b8Wf9XRJqAIiDQPmogm2vYKmIrrcv1n50jPHaDv%2Fp8uf%2BMJCh8GoIp34K9dvBeF2Opbh09cwj5%2F%2B1eOlHGUP3kY387ZVw%2FLksACsYwttaFxaonpyVKGelbwFkOQle1J56CGIGwL2izC0lbkTFDjzFlV6uAv6eb7MPLQHLQn1WQxGx1y%2Bq1%2B75FdSRKpn3tF8mL7zQZtNxxakte%2FXdqRco%2FMtYPBf4rA73UINpBASX9cf0vZNnDlzidPbRgXPXVpJqAAJwz4uZ4dt444mGHICuY7Uh0qSicm6%2Fq9JiiTWakS2T41F6ke05jjbrzs368WpU75HN%2B6U9SOz%2B3UgImqQCFh3WfUW9BleBWEsdqnDBNLdwJRKIPcYW9H7VZWG8cbARsppVX1EpD49Lw0ZtixgQkO8X%2B6SgiRWvQh9IzNklTvneEQvF85Ttjw5UVTCAwtnABjqkASVWqDpPVBuc7nRxmvJPdXJd8IeckE5rVmdIvAgQZhWOj8vFAjWQ5Ns9W5bbhnUtlGfIxE8sA8LIPoTnb%2FmxVB2ZpLDFkomOf4AsqmCwqTzit8P7%2F5BItmyeKvutkKVBDIUS2ACHcTItE9MnWv4RJ2pScmsv75Gmks8Iog1YJYGpe7mbIY5afW40G1GLWEApVeAcl%2BeMz1ZnHSgLuDUMmQQzxlMm&X-Amz-Signature=ab4a94754a26b3e04680d1bbbd0290b5b4185b88241d7712049b9c0debb8d6e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3XIOHBQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAhXmTpW3B37lF8Ti0MjZ5O431Vxm2xG4dG%2FGo3yef1sAiEAw7id7enkRGpiOcM9yMTnU%2BnhIKYYD7VYlxsQoyaiaGwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4BeLUCsGVBb5d8fSrcA60ey%2BYPRXkQaRaaciF2D%2FXlhKVYtBfruBioIMQi1aOMBI0kPMRoHdBSyujxKADzHBWIf494KAtZ%2FjE%2B0hLLHlOyctkobVAvtA3eVdv8a1y2mw8k7TPpVQlMdQsVttZzOVCM0FjLdbUKHaivRnP0PaIanwR9UcpygT4o6SdCstRoIMmTWo1YxzuMLniJ2tHM8KPeb6AnTfJ1drUbTxEvcaDjUGcsEp7OK0SgOffk2rdaHQXobqMfM%2BJ9sW62YYhPylduEPVvuIJwiXaJjv5XH4O5DDcVR4sN3QXPtmVg8Y%2BXAqigpxZFszej3mZc%2F4c1x%2FsF1RB8uff3KYBanEJciqfNrSO9CqLYzA14%2BEM5aBacvSSDRI47iwahh1rOAusxExXTmxBnpWqZY%2BpIdO%2BFlnPdfOEATYuvowffdbJTReuOrbQbTyUp89Cn%2BTz%2BPDhmRnaEcuBpllYUFkK0xORps0j4Rm%2BTs4Tlk6llzpq4F3skVNiPcWcZwrWB%2BHyWDINIVBQlVjlD%2Fn2BxhUu9T08lXLIKO7pzIL1fcAG%2BtbNaIMpIzVi7w87KZsn7XiojVsCMZQgYoF04VWLvdmqHr5xO3YPcnwgx55TshxMqqGgrvNBO1%2FllQdkT8ZXzqHyMOnB2cAGOqUB77dWXNhL9tLp6Hxe96NdW2f8W6v81Yc%2B2Cp0qAX9v988Bs1i9t4KavqoFkHc5KLO4TiX7dn%2FJfhzTlsDueraZiglCpsLv75AZzW0LeNM2syTwSATIT9eQAxBxgoHDJmoBoTtJmUjnJqfOaTU8g4VSaKrul84NRwrYqSvnqAG%2Bjh%2FSY8XH86pFnx%2FVTPC9WuNcZUkZQSfoRJjO5Jqlo46kRHOZjHF&X-Amz-Signature=bc7a8c20182001b722d6eb45bda7dee3b30d6ea5310f5ac8e175f0c9e18d995a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
