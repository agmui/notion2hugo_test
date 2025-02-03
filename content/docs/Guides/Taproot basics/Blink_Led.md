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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN7YXEZD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR1taT02BzYsRzee082U6VLajaHij5tVzxVLXSDqovMAIhALSdZnMuZmJOrSDEHA%2F3vEgAmm3ij%2FCFtoJwAVYjMX%2FTKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWR8AaTSWIwwDyDH4q3ANYPsxWRDkPPUKahNltmSN7VBEVCH8BOYLkDSlkJY5jtrghnvd6Bs3x8lniLNoc87rGULpDM%2Bc3IqwnvE8i5hVtSsh6N5%2FZo0NRLctShoKlAQgWfYrUJK1cIfOMivJrHZFzYYdoQ5IHOCt8Yikhp8HVXY3lu31OHEcyZLq0tKqzwxLgpE9Ifa5i9WTdt4k4hZeX%2B8w5hZdkK9MhNOEmgzsOtX0XyJ4sFUlfy26kxBlCGkdPMEFZrT0ZBi3InNBSmVQTVnsuHVTGmiTOgBod6p0YiXs8dfyNwihAB7AS5dt7sQ2YpPDz%2B9DGEGAAEIHtdmIoFj3NU9DMfjpm5VWYQQWVqyQqxT0ZVLkDJOyIx7j3m5SgU1JDpNTPNuaH8dhyAgGYqKFkmJ4wXffAxpcAg0jMZuj71NvzyzKoKL0%2FtGCAJFSjlC%2BmqhYqkScUDLP63Tyw5P3pdM4KRM446yxegevVag%2FfkRXPSM2OlPNJTNAc1h9V%2BcZtVUGKlUbyHqDAf8U5%2FRYiUFNwF0ZEO66WODq4shmMzx0IyFF6spvjnYLQLEF1CxQDMYWMO1nwugzLKR%2Fra%2B8oWnuHBrMTLgWdp97ERE0ttHFwhcYSZF8xcjenHQO5PYHNZP1m2L4fXTDKu4G9BjqkAWApTQcInChECja6HF485VBKXTeqh7633EJLdQ5qZ8tXUrhEJJd%2FZepxRGyJN4dhrkpH2zkaFftKLLafhoZmkmNMrbcS4SaeQOnHVDfFZ%2FrEctXipqj2De2srll%2FAs2ZoOarkNwJrppJezSgiKlv4D9PgXlY4rOucZT9tsGdSe4f66fZRWZjjdVfvQDsH8YDY3ieOnU%2FtJrjVmaqsop0ZrSfWbAF&X-Amz-Signature=bca727fbe0c6b3899ce5afcd49d43495d86a107a579e62e186618139a98ead92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWWWV4QX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T070104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBULvGPbjqftbStn%2Bvp33OB4KhHDnc3Gj%2FrJYvEDeyp0AiBdis0b36%2FdkqJTkVMQgQU4tasfqzNEnMAXm0I%2BctpAWCqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVGBf3V5kvB9qYI38KtwDfxevbErTG2FXDN0HIVD7ZHdVSqX%2B6iEH8sYuqRDcr1idbNiLKcZLH%2B0J%2F9Feev7LS5%2BTNh39rzEpO40MVISN5kjxTp22i8RIkOVruZrI44hSIAcRizLrQbc3VNnoeRa%2FlB7KiOcSY9ReHN4TTeKsxUxRK86ukxBFz%2BwB4RKMLjLeF%2B6u46tVxqdW2Owwlc8q41ERZ2WibdseL6n6UhIF2q2BT76cJ40%2BjEhS1JNz9I87U6YXITv45n5jyrIeznI0tLuFKS3PB713kMuQGiaIwH%2Fmoir5oWWrzdmKY38l2RiYN8yHv9W6OSLz9BWxxANrTWnuB1GSBfqY1aNPwdYEU%2BoFCSplkFHjv%2FxeuWIFYsRc9WO%2FoY120Qq%2FzgizWwNKKQ83JotLgM3S9cZvk3PemBxUJjUlJ0mlB4Q99mLcVrovun00xr66r63LPCb0T9vvH9KH3bZPtTTpVmjyfP8P0E8QnHryFdiXe%2FMj4xHSftYv6Co24Bu%2FIuReVSaRmLIZ%2FJ1lAQXlz93sbxEkRw9bQEYu%2FwAWd2ZOXvKbytV7vZwBZVlbQbjv3Jasu7aRrsf1o%2FWLVIunPc69a%2BGsu%2BG%2F4E2vCQn6DgSipeseTf3w3pjmUa3i5GpiurIsn6Aw0ruBvQY6pgEecJ5LDNcEwhTLiKsB7Iv40yO39fLiemTONAdBn2h3ARVZD7VI1toi8DgniTst0t%2FExX2OFGts0z2uBrrR8a%2BZ%2Bo5061ANrO61t8%2BJ7l7pGntPby%2Bre8wUUuVbii7bf%2BPR7zlL8ZT3%2F%2Fk3jBoITjsBdlTkkWDAQUf9yxCh%2FJzl9Tx4101zQ9Xg0c1tsYDTt8Apn6lzsJ4mC97hW3SjYziU%2BtFd6qyi&X-Amz-Signature=35386dd227b3cb8dd4a63b753d2794d5f8fa23ad586c4a68cd479d5787eb0d25&X-Amz-SignedHeaders=host&x-id=GetObject)

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
