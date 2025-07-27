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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLOJGTIL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCmU0q57%2FTPuF9JzRKGwWTuT3svwKN5W4wwLJgeZDMFgwIgPhxzw7M91c0uDsY8pbFekkfKpLtjM6scQ9bQ0N8b4g4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFUWQnLbObd%2FkRnjoyrcA2Cryd%2BLA%2BCeqSjo3EHAyOHVOcka1tmuXwUDsLGjqF%2FefcEKywEypEocTsPk9fUaIfAuvHugz1UqWgVgADy6V%2BeeFJdOhc7ubNcGawB%2Fs9ETvpYnpwUv5bR1JBCJ%2FPMOiAjYw7tVz4B3mwONKOcjVPkRLaEpoeRVIyX1dxRxRwrAmgo1BlBo7MOANSULfv4iRruVnGKrMdFurAAYpu57qv8qG3Z3AB5OuaPy0zYNDQRFz4JD0jgF18zDvhFDhrIhQc70O3ivUQLY0jcZ7Eb2mNduV%2B1jrctiUeXh0VEzeo%2BSlNPuPkJRPuW49jvo36m1NgZj77CpFunuXlxiacFj1Vh70mUFoUVJaVkZllCZjORJu7Uyf%2FmzPmG19bshF8otitB2GYgZxM5%2BbiwJ6OSBS7pcWm1X7lgWt7gMs3cgj%2Fa8PeT2BVdfWYTRy43jwQr6hxteslYUShzBMHbkJfZa9pSTZxUykW6KuKtfKP6C7byV%2FVVSX51gwdDevKaSGHMVSsdtbcAo6B19QzUaMuCQ06QPKyTcfznhoT%2FvTh9JFhmF1v2praRk6omRUc713TuaYhcUySGQ4pwlVRSWICGHiy%2FF5zCsl%2BrImbS%2FpR8fs23vwoAcZStXeDZxC5v5MOC6lsQGOqUB04psWzfOWWMF6AifK1CKc6Rqw1A3KArp9gSfsgrmA%2FSlE3EOVA5XJvMTDlaFS8IkAJZHtCXkzuhOfsRHLH0u4fu%2BaAdIp%2BtWl5cCJGgKTNErA1bBBOgHtmtK0P3Z%2BOrj59PmrPWTrCeCt%2B9NRFlHkCCI0lWF7uJtojtHvAZfzeDCQ3GhX58VKOFQly%2FDhjVRZu8W9jrmQAbYjRqUbVVEgHE81527&X-Amz-Signature=8660357fba33654a27aa162d940f6084dd6f8681d5f2529f13a39c4e02de4ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAVKQ75%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCWJjbl2CVc27I6CBMtP6YrQaTJ2AK8uF4ZKuD%2FQmnIRgIgTXqiDL6uk1TUR8UNNCIzQ9iB%2B2MiTjQufkJqIWRuhPcq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMXKM6Dic5KMQC0ezSrcAxyG%2BI5Q%2B2vipkGihk1SUfDerWPmDIPUoiI%2FnL0rdpRejvaE7TahLKxXKR0e%2Frr7LlbFAOZSwYBUWdGOOgzl48CqMAA5%2FYzWZk0ga71JPEmAn8X15EtniT0DDV7D6NkcteBvgKZC0CKZ9j%2BQdnXJ18hRUguHH8I79p%2BSonIJ5JvRJu0mjxkIPkv%2F2KwFvCyCMjUN9YCHE8uLRxooTJRS%2BRKo5oA%2BqwQyIcrdjVRupUZQDk0vU7Wl%2B2Vfkp3e5t42AHZR1g0L65vRnfn%2F0GXRs88r9wKyGd5AaDWB8sUBMWe6tm0OxQ%2FIOOq7TUivYOCrjDd86b%2FY1uqhQymzEdIJRuQ3bTewaRcASWfuFCv7CamftIWWybKXbRy649fhKp9x4DMoLiHhNr1z5YV98kyt5yshsZQ%2BI2GoKbwMDc552D6XVUaZxRsSYZyTtzbIg%2FU%2FCiEBZU3NA4rQWfWyHLi8RNPZaH6gqyJz5mqvY6HFEX5mJRhZlDtXMq5F5eiCuI5IGwTdB99QzwMn06qeFSHN1iuCWkgRW1kdRKumZX5gvEZbxetMIhNqSZDHbBXLIMhULCU2nzvA6HVB8xPaNvYJQcmjU38YXaKhyBQViJJO2ecDGDeMUPi8oo4enDnyMO%2B6lsQGOqUBzoJRuOYvcY5E77bRR3bfZsBjaBITIVsLfA%2F5tcMXl%2B%2BdgMjw%2BM691fg3oI6cNGHJBj7kkBk50ASUgTT4MQx5IbJnsKyezzvqm3ioIb5FQm4EUN3EVbeHDVEEKi0v6DVGDjL7KDcAqPpYLY1Sq36eVC72seypHD2HF3EC%2B9yDxSoy2Z%2F2zci5OtROhW%2FqV3FczvVm7L8yIlXCh%2FQRo5AQUQJDGX7h&X-Amz-Signature=c7b0fc2c6ef267b6e09b663829373526476a91a92f81683c147718376da674fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
