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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VK6KTLJZ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQyGIa7bh2H%2BuNP9WohEMVJkVuInD%2F1i4u1ufMGjG3cAiBF6%2BmeZPH4cFgf%2BkwZ1HXc9yhF1%2FtCNPmyRZjKT%2BNmVCr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMsrGe9rA4%2F33Z1QFHKtwDdCx%2FTvZNdF6Q6uSoP%2FOWSVsH0YC5M3WopqQzrq2hDFJVMD1YQk26DNIF8%2FvmnVXruIzbyQiAQcNWTUYNx9o7mLVgh1i5rahjjt6BtMCBAFpympHvuGEZZqKySACrjZx%2FveXme6toxvdlYzI4BQHc5P6Ha53D8c4T2tEowXtZuSEuxxaIZIXJI2ZYKvSiKaCweHEtoe%2BwWZE3xcGxLK2tZD5UcEP%2Bzpxs%2FFFbGDfI4DIPXwBFc9TTh3pMAPpCgBGk%2BljX0qVdO2XYyaIyliFsUnmddZ9K6ZeUL3Jz775PPDRHC%2FgkYHkaYIh8LD2V3pZe3iK2n4Ao8oowsSy2Ng4ua02IyVSS0MjK5mk8K7qVhDgaAHAxh%2FEZfpNDIMTQfkp%2BXkTdEHVzws0NQSjEirCzMD4UuGHJJYjb9G0BazyY%2BRyPC%2BwUdRXg%2FqurDjtqamhzoYVuXcBX7iBKk%2BIP1d3UIL6neDb6aB2gYVXELario3NBiDWXBFng%2BV%2BArI8JS46WCUY3QH%2BQgm9auh7a5vd6te00qKs3XfNhisarJ5cc4hZwVPlLHZeQOOO7J1h2C2%2Bzi6M2lRVPa2S00tOMbtUP1i3pTEtQ3i1%2FhaChz2n5s7fWZHIHxRrAmanbm7Uw5eazwAY6pgHk1Q1kQPnmh07wcyLnHX6qVZdjYkzdidUUZxtTAMY2O3qHOmcaHXlxJLM8m5%2BPw4lYAUc6PCIeS8R2f6IoCByLQlg3y3VeLg3Ol857kRGiwaeUGdeQLJGQvOL7Uf6DEpkwMf4PhNtxoWHIKLto722H2pbcJw1Iv3KdxO2869Cz0rtHV8E2zamqVzjlDI7AwLZGO5y8hTPafZqF2Dcr26042nvQhCNF&X-Amz-Signature=23e7d6dc18990b4c96655df03812e7e7593e1b1ae6d0daff6ce94ea2bf45062c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6I7P4CP%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAgK4FkousY%2BwOD3VUdOExKIjkoQ%2BaL1MD121LMio5RoAiEAqZnTU%2F2scF%2F0HunPS6CiZLE7B0NOHwNQ%2FQss9MFTPTcq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDKTEDGfRkaoA7k%2FJfyrcA5L01cd3Dr8GPIuVYKWaPkuH5OmBicBV0q9Tc3LWJDFrwh8M4JCjC2sxu9QO6vInq0w4cwYDpS9VUACEtCuVBsXhWDhDmKEQIVFqmKJ6CjzVy6z2LAzOuLjnHcb6BRuh3%2B5n8norBr9xxAQQ5QxXKzPnpVfnz%2B4iwtsTiDqSTznjxKBOdYXesVWxPyNMZwhE%2FaVXT3TW25u8NzloQUtpDsbwtu3MztLPyM%2Blm3rLE%2BfhMhtHIFxo2eJuEn39hPRXLZ8NY1C2MhTqvm4LLx1WC8%2BPfakAl1QFf%2B1N4HtRpwSy42EUwZ6SQSxeuvDJZ0%2FBQ2mWkfJuxYPJC6VpC4zoHEIvOYMTb9Hu0c3J4IF4L%2BAMrDYTANTgMu7ktsgk2JvgX%2BKvVDlwPGPEP2kLV6AyX8ou5dh2Mow%2Fg6vA3rOvWz74k1WxJPsyYUfJZjo3tITKpeb77VztCO5HgXuwdn3wkjs7uB0nmUfmo3ZYWtcUN%2B7x3U8pK5cicMTxYOMn8yHx%2BHmBQJ35W5cXL1w%2BUDldkPBmp43nDI8jas25CXnXFB8qQAuXS9eeN7YO7f0R7Z7BeE%2Bz5TJRC%2FEZf4yiCNpU7YqYlBW5NAdeY2jk6dQij2ALu0w7mMf3hSdrtCL7MLzms8AGOqUBxL1TuvGL%2BCqp2EuJwUq7R4luZu9D86TpObgiJTFG6DZVHc2mewbSoHtwMHNdhZE2ALNbicU1ewoWNuCUhSCWI1Qm1Vdx8E0arKiapDKRKk%2FKJ3%2B2fZ7zrglOiV%2Bz0ANXlAakQ2X3U05MBcQeo5pgUrBYDOSMaat3F5a2Spcw2y%2Byi4eekoOB19dZr5g6w03bAZtyJNaZToBMEQbOpX7NVURyf8QX&X-Amz-Signature=8b69ac0ddc4905f6332d395cbdd3ecce55effe4eb51bbe20332e12ce2eef3f58&X-Amz-SignedHeaders=host&x-id=GetObject)

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
