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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664THN2IQQ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCRk1%2F9wOOE2RPG6wZW9RkPaBhyYH94TwWHxfRzYYLWCgIgN7bS6R1v5j7ntHR9IIqwUVIjxP3YxXoU%2B%2FKw05Si%2Bb0qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNaaiJ5mEYHgTkfdoyrcAzh50nwl7zwwjqgC9Q6Vk%2FwRNNdKbClkKNHPMjU70GnjnaZJFD1rLPGEGhY1T5tLMUWcMxVok%2FGhEn2o3lQIeE54A49hMpV6w1tf43gVX6%2FhgWCyEjHQWyIZCA5Yz9nRUXIsEGLSq%2BZ5I1AuWevHBUueRsvGReGPeSSac%2BgzdcSCPy2BAYCp0ry3zL%2BjzENiRymDAWbuCu8eEKP4ZYLMLw7feTWatZziwJSm6cq5%2FMRZuQPjMcBmZHAYQVez9%2FOEoR2a1pVD7lneMRpIJmN0DwACuuSTqpHlvKj1Xr70YvIn%2FJAQlsaFLAduqlxsDUZp0LFe1nz%2F0uoys5afcjwK5oLG2wCU0BLcYnaP9OmPWTCq6W39Yc7%2BiMrY4bedGzmdIhkBUZA4W8yvndgXApVAc4aLhbKCzHkqPcHUx7k4caFA19uMcp1FcFJdgfTHjcjYqXkTxE97PgLTNQIyCywGYDDsu4UOz8HUeX15a9TtLdcNXEAewJWqombH8%2Bn1HvmpWI5KRIsWIid4AZvOlbGzL%2F1ei98v7o9hU40SSmBYdFRRIpjf4YHln8IwR%2FxF9GvoxfywuqtCuVJrWked9PyASU5Jo1wz9eFmO6wzRr3D8LHZbwAo2nl8L1aU%2FvdHMOfz3b8GOqUBmKl0hakwsY0134e4Y0EEjQB3mXwLGp2NURMGQ%2FxyMPW3JNi5hJQAoeiwHRpHIzJTQAt%2F0%2FR7kYYjS1ju3ViKAbZjuASwhIcqAmtQssKHruPNW5FNcljigCstJHdHquughZ8QXcXmJSEsHbvqu0n2mwEd%2FTD0rjm12Q%2FBhJQEgNyQecMRcMqQCW5IvXa4pW59XGeemMgHc6FG3pnUZfNtyPnzkkAt&X-Amz-Signature=fc84f0d86b718839375301035b760891f14e4ae77f29f30ab8461f9aec4582cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
