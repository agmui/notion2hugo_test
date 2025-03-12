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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBIWSJFQ%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIHNF0HnkLlAUDE%2BPObAAzMv%2FQJR2MlZLT7EwTSyKTCPtAiEAwJdai9fFPeJ8EqnIV7sTu78sanqE447uHkD0uKK%2Fk6YqiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Fvmb43OHdZ6A98hCrcA60UzJjknz%2FkrZwu437osTUMvrVUySszYLF07kLTQ33%2Fvsa9zr1Yddlj%2FZrHWsBLBqB9Kwwort%2F1uu%2BhCgiM6zgl%2FKhAgCEp%2BtqIn7SCmtOwZ7ZPt9pFA5p6cg3YWxi0trh%2BK5SrHVVh0pXqwvnYsBSShApRvtrXwOnDwDsdSaMq1t3OARF7tXaheOav59Dyuj%2FuD2h2yIeyUcZ8x1wASqIV%2BVltuL%2B48SlrYXbk3oOetnqG9S%2Bza1yBuFoXbD5kRIvfla59pcrEAiyRnG8vXMp%2B%2BZqzaC8MAk5tWerveDUS%2Fc7ZLkVzFq22%2FYdzv%2F7bd1UxsZ2vXCiehPqs6u81cp%2FRkK%2BIvAIgXxaUrz1IsbSp0Fi10YbpLj739Uur96eHIt8YkVRxZDe0UAz7oSTckiUBNv1HItm8uwRJ9D4kzDL%2B3E7pDp%2BCaRYp9C%2BUNGZ6APkLMMElGE%2FwRAEyOYVlHYo0kh%2BrPGEJSx2hny9QtZJzpHuLLWQnpHYzTi7WFbCZovKbCnDvhc%2Fe6UBSXocl%2B2buw%2FSQq3eSjB3H5hJGs1rumCO%2Fn5gg6hWIl7SmskUMvd8Tb%2FguV8WoP%2FjogVMvbSeTN1i7NNGlTQDyC3tkuN%2FSyYRjPS8zAwCYWSlUMNu9xb4GOqUBdh5CgXTHA69SsnHgq91eBsrXvQEgY6WmYRbjRUVwtj4lZV4CMbVvnNzUlSmoCs%2BlZx58d7gu7fbHH8HFRZizBt3ePLVYoPlK9coj6vDo3dz0p%2FYKNa0YtVQUIUNJb%2FyNUOju0Aw3JVOZ%2FOp6%2FASs5%2BXFkeMS6LBmT76WzogzDDPuClhoO7ckN%2FIFsvJ0MqwdBQPYYWIzV6xfrkNbooXzzUwsstD3&X-Amz-Signature=8a132725554dc4261359b95d69967597af60a913d8f53340a87fd3c54ec11e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
