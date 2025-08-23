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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA7CJVIK%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBr5jV%2B3Jy0zgJPSG6TVuJwvytAY3EZjs3DQ1pIl7awOAiEAhn7BYN9TGdlZ6eI1UiZ1PolcUxF3RAhFedRfo%2Fi5Vfcq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNudJqVnellEvkMz8SrcA7LGvDC6v6R0eNkKbmxZKL%2BX%2BINZ7JK3tdEUDJTxUkbq5ZF7OlAr9vSZouLk3%2Beagk2S4lLXwhPeto0QBuL7L5XvqanEqjglMwhH4gIHO%2BsAvtbMQB5e9ssqtEVXq6t34fbiYB5PGSUl4Y3FARBsZAaA5V%2F3%2FJ8dG5mJdRFeWMvbEqcSSGBgqRXYFzTHG%2Fad4KUMefD2BmBWfSR%2FZtzwNXbEngLBpoPfOZC7z8Da7trpx2OocrcZhscbOkN%2BG8BbQyOqg8vrUbqRsxbq7IdFOdgf9p3TTsD0kmaStOHSfTb6dH0wrFu1O0kMOwhjU7nr3UoLjLCpJQJHpDZIxBq8XlHBWwPZr7c%2BY3fawhytQMME7n5AUo9MkJcQgNPBrbl0G68JCBfLdXEat%2BU2AC98J2SYIEMiF5T91cBZEvWTyAl2LBRnnRPrSSD6t5HqZ5kZ5LOYnuINH7np55MQnPd38DazuzF7Jqn2fusDXsq20Uq246YtmvE6Qb3OhvIEpN7JEMhjqsOo41IeEErdiqe%2BsXDC4bCUHlWfQ49%2F826YfxYPVQlUe3AHNq4yTJ0n%2F3ZwwgKUjTkJEWgvUQoqRNovV33gKihd9Q0SPgx%2BkzzelR0hutnsP6FnpRuXawxSMN%2BOpMUGOqUBq%2FSf8qRet%2Ff0C7DdqqmSV6CoajxzHs1ANqrYg4bRcHJUhnERhMUcG%2FGh0xbd2ffxSmvPUo%2BjsEMo8iNGxGRpf2C5CTpKk1sUfkZzvN83b%2Bm9UWXh9qkkUeYqC%2FdppMbxblJR5O6pMz1WhY5HibIGEG6fbzCsJKUm5zl3OMN4d75xNJRSU7TE7jYJ62wgx7Rvf5jLHGX1o6U%2F5OLn4C2AFgxwfc6a&X-Amz-Signature=3809831b697a8026b93c94fb521d38bdcc9145892c32f32e0e2a10deaceed5b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
