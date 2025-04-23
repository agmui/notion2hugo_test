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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645ORUKUH%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDKZCqAtpX9uR8OF1p9XjprtnhboQ%2FQdgJBiw3APWvXQwIgH0FU3cJC6sBGJgRO7f6k5G5KANt6OQNqkz3Fy6cn0gUqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8z5AS%2F9eZx6dtGjSrcA6EXK6MGbeS4cxRlS8JNj2n7BYqrEazHgufvb3MCQ%2Bk0SeFW6hFn5sRBpC7d8ij6FXcmxXP3LWmdXHmv%2FGHtjSknnw2RwvmHuHm2hyC50CN679gpN2%2Fe1ZhfXqMMEIgLH4JX5mdW86OhWvh9Kd6vl4rgPy2G4gqDmDKnJPLpnUNwHgiNXbZsgfV82JnOuecsNCgsEs1pt4FrZuEX7lJyUruyD%2BMauhh10EgDNEnnoX5Yo7V%2Fk0GOrTxGEgDIKTcvS1qlkJfvAh8LNyj1TbNXx9cuuEO%2BAxnzjg7HUdtk2NGoly4MG7iv684V1zACs6%2Fvq84Kf08gQGGEMS38LeHIN3GFV5aDeY0gukrqYVngX3oJvx0OypmzWk6LN9l0SRqk0d%2FjKmrd3GUrZZXDz58a9hs0mkev8F7wLMD766i5MSz022CRYzNuVtF%2F8OQhlFJeYjl9y3aWLyfRAc9neGnRBwd6PI7Kr41cK1HaGfCXoYXnK88Fd0E6%2BqFKbZJj02NNbojBPTNZL3WT%2B0XIZJH4CdGDAthhN43VRzoNgFZoHORbI47glu2ur11btjLgxxoOpbJipl%2Bc7SYkvXwdlF7O6ApN18cFQ5Ondblt8FKepZNDJwbAIKfxpi3v%2FNxqMIjXpMAGOqUBgyMgHCBE92bxYiphhC5Z9mZofy4q3XD4z0B4OZjVqjyoEH%2FN9BtRMILiUTJu%2BNw1yqv%2Fe8qhquMxVZkiCJJjbXzol2ekkIhjrqpfwl2JYPK0W3ao3%2F2pJZoqLmndeik34HL9SvGsnk4m2xMEpWVEc8BA88ixqWFivMATIFq%2BF0R4ng0M0WWDx2YLcpx0F5kMJbUVSGXumCCcI%2Fw2zh1UUOQNI2pA&X-Amz-Signature=5caf6f46992502ebd1c3b93b111868728364d68fdcb582242f2155b5950592f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
