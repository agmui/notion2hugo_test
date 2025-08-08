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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D3CX3VQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDNv14ZQJBVGofKNq%2FqVsM1auqrN0JE3%2FN2JbnXLH4F3AIhAPbmwKeFq8YgGnqszCUY7jwz2q6o%2Blwv8gipG72zNL7DKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywqVJxuCy44v%2FXaJgq3ANBcygjyOSMUgLAm6YAMLLZP8qrz8yb%2FmI%2BqqAGLEAf0IVM8cHi7iYVvSJ3%2Bvd3gUXtRKRThg8mXkHYOJbi3C7XZ8RThd3qw%2BwKTpOKN5WcIBOuCPlQx80GeBvVFEVZdzLsvb%2BZCyeX2TtaZTvBxOhj%2Fd%2F%2FnWYKVn5pdUWP3qpgKsbdKyta7vJEqJYnPF4ohn3sraUIDruWt60yGIWXgbMBroFoizdqQVe%2BfLTji4VbKZFBGsGCUxDleTqz03PDjYjYQkbhgvKHEX3%2F8gxp34EEBqBM0S4d5j0aj4g5RbBC6%2FOyiJUZRo9DhuMFUl8kGhuF1ehxZ0dyhbywozHye%2Be%2BeuJCedAScwMBYXXPHfh7YG%2BEktLSVgeVQceXhBK5YV8GoCiSqrNyuEkAhXX9hjkCKpUFP9aQ81e6FQ6K3%2FsSgHRi4OcI5hmjIlrLkVNQQTemG2mbuXZtZ20uq%2BeB0aOzzyun13vOlC0ADyevRuuJOeS6OdUc4tU0Gjc%2F0ATJo1Mr7iqID%2FNKpyP%2FxM9uILd9Four7Uqkgja4YNVWx0C9KivOeYeUpG%2BGLFIpgaH8klnJbcw2QQBwoin%2F9p7MgdnYCzjMC1eqrmIDmzj6qYfSmBr3BkQsIk4uVrZIxTCM4NnEBjqkAYdwbc7sYgoHdjxzcQCeyrc17aFMUPfv1pETmB5gfHmz6ezwl9%2B5bFkp8%2Fd%2B4rdFgN1%2BxQG4mS5BptmO1bOc9%2FbxXwRg3DYbo%2B3s944wm%2FZMZkif5AFREkVFjo02fIrYSFVUfq526yqNuJCx%2FCeJR0W3%2FLzqatYTd015jWJeRsHOZW%2B%2FgmoYBDvHtI7IDp1ZKixYEBR1kAyQqa%2FuDp48mQQ8ZQJ4&X-Amz-Signature=8c48eb18c62f9f80c59bf5a38ba1b4939a42bdd036a663c74079ec45cfd867f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBS7IHCZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD7xq3ZBmDMOFhIaYDglXottho35cJYJ0PJlvL3IyNcAgIhANO7W8mg6EmFQGMtYcfkd3MyiiWfBMlL70vt3HIaqoWjKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4DjITF8y8n7KRkNwq3AN4LOjzDAWImRT9aNzp7OPbMVROj3WGI2sMDFuSRs%2BXuDzeOtOk16d%2B2pCmEHA5mb0oX0ioyYfuZOWEYZdG2zfUDb6bpxukG9J2gIpu6fbSSm7u1YYHPwQ0enNgvRB1%2Bmp9MR7BjajfMvjmFBJbCcnnJTFdey210yhZWZ6XXdo%2BISOa2YH8L%2BdWZM%2FRRmxSLi9qeo5HEHZS50DHNFr2Cik14CR%2BAcIaDS32EdvS9WuXY8y3UGCRvA1zX4XISZ7cdQF1aMO%2Fc1gnVpHGKqVglQFeBDSaRSuTC4rbfuVhTEtGrZEe9kxWeRmr8io6ni4A%2Fu1WSWwSTyjZUvC0tkTSn8CJID1YjvXyd0D3ibsknbZJH60BbK1vwdOtbjPzb6heHTYOv37I%2FdEWBjWEEbNWM234PTYK6Vh5l9ngWAf15zzI7BNr2%2FezbNHjlSqP0aKr8m7fM0REIOj7I9%2Bt1yXYzAbAB0jfcTXWAfKx6pJqS3bii2Vf6YtSoTwgeZhzluz4mynnVksdT2PlOq9ldR3Zuy693ZepysLzSaapxpkp6MzxL0bkW3OZnkZPgSnJ3mqyRdIA7mbO%2FQC4MXlI6T9d%2F4aOsESuH3oaYTcI6311N%2B%2BPoK2qU14HRdhn%2F%2BTYzjD139nEBjqkAaAK5ibuXnTa96p0bGnXtxZm1WJNlX7dhoIt7DF0uYVjvxYZApz68TORJKHlfPz%2Fw6LpjN%2FnClA%2BO4QlTqZeG2LXOOlvHmOgx8xaUdXKjA%2BM2sCmZP4rd6%2F7%2F0xEAkjmejIRruX%2FUp4xEaXJ6PLbM0esjC7ESoAQjTV9VX6nO27L%2BZUqjxrJsY7aYxUhsOAFvloN%2FZTOeilSwIR7bI3UKeCcuq4%2F&X-Amz-Signature=9269d78e3cdf84e3bc878aa0eba65a931ec0d89170aea6f9e842bc69367f930d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
