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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3V72PCS%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHbalJeaI4w3k4%2FyFOakvm%2F2jo5LC2ULfo2wY0wB0N2AiEAq%2BGEz2hzNKQ2MnhLTEkgtzIgwBKnLyYyYxvZ2iUg7HYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFD3GI2UScykSN5O2CrcA6cv%2B60EYnulqpysWEYNSWfOjO3MBxhcYJ3FcMfkrPgkNv0iibWkCZn%2BUFrFaVGF8xItqf1UAvN%2FF6M3WaltqjNL4XLcaVYNub7R060EBW3zRTiOBBHcX8EiurC7AdOEv4yEKeytGFhjyUgw4LRNEKvPQu0xV3zZluTxFltFXFPjIKZo2WdMZ5yzgymaEkDvW78Ds8Og7n7Mzf6QnxESP4UGqOjRcTVJFEjf9sh7D3AvMnFmpdYruTszAnEErqA7sItJIj3JiCOgiSafP9sdw7GYaEX3EIHdrBj3i0khk%2F%2Bt3Pd1e%2B63avNohxiYyDvJ7KLITUHN9p9Mqz%2FsghCnpV807Xr%2FiAgiNW2s9Ws5k%2FKQe6Xu77EnPVgo%2FmDxM3CaM4dyBXj6MZvJsY4c2PR8gUAdDQV%2BcYIUzvrpBxEzOBSkT3LFAGN%2F2qfxNhgFL73H4ehlPSw7I2FB8lNtM9gDGeLxclQC72kq4SX4vz2wGVMS0fz0jQ%2B3EAU8oxB%2Fo%2FAC%2BqgfVqb1SggBYqXQxzUNILJdGPpq2Sq8y8ECNimuVI3lAtLDTX5%2Fh6xh8QbJvQmunMQxyfvWnGTB0DKlT%2F1g%2BfH7nqNFtBz7RXUu%2F6HgdkOKjQz9kUlaw76WF6YYMOuv2MIGOqUB%2BPtYyiJDKvxR4Hk6bC0hclJ9R%2Fqd1qchpJuufanzCgcBavwNLw6jG%2BbvF2TUK%2B22aIrAl37PGyCe3K%2F8fD2wOPQO%2BCGb%2FQv0YtliTWiSxqYkqd3gIbpzBpSpPd4d%2BFuCgyJI3lbr2gdQgHFDnPLmnzI3gBtMffJku4TgZphyRzqBlBy%2FuhmIHD7H5Hs93xZu980zmF%2FbA796FxyN%2FNkLcIVjvo8w&X-Amz-Signature=f6cda231602964d8ca9dd6513a1719704c2f3252dcedc49c5d3328cded905baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
