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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UCINVQ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbbcwLIqJEwu%2FSAucAc2ufLksaG2bmwg7BK5q3hL9NJwIhAJrOxdQTd0mqJeovC2DuIVPbImh2ZMVMCGEP1J0lAb%2BIKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAQrLHqEQu8OPeYi4q3AMoaVZFxDmiyZZPtXq0EQVgQqUZcFZJrpByyJKPy8d%2BQsw%2FhyQguNusJ%2F2YaOkt5YDdPAm7I0xlF09b5dN5ecs6hA93NsQ44SLNRev5KJgtyzQbfVgAlyZroAQOpNC2fYDR1Z9OCfIQJGoWkwr13YUZGmsFChvMGAKRoxGqPlAmBTLiaWROSY%2FRpUlYRnDcqkUlSAnOKpY7O56pakpxUz5Qm1gTPYpb14DgvRD6YdcdNh1Jl1dvpclmxLk%2FzJpkz0vh3Z6gkI5vlclDfDbfCOcc7FfSwiyfx7FShlPjjTsIBSLhPptWZTE9f0KbqpTOD0ORiZNl%2B4Z0ze5zbVH74FJUiZYDPXjxiKX2om2jkHBjbbOrHQwpTZxSVWR5yHj9Vgs5xiTLSSzXvvOnWDGIiAq%2BCAbWFB%2FENB7%2FKnr7qilLEVuROQX%2FgBc3bKcl6pb23Eczd8Hmd4S49mS6DMCqXlDHGPwDAErB7G0LgjiTeB6x6sYzer5y4pPXyUUa%2Fi641ZEDMUKXsh3FcTfWnT4yWgTmaxWFN7ajbsmDt%2BlogFkEofSeyb1JMzk6WR%2BEFvJSvG31l2n18klWcBMcIqBYAcEZDJ7wSXNLbQTwQXV8ju%2FPgAZSUisbWT0HDTLgtDCA79i9BjqkAVTWD%2FRQQB%2Bjp4M95HIMSso0bO3XE4xTJRHif6p%2FNC3bOhUkW4rqDQB9WvoDn%2BL2kG24mcbHQAEOPP3urgHRyI568P1nSg3vGUJo7DR%2BZqNXcPqFj1hULpFL%2FuKUvwVVhYAgZg6nos0GNbFx5cU2aQdeMmeM0MdUVPhMhblM4YkeBPx5WhGBW2axOT3adE9xf%2FHCyEfK59aLzSKA93Ms4UAT%2BZgQ&X-Amz-Signature=53bcf685a3b175b05851586917b8722d53def0759a55b4cae75c192ae837518c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
