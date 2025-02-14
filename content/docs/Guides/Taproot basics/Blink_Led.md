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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVZJC4MX%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQDg0ZTuqCD4ZA7lO00x61yATPeGRNfggU55BU%2Fwd75JLQIhALxcSFT97dciKBJwb1wRu14%2FYqgsT7GXhSOndbwn%2BezhKv8DCDYQABoMNjM3NDIzMTgzODA1Igyov3zUuagAkHahTEkq3AP9e3p4j8ZAnxC3Ar3lZwR4MKVqvVHFbDiX5yhCKvUic1LXbAQA8P%2Fo9xloCqgJLCXiPoFM4qlWTHA2enXGTUHWF7uub%2BCyjByIWVKkdLPAPFMJw%2BFjuKZtwfxs8jOrj4A%2Fy8726JvKHKQTSgeCP1%2FSBBQ2Ds3bOmZpGzHIwv5wM75CkNlfKTz0qLhDjvPjdS2UdtHEStIJvK8kaIH12aBjayL5XHOdUxr8YMa0zW737hk%2Fg1Nl%2BTr7G7mqySlXGC63VWw69BDZwS%2B9aNR1Wom%2BVLnWP6mYjA%2BJpWNPrVDLlOYM7HNquaUyRKm7vOj0lxvqxsLsdNP7%2F7AWurcInWZVnK%2FEUeqwi8wCLyWeTnHYhgKVpxNK4gjLzod9pgQdrQMwdCqs5aVMF5eFLPf7fggghUQ1GrbCPn9MFVm9gv5AVebeFFLPtaFKiWQ83YVTljrCyBQKJw9C%2FoItSbNMSwATSTHA1Qa819mDjmyBYTzR3%2FWgN0AeDazuGsYGoVuJ2%2FTIkmAoYo%2Bi8yxaCU2iJ0PqLZndlFQ%2B5GMegL4xK1uFT9YB3%2FQHPu2Ig6%2Bg0F63epluxnlqCcBdMwj28KQSKIhADz1BWI9yPKuInJQ%2Bw0mbeXyjorzGUYXMdJNL1TDO0b69BjqkAUDxgDeDC3lkEintlgOmp1ue2bV9SP7Jjk3sLaBK2OnWby34Cknt0xZRR6i6pY%2FGqsqLhHq1VtSYHUcnDYa79WsIdQeCnJwMT3g9Z1p0N7%2BIQno1mu2Kcy3BIW4wMPh4x6%2BOn3MKtz2JERbRkjRQI1wbPA%2BcW0V6oMmnHHiCOBtaxTju27hCVOBAHEl58AHrTQr1q9IK3uZ5NZqx%2BvakooyD%2BuiA&X-Amz-Signature=5b493ee8b77ea9b7eca2fd42eee418b7b030619a6c5318688fe698d283c2c208&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV7N2MVV%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T210248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDChswhGsHQYnCjNrF9DETk2S%2Fn%2Bde%2FdlWwdaW4PllcIgIgbbqEXEJFkb%2FXc8f8U1DS3GMiuVRRr8Ih6QU23hZDGqAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKzyO9f%2FCHdDPNuteSrcA6gz5MiJb%2BiFM9odOsLXKeUohkL%2FFTjKvdWgUjdeKBsI0QqH1ze%2B0UJOCPXfL984lzGmd%2FmB7KLxr8b8rI%2BVBfb02GEp8dD%2FBj%2F4bRrExMefqAgzFj0LQ1V9ZjlWGM4mGTC64HRpvfeTTGiritYdBDVOJqyBq4jJZjZBZBtER8guc%2FOcEeLktlhxutCaNNOaQ5iE5F5zNM5BlW9t%2FeAMEFGVzGF4KICVAReVbNxFtw6Jp6ZRVmfY%2BJTfOvSBT7YZcGpmXRYcfrs%2FAmePvoHboM5QLrrk2aBuXFVhGdPY9vn5Akq1zl8bY5aEVDW5A1WQfu3jIb3i0rU4kRvzIRWOyw2dkCYs0%2BSVfoGzrOlyRubMScjhOydx6zLoMDe1f8WCIN1C2ElBWYwrUIuHIXz%2BV2D3DVpWQZHrzfP5x4lVWssqC44XUy6amx9uufjpZFxkV2eaf4NAJ%2FLQMKvzFmX127QSNgOeusnx9hnsIhHddwAQjNl6wH5Bjhtnu0QwLFoZqxxynOS2tMCxETYD%2Fxq47TTJ73GCt3KUGQB82BFu%2FzmhgicASveCmtgyFN20laK9NZn%2FeUh8zwtPr%2F%2BNRp9SCqfA26s38nuZHNnfKxNxus0IwG80JEz6WkzhDNwuMNHRvr0GOqUBQHaxDajlnTIkF4twzlfZ7b00p70hykJAX97Pl4ENfJSOBWd%2FOGUkNBNhGpkHP9qxQN%2Bb6gEpmM9ZDHDWvUrv4%2BPFZzlcms6HmABI9qvOX1E91F2WKJgc2qsXlrhWGq9i7UUNWFxLSFEMJvDX189CjXomyyoqBuDXmVRvEHpf4fS%2B3zR4CS7iJJnAmKndlLSy1zaEJMGcB7BkEQedmqfVMY5Usebk&X-Amz-Signature=5eb8c57649626b9aadb5f5b5225a9d1a63d192815c35e940a12f6a1a0af818c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
