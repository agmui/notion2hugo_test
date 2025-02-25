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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YRINDEH%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCjetrLN2u0yTYajH4DkrN0EQ8iVpTWY7xOEiP4XaTi5QIgUFmz%2FsYITqwZ2TTJ0qlbvz7E1gu9mvyIWhx8jbh2rzIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMEkxmbX590iKL5esyrcAy6ktTWXPydUwBm7WbWMO908ZZrzpSvkzD3YzKEs73j4hnu4lelBOCjM0baFnEXKbYW8fudxyQfumumatmqfUmwK%2FnPOVsa%2BJKYKyz0BDiWXukmjDueM%2FWaeWSs4e2DDfhpL%2Feppdd%2FK6msog2sOx1zR%2FgFf1850gXisqKZ5ZsdVsKkZ0%2FAnf7%2F7V8ABrGodfWqOoVSSRrBnWVWfUbf8EQWm8ZXLhLNnNcf6%2BL51hlgG0r5eWDEjSSfrGfbqW73BCRVFiZm54tyqZLMS4GtJBlYNQykzGS8ODjMYMX%2F0aQLUSeliVOIibw%2BDY5jVd4QIIbMqTzox6k73UFzr7ss2MRXBb08zPWZvFJlA1F4jRzN4D5T23P6m99BeLzt4SjuB2A8oBhwgOTs%2FVUFspn6C%2Fju4cxMW2vZZTM50YW8217fCXxSIJh6LXBLZ8W%2B4d5IEgpb8FGInp5BluCk3RAnnV74iaDoxz0%2BK%2FAenSY0hwc91eTkKgRjlO3GXRxnvlBA4M8lb%2FH9vR9KgDeBnosAfPr2AlCpIyQlB4oy2qGl4%2FBw%2FcmTr5Ifi%2BL4Xi4Oon576NuSvc6xUtdYqxJ0jZ3%2B5yfKFvm%2B%2BO9qsyiUuPc7Nb65W27mb3TImZwY%2BbzNqMPDJ9b0GOqUBXv9axwKBaDkNRaT7%2BYXY2GC1o4twFUg0kjG21zDwvGeP7s3vj%2BYKPXnlh2GIMq%2Bt7SvqOsk6Tu3uel8FrcghY4A6HulzoztpRlc1A67qi1fFGrBzQ60G58v5%2Br7fBTzY3L0duEm8H2ifdIY7Yio1N5tGU840Uao3IiW2RraLAk%2FoUqqS4Y3XpjW2wmyqvIwf3J3EHi1b%2BBgGgR%2B42baEAH5MXzMf&X-Amz-Signature=24a7817ddd394111579b0aa522ad9cbf428a5a76b58883615be06c27cb874c67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPGZDGFK%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIHkSuVWv5mXJOIhdIz2gx%2Bu%2FLJ47u%2BV25flyFKY2ddCnAiEAot%2F2%2FT3qesZstxr2MIrRrRtvpPE3fWqt29kGE8xEWHsq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBrcvMza%2FtB0FweELyrcA%2B1DhQ25OPqOD0CL1iNN4dRsCSvmzFkFWOs8gKXDqhSzNYmoEcwGH3%2B7KBUtsb1mBbJApGks4gt4d91sZU09jwQe30GSkn8XGAyGkNNi2iplnYsGOMG3dLIaSNwMfflhPuFdjZIQk%2F0AWgAWARtbMHpQqDuez6WWeTb%2Bsd38D1J%2BuWRSudvm8gxN3z5izWsnZmEmGSHv1%2FqXFcd38uRxI9CENQjOTmZsdbcaIxz47ydQtQMkZOBWhfsM6j7uJ5PqGmgpOdPvKtc3spuwMyFl8Sa%2BG5nzP0Iijfg5hIDXusnVIfoBnsG%2FfQGBzisd%2FAGeUhecsaLl8JRk7N6bp%2B%2FMySiPxgWUFGIaGKlEUMB5uEQMuKeXFZWA6%2FGDHbbnrgSF4r9jWujnIcOY%2FysOBPm1NXvEB0kebMd8h7YtjbM3IVGS4j7cZSpXv%2BZCZEu4XJlPUwe%2F5H31YrQIIWki7fMr9TeKKD2CxUrqNXHdABdDGaV96350zD%2BXJn2zmsul%2FWTP0UUE8dwqDxp%2FwwbtuH9cRK%2FmIW3P7GaG8LliyMJuhQqa7Z61gZVuJXW%2BOC2Ck1%2BnpjvEOwrB7FJQvN7HMvEqyAoXOSEBkWv3whcx0o2p8pm1r3kXpBRRkM3CtTbdMKHL9b0GOqUB4G607FQRMnBXzWiRFssUoegxcC9PUmzIkchLF864FQHdkPDnd1PW%2F%2BX4v83oKqqsCjdpB1pzWLLERkl%2FAubgi9xW6K5ffTfXIimzIR8JG1AzeDZIj%2F2w%2BqHh3FzOxhZqxu1V0zwVYteIHL7P1oYGKUy8cpQV%2FrZFUFyniX3AmINti1uf5KFoQWJKAdskuvG0NTd3qZuB66zLAG5k%2BXBi5mWGAKIo&X-Amz-Signature=b0c8e5bbda6f44b68f0bc453e98ba0bcaa91f9851b6669f43f2287ae0f83babf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
