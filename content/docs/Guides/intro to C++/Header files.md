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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNBASCC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIBsfyluPsFG9GWxhRW%2FqB7P6i4juYcz%2BuQd2TJb354BHAiEA49cge12FkOJZFxQ%2F%2Ftus0zY3Wqxyuk371iLiqG976YQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbU8D8l%2BjbprBeQECrcA5oB4LBSp99GPw3GZ3B5fJRuLCbL4gj1G1EZ4Sl9hwef9quESsEromjAB7ql8Xf9jraRr2f9kncF4A%2F58a6KIN3TEY1OORuXvDFZKg9u2OosuYkrw7eYYyoRjgal80rusCANBzHwexWVs7HVzflAxHDD3PEvmaMLuPA5kMPVODwXzh%2B9ByoUvo4W%2FuSiYuXVJzwHYGWFUKGZAJQvdhX22v8egwAoCspdraehF1GHQ1kdo7MBCe0VWjCrFn1yvszVSb7DZU3qjDBSVIn%2FLxHLuyno8fPfIG6zcpoTDgskc2RPL9iAJzJ3UMnGrnfOpJn8BvBn6ryWVheYX7mH4afs6EZ5QzQCSN8N2a%2Bq8SQTCKjbaFQMtrofG%2BuZ0%2BzqAtjD%2BFzGkjENn6keMuHOEa10xBr7yknC0LqRwR1gEWydt386c1UinEoL8msBc5BaOsBG%2FEbXUYww7Ny%2BJNm3eJlJHzLUvbT13Ul%2Fa219hg%2FobYFZoisQNOfpM2tk49aECJkAJyD8DV6nLFYvmgckWa4bjnUcvemIh9E8lPomk4H%2BqXYV6ZAhfljcRcwxJLS8ryv8HK%2Fa6yIHeKCNbvXKuON6PYzXDwgwSdYw6EWcKJRoY05LSWccIWzOHbS%2F6fm5MMjKwL4GOqUB44I8q5zGqOAZEMltr4nwlmLvCwqi9WhFOuBntXzqq1i7ZVEN%2BZAvzRnj%2B9XDb7aZ6tFTdyei8fjY9AillgWMKaCBSQvpA66r%2Bpp3x%2BkaUvQ8rx5%2FUAXVCWj8O1JaRH5L1fLWPchvbLYUMZXTR2aj5Muae%2Bh0MupkjnJT4Gu%2BE6shxyJsBh6GYzif9r3UIlmR8J6QsiCqSq%2Bp15OKs7L8saWrsmBH&X-Amz-Signature=0ee380b3d648ca432241838f444714461b43d3b267b556ada12750344636a54c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
