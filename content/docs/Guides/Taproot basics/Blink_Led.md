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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OVPF7PJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXPoQi9bFyRuhmm%2Fu6kRsM0U7%2FZ5b1QhfEO4th9lH6kAIhANSahuL0nve4hDEXVZJJ6vZyjW9%2FkR1DIbRmUrouQeVBKv8DCEEQABoMNjM3NDIzMTgzODA1IgxdRNrNTGpURE5sSxsq3ANYzYP02BXeS%2FkyS0E65QVgFBAsETKJ234lWfTPJeg%2F0rOZb%2Bq3gbQaacjicjCdQyGsgq8XtmIIF1LA1xVAXk5lUEN%2BfMRXLkIzyr6WCJ3ZCwF2nKHvQYWTXppjnxfFTDXbgM7Y3cHN03CnDt1iK6x3BJh7npQxQV6JEeH6KBW%2BISxxuWwiwfygxlmXQqMBsQ1cZ80YWn4BCZYm%2FB4HmXga%2BDsOGe81qp2neRg4sQ3zy36XuBfNWzzRF%2BcFz40leMyZn7BPqxxCyK%2BC%2BZ5mEXhdLX3yO1F6SmEZI7AeOhW5s2o4%2FlwCg1q6zBVP%2BjNCLNDYaKLA0%2BN3HVaZ7GRYK2EyFHcl6fHL41LEMNkcPivtGxr6uJoeNUV6qj0F4GGhKsEtyXKNY0tCO%2FxVgYY%2BYJYiFr%2BlDDfdBpnuWHy5Vm3UhKhI2x3LwXN5ZiNS1ZTPz%2FmwD2Otwhryn72C3PmBzAHm9xgjhJgViPV7h1iL%2BVIWlkd0dZPesaD93MQNIvK4wn8VuElU6Jr%2FQwI56aSG6IyqLqYgAVnNCzjmzZ0oD1DU3RIKINfKdZ2zRs62JLg1SAEMHRnTxl2RQXHq16MjVfiI8n%2BaFJkxjtuPdidtpWdGF%2BMfttM%2BxY2NLBfBVjCkr%2FbEBjqkAf7l%2FDgTZnsoC2l4jvyYP7h7AbCXb0OkMibKiU33%2FxrWccCUS%2FJYZy%2FTnZuwjRVXmA3GXiQ1EVuERBmtfQvVuw6GIUoSqjcCaMh4PqD%2BkeB32xR7%2Fo42jBsVxByCibJ5pWgg6HiRkLXwT6LTdkeVkV7UbDUfihwG4LdhhkT%2FkXG2rbKi0%2BjDAUaGg%2FU1to%2Fi27kgq06seOqo4xeETbrnj00BHUIv&X-Amz-Signature=599c675355db44987bae725c8ce7f6a797fb7f3ccf6287ca3d9bbdb959257f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFYRFWDM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCguN53%2BTz2VyJOQrCSCp3euSKcIM8DivhwDOQDfpuN1AIgZM%2FetDpL6o3AigKQz8nTf59mIjI4JMvJrlOLIdq7afoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAA%2BFtu0vL6xePe%2BoyrcA%2BjgL%2FcnnYMSYlbtEUx%2Bp4rBrJWDQXPSQ7ibZW5zDAupi3edA41ozr3mtdDlj2oNGoVfMzDvanerN29fGZq%2BjYal8DJMRQ6%2F5bm48eLdku0oNQjwcZv7p%2FvpJkHiAmDwGKxkOLMrRuDxe%2F7fO9WPfHTZeFPx5zkKKdtWbALL%2BMtS3Frb%2BOVeSzED82pvIVUiKBSXOHa31p7P7L6GJ4x%2BhS3y%2BQaqFip9Bj0sb37ed7kqD7PxTfpcL8CKPDfmtw32GFpGSwSWN%2BIe2IogxOhE%2B5P8WWN%2BH3RA%2F5M14X5ni%2BnTVj4BWs%2BpFgJ%2BGRnlqH%2Bj0LaCnbiGcwGoaaoWeZ6rt2LM8k%2BhCGyiL3w5ako2I3VHBbj3w4hirJwGLLSzW4CDJj%2BGLeBLE%2F5xfBvjyOgEvfrRWZavUyAqOrxPL1xdvJcESzoJhin293X7v%2FCObSDp2iySinrfUvshVu1WHqSC7GaLLGYnbLY6bzr%2Fvy1QiX3XJ5YE4dOyQEfk%2FSJeCOTG8ZUhN2uFFC9gXH%2F1%2B9Jw7YKCKMdW6b4n8QIqs04vMGkx8G2YkFbchAYCXR48%2BVgBzNP3cLiWH6a%2FBbGQ6mgzQ4nSbkrK%2BPa38rSgCUnRgtSm0QnGoGhZ9YQXVGxlMIiw9sQGOqUBfdI9vmF5QPOqvicNHDewv6u%2B3AHr0jL1DLe%2FGXiePKdVbp92BuAiLOm4%2Bx5gOb1MIWL7SkVdvWjdTYyOWdy9cYkLdmBoYm%2FJE0R5W8NNnLN1vhIG7RcI9yEw50j49Dj1i6svMu9QvBR71aCDf14XSeVKiyavbud1iaZlh866kS%2BFKCfHSxC2u5xQmvP7Iu2YCCHy1lDsUiCgMJPWclFYPnJxQjo4&X-Amz-Signature=b75bf7b85c0bacc962ad1e9e25e1fd050c8906d7662f2e9fc801b1cbad5eb614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
