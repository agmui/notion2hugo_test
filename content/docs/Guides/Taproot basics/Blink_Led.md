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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653YXTXVC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5mSm6N%2Bkm9Sl5edLspdLQc3tauLWQHmtYOpWFLxwvawIhALDIMLPQiUTH9G4MTDnPJKJSFKYlIiOQNTTNYG1PJ%2FYDKv8DCBsQABoMNjM3NDIzMTgzODA1IgyG7PIxi%2BiXRJ9%2BTkcq3AMZWSjeTppzrkH1PrllIOd23yRzU0elesGM1bCBDxYw1tN8L%2BMVsmNWlrlRGnyE7V7DH0WabcD1sY%2BS4zEG0ZyooTZL5WRFnN39af7LU%2BTp0ZDtY%2FhbX1xRrp1bwgOw4euQUUuUsWLky9uu5JTeJ4TnfWCf83FYLBoiIqSGEHaGeVe3NRChX2xOm8Ra3vFBmYF3bBAzG7AXNP6imQuMG80TIwarsZyiHJISrAoS52M%2BT4HMHDI3S1Y0FwICSjUpVYVSjctS3CLj4RnQDdBf0TZaiRJH3ozT42f04JNX8oLVijIysIb4nSzNRODjn%2BZZqCDlsVwLmpswS0GQfjNL3Ml0AcYyNabqfs9QnKf34rtKeF8aaaXj0tWmFIHBKaho7uHYyqMRl8wdaHXQPdvKAAmExC9WGJhgfibfrTwLKZjQd2ccI59Up2zQQRhT8DQTGzuw8LFNlVth8C4aSaaQaVahItoFQcCkOUBU2fa1Y0YYsnzT5KFxSeDWDic%2FEOwThRt744tDSZ0kcwAqEKZMt4reJYQrYX4UW0KN0Iq97BWu6clvcQf7HFbF%2FksMnbhe10xGrwb%2FZE6xARUmhtBiwh8y2TWkSw8rKrsqNfIv3anAQo4oYRB7%2BWJkppsK1TDMnrnEBjqkAU1KtPMyzZBo79sYuMQ0ApebEstFWte%2BUCAsSrc8fO7K3hLAEqgACf%2BKx67X1R3zIkiX5Id9ZNvLnOru1fubUgpH8y%2FUlkJbpJNasVtH2Dy1YpVmTWoHlxWFyx6x4QbczUNXWw16t2MmLd66uzhZc0rcE%2BqtSHOUD1wSAP9YilMJYnA34uPliIXu4Fez2f%2B8aMtoLpE8TJ97VTibwG4mWp4kKlpT&X-Amz-Signature=6b0d7069f968256901344f19b0fa642659f0ee58ec421c2e6f978d6fa3378233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPFE5FDQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjZ8XmB5hui2PPK9scQQ5wA1hjWmiHP15wblYJ8UNTfAiEArMTc8RnChzUOoVgpWITao0z5F02gX6j4VJDKxbRtcvUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHMA9O8kf3cKePPDmCrcA1lvmufjAGDo9L4DhlcDc8BRGCteuIqjch6iqBqXWbuXg7bOaBaOavK9XE5LDBgYSX2XwloJCJ9RKvThzYxm5PxtHdIPBeaI0ig%2BzLbqELlMBQZfkQKaJ27n4LO%2FAx%2ByVGbZdx1Z18Ie2XSiv4cYokRh0v7eeDajN5IivyDfqv%2BANJKucYZBoIJePwZ%2Bzv6W3fzF0R%2BFvrqmwjAzi%2B80H0GkxI2Hn%2BFxJdmtLm6U06%2BKJmUHobgzBa%2B3oWzlcLsL8EE6lP%2Fu7TR1iiq4pKnfjYl%2B1a1%2FEGx3I6cX3eqXyT7UYe68xthoZc6qOH%2B%2FuEg21KhCmO5jEtfT592wHC6fnTNv2nH8kHPJr59qAPysVfJNms56KZTOZk5i3YF2Kc%2FiKQFOTkcUoqyyxWzqlZ7eWrbxerDnfZg79iz7xXL9aiBsdMv0OY4zmSnrZalJDPuJMmJ0b2prijt%2F4aSWybMLI%2BuQelFX3HmueyiJBedSzm5NnnrkYF6Z5iLd%2FD4deZR8x8n7FaeqFFL0AfoGlaxoyfbQf%2Fw%2BpQ54QK8U0dMsBNTb6REQkivDk6U6q7Egm%2F4ORvlGxvL5frmTHLzKs6eaWisQTOZvfP50EVyPL0x%2BRf7s8XOSEo%2FlcM5AdH7uMMyeucQGOqUBjUj1nOf35VEs%2FhkCXw%2F0zwcLWI8oERTFqr8JoSnNJxWWN%2FY5em0bw9wvxoq5uUw74K3TeP%2B3Wxyrtesu%2BLq5qO8TczSV0v8PSfPqeSpRzisNekJez8s7AUTe%2BQFwwHTjg%2BmyCQtewaaDtG0houpUNNUNqmUGRv5SuAlTZJkRynfd0eaHm53o60k5vpQfehKwZkADd2fekbZp4AI6rgk26vm4w56K&X-Amz-Signature=3d74960c861ff6c2920bceb46774a098c248023ecd95667cecbc874cef7d3a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
