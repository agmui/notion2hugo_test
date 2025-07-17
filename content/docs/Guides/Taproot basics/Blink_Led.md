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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R6KKPWV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD3jMueytzRCPT1Ua3CL%2Bb3rplydGBkEov9zzDoyt8gWAIgbpvcm8XN6VD3oy5HAvE7eldnktXudH6kuiM1D6naJQQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDD1wd9eu0Lg7Bhn2qSrcA7bN2OFhuyAOhYiooTxe4Knxk7MalXsLxbI1xT23cKTRnvdi6oIIzl7YG1sHDn2AspC3rg1iYk0%2Bcnpu1mQfAfoXvDsBBxx6DHFk%2FoTxrNa8%2BllqaO6aTTGcyY6fQBki0WwVl0b3H%2FP0A1ZR55923TYN7X6Y%2FrltTAbcE%2FoachUL2Zd1gRnVc4N7Wcq%2Fxdd%2BurriNYM4qz62%2FLUiYkfFnyl7rkQH0QdP7xfpKmtx%2Fm75NiI18%2BB5sNK6qltsbXcwvpGYau1MK20WtR3OvDK2udKRIUrjsN0UgJE3Oi2utvH1EJkuNSSdMtIwCNWEUtMvyTyOWPxkRew0whjZ3xef9Tc349Vc0xyf9o5%2FqLFdRr%2BwMlXlXphLdywmr3CsznMU0Xl5upGa%2ByLxcQw0v5IwLl5ucuPo6lJUOXkA0cwhxm854nmlXFLAp0jqOub%2BnJ247QR3QjcibYU9IaXV8SpqUFUvxBQM3N1oB403mcw7MA%2FvSYYZRTFyP55InMja2Gqz6Sa4foQf%2F8J9Zkl9kBcnCcLjv%2FAhShDIyjuJzNXdQwxLboQTZdagmqj2yjTpioEKJRR2h5aNNn9hkKfK9iw0c8UcVee1IVRbN%2BXCX6LgTQ1kTYpOI9KfjFObyjj2MLGS48MGOqUB0cLh6Ck97plpjUopXEVa5AjrU9%2BvpZRkmO4nUnK%2FvPrLc9a40ElJguDFI0K3%2Flz78ovAtsroWo1D876w%2BEQ17b%2BOfbtcC205OypaCkqLU7l6ibRD9%2FXc1SGeLdPhUjFvvTxa6qxTBg5W56mPLZ%2BmLmAeTtBZtzig92vahFLWn6hfx96i0WnCPemZOMewOPbzhUr6ga771LniBZh0lGt0rMXdfg0e&X-Amz-Signature=bce87498a2742c3f319c3cc8994dd770a32316e1d133716bee9f65ef1b838bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDWKWDA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDp6TtBzBfnZGY3DzmU6tGWSzv90qXrC27UbNH%2FnLNftAiEAsksYDapnX1FWWrzmvvwqBX2%2B84wZoC6gVBwpXJ5BC6sq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDECL%2FehnCTa3ooj%2BcircAwh21mSXBwGjncZWB6kEobwc%2Fggr2tKm6geAtfwoismKmtqHvVbItzeCGUfDQnaSXkxsLz3zwIad3ITObnAHINSp15ljtPWSWF%2BTVZAJ62A5%2BLqzzx5ZxMN33SEjlugIhbm%2FbHLJN21YVWxNjfJp1JZ10SP5eY8i7jfCv6wrZhLj2reYwfNWNd1u4YZO2cPTI1%2B8WEwI1KY3zhrpYC4MOeKRDT07NYBULF5A%2FNofcFDegLIV9ihTpDqw%2BR%2BUO7nJCwSgq79nQQViDn0p9AmQZk02TUeczLP00zVgs%2B8DMtrrR60xXk4dSZ3fsAkRDdd6hn82ABzzR7wEhxc8bseBpxR8K2%2BsJvgKkQHIEI1syF6LImySvrt7yzxrH7Tj80n%2Fm14denkcUQZYB5XSh06c8b8eT%2FKwdLKyydTS8lGbwYQrLM3r%2Biu5crDrkRtxmuMcIqHNo0iAavTZ1G4%2FKgT8qoELSQ7MEFLCmUqi68PgVbziPgCh1gcFu1ocmZYaN1dDv3fwlfimk%2FOKhaXspLMr3An5ndYf98oHg9lZd11FUrHJFcrQzKJ07SEbTpez0RER3p2kOp7UiDn66Ss271%2FY0vxG6VRnn5mZrgvRdsPkuEuW8SFskDlDT9MgDo35MLOS48MGOqUBz48%2FbHsJX6SPlLcBZmq8ti9OVCzrR4cc5A9coXgps50TWBGJ3HTt6wSfCmMFMlEYjXgiEbNIrMu%2FiGpj%2FnrJ%2FhoJCIkgrJTHpv6Ku3VLqa%2BX0aA4skclRAFmz9ewNx7DpY%2BjXcRnYvpMCxvJf%2FXDoHzllTutqxarrhaE3RCTKl%2F9EqP0ZWv4EghNF8gpAg4zN6IzjejU78mzoufdzlL1Zz23A2Nh&X-Amz-Signature=0c5800463ac6725e516b968ddc96aee383607cf7f9211c3abe86e918869c574d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
