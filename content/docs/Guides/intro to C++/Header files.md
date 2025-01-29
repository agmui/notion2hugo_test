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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIY4VCCP%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2F2bLIPZzqexHHbhfZcN5TlO8UhaSb5jP%2BGgGVshQVAIgN%2BVllaTv9PhsKcULSKM5R%2BXfNxlcAcbEjK%2FAxRGbgccqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2B3h3UD1qGd%2BhnWTircA36LmlxHVU1N1MHhF0Nf8gVxqjD6JrlwISP4S132jO%2B2SMjKTAe0Ssf81fyzlQ%2F7WoAOgtnNYEBmQiK2fZP99ePt%2B9s8jq9Z26YwFp4TpxfkQpp%2BDAxJUYtrxrgKXzb6xdR3u6OnQhCxiL%2BABDBHSUEgy4ByQDfncAyfVKk2m8hO%2FX%2F9EGI1C4O4dh5ujGRjxGY0Ebp3zuOdWjzrLQB%2FhSjeTNdUPjB3%2FFGMrpW7vE57AKJHFnG8wHc7ynyf%2BX6PGWZpMSmUMDpjFjkGdYQJ2DFesNrRAEZRBU8SZmvdH%2FHqFzu8Ptdy72UwvqfRbRyiJ5sOKz02Xc%2FLmC1m5wxNGSUcD0pcR40CBWnq%2BRDErL2Y2Ew8FgQv662IPnWSVR%2Byy3LYGm%2BdR%2FF1%2FlmP2JGUAGpN817HNulVbRuRn484VazGXPKLwkzy7hEBqD6SC%2FTJowhggvcFdLOsnxhf2Td9w7iYzNYr%2BbyfXG0sVdsA%2FJH0tO8DJ%2F3O14lzmSTnSXKff%2FvKaDsJBZczbzqxiQMX5vjUfJOp0tU%2B0ZyNvUR5OAG7ZHAdNBuI6jTQPXKATjLrNMXcJXfSDqPtsSEEGjx3mAmOMjyhCsLYUR3v5eAk1bJs4DrR4GF%2FRnB9XqbcMNSF6bwGOqUB3c3Pp5Eko%2Bx%2FD0Awwtw%2F2KgEavRmq7tkehKQxFfYYHOk3ftzB7d13QwXnFmz%2FFDccZLGEDnfrrt1H%2BGwBhKDepD%2FLUj4QLTv3HtuMe5aIlf3qZoalMusORmWOWGmK%2FRdQn72p3ZhdFGRha%2FgGMU4amIBk%2BAe5BQLn0lDtLr8Lf1IO99tJIxJPhBu2BABgc4lMDGpzQSQY2Yb%2FfE8zRgtT6c2Vp3k&X-Amz-Signature=4b35ef8561e2a809cccc25fc6f3608cc962b601a7a39d74adfa478d1cf8c3ae3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
