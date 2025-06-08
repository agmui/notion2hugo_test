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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DROP4GM%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFI9STR9y8bVdx8Tl8NZzf%2BOvmwd2k3jttN7wAvh99vBAiEAx%2BvRzle7F5JYP%2F%2FXxQtR2lPiaye3VeE5aDHejJGcgU0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMmmZcj%2FDbAFvE%2B%2FCrcA9n7LnmioC1i5F77hT%2F4ScLry2gtWzQBffmAr%2FY9E4C%2FcIV0VOCccDxBecLExmshf2iG%2BT7yMNABy1%2FKhI2NWla7uwQr9v4SRZ%2F4IQC4bvqqrnVVragqV4uhd3pMRTacsnnOxNhG0Rv5nwfdywyeQ9vJy%2F22mNQT0jRtH3k8xhY6DgyCWDy3by5fAtt%2B3yI%2FC9X4LyzSYB7mMIpwrYeFaEgnjIh2pQcXpfj2tBntCQQZFlzmdKzYsb4uzjCA2q4XYTdTm%2F7Vn9Y%2FlaspDbnKok%2FgSdk9r84r2Wof5HqHMPgMenhrW3Rk2lK69%2B%2FR4bUHYRElOZronY3hmQ32HDjYCZ5rx1P44YSsyUNaaVhfEUXIhC8Qup3rZuOLX3u0oxxhShwKo02RmpKk50C%2FQvRaO6YfqM6hwxBhBCLylTseROajP4J%2F33H62XtyeP0yyYjO%2FkB3CO9K9ta5LoAsFnENW3ccL%2Bw%2B2yxIza1Arq2H13%2BYtIdgDxJ%2FDJI6m2WjBdqXK5YYbio31U0QSZzApoqCg7zrgyvqCDlqnspZohcohihQXJeWxwii4NMiym9tVz72EY%2F21I8TDl7kocQWK7b%2FumLUVliME5uqmLGHUKJSSmsthTKtMmGuDC2CBlNmMKLOl8IGOqUBV4nvKflSNr%2BVRxpk929DOhZ28xXdggbv%2FMkqfeewwwvs9tmMbr8wXG9qnrf4X37EEYQgNrO2gWB%2FLBC%2FfcmhEauw%2BwRbzYCoedguTaXGhOZdU2oCbs5w13QFwDFAXPWvJ8l8P1l1iPvP%2BusxlY7R27nlq5oFyRGvZqiNHr6TmXloFj%2Bg1uvtfShsn70GgENeKBF%2FyjTayDDbmPzq3sWl%2FO2NrtW%2F&X-Amz-Signature=9da61a57ba6b2050ad1898be0062d83c808341b709e1b33d428b517902e80a3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
