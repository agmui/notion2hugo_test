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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XA6EB3G%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHXeazUx%2BfFNPoPU%2Bjqh9VzLHYLs0bbz1sTFXs%2Bv1hheAiEAleqAcgnAkJPHRPx7jX8tt3kxp%2FSuD22Kqn0MXZjI6nIqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7u%2FkFtI4cPM6LNJircA9d2zpOLYDU%2BlAdLm7bdcoh6vMz3CXwoiqtxlgtXT5E5ILnvfs%2FhU1b5YuzmtXKGG9Ej8EIo0GnUhmcCd2Urwk7zEoZo%2BJCUsiNn0izfDeWJBPWJeSUxNMeH8uw50bu7M2hDTEff2Wo9ugeoB2sBPBACg8meo4sjGJPR1O43d1eaptxtqBOY%2BSehjnH2pjfXuHn%2F5jLoGTQjiqcG%2BqOCHbYiuWOn7lFs7ZPyprYlEH6RcbAnk%2BAh05MV%2BQSHisEkW1NHUPGiI%2Fdo8xLGqAwQ64oRAayendckjxgL3Xzl384h921bIs%2FrsG%2BShK91cUzHUpWj88gKmXPsSiDpYUf2NVBeqksY5tvz1413hK5pxtGOIMROOOo%2F5Vqiw%2FF7NYEPfbwODKCaQs8sUeO%2BRz1QwTojrSqPgkTIImY5Atju74n%2BYvrFMMSktBa5app%2BOn0HOaNhVmwJxvv2gEsy1IGyAKklpu37gBu2zjyCHCARCaSp38NUVTp9jMzxbgNHnnKBhCwsZ4V7KtFXmAHcg6BJhjzleaB0FUQSOaPNDcHUHeR3clF9GPcPS151uNlyVdgyYSDOGPACMaZdkN44eA%2FusjQCvp7RcrqauO3kYDLNqeqqvq9x6%2BGBf5gTFyqnMNa71r0GOqUBVQztA2zjH0rdiXqoUyPzekIvxELmgK9e1PjgxwDCK6%2B5TwjDmXH%2B4ZLrcxvrx2oFbxHK9J9l%2B%2Ba4Ijfv%2B6smK32F5oS3VB6y2HsgKfdwAFLTQkWE%2Fvdbb8fPgQzgXTfIWV5HXxuk9Y31DNisk3V7htJZs63MCrXsbqd3DzRZvH%2Bv9dqp0LYV2TL4RthcEVTJvvPoKVklolo%2B%2BhJ3XZICw6eGRbpQ&X-Amz-Signature=41f448ee6d8c043fc27bab544232b29a56e4fcb7f5268378a974badf5de17078&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV4YONTS%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIDVulcV5DY0KqUOTPqX%2B5sXsvahubm2wCTWd7oVTJAWcAiAvVboaUsKjZGwjUb9JyM3OOvXr59NtucZg%2FqwSz3AV0yqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbfPk5VbhRfNIu7YkKtwDlJvximqQs9oMQ6I56a1z2ln4sFu79tGhcWxauWfEcq6yMLie%2BdDMi6WiUTF6UALdTDijx2f%2BxSmq3XnComKsaHFt%2FYsoZfocAFDJ5SzdwC6%2B7D9sHnY6W62K4Q9fhluTil8XdaVqFHs4hfg4U3iWPemFS3kKONV%2FADjn2EJyUMBZguHHs34uh%2FEkgRod2vmOroX6zPItidFoM3iHzAW2NHe%2F6i8WySzHwBjTCoC4ERPdKOe%2BUw3UXK5a0YXvBZf6iadoofzUzfCnqbyN9oAUBAi3eOJwab7WBdJM8KjqHbVlSiG7ClBOJ%2Bs2UWYArIZRYk%2B0LvvQNJRdw1zrb79tEJ4S7pJq97BnAaBPF4cvjniSyRjQOmFsLt86Phfnw%2B4zmhfrPaTWIAafS6iw0rsDeEM4WNQEjJazHi5PzdpU2c1KTGqaykMqBwGbIYlrJPtzPuGzg%2FTS%2Bv5nvdWf9BgNGtltvSvBwAxjxvGBinLLRQCa3%2B0uvnYlVZi%2FVR0sXC0QrsyrhzMkYpzBwNZe7leXw6B2uoBc%2FofwEatF12t2HkvYfYt6tdJNmF9cyIN8nyzRmFkyk9yLptc2UuFJwDqM7MWkVRKdO9EqWrnodF6JvZDgFil85yaXWEw%2FhPQwwbvWvQY6pgEWEhcqWNHujRCcISlTqhqhs379X%2B3oF%2Fcko2NUPVs5dWipwmCXRea4E%2F1Qy5%2BiNQXI5SchYMX3agafd4UlLZGFQBoNrAMAvY1nWNnPsjt6DAzU4ytGmBYX2teLMJCclGrMYp5ykFLWstbtwshlTKLvONr8fxYh1Y%2FDxnNEcO0ZotEho5uVORcm1eEOyQs2ZBCZjWN%2Fdv640Mt2BcEWPUdEILemTei6&X-Amz-Signature=df0f1250f2473349998afdc87cd8205cd55133ab070fd9fd3b4c36570ac81892&X-Amz-SignedHeaders=host&x-id=GetObject)

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
