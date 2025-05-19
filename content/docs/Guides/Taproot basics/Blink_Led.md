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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLMWCIEA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkMDVsMs3ytQQW%2Bcsz%2FjoLqCntu5%2Ffs0j41tLHVODzPAiEAtgMj0UnLlWtuQkDzVZAln3WmLDI4W4Hnc23uF%2BpOI4UqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIm0H5u3bZgM%2BaiNSrcA6poOwfNUbg7NKTdFvmfVYIJsZw5feyMRZSypQlVN5PCxZyBY6FW6%2BnUSEjcmduwwOpyY3bLeOuKhgXXZ6KLm8XG1R7hOvKyJRBgwpBMjWwrzhee%2BHYyFIks4q2OguLNT0amc1A4jSCRsjJFVqH4G5XkR05pgQ3H%2BF%2FInqj6wf5r%2BARLBJvd1SbZtKzJVbvVox1ByeqMCnVBHm8WdM1JHx6hiZjyTvE5c8%2FMBAXKLTt5sZKRgIiJuLF6ivj3F%2B4zXdRvSEt7bs2wrzaKrLh%2FFh9Scf6qGIUQxwXfCuWXpSFbXUpFAHX%2Fg38hHmPWDQiEho78gsOAc3x3uvcosw74C%2FLxmre33NvShFNcGlfHV1ZD4r0i222eELkXo1jNNYq84HT31oXu7KMDar%2FFaaK%2BpwKfdXrlzR%2FgZ8uuq87uPyFqbxa0SyauKR9lnst2p4WANm848BpoXkNXxRv9rvt%2BV8au%2BfZ3b2FqRTGppRHyjz4Lov5Ryv5hUo0wr6aiMIiypkqCfTc1qVQs2lqsKWvZ8nprzHL0vmp02tkcOkQZFdoDdvwq9Fq9cgt8zWrmRmt%2B7j6ZZL%2BMkJAYN%2BSaop2B%2BNGoPInNfhctkxwf9ZpnBOCaNd9dVU4yAFALwuxIMOWIq8EGOqUBKW2p13qMUlDThFQgmqqWExVsV%2FtRcDuLilozfUpSSzpJMoQi1K%2BrXKngjVL0aPGhrZKSuNZoFRmAVh95pElFvfqE8J5AtVfWp%2FisPHMOmGDcy223xsg46ywQppqHNRnN6vGEgdXkHGij1DqtkOefMxoyUDtHLyYlD7qPq7Z48PxojtQFHD574lHM3vj8MQN4PS3E%2B90UR2%2B9eV6%2B%2F5qVAbgpRc1m&X-Amz-Signature=bcdc304f4034e5465f65b168be1b5852ae0fc65a691a6ad05c9575120407f5ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRC7BSTA%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BOsFNyuDyj9D702sRPRrHMHPdPfdidwM5zXvbNDUABAIgDS6hWVLKu5365S5AoGBwacm7Vlmj8WOnqsm3dLy6%2FdMqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMusYCK1cN7xUxxfIircA3fv6MVi3aFkYeWcWtNpFV9v%2FsfPjJdFcpj8f1012CKgX%2F%2FiK%2F0Mz%2Fir%2FM%2BkGC2CyFn5%2BuaNYUd0%2F2blqYUPQDJKGMsiQOmSd3k2hkBUgJJ%2FngyHAjiy7KuzI7AtG7nqyssguQOo1t3dHz5%2FoL7XeCOM8QZ2wH2t0ygc5LNooNbKOY8xKDNyi6GR60zo4%2BMSzfX%2BHhFlzULasR4qB5%2BEq5c%2BJnmE8NbMa55afJrYnQRktcs9lnzDojmTsv4jOS5cr07azhOajYk0t%2B0OiF7toaczDH5GZ88N1Sx4rZv6oegbiX1ntbanGVqOYaNWnqtiDXDoE8xcD0pGKLJccTlv6escWATyw7kTituQy9lyCmbn0uFbEc9BrSiJ2itRquH0sry77SqjMJhIPFpYj%2FY%2BblgMP8xvVDipqFtx8iEraDMxVuNWqOvM%2BBljpFe2QNst0Wj%2BWTe%2F8HWT%2FyRWPkoOMzvxSKg5LaxG6A9vvfDiRabTGeIreW5lmmihIwzwaMVD3NR29vVofrb%2FZNuYIkeLvOr0JjqmEXtBWrHjdCCV457soAOUeMnOe0tdz6uGwAUNtPFCdij37rAIXHs%2B8V4A%2Ftg%2FL9ypnhHojRRYqpNuRNrXXzTTshc3tNrlvayhMJ2Iq8EGOqUB1y30kwKA%2FuZCZjEeEtTtx0PorwXWFmffWMg1xs5JGV94in6VeZKpjlo9pF7Kme9Wx3lEse6OVcE3HWjRbz4d9VoTeKE7wd3%2FMc5yxvsB8M927jfkYtIRmdhwOcmgLUgtPgYLosii79z%2FAWVGk9gu0K1yNeMQcah824q1BlimogkklKkd8KJbYZTGzWIBzEsP%2FEMig32sJ16Z4PxeWRmj793FqApV&X-Amz-Signature=ccfedef68f14f500afbb2475108d56001bd8f67ef381c36c72b520000a56d3e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
