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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4UYX7QJ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC6SioV8LEYO3FGAOHNKcGCZniNhrFmoZ42JuOpFJ2AmgIhAP5PyUIKML16fEiR2WQlAXTP7bFHb%2B427voceYlBdIxNKv8DCDUQABoMNjM3NDIzMTgzODA1IgyLWUjJQ4%2BA%2FseFjlMq3AOxCIr4c%2FSBb6rf0ifGPbe3Jvd4GJQoqkHAagGLyNAjDFE6p4A611YzZ2mQWlqSJUWR9sMmENZfYzm%2FFA3SDP1WlFNiIRWh9Xz82cGOWvlaQ6nuRMNMFbG7jZIx%2B3HrYF6fc7HZ8RATsnTyps8yh81E8%2F5yYjM1Oai0xPfwEE%2FhdTwuyL48tXVZBe7YNPnTbFku00Skq4B3jT7xXjV7D28qLmkifgimO5gxN8aj%2Bk1XR6771aUyzBH8wPblZjiLDmnC%2B6xRqaECHhIOG5%2F8AgFmWt8p5JMH5Qwa3%2B%2BWL%2BLLPElRL1NNoI%2BoVR0Hq%2FpAbhmHJQ25tOh6gHA6F4RmRIfoxKTRI8UI9LJpU1hefcrs%2Bar50K92YpvKSuShVAxhFunI4bamY%2BDjvwD9%2FGO8gwFiiehN%2BiNk4EoIQEChJrt3C%2F73M4XLmlnPbUboaJ5DJgtkZf%2F2SPfHeUpA11rcf759H5nw0nMOab9EPy7ljuuOzAQmFNK21AYlQPl3ebftmZAxd18hUpXy3P3Gvjd2TH4goOaQACo3z5Ib7WOsK5kceYiIL8UdJa%2BC0eIUED3e1jzronGGkpfL9lVa9KV5yWuSLp13F1%2FIACXEzDryeZnPbXPMibh4PtYJNmmo6jDYi%2BzCBjqkAWycCq%2FUpN%2BfNnymExWzlupnYTNTqxDdAtI56Hf5f7GZvqC47zrUtDdYlHw2SEae0bK3ik5K%2Fyr3RS06F0M242%2FDPkiJnzsCiMWUYI6u5orlP5E7RoOdlBJ%2FwaSgA19TnFpk6OQWtmGwwS7Ld9gUMrbDU3BH3qfVgL%2Bqg65ZpY4jDy9kfmvU3u9v%2FOv5G26dH4tBxaliRtkZ9kkU%2BBWGJRVPTebg&X-Amz-Signature=900e39410cbc538107676a1990c54b6098ee824c28e9c58bef8039fc2df29b40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
