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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6JLTNJS%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwUlfZiD0y6Hmm%2BwxNPosDMP2jn76Yz6SfBiooAvC3jwIhAPVUU6MzOjE9NoUui3E1y9ElEq9S%2Fx3F7xLLt8dt%2FUGUKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPuPHWV5CB%2BzsoUB8q3ANY%2B8RnFEuKUoKTMP%2FDpo0mDP1z1Bu0xURWV0L1UfynDA%2Bj5La3T5gbRXzOEN9b%2FA45woS993e%2F%2FMPnNI6AsCRuuwKTq2lYbCJi6yiWjZJ7LJZNcCBhawHjZ7HM3PvWwHRuYkITMB%2BnKOPoadKboBIwWhZPT8m%2BFgECS%2BFuMrZU3PS8LUzvTB01MEzpodmNyyXGdUAq04uNvI2A%2BbAC8ECv6vVrfsAxqF0J2Zd4%2F8NGvC2zIaaTYOEBd8w8Mea6qORFJFEmRFRiFC7cMY2AxuOoyRN0ZJbMpAFFVmfn2p57DiJE7r3ABNikLlqNWdT0E4q9TDYur6F2JOFATbwFf%2FqFpki8rrLzaEE18D2xdcIaRjmGp%2Ba0QePROviyXIKI3OPz%2BdxU%2BcD7bpsa3XGOXr8owkVZ%2FxF%2FOE1bqP55kAyOHqpAmnsy55%2B82G1GYni%2Fph4fDQU5YqfIiLBkWBNBD0GpRyG0%2Fae4XZU%2BD23GOze8VMlkzY61NEGk%2B78edSIrhpbhd1n62nLd5XSzFYnVf84DEAMndJm2u2%2BtSzcpZJS%2F%2FBELKIexWIyh%2Buxx5uwDJc96QnUPgvqdOYOfgRFev93hcaZmQylG%2BZtItX%2BNPEwUTiCmrbv%2FGwK8F87%2FHDCM%2FPrDBjqkAdvDb%2Fgp%2FvH%2FGPndWIGWT%2BqdvBFURfT4SuLsMEuJ21jS0MBLXX%2FWGXuigaUWGOskWaT%2B0dqPWc%2F8ycd008YTQRcidbjtHH0ZDFEfmMiyICYV5FsDDzS1vkHWPJgyZGVJZjYxUFPZaAVAoTflC6R83bx7Kh26PpCc5B4bNI7SAzrzb1X1pLO6az746cUV7FaZby16TEf6yK30ul%2FUKt5gKtdsEftx&X-Amz-Signature=bc6caee8caf781ebb6f822fd3075e1f6fa40dc8d47722ba17dda841be7ee7398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
