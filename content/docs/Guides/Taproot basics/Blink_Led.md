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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHFRB3YK%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDLLtgTE0Bx8dVI1CQnuSeVpULJk75PoOOUlzae0JvSaAIhAPHEIfv4gAoy6tV6eh1wL%2BazQTj4hQS83gUpbOxyKB6tKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7iEac7dbk4gmHIp4q3APKfIVLF%2F3ucNwNTj2yu1n3Q%2BRuvdX8NOA1KZAC0TNysFxjBycCJ%2F2h2KSvTFudpM9tetrv4H0GEagVssxQKAqQn0RPV4FnhNgCnsRGVJ5c3F23xO7nROSrydbBpP4%2F6QCoYKkMngMa7L7RQqZGLy61CvIakITARE9JOcMAQbBMKPEKjYPw%2F2tIHWrfqg23H1969MkKaQXfEE6E5CxXVp%2BHHsKMh0S9mmQaphe3MpAlT7KUVFtyk1VtNLaitBkXXrTLjeHGsWd6iviIGG36akbJvVNf8ye73YqaMdiLIoHUSQxB0a0v80xTw8XvXHBzJrX8VWBz8XIUVDKiSkbtu4rYxFVUC9EhS%2Fwb1bp%2BINKAQ%2F71vRBpZutRnZWIvotRS3YcdTcRqxwwLU1R01l%2F5a0ECXiBP%2FdcJQcnEsE7MRNwElibrXK2mCBaWglYe%2BtIXyV3nnXBah%2B2gbWlrn8yinD7crEcDEYnx5zVTbypLwr8GzF%2FWkM6zGdPNeXPcyUJXMXztYthnm42bWTJ%2B5K6C34%2FF1GzfBEengrD56axCJbniEfXZam21z1pqQXIJtAY0oTpr8L6RJBvD00tMlTY%2FUGFcfiJ9%2FMlTjcQFb25OgB65L0tDPbgen9O7TV8azDfr%2FC%2FBjqkAaD6TvjPywC%2FMnv80dQIwJQPp%2FpQmbG856JYQh4lucSPcMjseXeQs5QHkaB%2FwFnMzfV3ukba7QuJDkkws4l3SmAlKSU56bQhMXP4%2BPL8XmrB6mP8nKHPZB5Yl1TNokWrRWBwj8d59fbtmobtY2T1aFp5LujIZnGkjDZ43VdkYfhkih2f9tPfXSDM0NwsNJSVR3afuK%2FAQdEry2Z49MxZHskpRb1Z&X-Amz-Signature=307d6fdbdd6dc12e396b0b641ff2006c62df0d5f5fff2102ed7a8ff80aa6e98e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VA7ONNU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDBIENOqaYFKnNiN%2BWfwCT74GzUPDcxwaL2sgoGkkRjYgIhAPGVlyiyfKCHn5UZxPC%2BHanpg5E02OGVjwC4fJPMsEkSKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMCMAj2Q0hYApy6lcq3ANnzyw9BHVuqkh6Phj5lf6Ois1BKTxbImSd3KT8cTJ8G8T6blzqN4E2%2FlSZ%2B4cTe8g7VCMn0%2FAV%2BcLgiLKA4rafX6l3Fd06lMZTx9YgaKJt5a5eIpDeUZY%2BckmCKoStDe4dhCLVGrwfwP4RJ3hwYDBqNaxOQVmXoge6lyWO%2FwlXDHgXOAK5F05r71XGxLZqIH0lHWe%2FHFD9m76jcgPUDKyTFPOFOxklR%2BkBk73PFffdn6nG2i%2FXEjElUZJj9omMexoYKrdgHTD3LTRmprQOmMyKhEYaPtE%2BxBu818xPMN6PIggQGO2Pg%2F%2BP9pvD2IGk0ktr8BNvcVQLMcE24xCIK92ZaWRGrdpWi8LJ6Tlki9pDE%2B2SJHWoPGYbliRBHhqZoWP0vfDi4%2F8EETYHQxN1XzNlS9kdsph2mBCnz35WExgjfpohZD77KHChEl507vClQhZ%2B4KMuRjVWkkxzv6oueTjCfLwbv2XyavNha7OYdalYNyjZXkYebNfViAuVXk800fwqrpjvFM%2FZNREGBXAEWozZJ3pU7a18y7NrElEMUd7Jkhjxd1x%2Fps9ARJ52KR2f94b08Y7J9R9UcFth7Y7ZgPvJ2we504GbCqPhRaMn%2B2jvJNJRE3GAuniFM6kaJjCLsPC%2FBjqkATbgrdkGOiZzsaFuIeQ%2B2rmijzFhU8Wari0eCPbJHFi2a23U1gNPjI1nYtPkS3Acn5mE2B6x6Jt6tjWUjOToh63a0ssVkaG9iLlQiTf5X%2BbDvdt776ix6xy2ghA%2BxBkS5ibO7BsFkm%2FTNfo%2Fdt1rwv8WJzOcBURneW%2BmBPM6dX2oFX0auQHB8KnujmwoLGyByuNWIeQ%2BrlQebFnqLadwyQUQshry&X-Amz-Signature=3aeb1eec8b2283ebda2ff1f0362322664fa76229e3b0433b22aa35d866ba4164&X-Amz-SignedHeaders=host&x-id=GetObject)

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
