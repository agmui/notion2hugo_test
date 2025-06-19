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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY433C66%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARrIAM%2BBbAOiAE3i7K%2Bb3sxoa4p1fj9palEi2N5JSnhAiA6SwerZBmjno8aNaKxA7Qe9OmX1N0b%2BJr47RxHnoxxjSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf6lPXS4HJEpzZ%2BK3KtwDUOsk3TiPdIMvhDgSjXl28PvhOnCPUCVBoVKelPMvLkUeeN32a5X9hSvDtSux7hqfTJNwbqUZDhHta0Wdjf5ScbFudH%2BnLaCFQdsljZ0PbmQ2zgUDPvXahE%2BYTCBd2JRAdiylZm9S3D35uIIcIz9GqVcKoDlCvxygaS1uYcgDbaHDbvd%2F8HrSnobRsh2BApAjMDF00c16ewKmtLdqror4OEe4e0LR2LB7pcKhzCs8MqvqEzw3ob5CAcTC1zVYvY%2FrqeJmJZnrRHKBwmsX1ZUUtVc4r8V3VEfss2iWpGgenown3QDf3vv8WxGD1jUmUKuv8TKhvJC69%2FZTPivOQtmvRwuH3F3GIf4ErPjY9UvG%2BriFAXm5PqxuK5pU81Y2mEYn9i%2Bp4F3namx7yzolVQKy5MwmffGN6%2FeFtKgGtrnfgtc3UeWfLzQtMfV5a%2FFbV5SwHgGjBbZvEKCcb1Mob8ly2LbN75qiubYpFVtac8cWtxCsnS7BSeHjWT6iV3v6AMWNQMP3siIVCyCdE5kpBpdH%2FLWHgm8kvKEZUXodUxkEBzv6WBy%2FYplp8v%2FcQDYF%2Byfu08cbv65wWPVHzyz7sZfRHHN83BzQissZ8%2BXpbzgwX1S2NnxsXqJBQfkTFaMwloTOwgY6pgGaypb4fwFZydcTJNvJfPWaBo5MR0EVmKb1nhWoSLwdQ82R1Du1Ne16ApwIq0Ow0w6rolsVp08WEMsMfQ%2BqQI2uHSBIu6wQZz7WaZFL%2BmNSurOdZPMDP14Vkmkx371I0yBAiXl7Y7M1lBsvabHl7maxGp%2Bo2nS3nT06oSwCOyQiKdcxqMhhZIIIM2c4pOTnwCPkSE5F79ZhDY1FQlIMFquaD%2B7%2BcTDg&X-Amz-Signature=b70d3fd5325f9b2cdc12116e5171cb7d116a0524e66825fa6547359f20abcfc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
