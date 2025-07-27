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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYBWBTCM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHtlytA2oFGdYCftK%2FJ%2Femr8GbWi8F%2F%2BNMHKj02h3rJdAiEAjqKZVDp31AWRgK2TEmzM4QE6qgzcCwfyXuSVpxCtn2wq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPkpm5uWn%2FbLUiyzkCrcA0yKIqHl0aZugU5vYoQaU8wDS8rwp%2F92UkG075WXRqOHzeHyu0ndtZiJAtBiVOfIPB3q6EHoVxoITf3i20dYOTFS4zzUKOSwfaqipINDIoN1sv%2Ff%2FTDvj3kvixlJDJyuJPmaHCmxVUoV3rmI0YFXO9JXifLcSewwIe8rlJza62boHFfbVdpY6XZLrmd3yhr10E1BM59oAfqxItEcqAPM04IBVe0sWGYjmoeVsFGpa5uXmsvusBH6fhzV%2Bu5IgJK1c%2Bctrg%2BovcZLyZCefKSVLO0bqvk2%2FnTzwcw37Uzcnif%2F5eDaapFTWA4z7cGmqg9ixLRUqzSRlAasR28%2F9y%2FBCL12IWyB%2BqTLB6DsMe2HeRbu209gUFZqOZuo6bP1%2F9qjVPawCt%2FN2BPuQgfuLaddst2Q4agyOsh5AUp%2Bs9OoWvjt3qmGuzEImL2DkhzNHPcqg%2FYhTJpQ13uVMt8VYdrSPRmqW0fwFvTBm7Pfkxj9JRLshe0RaLQ2nDjvjD%2B7P7iO%2BS6pTg4Im5jYeTAuiAyxqEgBtNPKEbffcfGyfSNgboxh1g6MfFcXB%2FAijqZ7PbT9B%2BzY5ZP6wJuFnMw2e5slh5tHWt8tZA5sTn2boEl482yPSyEQV9bPteMIgW34MKqDmcQGOqUB86nZOyJ0DtG5iVc76V%2Fs6HUgj9l97szyI%2BpueczZhgY5mUhhvVb1BMJL5ibsCYsuwaRbD%2Bf2pHDzNkyWlDRaqDWcW6LuM5Kbh5Qi9FQZ8%2Fcyv6lMPQAdT%2FWsvF98HUY8vs4%2Fbp%2FZYXEjFM%2Bqg1UCZGlCNL86DnFt6Lz%2B3Uoi4C5zm8a1OfSsz%2BlgLfkXK17AHZL13gYXrLZHTIlLBiwIcXS0VuKd&X-Amz-Signature=b91045c815d1f364765424e4b26ec4c28c2295b8386ea90be47f9c8bae2cc866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
