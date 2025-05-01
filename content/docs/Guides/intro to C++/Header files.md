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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQNZYBY%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQC%2FgKuvFZBQz5%2FBftbXrXPNkq74IYRQ8h8Jp9Z2tNOUOAIgPx738k9K0yr6JM5mX6IaXXbtuQH6Il4xgJ2Q7FZeF1MqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMQq%2FiXeWZMwB8jyCrcA6JyUZ1J9gJtHiDglbeK5iTppbFTr3oGjJ%2BLYK8m0U0kOWuMVsECaCRPQjAMyrG1IQgVZ3hbNOlsBbWCpPc7csOZcFChogWoVIvtxjvGjrPIzc3s3EQ5TJfs6NUAcrEd1TMETsEpvLjX01vbp23MINliQDkmol6WzvCHh9tBqvyZ8QyC1n3zdtUBd9bmeJe%2FdjCAveMBcXRN56mrL3uL%2BiwLe5co6XLw65wur41ywaaHpy2fJ23M7ZzfO%2F80EDYbjfJghjMCA1JCmwYDzaOIPrPz7LB%2FdKQuCSX6TCywBNMiuBsnsfx7qscfE9CsLSYDfCRVS%2BVee%2FxdOHSLHtIm%2FFYnJLLiDr5Snyv9YTIc%2BkwyGhsest%2BgJaAhX5rx%2FlpFGwT%2BAiE7ZZh18SSG1gQpciAXGe4nVvwX4mVwfyqBs%2B7POI5eqNVTZEwjUiIYYe%2B%2BL0bWpkLqJpHWXwL%2FHuL%2BvNaQJT%2BbhD8WKODPsbc5JA1rXmE0dkZT9hUnuXIITZx5R3VCRy8QgUZgq6je2HtnM00V3BmsudKPFl%2FlC%2B89PKARrQyX%2FyTPPk3eOeDte834WSRAuFOSVHKUpnZbf3yEvc2uvu7AVqOghb8C7aCIeFjWrtJsAu7yzZGvvN3rMLmrz8AGOqUBnwfG1e4BHlcvdH3UguWBJ8GBEI617ZKDol6fzvW6f3tLzIwHlUfZfKobIjVH8ImJbjS2Y7SMQA%2FrGC5RRxabFbQtybS3czLicNSKezY5n1Hqlcs0EEXkML0OPyEV8gchwQjgMSMsTEFThxWy0F5FFfyjm3Cu3pVj45YKCl9Rvm1Dvq95%2B0H370lkFygLd0I8ne54Aa%2FF9Ha7ti2JIU4qGUYf4y2L&X-Amz-Signature=ff7d351ac38e8a73c987b7cbeb789962169034dc345d5225a0d907af74dff12c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
