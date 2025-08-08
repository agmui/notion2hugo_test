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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD4KKNWP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIB29xuza9YtgTcvfmgFwQ%2BrzlyjNnDrdyuRelJMN1PpBAiA27hXd9MuK44tq%2FqMSw%2FZYQADSHQWgzihNM%2Bjkv0TaiiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8eLETxh7GbiovdF7KtwDFZrMZAaSHN924btLjGgyBbbDSkKuivXy3vIBxfwWTK1eHGufwpooIPWKirJQZ4LVTjF8nu7UavPW0B5ECvWdM4iPAIyDda36EthQUUKYsqLEAmJH5P7w6ypKXSLfcJZOKC4fDtbj89ExcBhLLc6i81g2HShqELl9NDcNpsNgCyl3uiq5AXIeQ%2BRDMzupt7ykWD8ovmkp5iOqc%2BEgxvckEIyNufKK1p919P3heHZJ7T8VFINWKw6wy52oPBqrpR28Vs1u7uycq8hihG10JrXrH%2BsUWR38oygMwjgqw%2F6tbQ1pfQ14BcCiPtgs3o9Xgic4dJn5ZdVyl9tLIbVX1yH1NWxTi2aitPU%2BKeTxwiaszraI2%2BUfigDOavHWVVe%2Bo0SoGY4HZyFnVUQahgSesunL28Dj214YtZpfCbzarZLOYQVyK%2FnE9vqYZxt7I%2Fa0pR1%2BWRZMZVyYg1dEPFYaQVr4neDDhsDbcptb4R8q6smMsgRGq4aQH0JDGUjIEtdPQasAFkbAREeWDuwexL8zAGjurNHj%2B8iaaIJ2A%2B8Cr1YQc%2B26PKfBqibPz%2B1bjkNUHShv7keCLRYix3RSLxa8QWhRvAd5Bl0bO4ysTsWbl9ZEDF4PsUZlSVONoREpWE8wktvXxAY6pgFwHP%2BTav%2BD4U1b3Fg6ehwrzL6mVeTcbuq8VDUJcoSqBXfDux1Ci27kdYbiZItj5aCXfwFidnNk%2BrbGnoDqlabxSLlQ1sC1UEVPIa4pq6K8lRPvDLwwID%2Bg%2BQZkkXXMPJ5YupkrQSHyBXpK1KDlkSnH9VLmw%2FKHUxX9FmIj8eHNPdV%2FVXyZ57z%2BgyrLLf9Hai%2B1ov8%2FBTJiCpfRGF7fQtWM6ZUEKsIz&X-Amz-Signature=cb5682a99e2fce320022323c202014f80387bc98561849c5aadce4bb3d1cfa05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
