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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVKGNEL%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD7MKlGdPtV8M1lkTHwHE5H1PCujJKCynmWh8qw6tEuBgIhAOK5%2BdsrQDU5lDzMWmDA8DH6mWWa%2FkFYF%2F5izw7HxqMVKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkMTVZShW%2B6NlB3%2BEq3AOSB%2FGoeAFdlnjIR9H1fC42ipnNiiOjrjboQA4JjCZrHrcvViEwCotKYDS2b6HwUTBO6VHrnRomy6yirVRD4d7diHFAmcfY8D6jYeqs5%2BBBjX%2BGd6MtFdOTyJSPnXaqIVIOoJ9LnKMjAb%2FrT5Sfl1WZ4F0vlZ2PqBTg5cqLsDIwBkbdFvcMbCQyJKfgTh7Fh%2FWFVifQLu4NxPo25AA9f6FmNTcOZOAJpTE9EoS8WJnwOUYXR%2FyuEIUJpPD9dUHfH6oCJdhbs4rEkNfTeFk7xRDvUyvGy%2FlqmW%2F1w4Dmvbyc3cSbXGYDML77BQqFL1oBzZenVniIpGUTWTt8GFJzUMehCbAXKKWlolc8aq6pNNue5vx7ipFqXeHYaXwMR%2BOyiZVh28kPy54uVfyUexv1jRb3hR4sV5imsise2A3rcq6PBglUDdJd2Mgf%2FMxlMFnT3K35IoPtor0J4oj7%2Bfi%2FIVE50iUnOawvEcHyyj2uZx9WeTXvnSKQoT7bs5YgzJ4L%2BBJF2QXGQKYSqb9zdcUv4pcikw4DY4u96BRmYe4iHeXx1gExdQ5DtsENeHdXsBK5TQnECxBkMDhR1Z4hp6vFFVZ26tSsdTDBsRKbtPhCHgG%2B1%2BMguqIbUPIHFI8Z1jCsr5jDBjqkAaqZ75rKkDDnKxv80D0uMamkbCgMBjD3LiXlkhMHt%2FOMYP0yIugw3ryYx%2FVvuDYSIHnQ0URHJAR8jCsqmpDtwQ6wK38E2BPx0rc50lSJm2I1dbOQLsvPssXCXJgK1OGudpn4DAw8OFD90QWOYfqAAuWoZMd7f79yY9WuoPFblIHXu7PfWScwRWrrHPJJ%2Bwshpd4LrWoXEVV5uZTFig505eeg2d5k&X-Amz-Signature=e567b164db58ca9d1770ab43dd2696630a3fe46b8719535a8afa42a58de243d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PGDHRJS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T071057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIB7is6WLrYKlUMu3kp7sTbylRthAHmv7ktf1ZOY9AW8tAiEAy8tDPHlIv2WG1H%2BYyGlr4v8IcLr6aF0Cqtc8oLAQqq4qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJqmnUWlGqsGlKZrCrcAxaIZCSv2G5W1Ivyw%2FpIakRtx6Rx%2FDI4FfOvszDliXfLHv%2FhaDqNI4GwPax%2FGq2L%2FHGiv49bGYa2OT1ub6oqAqEZpjXJL5rleQ299ma4dqBXYFCo0M4i6RbbmxxQs%2FDMfrq2pqAqCP1tHhzFfeeLaO2zvQokRPbtSH%2FZJR0raDMbRKWZ6cxVxCVHuZiDj3ofaUVeWkZogjZn6UfrvZkplk%2BMsinmFuP%2BytJJbfRs0VAblXE33Kxec1%2FHZpwZOuVjXt5qI3lcXgcDM2R3xRCEm%2BZOwxDcFM4xNTD9pNfeFMfJc%2FZ2GoyA4azeCSP%2BTN1iV3TWwQMZiaVmzYjsUaM2g8FQu50IQlKTuCfoV68waAPQFFnSXemk7avKu1lECpCMBPMLdBidQJMxTb23JJTcY34j5TYF1CR9426f9DLJD5FD%2FioIKpmY90Rzq7C2%2FvKGDltCsV9rQOBXA7jGE2pUiFG%2BD7QTU1EX4d%2FsAXjv5%2FWPqCmE7xclJ5jUdOA4wNzzLVWmOou5C3PTOIXTWG37OOq0Az6qxTb6lAByQSW7hvVUmFZ7YMqqavBDQrwfuoLMc9tnaJAh%2BUoTBfxCRq5xxZdUO%2FVgk6NxSmXlKd%2B5XqIRPEd%2Bhd2uchaSBpvAMP2umMMGOqUBqwI%2FMvMXp7YqalwznG3u3Jtw62vIyabKWQlLFQo7Vtrwfyt4ausnqYbyp0y3G%2BqyJJfcTn5TxkOcblLSANrPY6gWXIpYxDTsMPKtHOsk5TA%2FhbVKQA0cjodz%2BYqyi%2B3BFcwMWSxCqQiUXIZHTyosMLcCYh1YKd4sRYptxa3%2F2114hl57V%2B0BIt0fLfenEx8cUTks3CzwP7vtce3odw9XSjDe1Yt5&X-Amz-Signature=aa40724ec9d589aebc288c80b8552739b9189c3bb9740545462602e9b6e2ab10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
