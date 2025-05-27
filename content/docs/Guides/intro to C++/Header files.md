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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646KFZFLK%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BAnIIuMj6apGVyp1g51knSbgFqJEkf9rknqmEij7xkQIgcL%2BB0fxN1vEx2Q5xI%2FVMN2O2IWUfrIQejUwiSuWu6c0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBpgkqt5Xv1Cwc%2BvhyrcA4HfPmhDbqiZor%2BDWuJpNy7lFpw%2BSv2vDD%2ByRgwHEb2H%2B6eaAhHzddz2EvL3niqWCYpmeMAICHKvbznkWMLGlRRs9eGgblmHsQmBGQSe9knTTX5j5i3glWpKPW949M2LfXzMPyU0sC3gZaVhxR4TvXmA9qTNbyHE9LUxQ6fjLjMAqayB5hwXAI8qn0tdQSY%2BtmtlXDfs6RbqWLjI%2B59kQFTReJQOZLxraIleWml%2BxOEfK04GNttD%2FfwmNSH5BfP3LEhgLyvnSHt3sOHsBON02sgtSMe9Jg2QflxQkjnNtwN0yFXeUWB6ywKKfuf6tvjCiZMSC4cOmMXs2xN1ppuyXww8RQ5xYI%2Bnfw5hbJil4YCBJdpMXsJ10v%2B0YT712zZy75kGu%2BNFWPHaCDzoac2gzYx0IpPS7R46417BS473wPCQ%2F1teu6KFX1cTXLisbUUK2f7h6DLJexThNMnU1gquCzr2E5bxXjgRicIJmrraxbLuvFqvcHA1T84yjXBuNYPA0eT7CAXK7XDoIYm5%2FKtuV6DramVjbaTSpKKOFImsMFDfy%2BL2CJlgPaziEpdVNb2wDGhEeJf1ehKuuywnPBd%2BUEOHl6shDEYb6slHEj12rD69C0nZ3S5Sm%2BE%2B6WIQMOaQ1cEGOqUBnsZJvyP3tu9O6N7K%2FZ%2FUJLmxNGWFXUrvPeFFXyTlHSdSd7vZA0R2MdFGIsq3aVf9CNDmRZvvr%2F3lPVaWkx4JEW4wI5O90wnAlo189PMPKKV76azA2TxamCNdrKdtfLSuQeKiX8QKL4yHcCly1nfOWgQ22XfIdbAcPQacR8zCUzJj9iGpUDCkd4AWn0h9TohfRUzPCB3ywHjDTZaRKkqoGrv8K1W2&X-Amz-Signature=8661a6350e7ac3a94a5173c525fbdc57d2366998acd33503727fea86694c5477&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
