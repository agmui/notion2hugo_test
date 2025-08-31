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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CA5XVS%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP0wuIWvOrFx0bomBFn6mK%2BNyeEoTNRtKDJmMC3CdopQIhAMgPHM9IAgF1TBxCNy8rwgYqPx2LxwMRHjMA4uPtoaj1KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSiTbtQRALhWqYNsgq3AOYAYzmSEvyyG7kpJRsb8kZ0iPmxz3RRCAuy8BnoglVpMvbtHzZOvtlUn0%2FuT9edlYZT4Ri1TFsbICmlTzAE4ZHZNd5nKoGDxjakqenTw2dKFin448F4R3028ZyO6irFZnOy%2BWWIWs8%2BZw1pfp%2Fnu5ZydeeaGSIomt0WEhQ2cRwtWfIAov9aFFLG0YZ4xvLOPE2vIlSSfzgAYBbahVFl9ZIqEotuRjSU6O8ZMfbIUFcyttYxnM4sTx9feQjOcfi0ADvm6l1ABwCmYE%2BGnO9wD2lcv%2BhwaDJrb%2B%2FlAPnnJydinL7Mc0gM4ZmhRf2SuC8CjZTiCXWLwS7Gyz%2FF9YTrtPvYB8OguB7nQvAPYTdQ7RxweY4QSYP2OMKvBERWIQWZ1GP85JjjgvouN5%2FwOcQHIL1yCp8vZ3Xh0pua7WiOmPHUwq8zh%2BqMsA45nk7ZaoH0hU07MKVBLi4aHpjZ5%2Fe1R2mnM8HL9skzdIt4vOyjEhW949vkvZe6m3WyrtM3BwVnr5FRpcZMLY3%2BrQFVuC3kuN4%2Bb2OSssvfNd4z1uLQhZe7cDs2RHrfLCdm0MZBAKJVrdCrs%2BnmSVr3%2FkQJG1XidV3fnfNO3Xnj2XVr3gMI8JU4hOpC58GIFpaKXi7UDDHns7FBjqkAZufQenLtLA1HFjNIrIKNcx0h%2B5BTe7M06T0MpEin%2F7T1ZBiO2ziOVKHVbZBRwIcajKZocj1DG7aCIFbrhmD3qzsEAbTIy%2B8y2oW1%2B7CmUf9Rr2OCEknyyBSN2XLdR0aGWgBl9a32WZKDaSX2A32txcB88UjfrtypraQyxSVmJ2lA2WjF%2BQs2rcxIo19Eo6ipR0JGVI1Xas1t820VygeNLEFLwGs&X-Amz-Signature=efc0451f7831aadcb7639fa411f2de38f07f331d6805325f5357f4b0829642ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZGL6J7S%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVxeMG57aW6mzuwPpO6JdQxF75oIbQejjG%2BTuwPgKcmAIgCjTejcfkKwPcauzlpddXMsjIcqhbamaXkLOpVffc1RUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMNnGRi9R%2FFzTtFLircA17lpz8LsLyyWSWI%2Bd9B0K8eH0SBy6KPEEISTioyTw2tG5mS%2BrTLlzv4PCVruTJKYVO%2FLG9K1eGB%2FXEKhUeRZsYE%2B31XTFcQ4QHS%2F%2FHUUhuQW3QVrKIhXiM5qmk89reLVMoQc5qquobxx9IO%2Fl6jiY%2FxIHFimlUy5FNnfTO%2FTacsJFna105eXLL6j2KSVz26dmOb2vgIhDTTEgiKAwKks95SLs8oo1ZHpfX6M7LbxKuFBB2kqVVlfGb3rWy%2BPk59sROmepsML1ZXT5McSiSPyUK7MNzsABRZC2ld0GkxaJqUwQRriF%2F34EZX8xHzf%2FYZv%2BZntcKHDCP%2Bvpy7GpvoLstRcYt1heH7cKX6ZmFQH7ao4UiqZ0AiL8Q91hIHOu5ppT7OKMnu%2FqLlaZ%2BbWFL7zzxgeazAxZwCiUKR3%2BrfxvbWoTMyxPm5vOaae3ObkO7qAQyQXD9W9IW33B%2FB6gZX6J67j7qhbNA6WCiAgPV3V07PvLAe9xuk511DoaRz9Dg6CdjJ8FcjjY%2F5JaTRbqtbortaosVzyXt%2F8bbj%2BTlrIolaqbI%2Fx6m5NOibTKbJA4Bmt4xzcfnvExjTeiomRE%2ByVs1IGlElWJVE8stoc2M%2BHIrjIbaK29mKRMT85c0SMLefzsUGOqUByhp2xmPCUAID7JUtzK06bsBBH0fUDgW3a8tIAhrFdiWdo3jDl2ZvbZBUz5llmJzLa%2BQrzt0CMCNsVYm2I7OtfXRWjnHtVpY4wlqSAphhsHqqOV0LoW4KxmWowXcoMftRkm8i2nAxhjv8RMJXemIKPgUtQSmZY9w3a7hPwuFLHyOo6PKLk%2BvLhXdww36VEgdTXZZ06RVrslKjKBPk0St22maBt82N&X-Amz-Signature=17c04910f8f17102b31ab36ecaf9b930e3c313504c9278d42ee821c5a44ad8b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
