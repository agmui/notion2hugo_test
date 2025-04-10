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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THNKZER%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQC8FhFyyM1TYs0Y7Cb3tT2GBWJ98ErQf5oFJKMCfWM8SgIgIdtegpeuYYQ3c3NwvYzYFU%2FhGQGViXXTUHdO%2Bjv7wfgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeTrNtppNXpGQAl1CrcAxfdBb79%2Bexgzwvloz0MMhH1xwL%2FdUjvZ7SLDxbxLzIbmkynAp6lhwdgC5fL7IZ70r%2BVGtycGqVCidv81CKeRiImby%2F6OZWx0SwqoDtS0Zlv6K7Q2HdiYx8lXQQO%2F89NuC1yvy0WMP7RMw0NRMtl8Z2vCH1ToyGpPkwAmLVz9xJujjeo9i%2BLW0nDjYc8RjcXlWCNHSjyOwEheysEIe9sK85VoI8gOYNAdeP1FwmZW3bl3P3w9gUT3J9fVDGSeIprzvo4nttI2GsSBYgJA8vpTYbQQM543aW7OcbDTM%2FV%2BnvVksd8qN3sB4BWL9wws%2BCilnI652CMBnGDMIpUAkDquPUCce451dT9Ffwu7YWQ96yWbLSaYyvke4n469vvDU44w%2FduEdEh22zoASBHn%2F5IptU%2Fiu2G1dZQ7hZWMDxdFAM%2BBC9XdDUV7vrhUnAl2ptWbawCPGwuNq%2BZyltLUWj676LxMlUYdqqNBgt6w%2BPV4vyBSzfaWaxoBywaqnqklKnpAiYskxJgR8suZIOCoIc9TuA2pp0THq08BjuRx0Qw3dowF1PAlFfExMO%2FpptFA3WC6%2FS8pMoV57oem55L%2F8CDsV95g4A9QK556lIpr7UJIPRNWXNNdpJF8dhjbNe8ML%2BH4L8GOqUBItlw7cECaQITVSM93h186fmzsAPFT%2BKDdYnbPufUC34pqgkZgON4cVmpo2UMN7v9fLGSTiVtpgsiOYEqdCG2rds2PcDvRnb6XYeIAx2qSHaZfl696ndRv0yF3yVt%2Bx%2FAQK0zpNMYXU4cpeT5ANRkNXHGVzDKjfBCSCURCPwkjlij1yIo%2BOSQT6Z8ezWH9CueC3Z%2BAaVBciCHBgzgPEr3fBUhrk0Y&X-Amz-Signature=721544163ac509990f3089312bfc9f34c55964d54fc7f3db735266a27208267c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
