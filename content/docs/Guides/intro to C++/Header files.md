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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCMTLDN5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC08pkywmnYYyiktRH1xARJCuMNU6KlfSKPIe1GkjzI9QIhAJ9cZC08jM%2FzmGr0I445X%2FPJjvjPAbn1MzOzNo2aIxPAKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzf1%2BOjubmfQgePqu8q3APYTjFrBu5CD5393KNozy8p3WCN2xRZBaZgc9CR0x3aIHqkWJpllag9ielbotqrWiDqEtvVoWYiQCBe3dpPopn2oFZWTEEEkP4ubS%2Bw8pndybVCeBiuZ0rlPHfJGbO7KxY541kyvTf8cEoQmZokuFHhWVPXzdCej%2FPVj12YG%2Bl2ISrQMvagXUTdlGcduEzFlNH6XNeSH2bgwrJLzF4cy7WCdaqLl0MY0VEFJ4NrKRm0JMpoYZEe6TYvxdUnJVb8sZ%2FMRC0adQUtKJgJyWVs%2FZF3YtdIYs1Ct7MLrTCx7JwxJe8Oy%2FMbIkabU6Y0ZporPac0X6S%2FMCV5blIkb4yMYWnGNfMYgZTnJOHJO7e1U1BnE%2B9sbzIVrukHt1ujg8yRPSLuYY6ccZxzP7qu9pr0LHVDKtEW%2BgYzK%2Bx8sn4pivE8o%2BDIF%2B235myd1zzAIjgXHDdEzaBDGM77%2BRoPOy9W2uAk1jRihBGDxTUu5%2Fhrv4pkY8muldOFdy64tWMw4mj6cmQtTSLthRZLLYf%2FBi4AUT0F%2FSylfIclS%2F%2B%2FoTVRwoZbUI7jop31nselTC%2B29pRZC%2FQopoktfLqkw3GI036Swqiq2YwzA6g2Fz4Z%2FGuUkGHE4RHfIqPhrvQZ3cAAFjD69rrBBjqkAX0wd4CcNkoKy3EqdwBZ2n4KqjGzom%2BCX9fAzR6KcM%2BLHGvKFoFBegTcYEMjGASFNHAR4MQqM6BKZSJnQiTMileErMmixMLuv6Cm045DvEjIQ8NfFdyp87uMFiAi6cd0CkrLkzerknsy3CX97nRd1oaiEe9gwICTxxfnm8Y03Lqr2MN86CLAC65sWuhZ60kzfrAvfqaOUIB1oEN3Z1giK1MpZDOU&X-Amz-Signature=14700538926687ed73cf5be3ccf7755a39f8f53f3c02d340dfa67d9644218daa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
