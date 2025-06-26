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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYCTTA7V%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCFBWG1KSd4MWbqk%2FI2FHLMCwdlUra0gOZyA4ZYFJCvOAIgLyBjJKGUjTYKV7PW3J4peKlJUlICZPDlBXJidNd7Shwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDM8VfEGiag%2FiYpFZVSrcA09COLynyGUqzpTdnowAN60Y%2FQiYMDyHS8UaMRhUrllnbIqDy6FSKG%2B4sWsH%2BvVCztE50Vl4%2FmVFPMID1NQiFNKz1tk8N0BgispzlburKIonaSwOZJaTsPb1OZsujJAlZ6O6fZ9SqGKPQKwIUa0uHsGaOGEXQw8AVt%2FzbU0ZJoUrUKwGGQHgkn%2F8jNLmN04SZPm9dYwp7Wh3Ch5Wes03bL5LjpJEUNgkD1345naS2RWlYi48P4rPT9Tj6%2BVKsLb9qbRnxu0j4EdDrZsmCvigfj%2B0mfF2pcX7oB92VdqkVHn3vGS%2FMCCe%2BacG85i74wNIo3JwOfXfKPFE7GjDcFmx%2FFIEPfVHwIwrWflsFeIpDJ4H2CMvH91%2FGFVoJQYGTed%2Fc1itQrPZctTLDiawTx9RBZ9F2ZvAmty1szDC1QUcSn6ttImcEXhoqZ21oKqnMbsdZ0DGxGapEUx5czbDInEH6XTe7vmfbavhysozfBepra4d1bUnY1Fy8AOhaDoRe0aWwavFRobmm%2B17WPf7SXMU3gIi9BfVeK1dmXvtdZgicDLHoSAjLNaQw2yBABiL102JyXM%2B6oYUO8e5lBflBIzLPK5n3%2BaqOrB9qdKNKUjOsj4vvxCz%2FpP9hJO4JstyMIWe9cIGOqUBk4IdFsLrMEooZqRoIo41%2F%2F67pOhjDU9X7bH%2BNGaKU0yR4ldAv8uE%2FTT5HWCAtuLOJfiDZZeXc20SZ5S%2BCnsPOc2eSUi8F2dD8mLdUasQftFh%2Fw78KPiK4%2BOxNDnQpcvYUJRUjgmdAq3AlOkLkbMXM2mbm7E0bEuD9bzAQcJM4XkIofKSD8Ryrmn4ZaFFVUPN4zUTmTALEa977%2BG8ML4IEmzWDPjz&X-Amz-Signature=108011a7f44aa46c205704393756ff531a21897dff16ff9747ab02cec8a59677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
