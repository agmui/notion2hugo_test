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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ4M355Y%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T132708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJIMEYCIQDvPTz6GXsAZl3GasGvpRdkb5g6%2FINSdM3qnOtm6tdN8gIhAKPqLE11n5WNMf%2B0pIBHKz%2F0JIZYUmAGbSsMPx%2Bo9sDeKv8DCBQQABoMNjM3NDIzMTgzODA1Igx1lxKcmhL4c4HIb6Aq3AP6F%2BtqXGSZbtRG4bbJSdaBvZLR73Jcmk66Yt9%2Fg9ZiKZOZoZAEV0MhV%2FTwe%2FPi%2FN0ETY0Yl58QERyZjRbZcOCyANotbrZagylfMLUdkxDXjB%2Bfaduha%2F7tq5MTcMDZHH4sAi%2B%2FjnpJ%2FEQU%2BGa86qyD2hc8RiIPu%2FlIUnMrZJW4OxDRY6U5dYRDQ138ysoBoGQvVgYF9qNgoii6UXGtfpv3ZUVdHy7i0veFQs53MeqeAfxa1IJfR5o3NyYEvr7D%2BwD3%2FX93C8poyNO5oPcf4C1NsBPPhSND%2FXgzZyCfTweRQ58yo8Q6i9ggeM9vjRx3PMvShSwpE5hl08rVUowOmrR1Wdb1qUz6%2B%2F8EP8HFK0xo32JhUNKD%2Fq4TQINyz%2BCS1VNB2Jco%2FrVjXk81KwaiV9EolinPSyxqDQzEY4e22nr1BLzFpdD7IUl%2FblghpuZF%2BiGXrIxyFF%2FMfYfnj8N%2FwuwLGbSM6HufKtIYMp2titx%2BxcCfoHdfe%2B0WxPiDUosiSumc%2FOYvtDviuvcpybyjEA%2FuInh373tB5RSDiskvKqrpXtZBrZciOOrYK%2BabrBC2zaS%2BGp1pHmNUkuP7eKxixVnl5rhEeFj%2FsSm25jMYpRyqgPMEHBPKWU%2B0RLsvzTCj8%2BTCBjqkAbqEUIMMg4uU88xYCUYpaRoF%2FSjlr5ceyq19GU9okZbcHuToNYsjfcwbtdihdFuH2ag8okGbXVhIhOd3E4BKZZa%2F7fmQ6x6IfC2Jb0D%2FLDVS9YdP84nY9XXz%2Fh9oDgewiPr8kr6LJryRjljqNdS7gcJtoP9F0fmg6UOonD2HoBMNNK5FOkSjtpdUXB%2FfIEVkyPkNcpBVPVAAd9QSTApgYkS7Ifzp&X-Amz-Signature=dceced4251f3aa161b06a238acff41d3eac9c4f26b660e65e2a63e698ef92bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
