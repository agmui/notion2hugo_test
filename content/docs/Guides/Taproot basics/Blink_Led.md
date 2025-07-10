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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466272VMD6P%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDaLo3H%2Fn6CK45GpxS3k%2FPCSw4jFWFrCAuhZUDkZ%2Bq9yAiAMawHEBPOxNRcfsFmyrEFjK3HalmpmXnRpkW8JBMGqMSqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaWQ4VdPkM%2B4er7R%2BKtwD91OXbGtu8Wo0DGTlAhd8TCPcc%2FDzdjyllWqt6J2quTTAmpLxuWWntiIIEHtZivLkdVBVMpeqKkAHU81BLONC8i8LuAMxUZULk8uiyS6xkm9kRC8Xcu%2FvhdnTCqrvC7nUC7Ld34ggPHt7e3MxKI4Sf1s4QzpyYFHU%2FE6D198E1EirM0rJBZHnM0T%2FRbJjEpZHVDm98WDu9pGT3ENal2Pdrr3F8sJ7m8aQOZzrFtZ2qf3JtT7KxyrU9s6JhP1AmIqzHk%2BaQAnIZe8MMFKx9a9T2d3aDm88H5UHpWxyfwtpGZReLOYPIWGoTZMhqDghj793LlpN6E%2B7CGh1d0ZPftQ3w6%2B9oiKBZV7ZpF%2FmV6iQFsdOgUk4zuy%2BbrNnCW%2BdS5kPPSXUCWqOg6QKjWHAGdNaBS%2Fc3OVmGugnYiXhva%2FGnLEoiF%2FlnwtKXwQf3leRSJd0oh6TEvYMWpt6N8GjbzZvX82H8uYqse80e4m69GAKzYfkXedlN1GUCAjo2sy5hDSiBMxwaNAlxg%2FM5pVpCHk2Ad%2BwaLdgGsPRH2sCb%2BFjckn6zzvgHF7xstY842apcpbSXB42rsN2ZmlLG4d2ufOBEJ2rBm6Xe6SECZgXYpXHoG8l2dwaokGC74%2F68CEw2ai%2FwwY6pgE%2Fzx3I1YyxrxKIBLKowQzHx4Gz26cQTBLVWqgL21D4aV0dAzSOWyF%2BWzIRDbaGoNe4UX9PZauGUxnxRGhb%2BYNtLh3gLXBzKbBG0kYCzecAdbTA1tW7WYbP%2FTbHdKuOZAhci7oVtp9hZWrBsjeHnAAOy4bYBONtHQn1BU2IGPEvQEf6qAxniVR%2BXwz8czLeYYvZyG%2BsymA0P9Z9ILZzhEcNwGYmCPzk&X-Amz-Signature=945d304643ded462e2536eadeccf92f410fb753e753f1b5cec623ba9b66e8ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WBHHOMC%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqCKwwTunfd8mz0aYcOCv7ds%2FcU19XSkF1dJhsWSg6ngIhAOiUKhsra%2FHYl%2Fqd1AWax3r5MVIfza%2BdauuaIuYU7D5%2BKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyj%2B%2B8w%2Fndt6%2F%2FOAWwq3AMyqbeTA%2BQFw6R5%2Fvy%2BzcBAsvXohSnP3lHB3lI%2B%2FKL5PiE113qeivMwRbC3qHTzaNPnFuc%2Ff9bNVJwPg6QVM2C%2FHFQzcc%2BPPk09%2F2XmITGATmqs8tWFGdXr98SdZ1OiqsRo5w5YpVOi653rZIS2fIsyFQjgX0UaA31AIMmt2YXuEEqVHe3AqP5WYqnMOmfJbWkFAI5xXYEorv3rWeOeA6fguunndM41CUw%2B%2BKO47pb2ujbEyiunEvuNe2BYXVL4%2FA3TFDJFHdTeMfwans1woj1o82eMTF3oFkMQ%2FulEZxWyOr6uzW8YEAAeIxG9qVOrVPlAZ1F2xWxTNllaWclBMwjQ7vyisGX9pevr7PmVOouPWPd4cFkUAq2bb%2FMBXWlwSQhBDH7KmTJGmfEjFp4%2BQ0lygQhIbB7LhxPXsbP%2B4P%2BurpNGxkJzp1B%2BbN7C9Y5fndZUE0h8y5hV%2F5UGaFgmx3QzExuINYJDdPC80SvGlDVzjhOusCXVpAfLm6%2BkFV60NgKVj8dob3vJcxWnIjYxPBlR9wqz0%2FXdjTCPpq4Q71OcNAPO0YT245tcGz6iLVNTy%2BTMeFcQavuJRzjwvuvn4plmX2DltNuaPUs8zHofwz1mS0aKeNxIEAMehCBEhjCBqL%2FDBjqkAY3lZTWV%2BOwhmVumFlbjohCYiDNBrnkov8NX0OEJtQEjX3iz3LJ6KgSvxvAUeMraGcGGErJLhc0KCyJ2lStsGdumcHTzJaFpi9sox35MRVAvbUmSW6EEve2EH04nW2HJbpcA8ZWcyoHxomzHpXZemCRHckjFQR%2FONZselJutLF1YS0%2BWoNYlMmWKJJWrv6b%2B3eak8%2FFdXZBYeCzNH5XrvDPkQK4m&X-Amz-Signature=664ecc2830f6c7ac5c6ef7e669b0b2f937598b1b8e8fe3d88421817487578582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
