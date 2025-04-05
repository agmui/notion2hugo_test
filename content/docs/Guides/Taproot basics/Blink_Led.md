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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6IPUSWR%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiAzUGglgMncvPyHetnEEX5Q8o0AxTVASPMrDO092TNwIgKbfbWKwTM8dWsNnF5ScLS02eteQ2bqUWUyYTugPmgWoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDH8qvibkDapDSnrkYircA79EhrVOXilC6LD5tDqKYkPmdeJE6EyJlwVCWEJX72PfT%2FxZhS73RiHqtpWbvtiAHabYPQpU4q%2BKF3EUg2dw59OA5BpHDdE20siQEqSEt3pA7O3jv40OaxbDVri%2FIJt70hOt0BUv1XYL39NJZNZRPJREDGnRANiu1m8t30R0cJdsMn52fWyzxmxBqOrmWMSZ0wnlauapiF8l4m9iQA2MmooSGkkcMnB9DqMYjXIbmD23CnVFj60jyLYm1wgzJi6nrRC%2FvpSYSmCfBP9xYoPNwza2NFdAEffxY9W3WrtWWfkGvLwnBeZm3xPzl5Mb6i3Y67auJId0%2FKppzRI5cVx4%2Br5NfmyAgcNuhS8VpTa0phU7b3Wg8CdHaokioGMnDktbDwM%2Fdtz3OgECD96LURccR2j01iDVaBHPNK0uI9M%2FrgnUPmFCewuKFaSc09nc5Cdf0%2Bxfe%2BxeVcB2NgnVgcmFeU1egsvS81WotgsI6eqlXGNBAIhqIdoGBQPQp6eCHXc0PARnOWkBQ%2F0hqnr0%2BPX%2BnDQbaifAeUcAwoo8ipDcZ4yKRDN0CZWQwQqWBqw1cCboOaLPwbH5ddKr6iKP8ABcdg29xEA2eWaq0f5%2BjMMrMi%2B9DUi2I3XLbFbGIardMNHkw78GOqUBImK5zibvOrEh%2FVJDMVhtdnp4jENbww2hND9bm9y0QRGBzBUWet7RJQ0QXsDzhZwhZT4UmP8oetnUGCP1mHrayb0bvDS4XSBw20gfmHtRORl9NdrRR9Gt9gc9QpAFYPiwYOo%2FCVx7C0vYQn%2BRT6iBLoSIPyXomSlcVwIW1Yzgp3mevSINuZ7UhTAlbdpvCILfPs8iGhu6dAbZOrgV%2BFemg17CYbfd&X-Amz-Signature=a40ff50e3b83e00a226fbeedb994ee9cc08d58c931a41abc497a96db0db87c20&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YJOVITH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T100724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDmGz2b07dLLgP299%2BERNQp0gufdLHxl%2BtYlzjWQWDrQIhAKfGsbGNsQmufIGcM4XN7%2FS4ShYk6hMwzZj822JWlq0KKv8DCCoQABoMNjM3NDIzMTgzODA1IgxDBYIEYJSFO8Tpj1kq3AMn93WtYkAEijXbUBffruOFDYuESQqCDq54EuYqWA47mdgYowd3wYzIUhL0TimiNNk%2FSweyainFFOkdV%2BtIPy407vfDJCRoBGFZmybX6Ble%2BWu9N7QdMrrF3PnoDmD4PeO2oyZ7CzOZmPRqxLYlDESvHG07HCydtMKgcpP45P0hFL4DtEDrqNOC%2BPXkrphqLoCamBbPgDLGgHkNGjxs3g%2FANXU6RiCYsjg9r6T4cp7sCSIHB%2FdukL5B8NchJbhJHv9WJo5b9%2FPjM3UBihaTaIrngRfCM603maIZg1j0462SSY%2FGACC1T%2BFPmk4divJ%2FzlB%2FhHDwwYphu1TLwNlWw3rjb1FBt5VZ4XfbbwpO64QGUgMVDU5Db5%2BDad8OT8Tdxy4oCYPbdTrMo4nBV%2BPPYZfJ9ezYBXD%2FN0nDXbhavcDxVRmhTPlQT08Bjs0eCHy%2FiR6ikH%2B67cgeyznQsudBY%2B6yBtMafmBfCW1GAsi9qkc9Z5bkOpwQxiBYYHqWE8DNi7UQdKx2qnmpWt8gmnn0ygxPDkOGHSq6hWPD0v8gvROJbbdoX%2FSjpFJ6PIFa3OIDlYl%2BxBpOxSXGE%2B7%2FCOOmfCmmbh9fsMvqdIf0G4DigOR9%2FAe4mdQTuSdKQDkbRTDl48O%2FBjqkAUT%2BA%2BSFf7aLuMImzJWCwxXqBY9ovDlQd1yQUZJnLKoMtIQf%2BJW78Q%2FKM%2BVFgX4%2F7COUfbcHx1MBe7FlkpTRO6H52Ng7Lie9V2f66XOxpzAi%2F5EZAKO9hdIphQ39TH3j420pPfKpLhIDjSF6leP6fJ9hkhsYJjhg4uZj2cQY89Uzyk3RDDZTH2yxtBhaq4VR6Wf%2By%2Fi3owxUM8wCFucSZJvJRNRL&X-Amz-Signature=ce4dbffa2ffa542007c90732e59f0f5d6b5241ad688c1a899a995333043f222a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
