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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVBRJMAS%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3p3V7MSGpVJLtAyjnk3tq1OQwjArdaCmZh4VfQ9V8mgIgJSaiP0rRQzSFDLkN2DnTYUEDueoyfiHdcHnYkfN1UkAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmfJp%2B74caUleBQ8SrcA0pl3t26lB%2BxgOpKFTbfpyOnMiZmDPgMIkcxTo4AuGVQddcG44apN50g8TVvKXhbA5QriMc5odnZXOKrClA6%2Bsvml1TtYzRianfboWtuFAOGta9NXI5ARSchgH%2B3k6NSQlovBAk03KJ9E7lVtqYeQbr8nU2ODQZzf2CPoRZkxEWQ%2Bgc%2FRIl3gILX12UfFORRSinTgX%2BGBLrXXHT8kFSliSTQp0qaYFtKuViM1%2BqEEc6MNMnJyiOupBau0hUY2q%2BecaJx05qdF4XN5gEvzS9J%2B6nJKMxjGwqQK1U6eGrsjPF%2Bv6EJ66SNcT870lbxCpOSge2lq1OPNF%2Bqa3WIrCTOaazhJNGSqzNu8drBwBJmKez41CCB%2B05OzxMM%2BeeZB7hVi3OxYX%2Bcc0T0DzdDo5BRVFLM1HASTh6G9Ed7Sgxtl%2BLnAkSSKvEZsxMQFKik2rYvbT8%2FaAy61u8tPOJMwgW7vLiKSZHs86QKMgVEU0gf9PnLVIjBv1u6Flp3Ak7kUloit36qw%2BJRxIFVTzb5N27%2BXwf9Dir9yr9h6B0R0V5Z90LuLhMZByRv2lqPSxSB2RQ5d8kPqL7SyVD4uvWbwYPJ4KFMSNkFNRlsfaBS11gIei3bHhSHMhjvQREpxYaKMK%2Bg7MMGOqUB995llnEjV%2B1YdlfhlSnDoj4XbIvsnbHfkFoUcSwnkOH67p3Dqrn%2BiMjYiGVJJksmEykrcS4w27PQboKRjOsWNdWkLJDvL5GzYGe0w03AE2G7odoiiw0wtalqzLvj6e0JgBWnnBtKd0EHn%2FjqNgXScMmej%2FCIMsWPiPXwBYBC2F1eNet5SwRXIAr8MC3CMTMhxD4m%2Bsh%2FoSqoniTGSDUf6DSijQHT&X-Amz-Signature=ed5dd9c66881cb7b04b06302f5c191833441ebbba0cb22972f476237b46ccfb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
