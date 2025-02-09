---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NLIW3ZQ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0cd9bmA5%2BimYev%2BSOci5T0ajm7G1oc7cJj3874m%2BSkQIgc2Bk8INKG0TcY2XCXLHZZI%2BAMgYcBQLSkKmIK3fgRUEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOc3TmLYpYyKFytR%2FircA0V%2BpHKf0K7G3xGX8g0%2BJkjaAEHhoV23OXoAGm0XEt1K6cVOQad2RGW4z0KIzIqKtluKXneyBCoj4zswbk%2BGuCixboQVZQh%2BVePB%2Bt9hgHbX3DHHV%2BScU6Li4Hyvsoum8ZqRicqkpYFGeQmCaGeVQEHAwqQQmAcczax0MHY7BAmpIX4NuPAKaRKs63mpv2y3McKJNX%2BC4gOz06bLmcEUgBIT1TqujxwHE2Qysxq760kl5oHTuf%2BMg62zbPxj1gAYyCzKZF1j9XWNCHKLevE0d78Eq6BLmDZo%2B1z7y%2B55b%2FFzeIo2K1xRaIWL9m6TdQZNybNLm0vqyzn3uRv7iHgioLl8EBT2831%2FXhBTrgTX6oZ0waVXwnhsBxZ8CWiNPb4EUZBX4mAx7sl1dGTL7fwErVYRgck5Jq2TN%2BnRLTsRYParKXNsG9YD92bJlNfwW20rVRLcfZQ1pYYw6kCbX1b5HRsTFn%2Byfod%2BMEP%2Fpwis6OwOUkwZNz0nD489Gst%2Fn03EOaKYg05F67SWFqxUDAwptyZxZJ9FwlG3q%2FGeJ0BlTFHRI%2FUpGCwdshQChJJFgu4VZD3xqLfTDalUbv0%2F7TT1M0y2ZD4%2FuvDBfo%2BfUnZbCD%2FXJdATSXKfdRqsD1L4MO%2Fjob0GOqUBAOYNXHTLvLlXMbCkU2PF9LW96KrFwZBNe%2FVCUqVIvo9gjh2NJX0%2BJjFQ6KKHNYS%2FzxkMuuJFGoGCWzsRuCaFulj93V3duKu%2Bjy701HGcftNyV0KXD0EjZj3zOPuVD9Pb6t%2B8NBO2N2SYR8lqp5DcaJy2tnZyJFmTNEZUq6PrTG4OVZVKktb05IgtCHggq3EnkDy6KXohjajyakmlOjNRIK6ymoOC&X-Amz-Signature=57a3e39785709196e0d103dab78fafd3d03b6a7282ebd9bb8daec6234457f75e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
