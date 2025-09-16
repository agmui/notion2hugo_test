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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IJJJYUL%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCHjFAMthk40RSvXLRyO%2B5dwSHJFDCprgZ5jcObHR69GAIgJ8KFPhV8hEnSvZJV6vybVBCqvd1kgZ%2Fnd8zzdZAL7x0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcm52t3AWDFE89qNSrcA5OgRURMlHaXn7ZwIkj0nmGxvEAklXvn2esIomLnl68N1TpMCwtftWHt9yaWyKInb8BjBuLcrz30V6sYaA9SEyW17VOgI8KeJCMg9uu4E8NXcuTjjpA1KGyv92%2BXA8nnk0%2Bbq0bP58pzdHb4n%2FkHpt7%2Fbx6PxP%2BtfIkTWPf2ttb%2B%2BcX9Z%2FXdaA7XYoO93kv%2FlpMXnojlEOuWOkb9ktMlcZLFXjJxIFXW5R6CruCdG4ixlY3%2Bxqt6tA3SKmdLtZn7452fI8XaoZoMQLOc2r4SnMEbfWqc4bPAicaE2tLei0SMbVqJ0Pr7McD%2BJbruR6B3Pch7gPr8Bic8fCpCoI6HQakejCVLYK8u7RbBGM%2Bu9XL7V2NcbLrkOV%2Ba5mpvUJ6KqerY4HsTiCn1SLFW24TAmDolzS4rR%2FIhwRcR5iMSv5Zl9%2FjaSRsz%2FFIV8wTTicNKEQR%2Fffqc3OWRCw%2BqdD%2B7OjQgAdDkSf4cu7jdu6SrEl2fC8PbOo23DhcLv%2FsgtaJeTKAUOqt9N819insZLHfOVo%2Fha2q2LNohE%2FitBA0RjXeM4MaxBJCZ6IHNPzPNMI5YwZ6QiJLURCJrbmOtZQIDk2vbyWiesH2ZZibGV3LmHGYrHLj9fDeLC5NXvbPvMJfuosYGOqUBmplNIm6bkhvBm3xmEW6kANlJn5m9BpvRHZI2LdVUrCC5dVbQ%2Bq05bMZe3iA5vBVdtw5g6Udw%2BZv7vf6niAtCuMbHf67tJS0TQinRlw0CwUt%2FELNC9xsmKgMBF%2FLImWvvMgEh7m4BI2XontxNWoUl%2FpVC4NGcoQQ8JHtVd4%2Ft%2BNGcDdB%2F5d7HDGdBwK0wc7hUdcTg2mW9zC%2Bm%2BbDzYE27ze41QsUf&X-Amz-Signature=6fe4b407ac17c975600eb7dcf2dbc40983f4297dc574672f7c8ab01ac2d70939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
