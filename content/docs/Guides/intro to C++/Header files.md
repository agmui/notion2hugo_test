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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHT2MNK%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCp07EX%2BJAmWmMdCDmjvoNEDDIvfL1f7n0FJdKkY7BJKgIhAJwpV4M%2BJCMjqpg4rUeNI%2FRAV1O9%2FLSxumhj4WBVGqYVKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxyIBem2tbBiQFM494q3APAVlMyjFMD%2B14satgZN8WPj8w6DGpiI%2FgRvJZKDsaSiZZesb7AsazKRhQgH%2BfVp4tjqWTf%2BD%2F0ROYhy11cOj4W6ty5lG26qanZHSuLPOUp6tT6xXVdJ%2BFE%2BHakSwByPFKvzr7FGrLGzdwQqVagNHixJ4Vdw2wTaJbRztYtzQ%2BsELIhUSWVLml98KBlQ1Vjlh4kKOX%2FpY9CssySZZJY7ykIU%2BTZEtBQh3QM3yJiRRlx3c6daypIUuroFFUDMrsz0qZD%2BLNbAeGdCe88PqZVL5SsOamvdPh1298OI7pKLM6N1S5YhU3OivcIuVFGfDDpPsrllj%2BXU%2B9Y5wO53BDZbXD6yIM0akwoITQC0sfegLdchnpsnNimxlIOd2RqLt74NGQ%2FFYNWo0IEzWXARzwMkAmA1AyL96Eyus9GkfAwI0sDm1IQHBYX31gkMjDZkPKgS7KgV3gNxZR4OePSOUEagpmLxhRM1z0M7HmMOy30Q4s9MjNqbsMmeyphB1cdrU78Lr95SIDg35rFXf1Dh3QGEexi4Jkof5Blpjuy2C1gl08uJEZZcSWl7%2FbQlXR6QvEdYCqxmuaTUrAGJDl3WYFcpdetmwuwNf2HRCm2mJp%2B0LPqOpf9oF0SAuZqE3t2yzCvxvG%2BBjqkATVJsVCpgeOlJxHNrAfZ1%2B7zKsKG93RZpvkdxu88RZ%2BJyLujf0M7WLm%2Fv7U%2BI1JOK%2BxP4xrRoK3rdBSqCIDv3CO8ocDCUD%2FOZ6OIxnSN7niL7543bbp3YwQC6MZexky%2BrDtEAqQ31sEa%2Bo%2BwKChIAbyow%2B3S%2F0hSZhWe3T1x19TgfWTMtZk%2FwKhVP%2F7F%2B%2By9zGOqTih2KKP%2BjYXS7nz4cEXonNxi&X-Amz-Signature=c4508818847c26bd4e6f004784667283e4147635a277dba384a77554a7a7c10b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
