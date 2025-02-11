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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XFNYFFL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUqRm1M14IMy7I4Q0WhJ0TBQj36fxUEhIA3UhL9ICrzAiEAyP8dSlzTXEoeQ0P1O4N7TM4ZXbKgVhfR6za39fSJ45EqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARd64ideYnvD4%2BJ0SrcA%2Bs19q4sJbkKCloO982A%2FcWN%2FEI9ThQjUXteDnNFZXSXeOUYPmE3%2FY33Dl4j1fYnOnvQVfsP4R%2FeOEnArHl%2BS4zXiMqnROYQI9pJaslAm6GwkiwzMCU6JCleajf8r75W6IkZNUDNWNHlmuc6w%2BToShzswIFKCfFFoK0%2Fce7CBCc40yZQX5fYOCY3k5p2aMfCqHK0oxYaRpmeNtrF6oIZ%2B66vmSt3tQ1YgoHetQ%2F2WTwQE9Z1L9bnsUkqTjSRHqjF2IfoFSjVo3wCsZTltJablBHPI5FPDOIfxO37dkLh3go%2FM2WeVQM1nSuT%2BuxGm3FYPx7OgbdhTnJ0yLpDKQZwxoni607IJWvJNIup2TQ3%2Fnn0HScG2bVLGlQBf%2FMbbWWTP8r%2F4PKvZfnXg1e8wpNq3FsguJi9t522rOXspRege0GmtWzJHzFrrmxDoBRhYyg%2BWMSrLZDHTfQ%2FBztGvjoEOmJ4OnOV1BLh3g%2FzPGd3xmmf91OLho%2FKUI2WfG6ncq5jwMzP8AMLbKNiH0GnXS0VgbB6WN1jNlWnKnq4iuNhqv25JwLH6fzCjlGjv%2FCP%2Fe0xZVaN5e%2BF0vjpHOV5oOVMggbPUbwsyQHuqGtYBpvg9MtNSOsX3dqQE1KaNw4jMP%2Bsq70GOqUBazf8ZrsftRL8%2FO1HMTFGBcD3X4mOpDg3hvQPwWm3Mc3TceMmYxcg5YYTUVgYz31ed5iUtan6rE3KVeimSj%2F%2FP1yle%2FVMNEcRTejims2rYfIqb6XU0hmPzaPjjMSQ3o0M4aYzCft1Hu2KseKAkI7oDZ22feoVycgzvZwNRQgNm0EPU3lGrsRNxzDEp7PiM5S%2Fd8NAwp1OXEMGMPP4DyIeO7e%2FFkp8&X-Amz-Signature=e7e515a8b710178bef3c7750f6fc026a2afc24d471ec34f977efd7e6caea1755&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
