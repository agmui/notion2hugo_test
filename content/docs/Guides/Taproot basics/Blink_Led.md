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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRDHCLXR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQD1y%2B7J%2BZeJ6NJaxxKrAQh%2BIiWftnL%2B95%2FtXKevbDSugQIgFjwByqgKw9ERJUVdnPsbgfKTLufjXoiPNz2BhS%2B5KkUq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCwBgIoeeVsY5nhb9CrcA3iF5iafqAkFXt6fwI338zkkp7pBOTV3V4cD9RsMLc%2BvVUBvtZg1woivbljuUeYO%2F9EiFvmJIzgEpwiK3tfmHw2cF9OS%2FIGX%2BQ1o0gRUr3AzTvjFaAjcB7KHrXJmdyxG%2Bm6sqWE4eon60hfdPUTpmMhL%2B3W1wDAxGQ%2FxLvT9W33vVmSIxcRn0mkC%2BK7HQe%2FQUgrcWUVekBtcURZzPohMRT5ciVodSv67lrLOWyAoqsz7svARQsKUk3Lhp1dqO24Rz5QhW8ArKMXAeuPPTeAMHNgDmFPgUZVRJBdDpM%2Fs4zA5ee3nHoniXEOI4KRDI9nYIHejVZLAEW88kFXIk9fHpnPaWG%2BIeAMn420KQtPAZrjvbHgPdXf42h7CDsrFVW4Ymb7yeqURFN6Rg0Ho4F%2BtQq7PMZE6ylx%2BS06THgD5RRCaXUM3t865HFgbYKV5UkjsrkOMUGcGJbUljgzPoT76ti%2FN2Y6zVl76M8HGYbHTh8m19CghbxV%2F1GBgZ2UTTOtKZp2mqjq1zufb3wg2cEsrYQEX2DTqaIHDRw2KJ55rnDhqLAb728y8sAczDCl%2B2t92o2LYiw4UsgmPA8%2BUI6CtqOtnG%2BsILSDNhvICBE7tI%2B0XWCeJ8o%2F%2FLtC%2FERppMJi1isQGOqUBwAhiTBy%2BvOgsNApiWcLPDuhBvbpy%2BT3A4Gey4ncDbU%2F4XFXmKzhwv4eZRqq%2B0bkb2%2FtcuO0SFmbsBcAmzyT%2BwvApCRCmGfUFT8eqlgtFfblknw3Cx1B2D1AQ70a1GZmiAdFAYkZd0rcq7jOmYjMzp559n%2B2hNain9ioH8p1A%2F4MXVZ1kkzomhg4jGGvZe5Z4kjlnYwVi0w2qK2r%2FO%2FB6qNxLgWE6&X-Amz-Signature=63caa386bf30f5d5710579ee266928d90e6268155689a7b8a5a2e5d000f5ce99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HWJGUYP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDqvqsns6u9ro3BEn%2BWoL3Hs1n0UojVISaM7qmrPyWlpAiBu%2BxEPUfpPHeHxlIZQCnSHR%2FMF3XSCH5tAbsuCGCSrSyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMlIvLlZuON5UIZOdtKtwDgOb6eqc4caRpKfz5rZDrK6mD1I6OsWrWY3Rt3M9AFu4es2%2B6iw2vUnuH1PrDivo3F%2F0a%2BayumCGt7hL%2BbJi4JYws2Vb2BjH1RdtxnuIIGWnxUDTi2dL0FuWnNUefg6AikCWibWiJzCHJOVwBSSUWOvaoMwYSL5bjdfeWDQEIw%2Brj9JMKCCAa0FJhWLzEP%2B8R2vU3jVukQefve1xJLvI0SNVsjLUGkbyRMh6HYyLe9pJEzfMYEXL%2B4pEwf%2Fyz%2BTSiCHGwIM6xI8tZF7Sq3yqNGJfTUr9maCelczTg5B09PxqghvkfjLBUNiBSxyRJMX5SUT73De0J5nSKzs8J0O5tIgM0v%2FG04pn8wmBALa9rwXJEKJBX1pPZaE2adMkkH9yvKkqocgrtVsWKzbdtBVxLVYzWtjKRmnBEB03J9o1Rv7WphrgB5D0HMkPNNPESu6GIVLollCe0feeuRcIVj2KVK6O%2FbH%2ByNc7TWFuhqqESdCAY47x76uUJ%2FxPTrTX4ONwcWfNLwDKURwLOXcUUDmKvJW5X%2Fi3JZb6QIvuiMJwwtsYbfF92iEq9nlJIpq5YkYGNZ7ekTW8U2JX7B3rFignHrPum%2BURiWE4Mc4eacGeS4T%2BIsWpX1IUde%2BN0%2FwUwu7SKxAY6pgF11xVKygrWerRLa0lC3l8IjxpdLKfBUcY2iQttXWly9K2SjXMUmu%2BfGnPYG9CYzoFs7HHOpcKJwKRSdhFKfVI5ixRRHV41g%2B5%2BtiZpiQW5NtfF6H7UwLfTSJvMsyGZ0swjWuCXr2pC5uYopYdDXvKuesz2BkU9mZMxmmfb1pJdDtbHYimAn6%2FKu%2BlLj53Km4Ej21yuB6hbqrTM7C8WRcT08CiYo1cd&X-Amz-Signature=9b284a9b8987faad9e97177c0961a64644f19b6e084c2e489757b15c8cef8faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
