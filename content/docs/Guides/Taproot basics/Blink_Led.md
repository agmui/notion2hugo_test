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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWFK4PF7%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQC08L3%2Bxwu8P7FAZAYhadATe12LzaTRTCUNeohbYONNzgIgDr9TfceyIQI%2BUTUEf0BhsvksSZmE1w4HU3rH1qYxmLsqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuerq5lrwRY2kofzircAzhnL0nlyHRTIpshxZ3wX2oLRlkzj4h01zbNpfXivpifinCjutXozthKo1fxK0HEiIEAnYOqYBl1W4SP2v8HE84W%2FMnjrAhXFLyPbCM3C4jcwmyO94u2mzRixRkQ8vAPiUfcNstSn7RucKJ93MNwGnzZKA%2F2Eb%2FxO6snjbOM3CY%2B%2BKEP1ccCVNMCu0E%2BzCpVuP8qBiAO0VgzxK2%2FCQCa8KiC5FrX56xRVgTQvYvv4O43ukXNbLkc7wJOMZkkOuYhQCg7GAR7ZFYy6bjvI5MWzULKupInjs1zT%2B94HAbUDBKUyS5H8ZqzWRarAoyA3YMJWLdKMDDkn%2FqcMM04IumNVfgBQT%2FddXF0avVwPfcyejEkDxOBbj%2FhXe4KD9Vfpwrsjw6CSLzTofwFLdxdT%2F4rcszm5lHKzNCkhaI92blucWZW6MkCFsNDnePDK09285KjNpNH070AZF5hat51X2poi5ze4nmuxlif7r9ldeCMdMH93h9aHHKH2IwcPyv8UCQR3JDGEQ9jNoWIRSib28jMyxTgPWAn9HJzaRlngBVtmN27McOoPJMyZiL9olDBNZFoZbee3mmZ7fwzlFOXD7euaRiOE5GskY4T4v3jWVdfhiNLQ%2B086osRpIPu8dvTMJ2G1b0GOqUB0Sqqtr976MU620Tk57vAUmfpAzwU6vLyIiC%2Ff2bJz7k3G3QFIcT%2BBdw2Ubag7JV1tOMfBbv%2Ff%2FUen%2BHnqwmdr1vJ%2FsJUvv%2FmZUUWek0lYRtfMA1JVHnoDDOPQDW2QSmlNBrlqB%2FbFXcjEd1G0EsgidA8fJBLOzcCb6Ye43thoS7nrcCJMhZWHyuRLdVzAAtM6nDQEAwYVYA8lnfd3YBW3nUksndM&X-Amz-Signature=0123e29e3a46edaec8b1f1ca5d72103feec7f30b35ca1a648bd6827707a48192&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TECLCCR%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T031321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIBwcmtkvKDPIUhp64XIP8Gkr%2B6UsEkSFXMNsHiHpj%2Fo5AiEA960MCtoZNK4J2Rqm9XYUmo4fkREW9%2FM9A8RVOJLDy98qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB7U0Ch0owyMAP2FRSrcAxHDcuiMMipLkMJBlkdkv4vOstIhSXWN9FM70ylXApIa%2BfMH1t5mNyHfOA4VD0Q%2Fx91gsiOdaNquZjV7RambCPzz3LfXwIxI%2BBjX%2BLR%2FPsaXTdwk0t%2BIN8%2FSnv%2FYnvNwfxJmfeanWZSBI0%2FRzOjQS6a6aDwcNf9%2BQ7rsjyrrhY75fRzR9sDI0JUvLUtJiE2HEvWVRqcJWFF433yvfYviyA2afQ3caXZc3Wjw63pXLA9Vtn242VA96rJDE89gy%2Fev17Qu6ibQPRf0jKEeDCBO61tALxfkMRKPbXI1caB%2BwWvqLO4y16VZr08x3AOCoOpA0iBTNWDZuA6LTOq1zE2Qhfj9BEMBjXQg%2FHWL3g10xSXUd2QBly5hfJbpXjbbNedGixWqmkJDpXR7uWRwYohVT9fhMajGd6ASGVpI059SPm9fBC3iyh52Xv0oCUM6CtCJc0KcprRU%2F8VfW2AR3jNgVgkPQoPjRzo%2BtAiCvaBxLa7XwLztXh%2BbW%2B2NdNc7wCoRZF3z%2B%2FqQlgSfPRUXiZc8B6awtGvODz8hG5IjvWpNI%2BjpZCWh7bRGUq6INS%2B%2BaAQw4N2GfFkc9yK7%2FgMzT%2FFUKJXQALEfE8zM09IjgddKKDDrU51b%2FUxVMpsBbAzAMMWG1b0GOqUBi5aipmTxOkDQAYY9SB3AIgrvOj%2FY9f3x4BuouGEh60OVNq6ZXUzkz8v5d3VXcKJnkz8hoUdhZ7GGvtkKB%2FU%2FunblthERePT8shAOLhaODMAlKpsQNGu%2BSZABFo%2BOYGSdZk1DFdc%2BgsmF6IxpHrnhB5q%2BIzYDseLoHdUHzBXqLmIVsXhjSgEiq1re9%2BWlV5bRehv6bt4%2FA9N6t9eUgkcEkAqXwjOH&X-Amz-Signature=98dbca8cf142199eda22b17d4b37ad76d48ec0e59c36ab7e994c8cff051975ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
