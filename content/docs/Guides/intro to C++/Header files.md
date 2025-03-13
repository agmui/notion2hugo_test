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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGST63Q4%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErNiZlZv8Q5z0brI3grsl%2FYgwnsOwPlZLeRQHa3nwhpAiAdmYKmL12G6V9sQD3YMlg%2BCrQGrtucQ9Od967CBzu2oCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZkLe8YJnmtAc7n1AKtwDd9x%2BMlKpxOjol3mcBhqCzSE4O%2Fk%2BjJvOzfc%2Bubk%2F6gkLTsYOVDyzvuCk6HESuEpMNdRWMxYL5y5UWsGUd8kVKQx%2BtNl%2BFpF1%2FSuvtWcM%2FTUMLOSBqLkBieBEbaDUlsLcKNNQGyy1glumx0GW6%2BtENq%2BwL1vftgySi2GN8C2dRJBdWtXgoOB9P4bGnq5x%2FtWR3HR0u3E3LbzkcmPbfOsrfYzOHkUqVzefoG0XDeUbbbuaaeFC%2BH8QW%2FBCzjNcQLxOlXdMxOmkM%2BJuodyE7PjGKtuLDkoB%2FgVy1juXZ3HOigQhwn9q90sp%2FETh4KsrBA4R64BZTkGpwwPV82JKMhOMWMIbgh54ddb%2Bgn%2B%2FRhtrvqBRASLQ3oFZYIYFrqBakZSXjaMD5XAlcYFy%2FgmWXl1jxc1vV7RY%2FpGm8LgeLtVYGfBowSGK0o9%2BHfQdj0bKFmSY4PsDtbVyr7qkg4u3I%2FP3RXD86s5sxiI%2FFaxRGSFyazpomu%2B0BJ%2BRlPN3ZXK%2B1u5Yz2e7BdJ8bH4VWR2x8htJYB7xRmCkh9oJM0jAqmGAndMJDH5jnx4mbWUghNc%2BuPyqL20YU6lvBs8XwK9EMxDqIaxep69981Qz%2BfoIK2YeViGnvntpix%2FOhPxlMYAw16PKvgY6pgEr%2BdFy5gvH6c8VaHi4uQtqcGIdqOsrvSK%2FgwozPtFneCtF27YwOX8A%2BsrVeFwkgK8BFRWXg0aSNHxDM1RjH6YlIs%2BLL2yTFKJZ69iLljr0hoyHXqihJtjM%2F%2FahSahAXbISEzROSdaRfxIk5OBwqzQ%2BpfbvldE7Qjk%2B9dYtnDpUmB4y2038qh5kQXd%2FjoZP8XtPG4phVdWvVX3gvfQ5xjjAPB7a0LT%2F&X-Amz-Signature=20b429a0b04d4108d9e37e17e9f1c0bd34a825189168d7ed2e66386de147994f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
