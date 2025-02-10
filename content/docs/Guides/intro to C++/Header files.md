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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWRIQQZ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnP3gtWFlWxaxz7l%2BH8OsjAQ94qthd%2BXnvjKNJVrbqUAiAIUS1HhqPyrTnOs1w9xChjjahXjTrnGhf3bd3EeI7CMiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6WvTA%2F%2Bu%2F5SK6%2Br3KtwDejZqXCFOsMDTGcpuuaiXayL5%2BILN3orlD061io6bbbgysND2u5PMLj%2FdSts8bdI5dqfriruH%2Bz0GdoeOvVlItjcdRTlQh3PDo%2F3seOKHaAY%2FHT7vMbmW9A6vZIVxkjdf6i5TWYJPX%2BwgwsMhmhe9qF3MI6YDRSu67hmT5gnTvkMyfMkTgCpXj%2BNfQgk5jbZJ2RCtWvHvB6g2IvX8AjUlaKcbZ3cXQuKUJRI0cesR8p8uB%2F6jn0On26SUctWme2yvMlcJf8bv06%2BKnzO07txlTegGMvkLv4ri%2Fkt%2FImtFqeq5MRjnAqH%2BLhrC0pxk2Oe30UmhSAJ0zoaCeOpwU%2FJsHPpsWK%2BShUWhxzzbe2pgT61ER%2BC6K5EtLN46RPoi6ecDlqwNfaKQj6Nfa%2Bi1we365oQMmPe2u01aflWUPlr9h64UQu4%2BVxHCyzWoNUExt04sMgf5aekuS32OqjWlxXG2brvU3nUxUMJwr3iLNaPjLbpHKbB27sRk78%2BTfL7vTyZ7jCH2VAJTUCKQLqi6mGGXIgCsTbTwD88sjKIygrcSeD75hIuPSNHGBITK64hotm6S4eFgpQWjAvvbESL7s6PfNmvAI6e7yPOlRN%2BUeBOjCQakbE44lzGU2OXk7Ckw15epvQY6pgGruTCL2d1nbdD9FVtufijmYYJ88DYcB80x4sy7AdHZondfg2b3HqtAdUE7TQWSBNTj0EOht8SPzcc2jkhA%2BmCyqy8ak4pypNbwleIE44EYZFs3%2FPM6GF42cjHLT%2FR0XYn%2B6aoNX2MxmSwGX9yZAPKjvF2OXXwRPUAu1um7Qj0nvGzH4UYwmehQxs3aswMcCIUCDXACUUwGrEjeZDJJ8mTofP%2BrWBBF&X-Amz-Signature=9c779aaa4dfa1082f283674142d998b23b7a5ccea4c001a1631ad174c52e4e50&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
