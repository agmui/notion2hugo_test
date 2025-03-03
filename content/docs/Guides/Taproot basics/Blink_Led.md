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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2ME3WED%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGShe5pCH%2BNFN8RmAHGa74Trm%2FGiV6s72YHX%2FTe9s52gAiA65BgtFkWJEpi91XUEZglxMT%2B6mpZIBQ%2BP%2BX9oJW%2BqqyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwq1VpLGBmaXhYQjWKtwDMi2LqwvLzrVi5RyyWLSi%2BB6jBYLFEWwPaWeW2VeV6thF6PSqw%2FAjykVlRY%2FumIlUh7J%2FrdUCBFshkA9NuL4IQFwLG7%2BzLi0Ph6gxZvUS0Rwf0B%2BW5KSY7YNJL664mTsK6f76sduTEDMrYeJKBSmW7vL2AWsRe8M1As%2Fyks5xppJ89r9WCc%2BuGlYniDCIaPASzAytd%2BH6eerEuSCxZO82P0DmiL6kGmYfWQBE%2FiCNKBumarxyu4fXoG0r8NlYItAG7LRzMKfk9M7z0GtjSrXTBx44Dug%2FN5FJxrRjwh%2FkUXIpcN7sLtjUwOlwcxn6y%2B4RgM0njHo8G01bMAA48zZ6LAt22idg%2BTWS8TjYLigoa6wrnRVezuSCZB51XmFUpJUgj6mvQ9HqFkyAguFCRSpouK6%2FbQVvYDwKVcFGeq9xTmDNzpOgCZX2d14dU0YBL7%2BFI6VGt14MfeC2gNLhCFOcqQGToHg%2FposVnAM23GjRuO1ERVOLqLHqkqCrlMOe6ILjJqnLSAelnFoGc2kTaBFQPim6DSmlzyC9ijOeFIrWMlzVpJHwi%2Fd4rLyMI2vvO9HeTLediLEbDJ5rbR5Y3KoqNk38gcPn7LRSlpqJryKDcxWP8hMwqAqorCtf5ZMwhJeVvgY6pgHjnS9%2FQA6uL%2FqWpqpqBaa3KdyG5kMr2jriruMcAeOFrJ3cg6%2BcC2ASQEJM5N06beNMSsVzksTYn5aVfWuhXIGTb7QHU%2FNmQaRMUvZOsa5zBZz3Em9B%2BOKRNNPN8VOs%2BWW4CwPEa5ziEYvmkCuIT9GIxJmZCug4CxITbtZF2oVjkVjsjIN8aEWlgoffAdi90kOfdJqwbm6IOdTbX1jkNaNmG6YCqhp1&X-Amz-Signature=6fe21f7220289011c8a28e6262f01ccc56f301a99d253729cdee6e573bad70de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTQHN35W%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7hbChCnDly8lSpNk7xT3plZRTeYvg7g28NN6fSFiruAiBbEMZU4YbfRmDlayia7TgZrLMbyuazEIlm%2FJ70EKFMGCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHkWPvQxGoHStzbDCKtwDR9Doj9NXgpbjM2pfkDvHwzp8558le%2F6TU%2B5Qqieroo68HO3aKV9TKbuwMRGuacj6n%2BHQnZQ%2BTWJvKs2b2ZgLEwnC2r2lgm5jSxb9e1EkiQxkSz9nlrenwdisJwmvxaGTVk%2FuljKqbMizYSML8HOgXg6JyXld97v0rfE%2FuU5%2BIzzGO1dOZmt8SkPlmAVpWG2MOkE0iwicKqLT5unPjz6x5bZM9hyttD%2BvXhn%2BOv4Tx77Q3V38N9qW6%2BETD2dL%2BSJwJogS7y97ujiqogG%2BtuVfZr3u8uw0p6LekKrC7ys5ypbBfnzj58NZ7pIItw7TMThxKREsZrm6iPXSywnm0pJUU1hiTA41ayplYyl8HphvnN2At1dKXo04hnXf4w7%2BeYQrxfaCe0wPLw%2FBU4G5LXyD%2Fb6CubOJevufmUl5y0O4MCsxqEmVasGLCA97eYjh0iPgLShovaIclu73m2bqTUI5dKQky%2BCGiC2H1oW2L06ng9mp1DcXx6WHyJr%2F8NMph8u%2BAAw9VVA41NcSEB5YASNfnqiWMwLZFUriQNBRWDBTuKvK6WjgV91g5SRkt%2BMO5JOqLj9MWtjIg0aj%2B9Gb7kplcSwTOYocm8TkFJJXzHiEtbE8ZUUMusCOjPcFHoUwrJaVvgY6pgE1Rj2zNFrdlFM4RgqtuD%2BmEMQpkJlATXHKkgHJZnnaeLS%2B%2B0kEWTeDyhuLJrcPrG%2BW5bW%2FX2Ba8gZ3MyNCFuJeYG94CYPnGMLZqd%2FKANNMBA%2FPOdM7zos%2FGEPn3RpXKbtTuTbJaVnRmy6KvTNplM3q1tx2f6ttdbTrxiT7vGFowC3gN4fzhpZzBC2nRvL6fh19ycBwNYH363WkeQIO3Wxw0VTjEefK&X-Amz-Signature=fe08f30ea4cc54df0016bc7e90c5ad215887624ed0e3e29bf59d2ce56c4f644a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
