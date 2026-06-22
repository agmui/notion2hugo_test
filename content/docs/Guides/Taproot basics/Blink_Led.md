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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPIVET6%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDGQi5dOLaNYV20%2BtsPCBc5NE9zzfWu%2FfFQxANW7MRKAQIgWbGbnLSo2Fs5VUil78vgsoktc1f95xWkwiyML9dHnXgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPnw%2BjgzP15Pp9HoCrcA%2B9nAWf4bH6w8zXDjfbyiM2bYtbWnZ3OVpW8BjJuIaoLQEN8dAhaL%2B29q%2BrOB9EnsH%2BhgHMxXuDVeArotwqXPKrch9PR9EAJJ5qwPglXZEAwQryT9iOmAnvgvpGbxbw4p0P3Nx9I7ZBAhLM0Ba9vK2Cd76IeibGD0sTWRx2ES%2F0EACowMeN2bs8dGQRhmdbDyUAYtrE%2Bq%2BK6%2FlIvfCbA2N9aWaiHpuLX%2FdbUcOJj5VSCRbzgnPKy83B8sTwtBzcthaCdRJ34kUMJc4HeJ5x2hmFgN1DdMSmzcSLFmQKy5HqgPuDy0lNkWclBqoFBv2ERld1U2WrRG8T%2B8CwDNOI%2FtF93k%2F%2Fmc1u9aUGG0XbwEqz%2BUd3TfG3Cce%2BvlZyXq4V5%2Bk%2B4bmkflmvWvf8US3LgUTMcDjPo%2BMoLcmlDMGmcmePDjNFAYe4Zl9j0os1CxdcMdNXbmH%2B2QNG96Ow5zDcfuOlgH9AmxwLmCvAccE4WtwZTkRg3Gye%2FhyKSrnvOygQc%2BKgO9%2FYIE4ndhjX0lKf%2BE6m85EoocUdrJpDgfZyLH3JfLb6Xspg%2BmtTb4Hc0ellEjpb1sedOte%2B35Ew6k%2BzR2xZvVGG%2BOTZhaC1x0poMX5R2tNuJ%2BdfpEb4rW8RjMMXX4tEGOqUBGVnI71%2BmemGDdduW%2BRRpColY3dxEFjb1a%2BztO4jhfW5wG8g8qhsZYahWtvvYpmZT3xwmGiMkhmjBOtXAISxKdm%2FdU9ZtOIu%2Fj%2B%2BJ93PrbDzNqJyrkqNSccvx5kNSEzalYmux%2FUO4%2F4KXcnO8pEIkd0xkwGJ2dqvgm1dFGwh3%2FRva1VfZx8LnYVS0QTmqO09GziE2z%2BYCrrMi%2F7hn6ZV9CKTJ2dRj&X-Amz-Signature=0084a18237af056f2a8d4df911f00cd540ede1f7f26c7dfcef5d65d2e0f67059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTBJAUCY%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDombEpj5emeHJr1OFND5f4IBm16sSs%2B3tj5Y119%2B9MuwIhAK0TPxaZn5X3b%2BbxH%2BFbGLx6e6fodaVU7inecLEa2anfKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWPFwVyD0jrAWqlrUq3AOsMNKe65c1Fw9n7qqcghiPHBpumImQrJLKcOYXdNrHaefnh7jj%2BcTdOS3RrYq0rZjEhzuHE9MpSB%2BD2ty4h4C9kqqs4qFrizn%2B4EikMzojH2vR4%2Fontg5k1iN555a8fJ5zfu7sPFLfcTSwFmHjccD7Ar4EbuUx0SB6CrMTEVhesZnmt73AjjrYluJ7x5HJLFZvoClx7Lv6TmWMVolt%2B3Km%2BqUZizN6a7H09weQSMCPWunVYUyu2GM0%2Fu%2BU%2Fu3e18Y%2F%2BjRRLh4sB3SzyY%2BDeEVpqg5%2BIHWgOnlbG%2FDlbjB1caF%2BddJIyHoUolvGGQV8UhxoupyQ7Xg1KSJrtVlI79AA40grFgxX9xwB3z%2Bq9S4qeQEwiSEJ1nhWNnvqeir6BVi7%2BrQNHMbnPv1mgYFO%2FjCKTZ%2FKGI9CWvK51IoZkFDIFJg3Xg%2BeJQWNnKT8T1T9ttEfsufNQtZ8NQ6OI7xjJlUd4n3FrliQ9VgldI3COhhz2aewxp%2F%2FlxEuJ7QGFWbOJT0rLYnHFt2Ft%2BcRLinM6ZvZ5G17fD0Yqa2hvbebtCJy4VGJ1SDnS7pA56BngnNOhTGiLNC%2BrapY5LepHA%2FbILeooeI76SYaZmaoOhrBQwcdm3nH1YLnXMLOgv4TnTDY1%2BLRBjqkAf8TEkI0cWmuV6%2FHaPMjYFNCSzR6M8WIZD4sPchAMp9q%2FJ8%2FB%2FfhrkEZmhYYkmOOdiqXCh1GxD%2FzXxpkPRObdSOZ%2BKeHCabvtLkyYA%2Bvi9EJY5IBSz3m6aokz7n3ekO77hPkLA%2FjudQ9zlaO7XkEU2KvEMR3sasi%2FDjXRTzdVn%2Bb%2B%2F5%2F%2B2nUj0EZVEDV2jWeloNdk9q3kY6P%2FS%2BigxyofrgxcAtq&X-Amz-Signature=92c9200462b51eae060212fe4553db4fe36b9e8c725de138377df9f0b132b4c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
