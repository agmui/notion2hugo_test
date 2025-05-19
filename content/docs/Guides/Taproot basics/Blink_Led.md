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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQA5IMT%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAll94N%2F7eyTf5pkKjk5EuCYGeErzDL64ykbxEnUG8MYAiEAsacWMveHJJrqcW101ei4v%2BUdK4LGtJcEMc01NWK%2F0GoqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKUkO0oPmmpUr78fCrcA%2FQbmuh36PArKUZog96uXvQMaVdksp7TxwzNPmDppFw%2FgoWtVkfGiWw6IbT9BoluVO%2FKvL9IRgWVCdHd2LSUbTlZHjeFHK130DFNZKCFfIZ1DTe6RKRrbchCdVNH1vwkYTT7PvwJKsewU8Wj9EGA18DJYLsXaGxkH2ocJoaZVxp8UeoQLzKAXfHTu7%2FPKSzrnxzjEub0cZ50QtSl40OfbMGlAnckUTLd%2BwDPdboZDpl%2Fv8Qd8ZnJZuzT%2Fu9b4U3oMDmcJ1PU4euIn0j9F%2B1heEqTU80966%2B3UZg1ESZ49zx%2FRCW03iVP08m6ho6em2T2g63UtIroqwql2FteK06RVdURZEj%2F2ukH0YgPPRFfQvwCYPkw1WJUP2nncWizZDk6OyQqENDAVAif%2Ff1CZ9Cw5fxS%2BwXsU8DmDjwWqm1gRQA43srptsyyvu12KRxBmx6h8vxQ1DH8hRNi5P3pYlXyUizAxkZQlMyUS6RYhv4aQSEoecEMNpB%2FORFtGXHng67uNF93%2BW24O%2BrF056xatEQDQ2dH589Og9oqVNyxsNx%2FBgnMmZaSzSQwfFDyyXlxuAOq64Ew1XA0u2myXQt0OC02u2wJAeSSraVakNP8Nj0bJlGczfnFlp8QLtkFz3MMK%2FHrsEGOqUBnroJXX8WdM1NvWr%2B3%2FPkcMK%2BCIxLBE%2BuIIP1oXCw28jy6nCjugwQAJyI%2FT0vgxs%2B2PcYIF0BLyMo7vMxoUvrjycyiX%2FuD%2FyLYID6uDKeLM2WIs%2BJGJgJi%2FGw7U72n%2Fzx2BVh8hQmjoKoD1cSG3593P8wxxApMnnBIraAbMU%2BAihYNAt1YWwR2HklNQQM338%2FfOg9Y098ks8mWWMVQyeuOfvqjnVv&X-Amz-Signature=963f203990591ffaefdcced6fe6a1c501115716fcafa8588fd8646af3795e6bb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMTZJGZ%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOAH2QCl%2BzhRT1bO3ZmJPYxrLzdzoY8GulQGE%2FekmhcAiEA1sQIPlUUDi9vv1ZIA%2B3C4n8gheBPChR%2B1Qz6TVBTdDQqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnfSOo6HxSuKEdfVCrcA9vhWr%2ByLjPntbGw6vYZq2Duv11BjbK8QsLgnlVqhYmXqwQhHO2DAiS4WlXREilrweH0H4eNKOn4l%2FiKLxzTneDUbC4QxO%2FFbAuyvmaIf3ueUltLIl5V%2FVSixGVqSOHKI7e%2F3G9ZSBDNcpglp%2BQDj1hY3CuHXsdKWFruFzLwNZJnup44EzR5%2BszXcb3oyzkA6kx90JW7fVKhBGy5wZgH08N%2FWhAGmqmBpeN5uGq%2B1QY04RLmx68Xsavr%2BEiisdX%2BlRHlVQgjeAz3NPxRTXS0IQ7jvJNIN28j6L3hq024DiN7%2F9Q%2FRjrLNYWVIZvET09zoakQKyNBNe2tOn5AepIow1IMp33za2lAtCmbBDwj93aNprr%2FbBmYv4MGrgbdW7RpEgCUmoFHHy4cX8he0%2B6eLDDeO1xZjWdN1%2FXmQT9MfYWlHKAS0brbL27UEM8FgoIaz3Ep%2BrOXeDgSZdoLegOHmQRYhSyDYKPXG3psovRT3OtxC8AedHzzWsriL5nUIScebEeSgWoeR%2Br3UBDb%2FbDoPvNlyMM3OKnzhqcmZ0JyDx81kNpjXBVF%2FK1khOv7hA87y14Pxf%2FZkrajF5EX0wiC64hDlxlbVwLPfVRyvaZxyx7vM4M6DMXRpyZK9ZFzMLTHrsEGOqUBa%2FRKqzRn1QUIgMFb7iq6EHyK4YMStZmGxa7kb4Syq3lvCsLnKK6O6S6i8yB%2FfBqs2IXRsZeNcAqZ9OY%2FQSC%2Fy2iBHsux%2BG2koNjhAN%2FSSYacJYZbSLqqnlWX2dH4wgpBjp%2Bdckb1LXpNhwKSN%2F%2F1TgJJ5lSfmXb6KB1rXpWUcNgVwG1v%2Fe6Vd9Yq3T0o3CavTvronJvkDoFwNucCp2mUYJT9Ppqc&X-Amz-Signature=79a07d13d1e7fe3284e95f2a209d17d996a8dd10c688e353d7d79f9519700e3c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
