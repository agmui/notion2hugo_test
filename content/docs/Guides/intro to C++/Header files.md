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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UCSO2W2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7qHyWTtJtApi9Yyxg8brYBtpV0Yy3%2BpWzS%2FyQ3CZf1AIhAPF4BXCvc41hAL50WQ6iNVMBYX3hyc4QbL2qbjGBXwZaKv8DCDsQABoMNjM3NDIzMTgzODA1Igxir5%2B49An5Z4FlIm0q3AOxwPFG0Wz1sA4F00nMAABzuobgHUDZdQ%2Fr8JQqqzpJvnsVnFJVxdQ5mnRDi%2FmwQnmKML1gCg%2Fef3P6ycxudcFAjbneT56%2Fr9X30gChfm7v58mHZ26EWhMz8lcmS5fzBLi44SyKF5t%2B2doQc4w60f7Jv2C2y3VJz4Y2BJ%2BuJgm3VTjAMkbHy5uLdKGb3iE4aHABPSuFayeYmfeQ79Gjg6jQOjMyTSu%2FPiY8%2FtRab5dW1k8IRWJkIKu6wYWaCNUHDowkFvMCU%2F6jIkZ%2BuDRFXbdYLTYOHXpXyy9WAi53hoF%2FzCtMstooAKJJixBdVvZSgOD2rH%2F6SN%2BmxKo3VXUSKLZPmvMLmhsos31XljOpVpRqqgBhTInBfcytKFAp9s%2FvEQJXnj6jZAlrmgLHYIF%2FGVLjM7GDQ9hLwGwXUqm9ujK4Tq8R09NeKD%2Bcx1Jd4jOCGNwO0GhoMyfEHTYLMeRE2%2BcIwl1XlFRK2gyS3f2TSSgQ9CCeEhPFdeO%2FKt3LAkBF%2BI%2BnoQyYp5TUJ1QmJK8zi0veFyJmknJXY5lImoX3UdpB163u%2B4NXRiEjcWjdZ0CsMt6rdaTXyPkkLIhRIGCkf2XxItlmer6empry1BSKFJ3wKHgqLQ7tJcR6TT6L1jC7i%2FXEBjqkAdkCe%2BRU4ZMA8qNc5B7SWpkBwnry0a2EBb9cfZx9OzDzpwoSrqBH4BDESFl48ZQa14dOxBkOBGMqgzYfBfYRvNQsUWPsAbRuTrMMtSVsCMeET4wgMucySmyVYps7BfirVJ5IP9olkpZHROGqa811HPKzZQ8BtGiDbD4AQv%2FaNvdoh%2BYHiqzTFD9DIg%2Br09AB80gZtU%2B9wnMaxFABAde0dxGlH2JV&X-Amz-Signature=8873617379e19eb27fd83e3206f95dc79b3b9ea8afac8bc06b9ef8610c899c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
