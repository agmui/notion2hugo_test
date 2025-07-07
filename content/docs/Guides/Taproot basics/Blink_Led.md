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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466273TVBJJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIHTZZOOwkuh0MyGRJBzzLcE%2Bcfp0%2FarsZi9pwFaYDcknAiBSpT11otSPRn6NuDRwIL5kEquS2kNLZOMzPlHoZkB1Uir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMkRVhfkBfAKqK52%2FEKtwDXRygnxs%2BlOBHALGjRPlUE%2FOH0IT9RYz0cOb18s9kDIea770QhM9N2qvm9YyXQPIXQFcanhVrTBWayeKizS%2F1LiFXbNdBWpuu%2Fbw1khU9Iz8ei0ZvqxAl0OyeD6TkS%2B0nSMWIAMl6VheHhKzZdBG4E4tkxregL%2BPHzY7l017uKDpJB5RaQ9%2FNQx3OUcRrvu%2BL9y%2Fi2RSN9BO2pqdQ9zznBRhv4KIElBc7zP40MR%2FZ4VCGTCwdER24sYXEZqm2AHDrFbRA0Bx5ltrpBB4Rp2lWTXfuB%2BPQqtlgoAmcuYz4hLFUEddNRIp%2BSNETAryXKhfvCuM1zYW8p2j0NmPUu%2FoSjkqhZDN2tvXE0L1cbZwlr5OGkmkctz3fyW3PdPqHUEMsCNCn2bv8Nd5%2Bt22HzO%2FCB0%2BdaEg6nksUtWcsXi75KfgqzAXltNjr1%2BnvE5picz8x4FgkJ6%2BKEWX%2FaNjbIlbEgB8t4YR8opBVcStZHGuvSXRvINFyLnEw4xcccJUjcA7f2ytuqYthG%2BKiyeGpIlXq5a%2BZI6ymkt2k4kR%2FFm%2By4KiJzg1noHdd8fzICY9cZbVQHBhHnjmBkEAdCP73xK0%2Fobtjki8t5nkBAu1GMjM07AOyI%2Fi%2Br2LjJb1mehQwjOKuwwY6pgF%2B5ZCcht%2FdSXlagTxPQi1uKoUSqwP5%2BqUJ26lPyPhti2AzARLv9%2F%2F4PWYHBN2Mzn7ldZEgdns6qXDIMhKkF4ak389etAudORkfggS2mMx2WQhwJSNvKbY8wSBm6lPrNQiDz3c%2Fs7E%2FpBa0oXGIDx9RnbizHqbsvNQeafnHjIkvHpnQFuzmTYqMRTZ5oSGiVn1Vo3VCymXFeGxtwXWlRagRjwbqY%2BPE&X-Amz-Signature=e658de71f69b35637efe2bd0a023e4339bf2dd251c6c7716243d1574ef547352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632O2TKMF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDU9fsHyUQZqmcfwnVNfCsuqpajUo0VRnPubnorjSQvwwIhAI84gOb0ppPko2ChK9stzCWWC0dyUmN%2B44u%2FDjrF0ji3Kv8DCHUQABoMNjM3NDIzMTgzODA1IgyWPg0nQArvdM9J114q3AO%2Fcztwgr4HadMF9aHqr3qsxq3MHrbrPxK%2F5yMSkv%2FAbmILbTOcUqX%2BsY2flS8QLXTTREjzbcpKbIJsSotUznaISVturgkLrUgEbEcECAfym5HgGAJVRojNmTXeaoAe2d0m9PoheLPFosUfdgO7Ss44qOMq8q8I3dAriWtUtzMHD6qaaqPPrKdoNiAWIFpooRJfFFBN0VU2vY5ib5Egiir5zFK0lFWUYFxDeLfC%2BUWnzly0B4vAZF%2Ffp69PSDfB46SsArAYNoC48udCVr5Zwq9kQScCquFupdrA%2Fttyce7sfWZjfCMQwg1Z4SPdwYNBPacHWyom1vrQitZEAJsGQIWBnS2cgano%2FF6p0z5FO5ZeGz0P4bmcp9DaaUkLTPUA6ipMbUmkWZGf9jOHODewZaqoRyanQjjkxy310u1E3TlyisFKwLrxA0zDoa7ncCP90%2Bah6EfgBXIvCpTCnAHGG0j2%2B%2FZJ9Kz7OhcRa%2FDVwf1Ed3DZAnbFeS0mRXrewDCC3iwt%2F%2FDKHi67cEfisYPwtJiR2j9LQTIkl1JYc%2BOXR7owZ37hSvYGLC46qj2WF1LJuyM2LDmB0npZuzWVyub23SsdqAQ89QOIUKMY%2Bx0pPooczoc8FozMBaLV%2FxoMxjCa4q7DBjqkAQkqvBPRFvLpc7I4sEdTdNk748ygm3RhLNezxKY7frJj%2BYe%2BhzfPiJ0SiWC1af84DznvIaC1wm37Nta2x6u%2FjQ2LXPT9h8nuKT5IEYlXSsPJl3DUlFwa07PlJXtwyNJk1xmajmUd7MxaKsxva7BcZ983FFIDFveOQiZQyjKb%2BshOIkthuDVfXBzlM4IlFFkEVe4K8818hX1BIwV1F%2F%2Bvegcn7ZBW&X-Amz-Signature=480e0f95236749fe8ad0148a3c0e0fbe1a72dd112bed6c61c6f901e69a39ee3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
