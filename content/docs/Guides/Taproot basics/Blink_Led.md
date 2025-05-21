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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGHNPO2V%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIHPXaRhJwflecQh2qd34a%2FXhBv%2F90mpepr8cse61VoEoAiBWKjfENNrmJzGyf491bumd3UQ%2FzLuSkGCnhojSdYynQyqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNWLqs%2BK7GMzosHORKtwDid4%2BHkSja4IW%2BnnShThY89CljPgL2%2BiX07uV4LQej8v%2F4sDajzYvxZmiTIYC57ZWC1CFKQ3GsmVX896%2BrmM%2BTalDPQz8FuwalFFMIWlsRm%2FbjOINxwYlXPuqFc7x8D%2BlciITLmTdypQkA59%2FvJYQlY1pLKGVfvdw7DNUA6lT8ZIe1ETja1uaiisk%2B3YYuTxhYmlpEO7jzUmHlZQXvjRIF9Qb3R0oAlmcYGkhANmk40u1%2Bg0I%2BfB8Ird6fG1sz9p9rYnsRaQQEu1zVBbJ%2Fr8AYi0g1OQNvd6cDD%2Bauw7%2BHLhGuXWCLBa3nizlSADAUKG5U6C9%2BEA7g4aYG%2BejfLEiMKwMC0FRNJokpo66AbH7H8FCyqTKHudKCK6QzfsjxiLPvodIstKbEbW7mVtuYYPETO3IE59xpn%2BUb88GCzkdp8b9IspE%2BHBhE1hM6oA4%2BI5Ay1APCZWp1cmWQpfVhKQZyofNntHWeh2ImXBXwAUX2tDnp7Qa0UpEZR2LoWL9v4E2x1aGCY7ej2JsicJ1Q1H74C11HkEfFvq5kfD%2Bzr3nVcddP6iGixjeLmOQ4MliPUCeMaCmSZJO2Cz9lOdu0utuA%2BzY93Bzm2PD9ftkD6USJhXxnXjG6WKb8o%2BG%2FT8wn4e5wQY6pgHXpGC5dcVwDUmt7YsOpzVIAJ4rHcjPZ3o43tttvAKMzGL3lG6K58QVWp4xsH1ChnXetvrmHci1gcs%2BqE7YCqmEzVUy3MPYuklN%2Fn9d4fDzdAvL8HuJ5%2FQ88zmEO466PjlqmG%2FpvnNUD%2Fum7V6kOqshBuFeO2FG08YPn2B90woUEUrvScHJugXu1DQ8plfDjJ65sLuoeDNtcjswdfChZg81CaEflcuu&X-Amz-Signature=6a08c8d45a0b590a1ba00f87f05ba53453c672322ce9087fdd92a0c141240481&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRDKFC3R%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T220800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQD%2FcpEg0o9gB5wMe04B7LEC1q10oZRLsTiIoOdEyv7IawIgdSECJrYpUJ7rkdDIwDbgVYQtrLufi%2F3nSG2efDqNN60qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJv0dJCo1IEwfWll%2BircAwi6i%2BVQxnQRPpTtkfHbZN%2FVGRSkMvZXyQUY4rQjthUvhxw%2FoSIcO%2F0xpPJbZmGNnUxZO7jVutWDBp5uabej09cmHk9vEhkGiIMG41lqvk05kLvUfbHh7FEmag9qbBEsuuqD9k813Dtq4%2FYjibn2sWMsO3bLA4aRVnEE8M%2BmmmOuGDOmwq%2BUhWpitcuFexif8Eb%2F16DdZ2TCK5dIukvmX7up5K90Vmjbp0i%2FFEMsyNebkLf9TMO959ONg6OTpzHc4G0tdyyDMIM%2FYY11TRMXXJ9h8ee%2Bp27r%2F%2BpagRG3K8m2KcreoxDbliYuaZvZDjLqATOR%2BD2wAWPF%2B9SUzSmjnuIPahTj1TD4Exee9KREIDlX288NTxXZGn25gXM7skn%2Bs0lemKwP3oxvkT39OoV%2FqMLRQqgKpdcELxnLyz0vg9ajJm4j5Zh3hSVHSdLD6DHgH7%2FUddiPrastHPXVcTaoBc%2FsPwoYJ16R51885Rximar%2F6mrbXRqeFD5q0GZtg%2FWPNE1GzGkVw51xRrpzEHdG9EAVYB%2F7KGTfhNHMmeKpe1FL1SPpnvH1oClBjZBSwfRGZvZdI4m4JLVeL5egzuJGDsy8SsVq6H8cpfm6bWJvzDiA7L4%2BpfPJiBnHXlDtMNGGucEGOqUBPonvAQlpqb8ylSOWc%2FSxd64LxKgPX98k22ygaCREox%2FruGqCXc0owNuqRa6BFLknoyG1bsXxPmqonldn1iLeofMuKprHQSUJKLim8plGqfw29LM07ZETDcz95sH8SkjuAT1oUjDaqSf2GHpXCycNnvxNoNo6wXf2mw5cEs8%2BZRf4T38E1xverOf%2FNljLvfsNl%2FRCUzozSeHrtKekc2FLBip46RPU&X-Amz-Signature=db9fe49e6b72444b170e7a17184e7c64b8f5022ee9e883b8ddf39819d36248e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
