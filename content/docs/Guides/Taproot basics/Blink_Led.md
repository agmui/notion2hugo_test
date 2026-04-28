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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXGMBQU%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD5SP6eaGGVMcUf6YI%2ByGhxKhsmZ8hMbS%2FbBLcKTRbJaQIhAPRpCP4qT67UqcybEEifNyM9hFnqPGz5RBJuM0aFSOyTKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNv%2BQow4%2Fxxor3ki8q3AOuZVpi78nF4FkgUOeCvLsdYA6fbuMrSwwACWcXKzVwO%2FO4SNME6%2BTqhn7SDy2mf%2Bt4LXJdGJL46GwiNipJ5SDbln3P3R3eQrRq5Fn%2F%2F0s2%2BugmxwgiCKA7%2FK08BSOtIQBAg%2FIVEdSzuGPgYGSRfQGM2Tgbgn%2B6YGC6vY5Xkzac1Lk%2FqUxH5EYBjbDzMm9CrC03JREbdKa7L7Rf9icAAS9cRa%2FfSMxSSzHPYwQEShSeSVzMxDocNnDOp6V1hieMapYHJEl08tE0ObPq%2BSkvXE%2BR3RPuKTdazf0shhUUHPVho1UM%2FI8winzsDCmqwzcCRHKC3MOmVtYFdgZu9yFakXRKK4mnmmP5FneySr9grcOhFzCE77bJfLzfrgaMiEDq%2B99cEisxMDGrGWK%2BKiUIz9OU9BRx%2FjIpVKTmeETeyazNty%2F7r0OHq8h8JWAJpFo6CBrHg%2FT2oXpNevz3ODP33SDP63Y%2B2FamH3GVRck2dF3Tm8r47lVpr6SYrsXcS7DPNkDIHiF4lcBLmXZoDUOowgqOp8aUGR%2FDeZsbqkdG0rdtEjJ%2FgFx4%2B8GNUTLbNp4D3no49%2FPyfeTF8aLKmwr0cjjtjFVTymiCgtJpWeJjTqrZSxUUJ55kIVpRaoAUqTDXosDPBjqkAY9DvF9yD%2BC56jV9sDus2jJAIuS7PZTsXkKQqX6u5RsUoicty359fZI6G3KFpsK5BsKW1Ku20FWZV35zyHbjxfTineXa7OIboPnGgXD9W%2Bh%2FRCItnWXiibnBVHs%2FL7KlRSM9CuvJQFmGBJNc6IWfXHFDKTxEto1MVxHY%2BvQRxnYwPBughRMak8na0mkm1F%2BwD%2BMBeaq5Ix5WDfBJj36eyOkeVBmF&X-Amz-Signature=c6188db4c964de7b7631ce2b91f598371a9b7388b647e35be3481b8326358967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCPMCLC%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAbXnI%2F5N2AHVsWK74cJudigtN%2F%2BRyCndL9IMoUMpImxAiBcWbmDUMOxB3fT4K9qkJM27HdkUl9v6yJ2AoteSQJnziqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4cs3GrULUyDi8McbKtwDMrYzu2zTq2%2FaxYdIH9qjm4Tlr2q3rp208q6iwEhYfImrLmmeRb1XsG3sKavOwYFXydhdaqcAySDeRaOD5W4ECWvFA9X1lEbYecdBp%2BVR68RowLRV3qF9eE%2FOtYS2y%2BXRijDxJkCS8k%2F8WhmsMa3avILdR6PIHyC5oGSxh6jd%2BQFIEwi%2Fi8EbEuWUYxscsuOQTF9wP7ZjRjfOZcPqbpkXNetWfPdqZqcRsLVeu8BIRLThihnaLGa4O8O3lOhngyv4w3wZab%2FMQalOupJwQ4Ka2uw96QBEsSjZhWJeu8yCDHX7vkM2UXUKiJISVGkx8DctXF%2BEJiaNqK5r42S3ZIo7cLgYnLuL5U4QUtlA0bfHpTAahxVsbdWNsu7aB03QRSdNIhfk%2FuJj%2Ft2Kl1y9sWepCJyF1KfSWXG4S1%2FFaa%2Fg%2BUURPKtR6U%2FDuTmUSNIH2ar9hCAKf9NwIXSjS1V011YXJZPFbhRwK%2F8l3ds1%2BmWabZ87t8WgzsJLORcjlB1K3jTWfPDz%2FyzLWQ9djI19CLCUjXsYfUUSM%2FeZr14ln3jJB0HiTSQkz7WUjgkloxIM9OKw6OvuTFRHN47L17u4tG5umaQzouf9cWvytKFYLHjqcEDbtqMSk2XVWvCzIPgws6PAzwY6pgFmhuvENIs4XWZFtU4NWIKxq92J%2B3qlJI%2F9mgMKFP4SGz8LCatRtKgOpR%2BG3iemRArhrJQESfd9OEkhSpoVxz3DtDjPzmHo56XoNb77hSGWHOywSFsvoT8wMRPzF0WuyS%2FgJJSZeQ9Aguh9fIIHTigv2BU9bje5C85VhOKpHt%2BsUFKcX%2B4hpcByXFZWF7%2Fe76Gf%2Fo7hJeWsiu21Tz%2B3nAAp39nSM4vX&X-Amz-Signature=031604e802e5aa63b15f4bc5f818c129acad44e317b401f50241603fdaf58f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
