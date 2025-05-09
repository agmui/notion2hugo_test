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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGJYMPJ%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq9Q3x%2F%2F09qHZn4MqrPJt43QYAkMzH35UAfTGxcYQQUgIgDVXaqoJ9U5%2F6AEuK7lgKB7WkwgawYelEsoPuSFheascqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJ5lQB4EfrB5aJh8yrcA7wZ7mbWN0UrkhO%2BJTu4yaWtWHN58WF6knjwCJS6Af9vg3p%2BwzBIB8MBsGWnI33iUFQ0HoyQwFyAfHjwcrbMa%2BFLoEcw9nzqmhMXDFgt9wRpgbifHLU1HTwP9gb1XP0sCtEBIvECUMjOKcwaJHfsRodA7VoeXr3CAvkw%2BPr3GJmmMEcL9oZ3IkQeDuNh8n3jMsN7%2B6BmYhYs5oI3XagbEw9vYc1tpyqe%2FguB5AS9SVnkzO4gu3lLA2HyQfYEraDhuLEaP7zXHKxxsM96LoeUa%2BwOH%2BUnV5FArf1hNN0t5qHtTgaewe15YNB6HABCK58KpoQq01tG%2BsTk%2FcUDkODz1IJds7mhQ1T3Vb6E63CCNBz0OfrwcCJEMIIa4yfNL2RZuk4pupICJOQfrpVadFwsqPCgYrCSQNzkNGrnKLwgl2J2%2BiMPv4Gt4Dvf0f3NK%2FXdkal8nxC1BLOuzjnp7upBDrcm4ehHNsOJRQhJSTU3ZyEBLQvfq2X8iohchJkKhF2LKfrxibEaWHM0Dbhl3aCo6biT%2BvFPwPGre8BWJQ%2Bf6xEKKtMxofAvJJszEqvoROjtK18YHusK%2FpKDgNYItK7Tek23KHu9nkHihD%2BjTnFeecSvKSxFs1myMXBrDepeMMal%2BMAGOqUBSFPeRta3CVVs%2FXdcPHQOYrz2gje9vLjBG1dbOH227gsH%2Fj0rUgvgwMBsldw00KD%2B9jLMZFcFEJSuD5SUIlIH3Y7AyqOZla9n6MBsuSaU2XAyR7EPUCuuSTAgto99d6792cqX9wiWAtqlNEgqFLy2tWj7KWlzQ64hscSBXiDGYpeu8zKZjc9Z%2B6jQ39Z4c0I6AmODORA45CHejh3zngXHvKQJs7MY&X-Amz-Signature=22894fd16fae4d4cade9d01703d811fb9bd6b9c05b2852dc6d973683c53f0a75&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
