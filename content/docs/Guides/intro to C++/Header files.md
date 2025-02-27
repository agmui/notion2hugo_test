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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ZYC7J6%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIG94yCVYffOUJxJlUIfG1Fez%2FDAf%2B9UqXEahZet%2FM%2F1hAiBYwQMvNBGl7wFC8Dy9ZuxF2mGe8hXHASM1eDUinnHWHCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMQDAPiZrxQgy8ezm5KtwDNFLe%2F4gcqBHyBUwRKdcnIgd3U2IRHq9ODAnqVd143ZaDXg%2Fh2uzZttQKCPRDZMhIE5oXMmrjYYjYfcjYFDj3aLwK6xq%2FlEGoXN36feAINbN8BFHvhBtje0WJZv4LB%2BmQdAbuHR4iRbPrJn3%2F3oPnXoebF7aFOYuuf%2BJ4Wh9FFKM8E5rHJ3jcMi8g2Q7Ffn%2B0OADGYntHYleqwjsOVZullJuG71A4zNslvBJ2m0IucUA4rygF9bKGnVPP%2BePmKQNen6ijVHJnGziGzcaKHfMf9OVunJJj%2F2qcv7tdg1NRerpYkNUduZCAD9r8q8ald%2BCtD%2BJRMfdfFUVq9DqkDrpWh%2BZqC0ef9ovsIbDbVCQgTKBoWXX3iXkpcfN5RqGUv7So6c8tNnpNvjuFK7N35NJ7ZZ8Ut%2B4H1F6EEijEaoFctj1HfaIgdoiFKPSFjJ3d4jvDVsDlOi%2Bm1F%2FBb0YfEYQvGL%2B6bKidR18jw5lULhqAUYuGJpjpmm3k4sg4TV0tFwsPL00mruQE4wY1JYmXTmJ0dLD1cFppskNYc3aZrCrBZNJJdcY196r6G2zpLQ4rK%2BSCtkPf%2FexsFdtvdrk%2BVilO7GmsrmeiZYmMmteelxyXE4HV%2FbYe2dpeR9BcElcwzLuDvgY6pgGy3%2FEiskKEI8peGY8fETvgCFGQvmhfzBFopnM9oY%2F%2BH06IBI8Sj9rIa%2Fc1dAxCoYfN5TYqfRv5iZCkGcMQOIlguSjtYpY4dE5VB32JBxEaMtL33LBAYxnWC4WTOI%2BcwFX9BlJwlFO9%2BTrqzlGAaTXWATN23qBndH2ihBOWMaDo0GsMtcM86Cv8QEo9YsXuM8kspzNu%2FroFLeXw4%2FdGYwubnrUz9XaA&X-Amz-Signature=c90c8be14021cd712cce9d8cce3ecc52d73185dfbddb9fbd1a86183b575a24d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
