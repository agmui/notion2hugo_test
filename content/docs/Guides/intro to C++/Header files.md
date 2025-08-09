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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPVFK2F%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHEWcDN442vDB0BnNwk7Zk4G4T%2FsgCiAh5t%2BIdKhqhYgIhAIRKIB7UrRE8vLy9VE1SV%2FvonvHOEPzsWX1IrT%2BN7b%2FTKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxCcHWDJVIW%2B26qlUq3APLUyNf7G%2BMhLbP9QFjMEIfqpsVQsoEIQc6wj6a5jFLQoLRGCmjTkCfsKkv3xMHFZ%2FwYMlyoNCQn8vF3hXK6OFTdHLHxutRix3F3PzxjrtwJHLJcnylvlOqkG0qinDTai5a4lpRXZhAZpv7RJFpz1WYnG%2FIPms12F7LHyr8Qi7gxWXGyY4QIP2BmooGPpSZrTnGWKd6uK3%2BSg66SBYusw8KWzkJNenPfdn5qutlA8erJhuZmpxznVVFiUyp6Y1x6E2w9GkEsa53Ff2Al%2BUDQjvdV4FwfZ6FWUKGTUs17jS5itBGywYj4N3T3v4cU4rfiAnt6niGd9S0%2Fzhs4RTLrNxnjnNuZEKVDpiQiB0cYLhPiCkpI%2FH0ZItD6UaQUGcAXp%2BlsqaaAQLPv960Z0hxsolErhs%2F21465aSTgfTQ3BcPIxgbj8D8Og501z2%2BHcY0x6kbFPYowB3yQHZv0MQtR9rMtRC4yYVsWRi9LosIntqfWiPqCaXlpc5CSmLzIGM%2Fx6Im0EqW6eA%2FQ6GzuCs21uxeMYk6B7wZwJsq769RTthR3%2Bia5EpIRfdBgc%2BGLrNd8aWSz0%2FGJ6gYkKMwW%2FJiwkTBbaWMBXgCPbEgk2VApMbzzovSr0fK8hhokpg9VzCf5dzEBjqkAbHvMOkKAs5xyba8m86%2FzOuSEMv6rqH1zcxqn1GtamUJdSFWsqf%2Fmb4cTH1UenVRXMT5A%2BECX4QempOKm%2B9f2fksiFGNXLdYfnGiprzlZBNW4I9sB5oLKVv%2Ff8t5wu4Y81h4j%2BF9CzI%2FjEgeIWHz0jT4jHUJE74ppyCy1B%2B%2FBRGDW982F8cTIgoCBpfa1E9n%2BcEgGfIMaYVou3zudfiaVKaQiV82&X-Amz-Signature=b2d69ab105fd7171043714670f207a6fd07cfeae6e2d0346596d2d16efdf9cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
