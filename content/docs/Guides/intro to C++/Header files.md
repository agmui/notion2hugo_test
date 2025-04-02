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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466663IO6MH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIGFwrv7K0SRyWoGFBCl%2FxrwJ%2F2XB5Nrlwyghro8DJ57zAiBbP%2FzYFQ%2BfKBq9nLk9klweMjFsbXBAip6AEbe%2FJbWuriqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmL0rEqmYLyhHTR7WKtwD0aupSO7LUVfs7NhjOqruJ6r9WSJZ2h605RB%2FCfV9wFEw6K5ILEUC8hFNxAMyQ7RJadacLCxfMo7ytuhKY4lXTf5qKQjrFDdWsrR9BqKa%2BjOYr7t8H2%2BDGTQCwSZyhq6WtuOvPE%2F5ZD3RLrmJzr%2BUl91%2BHcz5Od%2BbNSlW6ADDAlARqIZKjtTf0WzLLrMQWzsPRElJfB69LRXQIuDTRX8hh30J6fxnWeunh8HdIQE%2FsMY8W0Gw4ynBFJecUjkzMhP%2BF27CgwPMLpJKFnj8ccNcuvOsGkYhQA6pgiIH8Ce7ci6EQU1NczNbRxwArWtWod2%2FST8f9m1Ovxcz0kG9EPx%2BI75KYTs7qKAoBiA22a3jKj4eO%2FSfykGlvYSA9sl8KAMPTUWQ9RHqt63Q9Y2c0gZ6yFdtY8Cc1Y%2B2ZP%2F8%2BeROHfwze4Tkgbxablkv0f4BFgg15Yces5gsjV5nDhFYDCJdQ2KbUKs2gYu%2FCSkd%2BNo9mYnWdrjfgzaITyba%2BWVXZZgzLQYViBWB7GFFaVgWEAmVDElJluvPHlNztXftDBvEp4bJayWmEwJHl1bOV%2Bu77fq4Ig2%2BfsH6yuyaF7MxVYkx7UalbnwV7ltNMUCMct2La9jcIQ2N3Xenh124g04w4YuzvwY6pgE8zOKF3Qz7VOpZeYKetd%2F9NGNAS4vPryOJIqsrHU98RMp0qj%2FbgO1XO1NO4QG61UT7sVnnIhDngHuAVLoqBNRBolHcIarIuRF8wFb1Egh%2F5ozCkkLwI3%2BBzCdiWlQQbaHpyEpgmaJSDIdPxHOOoEqel79KMeFHogl9k201yrQve52PLJxRA372fq2w%2BWlrncD8XnYBRbalXwNUsAh3GZtr1hRJquCY&X-Amz-Signature=538d6e571362b6e6b656ab997d6c05ba383f9bbcf2919e75b9503efd59adba0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
