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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466553UHF3X%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDpqJDQjYZiG1GsNtSarabn7Kf1EL6Taynx6xrZwaxW6gIhALRE35DuHHbsfFFCUtjTZZqNhvpBzzF0NPq%2FsLwpzUOGKv8DCDsQABoMNjM3NDIzMTgzODA1Igw8VGhWyZQWi5FDUqsq3AP9rj33WeQKm4qsT5ddkbV0VciRweMsYymYhV0xj0xtVePjigSDYOXPZxlxeKdobXJLWREhCJHcj0S7CM%2BTsbSIMcjTnTILiAv%2BoTi8%2BjsWlEknKdJucHNahrqysHvT8ASjIHCNt%2BSe7eZaa%2FylzkRGMr5sffmKNOpP22gIHMsBG%2BRXR%2Bqiq0JOclZlUTzZG4Oy55OEi%2B5N%2FfmhdXGHF9tfCeyEPgGPqxy%2BwApxNhTBOR0Nb2s7zGV36M0gVyLD6o63I%2FF%2BESLw1ZKhydk9wFIe5cyic%2B6Y7C2aqn5tbl8svULREvHnqLR5hMOmMAAt%2F8f%2FjO0C%2BIKgItTgaXQ4PAlnCBS%2Buyuqfdj1ViNZYTAonFzLctIU1tKMWjprrJNRPe406ELoJ0MSAI4NISjbkZZ6bLyYTSeZdGneDuuUFcAJ477VbMKmZ2AqAuZxoPBG2%2Ft1ubNwaXL8TaOkPlvmBiZmTnGPT6U%2FXAIw8Cm6AY0MT4ykFNlluWb0aiRvo0AWwvj9AGbkolRsZnmtBLtT7WSzbn304vTEzjwUt6pD%2FiEjSyb6IbLXjMUbWi%2BqrgylKAnI1quoQkwhMNo3HuIy3xcU3AHcq8F1E5yZe9B98F%2BsWgmth8gPPRODQxzF7TD9ns%2FBBjqkAT3TcYtG7I%2B9M23OVqTrm8ZuBHAM2E%2BR2uyo4Q1FmuDiPrU9VAM%2Ft62gWfqg6DCTLk7fhagqsxSMWIeqtjII%2BDSbnv84nr448sNm5PzqMhZek13W8C3Y6Rczp7d30hyt9mq2z9Ld%2BfDSxWLBptwp9UgZ%2FSZVUzilBqoT%2FOJRD0PpX9z7lrU8Z5P7KkCKglnmQZYejvoM4aCMX8gEa53CbJk16WsL&X-Amz-Signature=c6d657799a7bdfa8f1423739c6df3bb0305e0b92e1533bed5b8cab5a5a4d2c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6TFVZE%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T061336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEQ4yRg7cvtzfjUBrBaUzujF0SniS619Nflvmo11f0v2AiBpn33ogStAZALkwQk7b8JqJOJyaPEYpddPG9tSEWJADir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMApg5DxDXnBSMrmlHKtwD5l%2BPOVfulRRBDf9puVf6l2AxPLRX%2BRiKDAYZVhaupAz6G1DonKZ9bik8o6ZWBnLPG8BX3SvkpNV6GCElmNccBQ8F50gWLG3QGE83qroAB%2FD1fho8Av5GfZXA1ZydrTi8GskiW0500C5X5x6NfMkTav3TiEK8ke%2FsLvksCKAvieShosIhuCEFObjaD5nqoPl9Z4iF%2BtmFYU8Yg36nY5B27CyCEBV%2FhTAjg3OrIoqlosL4JxjDEYKUfqusbT98D5QX1Z82IP5hJbtRY8dMmkIK0u1B661Cxdz%2FZedzCpH8q4WpGM2qkPXp3owcpPcuBIziPhec%2F3UCRCpwiv%2BbHcxi%2FgRrlqC5ZFo1op9bQa8Bl8Stf%2FX%2BzIqDG%2BBtqYcIWmANt%2BXLBO0qQCfqG2Bo5pK3mm%2BahAMwLq2PnfzPa3KjTZtwNHYd784eEZQlDhMxousCNMUwDnP7uA2r%2B7jYcd6hWXeK1xzCGc%2FQgNOZrOkxLgVXXVpiJ0BzEHje%2FQH7Xzk1RjgzO15mP4%2B1P3XHIYNLprrgIIhD04JJoPe2DVWcrDB2ZpfnOjkhUka0b8yFZXaaxGlFCSyUK%2FsxkcZ5fbLjMF0uvzBSeLYN4q%2F4tJJMGXzbBQ58uKNcX3i89scw%2BZ3PwQY6pgFJKb7eY%2Bx9H3hJDGFovscZkTdhFD%2B1EdI2bffRaVqbC58bRL9L9eQ%2FEBaL7zcc6yj5srFeay4Co7TbrygHanf5Oxx5owhMTJOOUm%2FUUqgc8hQr5PhFBfFyt7GPm1owdYypxSYRZ3FsQT6lBVqGjSTIR10%2BKmRKQVN50YQtU9mm0iI7V9odskehUzJfF6TI6VcsQOe87Sqqb%2Fvk95imOIFeoC56cSWj&X-Amz-Signature=ee2bf15930893e9d8eb3297ee22d148bb19b5c985f9e1696cc5eb3e9376af120&X-Amz-SignedHeaders=host&x-id=GetObject)

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
