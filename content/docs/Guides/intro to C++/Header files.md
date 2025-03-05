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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAGJ6YTK%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDa%2FIct%2FhzW2kpdnNCqqQibzf8gkSKtqcsp1uvpq2X1wIgNobX3p9g3p%2B3DHy3dPP51Hzj538Sb9bYdT%2BlSTkTXhAqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdYXxrm1RMDDq8LDircAx7FubZ1XF6qUKzPAglPPq0jrQ87Jkl%2FSMCN66yP8jvpSAGOeS4apFd%2FC4zj7OIq9tXhqB7gmCS10NOfYRkvlQ6%2FmsYgR3T6sbfquowvSZQRO7NRFi%2FgNDXvhqm4hC9EJylJjYXzaFU30d%2FyRFZAG2Us6dIX0srvJsGlJBz4IAnR%2B2ivYzC8T0Mexg8OJMqCeE%2Br8IQjjMlLrw7irftHCapPmMfgCSg88b6u1k0LedrpxdiqeoE%2BT33JeSMbQ6Ku5LFxpTIez8aTt7JXkdlUa%2FK%2Bdv42inXeGJEIZrubl9cjCJu2l51Xyh7emg37DTUpxPdtf%2Fs7wBmBVoIrI83IYVVqKIka7xfB8T8c2K201tv8ZoXUwy%2BGWhIreOJcHRa6skNLTkA14EtCGlya7ZLsZtJ8e2d4cbZ4%2F0w6IkifTgekJIqfEAHEZMGLx9YYDUAO08YHzGp0zgkvq7gfbcAIyHAj0LL1ohlutmKty5E4PxOLIN%2BjXj9oLKzmrhCBXC2PrR%2BHy4nIoKaF%2FWqNBXRi2qpdq%2BYj2DeVWbXtjGEY1SoO%2BHEhdxoTkshbfV8zbS4gYMhJ6E1%2BQOBS24fpYYaDMXJUQZdCbpilcIPvzNBb8oHmNe2yiO%2B64OS7CFjnMNPKn74GOqUBhEG0DALr24ewkHVAQlO0O0E09oB6kgAAIAlYwCugyYQQO9p5vtYfrM%2Bp7C4uGYzahHd%2FB%2F1YlwxoWgFb3Shx34vK8sAGdFb9KkP0v70Ludo1BgC8E10pyPARzxrEGpaxXWScinbz0cPRVi59ytBt8HeVS7yj1fWP0csIkzelUWBBTbBJS5H4eyrFpThybLQSy5uzjCkeljbK3CMdwgs%2B6yt76gxk&X-Amz-Signature=2e96a1cf303a66321084d378ca91febf410ab2b346ecaf95e9952d0c25ae7316&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
