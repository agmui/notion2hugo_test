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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3IVQ7RU%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIB5Yf0VeoKVXiolRlIkyTe9GOFLVOgMlj8Tuey7xpqUpAiEAwi6zvYUDunlI9CyMIeH0UAL1WFi31piF7DmrRbhXF2kqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIpq9L7DT0qWA6mnSircA81TInIAO2rMO4z44%2BMIr7LHKwWOheMAp%2BN3n9%2F3h4xsYG7U1jeuKKGB9dJF9%2FD7VNfP1vkQRhcbMtloVMfpCmT9v7voWNIwlhKywtajCmH%2FfnxOYbZcT4J4LLCkqVD7ziwwjYy42yRITEYJ6FwnJSb9lY7aGAu90z9%2FZ3CMBbMJrY8qiYMlJwddwn3EShHpVTq5gNxJ6WeM5lU8zWlijiE1hw4oYWNrtdyiRzTqPilKXn9%2F9WGxk2IaHr2bYgs1TXJR5xDU1cREnx5ojoHTO%2FP0rbS3waCwzQR41tgwCSKmFCBgxQByN%2BD9f%2Fu0s9niHiB2Rk7OEBnGQVjYGGwIbpHklKizjIv4nqto1tInwPxVntbsJwF07tGC%2BQaBKMH8IT3RNM2kWK84a5I8hnZTAHEfniHKNOQNj2TP%2Bi%2BMKdYdQRiycl%2BfINzDLv%2FeKGEuEuQ1WDE4RIPEjDE0ick1Zu%2B67B4HOZI9iB1va%2FP%2BePi3Q%2FVbwhZYP6kxrEQ8C%2B0t9xgwsCS6u9Ov0un08%2BSAy5L23f4GVjlyeBIW9TIlwD8xIIkUr3Mrfq5n7Arg3ALrkZyp47U9b%2B9TE3ogWP9Kj8KboHwQPhtvV7KckpTOIFg0PwF9sNcIG0U7R02nMKCk5r8GOqUBn2MhDd81iXWxwqc%2FEJD1o8PZiYLSf7GmZWNS50IwGhxxybaaBn%2B8jllebXYwYTNryHhJHyp7bMwomFBHGmfQuxWHBxOpwRwV8Gqp3oqjur3H3iX6VU92VTdz6urGJLlAyGDNovK3KfSxMIvpEVlTT9J9ePYUZqVYdTZ%2BFu3e8J5hoh5kctl1VzHQSlNXQt1kJ8phI0KB%2FUE3Cl2DeyOi%2FhYD4%2B%2BH&X-Amz-Signature=858331cf909d7eef65900ea46a73133d9d8d33a596735d7581b8f735a3292148&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
