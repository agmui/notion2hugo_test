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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S7XRUJI%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQChnCIYdneIxOZ8MbwxATs0Efikz1lg1V2Wc81%2B7Kxq9wIhAMhpYCrP1aVQQSbIJR8C%2BQ0wZ6hbMy%2FQcgP8DQsuheuCKv8DCHoQABoMNjM3NDIzMTgzODA1IgwhHGdYUZVyQSHbizIq3AOcw23w3atCL9py21IL3%2FpVB%2BoU13pmPYx43qtw7AAInrGRz982E2Lm6E4nOFjQgUMxuUoccfwio9QsQqufTUXWvVb%2F3KCc%2BcUTUuBEEMZFDO%2BX7D04r9JI5wKj%2ByxtPaQEEvl1iHJThbqoJhkRKORYA3RmCHc5r%2FrkgxRLNN99YGoTCepKXRG0Nfhal7qSuIT8Q3kWkAmGIBvQkNHZMiEFVySAVsDlAuaugV6cYvJiZ5TqnbT37kUNJAsu3562CYDpV7761nHkriMkl8Ku3o9KLnjmMdcnvpAJG4BXHr5swRs3XzYsxRxIvldWI61CBtI4oz7EkoxCIPSvCgbeYnLQSh80scM6DA5t25WjquHQpQaxAnNXS9Srh1anz%2FAu6vDjjP4EsOe3jve8F68LJcOfi7pUQby1a%2BjuYb3ZpM4TcF%2B%2B2jYnuePMQtq2FzT03kOLZSpHhEQAqm%2Fsr%2BQwkDCarUXwK3nHq5zAcYGLQ2S%2FK0iWCMvnLT7Be8YZrwZ%2Fwzr5tgjzFRXZeqClH8tI8xl%2BVtmal%2F2kJbF13TudKHvDZ3XrwpBw6SpQf0PG9xg1mCryNhXwWRFJKazNu1kgRoc8C7BNf2SDB2%2BbRf9A91NHOvSZC%2FGVFIc0dzlAizCV%2FZi9BjqkAdT3wwBKfVU1oYS30mM4nyCuG%2BDIvSR1%2FQpjpPb0pY5ADEqHpd7yFnNpoTT6zgJ%2FRVkTKpcgxF5OKk2sKMMz8V7I%2FIF3wLkoATs2110Gb25FnKTErNLNxmMmQYNGWgY74Z0jBRR9DFk1Z3zquK5dlSU5hqh4hvulyyMW4FgFNnFiFwTB73DLuV7Lz0JghGEoj2ZxlDvY2TwNwhIDlyiLM22ZPFrP&X-Amz-Signature=7174c76382033b615a39c2b60727532cf6304aaa390e83e1548d2e6528b70928&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UGM4CFW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDRcXA0vA1v0Rg6KvWPvtBz46T7AQylIF%2FHjhSUmUwMtwIgGjDYDknHdwlpfIfo3avrQ5kqTqmdCUBubfmJZ2bxZKIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP9GZ7fxEJqxlD2bsyrcAyXX6eLOhIw0PoofPKn5q1V43XlgmSzpT5OqJEJ3C%2Fah6l6u5WiBoDZA6MnTE3SzQTgNd1Hr2hbxDEzBrN%2FfoXaYJGO%2BwGIk0I4HBoppjHeYYapbysPtlnKlpsA1gDPYtKv6DTEvxSlgAyfdlgIFFpMTKW9rkatk8Q65ubSC%2B3Lr8KaRMCgatF%2Bd1eQZeXkXnzGLhQYOiajW%2FwKIgi8n2nRNASp3uQTYupTF%2BjU4wjF74z%2Fjc%2FaI6DDnJXnYAunjIdXuRut98h%2BreBXMWEaNJF9iAyaa5Ag35KTYIN3wcg%2FY%2BLHlf825ilrCiJuFVwaAcdO%2FMloVUh7e1sGeulAuOi9fwgXw5eatOxJCuewrlxlLE3YEX6kIgIpnRrdtjWuD03dQsgl1JQ%2Bgu2tBEKuUd0wmxhevjaggRnVVh4sjFq4F3YoOQcASggsQGUsy6P7HfJ%2F1CJOvAH4joLvEcJjYfLdMjqBStY1oNabh6azNgcIElxKfHcC4929hMNU5XkEuVKgnAq2jsfsx4O9ci%2BMxq8WKMYbvOIsMyMhPc0T73fNcL%2B36kgNC9LGK1Kx92KQ%2FhFSI4AzGnBQzlF7HrRl0%2BhDn2KWC1wwZWRELgf7%2FS%2FwRWzTxYX3UR8yFoJzUMOj8mL0GOqUBrooGDZTR1jUnE2NN0CpkMruX31D7AK8E9DbxJl31tf9Mm8WNvSg911ZTvmcYFyM6k%2BtbjTAdPHm0I2v2iT2Pmtkk9UMCaR0K0TeATv4%2BrCye4YHSYD5bIs9yb%2BbaZmnrQ9VkSl8gShN3Fr0nrbTkmNgblfH9W%2BzZHgiR%2BqGjg9OaRz5JoC3C5lUJi8xuMbAqipXs2f2d9C2qD0avjrMS4UBtlG2P&X-Amz-Signature=68465338ae674647f316150c219df581ca95166841efbae6f2afa3548cf35786&X-Amz-SignedHeaders=host&x-id=GetObject)

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
