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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHB6ZSJG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS2nOvJw0YFrWOFSmwcMIv2L3PSQVQl6iIx2RDJoGUPQIgEipsA0Efl7ms7hYJjvhirS%2FDx%2BgAEbEIdswNUJKkU%2BAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQXrUZ7dJzbJ91gJircA1IC3Hv0g9Q1cxEeNrIUTBHiendC0mLQjfFb5JwH05b67zbvuHP%2BWmfcXEA3hqaf1dOYgV6as4GufgerF7UeS0G%2B316I6o6JjrDHubJ2d2LP6yVTQbHPXUVNlaVN1fOhOktuL2VpKqf2IBWGAidKzOELVMwCVa%2FsznXr7vDsHy2ytyuliVM1PZtrr0Jy5cVUcr3brBI73uDBtRzjO01WYxJrdsuJ%2BoIFIfiDWWn2VTQxX%2BrZjbdLs6WZ%2FvtjPxGKfpfKGHgl36O1QZEN9LB21u5w954%2Fav36bAx8sQECDozPblqf7li7voCSCBhRvnFq3a2O9QCbQct%2F7w8L%2BkwpnO8s5cvT7XA9ZciRuQa%2FBsiq7U4nnWFi7uOoAv6bGL3ZdI623nsF89TITL3MNh5zIWVPwFNs7IY2Inrz66tKOjasAUwG%2BcMF3alKhe8j9WzFd9hdS3F3eMJNbJ9xLrq%2BWHAuwryIWWngx%2F20qmMLaF4M8UJwr%2BYvmAbtBQWb%2FTQmABR4tFy7gKDAAjB1FiT9mNEnGb%2Fdd5lix1F6cE5qqBMBZZo71%2FB8gEnwe9seb9VRLKJexmwvK2ZriyBYneUhkMSfHgRBH6Xp2eHHwh18mitqPkt7cuKjw%2FZVco1cMLvfzsIGOqUBD2hJpF1OoRONeWnZt37NVEfd5XNpQp8sYFwqSDtt3P7kVTs%2F4T%2BDpJmzIAnvZHluygWU93kCPUt4XG3m1n140ubaqM6G2QSbwTPydNOSadfwRvSfb4ZEfRoNGOrlADybiZKzZWOBju4Xia4CM%2BWSdXM%2BHD05TVLCUa3TOmKJPL6DtJBar5LCcx3bujPmziyLQ29XU42zaDkkuL23n%2Bki%2FQNhRMOQ&X-Amz-Signature=09988357fe209fb692c6fd5a4664490784b9a5051ff6e42a923b1f4c5fefeea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEOYITH%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOtM0UvX%2FSoq%2BrqzfGSIyCQJVzu3TdsEoVLgQb2KqvBAIhAKpjgwVrJ0A%2BYDSsynyX5FOf3cYciCDLSoqcUmPVgZUWKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM98stQixddNzRPWMq3APRoksMVpuBpXFgKw11DtrfwgepvIhAIBt7eIxhYSFgjSnh31PSHlD4GGyzumLm5lhPxx%2FJd%2B5%2BsO3MhouTEYG4YcmuvlGQkYOLNWtx4sIclTucGXWlbjBC7m%2FrWP1iDEkrG5C%2FWb7otXnBktFGmoMOJcvQROe9piU8lL6PK%2B4UgvwyjtDiF1CP0OqsDOZYfmRJnW0uMZFAM4AEZys5Fzr2XeGCX38d5xsQ2OLp%2Fw1cRsToiBJJ%2BKG6yqxDlrnH37YrjcRWCPfwynRefwXHDfXulHWtbc5UztQbz5SrSFR3OBWZk5EZe5fRnFGCdXeKt%2FhiWG4V%2FC6RNs%2BnFWGz6cAB%2FQxyFXhKX4MseJi%2BiFrxTi1IzaR60KyYfG5lvQ7GB64gogXV%2BM4ZDddj77Eb0lEzXLtOF956TQ%2BeaiBmyseAMGhTJ955mM3yol3MPR%2ByfBv5ONjmFyW7Ve7mHmmD9bqUGdsWj9OJuCzXl6JaqYD0tOpR19KVMRciu%2B4Oryuhnvfz%2BPBT69xOMdc0ki0CpiT1k41wNqs8Kvos0aNJ6Upg4epaK4x55c39cnbCzUOnVIut4zFBpLHjGcN1e%2B9xYvml880tfZ5zczCxP1MLcQpoCtLCOe7cwjiQ5JZbRzCRhM%2FCBjqkAWYxCoJT3cWyPFqb3SpgMr5hxzI9SZkJ%2FdVyF1mYJ61lY8ropf1lU%2BoW8VWtEVLcsK4ItPsMO49YL3mNIU7JKMSDYveCx9y3g6d%2BLKK2g9tKqscCvQ7QRUBTp9W3U2E%2FdIkJ2GpKq6MCAX3RgkvOk%2F%2BuB5uBNIehL6R3s5lgFlRBwLm3UfA0%2BB6h9%2B%2BakCLkQy4kMeOEqtC9uYysXxGh9cI4kEMo&X-Amz-Signature=6d223803fc2a1c7fc29233aec1fa3b960061a3f122aebb87e4484b18539fd64b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
