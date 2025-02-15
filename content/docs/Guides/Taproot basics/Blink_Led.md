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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIMAKUUT%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIE%2FlhdNYIg%2B7GJhl%2B1Dk4QzflXgKHx8BrFS6ahXuS9nTAiEAhlLyWNo4ZLrJbhUaj8sq%2BUeJfhmqdjY1nw%2BfZshuWUkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNv3e7HqNQXUBQ3GYCrcAxDgX%2Bgh1g6lm7Grgc4TBReRsci60BzRakUL%2FPDJR7V4cDs5LMyoOzhI0nDsUCAFtzjqkolpJqALLvVNwdkwee%2B1AsSxRciENgHpLVh2GcRcIUXvD8Pn7JaBukta%2B3x5lN%2BAhPziQKV0AyXeZox5sTly2C6t61nbjFKHWvXc9%2B7vxmQHfQPU2mMOHv%2FBLe3eFQvmPJiDM6lD8FBg8m5oaRQ4Ove94r%2Fi7IrYKu8osks0wpfM85eZ47KoFezROOFAenU%2F7%2BwcxVr%2B4FKQSGMmtBipL4zS6fnOvZQyMs%2FmdZJLJmdUlhgkNkKx9b8MffHogddTDFL8GTyQTdY3ePzT5QDjc%2Fu7nawocB7FtStMCfy2dq%2Bw6tMfaw31eBp4VfLHvbLhil27uhmoqaJCngzDTKw%2FlazRTpx7XnxI9O8EOnPq3%2FF4%2BRYCiYRYKdICMccJinnCwAAUwc79blaEftZO%2BH0RqsyFfdYNLvMJ1yGELSp3Jf9S4kbzhAD4TdJVjWskQP6Y8pUkvs88XmsXzutnO0RdKXM2T2%2FMb0GpflfA%2FjJYbkKncgMIixDGi4tw3VSBs2CrJuVW%2FgcWuofvsej5CGjP8y36CfN2ipWzbfpSBNEg%2B2Cej%2BPMNPNNDP6wMPDFwr0GOqUB36zg3fQ50iEanx81So%2BHAIG%2F48gv2%2BOyGNR9NAfD%2FseFKpIc2Of4dnbUn73NGINMTOVsIaTysDmMQ%2By24%2BruqGXyG0I8AFn8C7PsRZHGz82EH8NbVsRMyXQ5k%2Fcbqx4pH5bqRVnmeFsBaEqoPUT0dJ9EMD7DlP3WdNcufYyLKwm%2B9bmUfjWLg8axpx7xfSlfZ4MXhnjYKmXZOOSXuL7USxs0vg03&X-Amz-Signature=e468a52e0a9e1a049a01a0de08ffa7888d43c17bda2403e4c98be02a62409cf3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KPVTUJD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBtym6zZrKFzi5ZLzpBcGvVwGQOyjuoELDQto9%2FmazO5AiEAmi3e1iyXz1G6iK994e%2FokZwZrnXEreuLoWwyK%2B7ymAYq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDBCvwvn6VQLNCdv5ZCrcA1ZZjMxPECBFIIWhBv17cU03WyzcFp1L4CM%2FkP3cj18%2B3gqLug6j1SCtl8f5A8NmAPx%2B0haCrJ%2B3So1%2BY2hHJGVRbzNKsB9V5ZFPR%2BE2db1eti%2FJpNAM7Tp%2BSjB%2BVNEd2OYgMe77iRYBGVs1gZPOn4GPRdM2hV7TKdq0U7rz5r62WDSMhR3WJtqFmCHg%2FDg2X7f%2FsZoOxEBDufgs2RWFoBTuYif9j7DdsGZoVc5wnSRH9r7KJUZ9D5JX0AwDItXp740wZqiTVocxIUqlnhEVghk7%2B4uJjqtywWsXWyJHn3dwnJff6UJ%2F9Au24h01bOocYm%2BTGJy3HQABce378iMXKsVOXh0S9viitZuebrAVycgmN9lY9UXEfeZBX8SfVGc26JLuo5kboEUWy8YZ6djVqiCkl%2Bz9apGRD4rd4wKY%2BekNoFR0ZaB5FHTOZzS9l%2F8nmKkFti%2FfCJLe1OkL5VPrrSzX%2FHDZ0OZ3u5XgZfbVWZhU%2BBT%2BxHTroY9QlNhF%2FA%2Bi%2Fhdk6a3uS72fDKsk31LzXIuv%2BKbhL5aWPTU%2FJaFjKpbCObmN47iWHcZu5qy05RNS8bsEwuldlF6nBBEhmoqHwjE5WQlZes8UuvZgHs77dezCmuDUdutO4ad3szhaMMvHwr0GOqUBAtJLaN7OJYhz4yl3Fqmiyh0fidDgFFw88GA4YfliVOev2Zp6BbjaKgbD7Gqn9kR1LdZ3TmL3w4x1pX9BcHaLtQQoAggcD7LLKSU5iBzRASD9n1UhKflj%2FZ801hsAGcU4dYC0f0MUGVejNgAmslB7aWiSMAaJOmWi4L%2FbdWgqhXue3hRiYwZGJEVRIAyHZxUHyO0iHuEauEA3aTbYZaanKBo5tDD8&X-Amz-Signature=8caad3d822d8ac81620ce1e0e45493636251d06e12f143609d86a74cac0b538c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
