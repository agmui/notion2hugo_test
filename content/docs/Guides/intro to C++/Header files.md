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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72Z2TNC%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCucFlgLPnuBYq4Pid0ywxQrRvfXArQEp9CEuuz8d0yPwIgdKYj%2BaryJerrQBYz3SeMR%2BQjDLlY%2FfK7DFB5M4QRgsMqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7khOglSXDHv%2FG0ZSrcA0FpcRAICyHU0Prv5PF6%2FT2J14uC3LnqP2kKFnKUkef5UuLXIzL8Dp4PqPh6pdRu6A5GeeNJmDuBvz4QSTnLQRGWVCXBFuBrvVNbP7KIMzcB565EpS3kZDiF3lCz7BQ%2FldTiv%2FhSSNOwx%2BIDLFADZZp%2Fb8Ay6MhqQWp1QLvlO%2B1SEYGz9vevRosDOCf9sQo5vIzRBCsb3%2FCnl%2BKzG6ZwE3NXKQms1TTlhdA2YlC8sqsB7Ct3Kh%2B6foWf95V5Xhvh4rnXmGCbx5ls8w33DqEJDPPoCsatSEsCy88wmrr2SyPjKp%2BH%2FqOkS%2B49R27Farz8p4qdnn8%2BwKZndUNvE8IfazQyZYbObtjz3Bd2Yma2dqxJCe3CQDwsTswRKAEkgHp3r83N%2FA%2B2CqtLXwquXUbnUZw%2BH4YmjBNFZYUZfLk6lQvX5TiKqSgk0onEB1afzIKWo71YSWj8LUs4r2gWxq%2B8Fp171AGnU7rGpDLVEQbkNW3CXs187xBOBOPYw%2F00nXi88GId5z6Bj4pspZ5v22KRj3vHZq2BBqC0WN8DhhubmIBW2S5HLHK2JB2podxMowWUXzRt5tcFU8Odut2E%2B6gBXgiz7GF0S3QzLFwPuLrFF%2BRfXMCvntHe9NZNC%2FdrMLmgj8AGOqUB1usiSCvj4Yk8VzzKDZqFEl4GKTsBqOZs7YRSE%2FfEV9v0vcli5uZhnpqNeuMXudvyGDtbOGTXzph1%2Fk%2B4j6cozhlkSZyj28dl8yloZ6hmDh11%2FLJWvrCRpqM74Agz%2BxKUK1hDL%2F8HP8pGgEGclBJYxEmZuXTx5sEzAmp%2BEiFxjWvTRUUqnvc9FoFmw2UM2TyDhLf4bQ9IUGpD7NrLYOqZtUlptSEL&X-Amz-Signature=7ca093fc9cb585f8f5295def4cb3619cfc4157262cf5ccc1281e7efc8085fc1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
