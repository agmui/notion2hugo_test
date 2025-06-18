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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLRTULE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk5yF3w6WR0aRS8PQqaRbli6s0MKpW3WW7VNoQVJueuQIhAMGQxz4DDk6ZuKfH7A7vn5YCUIBJcTFP93%2BDZhiTo7M5KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgeAA4b1bV2S3E5WIq3ANSBvEKSze0KbjeEimC2zkmkE0hn2zTslvhMoam8oXBTwtjNv6ZG39klmlqPiD%2BPdebvSfDwYkWlNb77J073o7y6uVVEq%2BXdtTnCXTzxdamnrhNLMf6cv%2BFcnBYvCezTLq3doLu6%2Fe3W892uN%2FQEIgssmQ4nA8mmwWebOKGdG3ytOpof9SGUhxldH1n%2BtJBdX9%2FI%2BnFvCN%2BrySiZPfqFqwHcwL%2FzYS2rhcjdbTdroxrOA53fo3CSCdV4of0vQevKJa0COauf9dGV2vFK8rYX4qUzy0M9nSVUBRpApenMoJd1WCHkhVAQXxXQH43JJx1gW7DgvNVi%2F5%2BQRNatIiTb%2FPt5mV8y1urMaHPbLRFdG3cE5CVrZcK9gTIzwfH716oMeUUh30sLvOIKhiHpS%2Fk0vZfDAdLOVSaSAbFavRp9cEXaX0%2BWY1m7l22M4Af%2BWs%2BKyRlhK43F9GGPzca1uQjBL0ogYCL2Cv%2FME3kFHtYU%2BuRYGTL5Jsx7YuiF9er8l8CAicnK9v%2BlqCP1Nzn1kFSbhR6SK%2F1MyGZIY2SJi60IuGngI7eEFDmfIthF%2FqRJ5uQAq3pr1mSpSBnQyJjO7P7XOe0qeEfrRZp7XnEni6mNsIcsXzC%2BDQ9K7sljJbSpTC2ocjCBjqkAT%2B3913vl5I0KNJJm7rU%2Bh5YRLYkGEnxiRNs3Y9RSuTam8a667zYaK2QYD4BIRknWBCpLKDOCLrBs3aSShZdop3Q%2B7DJDfQCYrUu8cDIRp8Rs7GKXY2tu8jTBvLkoBaxoGer%2Bd0dXYZTSFLiM2xqrHOFWhaMPTw25JiYh49OUXaStt60ob5kqbe6ldxxBbePjt3H3%2FZq6MxKc6WeX5GeoeJ1%2BxtM&X-Amz-Signature=bca6d528b601eff6584233fc4da44786a317fed368aab0c7aff42ff4df21ee3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDCMRH7E%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T023037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrFNeTdxgUg1NuVvgRep%2BlBo2cSANsB2DXDezLzl2ejQIhAOg4aOl4bFvsOuw7KWb1KtR7gV1o7EYwcbYwjfmExZFnKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9qVPxMuMm4KsAwZUq3ANA73%2FBhWa0kXna90IgY9AFDPghJUuSSZSC%2F36iZorDRQqn6PoT3Kt1oGFYDm%2FW7z%2BrWiI21tEGTaFzldZospGwgbFQDhr%2BpmHiZKezKcA086Th4mRExsnCVMfUdDiM821PVlZh3m26sOlrmJxUpKYsLs%2FrKSBfr2GypadMz%2BxajziVKVfV84NiphWb4xTx76beDGpS9rdxuSpLLqyox9cwdjSe9k3rfRnv%2FOq6O3WfBpE5axQsvtTWynWldabg58mGXZqH7h22YflrfgU71Dj0Q%2Ba7ZXthR%2F9w7ZwUyXcUOcwsA7jA7bVmAvJq8IQ%2BI29cHHQ%2Bab98GhRiiy2%2FdH1bxfzrHxxn0O72aQNhwW4rq%2FdlYsBK0%2Fe2oU1e1qBLgmbBfpSHp%2BXbRXNdPfrWKZIu6nKcvQKW%2FLKS6PIb5fstP%2FIBqQBzKBUlVQ4sbKCfJVE2ZxwYgkJNcAsOyf%2FfNKrsVCL8YDg4FjYj38mtE3heFu%2BqXkYo82fk4svQif4UZ%2Be9b6i7P64FQy1ON2lsqV9JanCpU4iddCsQTszoY7eeLvnha1j9F%2F3nCzIdMK%2F6p0pkxsP6VCHg%2FtfnNITuJLeTlauUlr1UnccUtCcpy%2FpCLu1EAbTw8epVCPxuzzClocjCBjqkAfz2k%2BPwLfo4UlLloIQNauTfgtO854ctOGEXLeWA7hF6Ayuc54qU4wpweMrt%2Fl2xrSwYwXxORIHnIk73GJDogkOVm0rMMse0shA4SVD%2BOWvd1N8cSZmijYXux9P72EySw8XK6yVacXrxQJXkQKVO5N1tV%2FBmOkYQAmo%2Fj%2FE09ty8d23ZJxEv%2Fw0qP9OB2jZU3el3TkYFPS3GkshlA77fNI7N%2Fq06&X-Amz-Signature=50b6ade24dc92d0fd081d0c8633c861adc076b79768a6e3b01189448ebbf200b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
