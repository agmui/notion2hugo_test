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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSKHNWG%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCICpZVNgr1pn3vkfbJpjnRTkLgxx54Kix146ZV%2FQa5m0vAiBszULYFNU4PS9Mc5fFL7lyZfTBGn6bLlkDFEEpQZiO7ir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMSdjd0DL3t2ELt5YcKtwDevm6BhX3J%2F1IfuZTFhOFjQNHcRRrrRgtQZm3Iqd7dT19NB%2BegCMdNdpN3EMdDRtuvpAHhimR43uhzm18%2BBRiW6aousHkPh01eJq8w3hpdo525WF%2FsU1azXVzF5N4udGcfrYRj3D%2BRgjwK%2B6oSmj6KQiOwaC0bLVOPxr4lFE7oFBTaXRZikfVkLfIzn6l%2Boz5kNsixur7NIq%2FNxo5sUQaXdJFXlOG%2FzZjL2IFRkSzepZ4ceM6ZnH%2Bng%2FU3n8AEYWvErmG84fbxUpJkEixzglvC8t5IDqQ5nSvcETKtjpXnr37NZYlhItTfIzKuE0d6y2J%2F2ZYeH9aKC%2BCAp7Om1G9JKnAVLlpUtSQheFeCuuD92uHynChgtbZc1kClWHEW%2FmLzlVrUKMN%2FtxVg%2FnFBIgc1iMlXEe4P0sww456hdinhtfImUqmQuCepJ4qskz7u48oWfItYoJ5McNDDdXS7LQE%2BCd5KSiNSJ5yvHi360Y4WPEgAAUSiDVLZGOfMyf7zqs6lsDTqWz63CWhWmfv1BnSFeR2zkk1R8tzylvjTnTkGseFXQ1KqQcMhvbnD3evz%2FaqWjT3WuJLpuvtrzhMdwxuAVPmJj4Y9nv5YXK9XNoaUnP5JM35zDZEZLx1y70w0IXUwwY6pgEHQ7Hj1BhsAnkTDOywhKELvd5EuNwJMrZpUCknd1daH6h9%2FhURKE8GX82qSow29ERT%2BYWawNf7rWZdFkq3rw58l6KxfVgfVyKVzneP7ae%2BjTFC2JNHewWpls5SiNB3g0P6rL7U8I7f9JPSCxGt4EPfdzTIO8gwv3BvskTi0LAhh1ApSQizxV%2FdetnazZN4dxx9FhmtNBiRx2lVRBxytFBIYGbDBg9g&X-Amz-Signature=9d7154dd2ed97170e850ccf8e2bd61de9ac00494dd3f09ac3f8d213649933c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DL5FDDZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCvwnORGWqD7hOk%2Bk9xl2Zh9aZSVjj166CWz6MX2bOB7AIgbUrAwoUuSX3OwMCPilGvYWp7crmdawLcFf%2BqbVvsY%2B8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOQb%2FZk%2BqJjYQFYxUSrcA57rGNGHOCy2o9Zth9C%2Fz%2B0V7GvvSZmFy8hQumXZzSX%2BjxAsJ0YerB5TusnYibtkQz80G%2FwYYEb0iejt1hNgCLhtNHfTqx8aSt6BumrAO%2B7Aa%2BvfBERMs5%2BPPcgMBOWDzr4K7sH5DCA1lnGv%2FOqVYmrXF%2BMhkfHlKcYuESSm5%2FImlCE9qtuFcthbTFiRvBvjnMFPyioBGBKDsoI1KEIUyThR4%2FXV5VyslLgKmkxs7vzYsuzCPuaCY7enH88iUo3PWc1hlMa5ZnklQlj5zAWm8EFCIMYsF08vF%2F7J6Xva5R%2FiMOm6HBMThUu57%2B%2FN28RRdh%2F%2Bzm7mE%2B%2FWMYZDxe8iGZolLa7X908coDJOkL2DTuC8JBi%2Fg0EPFBcA8bZirVf%2BlE%2FEimLC4LB%2BZN%2FSc9TbQOUruDESCLObiIPq3k%2BziZO1THIDDEiXYNXJqZK1qlgQDufOtGfIsqFb3EUMFcLCUNSUCP6w0IwSZcENzOdcXKMc28uDAB4mxdbKR%2FhLXlOq1RzS3SuTfN6ar00OEvpCuCCaKxFJVtmyWXcLFPhL6NVEujQbW4GB0H97NeYbuacV%2FqLDxPGv8qlNE1jvfmepv9I9NVoXHeuXyY4%2BpDZ7IXzF%2FBJi5lJAUtQbpxaSMICF1MMGOqUBUc5QH3lKp3F6d0E07ni3IRFDH0nWY64R618AilqQ6kDPqBhOorBFsCpbsJZoNTTyxKiXv5sSfn6sm7U5sV3t0o9IC0yOU2XFf%2FdvLciHWz3a4iMxOgdc5h6qvJmRwcEzrmJpSY57vHTUFEYOeZp1cyX35FEOnK0dK8AlGEokO23luy2jiKZN%2F8fp0XEAnBEoXUiPfgArr1W9iI47XCUvKDs3OPIm&X-Amz-Signature=9fd4cc294f468268f1260de866f4489c3cb52f231069126caf00237a9bc190f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
