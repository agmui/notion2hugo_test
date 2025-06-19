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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3XFG6H%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T150951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfk%2F0q7liKqmjeEzdfzXj7rh%2B4zgHTZMlXFAIwORu%2F5AiEA4%2BcVWRqCansPBNYIXtZgMzQkTvOI7fQ73hwzDEbE3nEqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbzO6EGMzd0aQOO3ircA54jMjZEPQvC3oXYOi9DRlEf%2F73Hk86sNefV6WTdVgPRlHwnSEqcltLV%2BoaAQWo3CZJspk0tZomV%2Buf8mBbAYXGKaOqJ%2BvHLV5qtBnxNeC1g9SeReyJOg%2F65R8KjpyG6l98WUTaCyM9pE%2FjU2rnuILV5DrU%2B2IlqpTivwNFuhzpQW3zAG%2FFQcfUKCorJsudApsYkSau75hntzpo7EOoKRkg1Bzo%2F3qm4xLOrUIDciBGxuyxklM%2FtkZUkdGREhoy%2BYD6qPCSwq37qoRQAWPo2fvAQv67ubRrY58s54zkT6SCr4IV9GlKSSEdqdxoN%2FxIG07RbgRLrRw8dlUx4HHPNmTRl6fS7iZpL8pBhNNr4jw86u2w25ezKwW4W2vpjKUyNvNY9o6Y%2FNSmuycfjNyrOJ1IV7qbOSqQt5sR8UlpxyJ9jw4bO%2FkkZsbYCyFUPFVaUURnBq2xJFML%2BuvqwgL2%2F24OWEziheFdUPU4FlrMufUIYCdJASyltXcMaYJmcroD5evm8n7IPnC8grd3sDrGJ3m4qJeSV5D1LLmx5fNWzmYoE4cLnuGKMJY0Ksu95hzaRGuVRbGYo7EXzDC8dkOYikD5nn0ev3Pj8l5Mz%2FbIOBpA5fLrEc9hJlC4%2BkWLTMOWz0MIGOqUBZEpF1wTsqGcdxGjecMnzrj8%2F%2BbJF2NoEM%2B7imPGmN%2BdGpZbE6mPJ6tKZVDzBHBaL9PRTNA4Dv41btexXz51DjkuWKWUm2yPbIOFvbcdG%2FM0cSI5C6Vo40yY8D1xtmXr7gCePuZR0rXsu67x5CFo9NMsLLT0BmrWPx9Pgq5kVBFji8naTCh%2BDuH81iXf6dVPsRuZ8OPVDZU%2F%2FNPAmptoD83o5fZoy&X-Amz-Signature=24484bb7a3931ca54ee015a6dd4505b97f5db904e7ec2fe12ef41ed2395fd9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
