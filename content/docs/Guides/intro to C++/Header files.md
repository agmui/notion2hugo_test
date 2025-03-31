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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOK6DHFI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIBQB5pe%2Bf0YiX3CH0tkJIZmhm89oRo7n3cWk66hDdmYUAiB0MPLMaxVPkCeKELrXqOItAoMz9hL7GC9Gp3Jgk86doyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv94oCcJzs2Mzd2LVKtwD94I3ckLWxU01buZpARzmvxqPtufn%2FEyvPWJgTvfFZJY%2BuV0ciQjS7NZxTlrf5GMxfVhZ1Pj1ZT4MvyVw9%2F8DiEshGoF8McV8prYafmxVSLWBjWTPJmUreObqPtrOiNn5fZZDTaqRpilJ4z8zv1zk%2FPKgULG67C9S0azNHfFQQaCIIgY3k6C%2FZBf9Sr2YOa34Js1Le5jc7qkxkRLe%2FUrc7LkXI4FwI30qcnx1A4Q7o75ZfYS3jDgPMqyFiHE%2BpypC1sH8ASXBwN3xypzoPotiX0wauyBRsQ7n6L43c0YbFag7WisI%2FJ0Pl5NAvA6dTKKud%2F3g4ElS%2F%2FJK4rb5t0TbpigR2bPOMDPEsT5oFFGsnTMWtkqG4XUwC1D3FV2GQLCMzbf0kitNGJvpLg%2Bw40hN5sxzJlRGpN%2BjNbAxzGy2S8z7%2F%2B5BjapNhmBhhskTnH64TTxjx6gxBc0lQ31vvuamNajUVLnC50HsIUdZp3Y0Oq7vUMlVzhnyvvO69Nq8mkvNUGs%2FNL0rqVCptbnpyO%2BpfypT7rbYB0FWzJNIAI2Xc2iKJ8%2FtT6V0kQakDxELzNytvvkuuUYIV0NcNhC38YkPw7M6hS57s7fnDGwHAYgXxM8MhHmjMM4%2FE8yZpekw9ZSovwY6pgFOjJQCRKsBBaX4jspfUuuD1PleUjJy6bCSgsrQhZ5r1SXeEu0%2BtPitub9qXIKnt%2FEpX%2BsdSIViH7A1rsT9bkCBQz9rFjhe%2Bga4fEoNFOoJSZy4xJPhJGslpOezInRkhN8AqfctdqQntqT3MhRg%2B0uhkrFAAqS5EXJjcRS2fHzmnbGLtu5CK4r50WejGixcUQJxBG8z8IR%2F1zcWgrlOSGWK%2FCCJmuh2&X-Amz-Signature=862d7185c4549347cbfe7455bdab2a36583be71250659dd50b1bc246b3e957a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
