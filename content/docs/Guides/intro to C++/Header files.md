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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRLUHG2D%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDPsy2W0H1y1W93krtHpYBBpJ2Gri6d4cn7s4eqWnfEngIgIdJPuTNWuWnlp%2FuxVC6CqMbBhH71ORd6fyaGQiQ%2F7o0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnZlmkuXFcRYiuWiyrcA%2BkuDN50CRGv8C8lwT5yDR5gsbVfo%2Fd5CAT4K2XBfzRwHeKIHd9US81Gb32xWfdYBbEkiBDL3MtlFuJoC%2FGXjZ%2FA1QVz2%2FuS7iLQm7Dl%2FgYzU7EJd6nKG7Ou6Jn8IpzVKDrgXzlNK0Y5rXw5zriKa5o7qj%2BsTy9eIQTb7iMJntoAdZef42%2Fg4EBlqish23%2FoDDKy0vxLoFiKgyd%2BNPDPg2XuZoDqOA0zbu03yGD9Hp%2BXsZ4AxA5%2BpGUMPzkZE4vNjEPfK%2Bwa%2FbFKtwhb42riqPPUtRxADAuUL3kRVCRQJ1wOjOStMdLH0XaSUZxy05QelZfWsUgphdqWarpDyFgZVTDKuGpXMmETM7gbCg9rczdkppXUrjWW5%2B6ungm%2F4y3S2zSPjg%2FVQ3oCWyGX52W2FFC%2FM9oiectZzgL6sbhi5L2L8QJRvj84uxryxXccnX5ZRoY6wncMxkGMFqGDmNTs7QKqVwUtQ0iC6s%2BiJzdaLkjf8bRC9Eu4W1CNin4YD5VyNJ9rxSAOkIL0MQKfh%2BokYeja5RsbXW0Gx5dzhgKd1hRM8pkGC4HravoWT%2BpxDg9RXYMX0IkH8CzJHg8nE188lUzzVQ8ko6QjS4pWMObh%2FXx%2Bdp8X9RW0qsrqPJUjMLiSv8wGOqUBb28Niyh14t%2FZ02RRBChkxUSWq4NIbL5gyhIY8TDLzAl%2BK1yQUJ9g5uGAOmSG4oWTgw%2Fa1ULgo8UkoZbOsMijz9kBd6tOJxnA%2FGO3aAgVtguz7xuR1XiHuC7gHFIkg8xTvzkLUUVh8q9RtER2KzboVLwr1l3zPOX%2BqCqzlwv8vThiyX5oO%2Fz%2FoYkZe3tFo8JgLUY94O2h3QLDc1GP1ePB0280k%2FaC&X-Amz-Signature=e22a75969c5155df603e9eebff2d8942c2d81851ba5f86f8cdf648628dd3514a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
