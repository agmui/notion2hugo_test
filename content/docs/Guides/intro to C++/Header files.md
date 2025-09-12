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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAHQQKJV%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsQeNIdLT8qpgH6CA4pfl2Vz6Hqt508u%2FjvdYP0DwhdAIgN21%2FEE%2Fr%2BgQUvYHMkzBTdXwP1JbJxi7LLklULgtcAZcq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOd57zoHAGrq%2BF8kPSrcA3KqkZuNvEeu8X7yueCqkmQRXf0Z%2FlMGrQEmuH52oprkANZWybrjkVfegWrK5LfY9SK73XlQSkw%2B9kF9BfR9cIux%2F2zIi3eF1xmGa8ZrQfIlzO3SEp7We4TOgjQV3KhNCb%2BoO52OmG3d887kbyBBU6cSxMiXm%2FwuMMFLjafTrBorLRbjZkw8I99znHJq2tMfpjRu30J8QSMW3mYMlmKKYis3UG7iy9tyRh8GYN8XUxuKcHTxj%2FP3%2FWrDHlVepAWO809T2GlNJzwT6hqiz42%2BBvb4fCh0B0w%2BX624C73lkr4kV%2BVBUV4X8Gwcqqc8A0Hdse6QvaojDHBhsR4xXVZxxa%2BHE%2Fa%2FPssLLZVJYc2tfZjLPAZE96V8DlIQXXM7j7L3Ou4hQVNaRHyYI%2FBtu9S%2FFraSZDCSEoCq8M3DISQGjTlTkhpoONCQT6eceYUlAB12J5Dno1EIp735315kR9SwG%2FfA9cPPh4iA599vglY9tb5xPqtsai0K2W8hs2l5%2B29x7JYzW270qKvkmHUvXsREca8S0bKrq14YDuW7SIROtdOap8CO5GCT5gc9X96H8wAuUmGsh4pOrqI0AY8oE%2FwJ1nyg29I%2BzgCR%2B%2B8ZBpxx6xNPSLe4F5jV1c4PKdwTMNbRjcYGOqUBA3Cy2T%2FoVDdnM3QZH0Q05IIqc588HeMg9WxIoo20oKvMIR9QW97%2BiWfAE7Hcjs6lAnazfDnZqmQzDmGAimz32Y7v98x4A6uQNExkoHdQZGi02uNlG5rb4dO938qZJIUlFk0OWIcU6bpJP8%2FrrmLgDjxaeJYFaS3mQvta%2FHRwCFqMg6Po1n1tN6Kv4qmOmTRWNlEARD5McUh1TAIsNefEs5c%2Bn3nS&X-Amz-Signature=58cb5d384e6ba6ffb5740c4ca8614073e98f2d5b7f61ff02de97e86944e6711d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
