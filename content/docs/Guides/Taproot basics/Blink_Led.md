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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VNJN37V%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD1jyAZYnvDcRIxh5GXis0t2w4k3J4I%2BpjqCCvEspRRYgIhAOTj64U4T%2Bvn6WE4q4qTh6mhrflkJntKaDn0HLul6nZbKv8DCGcQABoMNjM3NDIzMTgzODA1IgwyqulAec5%2BoeRdLHQq3ANfEbvsPHf0YEonFUqbJVTXzrI3N2XdUrsFyy6HoFfKGhqeAQ74AOOE%2BZaxUI6dTSja49kmzVfHqCB%2Fufd349zTn7rfDMiB8AiEa271Dygoi%2BIqElGFT5ZplbRol5sRT15viuZqCJ4dJ5MgfYG9Ru%2FjznPEq%2BbaHaqh01IjH7lysyacbQt4N%2BqfoMNCwZvGxx%2FH39KW1CoNwXP19SJ6nARelZaS7PQumT5uaiBsRxGXri2MjQrIh4EKtIJBp0WMlX8qALW9VaV4aCf%2FhwSxcE88EJuPaBoIUeakYRXtbXj90kjX%2Fmno%2F7Zm0VkjCqfhLUEduRSum4jQJpjj1oKn2%2BCduaPSwT%2BwzvfTiJELtPCBgOBCYCAdzz4J29pnSeLdbMfa4hoGjNO7mZao57gY8qaASmebXZU9cvdjog9e3dBzTwVlmQ63KvPbNkDURwn%2FfSvByCGmLn%2Fa0KXTFsLg5xY1n4kQpj3Nz4Q4BNTLy0w9TVzvbrl6x%2BV08Z2Sbko%2Fy%2Fvdw6pE9ch5EY0bhOmr%2Fe3NoGogI2i0HyN4u8x3uD71e7QsRlTExaA4eMHE8fJzXsHqopD4FXK0N75DxMFRix%2FybBHmBy5sBYMxnStuebJsE4XbxdlyQ258nUSHajD79PbCBjqkAX%2FD%2B8c5WPcKHQ59PiNlMZ7R89Fhg2TRLXC07Xd%2FAd2SqeWL22Gn5YAvwvtzDxSoI5aOfeUJsEqFErZpGFMbvUQoFv0dCCN4L1Qe6WyUMCyjlKPqJYizz8ckfEeE2Ak90j9KvYgqzXd3i8YIClw0N8MtFnFm5lGXrLRZoZDLnh8%2BOAfcaNVOZ80kKqdrRuAsoWd9%2FxMiP7yg7IQjDa%2BMfEN%2F17gd&X-Amz-Signature=0009a2ccac8019d1f762bc2e6d5f75b933ec69c0ae22b8a4131a800f276f5e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ZXVPD4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCmWlYOdXalM8SeumGU1ar0adBhjWT5SikCogh6i5C7cgIgbNlrfuBaWbHml%2FqsJ8Vm0udKHM%2Bv2t6%2Fw2AFo8JqMWgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLd8TlUCNXDgQytSWSrcA7WQyQ%2Bobxev%2Bd%2FQjjbCEjVCl0gWdKD7DRIXg2Xxm6EEqUcqKd3mq6YOThpgJJxIrbrVSWkvY7iEgJtmDMVQc8Nn6oT1Hy97gLDxBKonLkv2okHhc%2BGPXjDNnQL0JFPFq0QMj55Pf%2FdL7E1XDl4BXqnT1h9O5K%2Fh07NSPF%2BQFsGfpTdf6nX8l4aADfhtEqkNOFLh2uPQvI%2BOyz%2B6RQYQMWZbiSwP5OVInMQR%2BM1RaydCE57ILfnvoKX8HflLiGKHStaHUEaws0yAGZVwVfNiZeT0%2FnIQ5xn3PfWb0%2FznnHtPnwJBNcetb4AQcxw%2FzYt6HDUj9fHs2lSkyv6NBKbrqCPtMvmMVevamqVJW%2B57vwBiytiBan0ITWMkptIyL4NmZtTv3WP1bZGOOknDOZkqF54n4T%2FdtlETIFMRU1BdEz%2FDqYD%2BPdc8Rejbx36%2BJhnrgDvLWu0MRN06M%2FhGZqrS94Pu8vsL1QEJCePI96OW8TA3JYQYFoghQi9D5Pcwl6TvYttIk3aQufI5wYM8MG7GMYC7NP6EkxGkIh8NspiQuM9KyK%2F%2F%2FwQohQigUicMrd280gt3pBZqUnKO8JYwxOiPKpH07So%2B13QSbUvlui%2BgtltKm92uCZ8wmxJB1FtYMPz09sIGOqUBGO5tLOhAsleJ1bw3ra1063JIBXZUL9T6qKqhTfNglTZ3eMRXw4hjtwZTLMIgW%2FbZ2SC%2BMjYETNQFRBtHZQWdmZd%2FXlw3wBhMNwGVESg2QG%2FziIvOF9NW36Cyhd85Ge1KKXzNKG4a%2Bx3G5%2B94N58w2TAehHWUnzMGIK0TCaB9oQFbbXHhPvK1creqzuB%2F5K5%2Fweu7g65byCxPo%2B%2FHXuJ3QXt4sulh&X-Amz-Signature=434bc216c72b9d080e0afce477e45416bf51a6f672e9ba043a428ceeda6dc99a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
