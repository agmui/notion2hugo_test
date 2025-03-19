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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LO4GZZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDQfWZTzL8cvcv0insbOL%2BXNu1bK1sudvvUtGFwgeNj%2BAIhAO6ExbOqahmqSw4w95c6yRlPgMiB4dYA4CMfZDOfuMAHKv8DCG0QABoMNjM3NDIzMTgzODA1IgwX6PXOg2SbMfrEkd8q3APGrNyQqJGlBfhcC3IhSSOUK6fYJXk7nxSDgkbbhoXjdapIoOckFwgx%2Bjy2c5Ey4X0sDY8IKwuZNVXZ5jO8fx3KI6Njruw0VgRIoSRjO4ID6XfYSU9tpFyGyr3ml2cqSBVOtiZspVMlXi%2FUD8n%2BF4cqBEpkBkC4GpEXJkT7zZBq3k9kG1AHnrhA9S70s5mcQiLafW5Flhuc23yaeOArgwr1hFj3oa65RUabov%2FF%2Bgg1I6IgSBb4T6MZEdFWHgFyoLZWKU7phZkQf27YECTioG1Qap%2Fn6py8HleN6qtP347kH3zX21m%2BjafX9Nv3gu%2FHcHtkolDsn%2Fbkik374vyJRVOLRrffTJ8viUy58DDFoImb%2FaJVAyfMnrF14erfUatqyiYk1rO2iz%2F2gmb9wZDUfoUjsZvFDFsVb40DDJhBVinqTsZHq%2F6gspPC%2B6P6ioVrsmCfl4rRT9XVumPAuGiKA77cAgjMZzebVHatuR%2BEWR1oapHye1oU4dHzQ3KpFaB3SDPYyh6VRJYUluD7sXn2OWoLkGLRnbr%2FwSJH1BDFAplHGWWnKowPJIjU2mVPcT1eM7sU1FRWln9F9aaQTHon1zUEcwy8PVxYGVX87Jl9eE4MXwYaII6DyGo58aWwejDn%2Fei%2BBjqkAasGHFurkhJaF4Dx5NtxFktnm5TIVXJJUGDD4kvq5HERn0iuJUfYN6Q6pql67QsKvkB6xuT0DkvtASXyq3rdsnZg6aJ%2BGJG5yf7MOckZxqxA0IkQ9f9aV4dsNgXVYoZ7Qzq3Se7Jm8e0xeNqkrM2N0eL8c37ZHoeEyie0UrvV3%2FFAlv%2Bq95Ls5c%2Fe%2FoQAE7DnOIskZW3MkkILii3TQaVKPNyXaXx&X-Amz-Signature=68fd7713c0a5d67c7544087c9841979ee8e7edaaeabb19b3036de6ded17c670c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAE7IAMU%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCtZX2ogxWwUJpf3w3WScklj0ITRJRa8JbLWLDEEHawVAIhAJ179sk858mn2mrCg1OcQMqH1IqQeXPpV%2FOaakP19aN9Kv8DCG0QABoMNjM3NDIzMTgzODA1IgwQnTH06j%2FR56Bi%2BG0q3AMwJkh6xjeb2yyrW1Wn5rGXxjthk8wftp%2BM0qhH4MVjNhDdD7o3GpH9vUr92OwkY4M8IVyg14ql2lcMXn96F%2Bhjl55ohDZhQ37VQUTMsl7KmD1wHmpdEDFtCCHNwGBqVVAM7bJBEFacmj5qoun7tDd%2Fer7d1H%2B%2BJIzxJhkVCLdb%2FcYoEK8DAmsbrzM%2B6TDjF7F%2FVheAkyRXlIpjiVCP9gXQ4BzOCpgv%2B3cr8v%2BLfZieBoM24f6t8mHeDVQnPbc0xmFunnfzzb8mKaMwJfrU9VpOWUcMHdYYd4YPR2vLheBkAIAkUQpbg6qO%2FzHPdgHCTzm7ZD8mlROaRzPt%2BIpbCkoGoUAWgPlUZciT6WFNq01vs3cjrBU3NmQdTy%2BHHJCZrQPxJTauAo55sZPi%2B51w7NTWll%2BBe0HIHxWpP%2BAMUbDhFNL%2F7JJb%2FbQsj3haV5IZ9dBs8iCysj8%2Bm4qi2NvvwWba7cx7SGyTcceitSEj7G9tHa2I1WTtN4HHYmzyYJWsDxNE4DdhqWaZXzRJO3srVL4jYAo2NL5QwaZs1lYRnqjDOPvE9q4dVGoGAIgftr5HDilUfJjNVg3E0VkoDT1g6CjdBgTwpX%2BFU70vzoLc8iXOW49I1kjWk%2FswCiwPKDDU%2Fei%2BBjqkAWK0oaKjKhFx32kE%2F2D0a6%2FGRIGZXkl5FMg%2F8d6yf44PDEgYVNultErJlHUJI5ichlsHG7%2FCrBQ56acel%2B9YrnZjVXW9oez48FMV5rmGErD%2Fk1Jc7lJlq3l5Tc3hBAvYnX%2BK8zMi9KaUcAT6eblcgjsWC%2FSKpLflpCQFxoJQoU7D1Fl4dlwj0Z8DCHsYmk2dIFhakQefos7qQM9%2BluztkbGVaJ%2Fp&X-Amz-Signature=8b0ec2110f23b32164bde8730edfac42fee92de5d88a10ddcf938905aeb738ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
