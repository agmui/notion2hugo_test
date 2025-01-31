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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXTQMF77%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHaIELh4od9hs0YVAWWtphlFNVFbGp9pzHAKKC6kwpigIgAK4Lv4IEAtISBr%2F3o1mWB%2BuTDnM9%2BCcOHdxachyhZbgqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL14Gh8US%2F0fXBppzCrcA%2FZBat39%2FL4wismvwgPNIdMqzRXUNtZktP0HvHDAxxU1n06%2F7VKez%2BDRlKqoZR4FSD%2BKKfAoKmIStVHiRQc20daJQvwCKCfwvxNXukhUBh25IO9iPd4d3jMQtk1vGg%2FUthcynHdL0yVSM9jAW7nxONRZNKgtfJOlxlatTlhefLz7dvR2BxmWqubMGReAXby3PSXzTyIoPMT7ghYAxgIrxsSKl32hX5j28P%2Bobw4ejSSj6Zu5foAbAujV4bzoNqHtTJcU2EDR7oZeBDgi9ZXn8gNmehGyTdiCe2uB%2Fy5oTjhmbDudVKHFqc%2FaJa0qfmazv518Q%2B1bWjiOBAmiuiaI2fWwmnEtCl8HH2g7i8%2FAWuBmPdyIYXt9ALT%2FClTC9pd0gsQqfyiL4PCLq5TKb2LZWXL3I7RGI6MI2lpNiSS8SzUY7NgOvOLaQPQ44qvCq3pDySD%2FOtXyup8KyWXniRXOzq8KbxBF3ln8IJalEqBEWx2CPlZkPvlDlA3x%2Bv3z4eMsCIJaQ%2BUpRY%2B4scgYNvtTQL2cZPmdhxefnZYbJPEmVlEmBw9dG8nVrNJQ3Z%2BxU8nAlcBhRhklHkYFvQK3DD1E9W%2BNOjwUtOtBXEbfNY7PxtYwOyTOTsVrgeREVn3NMKml9LwGOqUBnCVvmg5w0%2B80FIRubMiQS%2BmlYoXlj7ax8BnCOWo7iO5oSmeOpDceZITesAXyTjeXV3KUquXQuXbl5Ii8UwIr8kdDKPKGLFeyVCXqLeNKSIdy3TQ4TUlVbpMscQpTil4Sab%2Byglx8qYFuTAQaqiijaHElcaNJyjvMUgg3xAeiPnh8quqpfhbnM0dpBlbirTu0jzCbtQv8DwJ9uElQDGj7Cexsneon&X-Amz-Signature=1f75026cc3c7a5e8648f0bca5e29a884dc9500cb01080072926c549e565042aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EX2RGVX%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDl7IuX%2BwK%2BGxjfih2besTbUlDVVTpvwF2OgXEqUn320AiEAj3OQ%2BWQ5vG2Xeb668TpEhq2YaTBjXOLR4D2TxOuwdMUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiDsvLi1yz5IRoYCCrcA84W2tUPzGnhkfcOz%2FG%2BEs%2BJj8Muerf1CHbBnh1xKVeEDEe4nHQtkXR0881okXkZgu8pVRpKQOB5qmNls9psMKUP%2BBTTi1e22sRrWpWh4oOT88i8L52ZIZngyYYOw05zH1Hk6suAhACwn2wLckwEvjCM%2BF4GBCuaamvLKdJ1ka%2F%2BYuds95jzQCIUcKOZRneRkvhBEE8O0Xw8R%2BVKJn37dMw%2B1d4k6oF4FAM5RbJDdnMzUGITWnAVtWl27%2BOLw%2FbICysungXq4hiwcc5ywwyyz2he9i1sNmOORI79p7VGEM%2FzGwJi6XUFtmu6UOnPW%2FIn2GYl5WebusIwz7V1Hxe2LC4SsPecfgcQccIznVHo7h8vfolH2Kw4zMkM1nWzuo3Wvo1LEhe72LWe1vNBC2yf%2B9dYdm1Or4Pz%2FJgmSm48g2lkN98hRzQ5DvuzhqrNZbwlSgqvxbJqI4mA7GsIN4qzI5oEgYq40ZSHAELAZJ8TCUXVHXorA6JaWnjiJ4TjagM3my6nEIeaH8Wd872rII%2FWDvP0JbHVym%2FAwUKnPpac%2FOfmh4FNkjVnlpSYOfJaQVx7rObJ1JhAIAJFbxeEh2bWk9TKAMROrXGwyLuj42ejvjEFGioULjWR7qmsxBvmMOql9LwGOqUBmaE8Ds%2BLSnP98wNGcqNgJRE6ytj3YQcgSGWQkNlTAYy9ON9Ez5IidIYmWY5R9Bj8A0PfMyZHhRjcgqiwwtXowHHmWHnvqzmavMoNOrDC9Jut2MjIBsHYOw3itAzTEh%2FWgjFjCjxEXipIZBiAhZlSQa2aRbP%2FnQzFXMClnPetLjqsQuYwyWOWvphzxMnr9CTM9tHCBr7pTQ3ulSZtJB5gSb0RRCvP&X-Amz-Signature=77f8d27059f7a5f453541a355436aca61840c89d9976a7d8eec00cb56c435279&X-Amz-SignedHeaders=host&x-id=GetObject)

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
