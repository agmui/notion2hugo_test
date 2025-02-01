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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVBBA3RK%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHfWgQk7CVOAh8PZaBVZ8oAhexlTbb1LLyPqfCM6yX3AiAWfik6ag8cQ6OMebKgQqdh3cdWhICsLw8MEkfFGxDs%2ByqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhgmfDYX0GiRUQKhYKtwD%2FexF9tfKlvzRKx1R40WEyH4olrIekaQUebuWg%2Blwt5fNnx%2FtfPV3m71853QW%2BDM%2Fh2WLCUNV3f7hUbLLiswhU3zLD%2FN54KduEvjFQ84M58fJ%2Fw8L2mP9WVzZZ9Cxe%2F6AUnv6jXw%2FTx5isi6za%2F6PFNJXZEjl8q%2FHignTKa2uA8uOT2zp6Ajpi2n4%2B3U7jcXOe0JSMSE4Evr%2BwMEQ8K%2FRMbtCj65%2Bris9hEDpzAAEvH0%2BqnvSyy9Asgk0%2B%2F0bUukTo974FBkLBAqqgbajzZhSKWZYpTge4uEM6HlvtC3jqxPyFQEEwuQnK6mNcTnLtJDsHKgco7S6Pdpz3yGxdCLwcNqhR5tnMU%2Bn3HVU3V%2Bo1cImUVc7f29Y06AtkEMkb0QnuPLTT5ZKXPRZkD%2FMsJWCOJ0W83U73QZ74Lgrr%2FCneariW0frZf97RHLIiCWfPuVVIfK1zMHaJ4Sui4ig75AbRgVp0ABUuqH6lJdx66Gb2dK55hMNV0smRhkpI4PqQznu1aPEp7HHPoY%2B1xfrVqMBy0isynOoC9QtJB3jPDhPPDT1Jcu10XiQOWndVcPoX55v%2Fce3uTmRh1V29YKA03smnFdOD2VzURmM5e%2F3Qb6TJeGwZhYGZFr7JH%2BY6UQwxsT4vAY6pgFSmhhv7YMOQ%2Fw4AYra6HnHjsKhQKUIGP0qHgxrJfXewL3Zz4t0SID4mAhTEiiIUdygg%2FxhnnzF3XkJgd%2BMxbUKQ%2FtBatoenDjguw3S7OfuysiUgkmvji6sryK7sZQQLcUKd6jVa1CchOdLj7GZsGGiDQO3t%2F8KLdEeehwVf7oGwRMKJmowa6%2FKJjhQBiv%2BSNaCKp3Tll5xxvB59dNahSN%2BAWlIbQAp&X-Amz-Signature=dca8f08a4bbdb9922d023e0e55d2d92f5c95f0d2f2a07a48209e72dd0990a96b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
