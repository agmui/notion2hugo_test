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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZMT3MU%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCQCCDXee9C7DkXGdEfYE0uJNPaZ0pBpBUf90fPKXii5wIhANt6RGev37kdI5Jwt5cezCVK0%2BZ6yHjGn8YOHoFvl56VKv8DCHIQABoMNjM3NDIzMTgzODA1IgwOkvAZ9oZXT85RagQq3AO4NO0l8E75d23%2Fj4WzvBUZERxLXE%2BmZcM95sKCInO%2Bk0XuE8sgzfLpL8QT%2BhDY2HrjawsKM3SLRVSlw%2Bofjfkn0xn8F%2FoHCU53tLfyR5AJKSMTKAMwU%2BDEdUigMqStUZKv%2FjSnumaytU7LxVCgjQzLHhZeKkld8KnNOWzlaEd8S44z%2FendmqycLmHXi65skVvN221TeUAx62lAx9d%2BYOgbf5VPUUFxDhSzlzXFD60z4KskAvBhRh0EZfFYjCvDC747ctElRO22YeGsZUwBaS3DF7ebwjGvX2iXwlSzsVKgQRdKcGv1kqF9d1mK9B%2BPTgrEUDgMWCpSDN9zrrgXQami1Yq%2FWe%2FN%2FexTPrBPiw28n%2BR9tpz1Bq3UAtig%2FeB5%2FO%2BNY4BpWOy%2B9CCTa%2FIq3X1edWcCw8jfxAJboEbK4G7v95SYjoJzOT%2FTG3%2BoT5SVKNAL0yfVBUw27yxTxbLDl0uOOqx7BRq0GEoR2RLYpQSdBgWFgeqsfkPmNWzqsMsUyMGrfZWS8O3q3BHcUXynun8UG3L1mDkgu1915Yv6sDCUUthN1tww66AA1025%2BXwmV0HHijkLq0GGj4RvxofIi3ZVq7G88Bsk%2FKAUfi5M5z3%2BTIUupfNqgNySnxsj6DDG6cu9BjqkAcBOEiaMBw93gIJf9OgAAHJt%2BuRRvHScUdyy4Th%2B5E6e2eYJXKpgP89Yv%2FreMb6EUKUEwf7d9MDN4QChTL1DYj7M22DZ%2F7bJh1VfBzvZEjVy%2BaCvW60cZxhi9Pc%2FmcbeCucpbCnsmYjIG0YDwbWeKBN6QqqhNFwnUK7EOG25JJYTChcP3ZbElg2hbGm6s260OKOmCP%2Fg8MCaadNHSnsTMFh6Xv4e&X-Amz-Signature=b427dcae5df99129358d19f23cf11f5a8e4d08a32369b42b42cce178dbafcd3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
