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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUJXBAU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMDdKak8WayLV4Y8PHQoMQoyttj2vTh0zzy8oz3O6dBAiBCXRs7I19nY0Em%2F8vLxiyi1DlPqQK9B4zX%2Bxkn0eR4Zyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMvRtARqVS3FBYh8lgKtwDM8WN96yV81qCqaNvbBQqzukHhVOIE8krqu8jbFLe%2Fv5nesLOaL3olD%2BEz9iYu9f4PW7zEYewpHu0nzmJlG%2FkZ9bw8IH%2BQWcNnkId3ZsXx%2FS4o6hBEIO45B2obgd5voWIzajT8XJ8%2B3sdj3Su0Vz8eaQ597LWSIKt4cflNToAzn%2Fr9hjs996%2FiKIcVuDjDjhlcj%2BU3zK7TxDTk2zexKniPXsPaVoi7t0EBhNhcm3WETtZgQL3koY31c1zCujrQeb2ZAIg4PtVAN%2B4tXS%2BQgiCz6xf8Qa%2FFD6zVUC%2BQB%2FLTvgXzKmIseiX9ude4cH0pTsqbto6HsHotSe8asXlAYSbHOApOb4TpCuzL5WWhXtnRQqq3mzQQU8lK4f4UCgNVbpgxMMspAGHY0NNRJx5D99U8sQs%2FYqyTDKnQHtTETRVPRkg%2BGlEZlv%2FbGuU945E2sb7Mm%2BqXnijk5pvgfiVqAbU%2Fj1a7wyVAuyeIeEE1rz7DzzS3wi6rIh55RxW4is2yJdQ2Ot3%2F1zQDzKmvhxRNv9k2GEPqdOPsjtDsLNkQsRWGfsggnNvn44SCqfYfj9KVCG6djhr60D4Ccpwh5pHAjv%2BVyEAVwBGt4GhbuUpn8HaFNWDprhy7l87jOpHMo0wiqu%2BxAY6pgGaWh0bgM%2B7IZrxfzIsW6ODfvI3f5Gpx10Vyc%2BGQG8v8zHrw%2FECxk%2FDD9iKG4dCHYxOmnDwVSy2geXO6ccCXGa%2BbxhZBxpqhsjR9welQW%2B0lejXHifTYpxUwo9wr63EhV0eRUlG%2FmL%2FSdC%2BhBuB23flRmPfs2L6Jvm4aW8OwudYFuh%2FJxez6Q1%2BZiFCqlpddszOmstUpOQhow9GAjf5ECNvm%2BkslFU7&X-Amz-Signature=db28ec73151350981a1d77bc498f64f40750829b4cc85ab935ff01e117f67031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6SXAC6K%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE8dfRUuE1WlGCKWuMZqJFnuPjAFIA52nRiPb61y59ggIgDjwdu%2F%2BX3kir4VNATrAyfwbhgZ09vAsMbCPnZ38mcsMq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDACBm07i7iU%2FoxT%2FHSrcAytoQHBG6u98mOPbz%2Fd2Fhi5mfv36WXit55322H5UTwBv0mWFuspb3sP9pqE4b%2BXc7fH679X1eGvRJyoZ1t7ec5WjqZtoQhQhcd6vdFw6qE4aYmWsvJiJ2S%2FyCDOmgIi%2Bt6AbWSZvM%2B%2FvXqGPUPlXSfk8VfghbyEwjIlG%2FoFpC%2Flw0cFav2pWpYRqp4RpvMKPLgMxo2C5tz7VcRx97yw0Y4PhgUXG%2FT1%2BQu3e9Q%2Be8xewX%2FpZfHg5ihpwEUQCv7ZhadiiXIVWCHW%2B29ra2BQi3MJSbnk4P%2FgWXqS9BVI%2BOAlnZ4r54o1R94s5UCTvBWetobivUVnQwbXO6DSrT7iv2EQIBWcDINd8SSmZc%2FlI%2B11ZKiy0jUh01U9k7tW8FL9KojtziOswk0aJMUA5fxo4w0Oovm%2BQAYrghTUHV%2Bti8MEfrER%2B%2FYVdX%2Bd4QN2GNy2%2Fz5fpWi4h8RwlItNlq3UlDa1DTBurJSPU1wxN12deeru2dYvbpDH9tLujWc1tMEhT1kIVQ6UnyE3tSUyrnJGbRmhv4FyU%2BuruHslRDVv5vLTghAw31JLsK9ANLt4klfuiSQ8LlPkNZQZq8uxeC0pFWr3AVz%2FWtwXH1%2FrNPWQXRaWNf4oxXQ0gBdrgY9iMOOrvsQGOqUBv0ITP2%2B%2FFYpNOUneQutwBta2B%2BAHVz9fyJ1H%2FHECTvS6FHczAF1XqkAMhwrUfTBnvWwghQz9aqmZ5Y9I2Vsc%2BHX9rBb82jyDkm9ppJ6l%2Bqrr029MDGE5dfnkE%2FDO6qrnKlIvy0xAzjRz4IACBIkmIW8HuQwZsSRVKOGA61jmJzHz442UJEPd5G%2FZVUJ5La5bKIEu1RlUyqqyWQBb69DzTw2cAne7&X-Amz-Signature=984d9a144b14fc370e47ebd7858271f4c5f83340872900551c12296124737817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
