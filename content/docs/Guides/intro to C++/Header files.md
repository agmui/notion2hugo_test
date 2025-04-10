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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIT5UG4V%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T132017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCtecAX4X09eq1DbjMqNq5tyXvMk6VchEJDK0ZblzufMwIhAO242kDG1ZTjwdGLmyw7wnsp04I51tdL8h5%2F6Iu%2BUSLYKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmGHTn0ze9CWHdYHwq3APhBOJdeUIbppm8TjasDck46nhqp%2BidMKRMcIZSdFwQpynF1npF8YTcfIgVunVbpLISA3xhU2L52S8qKmQgbnVOI6MOv%2Fkbq2%2Bx%2FmJarrfh%2FZFV6BkqXzZd7QmVeOHgo76%2BE4BDRTCE%2F5DTXjJXpQ4xrFrkOJtNs1s%2FGEXNNzPbDYzbh6LbsnanzgoguDjrq4GM2fXBG3DReNlM5pB3GJHt8cbEucAw85ku1Z726F%2Bly33k9lwyRLnp%2FQ41D4pJfWJET4WzddtW1GGQ%2Fg1nmOfsckyqpm7z4JnwQKeCGCV8WRgRi1UQacxREY2%2Fxc2OWJX2xYyEQtKSqEzi%2Byrnz8pyLC4lxfmzXTC9NNwicqBiN%2BKh8DqBcT6UzvBXq5bV%2Fw8KRrcZ3JA6DEK5dZHYVca4O%2FygPYzAYa7L1MmJGVeXOd8XsA0S6ktFkoQVcanrBcPu7iPWSO2C5Zp3rXeo6CccvvmQgUlrzgWOrmciHN2FDRTCI%2B4S3QMcYWt8eyyzP2nZWbmpDJeJsBwVuyabqv2zUVxp1UxsNKKhfw958etObIcpaaLpE3wVgllCwMH3VFFadMYcuZK31ojtlbDFok07TxVak7uGKx%2BOTOB%2FsT5oetlnqQQYpkGlwad%2FwzCSit%2B%2FBjqkAUiQe17SfVWKKY1DR1fVvI6SBdDS36J0c8%2FubXQIwbVscDYl%2FA5a8NjJa6yZIVdPuPiloI4zx011qcLB2bGztJ%2BPdvrFe83tmitkJgmBbsscIRFHrcQUpe7KkjtR5vqGrjjNr1JzZz5oOc1%2Bwu3nI%2BogliYlQZC7mMMujiDnKVQRWwSQwbjBhe0lwU0mDaAxqT2URJ41ace5%2FAYW8OJlM3baAYAh&X-Amz-Signature=5a39d11841f185cb505500781f3acc86c8ccc1de9098f01fdf6552513249b1c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
