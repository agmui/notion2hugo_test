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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KTHVZ2D%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpamSB8rjZKm5nJeXmpVJIcfJ9SJcmpj8GkI%2F1EKTkegIhANSqjz0FJiAOUk%2BQeZFYoUsbpvfXlENcS1%2BtaPE5e616KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHEN8qdMc3PFr83RQq3APHx%2BANTPNO6RKUOxvaBUqqxOeVJ0ZirzjCI37HJUZiRp6bgLfK%2FKvxYL9fCBmSYOJbF4u8Vs568fj%2FEdRGXFtDgPRBvow84n%2FslcU2zlqzvWDFo8NKZ6V8XD0t1xdWUxvgBTOW%2F2rXCilsVBsLybrwlG2o%2F90Lgx4COmCuzK8sKR5%2FOfkWVm7zfpEqbeHYJXXveaYLeD2BfRXeNauFNiuE0MQJeCSMleJFVR9%2FVqs%2BtMywYJrF6MgscGPXV3s5IGtCuboxGhjarzu57fMy6pINy0n%2BTNaoXao8PJ6K%2FXLsiMvHvoChqm4NmKKxsqD8RqJ0X2%2B8jUVnnqVO1d0vLd%2FMUDzJMsgNUgg93n9amNWyRWQCpCBxxCi3XluW%2FhBszk1Gu7Z%2BF9ZUAgvmxLS7va9yr0u2tuOgk4vl%2FKqRlakgWMUyFrckTbCcgfw8%2FTw8slvxSrXB%2F87O99T%2FcmTD2Bv0wJF%2F2g1keKKXVuf2w2WXyUVr4AiP8Ja%2F%2FeOj%2BjPmK0gmSGdQkCwxaqCT7sA4FQhEfTcfT2gdf0FLMQHgzVXH2qiSnvm%2F2wTREP5NJcPOaLjscKkzAwSL0tt9821X05MSLrxQ357nU4WQytSHoHFihth1uEaIY50spzyEPjC8%2F%2FzCBjqkAfNTSQIjtTvdsPztUQmo1D3YHRZLN3btpfMxhDrTMAIQQbJzVu341%2FLoWlGOwMlG1k0EBH5kWeG0JPnbz4gY%2FH6It9OAU9bcneuszFZYVrIo1J6L8oHG59jebheMoO0RBeuOxnl9%2FZ3RoePEyRmchDzPqyKhYTjGiCI95YO3X56qvzfZFqwaaOi69O4G76%2BgTfMrGeu7BncCvjjvFz1wgxFQa9fx&X-Amz-Signature=f1e368561cd0d098fb5e76ace67b862ddb25a16200eb8101050634bfc69c2913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4YH7SBD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T022810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCps3Gb8NQtBDAx%2B3BGpOBVtB2UkwwBc1So3CQwnPRMkAIhALFUcMPdG%2FVH1pfoDs6XfGHZHc62d%2F%2Fv9f%2FNusaI8zmWKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYhcQ7Pr%2Beu7A%2Bu8cq3APB9CLT8H%2BWWRqdpeLr3JtaTc2lAc%2FlFUsrOixcLa85ZlSUPMUQ232TudNB%2FzBmKLs%2BH0J70JFGZalRbkI4pkJyPomiZS2wifw7sduDqzpmcix7F1QCVPjGsVrBvF3kNXyowTza8ppyKpWVsJm%2FybfGpsSjM9EmPRlRNBgDvJBeJ8YN6H7xsWm%2FH%2BUgm7qb%2BB93F6kHliPGkGbt%2Fq6WPYtdT8Gh1%2BAgPuRjQa%2BdKkpGmPNy%2FQs8ftunDL930yoecjZFydd7w4d0DJRirTe0HH1ZU0gkxVLZLDe90c%2FTjqdtAkBkX9uVV6WoiM%2BMDpIUDCb73YTnv%2Fb549zk0W8eMuhC8Sfa7Wht7jeStOkl84Y35M8t5AqBBZTasfaTgC4lmCCFtwPGJkgBbNzyF92krDdLWi9u8kWNEX6gSrZs7Vk4bczNlXyvXcyodnqehTrfZzca9xMdMrMkY5VenSsZUuwSvK6Nx%2BrJ6JguY%2B%2Fa80I%2FYo3vheluVXAYoc3j41AWsiCeujjdp9Vqd1y5cQ0PPUxSY2ll6grChG4n3ecO7C9S%2BvYCM8XK%2FYFQDVPjR83hbGCpxcSBZi5RvC6469URx6IWsGx3zY1foSrGia%2FmhfNcnzwVmL5kW1U5bZSfAjDo%2F%2FzCBjqkAfXHi9oCV2Uk2A%2Fh0AMZUrnX5%2FVVkSEC%2BtnCet3bnORBMiAm7CCedFizG3%2F6FjoAijvvSXOKI0wG2wA2dQeZ5NKgcRU5EjxYFN3XosGHZOMSyfwZnsHr0RP9BFzrGfFg%2FbnacdrzrkTm9JJy2e7e%2B8RyzGN1W%2FmZ5PJZMWPFfwz%2FPj4HPJOpqt4nHHrL5Pqfdbcxy0GHK9xmKXGnwFAQtRAYiIir&X-Amz-Signature=77c41e5873d7b33936e8ec9347a8a598720f2e502c04d96faa5871d3421e6adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
