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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE32J2DL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDdytAmJMUiyL7eK%2BiQuLUIR8BTHmmn1CJwq%2FbXYn6ceAIhAOET2HoBq8x8maxAVsnuMSJsR2Pp%2Bpyb%2F%2FZai9XeDlIKKv8DCGEQABoMNjM3NDIzMTgzODA1IgwiO3og%2FEFG53SDG28q3AMD3cj49uWpc1eMNr7VakJwkg4ZebZnTv7vdRT3CgQvyrdaq5yDzJNrxhJVzwNtAtY0cQ5IwtaOPEzK6txcRpAskjFEe7F9RJsrwvR86Blq%2FDLJKzqUTjlRLDe1zYWYqT1s8LCH8b0AUp1DWQa%2FVy5swoqSe6hfDGVbbevacT2Ca3pYD35NgIPw7Z15w3x53tGOVZqG8H9uBZ4Qwcdy8zZrXtVK9%2Fkq48NhXuFUgVaYUevExxe8sr8HizWayo%2Fe7gmqzZ4RMRsqHEp7NkZN2MK956jkiJjfsXjO8TyZQCVyFEl7H8uVUZOauP5rNCLkjFS6kK5j7snMIRbR90v3T99dBYJzzkAYhrLVx%2BRlqNB7MEN0dUyYN%2BdOqaHMjJowI5g%2FVfAGtOvj12JXRzUA%2BlaqlUL8dgoSwGwhKwmU9pDOxKoGjY0snHOLY1%2BCFvPI2JcQuhBeLxg0NXFW%2FOajXD2RDa3Lk73OnhN7eLyKhz%2B%2Bcn7aV7RYnJXl9WdWO%2FgSESvIlk8MQxpLgwhB%2Ftwe6Hq1b1vcaWjYf%2Fkj%2F5TY6gsPI7ev7rhRnkF0P1aHbrhN%2F00dztWVK0U8NPpBi3j52kBnPMty1X%2BHKCcWmN09HZ3ZGfZdAWsOB6l999nglTCYzMjEBjqkAQaWIzg%2FdTjzPqHMKT5rvTAe3WXZpnHSXgBLTjfgLI35HJ2rJpeC1mjZsdvId2oKX3XaZGpRtJZFMS8Lb%2BAIF1yIYmRn4TgjGeW9f9suHyw2OIyqv0MTS0N8Yw2xDNiLr%2FvGXihPkPBqaIvOxMWIcg6cBSB%2B02Zmq7Ag9%2BAxc2Ud27lEavRjnkoCpBjEgukis7Rv2zT%2BJtBi6Pk5ZOqRM4aDhasZ&X-Amz-Signature=cd24a09a9445025dd9aac7ea2e2ba5a88af1d52f19c7d1134785cd4f6ff212aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F63QTTV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T160959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIBKJr4P8aCPUCSPuxvzAO5CnElM3NrSlWtbw51vN29m0AiBCcEMtFqFx7LHIe0rutSCHCKDCJFRMJofigk2dTZ5%2FCSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM%2BdL4RxVz7q7NXm81KtwDTemc%2FXkTuT1R%2B9g2kprUZm9GvLSFL%2FDgHPWvpRECzBVlXQCKo2aT0MlkLQxcLjxiOyg%2BFvoZsOgIaEXuSaYfni9Etj3hX2Wd%2FNlg8JA0xW5KMsH3eF4cgydvUQGshV0P22cBDAMIW8XTdQRKukhPxin%2BrR1FbU59XLacVfxvbF%2BmGNE%2FwP7UlOzCVjMXeNbIjh%2BrW0yoRqP%2FuvKz%2B8Czb8RAWpBjCUOBZCNrxMeI2RJ%2FD9lPxorQzn8p%2FMNs8hLXgU2jaGkKBb5ZwcFRnfSt6dUWroCTjeCbyGMSSlVS%2FSXDhrbhdubSc86kH2iKpcd%2B4GAfv8XDOBqNNl6xPKwLZpixekX6tsS0Y9zLUH6V383wOSiuiBPOf6IOlbPRE6dtd%2BS9ZGUMB%2FbPFqTEZsVLVxoJ1qAzapEy9Tqg02a0csGP5ztk6cqPSHTwaEasKxLLo%2FxmCHyemgrdO2Zphknmm5TTRXe3CnmNeEHU4ae8%2BpYmyNSGg5SiD2TENOtEL%2BttkpkZXPFw687a8feg9I7eb%2Bcmqg6%2FyVetBcN6OcdKOh1V%2BfPG7iOQgwVjBi%2B3JEYDNzwzRjGef%2BJkmH1z4kPkJZZ4ldQ6b%2Bik0rHnPC3TySSHirHYCjAwtojuuNcwz8zIxAY6pgEcxov4nJ9yRi2tvC%2Fdn9vznqEqeLGTTmAyibfWAD3vBut5uN1k2jKBAUKQsrfPDmX%2Fx%2BtnroS4NvBe3uetiXg0gDe4lCnIoSZ3Pg9hkHleHTuKRTXzzWrSFWFREucr4ciw2bHMap%2FmNGI7iDMIoz3EMgVmP3lqXWbL6NPxOD7VDNR%2FKjQb9SO7RmrAOuVla7c6Ssy06svgjFjw6NXy3MXq4nBGJ8Cm&X-Amz-Signature=971b9ea41e55300e929034de7420ef9a02080cca2caaf5f85f01b56360dbe901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
