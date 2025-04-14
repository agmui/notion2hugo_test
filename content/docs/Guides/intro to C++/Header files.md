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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJK4OVNT%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDwqLngcNtWuWGD8AWP%2FMrLgpGuEdNelRID7Y9can%2Bv4AiEAzYjdMKHKEspJ0wx41lMWyMA251I3CsfanAVNiTFVeqcqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEllDxVUOLCq9MpzyrcA1PNQ2WW1%2BPR7qTspgfnlHQOf4r6LsutB7QIob%2BTa31JAJpxtltlBjhN1eL%2Bvihp96oyECg0tuqn4BwFcjS76GRhySmq0rD60xt%2FJxMWXvJVETQKoTiOvGy5b0EzY34jM2a%2FQ66u6pdHMTjD4c6zoQw8NAlp5%2BMLl2ae0d92JQQUSbrdQpiCQO79vMLDsi8CbiVA3N8g6tANsz3jA%2Fgg9ifNk098C8X0Oz%2FGP4fQ%2FGkD79KAMIDozDcanByxFFtVRv%2BqPb2o%2B8hM5u8B4OaZodrFIDW1jUUUawy4BT9rV5xf9LRUQM5tOhj0xLlHHFBVzW6S4ccDt1WwvBgEQ%2Be8Dkw43us3I5juzmX6UdNNuQnhQmAp8k3mKuLQVIXjqSpVbMLEbWXQmyEUzlGvCZfN3C4amnYWwsaPu7i%2FS%2FtwOAwVKyYB8YhE9eaQ5O0Dt5clTl8IqncBtBMNNZxm03Tbfp12VqDPGY9vJX626w5HSh6XwEZg5386ZGt9XVeDCuUkEGLGbU9t3m38uHwpIPxcSM%2BU%2Fee9O%2F9nZNoMBZB%2B4wUojDNG4FOrTxZLepF8h5c3u4qE%2Bn1S969mRTCtMNpyPmmch9Uhqpa60MXQo0wpGpWbdn7qsiQDCGL4PkDVMPmB8b8GOqUB79vxrvXFUZtrlzmGdze8Ii9bT4mJoCJWWBrp4QQq7ANYsYC%2BIfvBN0teV3aceqBonyCpn8zQgM%2BDd4qZNPn0iuDUUTlDKZuxzg4IeDBx3etMRS3V3YUGpduRc5dxE7rj2QkTqrTee22pd0P6M5rgfiVJ9HccJVMe1MPpt%2B29niKNrNfuTpKaUSuoDD8m7NSphZxdSISC5HxR11f54CflyUuZmWWR&X-Amz-Signature=d147b1922be08e573fa7e5d43382379cccdceff077ced74398ba1b8bb93c0042&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
