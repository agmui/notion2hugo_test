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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JACH5OZ%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T110103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHuNUdriuCzRkLu6%2FbJQ89KImv5wdPfkATrvbFN2KmhmAiAF6NiDgS2K6OTapvXM9RoxnLBmK%2BNA03HCbLovxMaRHyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMGUmhKesMidqi8evBKtwDe1oB1ZvCMzRewFweSz7dqjT5AS7mYpHh9UL6v2Y37zwSLBCmua7YYBVq6fPptKvTrX7EHY5CZAY4lv9emfhGrSv3AM4IhE9q4BnJtojftDHz%2FllxgCEOtQXiWaESAeRB8sZKNNgSDSxmbONEYZaAKKnJoIbfjNAwuEyJfbaTe3BsB%2BpZeFKpaITOUW7FQ5Q7QGKvaCcPTsFXejse226Oq5eFE0j03c38TlkyYLWdb2rhr4FVKpjMeTsWISflqetQcbkWZQ12V%2Bxjs4s5lLAgA1nVC5kmjwgyVyXt40gTqYk1UUKyakaxRKEhaAHLtL0ZaqtW0O%2BG3lFoCAqgJWCrrCq%2FcYDoeyrEjRjvGphO4lzDLTN%2B0mn9Wa%2BN6ghII9Gley1WIGS8qgAoe4uu3QfI2W43geCz0hUE4CXZhOykqEfyCfAjZdLPeub7TJw%2Bmvvjogd0Z%2FgF5WaJgHQFO06%2FI7Lf2Itw8kxiMhAXCQHd88T491ivpxLlkE17WE9lSW4zenII6hF%2Fb%2FA%2FQ3S0ejj%2BEw3VmX5Oo626i9UuN2ePPtru3CZ3A2Bi08vB0cZdeg1NxpUS%2FJdGHTgCzAhF0m6qfzZb5xUE7wlb9rI8ad%2FLFfB2RFqoUJxIaNTr6aswoYDGwQY6pgHDp8jE4eIm7JUAY3Glix%2BfonLxaVhupfvMI5VMY7GUV57kKpN0BkeMS5h3Ukgl1BSmW%2BzuUcl1guPvXcb7ggesQOXXX0ZmAtT7miHYrTyS19t7Tybsyql%2FDkKevDq4BV7%2BiMa6ietOt1P9jxTfuCnXF2qkj81%2FgVGD%2BlFet7KaerS2y4Sgkx4OGvD%2BP8LYfcRvjIXnGSldBJafwWkpmHYfEGbbuTaR&X-Amz-Signature=5dd728a9da7544eb54cb49a3f58a70af2c3affa1da5e376a778a644a2fd11ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
