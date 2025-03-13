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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROCOSICY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwEpSTYZL3EhXWs68QTqV6hL2MZB1sHk5qQAja79dJPAIgcrIO%2FVtWO4KgaGgQO6y1HgtEz2YbWllD8fHbHOPhK4gqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBsTQ%2BOed1h9rWWvjircAyqbQbFfOf9Tr7PqF5P%2FMC8IfHhyRqDwTlxVTvm7PJhJ00IiUUN4qHQWFqXSH56TTZJtS%2BYqQOskxVQHVLc6fCRC%2BItr8IowO2OBbvlSLpLIPeBeYz1cdInx2WDSUnmik%2Fwivp%2BDLjmRGtraaYAQ68GtMI%2BAY3quIsaNl9%2Fju3P6%2F2qJmLSa0mC7c9hnbRk3IkKjnvNxPjUvAmha%2BBWWTG%2FX0NDB%2BC8KsWfD0LKNhtZH0H0RGWzGtEVWegxBt8sJxokOiJ4Ghn3C5TiQ7C10fqGcbp5Z6xniNipQCY6aUkcUH8a7ogZYnJ7Y5YoJ0jaAGj9AX06k%2FTU%2FkGVxIXSS8mHlehmQWNxEVJZKc8bhNbTlYO%2FgmqqPBZdPMlBS4T5xvIx5w%2BJFkGphnKlkiFtKdnZz9oQknH3k6zEx59XzeK3Vw4oJZctOaWWTAXl7aOJbKOzFHnBK5ZA6ZgFbieiZQQSWDxx0E5HKuNI%2FiREUGUfKljRJ0b78q1wo%2FJ4x1P2vxPTeK4s8HOng1yVUylPFOfgHlFiNGa0iojy0A9dUVmBOYdj8s%2F9Jx4G5KO9xRoAjGfPW78lAq29CznUBIgqXGa1AIXrU%2FQJ2vcsFG%2FuVINvO0eASsGXxTYlTYHuQMIHByr4GOqUBqmA9aEB4lQ7smJDVb9h9OOcS%2F7%2FiSjnJLOY1DBJPpOy18euilXMGG3cxQ1mdZkNi5RtjB1GUQfOINV6PN0TOywVx%2FDtS96TkCfN8c8PAiOAX6hmXB8ok2avGnJoF3drbemZ87fLm52RcqeA88sHZIb8bEAZFggfUrO36RDWWuqOiXt0Cc%2FjypfKHrJe6YNkK5dV6Vi4qC%2F6XUhLmjJLVAwmzJlUU&X-Amz-Signature=8ab97860c5850b05cbe7d673815bf9c9375e031ea95d13676ec006a7f31c4136&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
