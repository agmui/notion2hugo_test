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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YUXMBKV%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIH8rWV6TGT3OUw9Tx%2Fpy3FaZ1Oui6Bf1LPerGEF9TXQkAiEApC6qD7G6EZY%2Fps126QDir7gmyFivj%2BUsbq0V9dSFiqAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNJIOW1wU6aGdQ8SyrcA3iH2cjSxZk9cr4%2BP%2FMRGYYz1a03xn%2BZk%2FRSq%2F2bmp%2F8ODMQjoIcDdKIMFXEEdoLJJyDGZEeukzK30XIVAs2cc3p2R4dRXDrFbSkMCgN4mSSP6kAQjuQon0JfZY4ac%2B6sIi3f4z9TAI%2BD03pHdxVx10iagL4Emkr7M%2FEwxMK3hMhNS%2F7OUfj1a7S%2F0dPQnsXRqAZQzhvmSDmaojXMBbyTp6TBU08UvGkGteLsMRj5gWC5omvaI5g0Bbthp6gIbarM9mgEeQBc24RU4dDH8pBlN%2Fc6sEvPhWSK7AzU643VdTFI3tbh39zZ%2FK%2BbkaUVD8xutO4MZH1BoxWNb9lg6CiQQkcAeWh%2BIB5pVjLUd8Tq2nl51wOY8g0AuJd7n0ho2UdzlvLLcSkNA1dgSc1wPRvpyudIZofNqf6x6Wk9iYiyk3YYysiEoyvUht0pDit1EzYhqgM57K3i4vDfGmWKQdw1Lzh7E3Cd43yxyKqf1s3%2FvuC4FxHPe8RcxGPUcFblmo3Od0BdmEjvK2icHWkNrpU6lOZvFB%2FNItrBS%2BmaUglAtvLBUI1vD6Q53jzwr3vbXSbR7%2FtFQlk93XpZTVcSoyF1FFRxr6%2BK1yBlLltFqW4LquUvE9Ct8Zp2ZKahFSGMNCAycAGOqUBaJKQP%2BmvAwFMEnTjmPDdrn7SuTaIYzocQhxuJ0fYK%2BcVirix3MS%2FkTyLCefNcSxH7BfnR4GBo2oWBmKJZVFGF90yczfo9A5y7e08Kn7uc650l9%2BxABJTww88%2FlpHoc9pj7s05%2BbYH%2BCPimLwuqWuIvn1Ro2jv0JDR%2FnOLHL7f0j8wzTjciHNxRPsYkPtOL6u3gJakvsj8sxUIVO7Rn1fD7ZswC8O&X-Amz-Signature=317f2a0ea738cc957fc979668ca08b5707465583c67f8bcf91a94c7f9e4d6b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
