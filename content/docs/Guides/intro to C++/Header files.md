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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDGT4Q6Z%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKEH%2BCOdiQzm08U%2FwDGw9lHLoeZsOa%2FWHuIwiUtEgZTAiAUEd9FgunMB2THRzbO39RCdX%2BuEALO4TdxnnExFiYniiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSQqQpOmtKfgqzXNEKtwDzVyVLNuupLmwgY0PompMuG7bs5sGXtzCiNGvoXkJJiUl7RgjxNU6TOWyHj4o3rVjUerNgBYsQeiAsnzj89JxddLcy8Ir5IoS6Bvi3garcauCh29ur4F5GtPk5eUiePtDoVZXmM3fR7kGQKntBNHwv8nAFgK1e0sVPpJveAU%2F%2Baresby1ykea2mSYx121h25%2Fx8JJ5klMxlUdjhHgJhyku5VTcI4EpZtHAKk3jDf%2FZRqtCYj5F2bBw2JIqUUcu9Dc%2BXVF3dpo2HwPcYxmF6jay3eNFyKPPM%2Fwm8QkN46l6hPLwITf9NBhshMiFApNh0Fs7q07vDJdoaCT0XNNuX8OO4U%2FrOe7oaxrgy%2BT%2BlAOymq5JOU6UgYAv2%2F85ofSQm%2FJAYzrLM36YGfkuh4Cu4WeaezXBeDSeMu3JDWx0fdPIw557V45qcZL%2BgqWYkAGlHmzUxDQqYUhlbbk7Zhl8NtgWWxhvdgrjx%2FTBe5f07usr%2F9Klb%2BIVll5G5nSv5zfs3qeKM8cOI6B0JeX1Zfe%2Fb%2B0ExcANC8skG%2Fo0KK4EYTSL2NGmO8PoCAX0iVK4Y%2BpcgAZ6fEHiZMiy2AGwcQUtUZD1KSKa8nXcxxu6%2BNdG1ytNqYZ1%2BiCJPEwo%2FUxPd4wotifvQY6pgExLClRJR4SisbJgS4J1gYlXqgbzcit04F7yh%2FpAlD%2Flx10tpdnDaoeHyvRPQlAB8Ig1NOFFMMrRxRk4ubVyjRkBAebyFYJbsVfL2cWokDFJopb%2FHE5ZM%2Fq4rDuUTq1S35oSI%2Fhk8N55f3MWVFVwtqmTyYTPMW2j27fNkOBS8CRvdzUPXcipwK0BS4Bzzy4P5GBnYYmB0VhnRlvsGFa6hpWFjweObgl&X-Amz-Signature=df6e3f8659b1e044e6f9ef698caa557ec5719e68d4256941374f9f9804e0f75b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
