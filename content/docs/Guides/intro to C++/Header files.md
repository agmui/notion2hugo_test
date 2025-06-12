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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTKTAO5J%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIGYZxATlb%2BpeLLZCPMHt%2FxyvlubLXuRdp2ix6mQXCuvbAiByFS4aBLCIxhvGnxopyHsIQQkR8dlNBkxPiUEon%2FXUpyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLDeHBmwcedoiTcfIKtwDRIf4BHsKOnhomHKzOFJICN%2BGyhAmWdBPdINTKabBbgrC%2F041FnyjjhI0VZKNHNpezezNKChmn0rnbOMHrnCQ3WNiqBgqwUwVGi08QsPS4UbwVU9e5QeL3XeuyH6P0ICI71Z7AdJYWipH7CHBjXkJ3m%2F8tbkwTOq1tpuukt08MzGYbK5DoZqvIUQIJqhGyTibaZ41g0x2TxTLUHKfno5ZlMnlZt1wraSSWbCA5MJUBIvcwu4Fl6VhHoeseX5EVQC9t10jk7pR0mhLTeJT6T3NHLwA07d1itAsytrxF%2By9QsCvlNHvcn%2FuGCwGbVg%2FcH2OZUd3xGYqu%2F8T%2BBy%2FnQiDCHLgiuU%2BbXVySM2N59MKvajleUkr7JZfjNLyWRjpHp6M1oW3EwfatASCAdbZqkbPzdjzucruEs6bOyED1NIuqw65GMUVObG%2FxRxLtSg3Ou1IHqQj8iaV%2B%2ByN%2BYk4W1y%2Foi7PYJEhLWBPL2halMrwjrcuHQ78zTR8sBbGLzyFsIneM17LfdI2TYMjBKRmlAn%2BQR7bONS%2BYnfVcxOj6EIGPAY%2F%2FXAugEsTWrHxzzAlUbihIguTJ4PzzXEl%2F0GMzymPFAvGPbOqwtT%2FFoiTRKYWf%2BAs%2F5%2FcjGCYuvBZ1Ygw0fGowgY6pgHoo6S8Oq6HMgSeagW8sqf4rv%2FmBdqbv%2BJPJG89KdYzIYMVab5kjMv7Ed8uQaXIUxlNY99yAJ%2Bsqypyat%2F8E5dCNkEskzOfMnYsONZGvRI7s73AVHSt6%2BtsaQjtQ1w%2BvBf4AwRxlXMYW2jfZLbglfZsyJ97JwmmGT8Rx%2BSbX%2FJxBjnjNpxN2N%2F1%2FsZbheg8FIr0kOl4gafoUC6Ve8I42zEJy5FMuIgZ&X-Amz-Signature=ddaa15fa8a0d3a14fc9d5198ece642b49a4de2151880e3a6bf39931b0926f2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
