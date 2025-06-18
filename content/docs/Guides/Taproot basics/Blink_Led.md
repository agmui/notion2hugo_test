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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ2BMYWB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmXAWYK%2BmlgcF0wzhAMmWwxrlE1cM29QV6iS6n%2B0cmdQIgM3al%2FPjz7g%2BE23DyoqWb4nk4RjL4eKehSNgTUONiJ8EqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvOX919mrb5YZI3mSrcA2z%2BFFpcL8pLfPEJ5HAN5DX7F60ll1NFeAo4MG0JHDZJLbL2UKo1eHpp3PcnESRCqGSrDhPjRd1vpWGUnA4OpUr%2BSxhmWD2XUidLbcy1qFFYzHaazksJrhZd4etmEQJWTtMeJSE8k6EWI6DHss0yWv8fhl%2FRH7JYmChSbzIYrJIg4QO5hX4YudulDUN3jgRMCdxRxH%2B3x077zjunRbtVP%2BlUdhXIZcbmGNwTtKDA%2FJZcpooONlil39YxEo2Q%2FPTzDuSpN2FfPTx7v7Y%2F776BDRCIm3p%2Bzp5oSu5RiKHV6AqZIkT9o3Rryaavtrd4XcehtFxnfnokbG1nyNShTPNn37PBM1LsVzkfpdWDouxO4gM5qJ3Pcp46m5K8BaoNTcgoB1N2J2wv0Y1O4fS9P0NJQpTTkL27ZVoyVctwEsZntfOuBDxgmmQ6EJhoZ9Xx8LX0gr%2Bul0W8gfmrTnpUdWqyQKqsXR9iL1Mpm549d8ADUy%2F5LqTAYaefJIdatAsBWswa9Xj6QvOUQJyv9Tz96mHPVt6pT8i1I9Esxy%2FEe3I7kI035zF3LvhlD3lnV5MFxdO9Nvgjf8a5pk1mkb70pp%2FPOdZos%2FJp4mu9dMX7Momg3QCnmQYyTuv6AaFIV7kJMN%2F0ysIGOqUBVL0%2B7Gzt6sbVkcvLtgDU%2BdjOlBxRUfx9nUHgka8IT0g9ypereNiiBqi5PKEkXOhnTj8Lb2AS1xYwBazFkhWxXhoo0i8IEbnz7FbeGpdEo4m5%2Fwx6p9GDVCjWl5D0956uMntl2LzLW%2FCxJVsdF1F4Y6WHj5GA9DcVpMG%2FiVJhgWZOufRAdv3YoziPsqYr46gVqT62ybFgMIc489K8q6EiCg8vyuRD&X-Amz-Signature=418b8a0fb0568d18c68795de717e4aea35380dcb0b90e001acc021896816c385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMRBTO4X%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1AaWT3CKxPUlDz09PGZG%2F7XgwAXfE5AE4nIT6y%2FzINAiBqha8upxAwE%2BiUBTamyZjr4rtx41ciwAeW1Cd4ytrnnyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcZP0zvrbvfF5qQjIKtwDs2j5YtX%2Fe5SBjVlwQE8wLd1Z2GMVa87LPCzJhBJ04yPSPvmuaZylT0mD3y18XhxHyOgD2MlSjIPhv%2FC42guo6Kk2IOHzrp0dpDe5pKS5gucIL%2Bz9ureLbIB%2FM25nasjoKFMgilxh4197czZ6ppCKNk2aZqLmm9p6vrGRbNT9rXvsXM1r%2B1X25hHKyn131aNakSxQos0oBDG9ULNTIzmZborjme8LE1THAWCZv0u3qKkPmcGQnW9UL6rYVWpGO8mvaQDrFOGtziKuynUMB5R1hcBAzh6qAZyoHNxTDgxc4ku%2FEYwQkTXOpPn6lgJwMeI3a7PiNzs6Fn5yQ7adbI2QIh4ucqxCxTSzie0%2BYBVoNnVnRRuLqL41fT8LShVK%2B6lS4753Zuo5d7BbLOmGb4b4Ywspxk7fFVMh15V8XNRKd3rmb1Qnn2T2%2Bjg8nyDq7d0nmcLiskvApTdnTLbdwWjrZd7SLJQ56R%2Fft8D%2Bb0B7ppUlr4V51AvHpc%2FWi%2FXnHsfNwRuEyqq1PTvwmSSwj9qE2Hm2A2VAQRP0A88hsldfhug4pGXxeHmzCiqrY2OyTh1OaWHct%2FfEaUD7d3vbmHiHUxOOyn11n5DufJI4R3K7HmN2qUPAvIWZjwDZWEQwuPPKwgY6pgGsQsl3qPkNX9PceQrBGYwvbqp6TCoELkg%2B5dD8e8%2FWX%2BCRUfkDAOmhAhZARfkkR9hwyKKbMrlb%2BLE8TwX7JFx2AdLoEOOJrg0cOqSGEV%2FufT292OvP%2BmQNm%2FqFSAVXpmIz4w2EmIWrA0v5rGB2ZldDplX%2FB%2FJ5W3CuluvJ3VtN9gD99d3%2FuWkafJtVBE%2FKA7ZthMR%2FR3DAfBj4IjzMkl2ymCv0WDCm&X-Amz-Signature=752c7aca85011e26bcfdace572e9990bd04f436cf622c194b61ee3c42b43bafb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
