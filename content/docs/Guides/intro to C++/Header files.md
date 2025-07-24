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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDTCUERZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCcCB5%2BWwpQDdMRTDORDlbtWki0axQ5q4OO0dI9FeVYEwIgWUdBwJlDHqaFaHW4uYD2hvKQo1Ce2heElt9MFtOeDvUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA5Acbzn0msy5OylLyrcA27%2FT5M3TXCnBa0qZNXL3Mpi%2FV2Mr7Mx7A2FomQ4EoRqXTM5TJ%2B9H%2BGiI4u7DEDo5FbmtwPIazhC63EiKoShzap3XAtlk1wCc%2BxshKf%2F1Ll1qXJdq48iAeKPQXRFaM88iGrNyeA2qJAPSg5zTmbSz8HQW%2Fen74UvDXWwrthFWVAcr1dIadBNFFvV1TBHnpawiWgz9mdk2opSn5hNIRhnvcT364IFkYV9djE4jdA30hv9ed5ZKK4NZkVKR6M%2B4oNALGCRgyytWExtu9GksIwJt7HWPe7JYtjw%2FOajO1JSxxSNbwd08H6rjEUd%2Fwn3omDsGC4bxpxwgvCejBEr65I%2FswuUlLhB3bbYPcfkG7zIqQ4uxHP3x5sC8RVUNXmVFa40YVdnXiXH4Ujn%2BxfNGA2VWhBJvoseBL1ndMoZMVbCr0G1QJLngSR390MQJtN5khyrRvmipUhlBpRL1BMdo0VsV3zdjrhSKqckO%2BVfI82YCDYsbAVQ1dn16r4HRD8fCZgUh%2BFyBJtxhLk7Kz5mQZEzKo7o6bE2Xu1sLvkPNTtA9nheg5MBRwHz9k8h91GOXVd4pxW5H57USAZNYKwy2KYOOA%2BN%2B9n%2Bv%2FO%2Fn4A3zmjwoSl0r6Oo44wlAOPkIhpFMMnZiMQGOqUBz7n1oQhRYOuSs1WGn%2Fy2fwB3rsnrGfiqqtxaPi2DbJm%2FhZo2gH6s7C%2F7OclIj7JLF0NbR1LwC%2FiwEL6g1zNH08ewrJA1htoLUHwQsEEu%2FDt7fsjgiErYW8fzozj1h852qxw57LHGnv52RU5QaUO7MT1p7Da06fbJ9acqaymmFuAntfldQufsdkqP7oyLK4oyxs1yn9cfxyf3T01FeyyEtirRdCBO&X-Amz-Signature=b27f73bda9870219c3f2bb3de37fea55965263235a541f70f1a95fbb66d11aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
