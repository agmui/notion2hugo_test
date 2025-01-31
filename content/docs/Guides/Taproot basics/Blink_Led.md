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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NN4GEZO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUKh1qdpdkQXmPJctnDKz1%2BBuBF49dFv9aOBHGrQE1qQIgSgXpNP4eQidGmZbfEhTxTooBJQ9PDKF2%2FTdBGsXlf2EqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNxug5qdeunXwMkUyrcAx%2Bq2VewRocm7TABSlgC4YCCYX7%2B4lPh2sEcMddUQ58B34kT%2F9AnzOUopx4%2BzkWrwJ6mgwcXPsgVaPw2OTW4RPN9O3i3HmDsaSPiQNH1Cgm4JzJMXxr5Cbb338epithm2s4N%2BQqGdiXmbFmmEbScxf5b8trSZV%2F8w4QjRbhDJs%2FWABySkc%2B9QpMIHq%2FkGjwujeOUHeo%2BOVM0jrXlzaU4uW9qgZ0jtoy6ofQ8R1M982PBzJRvSDeldIgkF%2Bx9eqygbQ80dG8kQUThZ7X8dhGR8AxOfBrSLauUs5xZiHcuY%2BRYjQ3%2BsZzVpwEklyYEgLCRjP6iMNM4CT6rGKTVh42rkKqMqLjfParqfPzHA675bryYVHNARihy9N1FKt29IRNx2hbaIipfUqpJAHROt6rvEnFUeDT%2Fy%2F2Og6jNpdV9YdlMCXNQP6JM1HxY8JOltMdViCVEgOGPeut%2Fr7I0TjZ8%2BCdgvxFJZhKol0aRi1xdV1x4qpi3b2eAg7o9aXxEcOdLfSBek7WU%2BHAQnZHq3HB628z5uduq9ewmnQX3Jsb%2B%2BhhS9ZkAoW%2BNJIfMZIV2RlOJV7LWmR4POe0Ty1O4VdcQ4WMdx43lT9YEWPAzCHOmwogH%2F2Bh%2BbMf2niueQD5MNf%2F8bwGOqUBPdWQjVxjA4kOADGO7bEd8o0AcsQbnXxis2VZJd00w23l7lHeSMx5MmFC0tQ1PB6AVlO0q84MIK%2FIQe%2F%2BQSWq5EYgv58GLK2rN%2BHb7iTfPU3MYMm0vAiRoOjTZMYF%2Bf2yh9N04Kz4TDr4mAFR1zKrCgLfpkX%2BuIe2nClTBWBELRyWu%2BD6tkdR2FE452sEtD2fMM7A5XEkCy5LJ0R9OmX%2B8KDrRp3Y&X-Amz-Signature=ca2f93f03b9aa181f58c4057f6d31d927463b73dd6457bdf9fb29087901c2263&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZY4ZZYL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGUOvi1VJdmechnURyRX8gyXiGwr%2Fh5wm%2BRBNYVUr19LAiByrCxe0IsePGQsnBvnogNRzcPKynByy4JaIiXwCLPjsSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvk9NYnkDUPPJiWz3KtwDjjT2JQRtjinqW5U5SS5FNgWZExDP2WEd2Lu%2Br%2B3RyHhMWVfFl%2FrmQPMd8MN1nHvC3CvRl35%2FYSWFHnuMeW1oMmGzrMTIrI4uLMpPA1bSerOx8qhh26YJhLYwf5nn9UTnSJwI7w5Rg4rc4iO3qCqmb9w7fAtWqtbhBQ20IlLULfKRtsOpqIXx%2BYpKRyNrH0S7MR9Kdfilr4Tgn13Ic2VNsFHOvJZ%2FPL%2FV%2F1AUpKOQxI5BGxh1ih47vj24AtkatiaPti0yWa76gL8Ubs13SeoWGRLkYmsMtsrD7qmZGaLnDM2k5QG6EPpe0XIrAKYFukQv5kDF%2B4At1gO1vkhUVikNW5yCM507%2FXVBgwa3VxFiACX1e2vt8h%2BQrYOPpGzI6G0kWBuQws4bz1o7gmWg7KVuG1qlvpzFVWKDILPJHBiJb6y8sIscua7btS8kSleZ1dA6e8gQTYponTitnXA1YyeplFYIiH088gBZgbVgbl9PHPOQe7AOGIm7AqdOaklEXXzGiAwAOAksn1N%2FaG4iYumxuDzth5lPiKIHx%2F5OrJ12%2F0%2FuYfvAhdgiRUwgUF4vyPhPlaOdZvLKL6VJXkwewRG5VsW2w7SzqLCWrA2ctA2DwPFoRPHZLZNOr2g5bicw4v7xvAY6pgG0o7Bv34yleMbJlofDPEv9MAJh%2B%2FyYqutMwv%2FoVa1AvL17syyxYWiyTwJWS5H1GIH88xzjxcEpCXzMuyKUiK0lIvOku6W3Jk%2F6KIDKnvhBB%2BBXBnhQlnQ7BgV6yHC%2B27qzG253Gq27Nf0fvLdxibDxVgqilIMSuH9KbHmC2sny8AD%2FhkLUy2QgJcRp7knXM0KVu6zqeMrvDq3CGOhqH8qDHHZ%2FgRSb&X-Amz-Signature=a7c6153588b71596e269f683a215e41825a6dc220ec0fc548e7d120ebe37c9f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
