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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CIKUJ4U%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvZsQVtE4G2kxbLjVlX%2Fbhdnk7K2MAPKqZmCyt4gRvdAiEAq4VHrE0pN7yjtfMWsDVMhqnJKjquA8syRRx4FhZZseIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHj3SA0J9D5NfEr43SrcAyP3jbFT%2F7ddSzHV%2BOH51oTk3Jz%2B5M5%2F3bNnDtUa7zl1qjQHmhmxYYiajyKgMvz7xJMvEd3B22zGNE07wNO5TcilqtzQKGA%2FyRQ0zW791xRjctMXg29%2BzPe9131wgdlPbRnzfVV8hbEORjGpG%2BrObfa5MfPZeU0xIvzviJ14Eh94j0LDDiHfVTXQSN24Bbkqq8eeTC0Ki188IrlTI4Re%2FAC%2BhPHS1%2BssZNHj7zy04cBpJb1PQfH9FWumWTZ21g6d%2F%2BHQYAsd9lgR1RVRhUtLMbsC3qI7audxT3ElEr%2FTLgiuYuXx5SWhtjjRqAuQ2qNdD8I9Kxsjak05xLd9RG31D%2F8BVn4fyXvOMpeIJndjTVYLqXmE%2BUncssrspTYdQvvqzJsk0zqYGti9xrubklRt2JUIsLNMjk4iHNp0RX9TBki%2FlJS%2FOxaPDcy52HEow6ZwGnOnBNY%2F2Ep5wTYZvYr2s9w16i1JUGIv%2BRjFHEh5YiLXqi%2FXmTuDSk1NujtXkG3mmapQK%2FVecIUbPYZYL4j6kwtEW8evuB8skWVUu%2FsAMv5ib5TgFwIaGERxEgKVmB8iSpiawTbYohaDxEaFAa5oCr7Nw5ivIIejGB%2FNQr5oju%2Fj7zg4aVf2ULqA4%2F32MPHM9cAGOqUBtHJKetKuzXMsfXVe%2FGsDYZcWYhrYX5%2FxwtVhl7xfST2cR451cZfTIGSVjTcTOkphgMeex1kZoYz1uCU2A0QxdLMmU65%2B058UMXf%2BxSQ%2FGf8EpzxyCM8aNGGKWLsRwREQBPzxMdXE35IdY9vq4d1wxHq57JSBoUePdAGJaF4M77DOCB2xbLqrGfp3zn2911PcKbP4GFW9x1Bj3zWm0490mYaUk0sY&X-Amz-Signature=a1b9ba4d56375d5b773acdfd19ed322444fca94868f00c66164b71e145fac371&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTATRRXW%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhyWbj7n1ZKPA%2Fafn4N33sXM1Feyd%2BydtMkmiZYX3YmAiEA8XhBGQXSRZmx473XulxwsTPb742yRET36UDVal6ui24qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqUa091bMOBmn0pZCrcAwQBEd%2BZtjEVveKwa%2FFmCWgGGYaiJOmhlZ%2F3Rzc7GeUQmT6eIzzaNJoqUC1IPPBbUOv%2B6DTLQrRLg7%2FgrhHAJQmBQzDDrgGuDLCoQjh7CEgUDZJlS8QqWAnpx0dcKhHTob%2Bpu59qUAOyn4HO%2BpViU809Thv11XNzyBgRDAgLE5EMynPOtbUCFpuTl3iM7g7Ks%2FNoUxeTVKxSiqlrREOKe40Mp8XS473CqfZIm6m5XWqu2kU5YVLxBvpewyC6QANghxBsb%2F6bXsCkYM69HQk45n1IymI7XaMks%2B5ODGgwjjx6GlPvJIaug%2BJmELckgFQcF1wiha5MDNaB2Yk00kpFI0wFdPQhrxWa%2Fi1cfaPoKVteDAc3ipbqeSLIwY8uF%2BP%2Fe9p4oJ%2BnqPDMF6MQHFE8RfkUDQqiNgguu4cSJbFNPhZ0mXPNiswxHBpKsLQ%2FlyDvoh6QTLKYXlRGOK41LuhOVDDHw88ML68rMm%2FHnTqIs0DqUNWImNWeJNiD%2BZV2t1P4YhmfQIngXrDqM%2Fjikxkzg0s4x%2FSBdgOeRuVBhFHrQLfYClUiU815m%2Bvj1iymMnB1VEssiAsWba2QpYzjh6HPAbdhLgIGHguQZM03nBJmp8SCC4bLc9egcdXb8lUxMNTN9cAGOqUBkNZVNFwWGqmZBahIrK1A9ewoTHjD47srjzPZJ31rrjYH%2FE0e9eA7Y2fEVUmL0RA2XtJjIVAiFQQ2IeOjUBDe8JE5hWetypSIKPUHb56NL1m%2Bw3kRwcf5cc27KSv0z6bsvgvvftJH8HCrxGqGoOjgZnbkk6C1WugBd7Fb0jSpqAGHomDGDw%2FpgokdQGmzPLV2PozbFglFitZolf2UwIl5Ql8oJYto&X-Amz-Signature=e5701a34696a30cf2360242a5e3a2167e29ea6bcc5582256682e2f0c2f7aa165&X-Amz-SignedHeaders=host&x-id=GetObject)

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
