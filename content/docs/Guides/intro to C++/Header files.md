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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NOTO2P7%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDEP1Ruy1cnylG%2Fr7tn3FDkOyUHcRmiQqoOq7xv%2F5%2FanQIhAPy%2F43zYBqlNHboIEHE8yJ8Q5O6h8%2BqGiRS8sNHfcGXnKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FNv7xJWYYFSZc2Awq3AMOUIcG2GLgOABDXk1OeTnLC87tossvQW50ROhVWB8oysD3dfpSGbBvifItKhqtFsbB%2FBBqgqr7Yl7ntWBO7zHVyb%2B9%2BfnZRPCxkuhW4QB7hVwnhIeMZGKgenR%2BkyQcT7%2Bx3KeS2k3h2uiPMS3Mqw2LbOHFL5RyM33IqS6dTjcfZyChJQ%2BiwRIwG4X%2BUw1dRoc0GPhluji48cKY3igZLsq97mqHoc393LKWkPy%2B7VtAVaTjLJcMiUS60YN9Od5yxHrgLQSUTnBTYm533peIxZvmvqfqnAG99XljIlszT1%2BEM3SzXm%2FfN2cX7VzUxt6b8ztya8BRbByFd976IVBumcOEERHGm1o%2BVB9fqaFauLl%2FFcQRqSgWibnEeLm4%2BRQ4EAkZBOmbBEXDTRV9XzE7roP09ot%2FuvWYsnCrMNuxodxoT4E4%2FY3HCUY3pyRFgQTJL1EdJkQZE3V76OJ8O8sSWweNQvRI5Q81Bq%2FHgeB7kG9i9bFrGXJ1iTg4SRexDfbA5qqk9IHp0QXX6VdFPBgkOiqkC7C1cwwSDfXwVGAtakLPSDgwrl5DTi8T32wPqQL1zeIe9vp67t1yjrwGHLvwFK6aT4WFKrSaH9WHSn8b289P08mDorAkcjdIKesJmTD28M%2B9BjqkAeVgUxKCI6zxldXeEbjF3Koik8YQiGvY5aWS7kFqlrxXp6ID5qMI5I0ngac1gelQXcHnYyjrL0FgWXBKxCQIixybTIjZZB4smGc3kqW%2BPZ7gLZbuOo7UitAdo1Vup5%2BzPrwNPQv2xfbMW6K9f6Xko0ejMGN7uDuci%2FpWaC6Lz1GpxzM65FwV%2FSEwIa32XXdpHyHxcSxnPMeZ%2Beih28C5ELOnPWKL&X-Amz-Signature=5ce2f18e1c0514b0f1edaf82660fd9ca3de29ec958d4a0fd575169feaf059dda&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
