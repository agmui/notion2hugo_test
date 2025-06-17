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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z62HXNM3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T070939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYjL0p7vFld3M%2FkHukPBkMFmZ%2BxSfhJBtokUiI4%2FeZNAiEA3zeF1HDsqceeKkPGsIyouD8vf86Y%2FJn4fl7O6G36Jt4q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDN3WfzRSHJQwlpaVBSrcA32H1rdzG4gRdAJ3VV6zRPNAE78VKrNP9rV%2BLE6sq5YiJ%2FJKfcqcOLoHPj2FOy2OLn8TpCLiHsNvcMjwe0J4SZh9qb%2BBWx%2FRZW57dr6z5%2FQwSsc%2F4i3ZYSAprGk9o79BolXuDVH0tmf%2FNJQ8oPnr86n3xLSgts7Z7otb1AQyqLtK%2F46ecMcF7s5WSf9y81SczFeuc4sWUjqglniyGZLMWLgdo%2Bo8FI1uKCe%2F7GfgNmyPFWLuUHn9QXJQYZt7FJv140IEEgY6TCDZsJxg5Wjd2IE6Xzjjiz6Q1E4OD0HkuxjAnbtxJpGipLiF7kM95gcsVzKDRoyhph4cJgiggA0fMk7VW3PlkqEng9dlyFhN%2FcnXsHvpdaAldof9%2FNp6EiwLMd4VaHGGizx08C3FFcPx%2Fmq%2FPf%2FrgWTlrX5gYZfepjcaAHO31kGaB99uYHrpaAM6xNs56fXdDYQl%2Bo48agLwjeqeYhKzyAJIyx1jiDB5B%2FCtghcSLxQNRwRuZnVBuqpd0hNObmB9a3WuaOmpx86CyzWjlTRIq75bMLbYCxwFLRC6mUkzxxWL%2FMPrTdP7Pns%2BVAsaEH8U%2BoaJp06hI8N2ufwa7zreyXfBVkLIR14Wjk3sY3kuIJWas9aLMrEmMMOTxMIGOqUBsnrG4zJSoe53YZuhmkN9pNJhPYzjBo6q44EE1hgVjzto5BuVwiwU2nVKF69IMPkLgLl9D%2FPgkphChso%2BSEStlF%2Bkuzdj7qBg%2BDHWe4dmZUO9KSc35scH2YGaiC1xWXO35Sjzbn551Xyp%2B1YYoi3iLnD%2Bs0%2F1vEtBoCQYIj8GbljQbdryBFuD9Pb7Fdb4s9HdHHHucwRiCd9Xv68huWEhHY8M6zig&X-Amz-Signature=6a14a7d531a29d6d323c40ad750ae9193bc39aba924d5fbb4592861a5b5777c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
