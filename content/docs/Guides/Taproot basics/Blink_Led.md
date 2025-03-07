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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGU4MJDW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCPvdx04s4ZTFYhW4ALajrACETzQvjZEu7%2BFlLCLjyZwgIgaXRGJ5Gn0B6dsPMF7aUraff9lH0RBLO3JQWohJpsGcMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCyHoyv8Sp%2BISGlbwCrcA6y30HEGh0igRGDY%2F862Hm5avm52TNmwoo8SWgrFhKq0%2BssfRfYJ6GQla8XsdbMnJU393lYEMMo0usmem%2Fj90%2BHrgpsPnXDW9dZDYUqLZFffRJGRNUNeRwuR1M8q2GGXdHUVRUt53BwyykDnWARLhPE5BvmYZ5GRPYEDsLngOjITzDXgxCzZWzqeHEtcMQXGiNx9Cbr2qFgNi186dgr%2FEcZUGhKQ84fBRrkbCL4izcyW7BxFGkO0Z0I4Qoant8zD1AUqvQet9k5kSEw62K55ROFzOmRvH9Ox8MGnDWLDDIm27CE4jky9ShNe4ay2srDic%2B6K6nsmMZWLuVFYDQPBg8UdhJYnN1AG47X8NXVVhP2NDfOLpyHtWZXBA8WJ870f8JSDs6uWjfKWDFz1jjYCYa7jyOf6onO4rHuj7CWsyeAw5sLSyFZsMnindf5aa%2F4m68Lk2HuPbbZcLF3n3Fs4UCplXRb0QCZl9fQxaB3eAeRX1GkOugxgmI1%2BYo9G2xGekzTSNDpoBaQ%2BdKUMhRARQYUxGrA6hbB9H9jbYVxcU5%2BW02Ljkkn19%2FGjE66jEKcn2vhEEi9m0PF3Xr929B5gydbt6ylOD7JYbyiZBSV64HPtaNispqUuOzI7lXyJMKaArb4GOqUBYNmaYOkT%2F4KqDCRFAdWkcgKibk77mcfbbQjuQ9XlKe4%2FNjcWBrJ%2B959leYqSMc%2BTDpCsCmvWkcXpVcEWu4eZIeDyURFzk4TM5F8zzlFR7oQh11%2BvsSOsIKkhAbY8fQ7z5XGLryIUivvv43YOrEgQ470UIAySDrV0PFt8loQhqzZog2yFWxthpm7SI%2B2Q56OIpSbzivi0%2B4AaKvXM1996a9d%2F%2FJP6&X-Amz-Signature=bd7a9c7cbf17064587205935e0f9ba6a93c049db7790788c707183c4acd095c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6LBXRBQ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIDOk3ObUNopYf0GiH%2FMQYjX1Mh8%2Fp76mzkaSs%2B%2B1p2MAAiB%2BwxwDWFVnLQgHU2ZxS%2B4wpkJ5goowjDSdZ3KkESPmrCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMcOnmj1KMStWxFEZ3KtwDL3zbBidXFpeat2E3E45QyXYwius6%2FlrJC88wuYMv8aKmSmXt2XTln1I4gWWCbJ86bx2U5sqoFMn6W4ISjf%2FyMjB1XhHd%2BNye%2FWsxcAHPff2oCN%2B8VAlmZdCX0SECuLJRnw2kj8VJuC1Ra%2BoMphcfEnhdX4L459drloBBvGPyM06c2CF4nb53t1gT5R8rDDo8zoohpcq%2B0sUCW%2BhA1gemiGeIuG7jRPSberrQf3RUxPmrAyzoq%2B%2Bhu8cbyRshdPTpiqZ6SYEpjREEgbAHrvjSF9S1WD1NHbQsTZ7QZMn1Xyws1WJK9d14KyI9C8MVAC9ayVZTFEhfj1qxm7XjpVYvs4YrvDSonW7tiJ2Hxw6BK4WtMSK1PFRo27C69KkBYlsJDqFb2ry4mDuQE9GSQcKHdmZxPIjMPlI%2BSXrLMm4YvpPSfLpknhqqt6pEY5wcAa%2FYZeI12NmMPr46zocAvMRJPAy%2BY0Y5QbVsx9LCKyqXvK2T7wz1ukZGrvBOhI8OcD0dxEXsI0WGjQV1I70FPIo0Fxsgg7Vb%2BKv8D7nKsHpdJkPFO4OpH9XgHYSUKrjdWoes1XtJXhO34eA4rl6j8sp4zpN3DLjNt7QsdhYUvprDS5xgx83BFyywoTtnOJowpoCtvgY6pgHkKROc50ZkPKZdPTOsyfnT68h45sZJP%2BUp74QZaMNVEG8eU36TYyNnmG0WV0%2FmiWNxeyCWxclj2BxbJCvZv2qJNsv2zRnQgsBqAiKlxNKeJHnwX3PejPGT2OFjA%2BKuVUkk%2F1HbeipmglWRZe8j0UCAVOZL5tUFtVgVqWp4RIwUpPLEXkq8dagIIdwfbRgvjs3M28Y309EdC47w8UOx8GTD%2FpHxol1X&X-Amz-Signature=13905eaecb490388eb4caa8b6ff122fe507a3c605832ad7a9e8d2fffeb5649ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
