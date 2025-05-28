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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD57CPE7%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlP39chRjU7nfqeNTC%2B6ezLQFF6EDTMw81w6hVIauOpQIhALIOCT4Bn09DXF7yJZokj9IoVVz10c9e09vwvwOXt0wYKv8DCH8QABoMNjM3NDIzMTgzODA1Igx9EH8BcMP4mSdj%2FAgq3APjR03hii5yrORp540csA0TtgLI9wh1N%2FosTcnAxW4U3M7FDOZfVW1PJzZx5QSmpGqd2insZwUl2U2w%2BZ8KTl2Kj1DK3TOEMqLL7rJm%2FMU%2B1QXTJqo2hYyTuvlth10bonVYyZBigq10JJSIftMtVF%2FnzFM7B8I5Nu9cjsWYhfAjKNs0nSwGPlSW5wrKXPi1FKU0GiFAEuBVMqjBg3riGWmNlAZWZZvj9ztBa3mQ1W%2Bz9lvlolUsJEOlCMKXshYNN9UnZPLhKhFdvwXwTEPJSsGSh%2Bz%2Bjf5Hs5DMKs0qOgFnwEIbYYWO6MaEtDhp88XHSwcgOslvZtgNISLqPsLgjTSac2j%2BNYJv2kZAZx%2F3fQC5aK9W8cVEso6bUmexFLs9hR%2BV6d5naUk%2BNzKuggPchB1RqryHBbQR1Z9FuZH8Phf60nbOASKZD02bJ5GY%2F3RdwO4%2F4Y%2B9xXcCHheMUvTb1zc5Kar8h7Qz8tzKbIVfyyH%2B06CodyUq8UUh67RffaZca%2BgC4sbzjCLQtmAAFcVLBlroZMVM7Ds8Otstr1nWdYDdBSa2o01hfOaApc6EkDmgSG8MORjK%2Bc946ENOMEiblfEuCHKzZdWfc2FIAhLxX58OIDLAKb%2FQIk2Q%2BegaazDAkN7BBjqkATCgzsb6Ekn%2F0bRrNMM%2FXYDXm86OULvW%2FX3wZrqXsjlGS4ArvYWWipT7M%2F8y4gav1EECeA0inioluZopECZMdN6EbsM3KSJJcRZUNkZw4spPtBqQbmMoktsdC7KekN7PKvVZ5U%2Bzhr5IfjxV81S7RLtjuMn%2FilsBt3WTWvY%2FYYEMVM%2BSfGwWZV6J11rXwMzcHINwU6fNk5EAiz9VUUMEtOAMIBye&X-Amz-Signature=46dea4a29133244dffa4cee90b502d6eb41178dd21aea64947f423cb221de887&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGDUXKFN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHA7NAZgi6mVqO3njxR0M77VAblym%2BzSMCx7hqCNGCZYAiAi8gfpfQpQIPQ0pyBGj9hS4PogWFhIwEFXKZWLqDQE2ir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM9mchqMXwYNswan82KtwD5ylUTk1nfV4VesDB%2BM7dndCdMsMwJy%2FLrz0FBkI%2Flq%2B2R5wz0hm2lnxGakUJMWkr8MDZIwF1KrAy6yquvKuxY7bYJO41ip%2B11znzzRbyKks2WHLNVCFPjb8WJckek07pDCN9p1zrMocJyw7LKCbgDvy5KXMiLYHxOg0lT6Tz5aq8LGHcPFE2QOhpOIeSulhMpiOleVjzAON8mvQxs7w1Bphj7qqolGU%2BzE8gySmHOblAIxPQCNBai7VNxCgELRqxWeQML7DgpCvrGoW6mD%2FTql3IcreWDZVFD0ifd17zErVz0DuKPhlEJF2YgTg%2BM6257YfATIoEKh%2BLf5AyiROk9sAjfW9WNdaQfiMJzMpJTxI6jpIp1JfgITIe1L%2FjLY02iau0GWcdGJbISqcVyYnSR5YT9SdStcKsEOh06SUbBwn6uglXXTsa3X8cH1Hq4u%2FNLDAxHKUkg3B2DXEpLFo5GQOWyvlzj3O7pcsSX9Voo14RnshiCct%2B7Oy7XQJWRQKvu2nOwj4dWl9THhO0Fu3JEfXOUIFeV8bQYcOBBRI%2Ft8bQo5Nz3MFJ1Kx%2B4Aj8HU11FX%2BI0sEQaonaq5HMdsTwnKfrozyO29oDq6pkiEhbmHpWayBam%2FWA4eXl4J8w9pDewQY6pgGv2FDeOi6VlSiqHmniBMgNlSvzWCboeQpJhEL0FKsYBRQKfuWKvkSx0u23MMBC1C5ChOOXmDrSJBMg6qiVsrTxUknFXcqq9PRqEi21L5oxeA0abXglp8SoGX%2BxI1hE6EEh8jFx78dk95wwYAOJjZrTnp2MAEyyoXtgCYXZliVwjmC7TSxctEZDvbfU%2FdlK8w1y3yiUuMA2dTfNcGiHwbVYZwH%2BYGrd&X-Amz-Signature=b07fdf55ac84960f5812980b7888065f9dbc89734391761d4d46a4bccf4e1771&X-Amz-SignedHeaders=host&x-id=GetObject)

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
