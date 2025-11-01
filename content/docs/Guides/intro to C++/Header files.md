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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD6VWZ2F%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIDDkRvAjlKJr4J%2FqTabOuHueEqK5B7vbalwz%2FOV1qRWRAiEA5UoXhpCw4SbAV745vezhFe45uU5ymhog74WworUbWxQq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKIxUNW5DTozupvL3ircAwBwfZ75WAg6peLhqMTrMxJnJnTFP2A%2F22AKSkvgn%2BK4dr6IggNJqC%2BL5%2FD%2FdjdxsoVnRyiBGxlzy3PxKb1xQlmaCtCQIITXAUPf0GvS%2Bfe1LlcDG5CSF65Yw%2BqndS74nGY46ZGPOi3dfOlcQG4%2Fste1jYVyUIc1ES49cAcIYtJwAx43Nf4n9%2BWMRP3VLxtcsEwrEv8CzbynsFonq7S7VokSCvc1vcURlL%2FxV64jIuyVJCgA%2FWFjbonibe1qL8dGBvFFEy0ZfTXlS4YjuhNRk7paGGtbwa7pirSr3m%2F37ecR9LQ6uaRWfEKhMQiQgl39CgVkGubYg3ZP6mQa1Xyc8j5TjBAlyD6z1HEV9w0UbV%2BASx7d0ocUGUBQ9vPe5FPgfHGJNcmaiE%2BbhD75GC7W%2Bhb%2FvJqXTlWVinkoV3i3u%2BS1NALp5kd875HbOTLo5ZBM8pBf91P1csWXjGkHsm6%2FvZZIP9z23s7aGcLz%2BB5UejUSxb3DyQoRz8P9ErA0WcnINbeoj0OaByleJakIEsSzloVZ63Bqe7lk0N0v26014J0e%2BeqOnZIsG4Ly4tCCF%2FfxACmS%2FJvDwT%2BbjXz12kn1me%2BmY0SDdLVAyxqRxbFyQ9JB1n%2BR6B1yuoREwr9XMMv6lMgGOqUBb2BxY665ytSGaOHMwv0Y8zg%2FyX4LC51LNQqZaWOu%2B5tgONqJU593vk7csxtXvswU4r0L5MIKk%2F%2FflImITXlP6aAqTyggLYH6CQLCJIi653tswbBePaHVeFbCAWxY5Zc99DGpSfDUsoVz%2BFN21fh1Oq4FKaQBdReWeNst15tUDqJ0RaI7eQtFyxtZ2YvWeyznnivJyFd33mDayMrngYxvcBwbsQmi&X-Amz-Signature=b55d515f4f1e969b868495022163f470c863aaddfaad598cffe6333cad8ca74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
