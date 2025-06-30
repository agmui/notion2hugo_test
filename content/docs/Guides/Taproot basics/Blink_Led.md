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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQHUUXZU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtqIRIl14peImtTbS9wV%2FGs2jLXCLNRp4zsn4pGAAj6AIgN1ffQnfFCc0ppossODzS8Ugv8EGi2%2Bbnz9sGXyKWlzYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FoNqR35N06lZBhdircA%2FiFaAA8Ea0cPPbVjaIE1zg%2FKGp5jdpu0F9G0hkMLJtNeF09qmYwoz62pp9zASfjtAvhNsKV5XMuXxK2TgbKtX5%2BOUwDYUFHZV3mXJSoB0q2gb6otHdqUmO6AkXgINsnKSIJxgNUXXkN9bJJ6F%2Ffpm%2FuEBpWOiTeJ9loQ%2BtqLSDKDydlB9sLwI18Lc6Jkl0YQps5XBjn8%2Bj4y7IaXgCI0DL%2FeiO61P9h24z5%2FkJkG415EiLAjGVl%2B1P%2F%2BEYuW6a5Lnva%2FooxwTvSqslpdbEkpWBB5NWP9aeeh0NV%2BjLfQV3hQnZhJGb0X37Aw2jKWr19%2B7fl%2FYsf0BwgYTmdG84slFL3m%2F6kLo4XSnjiA7QYqlAlKMMh7Oz9bo3j77sq1BwThbJd3GcXG8HMwUIo2nDXHvkoA5Fpn%2BmKoScTZ2u%2FWRYAc8zScZjRQddLR9sMXkd%2FdJIScKWWx2ebl9i6Tp%2FY9J7EnCuvxsZpjiqAIyfLKc%2B1WpEtbEtt2m7867FUVLCa3%2BkreJ2ya2W1P3D13npp96hTd2mFjsndtJv8s1W3JQ%2BcotLjDEHwx5pXkkKjIRQn6BsvQAhT%2B4%2B4h1aWLCarAsbbswvCxG7TIemJbEOR57qP%2BcRCrkC8uQ55baFSMJzzh8MGOqUBNtzDH9sWnXnKwTWXIDsIhpuN3tM03PfDuUUgb1FQctU7WmBGqfDMSpxrhWq7uOWYAWf709OqiJz5cA7%2BOkMgLxMdXhBzm8H4ArL2KfiXap86nGkqEnAssKdKkgC1aV9YQq4FTGYGIjj03X3eDwgGEqcpGM6jHF4hFRmv%2BW2XwEXJIggROUu7Y8Sxn38aZpe8eSlhdClF9o6E2o2%2Fmat3wHcz%2BmS0&X-Amz-Signature=eabbd5b9bf161e86c8a5421977e621d959134b806620b8d21fa02d88313ba2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZ5MZIO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0atv%2F5T7BBvn3%2BgCuO6ftba0JPpQBuYzFhGum8FJbKQIgQO4sLDghf7EK9vsCls9MvnCL0StcNo72jZW5XJNWF7kqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBC2LxKLnlPukB9NircA6R1kmuxQEKbVLpMNwBOZJYFA3zxTBvL1wj9YrGIU48ayH3mnKysNsfA5272GwUI1QnqVF5NIQg5Xfjc%2BsVfH6GVprU2ADr3J%2F0%2BkyMXtSvH4EBYkjzpEr04xzHLpAOEhhdlzy%2F9VZLL2IfcSg95MB1i5HLrd07WASpo3yexVNu4Ogk0CnYkuYwMd21s%2BWR8PLRJvgKQnODAlLOij9eEeDY4REfeAAoeN4Nfyls3uyTsN963CROd8oxDbcJ5WXrScSUddiDxsLt83FIwWcuF7uOneUY0zn92ApN1OTryv5Dc%2BkZTwnkVJ5ZBS5CuXqe9HkK7GjIdGzrWZL%2FHV96BeJCZfC%2F7qbe7NT1a0TqDbP3P0%2FTRDVcga%2BptmsZQDMbX9XvTZFa9vnfncERcQIC%2BK7RkWVlfuIEcw0yPI9iUxJp9s%2BuLCE3izZMhAi3vaNCATorls%2BGx9ZW7KtR00Eof%2FjsrdsVRo54g71F%2BNZ5ARi9rddfvc9p0%2B2qrlOeMrt3EZscI9rFKyOjbKKN%2BGstbKBNFmjSmmJXhvrsTN90e4CTCVsIR3BAODtZjvOgmKEuR%2Bvt3TyP0Y8fOyLgU7tVaj4TqqchFVMdMjRf29lGNKc73s45x9lYcnCn%2BadnNMLLxh8MGOqUBm5tDIzLnlhoDPcaOcRox9RzQU63FK6InMynBdrHW3Vg%2FMtwjakmHfSVRnWbAWflbam3UnFY%2FiniV4IZtlBJ%2FqMQ1bIhx0L%2BrslRRZCUQuUuCJn%2Bp2Iip6L%2F9BZMgxVnDthzF75pddYl9i5JknIxQ4qn6cO%2BIVvOYV0bEFPyL6z6t%2F%2B1ZTCl0bReKTSCuAK1FOPuI51c6h%2FT0PXxf9f%2BgfE3VZ%2FnC&X-Amz-Signature=d0776fe078d3048a9894f5b0f097b292b1b8cc7ad5d251eb1abde02a9805009a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
