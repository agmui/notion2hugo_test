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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZXN5WZN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T210749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAl6%2BwQ0Gb1S2ZOtSQf6%2BHLYbTEdOAJ7ptSnT4eQiwmhAiBw4Sz4igIwQ8gIapfyS0vPUnjDWMZy9kR6MpdghNXs7CqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNX3KWoB89ZM6ZqdJKtwDNe9q5jT9Fz7DRsIIlcd0s6VRCE0mdi0I7dEbCew2E%2FwJ3eVl5zjUOFYIrdTZi4FX3IoKJrQtK98Obxh%2BamMYqpK1xMBXwFSED6sUMcZfhj3GeQnJ2p%2Bw9ZorlTdqddmZ5F2zowsRvxPWfDZFwCs9Wn4Oij3cAog5jdgnofiqXzyxfi4iV7057YDdE3k1T5Tckm08iV%2BwPGNfP7xHWH9mtI5SQA3lzwvynzjzdS2aN25HUkqqRjryEocEr8BPeO4xAMHUj8HlyBjZgkW8%2BHizheu%2F3mcj%2BUf273wdNl0nOdH5CbXVidEu8Q0ChUWCv%2FJprYP%2FpUcy6pO9LlY50hdkPIXqq3PkS9Znmz4pPo7JCWH3D9DbfifC2xMFCkCzXkeEPEV%2BDsp1sRy%2BzMBN%2BZcv%2FMgc1g%2F4aTu36bplKkxf76mZecRiC3cQL0m%2BggX50goCwvmZqmJoV2DSILvfpdBcWYfaWJ%2BuuXRqekdq0yInXXv1Cg3%2BpP7V6NvdCJOZpz1raNYAUseUBn2KJ3kzI4LAtSb5VdzhsnhsdK45LZ78jDPtNkx%2FZyDi0Pz%2BtyOeEO%2FVniih%2FyZ52uCJCjT4d%2BvhwOnzC5HAnxH57QXHGehmujiCL2qO6TYh%2F2Odebgw6NqOwQY6pgH2q3HiUrjzWswSfRTv8QXCdrh2I6TBbfeGkz060HjdxmYkZ3yOSUJBp17RflqXeOSpoOVUGgRICcZ0wGe9B4%2FbRn9gmU8SlLkJa59ErlXfdutnkDKkLY3zMTIeR%2Fkt0BZ6lFOlM8cfqOlwQ9%2FHb8HRpt3%2BlN56YaI7jCkToJke112kZxIyt9XJOhUkSxkykJb3KBQAywaqM2%2B27XxRwP4LcVSCziKH&X-Amz-Signature=4907386da36d9d67c2b9261c471e6ad84ea4c10d44bc2129efeab59d7c808a62&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
