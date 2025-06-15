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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKZKH4FC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIADg1GDtpqNKvDPPtDn3p89UgtUofLwNKyenCFirt1ZUAiAWe4kh92VmuIu8bl6ak1lCxCQ1W8y%2BbU8shdNgxWvP6yr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMD916LnPAg0DyuSQAKtwDwntc2tXxdPeVXJ40l6aAGetQRH14rlw2q%2FyiGN99QAPPBDvHSM%2BKtZUsc14D9hmY2HRXg0pjxG4iXUuLzjRuxzZ%2BrSLil%2FW2xS8Xk3i%2BXvnb8vQEtUTj%2FC3ACtQMdipI%2FfYuuHAXE1UDysFn%2FqQW7WzpMN%2BbeslH8e4g9rR5yZisZ6Jk25dtYICb%2BtyXH%2FiIyRp2D134zivDfo%2FhBnWvWBVpXr7p2XU0qAHzmoi2evYJ1SZlJoX7A%2FL9b569alHm22kAMLQz7adKe6KD%2FzN00PN1Dlnn8qyZNFBIz%2BFEu%2F64rj6lSBVUGNYuI45VwSrY1RNyf3eFpy5JpE2i6A0ZJRnFHAwEvgo3rQfWFHr8my%2FSpoBgnBM0NWVvE%2FWyfnWE85YEpZFM7B5yvo0txB9QjHUHQrXmyiBfX45Yl7zFy08Wv1FkfutHMM8Yalb39EehXxGcaKdwpiDkKHWaF3CiobDTMaVrTUX6mfQTR7c8O9l8%2F2e7P90d2spXUwVYsJDlMI4wmTOGJCN3txxIzfrBAVKU%2B9fdC5LvaO%2Fmx%2Fn2RXihzwNMTIAj7ep3Y8EreOnLDmolctIFogw7A4dc%2FOsUPehxQxr4t83l196xkP8rHKd55mr7DutWCjajNfQwsc68wgY6pgHvSIRIgL1xU7YJh%2BR92VAyMb5KDTJxLIVngEXuSerdmdCqJQfPc4B2nXYx3wapWG%2F78X4MJen9ORWBTnVYSXyqFQUQRdnIToaS6zH4ulsXRpLOmb14EV83t5OpNJTIOZeWiRzxkFqvhmQ%2B%2BZCqN854Z6fd%2BdNyosRC3S1%2FMkhtGeciVK6CIBJbHWrZyCORM8VliAr4ek8mUNTRrsi8EnVMOjnAiYeJ&X-Amz-Signature=79d5a4491ef9f7c1cf241b3786e8ddc77ff22c286f0bff556957a8a0ffbe1cef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
