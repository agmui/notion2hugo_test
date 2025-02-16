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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XF6PQRZ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCosQkf36RrsHupaQGGshiW%2FYv1lnCqgFsj282xk88GSwIhAMnEM3o5M3U2MvUsShh18PKgsYixg8N6Ykyt0%2Ba5jPBzKv8DCF0QABoMNjM3NDIzMTgzODA1Igxyw%2FXnjRNLh5OlGMEq3ANrLyGzsiI5l%2BabAj2Prvd4ntt%2B0x52AwN7wb2z9xY2kgJkNpTZmlfervo3y57IbKgwApzg72KXIPB%2F7fx4vfSIE7IaGGFEjwI5ijzvDNvdY%2BhRXqH739DJWt2d3D4ksBwAA4lB9RKWLMeJQdt3ac5n5IdbIILOO70EQFzVvyGW%2BoBihfB%2Blxa31il8hzFmukfZhUtVBPkZ1QhXJvXHKf4Gja3X6gZN0k3bonEjq5uCizdXgCw1edVacdaRmkMlZ8PJLOBDBTGPg0Yp6eANswG28587VaWsVPhvmrVGBA6Qz6qCXy7oRZVIzH5dCZGrE5TFK2F6y574jwWCtqZMWOsVrKpTgBE2mprRMTWb1fhWVmHIlcpRVCIG8nb4a3v0NaDiEN8UFpfLGUuE8HKaik1a4IktMj3rAn1P%2FplsCzazlsV7x6dNTfratJLSVWoJWY1kK5zh6pjmc6EdvosuPmPjIVUOXagLF9yv8TtiavCs2z0aQ5G6DCHLkbxlEbU6FD7WH3dRyc1NetGHdnaH%2F4N3gM7xXGBat%2FwS8FzCHjG17wfqBhBvsIz3uqJeQcERzEMpLbD4uqueHt%2Bv3runttBYTcCDoObLmUrcCHPYc8kWJDHWlz6dc6Jwa%2FhfYjCYose9BjqkAcqkA1HEFOvcOpbq1VkDtLunpnkOV0W5Rk2LK38YvNp2ifBMe%2BeitxvRFUBzrRdmvqD832D%2Fs5pFRyMDnB7DuyfSXs6TNTIsnRubl5V90Mp3vW7T95Z1epRMj4DuCaqnznJsdbqCyksCWSJwvA9M7NyG%2FrBzYcNV0Gy08oQ6Ur%2BZM%2FBEB1plONHsk91FT0chTh7H8QlgejYX541ayqjhbA17hwPD&X-Amz-Signature=036fa8283a244c9b9a37250f32e8d95da2b97007a8b9d97f84376ac27d122ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZKVELRF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T131137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC1V17dehsnw9nIvlo2lDRDZskzMNTL7fV%2B9u2iaenrjAIhALl7ysBH6xlb4%2BIH%2BavvG9fS1wKEjlJXEOwTvClTvaCiKv8DCF0QABoMNjM3NDIzMTgzODA1IgyGm2eVWVKD9JQy86wq3AOYpDUbRELsu5bceEl6Z%2FCJQYkq10ScBvXTUp0s24TKx3OPr6PSK7S%2FDdkDVfrUWJVeGh9JepfFPPi3JlFrJ1Rs7D22cOdzS6cNbHlj7lFmgtUnaz2fHa3sbMzELEmX0CyI3rPdbFAUbDxR2akwfgdQsV5rUCJcMsDAp64fdMG0wv5qD62QpKtq7Ic78%2BnvXzFnM6aAkbr5afNPmCe9o2tSxWQW7WN65RQlihqm610hiMi5L%2F3FbHPM4pOWumRmJ%2Byr0IfIjftbR25Pgq%2B6pshhktXHbLzf2Zut1Qc51g1DC9tXveqSrYexCaoFK2ZGExRWC8gDDwFXKmPiaCQ0py0zGfXiz84JKxtbq7gIEn9P%2B9zljWU9KvzaDqUPaKcJgRocS3UQC2tRCgDWYRju8oB66NptJkA7J4gcGIC7aRF0FbJO89Oy5PSvfk8Vf%2FWGuik03JOm7Z6Bwv%2F79v5GdG5nfTM1%2B8iZJK%2B5QcAaBdMTsrgKUCV96tfU%2B%2Btta43eOteAXb30nivBAhWxOPa0BmLxyGJ2pkyb%2BEbE7F2gRg7fPJ%2BUc0ldJHqrBlfzN1k55u3GXvm5OnfHeBF4BydNlpMrXCd7vo7vqxKrzLGFifFmnXhUh7zEhHNO0QXJejD6mMe9BjqkAWYaZlKcv96fxzQQHgBIy3s6r8uLu%2BY6DoqCg92tNo%2BoW%2BaffcwaHLgRP7Hi3YEUqH6FkRBYZQLJ8qaZKzzuLo6CpYZNgMieG7F0m7qQy8Zdf84k3orGzpEZ8UvXF1evAEgsrUH%2FQE8WKr0Pt%2FgMt%2Bz%2FrPUfDumNOjZS%2BCqDY%2FaYQWIt97Jr2BAkq4%2FcurbVmRkw3ujlZGKVqTWsI%2Btu8CdEZNaS&X-Amz-Signature=fb22822f2785a2ddf4b85209234b0a0f7137d733dd746864e948d48f04383679&X-Amz-SignedHeaders=host&x-id=GetObject)

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
