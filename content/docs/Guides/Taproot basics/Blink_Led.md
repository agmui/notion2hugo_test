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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXE7HIS%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCy3S6cYkRov6MtNvEDgWRHjkRImDmiKCRmVYsW3%2BAhQQIgMeeqowldJ9t4j9dhhmHS%2BnUXvmC%2FGu6bb0iqUN5OY34qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIEX2EZZ%2BBHoap9vECrcA1hV6wNPlXmYKF2fGj14XJmBCsx33Na3v6M29GSua4J%2FNWZkT%2FgEEKZLtVF2qgZwQ8PVTpUU6y%2BWtPMXkNiiXDAkA8fCoza7jmNPiheMwg1fBJL554xdcsMeNz54d9NdWI%2FYE1KoST4%2FPt9HSuwf%2Bx%2BbVJOagiNSaqoWpRFmUCRrBrIXExya3PzeG5u97ah01NNZ0KsHvKHkXTNpHwMJGI8piIl5EXT0X%2BL20HFwtdPQxsbqRwvVCggzqoKjOEiRwEXc6tE6uC2cLShgule5Xl%2BzyvM%2FuMnvvKgvUnMfPh3zFAlF0Kw%2FzMk91a1q02uOmqb6iMJTeyFLwt3pBeU2ws%2FWWR0iU7MnZcsbRE%2FgoiISn6wetuOSOxHiDe4Q96fO%2F40Nh2RUdJjM%2FYtOzVDYkk8d3%2BeMqN7kxQgDzsdccual7zW8maSQNCamKaRBuz7eKcZ8spf2sQ0OuCg%2FfgwJR1Xnnl6X7iiKHuwIDCMayt0H0TjtSoCyONl024jH7TxaJJBeTTikQMg1yk4n8sm9ipuUHqj07uGAvpUlsY2vaiml2V8joGUdnXUkb%2BHfMX8BOXEdt3TwNd1IKNA2SjaHk7IaAhabFOgplLEEnlBRNJfgA9iwtTgPgIpeZfoIMMCuuL8GOqUBRK9oTNGT98QvwxKoWm%2BuL2ZABIP3%2BJYXI3Dsl2yqJGK7WFCiQ4tBvrFqIVqWAZEVwyVwI4gTvVLo7azR2lx2%2BkkkNcE4%2FMT7o6eSkKzbiH7WT%2F1YcMsd%2FEuiwYV5yJwLt1CXHfVgdqtqSMQ7KLAGgmz%2F1V2dp27Wf3eIJl9%2FTt%2BLkTN7ltobLyQOXNFr%2FHR8xx0RUw7qeobRvL7OsEbIrSW%2BQ3hC&X-Amz-Signature=454f8554eb61cca4cba774d1a42680f6f959e73d8e133be6a54af043981269d7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HNGOGPZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICgDj9MXuJSM1ACNjrlRTYbUQWvBbqzSzxApC8C1yGIiAiEA97xRL9bdCLQEYaQZdxTX65URp6vAaAKRN2xBW5pxhsgqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfw672iVOyV40UIYyrcA7BiKLzewCRruISFIReWG9v9zfNu21G8PG6FV8OYxjR5%2BRKZHp6REqDHfqJs%2FzuPbJxEEWZSbhLJDUt2%2BCyFNOM1K9meFpgLXqzLDDzUQ1cG%2BbC3lmCVrLJsiYS2zSIEUooCENcf4cJPmiZnd6Uyjso2V1pCJ9fWWAkeGy%2BON%2FULSfshjPifSDOHWx%2BnyLzGzelW9bA6QrdunCeGzUt7QLLhDrvFGP5jml%2BYTKj%2FWICqFIZp9kngQyAR6m6VeK5pWUJ3ENMHieCro%2B%2B0iuDIaDEs3MQiCMwyXNLcTKsZmlVQfwLzE5iVKNJRMoDfXCh15wuPk1HeTo5nd47tZu0NpSkUQB0CnYtUPl9wv09U40WiJeAYFWVysKg%2BxOM0UD3yOxZVvQFZ5hbOFm2sbtTe8UHUDwHE36bMkVSfNIcfjViw2NLiM6%2BOvbMoPRy21nbPMRdZKC2zon0hWhnHQqWL4L2hgZs6HP78MwX6TqIebU3otxSDRaM%2BuRMFxYkay5X0yQevPiU0dIlJ0SJqmubjECPNbSff47SdzbQoC4iRsQDl00H77%2Ffaa%2FIky%2BNuUR8v31YZC4g2d1gDLYaHvN4Yve6xTwYEG4xI5Eh5OqMcYojilI20eODaPQRbGJ3aMPOtuL8GOqUBnJ7UxvfdQ3ykCCvfZd5HofQhEu2%2F04pL21MRXass4S3qPrQZgCUxLteVxuxmc6nxfqvQ0Dn4ZelQZepJ1QwMzd97kNHiCnJKzyZuLHcvfebCIXJNke9S3TGQB6SXADgueG4BhLDm5oMpIALsZhSk4AcjfyD4yvPuyO4idpNZvS%2FsFTX9dLJ4i%2BseZ333SL97dvsQSkHyCld4%2Fim%2FrY08N9igLgyo&X-Amz-Signature=5b2918e7ea65e5d5883fcf25650a022f09223cf90b2739cc63c24be9c2653b87&X-Amz-SignedHeaders=host&x-id=GetObject)

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
