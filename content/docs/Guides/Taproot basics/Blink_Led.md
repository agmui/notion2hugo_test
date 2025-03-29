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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGUKUZU2%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD6L7yJ8Wh7xDy1ViNGVB5vFvk6Co6nYj8RnltmjqsGfgIgB7nBKFIeqcwrN8RMZmWea4kkGHY6bBJYX3eQ8P1CJ5Mq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ9zyYN7AlBe7zTPzCrcA5goWbz5tzGqQndIm136leqzP4gawCcvAPOOinyg%2BICK%2Ft0ub8LdDZNqzk1usx4V9n81SOEtxsN8hbwi51pqaptITNbeJOu6f5Jx7vVEhcUeeFqLoOu86vgAa8eNNQgCm0H5FtUuxsLdYtS%2FNq3VSOXFqnUKVgLjkazowyGrCtCWcsRXM%2BN18USy8ncilv2QESQb4fGSXzillcC3pl9XHERW26UzEF18NHSPjFo%2BRanq0FBhE5rNbS3Q5EkYNeF2Xlsf3YnNyuC4pkZWc5ktiUVG5Whhen19VyGqxWZI7gcRpno4azaX4pxIX%2BV5yPt3%2BGh3YIPTZ29bB778rruunIIg30pXJFpkO%2BVkqub2zyX0CvQQRnFPKX0SqveG64jTOWXIPvnPZ6rFLlWfmOwt6d%2BbfSWz7%2BqF4JUqny7TmGqMShAHNXNJ2sKWjPYF0U1WfrH0BSEGt%2FpEUEmItahRI7t8CHT%2BawPlHtBcLu9Sn8ujaBe4AGmHZP8JVI5UyyYf5dKPwMZ8vtHTM19K8isrCYZktgfbLAk5vg%2BLwO23NBmh4dpBgFCO1lGlHR9tmOAEEtM65NMZKSmYacBPcAoLcWJ92hDM6fgd37iZYr%2FE4b9BxdyN9sldimRPZ81yMPO0n78GOqUBp0cGr82%2B7RoLyXx8vIddn07ZS9gTDKtcba797NTnl1%2Bktyn9vztaDSwFeaG6KfObyag2QQdYJw1vKJBujwwFruYDQrL0OIFDizdQxSI6gNFR9%2FoQ3cSA9GSb0luuGvDuZOD5a17lbMWOH7q6gQGLgJzTiNnDfVEUtF%2Bz2SJOshqv9HLa7%2Bg2Fthnj4PD9w1eQ2qrFs7X58MJWxSZGc6J2%2Fv%2BYW9v&X-Amz-Signature=42f4297c9ba04a06d921aec44d10c77f3d77cfacd3952c464daa520a950a98e8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X33S54RZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T131427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFPHgZr%2FvugGJ0hcBAlbkdyJL42Wa%2BGwfKbkBaYMd0wzAiEA6%2FFUs0yzCh%2BVpY1EGkP2d0VoSZHlJDqyLOTX36rvASgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMGSmgYW%2FsN8Rf%2BjECrcA2wxDBzYueqNYHOUNLc48q1KLk7zXmPeW0%2BjG6%2Fq1h01xnk4IFfr69ucRPd%2BUArICOSMj3v0z5ktDDdUIO0EDzBv8OSO8nxdFPhl6qbuCTodtkebaZBzRQI2zoLcDen26PwGRi4pvCdN9FKFIHcbXILqu5huukzJyyxD746snxgHe%2BBkRqH3h3SdZYSTVFlTTJwioZvM64KGFdGdxQEWCSUOVNmDs3%2F38%2FWu31O7uRDdFIc2G7QtHDmPZOPSkAQYFKnS5KHfBGyrm42aJFx5ie1MK8kfGW2RwnCwdBUdkT1dG9BxmXORu9TMg8b98oQPbLDwcjhqNksDKC1Kmw2HFBaHXPIcRKT%2F8EwkqGv8q54y%2BNDJ%2B9IMxCeqjY8DRI8dzT3Q8f5STjbpKiNHnC5jtU1OW9FjRewgBIBZtwSHLkCnIgppnwhsFSB7gcV3g3m5Aac6wnGYCErJFdhPv8WKI6vumlShc%2BcxdHQCGKtocpSEna0sCD8kxsvMozS7tEsvGPiUXLqNv362h6hGlVp9EmYuUd6l0h%2BDtDAdj14iOoi2Y2g6HyZ4%2FSLq1JcxwxkrK1b2lxJHGzsrZtVvwTrgJ1Cz8bKQS%2FpQsYOoJ14wCW1TAXMKlQoqBiVUOdGoMNe1n78GOqUBpLx%2F9WhiER5cIPhASLHKwh6FelIrt6z4wsgiTCaayNqmxcR7CsMY3LWw29e%2BDasChWhFd4FUyzuG3aV8IFoAfdeQ2siLA6XEcF%2BoEI2qPjRq782DMFKle0mqHmTXSQmyrQAHeVHDwq2h%2Bil3zzMtgyoKYyS5wzfg36Vf6CrfG9GmEeqmRzZtO%2Bg%2F%2FYh7umMnvxdSsIYj6QjAwub%2B%2FRMLwKWRnPrp&X-Amz-Signature=b18020cf469e0ca779d98701a5657b4c7db9e9cebb8f3ff2f4a21445007dfb34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
