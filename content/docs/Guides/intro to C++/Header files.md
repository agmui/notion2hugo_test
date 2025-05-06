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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE2VIKMD%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF54NSRhBv3HFc4rsW4IhHslrkwvl6hkIQv9sYilSgVnAiEA%2B23KCrQah%2BZXhhljKa7BlgeoEKNVZ7yqlu4AOvlcmMwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOEY8x5IDW1eQ7AG7CrcA990m3E8RNgq9B6RnHmRiKxTbZBtwPMpt9vn98BLwNiY8JNfzX9XPXCpfiZQ8HlFUbW0GMIjSizZlsb%2Bv5wvqr085qwWqsHI9uIVzFhkb4aYUnfWPPwmmgkBUZ6Q1X4%2FTigzTCw5QvRqoUWP%2BIpT4Wo2z3HnbVzXiXJFxRcVP3ZB0zM3QYqHcGAyLS16YwXRfdnVAh1BxDvXqcTZ2oZT8%2FgfQ6a%2F%2BfgabKpk40vAM8Ju0v4iohX9OKTnhuTfzPIfXcQ%2FPExeuBAhnbasNQLCelkUL7JhVwb68FQJclH8fwURU%2FNJBmTXF5cnm8WGR21rdVUbPmVL6dZXZyefpM6Yjbaf0ounhc7J72nRY75351A%2Bbp9mpn7DFhLlettAOv5tKLcBb1mERS2NruBSzI3yBb1bNrQP9GN0RGgN1Gn0Qe8v9IB7UgOyXzFOzV7fS75BKC2p8EnNbESxZKG6ZSMi6HVEorI3vFjQoxKR9NO5F8Okyzt0TOHRNgyJNoT5avfzLmqOPAj0TogUBghHcIEFK7udPNh%2FIS4oYSevlK2aJrlQagnx9CRr6ayGCJb0btPGq%2BfS0or4C6y7j%2FlU6vnVPi6XyNHsulEcRBje45RpNEbO21BXMhonLbU1l6UUMLCM58AGOqUBP61DJ%2BR3QahwCXaReAoTcQOXpSMKMmtZ1oKZohwn960FDv2pL38NqeGfR6PJzceVg3Td2Qtqa1dbM3TWxC4grtsVtTwgGVKGQL4QiTyizXxclJsusglg9J3XktC6cpbqBGqc8PjrX50SalcFAC303hwkaq89Q%2Fn5kfT6K9hTMmmFue6SwKmzCbkOGCBGRUu6gcbyLJ3Pe6exZ%2B%2Bm%2BXORtgYxzaGq&X-Amz-Signature=5cfda628a7a3979e39ae020d27e1cce200c84882593c190ef9fa375ae084c6c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
