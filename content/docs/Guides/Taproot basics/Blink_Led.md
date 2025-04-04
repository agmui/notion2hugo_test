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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B6TGUHA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcwYS45q3pvxjGRKUAlZCwwfqergh3Ya0iEC%2F5TYDtmQIhALqDErKaLWSqgHHBMEqjAZXOh%2BqolzGorjeUNn1kiM%2BAKv8DCBIQABoMNjM3NDIzMTgzODA1IgxVLEBl6o%2FNb7sDaesq3ANUXs9t%2Blmj9ISten3qIEtWgkdAAf5Z84ntV0bIYc0f%2F%2BNpKTWQwNrQ4REv7Fr8CzdG6FgjBH2zVRYuM09XdaFnH1AMkHXnmoqm7JUqwymvCky4dvn5Yy9D3iemg3T5DJN2bssmRZsgVqJSunR7FprJhNH4R0y5EOb%2BLqmMlehtTtcIUw8YEQstX10%2Fq00mJUUOSzhm0eAHR8yRD3HeGz%2BVkdALc86k5alRMzY%2Bk1wNT4nlZ3EW55i2vqQk8Gp7aqHRdHdKbayJ2VBg4lCPIMscTLSfgrPaeIhGQDs5il4VlNvxFRt3dVFYL7GHsMRK6v%2BKlHPrRk4ELWjhpJKfGZ64xPsazaUkAeleKM656CZGrjKCugmLHg%2F6kkNsoHA0lB2qg75iOlgqKPEIhieqAZylPEXP0zV2MSwYkvp7ekHRRd6TQovN5YVy9bGjTkRhNLToje%2BKZwT2ulZNf%2BXvZ1w%2FQe20FtW5D3HkBc0Acjb2KqIqZqiymBqZLY3p%2FquAQzzcjUd%2BBdFQip0OlQbxYZ8gFIkbON5%2FCWnxV%2F8lRVA6Jil1Cf6yoztg3C5gSVrSFNKi%2Fw9THuizkSXS9LK2g3Y%2BVIreky%2Fo5gzViWgvSS4AgPcTQXGv%2FtiBt51RIDCOyb6%2FBjqkAcC%2BQvQK%2Bfla24fBPcH5x1F7Ihx%2BVLJY8vMrDoNeGJZ6QwihjY%2FXwUAFu483tlApN54wMhXnoCyEukKlIdW3namdtJ%2BdHYCJBNjKC87CBmZa9W%2BWgAQSQcoU%2B92VH%2F7KwwzBHRyILg1nLmctX8omy0%2Fufi0j9IdVq43kxzUs4VKByRre3vooIcKNODY%2FgdqCPpfosnjzzoUUn2WNZzq%2F3ObYpJ7a&X-Amz-Signature=13d45024b23ac0651ee9d8f517e0871fe154673c2998d2a6474d7ffa4ab12402&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622R7HLAQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWE5qrJvGH415tW0SvFxM8WmtYps9seF%2FvviN40sklYAiEAgqLQZiRJRv%2FX8LhHlwaIcub1Fyb9KXa3YMlNT5Z4KMUq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDAzGeJ2BzyMH8zFsICrcA5%2FkEOIDjXoLlc5FQhTJjepsBOBZXZdxEH7aQIHHA0CdVbjgnE237BnrXXuLDvKFcg2WPzVLkHEArXguIxcrS7b5HHOT%2BA1BryscxYbm9mRhcAWdMGvCs24XCafZM2mCb578Oa6I95FobWIdSALoJxQM0nmiBU%2BkkFAg9xtBh5sZq%2BPGO0KLJ6kY73TDIkMD4%2FwomsrclajWros1w32xcDWUg3Q%2F4aPvmKEJQ5tqkZRbrvwQLAWyRi8XkMMmzzvDtmQ9l8GEGFdSG9cSsxJFUypIyYttEJb2bkB61c5APYVyZZv2J9zsCthyeN8fV4BP4jrQpSjuPIZIzWtH5lkWbLsUU%2FVazrLRZ5zZFH5WpwZqFgnaLCUmj%2BoZh1VnzfUs%2BIBGm7XyWfyvpPY2Y8hZOHF2HWdYNuCBXOwB7JlMMLenXKKvFpA%2FNcjNC9K1nCeoD3JxMfXniYvr87mVkHxIAhlJsaO%2B6HHxh68Uf8MHBBwKSJGcCPJj4oZR0lubUBH0gkF91mZKPhyUZIJuobKFgiwyvzr72NfhCUBN5V03hti4yKDzGrKOiOiN4PLEEbtMw5cRhTMQWzbqXArIZTFplM%2F4ebs5Bs8sT5j5YLljp%2FrYANwX%2B5F9yl73YNUVML%2FIvr8GOqUBcc4Esvknlrhi%2BSTIo8X8vKuhRq0%2FKHe%2Bo%2FhuHZREgFOw6kpci2I%2FyM6SVlN7lWxse1unjksLrW%2B1nubduealtLoWCzWUJhYnyPiG5ChACSzmq8m7W%2BZmulvKsWo09OPkDCrybIMTenbF2rs9MHDdvuyBJGeJz4AJaSubBdHkLnUBcgKiprPAhe4a1TlhviXpBtlYsxZPWQzP1u5Yf%2FHmrNu0Oorc&X-Amz-Signature=57457a19b19b7af50b63ba9e3fa91579adbe80ee93954d55b54cee8e2e645a26&X-Amz-SignedHeaders=host&x-id=GetObject)

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
