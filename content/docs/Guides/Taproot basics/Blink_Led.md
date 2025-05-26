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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGM5TYG6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIBjlmP3w9yY7i87pn52Ue9Qv4csjp9g25j0d%2BUbJQ5bHAiBaIMfQitFlU%2BHaQuu5XJhRkpXsi5ZbFMNb7g9XAQ2UICr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMrrElqoixkgDcqxLmKtwDOvU7LoKe4NANHPkCFMtupRJke08gn51Sa7EFO6bnqh9W1VmsRcfWFkOEzoB%2FbfkpOtdo%2BGdyJl3zvJqtzGHqoHB0%2BHDgvmWRxa9YgTSBJxofkVByYUjefXSSM2f4RmraJrZe4%2Bl5QtloV9pPvyRT2SM0qX31RV%2FCETZ%2BAiaD4a75eLEFDtZyVOBTIFvBd0cM1dKuODicRxG0rSITDipWmoTHOFveRJeCDS5gFYiNjKpi9W5UfsMS6tsZViWNrS%2Fx7ORHo3GvMWLyjG6ffr8zsdE9RUvuXM9rnFi%2F25UQHfNNEvp0D16JMT26Iv3mGRJ68uXkNSy3G%2Bjw2egq1LJF1eYhFI8fmzDX%2FfZjIoXAOmjF%2FoIaYFvI1tRG3c4gt75eE9LJDXpU3HRsobWimY6aMoo9eVBNxWoYNlM%2BQSgEj0wr4nivUiO9m3nf4%2BSaUUcaYo6bOM%2FexJG6pCG8o8AWQm%2BN7eLjN5Kqk%2FWe%2BrNBvYdppGmaE4bDNByNFH7n3KN%2BAWGfhlTajyIU1IVGJYwqY05MsuPFTYySSJ9GncB4VBHOjtOZuD8FKp6p62hGM6%2FtDoE%2BSJ5w0uWCgcUqZ8Rsy8EtTdM7FmdjvLXFJnq6ixbVlYkH%2FvX5FFRD00IwwZ7PwQY6pgG%2BTXAOfmYErJ2r2FKhLo7IR%2FDXyucFbyLCWnYqB2ypLOOXB4lp6o3ISBikyCvb58Y0Uu7KGXvleNoYDfjkMUKfdQGyY0u0KSC0pHCdTgIzsDq2gHQkw5RwAZ0yf0wFoBiJRY3S4rTkD1cukivXYhx88JAV8LfwzbfbSyziqB%2FJlTLaccmpyV5jI%2BrvqAk1J6WkhyiSZTClM5TaiWewAbjPq4OOtL4H&X-Amz-Signature=5ca7397791192a2a03f9543aea4513767b6e747cbb08cc9e074b44df2566c887&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFOVS2C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCCZNKcOmLgyKXHlukKmHcmhEwCbkdsYKZU%2FmG2jmGyfQIhAME%2FXsDfa6oZQVP52pv3%2Fnx%2BXtoOU1k%2FljHGz1MqUxIcKv8DCDsQABoMNjM3NDIzMTgzODA1Igz9J%2BdZzCh6G1%2BlZDkq3APgQj%2FVkw1K%2FbeK3yCqjKwvwponVoVoiQwkp9T6YbJ5XoXni%2B4DSMUbLWQ7cgRmsbUrpp1DNzcjq0S00pCm4ReQnmedzzr3AFn5VsAfCYPT9eJqmqaWqw0238HrT4hugwZ%2FT8pTO1E9AHMvkZ8mblHZmnLJGG9UdTX0mTOCsOFiXSBkxiyEjhHSFsideFM1ZtZ5ZKV1tiRErU3nOI%2FSyYK0cb%2FNc231DcQ3pfTVIa5%2FqB8yKW42HerrG1PeslEzmevG0k1sb%2FuxIhLxTJf%2BPsC6BaQuY1bRjSq80efAWAL0l0y9Zssv6F6Ug%2Fa9E6yYQssL8Bcy9M2g0jzh2FOOYs96cHHoWOnW%2FFwiR3o2XnDkweXH1Jv3N4rEZeAYW4OwQgHnhSJai8l6W2jqIrCyLlZpuU1A8%2FqYIPuRBxg6zM52A62%2BaxqSOcB4ZIRpvsfEgk7f%2BjjzQCgIj31FBa9wmIXRwSUYdoqiMKkp2q7oEojLqcNASgoPqDUdq5TUb7rP4tQv00CBQvo06DJ8lLYJ1AMB9Bi9z7Yu3AIE%2FUf8RaZ7jBfUqPg4BtUJjDGhrAYp0tA9BiJwI3rXeSGuMJf3fH%2FpN6S85Ki7fOgC%2F%2FmlI4sEKnkaWXJBfFMhTr9vizCQns%2FBBjqkAZUaalcREguuBRa11s1UfUojrlDvyYpdFtODuuBfAkBeIAjqL2I9HJNOl7ZJ54hhiI3ZPd4RZyP1cCEg3S6y1CCmHddh7sQ7Wpb1DjnxswYcYMCxjl0xYT4fQ0G3NSV2YoYESqncqHN9SBJPqiDWMPEZ%2BzaJDqPpOCKyLKLASR3WwoB6IDbU%2FMc3eFRkV0BPk5sfxEn0mxwcDSdegvpZ0nl4D2Iy&X-Amz-Signature=0e508432e34d056064070e06b88e04b4f64ed16adc1bd9903030d387aa5b8930&X-Amz-SignedHeaders=host&x-id=GetObject)

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
