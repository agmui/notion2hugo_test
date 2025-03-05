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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQMD7QUI%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMLOvjni7xMJ1IkUPqyqsx7n9F3bu6jK7vDI%2Fsdp7nQQIgPxbfvi2Keavv%2BhK9egbLbk79MRynF2JC1JwLYIKoqlAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFjGmmZE0iKvwEkVpSrcAymvPcYd36tlflwZspPT8GU3tHctErxSPXCJXch%2B1xfVvT85ttIghbVpOwOlxZxPsSMoQ7AIh9994ZQ%2BOFAx2Q8SkfgQosXSFZeF7eRbDm0KSHNALReWD3lC%2FEaQifPheGVm%2BZ3%2F9vDXkb3YGvnGLqJKploN%2BarDov%2B1ZcT71sWhWrYAiWwiDc5sW3sG6j1DzOROzYSCmYIxVzfBkbMJOPdpV9dKbIi2129vE6q83AwStAxW73Z%2FBSVUtnd7KOh8ROJKVNs0VD2rMLhkKd1u1mzEJLN7wMGgYb9UY4n%2FvQQOA%2Fx3mX10LkbT6C3Fbt%2FnuGgUOBdL8lG%2Fx7lNsX0nPS%2FZPWXaaU7bAKm6g6SdJpQeF9SV9MJrGPnwHuQLHKYN0GoFYj4uKzQmEQwfDleKDgxdquFdBBsl4nF6Yl5taioJv1UGMGavDhyjZEg%2FS4CaIHsVGLz73nJx7KyLfeH9YOABRFyKVxc1INnlfRAMsetofnYknKz%2FviGgkwY338FnUaEb98UjYf9spqVcgAQhR%2BCWxLH4h4ZGk9JlH5NjCWYTyTVkVtYnAYGsPe6C7VntsVFZwTU%2Btx9qh3kQAYFE1Dw3RNWTwbA7s9hWFDJxN3iXqTHwyePrBpfW2I3yMOKVob4GOqUBmfc2WVPl2RqW4zE4fzgMSeJ8HfE51GOdG0tlqfLRMKSnvkms0qObeuXIeREMPj34IhY8zARxtG8H71M4xcKPMhQYdiYEeewCk8OxoIKV9jFLxPP%2B8q%2F1g%2B6EqARe7yDPFepCKxd7YiXAcvhCi2Jy4OsWTwlerpQ0pCzjqDsBSAtdMrEbMsixJsLACG9rujQANGiUusi84VbjQufUZKsC5hlvQpyH&X-Amz-Signature=dde73f1568802cdcb24b96a6fa694bde127684743ce493773313ee0dec837dda&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
