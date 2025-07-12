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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622FICBCF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsWkTyPxwiSk5Ia0uU28l1Mv8T4NXoGH3r4bChe4i9pwIhALDp1ON%2FqO50qioImQoQ3gRj90hpF3WfWc9XRHrg2LjxKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbAlU6fysE5sXPQs0q3ANEAcQey68AuEsUvOGj2cTYZu6JuP%2BfEYnwEPv9h7sCJGCecSBdfT8IJZ8sLHHVchgRyp%2BKpxv6ibfJhtzhtAEeeN%2BvWZcbbCRpIVaAhtVy4wCl%2FESzWKUPQxhfopBn4ImS2ikJSEvaO2WckUzTosIinqWKa6k8nyqv7SrNy7PiugdfxOhn9VScyN0RO6hWbnblz9C7deOxZHn4EoHV%2B%2Bo6oSP7Bn028PPvyUzSjIg4zNPflof2TU%2FRDoR2UHfZm9YS8ke4XRwu8xXzmue%2BY8DmmJSQo%2B%2BXu4bybAdXMiaEfwn9dQZEx%2BdmYAYkBbgd1yPpsdDRWNbKxd4DHQEUoA16%2BhgRZ2ocb%2F7bPjCYJdgZ4WGbOlcvKEXy2vmbYOzFF65OWf%2FkegRVaUi8uWofDY7%2FssTIfZt1KfLBAxbK8nIiYe1m86o8oHnx5PZSVFjMwIuhCKHxep3PtuKwSNGufLSQTSfQn%2BsnptIrxJ%2F3OVmD834ZPGPaQ9tUlM6s2d2Nvlf8OU0999CAJ5Q%2BdSJvh5j%2BInPPAO5oIO%2BOsqDYPYBYItJ%2BXNMN34Ww711AibHgokfTWw5AKxm6BA8t%2F%2FtZU%2BYHSUtoPtlq943bZYwuTLLUI3o9Aw2RZyjDksi5CjCkrsvDBjqkAfORhtMaLqply4sxtSqLp2gk26J%2FF3e9uNbhnR1sFqQVj6WmA554oVLjedsQy4urHRX8ECAGaobZBiragrEq0UR2NNoDneiR9R%2FJ4tR2eklUBHQzXE7AvvMGNvEvYLTgJ7JpNotWu3ZvDQm%2Bmg%2F9aB6C2Td9noF0Sk9ZWzY186ccoB2q5Uh9BdoX5Kh4SPqpdEVTs2Y4kh0BMOK9wuW08mddgM%2Fy&X-Amz-Signature=f01d642b4ba6060cb1b4340163d8708bcca56fdd083bdefc9311eac7a78080a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
