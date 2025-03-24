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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647DPP3AX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbsUOh9nhrfArOw8wxspXKrqDJEewspHjcRXVVlj7mIwIhAJrEtSiH2rUnFcVhPC%2Bs%2FDWEF1aT%2BXoeDF2UPHl1dubYKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx32c0ydHsiKiI1uCMq3APrBE4tC6dw5dVX%2FLjQmx3u%2BhI25ucjE9QDE0SU8D%2BQl4oKRwGG%2BsKdV07m6dI7yZW9c5Bk8nXVdmEGpoXA2My6uR1Z6FVXsTMt6pS259ZClfoIEhYYTlskjA7A%2Bb7cg3g7RMs91aB%2BAQ8f3p0QnZgp%2BeGZ40Oum8WHxpCvLVwlqPYYQ%2BVnwDyOe3S2fqI1yxlIte3N05sbfh20qaRiu8Qs9KXRabB%2FI%2B%2BAWPCxmwlboEbMe%2BNLiicB%2FrLFDIhDA%2BThClSA5%2FUon6MmwkEdpZ7yzmVtrsnCm%2B2tNfKBzGd0S1Syku8hOwjMfVVTtDnSr78yCAWwec866zkxOfUoRt4eactBz3fvz2WCnYLlj95k%2BcMdoDVtYbcGsrvjeXU8CStdKV1wRd7T6GIrHAibUFpiqnKzI9uVCIE7cg7KWANml%2FmbxG3Af3sLHfyNR9pP%2FtHzaeq9DOdmY7ViAvWWS7Q%2FXmMtnlmY0zA1g6IU9M4oqLkYTyvhKAe8%2BYXiPI8NzfzkBF8dMwq2%2B1CmpjdIEkWAfdSBtPTqE1wTsIKpBI3yMtRf%2Bxt7wP1MdSbUuFsvIXhWSbwgMLpfrPzqoA6nR0L18yqkVvKIVLRaPJOLEOUFQSrUaCYlYhRGK2WPMjCxj4W%2FBjqkAWVIAWLMeyEHf7M0znCZaYuihm2uW6f0NYd1WkCxGZ2xHubViaJAXVBDS47%2B1tq6O%2BEst%2BWsLbOXxZECH0njOrUc03qf2aoOoLNloH5ztfmlYdlcCZqlZ7ViWEbg%2B1YgM6q5YZzQ4L8IrVhpVY29X3iFzwDMd8UTR2iJZ5ICZkkXuFnRszCPXdiUhnvHDAHgz%2BmcVji9GzTJ3Qwmxxq6PkNygxZB&X-Amz-Signature=2780a28985bf341de489097dadd74e1b1ce45f169f4b1ae52587e055744966d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
