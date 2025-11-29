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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDZJ7GYD%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1EgFaRjjYlUZ67IlWflajyWlVZyU2NljYejI7ZOO1UAiAUpWF6nd6kEh6T86vQjhNFHVQJZp3EI1YfJNU0byLb3yqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUM%2FB9uodcWTBYzOnKtwDUWw8ANCryioMiZ7dDiwuIWv%2BJ1vHdoMWdEwxyaCWcG9YSb8W22G4SeAWEAL26OnvbBksLywfZjQyyud8D39f8ZinA0CXSePE2GGXZOQ1P6fDjqsqOceSFs6PLB%2FZcaKB5tvEkUrU72sh9BIYdnGyivG%2BHHIwdON1kisR5FlEP%2BImxb8FMPFhnnosLyzZAnDIchbUsuWSsjUHNPmc2xUqEMCxxin8bUCQ1H%2B8ncXW24PFoJqhOnjGFNKbE5hSVODeAHhrRzzaF1UA79hGIdSf55X5pLgdQuT%2BxFvAawPCOO%2F76FtAGOl9hGDunRqOHAjtzMt1hLRq9JqJxMkmfHaUkTyh4N1An6xeaDZzzs2wBgNCA2TK64TX2gCVq5NY4dAC38rRBKO%2B78TUCwFKLQGCwWl7i6IJ%2FyuJvCcyFmuroK9vpm0WefRVZ1WuYQ74CItepjebgtyfzkcexmdIes%2F9L3Im7aZbK34t1PiBQuSDv5%2FNmKD1map%2F%2B0eAxY86Qptoc8Hju1g3XokpKTFcn7LhG6y6NQPCJS3vbi4O%2FCOyz2vBskg9quSvE3abkYUI4LmsemzZVBKK5ycwOyGSB11ujM8PcQQ6QZfh%2BioEeiaOFcRcCvgSO7krgg4cmS0wnvmnyQY6pgH10chp54MjvmYYoPvZyL81cT%2BZbNJEeIvhhFUI0WqADSHEShdEOAcI1mC34NmXJoJGM%2FqP6%2F6aYHeKrLM2wq2N7oPurFH2Qry9oyn5TuwBiXLoFuef4M7iTO00Vo%2BB7ldYPdWYogFd3tS4ceZJOCja15dIDAq1dRKxCRWnYKRjCFX%2FhEDF1nMfZynCTK098GeEuYOlWqzcB5k%2BFSeAoAZITfQF98NV&X-Amz-Signature=df3e15bd24e0722a321b826910c0aaf614c378030fc35d374ce24b2aec654773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3JJP2UG%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClRhYvs9ZzX0R1xk0FXCunLe7RpLGyBq2M%2FrrGwQ40aQIhAJu5tWjiYW0W7dM1pcWO5d4YUI1ua9mWEcljzHRnxPKgKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWnu8EeDU4FBrnSe8q3AN%2BEKdqQM0pgvLbe8sa8jBfvLIhP56wIknl0Yx2XI1d9YyhF%2B47jvuZL74NOnLTkjfmC9W4vErr42NhTRqqjPyIEMHeOfPxQt%2FwOl%2F6yWWI6KVNGk2%2FnJw2gjRPUluz0s30HP1H5UpNdCGeCbWSKde3h%2Fj9sj9vNgrKonK3Lu5rZxZesq1gqfqdPVJt5DpUawxRntTK%2BEGXHB6M5nLUJfpEulvmvyeNXvr3N%2BYOWY86ad20wxINWBCNlbTCy3ZSMQvfNPCqh9HZLqPEAJBOBwg%2FnXuMIreS9xUsoGqY35V6%2F4BlB2pIIUT9zuh3cpUWaJ%2FXhI1STCSchxAlvRQbi7etA21STgZ4ahuIOU3nlFVwohC2X7LOErlYPkcu0CRw9XjwTqeQLUJ1EnZwH7XmbgvzShvjfiFDT0O%2FBCI2NxKA7Ue0kRZbul7KT3qI%2FaKcSuginRJHJNnyT7IFkPxrPqrehq8E6DdnpPlmVm2X16m51lNeyE9DTqcWFLdWGXPVWbZoWR%2BKyrzeKhf5fBsE64rbIrEYXMHpvUtOF3faT%2FOpOaGCM6BQpuW%2B1fv8VFooog4Tkpehjbaat8YeJRgl7rk7tg1ekROavlwP4uQP5UHo7M%2FulFamaZdc2CmqqTDUkqnJBjqkAasCbU%2FqIR3MSVKvS7UsqIM2jR2avc2Ne8U09cpJgVgbfPOIPU2eKPBjJSoiq%2BwDls%2FNTWUxiQVeYdcosd0UVs%2B3He%2FRYCIscuETVWatcWTeYrFRGjBQiKT2J8XL0YzaUx2AnHgz3KWFSf2iAhmKP5PC%2BazSK1HyHqdLT4g6hYWbimqJ5RUUJQ8dDHjXkA6vhBhz%2BtV27JdHrFU%2BXN8enhsWsSP8&X-Amz-Signature=5809040a6b0e083a41d61acf8be498d81d53f3e6f6ff33b36562e768346d0677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
