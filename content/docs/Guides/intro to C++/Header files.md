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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECDLC35%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJkzKoRhbVGJT7JBD0kNYsWvrvbJDNNfBb8GtY1RyzdAiEAuwzE5m%2F5culPuVuHaGhBqsHPOE06O48md3TBfPEnKvMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJT04i8YFiZV5tjhircAwad%2FLiWh1Oxhkhl4HpcRwBK7M7gS%2FNdShC58k9%2F3%2FM1SWebleJ6phyyUvSFU3ERKT%2ByrhHbjnbb9i7B36wmuV1%2F0uj3JwOhYDikBR%2FBnoO5Upfoyzn9vz3%2BXXeq64%2BscaqBRqtpjZNc5IOYJM6LxIXfn%2BhojFQggKWPdp04tcStBkhM1MBbAC%2BV6HpqQd%2BmSnZE1t6fISqtqKJVqdL5Wn8%2FlkMCTxoSgrC76de1H9ddLMIoQ4w4blN0dESCMJlxf1nuolDKJT9Zp%2B%2BVPkyvzvDGLxtRwL8Apq%2BsKDT%2FBVmBrGK6HCKosWxi65c1azHpBvOAzchZrGVcaiqyUx28mYjLLy6F%2BhPEpnPRKbezxwEsIVxHbvqWwwpXDersN9zFJDw6DLOhbNOvyOAQAlXLvbyjQxFHNsB8qEiq9NLYlbCqV4WT2f5F259wuJceCQTA8r2MBupAbdZINDTX6BGGmdNH0IIFKhWaUfsJOhRWaxVcvEtRYzr8GCSSTq0r32D5Q8c2oJE6cJvfLNTN8q3swkwLkTfF3CBie1iEdkzg5NtI50Zt%2FhcUw%2F7Jcw%2BVnQUpGRQu6%2FEBeR0gtIeGnNyTATO9jATYkMUsOsbR4T0xgDyiwEKUAFIWkVAqS%2FivMJrc5cEGOqUB32kZHEAmsKTr%2Bmdsx%2BPGc6G6WBFXNHL6NoyIS1lkpH1tUChPSehmr0ib5lujUSvLdySh6%2FAtN9NbwGN5Y8GxJa6ygeMt%2Foqeh8Prx%2BJLfrxz%2BuTFRs3mILIatsIjrdh2G5vDrg8WbaaDskOiNaWrdfrO7Z5fptDfPjMqDA%2FfrtZI%2FXwEcpvlSSWaClUupnOcCdXtCjCoSCREDHGi1CiPsq6%2BB8Zm&X-Amz-Signature=97b5e5c26e64ad6dca949a17d40f2475767734596ff47bdf1fd4bf1746cb7616&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
