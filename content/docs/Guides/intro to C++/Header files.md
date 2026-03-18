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
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S5MUJLZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIAPfxA2%2B5RAgQ65XYHlzGIN3oh44zPvUIhi7IlrWfE10AiEAtLQkJjYuMiHcKo6tYts9CsESMHRGkojJC5qEi7EvMvsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwO9XXeTHIoFcXxaircA571e4PATSgf1a%2FWNS%2FuZAXfdCA8NK3aPNd%2BJikVFqHT1TqQ8noPWoGGRns8Fyj1dS7I6Ky0L5h2URFn95cM8jOClp9IwOyhE9nIGQNR7lawo49Vemm8zI70H4DYu3jSY2obrQYq56%2Bbn%2FMsSUN3yFk%2BEaPkXgxeVCKmEwYleDCfdEedlj3ynXQwNAw14suNguzXeqtwgKKGuFo8nGd%2B%2BgxbNORnv7Rm%2Bc%2B6Yfg8raIlG2xOiwv50YU6TpC48z5oLLtnpnpw7HEPtE2HRSsNhVtqphYrfDksfoH3p8NWNFf0oTh3JO3kcF4ast2rHEp0MAHtuuo644Ukp9cEjck21cpFjWtngw5XZym68ON2rICSwCm5uSWljvrNTP52TaLitlL6Rpa38YViFCJ2zkMkZ%2BnzIxENl13%2BRqcvu08POVx7a9vHTako%2B8KQ1nY8Nf44YGLiNG0GyDzJ6vWAwrmzApTdCUcupfKXv8zddSKoAuQ%2FaPvnF7I%2FSYtStItxCved9uBdF6pUYIzxT8xqButcN4I%2B%2BGNgfkmMBl8tTXeLYs5IIZh3e1LUYD0yiF3ywoxhS8TKrdH5blrA4F4kRMjpf8MiIWJobFLNtGwOXxCgZdvGIigoVTvsfXR%2BgZytMMHp580GOqUBWZeqSV4jIitfV3XAW4U2jmJI3BEzD5sCNMKQj1ZkKVuSq7%2FX9zoFfpky2CjZJPsN8jHmeoRCLI%2FXLq2%2BE%2BwAABPh628UiLlq4ZrIsMm4y%2BpUlvYhhT7SSSpoa4bscdwAZuR69QzMmnLkfJfxuqt5wRTdCr6SP5obZOqA8DxIUlJu3gHi0F3%2FJ6WO9kihV3iyIF7st9BaK656M%2Fk%2BKi7ESjPdufF%2B&X-Amz-Signature=2ff210fa1a738267b2fee83de7b5450cced5a15c036f2321be25977da5ea2cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
