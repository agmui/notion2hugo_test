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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYPOXNQN%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T201020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCicPB72fjz1vkx4eeE5866k%2BMTEfd8bNAiKfe8Nc4CXwIhAPwDtnQ81n1AfWXesjLwj3h8ooSIWa2E3vdVZcNEQs0TKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwnqq4bxReR2Cn0zdQq3APNNTUqR11vKQ09WTrPIagQ4KK1gOOBtWo6FTathMu3UwntOcK1wGgl%2FqWvnH406yL5MXWCoNLINrVECy%2FeBxRSEDvFDyoFwsRVpF1zMsYy%2F%2FW6Gv8rCmYnLoiRaytlG5W95dO2jvqZc6tUvNcBBY2Czk74ltw4vGoZnHbP%2F0emS99X5v7m78qeaDov8g98%2FTdcZsbuycV5d4l9amjC5oKVwUrNSIm6aamyt19tYMrYv90dc7PuB65pDnqRFIRY53b2pYQfPPoO1C60WsmqKWcqg9BYAZBux9YxvxvcYMpdXTzaHkVfP1qgukoQFUBcd6JDhNHqCtr503eKpnaInS5FmAVe7997jrKP5Sw%2FYh85JhlN15cuwr0t6EqMz1auaOjstIDwu6RNLpYT3g3joj8eBv%2B%2BNFT14gR97sTPltKO8g3qUDO5gNVOBS9u5JYDYVC18XZFR%2BOHnwO1plNVeJ9f2oYX%2BlQCJefKF3o2O8ESokoKW4m%2FfRR2y5PKlD4QthpAnYzyrtmUo06A1iS9kYBjfpZvdIcxK3J%2FrCECGM5z5Pty4xuPobGEJd25zlu2C20HtfUMHg1tkdm0VK9jOCu8v1%2BLVIg5qEijQp2WS4RJX6RX2CQKyC9Xc31FlDCrttHCBjqkAVVs0VG333dvI1uidHWGsuB6icRgs7TAlavN0QqGR7rZUUeQNbjusa0BqdF94iXT5Tl5Hv7Ns2wjb6EH8k0cI1Bvw5GAZp6HDIfgfOiSLRwVNVkps0OsFN%2BW4G5bJX%2F7cp5l9%2BeE8aFUHGod3VCZL0pP08hau5rssfciw8VNtTBhl0BSVe9e7ouVo5HAeh54oXsio8IIGvDLk2FRBRo93JAhiKfx&X-Amz-Signature=a2264baae12c2c5dd8606cdf47d1f6d4246295363b8354a017155990fd84ad6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
