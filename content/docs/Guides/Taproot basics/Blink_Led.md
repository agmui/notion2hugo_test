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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HVJ7VIN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkULkXuRXVF3zi%2FUEyLdifYEJRUzRGRO%2BSusH0taNlsAiEAzRsNu%2FGY2ZVsPrTNtdDLEkoS01%2FvMAa9ffecfHR4pxcqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFN8AolLU43UbvvrsCrcA%2FNezMVkZZeLF7Y%2FZ4Bo89L02yM9%2Fy1jB0d79efodtV%2FLkkhEZtQbhS17og4MdRxx88CbMn5w4emNlyp90YjVylk%2BU8w6MXHGZHBZZJA63efBFI0dWOT9QEnmKg6w7T91%2Feo%2FNKsOIqY6IRzzMdcdkuhD1J%2Bt%2FB4sW6xdOvhOim0hsHswRfzYFjT0Owihl3pKRzIjZOQ77%2FLQ%2FHEKyRAEnwOV2T6ByYkKmdsTWOG6ZDUFDbeED0Rppq94uruUfZmwgs1ycMRl55Hk%2BMSeM9I7LYF8v5fNZET9WYGz8JPhJUPQyDB%2BJyi9Sjws3pqXKtRo56Jyi9AAlsILX%2Bq%2B94hfi3YA9xfivLT9ngViQsTUHQN8R3xiGOrHQCM2C0Jgy0co31ZYgcuG%2B37YrmBh9RIp4TfzOhByR7dNFaSqUwKZSQyVypGTnN%2FZbec8GMaW2jhqHjzQSNYvyex8ELnjkVbpQd79%2FTyDpZD%2FC3w0UduVpw5PAnSApGcha2A3uzzSmuRVnESqsKTMOA1HJY9X38HCrFKbrIxDn31g65Old4kbnpdTHO0mcLf9ACAmK2XBIywsmiPCAD7uCkIXsvE4gInA2PUmCGOVpM9%2BiyBZd%2BBiKuF2E7l4Ba2cAdk4ZedMJrz9MMGOqUB3cNhtJXjl0%2BgsUgINXU7X7knCycg872XaP5czOULXwH%2FYKxqQ63kxKuRH38UUu1hilI9AGyEzg4qvWrLDN6vlEW0HKN4C3%2FRPHLpMROL9P7775iLLBFRCd2ucNeWxoNhF1mWXf%2FBWH7xeVQx6EQPZlV715YIIMLOyQZ985G7JraI9i9zgdOfxJBaNaK9efNwMGRrN4GgJKw0IuPljVaH6HW2xqPB&X-Amz-Signature=f7adafb7d0557f553b64ba2cb576586b8eda351be68553a1290d655cbffaaa88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXLNOZ4G%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWjz2X5FmFuvwwkmjcohXdjJOIGnTprxuUY%2BUis%2Bq8DwIgbqsuC4KGCHntp8UTmrrxiFUkonldjjVreWJ263u305oqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLx4p2cGkpxNFkFVayrcAyd0DzEmkqJxc0IAU3sX%2FUG3RZYP%2F48o0PfdVpTn%2BCWk%2Bkswi3BU5DpzJWEpaIzsqsVuwDL7JpgOXnDz18QI4oq%2FylR64IEIW%2FnbinD0RY26BaSphzW647%2FehNMmiwgS9wNze2XQFHjowGJLvrT%2BPwoushOlHMR0B4q2pa2AxTfP9bzzGyj1i7cT%2BW%2FAjx7Frvj89P1q2l4WWphV61mUWQt196XQ5CG7PPliAh%2FbkqklhoSXQTljehBRg54gFtpxqh4n%2FbXKfByt5WE2W4SQo9g8udFDRBBT1XXAlfxIvvGuK%2FA0UiX4gip675znaWHl5qkQbVueNNbef4NBdSmajYeW6L%2F%2FEyftfjh4GIY4smcMebmgYRDTnNEBpeyQ9qt10Y3waQ1Ck6Ti8VoBMLKoX4whu69SjPljk8zkEsdyrNFbuyMt4IVaHRS2q7Yx7DtypFYsXMNGPBixEsZTFiMlKuGDbSPDQcG9lrRwPUUVa8MpxvIcm59dr0HaVRiNFpvixcHIT2B2KKv5%2BBOS9KrvoiPF4LXnUNDbpgfKm8yE9NmR70wJqgaGjvGOGErGUpQS1yvwCMy4nCV6OjINSOs1AcDBdLFMkSHVIi3eCyQUEVBtVwCIlhgnc8kcPyk0MJb59MMGOqUBbHEbIZxj%2F%2BfVdizS2UUj8PiT8nEWOxuSlyMJR%2BAYWsg9lOu8itPLZcGWFgBntTFsI63FNA%2Fet9C2hqOGbyyordmdAK6veHOl54628REYj%2FtEhhJYKvDJex1aJL05Q3osODPuPNK9h87ih%2F9Jcv0tzbd1FmgdK8dXLA5tNUN3xSXSYAYECgv3LNGI0QVjZqQw7NKSrS3UmOnkZF%2BywQAibkTOiQB%2F&X-Amz-Signature=e151f848e7dc1a98b69e6a8898ee6b0294dfe10328545e72fc1c4de0c78087e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
