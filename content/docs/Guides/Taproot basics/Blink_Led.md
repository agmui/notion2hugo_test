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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72UEIJ7%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDeDge%2FVUOwnbhXF4Rrnfzoops1Ok3nzfF1E7d%2FBXKZiAIgPApp61OPzYu4l1JigpqKkbrpr8mxsxJ7qBdLiqScoeUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJ00Wj25s0poTNAtircA6cdwJ5uDECmg6MCDZXbKobIJU0XAFbvJhnSPdNVmAmwtmDwvCaFpPiGuc0cZPgriP52uDkmJULAwxdeO2e5P5MbFrnqTZqU5SbxbwKurfCVF6tHkYCoHWR2rl4cBa9xceEqWFfzXRB1L%2BL8KzjnJaSLb8zzMkjYY%2FtzkvOTLUBOCxQIMPbTyuQOpbauzKm9S83co%2B9zpUaIGzSPVCpBM0BEzwAZVkEMu0uWQYmzzu0MQ08BknBlrkFxaDmivdKZTrKVKpLhsDTYkY7L4OswXXYkrvIeMEEfv7N%2FVBL3Ov9w5Jhul3UTNYgZongtp7W78vad%2FwS1Kg4PlRPu8sWwasj%2BLRpHuoJRp7281up8HmfJ5ompUQksMhjUM%2BpQ%2BtLI4t00ZQFdgI%2FM0V9iucd9qXGYt9GBLrxES%2BUOepThGC%2FkEgVrF7R02awH9gLda5ybvvajrDnHSR%2F3vKk5eOVnky%2BESi1QwuvPocNcVhT0PGG53ugnchdQQ8MCxJZCtDdm29L3AoMZuwIgnmemvkK4EH4ka3uOW%2FhU144QtOpJd7quzQhlxtObn8bQBljpT%2BH%2BkME4SNIyV41MtMJ2MSEBC%2Bn51Zq6TOq3DYZxGrqpgtemVI3APmDbkZ0rU7ZpMOvtpb8GOqUBRfqt0q9ENkTZ1JaJ5cfGgo5y%2F09ALtQqV%2BeHZAabyUS5vL%2BsjwGXU%2FsDMhGnShQnDTZqcQR5fzV3OIurgB0B7%2Bo3HwTOeFnON9BqbjVN0lAeilS5CbKLTbZWPPpwnxWvTSICgHLd0UigzeW2G7xVI7qDennM3cU0KQTzY4ZBT0SrKW05QtOzDg8GtGfP%2BVAbz7fEtLpggQM7aZcvWfO%2FzNIy2AYo&X-Amz-Signature=5834ce3d1d027b5570d1c8088c1129b19196f32841f331162cdd0fabbf1776eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWB65DGU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIGZklDImBIhSiRynMl6rQ9yeSKIElBlLvj1FkxeBxKDzAiEAu4vPiMCLjfmYKflq6%2Bf%2FGBOePR8dtygJrlzH3OtzoH4qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFub1xUHqjFfVLw55SrcA2Uae4wC2Q5OrY1GgukhPf20aUaEq1kIp%2BEeZ14sc2f%2BeWayOU4CpQwHWIShk6Ady4%2BUqDm7nwReioe0LZA1EAsMmSAZVNNwBvvnnkKWFOOhMGbt4glQccze5TfB%2BsE0s9nAk2JaI5p4zAWYiksyCIU4Q3qYSH2iD35BM1suQBzOJbdhVPfeJVMt2s%2BbFSEzYJ6QcdKBXC1tF%2FEd4n1%2B%2Br%2BnRycJikfBNi18YrCYyLZuU6TCYFrDz7krBJvzBC%2FYilN1%2FVbNKieRtwLVL9M%2FSU66MxlNBHm1XjuUxWvxouTwAppHYnK0xhgHZ%2Bm6I33xrZuJYOG4xfn%2B9fPg5VTlLL3uaEWCeEP%2B35K%2FqjiL768h93E5fayEuUrhseTO7TDitqwgv28WIflSYyNLuvgF81rRUhq7Dfe8d9JcJNUFq20jXTZRiiSzD0U8x4ztnpNWoAauXviF%2Fc69VzdUvCQvCXf8RBnOsPLwQl7JiaaPHJtKot5GuvoIOuQtKu9eIKRbAOrZC7Ukt7Iq%2FS9iC7kdZj4XRmSQqP%2BRvbj2CeOYlVa8%2BzrwEwnee6MTFPodqgdJVmCuwI4MPltYVJvClVrmfLQEGBDC5vwkUJzAHBdNvPbf5U3E1OctkKP8qdhFMPbtpb8GOqUBKFTZjNjS2pC4D7nfD4LxJcyqwD9GKN2ORwYN2pgFZ5pYkpYAQkuwleVsfFwTJmjsHfnYuu8bUIYaexvZD3%2F0SZ5SE5f4IokbVXe9AYBR6SkaOPTAv%2B8V4Nz3L5MG8OaBupYHHIpEY2Ru%2BVNXrq7ZCL%2BaaUaDKRfF6YxunK%2BsjhGfhxs1%2BSxVa9gfHlHujYqg5ZUYcynilos9%2FUDxuEyas15yrAPg&X-Amz-Signature=db8e16c2f54b1047999a87ce68bf444769efcaab44c827c747ad0afafaadd931&X-Amz-SignedHeaders=host&x-id=GetObject)

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
