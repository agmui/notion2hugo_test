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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PZLJEEZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T160900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDALMj%2FQnMnYhUUEC3zLf3wiC%2Bmu78J4cQyMgfO6NLpKAiEAl311twQAuAWRN44KSUgmIUEbUAQwSIkH2De2H5gR1hsqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCUC4NFGSAXU8R6CircAzgYCHI8NKf2H9Qp%2Bor9Q55ZqI%2FrqKqQqqhz7dJTMDp3urxT7UUFYwsTIPb6uj8odnGBm8xb8p%2FgH6aEvI6zKq1%2BSJQK1NkamJkvkQjLL7iCexraj%2Fu11mFDGTuaivQZJJ0OCpuKUJD5pvRC%2BiegMr9e1dFuUxdw4pG2MyWPWsRJL6WRQogkD2pe4Xn6mdlN4x8gNqCO%2BBp%2FbuuSDPqv61zx7VX16zw%2Bl6Xlt%2B6mr3rySmSV0G25LwsIx%2FHWr%2BabhPxB1sUOAGpvUGV7RbOr7A9OWA%2F52m08LuVMh03aEUggWw%2BVbwScjUFK9DSIPmjxj4uV1VELrrvLmjdASE4fEUsBgwqtBBGeKqC7MUahsS67bva3CKPuxDCAIxw01ta%2F%2BZDgf2Fz4Gi%2FZnLbYkomyI5Pt1OomdtCUUSOhTPFBN5JB4ZHvXqdECyevOgiLV2XN3rnRkMM9z6IeQs2dudWJfrebBW1yU2lH2bwJGh7fwQiyNBKr42Qnalq%2BsDfbV0I081NJ4hNd1xxqJJTlIary7gp1gwvnWsLWx4MKmZnrB8zsYrS%2BjOod9J1juAVeW0wC82gbaKtAA1TKeDa9lTgDD0vLigHWLaH9VEUEQlBDQPfK1YynsiNCjwCpG29MI21%2FcAGOqUB9oRrkXZHV6EcP4haemv52FJiUOmWDknJiL0s6MhREFqQw%2FpbcTzzZ%2FFmFxoYJqStZLp5qdS25hDFesF3UrOTCdcDjxJUWArlZVOsa54Ul8uAR8MADjU8cIZW95ULJnMzDqcQV6BXquUaLzWBBb7iFcxssXmbqsOcH8vTYLnCD%2B1kBD6hHXaobhtmRdSL7E7XYBq%2BaShaLoH0TIsNXbIqVx%2FasXAf&X-Amz-Signature=9123324209242ee3e9f00bcde620bfc18fbabda30408353c809c2402f4fbb3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
