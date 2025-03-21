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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q7IK6L7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCICCpddfQJzrnW5LyhvJ2ZxsX0CMB7FjtL1V66cTkRTmcAiBbQxdcP4sIkpiftvPKOKhSv50Sril861U0a5%2FPMs2D2SqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGDA4QWpxm%2FtGwHXYKtwDtLv9mczjsiPosSE%2BpLXm9EFianHqCGcGsqOvv1QXhmZcemp3cAm0eOvDHrJ9vut6A%2BUjecpDXChvcAyym7Um7zD37i3xUwxPS%2B88vZBXCZQG6%2BxHaTwx8dd4FvllKS0gFFRDKWKbC6kijaUiQNFFWLUfbr6wzlyFe5GXggRyynX%2B4xPfzNCsgb69YNujZKFGkxnD2Rv8aNJiZkbRWglTfDNDXMaAyXP4FTpWViQAZu6tvG8TISCQdPGLg56VZt21R2Wp8FAJI%2B6ElAAdSIrfJhqgLA5%2B4lFwJlqoKGq4N1iJWz0wEGcpOIt%2ByrX7iEjfIoIoTM%2FLCb1hHFQZGSFQ9HCL4gEQKI7MgV8Z2%2FKbljJqEeXUkROBfnI5RhpUfV0POVQ1ftAL2wsJIkk3%2FD%2BSVRbZTQM74Xe%2B0MDh3X%2FMOTG9jn4sgd3snRzpMHvy5WzFx8G3nF6Kmudr5yscj0Pcj3uVvcYkghd%2B%2FdbXv911abgEHGdsWJfuqz9vT3NFaAtWgh6MFW8xr4M13J3OUVy2nCzXrV0mCq7KS8O%2B2nf6kkZH1Halj02syEPFuFuHD8%2BVstNKIHpUvktw3rmfe5%2BcoQypwJOJZMEspJPHdShDHMgo6EP1ce17Kd4WSh8w1Zn1vgY6pgGAazuYs%2BsgeABjlvjFZG2s8qimw8BK49TKFZ%2FLFHqTrdHPvmb2gMc6AR7zY%2FaHho2ovrA%2B5Pd0ukJpeCoMktY5MUVXVOB20PZlGB5popSbIagnSjWe3h5wlU9LahEGcEuNTp4FNZSOzrnMn9OhMq34daidfDDnRBmGGIUHpzh9XoN7DKvGyoAIQPEnj7BLsngqNJ%2F34VJkL6MAqRif1CEY2ERrhgj6&X-Amz-Signature=ce4e960d174dc6f391c20d12fb6069aad47f83f78cd4d8c1804ba4a5d2b7d08e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG4ZFCE2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDhCNNodCgwTec07317RxVx%2BSKebycCIgoI6SYElOf4EgIhAKgLFck0Faw4tGZQaSz5ACtnWHQmxP3g%2Bh27Ts%2BhZgfwKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKcnIA1qxC1shKhNoq3ANDFMiKtuxF%2BSsogXCXkCr3Su1YRC46oKZNy8GcWuq8IkVJiUOU5IkTUc%2FagsNH6xmf6Ucis6XG0UopxEXPNqtYCk0UVDEdEUdttmYVHcQ0eD6NlPjJdk54PuhVBbX%2FOslVgVVYqDl%2BZyYFdTHC0jvJifC5WxsCjM0fMwBUAOphbbMTa8Tv0lxPVFYgQzsktaReJlD9BMTOQBM7cXesVvx0zPZK953f%2BLK8TgSDjg%2FC%2FtHn7jae3mxASd4bCTkmbxRCLSAj3V7Ij7s%2FHVqRVTl7QvlkGXm%2F4SYdDfBD0c7vP36LK0SwHnaPaeQIRe50He2n8TbQJshvj6ug707tx7Qyl%2FojrmW%2FBF3%2FvuUJBOYhAjLqVVVpkxNHlKKjOYMy9%2FYOr%2FL3UBWxwYmdPpmgauElAoSEl1CmnV%2F0hsDmuUAEZw4hGsean2LXEEfXdm7zgYyKmY%2FmzwBAb4gs%2F0RIX3b7MgWcwkR0XJOmNqCB53P3o5ud98wyp49QMKvM8CFVIY8JtkSx1LPatbO5310ATlJuJOsSr%2FJvBS9TDdqW7zHSXSjbsU6LpD%2Be8lCo7MgYLq%2FxQ8GA81JpQRr8vgXYBL%2BatToG1pKy4dQO7%2B%2Fu7%2B2Hl9hDtA973BT75hGruTDPmfW%2BBjqkAahvDMq32QuTgQn5lB%2Bw9amcL6i7i%2BQYUoTBbU%2B4mHYZu0JK3VUjnSq5eNNbIZ719Jtfd6IGal6C2hr0U3Sg4JpCUJbQwIIIoTtXcFW68oOl6xiMWnBDJFU5yKZ2VNe%2F%2BlP2dKN1YknNZu9Oun39hh2cHghE0x6qxk7wPinLp3GY7JNVqXrWVXifIzFmpKs5T1AjrFmB3mgPDNR%2Bo%2FSJt9lJddUe&X-Amz-Signature=cffef76691360fe772caa07b00246ed02c65643c9ed824888c34ba97a02e4329&X-Amz-SignedHeaders=host&x-id=GetObject)

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
