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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVT5YX3C%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvBBNJL7OoTO6l9PtC9YaoT%2BTxTFfKOyW3pslOemaxvAiEA7YNJ%2Bc2I6PzaWoLFjDlr3KMDshbo8oTtuswE8aUsvPMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDN0HLYigB%2BbWXe1jqSrcAyRbpYV85pACm2jsM8GU9PM4jLIR3yHbu8pxuaCIq7SYFtjXNuQgTt4RKieYqPwmN4xXL61X43zNcq0VhSzvFgJ3C3Vww0ly%2ByeTEYWGumo7q5eVcdVcfh6Ud5OTt79j5DdyVV%2F7CZbf6HgLDCp%2FAbEOIbYM59p520SEdGA2wGtzJC6RPA%2BIJzNUbD4N3qL5004IBJ3E2tM9yuesONdgWnIwLWDV8Xeq0kBrzDG%2F50SagconVpgtiUEGNIeCo8wRXjBpAXEYAdYmLX5HFIsonMJnt%2BKjAYTKaRoxnIjIrbudMHMpVhFewdZW7o1b4A7H3dk7cX2vdrhWptPXQt1%2F1lRzL5kXMVIz3ZLOnEKW5qsWL3ZrKOuqimIYFiQpFCbrUT%2FIARVdYTcn48PKfHt3TEoXvk92iPERHM6FFxveWDg%2BLmC7hzKJQvSG2BNn7JsORa0ngjJy%2BAohlwH3%2FKQKbojDhoUiR5oRNhd1cd1SbDEgdYgQ0qEAngObdtnhKTFZgrm1xPfuoC79swHqh4oV0u9TfuR9Ivk4Sk9PtvDFvhED3ctuk8QPTt%2B7C2Tvpvx6FLAnDU2gwnickhAdlKwp32vMuVk25xzrEiT2tC%2FLShLglETHn8QWHBf%2BKGkLMOrs0r8GOqUBFiAUTKeja%2F%2Fn5emZX145U99A%2BAMzVqSHi3UshoAJB6mMYJbPa1n51bxZFC31AShFlMeRkpoE9L8%2FyyAZ2zm3mJ9%2Fws1h9djTuqB8TwwD1%2FEYU4l2OfRSd72hH2RHu4ZPcSs4kHRHrs%2B%2BTn2zM1FQ2Yh9xkxEdBvbHnGrGNHjWe1BxWYyp%2FEUrmyp9H9EDjpxr2w4L5Ru3n6ihBWXMUyWwKcLv8pH&X-Amz-Signature=8ed46494184d28360376e0b5c6ac4d079804664c332a7a6a5f6963a06131935c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QET6ADEF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJ1cof%2BVHTgmftMMGpQKgh7phDYnq6H4HoEg6eJxU5ZAiB2AJnG40Ogou6w50P9rmX%2FfXWmmGbVs2jeL9ctzxrrBCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMM%2F9FrKCGr6DjgB%2F%2BKtwDKCtnmPT42wR1NmsZHCU%2BovGTnwefoq%2FuPqZP%2FBzKZUs6FUYXWa%2BS93QjwJIa0wTLrvi3HiL7BMzn6JXU%2FGgSs%2FHtSjfQ%2FLa%2FzARosyYfBrYEujYgGvBg20yZ96FIcj9LSTBWEtSgzpMvqpVazq7%2BSqKMfF3w3%2B5uvkraLIx6qcSJJsYOi9v8iod%2BwaNhGHkYzggdFnOXcpW7BUBS69ncmTmSCw13UF3%2B%2Fr1H0yOLaR6m4tv6k0Dj5C%2FO4o%2FNSwRvpfsKk0fyHWIeFfQ2%2BlJInR6RkjqUjOzsVjJNHbJ4iHhJolPs9DdL%2BZLPYL0lsAaYgGcigGTKm%2BtahXwy05B1zSVUfz2kAxG8jardE%2FUmwN8nClbahj5xTe0aXsKSXnUfSQSu%2FaK0IecVCZICUVN1q9l3X%2BObikiKBjaMM2nwphwDdmL2Yquz6TciZALRmam6easzeFpl3Hvay3plRqsijiM2%2FdM%2Bkw0%2Fh0vqYkwqph2MiTo5l%2BtTMCkZqPvigFRy%2Fal4LUgTfJ5t5CezKGYWCUGgrmHb6npVieGTBCQyppRFyBjL%2Bj0z19KICsy2JxpxUQk6Ivsg0Td%2FJA8b59AMD%2FvotQrpyJ5sfuzOH%2BoR80AxWdL8ifgMVJi6CVEwzu3SvwY6pgH8reFOKzbx%2BXmTvAD%2Fbbsu8sQp3LLhsxrPht%2FS5QnUzgBe5fvc2XWzDZKy6BC1fYu9yUE%2B%2Bi6GZX3Athzb3XaCQjjloflPpaaW1oTMVWfqwVxAN7%2Fr30Mm8i3Yf%2B7xD9l06byccAfkvgwO1iQh8pEwVD0bWSKN02glOUr4NFskjDWfzi4dQW285a2MATQkpXZeDIuJoTfpN%2BO86m5WI19aCjkKUzYd&X-Amz-Signature=a900ea9ea5112ee66de2ac839ebd968accf12e46dbb56e1171ca60cb56d6f70c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
