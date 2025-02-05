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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDRCRAF%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQChFp4BP%2BTmPi4fsq9GuXF67WVfBWh89rSlEycbV%2F2jJwIgN8bTrbZUYDjxNrV9oLsxw6aHS%2BY1Vrr%2BkYvV5tm1aKUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOvJX3yURRNDjVvQjyrcAzYT9EgJ4vZaURBV5IwSF8evMbJrOlTKqBUwKYchgzcsujzvaRRaqC6TaxGSOi0nZQEYUpqDEMaEdOuL%2FXEqfMXXBMnUG4KPCqOFr6HFl8oE0LZx6y5JprZkpAij4x1vOwvPMZv4dOhCGNwwCByCi0xRQQz%2BM4rxPD7yKQOXiiKXXRrD39NLkEmUVky%2FNNqZhSNlTwCUeh5hx9fMpO8YKoNNHvBzooNMhj%2BgvREZYWt3IqJYHOp1pESnk8pqcRniOJ9%2FaatZ9Gn3cPLVTjVeTN5Cb4XOBOPOibDX%2FepbGwFG5D6BKnCs%2F34dLkMOOZ5m8IEPxP5bmKw3fSRBSfzZgjkoqp%2FVVaEyXH4t3aoYFKw69ucFCsgS6a3LqQLAaSBbT8VV%2FnQja8XMH%2BvhRrA9dj22Ar2Yul%2FYre%2FO1wZ%2B4dw7yZ%2FEspgpmCTmzoUQAhOes69p8nvz6ydeq39aKelh7dOAeiq0iRgcF537auV2N8ZvQi1q3K5F%2BlalTq56V9tovqYX52robSpzYheugdd0weoe37CFX9B%2F9GG%2BansrFcg0DQiGA3%2F%2Bw337rZrSyS59bVCEV7cqSC75ExCiQ0SEEkxiJcQnso62tTqjEUXRFFBytVGN4nIV2N%2BFXiIGMIK8jr0GOqUB136iZ7gIyN4qV6NOp0BJ%2FRy8ZBJIm%2BwFjPEsnE1BS7MOuUgecR4x688Ff3P10DjHc5w0DuDq1Xfr2M%2BRk%2FowoeIEPCTeptyMPU2f7Q7mzhZqnhX4yZo8QT2jwGYiBCGMOrM%2Fg%2BdZFcALQwtVN7Z7kVlVnl6IPTweJbWihVQ1caU7jFynNt0wbCXW5G%2B9C7tVPTNhpfiiEXCVoTOjcjgcvI5Qq1nc&X-Amz-Signature=e50af150a6526f5f3e126f59e52f4e31b51636f1510f1bcf84cfeb700504f1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
