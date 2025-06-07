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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7CZYA5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBe9c3cus9CAE5eMHtPTkx7CJsrHcNgfjyzRXv85ORyiAiEAt8o%2FYEL%2BhtNKnh%2B%2FQ2hImbJSphe1ZOtRYhV53wVN66Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDKJWJKh6o9ts03cKsircAy5QqbIPIjU8WbX%2FEXAg7NLR7cTpLnRAywfLvCdGeowvnl%2FM2KTIggip7O3bltPZUt1mJGMJyxRQnYePMBLiRVu7uk6qay6ifFQKo26hw0JGAMOLwqkU10gIgJuNFaLehMEuICK%2BjEi1c5nmjuR%2FLGi1RBw4EhfIaS5wpHmxC8L7%2B%2F9Cdva62tny29q%2BLpYTnLxg6ucyDCtS48Y3tTuvYCrDeQYVA3V%2BPnXQbOcTFnHzumWcpTVMZSv2qGSHfvlu%2BPBHQD2LYr0LaGC214xLnbzOiFxsfuNNX9kRJ928ad5CnDzPrjSQK8En3NU0waO2o9jC5Ugu4CcXEeobLgBi%2B5zOapKgKzUhMb4Upfz9FZ5Du%2F0HedX82DBEKIVTlXJp7sUWAFvst6Xu0yqQukhbI8FSjkJgrL%2F01yMSgBymhS7mmsUXk3WkA7%2B36rAZdSQ1urKuvbNdv3wWzmOzNoJ7aHz91yzx61jNtS4EpsRc7zB1Z1scyQPpLJGTBdBnhk3umkBgVvXPjij90ofPU0cvRSow%2F373HMWFWlLxU6nOLyGANV04qlRE4Q%2Bt4GbbUZZpfh0y4bysNxLxIkhOs7JzSVqU5PTfqJ927sGQI4HWtcV6ZvJLL1DqnOfvEz%2BIMPPDkMIGOqUBQpmG234rVMXmqrWJ%2FtJiaXO7HBEo7V5pdprgYXXl4CakP2%2Bi4kcrLD76OInKn2NTWILP3RJbQWLivwzGR8%2F88HSEH5xrh2yTY8bebtjXDv9Kya86mKd7DI0eBk0uYpWeSE4wtkUGwNN7Z56f9fxE8zSAZfAfzt9S%2BKxc8STuxBpGkQ%2FvZ3Qm6XsuDSFqiQDPbSZBOsm8Ub%2FEMiCcinXsE27b1FLh&X-Amz-Signature=ac9677b1cf7b03a9dde830219e01339e743026924fbc0d27704505ce4e95b429&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
