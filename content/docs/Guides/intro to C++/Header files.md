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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR7HZL2B%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQDT3zpvJDBIDLUyZm4Y4FvUQRTGQ1gjItZHmwYRvuuNkAIhAPA8cDOgSvzj5M2RX%2Fj4HgKlWkj0deCX1VVoGoo7VxmvKv8DCGMQABoMNjM3NDIzMTgzODA1IgxPReIL%2BRrLixfhPyMq3AMMXwxx3JntcDJmUccdbsCC6%2BnT6bwFfHtCyTcS3uP9wNdT8bFy3reBkcdG8vt6dRk1t0udThLeRzY8wp5d%2BSia436iWEnOuPsrs8%2FHxQMH4bAQeKwOF2wHv2XOhVKk6y9ePnosYXmr1bzNrzL%2Fsw%2F2XIMlaUq2zIdkjeOn1Z6a7M5Nis9wZky8IbAgziQcvf%2FY43kpUftJkVA146h1J%2FQNnZ%2FLLKNm3CA8XYjrcUIDOHW4rXLn3GvLVPTRFLpAEhtGL91YgVBOBYDcdVYoB1KBxhXayFj9b0YWa5PRdFLgzV5%2Fk6teEZwEo2P73OsgqyFSiX4qWiIc9v2hofmaU3X60RyN5rdhlyFX6hYOaFqymKFDZt1ICFdxEJZpnNZz8EOCJbTvYu%2BWDxLCQDsttkYlPNlcYvhZ5ImFQ5g2Z%2BoQuHex%2B9QGRGNAi7C3womyozQ9ronc4%2Bk8zx3WtVk%2FeE%2BXTVQ0xDno1fZ8wByMfqhoQISxvYL2xM%2F7NUafgk6MO7kBOA%2Byif22QFvWu2O%2FPPXAXmtXDrPK6GeGX03gJ12VHBUWFtYDqqudozKYDeMla6lcTMxJptuB6NkO0wGQVxNyIYmn3ZXSDqH0NrOa7G17bneOq0oQynQe53s2HTDfqv29BjqkAUjnZ8ltioIqXLuQWrmE4XfuIw8hm13v0ePL%2F0Vl5gCCVBKKBtO7VUbZd57WVokW5i2p9oUdAO6pQSZ5bGno%2Fu735F2CIPj%2BV%2F6XZ3txIdyGuRY8%2F2Bht%2FCG91P7Hm%2FbIpqrPTXMzje5EiKOgd%2BB5jYGfouHV4xeYLvItSgeYkOeF1xwb%2FFV4iaVPZz9njqLp2eAho0ZX%2FfoMJdiA%2F3%2FVeZEDMQT&X-Amz-Signature=41dbeffa0e96ad146e4ad2c9295091bf2f1ca8cdefce0a751d604e73d43cbe66&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
