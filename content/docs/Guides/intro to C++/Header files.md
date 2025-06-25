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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJ2ITAY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDc%2FN4bh03oulViu3b%2FXmNJH%2F5SU9%2FvEhlHbPsuYB9cDwIgYJiseDYPrDh%2Bt2hD1Hq3q6tpIrQ0bQ5CdzYCsTgBJ9Uq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGgv%2FyXLh3P0vR8cRCrcAywxs4K1eOxujnb%2FrmjyDMiG5i1VAu2hR165FWEgLDhhqtN8dMTHLeTRdcJlVHeFezl5lC3T5101P6PMTczLiaTrcVv0L0%2BHlmsWT3%2BbJz2ksVKsfDXBJydQyZ6OA54sTq0hP1yZVbapX51Bpx0SQX01gfXcOmT3jusXc%2BVJiD%2FORHVYITNVUpu36PS0HOzktIqx1GH%2FVBo5mCPq1ma6TPkGikLgcAzcEPj0qTiTRHoD3%2F%2FyTLkL2HQRnKGgyc0ec20fa1OVZKZxXGHrZZE0DTrlHuB7guVuSfPnp5SrIgdenpyWpnr1pQn46nu6dmFZxobJVYHQc85%2FHZROQwqDclXJLX8VGc81zZvFmjOgmSoYVN51QFtAVfJf%2BYtV4gdf6cc6AK96BZ7VUKT5vIkoKqvJRKoW1UKr1vjdl75r8Z0xm7EzldQCDC72kdTJp%2FbzkWLNyiLyN019%2BB7XzifprZKj5pnTNRrc6m%2BDX2qHOwsSbQaGZRBqrqcn11K7g4wwa%2B7yhI%2FHrsH2FveObyascam4eGNUWvcAdvJHTn5SU4ysnxa91b2Hild4gMWiZcLgh4AD3t53aj2HEV37hOzgRimpLwNsVsEddsJpbRXAgSDWNJlxXpiCjsDTrub8MN%2Bl7sIGOqUBzeB2yijJ1aARihoJ%2BNSRjotzQGaWkp5lwxftIz72hn%2BYcXYkN9XbiaRgfXWzdjbfHZkmEernlOvh6n7u399sftBBulVShNsFH%2BzEMYlL0sWxiflW1Oc1cYKSLqmXyoS1cpmDuFw25ERkDe0ASq1AD9%2BSgssUE4A6gGa8RXN36NOls8XTtbgGgNO31d9WAaBNBIPTqbO7F0JsaES3IccgXMl8B8QU&X-Amz-Signature=9b03a6d5c29f7af74f4c4a6a41cf5edad491f69237fa4318715abb54f8ad4686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
