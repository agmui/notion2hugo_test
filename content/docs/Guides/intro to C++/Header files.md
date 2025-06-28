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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD7HGSXY%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA0Bp8mmnB9YOeU3qrbdiNN0PYc7pKV3rxURnMWjdA7JAiB6TwHNGsQ2gJhIpR4N2%2BC8AF7f2atm3AuHFnewScwHEiqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgr7UpO60Sgxv8KURKtwDdo5hqSlEgy2y3wpqAaR0H0P1aa7a6rKu66SYQ8KsBl2cIvJtsOmrYjowMul2xt8SflKL8oLqSHUZpRwwMObjkZ50WCxl9ugj44zxSRuuGzk0Pa2Wrui%2FSJKVgmHrN5T6U4a5po0UzgOuUo9LegF%2B0jub%2Bh3VUfwyi3oRyHP%2FZyTKeyi1de2vo7Lo6ycXzeGA1juNO7crlaHht9sy3G99HXbLO9Kinq%2FR6hYQz0A4%2BikKVRkrwFQ4B%2FjxDL26ZjqFbAcUqjAkx0JwDwEUSlUGmNQ9kjPHQDcjsYLpwIcA35AcI65%2BxOwDjTFJgffPxC8Gnrlilp5hsoavqrEXfioGP4495Y062AW1EMdSMXiJ%2BNPiEH1xg5btj0JsKTK6x7zUZy%2F9YbjmvqN%2FB4rhYvBLpbKUGXOlbgrULOBrv1fu2voqLAQC9LUmxlowZ%2FTyU0Ab%2F4XVLpyTdjAhgbq7hE0AipSbBoZm%2FnX2OqqmrKJcqUixmI3hs%2FTRHxBlVNa4qnHslpCMAtyaA%2FS37KCzt9oBfleQsgPqKrzPI2Pa%2F2GjuCKOMYyZXMXcTutiSzskBmgZ6Wz43jkPZKL6MGskYJ8TuSAvleS8k0zJ1ejZ8bwEAJ0bVEoQcXa7cazQRp4w6Mr%2BwgY6pgFSwnDuI2kZzJ0nFK%2BDsQwiGi9hV1DRqT48L%2F9aPEYl8gGS16ZR4IqGsTE1OrK6BoCwe3sh%2FTea914UsRNJYze51Cr3HblAZek2XsFDJ1tH3cec7GcAvj%2FxtdwjTeRk85gaLy%2FxfN3Uy0bZpr7y1OsrMqPOiE98mi2QKV2YYZqA58aBs5u%2FqCFCf3aSCmVif9QtPc1JpWGu2Y2AaLnoRdokI69hhiXt&X-Amz-Signature=df39688f3095b3f918eb542e2d0eacd96c178ea7963dbcdc47c2892dfcc5a357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
