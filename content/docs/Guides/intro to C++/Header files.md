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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625M4Z5DM%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIjl%2BmQLkCEcL%2Bssb%2BK68hdMf59ig0F0MFYhIfMSptrAiEA6rmojqqD1Tn8EcBadRzuTv4d2Y1Puq%2B%2Bxek6vpPJIjwq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDMCuq6xlmOo6KeYcPCrcA%2FfMTIO%2FqfCu04Hj66nWWbFKFumuNWE0h%2BHEFbiMTz0DyalCaaO4ez3qpmiprukjbJm79NTt6G9ggwgv1ghw%2FkAQun%2BsZvn1KipYH2YRwQvMIXaCWsNV0qFYgps%2BZmdmGxs%2BuKFdS4uJ2IzmyFrUbQaN1K3SIBv4BxgmrScwEtOdK7ywtCRK7RvWX%2FOUdHziTz45wPHgezHxyuxnJPToIhuJ7xZGbWboWbL6LnNZweQjayQXJFaJgY7DV4Az%2F0BxhPM9TDJOr4dsGOTkt1hDXbc7shsQdIM9oENMpQt5NhSN0HpxWjOGwA1%2BshYqbk%2FTZ8sCQgFwcARKG29lEL3K3u%2BMuL62W6kZ%2FdOzv1f1UulVbOI4HgN85A9lxBttzmLAtMxcy5TBB62NADP5jLKO6v7Nb49FCJwe29T143uXwT5UMrEcSXnRh9WX3mVTDnKHLJfNy225R8YgvNa6afdwU4Tb7n9kZigtiwJBZu6NPtj%2BmPy6Y164p4Fboj5CBM63dcrg3xVME9OJEdJOI3W%2BqFTHyWg5A9hv92Y7DARO%2Bz02u%2B7%2FMYZRzzGzUVJZ2xlwT86%2F%2F9X7hGH3hIUwkUt9pmqJYlP%2BVogrl0x3fI67TBBUbRs%2FaLCgqNJ3%2FEMHMOv94sAGOqUBn7g7RfGjNDaGhC879BVSKHHh2Mq2vfMwK17GOr5y9QrS1KKg4ZjonD806kGxcFCTLdz6haytCvyVBattrv5zyLNF%2FFegldVjqhGyQDqCnLstgKNM%2BSoD58u1UcU24847QuUyjENbVSBEtLqgyYyc%2B44L%2FDT8PJhzMYgUZt6QCAmP%2FzQtM1PsM%2FDv3mWnGRKcXU2RNg8mveJBhenj%2F2Vi9FrDo91V&X-Amz-Signature=f8208741359be40ffac540040bdac0f691471b7ae15ee9d8209772f5941f5830&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
