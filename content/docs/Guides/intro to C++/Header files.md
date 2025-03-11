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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICSV2EF%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCtXWRHc%2BjsCBPs8TA%2F87oyW5Sj9PVttD9Wu5K3qqy3lgIgG0XbRpiaSK5yJRSrp82i%2Bov9yI8JnMN%2Bjnu2sQf%2BqE4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjo4%2FW6isskfhmD%2FSrcAw%2FlX8wkjP%2BTfbejwatdZq9t4NaWOjWQPZLN%2F2MxeKP4Gey4c7ynknTIslFpKXX7dW7FLEGL1DaP4x86pJusmT5OVrCO2bI4Ugz9VecorIGTCUPUIqbEJcShSKnf7Y6xsIl3LM%2FhqROduocmQrPnWwkChqGIbIaVhX8AE%2FvAcvuK9CnlZC5BSMyZy6NXmwK3daVjl9bWbqcxsrinqU9g8qchRyfUp46A2IKNtSzE%2F%2Fouo1kBiY%2BvICN4NLhX8rjAj5Di2rb7OAPZMIIBZxdMBvDFWDKgYHuhGgHX9XDqWgxYeYCyou5VckdnhSDmrG6ClKulB0yCgsdLjF3tkh0SDQwMFbW2TF2rDl341gBs2EzwxiJWjslpq1BIZg5QsJJkQSBNHGKztf23CF8jgPu0rZKYmVkqr%2F11pqlC2rJF2374y5l4dirkX6ucF92ccFjNpC5dRV7MlZq0i8pkmFuL4wQG8Zy635vA3jYikoW%2Few%2BuVOW9ytqMesZJ4JS1D%2FD4svR3%2F3aPwYDFTH7HLxcfhWBZffu9aNLlTvE06P0ufbPOx4Wik5uQQV8jXd3tpFQcuEpb58N%2FzOHKPLiOF7WFO1ji0ievWLnFEgWWgtJylxqXoqmJw5IbMtGzzJkDMOKuvr4GOqUBGSvcFWH1yHzI4ifLGX%2BhIGjDcNplmZj%2BCZXF5m9NNmYZjKJyBE7ExTrF5rK7LkMMzqAL3Gc1GF%2F2hC%2BiEfrf4%2BQur9XqKLrRJHBiCpeUzGPtH4FAzBHnexVhwOTwNZ1YrNF4hCn8ZKB0H1bFkvfCKZL449NLAhWCzlShd4V0f00U8sViPDYgoDp5SWiydkG0O0KwxEWncDzQMtyc84fnl7ayYINF&X-Amz-Signature=61e232377eff5dfce7695079d42f93e2799d011dbd5894feb826ebac55d7c97b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
