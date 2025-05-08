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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCWSKZE%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqdxRSnV4AYc3q8VRTcFhx%2BNFE1Gz49wMUScB9wGqLZAiAfrcOvTDFZaum7Iroxez%2Bk%2BZ2NMHe7aBjlyRHFASrdJir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMaFFlysQJd7U26%2B6oKtwDC7b0ezH0GxybmUVnz81RgFYxiYkT2FemIjj932MGtJytDZYSNd651OOOdDzRs3XYaevXfdGy1fyXjNJ2uc6m8oMjRwjynwn622HWeFrQBHpA%2BcG60d4LI4u6CdoaGfHQSc%2FQehRvyMhPomYtJfUTMVIvylU7Mvdrf2bwQQfwkRDkvjaVPC%2FjByddVgplYMFa8qw5D%2Bcwj0B1biMM4LhIUB3LLKuUBeNKnXDds17T7irdyvCMfdiWOllfbjbKTD9s8vQY23NQvJnRKsY809vXfflLx7OYyG2uxR9Q6GkPl37%2B%2FFW3zpE7sQYE1he1szQhZNX3l6rBj8LaRZeNX9VmzHoCAF5DfTQZIxzblExlGREDUdH51l42%2F7fuszsfPC%2BLd3YN87fxe95xfZSM9ai3vXkuEmRmohxStjqh856QSDphVYHCNSOhN9c4pEkM77H87nGtulxAEaHVh13KHSF6WDBzlrIAKsndbRrU6g%2Frmz6oRVsIa5fQvqAOwmFuRv1oBzfgpYCvirmMx%2FRlUI0VlmhriU6DwSHM8eYDo%2BiQJA1kFOJKNReSreVTYcb%2BSKeaVbK7wngyX2mh5YPkg6M%2FCM%2FOsbaa3RLLKh3uzdQGAKz5ZG2RSNs0elPU48Iwmsr0wAY6pgHGo7iyDX2Tlfieqp42rY0DWFN6UDLXlAAo1oXTavHFfjFkxfV6yv4w8H5TGFlD3QXoiYbf6n7aO2isob6VQl5jhG9vlHylrzpgH30WEKIy3xs%2Bs2lwKuMdNSVH5Prl%2BLvWKli8MN6os0fSqLHw3R%2BuCeWUTlo5iFGPxfzbOXt10xO5xTHlCrcF72etZtQ0zbNWMMo7s%2ByeyBF7Do8tYDLpXQLhHpPn&X-Amz-Signature=c71579a3a73243df8dea374c21ef8664a5cbb6bba7fc7f0e49fed0bac2f7a8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSVYPN3A%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3E9%2BiLpGTkYJGHnl%2FXwpc9rosdSiQcwwu8DqWAt6r4AiAzRQW6jqUbk8G7pKnlvquaCnkk5xYT8r4GtpybH5ZQmyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMtUgsr5YyptaTnCf%2FKtwDIMX%2Fg7OXW0w%2Fp1k1YzjAiFusf4g%2BrKwG7%2FC692d2ey2CiPl%2BBCvQ9cZfGxKdG%2Fi5wMtVnkxCyu8mRqhpPxsR6D43yqlv3ZohzaqIprcyBnSDr8Il5c4V6Tk1ui5VQIF47YbrCDD63nBsjUCZ47%2BdWWlHDIFGR%2Bw%2FPPoJB6EjycjTNoyeawy2bzCRXktZGaBjwdjh0PsgLpKVk%2BWF7aHxWtO6ptX6fP7VM%2FmEt0bQVqzRofN5MkZZP2NI6YBbwhji1Caocb1hno3%2FZAuufwVP%2FDEKTQGtoMAPcY319RUM%2FJPcEKuNrMJEhKT9ORX2fwPOcYHMn71n78f3AyMJvJTaJuOyyCUwz6NFX7LV5KRJJD2GlRxBRPUIvXuITZ8o0dSFE%2B0OqbuC1DSDb2PB4WIW1lxE3PEru8uKP6v%2BEfQd%2BTsdb8qnJz7nOJc9DBtZzKPkBSpya5lU9jkM8339qNaDDWsn%2BZsBWLA%2FgvEXTDva5caczZC7ExY93RsENrGUps7%2BChTgvsU5PVG1JvAM6Oqpu0c73nbgYx%2FIDeAEnrlFNB%2BZAzVA6QxXCUen0W0IwN1vDDnCPa0wQnRzTHevkUN6vbGNyYCXx%2FZsBeWOcZyHRn8YrKum8oOGvBlfUN0w%2BMn0wAY6pgHR94XTYGED%2F8d7yfwXtOh%2FopgAFS3nBdDj1b6iskvCOGQVbk4xIFPc4o%2BZbYKu0VXVJiENM6oklf2%2BqCVPDfdGqGZUtnNnAiUly70PXb5rbjYiRVQjkjUk69AFvtA38l%2BXH4tPvOsRguTSmEZfb%2Fay6byyLDznt%2F2OwhP%2FXMXtIfRLyqn2%2Fzf%2F6w%2BdbEd6K86CWgOVGr18581si1Qdf3K%2BE2Scc25I&X-Amz-Signature=cbae323c212bf86331fa63577979d3ae094ebf6a4b6d7ea74e0cf13a56c63c3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
