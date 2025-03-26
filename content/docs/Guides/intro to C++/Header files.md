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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTWY6VAF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T003827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkiP9PWlPpJu1Bx28tYkI%2FKApGyAjKAZXnP0nV%2FLFoAIgKLfGVYcjvDTRrKzXzMRqsc9OmQxPsCGjOqWqKfNIsY0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNMlBwaJmujh9vGCtCrcA%2B%2BLZeKpBXmqt7JFZuWVni0peSA6yRWP0A47qUH8YbA4MiFpA0i53QEpgplWCT2%2BF3CUib3Bz61AxTr6QSmhBtZ6pWunYfiUtY6Dfd4Yjhb7%2FhS%2FxTJGrXPYX5VZ%2FDT8tvaFpHbapBU%2B5XCtUU8f1e%2FSh4dxSzO67SxciiDt%2BOlp36W3BOWZ3msAeNuLOPDAfjpSKaPcG9fajh8%2Bl9EttmxfegAKleSwyJO3LpH0%2FnwuKwkkz86s6e%2Blqdkpxj3jmnAMpmuufjM9gkpz1TdNWd%2BqA6dGnP42w3RzsgD0LmSKBfo6jARo85enO5eZCrp1lmUyyr6eEmiJ9STw750GG5qNDFJhIVhnbkrpwjdokKF2%2FzV3fE5S4vfPr3jgjwvj2r2VDSUpbWpd6sLvE4qU%2Fr51pCvcZtjLWfJHS5OYhYMfh4NmD%2FTom%2Br0xdmN8LQTl9nGnq5o2YdnmF9v78HhX%2BXwtp09W5dcSvJrH8SKp2y63HUbUR839YmHk5mrsNGW6VeoHHmXPLcLnRKAcsy6nYblmhLloQn%2FB%2BazY0UfkNUHc7cYNRXnuOBxEyLG6ta7f35iGy6SdJT1ir5U1JxZQN4MnvX%2FaP6HsVdvcMTOS%2F9twBoRwWcImZXevkF8MJyOjb8GOqUB7OUba18bbVx0AnL8slFTGFkHgJfOqPgvTdKGLgR1GErYWysa1vLCaON3g9C1EDtf9EkuzPFeDghtbPj3wywGUcy9aHFfSZRJ97HnkGnDukwUAH8efQvVTcEzfDo2Ki11p5TiYH2JS7YUiFJK%2BCCab459hCRqwIFbbl%2F9%2F38nQJxbzJOMeGSwzr01a9PwyNzNb8R%2FNR%2FoTZpPMooFufUCpHwvz5q4&X-Amz-Signature=a6e8c6b5b79091ccb83bb2d52bf3cda7447c5a48cd981c36fa8c66db37e14b99&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
