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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWSQAXX%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQCMwjh4uPPmEnlNwY36GcqJhj57UAIM11AijgIPU3F5pgIgeKSvL03sUIP63OWxQTvWeJ6eJ2t%2BPTDm%2Bu5USIH%2FtO8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2ILQlXX2KS1j3DvCrcAyLdYOXtxncIxqd%2B%2BVuz5Be2WLJdM%2BaELyl6ZVFDcCHzCGfbajEH3df1H%2BPmf7wBWh5mAY0t9SkYCSS9O2Pq%2BDHSO6v2kNGAl%2BC7iaVGBotCDh6gJrxZMno60hgLPiMpzOg9BUqwi7YjyP4GzGMQIy%2FS29lUYnZFaRrt4OaKyiNaPDd9vuFONpECfs%2FneSF3MrDbz2ndBGWgnBqYDuoLKxgX5SfTD2RRk80zksxj5QGu83JoAl42cvDThP54udcxoc2BLdPqoigsgo6JOPn8M630BM2OqP4OIhlDZNxsKCCrOIXqIWZOrGh3iB6sgsc0GA%2BS7Y1KsqVL7QDeWSDX1Ju%2F5EHKR3SxI76Fb09fa1QKP3J5scXzUwR8n9V4G1puc6F21vP0TheF9qAsVW8WfF%2BOuSVs8%2FgYaG1TRhErW%2Bhauk%2FKJHPeryzMruPOreW79WQZoUWdsBB%2FRwYKuOEtsoTaDA2GHqeq0iZox3nfVx9ueQOBgczEMb80q4bne95bV5GdzdJivnD45hygghtYSokwEJzMxoeD%2Fs7FRsB61wg6KELiaL5LHHF8KbZZCPrurZWRtbkBZHt6X2%2FgJb3EsIrz5vSGd8jk4u2d3gRdN64zeMyeifGEHx0EvWDGMNrgxr4GOqUB1ykME%2B0j5HnLA27UyaBElWl7nV1q1QaI0VVhzB0%2BNjpDJ5xXBCLKZRN2sEN4rZk3jq8afM9CVjtr4zoD2D2gOHcV%2FdbtddSxjcftFUjAa0HHIOJ5B7jYiAghd0T5YOq65L%2FVSvoGEb7Ab9X9%2FG3EMWpwLOE790LWWH5YIJjgzETIWxaVT53Lcahg81ANfRepR5SgSni6dOJ0g%2BbsbN4WIPKM5JSq&X-Amz-Signature=7eca283b1c87e065812c294302ba56237c985a973c7c49bfea40a62dcb76efd6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
