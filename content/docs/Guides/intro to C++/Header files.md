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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2G7DYF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDlKSDleSY%2BY6ZwGovcuWsZE3bAOAtnsiVhgfZRyY%2Ft8QIgFC07uyRs0ddiMn4ibqPihdWC%2FVlgP7KQIJYUuq5NtLIq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLZsrVKWIXz5obxZsSrcAxF722Cf5kH6gfDHcTx34nj4Whzlu25JZO%2F2hLJBpAaW8OehfMnP7cz%2FgIGTbtoS6vUUxu4vHNqqu86R6QoM3FlKY5sNmUNys0Jj5EH%2Bv7p7DfT5cpmRupl3l4nLbwg7ERxjQBV%2BO0CerDSGxZlR6IAIrWmZY40U29Wkkj3faeY3LMal3FPFtQrD2BcJUrO8j45Ix6q6pl88b%2FWAMEX6Y9Gl3mLYA5UUiiLsUOLuHPJXORVcX4Ro011RRxpTF8XWzXiBaIbZj2Ick3SPBQH7pVcjL71dklZPc1l4E4V9A9D8uSCm%2BCe23nd6KVnl%2BUfZMkyHgafPlyW5tSxtEStWa8DWki6ugtie9UdrNqgNOo3KgkrNVLvD2EzxZcc1jSKGu0uP9elDPPhw0jyp6X1wuL1pve9Tw%2BulTrJ%2B0MduW9EIlnI5BEMlEx6NH%2Fe8Oi3Kf3xsQTldcsp99EUyWomsC7zT8gugvPix%2BJ1kJj0GoDUl6i0F9x%2F581Y72IAXh8C9Cq0cH44%2F6x9fDxD9X43pXTJy%2BMhYKailPNKHwN0xBS5VCRAtg5W3etj%2B%2FfgmeYrs0XHJ7GSYswvZ%2BfAm6khN4%2BnuEiuVstoultzKiuJZXAWSyNEGjKw%2BqxsT2%2BvHMM3slMEGOqUBZys4lr4gxfiEzunmeqkb0Zetkw42YtDe9rbryfACJF2Hpb7sL3nyCHmtQUTJOtO9NNagf%2FXTXIyJNNTlPmpRnAzPTTFgfxiHCiKvdzEm7zl9yz2KrMcL3Z%2B%2FxkTZCC5YRLEJgHoF4kVPZkFFmVhRiwrIQy1xaSOHVn9ssRmAz6T0lYqQb%2B6L5eDEHslCaXOy1e9aal9zkXPM3ftO7D1sfsBWB%2Fby&X-Amz-Signature=ee03c08ac4404c051e5104661568904f19d06d105dbde68ff099d75b011405b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
