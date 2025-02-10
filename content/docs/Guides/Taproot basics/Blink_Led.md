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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXV2QXLI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDypFI4Ew%2BqEz4ZYxbgVkWMYZ4YTGL%2BQbUKNh7vM5%2BUkQIhAJw9cZShgD58YMiDUKPIExB%2BoW%2B0%2F%2BIf0tO0%2F7jvr7csKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzg0nn4I%2F4ybw8Wzu4q3ANJ0fQzzz0fLtBw8zFq2hV%2BXxRlXBykFdyyXQ%2BUIHxw404NoURtEVo3vyHYIRuODpL68Pfecc8wpknYfrBIbxcZfgSFBOwl8MICWpuGyAkfUfeCon3d3cz3IGaA4VZLDcb%2FNfgyfmOSKkQsb9l3nrWqglE2nt%2BV3vmhP0xD0mAmEJNiN%2BrICZD0ZFI7bBs1tWf9k03e3qzPdHIQStczdltV0TZ6w7kU0vW63eTHtmuGyTCQcLLMKJQJ0NXOnb6I%2Bt9NWK8x5peMkz96uxi8aOOxI5%2Bpu1%2BF2Qm%2B7UBotEaCz9TKUzz1Tt1%2BDEFR9%2FcgaNnNxqR0XOyiyDl3Im9%2BZbQjUgvUKksUo3h0LKSskFLkd3Lynhrw7vOQhoCL2UnghkDVjXrtW7V94XqLQb%2Bi%2Bbtp4idIdpf3sIJpzXUu6MjhKKoucG9yuIq%2BFcjccF0r5q1h2JrtiLRs9F7isbXTC3qeov5qOJig8%2Fa6cY0aTAX0PyTcyltqH5pMGNhMCQob8suF%2BDsbaM8gSSjZivK7PdnDdJV6j7pKh3bcTG7WuFt4ELVGP26MwtoJ3zCKXIaLquh8ZzX%2FX3qbG1OA660pVigHWdCJdDrHs0lTsx0k8HFnGo1jjgY7Diy0LYJ77TCi%2BqW9BjqkAYEoEEDCBk8hlfPLQ%2FgdMH%2FfUasgpqJiXg5Btl4NSh1%2F6pNRnWPwaL4IwrSP6hKPNCt59CVd%2FzjIBkyLs8%2FxEJ5ADUmmod%2BTo1niahpO8zv9rjJUnt3O02MU0ug514sTCj7xnNud0MkRNm4Io8F7vS5U7v91bpa7mYkjRg3bcaEeMG%2Fv0U4lAmvsYmn4iimNejXObD%2FxWppSExXW8F%2BL4cKphC5B&X-Amz-Signature=0bc062c5cf868cfa6c2668b350d20e428e68f5d2c46629a28785bf270f0401af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TJFZHMI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGvMtz9Xqg1KW89Pjpf7HebiGJ8dhV81PKIDy%2FuE3rQbAiBePDDMfl0P6OogYXFNPmCbbiloGrhAiYH2HeauvjSpdyqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3lQQLjmaf2hQ6fHKtwDCIPkSEyVFQ9MVFAI2gelUlOyhFDfsdswSV71H4etWXhIjV0mMpZ3toR6Q%2FM32GV%2FPopt4KPpFhoKGnvIHcdpwhZWqoT6CAgk66XgABMR8Nf7A1sPXE63WEQWPWoeciuh08Ki0dwUSMtnOFy%2FNcn51Oi6EdDfWsjixUGMeFE3i7nJSJIrUpx2hkXacb%2Bb8QPF6twewaDO4X73nbyYbpcVnfZNASG%2BbavXtDVXo4d1xzw0fNAHNd%2B601ye5UgZ%2F%2BziZ7TBiPg14euamuE%2BWwlnA%2BJnHl4WP809ZaurCbCdBakejcVWtcjOQ3Iri4TFrLTljy4qrbbQkaN6YPnrzArYtyqrHbNvuCu78zpx653tyC9AYiu7Fbxrcd7QF3R244J7kZ8rVQvLz9BKoEAXlfKmSG3CjMi73wqogLLNnHCM7H576nqwhl%2FkKCJbjhpMxDA75oo8HviiLdWj%2Balk%2FRbd14w57xCNZnxavfxPA0mELZxuyppZ%2FhvrrtfJBX%2F8%2BItQAelcLFlgak%2FDdZH1DPaHBHa%2FXv2VRWkYhyA%2BFkrrCdcL8qasNfaXmKYB1WMOu4OtwpBtpqTbSMppiYb8gRwL9NIW4ZLE98M6dY0lDE6krtPOS4DUVsBYRsX5sg0wiPqlvQY6pgEJSYlAikaxA7miYNsCd40CFsfhKrMF%2F6Nbm%2FmrhDXIEQkuv3%2FWIcpMHYGfyNAa9m%2BbJ0bZVn0oAfIcCpRujFHKoZ88%2Fod0z4y%2F9HfWD%2FCGM7zV8gNN%2FRRnemQfEUgY0iCnJ9fstZRkJc%2FzDdxzKwOY%2F%2FxIGWV3gPNNksnrG%2Btx6YPGYKc1f7laC4rdHGho6t8eOpBNde6CmEwWzHyU8a57WbEIVoR4&X-Amz-Signature=8fa98f9c8a428a8f6fbca9594c0513e828fb2f5f247a62ba75499a849f0e49c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
