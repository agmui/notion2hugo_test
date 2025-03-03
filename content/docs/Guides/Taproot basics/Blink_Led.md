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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZCRZNU%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDonS44bV6pNb63i1LztpnMPplQm0l75g%2B3%2BEjI5R%2Fw%2FwIhAPaPSnum0%2BhhnmqrIuDqIzFCmrYCIHlbj8lhViiPoZyWKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJLNFrMDc0r7fsm0wq3APcg0rblS2LZ9xj9mspJMnNxpEE4VuarBVyCoWh5JGN32nGSE%2Br7IZBZ2IBMS4kMcfStN%2BA8zrDJriJvaWw4znmpfzWkCZm9Hgc7OUumHKlwkj82FpFLL4WiLrmUe65qr9ejlUarAw9m8yDacArXAjZEd8yAqbVRIHNnK%2BkNFg4bGxP2W3DmjQqUwb7smqV6m4r%2B1dDmkGf2QfzPm5%2B11BoHCPXt8NTnc%2FNySBGSqtIETqN0LwmBWD4TzYvO501fwWQzTNzxUV3PYLNVjO1byEJxXCW1fPxRU4jjVnn47SoX0th6ccO1VEUos74dVjC%2Bv94LtUpAEYpV%2B5TbRu8l63HsWaXwIsRyzGZnN6Bc3Li3jv726SBYXru5ufbqJKxpO5bmdkebhE6J%2FM6xONYLGcpO3ZrZsEyvpQhdsvq0WTokYQGv%2FcNH2OetOaGJ9c2p24ve2jo1VaNjBOHlZKONC5vfrfeFIbkw6NsiAp7CeH%2BfpRjkIK05OuTS1s3Xbe%2Bg9iogrkThGJcWKqFTQCR%2F8fsf%2BUC1lnZqU5%2BthXkn7r7jICDUsq97SHX%2Bx8KeRRsgvR%2FNuiGgKIKNlkSnGz6U8W4Vz4SQWsOkxwaba2Ty97LcoftOu5xVW9ZsTK0jTCunJa%2BBjqkAdemPLmBsAKFr5U3u%2B59TkqQOlHsTUDWX3uhdV5jjrvPFbMhR5qMFR27%2FcUOkk%2Fvc0%2F08b44A0v%2Bkj1VVl5GJcZ9%2FL7Jv0Nf871pLRGS1AAWPUp%2BVD%2FbdenE4ujggZKCOR5vueZH7bbZAIDXJR5O0a8ngqU%2BeR6cWD9cKFaebyZDwjeRznG1IaIGXjf40dO1rUiolyxjvmBmYLuyQTas9AU6%2BIMp&X-Amz-Signature=4f7989586813366c7ebc05bdb98d567231742f6d836867749f5631f5b7c219fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672NA53KO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1SsFjdDjQOcP4lRfbJVo26kYWwYz9Jh4baaM65oiRhAIgTCenYgWZKMREi0nIM0qKWqJ37YdKD4INLXUY4tKTh%2B8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfBzoi62EhaowKFVyrcA9j2a26cnKoNT57OWrsLBvCaUaUZzhJtuP1R07Qfeq1w6242q7fCeScHodfpWvLPgS9I0LzIv6EtFneLglvHjxyGKGybJTe1g9OUeb1T84N0hTOxqeKjdSBp3Exvfk1QElZT3ztCQqLlaqmLAZ1tF6sJclUWdW5HvAzmGXhGyVQbvL0eqySbLHZQacZSiiTB%2BaC4PWBSAldj0w9TkxlWvDbNMhWQVSfD39cdkA5ttMAIZV0I833R8Gn%2B2Rq3If9aYFjyMtc6OZJwzohG90qiiE3EHNZRrVOEkjyYQsoNbOsI7ary33O8zF%2FFN%2FF0UWp67QQBOebaqWb7JTx55NCxaOhU4OluRcEZgYXTYxdyUPeussMuyPKzp%2BtsWxadv6kNJ2OGDF9s5ZzT%2B3zLIWGaGgmJqsdlqqvaxeU%2BtwcyvqEuMHScJEHxzwGJf2xsoeh6aTUqVYuhRlEp%2F5xlnKDrwFUkDZ5XjwgxlMZPdUca3JoKw5R7880s5r4sAjuN9iXeXIP0d%2BSEYPv8gpciPkBG01Q6tsTCos%2BdPGrFQXDtIkxeJUF9TvzwcOGgU2peaKs3jA%2BEdoltKUYHG%2F9ogR%2BoQ9lGKo2d8PwqMYuuDmh81ZvoSNnXjmsiQtALoN%2FNMOSclr4GOqUB%2BDxEydE8e8%2B58ZYwLgsa01hl30pTtwEbrgxgFouGG63otgQxJyblaxkUpOzEirY%2B0QmT%2BAnTgGSXgviGyScMmLvu5za3Bkt%2F29MfFLrWX79yyCFVAThzGwwlFWENh4%2BuwVXFsoI6ZoYHiJMdJCa5IKWGJYw0wdxB6t3VtE%2BwjEj%2BoSsPHYCOckP1py88SWOPr0XJPET4u2S%2FFfH5wBz20P0xhT5R&X-Amz-Signature=e0d1da7a10a314902a519cd23d27b01d4c60d5a2b3376a88886293b564b36b56&X-Amz-SignedHeaders=host&x-id=GetObject)

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
