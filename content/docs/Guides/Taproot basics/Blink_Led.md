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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6U3X5ZN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKj%2FFeTRxmz3d2m%2FmW6oGjnLVs1V7znZbPpxgo7e2bLQIhAK%2B6lTcYjPiY0Pjq0VYmU%2Bgx8aWtNAOMzJR9RU918v7LKv8DCB0QABoMNjM3NDIzMTgzODA1IgxMZAIeBA7LI2Sq8F8q3AN0m5FfqDKacVUc%2B4crtaIXIL6eAmePLFLByMhYWyR%2FtICRJ9Guor4qSBKA%2F0cQ%2BLPW1NnUXnZCEI4jWFqiiIzMozI4nzKoNOG%2Ffxl3xWnLZX0ljqm%2BP6aYNzkSbYpu01KccnFDz%2FKV1nYEMdhpHxKX%2BtsQB3JbouAD%2Fh7whNm0dzU82Vt0IwZXAVT%2Bzu3STx5QYUbnfIijdy1q5hjrP17HFhx4pZ7jUcQBGUe59B8nAtJyvQ%2BYfxJhJ2IqPZ3xBgBKjQQmRM%2FcZouRNLukfGo9ThXVJzm87Smcq6REsyYTjj7gD2xua%2FeoBeoQ6kDltufVorRlDcXk7c2dcAagnZQp7RnSnaqvF0k1fvzKGitijPvUTBN1Ij%2BKgSjAP5a7UeBVBPRkiNIGJeg%2BHSA8R2oJ0K%2F9n%2FXVaBL9MYqxg5TxVHjhBRdNZCs8yElI5Q6sTK7dbw3HpuXuo6XFzmN%2BAivWBnPFVecdWryeLWCw9r%2FavmFjxrmw4scygMJg5G9akMm2OUVWSNPQjSb1RmwPw1RPckXnh2CLch2kQD%2BTvELyDqNSIJLz3BKOXAj3OFOpA9RubX2GHs9BNGpZXZBbC0sn9Op3aFUH5sThGh4lEZvQ%2FFzsXAdujvXdLkusKjDFw9e%2BBjqkAYeAeJjCZyWUkHdrhd4LAAS93VU8gN9OvZQdVZWOi9KZe%2Bcmp%2F9Q6KWGO2seKPIq9dOvJZTPksoJ26qrwyB5SjsshunbLpm7P8%2FtFU8qrxI09n5Hk9NFzjPj13vhG3pvlPlTh433Q2NaWPESySYYrF3N4NiGKi%2BrUWvgJaz8rBSYSFnSkXk63biknniUehpB%2Fq8C5cl4AmauZLAzGabQDHBWms0O&X-Amz-Signature=4221fdf871e8f4395435dfb83aa90dd29116bc82aefacccf7bb5483c2595f44b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C4J7RPW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T210132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxefq1ndh6JRWvjaxlUuxjYuwH8fPUGHQm2Vfwd0nk8gIhAKUtmATMn%2FU74He%2B3JGBdkoOlxEUqAlzWiC6RM5IHyU0Kv8DCB4QABoMNjM3NDIzMTgzODA1Igz4%2FMpRdtOyR%2FwDaH4q3ANX6042vU6yNSQzKayYui2uZqRyFj3j2jl3Oa%2FOTJmJVuVod1wdh4d%2BKhYfD7a6c4xpeY3320r2V41UHAYAlhL7nedg%2FyByTAv3EvbTv6OIDC8B5zIUfR%2Bs%2FvIqFCUWbisbrQi0EPG42lUCe4j1hTvW%2FxuOi4VsNapcRNxjef3mvIuLgOlAB2uHJWmnTknxynyt3fT8%2BnsZPDH6g7b97dipjzXNyCNUEo9c2Qcmk6yTViNvXa5XuLqJT%2Bwypps9o27IOgbqftqRXApw4pn2%2BbSAiKHbhQC%2BOUbivtStk1H8FP9DqP90BLw1YtckJ7msP4wNFoyGLaiMl0rwZ4kAg8YoBeHHH%2B5h5d8iFyshpRTXfKrxiTSrNGm%2F5ZlP3SFxlKeO4wyUK6BUf7oWZMD%2FvJ1JoY7y9MmT2hEFDNog7D2qc514EiztZ1SLv%2BSfBZcMIz8YAvNeBetHvFoSGEvK95nF6KfdqWqrzGzEentm6xPJ%2FfZahd91CuGQhxsD5i68DuQTN5lXURx4l0K6QwsUUxPa7xWHnhpGj6eOgKO%2FBY3TC5R7w4sRekG99%2F154Ytq1%2Fmn70ENT5i%2BSZ%2BsLjc1XXCgaMx5I2bZIjkPV4A6eggEZNsZQ18tvv%2FXx7pcMDDEw9e%2BBjqkAfxnZ0AQPBEf%2BWt3rOJIBrFzrzouekpfNd84KwPhp%2BnIazE5q2PMvhNjb0KREoiYTJ3oL7JMF32Cf2T5Ev9uPN5wD3rmUfBtWgi76S0wFV6kG75b2rM8rbNY1OlOKUV0RI2NUpHOt%2BM2C63YoWbValgRhT1zHJ5ZlJQno%2F6WopsgTT2eACOxysXhKlApNfSUDWd4fVJ716ltfWFgwD3pJ3kIq5cv&X-Amz-Signature=2e69963e7a7a09621084925f4f3a4af382fe3bdd71ca4e399c1d459f1ffb090a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
