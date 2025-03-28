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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULWOOTB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlQWrShyBi3Ypmv1sJAnoECRT6VBQ5cBQuJUvOl%2FugIAiEA42q%2BUcehhNQ%2BGpIHtPJXS46egdo%2Br0tN%2Be3yfgnMh2Mq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBmrZPX9Cv7Knl2oySrcA%2FjYNxhMyzZHdyroI0YLnByXceqcoS258KNUKSY8I9qd0wOUaqRMbewDHALcdZxFHsDYqkjUtSWIXD%2FAIpbOf2n0mrTxfb6G5fsWPtA1Ip9UZlqjBtm4jASqWAC7g1kb6t9nn%2FLWrnzafSJo0Zp3HjC2BpTBBPCXV2ejFxGwwH%2FcCu9sSfYtHcVvlTeli1PrTLZkRlZd4F6FCgdYtC68EXadhKuctMJeyxb1VU1dfNQB3MCk%2F0iNtgQ%2B1PQquCsSC39d5p51lTbQZAXKKvLc3jNsJf8rpzrfa0pSaB6iKzk4QKNpOIYE7CQGW7ZiUfNN0WmXp2%2BET7u92Eh09VZhDmel8nR4L9sf71D9MF%2BWsy886PXpth0fzseIvCcB4MxHdEAde9ff9KlD64%2BO9khniQRU2i%2FpSoVquQXbTfae569Q%2Fd82Jma2u%2BDZERIoRZFW4qPheag7J5FXSiAcL7zCCJgHjdsyY6hiOkixyPtFRYqXSLUmonVeeJDnkC3UnRVYUEpF7F%2Fy08%2F32rE%2BGl2C2szxIJ7hXb28ELa9i3bJrcDOZ6gDDG5svhARLzkY%2Baivx9pYvlh2RblYo%2FhDI3ehsMENgC3%2FtFexxh3MeHTVo62N3Hhw%2BKC7ynEpd4baMIvSmr8GOqUBd3mGmxo6VFebwixnkSwLNNpJtGCU2A4vbYbwowWDtUd5sJY2%2Fx455lgf%2Bi2xvKNrMV%2BLjVL%2FMAUUbAbVc2AscseOiliG8GlggMRtFOWXyDXjkuFYexsuYZOkdePueKrMbqC2hchjE%2FD4icIIFvbREgYFs5CWbDQs09PTVO113LGnWDCeW6pa8IpyZQxLHdVK3yDiOsiQVYURUmA5f6Gfp%2BU5%2FQk8&X-Amz-Signature=645bcb7c418f23899f297741aec4507b534c77a3d067214ebd5c0aa61d457431&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
