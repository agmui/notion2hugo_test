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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425H6TNE%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIEpj5PEyUykkDsBoWdnzFuxkRIsiaxOKS5yBPlpX6pB5AiBMddes%2BqKWoXsirQopp%2FMWFPUP5Zw9X375XnBNCpZveir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMP%2FGjVaVqadcNYsF3KtwD6b8pwodbyFk720lHuef%2BJBtYuCUvJbKK2X4%2FG9I%2BtZmaft3DNSi%2BnEGW7weaI%2BpsBpvW0h%2BzuG6AxQVWc7DEvjAOitHoLfUR7qSQLR4XwtdjVd5Sgpa1GX%2FWDI3V7pC3imgBohJRWhGw%2F2ZJGGsLhSCP74fKKWfrzZGKSUMkoQ8sa8%2BaWpw3iSPcPKpUQMZbTl1v9yT3TeW%2BuuL3WkzUYnzVZ04AWhc21Fg0Wx5AMBfEW7PsQI63locNIvftRdtmKQ7%2FqvLHXBBobR0pf%2FtHX2VkoxOui2KWVFKjX5M7jfk%2BNnlLAUNshjub4ExBRJSm3ePo3af3uDEUO9NSZH3gfvMgv73f084SNyhjlCE%2BOh4ukel0TcOvPgWnqEf2pLpl3TetD8kRIErsV5qyDOR%2BBs0xGkxpLtvebx9VoZQNr32Bu44abpxadzOHTgse3%2B50mlu1TpwaygovprpJq52s7JNypuSsZCCStgBjGhY5kvnIlknHLfW3uIT8O%2FulyhPix6mQ5PVBnFVWb%2ByNWgBOZEkjklviizcnVj%2BmSGDeluoktktE3X7UE9uF7GWV%2FasAG154o6bcX%2BH2pnhXqxmKzDJmlKc8sS4n9HmW0r8YWn4COReXHwzG75kEgJIw0bLpwgY6pgGfnl%2Fn0YUbL56BnhN1Hx19pZkSDAGbKjsXEoDZEV3h%2Bud7iL5ExyaObFiLe%2BGW1AHkX5i6Ds8fcA1Pmfy0FQ8Dirz%2BK1ttSf9s04jJ%2FmxQXzvrAn1v%2FM%2BEYPzD4PwVFUYrcx46lMV9P8tjTxgBpkHIEb2mLefAA95%2B8YqMqy1mqm5VL4AS%2F9qUE31cVEX2GJAyDOPSVewPc%2BIX3Adh1vvwTU%2FKRCcp&X-Amz-Signature=9012b173253615590a107df758d9792e7472166d04f091cb980193df3572b860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
