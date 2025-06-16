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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626CVIACQ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T140955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQD%2BJ2E5WjhxaNcWcTco3LSKBT0%2BwISZNTxrkM35r9W%2BZQIhAMT%2FCSkhbP%2Bxpz68YXq1CnH9u%2FemvbPQFpEvLeGb4WTOKv8DCF8QABoMNjM3NDIzMTgzODA1IgyNKaVZxQ73bcylAh4q3APZrsxoCz1v1v6PJIJMh5nYgQQA%2ByRnY%2FL3z6lXIUPRH0Xc93IaxJCPclH2Nh3uT0Qn%2FAz%2BwNvhabSoroo2hIXdye2CNuWVyb8PyYAfZ%2Beo2SnJCU0uYYZnjYEZSxqhU%2FENE%2Bx0aSPzLo0yrM3l7BffZSuNtO2XmqC6wM17qz0bl%2Bl1ivx5cCJ0hRYaE0%2B2M3ZueITgdABPMKoGDFt%2FnS%2Bgk0WkzGTA4tUKdUJEQrUWxxQIviHmpFU0nyQVC9OtNTD9e1QnU669AqsutV8G4UwYjCO2U7sdCVc67RXFfOmyHxoEgL%2Fhm5JhzKK%2FDxirKRj7FjWrDqpaSRcNXhUbpA2pTiLz2PNE7RUpKcgFAg6m7REi8dQIA%2FyJotARCDiATPSJtHNcGBGN7g94Qfuopp2hPFuaJtfgWdvaI%2BeSm2q5xz6cPI702KyEkZrRqGNXRkTt4Y3pyL4b%2BXwGCYVd9Z73hniXCNr2p225iIbio%2F1bgJPpwc6%2BDarU1IlkQVrcathNbnJfO%2FL9%2BZRj5r2iwT0xuNhOekxsH5o6iYkkJNLMiSCNg5mGUCuQq5t1QaTtorRSMp9JrRUZ7GECQJ7JXR3Sbz6BtmO3MtIo9LslBfbHMJqOwB3GQxvFvlJLlzCgycDCBjqkAbfy0ZWgFUFSdB8Ha2jB2p7DIDaTaV4cv1%2FEMy34F7T6%2FG1If9EqPClii1eauKd8u%2FFJfzbNDPaxIcGD%2F7z6TK0DLDaCZwLBw8tWN0wS4AwkvQ7yKawyhsO3zWcJrbEOmqLBUUM88X3lNZUaKjL9xS75wUtyrLyylevb7%2FOn80nBWFdtrh0C0Y1TU8xKvy2b5iHnxiTtmaoqMRpVpWDP9GHr3wnb&X-Amz-Signature=eb814ae6c9bc60676fb5b6d983be38aec4a88038a1509fbee53351c9be01eb56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3Q44GGC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T140957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE4b81%2BEntEqwYrx%2Brc4e8FKYizIYMKi7d7V%2BTfHw0q1AiBa2aZtBIDjSWN1FEeibe5pp3j9nSgG19MiLtYUg9VcuCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMwOZkU2o%2FAGIhcZmuKtwDKmDvnkbdSnoo22Qa8e9y6cJAGVhyBqCoOy4IFmmMZ%2BSLBwV9NeXVej%2B1ZR6X%2BUYy5xwNdofrzkpTbnlJsrD5S3UCws7D59dACN706HFYuxb3a%2FnE%2FLSgeBiy%2FQyIg7Bxb8mnNZz2xzrA4ZVNegj0aHPmopa2yO%2BdM9VwJFCatU%2FJLs%2F%2B%2Bxj0oEtjAYX0n1DvO7491JUxgfYQNkYNi5bKS%2BLmZFzx6b9iHusAegZqgZmnvGH7sDvRzEVWPzbdLMnIs86XG4NBoGGjvA4VSJX8TCrMSzrJ1EH7MublxEjHibIEHlqYnZ21%2FOTZxQu9CVxqUs7NXtLkDuZFlHfVBGUsz1G9WbI9eTWRjHQd9ZMkd2XiMlXFtgn%2BjKq319P%2FKsnh90V7wAGylGGIGZ3U0XkORRE%2FD%2BPZs6G0CQ5bAGI6KXikomzwDpXoCJPBrI9a3i0GcEV%2BAHGBVRBOQVERiRX7OSsoPHNnJq0sIKbQJFE7zSuzCihpuQCdWm5onSK5IU1R9lyoRgtYUKWWxBjrAqbc5twvRDfL8OCyohJ2UWZ6SdCw0Bapd05mmIF05bPB1DKcfXmEZbbwG8el5ObSovbaiuO8YDZHkOZiMBPOqOWToXmK7iz%2BbBgS2WAe3How9cjAwgY6pgFxkAih9wj6rxRFi3wTMNVHFCn0C3LsYSpYOs%2FvdgH8AJedGbDkyExgTo6RVWF9V2cvAnHOY7fwoV2uQgksp1l8AJfJfw%2By8Q%2FeWHMM0CoGp3Q%2BrtpJO%2B9a4W%2FNBHV6PsgVm1zuzyO5Gd2lyoJFRxn7F1NqXIxz%2FihpMeFUOQUbwcTbGSSN21tm8I%2Bh6g6bEsD9qd5PjH7avrVnm%2BzK9XkG96ITDfTl&X-Amz-Signature=cf4b399a43b90f77222af506bfeddc9dfa497f9ba5e2d8a22b00fd155f9d1f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
