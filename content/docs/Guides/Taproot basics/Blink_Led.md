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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5PWVMHJ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCogeNmeWZ%2FsqkP1O7bVQ5Ic0K4oM%2B6WYa8zBVAunxzZAIhAPbeSok6SEr2%2BLVFwWCP4XdLFf6EgnAUwanF%2FGK9JTlxKv8DCFQQABoMNjM3NDIzMTgzODA1Igwx2VbFYxPRprw7rTgq3APwD1DJLiFX8lt6OQcj8wASa2kIrz8N%2BXHhQkBU%2BWO9YS%2Bmwt32149rrXD8Mg5kH9XFXAjfQrOvoC5GehNYcWBsFCC1E1w0gDCXUCK%2FEb%2BGAUZy4JO0HRJwt525YFV3HmuGDdC%2BScwdHilfcdXkfAVvx%2Bwd9IAwhBxHCMVUBp6TghlIa9BGcH7hb4PW9hXQn54yz6M0dRv9x59xDgnQRFIwSHluBgFb5ya9jfZTY7%2Fk8AjuzBa2v4nrR27twCeucYVbzXKxNs6PaF7wkKvtbnuKBd%2BMEv1iyntghbPG19fT0EXMZdRP6OUwYivmoE5yFg%2B%2Bkc6nZK16FlbKzyGKIUjgXGTE4XnuTdjuCqvluXOzSePjEj8iuOiEwBGKtZN%2BwVYXpcOPo8yk9Tr4YapQG0ytJnH2vSwRDCH9nIb6zex7njsGjre5YF9TvxilGk81iXrV5okj0TSyYQG5n%2BQjBbONjRBHXLbh%2Bzf4Sb4RqRDj2uYCwaZzC8NBdXZZJiIhOybNsu6Uc2%2FfGddVlEfwQ5wFSJswKnUCCDdkg3xMJLbIRHY%2FvrrjhoRQImx69FEpO23WNmnY1RjHPZojv0U2%2B8k43UFbMPru0PdHAjgtU4cNMNaeXwnzp8d0YRjvGjD1kevABjqkAV7ClCVTPsj5PChI%2BMPb%2FjdFLs0fyJdsC3GbuMSxJPcw08zSPVcgS8mQZGEMV5EmRqz7WqcTHOFoWQ7V5lHzSdzLPnOzX5oEB9to%2Bp9ItHK8G6%2BeRVAqaj9vxQt%2F0fi%2Fkuz22MQz0PXzgI7Di0KUdE9rgKh7DGGbxs%2FobNYgV0tG%2BIpBJg0uAqXHaO4QPy1EYNystJhb8kIohaZ9Q6WM5S5pU9mn&X-Amz-Signature=28f9478d3a9dd0fda805945c3408e293618b58df1111be0863af542c86af4801&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662GF6K3A%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBqvY06rnycPIdKgfD9OvMnbIWMVx46VCPMjwc6cjhRwIhAMCLAWDNEUsE9QfzrMfs5sxT5bnpCI9BxIYG4QAz3flfKv8DCFQQABoMNjM3NDIzMTgzODA1IgwyIHQJ31R94dVny5Uq3AOvLElt7CXoa%2BXw0ELyd%2Fm%2FCgpIGdfV7Y6fD7344DfoCeMKhPtP6sqmUaYiSqfMUD55X6EJ5q6squ7fXJFnLZeyM%2BcFsWhy27A88ri2nv9YidJWKR0b49yJtr00%2BBN01H%2Fq%2Bro%2FeHVQagp7%2BKUKxXd0xtDFpJ9lJczTnhVmCB%2FRDOdDnsIOftr1CqpRybNbkQENvQCpJxP6LIHEwfmG9C5mOUYwvztZgqZ5W6ygqBb1UXJJg0R8efW%2FcTL4eIrX0vkO4R3xocTeHrrohKPvGuXo6sBXUORYwB%2FEw23mOsUBEr%2FtfRKJvJpq6VXZBHdM%2B9nEju65ogEoj2M1yVqY329GJyLFLM070cR12RUA4E8jgSrQJNebh8bu10TUWN2lJgp%2FmMOoEII435oMIdYCuFimW%2FJ0892Q48nBuyQccTtlVnLF5kuyq5BQ1ZSHTDzAYcCkx2oOTQGYhobbVb2Ysi%2FFnEiaJOySqMypdV7b2%2F0DJyME4X3Ekd%2FEc5qHtjicK7JL9yYaOXb8MNSLc8yYcY7erMfM50Z1UZyGh6R7dp%2BRV%2BFUcT0t3o0waOIRz7ADsZoSkRnRVyLWMmrk%2BuLffnyIrnAD8tvDJvNVJUdTEqzmoEANDJW4Cj2ZG07RXTDLkevABjqkAQDQV8pocvSd%2FSRcapvzTP927UP5lKFE2XyYs0d4cDvanJpc%2BOyyK%2FlQJgrF4ohS4ynWNaPG1k%2F3bRyEVcsaf86V0IKIMFWO2nPObWLX58B%2FXPwSseqmsOhdBgf4I%2FOIgRaLsFnABEA5Cv5GejsxetC%2BNtWf7e31HdIosTBPuCQSA33MtTlpQJVyzdPrv6Gj%2F1vqPpP1gJ3qHCp0RVr%2By%2F5oHlTz&X-Amz-Signature=fa19789b7974e34f4410878aae1aff7a8c2462dfc7dca02635091aeddec69dac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
