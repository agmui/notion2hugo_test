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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YR62O3%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCf1ic4MLpnViWSlR%2BmqptDSVQmFwhHVPzT68AhLqNAQQIgd0mbOeFe%2FnLX2b6vi81%2Fbei%2Bof9mnKDMMt%2FBhAeQeWsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEouDIfSy8rmU3p2AyrcA%2BVPYHtpxT3k9ZxUElFpdBSDx02qyvsEscNaXiThi8AKWGWqY8xcyz5gazHkgSPcZHGfO%2B0pULX%2BLvDuDMt3OQJH2BouiLx1YAFUga805oBrT9SKlMYLj%2BIFkgTaUMdpJneSrlxbv0GtE9kwvC4nQhGnKjlW6tq6iFxyLJlaERiuGVyJVyHqXNrzyoYq95im2zgYA8TUJR73Ul4E4LN4dNTSt5x55IIXvIeJogYwjj%2F1dF1IdjAiwK5%2BBcJZH53jWzaCL248fTsBZmDjdcdQ4Co3SKJOnrdWzpxkA5wY8Mg5IXJvhSxAi9hXKXtGgehD1TuH8EI4knHqRouS%2BMR3CRNbDzxMC2Sv1Gtf7CepLqJJushc8a3kJGCf7LRUQNK2blVfnY9oIRPyUL7lyHcs0tLL804WkXIdkR6DKvr%2FXIUoMux3IpyXESNYRlvvSjTINmL4sy7%2F1VuMgJW2huTDpq%2FI8p5ut1hOXzgI4rKDrJcglyOvPSN%2FeDLvhpAsoocGB5%2FDtraI891u7yax9r9OjbT7jnF0gel0ukNryulKPEigv15H2OB4ydeSGI%2F6CpAFmPfZKRiqZ8Xtlb%2FpZbkYYJSPNztCgKOq4g3X6bQQSwFQUBL1fkm30uWrcmU5MMbCutMGOqUB3eaXyOdjeuphc7WnhRBXC26XIK%2BiSBmrGfUG7jowZBD5xwpVXmFnesbXEm6e%2Ffv270lPFVdWlKAdLQxagFOytMM25ahsBHIzCGg28MYxos73p%2FJlWFvUGVKnwpgoYdvSk0eO%2FAwaaK%2Ba0wsEiqj6EbB90to%2FmOiss4Wkfd8jWw3z%2B0T7qOyFz6sQhcX5nxVmpoVtRv8Y5LL20DU4vRvnH0vIZrst&X-Amz-Signature=804d000618204150679793f69dd73f62075cb1ea4c455e8dc8244616a84ad7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
