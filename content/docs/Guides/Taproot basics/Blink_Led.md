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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U2ND3FI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIElQJerh%2BKVr8ElW%2BXh%2FUfp%2BbDJ4AoZX8akNbSO%2BfRVAAiANccrAxJXMMhv7BpJW7wTYLMoy3pPgAExyrGpKq6sz%2BCqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlHQ3aEi5y%2BeL3mOFKtwD0pllU2tAfB59hbjWT0XmrFVfKy3UJOoJtdTUHvOo%2FAjSLSswA%2BsYfNI1qolb8xPZyTF8FQ6eZP2cV4A%2BxMOQV8pqECdxbBEhQUF2RKQc5HHzOiFcgFwRs1MkcbBPFJm6pIXBFyb2fvgLLVCsBLx0iWl2GF8N5H5I2lGP7xYM9r8o4OxhO4NtND%2FOIMXMOsOccX7Bez4KKdjrpun4FCIJKmzL%2FaRvM1I%2Fqm%2FNwE6yfq9u4kMFK1vxBlMnHOiK8mxxP72XhYI05yLq3VU0iuPFSL%2FxlWFAoHI7s2jC0%2BlnXgWlGwaJYyn463PjndgJpOKPv9pJ4aVO17BmcI9k8VSRdvHzFJ8rcbkY3O9mS%2BGX8fz9yAHG6Ax%2FKrA2fIOzyi4UhzAPsvpCB1UmeknHx4nsrq8TSz4hpy7hRsUy1cdyZRaUTSu3QpKBDFsrb78yeuplKjGxZ%2BHL8N0psEKGKhPbnf2JxQLTSluomGNCmbMP50rYt1SUAF8HQ4%2B4etPJPGbxCIcl%2FSLG%2FijVYKRyGtbKn6QwQtfyeFiAo40A7XeGYF3R5k3RkwIsRBavdG%2FahSPoLqa%2BUz3p2QKqsfedLjP6jpK%2BMiGPJA%2BMZ0UWWaqz0vJJTTpJIvO%2F5NTqVTcw47zmvwY6pgHCli2rAL0U1mFggGPt22rAOOF%2BFayRySF2ViBpXzunpUPOkXy2Se0MzdIeilKMshPPcawsz8mydQAwSRyeofnMnUrnROWUieAVD4oycvp8AdIkL4iih2%2BMPQf%2FLQ%2FxP37qfYulqQM8%2FJarGa%2FZZB7wYMwOKmybWGoBayA2vjXh5zFAyzbWiMZVjpXUvszLRVs1P%2BKmEKDQlUv5GVcU%2BBiA%2Bass400K&X-Amz-Signature=e9af32d3ca5c1217ec4272e644cfc161d59e6b47a29d56b602a4f64fca3ee42a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4A4ULBQ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCv7mddnoxUxg0ONhil41%2BaC4zL6CCy%2BEj9meweep%2F1VwIgVK6lpEWJ04Hu%2BAprOx1BtOMXTbEoYVaB4w39M6RPONkqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2F3jmm6avdEXHXX9CrcAyWUrL0y%2B%2BI00lzVbAsaJumw8WHHCgDQbBcDuze0T8UALJOQYw7zsiI23%2BntMoCAvGg%2FsZbrgYYoNtMgzmreRGMGvni8Cl75KmF9LsR7im8KiZj1gHIfcQjzNeU8hsNbXUbC6U3HwbM%2FaKKGwkPqIGqisqw4HWJI6QH5JdvckAGIDMiMHhFFFgw2XSUOQ4btU67QtE6riwgNZa5atw0fk71uTBXkItCJiyw8QCsyypmeZJ3qjF9BhExHPKK4FE5CVSPtsmKv5%2Bj1YXmRYJTerU6L%2B2a6ur%2BH8%2FCoeeDGKqTdwbY6wK10ONuSjonO1s%2F%2Ftzk8P1oIktphgbcMGqgxCD5Hs%2BgNhJg5hpYHFdXF5NUX%2BWW3qEdXXi77q%2FQcPr7dsl3YkKkQpnDR6FrkZQmOfjrzEvP1paX0GLbDohTX7564IF5naN9FBKPEvOE0QjCqpQvnNqJE%2Fpp3ytVs656lEw27aanHrFDsD0cbpB1irKXuAjEz7eVdqjE%2BmquuxgMt7hzyZN7y%2FJerlq5%2Bqr3PodxJOBiz%2BKilv9Iq4hz5H%2Fk5QaoHwTYN4bGePvzCjPpuomp3eVD0BlSoxtS38P9IK2IcOXVnG3xdK6n6H364O3Q5fDHEPNmA%2FMoecNm0MI%2B85r8GOqUBj0TNrN2RkiGB5OH7i%2B3wxssjwySGdmUhHNWbw3t9Ww21Vc49oeaoIXVhrlt%2FdD7nhENdc%2FE1bf7NqaV3y5eIs4v8Wy7%2Fc%2BCiAfVH9wQ6KUdd%2Bo9Yg6XikhKTWVLRQCWwBS9F%2FtMEOpcExOMM%2BTLOhfR2PIeqqZdnGrwg%2BFyBpOwMp%2Bt3%2FC18s5fNWqry5x3%2BN1iO2I1e7BpSOvXPz1lGxDFhQn1j&X-Amz-Signature=f0b5dedabebb1236889380562b7ba93f0962bcd0185ab80e6b7c996e3e2580b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
