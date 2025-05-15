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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OKQKNV4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEfaUTVEJc1gu6f%2FJEobPMMe59nfGNe1suPWzojmL9lBAiBj%2BFQq7CdJXtvheQa8FoIsU%2BDh9ix5ml7KeBrz89ioAir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMskxBDHEwAbMfBk6VKtwDOvkISnCp7GS6RDicT0%2Bt3Qn8IyiU0aHridURmS7TO7A8IeOTh1g7oRKq4qxWo14g1ytDCSy1rpOe%2FM%2BF0XKomf9Owz1H54i2Ww0EDO3LO615pL%2FdES4NnYXJrbIC8YlTm49ZUxOsFR%2F%2BZz5KG1u17GvCKiSvERRuKDnZ3NiEN7VosIuHy7JYubW1Sx4NR3hJsSz7eqYy3WZAkH0f%2BkrLb88JIg7Pc0S5S4UgqA7llomO3ds%2FUtathXg%2FAO%2B%2BXHCtb0up%2BliJyPBJeJ5nHFh%2BGWyTXshcnTe3OwPLyFnpCn9ymO5SubfTcWnq8muLf4u0oFmfFAVPE2xyIkyImgIHlstfjDp85aNB%2BwQKyg1LnaoL%2BdLHzUD5pn9wn61OJGt0C7%2FakbFfQbYPPeWmfJx9pilcubNkGjZLGyr5ZREqGg8YEikLPm6BHCLVMNLCQEknuSCf%2Bj8WG9FBTvcOsxBvgDhP2mvYlwCPcXjwC0KMjaZYbaCaVbfKQElZktUjZ1eaC8P%2FlUO9p3lLFqN%2F87ub6F3p3ZmtZCFF%2BXMwCCxtTID0sQKtwCL3Qq%2BitOAvJrkFzc3dssnhUWvpZsoGOzJgNisPwmiDHB6rpcbj2XLehd3rDAIF4bCBbFH%2FTXkwntWXwQY6pgHQgUhgLA3hJiiAG%2B0VPlkf1TFx134WMAJpU3FjBTXIacXrccgYYw9GhgOgLS64U%2FWwBqBhG6MNvZg8uab6FuGF18ZSQMFoIZJXFlNdddFfSkDesT943aBCiZH8lcH%2FVQWn1gc%2BO6WN4cLzEju01Kl9lMmL8GrMxh8m5t0eQhDsXzAOYS9O9ZNwu%2Bf9QZMsj9HMzAmp55JOaO7INXR7tU3fRkjO4E4h&X-Amz-Signature=03926b8a2430aac5400369001d77cd7e8b5b955d63accd1d9ccd73ad15dc792c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6Q5DCA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDtT854R0uB%2BRJzpNh1vdSft%2FqfMhKb1JVd3JdFKBzTlgIga9zSPWVoz5N4xJeo%2BaZwr5WVzJ9qOeeLRbHhRJwntkAq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIjqBMwXTuSvrlsXwyrcA6pnSZFcg%2FatMh4xtTzAyOe049Xyg9i44D2yVa%2BhauDfdYJdEt%2FtI7t%2FEtLPHpSK8PM2h31fLejpljOiP6OU3qOI2o%2FxbSw8hKGVdpi3uOzPYL4l6lltyV6WLvQo5PgASehmMEmuXfOPS5Pt7OHcEsYW3zxHzVQivOpUKWFy2sA3ft4cFZ9MhR5pVLVOc2C6HNR7KwA%2FSNXr8VCmeCqS7uSSJDUw0LGBWlTJIp%2F5dnkJsPMyR%2B%2F0eRsCNkDqNXz8ceSiLoF1EftLn7KrjI1Mv3aiKykUSqzf3sECDWafK5uBFIYy0u0nUcz2Qpk1IXpLvhdrMSTcbYB3tGg4I4bDCiusp%2FZzAIr5G9e7m26I%2BmVcVAgIcRCO2iHOB2zqvQ%2F0N%2FHm8jcnpU12td%2BctVIAnDYlo%2B1YIFsktTs4KFXPTdD%2F%2BMjDASpt7guw5xQ1mcrbwXhwFwE%2Be2Q8UNM12PKNpt%2B9WPXJl3aqnOkWH%2Bk59BjxQM13k0QPsnj%2BYPepxkve5dx3K4tHEpGrilrh5VneRM%2BEre0s%2BY6nOX%2FMOyCzaf9Sp9BIOqi5PO1Vubb%2Bduc0YmZFVp4e3Ym8f9avkAK27g7o%2FjCMvfa0iV7Oqi4jqWQCx5xtvuR%2FhA%2FLDxnpMMnWl8EGOqUBTLXJ7cgx1zUstix545VjwDCCUNJEdtLWFqvzop94etZkOOm0Vb4zovbEPXNm0O9xYNlpCc15Siq8hxCyU3zCuUXLWPcJStWWinqCmieYOeuwUHSOysgmMQg7ClJCNPTu9Jt%2BAGqKczZB%2FNqiuHDfXmKoOlXgl1b3sZcLWnV1kf61bdqhavWpUX9smbnSWmJfJMx%2Bj3zanCkrZg3D0xsHFruIFhb0&X-Amz-Signature=c7f57a10ae7d60df1158c0da80bf51d98ac51ed87ec2ea686d804e30b12872f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
