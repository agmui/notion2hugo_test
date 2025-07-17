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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY76ZTT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T081334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIBkZ0nN%2FJPVm4%2FycCyvnNxTTLCSWLZyINIDgpo0KWSkqAiEA1Vg3T0UEPN%2B8yctvJNS%2BHTtGFrbOeT2hZpo%2FMeDZnCwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCEFnyFGdlitNCGaVyrcA0lR4TYWcGAnu%2FQLN3kbwnNddWaxIFLE55ly4ALMY4E6ASroPapVBl%2FW3WQEeRcKfU8WCHghv48NoVW%2BcK1U1vg%2FoIVBMxRxKYcu%2BAowBX4Yd5tdAItUed5%2Bdq5jtFUKkqMia76RsSN688gXvBDtuMdVA68%2FANne8YuIZAV%2BTuZO2akFHUsfBTBYkBz%2BQZrXEUWT7bswswb74OO7Qjpi%2FE7tHHtp%2FbfBfS%2FfcSgQVJluLvuL2lPCqkzGeQNcmvU8yE9EvjL6iV2wKCuyYkLqI%2FpEU0WqsVijv0HWX64wTQur4SHY9Ao79Ja1q%2BJSi7Ty56z5NBIvxbnrsXzEpZsHigwDr%2FaA1EO%2Fp9UniWDcNUzZvcb0H4EPf4KVj48A5403bXtpwXetWYizSx3SCnSOwlZ%2FqAKq9bo4K1qCLnbEXBHn0IADvptuzUDBqXM4OIjJX5ChoEZwm0GQDbx80GFGLr%2BcSEoUAwzfffozgpYyglFGBK3goACRYVLuxJuDo0n3Q06blpbQxxgZU%2F8iCm2eQFNmqEDFtf4fZ85s6thSG%2FHtOsOJuOu2UeO%2FFdqa8x7zYumjm0d9JDRyVCndFarXaGnVWKhkzw%2BcOVGCS3mp5vMXUWwSSPQJb3dCnQg5ML2%2F4sMGOqUBuBNj97qh3KS4YzznIAzZfaEaqmUiQ9XQQGYFsTlIiiNP9cBgqPrI8HEj5KU74cdcsWgGtq0iOWhYnDLTTXsOm097pkMhuiXepLc7EOdhOqzwpmIV215P0UgHxhLHsbvIibHiOUJPu7dGjHHVTO06QRfptSOoywX3%2BTLUAQd5DpyJHxsyDsqB%2BC1urkOkeidjIEUfqLltv6jw%2BTV1uEnuSIpArY6H&X-Amz-Signature=a257cc8e65b2341f6adedf4cacbece72423c0170e36539b101482663a6eff71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
