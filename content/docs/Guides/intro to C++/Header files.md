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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSZWVBDZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDULhdtZpz1xppuyKona72eZ0pAG%2B5HFSfO0A%2FC29VE6wIhAPJqjxY%2BggU7KIbfjOBF4toO8oOn2owJ5ikiuCLxJpMxKv8DCGIQABoMNjM3NDIzMTgzODA1IgywTrLXjKhBxSoPSlIq3AOn8JhOTiFtvyc3EtKve0Tm3dSRjWqtVWYihbqOZO9Vuy5x1JWpzy5x4kPW8YvFVMk%2Bw74N4QXh6bZbq8OyY14gQBVKemX4MoZ58%2F2Er5TjAofUO1%2BgRkLfJhoCcql84GGiI4DsRBcr1RoY0WuuvGqpsz6QD%2BzKj3jAylObBozUdAagqPnMaBX0W30wccRKCwKjnLz2C1IgEiwV3YgJeBvudW9O2bbZwhIrDv1ahUZd9yrC58ROwG%2FI9k4e%2BocycrScH1uFYUUlxmuhlBrfGC95vOHPFB1XGe8PdpNNesl7phn8vOmwM9F1Mcac1Bj1yI0tVXuWHHYCRbtF%2FCl4AZzTX0yCgzS3pA2TDvRp2pGyR7BEEQkw9YVcZ11A6Kcv%2BS8vOweY%2FGySeQOE12ucqhXx7cIATpPHGl5gZsNpWKdMx%2BufUbubi9pvF%2BBj2QXQ%2FWKYNqI2mQWexqLjL17%2BsNv4%2BvGUSkE0nt8w4vqTrrRefZr2RdIXFbeyyOpy8z%2B2VCxGQTh26GmIe11H5j4genVquEoTBlUZSD%2BPMw5tdE8Zz5Stj6IYI1PqBHol9VnrZzNgV2x5xWEZnt9xv%2BPmUgKmNcosYcMQ4xfh9l%2BMN8QiywS1XLIS9uPcd54MvDCh4arDBjqkAQu3%2B148q7gG4MCxXJsVHvY7F7G9AHCGKIceIoM5WxZtqU5Qy31aFjEpEDHFUudaRbsrY2bhQu%2BfpAsVBntPxT4kpFZqQ6oTbQ40CvDeWN4bhKKUSlZg7hy4p%2Bx6rF73tKy9DDRbx52r38xXCOGNG5ceGNQFTIfgTCAfsoitskd3szVODyJYJh9rQSrC4oEu7xdfZ4SQagtYJw2d7RaqGrTLr9ha&X-Amz-Signature=a8a54b4bcdc1f6dea6cdcb8b950413f55938896b90c7d6bb4e5b03c72149ef3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
