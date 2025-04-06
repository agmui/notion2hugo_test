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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC7S6VRC%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T100812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQ3%2F154CUYRkTlAZ6ky5G4dZxOygCmW1OaGrC6SjKrZAiBUbxd8CDaeGB9RYMgkukWC2yu02Mhj0pQdg0c2PQwodSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM0IZ1s1PZtqPqcadiKtwD9%2FZcaK%2B09t3Rxrczt%2BDNH4NHyOvjf662cHxMMeEvOQmpfBVkordnbNCVxha28qoaxVbjqQdfZoaBOWoKYQVzxRUt%2BWVSlY9DrVNuyEJmMHD5OSmdhdiMf0Z7ivwWevNIlSCLKxXyVh%2B%2BvUdXTU69SWFEUqr%2FBg1zc4%2BDxl9a8pS9c0PH7yqUC3mFN11PeCEpo00qFTLwXRC9Na3%2FPPf8nbvWJhW1nYUaZ2LVWMcTE3ZsvIvmX0TGcVsbzDONmQ17AiV5BXEUmd1f370HYpj3C7zocRBIlpRv%2FkxbLnoOvayogwIG5wR7MQAEU9m2CI8hdwzwKi0aAW8oK0I3uGQcvR%2F6uX34XGtrVoucIzoFBlP%2Beqhr0%2B75QEjk5n%2BP0vpaKO5ic0QUdbEk49PejdyoSB%2FRfehPjLNMN9FEr5XIuj7YS3yK1yx2iZ8e0R4XEPr%2BEzjcFMODvmNn6DRysdCmKaqBR98qxTUTDSKRzKgI0mDw7mk6bab7Gcqbq9%2BUtqSLwDkXASHns62WpSWgI7gW20AwsaFnH9RRO2zceU8J5c4EFZ97fyu657t03Qn83hXvvgczp8%2FEfmaOnjcDYHVMWaT0oG%2Bf1FWsmVu49pqyf3S1X2W%2F2Ey7oVL3mwgwtP%2FIvwY6pgFgy2%2Flmq7ORezv4luIu0CC7Gfy43NP61ejE%2BpR6B7NdJBYdHFSXKxfySO5A%2BhaK%2B%2B6iJ6du3T4OyYPmxPbLd%2F5jyhkpedbOaXy68gAMuPwIFX51rFc3yOLi6nfVcsF3VvPZLuLSj%2FlMDdup6lqFkwesLID9bdc4Zzub%2Bhi%2BckstcFXUCru7KdenJjV%2BxGAFt%2BaXK4s0higYhG%2B4CUZyxZkbK97A%2Fua&X-Amz-Signature=b98e74410cffb7ca2bb795aac248197563429363e5ec9528fde4659d3aae49b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
