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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7AWV4VQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T133108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQnY%2FhD%2BFj9aopoerGjkbNFFhU2VrJ4yPt8jv%2B4ezY4AIgcSsjZztLZcOyjUvJkfg1ALYn3a20UVYgB5JBIz7GGl8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BspEGtekequGXIoSrcAyB203Rj%2BAFnxxVuKH211gTHTx5qbI8DiVTEtw2kqCmkgqGsEJZEAM9csmt2u1cw%2F27C20HUqySeH%2FWrJp28%2BHW0oDwo4yJnRp36H%2FW56%2Bg2fPu%2BFM2LbnBsuyjSZlgFb1IgxRSIE12mwzfxsFxQcAegcylmfnHrVmNJBW2MoT14N1AhzKy88p3WQyPIj0CMArzUlABOfmzjnoIzw85W4K7RscV4uj8JmRUBvgHeq%2Fbd53dTpYCsvZYDJ0YxgKoiZyahfqUd97FwtMhk1Z33aLMCSWe3VsXmbTFSTzcPfh0F6Au9DNbf7QOh2aWS0IhD9bWiZygtnhnKZSeMR862SpFJyOZDmPhIJQEdscCIs8BJ4Q2fz5ugNGlbEQzzhmvW%2BNmOvrrfjZFmXAX255mVJ%2BaGSZRYd17a9hyr2bgkMmxXS%2BeZc1vN0V01pxSJCdpjJyPLGyJg%2Ff0mO1Yo71MgxQvxpgXV8wz%2BpWvKpR4vxey%2FXeB7eA%2Bx8ZT4uRbI1c8BXMLhPfR60e%2F2KRHhJuM%2Fb7d1IYCVCeAsx6PwthlGv5hNySleLl6bwdSe6Af7utFElPp%2Fw9u6zXEWYM1%2FlZ3kIcIaoyn2UbY6DX0O9QO0ECB%2F7po64E1mVyfkDwpxMM3FrcQGOqUBvf74GFZx9srVwFs9b1%2B331m61AmfFBxMcLEj2%2F1ZrlqksO7WmhwWr%2FntbQy4Guzw1nYyB%2Fb%2FUX1dmdfe8BG1EPTWFdg8de69JgqoM9K64%2FeiszowzWysZSjsUMPB5hlNGELCClDoVleQ5UHUfBnUmAU5W%2FqSqFSGjA11gP6DHRaC0BZC1EVkcxjJcpLMuhc%2BKWkulCD9zJT0YipKMevvXwzSXfqv&X-Amz-Signature=b9ee51a1d8048a5c06b047128930996a67ad8e022d82db1424c2d54fefdc9593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
