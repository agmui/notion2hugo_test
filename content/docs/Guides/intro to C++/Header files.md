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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ7CIWML%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCewgBOHZQbqs8zrcUtXPinvGaLI8Gm0mQlbl9I197mLAIhALhlZ8LOqPwiJNrSOSWJ2Ea4NW4Ar9BfC8qLTA68POzsKv8DCGwQABoMNjM3NDIzMTgzODA1IgxUP2UBLwD6F56NUHgq3ANZxxMdxXeLWh4jH1ZVyDzJfwTNXYgiZBp0xI7JGF7bkJxVx7kHXKFrUFU8UA8CIVMElfnSWFkL7iQJa6C%2F2TVIB0zLwYdqTB1MMlh6fwBcs1gzu4CuUIMogjmOgZFN8%2FO7HHWssCP%2B2a3ZnYs5ziJLoYDaas7iGpSZ48Y%2BnmYzqPP4SUoFRe7vVSyzRrUZTt%2F%2BzDTjIjIzUSl7iblrQeHpvEl5%2FYobswPVGbPlIhreffdPfzXcFhumFMHHMalF6O1EPg4YaLjrbhIzS4fkZOxVUqJGvacBmFoTqsqFe4tg%2Fu8KPrjN5WGiZ2f8MFMo9LsyAoLB2vk7QRxYhEJ1CY84COODKG%2BgQOmXDfxMv2xoy9dnKV6Yyg0IJpOM%2BIzP8MY7HSz3MqU0nrOM%2BrxkbpDC80E6kVyyYblpt77KQ9Yep9z6apfVWdyCYsH%2FV4BlxNd3VwFuX6MMOITC4RgECdH20NJ2qZTEyXr1OYJq%2FerDQN90XvebUU0LCn1dsqsMjVb%2B9bTluJOIeLHinHQUBwUP%2F47Tpglc44TpXSLWafWD9OE5AtFl05BqU6br1cNEpOgyK5ZSlKDiWnO8PjvLece76bXsqlcyJJ2tgVnUsq1I2uBzEamh7WrbKUdiLDCFwvDABjqkAQjAW4Iz29GE2BhvKN8HG6zUb42ZRM9J4XvcIpTff%2BMNNoAi1pvZ3vQxygxUc45biNHy%2Bffr%2F%2F0YPgNSybXqi1%2BS9XE%2BMs3ysNnHNO6mosE5hQBvgpdIlN28DzcZYF2kcq0iWN2%2BQzPd7w2Lami%2BjA%2Fb2zXXtjkvd%2BI7xmK1yYIpWz8x8dfCTH4xx5aYTccr2UOPeEBB29iehsORh9vXWVjUKdSL&X-Amz-Signature=2d7c076e6eb713875484c3d10f2c64524f201392ddb0aa90bb90ec8adb5d9af1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
