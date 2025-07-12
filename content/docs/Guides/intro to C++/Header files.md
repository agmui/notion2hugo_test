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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623EIT7R4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcm72G4Wxw45XWP%2B1dZNTemFzOwKHJJD%2FKs9fh%2B85bfAIhANDXlgweI%2FHTYjzSBPQOZFGs10qBg1g5bvRixTcvSljoKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZs73Izj5LcPPJG48q3AMPksxWmcigXeWB1yWzRT9%2BMw0okzxS8Mjyk1hNaXgC9bWxQ3FA%2BCmWSTttH8vbJTr5zLsb3y7a8qD2JZSL8qSd68neuWf68zQkagw2%2BJiMTV3GonpVcpu%2BdN3Gs4iuYWwDt2VpMAZc1S56UmEQrjCN0Y%2B02FmGxWls5yEyPEwg79Jisn9tQOPVmAE1Y3A6%2FhMRRc2fdE0RyOOu1iEwO8fze%2Fl%2Br6zfRX6tzxcR%2F4AWb0c9wqoI6tRrtT%2FKsy70sFRcSDNI6H%2FLak4vcGjHAJBoeNAc%2BUqXOD3qDJTRChAdqy794rz%2B1R8xebvlX7h5hFFo0%2BDYDcd3qZbbWQ%2B%2B4D5m%2B3M33KtfJErnvCFBDhTH%2BSEV7zcpCi8PzS%2BMQ3mmZXNFrZznl8KUPiob4zwqL%2F%2BuiSobIeFMHocj0F7G8ii4YERLtXn93hqoxPaXv%2BzfSQU4u82ieDd%2BtanrVz7zYf94xvkXx2tV%2F9PGYAYBgIF5UYAxhqmlQMNnoiFc2ji5maBsb4JeNW0mGHcrxjWPfrVdXsjxufufsQwOJ2Fsf75OP761FI19da5fz%2FHyUxVpGlypYf1DKO3KhEA4TzPF2KCIPZH2HthqoJerjB7W7EpkUzleFAbDOJfJv5xEhTDv%2FMjDBjqkAXZFLyQfTZGEWSEto%2BJ8TrMSFLSlfzE73XGthHrJHy1ZmaOcwy%2BixCG2iZ54ize%2BAiqHx1RJOjzU1IRmFrYjuf9vKzTEs1Bm85P08%2B9%2BvY0rDxRfWJzQs%2Fj8lAN021AT2aTHguJYrqHh3n1UYT3fd%2Fjh%2FScfjwesTDRA1C9GPLGYaZzK2AhPG%2BzTkrWARpZmnwofFUXPIwmgICtr8w7qaNrNDFQH&X-Amz-Signature=cabd600149eb46166d232e3c83f568c37fba3dd39d7e9fc311776f9e41c4b70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
