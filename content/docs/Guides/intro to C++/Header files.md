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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQCIX3C%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC1n%2FAQXWI4gBUAstYdZmoSoXGSEcFmZspP8FJX8%2Fh12AIhANB5IOlwRf8bM6y7YyKSjFoa3%2FrxI6NOFD59LxMtZ%2Bf3Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwlrdAyQ0CXi0TQrGcq3ANgO7Id5Y7XQo%2B0CkIYkt%2FuYHoMLRBRrXhMlCUa6VC7Gk%2FyZ5xHbp2Zq2Apdp7%2BGeVCoKJZuuH8KjzcqPQztQL53P1LQr8HfjrYTwVyN1MsQscqEhfIkARVNxk%2ByvCS2ebeziVHZ1spWqwxWHoqaG46h7fC2O7XkZa1BIhvEf7UXrUmP8hRuUgvna872rgqQoxgdAC1ONN4L%2B%2F2896kHjegEu1yfWtacIYrx0kXk9%2FSu%2Faqa7Oa6%2Fcy2LaBXjLPecYgrs0xbnM124lQhrhcSSrOvO7TbCTp9En0L3W1gGc8gPDU%2FxjiFcY55lc8RX8C%2FqpOVXy1IDAQyH4MZCmTbBnJyIskxKEInGMdpjS5svCKSgzQWAdbivxMTPtakJeb7EgO1LNvlMpeI%2Fy3anPNIScOvfx3%2BwRsDfC7twfj0Sb43KP7diYb2gEsmdnsfvqOTB7hXut51Y7b04GV9WZHs%2BUOSy%2Bldqmhqu4HIlgZqpiG%2Bp7ygGVe9uNx2yub2rFINXSEqsk0QC8qq%2BWj1HvHptjDUyLc2iUJJM4zzKWxMULSS8n06F5%2BiHVC%2BMDtfEYFPdpWIMdsNnPuDyj%2BciofU7EQHS8aaDuYFlhmlHFZN9Z7xxw0ndm%2FimfQWIjsFTCHkoLFBjqkAVSgzGKfmYTYS9rOCPQKNSwTqeeZcHqLjPmoLt0fTocDMx2J3jc3IYzYjthFSiqZiZS1l2jKupEc9AToCfbe1Wu1syLi6n7RY8U75J1ZiNfnAMGzaX9TGFL7hoO%2BVPEjc4hTwVwdQ54ayeLgnXsAexNkfHiJwvShOcbCfSIIj696c2nwmfZonrpL2qyhdtBV3moLzY7U3kwOQhhZmrRArp5iOpXX&X-Amz-Signature=e397b1405336a2ba2dc2a17a57a287d4477e2036fc7a7817ac6d4b1e1b261865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
