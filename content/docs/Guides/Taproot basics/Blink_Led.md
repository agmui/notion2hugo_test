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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6MY5AT7%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCrXqHSbS37pYf1fuS5vDKuiNypfqJNpOdrH%2Fc1fX%2Fb8gIgTjz0thoCHqMYU5oM3M5LbH0VA5Nnn9s9c6dQag2FSeoqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLhaLrNW%2BfnYXEk6SircAxa78aYsJ2AvV%2F1WA9e0JUp4WA9OPInrBoV4Zw0dCEDliTXq1OHDV5cRaiSinewkuEVYirewbQOfAEv73HOzbZ169O6I7o1MFfMGeR3Db94vdhPHWWIgevylPNjtP9m%2BSVOmWvmVwXl3yd69%2BCHyZ7kzPcboDk5JzElo%2Btp0KQJWh%2FbIb2fH9tEJ0syqJNuz0mKbq2%2B5NpJ1Qoq9rMZbH4lWCxHeOQAd%2FgxacbMDMHjaWcujPbE6mY1Q6%2BzF%2Frjug0%2BItoxkiL2ZyAL6GvqMDL7AKBPBoXfEJp%2FtxKPpY%2Bd%2FXYIqJONXmFT03d1Q7ZTCHyQb%2BolGwG4nSxelAvvX7hLArRWrJw1hF1%2FPnH6qL%2FasL%2Fy56tjy37rNbekP6IjWNXQt6wp1zQj0%2BpOe%2FvBUj2tr2AQUTjktKeJlqoWgWu%2FFXA8z%2BGGxNtDnd6tTu4WQgBdkU7rYRsMMiRid%2F6iMsjt0FjIVSCeY5sMi6gpml8TlARtcMjVCMCrrK%2BdPBgZ%2FygXGLbWnmQXqeIT7Z57YxH3TiwHy0cPk0kM%2Ffac8cGSDis1A0UxRHmgvG1UDsCQzNuWB60K5gXDRCT6%2BN6T6Rj6lxnzOG1rRRFF9TSasA97QjkNf2RiktQJAAKfOMNq%2FxsAGOqUBy4x7wGjP4M4Y1RaMEApT44eOHdfeSHJI3BDmFNNV98G%2BmasrbxzPEfZTo0JMuWsiOoXbs5s4Irlly6NC5nVA2x8uejy4L7wIIaZb3SXJcSUiZto7fMyDQZYZX7yzOgpbBIMcubjQiNbgjDFpamsAFp%2BtoaSe2azTwdKYzoS4dveHxpRjX%2F5NTdtyGksJG3ZL%2FUAA8yyvmLsOTbAuObBWaAjI7Hfp&X-Amz-Signature=618ec405ff5a6a2c172cd98191d405a5e59d0035d5ac96e5e963f56fa6ccfc27&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYLFISBI%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T041036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCpe9iSRMv9vrPZQRxyMoJIYRNZ%2B6PjYv9YMxP5HsizAQIgWakEAq3Zz%2FNaunLyVh6fyS%2Fn%2BavZW6AMyveT3sbEBm4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOUJA8lR7pATM%2BW7xCrcAw7F3EdfFwgMnavqjlo2gZus85NawAuhWZbL7GtrLbd8RpGfvFYAP122KSAaCwAVJrHiuYX6BtD5XGgqJ%2Fh72po7EzhdNTOJ4rILKplYbH5nhrQg%2Bzu%2BXRRKUDNhSF01zfYaViKGASEAS%2FO4GaFQj2i2rQ5cll%2FJbWtzR7qZf37cvQmfoJoxaB5EfbVG5um1WEPhc2WNKH%2F%2FUSopBN24EwqU5sCGxcHTSIWHmSxaomOcPrY%2FqfdFF%2Faiqiy0fF0Rs9FvLdL7J5HHfSZ8HvEs8A0ixsOVt85Xe492yg1L80F3%2FxZwGMFx6Vb6TfYHrIlUzrEH1qrNWZNik8jxY8NjQSxfOxFH%2FuPfcootYZ4v6c8hiA8yxaifNmX6dWtyXRwq%2BaSDPgJ6o%2FbJOYS6XFD%2FDF%2BYGX9zw123s5W%2BTSr9kBxxcg1oNdmO%2FhNcCg1TUOsMLkbCXwjz1S5IhLXPRRFwIA5MjUpgzfFwc%2B2%2B8xdh6cvHqXR24QxYcOtzKvXLj0ZCEj60xeqvL2bHq%2Bth9ZRTz1DXxpre3nGy3O0G7zrMp4HLXjfHSBF9e3PE6YzVyZauiQpTIlLlgskS52NbLA7nhhsUCjwpsEAB6OFIE3l0qFKK7sjJyJexjeFOnrFwMOK%2FxsAGOqUBi5uZw5WEhJ0%2FDvsuemeEOFoTB%2Bsr4l7etQrEQ8%2FwFyaK3jvPm%2BhM%2FMd271BivGQ5SZW5LXdgN4coLsU6ZhVNnrz4TUeX4yKWPitaEvsow5JgpvBeJLUTl6kLpywn0PP978TKrS3c2G0zoVeSFMqqtHur8vNqKfAHbZEl61OErardRFU5uhfjOrJpaQxhPSo1wuhhN%2BAtTXCeQYKSw9EH%2FFP9Nx5q&X-Amz-Signature=0c641747d1d04d004f4050d72c1ef34f2242e9313c75222460b58437c541d8d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
