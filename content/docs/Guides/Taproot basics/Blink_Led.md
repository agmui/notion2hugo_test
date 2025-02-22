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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IR6XEB7%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlDsFP2hXa%2FiMbmOV9t%2FSCgSvzycBYvv1uZBdoLaw1aQIgXeXfTDk0Xj1Lc7F3u6KciQf8pQQIG1Drl7ar2mMGOIwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISwBmuzZLTOF8KFuircAzR4FGyh0zAYIgxUJ8LtTplYTwzjDTr54HurNlNcsGgq6V8%2B4VIBT0lzp7KT0e%2BFmJxlch%2FL4rsOrdhH2XnnY5CcGHGaAi1xzWvi3xLbDNNDHPGoi%2FBYb97GQhtV3uhmYImo0DSLnEkouCGV6cTC4OJau7g7SHi%2Bej9X9ONOnnF0rOICRKFlNdWHNjTjhHWM4YazVc0tmYL5AbCUzmj%2FNT9gYY1O%2FR%2BYQVZs9fxnlfzvWhknPN8dFLOOtvs8amSNMbHKvb851viHeEFwMEfgPHJjpAH6LOGUTJ697e4PLHGlDvAAzLQzwFUZTiVJ7F6cZ3IhqF7zukZKC1nbmuB9s2GypvPurT%2B0saaIZm2ZjN5BPPR9CJRjgRU19MLpFKUYoXxu8FmOxGemL8lfkA5otg3g%2Be9TEblcFh6VSb8e8dYVLhPskFkpjFay4mIY8crZw9C%2B%2BU8R%2BgEotVN0DZeV%2B8HeS9z8b90c7MUjvM58%2Bp28B0wWdEvZr0xoPCwDuI%2BrlbmVW%2F%2FZEw%2BQTuPQl%2BYE1jtWMeGgaQ0R1LlZmXFhMx%2FM5v7zY1%2F5YcmWKJsCQwuMEymLa8SO2mkixD9ZtN6P6Oes0oUZnCZwmsPb4bIpxReuRF7qYx7otKyUZy2xMPrH5b0GOqUBYh42o2m3YsrxUqQ7xb0W1yH3wZfWo%2BsnNnMl2%2FykW4Nn1LOskz0xpW6voPyXo99L%2BNqBcs%2Ff95oXgjvlogQnrCY04Vwojtt%2BVTTxNMDTh%2FEJUT46Je0BLplhzpgApfNT%2BJcMAdnlxMxHV1Nlg%2BYgzGuav3qWOL7T5kKngz4bIaOsYU6x9yFTm6oVhzX1OwQf3dYJMMC7h8tm0EXQwy4bLLhRMl%2B8&X-Amz-Signature=791a6bd0a5e1e096537db48705ce897bbf6066721ad3b7161a7599c4f8b2da70&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EOXAM7K%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T090656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq4PDmYJZ6wHzeH2iiv4BVw2q1OeU16zUwL7HeDKGoWQIhANM3366iTUScE84%2FY0zwCROUW%2F21XCqTwQ0mR4t1zFmaKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHYtxcAW6q3wo85zIq3AO0kl%2B7nB%2BCE8949bu8RjgA3Zcp8NQUptJspUCmzVcZZFyWQs6LEPgoztqn45jsL0rLRqeX2ZZoWnZMxq9svF28f7DFhtz%2BwXOcEbJP03%2Fxd8vWZPb8HaDyjUt5CCIm%2BRRyQCxU5%2BRjnIO89ntiHrH6VIug5e5W1BhXgCG3b2lk5ExZ65co8K75B55ZtKr9LQOpRbeAcRIihPh2%2BTlL1Ner3vg6Avn%2Bo1DAlRJ%2BZL3EaPDMjqJ%2BZrx9B4%2BHDFHeIq24%2BF4snvFL5YWncffQKseVrm0NGKTmHHm%2BKCTuIlzXbMVg9oF86vEEi%2FXnhuSmsFQHgtpfl%2BHCYHUN0MMN4Fsq31jdNtPuTQBbrP%2FioB2krip5ItE2ZKbeiKil7EvprrPVBvMbAMYqZwRxWxRdqY9xfPjlMNLxx8rPIjX%2FMeQs09WshdVXHeeC7SzHZlPBKb%2FklMLP2DGUyw04vGOrTvf8mH%2FcAAnIMOQ0GEa9VisIZcgeQQ8YrsaS2JYAF8e2oR7MDzvVn97eJDTPsXDTY8LRWdWcnjg8P%2FMeOcSVsdMkGiOtidUlctrKdfMkMmU0fRRYRKDjMNP7NsJGf4pre7ZsIYwS2q3LbBLgxM7FEvn%2FCIBYSIC0SNWJYgto9jCtyOW9BjqkARQ5JoreWUosN392CbTU98TgCq2k6bVsPVPZ099C%2BW5dlylkgKdnG4E%2BtxHWqNtk06WJzpDWOF6LVDa8euyt21AWYgNd2SUsLGqxlbtsPjk5Ae7LkMDNJZPU5zhJ2%2B2bFY%2Bu%2BT1Vsm63wK8BMpcAqH%2BZT%2Bvdt3TuCiB4PUIC31szAi5trGslSBo9JMUGPwviuOvWTGBDqD5okrf2Z82By0YdmzgV&X-Amz-Signature=31689ef4d6926e11d6858b2d9c76b2422968058bf6afa09f2d201fe750410e61&X-Amz-SignedHeaders=host&x-id=GetObject)

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
