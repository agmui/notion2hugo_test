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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT5COO4N%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRVngsukandUS3A7h%2BbIh1pueHRRhZDiXMzvAWZyPMxAiAveUCeVQ9EzycVbyVvqmIMKR2PzEPp1Hkuok3IlGuBNCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEH2oQy8MUjpybFoSKtwDCDazasFPX2TZemQofxrZpOCtF%2BRIDbol5Yiy7f27GXPJZSiXJ3NAsNsDz163HaYeNSnZzoBpyX9mbootbhecLVpDoYLDIud2A4th%2B0HYP15x0DNp6fQs8baaQmM4MghiQK2e0iDeeVWFY4L52cOT27BvF7h4D9WgTsrXkJpTNNzUTA36xEqI8E5NOJRQ%2BESNyjIg%2FHeqtahbRoJR4snwpzJbcmNYFqaQzU2leQxBmLF8EhBzenNMBtytQHAxmxfT8nHbVsPXE69fFnlbMPutMUXG0HOORxoZIAJm4uQ5Hf%2BYaoCcuE3KZemcBtO6giL9Ig8t8yHB%2B7%2FQEw84NoHNFzrWoNQ7QnOO%2F8cRaBuMTSpSbD14oR8uCPKXT1FCEMWenpDh6ICGLj8%2BnPLWaAfQppZeJCse%2BimtTFeTD%2FwvwJCZBO0bXaqqwoUlRHacV7HPRitK4qp5pAam74vssSFM%2FPGlMMd70KO9%2BXNEpG65L8Zr1XNfOyxbb%2Bk6ybmlA%2BxJhGjf%2F%2By6Isvkgusp0nHxQi4zZuibvt7LpbEpEIJS89XdpfDkRb3LCsPc6bIY6n1fgdTuNIsiFxyOj8ZZnmGsiW%2BZp3wUAg6GflyT7uCK82VDCczo0hbEwvjhQREw3JGyxAY6pgHFNhIyA60hKxDDAi4nGe5wXCuF%2BJ%2Bf3JUc91jKeTuX5F8%2FJ2GeVYbSw9GIpgNfc7fd3Apn%2FlpxpWsoXB%2BUUVy%2BN0USkXBfc%2B91mrURxqvnpSHre6DqauJB2z3t%2BBv3ejgNLaE1%2FSWtXxo9F5Ea0XGZ2MwUPAY0FHmwiulcg1%2F%2BcriXneiYSKc5MsEBpqypm%2Bfth34kiUMGHLTiVFjGlUUyFWl8f%2BmU&X-Amz-Signature=49061553ecb04f637abc67909eae6cfef6125bfe25171f78a2d63e4659de3edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
