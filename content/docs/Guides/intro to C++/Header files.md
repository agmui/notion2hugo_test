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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMVPY72H%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIDYAogD%2B80D%2BpSmjgMO9%2BtKjQvujmTt2S6etsKwuFvYVAiEAlLtT5UrkqTwfRvLsR3M9tyu9t%2FjSMwtcDpeuvXGxK3UqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuH35b1cb6FSge4vCrcAwzZ85FB1JGkWurg%2Fr5FRf%2F7JVb%2BX1a1HnIpw0ic2npooqpczXiLkQgcz1WQVCwPUuCl1%2BK%2BJgjJQbsXfmlymNeSokg8Q6vqpBhj6Kd5CyVHl9wXCyZxWx7Mxmn2uMp%2FFnvI58X3lf5O57zmTGIrBp4oLMfWBOlO%2FnADN0yVBFHY03insqsDspe21Tt2I0X%2BK5TNNd1Gvj8JZKkBGHNQ8GPpN4azTtJ%2Fedv2SgbYuMX5GK7RBe80NfSkmdSf6BrYY9xn6jHdgq%2BOafz0NKi%2FSCg%2BNxvM3Q0SFMKOb953ReTNG4ncbTDK0%2Bhjp2yDfwA46on%2BzRPkFKo4mjQXNNaalvgphTzEm6UuXDjRyGHE7hJvVt3Y9cH1YdAi6NBdB2iPw8n0yJo7gspsgm1Rv8qqu%2B8%2FfG5rIIyPcX0KqWt6ZLGZOz%2BoYBtTI9k5UNyaFcihvGuuO7kMytfQDGTC329do%2FzZ8ZLmqm%2BrZg6o8vi%2Fp8vW8E%2BQ6qjL1V%2BSZAKptlK6Wd4o5DVmKfyX%2F19JCOqvHjsW0qNJRudIAltJsl7%2Fd3MaXf2WDm6xaoY3uBuJz4lI%2F5PNDxRpN0unkYxNqgN7CZdmoM6Wd2EEWBNeJfEol9HykWpfKKUD6MsqjY1rMOWGmcAGOqUBPFqqYIiqBdsuFKL2MvBtjyyTC1dhP5pqaHpUZXsNVDbAK2ztAlvohXTiEHDd5pbHXadVz%2B56ttVb6J3C8uiDa0fMKE8nhWpObszBfsYBxG1JNoqdBNm4BAHLymaKktUh1TPFE2GHdC2uawBSLjI0dFHcIZgVNe4ZHOAYU3SwwJq6KDPzI2e2D2zH4jndki12abuJvINzjVrS5iUhRtFPDQcu5Bzd&X-Amz-Signature=aaea0d8b23c07e560692bd8708d607cb0e66ccfb0a7a639e91243f9db35fa85c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
