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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG4SBVBC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T051645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBlqJfjR0nq9K2UTyB9IFI11NiD%2BQEJj%2FuEGaqWcZCmfAiBpYX51ImQghr6plwpDjSXdEgZs0DMGAZd8Wbo5obN5sCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLiYWP7BqZ5bH6%2B6NKtwDJr%2FaM4xldOV2E5CEsvJ6CAR5tSxwp4kC9tVKvkkB7gG45Hv01G4tcmkTcjd5W3q3FGYwMHdC6WLZgQE%2B38dXyB3phMkMLa4OEe2GhPo3LFYs%2BpeHHiRehmUGzvPnOff9Pv7UuSmuD7Gu101yjD86cTdqGhxwYISVXHgJMunhGkWbJTVkBGsPZ20Q6quU3xivOzSNli2dO1G52%2B%2Fr0saBfSzH37hc4lbbtZklKbBoaKzNMA5bJhq1STYFc78bNVyRcNrwZUU6QvcsIvZOcEZaJkrtCDQPBWIP6QVTesXjECPaIJOrj5YXUK%2BBvyU8xQiIRR09UDmlXOwfhzzzl%2BHhWPI13TqPrP5ngUpvSkYziWNvwzLiomBobwgYY7aPkDQbbnNnC5Ut2LsbCAV3rP%2B1%2B09fWux461QZipE%2BDrUgWhHleBqezLMDfTa6tjW7eMhwM0FVH8S3AKPNWhAEOOepjItDfKYJ8fdC%2Bx8M1ep9xp%2F1ruNnUnULKv5drvdKx9bmh4vGbtk89EJcvqU46RklhDZbEoK90N5zrz4CakYgeVTjo%2B7tzV3YWAAMjEJG9HEl5knULiuswmFDiq9CyGyFlLRhCrSAZFGndXKI842dPdphyYmJxe42JjGg9lAwgrHnwwY6pgE3m%2FkBPMFtC9wT8DOxaP6Mjfwkoy8uKXcAFU7%2FFuSOZk6IvACTu4hRvbMyP2r2cYUXNDVkfr%2BUJOf8%2FHoI2Q1q0VhTdYmJzc9VxDf1hlxwz%2Br452CDr1ZZMnhrjlDyrPVvxdvruhM4ma4%2Btqkdue%2FAaRF2k9%2BdbXTOHFvaWy%2BTupPGX2e6MA6qw24wBoaNrmt7aNcgi6U8mPCPd8LYqWZwfDzPdni7&X-Amz-Signature=6ff849c5197c3d8cfc28110892a3bfb7a8e50f32bcacd1fbaa1022a23fd6a608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
