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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S47ZE5XG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDLFsy7xzHm8ANc2NQByutK1%2BZV5557cZKbFeCMCqmKWQIgObVzZRUVm6Sj%2BsXTOPCoNzEYxlesFIGlmMPFje5q010q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOMBpaPcjWO41QBsUSrcA50AHJYNuz3k08sNEf9HPSD11fB6f3pTMF8y477geRlJc3sSBhSlbKh2rq8GRC7bTN66sK%2B95auskUFtFjaQGML7R1%2FzCymff7uSyM7sGnYoXaYUfkiRBOo%2F8101%2Fy5HElHDnel1xNZ2rwMXJ4AHP%2FDZFBmq8stWIp1raAtNguX9FzgWmqc3pBZkASf4WJoLl6vZ0EDWwOvotHTxzBVDqoD2xETmzcCMadVGrLBn0qjn6GBvG%2BlpSZ78HJV0KT56qWW03E%2FKyK75MRxEBjW97AMiq8aPHX8LVvB4aTud%2FLv%2BktoZOjopAp6qQd0bLVmL7Qtjx23rqRy5PdDN9NKsjlpWjYyRlu923e9AJBChwLikmu9kmIH75ijV0Zsgc%2FmzTeC368bv3VY1VveFAAoMEAOvOW9VoSAWKnVEO1FeD%2Bur0z49e1Di6JGVB%2B3SWw6QyFiaDdIR0wa29V9WYRYr4%2BLEcZ%2BdDA%2BDgoQ7sXEkfTf7HQOxUyMynz0R5TzOFtMrT0JD52Z53ptLfBF1G8%2Fh7ZfCzXL1M%2F1qtXWuR2LwSAo%2BSkShMIs3LXnoKxbBOEbyb5gafnx2llst1C1i1CqDNDb0EcdfUy7C9eokAnFSba3nzpRrY9ZFDoMrRL1XML%2FmmsMGOqUB6HuzhUiKmyyAJpeFqSaGsqm755vIAGU0RmCgMFgCl6CtMEoMbqct6n5W%2Bafxqp4e%2FuXGgEXYNQ9Z3HZjcZD2L7%2B8E31HP9pNDHyaeRkmNWwI7P6w%2FHmJWpsXBujOFvsMT3sYHws7ULpWjO%2BWWxCPuIAwkpaXBPa%2FYVbkQfJHzvWrc%2BqscBxJWK3eOf%2FSq7a7GfS1y3dpLXhv8%2F8JjZFDTnAmu4F6&X-Amz-Signature=5be211989fb32f7c96a2b311e2fd472f0478e4b3248a53d915741acfad515c3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
