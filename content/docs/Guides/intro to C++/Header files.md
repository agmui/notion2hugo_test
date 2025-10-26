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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQYHHLS%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7DU9aRmVeFLfoDwfNygXW2qM8XemROTXrFPorHi8gqQIhANzOUR%2FQtCgHvhHeflZwoHHvfCGpj%2FP%2B%2FbAZr%2Bdc3kUPKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhBwa5I4kETcJdri4q3ANgKjZPfzt26qDDO5rW%2F%2BCZeEudwzcmKqclobtDrQl8f1wdfjnajzewhjO42qv1HejsGfEQK2qChMX6IzIyNeoNiEce4xRMuJamuMmo21m5QGFyC65Ci22%2BrvhMw5E5ficShWCIZHUeT2nWLfhFAuQi%2Ba5UukIJM60Y%2Fa6ugFd%2FxQcEGuGp5uHWZZaa2wIDWHTzmNXB1wAxY36WJkatJmPAuMlL04XzGVQ8thXV0sQ4NnEsG0J88rh3kBryLcR24PrabINwb6jyebNAeLNHmptfg1kroVVyOP2DZ1ZMvP0lJu9PPdjlH7nsTboqvTDjmY3EFWS3tc5LzO0yLkgyVVf4dgK4FRSSE0aojjRIAMrn8X%2FyoACH2ZNx1j6NBy%2FIbNmI5%2FhEuw8xnIAbzwzDaRm7mw7mKdeCb5JIb3RbWtn71iWvLvZt4TLY98PsYwC%2FRtE99QNI7Rvzw0IHNd7hXXIm0VjCQ9%2BZhURGJuE8UskJJEfXWpwCq2V%2FAv2silA4gpqiHQONywhaXOA29kzPmh9TneEJqtfzU2mK7S1kWFJpUdQjeohPrWidhUtpXdEGS4RpNOv3KyXsOk659udBEgEVIk%2FKj3EV%2FmA5guVR2CQ7%2Fop9lL0Yn%2B8UIEpaAzCPuPXHBjqkAbhdxQRAe4DbM21ZkBi%2F7Ys8HG3sh3ejc90oKH6cNgs6AZefKRaohHdtDt1YhOX5sqbwFgKstvyxv9pUaVY40DdgGl884vL21jkRCcvdcOKdP32iq4IrpLUL%2B9DPEnoHNzA3wlCTI2mvLwkH32r4WKtkK6IObfAskD45tKGmsniG86mRy9T2iIRkHp6z8iK5smsU915OVtu61XE%2Ba%2BKrf2YF5ZGj&X-Amz-Signature=63a6eb3146d9a13821b5d9af2dfd797cb6e9e8cfcd42228d348d2d5ec623864d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
