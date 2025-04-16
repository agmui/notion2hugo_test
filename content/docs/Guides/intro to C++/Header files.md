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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JYK3F6E%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwrOuGw%2FQiqgHx5H391e0E2qpXaINU5Q2nztxTg9nuaQIgRcFWqdJbVOXuk7DPIHMJ5XEhaUaqa4mahhkdAvroIqMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJK86eaf6UYaAanAsSrcA9sa3oJIIGUroXV9%2FEDseEIJ0gPe5UXPRlLbpCSP9ySBKOPpBN%2BJRJPKp%2BisklxVNmJDUomtIHMc95ZXIb47GZZg1WFgjq%2F%2F%2ByYAwQs4Mt4HE2k%2F%2BHwFokZWXXgR22OdoMVEZlMm%2BJAIi9wMh494o6P1SNU9i1fKqMm2LTpAwykCjlosd9JTIdO5NitvQEsqrbWof2wWcRcplQK7wZ23%2BLA46lLp564vjVhF5M4djcafZ7NOQ%2FABnQPsAXlnH%2BfTfpwhaBv9QCxXItNZLPXcaPpFSNNFfjQHlDZBd%2FmgWiwXy2qfiOYcZFzMpQM3QClleIVkoIChuYHBAUchmwImhdsNfj7R4CteIxVDgfGYbaqrTnwXN4FBp7VJFMEYQVZ686P0GGMeCKlSeOpQhVZ11MBTHfUXA0Mj9f165rQKHxptoStAIXdN23tvaGZ1gThOqnCxc0yiS8IvVYLiJfKWMyFnEu9rSTK%2B0iKrAvlMckqMS8ZMxBAZE7zvs6p%2Fx6I34YrRA2I0UxX8vgt14Yi2p5ziRhUYpLCqNRUBE1gx263N8cQTrGA5KWUojl%2BdsA%2FvY2aNsZ5LKIN%2BN%2FnH5BmU2jNrZUKY5esO2uNl%2Bb8dKdLIQ0Kvq%2FTzsXQFkR7mMO2r%2Fr8GOqUBFH7OUC18Etk6N2uvdzOsl%2BxdaREgFV4soaB87OHi%2BrNkeVk3aLlpePK2AyWhwNiYbPFbg49buLkWoZMN%2FVglqq1oeBKlkyCAmmeUPZq4W6VM3IYjKc20kL6LpFVdw2Vbt4IkC5lzOKozv1WRjo1aWtca%2BT%2BLhgf%2Bm06jwOJ08A3HDsUj%2BGwt9qdnPbYhEAE5JbY7Xj5Wh89o%2BkoOa9UDWpEMRDrB&X-Amz-Signature=6218d382a2c926505abc6762263c16583b96710c7156395a50ff59c861af2455&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
