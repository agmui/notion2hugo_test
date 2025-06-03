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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKD33WEC%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCOGFOBlfX3%2BykPKLD2JYBK4WtirOXXMDBwydtdZOPG8gIgATesz0BE%2BKxA4yDd5Fk7AV2bTIj%2FqR9f3XsjvvrwAuEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDO6bRMZwrOXmn2W%2B%2FyrcA%2BJpdVM1UF7ywNnvtFvfSff%2Fy9lshT%2BcthCZR9XF7iDJXfToMGycmQqXo226EdHqU%2FTJcM1GgQcl01GxEmo1Hl1H3jmy2V68lL9dWinWvAMjvevaYZWcT%2FdwMYgeMtvSU9L84ZyDWtU4oHsShxAlUt53PSJ%2F6UE1DDZH5CMdw3J5stbqq5DuNRVVlzHmv2ro7y%2ByV5fx2a4SsBFCDrEMMcMe%2FUeq%2BJW593nkug2%2B%2BF%2Bd8TA1JG4LVD6RUNZvkEyJJxrJA89dl9pymWk9yVevLzYOQJr6FElJzP5hFQMIhMDRGT0t8z%2BWr6F%2FYVUxGT2YFRfl0peh5rh8ZvdMGpsv3gvAHp3VsGLBRgc0A63Rs0uWx4g6lAy%2B9eaVfyQay3PbH4LN%2BbSaGZ%2FsaOTOYadV%2ByzNjvEbSrSkABRtKZxFvjSxSVlhwfVV%2BNIy4ikg%2FNH60B5cgP8wJmvR1dSF8CKcNMNrU3GdGj%2FoQh1gL5qBPEIBtmG6LHMR0nBQQZG%2F8jbIr0CC8IRexKpD9UTVoIx6z2fx5smZqlBMIMig1kB9Timb1zEHqzKMjymlC%2B4rsGGWrCaCwYyxKF%2F3W7FncpDxB4%2F7XEMCFSTqHtUATLjnSLDpG8Z%2FUjPN9HH%2FuouXMOKF%2FcEGOqUBhXkjfnPAawLCqjUiZNimYJibanNeG%2BXSLpDm6w4etdRHQo4BixJycGv5MsjBU%2BgCI3%2BOKfSYg88QEHH63ZwCGYhq2jnNHo%2BRfBcg9WFtcfJF%2BhjALz2pjePk6aGa9wZXH%2BhtU24yaYP5GvTVay27vI4urJ5goSVwwJKtyPHASYF4ODoSNHZeDvsnuMwOmAlmilD9lHrG105YjdpbUl5YgQenGDeQ&X-Amz-Signature=f2b13a352566bfbb3c84f55ea64c3a3e97e5243570c1e373e7e516cfd47e4bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F23CFRH%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBSzRTw2fIimDHP6VCV7e%2BKh8UVrB4iwdldz%2B5AmuYQwAiBjUEdvGNl8d%2FivB9Mmz2pON1SPylkIdy73R26j3Y3HgCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSys5395Fq%2BzeUwuaKtwDNBRheLa4QxtfBLwrUo7XiSVlhbKoIpxGwa0NQmS6t9H%2BS6OJa5yN4PfofzcfXrRl2r1089gienbTpeB7DNdRFFV2e9N78y0%2F6OjC5IzUKCkCD8iAJjhYum5lQJvB43jWXKxwmJVxMjst6whgJLjkYQHl%2F3W%2Fwhr6SIKnDLURY8S7ZcDTdkKYMnFYzAW7%2FG4TnU7ptkdfedYEzMTZSYtMGV%2Bl%2FmoDBVO9zYm1M%2B10kY5hQMW01w3zRVwnmErd5Xe3Ie5bNXj%2BDJvubIwtTSWanoXq7IvJ82eargo%2FZ51Obs7X4ITxfLJV0KgzZlAEkBjE4XhaoEQCXTV3bo8CavXqwBxxProhjT%2FamI6edUCd1SRjRi3GgLaRGqE24jnghbg9jlsVT8QyMlZAlNF7JUWZNXvNc%2BPYTHerc%2BmMm1C5L0kv7tWYTHuGbMI1Ipt3LQZLdDpmrh2PJjCeaMmNFV%2F8WmIYs6HGmDxla2fLKGjVObpvSk%2BqK7%2B45O7Hkc5EIzl7UtMjnIqZ6puGz32k3tepSfYwOY9nydqtXa80W3AJisgPH3cf4k7zf0gHKQKlqZSQ1oKYrHEz500sxmejtnhfaNgY9jY7Dh%2BbpB9eVRu0ozfzqsf4vKCIJbzEokMwy4X9wQY6pgH9EIo7dyOzGZ%2B3RjwmH6UKl8njKrIQNgTXEtZJZC7%2FKkXXWU9qPUZw95G3aM8yqPs%2F1%2FT5gIw2IoTSB9SI%2BKhLmVf%2BYUzm48pTySclLd%2BroZThIIj%2B1mBZFoenLak3DOca0iqCpYrsXzZ%2FxaQiM%2Bqwlo1vQhCRqEymUU0q2Rd0VazJyaj1HtO5TFV7iXnxAA7%2FtCZUYLIxk%2BDg13RiVkOi2NwjGQ8C&X-Amz-Signature=44d58cda7b725758dcb20a05d78399a9ba3c5b98993a2608d3e699fb6c956e00&X-Amz-SignedHeaders=host&x-id=GetObject)

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
