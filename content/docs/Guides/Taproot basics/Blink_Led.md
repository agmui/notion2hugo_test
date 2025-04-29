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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GUYX5J%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZhIs4lOcjqCXtZh9roSbxoyAqVLap0G%2Bugtf3DyX%2BaAiEAw4bEc4y91fUdXvqnWowT9Yr6I0MLXmnI2O7TmCjKc8cqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV9yCeiYq5ahvuFeSrcAyOVR0Jh%2Fir1TLEqGWsvQv0agA3Bt2DVatYyOFSWKU5gzoJTIxLjKpwHSSYBnQ5yVjddtMruihe9Q77tWqEV0WKiLwsuaWg4xEHer3jbhRurav%2Fy%2BEfqtjtXu8Y1CSdOSwOR4R26XWD5Y%2BbLQlYC7eA9cyC9liPuIIOwDjUQPoRs7Sn7RJLTokTVxLa11wpjhBtqe5QWgJmWwRA%2BAvcaGqKd4lzpTgnQ8%2FKlzubgc0KclJ0RSXOPyYqG%2FwNtClW76gfywMY9qjnFcIlOHnMw42c3emrPiNqfOGp7qI%2FG2y2BPGDrYgdlAFVAsiBDKSu5bnR6%2FD7Oqv%2FI27N8xVmoRtvZ0cnjeO8DzGUR9598u%2F684N7ssOM0C0ZwPJGCQifJ4t8nnx9GQeTIJqKtf8RccamWSqHb%2FHxBl36wx0GFVygw5Uhvu0F6nhJvqioYx%2FFiCjRgmFGjXykkztoyArC3SkgGohFH1uD3YrDMMde44fTnRLsXiMD3OuwUG16GZq02%2F64PvtNe%2F6UC%2Bc69Oh686QD2bSPDO4PYp1sa1PfTsxkYTgkyO0XdepllDumtyUT7MLzTG568X%2BqvydjuV3ypL9pFdN2gH2qr8zjLW9zwYgQEKk9DiwiS%2BHQIo6XLML%2FRwcAGOqUBwn7QLxEYKBuH2sKUAVqelNJscBpNwNJknDdgoqeuPlKkWIC7k1xNCWiFIpGJaW9R%2Bkw0qbe3pm7YhupjtyUCFyA2hPEksNP1hGDzo%2BqBcK8JGi6tDfjNmhXiLyKfkcADUossc2KY2CSbqJ5OmC7mxK6XOx4BE2XOiE1wO5PZkl3X8ANwFEHa1SNLddxhu4QNek09YVrVj%2FOi3DWZdRIo%2BQdqo%2Bzu&X-Amz-Signature=8c895d229b0dd71a7a6ca0575708015d4f6a175864079c0574a53fd6a83152ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNJCX5K%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BXAYqwuBpimGtbqOwOHrwmpk5kCYY3TGkispEUvLM0wIhANhCQwGTEQ8zMJn50efYKbhQm2k2MOHto7MPMZxPmF1UKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOJRmfpImlbIRsXyQq3AOZuI%2BwjdwI5WyFtmeS%2B8FW3sbpLfJOfyg2bf%2FVC0H6dvULd76sHFqAA9IXdtzheHFTVXVHvkoQt0V4%2FI%2BDIs9hbhnlcPlilyCzYR5v3wuu%2B5jjwTMCTL%2Bh5fbCWzmkhV5nEKka%2FjwUxZV5z%2BLVAmdEAAEUuuNsEnu3MKW7UWKXKno70TYxc7UDCbniahVwUzKACMltqdeMEJYIWKqMa4Nfzpb%2FavMuBsl5OcWDjNNjlyV6jQaRE1n5UEvyDavek6AFAsE%2FFmvz4bZfMkuLEMuTOQRVD26f1ZV41v2GIDRBRrwWxmEmFApt8SURlAOObxi0cFFcMHB8Fv1TU29edNOGY%2BUA9KLD7uQw8RZGRCiW8N8og%2FZkBolSDXkf8jPn42ozlUnOG1WjPzWqg9o5P5WEyt6%2B1cq1zqgx5VqUrPt8YOhPeNuK0%2F8YfU3Huob0u54HX5JZ8Fde6Hf%2FjtXNOBDNBWb4KumE2HSb9G3rjgb96bK3vWyQmToC%2Bl%2FxkEGBNqGT%2Fgx%2Bg8r28k8AtwLbD53Z5EpFVxWsWfTMjvG0XW6cVbGr68FuQcVE5bEHH6TOvux3L8bjsB2AMTqViYwIPJO2FZuNwR6eT%2BRBpBFXQ%2FBkH2bgEIkm9a1jaxS0STDX0cHABjqkAVoCEiePw2xjcUwWd5zh7f%2B8PJ2YbYij0acIxU%2BAgMey%2Fhqd0VGQPzWJVqC58D%2B3xM%2BulcmPvgVxCG8I6ZV1XBN7%2FmL%2FZ%2F8idxEGuDmGjDQoNeG7KrswKXFqxE3sJlouZ4bj7I3nKolp0JYqw79y4LodWraC87cLuvlzMT1a4cutzZd13MiZbMg3SMvXKkdqLENv%2BMDn5XxBT9ubQtRnjXH8kE4h&X-Amz-Signature=bf60515bd0f3111ee47d34e080888a7da3a72fef26c27502c41c82f3d9ee0f67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
