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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623JTLR4I%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWVOlIz4zE9uYnbUo4WeoTbtn8kW4OrcA5yY5y6BV%2B5AIgeaMsjABVR8qMXkHOFTVhOKzu%2FjXS7QEpzDd7kcEtpqkqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJeTyQGlho%2BwYgoeRCrcA%2FlZHwBJGZeRhQ8WSYeoFggx%2FByRnmrx4JLA4wMi2RTo8Iq257Sq1Hvibnx2t5%2BkU%2FoXVZKSfDdbPqxXAb2g7THKZ8MdqCJ6H1UEwZnP3VhdW9P1Ikn5Ei9HtnIokQguRe3TSunFDNMq0cQt8NhWen5pZOjte0%2FJeA0NU3m2WHujXhF6Tccy9cjc5h%2Bvhw9zg1PJiyMn2E2C65Im9QnEo17MJge3x4UXfTLTkvunQk%2B2lbF%2BbzekL1QTcaEo4c7aQZuWsOh13VVSupynyEvNk78ulaUsZixN7bzdRan6lr52oRlp3GC1OaQafG9jS8gym0cDWhW4UfOtGr%2FeRWbXPDGDhz4vrkFEJJX0rSar1PI0biLkYB4SBE99QAOSv5hU8DAQ3bL2j%2BcYrrNO9jOmOrIX0NuQ9Hvk8O%2FsRTCrYuNJO3nLXFIVAFYSTvvngXHrT%2BIXEBw3VxJ05Cx0QhWyvXQzX6UOe%2FPj9Dli9ReWzNObMa1xIMfpY6UK8Hc1lZrwiAZjUIoCrrYnGl9KA6aKkrJqiO9Kw2uv2Ok9JXED6wZ8RsnK6NgIpPKzqjNr9HxC5JgWBegqFf0RUkUB5fhu2D5Mqfde9VCVXwBhH1XRX20DrbFENled17qvLZQlMIWf%2B8MGOqUBI6tpoDJ2LQm4pIAhwiuBlZ19ACKNDCR2mxLpoZv1WxJ%2FTruoGF2tS4QwkU4A6sArvaPvBGgx2EXp9hliWSX89BPzlLIyga3TG7WeQLg90%2BHETD%2BM5fafXfT5vQd6I47uSTS2kT%2Bp9SZoHkO0bbcOllNEGdOckS1tHUbp2HPbk2u363vkAJEZ%2FQcniLyXMRQWJopsHLK6GU4CKDgRLlYQwjzvUkz4&X-Amz-Signature=6ec72a5a1ca3f816334cd0189e4bc21100265e8db4a83d6f84207759572c9343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
