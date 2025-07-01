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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B6VIKJ%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYG8FmXdkYAHniD3vkKstQpUVsKRACTLOp7JngAMS%2BLAiBejrti3mOoGKatP7zT1DllydC%2Blx8HAdCDdqgwdxYNAiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2i6GOH3aSdrHcxuPKtwD5EzLe%2B5icQUJpQIDNhTJHiorLX9GNQM5ByopC5rU%2FspCSrzE1Zrmy1pIiLCiAezI17KpHguEKcHBNpTWPAvJrypv%2Byzvc0zQtarz0KjD%2BdbmRuiWK%2Fh42jr8mhhNztsRAiOI%2F1BW6NZQXGzedjV3ROwoiTO44MIvOcXTTNU%2B8qJY4q6HEasPRMxonuJ%2BfPoKdAflwI0FMYfkBriQz%2BnGf%2FZx50v3kdbUTyDoXOQWmVgseByHiOkDoK1PerBMSOppjsGBF8tbomoha8a83Q9vRje6VEGFcsq8xQzZ7BQ7ZqesgLB5NBreWM9Ixhfhxtq3xkUqj59LwYtAdSW3dzkFUu0rdJLTJ%2BlRmnTf0D7l%2BAUaNo%2BZjpdT5%2FqiTX0tnJnpIs92BbrgrdQ9Y8yKhmzKJgVX5f%2FOKZAZabpaNnB5WN6Vr6C4FK1EXcL5Bsa0yGGOznPwhZMg2G3hYbpkotxoc4oQcz7eygp8DrhadQe4%2BvesQLcpjqD7sHK2RQAfTke%2BUs6xoG%2Bg4rH%2FS316vJnKJ5vdRS3Fxn%2BGeXiCSy55AjEKQWbckUKEQO%2ByvJCzXu%2Bijh3phcQu1KQJ8vqVK1dm%2FW8BpwkmDfevMzl7lK1TgE0SYj4TW817kn3VPL8w%2FsOQwwY6pgE9juM%2Ft6ED51kpnKNwyNYliqLlgj%2FYqTI%2FDfyFqB8y%2BipKY8LPO7Qo7j2SHbHW7CsDn9saHrUGeb%2BhDC3hj0JmAivN5ZmqCmo%2BcJoynrcAZ%2FaIef%2F9E23jqybCc%2BiHEYSSf4PCb1f1RaIFQyRHO1VvoBBksb9%2BJAq6Di55PYykWbRw14udvSdGUlyMf%2F32jbxPSCN7KZTYlGNOHNiGVnlqTjAK2Z83&X-Amz-Signature=404e85fe3f5be66d3303ebfe6993977bab1f94214b3057a31c7a2c941324d3e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFLRSRN7%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDk4cVSXsEOmxQf6fcdRt4xgaqG7PJ7IzD21DSCuc6JrgIgbraad%2Fj7UD4CzyxKGlu3T55Uy%2BhISv30cp9UK83F1CQqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6RotMjFIdeAlsbdCrcA2Kh%2BJLTmYZ1z15hJM14a9ufHYJ77AnXjr6CD0gDD6Zzoz5PHzFR%2BDvGjeUNFPG3Iy%2F9yw%2FHPXjdwdSOnT4waYvEZhVlgy%2BSGSDsxAOi0ECWOpk4CgQHWDIG%2BePCAKmjnLJ9i03IqcwACcQDjuuNLBwwg94EsTVDkmHYAg9iSBK5JUL3DvbkfiFdrjzDxCrcoRTfVClh06g35tD0%2FFfFX4uadRg552zTl607vBXIu2QumK9Uf3%2Fpz2ury3jA19aASjXR4LVke8eCl7V8RsEyZP2LUMBN3ezOZIBMLtNDsx%2FMoKYs%2FpwWnlGEsEZW3zdQYDHX6x%2FfS8SlgP8ZeaqzvCY9lnXPXtcwDHEbYs4MKvQA9O9Y8C1gsN16NBEP84nj4UdbWxfd5tpsshn9WjyRYuhGT2JTCDV6bMcRgpMa%2FrkWcVhmtwAGxvdD3kzf%2BoA8%2FjIBqYvoN4PIaXCP5twCv6biC%2B3x4omfkSNPP5no6K%2FrxqVdCB2p7wTeOdVtijAkoeQet%2B%2FBeqIUpJtvY94Nzud7%2BKJECX1sJZ%2BLixq%2F1CtXrwi3V9LZpwjH9SPKmbNwMIEvq6FiABTSZPLK9H9MID5veSox1La4sibQjXJURTk41GBIXWRDh0PY1FRwMKTEkMMGOqUB9RWAq5jpM53B6efvrzP09VawAEkGk2d59mk3auNZNjCnMm9Ad7p9CO%2FWj%2BBVRvI1nTiQXzmaXNv5y3wLUVxQ3q%2BsJis7kmFG04gmgcsO9mgoG%2FAsFlh5qCZUycV1OGwnKeU41KrAxbCT5zxX%2Bx7W37ktIhuy3deDYdJI%2BmT19V1CTMRVlH0bPDbQgaYCbNFUbVpFOfq0siUr5U30LTLEEmYWDbWA&X-Amz-Signature=d081d0e6512bb5b99c285e34e4823b4fe839f3a34bc82fb7951c4213da6aaab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
