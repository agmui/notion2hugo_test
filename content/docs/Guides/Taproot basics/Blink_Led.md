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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP7F6PAL%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8ozp2j%2F3cChDM7lDM7I%2FWBTOpIN4uPO9uGhqqsNvJCwIgXoz5cV8IxLZrS%2BgAa4bvgXjJ6VDRFd6iY%2BMfZKHsv58qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAitzJMyi1WUwj4HgSrcAxi58If2UmcerYJeoos20Qbpva2GloF42yvLfKS%2FFt13mMl2QlM0vjS02LMFFwoh18QXCDvdkGQOQ2hUoDfsniXA035DrB8SNIyxUZy%2F%2F8dPcPLnABs6%2FAN9XTXWmoSWhpxySYz%2BcK9S7cZvPWv76HYQUAtQJKY%2BMReQXdhwe8FBmYNAfbpY5EWMEzoyUjVhRkeuw6Y0EPcNV%2Bbte2yMrVbeE8BBjXKKD8hsqLaWeubqfBkVJlYYHxIoAij6zfWeWN0Ott4tVdFVNwo2sUEzVkm8I8KoEAtva9NBtCxwgHgCKWtEChna7A69hfQaarGYwZeGEDFrCTYJUA9HxPli1B1rO9ITzPXRGkROLJebQL8z%2B2fkPEgrxz%2Fh8P%2FVf%2BcvweGyHfifyB26MxrTiBpHAEWCCIeQP%2F%2Bxmsp5ejJThxoZFejZy1JG%2B%2F6Uw6WRsMjsAt58IkicW8y6I3P9EC%2BjRokEKVttPBklTGZLnXUEi0N0Wbz%2BYJEZczlvduUK9xLara3oNHfiG1g7JM1MhSxq%2Btx9ahnYmDiKqt%2FBhFA2LEkl9Dh%2Bt0mlQrfemSqBx1Ik%2Fqm09tm6BkQ8s1o6JooSDrfmeGMKPhjCKILkvlXCK9HCizsza7y49FVJUrlNMNTYzMMGOqUB%2BjgK0tyu3KNo%2FeRNcLCb4m9aPvqkhtLgrQxiv0XOOosO8cHImuno9QhTFQznCob9WUbJG%2BXQSCCSXO3ppqxU5z3%2Fl2rhJt2IXaG4cKkwQ9rvXnnz%2FosUarLmE6OJBpysH49PCGALhcxBq%2FUk0N2pX3xmrep5zBi8gqvdUbbRwHNwfG0dXmASYzCW%2FqeK0sIi4kUYCcNJRy9ynMVzWNg13mRf%2F4si&X-Amz-Signature=69658750a30b1deb034e367b40a7c556943074832b87e7f483244c4176351cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZWVLO4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T042735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz2p6AVIbMWHZUFyep71nEwcNScDJvAMB%2Brf8yPsaOjAIgA%2FNigiWSCQIqoLxRk4HRGbqhCo6cS7uvxM7cj8DHSv8qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMQ5fWR98ld%2FqORoCrcA5mV%2FdUobg1gcJqpdMkXkTaEN998157kGSYs0dZUGVoZkMloIwRhxhhC%2FEwFT5N6iFZ6WG%2F%2BLUMtMBPJziWl3%2B2vG%2BMFH13ZrCb31%2B%2BqTQDE4W952ksaNgey%2BwSSzpsBdOBga5kGhEvP6S524qDQbQfxAG5KdC2fjhzyu4vEkobb1Swp9UgdYRtbYhcoXCdV4stNL%2B4rK9Ny%2B%2BUHsTTINSWJIYdl1CUHHCCCeyvBCTtpOSxU%2FVNomYxkOitBs32QCgZgJ4DXfenuYjFx4a%2FPIO9XyID94bQLlqIBRk7%2BrKWCX6X9RCJmljVc9oT0ocNT43ZW8AYqpWRpahPPFD6Yemkn0rrubiA4FOYkBF7CWkl88YNqeiMDAm3rK8pbfiVbkgAlKfCy7hQESlWazozxqic3%2FKSErmKCryGXhIWc9ut1VMXiiNXCRBV7HMFAyHuDZwyL7iE1G1J0ImjomIveWRUWIkfI47hN9lsvHsn1xNwM4VA%2B%2B57sWQ%2BjFicAE4pCfzwCViDBnjGb4ywDb1gQzsxCq0ZP1wDxpydjN88tRWhQPjdkcuIYeeTEJgXFA8Hvpn8Wy8VwgBRXNyOivQUPUw0hRJYX6yuoARE0dhvQwWWF16jh4qCj1oC7S78%2FMKbZzMMGOqUBiT%2B1VQ1hNgpoWMtpFupXNp%2F3Hb7UVCO9lA%2BbuiIqzHnhqgLn0Mk5cDU1jDfJi%2BEOqx34X7vPpV6Z06TonO%2BUiuEzwgum1Y4Hj2pnjBddb5DcLc2FQrAAS0by9j5auuamKQZP0zH52408vRvZ3IZ5f%2BJmE7Vx49epi1QVD0I4w58LN4cJCDNb3qUEmyJTcLS91MUPIVbY%2B3Y7kCFuPSAuTt2nE%2BYt&X-Amz-Signature=37e33ca97532322a7416678702b7c39817236d084fe496a7de1fc3721acd3e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
