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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3YZU5W3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T170606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDThWcur0Hzsvh27KOQ2tFowGKO43ul9omYsSaGx9ftVAiEAwQhFA39jXmzgKAH9ObkfEiNMiCiIbNBFr86auB%2FXj7Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOCdy2oUJ11wmM49%2FCrcA%2Fphx%2BMrk%2FRvmRLGBR4r3X3yf%2FAl073vADvKNJsOUlxDM5zLZChuRCTrFqXLkThXp2eiDkuCQV3BI5lcUm3t6vc59CBYPbWJILtym7QkfB%2FNSmNlwWMnqmrI1t%2FRC40pShFNbcUcGWMQ6oenqlTI6XZinvT1RFIWr5izXAsXzkZEZt4tU7B2cdNMw0teuKJqCRKhpZeEWXQ42XDB5RfYSIZohup%2BRivsAgQ%2FRQpas65RDWrRUMxluq8G%2FcGKbrywKAanmK3G6QiseInzU3Q9BuRUhOdZCGb8opP46XRyTf3LiWMbv1kPl47idUif2l3VoOjv%2Fz37%2BsL%2F%2Bub6%2FE1s6XIIFphDwkxfTPCGvf8rd2MQFbjT7BSMvJ3fgh5AaSqUif5pyHGQh4qnOuYNh95wFx3gwKS2Q3f1oPoqIRmoswpM%2FjnRd0DZytazE42EijUC3%2FUuSrpv%2FaVmvpFqP8Hfxdl4hmCtJvUSjH20q7roP6YiYecTQ%2FzooGl1dW1noICiiUE%2FYUXec0izCO2LVT6aoYLva0qE5QaL8tggQ5J97wah9UrQRnDeKhbBp9Ww2m8Wc0s98Wd76v1dak3G16qWQtbPAuYSt2za12BGF%2BNYiAMumPExunYkZUu1GGm%2FMOmOp8EGOqUBiDjhXj7nLdcgz%2B8NHzUJNhp8%2FUEx5XUGWeK8mZZbSMSMfjcqO%2FIiMvr7tDGbnhM5XmRR85OvC%2BmunfQ0NCac1y%2BaOUnxcOkxDHhECiODz4688x6PLsopB7SG0obCxlxPHErIRmA2pfOtAgvgf6tcavSrf6gRfTHO9JPOXjc%2Fbtyj0I7u%2FbRppIF5fQpJxs4yyET1uYk9lFMnIiEo4lDyDVUHfzSM&X-Amz-Signature=f556e452fecb1a5fb3c83c3249f729d907d92da6708631e0fd48e9780a2ba945&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
