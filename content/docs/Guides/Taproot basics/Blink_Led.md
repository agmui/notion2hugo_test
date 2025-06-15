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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLE6QRTY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIHlCmXnrhorw%2Fo9mxOST4U9YUAHOv22fi7Hc%2B3F0JrleAiBC6VTNpS2bJcPXe59aopn6b%2FtNxPGt5A9nJsMB6fabxSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMMy0E9aNkhbCdkmxdKtwDZQcHbBOCy%2ByktH0jriZoiAX%2BcfmlvF4quTgCfnwnGXFmWTXvLXvdZHbjc8VqDkoMQwxr22LkJ7OQpl0siQEEYQMsDHuzE5DwqcWfVd54x9N%2B0pbhT7j5ZQICpRYxMw3UJPq06UImFWQ9lXHPw9u5YeBCoKyo7myBmWJt7JnmkyDs%2B8urTg%2BcO7DpMCRcpAh1M9Lvl%2FLXqPDfG3V7qciAQVnTPcL1qmzXcFgISB6CQHff6Ee4PLpk%2FHYFSHzkp2A4ti3WsmPOYyvsr2fcdsDvX0YW0G4ADXeV1PPfY6z45676TisrRfotGw6f%2BskretY%2BQkULIp%2BGm2uDUd0v578NWJx%2FIUPDSz0c6UVYCVTzxHCWJXCskRohWvpx%2FKfoYp1rI0ZtZWXpVFVIFXzXWXhQUulgN1ERGyyysvEhZaXA4yErVKL5A1kFM1nHgnSDjL3yX1F5A8kxmfFlUBDFun58zn%2BYU2QYU73ezWR5%2FZ31OmNVfLf6YTzkhLyOvpjTJkAg0ZZ0ecnmJaBKsG72vZWN1ACWNhrxKW3GF5tEoQ5nJk%2BOfsnDK2HEq5vEPeAhdqZSCBfhblzcOy%2B6%2FTzpjE9e8UijAqVxXqlb8R62zPM%2FrW6NW5D9HkIkxpLcj8Mwvqi7wgY6pgEe5Po8g84Ap4CD52Bo2YQG7PzPdpOlMpyoCg%2Fg1059dS4S9yBsh%2Br7BOyHnGCxEd6v4gq2epGlazBMYpvuXIPQxDjXcLADpPyxb90C9q5zi815ZMTzJatvSEPJMwD9YabniWjJPHvAsQ6x%2FwSXzLNdk2wiYBBoMLXMoh8PXli4ehTlyzfqVk5u%2FjkHb2kqXpi6XpHKprVCYLWxLhv2PS2UGfMyVC%2Bz&X-Amz-Signature=6c2fd14b05c177cd093448d6d48158e138a358b8803648c7dd9988c5a52e9d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWHPZ47%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDSSIPY%2B6H4W41f8rbbVuCxmT75EpO7dH7ESL6YeDz7EAiBGwXNNI54GWHJW2ez6hcfmDytYAGczmK9uspb0XdRA%2FCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMEr3gpCWJK27OjD7KKtwDdHd2YY7deKiK6LYW7pePQ3tUVZZYDVE2GgsX5gsc3ETVvUxkUzcrVMWQ7PMIMax2N0RYZBhacpG%2BkYfjliJB7Wub41MGFV0bXqk2l2LNWJreiDqqBgvKPQ3PcFj7Er7BROkaW6UHxDPqmZaf%2FgLm4ZHe1qjbqkZh%2BwST5PFpLmg%2BzX4lN0cTf%2BwRu3o7pDEa544Jd6dj9boM9CvzHjdzu3C0fdZdAon%2BLAvv6SfKUOQZ2sT%2FpXX9HkodDky%2Bsrz8%2FycJfaEqyIs8eRxtPj9NQvcLqGMSyKHW3ZLzHHXJUHhL638LdWv7VDWClbC19JnLD6guvYORsYFnNnPmC0yCcGVx%2Fx80orQGSaovf%2BZgAszOpXIgdyh71eNrn7ncVA0phr7VxBobiOhhveHpjuSjWQsqONdwS42hHqpVK%2FXzd82IKvZcpFN39AMXe4n%2BfSOEWM8jO8qgk0AZZUH7oeh1U0fnp9zMDorwiGwccnfoZnF49Y0z2M9V2IMJt50O%2BPygus1O0tDkMzFFZ7db93LRP1nZCrTPVgAf80yFUrFCQPBFW4OpqZWFBjnxS5UxxykBf9xl93rNAxMebwo9Weh67CWCJAF9n75EcYg5Z8Y20r8mfk%2FuvhKyNu4tck0wqqW7wgY6pgELqWjn%2BYv46mRWIs%2Fi0jSreV3rzS2NzhQaGTKhoR7C%2B24gciLwHd1U3NeVyhcLKSU7egNwIG4HelwnDyWlSjVc%2BK018NM2CVDTdg4DQ6cEytn7JNpzrHA7BN%2FrK7wHm%2FbqgCJ0TZgFh5TR5%2BSwusIlM067c2GxdKV42%2F3LUOHD5%2FHkSwZKsaKCjEeY1cU8gi%2BwVtdDCwUKacV1feN3VhbKTcCD534u&X-Amz-Signature=2ae14c0f91c0e63436864aa9fcf789c4cf13fe1133354d6a580164b9ee344948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
