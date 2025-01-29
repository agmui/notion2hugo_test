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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SGCPSKR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BChv6Oh3DK%2F%2BShaiXO6%2ByyQC8Tw3UOabKJA1%2FrJOJfAiAr9rYI18O1sUc27eUmLLtP2%2F2sB2hEbUW2ES7NTGnjnCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNzKs2xculuxMM1ruKtwDyW0HXNgi6GYWC8LizgirrQnwLAcnRzZu264GhfX2FRE%2B%2FoF8UU1bd8fFBR%2BIWIVObPKYdD2pZ76fY1vujk%2Fj3zvxqwISnL0Hbc1dhlC%2F3cuitE4oEXdQgZqqwTe7wg0gLd53kULlqiYicEb3FmeIn%2FmFbGG1UCcPItIHXOmYjx3URnThRQ%2FCIieF7OKK2eOkNTq6hzbcOyDQbRNJcaQYk2h0hq281cHewBXPas3fs2%2F%2F4WzbFttrttuG%2BAnXMgQ%2FknAzV3JdCbeG9g93mi7lXtG3xfyHsS1kbFqK4kPXBSpDipmRInrF2m5Yye1ALHm%2BMJuYfjyd3ahFx0%2Fty9sn74bH1L99oDHoSayG0xBkihMK8KskQ3%2F%2BdFkdOqVvVqZg9gQ6sHSCgV8pHD%2B6ozVeXK3AWGc96xPjuSkrlvj78x64QFyK09f4D5%2BLXUSzqXrTYFvqjxOGKBw9Qarjv51p78efkRCshcLiSkph5bMhHGirSH4L4ndUNOzZxPJnvRGOCRH%2BaKdj0rotRuZGWleFIZ6YvkywimcfeGFu1GGagvPWFrpD7akHSfRQlr60H8bKRa7xAMtqYr2btEjW4wwLh12bWKghLbgzQHRtHgHH6l8fTXKGvX%2BVXqge%2F%2FQw5IDovAY6pgGz9iINlX6sGcCcROa%2BHTrMID6L%2BgiSXwzPfpDgLXhbAoNm0ZhFGFgrWGe8T1WWVs%2FC4ZzbvnWk6yQQkyCql1Zkkwg1JO681Al68uuY5KLyp9h2u7%2BEs%2Bv3ixTXGKV0ALQGUesE6cZDCTVCFOyqC%2Fv3LMqPRyUEYTJFx0iTdQ1WQRL%2FSw0RQzz%2Bk8H86CUN1UYdFCeCbaZEWbKRXoy9ClO4iT2VZhr0&X-Amz-Signature=00e60d28da793b5af122b20618ede640cefd5ed8ef3ac6114d9d4a4760fc6847&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VLATDO7%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfa07UFBHmaJdjZQKPDA3zfb9H0HpEbhIDmNtyQlBDSQIgNomCL68A3DwPlCGY6LZCOeATVOVoUdF%2F6ky0%2BQ5d%2FrYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8DHOfMMp5EdRN9KCrcA1dpizaj%2FjtLgO%2FifFyPC9WlB0nsmjEj4mSmvYAcAJKoaxmAYOysV5QG51Lde5BFgD0Z8xKqq6TZWoDeWKsgglc4lis76zfh%2Fxn8Z3KbHmSkp3PZlw0x2aRPc7ll9MMUuC5aL7q2Kbw8%2BXRxOcNIOcQru%2Fe9GlTwEteskbmP4uDcPGRHHHVOrsv%2BAvROJY0u%2FjpkYTpotqRBWOU21%2BnuGw9Vx7YWf93cOo6a8s5IOoUe3JEXfGGc3SCPp5gWTnY91xANA0It3yp2uMtx163jAreUZXQYFWlO4XTbz00Xyr8cCOkVn8sGdZ8yM5usyTmyvtgNOKC6sGI9B3f%2BIVJHrrAedLY7%2BjKIpYHCXIlkbpOJQyFTo%2Bkxi8Q5XaNiH0SDk59xfPSYyfwPLFh1gX7TwRq%2FUXZ82QYlTtysY48aaygcZen2avJqTF1LKeqhAS10B8ZSa6U6V5nw%2F82csm9AFT2arlKfttFfCvOIKmwiNc4OT381xsCSvgXaFX3OPwJQvSF2GpXDadVqMj72OKc1BcdRHT5XhJAx4VQ11pQQ%2FG1iBFyHsTVndfEQsw3D%2FWSux8Hc95nNKaR6reBJRL1GVIOaPDM8LNOHw3WQtNe8rMgIe5I3rHf2hfG6EN0pMK2B6LwGOqUB6cYw40%2B7mTQd7P9BkJNT4jqafUcjPJUocBpWNKdNqS2BQqclbuwcrny9vKLavy3doaX%2FKiDRvh88%2FlNbeD1nMY11DlO0SwENsb%2FStMS%2Bf9D1pAax933pqVhych%2BYL1m64fHGWA1QpS2nBSdpcjTAyw10FtvdZEbY8he%2BqXheBMcV%2BXHvnwr3%2F40BZoE4YshPSuAKxYYgApoP9SMiNgBzsSynq62q&X-Amz-Signature=ac74c7c55034b03ad636fdb6dd07d502c97334b7a8eb30299f8608dabe9f11e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
