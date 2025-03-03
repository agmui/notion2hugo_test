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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SJ45JJX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3D%2FDtfWZb0ZwRLAN6DP1EOXpfxtkWStCw%2ByYtzDpZbAiEAglgT8LaUJzyEttDshJA2d7tWKw1oOehnLFJy%2F9lxr98qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTrDEEtcrGe9BRpiCrcA5QrMXM0Jnxqn%2FcFfvviatLh2YH%2BNKVU%2BNLkBnfHxauRG0GxTNE5QaIQ%2FUX01A%2Bqa7IxHy1lzRagKZkzNq%2BcV8rZyeUiZ3FRlgfv%2BTFVpI%2FcKjXywBhtRKF%2B9abr3ZlXOInzsULJNLn%2BaIehGnEKDDWipnPysLdHq0CQfCcPRQpCgz6rhDcE5%2Bo%2F3Di87XOBBYpqpfcUm0JAJIJEoACajG42MQnmSlus7gF4pSa4w3UD1JPlITIxc6pioJ%2FuG3xZc1enPuZkmvbPVZRasqYz22aOVRNQFhktwbwOUkBpxatXdiHObsn%2FwCa%2F1V66Hf4a9LL2t4LXOMnbpubD1HKYOV2DqgKKfYrjr1GMTAN4PIgSumc0gy%2BEVui8tESgNodQonJLsKCHrrl6CRgpwc8cRt5pthJjO1Pv0kk%2Ftfx3ikjkMMyHabo51sfeZUVnKLiGtxuoTxaKjYgroTdtu9SSenQ%2FYoz5j9%2FlB9kJOEsWmVHLKuSBO6TC6vav6X71M8Bqeb4nEoq6pbV0RdfQTDuPZFvpr4ggNB8snARq8OJy0KHFuMOsH%2FcFT380Xb12TzKRsbeLyqkzipBbZy1lb6qwmUiHWXJjdM1%2FmSVTD3%2BoruYgv6sPjsFSziNdzwrtMOKflL4GOqUBQNk6eRAm6y%2B8D%2B1CPWiAfeW23NvZNc2cR2iYPFq6ltxsFganahTlfyeUBHkPiXtoKGoWyZvrGaOs1VQKtXa7z73mWydxizdh3VaHDUVu7iOQAGPmM%2B0hjHIdSiqlQNaKjlMXjcwxpV8WfbLtBJ7Ixlq1olwrCWpc6rgL60xsYKdAWOLGr%2FSDt12YliWrOb9%2FmVCNzAXW3%2F2t5pWHCQVF73wXaqBq&X-Amz-Signature=7a8de8bd03513c38d3606b65f565a6395a2a5c16b39e34a79bcc37bf8f96fa60&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
