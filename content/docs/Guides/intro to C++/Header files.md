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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHKJBZ37%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T080945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIC%2BH2DcrDqo5oTE5JVN6RS0rqUYedzgzpw3PsSVpOZ4eAiAt0PLSMMgpuN6gfAyr1h4Nqh1Z1l%2FtJ1Rs62ynEiLMQSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUv4%2B%2FSCL7ruyt%2Fa6KtwD7bQhf4gXB1s9NT2IL5Lsl9%2FTScdBr3Lmwci6fkmJHAV7%2FwroXIinBDCd2UT9XZ4Ilf8QUtGkEJGkxXXnjkKYEKv5QeOqLarMLmLWGx9WkSQv%2FsU2O0NSJoo9GkE3FEYbqim7flXHGmZHG5skhKf9Katt4H63MB1XXZP%2F62Qy1UIHsAnSUhTqDiQTK5QiDfkXJP3IXsWSqhfxirUP5tQBccVlcBIaXyLDAnb74Gx%2BPtIJb3Sh70q9kb5W5kexVqqTxZSqKVpzIMaaBE4Q%2F6yo1abtH09Liu8aaFOtGyxsCgwaRc7IEE34yEKPzratYHdLdWgWAz%2Fh946NLgdO67X9p0eBOfoN9had2FZgr0jaGYPIolfyorOIsDpVvzcrGxYt8WF61s6dwpgJYQtDw8bFdBcdpneyN038oCuGqGsrN6MeJPKGO4OQyL8FYDWzRA3JekIXAx90OLpV%2BV8dckUxLE3dIDeMHBa0esI57i9Q19j4WDLfhAjGY0aF%2BGkkKAJL%2BYQ78AT%2B4cU8XA7uSGz1tqOWqI0EprazEZMDEMAtI2aKzv2dQ7JsKP4uyS6eYnJxyyiqaQnLSXoX%2BHKUgD25E0pROYODPmWC3lBN%2BVZW%2FYxJFyBWM4bOcVMjdVkw7e%2BjvwY6pgH92YDbN%2FLQeejCwqo9K%2F9OUU4KcxiEnrj28%2FdZOdx47hTScDeghLZUbzID%2BEnubFUqJS%2BeqDIYslmSL9BvWshHNRYijDEoqaCkTIAJMdpaHgMSLhHySQnKY%2FqbhHaEA1C8iLdvk2JpDbiBCuKPHbD264HcRKpMZn8b482VUPb8tw2riCb6Tqm%2BdjLq24xdiU7UpFRIj2tYk%2BtZq2anWl%2FbZDn3%2BNmb&X-Amz-Signature=2fedcf6128f8eb342daf82b93db9450ffabf3288e4e1c9844b2d61bf92f8acdf&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
