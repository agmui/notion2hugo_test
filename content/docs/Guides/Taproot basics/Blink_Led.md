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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHLEETC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2JOl96dE5QrB0CcNsDIzTKre%2BAFV7k%2F62o9QFjw3CuAIgJpHv%2FERb2G3JoTq9SNbL%2FzQBWv4kPQkbl7xR3Q2PUY4qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFO4UPqPvNG3GjFvESrcAzms9HKPV4UGJyhF%2Fw7vRLiXXiyGH%2BFil0Dj2QnyoCAQC4dsPn%2BQjb%2BMo1EFIw7VfhIXfhqXd%2Fp2%2B9HCqnL8UtpRIdCNQ6T99IOo7LUl7Zd%2FqV22kdnw%2Bjs%2FGtFWPFax2aaCcQsJ98bapvxq087qZieuqHD8n7cGkqv1V3Y0zspxOIQUjRJldr7OinNYQFiqMkOrPKfPXwS3dsidujHTo2MJV0WO4v9D7gYMC3%2BnEpiMletgtqNcm9u%2BB5CSscn1yKTP53YtfbhcDTF%2F6RgOqYcFFmj2mVntGfoThFJrzxZbFJGhLqipiD57GqV8Y9EvYNiwMr7AmImDEXE7kIFFY0emdHUN4VCP5K8ga219xuyFAVPMWmlYCBsfXLqM8ia0jDtzywo5WOslj90LDrx3jjBl%2BvK2FO8pYwm4VdjdQwjOtKVjheZLn9ugYoZkSx2zCwhjZfvSOzK8VS1AHttBt7GmSu%2FIkuIpo2s%2BHyasf46p1guwNBUcGRd6bym7qUdsvVm8eqp03tVBkVYQkKbAUV0Xepym%2Fd9NpzXbbH%2ByGcxYYXm64gVbxeIdy8mq1fGyqVvXB1jGXBRmLQ68x%2FLXiVl6NP7s4JnpiSQzwjjw5XQdK1MPvE5hWT3etwPJMPCYusMGOqUBo7N0GDPaiwyaQYXvdIRgVWdTj5jIeYhGfM4zCzXnTYhtAHpmIF0hdKTWVd37MFlA06DzDXmWIObT7xAxYS2xNsfhh4PP8Dkzv8QHGZDxGbzMdYIwj2ZjYqOAMtqwalQk9fcaIVAgu9nfRsFZ05myCHVAEyDgk5viVdkb%2Fb0lpqsRJsJPn7wLCCtSBgQLWWLwjoT66VN5okqKlscz6v2LZQTwlWZ6&X-Amz-Signature=57d16eaf42f7ece41931cb6dd9d8b659dfda908c78eba8297317e933a4110bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJXWU5SE%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkPiU2rBnP7byEsEdWXYq6GYFfAskHO2xeQSSGbS3JOQIgOkroSy3WDKGQ6rZLMZxNmXUfSogm8V7Rd4WqObqm91QqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAqDQb8zQcFZLHgbSrcA15du1jrgBSNQm1zKjsx%2BDSHLIOpj0mbxV%2FNNlBf%2Bz3d2vZ7rnRsSnSwtVyq98icbFA36FA8JJ3LqUQ7iAR8nuFS9Zwe9E6IN7WDuloqbziGkiMnGe3ZCTvpc3heFj39hEpSbTrjZkHsk1CcmflNYS6T%2B4hGiRg65fKHTil9Rb3VvrYTLO5x1yZ%2FSd6ndCHjGM6LqkkI7mA77kPbdudWstqcFRdLE%2FIX33yZAylytCXHmbbBpK%2BqQfmmHX6tSoEvY12xncBtaWWuiVBZ2L%2B74AeDAZyZTmQc5nAKuc3V1TXbtPxKQGDkyc2Xd42hlPZ0%2FMl8LOpppu3z%2BvZoDJ54feNAszzQVBF49hrySL4wpsqA8pwsjGVupsUfewzPE0YOX4PIMvVEA0osUgbjDdPsI1rC%2B71GUHgfi8OgCV8EWkWO4eZBD7o9bZcbuD2%2BjdqKpHdK8nZR2Pz0Y3fzdSZ6jpHR1qSwnNPHQa4hhNmLPZ6%2F6gLzDNHlHMUvtsyV1NISQEK3bZ7j1ovSDOFmVSV4XPsiwQTW6r2r8AAwTlXxcWviT8eVfEUGe1V1y8y3wHyMofgrfMj6fhJhU0CfqeA4p8Bbnfzr0N%2Bvoqz3RUZR9l%2FoKyzuutW1Ff9CgTkBMPCYusMGOqUB5dD27anoc4pFLLRyyHxEEpTDNPvcoF8GVNsSZCtzV%2FKOgD04OIU6yFrzMnRzxutsrqwo6UNoTAn435gusqZhBifl2uI%2FvclYuMpcMN2V%2Fs1zmo9P%2BIDunwdMGCGb4nzSQWixV%2BRmcPefeLE3Um%2FiA6b1HuqDDnzffNQDxkhZLTEgUcqFt36XMp%2FfJqrW2NMCkHhh1%2BCOxGLBQ1khhStbm1hTQpOQ&X-Amz-Signature=52f5b732709a96ee9a252b20fffb4be0ff41884cdd7896e4fcda3cb1cf2671d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
