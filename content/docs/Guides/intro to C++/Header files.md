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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622XDPTCD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvO4ghwtW09ePoamPgzPFwTl1P90sNqScd2OOn2shRvgIgQx1iIFeCDOqMcYvrSGvlPzySvMbSLWrE9rA5TauJMBkq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHyxU%2FoHEv7oalI50CrcA7ZVDvxNRqjdSLjmdNPg16oJT8N8bSjXLDw2MFOVdsyjAEfldXXZUWI560OM9ZAIaWBk07LQLrPcTrcseMCBJvWSo3KJ3yTPgvAy1h7ztSz2Qp6AYd%2BAsBP5UN2U0JtAWNx6PUgEmr2umjPxbnPY%2FbAtboR8qAj64GkL29tNVCPfktk06ZJx2YzHFWCzlj3RO7stKrYA8%2ForbhHfDm6P2X7%2FR8ykLcHVlwrBSP5MdhjzbRfOjQk5qQOmDdGNqB1zhYuVknPrVeJdtM6Fx0s5fEr2EKFsZwTBF1lNKUBdWWkqGiK0EHyx%2FxbN1SXrOGJ50gI97S3asdtCW858H2yfFrLmGlKS5nT%2BeeYWuTKXeFtRE%2FgwgyMoDDwLqSIQQz2cDw3j49NNSsxkoEG%2FlV774XQlBw%2BK%2BYZBRlWmvFkdXVACOz3dDsRoNZaq4d5g1zmLjSKrlw10qFKssJe6NEEdb0CxWEnKnWavv52kWBSp4hKKlBmQmCjWyhujiVVKyd4A72uOaa77xyuWZFBWMxe8cHKrbLojikU%2FZn6rPFogwfiReeI8z9HaYrqpQf%2FPlCvRCNStpfXgCXEYkbAFj9PtXsXElTHKVFTxOGPwX2dYCU%2Fi2jKnch0iNeKLVZhnMKm1pb4GOqUBtveyHi5uH1z3w9Yh%2BhrWT4bM8jr7BoW9Ot%2BVkenIbWa79A6uLvKgQRG1IPXA1rXOy5CqGKNzog1Re0OsHxWxruGi27lGBNGDdmQCRHNLHuCFvxe4DTyb0foz5Z%2FMThwZlsP%2FXAdKpC6Gx5atTDA9yiEYOaK4xM5Z1YvGHCmZzhmeDLz90Jf8%2FlGBFkfN16S9VstoetLPij3O3IVqdV3TS25ZwbZo&X-Amz-Signature=add578631ad7101029866b902b5fefeddc5fff60a53e28cbb7afc22a85f3e193&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
