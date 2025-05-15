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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PB7E6YA%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAZgH2UerFfBc%2BvvMGlgGlmLqgmh1k3HIDcIFPEqPA0eAiEAyyYZW19LdgUe9uZ7S72EQTN%2B7IFFQP6KfciKrzqRfZgq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDOYjUk19dtHLUK4qxSrcA0Y1cCl8mfMDX%2Fxj2NnwLYUbQmxUDHerRBk9nTSk6ULWtGPj5Ww6V6JoBnNTlhewEtDa1NN2UxlVT9XDDK0WUPNoxsPq20mlo32tjBBeaDz5Ur%2BYeP039wA6p7BoiHbkALq6Bu48L%2BNDRQM0hqSsLE9pM32PLyzWQFT%2Bz0OX3MpgaHr2dDlO9lgActStOtvMo9PqCd5br8kufjJkQAH3Ut%2B30N%2BfBfOlCdp4i6J%2BhGOT0gZRmlWmMr99Yj%2BHF%2BtFQvTVreNAcMtVm%2F2cdWzVk1ZpmcMPGOC%2BSyG6I2jsmTktxhOGcHuFv%2FKHXm2KFxsofuK%2BOaDg0PbeifuZotWmu1oGBOuut%2Bs4x9y4f8dobgVOto%2Bcrr42k8CfFxTgbONjOXjxja1sqAEkeK72deqgm3ZcUaMuqpHtxPgY9XR4t4UtBROcFOdz05mj6YMnSwhMfnubabDehh7zk%2B1kJDDRnVHFQy7JgcXNSvrmnyRSX9H%2B9%2FXzduhlcqXmg4q95jqawslbOyQNFiHrP%2BIyNgD%2F73ASd%2FVVX6WvpEEJQKXxBlyhlyCF1DyzSvFhhfpJnD4ZBPooNdHRhvQ1ZTcNmDd18WmFbzL2k9FZ4ADRt1bSzO1soya%2FGTX9txK9PYDdMJidlcEGOqUBm0cDn3yWasVaSl2ezZgf1LAig8DOOBEnRcYTD49Bu9971CVa5cQ1nRIQobXv37br6tp6erEmHZtC7iPktfwLOlbRC8AxGcpLvEC%2B%2FmOCE6jgcLkOWs1i9FNpZ%2BIRSlOO3n1orm7UWURYRQx%2FQM%2BgJV%2FT7nxz7X8iqoedQ4TbCk5C6wydt%2FrLKeB7fsNFP1Oh3yCElgEQQ4CvuAan04zAqLim441B&X-Amz-Signature=4ee11b211c301f39dd19c3650b6a8e20af4804752b15ca3f970fc934c54fc60a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
