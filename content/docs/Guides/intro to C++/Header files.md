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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XSXEXZO%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQD4kJ4qsGU%2FacPmomw%2B6QOS7gQ4I644n7wpx0UXlJ7CagIgJAVGmNy9BX6F8P9aa86tGdJGsf3KbxzJ5YuShZP1mDoqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMD1hyOT5JHiW0EfkSrcAy%2BpoVT74lw6%2F1SLkvXEiZxCGP2j67lAuge4lUwy0k268M4ohMl9WRAp11ioAcMts4R96iGm5REU%2Bl3%2B4lY2hJqhpZsijL98YKKTawwO9mKMIkAP08GvXjcJTN0mhKqv8BlojJebmjPosj9NYzdVI2U4wXTKSqKHUGmorrfq%2FjQ4GZfK0%2BuxWF2av7Z5N89Sn5eJm7kM499KPjXSTkcqFFp58ajxdnZQayW4NhrpPc2vmT2WA7P9%2BFrF4d7oJtrtvIaiMq0i82X4bCpvodlqncCY5EmKP7W8e4YCR2N24mMz2CwXvy%2BeuXqmTOrNyUce5hgiWgXxNOw3C1IHW%2B8WpKbOihfaJ0R8XqZsr6Xo8cKUjGuzKVszwlKD0JTaQ1bg%2FQdpGoaeZXxrQ5H5asCMhLknk4W0MO7zZVXlzo5lbwUQh2Zzpq6bK%2FjXTzjdzfb6FBFjWP9RRcz9DLTdHC2F1lmbN0FybiFoZA0LEaPBTvm4oHdMI1I6sFkRMQUeMvmzZc%2BfsE695J5uNRAnD%2FyY6grxo7Cv4%2BYGkHv%2FaqXyPoYFwLZyrDXf5zAO2ub6DUjiC%2BrXfT8NI3Rs68cOqwyrYygyieYZJb5g6LBf0A8gBHHqyu4KX%2Fo%2FOSu6tDh8ML3su74GOqUBtyLGCuqsOovlinuYI18Ndg2FcP4JxNMxNGR2uw6LJVfhcu6y44%2FnaTDb7p%2BQOrTvD8NZMjZmJw6lbh5c6mhxMk2x82fV30p77bIzuSRsv%2FmShbp0N3uU9bc4WT9C2KSDsh52kT3wX57zkM7tL2riojhx6ahQxqgZ16g0zSGERgZzoinCrfKTT%2FU%2BKN8HgZjoTVKpvHpvytp%2FKKv1CLD4URPHZneu&X-Amz-Signature=6b3a3be39aa95c00243efcf8fae89beb94f70fba419c2d2b501fe27cb39ff9e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
