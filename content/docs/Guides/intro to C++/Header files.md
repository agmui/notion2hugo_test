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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMWDHDX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqrC%2B6F%2FrYR9Xwe2ULkkZc8p1uA4rrvRSQX%2BrHYGRfSAIgdhuPK%2BpjQB3agHlse3rYGqiqkWIW4gywx4Ien1sDibcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDISPXdj%2FOO1%2BbeT9qyrcAz0vmD%2FV4iGNEvs98N%2Fra%2BZQwhOvQ65JdV5PpwkeZ3yZUSz%2BtSzmhkz8q8JPIW%2B1Jr8Uqyj8x1zoF5DRB3qz3D0VLcSpz%2BgsQrvMdjyJ9QTJi55BVsFixuw3zFbWZF5ryz7ODXS2ZoTuyTFSfZkORQm7vJIBVvFAasPIP9RL6vh8mfZJLn1kbq8i4Uws8SG8MniYpsz1%2F4HqtiDn7eG8XxPY7vH8OaXK4Av6oI7zAHBKmI955rT2rKz5w%2B8pA6atSg3PMgCrjPKZ6G0J2HU6pSJe6CR%2BmXiT0YjE0X9pvkibpYwaQztXak64%2FA7O6yNrkxglTPPBItqot58QBFVrCzxH9lFcDDzJtY1Ei6uKY%2B2NzZwXbkIboicA9s8k7YUuv0SDuluYQoICiyomFi4kIxI%2B7cBHNkWeDfYhA5n6zRFvf7BApt1x%2BKe58l%2FZ22EWDe8Lhi87bTA%2FK7BCPw4qRtkcFRSNHbihSn6pCZ2mRaKB7nu%2BRSvvDwpeEJvaaUqhXpKuVUWd9r3jh2yyTSFjopq5Ma%2F9l7dZQ3ILz06UcNEHJ9qfvQrLxFeSIF%2BJturZ%2FVvyx2hReAxYi5CHM05LkANKIRJRRKvrk9TxLn6dYmIZxqv%2ForYgvbjMfXL4MNu8w78GOqUBK9891MST43zp9dyCU7OkaquLI30cnhLRYZkEn1KDcKYc4A8wQ3QOoGnuAINVMstcGjzp4DLPpOcTa4E1CH%2FcDeeZSHW0Sz7OFZLEKc8Av%2BhAmJo3nHR2SEdftUUtNRMO3pOeGockmlLfjCyRN4WFBRhII2HvVImXppBlvxk8UNhhQVT4MyQOdhWsalH31a0WNKpcD7Yt6jO6OyETG1Xs9iUu%2F1qd&X-Amz-Signature=f132d5244976856a758c50d67d9c7819404b58c2877d32272ae53570c41ca1d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
