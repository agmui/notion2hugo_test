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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFCKOSHE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuldShIL5rXfQ%2FnHrlPYLKzdk4jTsiFKlgQvth3F7TFAiEAm%2BgK3z39kXTwmfxtmCGXXWziDMlFPcXCIT9KeiUmb4gq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOpgqFsOWfSEF%2Bu52yrcA9Tru8pHx5VMRiYJETd%2BS7ta%2FwKdQ4rYqeY%2Feg5Csd7%2FbTDmm1yWG23cHpDw7qd1IYWiN3BiBvuT7mV3qoAqlPcAYTcPuTwVfwp2XLQX03sqz4L9tVLhHIjGbM1X2LCJWTtzb0x3bhF5hcixZbfjg8Zg%2FdXIVLYxy%2FUvY4ndsdrzfu84kXdNCuhZVJy7aHGP2uuGVoyyUmd%2Bmqox0Qcbo6pvr0XZhnHnPlBqzRwU7j69DLMoqhMaPR1XfCh8kXzjFXV7BonwsS3VdKAHD7lqkw2DD3TSyvwzoiRUpBjDCwT%2Be%2B82VFrKv%2B3N4jEC0Wal4CqNUz4%2Btlxi2bHKRG1vbEoxO9BnXdV4QVU%2Bqf8xgq6mCU4vU5EMHJ7W%2BrjtGbfEuOSIfhGtvl2Gz9dotltWsVjzaK8LoKgFg0pX32i7waQXr09F1Mxx8UTmqTlQ462VU6mkPczaJSnhRseT8GPtrFTMHjRghQ1F7QRPxA5Qx%2B8OixzL0A9jcHdtY5lc2Dq1f2R0mtvZD2HSzkF%2Bbezn5gETBcwcp5RtlnXkwQF5bQA9ZgAiPUQtPJUzB3xoUfxHaYKeGuBZ73zQCXxSqBidK72t0LR8TEQr46GEs5P%2FFK2JC9MHP6W071zOp5wLMIDkw78GOqUB8YchLsarzLukl3u9gvahyNkZE%2Fm3qopfJhsikNe%2Fk2XhODvHOrqWu9uVDoId%2Bf63yuwazHqa0t7M6GBta6ZUayLMvJ8LcmfiirKz5a0NKqDcgq6eGN3hLQ5jyr8F%2FgiCAlCSezLFMQCmjQm3W7wGrPEvbjt%2F3QdpLjeJzNuS%2BfcqsfhxGGg8%2FNPaneTA4ezwGo3goU%2FDeGsP62lgOUf4lbYVfiDC&X-Amz-Signature=4c2451f71b88acf7c920daa5ae0c464d8acc86439d84343d66e9d4f83ab184e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
