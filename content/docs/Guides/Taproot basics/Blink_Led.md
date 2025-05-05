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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRTTGMKZ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCqp%2BnxCM0sxKum%2FH76x79XVG0vGeC4qrYKDW0%2Ffmlm9QIhALLJK2jWgoWmgB7fBKV%2BqnybkC8Yb0AG0t1OXVeYkp2mKv8DCCIQABoMNjM3NDIzMTgzODA1Igx1xUz%2BGGsz2E73H8gq3AOtNGT%2FHvJATYfrw0Dj2YtI8Nrvp%2BBOIUr81H3IFSKFlgjjdEdHQfB09aQHl9%2F%2FbQF0%2BX%2FMecU%2B%2FzfCVrQiR%2F8b7YAaiudK2pQdMZJXNByOfNMrmUdD2K%2F9%2FRdK2RCqEJyhnPXI6PDBqn74FHWrLu%2FKuFyLQFAHxJpX2x%2BzNg4fm9Ui9L6xKjqX2SYjwCgo8xWhSmXCcP%2BqQsdfa9vKe8kZ5zv65Da8aP1GEZ95vfzKazHAGtgL8VYTc%2Bdgz1WvKhH5wKFgmRDDh1zbBdbpCWU4fhykUEZIb6D5z6c2ImyJ9wHHISD6wYb5sIT9WSxUuh0zGsS8e4fZdcFHbOB8%2B8K7j6eulK8vXoY8AXs6vJNt04TcIlWt9Pkbfc315VdKC8N3IFsM1Tdwh88oqZlctFJ5lHVIdt0vhJDT%2FksdfXiDlIhe2YouqNu3xgyNcj5HbEAiPPPvrwlpBKaqC%2B2LI3jugA577mFIfQvms5V46oFiLCd6Phgi9fr94O%2BqkibEol5DRYlJBzVJhm87yDzx%2BhxKR7ayMcb6J5cYgLqv0%2FNvgrEEGRUpe9EKVeUymr6L6PGKn0JiMae%2B9ZQviZGu5mvGGef3P3uVjslw1yKtgnXTyIa7%2FGFDNaZc0seGXTDcnuDABjqkARzD%2Bh4kDXX6oOnHwnZT7ZkK9zL1ybmsu4gW%2FH%2BvnNHf8me7Ux84AxEyvm1CzZ0JQAz9GE%2BVkcMvUSjiH1IR0lyTMwNJ%2Bb8HET8l%2FM8jhb9lrKIN9ijMVXPVzlOsbrdw9KD7wU3Aay7oK81nsTvZrGGLlwFDCvKsF7O3AFhtYSW7bpjFf8M3umJvVXbPRQN70fLNVR0MwIABJb21u%2FxWnFN7BBCs&X-Amz-Signature=0717c8d38b597d8bbba3621b096e8dbd0687412075497ea672d4e464b01f4f32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP6LVLTS%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIDX6zx%2FKtuMEBk0AAbXQznscTIP8t73S%2FIT9w%2FgP4kGBAiEArdwR1a1TNgnpCcp2A62whqL9z2FPbtRCjFBNPn2reEcq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDFtdCLBn8pfNCHS6GircA%2FbstxB0XGD2%2Bb2s4AGC5FRRckmdWHqm9vvpeRwuobEIWrRMlXN7jEU6R02DQY1vnGfryd9RkAmCgzXSq3LEn3NlzLdMIZak2fshwttOjhEM1WTHzA4A5FG3K%2FDGFTatinopPf5GE2LyEXlgpzjI0OeUPX5qeK5DDY4VEx%2F57tXTGGcixUMb4tx9B8uwliHIEIJuwP3NV0lU%2B18IMu2BnQNjRhyvljxUpSh8bnOzIdJz9u9m41LKWXn1WTRodpYS3FOGiklP58GxdayD%2FxgLmUzL3Xz91LvXhBvZsGLxvOS7TqX2Wtc47IMxeSGILnnlMX%2FFjkKaP7AjC8V2yA6sG8uEj49mzbgWjozQBhDrOl78%2B0Wm57rcLEjF%2BDUmo0M2eSM3YpgeGyXTwzefSwS6%2BeMdzac0MbsT5rf1FQVhuqatijim7Q5%2BUoUoAwIJ5n%2B%2BJm68hnO%2FkB7gpCSYShGXoMApwyc8GwEcNWYdTjY%2BYcxRwoTeodNWqxjjH%2FUgGx96yncCiGoUBUqDJECNLe4%2Fh1fb%2F%2BlmZf8p5wfl5zGQgT1adzwokEO9RtjuAhZCPiGBkTA07AovxGRAMh6qO97p%2BVIKvWftz%2FyT9WXVtXf2XCCM4FU7LyNv8ltiSyYlMLqs38AGOqUBzZv0PEw62u9oPhBWztiZX3qEeXoq9efhxSqAzaMvp8bu9sJUZp3GL4wjEUEiKP%2FVMG6l0hKI1dEWCbe7bCwcbMB%2BDcSIV3D4pMNLreTSPl6oo%2B677BoQsgYEliIOnIrGs2S8xHJJ9XAOHXjTFWMEHk74AklPrI9DJEHgC8Ab5ZvqejmFgDa%2BBq7SwQZlk%2FReZcEETVKbUfe5yTHKRGC1AhDK2lAT&X-Amz-Signature=217e6a0be5dc6d1ef124f05ab40dd4b9f54df359f9f80d3691675e427c45abbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
