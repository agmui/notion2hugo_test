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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UPJ3BU2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGv6sXuA%2BE9O7DsVJH2%2BOJEZFxOVa6HmTvrrtJ3zWyxuAiACPwZrpIs%2BCRRolwOcREACrVuwCTkKS683KdOWsizZtSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGG%2BbT%2FVMgQLVo3s4KtwD6Nq9DY1h5QdB2WnxZptWE8vWoK0T%2FmQ5MvIqyyeQlgNhlx3mFSccVzeQh0SlHDnXBKjM%2BC%2F1VHbSL3Z%2FgznjkKKyBHs%2B2sK3PQPagCo%2FqHuxBrbtjZuG175llebupHXSr86%2FQb2%2BHcVYDKNZ4GfLgYJCXpwYd1iY5i47zoaSNznnBaENDsW0bshVHih3wNVDj3Zm%2BwT1XpBw2QgxGjkwgeKxOOC3XbGbm0vaNtkPk9k1lNK2qjQEhoAmDEJmetIiIkVp%2Fx98A85rtKNMwy7pupq0XLTRxbuVLCuVn3JwKKf6xFzI8fR%2BF%2FSe82tpQtt4U0GBVNP8kwFAwJTf283%2Bq02HjfcgQTv%2F1%2Fa1b6WiP2kA4V0j8iRbbZCsCXdlJJMDAQMrNv0gGbmy2sZ3tdDoM0D3nslnSNDYini0YFNYWpQf0a%2BKEvNhT7xaSLbjqQFvbGZT09R2wYuSVw4bzQKQfzV84qHvpv8xu4%2FknwAILipH1PRzM84Zd17vgpaRJD9cYUlgdCV%2B7H2LIqJJ3GGnL7duADPKfL4tvNNfCHm7ro5TSnqRw59NnP7zRMyywzFScSZZ0uTSWQkFRTKSXbvwdiCnLR9aagofXnT2ob0FUwDBFWbg%2FFkhkwYG1l4w9t6fwgY6pgFhVKH0pcvzFCqmjojZcRe%2F6tbhc03DnPRhKpQNfPvg6jTkPHs5ZsrUUKCtKQlDf%2B%2BpkXvrLF%2FgwL7xWvjChbJp58X51%2Bp5A%2F9CrhmZB3Vz%2F4ewQbeU%2Bje5DoXyxUzQhjs6104E8TxSrEmzvGaR6wr9N52m3owg0iFJZ0PJSEIMiQ30ey7qee5OUUZnn9Q91SmfnLC%2F3y5AMhaddqalDLHRviRmtw8Y&X-Amz-Signature=c988b6e39b53b824aff90e8606821a1e07d71c3eea78130663848b0237793ada&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
