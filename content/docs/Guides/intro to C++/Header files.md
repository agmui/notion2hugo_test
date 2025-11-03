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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5YIPQ4%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyyj4%2BGeaxMQO4O4qLfMJYafuRCYbDTufLbA8ObwcTUAiB%2BlJVLICTAXm6JhgUYVJZrt1O8pzFxRCo1t1uaGLGwGyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMksBqfd%2BCQwvUl0jvKtwDQxg6OGRpLy5fhiAoRgs0pPkLeioc4Chei3shTXmOLOVwGfn9OXsS4%2FDHSutGX2tvh3k2VBzCAKfmYXMvoUlh%2FKjqSggA1JvgRuqzZShOSBugQr9UfnDTKhPtysa3v9V1GhADdyt6h06oz2bsbjSFUMp1FRmWx3ZCOEShqEjespEjTPkLLEbeTgwmMCyQQ6S0mxTDYENA1agnrTpMsJdjnIxiqZVQ0jHfT9BWZghxAoiNfzNomwDtMxzTjM2Wyoccs9kdGrPXK03fc0YXeLe%2B29TwJm10RL90KoVZmMmZ%2Fj7MEUciOuZfeCyNfVr3pQT46N8QekoKABz4RrXvLlABEDmj%2F%2FY4JOFKJwCKGLS%2F1cgxa8B%2FzT9ULtvQCnjPFnD4BSGTrUge%2B8Pi%2F10HtLxSAaGxJMsKV7KTQqv%2FnHsm1BLs%2FoSOSJtHcVO%2BWWbRuG9%2B%2BSvxJW8OcPWQe6naKrZCMRg86Qxn%2F5sRSgPXqG8jMtTtoYazd64nStYIjAGyzK3OZZH6YqxzzSsvjzW%2BZ%2FngduFgk%2FYQFjGTkWN3y6Q1L89dhkoRERdC%2Bk8AYiCryPrl85QAuXQQpaVqc0%2F9sQQXkBfLi1bwA90QQtZy9khMfDp%2Bv9Ku4h%2Bp8R%2BPtJIwhomgyAY6pgGDpV2EhxFtqc6evdAEa6l2Jaox88I9QGWMbOkkfVH8CKTjVur2nLKokEiz36%2BAGk2eWe3SEc19HkI7cDJxGuZi39hIx1PnUUDC0zwX43Xu6q1jG%2FOIYPKHUNW8FKP15TNo%2BhYjJIpEJKet6bGcub36UOmseNOr09PIMI%2FajWEnllM3aUBFVcT1MhqPfNe%2Fs3vO6vod8Nlq2hsg%2BAJHRVk8OZePMYiM&X-Amz-Signature=e321a5da564860cf9f9093f60b9af477ceef603c2439f47c26f3c540d89315eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
