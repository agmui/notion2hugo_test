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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX4IL2OH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIANl04kUb7Ovun4ztoThbpss3NZOPkaziQOZ0MJrfCKhAiAYcfUSDTIr%2BwNp9VjD9SSZw076prfqi3tjT1wj8e4SMCr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMgZB%2FbbPQJH5NwUCOKtwDAes72%2FelYUMseyjKgpSQM0O5HHDV3%2BfSBisDhaAkDobGMegDImVC4X02A78BD8xMwZKkLRK%2B%2FnAlCLJ%2Br24XD2HYcaldJiRQECqHljg29Z0k9giAJebd2oU7NgujJpD8F07YE%2FqOnL04eraR6Dp01%2B%2BUl4v698K4EhW114xME6VDNugTGM2Zdf1sG8cuIixLSPJ%2F5iq37bDjfuXBT41P5L5waF6sideAyE8gz3MOfzAbayPE9Bl%2Fn9FzDeSCsk%2BZ7BYJNfSJ2F7sFIg%2FzXD2JwsAF3ixjT1jhvsIhucW%2B7wAOPSYGEK1t6dcKnaxf8wfAkSpMiDNJDtFMIH1H5J%2BYeshCKVd3zNkovOjb%2FxQHfpAW5dSUhlsH3wBIaIvZmEmFNJS2dP2krxXJMfarrT9%2F%2ByUio4GM2FR7dYB9BLEeTopO0mG3FF0d4VVxtU%2FKzFpM9vZU7Zghab0T9leMyrLFCrJ9eW5pqTLB8gct7%2BipKgelnhwKfO630vHF7oM3hw3%2Fu%2BHuDxmNIjdvFOr6GlFBSlcWn5TIS1UZHAB1TVNh8BfffdsYQGPDKgeYOX1zJlYt4m9o0X0LlGQpbE1UzQ49YdEFGKqLzgHptRVwCs%2F39MbQGRyI2ATRUqKQoUwzuyzwgY6pgFkJcs8KWNehkeKTF6N%2BLbKIlveFnf6Z5I%2FM8QnZroXjjDtqmrGK8Swgzxiti8Zo5ArNO9gC%2BZ9z6EVxJ%2FKqIgTTopM5raXPQN4O%2Fd4uosMPU090oPFMN3naGyFrBRAnJabCaHP%2FeB6N%2FZ7z4rY%2BrXHdzv2lzpaF42FMULfIE7ybqozKTKgxF7XIv5u02JpqOObC7bxGMQEIGb92auBxpp7NyU2tW10&X-Amz-Signature=301ff5dda2d56710db56ab96eba585e22f0b86b5a5b268524fec302c018651e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZYOZ2T%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCKljpWKl81CcF2V%2FrUcUE6aYgoB06tJ%2FfsQCmqDDmP1QIhAOaQImI%2Fg%2FInvxb%2BlfPFlbVGpLOwCILvcGxsbpF51LtTKv8DCCUQABoMNjM3NDIzMTgzODA1Igypdom6nxs8By90lOMq3APGI8r%2Flyedpfwy9vu%2BCjfsT6Z31yrIUWNA6JghFjGaU%2FMghq25XEHb5Ei6gwmJFq5vXjJKloa36Z7OX048qtEJxzDsTiY805I%2FXs9C%2BrkjS0UyZWyjc3SKkxZYVNYna809yxkpI6VyE4zp0mdPLjBzbhoC4m%2FxcErTBSUYZo%2FqeLVUVgspxS8dWKr80Iu189SlkZWBZ4wUKJwgTrKAqbAGDtdVMgatgQYQp3ZYx%2FOsX4dJNBnCRYmxoHSeV19DVxKr2L8NRMsFJZDh2%2BLMC2sKw3KEKt1yJSmF1P0bwyQ439B3e8TY60UFVgAbjN3n3dR3pygc2Tb41TluhhjMxiCWmQb3ZPwaeoh86ieZ3HGWUXd5Y07urshaTjsd%2FwU8I%2Bt352UyNCI7x5DzEjCqW4rV%2BFfVyGI9LDRPDZXKdt%2BNogKgDPnydRbPNe3W9ZzXg6KbtLBi%2BKRZ%2FIe%2Bqrxvv2Cgiv2PFiqr%2FqU7EzwqhYkEMgANsnlgZkXk79V1vHkfoi1ULnxBgNWOLGyCNN0CdpKoUgXadvckvQvk%2BFSkD3tWf1iWcSZtkRDhJeFTfWQ%2BupAqeN0NYwPYs1iTi1H3adKgaaIsMpwu0ofVp7iD4WgE5TAFeGeCmU2m%2Fif3VjCe7LPCBjqkAdG3El1Y8EtHnpnv95Lp719mgq8IPN4W8Zadd0lR1eyqGog%2BfyoIVv338pT9q1Xpm5cSekVKs8mNihUIVdcyK8WfDNjCnjQck8ELGe0fm%2FhXL1s7YDLRBcZ%2FQAeoJKQN%2BlDsk9CbdRH8ylXkN8IJaSUIHPDxtkbDxddSQJmXySYUS9gPTqAESmepYLaIVtOtfyDOGoMNYoknXeggNAtHfcEYVlU1&X-Amz-Signature=76ab3b9a76f89b2b07c219e9fae959a5e5919b35e1d77d57f9d146599fa0799e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
