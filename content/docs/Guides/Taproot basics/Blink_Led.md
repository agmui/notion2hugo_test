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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A54RNF3%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5hfHhjIKksn9d0F%2FCXOuGPw1G1TmaE%2FzXGt8GiGr28wIhAKdZOjGzxkv9c3OTKMqd4%2FeZK5FinKju4t0NtpJ8ZtLLKv8DCFwQABoMNjM3NDIzMTgzODA1IgyqInawdJ9dBHBg7mAq3AOZaf7jMSY0BNjvaxBZ3yjVEuJmcgrVMYVMcTdOwhi8xQDJ%2B6qyc3xY1X9fCv%2BSKqXQOcrhytveUekf267%2FdSCYP56EQZPuuUDgjUBbgd4qRf4ixEgu8wmLUexEG3aTFXk888wP6DUcmH3Qsq%2FYmA8%2BKO%2FLciMQ33jLZ2ZgOhTd5QPxvLuoUj7nzu6MQhhcDUfBCdP9lsgtSlviaHdXSVHyHeygOjfW0p6NqPro0zsygNR6to7KPpZ%2FB6rRV7D%2FcJLkJNs%2FNq2kWhC14PMuVk%2FV71g5tj1HzB2N6w2D8r9ngs7NEo%2FiIdT70GQa7ZtfxaBNGOU8kfXGN9QJPvmsKIBBJi7gSQJqVINF3gvxKzIQRl9WDCWnJKuu0tcqpdUqH89CsyhLaY8EEoZ9MC0aKK5doBYqTpdvpfUVnaBwpRI5CdIcqJneuBgHL5Zf9%2B0MbJ1R79WF%2Fiutbqu%2FatioBySx2wuX895LdsFGi9kUcS5G7edizAqbYy1lgvv5x1jeo19dD4MybzN9OME1pIRQrLh8rHpwgMj0pQ3C2PRALKkxLna3Tk04MBEW%2FXGSVF4FQHULbNabU7znDd4jAXBZGFTegtaYxM6IP6kP4My4a1msCg05lLBggBD97iKF2TDz6ezABjqkAX0fL633lHyXz%2FAqw3i5WhDSL%2FFKqbGBNoXN3l6WJS3TP7PRLx39ovwY7Q7bbd%2BRjIc4X1mhOkxq6YII1MNV0gdfFr2OMFVTMH2D2m7TKtVfuycAliwen1mj5F2SJBiFGR%2BHacvgilR8s1cXcCcfOycAizXg3DBqUrAdhH1U9UNAaxjg0HnYC%2FRBIp9Msp5q34PkgdmP0defyaNZCat45GS8R0jk&X-Amz-Signature=012dfcd58340f4befb5713c9ee4bbd85c540dba60d063f56ca7295252172ee35&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVWKQO4%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgJ%2FyesODTl9bFh68kUOPNvBux68F%2FTRRqpWbwmH9h7AiEAhuW2wGIafPLmVANRZ92VdagXhBvaotb5jXgo7JiMVSkq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIUzTOJAmbVqNAhjQyrcA4i4%2FBABTCEXLulg%2BxMRn7JbUX9nocsE9tPi2ddny%2BddmhHfG3HaDzeb4T3LVTFRavFHDsaNNploPV4S4hXdS1SEzBxIzHfvTj2SYB07JFpHB1DKtHiKNvNALxWo0di13P8Wr1kqPzJv%2B46kc%2BwBNhWSsPR0h6PKUga1zXrhOIbIRRCS%2BFH2ZsGwpW9%2BZlHUn3FGyGWLuVm5WhdtSwvJTFdNh8sqwaOY39819LrQ%2FGMHTpOzgVCv3V5k60jbgeYYvg6JWI%2FWWiiWAmD4fRI7qJfQEx%2B3OnQX0BLhBuTTgkfw%2BEwjwaHgky%2FJXymOmCqwo6VN8bBueLoRRtgV9oHqa1JwnSqjxf8KlDrR9fP6U3g5V1Y7wiGw2E0VcYheHRY1tnl5nGqE%2ByXBAvl3k0HvfWMQO3FdCeHJghjwLrug93%2FUBzDK3in6JEjzLt%2FBdhWcugg%2BSFVS99EJ2t5jIr0hMpC62aU4K3Kd4%2B3t1VNDgBe2Ch7nkBdoAWhuwzUA%2BxbcRvuVc12vzyOrJGKzhn9THc0UjQXtCBEPw9dltoCBFRDVVf8hPQDxj9pkaXA7Qq4iquy00zwll4wK31y4ondtiSubYkkwCpTN5WjdTUuldi5lIG5LlZS6Tk76CsbAMObp7MAGOqUBOZT7bK6srWFU9vmxrLfs7jmh%2FqYA724SihFbIeQg6vyMOhv71zi0s7r3qdgFXFWk5yPBUSGf4cn%2BqEo1VJUANDzgvoE45RmbvI0xNGM8wqQSDVDud9AJuOqpqhoUPv2a7QWmXXhubM5V8KtVxjO7TAkOXnkU%2Bue%2FvF2q8kCd9LeWfQFDFTczF5fAeWrczyz%2FDbvLUQrF3JId4lhQQl2C6yCfDSBh&X-Amz-Signature=013f7e0338a8cdd84b17ea95a9edec9dd489cf144b9bf8bec803e18b29dfd017&X-Amz-SignedHeaders=host&x-id=GetObject)

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
