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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W3FYROS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuOhqEJqyNavk6vs2SYzWYOsrXpZcU9D1V7rWYP19dRAiEAnDA8I8lsV7cNsdas9mI5TGTPaCIlvLh8gQa6HoIyrEgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDN1ROLVBgKTFQw4HmCrcA4oja69%2FF8rvAOELExmJDuJmWBbAAlrmpgqMZE3WpkcBZjkZnOy%2Br42tr0hzzlHhdL2tgvqkHB%2FUzX34i1YOLeuCvFndo9FTCexVflDk47S9aVqwMtXiLL3GvZr7ylHNV0HkhNL43Ufl4H4thOY75Dtm2xTBk%2FvMmDUmKX%2BHNPL%2FMXQJsIx%2FhUFrOhZli37H8iFibfL6LGDYjCf02LWmIBJfYVPKdkMSE2uGKwQzOnSkMGWqVG3efIMmOSea1ZBxcBQFQ6dEibAHeJEFWzBOUNY2snqAAtdJmo%2FHnWpYxpugLEyUuQwfOMOFu0YlvypnVO%2BwzbpOw7Fad0g3p5zl2sG7YVEe7LLhJeeRbih108dgrY%2Fl561sA2TtITAs%2Fesh4S%2BPXSaaPvfxjoc%2FdVfZmJV4G8ERj93aijULh38FNf7mhtiP%2FlpXFANnKDGUmOSQO%2Bue6SJqSoJHflLhmtLxE%2FREAOxEM3Rpl%2FOF1IHX%2BfNVK2Cw2RDEQpr9JspBsxI4TDqoIFVCeDF8t7Z0sZDbwGSBROtGpsfvykh8mn9VKtUV2b3amuVVxKrSnD4f7WQ6by9i3WAdPnFAV5ewpIGoQf%2BLS8MarIlFrR8g8VKiyV3ViRPboleWEF52GTy7MOX698QGOqUBI5kFoVX4mGJlcSqeeOklv64tVyi1Hx3IQK7%2F5uFDBZgSLGlXiRoseruayci%2BEHjnJpvcuiXopD%2FKshZLu02g7uDtv5%2FB5HSMBaTDrJT%2FuK47YIAPZO%2B0mVKC4PJgO%2F0XHQecRpCiujBiVb6TUwDnmAugRC82uzyi%2BTqsJ5xzJAOQ%2Fth8ELQoXN7c9sGSnKFpH7ihgqPVIavYWmTsHjPrpAw8x1c4&X-Amz-Signature=cba449c9e47652bde4e5715df4462347eb6d7f900ef5f19f576cd08cec6350c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWU56G3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T161115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC9mMf7FqxDXUplSuCWX%2FZYLO%2FDWKL%2BjylKi5Q7RyfAAiBT8THPLKI%2BRVBUeSItgFVINZHCwnvEKVTHWTZfsOq%2FaSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMGYQyNz3zFSYfsQAwKtwDQZUmwFsmINl5C5HkJL8mtvfOOpWvLDyuWhjHmQpsx8k0rKDV6IWPWb6lH80uvEe%2BgBpusLwSjTEfOZ%2BvZ59XLxLfFkxKtIX%2Bc9H%2FXWaX5ImxFLf1GdAKmOqVYi2S1bM38egeeRYOpZX4bu4bqb4kxXPYFahYY4vacCHIntQw1r2i5mO1C%2BYm7vct4xheqHsAjVMRSl5cdGHXY149GfcNy%2B%2F%2FhPl5xig9wr%2B6UGspuTyQdbz90BH8y0OtLlzw1kZcDZ1oNNFgArvVp773VGkkgrpLjaMPcRCEP2AuzzR%2BRiJeYhIt6PB10zQxIQ77T1H04FdydVKoFdYCWw4mCSUk%2Fv5IOA2nh0ImjBv5HcH9NYLEPeyXgWBJDT9KyQerUJ5ZYGD3bqNmW3a1%2BC%2BuRQ%2BAtuVPcQfYZWI4LNZWNVSfd2j%2BH59UfTnAL8gFQ5V5vSphmcebBl6hKONk%2BS%2F%2FLdYvjiSfkDE1n%2F8Ot%2B9LRQAA%2FoMeikKFgthGE9lCn5HamtsHNlHjyHKh4WfgL%2Ffqs9iXDQHh33qeBT3PntNWEn8VT4Dc1j%2FJGxQiCDrASk%2BheU4RzYEyqic1z7MNy%2BT7RP6LdUi%2BbJWPxinx6uBjA3qwn6fwfopOzHeLvQn4ezcwxPn3xAY6pgHU8rrvhBwAdbjZizSntKbqZ%2Fe3%2FQ6HDAE4zyLAT64ZVF2CzJCdtl7QNY%2BYJrXDNuwqPRzrYJblbHjqOTB7Q%2F5qJkJGE05t2rI%2FtTBCl%2BRdZNdNx2ueyxEStZTDNtsX0SEjfPzWvNpXp%2F5fJiPZ8v34p%2FhasRTgwQzKE9J5ndCb2JaIblxH37UE03JFFsFaU3DPJpY7ZWNJET%2FKhE67A7zv5sB0ZFHJ&X-Amz-Signature=295f5d8c16f080c82287b0b48c10a1888e88dae10ce85cf65270c601a203e1cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
