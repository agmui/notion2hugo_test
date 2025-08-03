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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTLA4BWU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpXTuKN1mvjHa3L1tMKDnnu5gL2iV37qLpos4CLn9uHAiA6DULFiK2CoOjbnvUyqHLyD1S3HnCja8exf5uzmefpZCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMZLNwn4lfDp1iwcI5KtwDOcy6c9IBqjXd4JQkJpTfjcnhCkNwyvDLKPM6kEGVqIi3Dj3mKiXGPcf687aIKPOz3U5sxK9328Y0PvgYB50CGq0P4mc30IFNMphPYxliPYXNOsflTDYP15Gp9WASpbXZRJihPzEzjdRRPpkam9lbXZhCNo8spyEYP%2Frz7SooE5IjePjKnhyQEjEgNhW7fpJE7dMv4LkM1Vt%2F4miF3cCs4SNipInbc%2F8bDLEP0%2F8Bw%2BB8oDrLfPosfRn6uTnbHFPSXuAOBhPg6Iff%2BT0ZpSNiFxCGvWPLuP%2BcmPmrOLxDpSykUwp1HgqBr2XQApOaXhuHNCqo6w6HMVE4Co0qLhj7UOAKk7RjuGdBLRBbZAJ8pz17NbsZaVq6avRFrlixi%2Be20ltmgZjtDCKBRR6jhwsJ2%2FfgX4c4g1hjRXyBXYLDzB1gbJxzJzUeNEGnzw%2BGbf0U%2BncbTo4NWcMWrnRlEsbYePUmlxzS3MnGM4phMNpcGU4qFuZnyMoW95Kea8Bp0gYP5o04BlCJffZTIEKWHv4yrTRGY6Fc65xh0DvQ4PQlyToFYfbUyopZKix6%2Fzh58OkUbjfKxM1XV1A8aBoYgYqWu7aPlUXq6bvzS%2BpZlINgncTPOkddpY%2BndLuSC%2FQw9dm%2BxAY6pgF70z2vwPhp4fLPeg07C2gHGMQSt1Cw5lyqCTI6pPW72JbnptiZXDrkxrUPxy8qC1lh5DI%2BlevIv%2FH%2BTZeturnD1DjGPuVsXFZThHHbwu7PEmCU2i2jBeFVNNqyd8T4WPQedWCWrb0QFpv67MmIrygTDHNg24Odm%2FYoYchtXiNu5O6YbJyYc7kDaySmXNjaF5cVtSJE%2FirRLsKCybOKNXMjVqPXzWsO&X-Amz-Signature=05ad434b2a979c0e4d85c9ea71091643334e430b31f5ad5f0f4ec8c9ae85b1bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
