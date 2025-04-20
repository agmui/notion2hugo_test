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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZM7MER%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCPPrnZKnJsWop3SvLcUWYh8AoUpHDI2l8HtaH7nc6QOgIhAOGAd%2BLKn6zjXr9Ucbpezlv4VLa%2F4CG8FMyzgNnsOS2hKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw02ci%2FeiiQ7C7fDccq3APRC%2BrMsn3DF7S9M0QqB7fYGEEeZ65LkSWHccFltx6s9dzW8heyVkKZG8u3R%2FTscY8y3ErC6HpT%2BGoX4k5C9nSyeqVwKhou%2FekANXtbQbJAo1H2Bg3bth%2Bb5lQ2PtA2LW4L84VwRZMguTSIZz1n1v8VdwJk6m8dMmtRQdKwE1VJKheduwYwbuCx0y82K%2B6w5SEP0hU1mkHDrF4sqyFc0vqRDDyRpDIObNkjnIxN0xYmOVi8D765YKDagappBjNlp8F9pYJEajFBAhmoZxKi2MqxS2X5tuv2n%2F90bArThbAnLT2fB18FiTaq%2F1hM65kkg3XNWSBQeTkYQTMgW443rI65fhNFqcYXKZBZxSB%2BzfP1Us5mn0aSUApgVuSHSUmdM%2BU4V2f2U%2BaxZ36vxUn6I83l6ze%2FUM3dugCQKcjSCjtYfm3r8lkDhQ0Y9gXPnwEWkEesS9Y4AlpHc6mQWoISd3S3GmnY4E0gKD4%2F9UsciQmJolhA%2B3gyzvfZjle5o4hYwY7iH%2Brw9G3GciQyUu2sWYz3WRxcYWB3jJfQdGgxQM2Bz040tLEd6BKo04zb0zGSweH1BakD5NoySDDmsiaL3wNJu84rwR6xbb2H%2FyF0WJz1EQBb%2FjvWfbIWUZ3oRzDL%2BZLABjqkAeKoCF9LrzUdhconYo6GpJ4c%2BvLBEnzXiGmfBLvdxHgU36vrCCc6E7qKb6WWhQ%2BKgoyrMwdjY0yYEVgAtyACdAxqpbglrHk0mUcjXFYeQfUM2k5q%2BPawB9wus9b3Rnc3C9OmJx%2BdFcIdzTgd%2BSCW4RlMYNoFQ5YGQu%2BqFLH9DW1TnN5%2BsK272Xge82y5NdsN%2FhQ05n6vLoHJSJ8urUF%2BQoUJcFwA&X-Amz-Signature=ed973ab0706813f20b69dcd5582067b81b14ba7f1e4144e25c1ba70fd7998dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
