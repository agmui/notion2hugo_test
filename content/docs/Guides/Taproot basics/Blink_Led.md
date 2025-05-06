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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F5WEJMT%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFsuUVQpdqZViLUwVL2xpAUnJt9lcrPslaSxsr3lHlcgIhAM7GCL0K6Iy25Rei0jzH47f%2Ft6xnpEM3K8qOwSNTuGygKv8DCDsQABoMNjM3NDIzMTgzODA1IgzrbzC2EaMxeU9izrkq3AO5MRRx5od9aGgebzgIq3VR7nVsxNUsbodVrqNRprCvH4ZrhZGbSqqTIVSSgHDBXI%2BMX5RnopXVwYSl9TUUfgqyD8FOTaNyUr3tGFO88H891yBU5L6aYwdIMJJh%2FF%2BNCnTHWo0bM8WmQKkC8KSRM9RJ7ONQDZFBFk5j2V4fNLFTjJc%2FGH4kFVb%2FP3KKJR%2BVa7YVbT4eG6KhTgg3p3h28aco4MeAiYegojwRdYp524LZz65%2FLv0QS1o7ryNfqvagcO1XrwjZldtbk%2BeZvMkOUfL2bXitslq1wXCp9TrlMUa5scPKbE3%2FBQIU6%2FLLWz2xQPj0a8lGk1QTzYKN1XjirPHHE1jf0ywtVM2WxummsAPCoVyis3KYyFuuVBmDiygZ8gEmKulHmAG%2BeEfS7kzS4MVaIlI0W94yGwthxTiFH7ror3S5FiV4furhuxzGl0XqITZHwhpAaj6afuH57Kaead2q%2FXx%2FZkxE9L%2BkzIrcGXbntbrqzD38AOF8La2IUtttkN%2Bnplb4T2JWun09Jy%2BZYfi7PopsNlrUIl4roaHd8UlAOBE9OUdy79Enbbin1tBSriCT6FfO8DbtRNV7AnQyMvcXA052gjS9UodoN2mMGyrNbTjtxTuSmavbOwQ0RzDjyuXABjqkARZrBoI29LO5iHapBczSxdXEa1%2ByZNAx1clVpPdvyM%2BdQEVJN1IU27yqVm9q9XPvPogu9b5S%2BQRXElVj%2BaG7DZT3SGkVTyVFKId3Rr49osRbRYClW64lt%2BnChaw9q%2FQS8PvzRGXkaBkBeHxojmOdVM8w4dF%2By0JmYy8mVMTeXVYJW%2FWtOvOU0S%2B7O199wqHH6csb6p4PULgrTPGvt7XIAtaxkAL5&X-Amz-Signature=a8536fb866b1dead53d347fbf3882c032c7a980647d01ca71129c353b665f194&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAWAVCD%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9rV%2FEy7MMfHlFttgIE9GLSXpu3D0mlC45mbc2CvbtHwIgUlDvwUUXVlBjrEcNIkHjBbtx8CmrL1UADxP2LR44KEkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKJoEQSBy4NFY6C5FircA9E35NqEtCZiw8gK1VF8pdFuHljxCq6Li8m8bpJ7DKarmP4ULaYBVdCnjAQzwwCuJDn93MZe2csmk%2B%2F2A0RMnrPRzWhzedvxX66OWkbX%2BtE0Shefnl9qpv5rEgwXC5u33dCfuCsvWtwJi5%2Bw2mC7UEtdgmu0VywBSVlsehaFeZQA5f85ewajRsZwb0%2FDRDFaZDNhAL%2FOhEr6jZZlOVzCqFyEh%2Bhk8ll3hOD7dTBuJw%2BvOtrRwPAWdWe6Am1OcKq%2F8K2acm6x9SqXB4%2BAId5Q83e970NVzyqed01jP64kYAwuj53JSq8SxR1noQX6jpr9pQZMU69bFJoX%2B%2FYmxe2hSeud7jvqR2jk%2BN6TalGDqa6hkGyAizRbYvPLk3vGDvBwNUUjkpcIxRu00lzW68Oz6LmLFRl3bdjVdVyL0eej9ueXQ2hZgvLNgU938viNjGh1oM3IpimI0mbU%2BeBleu1FBVuOJGzagu91npGsiG98bn5jraH6mabAVSyz9jL7THHQGT4KSWwRJCc9JJj7HjsNA40hlF7OwYL5lqOKLNPR4jAezn19SCpDFWU9LS93NHaqoRmiDIss0WmuDv4MV3rYuFiHDFQ8bqE%2BWzaLdaRK3TMCDbjCqtNYJYCoqQOZMMXK5cAGOqUB%2FoMOUe%2FhDH5ANQk44lzN%2B14aATNgP6c4aL7POFwxrc4TLXtZfDIvIMZwSkr1btqCJfP73Fz7GDuxcq8gTM1KCVq8%2BnMi%2F0OcOo8gwITwybfMRVukBykWJHnhSC945MkMjhGrLPHR6NWr48vrZQ4o0z7%2B9%2FwXeDggO1JzFMGa4314AnJhFkR9jm4as8YK9YMH2sxYJ2eX%2FJKwnh2uGw%2FA1ioenn2e&X-Amz-Signature=17894b47e2b0e877d7ce187e02fdf36a7f1c614a28ffc1f1fd6e1de3385ab224&X-Amz-SignedHeaders=host&x-id=GetObject)

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
