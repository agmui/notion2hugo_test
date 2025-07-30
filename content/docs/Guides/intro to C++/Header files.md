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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEOTPVJJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaGkwN5ejITYXRaNaIxuVqPxBjrA5CrMswaL6smr8LyAiEAvQVKqKsS4iNxkRfczlAtGRxyIiOG4lTDnKUMD2aRj%2BkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb3Hsd9ShJnknUWdCrcA%2F%2FxUN3RfGldla%2BqnUVLF6G0RmdkG2wyhPhfB7xET2nR%2BPH7Ag74M4fU51cHq%2FKYDhcPlhTLJfEnV3ocXRNSg4ADXjp1jLPK0pEtQY3CoZYDncMOt5B%2Bd4MWsGM3v0xKTsdiJXhwt8QiXkvbQZvi4nANnT66qG8o%2BCus75CkRpauG1H9eDu1rvjjcjhPtAeIm%2FQ%2F%2FwqROIJ1NLqz85iNJI1jgtLPF8VNPzi0y%2F1Om5LyQrEdFwOJfevd2CurVRopEfjBdc0VHiHWnkD0ORE27xuVkImx%2B4jQqK5fDEB%2FgBOmSdXDw2OjPqVVDNtpAQ63YfLvrvAqelGxnfBU6EwdTyXO5T62CCR3Jk%2FEJLixqdrHUE0L9p%2BMTNO%2FVEKV3aJvP6FCaXLhKqJWNDL35revwLGvA3AX4IK5wagzglUxg7Ttpgix%2BTm0SrihvuYD7TmaVJy6c%2BYe2ykponfLpogFgTN9WWRiMNOIHK6HZBloIWQIoxV0AE02c52BlvoM73uCzUXdePIdy6b06k42%2BnhOlF5W0ufN9bPpBjc4IEdHMjMUP%2BTT4SWNervIsxikZ6531C1FaoLkTs7DNMuWS8Zhhp5ZN29KYDMr%2FNOYn%2FEHzOdgueAsWbxqLKSxJQOHMOmLp8QGOqUBXWIrRyDTAxUIMWLC4GEODIR50rgRekZrvDkQXSLjzNNtFRl399UxB8UPP1zFcg6Tao6%2BgzFIbmsqpk0%2Fny92yw%2FhKN673KbTr00Igdih2drX%2B2byYxibZ9wdWXVNJahdMKunJ8GyQVaf7V24SQKJAsPh%2BZCD4jeaxEFa2isNAL%2Bx6u2P%2BpBX2y%2BZhv06%2FdqmlJUIGd9VYSpAzhH3kEbZuP2kHj5S&X-Amz-Signature=5744f2e9e909b58f95c349a194b1fa28ba70283250b1663bfbfb354814599198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
