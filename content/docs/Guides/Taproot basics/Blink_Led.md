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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AWC4CFE%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQD%2FLhFpwHkj4ykHG4sHnEuFUQZ2IVnOCM4dpfyGLniRmAIgYM6pq7o5C58PWJjznDfdeC3GC5GdR2Wx4qYaQFcR2Hoq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDG3aHFt6L8GwBy%2FedSrcA421JL3hVX4xQOWOHbh3VU90yEqU2O2iHIACmT7mxiY6bd8jiioimDjmEIptBtVM%2BC4Z19slpDToHBiQ4A027e8vRKvAtp7XJjbO0Y60zg4A2Ai7F%2FwV%2FkgX6tUtn4nEltsYa2ccRXAOlQPZqK3GxIQd1ca3hR6JZSCyhC%2FaVYSAmXFKBwsfxx9Fra7tHtqihrXXTEoTR%2BRjzZjVKP0V%2FS%2BmhGx4tJARwHuPtr%2BsguypRWN3h7QasYuACd%2BswlijmScs65FwO1JDAbuahJaLJWI3qa13vDbXNPiuCYBuR3bAokLjBkKqISkN%2Fu282LeYkeJCwqdCjbWo4Dn0%2FNM3nRVQN2ZNka%2FN5ne9io%2BsRBg8DjWkyhsYK6P6ACEjC4cIakFR1LXsPZBu3YqgIRSwQKwlDPKbrCCOPr%2BM8G67tuoFBNYtifOOMm1ddetWmjz%2Fco4GAByCoRUCydn8ajfL%2F2hdNMXRmTlO8R2LGXzr5xQyYRuwYdEeyv7pgtUwemSTlMPrmXhe8jKXMYQEnU0v3bWscaGTAQievsTj%2B%2BYZs06Acg34%2FS267zY%2BCBvx0%2BTfO2l%2BtsCEWGciMzavQkhxBd9inm%2FGLE8MKD81TujQ1Sk5teLbrSbyJyCKQWNoMPTp4MAGOqUBV1L5ksFdwkWFAKLV213WL1VvxNqX2KDA0h3IC4YP%2B%2BxUU%2FlBxn6WO1eYzv7g9xZF9F9m%2F6jokbOhbpUAjDCcY5SGIXaSKEru1AF0aHCHtyCUOxNqAFr9m%2BRO%2BSUfXGKGg9Pz%2FU%2BwoLATwuKAmdRT4uKxQHtYO01ASLqSVrnKM6FhKICve8hm8e05Q59FDP3Bnh%2FWtClhg%2FNUK3yEkKEsLzrhUo8s&X-Amz-Signature=ce7f973e375ebb3cf36fe7727884942fcfeaba8d8fb4a4fdaa696c7060f6abc2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEEZNTPW%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC0gluQ7Yv1aenYaXcXLb%2Bjc7iBO4KP7NrHe7NdTNww5wIgJWlg3YtVQ2MGOp3r4b9FTpCAglFRSRSCB0%2B6rD1r6LAq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEDFo9oFH%2FvL%2BB3M3SrcA77Wstf9%2BbDH4dU8j%2FZlzGTkE17Kz5nPzmRDU96OThTNMnav06thStt1HAZX8l%2BD6OmiaZgz2eBlmHpwIKUsoE9F5eVzeGcUGhu72d%2Ft%2F6JWHunGhc6edQJo9jM3UH2aPQ2wMJneGLU%2FmvM3PUx%2FKToyw0QUlc9CzIpILeI6VgOj275QOIyovQQUoDTjUJDCR16k4EsfVqXq8KKbZuU9q87uvugA6LYJxwLFTwSNUsegV4cJeevnfnXbK0LkZFM2V3mTqXhfWaq4kEdX%2Bjs%2Fm%2B093J2WNzJGNXgIUKpcUB1Z6dlKwr2uBi8wPySuEU7%2BWc6ty6jGB8fGheX%2BeYQSe0FKvzJsO%2B%2F0vr7kblDyjOuZKrf0Da7R%2BAk7V56rivCxSE2CHjkS5yBljPJh0NHeB%2FKT8z4RqvV8SF31ftqkCLqz4uztZllgW9CPVlZ9CKEPI0uWZ%2BOwKMPMzlimTbmU9wM6TdNhIvroQq58WaNgaDGZd3Dk6PGRbla9Bbl8jratP9N%2F%2FCcEXhGv%2BryKXLdv5Zz4fnepwE8kdipuGB4wguQ5dn5PnndOfDZgIw9v7da7sUCh9MxCrw90xhuSEID6Jyxy3pi58iD7AHoIDnZzwqIOFD1SbEqZPaZc0u0YMOLp4MAGOqUBfD5m5q84YQ31tssxt59Ehogh6opddOSr9NbmJdjVZCPGsnJNTp1AtXE2cXlxeEmDaYZgn3thpOIe0hS2PzkGzTwcJ%2FtdWCI5su4WuL8gd8uNMbtUSxOH3gCW6fkN7XrVMvIsndkIDENRy1MT1yOqNpzhmKqD2Q4qGVgeC%2BK7GSjVuioKBZVFxprfILGmNo0pOUjj%2FDuS%2Bw8iTKzQEYMdaj9QURqs&X-Amz-Signature=89ebeb10644b939b40224766b57de6cbba71728b42005de401b63e87af3f4cbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
