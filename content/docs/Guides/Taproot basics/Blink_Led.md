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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5EHGW2Q%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIAQ84E1pSVAvwas23GLkaP66Tpx%2Bj4aoJU3fUecFA%2F4XAiAGw6wkc%2ByJGUPDdaXMO%2BbGkhEGy7geyXlC2NRiEq%2BoFyqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMePKnMm3ywWfzAQWyKtwDWOs2moT4VHhwsuapZIjtHM5mQWrhHS4p9oiLxFsGSiSUnLxii2zn%2FoVUcRIZFZtSIe2%2BSvCTIpG4Cp2FoeYWm0y2o2tV6C6JU%2BnwIceLIDAoQMUfxUZaqwqxjs%2Fsf0tCl4iOVxdGydl6pyh20l0UyBQO2lLnUeJApNnfPTTgWApF6Gh2s97aWNh1UY6zFz7zAlcZxl1Jsto5YQrx0GyHNLTnOImsyujL3VLZCqUvB98tEb%2FWWAbfc5h1MV2zNebzLaaJmk4hQv6CHj0o5agJfCZljK7l5Fp1ZBNCuusLHdUBuzxplMZf6b%2FeoxdSOPZ%2F4Kl874oqNfn4Nkh45aYvWxfoz4oFphjb1myDSX4UXXMCrAviagOU6AUA6GPpvAPkxfm17SPHzBSzU2om1U%2FChiXNI0w5sw8tQ7lNB2veh8HAxaafNHVJnQ0EtBS6AjfcmIvGAQXlyEmXwI%2BvXJ9x6i9Ddkjd8JZo1cQs1C7ET11bxWL21FToHlploZa4EB58Mat8irv%2BhlfwtQXSehvFBDhoZiM%2FjvdFGKzKu7KczzaMw4AuQxCO9sfe49qJ%2B1x0jTcx%2B%2F%2FeEsX7LCf9BbS1RTuO%2B0lpgpooh4TxMJOZ10tTXKje6WI84rtCrIcw3N6JwQY6pgEo3raiMY8ORqLnMIGLvNaZw8FniwKSXPBMtR6Q9CsHfa6Yc13vITPj70OeNpBkYcGxyqoeDenPcNZ56TsbJoN4i73HgxFWL3VOIosXEKzYt%2FxwkKGa%2FJrIOhtg1dKan93znjyGQRfPY2Q6WfSVIkWEKwdzgFmsUaQANFqBic2I2IPGucr5jYcgPRLazhIgDcjpCcjlraKijwohhPUBxBNe2zeeZKf0&X-Amz-Signature=7f0d94c17931f41fa40481b372d4a05e3c2af4b280084125b7fb1f3e4da80aea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XYMZ726%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDCcpxUiEmuy3vKRrmqC3%2FRLyMBULhxZONH%2F6tuw6ivgQIhALLrOe3vPiJhhpm3i140k3UdStE3O1X711AhJS1b9jANKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycYZiQ8s7c%2FLdSAPwq3AM3jzxGQHp6mqyqMkxqHX8u80Zb%2B679yYNUWbqkYJP1l8eU%2BCpnNksao0H2YeI4UdPNZPW%2FKJSAR7gRxjnNGoaZSyaUzBZqYjFmEZfY%2Fx7xp1SKB53GFdz31iI0gEyzAuxv6psmYCLzLjJlwWQ1oDl5ZuK1m6PVps%2BrkfcooE6g6hHedTtUad%2FxDsllCTwXMutwsdPS4YO3DHAT%2F3eWUpMfCYa2M86Bu%2BWwu5wXMYmURkrMPKKZm5544%2BQnRup%2FEr%2FtO529A1d1HtxUCWbrl%2FeYI2DoBACKvUMeiJzQ55RjwzrG9PMKLQBKDn853IXmNVDZZHhM%2FwR8m5D9XmJvgCnfmxc6QjP4JZ9AolJgQraC3sgKwa6UVdEkWia8RbYA7VoW5K3oXslXDRSKqo1n1eee%2BeCceSY0um7ufdGAFXQA%2Bt1Eg8Jaz4Opm%2B4j3rphfGPvpInWEcAGVC8deK7k%2FiogzVMun8YB2taN%2F0gjyrhab5NdRD2YBwpItLfsz2ARJ0VVDSkJzvTQjTx0URY1r0GqLXBfSLpq9SLM0GB1LP6LttdvDpeguL%2FTjyxRFhW1MECP5uPAQh3%2B5LwD1lniOzvfmf4Fi1bT32k%2FZqbiBqvCV5%2BclgckpvUdkpfp4DDd3onBBjqkAflaJlKKiyYrihPnb1t%2FvAC%2BIz3cgEUPzyrt4aZ3%2FxCGNRFpXSDmdBrrccKCO6jV0fGqbrql6MI6xqX%2BK%2FC0eXwkB1o1VsfI6t8cT7HPeobzsOq7IT2956zXm4XYNJj39Fwjm1gWmFlwNEJFJFNZZge0OSj3QgOGCkt1cynmKFbql5oWHMWTLSTGPd9aYzah8JUP2iMQ6heR9t%2Bywwf28gyRxIie&X-Amz-Signature=bc09878fc95956356135f6895ee5986dd56407e3c5ff553977caaf26f8b2aa08&X-Amz-SignedHeaders=host&x-id=GetObject)

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
