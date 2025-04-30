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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVC6BVVQ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCVSNuEQQVsNm%2FihnxApSgH32IyBwZvH1sAYTUEQZJnOwIhAMQnSesLu9%2FIxkLZyqs3bpkYbhalYvDITAbmPxS5YndVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz630xst6JKfBqwGbUq3APNaPO6cWeT%2BE8OZ6MTH8Ffrd4gFdjLULK%2F%2FS4n8D0WuG9e6ikvPiJ9DsSTgfdkebOQZH8I3wvy8TqEzeXslQhjbTzGdeKfbSHqv6H7hkGnOFoLZUfJfLZTLMfnl5dkD9p0aQKFcNtwAy9rIFPWidRgYRqw69MPk9%2FZDWqdXO04NdweyJxTpEy%2FDZJzUb4oZ9til1IGf1c1k2KbHGIknWv8LaOjtcRKmx2GJo8AAcdECskDju5PAQQdEj1WxlRFeCWnQglVY3FZ4sI5%2FGIyOtr89VGi%2BsF9ceQmQHeib4rLGCdht2PhzJ0eL7mg4JJ77pbMr8PZht2Vt9ZKMZPoO%2BmnbaGqfW6r%2Bdn751nDcXSYiZ9cumNXLWuTdo3F70RfmHwU3qk0oue%2FdHfxNZ%2BTT84%2FcKvyEoVrEfW5f2Bjt8nZ5ifChJPuj1JCeoIxrVi2%2F4RmF9d%2FC9pzxqMwLcqofEMsfkVy%2FUeN6t4W6ytOA9k6m6AZxFDcuxz0xlHnI9Qop%2BOxnQ7JXzGPkK85NdKcLXWj%2F3X9Pe2%2F6ANyKDIa4%2Bg9CQBIvZpfB4AuLqWsMKv7He4GXPPkyCWou6OgazmpVXXO8Sa0YKMlj%2FqBIzXLJN5KqhdTRrbCjuU6%2BOE%2FkTDb6sfABjqkAelUxcFG1A3uPdq3QoZ7zORsI7GYwv6oJNY4luuVNRt750IsWUGfOh9ckeghpddF6%2B0QUwdENSGkkPeZ8nfVuftFDfGKG9XZFKNEW%2BruO0QtpmZ802QW3vTQwEKSyB%2BX3LhWlkiU564m2i6GE8u9n%2B%2BqPnEA3ktEO1gg7mHs%2FdG%2Fua9Jchbn9FgPILk4wDumbzfPzTG6Cegu88O4FbjBbgc6b%2FZO&X-Amz-Signature=dd1499245d8c9219d876e613d020b534e21c66855e0d32623868dd157238e948&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
