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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SK3MTHN%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIGt3pk9Tlvg0rUisgW3DcMWoXViRjoJDu5yDrcglFoJIAiBnCjYfH%2FRmrJpVDHe%2FNzMUMlHeoYREA7PSugZR2OEisCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBFP1DLsLWpejS%2FnjKtwD2rKhzCHhE1nlWS58t3DBcIE5yK9ed7FM6lxHRkcOGrN%2Fej7Ndo2IpPfers8k3hN6zb%2FgpPOCx%2FIXFpJDmbUmLr79v59o3K%2BCOpwKuA5URIHacWfXzpCDWjmJOj%2Fg%2Fit31oSgomsTO7WhhbR5BYldP5G%2FBeFJBwgDZRnCnngNPpib9rcOpyHJNmpDmxRu3%2BbPjfS42hJJ%2FGeh2Jq5s5L%2B%2BCvJhgUyyJfNooO74q2ZlMAj%2FQoDvsvhroqJ0%2F9VdAsOZ07kaVQ%2BZt6%2FWfrn6EpsIkek9MzNhHa6yPwP1e%2B1k0hJBXh2kSi5LLLFSX%2BEd8Ul%2F5trHe6wSjz6uBeAiYbYrzlLAy0OnidTgitfJS9FI1hSpbKBeb7S74dVpPI6XYQVi4Kjk6wvQ0zAOHPZ1qngSTcEfkPv3mYW%2FYXrfilLqS5JcRCnHKblu5R5upT%2FBEh0b41RqWWdB6feq2l4%2F9T7g8rjetW6f9l%2BP9Jq5opVZraYb3MHtMuOWV6ps8htB5y8WePq53qlmoxkUTHIMupwXhS7OX9eo3MrQSCtkqmePLYSwg%2FVm0c5zqzpBboxLYco0yrDpPSr6qNLtWAKbzTnrtXMXO4cOhhnRT04kCp%2FjiS5LCGkVjWRXSap%2Bmowxc7zwQY6pgFFPcOSryMRZkLh8BZNeEtfCewCsI1AnyjNr5E8Ew0yWLjHlwYiJcj9T7QBydomqC9RviHCiknDlA5%2FZAd7ac3KikgRowzTDBFRrbo0Pj2jke9vi6zJMqdm7eFQyrmD%2BuA9IlThaO%2F%2BLqh5oJiGsk%2BBE727228fiY5ni7MlR%2BpIFt8CBErmptWArhvI8dYeX6haWjoq0GjzxBNFRqeg9LiTnA%2FdwKXL&X-Amz-Signature=d53fdf7490b9483ff241e42e26e691af87858766c9746e2181cc22b43d570db9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7IRNE7%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBPw1%2FtKPaJtWPzu%2BmukEI9VTAK%2FZexH%2F%2FsKOhay1cmVAiBzGjGTkvVEvuDsraQwWgq0avRDpOjgaxtZCHsuCNroJSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpVNfYMoIHfa5lQE5KtwDOI0pKadfC6UBRhOxnpF0rIO37nHGrKbxAInbCRXndVv7oxeUlC6CfU1DeTYt1P%2BHlGKl1GIqYSYbCAjMbBRxB242C33%2B4uZRMRbcHRFrsXXFrwjJdGlgcAzbFiIFPdrU%2B67IRiOntvxsvIwD57Q17M2j6tNnKbcgcDxkZVeUBrpQ9ndsOTDgoZiYtX91PtZhU2Wg%2FEtlKQmQfzALnNCFSfxEuVlqfMZR8%2FdoiP1xLBpiwNXvw%2BIKm6%2B2u5UdVSdeZc2BwZX7Pu3CNcpiFectF6bf4gmZTF9%2BNLVR7mL9hcGmGauv83oiPQ0qlqt7QPfyQsfLQ5CyLVAzRNtSeYJ6ZldbUfs2fw3PNOtyBnQ9m%2BvFRRmu4%2BRO4wXlP46%2Fdq7SEP5z5ZXSejbfipzKEnPZ70vcdKu6IAtvxSRY5hhEhJtkMoGIOcTImmnzRTWe%2F5VRe6gqlSOPFc0GiS5qzttx33HJWGdOhJ%2BfLzmJfZ0%2BB9p9aDfZ%2BarzmxZM5TKWES22C9I%2Bp0fouu551tUEtF2JQCh2Yv2ksHdwVXiVnKSVGn7HVncPNUUajHpHrieGpZPT%2FZmPCKYaCg%2Bpurg1T4Zof3TSHVUWHfPMUpAu4miRZtzmY6A85p3Sx0Kkd1wwpc%2FzwQY6pgHFMlb%2Bau4S0TOlKzoax2jzPWcdlEjND%2FgSbwBxgxK5xhJt4oE5NcZTT6Coudz68VPohHzNzXAJFtZskAleZ8mrGyCROjJzZK7H82VISxeEmbmcBiOud95xvzsN2KPsgVd23XVWh17%2BE0wccOLzD8HxHHNE9%2Fk4YQ86YhLVPyr8OhSt6GnfYBJgX2WJEOHcw5%2FUCvzISVQXRpaW%2FQWLY5PU3YX04YtW&X-Amz-Signature=a0588ebe54290e5c0451c18c6b64cbe971549176d3eaaca58d969b60738e064f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
