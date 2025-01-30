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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZA2XAT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T230113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1AfrVmwTSQZa3%2FdLYYKf4fRzb5a655KHcNUZ4BMlkgwIhAJYUOQSOdfEl0jugrZHV%2FJ2pagPUhoOGCD8%2FLH9mXWR%2FKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxk3RalZsprVQC0n4Aq3AMk7RpZXH7po0tY1rNotvnel6RQlsZrMxQP04qQBeEJVaqsULN5bUyHcz1dyrkL7%2FUQE7EsQnktMrR2LhYnYEmSQADZFrtyxxK%2FWQvxp8az2%2Bi6nVxV%2FlpJOxvTcAYcpAGwqFq9eDLWOQTyKhAVQ%2F2PhNjTNBmADlYEDOLK1%2FhNjn4RIOeKhVC6i2TUrrTEFr6JgtUmTDYAJzv36k3ZTMcbSK1MwJxhFRFQFkMy%2BiJmLEyHUjGMBkmOIljjD2Zpslg9sFAHXYStKWqDdDxAaubx1YQN5HIZogG8ijDpb4zZSrR4vLylQT3bqhoXHPtABm5tXmblTexlniY3M8TWKuotT%2BuhLcy8y5kuW6MmT4FwIwmucLwOUADh9VzZ1XGCyJadT0RRxMDmOc7gykjElJirTNPOKzT9f1%2BEWiinXGr90om2sXo4Jy2x10z1i162niZMo%2Fxcx4q6CHpLmkEKI20U5gATEWLnz0g2uZE5rE13lmdFPHua8jyQRXWoLPpFseK2gAmTS%2BeT3ji56N5YK78dSc9tysF5cOjXjzMVnNc%2B5ZhUAGKSXNpHi5dQ2fA56xb4HuOeJ0hQXCpr2YVa1t6BCFwF2HkEYA53Ei2Agpsi9erZgyF0C4qro73IbzCY%2Fu%2B8BjqkARnRPLm7JEdPxDaLwcMyxNE8ltZ7L8oIm0Y1uebLFQJq8%2Btl1FriXIkL9B3MN%2BxRSP5%2FhXSfzTONwSHhv5c%2FE1iVs%2BDPeca1W3Royb7shIew4u0yB%2BYkLI%2BSS7yOnpsH5t6erw8MqLWZY4TN6XT0yl5BIFwATU6jLS5YTQNw%2BTzLLcjnyQMQ3AJeVpBVm%2BCz99bIcCLmesPUOElDfqhVi%2F13i09%2F&X-Amz-Signature=2644cd29b3beb5b3781a3653cbd4c7838bd7d25710e0d3bdf108dae13e50ddca&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
