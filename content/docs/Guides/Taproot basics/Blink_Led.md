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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOUCX77B%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaQSA0AxSUmQL7VWFDjr9GbnjT%2F3t4lMkMRlkU2ilbAgIhAN4%2FVwFhNRliAPoMQ62qavGscaoF0JjWXKfPUhN7oHW4KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzifSo6JIdkUOFupjQq3AODt0B5cJIWzA3gZG81Cn6HGtfCrdQeCQ5ls8TK2BxCWWPj5KYm4wQ0ZX3hzkEbcJuO3i9G5L%2FuhDMJJNei0QqtEpblz8H4xw%2FHT8K8B3Ui%2FeNgAGeslfPiFDVpGTQtUmvzCOaA0Y%2FL0ejNeOaQk9RqASjnVd1BVnT6gbiZqjdYKnZoqMNmj5DVqX1m1igzsEcW6A1XeAxiYVjs27NZfJxWdnzODPN10h%2F%2BN21Vj6GSr47Ihx3lIpXotRYCYm2ajFS0Pgw5%2BF6QSBXUReXDLhY%2FwJEtTL%2BCvnXb454e6bTwGg7wgS25jLk7olgxHQDL%2BkxUdc%2F95W%2FfdiNdZeFGliRbPgQ5J1eewlCBhUz7vLiVB%2FgFIVqzDq2%2BbvZhioHuH7UEPhjav8R0LbqMPGXQJMOn4fJ72jRzVp%2F2pxFMBL%2FlHEgjTMRtNUp4jJhGykDJiy0AUSjQ9%2FIAXYB0FcFxqJ3dp3p8daKiO928k7n99ghaaUolq%2BgPyb0ER8ZEZHKjulkQYfU%2BHa%2FU4eYxD%2Bblf3TFZ29h4gcTmFcNpiqrnyZ6elHHRWWpAtkJ77ekL0Hq2k%2B2JKeZeMkHXLjv80O05CMp2HicJS2tfS7GUuYuQ%2BhbN7R517qB%2BdomuOW%2FHjDRo8q%2BBjqkAQdYSz%2BxO3z6JgQij21N0t8DanarRsoocYJ40GZTO4DDtBNJhBXfUYTzc2IK%2FkfZNKd0YMjiFNq%2By7ynkmj%2BD2SAjVs%2FWzwfRa9PEJfJl9E47pqiJOOSJJ5jjl%2FW%2BJdHlF17HRwtWjB1YQB8TrMKtpryzvAP39PsIoP6%2BfWQ4BcJeWfcgWQqz8gHSFhYNwsgBLxhMmARTAGxq8rLQE92hyg0ODoY&X-Amz-Signature=6217222dd8bae113aa29484b1cf7345b7efe11096b7edf00fdd09b45ada49698&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCGFPIN%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCz4BVy0ataOSNLHVNh0AkjcchebyFS2rqItST6eIrk0AIhAMWJUToRMOdMmArXV31gIfamvn%2Fpz13jziE4zCIWWP%2FEKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPzjMBTlcwT7zwJlwq3AMy9xsbVudslrnhUNYXaKMqm4HP18ZME7WiVfUEsLcH%2FXSxPqyW3sbllFMnRCTs%2FdoA3vqassP2zKIG3lIXvZ5pdSTylND5ShdWQSGfw4WvTAlukth5ssJYkEAhhwAWZItnOOk0nu63HZB0Jy8xERiaBEfvHf1RThh%2B3EtSwu%2BRoNJ%2FsbI8gZLD1gPybTRnEGH4W59x%2BIcNGBSyO%2B7QJS08c8xo7HZ1H8Ch%2B%2FuIWymWRKjBOr4UZmYq8yDN3SHyGBYr6ECovDYNEL%2BnPRPQycFMdw8iFaC7H7tGi4ffH%2FmcJ3QPEYzsKPQPavP8rhivLwEaHPIPK5MHmCaq9Bjfx%2Fkgxsy6he4gqRq34UYEu5FGBDrincq0X%2BzMZIXaVkQ2IL2R3t2nvEpCKLOGBjE%2B4GAos9JzT7WEd39RsK6j2xuJi%2BY56ujahzan5aHhpJyJ9a5iQC7CSc00v10L2Sy9t9EcJ%2BGZ%2FnW8UKzz2ITfyhwCtlZRhkyI%2FD%2BqGyA8NHlftqZJZwlmreC5Rv0Cbgbi4ZdFdlpf3eRKumkSMPn2G4%2FZ40KlbUyUQZtta%2BTQ3OvAqay4lBUkQ3dbMsNyKjZqV1tPhXjg6PUbZbajUx0D5npUi5FXxbGzzwCcXOCYQDClpMq%2BBjqkAfB9%2BYD9AfUpYQM4Zo%2B5ioSt7DDwl8gGjJsDfGWW4vZnae5hTUw0rUw2FhitpfGFM2eWedCgwQ6janiPG6i0REKCeAoQlMIEkAsuB1OPe6WsmpNXNrj8retDHLP3rerxI3a1T4VKVkc5ca%2BAm%2FmWDEgJ7A5E%2BYlcaxUjneqZ8WkA6NDXQD1ovjXsrR4a7OiRquFFloArvrOsAVmqLv4Z69u%2FbtQt&X-Amz-Signature=d15d896502d80cf6c61fdcc23f8ad0ded4e487f60ef50176683a6462fcd06042&X-Amz-SignedHeaders=host&x-id=GetObject)

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
