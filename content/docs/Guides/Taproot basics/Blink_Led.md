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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD6WQDGR%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvSIOO3xMh92FS9rGhv67Oo%2BpDvcqtCHVwIcX9N3sHdQIhAIq%2FfFmncxSq%2Bpx5figILy3mmqlmQ44SrgheNHESb7aCKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdqtKh%2FDyOPUZArXIq3AP9sRXlrWlOqfFo%2BoS7z0GKXmF%2Bj8JazDo%2FrydHHmyxt2aK8I%2BfUMw71xCvgIz9JvPoHxPWRIhQvo8zI8Cc24Y4krAhL24oiTruKmrKqNUzKv5aYOlo14cF3FlMiLzjSNkOFYv8EqWOdnhLiIw%2Fp2aQfJcBsYpIHbYH8bfJMJtGJMD53np%2B2iJEmnYbl0UKhFk9iBT0hCBQgNoQjaYlGkTh%2B1yCdA5qZn147Wqkmx5B9ZM4jhnqhTBpY4YmrUl7MCx0%2BINy%2Fv%2B75U%2Bdgf36nKv2wohZNd8DQy4JL3G%2Fix1jAzdbl8gFSpN8wUr5gNQwNUPCcjIfb5EhMctsV72lDyG6ZxGPOaAzv11tfIhjTSk8NRbqPZEts7yogGWLHfkYLG1iVZhG%2Fjm2bhy1Dc%2Fvl1UO9b10vN9sdfiy2q9zmjHBSsXNMbB9B%2BBHrQWTMzDxMvtLuGz6QIIr0XA5aQ%2BrRuftteXXZIEfa4Vr3jWnScG6n%2FjewgOTFEIEDtNs2JqFKvFtOK8EWg7Wge6valJDiMUwy5fJEaYLbhgjrZouN4iwt4njwVR3phsMtMfad%2BOKM2yXB6aNJyCocQSUAbDdS%2BHCyHDtPHAtkv0%2BJ44kArWUsDhcXBp4Sm6XwitcNjD%2BxLvDBjqkAQGdsNLPeAkRNbH7WYqwh3EIBqlY7ynn7E8uKs%2FsS9hfMAYranGqR9YXvnwRVXMZyXhRDx6SX04srNfjIBeEDGz2pqzp3Dwm75gSVDfJUW2uz5Qhay03bEyovFuKy8rVsg2Z2uJOIIR6uUTyv%2FARr9PDc3l2AtpaFIcllBDriY%2B7%2FzZWsQnokdTYSoiTyLOYPE8s9ChKi0PuVQug1oWxMJwtlWar&X-Amz-Signature=afd4c96559bace8cef4e8c7a2af4c8b5fbbdcffcb155240bab817b560bb1bec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR4Z3LOZ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDorzoAP02KInwwvhVwQf7lrkJSWb8GSh7nnS6O%2B07ndgIhANpzJGvqovToTLCXrZy4I20sHIjKOwvVCulJfl9poNvmKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3QUQIzWfTjv6p7BYq3AMpBGIhZ0ljhXHVNXl%2Fj6M0G%2BtoAAcMGMXJYg84lyBMtHruEoAB4AER9Kqd%2BpYwYsAJJxkSEpTCZnvHZkJ6s%2FnYm%2B%2BzIGz8YmJBs0awRYmHBejAW6ybsyJvGy5ib9r%2FEtxFbjaxPyM%2FKBW5XWGKju7tQDGzCHHAEej68IqLh%2BpHTQ6j%2FaZzV63AFtq7n9YITY11HNETZA81p9BFmeKAT5c3YP6o8ypaukFyPf6sfZmyqbHLescNEuIOLQBoDo4Two4%2BbC7IXJeRqeJbI6Bi0egEqBNWMaHgXVMfzJGOUb2GzLDeCZJHZMX5YAU5FHmhV1B9IuTu6TOPJV6LlKzEOHJoc35PT%2FQhzMh7%2BCOFEE%2BdiMxxjHQgMU0cyhGOrW3MbybJ1Kt%2BwooPAfHz53b5GBJfaUQw%2Bdmrid4YmuTYmybw3S%2BHd4%2BGGvU3d34jix4mjRfzOd1z5%2Bi3ScgVIEcslFT5qTwK7Y1seIGnh4CKvgjFSX5W%2BoWHsRL%2F0%2F%2F3dFO9Rv4pTqDqVsjNxtfKWmXagGrQEoLIaf7ik3r8RU8Hd4DxGV0g6xBV6uPZr2BVTUNBangvShrvwiEK4luCkEcqYm6BR8IPHB2H%2F9QiByaHXLa2JDjetAfu0%2FpALM4exDDhxbvDBjqkAafcFmYd7x428NFSP29em119W%2F1skNyC0WyA%2F2NI%2BVcjI4xOVW7%2Bf12ijOQhJgUmRYEZ9JGvlsfD49IT2rvGxWcexQ2cGqVXhJf0lNXYi8ukQr7htlcJAYiyfkc%2B5fSKQJNB0vedvO6mI%2FRUHpjFRMAZKiuJih8skqYnrSllPy8pfLn66ZzgBT77eS5n%2BIms%2Bziqp9YJnGFJjsEAkHv%2FdttWoP1l&X-Amz-Signature=1217d2deb39a239b9573ac1c2a32792cf30540f1c99d0f4ee89b43278902da54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
