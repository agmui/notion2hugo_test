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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RDNDGE5%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBr%2Bewv96BCKWPicYbskrXTaywlYJfba49ut%2B8KThiXXAiAEcfHlkN80JXkQm8gqhBjveZW4SAOz7%2BxwSb9m2HJzQyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwec1%2F4TF8E0VpgVPKtwDaaq3L8eJJ7MpXHAQvmSm6EhCVudOAuqosYlh7mTHFik%2BjezYh9%2F8z4HSZrXaikor1yJiRfOwZbh1BJprus6v%2BmfbOGTvVgDv1tMUuK4G56tybh0meHB%2BLH5oyWJv1tIpN%2FMb1J0npOz10MTQf3pNRAa%2BctTEGicVNhtQ1lkTxv0zeguabaYGNCMgEv5sf5jfliHhUrXXcjyxVt%2BD%2FrZugpPNnQMz9RPM0n8NbWr5zaTSltTkwxvASo9uXYbFEvUezrRS%2BgTmGj9hA8ABpAySl9jzQJrh562zGVU%2FCfp4eEWZbp5Md63K4kpaNEHdWnUmvZF5sKrfxXSV1xhyYd9dzPaZcseBgtgP1Wv52zhfEfTcAIy8OMQa%2FYVgzfyljvFJ0uio5H0KxX%2FUXw2Ow6ygy6%2BTV4aua69dDX%2BKUKc3ZldInl1lIK8G4Krvo4D66RMqFpM3DZsOcmfZdtqvT90xfhmcBmvOLxDlM0FsMwrm7HO6GW4eaGFTtipJJoNrnTa%2FufLvQSB5tNqBy8eSDTHdJbmELeZIp%2FBWxhXTiPlpiGvKkxrUveAcBEyKhyorcO4qwsA9NFWY3jZTR7Qg5NjQE2Tvy2w1eQBW2YjGqhh4UwLiMb3u8ei3HQ7kCZowxKvTvgY6pgGJuVdGSfqSFhFqJa3RicMHtWI7X84fv1SqX3rUH2M1giWzGsG07fV5kA8qTgCLF8X%2BR%2BKwx1JK2IRYdUAST%2B5gmxuSwOR3i4IXvSm0cKSVyYfDoBAku%2FDbf6vMmRNZ6X1l6%2BeKRyqtpologvs9XeETVnMsj8g4p6o3jtflDoPQOuHcn7k32Zetp3QVUDtrZV2TpWe4b75R9bDVYnQQ5Y4bGgbhpX3g&X-Amz-Signature=67ed45d486210be3ae386cdcadd894d069ec95f7c2dbd3c22755c98aadbb6878&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ24GP6V%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBPV1xwQvX0g0AX1XRsmF4Yw8CE1DTdVaxcEDnWv%2FMIAiAVaTqgCg%2Bko3eP7PfB74PchCdL5mcrB5Jr9Bf7CIz97iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGbz2fDyzQh1Ej6hQKtwD3W0LZZfKZIKfS4DRmu7BLHineOoLku67IY4%2FfZKshaAp92Wy10JXVsEwDFfKEql0Wr%2BuEOA4gvPTYBPkFTN3AZKrbVsZdAn1RrmF6sXCZwLHbU3KT8mWE5JXEVyMdC1UTYVxDa95ayCegVD7sV2qTH1dwgmH9NP7l5seoqxFSUSq3oAsR9fyqHF5iMuT0XtbUvjYGGTEMxh3Uz48d6V2fGA6fBFOTfIVcKjy5KYX8Tm2752FzhH%2BLqYFgGGR547BRgN0j8KN2rU2c0zcHUxRL8B1XRfpE5VtDeenJMcMx2WS%2BBaTPdxIxiEdTIJmzyQXyEOZfleuPqIpV18SX3sVQQ0itC9Anw%2FMWI1YPDzvssPi67zhH2labwjqI7MFkXw0UYh3k1H5MpCzC7mac9GVTF04Qi0xqWd5cKpK8yf941FLXQyXhVlotwBjTdIoq0IoGxpI6E4lum8o3NYKny3Kmd9aPadfDlh6i4aM%2BZXNwBI2R0AixBY%2BsV98J2eR%2F8rUd2f8%2F9p65UqJBlDAsEVAAK61gueCsqYc862Krc2FlKFhKRclbxtw8aYhBcYa0c3SySHw%2B%2B4uv9dO4oFeml4ti9GCCXRdIoDuU4RBgP1qDFVoqS%2FQ94SecTx52Ucw5qvTvgY6pgEdnc7UTD7dOMHIZR%2BZk1gdtTJYpCJ4PoTv%2Br05dPAmhxqi35V%2BFhnTQ48pMVMSL86t3n%2FcH%2F%2FeW7AjtZm1LlWaVfWpm4%2Fuaj49MqVSZdhuYfboHFixT3UP4DpqytSG3qIczgqaoOH2e9w%2FdNaFb6fC3nn9Z%2B8Uy0L%2BcuKLyl6OyN79X3S8oF4zSzY%2BjkCzKen8ZKHvOeZQMVB9fzZa4%2BZY1dzCA5FI&X-Amz-Signature=4b3e580aa0dc017660b29af78816fd0bf4c0a8a4fb2f98102a3727917b28da28&X-Amz-SignedHeaders=host&x-id=GetObject)

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
