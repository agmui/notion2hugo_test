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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP5QANVI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbwVztMX4X2mFVzf%2FTbEDne5ruFVB3suCXPF2Oeiv7aAiEAm%2BI5mDwIzGIkPNv%2Fc6iDtiZ4RDQJFKJjP7eI2ezf3RMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5YBz5f4IuXQBE8WyrcA%2BbKqFnzkzDhSUttzVh9XxqMjLbgBESN7BMXhFCodBOLPpGcOVK%2BjeuiOcmPoDk35XwjSyWtXUD4UsVnMn1cSTsflCSiKVjOThydcBqmT21uBZtxA%2BtdhdCGk1d%2FfOL0RRTleUWrwl4zn7vrTxTLx5VyvzYDcY6dSLd3Kg9%2FQK8KPJvHFjVGtOfFhXxOq3nGQwpP9f5soZfWL9fo4m6kSjcma8ONe3AXZad51N0V0uuhdAXy8pOgGNAE%2FQly%2FhW0Y4JRWHNM9dkufOcDWtcKmSETqTobxCJJPZ64JQk%2BBfusE8b5rXPs3hbxVLiJ9ITuxVBemT956WbjZJGVnwaXoglupRShCkDttr5jscY3jyITUJbjdn1Kwx%2FJq4z%2Fxz3FgXYtDFnkXZYAU0FaY0cXiF4%2F%2Fh7fRDGmxTe0q%2BDOXZDREfBgM3fh2ZXP1O5RvBL8nJD29EbRrky812R0DmYSuFiQcBssQWefaQ320va1FSM7j8Oim3%2FCEq%2BULeDGS8QWod5FKEtxzzOUWD7GYeYS7eZ2BZ0At%2FfFw9qAUjRUHL%2BlBMucstlalYowbkH3hNuoIXJuSRaKmBMyR83wXF4SDtNEnt2ce68OmbM5Jo5je3JMzWAyYy6yKGL11kdCMImem8IGOqUBQxcCHeHPZfviOznbt8Z7Dc3N3ylkZOqK3ltiKmaFYGvtLNpzc8%2FOssPEID%2F2AyOa39SLVdhNze2A1ZacYnWJtq42jyveXsGRnMZpFZf2gdSBjK3eLRAnU%2FcfYo11dgfgtXZcY5UCS%2BToHkNfCfYjvtghZ3kdZJ94FCiEucS3kng83WrrPRPQgaZr05cvLqYXalRvPZ87bpXgMsn4md48EpailuDW&X-Amz-Signature=3e62e2b16e6d02fe42b3170d47f65a57549413bf16b8e0978ed1d295e5053c76&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRHCW2NX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqRBatFo6VWWqrnVLtvJ%2FW5NVi%2FEDtOwCPVoh56G4loAiEAtB%2FiB3rXrL%2B8AVqsmKCRBkq1dValSe4FpLug4TQsfagqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA66i71WESScN%2BPXuSrcA7n%2ByodTm8y9Fix6CPN%2FONpVRcA9OYhRul4C5eHjom%2FqfvUX0L26wbF%2F9d5XGBVZXoFPS4Ca3icFbi1KcT2ONnsFRT18voAj6eaxkKk0RSAId9qnx7FgO6mRYcRLnNOj4BZ4XjL71BiN2qSL07RqxTOqWePn5UdopsySTSIHeNjjiYFwIKhFImjx6vHFtTjS%2FhH0qmhXmaclGvnxox8UiST7Tyw0FGoGmfefpDd4bE2%2FXLL97Ar7jYVAdLjsQYnjrnROa31NvJdfCjH7obslcMpN2RRrwM%2BIZBCuevuR%2F8rYXmogz4IwfgCobNv%2BVbpNlMDIlKMqcYOoPU7rXfxcn8uvs2SJ21L4Eznf33SIVx%2FhHgrv47yWe02tUbN%2F1DcMYGsUG8F5IoDuJfHPwrEwRStuyaiuYB3JRzfkT0TXj6D0zM4XZdlPfNUhlc2u%2B9%2FtN8pHbE3Hcr44IoQs1%2FLVtRcJrWig3eYF8DdjgtqcCo1IWipI2Otkyhxue2LFuBpej2sKXC7lGbwcnwvUpiGK%2BppOr5O45TEQC3sU9TZB%2BcfpTFn8JpiRW3Aud0aiblnkekinQgwVcFpZYI1Nm9myk1Kzpi3ifGCgP3Px2pO%2FVl%2FXUHEFWEYJ3tiMqqrfMIqem8IGOqUBHXJMH6ghik2ZxN1iISOnhtWlV1OWInRjsAY%2BLICNOQzDJxeIA0HYxxk4pH4bGunmgxCLs9nlZMIlWJ%2BgBs%2F%2BfqczFHGZxnGiSkK%2BQOljLBH6hn1C6cCxlDv8XWJlK5mxE87hiZnDhJrzt7io%2F1r3QWzIr5%2BjxWoVQG1gE2qWCeg6FG3TmxTLUbnCgIz9qaa6kxLcNJ1DGIbGsSQRdy3HUKmnCdk9&X-Amz-Signature=0be0c11275aa440c2cae6c6da2b4a41326b9332fa33fbb21d4720fd501911263&X-Amz-SignedHeaders=host&x-id=GetObject)

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
